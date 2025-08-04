export async function onRequestPost(context) {
  const { request } = context;
  
  try {
    const formData = await request.json();
    
    // Here you would integrate with your email service
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', formData);
    
    // You can integrate with services like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Or use a form service like Formspree, Netlify Forms, etc.
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Message sent successfully' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Failed to process request' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 