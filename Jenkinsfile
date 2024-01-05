pipeline {
  agent any
  stages {
    stage('pre-build'){
      steps {
        slackSend message : "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
      }
    }
    stage('develop build') {
      agent any
      when {
        beforeAgent true
        branch 'develop'
      }
      steps {
        sh '''
kubectl config set-context --current --namespace=develop
docker build -f Dockerfile.develop -t qognitiv-develop:$BRANCH_NAME-$BUILD_NUMBER .
docker tag qognitiv-develop:$BRANCH_NAME-$BUILD_NUMBER registry.variancetechnologies.io/qognitiv-develop:$BRANCH_NAME-$BUILD_NUMBER
docker push registry.variancetechnologies.io/qognitiv-develop:$BRANCH_NAME-$BUILD_NUMBER
kubectl set image deployment/qognitiv-develop qognitiv-develop=registry.variancetechnologies.io/qognitiv-develop:$BRANCH_NAME-$BUILD_NUMBER
'''
      }
    }
    stage('staging build') {
      agent any
      when {
        beforeAgent true
        tag 'release-*'
      }
      steps {
        sh '''
kubectl config set-context --current --namespace=staging
docker build -f Dockerfile.staging -t qognitiv-staging:$BRANCH_NAME-$BUILD_NUMBER .
docker tag qognitiv-staging:$BRANCH_NAME-$BUILD_NUMBER registry.variancetechnologies.io/qognitiv-staging:$BRANCH_NAME-$BUILD_NUMBER
docker push registry.variancetechnologies.io/qognitiv-staging:$BRANCH_NAME-$BUILD_NUMBER
kubectl set image deployment/qognitiv-staging qognitiv-staging=registry.variancetechnologies.io/qognitiv-staging:$BRANCH_NAME-$BUILD_NUMBER
'''
      }
    }
    stage('production build') {
      agent any
      when {
        beforeAgent true
        branch 'master'
      }
      steps {
        sh '''
kubectl config set-context --current --namespace=production
docker build -f Dockerfile.production -t qognitiv-production:$BRANCH_NAME-$BUILD_NUMBER .
docker tag qognitiv-production:$BRANCH_NAME-$BUILD_NUMBER registry.variancetechnologies.io/qognitiv-production:$BRANCH_NAME-$BUILD_NUMBER
docker push registry.variancetechnologies.io/qognitiv-production:$BRANCH_NAME-$BUILD_NUMBER
kubectl set image deployment/qognitiv-production qognitiv-production=registry.variancetechnologies.io/qognitiv-production:$BRANCH_NAME-$BUILD_NUMBER
'''
      }
    }

  }
  post {
       // only triggered when blue or green sign
       success {
           slackSend message : "Build Sucess - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
       }
       // triggered when red sign
       failure {
           slackSend message : "Build Failed - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
       }
    }
}

