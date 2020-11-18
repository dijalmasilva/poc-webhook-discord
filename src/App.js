import "./App.css";
import React from "react";
import discord from "webhook-discord";

function App() {
  const [Hook, setHook] = React.useState(new discord.Webhook(""));
  const [discordUrl, setDiscordUrl] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("#ffffff");
  const [name, setName] = React.useState("todo");
  const [avatarUrl, setAvatarUlr] = React.useState("");

  React.useEffect(() => {
    setHook(new discord.Webhook(discordUrl));
  }, [discordUrl]);

  const sendMessageSuccess = () => {
    Hook.success("Mensagem de sucesso!", "Esta eh uma mensagem de teste.");
  };

  const sendMessageError = () => {
    Hook.err("Mensagem de error!", "Esta eh uma mensagem de teste.");
  };

  const sendMessageInfo = () => {
    Hook.info("Mensagem de informação!", "Esta eh uma mensagem de teste.");
  };

  const sendMessageWarn = () => {
    Hook.warn("Mensagem de alerta!", "Esta eh uma mensagem de teste.");
  };

  const sendMessage = () => {
    const msg = new discord.MessageBuilder();

    if (name) {
      msg.setName(name);
    }

    if (message) {
      msg.setDescription(message);
    }

    if (avatarUrl) {
      msg.setThumbnail(avatarUrl);
    }

    if (color) {
      msg.setColor(color);
    }

    Hook.send(msg);
  };

  return (
    <div className="App">
      <h5>Webhook URL:</h5>
      <input
        type="text"
        placeholder="Cole aqui a url do webhook"
        value={discordUrl}
        onPaste={(e) => setDiscordUrl(e.clipboardData.getData("Text"))}
      />
      <br />
      <br />
      <button disabled={!discordUrl} onClick={sendMessageSuccess}>
        Teste mensagem de sucesso!
      </button>
      <br />
      <button disabled={!discordUrl} onClick={sendMessageWarn}>
        Teste mensagem de alerta!
      </button>
      <br />
      <button disabled={!discordUrl} onClick={sendMessageInfo}>
        Teste mensagem de info!
      </button>
      <br />
      <button disabled={!discordUrl} onClick={sendMessageError}>
        Teste mensagem de erro!
      </button>
      <br />
      <br />
      <h5>Mensagem:</h5>
      <textarea
        disabled={!discordUrl}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <br />
      <h5>Nome:</h5>
      <input
        disabled={!discordUrl}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <h5>Cor:</h5>
      <input
        disabled={!discordUrl}
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <br />
      <h5>Avatar url:</h5>
      <input
        disabled={!discordUrl}
        type="text"
        value={avatarUrl}
        onPaste={(e) => setAvatarUlr(e.clipboardData.getData("Text"))}
      />
      <br />
      <button disabled={!discordUrl} onClick={sendMessage}>
        Enviar mensagem personalizada
      </button>
    </div>
  );
}

export default App;
