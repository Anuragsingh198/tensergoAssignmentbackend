const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors'); 
const requestRouter = require('./routers/requests');
const userRouter = require('./routers/user');
const messageroutes = require('./routers/messageroutes')
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: "*", 
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '10mb' }));

app.use('/api', userRouter);
app.use('/api', requestRouter);
app.use('/api',  messageroutes,)
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Not Found' });
});
 
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log('MongoDB connected successfully');
        app.listen(port, () => console.log(`Server is running on port: ${port}`));
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

startServer();
  