# 🚀 Cloud Deployment Pipeline

An end-to-end Cloud & DevOps project that automates application testing, Docker image creation, publishing, and deployment to AWS EC2 using GitHub Actions and AWS Systems Manager.

## 📌 Project Overview

Cloud Deployment Pipeline demonstrates how a Node.js application can be containerized and automatically deployed to AWS through a CI/CD pipeline.

Whenever code is pushed to the `main` branch, GitHub Actions automatically:

- Installs dependencies
- Runs automated tests
- Builds the Docker image
- Publishes the image to GitHub Container Registry
- Authenticates with AWS using GitHub OIDC
- Uses AWS Systems Manager to communicate with EC2
- Pulls the new image onto the EC2 instance
- Replaces the existing application container
- Starts the updated application

The goal is to create a practical and repeatable deployment workflow instead of manually deploying every application update.

## 🏗️ Architecture

```text
Developer
    |
    | git push
    v
GitHub Repository
    |
    v
GitHub Actions CI/CD
    |
    +--> Install dependencies
    |
    +--> Run tests
    |
    +--> Build Docker image
    |
    +--> Push image to GHCR
    |
    +--> Authenticate using GitHub OIDC
    |
    v
AWS IAM
    |
    v
AWS Systems Manager
    |
    v
Amazon EC2
    |
    v
Docker Container
    |
    v
Node.js Application
```

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Application runtime |
| Express.js | Web application |
| Docker | Application containerization |
| Git & GitHub | Source code management |
| GitHub Actions | CI/CD automation |
| GitHub Container Registry | Docker image storage |
| AWS EC2 | Application hosting |
| AWS Systems Manager | Remote deployment |
| AWS IAM | Access control |
| GitHub OIDC | Secure AWS authentication |
| Ubuntu Linux | Server environment |

## ⚙️ CI/CD Workflow

The GitHub Actions pipeline performs the following steps:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies using `npm ci`.
4. Runs automated tests.
5. Authenticates with GitHub Container Registry.
6. Builds the Docker image.
7. Publishes the image to GHCR.
8. Authenticates to AWS using GitHub OIDC.
9. Assumes the deployment IAM role.
10. Sends deployment commands through AWS Systems Manager.
11. Pulls the new image onto EC2.
12. Stops and removes the previous container.
13. Starts the new application container.
14. Waits for the deployment result.

## ☁️ AWS Infrastructure

### Amazon EC2

Hosts the containerized Node.js application on an Ubuntu-based server.

### AWS Systems Manager

Executes deployment commands on the EC2 instance without requiring GitHub Actions to directly SSH into the server.

### AWS IAM

Controls the permissions used by the GitHub Actions deployment process.

### GitHub OIDC

Allows GitHub Actions to authenticate with AWS using temporary credentials instead of storing long-lived AWS access keys.

## 🔐 Security

Security is built into the deployment workflow.

- GitHub OIDC is used instead of long-lived AWS access keys.
- AWS IAM controls deployment permissions.
- The GitHub Actions role is restricted to the required deployment operations.
- The OIDC trust relationship is restricted to the intended GitHub repository and branch.
- Sensitive credentials and environment files are excluded from the repository.
- Docker images are tagged using the Git commit SHA for traceable deployments.

## 🐳 Application

The project uses a lightweight Node.js/Express application.

The application provides:

- A main application endpoint
- A health endpoint
- Automated tests
- Docker-based deployment

The application runs on port `3000`.

## 📊 Deployment Validation

The deployment can be validated by checking:

- GitHub Actions workflow status
- Docker image availability in GHCR
- AWS Systems Manager command status
- EC2 container status
- Application response
- Application health endpoint
- Container logs

A successful deployment results in the new application version running inside the Docker container on EC2.

## 💻 Run Locally

The application can be run locally without AWS, making it easy to test the application before evaluating the CI/CD pipeline.

### Prerequisites

- Node.js
- npm
- Git

### Run the Application

Clone the repository and install the dependencies:

```bash
git clone https://github.com/sgavhane265-oss/cloud-deployment-pipeline.git
cd cloud-deployment-pipeline
npm ci
```

Run the tests:

```bash
npm test
```

Start the application:

```bash
npm start
```

The application will be available at:

**http://localhost:3000**

Health endpoint:

**http://localhost:3000/health**

### Run with Docker

The application can also be tested locally using Docker:

```bash
docker build -t cloud-deployment-pipeline .
docker run -d --name cloud-app -p 3000:3000 cloud-deployment-pipeline
```

Then access:

**http://localhost:3000**

This provides two ways to test the project locally:

**Node.js → Express → localhost:3000**

or

**Docker → Express → localhost:3000**

The local application can then be followed through the complete deployment workflow:

**Local Application → Docker → GitHub Actions → GHCR → AWS EC2**

## 🧪 How to Assess the Project

To evaluate the project, follow the complete deployment flow:

1. Review the GitHub repository and project structure.
2. Review the GitHub Actions workflow.
3. Check the Docker configuration.
4. Review the GHCR image generated by the workflow.
5. Review the AWS OIDC and IAM configuration.
6. Check the Systems Manager deployment configuration.
7. Make a small change to the application.
8. Push the change to the `main` branch.
9. Observe the GitHub Actions pipeline.
10. Verify that the new version is deployed to EC2.
11. Check the running Docker container and application health.
12. Introduce a temporary test failure and verify that the pipeline stops before deployment.

The main assessment is whether a change can successfully travel from:

**Git Push → CI Tests → Docker Build → GHCR → AWS Authentication → SSM → EC2 → Running Application**

## 🎯 Project Objectives

- Automate application deployment using CI/CD.
- Containerize a Node.js application using Docker.
- Build and publish Docker images automatically.
- Deploy containers to AWS EC2.
- Implement secure GitHub-to-AWS authentication using OIDC.
- Use AWS Systems Manager for remote deployment.
- Apply IAM-based access control.
- Gain practical experience with Linux, Docker, AWS, and GitHub Actions.

## 🚧 Future Enhancements

- Add automated post-deployment health checks.
- Implement automatic rollback on failed deployments.
- Add Nginx as a reverse proxy.
- Configure HTTPS and TLS.
- Add Docker image vulnerability scanning.
- Add AWS CloudWatch monitoring and logging.
- Provision infrastructure using Terraform.
- Implement blue-green or rolling deployments.
- Add a load balancer for a more production-oriented architecture.

## 📈 Project Status

**Completed and Working**

The CI/CD pipeline has been implemented and tested successfully from source-code push through automated deployment to AWS EC2.

## 👨‍💻 Author

**Shubham Gavhane**

Computer Science & Engineering Student

**Cloud Computing | DevOps | AWS | Linux | Docker | CI/CD**

## 🔗 Repository

[GitHub Repository](https://github.com/sgavhane265-oss/cloud-deployment-pipeline)
