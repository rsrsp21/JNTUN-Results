// Import the Firebase SDK components
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, get, set, onDisconnect, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHBHb5Fm1gIn1K46FpPG242xxllEMDFQU",
  authDomain: "jntunresults.firebaseapp.com",
  projectId: "jntunresults",
  storageBucket: "jntunresults.appspot.com",
  messagingSenderId: "983884824191",
  appId: "1:983884824191:web:d8ccac87652c793825094a",
  measurementId: "G-K2B6V0HZ70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app); // Initialize Auth after app

// Sign in the user anonymously
signInAnonymously(auth)
  .then(() => {
    console.log("User signed in anonymously");
    setUserOnline(); // Set user online after authentication
  })
  .catch((error) => {
    console.error("Authentication failed:", error);
  });

// Get or generate unique user ID (stored in localStorage)
let userId = localStorage.getItem('userId');
if (!userId) {
  userId = 'user_' + Math.random().toString(36).substring(2);
  localStorage.setItem('userId', userId);
}

// Reference to this user's data in Realtime Database
const userRef = ref(database, 'onlineUsers/' + userId);

// Function to fetch the user's IP address
async function getUserIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip; // Returns the user's IP address
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null; // Return null if there's an error
  }
}

// Function to mark user as online
async function setUserOnline() {
  const ip = await getUserIP(); // Fetch IP address
  set(userRef, {
    online: true,
    timestamp: Date.now(),
    ip: ip // Store the user's IP address
  });
}

// Function to mark user as offline on page unload or disconnect
function setUserOffline() {
  set(userRef, null);  // Remove the user from the database
}

// Set user online when they load the page
setUserOnline();

// Handle user disconnection (like closing the browser)
onDisconnect(userRef).remove();

// Optional: Track user inactivity (set user offline after inactivity)
let inactivityTimeout;
const INACTIVITY_LIMIT = 5 * 60 * 1000; // 5 minutes

function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(setUserOffline, INACTIVITY_LIMIT);
}

// Reset inactivity timer when user interacts
window.addEventListener('mousemove', resetInactivityTimer);
window.addEventListener('keydown', resetInactivityTimer);
resetInactivityTimer(); // Start the timer when page loads

// Set user offline if they close the page
window.addEventListener('beforeunload', setUserOffline);

// Reference to the 'onlineUsers' node
const liveUserCountElement = document.getElementById('live-users');
liveUserCountElement.textContent = 'Loading...'; // Display loading message initially

const onlineUsersRef = ref(database, 'onlineUsers');

// 1. Fetch the initial value once to avoid the 0 count initially
get(onlineUsersRef).then((snapshot) => {
  const onlineUsers = snapshot.val();
  const userCount = onlineUsers ? Object.keys(onlineUsers).length : 0;

  // Set the initial user count in the UI
  liveUserCountElement.textContent = `Live Users Online: ${userCount}`;
});

// 2. Set up the real-time listener to update the count as users come and go
onValue(onlineUsersRef, (snapshot) => {
  const onlineUsers = snapshot.val();
  const userCount = onlineUsers ? Object.keys(onlineUsers).length : 0;

  // Dynamically update the user count
  liveUserCountElement.textContent = `Live Users Online: ${userCount}`;
});
