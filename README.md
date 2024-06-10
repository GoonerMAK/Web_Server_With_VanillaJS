# Project 1.0 - Vanilla Essence

## Overview

The Vanilla Essence project involves the development of a server application that serves three styled HTML pages alongside a server.js file that handles all server-related tasks. The main page, index.html, acts as the homepage, featuring links to two other HTML pages: euro24.html and world-cup-t20.html. Each of these pages showcases a list of fixtures for their respective competitions.

## Components

### HTML Pages
- **index.html**: Serves as the home page with links to the other two pages.
- **euro24.html**: Displays a list of Euro football fixtures and contains a form to add new fixtures.
- **world-cup-t20.html**: Displays a list of World Cup T20 fixtures.

## Routes

- **'/'**: Represents the index.html page.
- **'/euro'**: Represents the euro24.html page.
- **'/wc-t20'**: Represents the world-cup-t20.html page.

## The Logic (server.js)

- **GET Requests**: Serves different HTML pages based on the requested URL.
- **POST Requests to '/euro'**: Parses form data, appends it to the euro24.html page, and sends back the updated HTML.
- **Listening Port**: Listens on port 4000.

## Request and Response Handling

- The server handles incoming requests using `http.createServer`.
- It differentiates between GET and POST requests using `req.method`.
- GET requests are handled by reading and serving HTML or CSS files using `fs.readFile` and writing the file content to the response using `res.write`.
- POST requests to '/euro' are handled by listening to the 'data' event on the request stream to collect form data, parsing it using `URLSearchParams`, and then reading the euro24.html file to append the form data. Finally, it responds with the updated HTML content.

