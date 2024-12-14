const mongoose = require("mongoose");
const HappyClient = require("./models/HappyClients");

mongoose.connect("mongodb+srv://NewAdmin:Anshu321@mynetflix.mongodb.net/Mynetflix", );

const clients = [
  {
    name: "Rowhan Smith",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    designation: "CEO, Foreclosure",
    image: "https://example.com/images/rowhan.jpg",
  },
  {
    name: "Shipra Kayak",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    designation: "Brand Designer",
    image: "https://example.com/images/shipra.jpg",
  },
];

HappyClient.insertMany(clients)
  .then(() => {
    console.log("Data inserted successfully!");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
    mongoose.connection.close();
  });
