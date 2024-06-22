const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://hneelabh13:ld7ZH6j1Bu3NiAPn@cluster0.6o7ss0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
});

app.listen(4000);


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const User = require('./models/User');

// const app = express();


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://hneelabh13:ld7ZH6j1Bu3NiAPn@cluster0.6o7ss0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// app.use(cors());
// app.use(express.json());


// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
  
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
  

// // mongoose.connect('mongodb+srv://hneelabh:Harsh3227@mongo@diversediaries.p4c4xyx.mongodb.net/myDatabase?retryWrites=true&w=majority', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // }).then(() => {
// //     console.log('Connected to MongoDB');
// // }).catch(err => {
// //     console.error('Failed to connect to MongoDB', err);
// // });

// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         console.log('Received signup request:', req.body); // Log the request body
//         const userDoc = await User.create({ username, password });
//         console.log('User created:', userDoc); // Log the created user document
//         res.json(userDoc);
//     } catch (err) {
//         console.error('Error creating user:', err); // Log the error
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// const PORT = 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



// hneelabh
// Harsh3227@mongo

// Cluster1:  mongodb+srv://hneelabh:Harsh3227@mongo@diversediaries.p4c4xyx.mongodb.net/?retryWrites=true&w=majority&appName=DiverseDiaries
// Cluster2 : mongodb+srv://hneelabh13:ld7ZH6j1Bu3NiAPn@cluster0.6o7ss0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// USE CLUSTER 2 TO AVOID @ CONFLICT