// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender
    }

    greeting() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }

}


class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }

    extraPoints(student, subject) {
        let points = Math.floor(Math.random() * 20) + 1;
        let instructorGrade = student.grade + points;
        return `${this.name} gave ${student.name} an additional ${points} for a total grade of ${instructorGrade} for their assignment on ${subject}`; 
    }


}



class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);

        this.previousBackground = studentAttrs.previousBackground;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = Math.floor(Math.random() * 50) + 50

    }

    listSubjects() {
        return this.favSubjects.forEach((subject) => {
            console.log(`${subject}`);
        })
    }

    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has submitted their sprint challenge for ${subject}.`;
    }

    postGrade(subject) {
        return `${this.name}'s grade for ${subject} is ${this.grade}.`
    }

    graduate() {
        if (this.grade >= 70) {
            return `Congratulations ${this.name}, you are ready to graduate!`
        } else {
            return `Sorry ${this.name}, you still have more work to do in order to graduate.`
        }
    }

}


class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);

        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(channel) {
        return `@${this.name} announces to @${channel}, Standy time!`
    }

    debugsCode(student, subject) {
        return `${this.name} degugs ${student.name}'s code on ${subject}.`
    }

}


const john = new Instructor({
    name: 'John',
    age: 40,
    location: 'San Francisco',
    gender: 'M',

    specialty: 'Front-End Development',
    favLanguage: 'JavaScript',
    catchPhrase: 'Secret Sauce'


})

const pam = new Instructor({
    name: 'Pam',
    age: 27,
    location: 'New York',
    gender: 'F',

    specialty: 'Angular',
    favLanguage: 'JavaScript',
    catchPhrase: 'Bingo'


})


const lisa = new Student({
    name: 'Lisa',
    age: 23,
    location: 'Dallas',
    gender: 'F',

    previousBackground: 'Art',
    favSubjects: ['React', 'CSS', 'JavaScript', 'Back-End']
})


const mike = new Student({
    name: 'Mike',
    age: 25,
    location: 'Chicago',
    gender: 'M',

    previousBackground: 'Retail',
    favSubjects: ['MySql', 'LESS', 'React', 'Databases']
})



const jason = new ProjectManager({
    name: 'Jason',
    age: 28,
    location: 'Los Angeles',
    gender: 'M',

    specialty: 'React',
    favLanguage: 'TypeScript',
    catchPhrase: 'You got this',

    gradClassName: `CS10`, 
    favInstructor: 'John'
})

const will = new ProjectManager({
    name: 'Will',
    age: 35,
    location: 'San Diego',
    gender: 'M',

    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'No Problem',

    gradClassName: `CS12`, 
    favInstructor: 'Pam'
})


// Instructor Tests
console.log(``);
console.log(`**** INSTRUCTOR TESTS ****`);
console.log(``);


console.log(john.greeting());
console.log(john.demo('closures'));
console.log(john.grade(lisa, 'JavaScript Fundamentals'));
console.log(john.extraPoints(lisa, "CSS"));

console.log(pam.greeting());
console.log(pam.demo('classes'));
console.log(pam.grade(mike, 'CSS'));


//Student Tests
console.log(``);
console.log(`***** STUDENT TESTS*****`)
console.log(``);


console.log(lisa.greeting());
console.log(lisa.listSubjects());
console.log(lisa.postGrade('JavaScript IV'));
console.log(lisa.prAssignment('JavaScript-III'));
console.log(lisa.sprintChallenge('JavaScript-III'));
console.log(lisa.graduate());

console.log(mike.greeting());
console.log(mike.listSubjects());
console.log(mike.prAssignment('JavaScript-III'));
console.log(mike.sprintChallenge('JavaScript-III'));


// PM Tests
console.log(``);
console.log(`***** PRODUCT MANAGER TESTS*****`)
console.log(``);

console.log(jason.greeting());
console.log(jason.standUp('fsw16'));
console.log(jason.debugsCode(lisa, 'JavaScript-IV'));


console.log(will.greeting());
console.log(will.standUp('fsw15'));
console.log(will.debugsCode(mike, 'JavaScript-II'));



