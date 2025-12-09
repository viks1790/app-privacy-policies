
import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Rock–Paper–Scissors',
  description: 'Privacy Policy for the Rock–Paper–Scissors mobile application.',
};

export default function RpsPrivacyPolicy() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-16 px-6 sm:px-12 bg-white dark:bg-black text-zinc-800 dark:text-zinc-200">
        <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
          ✅ Privacy Policy for Rock–Paper–Scissors Game
        </h1>

        <div className="space-y-6">
          <section>
            <p className="mb-4">
              Thank you for playing Rock–Paper–Scissors.
            </p>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we handle your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">1. Information We Collect</h2>
            <p className="mb-2">Our game is designed to operate fully offline. We do NOT collect, store, or share any personal data that can identify you.</p>
            <p className="mb-2">The App only stores non-personal, local-only game data on your device, such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Player names entered by you</li>
              <li>Game scores & history</li>
            </ul>
            <p className="mt-2">This information never leaves your device and is stored locally using a secure storage mechanism (MMKV).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">2. No Online Servers & No Third-Party Data Sharing</h2>
            <p className="mb-2">We do not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Send data to external servers</li>
              <li>Use analytics services</li>
              <li>Share data with advertisers</li>
              <li>Integrate third-party SDKs that collect information</li>
            </ul>
            <p className="mt-2">Your information never leaves your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">3. Permissions Used</h2>
            <p className="mb-2">The App does not request any sensitive permissions.</p>
            <p>If any optional permissions (like Haptic Feedback or Vibration) are used, they are solely for improving gameplay experience and do not collect data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">4. Children’s Privacy</h2>
            <p className="mb-2">The App can be used by children.</p>
            <p>We do not knowingly collect personal information from children or any user.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">5. Data Security</h2>
            <p className="mb-2">Because all data stays on your device, access is controlled entirely by your device's security features (such as screen lock or user profiles).</p>
            <p>We do not store any user information on our servers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">6. Changes to This Privacy Policy</h2>
            <p className="mb-2">We may update this Privacy Policy from time to time.</p>
            <p>When we do, we will update the "Last Updated" date at the top of this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">7. Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, you can contact us at:</p>
            <div className="mt-2">
              <p>Email: <a href="mailto:vjoshi.dev@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">vjoshi.dev@gmail.com</a></p>
              <p>Developer Name: Vikrant Joshi</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
