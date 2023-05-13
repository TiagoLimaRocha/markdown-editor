import path from 'path';

export function getPathToMarkdown() {
  const pathToMarkdown = path.join(__dirname, 'assets/markdown.md');
  return pathToMarkdown;
}
