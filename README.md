# Project Overview

## Installation

To install the project dependencies, run the following command at the root level:

```bash
npm install
```

This will install all necessary packages for both the frontend and backend using the concurrently package, which allows multiple commands to run at once.

## Starting the Project

To start both the frontend and backend simultaneously, use the command:

```bash
npm run start
```

The concurrently package enables running multiple commands at once.

## Running the Application

- The UI will run on [http://localhost:8081/](http://localhost:8081/).
- The backend will run on [http://localhost:5000/](http://localhost:5000/).

These ports can be changed by modifying the `.env` file in the backend and the environment file in the frontend.

## Data Seeding

With each run, categories and vendors data are seeded.

## Backend Features

- **Authentication & Authorization**: JWT-based, available at `/auth/login` and `/auth/register`.
- **Database Connection**: Established with MongoDB.
- **API Routes**: Located in the `api` folder.
- **Configuration Files**: Located in the `config` folder, covering CORS, logging, environment variable validation, and seed configuration.
- **Interfaces**: Located in the `interfaces` folder.
- **Models**: Database models are in the `model` folder.
- **Controllers**: Business logic is in the `controller` folder.
- **Services**: Mongoose operations like create, find, update, and delete are in the `services` folder.
- **Middleware**: Authentication, error handling, and validation are in the `middleware` folder.
- **Logging**: Morgan and Winston are used, with access logs stored in `logs/access.log`.
- **Request Validation**: Implemented with the Zod package.
- **Database**: MongoDB is used with Mongoose as the ORM.

## Frontend Features

- **Environment Configuration**: Located in the environment file.
- **Login Page**: Allows login with email and password.
- **Register Page**: Allows registration with email and password.
- **Home Page**: Displays all charts.
- **Products Page**: Lists all products, with edit and delete access for logged-in users.
- **Styling**: Bootstrap is used.
- **Charting**: Chart.js is used.

## Future Enhancements

- Unit testing
- Pagination

## Demo
[![YouTube](http://i.ytimg.com/vi/sB4K4ZpUbfo/hqdefault.jpg)](https://www.youtube.com/watch?v=sB4K4ZpUbfo)
</br>
A video has been added for demo purposes.