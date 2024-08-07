# PreProd-Corp-Buildathon-2024-Algorithm-Avengers

### This is the main Production Repository for Avenge-AI

---

>#### To check main contributions, refer the Development and Pre-Production Repositories
>
> Web: [HACKATHON-FRONT-AND-NODE](https://github.com/aryanshdev/HACKATHON-FRONT-AND-NODE)
>
> ML Model: [HACKATHON-MODEL](https://github.com/aryanshdev/HACKATHON-MODEL)

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

![file_2024-08-06_18 46 55](https://github.com/user-attachments/assets/77b2705a-33cb-4517-bae4-d8b3bcd6c220)
![file_2024-08-06_18 46 38](https://github.com/user-attachments/assets/d21f25ec-36d3-4dfe-a34c-1e49cd63d4df)


---

## User Task Page
File Upload page:
![file_2024-08-06_18 47 58](https://github.com/user-attachments/assets/b7fd22c4-c00b-4b6c-a26d-8c10d8b69f8f)
Data Transform:
![file_2024-08-06_18 57 08](https://github.com/user-attachments/assets/6e9bd696-9797-4cdd-8cdf-4cb6f95946fe)
Training:
![file_2024-08-06_18 58 45](https://github.com/user-attachments/assets/27f61760-9513-4898-b2c0-57d20c8ff606)
Models:
![file_2024-08-06_19 05 21](https://github.com/user-attachments/assets/08e967a5-8f7e-44e1-9483-d739ca23af08)
![file_2024-08-06_19 05 21](https://github.com/user-attachments/assets/6b5c7568-8c57-4f8d-8d7e-90773f006567)
![file_2024-08-06_19 05 36](https://github.com/user-attachments/assets/652a4f5e-b633-41f0-9dfb-b65192fccee1)
![file_2024-08-06_19 05 46](https://github.com/user-attachments/assets/dfcfad3a-0739-4faa-be2c-07912535452f)
Download Page:
![file_2024-08-06_19 10 48](https://github.com/user-attachments/assets/bfaf4fb8-e18a-4133-b20f-2ceafa1a9316)


### Demo Video
<iframe src="[Preview](https://drive.google.com/file/d/1YoDUebaA-2Xv7cgXL6u0CNcm8qmhkqt4/view?usp=drive_link)" width="640" height="480" allow="autoplay"></iframe>


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
