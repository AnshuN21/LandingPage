// const express = require('express');
// const router = express.Router();
// const Project = require('../models/Project');

// router.get('/', async (req, res) => {
//   const projects = await Project.find();
//   res.json(projects);
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

const projects = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Project details - benefits.',
    image: '/assets/pexels-brett-sayles-2881232.svg',
  },
  {
    id: 2,
    title: 'Design',
    description: 'Project details - benefits.',
    image: '/assets/pexels-brett-sayles-2881232-1.svg',
  },
  {
    id: 3,
    title: 'Marketing & Design',
    description: 'Project details - benefits.',
    image: '/assets/pexels-brett-sayles-2881232-2.svg',
  },
  {
    id: 4,
    title: 'Cons. & Marketing',
    description: 'Project details - benefits.',
    image: '/assets/pexels-brett-sayles-2881232-3.svg',
  },
  {
    id: 5,
    title: 'Consultation',
    description: 'Project details - benefits.',
    image: '/assets/pexels-fauxels-3182834.svg',
  },
];

// GET /api/projects
router.get('/', (req, res) => {
  res.json(projects);
});

module.exports = router;

