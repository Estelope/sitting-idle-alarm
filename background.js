// Set up an initial alarm when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("periodicAlarm", {
    periodInMinutes: 1 // Run every 1 minute
  });
});

// Add an alarm listener to handle the alarm events
chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "periodicAlarm") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "images/icon48.png",
      title: "Periodic Alarm",
      message: "This is your periodic alarm notification.",
    });
  
  }
});