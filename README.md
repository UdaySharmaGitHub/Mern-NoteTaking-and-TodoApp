# MERN Note and Todo App

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to create, update, and manage notes and todo tasks efficiently.

## Images
![alt](./images/Screenshot%202025-03-30%20151643.png)
![alt](./images/Screenshot%202025-03-30%20151817.png)
![alt](./images/Screenshot%202025-03-30%20151833.png)
![alt](./images/Screenshot%202025-03-30%20151728.png)
![alt](./images/Screenshot%202025-03-30%20151752.png)
![alt](./images/Screenshot%202025-03-30%20151845.png)


## Features
- User Authentication (JWT-based authentication)
- Create, update, and delete notes & todos
- Responsive UI with TailwindCSS
- Notifications with React-Toastify
- Secure password hashing with bcrypt
- RESTful API with Express.js and MongoDB

## Tech Stack
### Frontend:
- React.js
- React Router
- TailwindCSS
- Axios
- React Toastify
- Heroicons
- React Icons

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt for password hashing
- CORS for cross-origin support
- Dotenv for environment variables

## Installation and Setup
### Prerequisites:
- Node.js (v18+ recommended)
- MongoDB (local or cloud-based like MongoDB Atlas)

### Clone the repository:
```bash
git clone https://github.com/UdaySharmaGitHub/Mern-NoteTaking-and-TodoApp.git
cd mern-note-todo-app
```

### Backend Setup:
1. Navigate to the backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file and add the following:
```env
PORT = 3000
CORS_ORIGIN = *
MONGODB_URI = "mongodb://localhost:27017"
ACCESS_TOKEN_SECRET =   FullStack-Mern_NoteTakingApp
ACCESS_TOKEN_EXPIRY =   1d
```
4. Start the backend server:
```bash
npm Start
```

### Frontend Setup:
1. Navigate to the frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the frontend:
```bash
npm run dev
```

### Running the Application
Once both frontend and backend are running, open your browser and visit:
```
http://localhost:5173
```

## Folder Structure
```
mern-note-todo-app/
  ├── backend/
  │   ├── models/
  │   ├── routes/
  │   ├── controllers/
  │   ├── config/
  │   ├── server.js
  ├── frontend/
  │   ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── App.js
  │   ├── main.jsx
```

## API Endpoints
| Method | Endpoint          | Description         |
|--------|------------------|---------------------|
| POST   | /api/auth/signup | Register a user    |
| POST   | /api/auth/login  | Login a user       |
| GET    | /api/notes       | Fetch all notes    |
| POST   | /api/notes       | Create a note      |
| PUT    | /api/notes/:id   | Update a note      |
| DELETE | /api/notes/:id   | Delete a note      |

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## Contact
For any queries, feel free to reach out at [your-email@example.com] or create an issue in the repository.

