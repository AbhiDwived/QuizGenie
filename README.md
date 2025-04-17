# 🧠 QuizGenie — Deep Project Explanation

---

## 📘 Project Overview

**QuizGenie** is an AI-powered, full-stack quiz web application that allows users to:
- Take intelligent quizzes generated from syllabus topics
- Study personalized material based on their weaknesses
- Track progress via charts and dashboards
- Compete with others on leaderboards
- Get support from admin-curated content and AI-generated data

Admins can manage the entire system, upload syllabus files, control content, view logs, and use AI to automatically generate MCQs and study material.

---

## 🎯 Why This Project Is Needed

### 📌 Problems Solved:

| Problem | How QuizGenie Solves It |
|--------|--------------------------|
| 📚 Lack of practice material based on curriculum | Admin uploads syllabus → AI generates MCQs |
| ❓ Generic quizzes not tailored to users | Each quiz is dynamically generated via AI |
| 🧠 No smart feedback | User gets analysis of weak topics after quiz |
| 📉 Difficult to track learning progress | Dashboard + chart shows improvement over time |
| 🔐 Poor security in basic quiz apps | Uses OTP, JWT, role-based access |
| 📄 No content management for admins | Admin panel to CRUD users, MCQs, materials |
| 🔍 Difficult to find mistakes | Bookmarks + resume allow revisiting tricky questions |

---

## ⚙️ How QuizGenie Works

### 👤 User Workflow

1. **Register with Email Verification**
   - OTP sent to email before completing account creation
   - Secure login using JWT token

2. **Select Quiz Category**
   - Categories created by Admin or generated from syllabus
   - User selects topic/subject

3. **AI Generates Quiz**
   - Based on selected topic
   - Questions created by Groq Mixtral AI model
   - Stored in MongoDB

4. **Take Quiz**
   - Timer, navigation, flag questions, auto-submit on timeout
   - UI shows current question, options, and bookmarks

5. **Submit Quiz**
   - Responses evaluated instantly
   - Score saved to database
   - Weak topic analysis shown

6. **Study Material**
   - AI suggests study notes for weak areas
   - Can toggle between Hindi and English
   - Reusable for revision

7. **Bookmark Questions**
   - Mark difficult questions
   - View and revisit anytime

8. **Dashboard**
   - View history, past scores, graphs
   - Track improvement
   - Resume pending quizzes
   - Leaderboard access

9. **Download Certificate (Optional)**
   - After achieving certain score thresholds
   - PDF/printable certificate generated

---

### 🛠️ Admin Workflow

1. **Admin Login**
   - Uses same login page but checks for role === ADMIN

2. **Admin Dashboard**
   - Shows stats: Users, Quizzes, Score Averages
   - Charts powered by Chart.js

3. **Manage Users**
   - View user list
   - Block/unblock accounts

4. **Upload Syllabus**
   - Upload PDF/text
   - AI parses topics and generates MCQs automatically

5. **MCQ and Study Material CRUD**
   - Add/edit/delete manually if needed
   - Override AI-generated content

6. **Track AI Logs**
   - View successful/failed AI generations
   - Retry failed prompts if required

7. **View Quiz History**
   - For analytics or moderation

---

## 🔧 Key Features Summary

| Feature | Description |
|--------|-------------|
| 🔐 Register/Login with OTP | Secure entry with verified email |
| 🧠 AI Quiz Generator | Quiz created from syllabus using Groq |
| 📚 AI Study Material | Language toggle with topic-based notes |
| 📝 Resume Quiz | Pick up from where user left |
| 🔖 Bookmark System | Save tricky questions for later review |
| 📈 Result Analysis | Topic-wise graph after each quiz |
| 🏆 Leaderboard | Daily/weekly scoreboards |
| 🎓 Certificate | Issued on quiz completion (planned) |
| 🧑‍💼 Admin Panel | Role-based CRUD and controls |
| 📤 Syllabus Upload | AI parsing with automatic question creation |

---

## 💡 Benefits of Using QuizGenie

### 📘 For Students
- Personalized learning experience
- Topic-focused quizzes
- Smart insights with AI assistance
- Continuous progress tracking
- Study in language of choice (EN/HI)

### 🛡️ For Educators/Admins
- Easy to manage content
- Syllabus-driven auto quiz generation
- Time-saving with AI
- Insight into user performance and platform usage
- Ability to scale without content fatigue

---

## 🚀 Tech Stack Breakdown

| Stack | Tools Used |
|-------|------------|
| Frontend | React.js, Tailwind CSS, Chart.js |
| Backend | Node.js, Express.js, Mongoose |
| AI | Groq Mixtral API |
| Email | Nodemailer, Mailgen (Gmail SMTP) |
| Auth | JWT, bcrypt, OTP |
| File Upload | Multer |
| Hosting | Vercel (Frontend), Render (Backend), MongoDB Atlas |
| Charts | Chart.js, Recharts |
| PDF Certificate (planned) | react-pdf or jsPDF |

---


---

## 🔄 End-to-End Workflow Example

> **"User wants to practice Quiz"**

1. User registers → OTP → Dashboard
2. Selects “Class 10 - Science” category
3. Backend fetches MCQs (AI or DB)
4. Quiz starts → Timer runs → Submit
5. Backend stores results
6. AI suggests weak areas
7. User studies material in Hindi
8. Admin sees attempt in QuizHistory

---

## 📍 Conclusion

QuizGenie is more than a quiz app — it’s a personalized learning ecosystem enhanced by AI. It bridges the gap between static MCQ practice and adaptive smart learning for students and admins alike.



