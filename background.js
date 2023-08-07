// Set up an initial alarm when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("periodicAlarm", {
    periodInMinutes: 1 // Run every 15 minutes
  });
});

// Add an alarm listener to handle the alarm events
chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "periodicAlarm") {
    // Replace this with the code you want to run periodically
    console.log("Periodic alarm triggered. Running your code here...");
  }
});