# CI/CD Pipeline Integration with GitHub Actions and Render

### Deployed website: https://module-20-challenge-github-actions-ci-cd.onrender.com/

## Challenge Overview
As applications scale, maintaining code quality becomes essential. This project integrates **Continuous Integration (CI)** and **Continuous Deployment (CD)** practices to ensure code consistency, reliability, and faster delivery cycles.


This project demonstrates how to set up a CI/CD pipeline for a full-stack application using **GitHub Actions** for automated testing and deployment. It ensures that component tests are run automatically on pull requests to the `develop` branch and the application is deployed to **Render** when code is merged to the `main` branch.

There are two separate YAML files that define the pipelines: one for when a pull request is opened to the develop branch, and another for when code is merged into the main branch.

- `test-on-pr-develop.yml` – Runs Cypress component tests on PRs to `develop`
- `deploy-to-render.yml` – Deploys to Render when code is pushed to `main`

## Application Overview
When the application loads, you will see a **"Start Quiz"** button. Clicking it will begin a quiz containing multiple-choice questions related to Python. Each question has four answer options, but only one is correct. At the end of the quiz, your score will be displayed, showing how many answers you got right.

## Technologies Used
- **TypeScript + React** - Frontend 
- **GitHub Actions** – CI/CD automation
- **Cypress** – Component testing framework
- **Node.js / npm** – Dependency and script management
- **Render** – Deployment platform

## Installation
1. Clone the repo
2. Set `.env` file in the /server directory
3. Run `npm i`
4. Run `npm run seed`
5. Run `npm run build`
6. Run `npm run start`
7. Run `npm run test-component` - if you want to run component tests

