export async function convertMediaToText({
  mediaDataUri,
}: {
  mediaDataUri: string;
}): Promise<{ simplifiedText: string }> {
  // Ignore mediaDataUri — return demo content
  return {
    simplifiedText: `This is a demo transcription of your uploaded media.\n\nKey Points:\n• Point one from the video.\n• Important note two.\n• Summary ends here.`,
  };
}
