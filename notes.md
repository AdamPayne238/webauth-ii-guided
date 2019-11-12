# Auth Note

- its about the client (software) connecting to the API, its NOT about the user that is lgoged in.
    - to the server, the same user on the same computer connected from insomnia is different from the same user connected from the browser.
- the server has amnesia, it will not remember the client across requests.
    - http is stateless, there is no common data shared between client and server.
- we need a way to help the server rmember the client across requests.
- you can provide a way to remember dark mode or light mode without logging in by saving user data with cookies and sessions.


## Cookies

- a cookie is a container of data
- a browser will automatically send cookies on every request to the domain associated with the cookie
- the client (browser) will store the cookie in a special place. (NOT called the cookie jar lmao)

A server can send a _header_ (called Set-Cookie) suggesting to the client that it stores a _cookie_.

The client sends the cookies in a _cookie_ header back to the server

## Sessions

- like a database
- used to store data on the server, much like a database.
- "name" logged_in, "value" yes. This is how you know the session is still live.(in applications (cookie)) insed the dev tools in chrome
- express-sessions is the name of the library we will use to manage sessions.