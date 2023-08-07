document.addEventListener("DOMContentLoaded", (event) => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "show_notification") {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "images/icon48.png",
        title: "Periodic Alarm",
        message: "This is your periodic alarm notification.",
      });
    }
  });
});
