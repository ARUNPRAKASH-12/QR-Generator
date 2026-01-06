import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    if (!qrRef.current) return;
    
    const svg = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    
    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `qr-code-${Date.now()}.png`;
        link.click();
      });
    };
    
    img.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgData)))}`;
  };

  return (
    <div className="qr-generator-container">
      <h2 className="generator-title">QR Code Generator</h2>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="qr-input"
        />
      </div>

      <div className="controls-section">
        <div className="control-group">
          <label>Size:</label>
          <input
            type="range"
            min="100"
            max="400"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <span>{size}px</span>
        </div>

        <div className="color-controls">
          <div className="color-control">
            <label>Background:</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
          <div className="color-control">
            <label>Foreground:</label>
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      {text && (
        <div className="qr-display" ref={qrRef}>
          <QRCodeSVG
            value={text}
            size={size}
            bgColor={bgColor}
            fgColor={fgColor}
            level="H" // High error correction
            includeMargin={true}
          />
          <button className="download-btn" onClick={downloadQRCode}>
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;

