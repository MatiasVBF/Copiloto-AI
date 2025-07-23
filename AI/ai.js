<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Copiloto de Perguntas</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    input, button { margin-top: 10px; padding: 10px; width: 100%; }
    #resposta { margin-top: 20px; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Faça sua pergunta:</h2>
  <input type="text" id="pergunta" placeholder="Ex: Qual é a capital do Brasil?">
  <button onclick="responder()">Perguntar</button>
  <div id="resposta"></div>

  <script>
    function responder() {
      const pergunta = document.getElementById("pergunta").value.toLowerCase();
      let resposta;

      // Base simples de perguntas e respostas
      if (pergunta.includes("capital do brasil")) {
        resposta = "A capital do Brasil é Brasília.";
      } else if (pergunta.includes("quem descobriu o brasil")) {
        resposta = "O Brasil foi 'descoberto' por Pedro Álvares Cabral em 1500.";
      } else if (pergunta.includes("copiloto de ai")) {
        resposta = "Sou um exemplo simples, mas posso te ajudar com perguntas básicas!";
      } else {
        resposta = "Desculpe, não sei a resposta para essa pergunta ainda.";
      }

      document.getElementById("resposta").innerText = resposta;
    }
  </script>
</body>
</html>
