import ws from 'ws';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  { realtime: { transport: ws } }
);

export async function saveStories(stories) {
  let saved = 0;
  for (const story of stories) {
    try {
      const { error } = await supabase
        .from('stories')
        .insert({
          title: story.title,
          url: story.url,
          source: story.source,
          category: story.category,
          brief: story.brief,
          image_url: story.image_url || null,
          published_at: story.published_at
        });
      if (error) {
        console.log('Save error:', error.message);
      } else {
        saved++;
      }
    } catch (e) {
      console.log('Exception:', e.message);
    }
  }
  console.log(`💾 Saved ${saved}/${stories.length} stories`);
  return saved;
}

export async function getStoriesFeed(category = null, limit = 20, offset = 0) {
  let query = supabase
    .from('stories')
    .select('*')
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1);
  if (category && category !== 'All') {
    query = query.eq('category', category);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function logPipelineRun(status, storiesFetched, storiesSaved, error = null) {
  await supabase.from('pipeline_logs').insert({
    status,
    stories_fetched: storiesFetched,
    stories_saved: storiesSaved,
    error_message: error,
    ran_at: new Date()
  });
}
export async function cleanOldStories() {
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  
  const { data, error } = await supabase
    .from('stories')
    .delete()
    .lt('published_at', twoWeeksAgo.toISOString());
  
  if (error) {
    console.log('Cleanup error:', error.message);
  } else {
    console.log('🗑️ Old stories cleaned up successfully');
  }
}