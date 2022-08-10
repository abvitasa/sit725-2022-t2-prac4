const express = require('express');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;
let projectCollection;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Add database connection
const uri =
  'mongodb+srv://auden:admin@mycluster.fw6glvi.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewURLParser: true });

// Create collection
const createCollection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) console.log('MongoDB Connected');
    else {
      console.log('DB Error:', err);
      process.exit(1);
    }
  });
};

// Insert project
const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

// Get project
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

// const cardList = [
//   {
//     title: 'Burger',
//     image: 'images/burger.webp',
//     link: 'https://www.freepik.com/free-vector/cute-girl-holding-burger-fast-food-logo-cartoon-hand-draw-character-vector-art-illustration_24327279.htm#query=fastfood%20logo&position=25&from_view=search',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis. Urna et pharetra pharetra massa massa ultricies.',
//   },
//   {
//     title: 'Donut',
//     image: 'images/donut.webp',
//     link: 'https://www.freepik.com/free-vector/cute-girl-holding-donut-bakery-sweet-food-logo-cartoon-hand-draw-character-vector-art-illustration_24327287.htm#&position=10&from_view=detail#&position=10&from_view=detail',
//     description:
//       'Libero enim sed faucibus turpis in. Enim nunc faucibus a pellentesque sit. Enim blandit volutpat maecenas volutpat blandit. Vestibulum sed arcu non odio.',
//   },
//   {
//     title: 'Pizza',
//     image: 'images/pizza.webp',
//     link: 'https://www.freepik.com/free-vector/cute-girl-holding-pizza-fast-food-logo-cartoon-hand-draw-character-vector-art-illustration_24327300.htm#query=fastfood%20logo&position=29&from_view=search',
//     description:
//       'Tortor consequat id porta nibh venenatis cras. Vitae congue mauris rhoncus aenean vel. Nam at lectus urna duis convallis convallis. Odio eu feugiat pretium nibh ipsum consequat.',
//   },
// ];

app.get('/api/projects', (req, res) => {
  getProjects((err, result) => {
    if (err) res.json({ statusCode: 400, message: err });
    else res.json({ statusCode: 200, data: result, message: 'Success' });
  });
});

app.post('/api/projects', (req, res) => {
  console.log('New Project added', req.body);
  let newProject = req.body;
  insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        message: 'Project Successfully added',
        data: result,
      });
    }
  });
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log('App running at http://localhost:' + port);
  createCollection('foods');
});
