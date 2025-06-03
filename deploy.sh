#!/bin/bash

echo "🚀 Starting deployment to SAP Cloud Foundry..."

# Build the application
echo "📦 Building the application..."
npm run build

# Deploy to Cloud Foundry
echo "☁️ Deploying to Cloud Foundry..."
cf push

echo "✅ Deployment completed!"
echo "🌐 Your app should be available at: https://design-pattern-app.cfapps.sap.hana.ondemand.com" 