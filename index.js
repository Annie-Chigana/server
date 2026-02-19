const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node!");
});

const users = [
    {
        username: "annie",
        password: bcrypt.hashSync("12345", 10),
        role: "admin"
     },
     {
        username: "john",
        password: bcrypt.hashSync("abcd", 10),
        role: "user"
     }
];


app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = useSyncExternalStore.find(
        u => u.username === username.toLowerCase()
    );

    if (!user) {
        return res.json({
            success:false,
            message: "User not found"
        });
    }

    const isMatch = await
    bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.json({
            success:false,
            message: "Incorrect password"
        });
    }

    res.json({
        success: true,
        username: user.username,
        role: user.role
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
