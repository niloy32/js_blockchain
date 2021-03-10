const express = require('express')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/blockchain', function (req, res) {
    res.send('ekssds World')
})
app.post('/transaction', function (req, res) {
    console.log(req.body);
    res.send(`Got the stuff ${req.body.data}`);
})
app.get('/mine', function (req, res) {

})


app.listen(3000, function () {
    console.log("listening to port 3000");
})