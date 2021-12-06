console.log('-------------------Section 15: Object Oriented JavaScript-------------------');
// // 116. Object Literal Recap
// {
//     const userOne = {
//         username: 'ali',
//         email: 'ali@gmail.com',
//         login() {
//             console.log('the user logged in');
//         },
//         logout() {
//             console.log('the user logged out');
//         }
//     };

//     const userTwo = {
//         username: 'Chun li',
//         email: 'chun@gmail.com',
//         login() {
//             console.log('the user logged in');
//         },
//         logout() {
//             console.log('the user logged out');
//         }
//     };

//     console.log(userOne.email, userOne.username);
//     userOne.login();
//     console.log(userTwo.email, userTwo.username);
//     userOne.login();

//     const userThree = new User('Shaun@thenetninja.co.uk', 'Shaun');
// }

// // 117. Classes
// {
//     // classes are like a blue print to create an object with
//     /*  for example the following can be used as an example of 
//         blue print for creating user
//     {
//         username, // this is a property
//         email,    // this is a property
//         login(),  // this is a functionality  
//         logout(), // this is a functionality
//     }
//      */
// }

// // 118. Class Constructors
// {
//     class User {
//         constructor(tbxUsername, tbxEmail) {
//             this.username = tbxUsername;
//             this.email = tbxEmail;
//         }
//     }

//     const userOne = new User('ali', 'ali@gmail.com');
//     const userTwo = new User('sherly', 'sherly@gmail.com');

//     console.log(userOne, userTwo);
// }

// 119. Class Methods & Method Chaining
{
    class User {
        constructor(tbxUsername, tbxEmail) {
            this.username = tbxUsername;
            this.email = tbxEmail;
            this.score = 0;
        }
        login() {
            console.log(`${this.username} just logged in`);
            return this;
        }
        logout() {
            console.log(`${this.username} just logged out`);
            return this;
        }

        incScore() {
            this.score++;
            console.log(`${this.username} has a score of ${this.score}`);
            return this;
        }
    }

    const userOne = new User('ali', 'ali@gmail.com');
    const userTwo = new User('sherly', 'sherly@gmail.com');

    console.log(userOne, userTwo);
    userOne.login().incScore().incScore().logout();

    userTwo.login();
    userTwo.logout();
}