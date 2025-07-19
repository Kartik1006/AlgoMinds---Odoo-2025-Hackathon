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
   **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.
   **[Express.js](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
   **[Mongoose](https://mongoosejs.com/)**: Elegant MongoDB object modeling for Node.js.
   **[JSON Web Token (JWT)](https://jwt.io/)**: For creating access tokens for secure authentication.
   **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: For hashing passwords.
   **[dotenv](https://www.npmjs.com/package/dotenv)**: For managing environment variables.
   **[cors](https://www.npmjs.com/package/cors)**: For enabling Cross-Origin Resource Sharing.

### Database
   **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**: A fully-managed cloud database service.

  **Set up Environment Variables**:
    
    PORT=5000
    NODE_ENV=development
   
    
    MONGO_URI="mongodb+srv://kartik:algominds@cluster0.pboy12h.mongodb.net/"
    JWT_SECRET="y+Z7y1y0MYRtEVvH1VkBcVz06xKJ6vQElz9DLTruf3U"

    ARCJET_KEY = "ajkey_01jzwxe1r3fn2stge3mc92zm90"
    ARCJET_ENV = "development"
    CLOUDINARY_CLOUD_NAME="dvpsgwyw"
    CLOUDINARY_API_KEY="526956314234836"
    CLOUDINARY_API_SECRET="iQG5Uhjo-IyvhkjWOwLyCXYJueo"



