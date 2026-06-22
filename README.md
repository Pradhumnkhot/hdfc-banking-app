# 🏦 HDFC Banking Application

A Full Stack Banking Application developed using **React.js**, **Spring Boot**, and **MySQL**.

## 🚀 Features

* User Login Authentication
* Deposit Money
* Withdraw Money
* Fund Transfer
* Account Statement PDF Download
* Transaction History
* User Profile Management
* Change Password
* Voice Banking Navigation
* Responsive UI Design

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* Axios
* React Router DOM
* React Toastify
* React Speech Recognition

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Maven

### Database

* MySQL

---

## 📂 Project Structure

```text
hdfc-banking-app
│
├── my-react-app      # React Frontend
│
├── newstar-1         # Spring Boot Backend
│
└── bank_management.sql   # Database Script
```

---

## ⚙️ Setup Instructions

### Clone Repository

```bash
git clone https://github.com/Pradhumnkhot/hdfc-banking-app.git
```

### Frontend Setup

```bash
cd my-react-app
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd newstar-1
mvn spring-boot:run
```

Backend will run on:

```text
http://localhost:8080
```

### Database Setup

1. Open MySQL Workbench
2. Create database:

```sql
CREATE DATABASE bank_management;
```

3. Import:

```text
bank_management.sql
```

---

## 🎤 Voice Banking Commands

Speak the following commands:

* Deposit
* Withdraw
* Transfer
* Statement
* History
* Profile
* Password
* Logout

The application automatically navigates to the corresponding page.

---

## 📸 Screenshots

Add screenshots of:

* Login Page
* Dashboard
* Deposit Page
* Transfer Page
* Statement Page
* Voice Banking Feature

---

## 👨‍💻 Author

**Pradhumn Khot**

Java Full Stack Developer

### GitHub Repository

https://github.com/Pradhumnkhot/hdfc-banking-app
