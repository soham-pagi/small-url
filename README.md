# URL Shortener

A simple URL shortener application built with Node.js, Express, and a minimalist front-end design.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Front-End](#front-end)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Introduction

URL Shortener is a web application that enables you to create short versions of long URLs, making them easier to share and manage. The project is built using Node.js and Express for the backend, along with a minimalist front-end design for an intuitive user experience.

## Features

- Generate short URLs for long links.
- Redirect users from short URLs to the original long URLs.
- Store URL mappings in a database for easy retrieval.
- Simple and responsive web interface.
- Elegant and user-friendly design.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/soham-pagi/small-url.git
   ```
2. Navigate to the project directory:
   ```sh
   cd small-url
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
2. The api will be available at: http://localhost:4000
3. Open the index.html file in the root directory with live server

## Front-End
The front-end of the URL Shortener application features a clean and minimalistic design, providing users with a straightforward experience:

- Home Page: Users can enter a long URL to generate a short link.
- Shortened Links: The application displays a list of generated short links for easy reference.
- Redirection: Users can click on short links to be redirected to the original URL.

## Dependencies
- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- Mongoose: MongoDB object modeling tool.

## Contributing
Contributions are welcome! If you have any improvements or features you'd like to add, please:

1. Fork the repository.
2. Create a new branch.
3. Implement your feature or changes.
4. Submit a pull request.
