# HDFC Banking Application - Microservices Architecture

## Overview

A Banking Management System developed using Spring Boot Microservices, React.js, MySQL, Eureka Service Discovery, and API Gateway.

The application supports:

* User Login
* User Profile Management
* Deposit Money
* Withdraw Money
* Fund Transfer
* Transaction History
* Notification Service
* Service Discovery using Eureka
* API Gateway Routing

---

## Architecture

React Frontend

↓

API Gateway (8081)

↓

USER-SERVICE (8082)

BANK-SERVICE (8080)

TRANSACTION-SERVICE (8083)

NOTIFICATION-SERVICE (8084)

↓

MySQL Database

↓

EUREKA SERVER (8761)

---

## Technologies Used

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Spring Cloud Eureka
* Spring Cloud Gateway
* Maven

### Frontend

* React.js
* Axios
* React Router

### Database

* MySQL

### Tools

* Git
* GitHub
* Postman
* Spring Tool Suite (STS)

---

## Microservices

### Eureka Server

Port: 8761

Service Discovery and Registration.

### API Gateway

Port: 8081

Single Entry Point for all APIs.

### User Service

Port: 8082

Features:

* Register User
* Login User
* Profile Management
* Change Password

### Bank Service

Port: 8080

Features:

* Deposit
* Withdraw
* Transfer
* Account Details

### Transaction Service

Port: 8083

Features:

* Transaction History
* Transaction Details

### Notification Service

Port: 8084

Features:

* Deposit Alerts
* Transfer Alerts
* Notification APIs

---

## Running the Project

### Start Services in Order

1. Eureka Server
2. API Gateway
3. Bank Service
4. User Service
5. Transaction Service
6. Notification Service
7. React Application

---

## API Examples

### Login

POST
/api/auth/login

### Deposit

POST
/api/account/deposit

### Withdraw

POST
/api/account/withdraw

### Transfer

POST
/api/account/transfer

### Transactions

GET
/transactions

---

## Future Enhancements

* JWT Authentication
* Spring Security
* Docker
* Kubernetes
* Kafka Integration
* Email Notifications
* SMS Notifications

---

## Author

Pradyumna Khot

Java Full Stack Developer

GitHub Repository:
https://github.com/Pradhumnkhot/hdfc-banking-app
