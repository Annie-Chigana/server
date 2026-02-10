const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node!");
});

app.get("/user", (req, res) => {
    res.json({
        id: "01",
        name:"Annie",
        role:"Admin"
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
