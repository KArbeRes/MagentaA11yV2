// src/hooks/useClipboard.ts
import { useState } from 'react';

export function useClipboard() {
  const [copiedContent, setCopiedContent] = useState<string | null>(null);

  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedContent(content);
    } catch (err) {
      console.error('Failed to copy content: ', err);
    }
  };

  const isContentInClipboard = async (content: string) => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      return clipboardText === content;
    } catch (err) {
      console.error('Failed to read clipboard content: ', err);
      return false;
    }
  };

  return {
    copiedContent,
    copyToClipboard,
    isContentInClipboard,
    setCopiedContent,
  };
}
