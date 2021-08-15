const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

const delay = (f) => {
  const time = (Math.random() * 2 + 1) * 1000;
  return setTimeout(f, time);
};

/**
 * @type {{id: number, description: string, done: boolean}[]} tasks
 * */
const tasks = [
  { id: 1, description: 'Learn Node.js', done: false },
  { id: 2, description: 'Learn Redux', done: false },
  { id: 3, description: 'Use Material UI', done: true },
];

/**
 * @param msg string
 * */
const errorMessage = (msg) => {
  return { message: msg };
};

app.get('/tasks', (req, res) => {
  delay(() => res.json(tasks));
});

app.post('/tasks', (req, res) => {
  const { description } = req.body;

  if (tasks.some((x) => x.description.trim().toLowerCase() === description.trim().toLowerCase() && !x.done)) {
    res.status(400).json(errorMessage(`Task '${description}' already exists`));
    return;
  }

  const newId = tasks.length === 0 ? 1 : Math.max(...tasks.map((t) => t.id)) + 1;
  const newTask = {
    id: newId,
    description: description,
    done: false,
  };
  tasks.unshift(newTask);
  delay(() => res.status(201).send(newTask));
});

app.patch('/tasks/:id/toggle', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === +id);
  if (index === -1) {
    res.status(404).json(errorMessage(`Task with id ${id} does not exists`));
    return;
  }
  tasks[index].done = !tasks[index].done;
  delay(() => res.status(204).json());
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  const index = tasks.findIndex((t) => t.id === +id);
  if (index === -1) {
    res.status(404).json(errorMessage(`Task with id ${id} does not exists`));
    return;
  }
  tasks.splice(index, 1);
  delay(() => res.status(204).json());
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
