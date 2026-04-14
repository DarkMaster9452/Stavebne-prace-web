export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || ''
  });
}
