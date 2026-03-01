"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Headphones, Users, Info, Handshake, Mail, Newspaper } from "lucide-react";

const navigation = [
  { name: "Episodes", href: "/episodes", icon: Headphones },
  { name: "Master Facilitators", href: "/community", icon: Users },
  { name: "About Devon", href: "/about", icon: Info },
  { name: "Partners", href: "/partners", icon: Handshake },
  { name: "Blog", href: "/blog", icon: Newspaper },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-rust/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-rust to-copper rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-xl font-playfair">A</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold rounded-full animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-charcoal font-playfair">
                  The Art of Construction
                </h1>
                <p className="text-xs text-rust-light tracking-wider uppercase">
                  Podcast & Community
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex lg:items-center lg:gap-1"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="group relative px-4 py-2 text-sm font-medium text-charcoal hover:text-rust transition-colors rounded-lg flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-rust transition-all group-hover:w-3/4 rounded-full" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex lg:items-center lg:gap-3"
          >
            <Link
              href="/subscribe"
              className="px-4 py-2 text-sm font-medium text-rust border border-rust/30 rounded-full hover:bg-rust/5 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Subscribe
            </Link>
            <Link
              href="/episodes"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-rust to-copper rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-lg hover:shadow-xl glow-rust flex items-center gap-2"
            >
              <Headphones className="w-4 h-4" />
              Listen Now
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden p-2 rounded-lg hover:bg-rust/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-rust/10 bg-cream"
          >
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-charcoal hover:text-rust hover:bg-rust/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-rust/10 space-y-3">
                <Link
                  href="/subscribe"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-rust border border-rust/30 rounded-full hover:bg-rust/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="w-5 h-5" />
                  Subscribe to Newsletter
                </Link>
                <Link
                  href="/episodes"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-rust to-copper rounded-full shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Headphones className="w-5 h-5" />
                  Listen Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
