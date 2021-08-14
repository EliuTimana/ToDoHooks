const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

/**
 * @type {{id: number, description: string, done: boolean}[]} tasks
 * */
const tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { description } = req.body;

  if (tasks.some((x) => x.description.trim().toLowerCase() === description.trim().toLowerCase() && !x.done)) {
    res.status(400).send(`Task '${description}' already exists`);
    return;
  }

  const newId = tasks.length === 0 ? 1 : Math.max(...tasks.map((t) => t.id)) + 1;
  const newTask = {
    id: newId,
    description: description,
    done: false,
  };
  tasks.unshift(newTask);
  res.status(201).send(newTask);
});

app.patch('/tasks/:id/toggle', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === +id);
  if (index === -1) {
    res.status(404).send();
    return;
  }
  tasks[index].done = !tasks[index].done;
  res.status(204).send();
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  const index = tasks.findIndex((t) => t.id === +id);
  if (index === -1) {
    res.status(404).send();
    return;
  }
  tasks.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
