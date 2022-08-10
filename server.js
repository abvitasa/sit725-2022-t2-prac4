const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.port || 3000;

app.use(express.static('public'));

app.post('/order', (req, res) => {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let password = req.body.password;
  let email = req.body.email;

  res.write(`
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SIT725 Prac3</title>
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <!-- Nav Bar -->
  <nav>
      <div class="nav-wrapper">
          <a href="https://www.freepik.com/free-vector/cute-woman-chef-holding-cloche-food-tray-hand-drawn-logo-cartoon-art-illustration_22179672.htm#query=restaurant%20logo&position=30&from_view=search"
              class="brand-logo"><img class="logo" src="images/company_logo.webp" alt="company_logo"></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
              <li><a href="about.html">About</a></li>
              <li><a href="locations.html">Locations</a></li>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="signin.html">Sign in</a></li>
          </ul>
      </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
      <li><a href="about.html">About</a></li>
      <li><a href="locations.html">Locations</a></li>
      <li><a href="menu.html">Menu</a></li>
      <li><a href="signin.html">Sign in</a></li>
  </ul>

          <div class="container">
            <table class="striped highlight centered responsive-table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Password</th>
                    <th>Email</th>
                </tr>
            </thead>
    
            <tbody>
                <tr>
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${password}</td>
                <td>${email}</td>
                </tr>
            </table>
          </div>


      </div>
  </div>


  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
  
  `);
  res.send();
});

app.listen(port, () => {
  console.log('App running at http://localhost:' + port);
  console.log('Type Ctrl+C to shutdown the web server');
});
