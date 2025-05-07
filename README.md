# mama-k-demo

Monorepo for React frontend and Node/Express backend.

## Getting Started

### 1. Setup server environment variables

```sh
cd server
cp .env.example .env
# Open .env and fill in the required keys
```

### 2. Start the client (React frontend)

```sh
cd client
npm install
npm run dev
# The app will be available at http://localhost:5173 (default Vite port)
```

### 3. Start the server (Node/Express backend)

```sh
cd server
npm install
npm run start
# The API will be available at http://localhost:5000 (or your configured port)
```

## Deployment

### Client Deployment (GitHub Pages)

The frontend is configured to deploy to GitHub Pages:

```sh
cd client
npm run deploy
```

After deployment, your site will be live at: https://leonnuxy.github.io/mama-k-demo/

#### First-time Setup

If this is your first deployment, make sure to:

1. Push all changes to GitHub
2. Run the deploy script (this creates a gh-pages branch)
3. Configure GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Server Deployment

The server would need to be deployed to a platform that supports Node.js applications (Heroku, Render, AWS, etc.). 
Local deployment instructions are provided in the Getting Started section.

## Project Structure

- `/client` - React/Vite frontend application
- `/server` - Express/Node.js backend API