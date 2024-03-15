import showdown from 'showdown';

export function formatMarkdown(markdownText: string) {
  const converter = new showdown.Converter();
  return converter.makeHtml(markdownText);
}
