const express = require("express");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Routers
studentRouter = require("./routes/studentRouter.js")
staffRouter = require("./routes/staffRouter.js")
deptRouter = require("./routes/deptRouter.js")
subjectRouter = require("./routes/subjectRouter")
marksRouter = require("./routes//marksRouter.js")
app.use("/api/",studentRouter)
app.use("/api/",staffRouter)
app.use("/api/",deptRouter)
app.use("/api/",subjectRouter)
app.use("/api/",marksRouter)


// PORT
const PORT = 8080;

//server
app.listen(PORT,() => { console.log("Server is Running at port", PORT)})