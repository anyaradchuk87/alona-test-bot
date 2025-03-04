import TeleBot from "telebot";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("text", (msg) => msg.reply.text(msg.text));
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, "Привіт! Це твоя гра 🚀", {
//     reply_markup: {
//       inline_keyboard: [
//         [{ text: "📋 Подивитися меню", callback_data: "menu" }],
//         [{ text: "ℹ️ Пароль", callback_data: "info" }],
//         [{ text: "⏳ Таймер 30 сек", callback_data: "timer" }],
//         [
//           {
//             text: "Запустити гру",
//             web_app: {
//               url: `${process.env.SERVER_URL}/game`, // Приклад URL для гри
//             },
//           },
//         ],
//       ],
//     },
//   });
// });

// // Обробка натискання кнопок
// bot.on("callback_query", (query) => {
//   const chatId = query.message.chat.id;

//   if (query.data === "menu") {
//     bot.sendMessage(chatId, "Тут буде ваше меню 🍽️");
//   } else if (query.data === "info") {
//     bot.sendMessage(chatId, "84.67.106.83");
//   } else if (query.data === "timer") {
//     bot.sendMessage(chatId, "Таймер запущено! Зачекайте 30 секунд... ⏳");
//     setTimeout(() => {
//       bot.sendMessage(chatId, "⏰ Час вийшов! 🎉");
//     }, 30000); // 30 секунд
//   }

//   bot.answerCallbackQuery(query.id); // Закриваємо запит
// });

export default bot;
