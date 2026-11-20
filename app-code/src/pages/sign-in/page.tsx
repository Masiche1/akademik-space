import { Link, Navigate } from "react-router-dom";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { motion } from "motion/react";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { BRAND } from "@/lib/brand.ts";

const ease = [0.22, 1, 0.36, 1] as const;

/** Branded entry point. The secure sign-in step itself happens on the Akademik Space account portal. */
export default function SignInPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="mx-auto flex max-w-md flex-col px-4 py-16 sm:px-6 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
          className="rounded-2xl border bg-card p-8 shadow-xl shadow-primary/5">
          <div className="flex flex-col items-center text-center">
            <img src="/brand/logo-192.png" alt={`${BRAND.name} logo`} width={80} height={80} className="size-20 rounded-full shadow-md ring-4 ring-primary/10" />
            <h1 className="pt-5 font-serif text-2xl font-semibold">Welcome to {BRAND.name}</h1>
            <p className="pt-2 text-sm text-muted-foreground">Sign in or create your free account to save progress and join your classes.</p>
          </div>
          <div className="grid gap-3 pt-6">
            <Unauthenticated>
              <SignInButton size="lg" className="w-full" signInText="Sign in" />
              <SignInButton size="lg" variant="secondary" className="w-full" showIcon={false} signInText="Create an account" />
            </Unauthenticated>
            <AuthLoading><div className="flex justify-center py-3"><Spinner /></div></AuthLoading>
            <Authenticated><Navigate to="/account" replace /></Authenticated>
          </div>
          <p className="pt-6 text-center text-xs text-muted-foreground">
            By continuing you agree to the {BRAND.name} terms of use. <Link to="/" className="underline cursor-pointer">Back to home</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
