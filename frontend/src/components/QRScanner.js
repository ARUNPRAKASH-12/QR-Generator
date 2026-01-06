import React, { useState, useEffect, useRef } from "react";
import { BrowserQRCodeReader } from "@zxing/library";

const QRScanner = () => {
  const [data, setData] = useState("No QR code scanned");
  const [cameraError, setCameraError] = useState(false);
  const [scannerActive, setScannerActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const videoRef = useRef(null);
  const codeReader = useRef(new BrowserQRCodeReader());

  const formatData = (text) => {
    const isUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(text);
    return isUrl ? (
      <a 
        href={text} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        {text}
      </a>
    ) : (
      text
    );
  };

  useEffect(() => {
    if (scannerActive) {
      setIsProcessing(true);
      setData("Scanning...");
      
      codeReader.current
        .decodeFromVideoDevice(undefined, videoRef.current, (result, error) => {
          if (result) {
            setData(result.getText());
            stopScanning();
          }
          if (error && !result) {
            console.warn(error);
          }
        })
        .then(() => setIsProcessing(false))
        .catch((err) => {
          console.error("Error initializing QR scanner:", err);
          setCameraError(true);
          setIsProcessing(false);
        });
    }

    return () => {
      if (scannerActive) {
        codeReader.current.reset();
      }
    };
  }, [scannerActive]);

  const startScanning = () => {
    setScannerActive(true);
    setCameraError(false);
  };

  const stopScanning = () => {
    setScannerActive(false);
    codeReader.current.reset();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsProcessing(true);
    setData("Processing image...");

    try {
      const result = await codeReader.current.decodeFromImage(undefined, file);
      setData(result.getText());
    } catch (err) {
      console.error("Error decoding QR from image:", err);
      setData("No QR code found in the image.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="qr-scanner-container">
      
      {cameraError ? (
        <div className="error-message">
          <p>Camera access denied or not available. Please check permissions.</p>
          <p>Alternatively, try scanning from an image file.</p>
        </div>
      ) : scannerActive ? (
        <video 
          ref={videoRef}
          className="qr-video"
          style={{ width: '100%', maxWidth: '400px' }}
        />
      ) : (
        <div className="scanner-placeholder">
          <p>Camera preview will appear here</p>
        </div>
      )}
      
      <div className="scan-result">
        <p>Scanned Data: {formatData(data)}</p>
      </div>
      
      <div className="button-group">
        <button
          className={`scan-btn ${scannerActive ? 'active' : ''}`}
          onClick={startScanning}
          disabled={scannerActive || isProcessing}
        >
          {isProcessing ? 'Initializing...' : 'Start Scanning'}
        </button>
        
        <button
          className="stop-btn"
          onClick={stopScanning}
          disabled={!scannerActive}
        >
          Stop Scanning
        </button>
        
        <button
          className="upload-btn"
          onClick={() => document.getElementById('file-input').click()}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Scan from Image'}
        </button>
        
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default QRScanner;