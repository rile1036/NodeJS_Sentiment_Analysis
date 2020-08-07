var users = [{"id":3, "name":"김영렬"}]
var chatArr = [{"userid": 3, "chat": "안녕하세요"}]

module.exports = {
	show: (req, res) => {
		const body = req.body;
		return res.json ({
			success: 1,
			data: chatArr
		});
	},
	create: (req, res) => {
		const body = req.body;	
		console.log(body);
		return res.json ({
                        success: 1,
                        data: chatArr
                });
	}
}
