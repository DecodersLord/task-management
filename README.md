# 🚀 Secure Task Management System

A role-based task management system with JWT authentication and organizational hierarchy support.

### Core Features Implemented

- ✅ User authentication with JWT tokens
- ✅ RBAC system with role inheritance

## 🏗️ Architecture

### Planned NX Monorepo Structure

```
apps/
├── api/              # NestJS backend
└── dashboard/        # Angular frontend

libs/
├── shared/           # TypeScript interfaces & DTOs
└── auth/            # Reusable RBAC logic
```

### Current Implementation

Due to time constraints and my limited knowledge working with NX monorepo, I was only able to implement Register/Login Backend.

## 🗄️ Database Design

### Entity Relationship Diagram

![Database Schema](./docs/erd-diagram.png)

### Access Control Flow

![Authorization Flow](./docs/sequence-diagram.png)
