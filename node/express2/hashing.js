import bcrypt from "bcrypt";

// Generate hash code
// Password123 => $2b$10$UdrLAKlj0SB2.lF1wGrIAeU2kag1TZQeVoIVMK8/2dxy20rRHlsO6
// same text has diffenet hash code (for security resean )
const password = "Pradip123";

const hashingPassword = await bcrypt.hash(password, 10);
console.log(hashingPassword);
