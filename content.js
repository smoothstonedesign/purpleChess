function parseTime(timeStr) {
  // Handle m:ss format
  if (timeStr.includes(':')) {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
  }
  // Handle decimal seconds (m:s.ds)
  return parseFloat(timeStr) * 60;
}

function getColorFromTimeDifference(playerSeconds, opponentSeconds) {
  // Calculate percentage difference
  const percentDiff = ((playerSeconds - opponentSeconds) / opponentSeconds) * 100;
  
  // Define threshold and colors
  const THRESHOLD = 25;
  const DARK_RED = [139, 0, 0];
  const DARK_BLUE = [0, 0, 139];
  
  if (percentDiff <= -THRESHOLD) {
    // Maximum deficit: dark red
    return `rgb(${DARK_RED.join(',')})`;
  } else if (percentDiff >= THRESHOLD) {
    // Maximum advantage: dark blue
    return `rgb(${DARK_BLUE.join(',')})`;
  } else {
    // Calculate gradient position (0 to 1)
    const gradientPosition = (percentDiff + THRESHOLD) / (THRESHOLD * 2);
    
    // Linear interpolation between dark red and dark blue
    const r = Math.round(DARK_RED[0] * (1 - gradientPosition) + DARK_BLUE[0] * gradientPosition);
    const g = Math.round(DARK_RED[1] * (1 - gradientPosition) + DARK_BLUE[1] * gradientPosition);
    const b = Math.round(DARK_RED[2] * (1 - gradientPosition) + DARK_BLUE[2] * gradientPosition);
    
    return `rgb(${r}, ${g}, ${b})`;
  }
}

function updateBackgroundColor() {
    const playerClock = document.querySelector('.player-bottom .clock-time-monospace, #player-bottom .move-time-monospace');
    const opponentClock = document.querySelector('.player-top .clock-time-monospace, #player-top .move-time-monospace');
  
  if (!playerClock || !opponentClock) {
    console.log('Clocks not found'); // Debug log
    return;
  }
  
  const playerTime = playerClock.textContent.trim();
  const opponentTime = opponentClock.textContent.trim();
  
  const playerSeconds = parseTime(playerTime);
  const opponentSeconds = parseTime(opponentTime);
  
  const newColor = getColorFromTimeDifference(playerSeconds, opponentSeconds);
  document.body.style.backgroundColor = newColor;
}

// Update color every 5 ms
setInterval(updateBackgroundColor, 5);

// Initial update
updateBackgroundColor();
