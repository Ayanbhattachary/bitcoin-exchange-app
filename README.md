# Crypto Exchange Interface

## Prerequisites

Make sure you have the following installed:

1. Node.js (v16 or higher recommended)
2. Yarn package manager
3. A modern web browser (e.g., Chrome, Firefox)

## Clone the Repository

1. git clone [https://github.com/your-username/your-repo-name.git](https://github.com/Ayanbhattachary/bitcoin-exchange-app.git)
2. cd bitcoin-exchange-app

## Install Dependencies

1. yarn install

##  Start the Development Server

1. yarn dev

## Tech Stack

- **Framework**: React (with Vite for fast dev experience)
- **Styling**: SCSS using BEM naming convention
- **Architecture**: Modular, reusable, and scalable
- **Deployment**: Netlify

## Project Overview

This app allows users to:

- Swap between BTC and USD (buy/sell)
- View real-time exchange rate (can be static or from API)
- Input amount in one currency and auto-calculate the other
- Confirm transactions with success feedback

## Component Structure

- Each UI component lives in its own folder within `src/components/`.
- Components are exported via a single `components/index.js` (barrel file) for clean and organized imports.

**Benefits:**
- Clear separation of concerns.
- Easier to scale and maintain.
- Cleaner import paths throughout the app.

## Styling

I used SCSS with the following structure:
- `_variables.scss`: Centralized colors, spacing, fonts.
- `_reset.scss`: Standard CSS reset.
- Scoped SCSS per component (Each component has its separate scss file).

I followed BEM for class naming to keep styles modular and readable.

## Code Reusability

- Currency conversion logic is centralized in a utility function (`utils/currency.js`) and is built to support additional currencies in the future with some additional tweeks.
- Created a hooks/ folder to keep API logic separate from UI. This makes the code cleaner, more reusable, and easier to manage.
