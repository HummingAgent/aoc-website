import React from 'react';

/**
 * Converts URLs in text to clickable links
 * Handles http, https, and www links
 */
export function linkifyText(text: string): React.ReactNode[] {
  // Regex to match URLs
  const urlRegex = /(https?:\/\/[^\s<]+|www\.[^\s<]+)/gi;
  
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    // Check if this part is a URL
    if (part.match(urlRegex)) {
      const href = part.startsWith('www.') ? `https://${part}` : part;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rust hover:text-rust-dark underline break-all"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

/**
 * Component that renders text with clickable links
 */
export function LinkedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {linkifyText(text)}
    </span>
  );
}
