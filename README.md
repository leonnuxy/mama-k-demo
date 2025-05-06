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