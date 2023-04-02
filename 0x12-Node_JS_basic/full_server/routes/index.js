const router = require('express').Router();
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

router.get('/', (request, response) => AppController.getHomepage(request, response));
router.get('/students', (request, response) => StudentsController.getAllStudents(request, response, process.argv[2]));
router.get('/students/:major', (request, response) => StudentsController.getAllStudentsByMajor(request, response, process.argv[2]));

module.exports = router;
