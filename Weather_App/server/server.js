const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const weatherRoute=require('./routes/weather');

dotenv.config();

const app=express();
const PORT=process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/weather',weatherRoute);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
