export default function TermsOfService() {
  return (
<main className="pt-32 max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-4">
        These Terms govern your use of the Path mobile application (“Service”). By using Path, you
        agree to these Terms and our Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. Accounts</h2>
      <p className="mb-4">To use Path, you must:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Be at least 18 years old</li>
        <li>Provide accurate information</li>
        <li>Maintain the security of your account</li>
      </ul>
      <p className="mb-4">
        We may suspend accounts that violate these terms or compromise the service.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. Subscriptions</h2>
      <p className="mb-4">
        Path offers a monthly and yearly subscription. Both plans include full access to all tools,
        unlimited journaling, and weekly AI reflections.
      </p>
      <p className="mb-4">
        Subscriptions automatically renew unless cancelled at least 24 hours before the end of the
        current period.
      </p>
      <p className="mb-4">
        Payments and refunds are handled by Apple App Store and Google Play Store according to their
        respective policies.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. Acceptable Use</h2>
      <p className="mb-4">You agree not to:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Misuse or interfere with the service</li>
        <li>Attempt to access other users’ data</li>
        <li>Reverse-engineer the application</li>
        <li>Upload harmful or illegal content</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">4. AI Features</h2>
      <p className="mb-4">
        AI reflections are intended for personal insight and wellness support only. They do not
        constitute medical, psychological, or professional advice.
      </p>
      <p className="mb-4">
        You acknowledge that AI output may occasionally be inaccurate, incomplete, or suggestive,
        and you agree to use it responsibly.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">5. Intellectual Property</h2>
      <p className="mb-4">
        All content, branding, features, and design elements in Path are owned by us. You may not
        copy, reproduce, or distribute them without permission.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">6. Limitation of Liability</h2>
      <p className="mb-4">
        Path is provided “as is.” We are not responsible for:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Data loss due to device issues</li>
        <li>Service outages or interruptions</li>
        <li>User decisions based on AI insights</li>
      </ul>
      <p className="mb-4">
        To the fullest extent permitted by law, our liability is limited.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">7. Account Termination</h2>
      <p className="mb-4">
        You may delete your account at any time. We may suspend or terminate accounts for
        violations of these Terms, misuse, or fraud.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">8. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of your country of residence.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">9. Contact</h2>
      <p className="mb-4">
        For questions or support, contact:{" "}
        <a href="mailto:support@pathstoic.com" className="underline">
          support@pathstoic.com
        </a>
      </p>
    </main>
  );
}
