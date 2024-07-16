// const express = require('express');
// const Fetch = express.Router();
// const FetchModal = require('../modal/FetchModal');

// Fetch.get('/', async (req, res) => {
//     try {
//         console.log(res);
//         // Use Mongoose to find all products
//         const products = await FetchModal.find({});
       
//         if (products.length > 0) {
//             res.send(products);
//         } else {
//             res.send("No data found");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// module.exports = Fetch;