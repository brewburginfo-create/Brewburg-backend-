import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function summariseStory(story) {
  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 200,
      messages: [{
        role: 'user',
        content: 'Summarise this business news in EXACTLY 60 words for a founder/investor audience. Be direct, data-driven. Bold 1 key number using **number** format. No fluff.\n\nTitle: ' + story.title + '\nContent: ' + story.raw_content + '\n\n60-word summary:'
      }]
    });
    return response.content[0].text.trim();
  } catch (err) {
    console.log('Summarise failed: ' + err.message);
    return null;
  }
}