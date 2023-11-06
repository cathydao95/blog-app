-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50) UNIQUE NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     hashed_password VARCHAR(128) NOT NULL
-- );

-- INSERT INTO users (username, email, hashed_password) VALUES
--     ('user1', 'user1@test.com', 'password1'),
--     ('user2', 'user2@test.com', 'password2'),
--     ('user3', 'user3@test.com', 'password3');


-- CREATE TABLE posts (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     content TEXT NOT NULL,
--     author_id INT REFERENCES users(user_id),
--     created_at TIMESTAMP DEFAULT NOW(),
--     updated_at TIMESTAMP DEFAULT NOW()
-- );


CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    content TEXT NOT NULL,
    img VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO posts (title, content, author) VALUES
    ('First Blog Post', 'This is the content of the first post.', 'John Doe'),
    ('Second Blog Post', 'This is the content of the second post.', 'Jane Smith');



    INSERT INTO posts (title, content, author) VALUES
    ('The Art of Cooking', 'Learn the secrets of gourmet cooking and become a master chef.', 'Alice Johnson');