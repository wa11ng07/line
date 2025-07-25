// const express = require("express");
// const bodyParser = require("body-parser");
// const axios = require("axios");

// const app = express();
// const PORT = 8090;

// const CHANNEL_ACCESS_TOKEN =
// "R9CF24AcZDZcG/4+qxzZO278clM304tIShantm69mhNGYfcE/SyKLkMPVXuBitwQlpAZT67uM+w9atv0Si5HtBlWZaTj2Qmp7cF8pnbnWBli41ES2sWE0ockLPoe5bitZa0/80Pu9bLYMph6tgtNPAdB04t89/1O/w1cDnyilFU="

// app.use(bodyParser.json());

// app.post("/webhook", async (req, res) => {
//   const events = req.body.events;

//   for (const event of events) {
//     if (event.type === "message" && event.message.type === "text") {
//       const replyToken = event.replyToken;
//       const userMessage = event.message.text;
//       const userId = event.source.userId;

//       // ✅ 印出收到的訊息
//       console.log(`📩 來自 ${userId} 的訊息：${userMessage}`);
//     }
//   }

//       // await axios.post(
//       //   "https://api.line.me/v2/bot/message/reply",
// //         {
// //           replyToken: replyToken,
// //           messages: [
// //             {
// //               type: "text",
// //               text: `你說了：「${userMessage}」`,
// //             },
// //           ],
// //         },
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
// //           },
// //         }
// //       );
// //     }
// //   }

// //   res.sendStatus(200);
// });

// app.listen(PORT, () => {
//   console.log(`✅ Listening on port ${PORT}`);
// });









































































































// const express = require("express");
// const bodyParser = require("body-parser");
// const axios = require("axios");
// const fs = require("fs").promises;
// const path = require("path");

// const app = express();
// const PORT = 8090;
// const CHANNEL_ACCESS_TOKEN =
//   "R9CF24AcZDZcG/4+qxzZO278clM304tIShantm69mhNGYfcE/SyKLkMPVXuBitwQlpAZT67uM+w9atv0Si5HtBlWZaTj2Qmp7cF8pnbnWBli41ES2sWE0ockLPoe5bitZa0/80Pu9bLYMph6tgtNPAdB04t89/1O/w1cDnyilFU=";

// const LOG_FILE = "line_messages.json";

// app.use(bodyParser.json());

// // 取得用戶資料的函數
// async function getUserProfile(userId) {
//   try {
//     const response = await axios.get(
//       `https://api.line.me/v2/bot/profile/${userId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
//         },
//       }
//     );
//     return response.data.displayName;
//   } catch (error) {
//     console.error("❌ 無法取得用戶資料:", error.message);
//     return "未知用戶";
//   }
// }

// // 儲存訊息到 JSON 檔案的函數
// async function saveMessageToFile(timestamp, userName, userId, message) {
//   try {
//     // 檢查檔案是否存在，如果不存在則建立空陣列
//     let messages = [];
//     try {
//       const fileContent = await fs.readFile(LOG_FILE, "utf8");
//       messages = JSON.parse(fileContent);
//     } catch (error) {
//       // 檔案不存在或格式錯誤，使用空陣列
//       console.log("📝 建立新的訊息記錄檔案");
//     }

//     // 新增訊息記錄
//     const messageRecord = {
//       timestamp: timestamp,
//       userName: userName,
//       userId: userId,
//       message: message,
//     };

//     messages.push(messageRecord);

//     // 寫入檔案
//     await fs.writeFile(LOG_FILE, JSON.stringify(messages, null, 2), "utf8");
//     console.log("✅ 訊息已儲存到檔案");
//   } catch (error) {
//     console.error("❌ 儲存訊息失敗:", error.message);
//   }
// }

// app.post("/webhook", async (req, res) => {
//   const events = req.body.events;
  
//   for (const event of events) {
//     if (event.type === "message" && event.message.type === "text") {
//       const replyToken = event.replyToken;
//       const userMessage = event.message.text;
//       const userId = event.source.userId;
      
//       // 取得當前時間
//       const timestamp = new Date().toLocaleString("zh-TW", {
//         timeZone: "Asia/Taipei",
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       });

//       // 取得用戶名稱
//       const userName = await getUserProfile(userId);

//       // ✅ 印出收到的訊息
//       console.log(`📩 ${timestamp} 來自 ${userName} (${userId}) 的訊息：${userMessage}`);

//       // 儲存到檔案
//       await saveMessageToFile(timestamp, userName, userId, userMessage);

//       // 如果需要回覆訊息，可以取消下面的註解
//       // await axios.post(
//       //   "https://api.line.me/v2/bot/message/reply",
//       //   {
//       //     replyToken: replyToken,
//       //     messages: [
//       //       {
//       //         type: "text",
//       //         text: `你說了：「${userMessage}」`,
//       //       },
//       //     ],
//       //   },
//       //   {
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //       Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
//       //     },
//       //   }
//       // );
//     }
//   }
  
//   res.sendStatus(200);
// });

