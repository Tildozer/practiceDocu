const {
  client,
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  createPost,
  updatePost,
  getAllPosts,
  getPostsByUser,
} = require("./index");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    await client.query(`
      DROP TABLE IF EXISTS post_tags;
      DROP TABLE IF EXISTS tags;
      DROP TABLE IF EXISTS posts;
      DROP TABLE IF EXISTS users;
        `);

    console.log("finished dropping the tables!");
  } catch (err) {
    console.error("Error dropping the tables!");
    throw err;
  }
}

async function createTables() {
  try {
    console.log("starting to build tables...");

    await client.query(
      `CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            active BOOLEAN DEFAULT true
          );
          CREATE TABLE posts (
            id SERIAL PRIMARY KEY,
            "authorId" INTEGER REFERENCES users(id) NOT NULL,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            active BOOLEAN DEFAULT true
          );
          CREATE TABLE tags (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL
          );
          CREATE TABLE post_tags(
            "postId" INTEGER REFERENCES posts(id) UNIQUE,
            "tagId" INTEGER REFERENCES tags(id) UNIQUE
          );
        `
    );

    console.log("finished building tables!");
  } catch (err) {
    throw err;
  }
}

async function createInitialUsers() {
  try {
    console.log("starting to create users...");

    await createUser({
      username: "albert",
      password: "bertie99",
      name: "albert",
      location: "Texas",
    });

    await createUser({
      username: "sandra",
      password: "2sandy4me",
      name: "sandy",
      location: "New York",
    });

    await createUser({
      username: "notsoGlamgal",
      password: "sounglam",
      name: "casey",
      location: "SoCal",
    });

    await createUser({
      username: "notSandra",
      password: "sandyBullets",
      name: "Just Sandra",
      location: "Ain't tellin'",
    });
    await createUser({
      username: "glamgal",
      password: "soglam",
      name: "Joshua",
      location: "Upper East Side",
    });

    console.log("Finished creating users!");
  } catch (err) {
    console.error("Error creating initial users!");
    throw err;
  }
}

async function createInitialPosts() {
  try {
    console.log("starting to create Posts...");

    const [albert, sandra, notsoGlamgal] = await getAllUsers();

    await createPost({
      authorId: albert.id,
      title: "First Post",
      content:
        "This is my first post. I hope I love writing blogs as much as I love writing them.",
    });

    await createPost({
      authorId: albert.id,
      title: "First Post",
      content:
        "This is my first post. I hope I love writing blogs as much as I love writing them.",
    });

    await createPost({
      authorId: sandra.id,
      title: "How does this work?",
      content: "Seriously, does this even do anything?",
    });

    await createPost({
      authorId: notsoGlamgal.id,
      title: "Living the Glam Life",
      content: "Do you even? I swear that half of you are posing.",
    });

    console.log("finished making posts!");
  } catch (err) {
    throw err;
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialPosts();
  } catch (err) {
    throw err;
  }
}

async function testDB() {
  try {
    console.log("Starting to test the databas...");

    const users = await getAllUsers();
    console.log("getAllUsers:", users);

    const posts = await getAllPosts();
    console.log("getAllposts:", posts);

    console.log("Calling updateUser on users[0]");
    const updateUserResult = await updateUser(users[0].id, {
      name: "Newname Sogood",
      location: "Lesterville, KY",
      active: false,
    });
    console.log("Result:", updateUserResult);

    console.log("Calling updatePost on post[0]");
    const updatePostResult = await updatePost(posts[0].id, {
      title: "this is a new post, I hope you are ready for it!",
      content: "potato soup is not fun to make",
    });
    console.log("Result:", updatePostResult);

    console.log("Calling getUserById with 3");
    const albert = await getUserById(3);
    console.log("Result:", albert);

    console.log("finished database tests!");
  } catch (err) {
    console.error("error testing database!");
    throw err;
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally((_) => client.end());
