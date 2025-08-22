# 🌍 Wanderlust - Travel & Stay Website  

Wanderlust is a full-stack web application inspired by **Airbnb**, where users can explore and list unique stays around the world.  

---

## 🚀 Live Demo  
Check out the live version here: [Wanderlust Website](https://wanderlust-website-4z6f.onrender.com) 

---

## ✨ Features  
- 🔐 **User Authentication** – Signup, Login, and Secure Sessions  
- 🏡 **Listings** – Create, update, and delete travel stays with details (title, price, location, description, category, and images)  
- 🔍 **Search & Filters** – Search by location, category, and price range  
- 📷 **Image Uploads** – Upload multiple images for listings  
- ⭐ **Reviews & Ratings** – Users can review and rate listings  
- 📱 **Responsive UI** – Works seamlessly on desktop & mobile  
- 🛠 **Error Handling** – Custom error pages and validation  

---

## 🛠 Tech Stack  

**Frontend:**  
- EJS Templates  
- CSS / Bootstrap 

**Backend:**  
- Node.js  
- Express.js  
- EJS-Mate (for layouts)  
- Method-Override (for PUT/DELETE requests)  

**Database:**  
- MongoDB Atlas  
- Mongoose  

**Other Tools:**  
- dotenv (environment variables)  
- express-session & connect-mongo (authentication & session storage)  
- Passport.js (user authentication)  

---

## 📂 Folder Structure  

Wanderlust/
│── views/ # EJS templates
│ ├── listings/ # Listing pages
│ ├── users/ # Auth pages
│ └── layouts/ # Layout templates
│
│── public/ # Static files (CSS, JS, images)
│── routes/ # Express route handlers
│── models/ # MongoDB models
│── utils/ # Error handling, middleware
│── app.js # Main application entry
│── package.json # Dependencies
│── .env # Environment variables

---

---

## ⚡ Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust

2. **Install dependencies**

```bash
npm install

3. **Setup environment variables**
Create a .env file in the root folder and add:

```env
MONGO_URI=your_mongodb_connection_string
SECRET=your_session_secret
PORT=8080

4. **Run the application**

```bash
node app.js

or (if nodemon installed)
```bash
nodemon app.js

5. **Visit on Browser**
```arduino
http://localhost:8080

---

## 🚀 Future Improvements

Implement **Booking System** for stays

Add **payment gateway** (Stripe/PayPal)

Enable **wishlist/favorites** feature

Implement **real-time chat** between hosts & guests

Enhance UI with **React** frontend

---

## 👨‍💻 Author  

**Evangelin Anthu Mary**  


