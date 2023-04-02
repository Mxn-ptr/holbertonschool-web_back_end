const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response, database) {
    readDatabase(database)
      .then((data) => {
        const line = [];
        line.push('This is the list of our students');
        for (const field in data) {
          if (Object.hasOwn(data, field)) {
            const e = data[field];
            line.push(`Number of students in ${field}: ${e.count}. ${e.students}`);
          }
        }
        response.status(200).send(line.join('\n'));
      })
      .catch((err) => response.status(500).send(err.message));
  }

  static getAllStudentsByMajor(request, response, database) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(database)
        .then((data) => {
          response.status(200).send(data[request.params.major].students);
        })
        .catch((err) => response.status(500).send(err.message));
    }
  }
};
