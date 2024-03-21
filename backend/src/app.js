
//***Importing Packages****//
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/database.js');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 6000;


//****DatabaseConnection****//
connectDB();

//***SendingRequest*****//
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))


//***Importing Routes*****//
const userRoutes = require('./routes/userRoutes');
const storyRoutes = require("./routes/storyRoutes");
const authRoutes = require('./routes/authRoutes');

app.use("/api/auth", authRoutes)
app.use("/api/stories",storyRoutes);
app.use("/api/users", userRoutes)


//***Root****//
app.get("/api", (req, res) => {

    res.send("API WORKING");
})

//***Listen****//
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})