function Bot() {
  return (
    <>
      <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
      <script>
        {
          void window.botpressWebChat.init({
            composerPlaceholder: "Chat with Hiperbárica Bot",
            botConversationDescription:
              "¡Hola! Soy un bot de Hiperbárica del Sur Perú y estoy aquí para ayudarlo a navegar por nuestro sitio web y responder cualquier pregunta que pueda tener. Si no tengo una respuesta a su pregunta, le recomendaré que hable con uno de nuestros especialistas a través de una cita o por Whatsapp. ¡No dude en hacerme cualquier pregunta que pueda tener!",
            botId: "8d7b2c7e-eb26-4c8e-9d22-d4a464f8eb4e",
            hostUrl: "https://cdn.botpress.cloud/webchat/v0",
            messagingUrl: "https://messaging.botpress.cloud",
            clientId: "8d7b2c7e-eb26-4c8e-9d22-d4a464f8eb4e",
            botName: "Hiperbárica Bot",
            avatarUrl: "https://hiperbaricadelsurperu.com/logo.svg",
            phoneNumber: "+51992569407",
            emailAddress:
              "contacto@hiperbaricadelsurperu.com?subject=Test&body=Test",
            website: "https://hiperbaricadelsurperu.com/",
            stylesheet: "https://hiperbaricadelsurperu.com/bot.css",
            useSessionStorage: true,
            showBotInfoPage: true,
            enableConversationDeletion: true,
            className: "webchatIframe",
            containerWidth: "100%25",
            layoutWidth: "100%25",
            hideWidget: true,
            showCloseButton: false,
            disableAnimations: true,
            closeOnEscape: false,
            showConversationsButton: false,
            enableTranscriptDownload: false,
          })
        }
        {
          void window.botpressWebChat.onEvent(
            function () {
              window.botpressWebChat.sendEvent({ type: "show" });
            },
            ["LIFECYCLE.LOADED"]
          )
        }
      </script>
    </>
  );
}

export default Bot;
