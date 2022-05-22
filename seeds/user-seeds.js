const { User } = require('../models');

const userData = [
    {
    username: 'Robert',
    password: 'robert'
    },
    {
    username: 'Chandler',
    password: 'chandler'
    },
    {
    username: 'Chris',
    password: 'chris'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;