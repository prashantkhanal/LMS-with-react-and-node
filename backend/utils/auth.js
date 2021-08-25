const bcrypt = require('bcrypt');

//*------------->Hashiing the password--------------->
exports.hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};
//*------------->Comapring the hash password--------------->
exports.compareHashPassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
