chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("periodicAlarm", {
    periodInMinutes: 1 // Run every 1 minute
  });
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "periodicAlarm") {
    chrome.runtime.sendMessage({ type: "show_notification" });
  }
  // The chrome.notifications API is only available in the context of the extension's popup script or a content script. It cannot be directly used in the background script.
});