import React from 'react'

const TerminalButton = ({ text, onClick }) => {
  const width = text.length + 2

  const border = (width) => {
    return '+' + '-'.repeat(width) + '+'
  }

  const centeredLine = (text, maxWidth) => {
    const padding = Math.floor((maxWidth - text.length) / 2)
    return '| ' + ' '.repeat(padding) + text + ' '.repeat(maxWidth - text.length - padding) + ' |'
  }

  return (
    <button
      onClick={onClick}
      className="cursor-pointer hover:text-green-400 transition-colors"
    >
      <div>{border(width)}</div>
      <div>{centeredLine(text, width - 2)}</div>
      <div>{border(width)}</div>
    </button>
  )
}
export default TerminalButton