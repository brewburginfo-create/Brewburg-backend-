import { fetchAllStories } from './fetcher.js';
import { summariseStory } from './summariser.js';
import { saveStories, logPipelineRun } from './store.js';
import { sendNotification } from './notify.js';

export async function runPipeline() {
  console.log('🚀 Brewburg pipeline starting...');
  const startTime = Date.now();

  try {
    // Step 1: Fetch
    console.log('\n📡 Fetching stories...');
    const rawStories = await fetchAllStories();
    console.log(`✅ Fetched ${rawStories.length} stories total`);

    // Step 2: Summarise
    console.log('\n🤖 Summarising with Claude...');
    const summarised = [];
    for (const story of rawStories) {
  const brief = await summariseStory(story);
  await new Promise(r => setTimeout(r, 1500));
      if (brief) {
        summarised.push({ ...story, brief });
        process.stdout.write('.');
      }
    }
    console.log(`\n✅ Summarised ${summarised.length} stories`);

    // Step 3: Save
    console.log('\n💾 Saving to database...');
    const saved = await saveStories(summarised);

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n✅ Pipeline done in ${duration}s — ${saved} stories saved`);
    if (saved > 0 && stories[0]) {
  await sendNotification('☕ Fresh Business News', stories[0].title);
}

    await logPipelineRun('success', rawStories.length, saved);

  } catch (err) {
    console.error('❌ Pipeline failed:', err.message);
    await logPipelineRun('error', 0, 0, err.message);
  }
}

// Run immediately if called directly
runPipeline();