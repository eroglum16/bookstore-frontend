
# Online Bookstore - Front End

This is a React application built with TypeScript and styled using Tailwind CSS.

## Prerequisites

Before running the application, ensure that you have the following installed:

- **Node.js 16** or higher
- **npm 7** or higher

## Getting Started

### 1. Install dependencies

Install the required npm dependencies by running:

```bash
npm install
```

### 2. Set up the environment

Ensure the `REACT_APP_API_URL` in the `.env.development` file matches the URL where your API is running.

By default it is:

```
REACT_APP_API_URL=http://localhost:8080
```

### 3. Run the application

Start the development server:

```bash
npm start
```

The app will be running on:

```
http://localhost:3000
```

## Tailwind CSS

The application is styled using Tailwind CSS. You can modify styles in the `src/tailwind.config.js` file or by directly adding Tailwind classes in your components.

## Additional Notes

- To build the application for production: `npm run build`
- To run tests: `npm test`
- Run `npm run generate` to generate the API client whenever there are changes in the API

---

