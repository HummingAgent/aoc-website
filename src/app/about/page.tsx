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
    year: "2018",
    title: "AOC Launches",
    description: "Devon Tilly starts The Art of Construction podcast from his garage.",
  },
  {
    year: "2020",
    title: "100 Episodes",
    description: "Milestone episode featuring top industry leaders.",
  },
  {
    year: "2022",
    title: "Master Facilitators",
    description: "Community grows to 200+ active members.",
  },
  {
    year: "2024",
    title: "500K Listeners",
    description: "Half a million global listeners tune in monthly.",
  },
  {
    year: "2026",
    title: "600K+ Strong",
    description: "The tribe continues to grow and innovate.",
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
              <p className="text-lg text-white/70 mb-8">
                Informational entrepreneur, podcast host, and leader of the Master Facilitators tribe. Devon has dedicated his career to connecting builders, innovators, and industry leaders across the construction world.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">387+</div>
                  <div className="text-white/60 text-sm">Episodes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">600K+</div>
                  <div className="text-white/60 text-sm">Listeners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">8+</div>
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

      {/* Story Section */}
      <section className="py-20 bg-sand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair mb-6">
              The <span className="text-gradient">Story</span>
            </h2>
            <p className="text-lg text-charcoal/70 mb-6">
              Devon Tilly started The Art of Construction with a simple mission: give construction professionals a platform to share their knowledge, experiences, and innovations.
            </p>
            <p className="text-lg text-charcoal/70 mb-6">
              What began as a passion project has grown into one of the most influential voices in the construction industry. With over 387 episodes and 600,000+ listeners worldwide, AOC has become the go-to resource for builders seeking inspiration, education, and community.
            </p>
            <p className="text-lg text-charcoal/70">
              But Devon isn't just a host—he's a connector. Through the Master Facilitators community, he's built a tribe of construction professionals dedicated to system-built solutions and offsite construction innovation.
            </p>
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
