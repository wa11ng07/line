const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 8080;

const CHANNEL_ACCESS_TOKEN =
  "R9CF24AcZDZcG/4+qxzZO278clM304tIShantm69mhNGYfcE/SyKLkMPVXuBitwQlpAZT67uM+w9atv0Si5HtBlWZaTj2Qmp7cF8pnbnWBli41ES2sWE0ockLPoe5bitZa0/80Pu9bLYMph6tgtNPAdB04t89/1O/w1cDnyilFU=";

app.use(bodyParser.json());

app.post("/webhook", async (req, res) => {
  const events = req.body.events;

  for (const event of events) {
    if (event.type === "message" && event.message.type === "text") {
      const replyToken = event.replyToken;
      const userMessage = event.message.text;
      const userId = event.source.userId;

      // ✅ 印出收到的訊息
      console.log(`📩 來自 ${userId} 的訊息：${userMessage}`);

      await axios.post(
        "https://api.line.me/v2/bot/message/reply",
        {
          replyToken: replyToken,
          messages: [
            {
              type: "text",
              text: `你說了：「${userMessage}」`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
          },
        }
      );
    }
  }

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`✅ Listening on port ${PORT}`);
});
