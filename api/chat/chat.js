var users = {'1':{"id":1, "name":"김영렬"},'2':{"id":2, "name":"장임호"}}
var userImage = [{"userid": 1, "image": "https://previews.123rf.com/images/primeproud/primeproud1201/primeproud120100106/11875885-새로운-종이-시트와-비어있는-.jpg"}]
let analysisKey = "5543323700649639825"
var chatArr = [{"id": 1, "userid": 1, "chat": "안녕하세요", "mind": "신뢰"},{"id": 2, "userid": 2, "chat": "안녕하세요", "mind": "신뢰"}]
//const { show, create, photoview } = require("./chat_service");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp//responseText;
}

module.exports = {
	show: (req, res) => {
		var chatArray = []
		for(let i=0;i<chatArr.length;i++) {	
			chatArray.push({ "id": i + 1, "name" : users[chatArr[i]['userid'].toString()]['name'], "chat" : chatArr[i].chat, "mind": chatArr[i].mind })
		}
		return res.json ({
			success: 1,
			data: chatArray
		});
	},
	create: (req, res) => {
		const body = req.body;
	 	//console.log(body)
		let urlanalysis = "http://api.adams.ai/datamixiApi/omAnalysis"
		urlanalysis = urlanalysis + "?query=" + body.chat + "&type=1&key=" + analysisKey
             	let mind = httpGet(urlanalysis);		
		chatArr.push({"id": chatArr.length + 1, "userid": 1, "chat": body.chat, "mind": JSON.parse(mind['responseText'])['return_object']['Result'][0][1]})
		return res.json ({
                        success: 1,
                        data: chatArr
                });
	},
	photoview: (req, res) => {
		const body = req.body;
		let Arr = userImage.filter(elem=>elem.id == body.id)
		return res.json ({
			success: 1,
			data: Arr
		});
	}
	/*
	analysis: (req, res) => {
		const chatID = req.params.id;
		
		let Arr = chatArr.filter(elem=>elem.id == chatID)
		
		let mindArr = [{"id": Arr[0].id, "userid": Arr[0].userid, "chat": Arr[0].chat, "mind": JSON.parse(mind['responseText'])['return_object']['Result'][0][1]}]
		return res.json ({
                        success: 1,
                        data: mindArr[0]
                });
	}*/
}
