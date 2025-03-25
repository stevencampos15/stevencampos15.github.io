# Steven Campos Portfolio

My personal portfolio website showcasing my work and experience.

## GitHub Pages Deployment

This portfolio is configured to deploy automatically to GitHub Pages. The deployment process works as follows:

1. When changes are pushed to the `master` branch, a GitHub Actions workflow is triggered.
2. The workflow builds the Next.js application with static export.
3. The built files are then deployed to GitHub Pages.

### Setting Up Repository Secrets

To enable the contact form functionality, you need to set up the following repository secrets:

1. Go to your repository on GitHub.
2. Click on "Settings" > "Secrets and variables" > "Actions".
3. Click on "New repository variable" for each of these variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`

### Enabling GitHub Pages

1. Go to your repository on GitHub.
2. Click on "Settings" > "Pages".
3. Under "Build and deployment", select "GitHub Actions" as the source.
4. Your site will be deployed to `https://<username>.github.io/`.

## Local Development

1. Clone the repository:
   ```
   git clone https://github.com/stevencampos15/stevencampos15.github.io.git
   ```

2. Navigate to the project directory:
   ```
   cd stevencampos15.github.io/new-portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Google reCAPTCHA
