## 1. Task

The goal was to create a feature-rich scientific calculator based on the provided design and specifications.

### Core Requirements Implemented:

- **Logic:** Standard arithmetic (+, −, ×, ÷), percentage (%), sign change (+/–), power ($x^y$), and roots ($\sqrt[y]{x}$).
- **Memory:** Full implementation of **MC, M+, M-, MR** functions.
- **Design Pattern:** The application's core logic relies on the **Command Pattern** to handle all button presses and decouple the user interface from the calculator's state management.
- **Restrictions:** Built entirely on **pure JavaScript** without using the built-in `Math` object methods or `eval()`. All mathematical functions are custom-implemented.
- **Exception Handling:** All exceptions, including division by zero and calculation overflow, are handled and reported to the user.
- **Chaining:** Implemented standard calculator chaining logic (e.g., pressing an operator executes the previous pending operation).

---

## 2. How to run the app

This application is built using Webpack for bundling, and all scripts are managed via npm.

### Prerequisites

- Node.js (v16+)
- npm (or yarn)

### Setup and Install

1.  Clone the repository and navigate into the project directory:
    ```bash
    git clone https://github.com/avalenche/custom-calculator.git
    cd custom-calculator
    ```
2.  Install all dependencies (Webpack, ESLint, Jest):
    ```bash
    npm install
    ```

### Execution Scripts

| Script                 | Command         | Description                                                                                 |
| :--------------------- | :-------------- | :------------------------------------------------------------------------------------------ |
| **Development Server** | `npm start`     | Runs the local development server with hot reloading. (Open http://localhost:8080).         |
| **Production Build**   | `npm run build` | Creates the optimized, production-ready files in the **`dist/`** folder (one HTML, one JS). |
| **Run Tests**          | `npm test`      | Executes all unit tests defined in `src/math.test.js`.                                      |
| **Code Check**         | `npm run lint`  | Runs ESLint to check code quality and style compliance.                                     |

---

## 3. Structure of Folders and Files

| Folder/File         | Type          | Description                                                                                                                    |
| :------------------ | :------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| **`src/`**          | **Directory** | **Source Code.** Contains all the uncompiled JavaScript, HTML, and CSS files.                                                  |
| `src/Calculator.js` | JS Class      | The **Receiver** class. Manages the calculator's state (operands, memory) and executes the core mathematical logic.            |
| `src/Commands.js`   | JS Classes    | Implements the **Command Pattern**. Defines classes for every calculator action (e.g., `AddDigitCommand`).                     |
| `src/math.js`       | JS Module     | Contains all **custom mathematical functions** (power, roots, factorial, etc.) implemented without the built-in `Math` object. |
| `src/math.test.js`  | JS Tests      | Unit tests for all functions in `src/math.js` using Jest.                                                                      |
| `dist/`             | Directory     | **Build Output.** Contains the optimized `index.html` and `main.js` ready for deployment (ignored by Git).                     |
| `node_modules/`     | Directory     | All project dependencies (ignored by Git).                                                                                     |
| `webpack.config.js` | Config        | Configuration file for bundling the application using ESM syntax.                                                              |
| `eslint.config.js`  | Config        | ESLint configuration file (Flat Config) used for code quality checks.                                                          |
| `package.json`      | Config        | Defines dependencies, project metadata, and all run scripts.                                                                   |

---
