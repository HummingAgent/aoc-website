import { NextResponse } from 'next/server';

// MailChimp API configuration
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER || 'us1'; // e.g., us1, us2, etc.

export async function POST(request: Request) {
  try {
    const { email, firstName, role } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // If MailChimp is not configured, store locally or log
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
      console.log('MailChimp not configured. Subscription received:', { email, firstName, role });
      // For now, return success so the UI works
      // TODO: Configure MailChimp env vars
      return NextResponse.json({ 
        success: true, 
        message: 'Subscription received (MailChimp pending configuration)' 
      });
    }

    const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName || '',
        ROLE: role || '',
      },
      tags: ['AOC Website', 'Newsletter'],
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      // Handle already subscribed
      if (result.title === 'Member Exists') {
        return NextResponse.json({ 
          success: true, 
          message: "You're already subscribed!" 
        });
      }
      
      console.error('MailChimp error:', result);
      return NextResponse.json(
        { error: result.detail || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
