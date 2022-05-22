const { Post } = require('../models');

const postData = [
    {
        title: 'MacBook Pro',
        content: 'I love the macbook pro',
        user_id: 1
    },
    {
        title: 'Apple has lots of different products',
        content: 'Apple is always releasing new products',
        user_id: 2
    },
    {
        title: 'Coding is a great skill to have',
        content: 'Coding has become a very popular skill to acquire to help grow personally and professionally',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
