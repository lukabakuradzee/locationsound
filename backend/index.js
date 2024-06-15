const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const port = 3300;


const http = require('http');
const app = express();


app.use(cors({
    origin: 'http://127.0.0.1:5502'
}))

app.use(express.json());
app.use((req, res, next) => {
    console.log(
        `[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`
    );
    next();
});

// api endpoint
app.use('/api', userRoutes)

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
