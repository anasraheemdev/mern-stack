# MERN Stack Boilerplate

A comprehensive full-stack boilerplate featuring MongoDB, Express.js, React.js, and Node.js (MERN) with modern development practices and essential integrations.

## ⚡️ Quick Start

```bash
# Clone the repository
git clone https://github.com/anasraheemdev/mern-stack

# Install dependencies for server
cd mern-stack
npm install

# Install dependencies for client
cd client
npm install

# Run both server and client
cd ..
npm run dev
```

## 🔥 Features

### Backend
- **Express.js Server**: Fast and minimalist web framework
- **MongoDB Database**: NoSQL database integration with Mongoose
- **JWT Authentication**: Secure authentication system
- **Input Validation**: Request data validation using express-validator
- **Error Handling**: Global error handling middleware

### Frontend
- **React.js**: Modern UI development with hooks
- **Redux Toolkit**: State management with Redux
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **Material-UI**: Modern UI components
- **Form Validation**: Client-side form validation

## 📁 Project Structure

```
mern-stack/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # Redux store and slices
│   │   ├── services/     # API services
│   │   └── utils/        # Utility functions
│   └── package.json      # Frontend dependencies
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── utils/           # Utility functions
├── .env                  # Environment variables
└── package.json         # Backend dependencies
```

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- cors
- dotenv

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- Material-UI
- Axios
- React Hook Form
- ESLint
- Prettier

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern_db
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

## 🔒 Authentication

The boilerplate includes a complete authentication system:

- User registration
- User login
- JWT token management
- Protected routes
- Role-based authorization

## 📡 API Endpoints

### Auth Routes
```
POST /api/auth/register   - Register new user
POST /api/auth/login      - Login user
GET  /api/auth/profile    - Get user profile
```

### User Routes
```
GET    /api/users         - Get all users
GET    /api/users/:id     - Get user by ID
PUT    /api/users/:id     - Update user
DELETE /api/users/:id     - Delete user
```

## 💻 Development

```bash
# Run backend only
npm run server

# Run frontend only
npm run client

# Run both frontend and backend
npm run dev
```

## 🧪 Testing

```bash
# Run backend tests
npm run test:server

# Run frontend tests
cd client && npm test
```

## 🚀 Deployment

### Backend
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Frontend
```bash
# Build for production
cd client && npm run build
```

## 🔍 Code Quality

- ESLint configuration for code linting
- Prettier for code formatting
- Husky for pre-commit hooks
- Jest configuration for testing

## 🛡️ Security Features

- CORS protection
- Helmet security headers
- Rate limiting
- Password hashing
- XSS protection
- CSRF protection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

Common issues and solutions:

1. **MongoDB Connection Issues**
   - Ensure MongoDB is running locally
   - Check connection string in `.env`
   - Verify network connectivity

2. **Node.js Version Conflicts**
   - Use Node.js version 14 or higher
   - Clear npm cache if needed

3. **Port Conflicts**
   - Change PORT in `.env` if 5000 is in use
   - Ensure no other service is using port 3000 for client

## 📮 Contact

Anas Raheem - [@anasraheemdev](https://github.com/anasraheemdev)

Project Link: [https://github.com/anasraheemdev/mern-stack](https://github.com/anasraheemdev/mern-stack)

## 🙏 Acknowledgments

- MERN Stack community
- Open source contributors
- React.js team
- MongoDB team

---

⭐️ If you find this boilerplate helpful, please star the repository!
