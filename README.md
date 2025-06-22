# 🛠️ IT Logger App

A simple and efficient IT incident logging application built with **React**, **Redux**, and **JSON Server**. It allows users to log issues, assign them to technicians, update progress, and delete or search through logs.

---

##  Features

- 🔍 View, add, edit, and delete IT logs
- 🧑‍🔧 Assign logs to technicians
- ⚡ Real-time search functionality
- 📆 Timestamp logs with Moment.js
- 🎯 Materialize CSS for responsive UI
- ⚙️ State management using Redux Toolkit + Thunk
- 🗄️ JSON Server used as mock backend API

---

## 🛠 Tech Stack

### Frontend
- React 19
- Redux Toolkit
- Redux Thunk
- React Redux
- React Moment
- Materialize CSS

🧑‍💻 Author
Emmanuel Armah Sakyi
GitHub | LinkedIn

### Backend
- JSON Server (REST mock API)
- Concurrent development with `concurrently`
## Preview

All Logs

![Home](https://github.com/user-attachments/assets/f62ecb87-6865-4a34-85c1-bfc03eaa46d0)

Add Tech

![Add Tech](https://github.com/user-attachments/assets/091d3dcb-4fdd-4407-9d03-e2589e7cce47)

Add Log

![Add log](https://github.com/user-attachments/assets/9219d125-5152-4b89-8179-2afe68746d44)




## 📂 Project Structure
itlogger/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── logs/
│ │ ├── techs/
│ │ └── layout/
│ ├── redux/
│ │ ├── slices/
│ │ └── store.js
│ ├── App.js
│ └── index.js
├── db.json # JSON Server data
├── package.json
└── README.md

## Install dependencies
npm install
## Start the app (React + JSON Server)
npm run dev

## Sample API Endpoints
Route	Description
GET /logs	Get all logs
POST /logs	Add new log
PUT /logs/:id	Update a log
DELETE /logs/:id	Delete a log
GET /techs	Get all technicians

