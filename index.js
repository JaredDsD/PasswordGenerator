function generatePassword(length = 8) {
  // Ensure minimum length of 8
  if (length < 8) length = 8;

  // Character sets
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*";
  const all = upper + lower + numbers + symbols;

  let password = "";

  // Ensure at least one character from each category
  password += upper[Math.floor(Math.random() * upper.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  // Fill the rest of the password with random characters
  for (let i = password.length; i < length; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  // Shuffle the password to avoid predictable pattern
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  // Display the generated password
  console.log("Generated Password:", password);
}

generatePassword(); // You can pass a number to set a custom length
