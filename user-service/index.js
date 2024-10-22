const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/userServiceDB')
.then(()=>
{
    console.log(`mongo db i s connects`);
    
})
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3001;

app.use('/users', userRoutes);


app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
