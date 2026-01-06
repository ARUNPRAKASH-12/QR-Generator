# 🔐 QR-Generator

A full-stack QR code generation and scanning application. This system enables users to generate QR codes for any text or data and scan them using their device camera.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-19.0.0-61dafb.svg)

## ✨ Features

### Frontend
- 📱 **QR Code Generation**: Create QR codes from any text or data
- 🔍 **QR Code Scanner**: Real-time QR code scanning using device camera
- 💾 **Save & Download**: Download generated QR codes as images
- 🎨 **Responsive Design**: Works seamlessly across desktop and mobile devices
- ⚡ **Real-time Updates**: Instant QR code generation and scanning

### Backend
- 🔒 **Secure API**: RESTful API endpoints for QR code storage
- 💾 **MongoDB Integration**: Persistent storage for QR code records
- 🚀 **Express Server**: Fast and reliable backend infrastructure
- 📊 **History**: Track and retrieve previously generated QR codes

## 🏗️ Project Structure

```
QR-Generator/
├── backend/
│   ├── server.js          # Express server configuration
│   ├── db.js              # MongoDB connection and models
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── QRGenerator.js   # QR code generation component
│   │   │   └── QRScanner.js     # QR code scanner component
│   │   ├── App.js         # Main application component
│   │   ├── App.css        # Application styles
│   │   ├── index.js       # Application entry point
│   │   └── styles.css     # Global styles
│   ├── public/
│   │   ├── index.html     # HTML template
│   │   └── manifest.json  # PWA manifest
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/QR-Generator.git
   cd QR-Generator
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/qr-generator
   ```

4. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The backend server will run on `http://localhost:5000`

2. **Start the Frontend Application**
   
   Open a new terminal:
   ```bash
   cd frontend
   npm start
   ```
   The React app will open automatically at `http://localhost:3000`

## 📡 API Endpoints

### QR Codes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/qrcodes` | Create a new QR code record |
| GET | `/api/qrcodes` | Retrieve all QR code records |

#### Request Body (POST /api/qrcodes)
```json
{
  "data": "Your text or data here",
  "description": "Optional description"
}
```

#### Response
```json
{
  "_id": "qrcode_id",
  "data": "Your text or data here",
  "description": "Optional description",
  "createdAt": "2026-01-06T12:00:00.000Z",
  "updatedAt": "2026-01-06T12:00:00.000Z"
}
```

## 🛠️ Technologies Used

### Frontend
- **React** (19.0.0) - UI framework
- **qrcode.react** - QR code generation
- **@zxing/browser** - QR code scanning
- **Axios** - HTTP client
- **react-scripts** - Build tooling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment configuration
- **CORS** - Cross-origin resource sharing

## 🔒 Security Features

- 🔐 Secure data transmission
- 🚫 CORS protection
- ✅ Input validation and sanitization

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Arunprakash M

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by QR code technology and its versatile applications
- Built with ❤️ for easy QR code generation and scanning

## 📧 Contact

For questions or support, please open an issue or contact the maintainers.

---

**⭐ If you find this project useful, please consider giving it a star!**
