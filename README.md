# Job-Application-Tracker-Web-App
Job Application Tracker Web App built using Git, GitHub Actions CI/CD, and cloud deployment for Advanced DevOps assignment.
# Job Application Tracker Web App

## Group Information
- **Hashini Kaushalya** - ITBNM2313-0038 - Role: DevOps Engineer  
- **Dimasha Thathsarani** - ITBNM2313-0038 - Role: Full-Stack Developer  

## Project Description
The **Job Application Tracker Web App** helps users efficiently manage their job applications. Users can add, edit, delete, and update the status of job applications. It includes filtering, sorting, and search functionalities, and all data is stored in the browser's local storage for persistence. The app is fully responsive and works on mobile and desktop devices.


## Technologies Used
- HTML5, CSS3, JavaScript (ES6)  
- LocalStorage for data persistence  
- GitHub Actions (CI/CD)  
- Deployment Platform: Vercel  

## Features
- Add/Edit/Delete job applications  
- Update job status: Applied → Interview → Offer → Rejected  
- Filter jobs by status  
- Search jobs by title or company  
- Sort jobs by date or status  
- Responsive UI for mobile and desktop  

## Branch Strategy
We implemented the following branching strategy:
- `main` - Production branch (protected, auto-deployed)  
- `develop` - Integration branch for testing and merging features  
- `feature/*` - Individual feature development branches  

### Feature Branch Examples
- `feature/job-tracker-ui` (Dimasha Thathsarani)  
- `feature/ci-cd-setup` (Hashini Kaushalya)  

---

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

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher, optional if using build tools)
  
- Git  

## 🛠 CI/CD Pipeline

This project uses a **Continuous Integration and Continuous Deployment (CI/CD) pipeline** to automate testing, building, and deployment.

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
     - Deploy build artifact to hosting service (Netlify / Vercel)
     - Load environment variables securely
     - Optional post-deployment tests
     - Send deployment notifications

### Installation
```bash
# Clone the repository
git clone https://github.com/kaushalya-pathiranage/Job-Application-Tracker-Web-App.git

# Navigate to project directory
cd job-tracker-advanced

# Install dependencies if using npm
npm install

# Run development server
npm run dev

