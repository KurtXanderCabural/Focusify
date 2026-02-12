"use client";

import GoogleIcon from "../components/ui/Google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormData, UserSchema } from "@/types/types";
import FormField from "../components/form/FormField";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const styleInput = "text-[14px] rounded-[10px] py-[12px] px-[11px] w-full";

  const onSubmit = async (data: FormData) => {
    const response = await fetch(
      "https://focusify.onrender.com/api/v1/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
        }),
      }
    );

    if (response.status === 200) {
      alert("Account Created Successfully!");
      push("/login");
    } else {
      await response.json();
      setErrorMessage("Username Already Exists");
    }
  };

  return (
    <div className="min-h-screen w-full px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl shadow-2xl bg-white text-center p-6 sm:p-8">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-black py-3 font-bold"
        >
          <span className="h-6 w-6">
            <GoogleIcon />
          </span>
          Continue With Google
        </button>

        <h1 className="mt-4 text-xs text-black/70">OR</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col items-center gap-3">
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
            className={styleInput}
          />

          {errorMessage && (
            <div className="w-full text-left text-red-500 text-sm">
              <p>{errorMessage}</p>
            </div>
          )}

          <FormField
            type="text"
            placeholder="First Name"
            name="firstName"
            register={register}
            error={errors.firstName}
            className={styleInput}
          />

          <FormField
            type="text"
            placeholder="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName}
            className={styleInput}
          />

          <FormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
            className={styleInput}
          />

          <FormField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
            className={styleInput}
          />

          <button
            className="mt-2 flex w-full items-center justify-center rounded-2xl bg-skyblue py-3 text-white"
            type="submit"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2">
          <input type="checkbox" value="terms" name="terms" id="terms" />
          <label htmlFor="terms" className="text-xs">
            I agree to the terms and conditions
          </label>
        </div>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-skyblue">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
