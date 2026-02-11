const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

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
        role:"Admin",
        password: bcrypt.hashSync("1234", 10)
    });
});

app.post("/login", async (req, res) => {
    const { name, password } = req.body;

    const user = useSyncExternalStore.find(
        u => u.name === name.toLowerCase()
    );

    if (user) {
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
        name: user.name,
        role: user.role
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
