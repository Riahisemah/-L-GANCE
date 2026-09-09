import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="border-y border-border bg-secondary">
      <div className="mm-container flex flex-col items-center gap-6 py-20 text-center lg:py-28">
        <p className="mm-eyebrow">The Dispatch</p>
        <h2 className="mm-display max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
          Join the archive. Receive private previews.
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Be the first to access new arrivals, flash deals and members-only
          promotions — delivered weekly.
        </p>
        {done ? (
          <p className="mm-eyebrow text-gold">
            Thank you — you're on the list.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="flex w-full max-w-md items-center gap-3 border-b border-foreground pb-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="transition hover:opacity-60"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
