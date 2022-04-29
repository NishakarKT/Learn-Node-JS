const bcrypt = require('bcrypt');

let securePassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10 /*rounds*/);
    console.log(hashedPassword);
    // less rounds, faster hashing, less secure

    const paswordMatch = await bcrypt.compare("Hello", hashedPassword);
    console.log(paswordMatch);
};

securePassword("Hello");