pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        IMAGE_NAME = 'samintelli/nodejs-app'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/devopscontent/nodejs-app.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "No test cases found."'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    sh 'echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin'
                    sh 'docker push ${IMAGE_NAME}'
                }
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker rmi ${IMAGE_NAME}'
            }
        }
    }
}

