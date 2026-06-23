# 🏦 HDFC Banking Application - Microservices Architecture

A Full Stack Banking Management System built using **Spring Boot Microservices**, **React.js**, **MySQL**, **Kafka**, **Redis**, **Eureka Service Discovery**, **API Gateway**, and **Resilience4j Circuit Breaker**.

---

## 🚀 Features

### User Management

* User Registration
* User Login Authentication
* Change Password
* User Profile Management
* Role-Based Access (Admin/User)

### Banking Operations

* Deposit Money
* Withdraw Money
* Fund Transfer
* Account Information
* Transaction History

### Microservices Features

* Eureka Service Discovery
* API Gateway Routing
* Kafka Event Streaming
* Redis Caching
* Circuit Breaker Pattern
* JWT Authentication
* Dockerized Deployment

---

# 🏗️ System Architecture

```text
React Frontend (Vite + React)
            |
            v
      API Gateway
        (8081)
            |
---------------------------------------------------
|              |               |                  |
v              v               v                  v
User Service  Bank Service  Transaction Service Notification Service
(8082)        (8080)        (8083)              (8084)

                    |
                    v
                 Kafka
                    |
         ----------------------
         |                    |
         v                    v
Transaction Service    Notification Service

                    |
                    v
                 Redis

                    |
                    v
                 MySQL

                    |
                    v
              Eureka Server
                 (8761)
```

---

# 💻 Technology Stack

## Backend

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Spring Cloud Gateway
* Spring Cloud Eureka
* Spring Kafka
* Redis Cache
* Resilience4j Circuit Breaker
* Maven

## Frontend

* React.js
* Vite
* Axios
* React Router DOM
* CSS

## Database

* MySQL

## DevOps & Tools

* Docker
* Docker Compose
* Git
* GitHub
* Postman
* STS / IntelliJ IDEA

---

# 📦 Microservices

## Eureka Server

**Port:** 8761

### Features

* Service Discovery
* Service Registration

---

## API Gateway

**Port:** 8081

### Features

* Central Entry Point
* Request Routing
* Load Balancing Support

---

## User Service

**Port:** 8082

### Features

* User Registration
* User Login
* Change Password
* Profile Management
* Redis Cache Integration
* JWT Authentication

---

## Bank Service

**Port:** 8080

### Features

* Deposit Money
* Withdraw Money
* Fund Transfer
* Account Details
* Kafka Producer
* Circuit Breaker

---

## Transaction Service

**Port:** 8083

### Features

* Transaction History
* Transaction Details
* Kafka Consumer

---

## Notification Service

**Port:** 8084

### Features

* Deposit Notifications
* Transfer Notifications
* Kafka Consumer

---

# 🔄 Kafka Integration

## Producer

* Bank Service

## Consumers

* Transaction Service
* Notification Service

## Topic

```text
transaction-topic
```

### Event Flow

```text
Bank Service
      |
      v
Kafka Topic
      |
-----------------------
|                     |
v                     v
Transaction Service  Notification Service
```

---

# ⚡ Redis Caching

Redis is used to cache frequently accessed user data.

### Benefits

* Faster API Response
* Reduced Database Load
* Better Performance
* Improved Scalability

---

# 🛡️ Circuit Breaker

Implemented using **Resilience4j**.

### Example

```text
Bank Service
      |
      v
User Service
```

If User Service becomes unavailable:

```text
User Service is Down. Please try again later.
```

Fallback response is returned without affecting the entire application.

---

# 🔐 Authentication

Implemented using JWT (JSON Web Token).

### APIs

#### Register

```http
POST /api/auth/register
```

#### Login

```http
POST /api/auth/login
```

#### Change Password

```http
PUT /api/auth/change-password
```

---

# 💰 Banking APIs

### Deposit

```http
POST /api/account/deposit
```

### Withdraw

```http
POST /api/account/withdraw
```

### Transfer

```http
POST /api/account/transfer
```

### Transactions

```http
GET /transactions
```

### Kafka Test API

```http
POST /kafka/send?msg=Deposit10000
```

---

# 🐳 Running the Project

## Start Infrastructure

```bash
docker compose up -d
```

This starts:

* Kafka
* Zookeeper
* Redis

---

## Start Services

Run services in the following order:

1. Eureka Server
2. API Gateway
3. User Service
4. Bank Service
5. Transaction Service
6. Notification Service
7. React Frontend

---

# 📸 Application Screenshots

### Login Page

<img width="1919" height="871" alt="73a89adf-0f7f-4af5-8906-59b4506b74be" src="https://github.com/user-attachments/assets/1281765a-047d-4eae-8d1d-e4073a4b3874" />

### Registration Page

<img width="1919" height="864" alt="b56a2932-36ef-4fb2-a388-404ac870f2fe" src="https://github.com/user-attachments/assets/88d26779-ef00-4807-a2e7-2f697491ee1d" />

### Dashboard

<img width="1919" height="858" alt="image" src="https://github.com/user-attachments/assets/979f14d1-78d2-4a38-aaa8-185b0ea4953f" />

### Deposit Page

<img width="1919" height="862" alt="75ff0c50-b8c5-4d57-97b8-0f91ce368c21" src="https://github.com/user-attachments/assets/eba4cecf-5e9c-43a0-8bc5-b01b4026ea16" />


### Transaction History

<img width="1903" height="859" alt="72f6558b-ac2e-4055-82a7-626ccaad4ded" src="https://github.com/user-attachments/assets/37081dd4-4550-487a-ba58-fe81ddb9627f" />

---

# ✅ Implemented Features

* Microservices Architecture
* React Frontend
* Spring Boot Backend
* JWT Authentication
* MySQL Integration
* Eureka Discovery Server
* API Gateway
* Kafka Producer
* Kafka Consumer
* Redis Cache
* Circuit Breaker Pattern
* Docker Support
* GitHub CI Ready

---

# 🚀 Future Enhancements

* OpenFeign Client
* Swagger/OpenAPI Documentation
* Email Notifications
* SMS Notifications
* Kubernetes Deployment
* Spring Cloud Config Server
* ELK Stack Logging
* Prometheus Monitoring
* Grafana Dashboard
* CI/CD Pipeline with Jenkins

---

# 👨‍💻 Author

**Pradyumna Khot**

Java Full Stack Developer

GitHub:
https://github.com/Pradhumnkhot/hdfc-banking-app

