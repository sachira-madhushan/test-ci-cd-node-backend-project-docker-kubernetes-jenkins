pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
  }
  stages {
    stage('Clone Branch') {
      steps {
        git credentialsId: 'github-creds',
            branch: 'main',
            url: 'https://github.com/sachira-madhushan/test-ci-cd-node-backend-project-docker-kubernetes-jenkins.git'
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

    stage('Run Docker Container') {
      steps {
        script {
          // Stop previous container if running
          sh 'docker rm -f backend || true'
          // Run the new container
          sh 'docker run -d --name backend -p 3000:3000 sachiramadhushan123/test-ci-cd-backend:v1'
        }
      }

    // stage('Deploy to Kubernetes') {
    //   steps {
    //     sh 'kubectl apply -f k8s/backend-deployment.yaml'
    //   }
    // }
  }
}
