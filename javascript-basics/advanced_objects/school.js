let makeStudent = (name, year) => {
  return {
    name,
    year,
    courses: [],
    info() { console.log(`${name} is a ${year} year student.`) },

    addCourse(courseObj) { this.courses.push(courseObj) },

    listCourses() {
      console.log(this.courses);
    },

    getCourse(courseCode) {
      return this.courses.filter(course => course.code === courseCode)[0];
    },

    addNote(courseCode, note) {
      let course = this.getCourse(courseCode);

      if (course.note == undefined) {
        course.note = note;
      } else {
        course.note += `; ${note}`
      }
    },

    updateNote(courseCode, note) {
      let course = this.getCourse(courseCode);
      if (course) { course.note = note };
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) { console.log(`${course.name}: ${course.note}`) };
      });
    },
  };
}

let foo = makeStudent('foo', '3rd');
let bar = makeStudent('bar', '1st');
let qux = makeStudent('qux', '2nd');

let school = {
  students: [],
  courses: [
    { name: 'Math', code: 101, students: [], },
    { name: 'Advanced Math', code: 102, students: [] },
    { name: 'Physics', code: 202, students: [] },
  ],

  addStudent(student) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(student.year)) {
      this.students.push(student);
      return student;
    } else {
      console.log("Invalid Year")
    }
  },

  getCourse(courseCode) {
    return this.courses.filter(course => course.code === courseCode)[0];
  },

  enrollStudent(student, courseCode) {
    const course = this.getCourse(courseCode);

    student.addCourse({ name: course.name, code: course.code });
    course.students.push(student);
  },

  addGrade(student, courseCode, grade) {
    const course = student.getCourse(courseCode);
    course.grade = grade;
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      let grade = course.grade || 'In progress';
      console.log(`${course.name}: ${String(grade)}`)
    });
  },

  courseReport(courseName) {
    let course = this.courses.filter(course => course.name === courseName)[0];
    let gradeSum = 0;
    let qtyGrades = 0;

    course.students.forEach(student => {
      let studentGrade = student.getCourse(course.code).grade;

      if (studentGrade) {
        console.log(`${student.name}: ${String(studentGrade)}`);
        gradeSum += studentGrade;
        qtyGrades += 1;
      }
    });

    if (qtyGrades === 0) {
      console.log(undefined);
      return;
    }

    console.log(`= ${course.name} Grades =`);
    console.log('---');
    console.log(`Course Average: ${gradeSum / qtyGrades}`);
  },
};

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);

school.enrollStudent(foo, 101);
school.enrollStudent(foo, 102);
school.enrollStudent(foo, 202);
school.enrollStudent(bar, 101);
school.enrollStudent(qux, 101);
school.enrollStudent(qux, 102);

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

console.log(foo);
console.log(bar);
console.log(qux);

school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined