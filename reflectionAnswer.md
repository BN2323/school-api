1) What are the main benefits of using JWT for authentication?
JWTs make authentication stateless, so the server does not need to store sessions. They are portable and can be used across different services. They ensure data integrity through signatures and allow quick authorization by including user info in the token.

2) Where should you store your JWT secret and why?
Store it in an environment variable, not in your source code. This keeps it safe from accidental leaks and makes it easy to change without touching your codebase.

3) Why is it important to hash passwords even if the system is protected with JWT?
Hashing protects passwords in the database. JWT secures requests, but if the database is compromised, hashed passwords prevent attackers from seeing plain-text passwords.

4) What might happen if a protected route does not check the JWT?
Anyone could access data or perform actions without being authorized, which can lead to data leaks and security issues.

5) How does Swagger help frontend developers or API consumers?
Swagger provides clear, interactive API docs. It shows available routes, required data, and responses. This helps developers understand and test the API easily.

6) What tradeoffs come with using token expiration (e.g., 1 hour)?
Short expiration times improve security by limiting the time a stolen token can be used. The tradeoff is that users may need to log in more often or use refresh tokens to maintain a smooth experience.