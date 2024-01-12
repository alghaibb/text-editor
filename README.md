# JATE - Just Another Text Editor

JATE, standing for 'Just Another Text Editor', is a versatile, single-page text editor designed to operate within a web browser while fulfilling Progressive Web Application (PWA) standards. This editor incorporates various data persistence methods to ensure reliability and continuity, even when certain browser-specific features are unsupported. Hosted on Heroku, JATE is accessible online but also boasts offline functionality, providing uninterrupted service regardless of internet connectivity. The interface of JATE is crafted to offer an intuitive and streamlined user experience, making it an ideal solution for users seeking a dependable and efficient text editing tool in a web environment.

## Table of Contents

- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage/Examples](#usageexamples)
- [License](#license)
- [Feedback](#feedback)

## Screenshots

![Live GIF Screenshot](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczAzZTN4cXNjNjlvcjEwYXA2bzZoaXJzc29jdTFrd3lscnh3N3hrYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mptI8yGxcJ1kCF6Pzb/giphy.gif)

[Back to Top](#table-of-contents)

## Tech Stack

**Client:**

[![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/)

[![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)

[![Webpack Dev Server](https://img.shields.io/badge/Webpack_Dev_Server-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white)](https://webpack.js.org/configuration/dev-server/)

[![Workbox Webpack Plugin](https://img.shields.io/badge/Workbox_Webpack_Plugin-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)

[![CSS Loader](https://img.shields.io/badge/CSS_Loader-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://webpack.js.org/loaders/css-loader/)

[![HTML Webpack Plugin](https://img.shields.io/badge/HTML_Webpack_Plugin-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://webpack.js.org/plugins/html-webpack-plugin/)

[![IDB](https://img.shields.io/badge/IDB-4285F4?style=for-the-badge&logo=indexeddb&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

**Server:** 

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[![Express.js](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

[![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)](https://nodemon.io/)

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Deployment:** 

[![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com/)

[Back to Top](#table-of-contents)

## Demo

[Click here to view the deployed app](https://jate-mjs-text-editor-b5a1857eadf6.herokuapp.com/)

[Back to Top](#table-of-contents)

## Features of JATE Application

### Progressive Web Application (PWA) Compliance

- Designed to meet PWA standards, ensuring it's installable and provides an app-like experience.
- Utilizes `webpack-pwa-manifest` and `workbox-webpack-plugin` for offline functionality and enhanced user experience.

### Modern JavaScript Support

- Employs Babel (`@babel/core`, `@babel/plugin-transform-runtime`, etc.) for writing modern JavaScript with broad browser compatibility.
- Ensures that the latest JavaScript features can be used without compatibility concerns.

### Efficient Style and Script Loading

- Uses `css-loader` and `style-loader` to handle CSS, allowing dynamic loading and application of styles.
- `babel-loader` facilitates the transpiling of JavaScript files using Babel and webpack, ensuring efficient script loading.

### Other Key Features

- **Development and Production Build Support:** Scripts for development (`webpack-dev-server`), production build (`webpack --mode production`), and continuous file watching (`webpack --watch`).
- **Robust Dependency Management:** Includes a wide range of `devDependencies` and `dependencies` like `html-webpack-plugin`, `http-server`, and `idb` for IndexedDB support, highlighting a comprehensive approach to efficient web development.

[Back to Top](#table-of-contents)

## Installation

Follow these steps to install and run the JATE text editor:

### Prerequisites

Ensure you have Node.js installed on your system. If not, download and install it from [Node.js official website](https://nodejs.org/).

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/alghaibb/text-editor.git
cd text-editor
```

### Install Dependencies

Inside the cloned directory, install the necessary dependencies:

```bash
npm install
```

[Back to Top](#table-of-contents)

## Usage/Examples

After successfully installing the "JATE" text editor, follow these steps to use it:

### Starting the Application

1. **Start the Server:**
   Run the following command in your terminal to start the application server:

```bash
npm start
```

This command will compile the application and start a local server.

2. **Accessing the Editor:** Once the server is running, open your web browser and go to:

```bash
http://localhost:3000

```

[Back to Top](#table-of-contents)

## License

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Back to Top](#table-of-contents)

## Feedback

If you have any feedback, please reach out to me at mjaderi@gmail.com

[Back to Top](#table-of-contents)