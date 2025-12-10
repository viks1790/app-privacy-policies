
import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Tic Tac Toe',
  description: 'Privacy Policy for the Tic Tac Toe mobile application.',
};

export default function TicTacToePrivacyPolicy() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-16 px-6 sm:px-12 bg-white dark:bg-black text-zinc-800 dark:text-zinc-200">
        <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Privacy Policy for Tic Tac Toe - Mobile Game
        </h1>

        <div className="space-y-6">
          <section>
            <p className="mb-4">
              Thank you for using our Tic Tac Toe mobile application (&quot;the App&quot;).
            </p>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we handle your information when you use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">1. Information We Do NOT Collect</h2>
            <p className="mb-2">We do NOT collect, store, or share any of the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal information (name, email, phone number, etc.)</li>
              <li>Device identifiers</li>
              <li>Location data</li>
              <li>Contacts or calendar information</li>
              <li>Photos, media, or files</li>
              <li>Financial or payment information</li>
              <li>Usage analytics or behavior tracking</li>
            </ul>
            <p className="mt-2">The App does not connect to external servers and does not transmit any data outside your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">2. Information Stored Locally on Your Device</h2>
            <p className="mb-2">The App may store certain game-related data only on your device, such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Player names entered by you</li>
              <li>Game scores</li>
              <li>Game mode selections</li>              
            </ul>
            <p className="mt-2">This information is stored locally using secure device storage mechanisms and never leaves your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">3. No Third-Party Services</h2>
            <p className="mb-2">The App does not use:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Third-party analytics</li>
              <li>Advertising networks</li>
              <li>SDKs or trackers</li>
              <li>Social media integrations</li>
            </ul>
            <p className="mt-2">Your gameplay experience remains completely offline and private.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">4. Children's Privacy</h2>
            <p className="mb-2">The App is suitable for all ages and does not collect any personal data from users, including children under 13.</p>
            <p>Since no information is collected, there is no risk of exposure or misuse.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">5. Security</h2>
            <p className="mb-2">Although the App does not collect or transmit data, we still take reasonable steps to ensure:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The App contains no harmful code</li>
              <li>Local storage is handled securely</li>
              <li>No unintended data sharing occurs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">6. Changes to This Privacy Policy</h2>
            <p className="mb-2">We may update this Privacy Policy if new features are added in the future.</p>
            <p>Any changes will be reflected on this page along with the "Last Updated" date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">7. Contact Us</h2>
            <p className="mb-2">If you have any questions or suggestions regarding this Privacy Policy, you can contact us at:</p>
            <div className="mt-2">
              <p>Email: <a href="mailto:vjoshi.dev@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">vjoshi.dev@gmail.com</a></p>
            </div>
            <p className="mt-4 font-semibold">Your privacy is completely protected. Enjoy the game!</p>
          </section>
        </div>
      </main>
    </div>
  );
}
