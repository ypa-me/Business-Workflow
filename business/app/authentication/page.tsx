'use client';
import pb from "@/lib/pocketbase";
import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

interface AuthProps {
    redirectTo?: string;
}

export default function Authentication({ redirectTo = "/contact" }: AuthProps) {
    const searchParams = useSearchParams();
    const destination = searchParams.get("redirect") ?? redirectTo;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    async function handleLogin(): Promise<void> {
        setLoading(true);
        setError("");
        try {
            await pb.collection("users").authWithPassword(email, password);
            
            router.push(destination);
        } catch (err) {
            setError("Invalid email or password");
        } finally {
            setLoading(false);
        }
    }

    async function handleSignup(): Promise<void> {
        setLoading(true);
        setError("");
        try {
            await pb.collection("users").create({
                email,
                password,
                passwordConfirm: password,
            });
            await pb.collection("users").authWithPassword(email, password);
            router.push(destination);
        } catch (err: any) {
            setError(err?.message ?? "Signup failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-15 font-sans text-black">
            <h1 className="text-4xl font-bold">
                {isSignup ? "Create an account" : "Login to continue"}
            </h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="text-black"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button
                className="text-white bg-black font-mono text-xs p-2 border border-white/20 rounded-md transition-all duration-300 hover:scale-[1.02]"
                onClick={() => isSignup ? handleSignup() : handleLogin()}
                disabled={loading}
            >
                {loading ? "Loading..." : isSignup ? "Sign Up" : "Login"}
            </button>
            <button
                className="text-sm underline"
                onClick={() => { setIsSignup(!isSignup); setError(""); }}
            >
                {isSignup ? "Already have an account? Login" : "No account? Sign up"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}