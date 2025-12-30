import React from 'react';

export const metadata = {
  title: 'Privacy Policy - KiddoGoals',
  description: 'Privacy Policy for the KiddoGoals offline family goals and rewards app.',
};

export default function KiddoGoalsPrivacyPolicy() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-16 px-6 sm:px-12 bg-white dark:bg-black text-zinc-800 dark:text-zinc-200">
        <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Privacy Policy for KiddoGoals
        </h1>

        <div className="space-y-6">
          <section>
            <p className="mb-4">
              KiddoGoals (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting it.
            </p>
            <p>
              This Privacy Policy explains how KiddoGoals handles information when you use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">1. Information We Collect</h2>
            <p className="mb-2">
              KiddoGoals is designed to work completely offline and does not collect, transmit, or share any personal data.
            </p>
            <p className="mb-2 font-medium">We do NOT collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Names, email addresses, phone numbers</li>
              <li>Location data</li>
              <li>Photos, videos, or audio</li>
              <li>Contacts or messages</li>
              <li>Device identifiers</li>
              <li>Usage analytics</li>
              <li>Advertising identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">2. Data Stored on Your Device</h2>
            <p className="mb-2">All data created inside KiddoGoals is stored locally on your device only. This includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tasks created by parents</li>
              <li>Daily task assignments</li>
              <li>Task completion and approval status</li>
              <li>Points earned, pending, redeemed, or missed</li>
              <li>Gift rewards created by parents</li>
              <li>Parent password and security question answers (stored securely)</li>
            </ul>
            <p className="mt-2">This data never leaves your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">3. Parent Password &amp; Security</h2>
            <p className="mb-2">Parent Mode is protected by a password set by the user.</p>
            <p className="mb-2">Passwords and security answers are stored in encrypted local storage.</p>
            <p>We do not have access to your password or security answers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">4. Children’s Privacy</h2>
            <p className="mb-2">
              KiddoGoals is designed for use by families and children under parental supervision.
            </p>
            <p className="mb-2">We do not collect personal information from children.</p>
            <p className="mb-2">There are no accounts, sign-ups, or online interactions.</p>
            <p>Parents are fully in control of app setup and usage.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">5. Offline-Only App</h2>
            <p className="mb-2">KiddoGoals:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Does not require an internet connection</li>
              <li>Does not sync data to any server</li>
              <li>Does not use cloud storage</li>
              <li>Does not communicate with third-party services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">6. Data Deletion</h2>
            <p className="mb-2">Because all data is stored locally:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Uninstalling the app permanently deletes all data</li>
              <li>Clearing app data from device settings will also remove all stored information</li>
            </ul>
            <p className="mt-2 font-medium">⚠️ Once deleted, data cannot be recovered.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">7. Third-Party Services</h2>
            <p className="mb-2">KiddoGoals does not use:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Third-party analytics</li>
              <li>Advertising SDKs</li>
              <li>Crash reporting services</li>
              <li>Social media integrations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">8. Changes to This Privacy Policy</h2>
            <p className="mb-2">We may update this Privacy Policy from time to time.</p>
            <p>Any changes will be reflected on this page with an updated date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">9. Contact Us</h2>
            <p className="mb-2">
              If you have any questions about this Privacy Policy or KiddoGoals, you can contact us at:
            </p>
            <p>
              📧 Email:{' '}
              <a
                href="mailto:vjoshi.dev@gmail.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                vjoshi.dev@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}


