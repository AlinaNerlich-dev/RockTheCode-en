const express = require("express");
const router = express.Router();

// Define Routes
router.get("/", (req, res) => {
  res.status(200).send("Welcome to Express!");
});

module.exports = router;
// ******************
// REQUEST (REQ) NOTES
// ******************
// req.params
// http://localhost:3000/users/:id
// router.get("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.status(200).send(`Welcome to ${userId}'s homepage!`);
// });

// req.query  (?)
// http://localhost:3000/users?name=Samantha
// const name = req.query.name
// const {name} = req.query;

// req.body
// http://localhost:3000/users/posts
// router.get("/users/posts", (req, res)=> {
//   const blogPost = req.body
// })

// req.headers - grab headers
// req.method - see what http method is being used
// req.url - grab the url address
// req.cookies - see cookies
// req.body - info sent from the client to the server
// http://localhost:3000/users/:id

// ******************
// RESPONSE (RES) NOTES
// ******************
// res.cookie()
// router.get("/add-cookies", (req, res) => {
//   res.cookie("sessionId", "12345", { data: "blah" });
//   res.send("Cookie set!");
// });
// res.sendFile() - send files to the client
// router.get("/send-file", (req, res) => {
//   const filePath = "<path to file>";
//   res.sendFile(filePath);
// });
// res.send & res.json - sending responses (plain text, json, etc)
// res.redirect - redirects the user
// router.get("/old-path", (req, res) => {
//   res.redirect("/njdsvndfjkvnfdjkfndkj");
// });
// res.setHeaders - sets headers like content-type
// res.render() - render a view

// ******************
// HTTP STATUS CODES
// ******************
// success codes
// 200 - OK
// 201 - something was successfully created
// 204 - NO CONTENT
// client problems
// 400 - Bad Request
// 401 - unauthorized
// 403 - Forbidden
// 404 - Not Found
// server problems
// 500 - server error
// 502 - Bad Gateway
// 503 - Service Unavailable
