Full Stack Real-Time Chat Application
Overview
This project is a full-stack real-time chat application built using React for the front-end and Firebase for the backend. It features real-time messaging, user authentication, image sharing, and more. It is designed to be scalable with a planned roadmap for advanced features like end-to-end encryption, live location sharing, file sharing, and more.

Features
User Authentication: Register and log in securely with Firebase.
Real-Time Messaging: Send and receive messages instantly using Firestore.
Image Sharing: Share images directly within the chat.
User Blocking: Block users to stop receiving messages from them.
Search and Add Users: Easily find and connect with other users.
Setup Instructions
1. Clone the Repository
Run the following command to clone the project to your local machine:

bash
Copy code
git clone https://github.com/Destroyerg0d/TEACUPPP
2. Install Dependencies
If you're running this on a new PC with no dependencies installed, you'll need to install the necessary libraries. Make sure you have Node.js and npm installed. You can download them from Node.js official website.

Run the following command to install project dependencies:

bash
Copy code
npm install
3. Firebase Setup
Go to Firebase Console.
Create a new project and set up Authentication, Firestore, and Storage.
Obtain your Firebase configuration details (API Key, Auth Domain, Project ID, etc.).
Create a .env file in the root of your project and add the following:
bash
Copy code
REACT_APP_API_KEY=<your-firebase-api-key>
REACT_APP_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_PROJECT_ID=<your-project-id>
REACT_APP_STORAGE_BUCKET=<your-storage-bucket>
REACT_APP_MESSAGING_SENDER_ID=<your-messaging-sender-id>
REACT_APP_APP_ID=<your-app-id>
4. Run the Application
After setting up Firebase and installing dependencies, you can run the project with:

bash
Copy code
npm start
The application will be available at http://localhost:3000/.

Features in Development
End-to-End Encryption: Ensures that only the sender and receiver can read messages.
Live Location Sharing: Share real-time locations securely.
File Sharing (All Formats): Support for sharing .doc, .pptx, .zip, etc.
Language Translator: Real-time translation of messages into multiple Indian languages.
Offline Messaging: Messages sent offline will be delivered once back online.
Whiteboard & Video Calling: Add seamless online meetings with a whiteboard and smooth video calling.
Planned Future Updates
Blockchain Integration: Secure messaging using blockchain technology.
AI Fact-Checking: Real-time fact-checking for shared news.
AI-Powered Chat: Integrated chatbot to assist users in conversations.
