"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Users, 
  Star, 
  Zap, 
  Calendar, 
  MessageSquare, 
  ArrowRight,
  ExternalLink,
  Building2,
  CheckCircle
} from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Exclusive Networking",
    description: "Connect directly with 500+ industry leaders, innovators, and fellow builders.",
  },
  {
    icon: Calendar,
    title: "VIP Events",
    description: "Priority access to summits, meetups, and exclusive webinars.",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Get podcast episodes and industry insights before anyone else.",
  },
  {
    icon: Building2,
    title: "System Built Resources",
    description: "Tools, guides, and resources for offsite construction excellence.",
  },
];

const tiers = [
  {
    name: "Community Member",
    price: "Free",
    description: "Join the tribe and get started",
    features: [
      "Access to community forums",
      "Weekly newsletter",
      "Public event invitations",
      "Episode discussions",
    ],
    cta: "Join Free",
    popular: false,
  },
  {
    name: "Master Facilitator",
    price: "$49/mo",
    description: "For serious construction professionals",
    features: [
      "Everything in Community",
      "Private mastermind groups",
      "Monthly virtual meetups",
      "1-on-1 networking matches",
      "Early episode access",
      "Exclusive resources",
    ],
    cta: "Become a Master Facilitator",
    popular: true,
  },
  {
    name: "System Builder",
    price: "$199/mo",
    description: "For offsite construction leaders",
    features: [
      "Everything in Master Facilitator",
      "Quarterly strategy calls",
      "Featured in episode spotlights",
      "Annual summit VIP access",
      "Direct line to Devon",
      "Partner network access",
    ],
    cta: "Apply Now",
    popular: false,
  },
];

const testimonials = [
  {
    quote: "The connections I've made through AOC have transformed my business. It's not just a community—it's a family.",
    name: "Michael Torres",
    title: "Founder, Prefab Innovations",
  },
  {
    quote: "Devon has created something special. The Master Facilitators program gave me the network I needed to scale.",
    name: "Sarah Chen",
    title: "CEO, BuildTech Solutions",
  },
  {
    quote: "Being part of this tribe has opened doors I never knew existed. The ROI is immeasurable.",
    name: "James Blackwood",
    title: "Owner, Blackwood Construction",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charcoal to-aged-wood py-20 relative overflow-hidden">
        <div className="absolute inset-0 beam-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute top-20 right-20 w-96 h-96 bg-rust rounded-full blur-[150px]"
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rust/20 rounded-full text-rust-light text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              #AOCMFERS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              Master Facilitators{" "}
              <span className="text-gradient">Community</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Join the tribe of elite construction professionals dedicated to innovation, connection, and building the future together.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-white/60 text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">12</div>
                <div className="text-white/60 text-sm">Events/Year</div>
              </div>
            </div>

            <a
              href="https://community.theartofconstruction.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-xl glow-rust"
            >
              Join the Community
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair mb-4">
              Why Join the <span className="text-gradient">Tribe?</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              More than a community—it's a movement of builders changing the industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-rust/5 card-lift"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rust to-copper rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-playfair mb-3">
                  {benefit.title}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair mb-4">
              Choose Your <span className="text-gradient">Path</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              From free community access to exclusive system builder perks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 flex flex-col ${
                  tier.popular ? "border-rust" : "border-rust/10"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-rust text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-charcoal font-playfair mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold text-rust mb-2">
                    {tier.price}
                  </div>
                  <p className="text-charcoal/60 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-3 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-rust shrink-0 mt-0.5" />
                      <span className="text-charcoal/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://community.theartofconstruction.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 mt-8 ${
                    tier.popular
                      ? "bg-gradient-to-r from-rust to-copper text-white hover:from-rust-dark hover:to-rust shadow-lg"
                      : "bg-charcoal text-white hover:bg-rust"
                  }`}
                >
                  {tier.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Members <span className="text-gradient">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/80 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rust/30" />
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rust to-copper rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
              Ready to Build Your Future?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join 500+ construction professionals who are already part of the tribe.
            </p>
            <a
              href="https://community.theartofconstruction.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rust font-semibold rounded-full hover:bg-sand transition-colors shadow-lg"
            >
              <Users className="w-5 h-5" />
              Join the Community
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
