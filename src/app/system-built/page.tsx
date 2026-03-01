"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight,
  ExternalLink,
  Building2,
  Wrench,
  Cpu,
  Home,
  BarChart3,
  Users
} from "lucide-react";

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
];

export default function SystemBuiltPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section with Video */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/system-built-hero.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/70 to-charcoal/80" />
        </div>
        
        <div className="absolute inset-0 beam-pattern opacity-10 z-[1]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute top-20 left-20 w-96 h-96 bg-rust rounded-full blur-[150px] z-[1]"
        />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rust/20 rounded-full text-rust-light text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              System Built Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              Building Better Buildings through{" "}
              <span className="text-gradient">System Built Solutions</span>
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              We connect the Systems Built Builders and its affiliates to the right construction technologies and products. Our network of trusted partners helps you build smarter, faster, and better.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-xl glow-rust"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                <Users className="w-5 h-5" />
                Join the Community
              </Link>
            </div>
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
              <div className="text-3xl md:text-4xl font-bold text-rust">8+</div>
              <div className="text-charcoal/60 text-sm">Years Building</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair mb-4">
              AOC System Built <span className="text-gradient">Affiliates</span>
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
                <div className="h-48 bg-gradient-to-br from-sand to-sand-light flex items-center justify-center p-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-aged-wood relative overflow-hidden">
        <div className="absolute inset-0 beam-pattern opacity-10" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
              Want to Become a <span className="text-gradient">System Built Affiliate?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Join our network of trusted partners and connect with 600,000+ construction professionals worldwide.
            </p>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-xl glow-rust"
            >
              Learn About Partnership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
