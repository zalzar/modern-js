console.log('-------------------Chapter 5 - Objects-------------------');
{
    // let user = {
    //     name: 'Ali',
    //     age: 30,
    //     email: 'ali.z@gmail.com',
    //     location: 'Monaco',
    //     blogs: ['Why mac & cheese rules', '10 things to make with marmite']
    // };

    // console.log(user);

    // console.log(user.name);
    // user.age = 32;

    // console.log(user.age);

    // //we can also do it this way

    // console.log(user['location']);
    // user['email'] = 'ali.gmail@gmail.com';
    // console.log(user.email);

    // console.log(typeof user);
}

{
    let user = {
        name: 'Ali',
        age: 30,
        email: 'ali.z@gmail.com',
        location: 'Monaco',
        blogs: ['Why mac & cheese rules', '10 things to make with marmite'],

        login: function () {
            console.log('user is logged in.');
        },
        logout: function () {
            console.log('user is logged out.');
        },
        logBlog: function () {
            //console.log(this.blogs);
            this.blogs.forEach(blog => {
                console.log(blog);
            });
        }
    };
    user.login();
    user.logout();
    user.logBlog();
}

{
    // -------------------object literals-------------------


    let user = {
        name: 'Bella',
        age: '32',
        email: 'Blex@gmail.com',
        location: 'Luxembourg',
        blogs: [
            { title: 'The first blog title', likes: 30 },
            { title: 'The second blog title', likes: 50 }
        ],
        login() {
            console.log('the user is logged in');
        },
        printBlogs() {
            console.log('this user has written the following blogs:')
            this.blogs.forEach(blog => {
                console.log(blog.title, blog.likes);
            });
        }
    };

    //user.login();
    user.printBlogs();
}

{
    // -------------------Math object-------------------
    console.log(Math);
    console.log(Math.PI);
    console.log(Math.E);

    const area = 7.7;

    console.log(Math.round(area));
    console.log(Math.floor(area));
    console.log(Math.ceil(area));
    console.log(Math.trunc(area));

    // generate random numbers
    const random = Math.random();
    console.log(Math.round(random * 1000));

}

console.log('-------------------Chapter 5 - Primitive vs Reference value-------------------');
{
    // -------------------Primitive value-------------------
    console.log('-------------------Primitive value-------------------');
    let scoreOne = 50;
    let scoreTwo = scoreOne;

    console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

    scoreOne = 100;

    console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

    // -------------------Reference value-------------------
    console.log('-------------------Reference value-------------------');

    const userOne = { name: 'Ryu', age: 30 };
    const userTwo = userOne;

    console.log(userOne, userTwo);

    userOne.age = 40;

    console.log(userOne, userTwo);

}