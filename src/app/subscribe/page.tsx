"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  CheckCircle, 
  Gift, 
  Zap, 
  Calendar,
  Headphones,
  Users,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Headphones,
    title: "Episode Alerts",
    description: "Be the first to know when new episodes drop",
  },
  {
    icon: Gift,
    title: "Exclusive Content",
    description: "Bonus material not available anywhere else",
  },
  {
    icon: Zap,
    title: "Industry Insights",
    description: "Weekly construction trends and analysis",
  },
  {
    icon: Calendar,
    title: "Event Updates",
    description: "VIP access to summits and meetups",
  },
];

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charcoal to-aged-wood py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/devon-tilly-contact.jpg"
            alt="Devon Tilly"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        </div>
        <div className="absolute inset-0 beam-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-rust rounded-full blur-[150px]"
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
                Join 721,000+{" "}
                <span className="text-gradient">Construction Pros</span>
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Get the latest episodes, industry insights, and exclusive content delivered straight to your inbox.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-rust focus:ring-2 focus:ring-rust/50"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    First Name (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-rust focus:ring-2 focus:ring-rust/50"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    What's your role?
                  </label>
                  <select className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-rust focus:ring-2 focus:ring-rust/50">
                    <option value="" className="bg-charcoal">Select your role</option>
                    <option value="builder" className="bg-charcoal">Builder/Contractor</option>
                    <option value="architect" className="bg-charcoal">Architect/Designer</option>
                    <option value="owner" className="bg-charcoal">Business Owner</option>
                    <option value="supplier" className="bg-charcoal">Supplier/Manufacturer</option>
                    <option value="investor" className="bg-charcoal">Investor</option>
                    <option value="other" className="bg-charcoal">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-xl hover:from-rust-dark hover:to-rust transition-all shadow-xl glow-rust flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Subscribe Now
                </button>
                <p className="text-white/50 text-xs text-center">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </motion.div>

            {/* Right - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white font-playfair mb-6">
                What You'll Get
              </h2>
              
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
                >
                  <div className="w-12 h-12 bg-rust/20 rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-rust" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-white/60 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social Proof */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-rust to-copper border-2 border-charcoal"
                      />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm">
                    +721K subscribers
                  </span>
                </div>
                <p className="text-white/60 text-sm italic">
                  "The AOC newsletter is the only construction email I actually read."
                  <br />
                  <span className="text-rust-light">— Master Facilitator</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Podcast Platforms */}
      <section className="py-16 bg-sand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-playfair mb-4">
              Subscribe to the <span className="text-gradient">Podcast</span>
            </h2>
            <p className="text-charcoal/70 mb-8">
              Never miss an episode. Available on all major platforms.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Apple Podcasts",
                "Spotify",
                "YouTube",
                "Google Podcasts",
                "Amazon Music",
                "Overcast",
              ].map((platform) => (
                <button
                  key={platform}
                  className="px-6 py-3 bg-white rounded-full text-charcoal font-medium shadow-md hover:shadow-lg hover:bg-rust hover:text-white transition-all"
                >
                  {platform}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rust to-copper rounded-3xl p-8 md:p-12 text-center"
          >
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-4">
              Want More Than a Newsletter?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              Join the Master Facilitators community for exclusive access, networking, and resources.
            </p>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rust font-semibold rounded-full hover:bg-sand transition-colors shadow-lg"
            >
              Join the Community
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
