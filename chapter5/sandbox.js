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