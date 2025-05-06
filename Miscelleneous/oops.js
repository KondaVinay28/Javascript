const User = {
  username: "kumarkov",
  email: "kumarkov@amazon.com",
  role: "TRI",
  getInfo: function () {
    return `LoggedIn with ${this.email}`;
  },
};
console.log(User.getInfo());

// prototypes
