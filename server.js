if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// step one: import express

const express = require("express")
const expressEjsLayouts = require("express-ejs-layouts")

// step two: instantiate express as app variable (uh can name it anything!)

const app = express()

const indexRouter = require("./routes/index")


// step three: set layouts
app.set("view engine","ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressEjsLayouts)
app.use(express.static("public"))

// setup db using mongoose
const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
// check whether we connected
const db = mongoose.connection
db.on("error", error=> console.log(error))
db.once("open", ()=>console.log("Connected to mongoose!"))

// setting up routes
app.use('/', indexRouter)
// step 4: let the server decide for us which port to use after production 
// during dev mode we will be using port 3000
app.listen(process.env.PORT || 5000)

