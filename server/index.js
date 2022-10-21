const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFavColor, deleteColor, changeColor } = require('./controller')

app.get("/api/compliment", getCompliment);


app.get('/api/fortune/', getFortune)

app.post('/api/colors/', addFavColor)

app.delete('/api/colors/:id', deleteColor)

app.put('/api/colors/:id', changeColor)





app.listen(4000, () => console.log("Server running on 4000"));
