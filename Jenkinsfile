pipeline {
    agent any
    
    tools {
        // Define Node.js tool installation.
        nodejs 'nodejs'
        git 'git'
    }
    
    stages {
        stage('Clone Code') {
            steps {
                // Trigger the pipeline automatically on new changes
                git branch: 'master', url: 'https://github.com/Meresia13/gallery'
                
                // Install required software and dependencies
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                // Run the build command specified in Jenkinsfile
                sh 'npm run'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run npm test command
                sh 'npm test'
            }
        }
        
        stage('Deploy to Render') {
            steps {
                // Deploy to Render
                sh 'curl -X POST -d "" https://api.render.com/deploy/srv-codm1igl6cac73bmhod0?key=28xNlHQYJ38'
            }
        }
        
        stage('Send slack Message') {
            steps {
                 // Send slack message when deployment is successful
                 slackSend color: 'good', message: 'Deployment successful. Build ID:  85cb931:, Link to Render - https://java-todo-99ii.onrender.com/'
            }
        }
    }
    
    post {
        failure {
            // Send email notification if any stage fails
            emailext subject: 'Pipeline Failed',
                      body: "The pipeline gallery failed. Please check the logs for details.",
                      to: 'melisaopiyo@gmailcom'
        }
    }
}
