# purpleChess - Clock Accessibility Plugin for chess.com

A Chrome extension that provides visual feedback for chess.com time management by changing the background color based on the relative time difference between players. The background shifts between dark blue (time advantage) and dark red (time deficit) to help players quickly gauge their time situation.

## Features

- Real-time visual feedback through background color changes
- Smooth gradient transition between time states
- Updates every 5ms for responsive feedback
- Works on chess.com live games
- Color coding:
  - Dark blue: 20% or more time advantage
  - Dark red: 20% or more time deficit
  - Gradient between red and blue: proportional to time difference within ±20%

## Installation

1. Clone this repository or download the source code (if you dont know "code", relax, this is just two files in a folder, baby. You can download them to your computer and upload them "unpacked")
```bash
git clone [repository-url]
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" using the toggle in the top right corner

4. Click "Load unpacked"

5. Select the directory containing the extension files

## Usage

1. Start a live game on chess.com (https://www.chess.com/game/live/)

2. The plugin will automatically activate and begin monitoring the time difference

3. Background colors indicate:
   - Dark blue: You have 25% or more time than your opponent
   - Dark red: You have 25% or less time than your opponent
   - Gradient: Proportional blend showing relative time difference

## Technical Details

The extension consists of two main files:

### manifest.json
- Defines extension metadata and permissions
- Specifies content script injection rules
- Targets only live chess games on chess.com

### content.js
- Monitors chess clocks using DOM selectors
- Parses time formats (m:ss and m:s.ds)
- Calculates relative time differences
- Updates background color using RGB interpolation
- Polls every 5ms for smooth updates

## Development

To modify the extension:

1. Edit the source files
2. Reload the extension in `chrome://extensions/`
3. Refresh the chess.com page

Key parameters that can be adjusted:
- `THRESHOLD`: Currently set to 25 (percentage difference for max colors)
- Update frequency: Currently set to 5ms
- Color values: Currently using rgb(139, 0, 0) for red and rgb(0, 0, 139) for blue

## License

MIT License - feel free to use and modify as needed.

## Support

For issues or suggestions:
1. Create a GitHub issue
2. Include a clear description of the problem or feature request
3. Provide steps to reproduce any bugs
