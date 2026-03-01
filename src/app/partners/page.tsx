"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Zap, 
  ArrowRight, 
  Star, 
  Building2, 
  Cpu, 
  Users,
  Wrench,
  BarChart3,
  Shield,
  Handshake
} from "lucide-react";

const featuredPartner = {
  name: "HummingAgent AI",
  tagline: "Your AI-Powered Business Partner",
  description: "HummingAgent is revolutionizing how construction businesses operate. From automating customer communications to streamlining project management, their AI employees work 24/7 to help you scale your business without scaling your headcount.",
  features: [
    { icon: Cpu, label: "AI Employees", desc: "Virtual team members that never sleep" },
    { icon: BarChart3, label: "Smart Automation", desc: "Automate repetitive tasks instantly" },
    { icon: Users, label: "Customer Service", desc: "24/7 customer communication" },
    { icon: Shield, label: "Enterprise Ready", desc: "Secure, scalable, reliable" },
  ],
  testimonial: {
    quote: "HummingAgent has transformed how we handle customer inquiries. What used to take hours now happens automatically.",
    author: "Master Facilitator",
    title: "AOC Community Member",
  },
  website: "https://hummingagent.ai",
};

const sponsorshipTiers = [
  {
    tier: "Bronze",
    price: "$500/mo",
    features: ["Logo on website", "Mentioned in newsletter", "Social media shoutout"],
  },
  {
    tier: "Silver",
    price: "$1,500/mo",
    features: ["Everything in Bronze", "Podcast ad read", "Episode sponsorship (1/quarter)"],
  },
  {
    tier: "Gold",
    price: "$3,000/mo",
    features: ["Everything in Silver", "Featured partner profile", "Speaking opportunity at events"],
  },
  {
    tier: "Platinum",
    price: "Custom",
    features: ["Everything in Gold", "Custom integration", "Direct access to Devon", "Exclusive content series"],
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-header.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/80 to-charcoal/90" />
        <div className="absolute inset-0 beam-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute top-20 left-20 w-96 h-96 bg-rust rounded-full blur-[150px]"
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rust/20 rounded-full text-rust-light text-sm font-medium mb-6">
              <Handshake className="w-4 h-4" />
              Partners & Sponsors
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              Trusted <span className="text-gradient">Partners</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We partner with the best in the industry to bring value to our community of 600,000+ construction professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Partner - HummingAgent */}
      <section className="py-20 bg-sand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-gold" />
              Featured AI Partner
            </div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-14 h-14 bg-gradient-to-br from-rust to-copper rounded-full p-2 flex items-center justify-center shadow-lg">
                <Image
                  src="/images/hummingagent-bird.png"
                  alt="HummingAgent"
                  width={48}
                  height={48}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair">
                {featuredPartner.name}
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-charcoal to-aged-wood rounded-3xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left - Info */}
              <div className="p-8 lg:p-12">
                <p className="text-rust-light text-lg font-medium mb-4">
                  {featuredPartner.tagline}
                </p>
                <p className="text-white/70 text-lg mb-8">
                  {featuredPartner.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {featuredPartner.features.map((feature) => (
                    <div
                      key={feature.label}
                      className="bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <feature.icon className="w-8 h-8 text-rust mb-3" />
                      <h4 className="text-white font-semibold mb-1">{feature.label}</h4>
                      <p className="text-white/60 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={featuredPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-xl glow-rust"
                >
                  Learn More About HummingAgent
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right - Visual & Testimonial */}
              <div className="bg-gradient-to-br from-rust/20 to-copper/20 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-rust to-copper rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl p-4">
                  <Image
                    src="/images/hummingagent-bird.png"
                    alt="HummingAgent"
                    width={120}
                    height={120}
                    className="w-28 h-28 rounded-full"
                  />
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-4">
                    "{featuredPartner.testimonial.quote}"
                  </p>
                  <div>
                    <div className="text-white font-medium">
                      {featuredPartner.testimonial.author}
                    </div>
                    <div className="text-white/60 text-sm">
                      {featuredPartner.testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Built Affiliates CTA */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-sand to-sand-light rounded-3xl p-8 md:p-12 text-center border border-rust/10"
          >
            <Building2 className="w-12 h-12 text-rust mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-playfair mb-4">
              Looking for System Built Affiliates?
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto mb-6">
              Explore our network of trusted construction technology and product partners driving innovation in offsite and system-built construction.
            </p>
            <Link
              href="/system-built"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-semibold rounded-full hover:bg-rust transition-colors shadow-lg"
            >
              View System Built Affiliates
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-aged-wood relative overflow-hidden">
        <div className="absolute inset-0 beam-pattern opacity-10" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
              Become a <span className="text-gradient">Partner</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Reach 600,000+ construction professionals through The Art of Construction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-rust/10 hover:border-rust/30 hover:shadow-xl transition-all"
              >
                <div className="text-rust font-semibold mb-2">{tier.tier}</div>
                <div className="text-3xl font-bold text-charcoal mb-4">{tier.price}</div>
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-charcoal/70 text-sm">
                      <Star className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-xl glow-rust"
            >
              <Handshake className="w-5 h-5" />
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
