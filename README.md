# poc-messenger-api
 
MESSENGER API

![](RackMultipart20210610-4-y12aay_html_95feaf3271aa8d18.png)

Requerimientos

- Facebook Page
- Facebook Developer Account
- Facebook App
  - Create App
    - App purpose: Clientes
 Importante leer (se habla de tratamiento de datos y más) [https://developers.facebook.com/terms/#serviceprovidersandtechproviders](https://developers.facebook.com/terms/#serviceprovidersandtechproviders)
    - En settings podemos visualizar nuestro APP\_ID y APP\_SECRET

Note: La app empieza en modo desarrollo por lo que solo se podrá mensajes con personas conectadas a la aplicación (administradores, developers, testers).

Agregar y configurar nuevo producto (Messenger) en FB App recién creado

- Agregar pagina fb
- generar token (PAGE\_ACCESS\_TOKEN)

Podemos obtener PAGE\_ID utilizando el PAGE\_ACCESS\_TOKEN en la tool de [Acces](https://developers.facebook.com/tools/debug/accesstoken/)

[Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)

Recopilar los siguientes valores:

- PAGE\_ID
- APP\_ID
- PAGE\_ACCESS\_TOKEN
- APP\_SECRET

WEBHOOK requirements

Requerimientos

- HTTPS support, Self-signed certificates are not supported
- Valid SSL
- Open port to get and post

PSID: id qué se le asigna a cada persona por cada conversación iniciada con una página de facebook

Necesitamos subscribir nuestro endpoint webhook en la configuración del facebook App

Necesitamos agregar nuestro TOKEN\_VERIFY en la suscripción

Ambos valores son inputs de formulario.

Docs complementarias

[https://developers.facebook.com/docs/messenger-platform/send-messages/templates](https://developers.facebook.com/docs/messenger-platform/send-messages/templates)

[https://developers.facebook.com/docs/messenger-platform/webhook](https://developers.facebook.com/docs/messenger-platform/webhook)

[https://developers.facebook.com/docs/messenger-platform/send-messages](https://developers.facebook.com/docs/messenger-platform/send-messages)
