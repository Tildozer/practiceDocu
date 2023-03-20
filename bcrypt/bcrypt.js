const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const salt = bcrypt.genSaltSync(saltRounds);


const hash = bcrypt.hashSync("HEREISPASSWORD", salt);
const check = async () => console.log(await bcrypt.compare("HEREISPASSWORD", hash))
console.log(hash);
check()

const checkAgain = async () => {
    console.log(await bcrypt.compare("HEREISPASSWORD", "$2a$10$kx93WmXfRrqX/YuCEKLeYe.1agg8syfa2osN2fpbIKNB6jLekIBBu"))
    console.log(bcrypt.hashSync("HEREISPASSWORD", salt));
  }
  checkAgain()
  "$2a$10$mcYvGzV2jrUh69hBHW3hROpsItWyiz1va5B9AAUeV6q6rVPZ6/geK"
  "$2a$10$kx93WmXfRrqX/YuCEKLeYe.1agg8syfa2osN2fpbIKNB6jLekIBBu"