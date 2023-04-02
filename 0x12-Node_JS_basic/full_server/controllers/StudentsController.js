import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response, database) {
    response.write('This is the list of our students\n');
    readDatabase(database)
      .then((data) => {
        const line = [];
        for (const field in data) {
          if (Object.hasOwn(data, field)) {
            const e = data[field];
            line.push(`Number of students in ${field}: ${e.count}. ${e.students}`);
          }
        }
        response.status(200).end(line.join('\n'));
        response.send();
      })
      .catch((err) => response.status(500).end(err.message));
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
}
