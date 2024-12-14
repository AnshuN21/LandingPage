const express = require('express');
const router = express.Router();
const HappyClient = require('../models/HappyClients'); 


// router.get('/', async (req, res) => {
//   try {
//     const clients = await HappyClient.find();
//     res.json(clients);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.post('/', async (req, res) => {
//   const client = new HappyClient({
//     name: req.body.name,
//     title: req.body.title,
//     image: req.body.image,
//     feedback: req.body.feedback
//   });

//   try {
//     const newClient = await client.save();
//     res.status(201).json(newClient);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Export the router
// module.exports = router;


const clients = [
    {
      name: "Rowhan Smith",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      designation: "CEO, Foreclosure",
      image: "/assets/Ellipse 28.svg",
    },
    {
      name: "Shipra Kayak",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      designation: "Brand Designer",
      image: "/assets/Ellipse 29.svg",
    },
    {
        name: "Shipra Kayak",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        designation: "Brand Designer",
        image: "/assets/Ellipse 31.svg",
      },
      {
        name: "Shipra Kayak",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        designation: "Brand Designer",
        image: "/assets/Ellipse 33.svg",
      },
      {
        name: "Shipra Kayak",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        designation: "Brand Designer",
        image: "/assets/Ellipse 35.svg",
      },




  ];






  router.get('/', (req, res) => {
    res.json(clients);
  });
  
  module.exports = router;