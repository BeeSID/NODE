const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const votesFile = path.join(__dirname, 'data', 'votes.json');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/vote', (req, res) => {
  if (req.cookies.voted) {
    return res.send('<h2>You have already voted. Thank you!</h2><a href="/">Go back</a>');
  }

  const party = req.body.party;

  fs.readFile(votesFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).send('Error reading votes data');

    const votes = JSON.parse(data);

    if (!votes.hasOwnProperty(party)) {
      return res.status(400).send('Invalid party selected');
    }

    votes[party] += 1;

    fs.writeFile(votesFile, JSON.stringify(votes, null, 2), err => {
      if (err) return res.status(500).send('Error saving vote');

      res.cookie('voted', 'true', { maxAge: 30 * 24 * 60 * 60 * 1000 }); // 30 days
      res.redirect('/results');
    });
  });
});

app.get('/results', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'results.html'));
});

app.get('/results-data', (req, res) => {
  fs.readFile(votesFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load results' });
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
