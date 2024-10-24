#

<div style="display: flex; align-items: center;">
  <img src="static/favicon-64x64.png" alt="LifeHub Logo" style="margin-right: 20px;" />
  <h1 style="margin: 0;">LifeHub</h1>
</div>

---

![GitHub stars](https://img.shields.io/github/stars/OrganiHub/life-hub?style=social) ![GitHub license](https://img.shields.io/github/license/OrganiHub/life-hub) ![GitHub issues](https://img.shields.io/github/issues/OrganiHub/life-hub) ![GitHub forks](https://img.shields.io/github/forks/OrganiHub/life-hub?style=social)





## Description 🌟

**LifeHub** is an all-in-one organizational tool designed to help anyone, including individuals with ADHD, manage tasks, schedules, notes, and more in a functional and effective way. LifeHub serves as a centralized hub where users can control and simplify various aspects of their daily lives, all in one place.

## Objectives 🎯

- Provide an intuitive platform for task management, time tracking, and note organization.
- Centralize multiple functionalities into one easy-to-use interface.
- Assist individuals, especially those with ADHD, to stay on track and maintain productivity.
- Incorporate modern web technologies for fast, reliable, and efficient usage.

## Prerequisites Installation Guide 🛠️

To set up LifeHub locally, you need the following:

- **Node.js** (version 20.12.2 or above)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (local or MongoDB Atlas)
- **Git** (for version control)

### Installing the Prerequisites (Multiplatform Guide)

#### 1. Install Git

- **Windows**: Download Git from [Git Official Website](https://git-scm.com/downloads) and run the installer.
- **macOS**: Use Homebrew to install Git:
  ```sh
  brew install git
  ```
- **Linux**: Install Git using your package manager:
  ```sh
  sudo apt-get install git  # Ubuntu/Debian
  sudo yum install git      # Fedora/RedHat
  ```
- Verify Git installation:
  ```sh
  git --version
  ```

#### 2. Install Node.js and npm

- **Windows/macOS**: Download the installer from [Node.js Official Website](https://nodejs.org/) and follow the instructions.
- **Linux**: Install Node.js using your package manager:
  ```sh
  sudo apt-get install nodejs npm  # Ubuntu/Debian
  sudo yum install nodejs npm      # Fedora/RedHat
  ```
- After installation, verify it with:
  ```sh
  node -v
  npm -v
  ```

#### 3. Install MongoDB

- **Windows**: Download MongoDB from [MongoDB Official Website](https://www.mongodb.com/try/download/community) and run the installer.
- **macOS**: Use Homebrew to install MongoDB:
  ```sh
  brew tap mongodb/brew
  brew install mongodb-community@6.0
  ```
- **Linux**: Install MongoDB using your package manager:
  ```sh
  sudo apt-get install -y mongodb  # Ubuntu/Debian
  ```
- Start the MongoDB service:
  ```sh
  sudo systemctl start mongod
  ```

## Project Installation Guide 📦

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/OrganiHub/life-hub.git
   cd lifehub
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Configure Environment Variables**:

    - Create a `.env` file in the root directory with the following content:
      ```
      MONGODB_URI=mongodb://localhost:27017/lifehub
      ```
    - Replace the URI with your own MongoDB connection string if using MongoDB Atlas.

4. **Run the Application**:

   ```sh
   npm run dev -- --open
   ```

   This command will start the development server and automatically open your default browser. You can access the application at `http://localhost:3000`.

## Project Usage Guide 🚀

- **Dashboard**: Once running, LifeHub provides an intuitive dashboard to manage your tasks, notes, schedules, and other organizational needs.
- **Tasks Management**: Add, edit, or delete tasks, and categorize them by priority or tags.
- **Time Management**: Utilize the time tracker to stay on track with your tasks, especially useful for maintaining focus.
- **Note Taking**: Quickly jot down notes and organize them for easy retrieval.

### Key Features ✨

- **Centralized Hub**: Manage all organizational needs from one place.
- **User-Friendly**: Clean, modern UI designed for usability and accessibility.
- **Focus Tools**: Tools specifically designed to help those with focus-related challenges.

## Technologies Used 💻

- **Frontend**: [SvelteKit](https://kit.svelte.dev/) for a highly reactive and fast front-end.
- **Backend**: [Node.js](https://nodejs.org/) for the server-side logic.
- **Database**: [MongoDB](https://www.mongodb.com/) for storing data.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for easy and beautiful styles.
- **Testing**: [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/) for automated testing.
- **Linting & Formatting**: [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to maintain clean code quality.

## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request to propose changes.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using LifeHub! Feel free to open an issue on GitHub if you encounter any problems or have suggestions for improvements.
