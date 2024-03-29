const { Client } = require("pg");
const client = new Client("postgres://localhost:5432/template1");

// USERS METHODS

async function createUser({ username, password, name, location }) {
  try {
    const { rows } = await client.query(
      `INSERT INTO users(username, password, name, location) 
          VALUES ($1, $2, $3, $4)
          ON CONFLICT (username) DO NOTHING
          RETURNING *;
          `,
      [username, password, name, location]
    );

    return rows;
  } catch (err) {
    throw err;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT id, username, name, location, active FROM users;`
  );

  return rows;
}

async function updateUser(id, fields = {}) {
  // build the set string
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  if (setString.length === 0) {
    return;
  }

  try {
    const {
      rows: [user],
    } = await client.query(
      `
        UPDATE users
        SET ${setString}
        WHERE id=${id}
        RETURNING *;
      `,
      Object.values(fields)
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(`
        SELECT id, username, name, location, active
        FROM users
        WHERE id=${userId}
      `);

    if (!user) {
      return null;
    }

    user.posts = await getPostsByUser(userId);

    return user;
  } catch (error) {
    throw error;
  }
}

//  POSTS METHODS
async function createPost({ authorId, title, content }) {
  try {
    const { rows } = await client.query(
      `INSERT INTO posts("authorId", title, content) 
        VALUES ($1, $2, $3)
        ON CONFLICT (id) DO NOTHING
        RETURNING *;
        `,
      [authorId, title, content]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function updatePost(id, fields = {}) {
  // build the set string
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  // return early if this is called without fields
  if (setString.length === 0) {
    return;
  }

  try {
    const {
      rows: [post],
    } = await client.query(
      `
        UPDATE posts
        SET ${setString}
        WHERE id=${id}
        RETURNING *;
      `,
      Object.values(fields)
    );

    return post;
  } catch (error) {
    throw error;
  }
}

async function getAllPosts() {
  try {
    const { rows } = await client.query(
      `SELECT id, "authorId", title, content, active FROM posts;`
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getPostsByUser(userId) {
  try {
    const { rows } = await client.query(`
        SELECT * 
        FROM posts
        WHERE "authorId"=${userId};
      `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function createTag() {
  if (!tagList.length) {
    return;
  }

  const inserValues = tagList.map((_, idx) => `$${idx + 1}`).join("), (");

  const selectValues = tagList.map((_, idx) => `$${idx + 1}`).join(", ");

  try {
    const { rows } = await client.query(`
        INSERT INTO tags(name)
        VALUES ('#tag'), ('#othertag'), ('#moretag')
        ON CONFLICT (name) DO NOTHING;
      `);

    return rows;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  client,
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  createPost,
  updatePost,
  getAllPosts,
  getPostsByUser,
};
