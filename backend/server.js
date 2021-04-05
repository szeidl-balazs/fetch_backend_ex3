const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");
const data = require("./data.json")

/*app.use(cors({ origin: "http://localhost:3000" }));*/
app.use(cors());
app.use(express.json());

app.get ('/', (req, res) => {
	res.json(data);
})

app.listen(port, ()=> {
	console.log(`This app listening at http://localhost:${port}`)
})
