# Contact Form Setup Instructions

This document provides instructions on how to set up the contact form in your portfolio website using EmailJS and Google reCAPTCHA.

## Prerequisites

1. Create an [EmailJS account](https://www.emailjs.com/). They offer a free tier that allows you to send 200 emails per month.
2. Create a [Google reCAPTCHA account](https://www.google.com/recaptcha/admin) and register a new site with reCAPTCHA v3.

## Setup EmailJS

1. After creating an EmailJS account:
   - Create a new service that connects to your email provider (Gmail, Outlook, etc.).
   - Note the Service ID that is generated.
   - Create a new email template. This template will define how your emails look.
   - Note the Template ID that is generated.
   - Find your Public Key in the EmailJS account settings.

2. Your template should include variables that match the form field names:
   - `{{user_name}}`: For the sender's name
   - `{{user_email}}`: For the sender's email
   - `{{message}}`: For the message content

## Setup Google reCAPTCHA

1. After creating a reCAPTCHA v3 site:
   - Note the Site Key that is generated.
   - Configure the domains where the reCAPTCHA will be used (e.g., your website domain).

## Configure Environment Variables

1. Create a `.env.local` file in the root of your project with the following variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

2. Replace the placeholder values with your actual credentials.

## Testing

1. After setting up the environment variables, restart your development server.
2. Fill out the contact form and submit it.
3. You should receive an email with the form content.
4. Check the console for any errors if the form submission fails.

## Production Deployment

When deploying to production:

1. Add the environment variables to your hosting platform (Vercel, Netlify, etc.).
2. Make sure to update the domain configuration in your reCAPTCHA settings if needed.

## Security Considerations

- The environment variables with the `NEXT_PUBLIC_` prefix will be exposed to the browser.
- This is necessary for client-side rendering but be aware that these values are visible in the browser.
- EmailJS and reCAPTCHA have their own security measures to prevent abuse.
- The reCAPTCHA v3 implementation is invisible to users but still provides protection against bots.

## Troubleshooting

- If emails aren't being sent, check the EmailJS dashboard for errors.
- Ensure your template variables match the form field names.
- Verify that reCAPTCHA is properly configured for your domain.
- Check browser console for any JavaScript errors. 