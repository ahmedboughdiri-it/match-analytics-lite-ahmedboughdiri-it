# Match Analytics Lite — Technical Test

## Welcome
Thank you for reviewing my submission for the **Football Analytics App Internship**.  
This project is a 24-hour hands-on challenge designed to test full-stack fundamentals, data handling, and visualization skills.

**Goal:** Build a small Match Analytics service and a single match dashboard that shows useful insights from match events. The focus is on simplicity, usability, and clarity.

---

## Overview
- **Backend:** Spring Boot 3.5.5 (Java 17)  
- **Database:** PostgreSQL 15  
- **Frontend:** Angular 16.2 (Signals, Standalone Components)  
- **Time:** 24 hours  
- **Scope:** Single match, small dataset, 3 endpoints, one dashboard  
- **Docker:** Backend + DB included  

---

## How to Run

### **Option 1: Using Docker (Recommended)**
1. Make sure Docker and Docker Compose are installed.
2. In the project root, run:

```bash
docker-compose up --build

The backend will be available at: http://localhost:9090

The frontend will be available at: http://localhost:4200 (if included in Docker)

Option 2: Running Frontend Locally

Navigate to the frontend/matchanalytics folder:
cd frontend


Install dependencies:
npm install


Start the Angular app:
ng serve


Open your browser at http://localhost:4200.


Backend Endpoints
Endpoint	         Method	Description
/api/match	      GET	   Returns a single match object with metadata, players, and events
/api/event	      POST	   Accepts an event (goal, pass, tackle, shot, etc.) and stores/returns it
/api/player/{id}	GET	   Returns simple player stats (goals, assists, rating)


Database (PostgreSQL)

Tables: match, player, event

Seed data: 1 match, ~5–6 players per team, 10–15 events (passes/goals/tackles)

Database connection configured via Docker environment variables.


Frontend (Angular)

Single Match Dashboard:

Player table with basic stats (goals, assists, rating)

Chart: goals/assists per player

Bonus (optional): pitch map or pass network visualization

Built with Signals and standalone components

Responsive layout with global error handling

Designed with DeepSeek for modern HTML structure and style


Docker

Dockerized backend and PostgreSQL for easy local deployment

Frontend can run via Angular CLI if not Dockerized

Run the full stack locally with:
docker-compose up --build


AI & Tools Disclosure

ChatGPT (GPT-5): Assisted in implementing Docker setup, documentation, and optimizing some project explanations

DeepSeek: Helped in designing modern frontend structure and HTML/CSS for dashboard layout

Generated content: Only documentation, layout suggestions, and Docker guidance; core code logic was manually implemented
