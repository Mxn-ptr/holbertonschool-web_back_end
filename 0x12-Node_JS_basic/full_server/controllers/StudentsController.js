const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response, database) {
    readDatabase(database)
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
      .catch((err) => response.status(500).send(err.message));
  }

  static getAllStudentsByMajor(request, response, database) {
    if (request.params.major !== 'CS' && request.params.major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(database)
      .then((data) => {
        response.send(data[request.params.major].students);
      })
      .catch((err) => response.status(500).send(err.message));
  }
};
