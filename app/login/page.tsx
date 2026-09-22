"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function LoginPage() {
  return (
    <main className="h-screen w-full flex flex-col lg:flex-row bg-[#2a2422] font-sans overflow-hidden">

      {/* Left Pane - Dark */}
      <div className="hidden lg:flex flex-col w-[60%] text-white p-12 relative h-full">
        {/* Top subtle text */}
        <p className="text-[#a09a98] text-[15px] font-light">
          Empowering Africa through Skills – learn and grow with us.
        </p>

        <div className="flex-1 flex flex-col items-center justify-start pt-16 z-10">
          <h1 className="text-[64px] font-bold leading-[1.1] tracking-tight text-center">
            Manage<br />your learning
          </h1>
        </div>

        {/* Bottom Illustration */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[120%] flex justify-center z-0">
          <Image
            src="/images/login-image.png"
            alt="Login Image"
            width={500}
            height={600}
            priority
            className="w-auto h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Right Pane - Light */}
      <div className="w-full lg:w-[40%] flex flex-col h-screen bg-white lg:rounded-l-[48px] shadow-2xl z-10 relative">
        {/* Header */}
        <div className="flex items-center justify-between p-8 sm:px-12 shrink-0">
          <Link href="/">
            <Image src="/images/logo_alt.svg" alt="ReSkill Africa" width={140} height={40} className="h-8 w-auto" />
          </Link>
          <Link href="/register" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">
            Sign Up
          </Link>
        </div>

        {/* Form Area */}
        <div className="flex-1 flex flex-col px-8 sm:px-12 overflow-y-auto">
          <div className="w-full max-w-90 mx-auto my-auto py-8">
            <h2 className="text-[44px] font-medium text-[#111] mb-6 tracking-tight">Sign In</h2>

            <form className="flex flex-col gap-3">

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-brand-dark uppercase tracking-wide">Email or Username</label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[14px] text-black"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-brand-dark uppercase tracking-wide">Password</label>
                <input
                  type="password"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[14px] text-black"
                />
              </div>

              <div className="pt-1">
                <Link href="/forgot-password" className="text-[14px] text-primary hover:text-primary-hover transition-colors font-medium">
                  Forgot password?
                </Link>
              </div>

              <div className="pt-1">
                <Button type="submit" className="w-full flex justify-center items-center !py-3 !text-[15px]">
                  Sign In
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6">
                <button type="button" className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors text-[14px] font-medium text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 sm:px-16 shrink-0 border-t border-transparent text-[13px] text-gray-400">
          <p>&copy; 2024-2026 ReSkill Africa Inc.</p>
          <div className="flex items-center gap-8 font-medium text-gray-500 mt-4 sm:mt-0">
            <Link href="/contact" className="hover:text-gray-800 transition-colors">Contact Us</Link>
            <button className="flex items-center hover:text-gray-800 transition-colors">
              English
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
