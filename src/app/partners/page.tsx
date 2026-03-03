"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Star, 
  Building2, 
  Cpu, 
  Users,
  BarChart3,
  Shield,
  Handshake,
  ExternalLink
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

const partners = [
  {
    name: "Andersen Windows",
    description: "Long-lasting windows and doors, built for homes that last for generations. Let in more peace of mind.",
    logo: "/images/partners/Andersen_Logo_Square_CMYK.jpg",
    website: "https://www.andersenwindows.com/",
    category: "Windows & Doors",
  },
  {
    name: "Mountain View Window & Door",
    description: "Enhancing your lifestyle with luxury windows, big doors and value-driven expertise supplied through our System Built partners.",
    logo: "/images/partners/mvwd-logo.jpg",
    website: "https://mtviewwd.com/",
    category: "Windows & Doors",
  },
  {
    name: "WDOC",
    description: "Window Dealer Owner Council: A group of window dealers who don't compete, working together through leader Devon Tilly of the AOC.",
    logo: "/images/partners/WDOC-logo-crop-1.png",
    website: "#",
    category: "Industry Council",
  },
  {
    name: "TinyMod®",
    description: "Redefining Your Living: Affordable, Innovative Prefab Homes and ADUs that are Designed for Tomorrow.",
    logo: "/images/partners/tmod-logo.jpg",
    website: "https://tinymod.com/",
    category: "Prefab Housing",
  },
  {
    name: "Huron Components",
    description: "A component manufacturer specializing in Wall Panels & Truss design and manufacturing, a subsidiary of DL Cohen Construction.",
    logo: "/images/partners/huron-logo.png",
    website: "https://huroncomponents.com/",
    category: "Components",
  },
  {
    name: "Doss",
    description: "Adaptive ERP and Data platform for construction businesses.",
    logo: "/images/partners/doss-logo.jpg",
    website: "https://www.doss.com/",
    category: "Software",
  },
  {
    name: "Plexxis",
    description: "Construction Management Software built specifically for subcontractors.",
    logo: "/images/partners/plexxis-logo.jpg",
    website: "https://plexxis.com/",
    category: "Software",
  },
  {
    name: "Assembli",
    description: "Get faster estimates and better profits. Revolutionize your construction projects with Assembli's AI-powered solutions.",
    logo: "/images/partners/assembli-logo.png",
    website: "https://assembli.ai/",
    category: "AI & Estimation",
  },
  {
    name: "Reekon Tools",
    description: "Digital Construction Ecosystem - bringing smart measurement and digital tools to the jobsite.",
    logo: "/images/partners/reekon-logo.jpg",
    website: "https://reekon.tools/",
    category: "Tools & Equipment",
  },
  {
    name: "VIZ Graphics",
    description: "Visualizing Your Success, Together! Professional graphics and visualization services for construction.",
    logo: "/images/partners/VIZ.jpg",
    website: "https://vizgraphics.com/",
    category: "Design & Visualization",
  },
  {
    name: "Information Technology Solutions",
    description: "We deliver a customer-focused, human approach to technology for construction businesses.",
    logo: "/images/partners/its-logo.png",
    website: "#",
    category: "IT Services",
  },
  {
    name: "Construction Progress Coalition",
    description: "A CDX is a communication tool utilized between construction project delivery stakeholders and their technology solution providers.",
    logo: "/images/partners/cpc-logo.png",
    website: "https://constructionprogress.org/",
    category: "Industry Coalition",
  },
  {
    name: "Entry Vision",
    description: "Construction management software being built from scratch to help manage window and door businesses from estimate to install.",
    logo: "/images/partners/entry-vision-logo.png",
    website: "#",
    category: "Software",
  },
];

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
              Partners & Affiliates
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              System Built <span className="text-gradient">Partners</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We connect builders with trusted construction technologies and products. Our network of partners helps you build smarter, faster, and better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-sand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-rust">{partners.length}+</div>
              <div className="text-charcoal/60 text-sm">Affiliate Partners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-rust">500+</div>
              <div className="text-charcoal/60 text-sm">Master Facilitators</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-rust">600K+</div>
              <div className="text-charcoal/60 text-sm">Global Network</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-rust">10+</div>
              <div className="text-charcoal/60 text-sm">Years Building</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partner - HummingAgent */}
      <section className="py-20 bg-cream">
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

      {/* All Partners Grid */}
      <section className="py-20 bg-sand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Building2 className="w-12 h-12 text-rust mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair mb-4">
              System Built <span className="text-gradient">Affiliates</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Trusted partners driving innovation in offsite and system-built construction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-rust/5 card-lift"
              >
                {/* Logo */}
                <div className="h-48 bg-gradient-to-br from-sand to-cream flex items-center justify-center p-8">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={120}
                    className="max-h-32 w-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-rust font-semibold uppercase tracking-wider mb-2">
                    {partner.category}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal font-playfair mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-3">
                    {partner.description}
                  </p>
                  {partner.website !== "#" && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-rust font-medium text-sm hover:text-rust-dark transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
