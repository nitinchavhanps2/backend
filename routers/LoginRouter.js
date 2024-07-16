// const express = require('express');
// const LoginRouter = express.Router();
// const LoginModal = require('../modal/LoginModal') // Update the path as needed

// LoginRouter.post('/', async (req, res) => {
//    const { Mobile } = req.body;


//    try {
//       const user = await LoginModal.findOne({ "Mobile": Mobile });
//       console.log(user);

//       if (user) {
//         res.send(user);
//       } 
//    } catch (error) {
//       console.error(error);
//       res.status(500).send("Internal Server Error");
//    }
// });

// module.exports = LoginRouter;