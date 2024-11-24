const users = [
  { id: "1", name: "Mizanur Rahman", email: "mizan32cse@gmail.com" },
  { id: "2", name: "Rafiqul Islam", email: "rafiq@gmail.com" }
];

const resolvers = {
  Query: {
    getUser: (parent, args) => {
      return users.find(user => user.id === args.id);
    },
    getUsers: () => {
      return users;
    }
  }
};

module.exports = { resolvers };
