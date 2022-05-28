const { User } = require('../models');

const userData = [
    {
        username: "chan_v",
        twitter: "chanv",
        github: "chanv",
        email: "chanv@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "rob_b",
        twitter: "robb",
        github: "robb",
        email: "robb@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "chris_b",
        twitter: "chrisb",
        github: "chrisb",
        email: "chrisb@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "charles_w",
        twitter: "charlesw",
        github: "charlesw",
        email: "charlesw@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "howard_w",
        twitter: "howardw",
        github: "howardw",
        email: "howardw@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "eric_w",
        twitter: "ericw",
        github: "ericw",
        email: "ericw@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;