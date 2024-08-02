# PreProd-Corp-Buildathon-2024-Algorithm-Avengers

### This is the main Production Repository for Avenge-AI

---

### To check main contributions, refer the Development and Pre-Production Repositories

- **Web**: [HACKATHON-FRONT-AND-NODE](https://github.com/aryanshdev/HACKATHON-FRONT-AND-NODE)
- **ML Model**: [HACKATHON-MODEL](https://github.com/aryanshdev/HACKATHON-MODEL)

---

## Table of Contents
1. [Introduction and Overview](#introduction-and-overview)
2. [Getting Started](#getting-started)
3. [Architecture and Design](#architecture-and-design)
4. [Homepage and Login Page](#homepage-and-login-page)
5. [User Task Page](#user-task-page)
6. [Dependencies](#dependencies)
7. [Installation](#installation)
8. [User Operations](#user-operations)
9. [Development and Contribution](#development-and-contribution)
10. [Deployment](#deployment)
11. [Maintenance and Support](#maintenance-and-support)

---

## Introduction and Overview
### Project Description
Avenge-AI is a cutting-edge platform designed to enable user to input a datasest file and perform data transformation operations on it , see its output and perform model training.


### Stakeholders
- Developers (to be added)

---

## Getting Started

### Prerequisites
- Node.js v14 or higher
- Python 3.8 or higher
- [Other requirements]

### Installation Guide
1. **Clone the Repository**
    ```bash
    git clone https://github.com/aryanshdev/PreProd-Corp-Buildathon-2024-Algorithm-Avengers.git
    cd PreProd-Corp-Buildathon-2024-Algorithm-Avengers
    ```
2. **Frontend Setup**
    ```bash
    cd frontend
    npm install
    ```
3. **Backend Setup**
    ```bash
    cd backend
    npm install
    ```
4. **ML Model Setup**
    ```bash
    cd models
    pip install -r requirements.txt
    ```

---

## Architecture and Design

### System Architecture
![System Architecture Diagram](https://excalidraw.com/#room=2d6eb91a5d134d986457,QaWlvLL1hpMHnSNLT7ObCw)


---

## Homepage and Login Page

![Homepage Screenshot](https://github.com/user-attachments/assets/25c6edfc-c8a7-40c4-aa3f-cdb6581d449f)
![Login Page Screenshot](https://github.com/user-attachments/assets/5179cb35-3dd8-48be-87dc-bbf99c7aad3c)

---

## User Task Page

![User Task Page Screenshot](https://github.com/user-attachments/assets/d3771fa1-8e08-48b0-b074-d2da18a0c6a2)

---

## Dependencies

### Frontend Dependencies
- Ensure you have Node.js installed.
- Run the following command in the frontend folder:
    ```bash
    npm install
    ```

### Backend Dependencies
- Ensure you have Node.js installed.
- Run the following command in the backend folder:
    ```bash
    npm install
    ```

### ML Model Dependencies
- Ensure you have Python installed.
- Run the following command in the Models folder:
    ```bash
    pip install -r models/requirements.txt
    ```

---

## User Operations

### Upload Data
- Upload Data (dataset file)

### Data Transformation: Functions
1. **Clean Columns**
2. **Remove Duplicates**
3. **Check Missing Values**
4. **Handle Missing Non-Numeric Data**
5. **Handle Missing Numeric Data**
6. **Convert the Data to Numeric**
7. **Normalize Date Column**
8. **One-Hot Encoding (for specific columns)**
9. **Get Column Data Types**
10. **Drop Rows Without Target**

*Generate and Display Outputs each time*

### Model Training
1. **SVM Model**
   - Parameters: kernel, C, gamma

2. **Random Forest**
   - Parameters: n-estimators, max depth, minSampleSplit

3. **XGBoost**
   - Parameters: n-estimators, max depth, learning rate

4. **Decision Tree**
   - Parameters: max depth, minSampleSplit, kernel

5. **Bagging**
   - Parameters: n-estimators, Max sample, Max feature

*Outputs:*
- Accuracy (test and train)

---

## Development and Contribution

### Coding Standards

### Contribution Guidelines
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

### Testing
- Run tests using:
    ```bash
    npm test
    ```

---

## Deployment

### Deployment Guide
1. **Setup Environment Variables**
2. **Build the Project**
    ```bash
    npm run build
    ```
3. **Deploy to Production**
    ```bash
    npm run deploy
    ```

---

## Maintenance and Support

### Known Issues
- File saving issue.

### FAQ
- Frequently asked questions and answers.

### Support
- Contact: [aryanshdev@gmial.com]
- Join the discussion: [link to forum or chat]

---

## Appendices

### Glossary

### References

### Licenses
