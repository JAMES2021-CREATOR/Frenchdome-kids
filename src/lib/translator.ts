export async function translateToFrench(text: string): Promise<string> {
  const words: Record<string, string> = {
    hello: "bonjour",
    thanks: "merci",
    yes: "oui",
    no: "non",
    goodbye: "au revoir",
  };

  const key = text.trim().toLowerCase();

  return words[key] || `Translation coming soon: ${text}`;
}