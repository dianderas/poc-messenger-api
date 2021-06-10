require("dotenv").config();
const e = require("express");
const request = require("request");

// Handles messages events
exports.handleMessage = function (senderPSID, receivedMessage) {
  let response;

  // Check if the message contains text
  if (receivedMessage.text) {
    // Create the payload for a basic text message
    response = {
      text: `You sent the message: "${receivedMessage.text}". Now send me an image!`,
    };
  } else if (receivedMessage.attachments) {
    // Gets the Url of the message attachment
    let attachmentURL = receivedMessage.attachments[0].payload.url;
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Is this the right picture?",
              subtitle: "Tap a button to answer.",
              image_url: attachmentURL,
              buttons: [
                {
                  type: "postback",
                  title: "Yes!",
                  payload: "yes",
                },
                {
                  type: "postback",
                  title: "No!",
                  payload: "no",
                },
              ],
            },
          ],
        },
      },
    };
  }

  // Sends the response message
  callSendAPI(senderPSID, response);
};

// Handles messaging_postbacks events
exports.handlePostback = function (senderPaid, receivedPostback) {
  let response;

  //Get the payload for the postback
  let payload = receivedPostback.payload;

  // Set the response based on the postback payload
  if (payload === "yes") {
    response = { text: "Thanks!" };
  } else if (payload === "no") {
    response = { text: "Oops, try sending another image." };
  }
  // Send the message to acknowledge the postback
  callSendAPI(senderPaid, response);
};

// Sends response message via the Send Api
const callSendAPI = function callSendAPI(senderPSID, response) {
  // Construct the message body
  let requestBody = {
    recipient: {
      id: senderPSID,
    },
    message: response,
  };

  // Send the HTTP request to Messenger Platform
  request(
    {
      uri: "https://graph.facebook.com/v2.6/me/messages",
      qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
      method: "POST",
      json: requestBody,
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
};

exports.callSendAPI = callSendAPI;
