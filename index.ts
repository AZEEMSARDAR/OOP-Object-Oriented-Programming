#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";



class Student {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

class Friend {
    name: string;
    constructor(z: string) {
        this.name = z;
    }
}

class Person {
    students: Student[] = [];
    friends: Friend[] = [];

    addStudent(obj: Student) {
        this.students.push(obj);
    }

    addFriend(frnd: Friend) {
        this.friends.push(frnd);
    }
}

const persons = new Person();

const oopStart = async (persons: Person) => {
    console.log(chalk.bgMagenta.bold("Welcome To Object Oriented Programming"));

    do {
        const ans = await inquirer.prompt([{
            name: "talk",
            type: "list",
            message: "Who would you like to talk to?",
            choices: ["Friends", "Students"]
        }]);

        if (ans.talk === "Friends") {
            const frnd = await inquirer.prompt([{
                name: "frd",
                type: "input",
                message: "Which friend would you like to talk to?"
            }]);
            const fri1 = persons.friends.find(z => z.name === frnd.frd);
            if (!fri1) {
                const fd = new Friend(frnd.frd);
                persons.addFriend(fd);
                console.log(`Hello, I am ${fd.name}`);
                console.log(persons.friends);
            } else {
                console.log(`Hello, I am your friend ${fri1.name}`);
                console.log(persons.friends);
            }
        }

        if (ans.talk === "Students") {
            const std = await inquirer.prompt([{
                type: "input",
                name: "ad",
                message: "By which student would you like to talk?"
            }]);
            const std1 = persons.students.find(val => val.name === std.ad);
            if (!std1) {
                const nd = new Student(std.ad);
                persons.addStudent(nd);
                console.log(`Hello, I am your student ${nd.name}`);
                console.log(persons.students);
            } else {
                console.log(`Hello, I am your student ${std1.name}`);
                console.log(persons.students);
            }
        }
    } while (true);
};

oopStart(persons);
