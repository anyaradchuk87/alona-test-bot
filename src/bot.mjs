import TeleBot from "telebot";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("text", (msg) => msg.reply.text(msg.text));
// bot.on("/start", (msg) => {
//   const chatId = msg.chat.id;

//   // Створюємо inline меню
//   const menu = {
//     reply_markup: {
//       inline_keyboard: [
//         [{ text: "📋 Переглянути меню", callback_data: "menu" }],
//         [{ text: "ℹ️ Дізнатися більше", callback_data: "info" }],
//         [{ text: "⏳ Запустити таймер", callback_data: "timer" }],
//       ],
//     },
//   };

//   // Відправляємо повідомлення з меню
//   bot.sendMessage(chatId, "Привіт! Це твоє меню 🚀", menu);
// });

// // Обробка натискання кнопок
// bot.on("callbackQuery", (query) => {
//   const chatId = query.message.chat.id;

//   if (query.data === "menu") {
//     bot.sendMessage(chatId, "Тут буде твоє меню 🍽️");
//   } else if (query.data === "info") {
//     bot.sendMessage(chatId, "Цей бот для демонстрації.");
//   } else if (query.data === "timer") {
//     bot.sendMessage(chatId, "Таймер запущено! Зачекайте 30 секунд... ⏳");
//     setTimeout(() => {
//       bot.sendMessage(chatId, "⏰ Час вийшов! 🎉");
//     }, 30000); // 30 секунд
//   }

//   // Відповідаємо на callback-запит, щоб закрити меню
//   bot.answerCallbackQuery(query.id);
// });

export default bot;
