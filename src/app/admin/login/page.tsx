"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Eye, EyeOff, Lock, User } from "lucide-react";
import Link from "next/link";


export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST", credentials: "same-origin", cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Inloggen is niet gelukt.");
      setPassword("");
      router.replace("/admin/projecten");
      router.refresh();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Inloggen is tijdelijk niet beschikbaar.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Admin Panel
          </h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">
            Tech Solutions Utrecht
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
            Inloggen
          </h2>

          {error && (
            <div role="alert" className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label htmlFor="admin-username" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                Gebruikersnaam
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                <input
                  type="text"
                  id="admin-username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Voer gebruikersnaam in"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                Wachtwoord
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                <input
                  id="admin-password"
                  autoComplete="current-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Voer wachtwoord in"
                  required
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Wachtwoord verbergen" : "Wachtwoord tonen"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Bezig met inloggen...
                </>
              ) : (
                "Inloggen"
              )}
            </button>
          </form>

          {/* Back to site */}
          <div className="mt-6 pt-6 border-t border-[var(--border)] text-center">
            <Link
              href="/"
              className="text-sm text-[var(--text-muted)] hover:text-primary transition-colors"
            >
              ← Terug naar website
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[var(--text-muted)] mt-6">
          © 2026 Tech Solutions Utrecht. Alle rechten voorbehouden.
        </p>
      </div>
    </div>
  );
}
