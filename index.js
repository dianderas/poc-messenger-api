"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const { handleMessage, handlePostback, callSendAPI } = require("./messages");

const app = express().use(bodyParser.json());

// Accepts POST requests at /webhook endpoint
app.post("/webhook", (req, res) => {
  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === "page") {
    // Iterate over each entry - there may be multiple if batched
    body.entry.forEach((entry) => {
      // Get the webhook event. entry.messaging is an array, but
      // will only even contain one event, so we get index 0
      console.log("messagen::", entry.messaging);
      let webhookEvent = entry.messaging[0];
      console.log(webhookEvent);

      //Get the sender PSID
      let senderPSID = webhookEvent.sender.id;
      console.log("Sender PSID: " + senderPSID);

      // Check if the event is message or postback and
      // pass the event to the appropiate handler function
      if (webhookEvent.message) {
        handleMessage(senderPSID, webhookEvent.message);
      } else if (webhookEvent.postback) {
        handlePostback(senderPSID, webhookEvent.postback);
      }
    });

    // Return a '200 OK' response to all events
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});

// Accepts GET requests at the /webhook endpoint
app.get("/webhook", (req, res) => {
  let VERIFY_TOKEN = "RANDOMVERIFYTOKEN";

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBJOOK_VERIFIED");
      res.status(200).send(challenge);
    }
  } else {
    // Responds with '403 Forbidden' if verify tokens do not match
    res.sendStatus(403);
  }
});

app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));
