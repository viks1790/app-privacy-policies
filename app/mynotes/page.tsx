import React from 'react';

export const metadata = {
  title: 'Privacy Policy - MyNotes',
  description: 'Privacy Policy for the MyNotes offline notes application.',
};

export default function MyNotesPrivacyPolicy() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-16 px-6 sm:px-12 bg-white dark:bg-black text-zinc-800 dark:text-zinc-200">
        <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
          MyNotes – Offline Notes App
        </h1>

        <div className="space-y-6">
          <section>
            <p className="mb-4">
              Thank you for using MyNotes (&quot;the App&quot;).
            </p>
            <p className="mb-4">
              Your privacy is extremely important to us. This Privacy Policy explains what information we collect, how we use it, and the rights you have regarding your data.
            </p>
            <p className="font-medium italic">
              MyNotes is a 100% offline app. We do not collect, store, transfer, share, or sell any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">1. Information We Do Not Collect</h2>
            <p className="mb-2">MyNotes does not collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name, email, phone number, or identity</li>
              <li>Your device ID or advertising ID</li>
              <li>Note content or attachments</li>
              <li>Photos, files, voice recordings</li>
              <li>Location or GPS data</li>
              <li>Contact list</li>
              <li>Payment information</li>
              <li>Any personally identifiable information (PII)</li>
            </ul>
            <p className="mt-2">Since the app is fully offline, we have no access to anything you create in the app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">2. What Data Stays on Your Device</h2>
            <p className="mb-2">All app data is stored locally on your device, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Notes</li>
              <li>Tags</li>
              <li>Templates</li>
              <li>Reminders</li>
              <li>App settings</li>
              <li>Lock preferences (PIN, biometric)</li>
              <li>Version history</li>
              <li>Deleted notes (Trash)</li>
            </ul>
            <p className="mt-2">We cannot access, recover, or remotely modify this data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">3. Local Storage & Encryption</h2>
            <p className="mb-2">MyNotes uses secure on-device storage technologies (such as MMKV) to store your data.</p>
            <p className="mb-2">You may enable additional security features like:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Biometric lock (Fingerprint / Face ID)</li>
              <li>App-level PIN</li>
              <li>Per-note lock</li>
              <li>Encrypted content storage</li>
            </ul>
            <p className="mt-2">All encrypted data stays only on your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">4. No Internet Requirement</h2>
            <p className="mb-2">The App works entirely offline.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>We do not send your data to any server.</li>
              <li>No external backups are created automatically.</li>
              <li>No analytics, no tracking, no third-party integrations.</li>
            </ul>
            <p className="mt-2 text-sm italic">If in the future you choose to use manual export/import, those files remain under your control.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">5. Reminders & Notifications</h2>
            <p className="mb-2">If you create reminders, the app schedules:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Local notifications</li>
              <li>Local alarms</li>
            </ul>
            <p className="mt-2">These run only on your device’s operating system. We do not collect or track reminder data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">6. Permissions We Request</h2>
            <p className="mb-2">Depending on your usage, the app may request optional permissions such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Biometric:</strong> Used only to unlock the app or locked notes.</li>
              <li><strong>Notification Permission:</strong> Needed to show local reminders that you create.</li>
            </ul>
            <p className="mt-2">The App does not use these permissions for any other purpose.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">7. Children’s Privacy</h2>
            <p>
              MyNotes does not collect any personal data from children. The app is safe for all age groups as no data leaves the device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">8. Data Deletion</h2>
            <p className="mb-2">You may delete any note, tag, reminder, or the entire app data at any time by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Removing notes individually</li>
              <li>Clearing the Trash</li>
              <li>Uninstalling the App</li>
            </ul>
            <p className="mt-2">Uninstalling the app permanently removes all data because nothing is stored on servers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">9. Third-Party Services</h2>
            <p className="mb-2">MyNotes does not use any:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Third-party SDKs</li>
              <li>Analytics tools</li>
              <li>Cloud servers</li>
              <li>Advertising platforms</li>
              <li>External APIs</li>
            </ul>
            <p className="mt-2">This ensures complete privacy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">10. Policy Changes</h2>
            <p>
              We may update this Privacy Policy to reflect changes in the App. Any update will be posted on this page with a new “Last Updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">11. Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy or the App, you may contact:</p>
            <div className="mt-2 space-y-1">
              <p>Developer: Vikrant Joshi</p>
              <p>Email: <a href="mailto:vjoshi.dev@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">vjoshi.dev@gmail.com</a></p>
            </div>
          </section>

          <section className="mt-12 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Summary (Easy to Understand)</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Your notes stay only on your device.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>We do not collect or store any of your data.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>No ads, no tracking, no login.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Biometric/PIN lock is used only on your device.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>You’re in full control of your data.</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
