Core Features
Editor Setup

Monaco Editor with VIM mode enabled
Syntax highlighting for JavaScript/TypeScript (expandable later)
Dark theme by default
Disable mouse interactions completely - keyboard only
Line numbers enabled

Challenge System

Display "before" and "after" code side by side or in sequence
Highlight required changes using diff-style coloring:

Red background for lines to delete
Green background for lines to add
Yellow/orange for lines to modify


Show current challenge number and total challenges
Simple challenge data structure (JSON array of before/after pairs)

VIM Motion Tracking

Capture and log all VIM commands used
Display current VIM mode (normal/insert/visual) in UI
Track cursor position changes
Count keystrokes for efficiency scoring

Progress Validation

Real-time comparison of current editor state vs target state
Visual indicator when user completes a challenge correctly
"Next Challenge" button that only appears when current challenge is solved
Basic error highlighting when user makes incorrect changes

UI Components

Timer display (MM:SS format)
Current challenge indicator (e.g., "Challenge 3 of 10")
VIM mode indicator
Simple progress bar
Basic statistics: time elapsed, keystrokes used
Reset/restart current challenge button

Sample Challenge Structure
