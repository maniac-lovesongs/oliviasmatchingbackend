import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


app.get('/', (req, res) => {
    res
        .status(200)
        .send('Hello server is running on Heroku!!')
        .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});