
# E-Commerce WebApp

## Live Demo
[Live Link to E-Commerce WebApp](https://i-bios-client.vercel.app/)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
  - [Login & Sign Up](#login--sign-up)
  - [Product Listing](#product-listing)
  - [Shopping Cart](#shopping-cart)
  - [Cart Management](#cart-management)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview
This is a simple e-commerce web application built using React and Context API. The app allows users to sign up, log in, browse products, add them to a shopping cart, and manage the cart. 

The focus of this implementation is to demonstrate state management using the Context API, making it easy to handle authentication, product data, and cart data across the entire app.

## Features

### Login & Sign Up
- Users can sign up and log in using simple forms.
- The app maintains an authentication state globally using the Context API.
- User session persists across page reloads using localStorage.

### Product Listing
- Product data is fetched from a local JSON file or API and displayed as a list.
- Global product state is managed using Context API.

### Shopping Cart
- Users can add products to a shopping cart.
- The cart dynamically updates as products are added or removed.
- Cart state is managed globally using Context API.

### Cart Management
- Users can adjust product quantities in the cart or remove products.
- Real-time cart updates using the Context API.

## Technologies Used
- **React**: For building the UI components.
- **Context API**: For state management across the app.
- **React Router**: For navigation between pages.
- **Local JSON**: For simulating API calls for product data.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.

## Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone [[https://github.com/yourusername/ecommerce-data-visualization.git](https://github.com/developerMasum/iBios-task)]
  
```
```bash
   cd client
npm install
npm run dev
```
```bash
   cd client
npm install
npm run dev
```
```bash
   cd ../server
npm install

```
```bash
  DATABASE_URL=mongodb+srv://db_user_read:password@cluster0.aaflc.mongodb.net/RQ_Analytics?retryWrites=true&w=majority&appName=Cluster0
PORT=5000

```
```bash
   npm run start:dev

```

## 🔗 Visit My Profile Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-masum-fullstack.vercel.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdmasumdev)
