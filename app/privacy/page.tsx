export default function PrivacyPolicy() {
  return (
<main className="pt-32 max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-4">
        Path (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy
        explains what information we collect, how we use it, and the choices you have. By using Path,
        you agree to the practices described below.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. Information We Collect</h2>
      <p className="mb-4">We only collect the minimum data required to provide the app’s core features.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">A. Account Information</h3>
      <p className="mb-4">
        Collected through OAuth sign-in (Apple, Google, or Email Login):
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Authentication provider ID</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">B. App Data You Enter</h3>
      <p className="mb-4">
        We store the following information only to provide app functionality:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Journal entries</li>
        <li>Workout logs</li>
        <li>Habit and progress tracking</li>
        <li>Reflections or notes</li>
        <li>Settings and preferences</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">C. Device Information</h3>
      <p className="mb-4">
        Automatically collected for app analytics:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>App version</li>
        <li>Device type</li>
        <li>Basic usage statistics</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. How Your Data Is Used</h2>
      <p className="mb-4">We use your data only for providing and improving the Path app.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">To provide app features</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Storing your journal entries</li>
        <li>Tracking workouts and habits</li>
        <li>Displaying insights and history</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">To provide AI reflections</h3>
      <p className="mb-4">
        We use a privacy-preserving workflow:
      </p>
      <ol className="list-decimal ml-6 mb-4">
        <li>A local data aggregator analyzes your journal entry.</li>
        <li>A security filter removes personal details.</li>
        <li>
          Only short excerpts and general patterns are sent to the AI to generate insights.
        </li>
      </ol>

      <h3 className="text-lg font-semibold mt-6 mb-2">To improve the app</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Error diagnostics</li>
        <li>Anonymous usage analytics</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. What We Never Collect or Share</h2>
      <p className="mb-4">Path never sells your data.</p>
      <p className="mb-4">We never share:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Full journal entries</li>
        <li>Personal identifiers</li>
        <li>Email or account information</li>
        <li>Location data</li>
        <li>Contacts or photos</li>
        <li>Raw workout logs</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">4. Third-Party Services (AI Provider)</h2>
      <p className="mb-4">
        We use Anthropic (Claude AI) exclusively for generating AI reflections. Anthropic receives
        only filtered excerpts after personal details are removed.
      </p>
      <p className="mb-2">Anthropic does not:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Store your account data</li>
        <li>Access your profile</li>
        <li>Receive your full journals</li>
        <li>Receive your email or name</li>
      </ul>
      <p className="mb-4">
        For their privacy policy, visit:{" "}
        <a href="https://www.anthropic.com/privacy" className="underline">
          https://www.anthropic.com/privacy
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">5. Data Storage & Security</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Journals are encrypted at rest.</li>
        <li>All communication is encrypted (HTTPS).</li>
        <li>Only you can access your account content.</li>
        <li>We follow industry-standard security practices.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">6. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Delete your account</li>
        <li>Export your data</li>
        <li>Request deletion of journals</li>
        <li>Revoke AI consent at any time</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">7. Children’s Privacy</h2>
      <p className="mb-4">Path is not intended for individuals under 13.</p>

      <h2 className="text-xl font-semibold mt-10 mb-3">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy. You will be notified of major changes.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">9. Contact</h2>
      <p className="mb-4">
        For questions or support:{" "}
        <a href="mailto:support@pathapp.com" className="underline">
          support@pathstoic.com
        </a>
      </p>
    </main>
  );
}
