pipeline {
    agent any

    tools {nodejs "node14"}

    stages {
        stage('Insatll dependencies') {
            steps {
                echo 'Installing dependencies..'
                sh 'npm install'
            }
        }
        stage('Lint') {
            steps {
                echo 'Linting..'
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
         stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}