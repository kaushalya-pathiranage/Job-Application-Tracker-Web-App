# Job-Application-Tracker-Web-App
Job Application Tracker Web App built using Git, GitHub Actions CI/CD, and cloud deployment for Advanced DevOps assignment.
# Job Application Tracker Web App
Live Demo: https://spectacular-selkie-aed868.netlify.app/
Repository:https://github.com/kaushalya-pathiranage/Job-Application-Tracker-Web-App  
## Group Information
- **Hashini Kaushalya** - ITBNM-2313-0038 - Role: DevOps Engineer  
- **Dimasha Thathsarani** - ITBNM-2313-0081 - Role: Full-Stack Developer  

## Project Description
The **Job Application Tracker Web App** helps users efficiently manage their job applications. Users can add, edit, delete, and update the status of job applications. It includes filtering, sorting, and search functionalities, and all data is stored in the browser's local storage for persistence. The app is fully responsive and works on mobile and desktop devices.


## Technologies Used
- **HTML5** – Structure and content of the web pages  
- **CSS3** – Styling and responsive design  
- **JavaScript** – Interactive functionalities (Add/Edit/Delete, Status Update, Search, Filter, Sort)  
- **LocalStorage** – Persistent storage of job application data in the browser  
- **Git** – Version control for tracking code changes  
- **GitHub** – Repository hosting, collaboration, and pull request management  
- **GitHub Actions (CI/CD)** – Automated testing, building, and deployment pipeline 
- **Docker** – Containerization of the web application  
- **Docker Compose** – Multi-container orchestration and simplified deployment  
- **Netlify** – Hosting and deployment of the web application
  
## Features
-  Add job applications  
-  Update application status  
-  Delete applications  
-  Responsive UI  
-  Docker container support  
-  Docker Compose orchestration

## Docker Implementation
The application is fully containerised using:

- Dockerfile for image creation  
- Docker Compose for service orchestration  
- .dockerignore for build optimisation  

 ## Prerequisites

Before running the project, install:

- Docker Desktop (latest version)  
- Docker Compose (included with Docker Desktop)  
- Git  

## Verify installation:

```bash
docker --version
docker-compose --version
git --version
## Branch Strategy
We implemented the following branching strategy:
- `main` - Production branch (protected, auto-deployed)  
- `develop` - Integration branch for testing and merging features  


 ```

## Job-Application-Tracker-Web-App/
```
├── .github/
│ └── workflows/
│ └── ci.yml
├── index.html
├── style.css
├── app.js
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
├── package-lock.json
├── src/
└── README.md
```
## Performance Optimisations

- Layer caching enabled in Dockerfile
- .dockerignore reduces image size
- Lightweight base image used
- Dependencies installed efficiently

## Individual Contributions

### Hashini Kaushalya
- Repository setup and configuration  
- Created GitHub Actions CI/CD workflows  
- Deployment setup on Vercel  
- Managed branch protection rules and merge conflict resolution  
- PR review and approval  

### Dimasha Thathsarani
- Developed Job Application Tracker UI using HTML/CSS/JS  
- Implemented Add/Edit/Delete and Status Update functionalities  
- Implemented Search, Filter, and Sort features  
- Ensured responsive design and user experience  
- Created feature branch and pull request with proper commits  

##  CI/CD Pipeline

This project uses a **Continuous Integration and Continuous Deployment (CI/CD) pipeline** to automate testing, building, and deployment.

Workflow file location : ```.github\workflows```

### **Pipeline Overview**

1. **Continuous Integration (CI)**
   - Triggered on push or pull request to `main` or `development` branches
   - Steps:
     - Code checkout from repository
     - Install dependencies (`npm install`)
     - Linting & formatting check
     - Run unit tests
     - Build production-ready application

2. **Continuous Deployment (CD)**
   - Triggered after successful CI on `main`
   - Steps:
     - Deploy build artifact to hosting service (Netlify )
     - Load environment variables securely
     - Optional post-deployment tests
     - Send deployment notifications

### Installation
```bash
# Clone the repository
git clone https://github.com/kaushalya-pathiranage/Job-Application-Tracker-Web-App.git

# Navigate into project
cd Job-Application-Tracker-Web-App

# Install dependencies if using npm
npm install

# Run development server
npm run dev

