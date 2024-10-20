const db = require("../config/db");
const bcrypt = require("bcryptjs");

// Create new user
const createUser = async (firstName, lastName, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = `INSERT INTO users ("firstName", "lastName", email, password)
     VALUES ($1, $2, $3, $4) RETURNING id`;
  const result = await db.query(sql, [
    firstName,
    lastName,
    email,
    hashedPassword,
  ]);
  return result.rows[0].id;
};

// Find user by email
const findUserByEmail = async (email) => {
  const sql = "SELECT * FROM users WHERE email = $1";
  const result = await db.query(sql, [email]);

  if (result.rows.length === 0) {
    console.log("No user found with this email:", email);
  } else {
    console.log("User found:", result.rows[0]); // Log the found user
  }

  return result.rows[0];
};

// Find user by ID
const findUserById = async (id) => {
  const sql = `SELECT id, "firstName", "lastName", email FROM users WHERE id = $1`;
  const result = await db.query(sql, [id]);
  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};
