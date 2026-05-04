

async function test() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    throw new Error('No Gemini API key');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${GEMINI_API_KEY}`;
  
  console.log('Sending request to', url.replace(GEMINI_API_KEY, 'XXX'));
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      instances: [
        {
          prompt: "A beautiful sunny day in the mountains"
        }
      ],
      parameters: {
        sampleCount: 1,
        aspectRatio: "16:9"
      }
    })
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('Error:', response.status, text);
    return;
  }

  const data = await response.json();
  console.log('Success keys:', Object.keys(data));
  if (data.predictions && data.predictions.length > 0) {
    console.log('Has predictions. First prediction keys:', Object.keys(data.predictions[0]));
    console.log('First prediction bytesBase64Encoded length:', data.predictions[0].bytesBase64Encoded?.length || 'missing');
  } else {
    console.log('Data:', JSON.stringify(data).substring(0, 500));
  }
}

test().catch(console.error);
