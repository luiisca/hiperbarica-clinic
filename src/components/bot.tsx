"use client";

import React, { useEffect } from "react";

function Bot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        botId: "8d7b2c7e-eb26-4c8e-9d22-d4a464f8eb4e",
        hostUrl: "https://cdn.botpress.cloud/webchat/v0",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "8d7b2c7e-eb26-4c8e-9d22-d4a464f8eb4e",
        stylesheet: "https://hiperbaricadelsurperu.com/bot.css",
        botName: "Hiperbárica Bot",
        avatarUrl: "https://hiperbaricadelsurperu.com/logo.svg",
        botConversationDescription:
          "¡Hola! Soy un bot de Hiperbárica del Sur Perú y estoy aquí para ayudarlo a navegar por nuestro sitio web y responder cualquier pregunta que pueda tener. Si no tengo una respuesta a su pregunta, le recomendaré que hable con uno de nuestros especialistas a través de una cita o por Whatsapp. ¡No dude en hacerme cualquier pregunta que pueda tener!",
        phoneNumber: "+51992569407",
        emailAddress: "contacto@hiperbaricadelsurperu.com",
        useSessionStorage: true,
        showBotInfoPage: true,
        enableConversationDeletion: true,
        showConversationsButton: false,
        enableTranscriptDownload: false,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
}

export default Bot;
