﻿# poc-messenger-api

MESSENGER API

Requerimientos
Facebook Page
Facebook Developer Account
Facebook App
Create App
App purpose: Clientes
Importante leer (se habla de tratamiento de datos y más) https://developers.facebook.com/terms/#serviceprovidersandtechproviders
En settings podemos visualizar nuestro APP_ID y APP_SECRET

Note: La app empieza en modo desarrollo por lo que solo se podrá mensajes con personas conectadas a la aplicación (administradores, developers, testers).

Agregar y configurar nuevo producto (Messenger) en FB App recién creado
Agregar pagina fb 
generar token (PAGE_ACCESS_TOKEN)

Podemos obtener PAGE_ID utilizando el PAGE_ACCESS_TOKEN en la tool de Acces 
Token Debugger

Recopilar los siguientes valores:
PAGE_ID
APP_ID
PAGE_ACCESS_TOKEN
APP_SECRET

WEBHOOK requirements

Requerimientos
HTTPS support, Self-signed certificates are not supported
Valid SSL
Open port to get and post

PSID: id qué se le asigna a cada persona por cada conversación iniciada con una página de facebook

Docs complementarias
https://developers.facebook.com/docs/messenger-platform/send-messages/templates
https://developers.facebook.com/docs/messenger-platform/webhook
