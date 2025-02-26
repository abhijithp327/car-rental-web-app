import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();


const app = express();

const port = process.env.PORT || 5001;
// const corsOptions = {
//     credentials: true,
//     // origin: ['https://greensintl.com', 'https://www.greensintl.com']
// };


app.use(cors());
app.use(express.json());
app.use(morgan('combined'));



app.get('/', (req, res) => {
    res.json('Rental car API is running... ✅');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port} ✅`);
    // console.log('Database connected successfully ✅');
});

