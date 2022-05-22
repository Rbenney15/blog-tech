const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'great point',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'I am looking forward to that',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'wow, that is something I have not thought of',
        user_id: 3,
        post_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;