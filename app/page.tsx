import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start text-zinc-900 dark:text-zinc-100">
        <h1 className="text-4xl font-bold mb-12">App Privacy Policies</h1>
        
        <div className="grid gap-6 w-full">
          <Link 
            href="/rps-privacy-policies"
            className="group block rounded-lg border border-zinc-200 p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Privacy Policy - Rock Paper Scissor &rarr;
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              View the privacy policy for the offline Rock-Paper-Scissors game.
            </p>
          </Link>

          <Link 
            href="/tictactoe"
            className="group block rounded-lg border border-zinc-200 p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Privacy Policy - Tic Tac Toe &rarr;
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              View the privacy policy for the offline Tic Tac Toe game.
            </p>
          </Link>

          <Link 
            href="/mynotes"
            className="group block rounded-lg border border-zinc-200 p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Privacy Policy - MyNotes &rarr;
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              View the privacy policy for the offline MyNotes app.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
