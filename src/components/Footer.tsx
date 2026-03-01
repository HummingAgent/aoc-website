"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Headphones, 
  Users, 
  Mail, 
  Twitter, 
  Youtube, 
  Linkedin,
  Instagram,
  ArrowRight,
  Heart,
  Facebook
} from "lucide-react";
import { socialLinks, podcastPlatforms, siteConfig } from "@/lib/constants";

const footerLinks = {
  podcast: [
    { name: "Latest Episodes", href: "/episodes" },
    { name: "Episode Archive", href: "/episodes" },
    { name: "Subscribe on Apple", href: podcastPlatforms.applePodcasts, external: true },
    { name: "Subscribe on Spotify", href: podcastPlatforms.spotify, external: true },
  ],
  community: [
    { name: "Master Facilitators", href: "/community" },
    { name: "Join the Tribe", href: "https://community.theartofconstruction.net/", external: true },
    { name: "Events", href: "https://community.theartofconstruction.net/", external: true },
  ],
  company: [
    { name: "About Devon", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinksData = [
  { name: "Instagram", icon: Instagram, href: socialLinks.instagram },
  { name: "YouTube", icon: Youtube, href: socialLinks.youtube },
  { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
  { name: "Facebook", icon: Facebook, href: socialLinks.facebook },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 beam-pattern" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-2">
                Join 600,000+ Construction Pros
              </h3>
              <p className="text-white/70 max-w-md">
                Get the latest episodes, industry insights, and exclusive content delivered to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-rust focus:ring-2 focus:ring-rust/50 min-w-[280px]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="The Art of Construction"
                width={200}
                height={67}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              We connect Systems Built Builders and affiliates to the right construction technologies and products. Join Devon Tilly and the tribe of Master Facilitators.
            </p>
            <div className="flex gap-4">
              {socialLinksData.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rust transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Headphones className="w-4 h-4 text-rust" />
              Podcast
            </h4>
            <ul className="space-y-3">
              {footerLinks.podcast.map((link) => (
                <li key={link.name}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-rust" />
              Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-rust" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} The Art of Construction. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-rust fill-rust" /> by{" "}
              <a 
                href="https://hummingagent.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-rust hover:text-copper transition-colors font-medium"
              >
                <Image
                  src="/images/hummingagent-bird.png"
                  alt="HummingAgent"
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
                />
                HummingAgent AI
              </a>
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
