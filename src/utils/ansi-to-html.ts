// Convert ANSI escape sequences to styled HTML
export function ansiToHtml(text: string): string {
  // ANSI color codes mapping
  const colorMap: { [key: string]: string } = {
    '30': 'color: #000000', // black
    '31': 'color: #ff4444', // red
    '32': 'color: #00ff00', // green
    '33': 'color: #ffff00', // yellow
    '34': 'color: #4a9eff', // blue
    '35': 'color: #ff00ff', // magenta
    '36': 'color: #00ffff', // cyan
    '37': 'color: #ffffff', // white
    '90': 'color: #808080', // bright black (gray)
    '91': 'color: #ff6b6b', // bright red
    '92': 'color: #51cf66', // bright green
    '93': 'color: #ffd43b', // bright yellow
    '94': 'color: #74c0fc', // bright blue
    '95': 'color: #d084d0', // bright magenta
    '96': 'color: #4ecdc4', // bright cyan
    '97': 'color: #f8f9fa', // bright white
  };

  // Replace ANSI escape sequences with HTML spans
  let result = text;

  // Handle color codes like \x1b[34m (blue) and \x1b[0m (reset)
  result = result.replace(/\x1b\[(\d+)m/g, (match, code) => {
    if (code === '0') {
      return '</span>'; // Reset - close any open span
    }

    const style = colorMap[code];
    if (style) {
      return `<span style="${style}">`;
    }

    return ''; // Remove unrecognized codes
  });

  // Clean up any orphaned closing tags at the beginning
  result = result.replace(/^<\/span>/, '');

  // Ensure all spans are properly closed
  const openSpans = (result.match(/<span[^>]*>/g) || []).length;
  const closeSpans = (result.match(/<\/span>/g) || []).length;

  if (openSpans > closeSpans) {
    result += '</span>'.repeat(openSpans - closeSpans);
  }

  return result;
}

