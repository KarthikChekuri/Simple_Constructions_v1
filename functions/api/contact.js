export async function onRequestPost(context) {
  const { request } = context;
  
  try {
    const formData = await request.json();
    
    // Log the form data for debugging
    console.log('Contact form submission:', formData);
    
    // Get environment variables for email configuration
    const EMAIL_TO = context.env.EMAIL_TO || 'info@simpleconstructions.net';
    const EMAIL_FROM = context.env.EMAIL_FROM || 'noreply@simpleconstructions.net';
    
         // Create email content
     const emailSubject = `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
     const emailBody = `
New contact form submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Submitted on: ${new Date().toISOString()}
     `;
    
    // For now, we'll simulate email sending
    // In production, you would integrate with SendGrid, Mailgun, or similar
    console.log('Email would be sent to:', EMAIL_TO);
    console.log('Email subject:', emailSubject);
    console.log('Email body:', emailBody);
    
    // TODO: Replace this with actual email service integration
    // Example with SendGrid:
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${context.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: EMAIL_TO }] }],
    //     from: { email: EMAIL_FROM },
    //     subject: emailSubject,
    //     content: [{ type: 'text/plain', value: emailBody }],
    //   }),
    // });
    
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
    console.error('Error processing form submission:', error);
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