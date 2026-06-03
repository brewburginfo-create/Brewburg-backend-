import dotenv from 'dotenv';
dotenv.config();

export async function sendNotification(title, message) {
  try {
    const response = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Key ' + process.env.ONESIGNAL_REST_API_KEY
      },
      body: JSON.stringify({
        app_id: process.env.ONESIGNAL_APP_ID,
        included_segments: ['All'],
        headings: { en: title },
        contents: { en: message },
        url: 'https://brewburg-frontend.vercel.app'
      })
    });
    const data = await response.json();
    console.log('📲 Notification sent:', data.id || data.errors);
  } catch(err) {
    console.log('❌ Notification failed:', err.message);
  }
}