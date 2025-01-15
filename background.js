let enabled = true;

// Initialize the state from storage
chrome.storage.sync.get(["enabled"], (data) => {
  enabled = data.enabled ?? true; // Default to enabled if not set
});

// Listen for all key presses
document.addEventListener("keydown", () => {
  if (!enabled) return;

  // Play the sound for any key press
  const audio = new Audio(chrome.runtime.getURL("switch-button.mp3"));
  audio.play();
});

// Listen for messages to toggle the state
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "toggleEnabled") {
    enabled = message.value;
    chrome.storage.sync.set({ enabled }); // Save state to storage
  }
});
