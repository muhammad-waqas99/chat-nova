# Chat Nova - Real-Time Full-Stack Chat Application

[![Live Demo](https://img.shields.io/badge/Live-Demo_Coming_Soon-orange?style=for-the-badge&logo=vercel)](#demo)
[![License](https://img.shields.io/badge/License-MIT-blue.style=for-the-badge)](./LICENSE)
[![Stars](https://img.shields.io/badge/Stars-★_Placeholder-yellow?style=for-the-badge)](#)
[![Forks](https://img.shields.io/badge/Forks-🍴_Placeholder-orange?style=for-the-badge)](#)

---

## Badges

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-5.0-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.IO-4.8-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Clerk Auth](https://img.shields.io/badge/Clerk_Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-0052CC?style=for-the-badge&logo=imagekit&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

A real-time full-stack chat application built with React, Node.js, Express, Socket.IO, and MongoDB. **Chat Nova** features secure Clerk authentication, dynamic themes, media sharing via ImageKit CDN, interactive keyboard sound effects, and online status tracking.

---

## Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Learning Purpose](#learning-purpose)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [How It Works](#how-it-works)
- [Authentication Flow](#authentication-flow)
- [Image & Media Upload System](#image--media-upload-system)
- [API Routes](#api-routes)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Development Journey](#development-journey)
- [Future Features Roadmap](#future-features-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Demo

 **Live Demo:** Coming Soon

```text
https://chat-nova.example.com (Deployment Link Placeholder)
```

---

## Screenshots

<div align="center">

<table>
<tr>

<td align="center">
<h3>Login Page</h3>
<img src="https://github.com/user-attachments/assets/8c33f1a8-9941-48bb-aa0c-65453e5518df" width="380"/>
</td>



<td align="center">
<h3>Chat Interface</h3>
<img src="https://github.com/user-attachments/assets/b1231060-8c5c-4813-96e3-fa06aada91d2" width="380"/>
</td>


</tr>

<tr>

<td align="center" colspan="2">
<h3>Theme Picker</h3>

<img src="https://github.com/user-attachments/assets/ece91941-c50e-47dd-a3f5-53cc989becf5" width="380"/>
</td>



<td align="center">
<h3>Wallpaper Picker</h3>

<img src="https://github.com/user-attachments/assets/59b8eecb-6931-46c2-ae9b-894ee725abcb"  width="380"/>
</td>



</tr>

</table>

</div>

---

## Learning Purpose

Chat Nova was initially developed as a learning project by following a tutorial to understand real-time chat application architecture, Socket.IO communication, authentication flow, and full-stack development practices.

After completing the initial implementation, the project is being continuously improved with additional features, better architecture, error handling resilience, and custom enhancements to deepen full-stack engineering expertise.

---

## Features

### Completed Features

- ⚡ **Real-Time Instant Messaging**: Low-latency bi-directional message dispatching powered by Socket.IO.
- 🔐 **Authentication & User Synchronization**: Cookie & token-based authentication via Clerk with automatic profile sync.
- 🖼️ **Media Attachments**: Image and video attachment uploads transformed and served via ImageKit CDN.
- 🎨 **Dynamic UI Themes & Wallpapers**: Visual preset switcher supporting customizable theme styles and background wallpapers.
- 🔊 **Tactile Keyboard Audio**: Interactive sound triggers providing keypress feedback when drafting messages.
- 🟢 **Live Online Status Tracking**: Real-time user online/offline presence indicators over Socket connections.
- 📱 **Responsive Interface**: Mobile and desktop optimized user interface designed with Tailwind CSS and HeroUI.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Frontend user interface framework |
| **Vite** | Fast frontend build tool and dev server |
| **Zustand** | Lightweight frontend state management |
| **Tailwind CSS** | Utility-first CSS styling framework |
| **HeroUI / Lucide React** | UI component libraries & iconography |
| **Node.js** | Backend JavaScript runtime |
| **Express.js** | Server framework for REST API routing and middleware |
| **Socket.IO** | Real-time WebSocket communications engine |
| **MongoDB / Mongoose** | NoSQL database & Object Data Modeling (ODM) |
| **Clerk Auth** | User authentication & identity management |
| **ImageKit SDK & Multer** | Media file buffering and CDN processing |

---

## Project Architecture

Chat Nova uses a modular full-stack structure with dedicated client and server modules following the Model-View-Controller (MVC) design pattern.

```text
chat-nova/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Request handlers (auth, message)
│   │   ├── lib/               # Utility modules (db, socket, imageKit)
│   │   ├── middleware/        # Auth verification & Multer file upload handlers
│   │   ├── models/            # Mongoose schemas (user.model.js, message.model.js)
│   │   ├── routes/            # Express endpoint definitions (auth.route, message.route)
│   │   ├── webhooks/          # Clerk user sync webhook endpoint
│   │   └── index.js           # Express server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/chat/   # Modular chat UI components
│   │   ├── context/           # Theme and Wallpaper state providers
│   │   ├── hooks/             # Custom hooks (sound, media queries, scroll)
│   │   ├── pages/             # Main view pages (ChatPage, Auth Page)
│   │   ├── store/             # Zustand global state stores (useAuthStore, useChatStore)
│   │   ├── main.jsx           # React app entry point
│   │   └── App.jsx            # Application router & layout controller
│   ├── index.html
│   └── package.json
├── package.json               # Root workspace manifest
└── README.md
```

### Architectural Responsibilities
- **Frontend**: Handles state representation, real-time message listening, user interactions, audio triggers, and dynamic theme switching.
- **Backend**: Exposes REST endpoints (`/api/auth`, `/api/message`), manages Socket.IO connection rooms, validates user tokens, and handles media uploads to ImageKit.
- **MVC Pattern**: Separates data representations (Mongoose Models), endpoint pathways (Routes), and domain logic (Controllers).
- **Socket Communication Flow**: On connection, sockets join dedicated rooms keyed by user identifiers to route events (`newMessage`, `getOnlineUsers`) instantly to target client instances.

---

## How It Works

```text
[ User Auth (Clerk) ] ──> [ Retrieve Session Token ]
                                   │
                                   ▼
                       [ Establish Socket Connection ]
                                   │
                                   ▼
                       [ Fetch Active Conversations ]
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
[ Send Message / Media ]                             [ Socket Event Listener ]
         │                                                   │
         ▼                                                   ▼
[ ImageKit Upload & DB ] ──> [ Socket Broadcast Event ] ──> [ Render UI Update ]
```

---

## Authentication Flow

1. **User Login**: Users sign in securely using Clerk authentication on the frontend.
2. **Profile Synchronization**: Clerk webhooks or client sync requests update user details in MongoDB.
3. **Request Protection**: Express `protectRoute` middleware validates the user's authentication token on incoming API calls.
4. **Socket Authentication**: Socket connection handles active user tracking based on authenticated user IDs.

---

## Image & Media Upload System

1. **File Input**: The chat composer accepts image and video uploads.
2. **Memory Buffering**: Multer buffers uploaded files in RAM without writing temporary files to disk.
3. **ImageKit Upload**: Files are securely uploaded directly to ImageKit CDN storage.
4. **Database Reference**: Secure ImageKit URLs are stored directly in MongoDB message documents.

---

## API Routes

### Authentication Routes (`/api/auth`)
- `GET /api/auth/check` - Check authenticated user session status

### Message Routes (`/api/message`)
- `GET /api/message/users` - Fetch user list for chat sidebar
- `GET /api/message/conversations` - Fetch existing chat conversation history
- `GET /api/message/:id` - Fetch message exchange between logged-in user and target user
- `POST /api/message/send/:id` - Send a text or media message to a target user

---

## Installation & Setup

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher
- **MongoDB**: Local or MongoDB Atlas instance

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/muhammad-waqas99/chat-nova.git
   cd chat-nova
   ```

2. **Install Workspace Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Set up your environment variables as detailed below.

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

5. **Build & Start for Production**:
   ```bash
   npm run build
   npm start
   ```

---

## Environment Variables

### Backend Environment Variables (`backend/.env`)

```env
PORT=3000
MONGO_DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chat-nova
CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
CLERK_WEBHOOK_SIGNING_SECRET=whsec_your_webhook_secret
IMAGE_KIT_SECRET=private_your_imagekit_secret
FRONTEND_URL=http://localhost:3000
```

### Frontend Environment Variables (`frontend/.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
```

---

## Development Journey

Chat Nova is developed incrementally with proper documentation and modular Git commits. Architectural choices prioritize code cleanliness, error tolerance (such as safe fallbacks when services are offline), and separation of concerns across client and server layers.

---

## Future Features Roadmap

The following features are planned for upcoming iterations:

- [ ] **Group Chat Support**: Multi-user channels and group discussions.
- [ ] **Private One-to-One Messaging**: Enhanced direct messaging capabilities.
- [ ] **Emoji Support**: Integrated emoji picker in the chat composer.
- [ ] **Message Reactions**: Quick emoji reactions on individual messages.
- [ ] **Typing Indicators**: Real-time "user is typing..." feedback.
- [ ] **Online/Offline User Status**: Detailed user presence timestamps.
- [ ] **Push Notifications**: Desktop and browser notifications for new messages.
- [ ] **Message Read Receipts**: Visual status indicating read vs. delivered messages.
- [ ] **File and Image Sharing**: Support for generic file attachments (PDFs, docs).
- [ ] **Voice Messages**: Record and transmit voice audio notes.
- [ ] **User Profile Customization**: Custom bio, display names, and avatars.
- [ ] **Search Users and Conversations**: Full-text searching across contacts and messages.
- [ ] **Message History and Pagination**: Infinite scroll pagination for past conversation logs.
- [ ] **Better UI/UX Improvements**: Smooth motion transitions and enhanced theme palettes.
- [ ] **Mobile Responsive Improvements**: Mobile drawer controls and touch gesture navigation.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.

---

## Author

**Muhammad Waqas**

- **Email:** muhammadwaqas.dev99@gmail.com
- **LinkedIn** www.linkedin.com/in/waqas-fullstack
