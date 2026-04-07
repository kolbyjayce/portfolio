import { ansiToHtml } from '../utils/ansi-to-html';

interface AnsiTextProps {
  children: string;
}

export function AnsiText({ children }: AnsiTextProps) {
  const htmlContent = ansiToHtml(children);

  return (
    <span
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ fontFamily: 'inherit' }}
    />
  );
}