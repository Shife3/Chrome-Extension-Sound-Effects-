const toggle = document.getElementById("enableToggle");

// Load the initial state
chrome.storage.sync.get(["enabled"], (data) => {
  toggle.checked = data.enabled ?? true; // Default to enabled if not set
});

// Handle toggle change
toggle.addEventListener("change", (event) => {
  const isEnabled = event.target.checked;
  chrome.runtime.sendMessage({ action: "toggleEnabled", value: isEnabled });
});
