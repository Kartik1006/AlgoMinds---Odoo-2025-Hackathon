# StackIt - A Minimal Q&A Forum Platform

StackIt is a minimal, user-friendly question-and-answer platform designed for collaborative learning and structured knowledge sharing. It provides the core functionalities of a modern Q&A forum, including user authentication, posting questions with rich text and tags, answering, voting, and notifications.

**Video Link:** (https://drive.google.com/file/d/1zwq6HJ-NPozvyorghy9OlWoMKuafVWn8/view)

---

## ✨ Core Features

*   **👤 User Authentication:**
    *   Secure user registration and login system.
    *   JWT-based authentication for protecting routes.
    *   Password hashing using `bcryptjs`.

*   **❓ Ask & Answer:**
    *   Users can post questions with a title, descriptive body, and relevant tags.
    *   A rich text editor for formatting question and answer content (bold, italic, lists, links, images).
    *   Guests can view all questions and answers, but only logged-in users can post.

*   **🗳️ Voting System:**
    *   Users can upvote or downvote answers to highlight the most helpful content.
    *   Voting is restricted to one vote per user per answer.

*   **✔️ Accepted Answers:**
    *   The original poster of a question can mark one answer as "accepted".

*   **🏷️ Tagging:**
    *   Questions are categorized with tags for easy filtering and searching.

*   **🔔 Notifications (Planned):**
    *   Real-time notifications for new answers, mentions, etc.

*   **🔒 Admin Moderation (Planned):**
    *   Admin role with permissions to moderate content and manage users.

---

## 🛠️ Tech Stack

### Backend
*   **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.
*   **[Express.js](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
*   **[Mongoose](https://mongoosejs.com/)**: Elegant MongoDB object modeling for Node.js.
*   **[JSON Web Token (JWT)](https://jwt.io/)**: For creating access tokens for secure authentication.
*   **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: For hashing passwords.
*   **[dotenv](https://www.npmjs.com/package/dotenv)**: For managing environment variables.
*   **[cors](https://www.npmjs.com/package/cors)**: For enabling Cross-Origin Resource Sharing.

### Database
*   **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**: A fully-managed cloud database service.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed on your machine:
*   [Node.js](https://nodejs.org/) (which includes npm)
*   [Git](https://git-scm.com/)
*   A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd stackit-backend
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of the project and add the following configuration. Replace the placeholder values with your actual credentials.

    ```env
    # Server Configuration
    PORT=5000
    NODE_ENV=development

    # MongoDB Atlas Connection String
    # Get this from your Atlas Cluster -> Connect -> Connect your application
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/stackitDB?retryWrites=true&w=majority

    # JWT Secret Key
    # Use a long, random string for security
    JWT_SECRET=yourrandomsecretkey
    ```

4.  **Run the server:**
    To start the server in development mode, run:
    ```bash
    npm run dev
    ```
    Or for production:
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:5000`.

### Recommended `package.json` scripts:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
