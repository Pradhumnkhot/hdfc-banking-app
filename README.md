# HDFC Banking Application - Microservices Architecture

## Overview

A Full Stack Banking Management System developed using Spring Boot Microservices, React.js, MySQL, Kafka, Redis, Eureka Service Discovery, API Gateway, and Resilience4j Circuit Breaker.

The application supports:

* User Login & Authentication
* User Profile Management
* Change Password
* Deposit Money
* Withdraw Money
* Fund Transfer
* Transaction History
* Notification Service
* Service Discovery using Eureka
* API Gateway Routing
* Kafka Event Streaming
* Redis Caching
* Circuit Breaker Pattern
* Dockerized Infrastructure

---

## Architecture

```text
React Frontend

        ↓

API Gateway (8081)

        ↓

----------------------------------------------------------
|               |                |                       |
USER-SERVICE    BANK-SERVICE     TRANSACTION-SERVICE    NOTIFICATION-SERVICE
(8082)          (8080)           (8083)                 (8084)

                        ↓
                     Kafka

                        ↓
                     Redis

                        ↓
                     MySQL

                        ↓
                 EUREKA SERVER (8761)
```

---

## Technologies Used

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Spring Security
* JWT Authentication
* Spring Cloud Eureka
* Spring Cloud Gateway
* Spring Kafka
* Redis Cache
* Resilience4j Circuit Breaker
* Maven

### Frontend

* React.js
* Axios
* React Router DOM
* Bootstrap / CSS

### Database

* MySQL

### DevOps & Tools

* Docker
* Docker Compose
* Git
* GitHub
* Postman
* Spring Tool Suite (STS)

---

## Microservices

### Eureka Server

**Port:** 8761

Features:

* Service Discovery
* Service Registration

---

### API Gateway

**Port:** 8081

Features:

* Single Entry Point
* Request Routing
* Load Balancing Support

---

### User Service

**Port:** 8082

Features:

* User Registration
* User Login
* Change Password
* Profile Management
* Redis Cache Integration

---

### Bank Service

**Port:** 8080

Features:

* Deposit Money
* Withdraw Money
* Fund Transfer
* Account Details
* Kafka Producer
* Circuit Breaker Implementation

---

### Transaction Service

**Port:** 8083

Features:

* Transaction History
* Transaction Details
* Kafka Consumer

---

### Notification Service

**Port:** 8084

Features:

* Deposit Alerts
* Transfer Alerts
* Kafka Consumer
* Notification APIs

---

## Kafka Integration

### Producer

* Bank Service

### Consumers

* Transaction Service
* Notification Service

### Topic

* transaction-topic

### Flow

```text
Bank Service
      |
      v
Kafka Topic
      |
-------------------------
|                       |
v                       v
Transaction Service   Notification Service
```

---

## Redis Caching

Redis is used to cache frequently accessed user data.

Benefits:

* Faster API Response Time
* Reduced Database Calls
* Improved Performance

---

## Circuit Breaker

Implemented using Resilience4j.

Example:

```text
Bank Service
      |
      v
User Service
```

If User Service is unavailable:

```text
User Service is Down. Please try later.
```

Fallback response is returned without impacting the entire system.

---

## Running the Project

### Start Infrastructure

```bash
docker compose up -d
```

This starts:

* Kafka
* Zookeeper
* Redis

---

### Start Services in Order

1. Eureka Server
2. API Gateway
3. User Service
4. Bank Service
5. Transaction Service
6. Notification Service
7. React Application

---

## API Examples

### Login

```http
POST /api/auth/login
```

### Change Password

```http
PUT /api/auth/change-password
```

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

### Kafka Publish

```http
POST /kafka/send?msg=Deposit10000
```

---

## Features Implemented

* Microservices Architecture
* React Frontend
* Eureka Service Discovery
* API Gateway
* MySQL Integration
* JWT Authentication (Basic)
* Kafka Producer
* Kafka Consumer
* Redis Cache
* Circuit Breaker Pattern
* Docker Compose Setup
* GitHub Integration

---

## Future Enhancements

* OpenFeign Client
* Swagger/OpenAPI Documentation
* Email Notifications
* SMS Notifications
* Kubernetes Deployment
* Spring Cloud Config Server
* ELK/Splunk Logging
* Prometheus & Grafana Monitoring

---

## Author

Pradyumna Khot

Java Full Stack Developer

GitHub Repository:
https://github.com/Pradhumnkhot/hdfc-banking-app