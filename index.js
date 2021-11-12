const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./routers/userRouter");
const fileRouter = require("./routers/fileRouter");
const cors = require("cors");
const util = require("./routers/util");
const { request } = require("express");

app.use(
  cors({
    origin: [
      "https://fileshare-frontend1.herokuapp.com/",
      "http://localhost:3000",
    ],
  })
);
app.use(express.json());
app.use(express.static("./uploads"));
app.use("/user", userRouter);
app.use("/file", fileRouter);
app.use("/util", util);

app.get("/", (req, res) => {
  console.log("request from client!!");
  res.send("Server Online!");
});

app.get('/download/:filename', function(req, res){
  const file = `${__dirname}/uploads/${req.params.filename}`;
  res.download(file); 
});

app.get("/add", (req, res) => {
  console.log("request from client on add!!");
  res.send("you got a response from add at root");
});

app.get("/home", (req, res) => {
  console.log("request from client at home!!");
  // res.send('you got a response from home');
  res.json({ message: "Success" });
});

app.listen(port, () => {
  // console.log('server started on port ' + port);
  console.log(`server started on port ${port}`);
});
