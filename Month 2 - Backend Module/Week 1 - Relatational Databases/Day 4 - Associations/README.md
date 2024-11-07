# Project Setup and Running Instructions

Follow these steps to set up the project, seed the database, and run the main application.

## 1. Install Dependencies

Before running the project, install all required dependencies by running:

```bash
npm install
```

## 2. Seed the Database

To populate the database with initial data, use the seed script. This will create tables and add Pokémon, trainers, and badges from the `seedData.js` file:

```bash
npm run seed
```

## 3. Run the Application

After seeding the database, you can run the main application to demonstrate the database operations outlined in `main.js`:

```bash
npm start
```

## Project Overview

### Seeding the Database

The seeding process is handled by `seed.js`:

### Purpose: Sets up initial data by clearing existing data and repopulating tables.

### Data: The `seedData.js` file includes predefined Pokémon, trainers, and badges.

Main Application in `main.js`

The `main.js` file demonstrates database operations, including associating Pokémon with trainers and badges with multiple trainers.

This guide includes the setup commands and project overview in a user-friendly way.
