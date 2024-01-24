const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;
const db = new sqlite3.Database('employees.sqlite3');

app.use(bodyParser.json());

db.run(`
  CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    date_of_birth DATE,
    age INTEGER,
    salary REAL
  )
`);

// CRUD operations
const handleDatabaseResponse = (res, err, result) => {
  if (err) {
    res.status(500).json({ error: err.message });
    return;
  }
  res.json(result);
};

// Get all employees
app.get('/employees', (req, res) => {
  db.all('SELECT * FROM employees', (err, rows) => handleDatabaseResponse(res, err, rows));
});

// Create a new employee
app.post('/employees', (req, res) => {
  const { name, date_of_birth, age, salary } = req.body;
  db.run(
    'INSERT INTO employees (name, date_of_birth, age, salary) VALUES (?, ?, ?, ?)',
    [name, date_of_birth, age, salary],
    function (err) {
      handleDatabaseResponse(res, err, { id: this.lastID });
    }
  );
});

// Update an employee
app.put('/employees/:id', (req, res) => {
  const { name, date_of_birth, age, salary } = req.body;
  const id = req.params.id;
  db.run(
    'UPDATE employees SET name=?, date_of_birth=?, age=?, salary=? WHERE id=?',
    [name, date_of_birth, age, salary, id],
    function (err) {
      handleDatabaseResponse(res, err, { changes: this.changes });
    }
  );
});

// Delete an employee
app.delete('/employees/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM employees WHERE id=?', [id], function (err) {
    handleDatabaseResponse(res, err, { deleted: this.changes });
  });
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