// app.listen(PORT, () => {
//   console.log(`✅ Listening on port ${PORT}`);
//   console.log(`📄 訊息將儲存到：${path.resolve(LOG_FILE)}`);
// });















































































































const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = 8090;
const CHANNEL_ACCESS_TOKEN =
  "R9CF24AcZDZcG/4+qxzZO278clM304tIShantm69mhNGYfcE/SyKLkMPVXuBitwQlpAZT67uM+w9atv0Si5HtBlWZaTj2Qmp7cF8pnbnWBli41ES2sWE0ockLPoe5bitZa0/80Pu9bLYMph6tgtNPAdB04t89/1O/w1cDnyilFU=";

const LOG_FILE = "line_messages.json";

app.use(bodyParser.json());

// 取得用戶資料的函數（支援群組和一對一聊天）
async function getUserProfile(userId, event) {
  try {
    // 先嘗試取得一般用戶資料（適用於一對一聊天或已授權的用戶）
    const response = await axios.get(
      `https://api.line.me/v2/bot/profile/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data.displayName;
  } catch (error) {
    // 如果是群組聊天，嘗試取得群組成員資料
    if (event.source.type === "group") {
      try {
        const groupId = event.source.groupId;
        const groupMemberResponse = await axios.get(
          `https://api.line.me/v2/bot/group/${groupId}/member/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
            },
          }
        );
        return groupMemberResponse.data.displayName;
      } catch (groupError) {
        console.error("❌ 無法取得群組成員資料:", groupError.message);
        return `用戶-${userId.slice(-6)}`; // 顯示用戶ID後6碼作為識別
      }
    }
    // 如果是多人聊天室，嘗試取得聊天室成員資料
    else if (event.source.type === "room") {
      try {
        const roomId = event.source.roomId;
        const roomMemberResponse = await axios.get(
          `https://api.line.me/v2/bot/room/${roomId}/member/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
            },
          }
        );
        return roomMemberResponse.data.displayName;
      } catch (roomError) {
        console.error("❌ 無法取得聊天室成員資料:", roomError.message);
        return `用戶-${userId.slice(-6)}`;
      }
    }
    
    console.error("❌ 無法取得用戶資料:", error.message);
    return `用戶-${userId.slice(-6)}`;
  }
}

// 儲存訊息到 JSON 檔案的函數
async function saveMessageToFile(timestamp, userName, userId, message, chatType, chatId = null) {
  try {
    // 檢查檔案是否存在，如果不存在則建立空陣列
    let messages = [];
    try {
      const fileContent = await fs.readFile(LOG_FILE, "utf8");
      messages = JSON.parse(fileContent);
    } catch (error) {
      // 檔案不存在或格式錯誤，使用空陣列
      console.log("📝 建立新的訊息記錄檔案");
    }

    // 新增訊息記錄
    const messageRecord = {
      timestamp: timestamp,
      userName: userName,
      userId: userId,
      message: message,
      chatType: chatType, // "user" (一對一), "group" (群組), "room" (聊天室)
      chatId: chatId, // 群組ID或聊天室ID（一對一聊天時為null）
    };

    messages.push(messageRecord);

    // 寫入檔案
    await fs.writeFile(LOG_FILE, JSON.stringify(messages, null, 2), "utf8");
    console.log("✅ 訊息已儲存到檔案");
  } catch (error) {
    console.error("❌ 儲存訊息失敗:", error.message);
  }
}

app.post("/webhook", async (req, res) => {
  const events = req.body.events;
  
  for (const event of events) {
    if (event.type === "message" && event.message.type === "text") {
      const replyToken = event.replyToken;
      const userMessage = event.message.text;
      const userId = event.source.userId;
      
      // 取得當前時間
      const timestamp = new Date().toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      // 取得用戶名稱（傳入完整的 event 物件）
      const userName = await getUserProfile(userId, event);

      // 判斷聊天類型和取得聊天ID
      let chatType = "user"; // 預設為一對一聊天
      let chatId = null;
      let chatInfo = "";

      if (event.source.type === "group") {
        chatType = "group";
        chatId = event.source.groupId;
        chatInfo = ` [群組: ${chatId.slice(-6)}]`;
      } else if (event.source.type === "room") {
        chatType = "room";
        chatId = event.source.roomId;
        chatInfo = ` [聊天室: ${chatId.slice(-6)}]`;
      }

      // ✅ 印出收到的訊息
      console.log(`📩 ${timestamp} 來自 ${userName} (${userId})${chatInfo} 的訊息：${userMessage}`);

      // 儲存到檔案
      await saveMessageToFile(timestamp, userName, userId, userMessage, chatType, chatId);

      // 如果需要回覆訊息，可以取消下面的註解
      // await axios.post(
      //   "https://api.line.me/v2/bot/message/reply",
      //   {
      //     replyToken: replyToken,
      //     messages: [
      //       {
      //         type: "text",
      //         text: `你說了：「${userMessage}」`,
      //       },
      //     ],
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
      //     },
      //   }
      // );
    }
  }
  
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`✅ Listening on port ${PORT}`);
  console.log(`📄 訊息將儲存到：${path.resolve(LOG_FILE)}`);
});