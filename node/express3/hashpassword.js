import bcrypt from "bcrypt";

async function hashPassword(password) {
    try {
        // Generate Salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error("Error hash password", error);
        throw error;
    }
}

(async () => {
    const plainPassword = "mySecretPassword";
    const hashedPassword = await hashPassword(plainPassword);
    console.log("Hashed Password:", hashedPassword);
})();
