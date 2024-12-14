# Unhandled Database Error in Express.js Application

This repository demonstrates a common error in Express.js applications where unhandled database errors can cause the application to crash.

## Description

The `bug.js` file contains an Express.js application that interacts with a database.  If a database query fails, the application crashes without gracefully handling the error.  The `bugSolution.js` file provides a solution to this problem.

## How to Reproduce

1. Clone this repository.
2. Ensure you have Node.js and npm installed.
3. Run `npm install` to install dependencies (you'll need a database driver for the query to work - for example mysql2).
4. Run `node bug.js`.
5. Simulate a database error (e.g., by making an invalid query).

You'll observe that the application crashes.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle database errors.  Error handling is implemented using try...catch blocks and provides a more robust and user-friendly experience in case of failures.

This example emphasizes the importance of robust error handling in server-side applications, especially when dealing with external resources like databases.