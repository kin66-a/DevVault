# DevVault 🗄️

> A personal developer dashboard — your own mini Notion + Trello, built from scratch.

---

## What is this?

DevVault is a full-stack web application I'm building to learn Node.js and Express the right way — not through tutorials, but by solving real problems.

It's a personal hub where a developer can manage everything in one place: notes, tasks, bookmarks, files, and coding goals.

---

## Features (building progressively)

- [ ] User authentication (register, login, logout)
- [ ] Notes & code snippets
- [ ] Tasks / Todo tracker
- [ ] Bookmarks & links
- [ ] File uploads
- [ ] Coding goal tracker
- [ ] Search across everything
- [ ] Analytics dashboard
- [ ] Dark / light theme
- [ ] Real-time notifications (later)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Template Engine | EJS |
| Database | MongoDB + Mongoose |
| Authentication | JWT + bcrypt |
| File Uploads | Multer |
| Real-time | Socket.IO (later) |
| Frontend (later) | React |

---

## Project Structure

```
devvault/
├── controllers/      # Route logic
├── models/           # Database schemas
├── routes/           # Express routes
├── views/            # EJS templates
├── public/           # Static files (CSS, JS)
│   ├── css/
│   └── js/
├── server.js         # Entry point
└── package.json
```

---

## Learning Roadmap

| Phase | Focus | Status |
|-------|-------|--------|
| 1 | Express server, routing, EJS |  In Progress |
| 2 | MongoDB, CRUD, Authentication |  Upcoming |
| 3 | File uploads, Search, Dashboard |  Upcoming |
| 4 | REST API, Security, Validation |  Upcoming |
| 5 | Real-time features, Deployment |  Upcoming |

---

## Why this project?

Most people learn backend by cloning 17 different tutorials and never finishing any of them.

This is one project, built completely — from a blank `server.js` to a deployed, working application. Every concept (auth, databases, file uploads, security, real-time) gets learned by actually needing it, not by following along.

Old-school logic: one sword, forged properly.

---

## Running locally

```bash
# Clone the repo
git clone https://github.com/yourusername/devvault.git
cd devvault

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:3000`

---

## Status

🔨 Actively building — follow along to see it grow.
