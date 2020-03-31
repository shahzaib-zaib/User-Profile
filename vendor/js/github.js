class Github {
    getUser(user) {
      return new Promise((resolve, reject) => {
        resolve(fetch(`https://api.github.com/users/${user}`));
      });
    }
  }
  