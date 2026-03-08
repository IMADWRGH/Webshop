# I_Mica Store

A modern, responsive e-commerce web application built with Angular, showcasing a seamless shopping experience. The application features a clean UI built with Angular Material and Tailwind CSS, offering product filtering, sorting, and full shopping cart functionality.

## 🚀 Features

- **Product Catalog**: Browse a wide range of products with responsive grid layouts.
- **Category Filtering**: Filter products dynamically by categories (Men's clothing, Jewelry, Electronics, Women's clothing, etc.).
- **Sorting Options**: Sort products by price, name, or other attributes (Ascending/Descending).
- **Shopping Cart**: Fully functional cart allowing users to add, update quantities, remove items, and clear the cart.
- **Real-time Cart Badge**: A dynamic cart item counter in the header that updates as you shop.
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing using Tailwind CSS.
- **Modern UI Components**: Utilizes Angular Material for sleek, accessible components like menus, buttons, badges, and snackbars.

## 💻 Tech Stack

- **Framework**: [Angular 15](https://angular.io/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **UI Architecture**: [Angular Material](https://material.angular.io/)
- **Icons**: Material Icons
- **State Management**: RxJS (BehaviorSubjects for Cart Service)

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Angular CLI](https://angular.io/cli) globally installed (`npm install -g @angular/cli`)

## ⚙️ Installation and Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd Store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃‍♂️ Development Server

To start the application locally, run:

```bash
npm start
```

Alternatively, you can use the Angular CLI command:
```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## 📦 Build for Production

To build the project for production, run:

```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## 📂 Project Structure Overview

- `src/app/models/` - TypeScript interfaces/models (e.g., Cart, Product).
- `src/app/services/` - Singleton services for state management (e.g., CartService, StoreService).
- `src/app/header/` - Navigation bar and cart badge functionality.
- `src/app/home/` - Main product display, filtering, and sorting components.
- `src/app/cart/` - Detailed shopping cart view and checkout preparation.

---
*Developed with Angular and Tailwind CSS.*
