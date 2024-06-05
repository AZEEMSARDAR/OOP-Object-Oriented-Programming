#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Friend {
    name;
    constructor(z) {
        this.name = z;
    }
}
class Person {
    students = [];
    friends = [];
    addStudent(obj) {
        this.students.push(obj);
    }
    addFriend(frnd) {
        this.friends.push(frnd);
    }
}
const persons = new Person();
const oopStart = async (persons) => {
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
            }
            else {
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
            }
            else {
                console.log(`Hello, I am your student ${std1.name}`);
                console.log(persons.students);
            }
        }
    } while (true);
};
oopStart(persons);
// class student {
//     name: string;
//     constructor(n: string) {
//         this.name = n
//     }
// }
// class friend {
//     name : string;
//     constructor(x: string) {
//         this.name = x
//     }
// }
// class person {
//     students: student[] = []
//     friends: friend[] = []
//     addStd(obj: student) {
//         this.students.push(obj)
//     }
//     addfri(frnd: friend) {
//         this.friends.push(frnd)
//     }
// }
// const res = new person()
// const oopstart = async (per: person) => {
//     console.log(chalk.bgMagenta.bold("WELCOME TO THE OBJECT ORIENTED PROGRAMMING SYSTEM"));
//     do{
//     const ans = await inquirer.prompt({
//         type: "list",
//         name: "talk",
//         message: "Who would you like to talk ?",
//         choices: ["Friends", "Students"]
//     })
//     if(ans.talk == "Friends") {
//         let frd = await inquirer.prompt({
//             type: "input",
//             name: "ffv",
//             message: "By which friend do you want to talk ?"
//         })
//         const fri1 = per.friends.find(x => x.name == frd.ffv)
//         if(!fri1) {
//             const f = new friend(frd.ffv) 
//             per.addfri(f)
//             console.log(`Hello i am ${f.name}`)
//             console.log(per.friends)
//         }
//         if(fri1) {
//             console.log(`Hello i am your ${fri1.name}`)
//             console.log(per.friends)
//         }
//     }
//     if(ans.an == "Students") {
//         let std = await inquirer.prompt({
//             type: "input",
//             name: "s",
//             message: "By which student would you like to talk ?"
//         })
//         const std1 = per.students.find(val => val.name == std.s)
//         if(!std1) {
//             const n = new student(std.s)
//             per.addStd(n)
//             console.log(`Hello sir, i am your student ${n.name}`)
//             console.log(per.students)
//         }
//         if(std1) {
//             console.log(`Hello sir, i am your student ${std1.name}`)
//             console.log(per.students)
//         }
//     }
// }while(true)
// }
// oopstart(res);
