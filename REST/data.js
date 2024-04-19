const { v4: uuidv4 } = require('uuid');

const post = [
  {
    id:uuidv4(),
    // id:uuid,
    username: "apnacollege",
    content: "I love coding",
  },
  {
    id:uuidv4(),
    // id:uuid,
    username: "shradha",
    content: "Hard work is important",
  },
  {
    id:uuidv4(),
    // id:uuid,
    username: "rahul",
    content: "Got selected in intern",
  },
];
module.exports = post;
