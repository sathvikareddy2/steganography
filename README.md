<h1 align="center">Steganography Tool</h1>

<p align="center">
	A simple web-based tool to hide secret messages inside images using LSB (Least Significant Bit) Steganography.
</p>

---

## 📝 Introduction

**Steganography** is the technique of hiding secret information within ordinary files like images, making the hidden data invisible to unintended viewers.  
Unlike cryptography, which protects the content, steganography hides the existence of the message itself.

This application allows users to:
- Encode text messages inside image files.
- Decode hidden text from stego images.
- Experience a simple and responsive web interface.

---

## ✨ Features

- 🔐 Hide secret text inside images (using LSB technique).
- 🔓 Retrieve hidden messages from images.
- 🖼️ Supports common image formats (PNG, JPEG).
- 💻 Built with React for an intuitive user experience.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Acknowledgements

This project draws inspiration from open-source implementations of steganography tools.  
I have made my own modifications, customization, and interface improvements to build this project.

### Installation

```bash
# Clone this repository
git clone https://github.com/sathvikareddy2/steganography.git

# Navigate into the project folder
cd steganography

# Install project dependencies
npm install

# Start the development server
npm start

