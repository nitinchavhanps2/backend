const express = require('express');
const app = express();
require("dotenv").config();
const { MONGO_URL } = process.env;
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');


app.use(express.json());
app.use(cors());

mongoose
   .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
   .then(() => console.log("MongoDB is connected successfully"))
   .catch((err) => console.error(err));

//  app.use('/login', require('./routers/LoginRouter'))
// app.use('/display', require('./Routes/Display')); 
// app.use('/services', require('./Routes/Appointment'))
app.use('/songs', require('./routers/Fetch'))
// app.use('/orders', require('./Routes/Orders'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});