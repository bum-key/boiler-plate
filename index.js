const express = require("express");
const app = express();
const port = 8002;

const mongoose = require("mongoose");
mongoose
	.connect(
		"mongodb+srv://jsbebe00:qjarl689300@boilerplate.7nrn0.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	)
	.then(() => console.log("MongoDB..."))
	.catch(err => console.log(err));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
