const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        
        const response = await axios.put(
            process.env.URL,
            {
                username: username,
                secret: username,
                first_name: username,
            },
            {
                headers: {"private-key": process.env.PRIVATE_KEY}
            }
            )
            return res.status(response.status).json(response.data)
    } catch (e) {
        console.log(e);
    }
})

app.listen(8080, () => {
    console.log("Server listing at port 8080");
})
