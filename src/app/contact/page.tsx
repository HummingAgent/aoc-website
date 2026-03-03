"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  MessageSquare,
  Headphones,
  Users,
  Instagram,
  Facebook,
  Linkedin,
  Youtube
} from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/aocmasterfacilitators/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/TheArtofConstructionmvwd" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/theart-of-construction/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@theartofconstruction" },
];

const contactOptions = [
  {
    icon: Headphones,
    title: "Be a Podcast Guest",
    description: "Share your expertise with 700K+ construction professionals. $600 processing fee applies to qualify serious inquiries.",
    action: "podcast@theartofconstruction.net",
    type: "email",
  },
  {
    icon: Users,
    title: "Community",
    description: "Questions about Master Facilitators?",
    action: "https://community.theartofconstruction.net/",
    type: "link",
  },
  {
    icon: MessageSquare,
    title: "General Inquiries",
    description: "Everything else",
    action: "devon@theaoc.us",
    type: "email",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charcoal to-aged-wood py-20 relative overflow-hidden">
        <div className="absolute inset-0 beam-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-rust rounded-full blur-[150px]"
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Have a question, want to be on the podcast, or interested in partnering with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-sand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-rust/5"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rust to-copper rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <option.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-playfair mb-2">
                  {option.title}
                </h3>
                <p className="text-charcoal/60 text-sm mb-4">
                  {option.description}
                </p>
                {option.type === "email" ? (
                  <a
                    href={`mailto:${option.action}`}
                    className="text-rust font-medium hover:text-rust-dark transition-colors"
                  >
                    {option.action}
                  </a>
                ) : (
                  <a
                    href={option.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rust font-medium hover:text-rust-dark transition-colors"
                  >
                    Visit Community →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-rust/5">
              <h2 className="text-2xl font-bold text-charcoal font-playfair mb-6 text-center">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-rust/20 focus:border-rust focus:ring-2 focus:ring-rust/20 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-rust/20 focus:border-rust focus:ring-2 focus:ring-rust/20 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-rust/20 focus:border-rust focus:ring-2 focus:ring-rust/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-rust/20 focus:border-rust focus:ring-2 focus:ring-rust/20 transition-all">
                    <option value="">Select a topic</option>
                    <option value="podcast">Podcast Guest Inquiry</option>
                    <option value="sponsor">Sponsorship</option>
                    <option value="community">Master Facilitators</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-rust/20 focus:border-rust focus:ring-2 focus:ring-rust/20 transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal font-playfair mb-6">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center hover:bg-rust transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
