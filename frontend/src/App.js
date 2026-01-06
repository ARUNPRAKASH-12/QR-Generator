import React from "react";
import QRGenerator from "./components/QRGenerator";
import QRScanner from "./components/QRScanner";
import "./App.css"; 

const App = () => {
  return (
    <div className="app-container">
      <div className="qr-section">
        <h2>QR Code Generator</h2>
        <QRGenerator />
      </div>
      <div className="qr-section">
        <h2>QR Code Scanner</h2>
        <QRScanner />
      </div>
    </div>
  );
};

export default App;
