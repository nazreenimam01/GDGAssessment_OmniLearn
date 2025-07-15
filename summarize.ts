// functions/src/flows/summarize.ts

export async function summarizeText({ text, format }: { text: string; format: string }) {
  // Fallback/demo response
  if (!text.trim()) {
    throw new Error("No input text provided");
  }

  const simplifiedText =
    format === "bullet points"
      ? `• Point 1: Simplified insight from demo.\n• Point 2: Clear explanation.\n• Point 3: Final takeaway.`
      : "This is a simplified summary of the provided input (static demo).";

  return { simplifiedText };
}
