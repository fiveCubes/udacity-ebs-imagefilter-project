# 🖼️ Image Filter API - Hosted on AWS Elastic Beanstalk

This project is a simple **Image Filter API** built with Node.js and Express, designed to demonstrate cloud deployment using **AWS Elastic Beanstalk**. The application accepts a publicly accessible image URL, applies a grayscale filter using the Jimp library, and returns the filtered image.

## 🚀 Features

- Accepts HTTP GET requests with an image URL
- Downloads and filters the image (resize + grayscale)
- Returns the processed image file
- Deployable on AWS Elastic Beanstalk
- Demonstrates use of middleware, file handling, and cloud hosting

---

## 🛠️ Getting Started

### 🔧 Prerequisites

- Node.js (v14+ recommended)
- Git

---

### 📦 Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fiveCubes/udacity-ebs-imagefilter-project.git
   cd udacity-ebs-imagefilter-project

   npm install

   npm run dev

2. **Test the application**

    http://localhost:{port}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg
   

3. **ebs public application link**

    [Link Text](http://elastic-bean-stalk-image-processing-dev.us-east-1.elasticbeanstalk.com/)
