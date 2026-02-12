"use client";

import { TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../context/userAuth";
import { useRouter } from "next/navigation";
import GoogleIcon from "../components/ui/Google";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { onLogin } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      "https://focusify.onrender.com/api/v1/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(data));
      onLogin(data);
      setTimeout(() => router.push("/main"), 100);
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl shadow-2xl bg-white text-center p-6 sm:p-8">
        <form onSubmit={handleLogin} className="space-y-4">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-black py-3 font-bold"
          >
            <span className="h-6 w-6">
              <GoogleIcon />
            </span>
            Continue With Google
          </button>

          <h1 className="text-xs text-black/70">OR</h1>

          <TextField
            value={username}
            label="Username"
            id="username"
            className="w-full"
            InputProps={{ style: { borderRadius: "15px" } }}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            value={password}
            type="password"
            label="Password"
            id="password"
            className="w-full"
            InputProps={{ style: { borderRadius: "15px" } }}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && (
            <div className="text-red-500 text-sm">
              <p>{errorMessage}</p>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 pt-1">
            <input type="checkbox" value="remember" name="remember" id="remember" />
            <label htmlFor="remember" className="text-xs">
              Remember me
            </label>
          </div>

          <button
            className="flex w-full items-center justify-center rounded-2xl bg-skyblue py-3 text-white"
            type="submit"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-sm">
          Not a member?{" "}
          <Link href="/register" className="text-skyblue">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
