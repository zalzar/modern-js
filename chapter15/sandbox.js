console.log('-------------------Section 15: Object Oriented JavaScript-------------------');
// 116. Object Literal Recap
{
    const userOne = {
        username: 'ali',
        email: 'ali@gmail.com',
        login() {
            console.log('the user logged in');
        },
        logout() {
            console.log('the user logged out');
        }
    };

    const userTwo = {
        username: 'Chun li',
        email: 'chun@gmail.com',
        login() {
            console.log('the user logged in');
        },
        logout() {
            console.log('the user logged out');
        }
    };

    console.log(userOne.email, userOne.username);
    userOne.login();
    console.log(userTwo.email, userTwo.username);
    userOne.login();

    const userThree = new User('Shaun@thenetninja.co.uk', 'Shaun');
}