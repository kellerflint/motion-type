import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import './App.css'

function App() {
  const [vimMode, setVimMode] = useState('normal')
  const editorRef = useRef<any>(null)
  const vimModeRef = useRef<any>(null)

  const handleEditorDidMount = async (editor: any) => {
    editorRef.current = editor
    
    try {
      // Dynamically import monaco-vim
      const { initVimMode } = await import('monaco-vim')
      
      // Initialize VIM mode
      vimModeRef.current = initVimMode(editor, document.getElementById('vim-status'))
      
      // Track VIM mode changes
      vimModeRef.current.on('vim-mode-change', (mode: any) => {
        setVimMode(mode.mode)
      })
    } catch (error) {
      console.error('Failed to initialize VIM mode:', error)
    }

    // Disable mouse interactions
    editor.updateOptions({
      disableLayerHinting: true,
      scrollBeyondLastLine: false,
      selectOnLineNumbers: false,
      selectionHighlight: false,
      contextmenu: false,
      mouseWheelZoom: false,
    })

    // Set focus to editor
    editor.focus()
  }

  const defaultCode = `// VIM Motions Training
// This is a sample JavaScript file
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);

console.log('Fibonacci of 10:', fibonacci(10));
console.log('Doubled numbers:', doubled);

// Practice your VIM motions here!
// Try navigating with h, j, k, l
// Use w, b, e for word movements
// Try 0, $, gg, G for line movements`

  return (
    <div className="app">
      <div className="header">
        <h1>VIM Motions Training</h1>
        <div className="status-bar">
          <span className={`vim-mode vim-mode-${vimMode}`}>
            Mode: {vimMode.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="editor-container">
        <Editor
          height="80vh"
          defaultLanguage="javascript"
          defaultValue={defaultCode}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          options={{
            fontSize: 14,
            lineNumbers: 'on',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            automaticLayout: true,
          }}
        />
      </div>
      
      <div id="vim-status" className="vim-command-line"></div>
    </div>
  )
}

export default App
