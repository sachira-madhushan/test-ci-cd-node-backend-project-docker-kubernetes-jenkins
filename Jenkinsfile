pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
  }
  stages {
    stage('Clone Branch') {
      steps {
        git branch: 'production', url: 'https://github.com/sachira-madhushan/test-ci-cd-node-backend-project-docker-kubernetes-jenkins.git'
      }
    }

    stage('Build Docker') {
      steps {
        script {
          docker.build("sachiramadhushan123/test-ci-cd-backend:v1")
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        script {
          docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
            docker.image("sachiramadhushan123/test-ci-cd-backend:v1").push()
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/backend-deployment.yaml'
      }
    }
  }
}
