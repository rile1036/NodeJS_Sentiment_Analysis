const express = require('express');
const app = express();
const cors = require('cors');

const chatRouter = require("./api/chat/chat_router.js");

app.use(express.json());
app.use(cors());
app.use("/api", chatRouter)

app.listen(80, () => {
	console.log('PORT CHECK')
});
