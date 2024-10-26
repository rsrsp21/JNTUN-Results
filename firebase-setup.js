// Import the Firebase SDK components
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, onDisconnect, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

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

// --- Display live number of users ---
const liveUserCountElement = document.getElementById('live-users'); // Ensure this element exists in your HTML

// Reference to the 'onlineUsers' node
const onlineUsersRef = ref(database, 'onlineUsers');

// Listen to the number of users online
onValue(onlineUsersRef, (snapshot) => {
  const onlineUsers = snapshot.val();
  const userCount = onlineUsers ? Object.keys(onlineUsers).length : 0;
  
  // Update the user count in the HTML element
  liveUserCountElement.textContent = `Live Users Online: ${userCount}`;
});