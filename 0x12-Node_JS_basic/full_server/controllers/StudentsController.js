const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let line = 'This is the list of our students';
        for (const field in data) {
          if (Object.hasOwn(data, field)) {
            const e = data[field];
            line += `\nNumber of students in ${field}: ${e.count}. ${e.students}`;
          }
        }
        response.send(line);
      })
      .catch((err) => response.send(err.message));
  }

  static getAllStudentsByMajor(request, response) {
    if (request.params.major !== 'CS' && request.params.major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((data) => {
        response.send(data[request.params.major].students);
      })
      .catch((err) => response.send(err.message));
  }
};
