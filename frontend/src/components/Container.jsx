import React, { useState, useEffect } from 'react'

const Container = ({ blocks = [{ texts: [""], align: "center" }] }) => {
  const [width, setWidth] = useState(40)

  useEffect(() => {
    const handleResize = () => {
      // Mobile breakpoint is 768px
      setWidth(window.innerWidth < 768 ? 44 : 100)
    }

    handleResize()

    window.addEventListener('resize', handleResize)


    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const wrapText = (text, maxWidth) => {
    const words = text.split(' ')
    const lines = []
    let currentLine = []

    words.forEach(word => {
      if ((currentLine.join(' ') + ' ' + word).length <= maxWidth - 4) {
        currentLine.push(word)
      } else {
        if (currentLine.length > 0) lines.push(currentLine.join(' '))
        currentLine = [word]
      }
    })
    if (currentLine.length > 0) lines.push(currentLine.join(' '))
    return lines
  }

  const allTexts = blocks.flatMap(block => block.texts)
  const allLines = allTexts.flatMap(text => wrapText(text, width))
  const maxLineLength = Math.max(...allLines.map(line => line.length))
  const containerWidth = Math.max(width, maxLineLength + 4)
  const topBorder = '+' + '-'.repeat(containerWidth) + '+'
  const emptyLine = '|' + ' '.repeat(containerWidth) + '|'

  const centerLine = (line) => {
    const padding = Math.floor((containerWidth - line.length) / 2)
    return `|${' '.repeat(padding)}<b>${line}</b>${' '.repeat(containerWidth - line.length - padding)}|`
  }

  const leftAlignLine = (line) => {
    return `|${' '}${line}${' '.repeat(containerWidth - line.length - 1)}|`
  }

  return (
    <div>
      <pre className="text-white p-4 rounded-lg shadow-lg">
        <p>{topBorder}</p>
        {blocks.map((block, blockIndex) => (
          <React.Fragment key={blockIndex}>
            {block.texts.flatMap(text => wrapText(text, width)).map((line, lineIndex) => (
              <p
                key={`${blockIndex}-${lineIndex}`}
                dangerouslySetInnerHTML={{
                  __html: block.align === "center" ? centerLine(line) : leftAlignLine(line)
                }}
              />
            ))}
            {blockIndex < blocks.length - 1 && <p>{emptyLine}</p>}
          </React.Fragment>
        ))}
        <p>{topBorder}</p>
      </pre>
    </div>
  )
}

export default Container