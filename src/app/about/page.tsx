"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Mic2, 
  Users, 
  Globe, 
  Award, 
  Heart, 
  ArrowRight,
  Quote,
  Headphones,
  Building2,
  Lightbulb,
  Instagram,
  Linkedin
} from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "AOC Launches",
    description: "Devon Tilly starts The Art of Construction podcast — now celebrating 10+ years!",
    highlight: true,
  },
  {
    year: "2018",
    title: "100 Episodes",
    description: "Milestone episode featuring top industry leaders.",
  },
  {
    year: "2020",
    title: "Going Global",
    description: "Podcast reaches listeners in 50+ countries worldwide.",
  },
  {
    year: "2022",
    title: "Master Facilitators",
    description: "Community grows to 500+ active members.",
  },
  {
    year: "2024",
    title: "10 Year Anniversary",
    description: "A decade of conversations shaping the future of construction.",
    highlight: true,
  },
  {
    year: "2026",
    title: "721K+ Downloads",
    description: "The tribe continues to grow and innovate together.",
  },
];

const values = [
  {
    icon: Building2,
    title: "Build Community",
    description: "We believe in the power of connection. Construction is about people building things together.",
  },
  {
    icon: Lightbulb,
    title: "Share Knowledge",
    description: "Every conversation is an opportunity to learn. We platform the best minds in construction.",
  },
  {
    icon: Heart,
    title: "Lead with Heart",
    description: "Behind every project is a person. We bring humanity back to the industry.",
  },
];

export default function AboutPage() {
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-rust rounded-full blur-[150px]"
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
                Meet <span className="text-gradient">Devon Tilly</span>
              </h1>
              <p className="text-lg text-white/70 mb-4">
                I believe construction isn't just about buildings — it's about the people who build them.
              </p>
              <p className="text-lg text-white/70 mb-8">
                After years in the window and door industry, I realized something was missing: real conversations between the people actually doing the work. So in 2014, I started The Art of Construction — not to build an audience, but to build connections.
              </p>
              {/* 10 Year Anniversary Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/20 to-rust/20 border border-gold/30 rounded-full mb-6">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold">Celebrating 10+ Years (2014-2024)</span>
              </div>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">387+</div>
                  <div className="text-white/60 text-sm">Episodes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">721K+</div>
                  <div className="text-white/60 text-sm">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-white/60 text-sm">Years</div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/devon-tilly-5a407a20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rust transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/devontilly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rust transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-rust/20 to-copper/20 rounded-3xl p-4 backdrop-blur-xl border border-white/10">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/devon-tilly.jpg"
                    alt="Devon Tilly - Host of The Art of Construction"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 p-4 bg-white/5 rounded-xl">
                  <Quote className="w-6 h-6 text-rust mb-2" />
                  <p className="text-white/80 italic text-lg">
                    "Every builder has a story. My job is to help them tell it."
                  </p>
                  <cite className="text-rust-light font-semibold mt-2 block">— Devon Tilly</cite>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section - Narrative Style */}
      <section className="py-20 bg-sand-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair mb-8 text-center">
              My <span className="text-gradient">Why</span>
            </h2>
            
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3 space-y-6 text-charcoal/80 text-lg leading-relaxed">
                <p className="text-xl font-medium text-charcoal">
                  I grew up in the construction industry. It's in my blood.
                </p>
                
                <p>
                  As President of Mountain View Window & Door in Denver, I've spent years working with builders, contractors, and tradespeople who pour their hearts into every project. But somewhere along the way, I noticed something was missing.
                </p>
                
                <p>
                  The industry was full of incredible people doing amazing work — but they weren't talking to each other. Knowledge was siloed. Best practices stayed local. And the same problems kept getting solved over and over again in isolation.
                </p>
                
                <p className="text-xl font-semibold text-charcoal border-l-4 border-rust pl-6 my-8">
                  So in 2014, I grabbed a microphone and started having conversations.
                </p>
                
                <p>
                  What began as simple podcast interviews with industry friends quickly became something bigger. Builders started reaching out. Manufacturers wanted to share their stories. Architects, developers, and tech innovators all had insights worth spreading.
                </p>
                
                <p>
                  Ten years and 387+ episodes later, The Art of Construction has reached over 721,000 downloads. But the numbers aren't what drive me.
                </p>
                
                <p className="text-xl font-semibold text-charcoal border-l-4 border-rust pl-6 my-8">
                  What drives me is watching someone hear an idea on the show and implement it the next day. It's seeing strangers become collaborators. It's building a tribe of people who believe construction can be better — and are doing something about it.
                </p>
                
                <p>
                  That's why I created the Master Facilitators community. That's why we host events at Turkey Toe. That's why I show up every week ready to learn from someone new.
                </p>
                
                <p className="text-xl font-medium text-charcoal">
                  Because construction isn't just about buildings. It's about the people who build them. And those people deserve to be heard.
                </p>
              </div>
              
              {/* Family Image */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/devon-family.png"
                    alt="Devon Tilly with family and the AOC community"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-center text-charcoal/60 text-sm mt-4 italic">
                  Family, community, and purpose — the foundation of everything we build.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-rust/5"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rust to-copper rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-playfair mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-rust/30 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                      <div className="text-rust font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white font-playfair mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/70">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-rust rounded-full ring-4 ring-rust/30" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
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
              Ready to Join the Conversation?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Subscribe to the podcast or join our Master Facilitators community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/episodes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rust font-semibold rounded-full hover:bg-sand transition-colors"
              >
                <Headphones className="w-5 h-5" />
                Listen to Podcast
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Users className="w-5 h-5" />
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
