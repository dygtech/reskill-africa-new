"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ActionButton } from "./ActionButton";
import { ReactNode } from "react";

interface FooterProps {
  showCta?: boolean;
  ctaTitle?: ReactNode;
  ctaDescription?: ReactNode;
  ctaButtons?: ReactNode;
}

export function Footer({
  showCta = true,
  ctaTitle = (
    <>
      Join Us in Building <br /> Africa's Future
    </>
  ),
  ctaDescription = "Re-Skill Africa is open to individuals ready to demonstrate capability, organisations seeking talent and solutions, and partners committed to strengthening Africa's economic future.",
  ctaButtons = (
    <>
      <ActionButton variant="primary">Get involved</ActionButton>
      <ActionButton variant="primary">Apply to innovation tournament</ActionButton>
      <ActionButton variant="primary">Partner with us</ActionButton>
    </>
  ),
}: FooterProps) {
  return (
    <footer className={`relative bg-primary-dark text-white ${showCta ? 'pt-64 md:pt-70' : 'pt-32'} pb-12 w-full font-sans`}>
      {/* Overlapping CTA Card */}
      {showCta && (
        <div className="absolute flex flex-col justify-center left-1/2 -translate-x-1/2 -top-40 md:-top-56 w-[92%] md:w-[90%] max-w-5xl bg-primary rounded-3xl md:rounded-[48px] p-8 sm:p-10 md:p-16 shadow-2xl overflow-hidden border-4 md:border-8 border-white min-h-[320px]">
          {/* Pattern overlay (simulated) */}
          <div className="absolute inset-0 bg-[url(/images/footer_card_vector.png)] bg-cover bg-center"></div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-[32px] sm:text-4xl md:text-[52px] font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight text-white">
              {ctaTitle}
            </h2>
            <p className="text-white/90 text-[15px] md:text-[17px] font-medium sm:font-light mb-8 max-w-2xl leading-relaxed">
              {ctaDescription}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              {ctaButtons}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto px-8 md:px-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Re-Skill Africa</h3>
            <p className="text-white/80 text-sm max-w-xs font-light">
              System for industrial talent and enterprise development across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-white mb-2">Quick Links</h4>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-light">The Vision</Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-light">The Model (Skilldustry)</Link>
            <Link href="/skill-passport" className="text-white/80 hover:text-white text-sm font-light">The Skill Passport</Link>
            <Link href="/training-tracks" className="text-white/80 hover:text-white text-sm font-light">Training tracks</Link>
            <Link href="/partner-with-us" className="text-white/80 hover:text-white text-sm font-light">Our Partners</Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-white mb-2">Resources</h4>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-light">FAQs</Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-light">Contact us</Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-light">Privacy Policy</Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-light">Terms of Service</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-white mb-2">Contact</h4>
            <a href="mailto:info@reskillafrica.org" className="text-white underline underline-offset-4 text-sm font-light hover:text-white/80">
              info@reskillafrica.org
            </a>
            <address className="text-white/80 text-sm font-light not-italic mt-2 leading-relaxed">
              Re-Skill Africa Headquarters<br />
              3B Sapara Williams Close, Victoria Island<br />
              Lagos, Nigeria
            </address>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-end justify-between gap-8">

          <div className="flex items-end gap-14">
            <div className="mt-12 flex gap-1 items-end">
              <Image src="/images/footer_logo.png" alt="Footer Logo" width={189.16} height={31.9} className="w-24 md:w-auto h-32" />
            </div>
            <div className="w-full md:w-auto flex gap-4 items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border border-white/30 rounded-md px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>


          <div className="flex items-center gap-4">
            <span className="text-sm font-medium mr-2">Follow us</span>
            <a href="#" className="bg-white text-black p-1.5 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="bg-white text-black p-1.5 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" className="bg-white text-black p-1.5 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            <a href="#" className="bg-white text-black p-1.5 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" className="bg-white text-black p-1.5 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1c.3-1.5 1.5-2.7 3-3 2.7-.4 6.5-.4 6.5-.4s3.8 0 6.5.4c1.5.3 2.7 1.5 3 3 .4 2.8.4 4.9.4 4.9s0 2.1-.4 4.9c-.3 1.5-1.5 2.7-3 3-2.7.4-6.5.4-6.5.4s-3.8 0-6.5-.4c-1.5-.3-2.7-1.5-3-3-.4-2.8-.4-4.9-.4-4.9s0-2.1.4-4.9z" /><path d="m10 15 5-3-5-3v6z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
