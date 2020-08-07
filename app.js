const express = require('express');
const app = express();

const chatRouter = require("./api/chat/chat_router.js");

app.use(express.json());

app.use("/api/chat", chatRouter)

app.listen(80, () => {
	console.log('PORT CHECK')
});
