// Netlify Function: Generate Porch Visualizations
// This runs on Netlify's servers, keeping your API key secure

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const { image, packageType, userEmail } = JSON.parse(event.body);

    if (!image || !packageType) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Get API key from environment variable (set in Netlify dashboard)
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
      console.error('OpenAI API key not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }

    // Define prompts for each package type
    const prompts = {
      basic: "Add a beautiful fall porch display with 4 large orange pumpkins, 4 medium pumpkins, 4 white ghost pumpkins, 15 small pie pumpkins scattered around, and 6 decorative gourds. Arrange them naturally on the porch steps and around the entrance. Photorealistic style, warm autumn lighting.",
      
      amazing: "Add an abundant fall porch display with 6 large jack-o-lantern pumpkins, 6 medium pumpkins, 6 white ghost pumpkins, 25 small pie pumpkins, 8 specialty gourds, and 2 large hay bales. Create a bountiful cornucopia look cascading down the steps. Photorealistic style, warm autumn lighting.",
      
      wow: "Add an over-the-top spectacular fall display with 2 GIANT prize pumpkins (massive, 50+ lbs each) as centerpieces, 10 large jack-o-lantern pumpkins, 8 medium pumpkins, 8 white ghost pumpkins, 40 small pie pumpkins, 20 specialty gourds in various colors and shapes, and 4 full-size hay bales. Create a show-stopping display that extends from the curb to the door with pumpkins lining the walkway. Photorealistic style, golden autumn lighting, professional landscape design quality.",
      
      custom: "Add a luxurious custom fall display with multiple huge prize pumpkins (100 lbs), abundant large and medium pumpkins in various colors (orange, white, blue, green), numerous decorative gourds, hay bales, corn stalks, and fall mums. Create an ultra-premium, magazine-worthy display. Photorealistic style, perfect lighting, luxury home aesthetic."
    };

    const prompt = `You are editing this porch photo. ${prompts[packageType] || prompts.basic} Keep the original house and architecture exactly as is - only add the pumpkins and decorations. Make it look completely natural and realistic as if the items were actually placed there.`;

    console.log(`Generating ${packageType} package visualization for ${userEmail}`);

    // Call OpenAI DALL-E 3 API for image editing
    const response = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: createFormData(image, prompt)
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: 'Failed to generate image', details: error })
      };
    }

    const data = await response.json();
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        imageUrl: data.data[0].url,
        packageType: packageType
      })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};

// Helper function to create form data for image upload
function createFormData(imageBase64, prompt) {
  const FormData = require('form-data');
  const form = new FormData();
  
  // Convert base64 to buffer
  const imageBuffer = Buffer.from(imageBase64.split(',')[1], 'base64');
  
  form.append('image', imageBuffer, {
    filename: 'porch.png',
    contentType: 'image/png'
  });
  form.append('prompt', prompt);
  form.append('n', '1');
  form.append('size', '1024x1024');
  
  return form;
}
