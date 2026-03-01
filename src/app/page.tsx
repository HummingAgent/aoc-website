"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Play, 
  Headphones, 
  Users, 
  Mic2, 
  ArrowRight, 
  Clock, 
  Calendar,
  TrendingUp,
  Building2,
  Hammer,
  Zap,
  Globe,
  Star,
  ChevronRight
} from "lucide-react";

// Sample episode data - in production, this would come from a CMS or API
const latestEpisodes = [
  {
    id: 387,
    title: "Know Your Operating Principles",
    guest: "Lora Lapiz",
    company: "Defy Logik",
    date: "February 26, 2026",
    duration: "45 min",
    quote: "Presence is your invisible safety protocol.",
    category: "Leadership",
  },
  {
    id: 386,
    title: "Build Better with Kahua",
    guest: "AJ Waters",
    company: "Kahua",
    date: "February 12, 2026",
    duration: "52 min",
    quote: "We have to have the courage to innovate when it comes to construction.",
    category: "Technology",
  },
  {
    id: 385,
    title: "Rebuilding from Trauma",
    guest: "Special Episode",
    company: "",
    date: "January 29, 2026",
    duration: "38 min",
    quote: "Your foundation can crack. At some point you're going to have to rebuild.",
    category: "Mental Health",
  },
];

const stats = [
  { label: "Global Listeners", value: "600K+", icon: Globe },
  { label: "Episodes", value: "387+", icon: Mic2 },
  { label: "Master Facilitators", value: "500+", icon: Users },
  { label: "Years Running", value: "8+", icon: Calendar },
];

const categories = [
  { name: "AI Series", count: 24, icon: Zap },
  { name: "Prefabrication", count: 42, icon: Building2 },
  { name: "Leadership", count: 67, icon: TrendingUp },
  { name: "Technology", count: 89, icon: Hammer },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-charcoal via-aged-wood to-charcoal">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 beam-pattern opacity-10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute top-20 left-10 w-72 h-72 bg-rust rounded-full blur-[100px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-copper rounded-full blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[150px]"
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-rust/20 rounded-full text-rust-light text-sm font-medium mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rust"></span>
                </span>
                Episode 387 Now Live
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-playfair leading-tight mb-6">
                The Art of{" "}
                <span className="text-gradient">Construction</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl">
                Join Devon Tilly and 600,000+ construction professionals in the ultimate community for builders, innovators, and industry leaders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/episodes"
                  className="group px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-xl hover:shadow-2xl glow-rust flex items-center justify-center gap-3"
                >
                  <Play className="w-5 h-5 fill-white" />
                  Listen to Latest Episode
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/community"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  <Users className="w-5 h-5" />
                  Join Master Facilitators
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-6 h-6 text-rust mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Featured Player Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                {/* Now Playing Badge */}
                <div className="absolute -top-4 left-8 px-4 py-2 bg-rust text-white text-sm font-semibold rounded-full flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Now Playing
                </div>

                {/* Episode Info */}
                <div className="mt-4 mb-8">
                  <div className="flex items-center gap-2 text-rust-light text-sm mb-2">
                    <span className="px-2 py-1 bg-rust/20 rounded">Episode 387</span>
                    <span>•</span>
                    <span>Leadership</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-playfair mb-2">
                    Know Your Operating Principles
                  </h3>
                  <p className="text-white/60">
                    with Lora Lapiz of Defy Logik
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="relative pl-4 border-l-2 border-rust mb-8">
                  <p className="text-white/80 italic">
                    "Presence is your invisible safety protocol."
                  </p>
                </blockquote>

                {/* Player Controls */}
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "35%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-full bg-gradient-to-r from-rust to-copper rounded-full"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-white/50">
                      <span>15:42</span>
                      <span>45:00</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-6">
                    <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 20L9 12l10-8v16zM7 20V4H5v16h2z" />
                      </svg>
                    </button>
                    <button className="w-16 h-16 rounded-full bg-gradient-to-r from-rust to-copper flex items-center justify-center hover:from-rust-dark hover:to-rust transition-all shadow-lg glow-rust">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 4l10 8-10 8V4zm12 0v16h2V4h-2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Listen Platforms */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-3 text-center">
                    Also available on
                  </p>
                  <div className="flex justify-center gap-4">
                    {["Apple Podcasts", "Spotify", "YouTube"].map((platform) => (
                      <button
                        key={platform}
                        className="px-4 py-2 bg-white/5 rounded-lg text-white/70 text-sm hover:bg-white/10 transition-colors"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-rust/20 to-copper/20 rounded-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Latest Episodes Section */}
      <section className="py-20 bg-sand-light relative">
        <div className="absolute inset-0 beam-pattern" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal font-playfair mb-4">
              Latest <span className="text-gradient">Episodes</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Fresh conversations with industry leaders, innovative thinkers, and construction experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestEpisodes.map((episode, index) => (
              <motion.article
                key={episode.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all card-lift border border-rust/5"
              >
                {/* Episode Header */}
                <div className="relative h-48 bg-gradient-to-br from-charcoal to-aged-wood p-6">
                  <div className="absolute top-4 left-4 px-3 py-1 bg-rust/90 text-white text-xs font-semibold rounded-full">
                    {episode.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-rust-light text-sm mb-1">Episode {episode.id}</div>
                    <h3 className="text-xl font-bold text-white font-playfair line-clamp-2">
                      {episode.title}
                    </h3>
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-rust/90 flex items-center justify-center shadow-xl">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Episode Body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-rust/10 flex items-center justify-center">
                      <Mic2 className="w-5 h-5 text-rust" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">{episode.guest}</div>
                      {episode.company && (
                        <div className="text-sm text-charcoal/60">{episode.company}</div>
                      )}
                    </div>
                  </div>

                  <blockquote className="text-charcoal/70 italic text-sm mb-4 line-clamp-2">
                    "{episode.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-rust/10">
                    <div className="flex items-center gap-4 text-sm text-charcoal/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {episode.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {episode.duration}
                      </span>
                    </div>
                    <Link
                      href={`/episodes/${episode.id}`}
                      className="text-rust font-medium text-sm hover:text-rust-dark flex items-center gap-1 group/link"
                    >
                      Listen
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
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
              href="/episodes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-semibold rounded-full hover:bg-rust transition-colors shadow-lg"
            >
              <Headphones className="w-5 h-5" />
              View All 387+ Episodes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair mb-4">
              Explore by <span className="text-gradient">Topic</span>
            </h2>
            <p className="text-lg text-charcoal/70">
              Deep dives into the areas that matter most to construction professionals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/episodes/category/${category.name.toLowerCase().replace(" ", "-")}`}
                  className="group block p-6 bg-white rounded-2xl border border-rust/10 hover:border-rust/30 hover:shadow-xl transition-all card-lift"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-rust/10 to-copper/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-rust group-hover:to-copper transition-all">
                    <category.icon className="w-7 h-7 text-rust group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal font-playfair mb-1">
                    {category.name}
                  </h3>
                  <p className="text-charcoal/60 text-sm">
                    {category.count} episodes
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Facilitators Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-aged-wood to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 beam-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-20 right-20 w-96 h-96 bg-rust rounded-full blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rust/20 rounded-full text-rust-light text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                #AOCMFERS
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mb-6">
                Master Facilitators{" "}
                <span className="text-gradient">Community</span>
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Join our tribe of elite construction professionals dedicated to offsite construction and system-built solutions. Connect, learn, and grow with 500+ industry leaders.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Exclusive networking events and summits",
                  "Early access to podcast episodes",
                  "Direct connections with industry leaders",
                  "System Built Builder resources and tools",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-rust/20 flex items-center justify-center">
                      <Star className="w-3 h-3 text-rust" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-xl glow-rust"
              >
                <Users className="w-5 h-5" />
                Join the Tribe
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Community Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-white font-playfair mb-2">500+</div>
                  <div className="text-white/60">Active Master Facilitators</div>
                </div>

                {/* Testimonial */}
                <div className="bg-white/5 rounded-2xl p-6 mb-6">
                  <blockquote className="text-white/80 italic mb-4">
                    "The AOC community has transformed how I approach construction technology. The connections I've made here are invaluable."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rust/30" />
                    <div>
                      <div className="text-white font-medium">Master Facilitator</div>
                      <div className="text-white/60 text-sm">System Built Builder</div>
                    </div>
                  </div>
                </div>

                {/* Member Avatars */}
                <div className="flex items-center justify-center">
                  <div className="flex -space-x-3">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-rust to-copper border-2 border-charcoal"
                      />
                    ))}
                  </div>
                  <span className="ml-4 text-white/60 text-sm">
                    +494 others
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
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
              Trusted <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-lg text-charcoal/70">
              Powering the future of construction together.
            </p>
          </motion.div>

          {/* Featured Partner - HummingAgent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-charcoal to-aged-wood rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 beam-pattern opacity-10" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rust/20 rounded-full text-rust-light text-sm font-medium mb-6">
                  <Star className="w-4 h-4 fill-rust-light" />
                  Featured AI Partner
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-4">
                  HummingAgent AI
                </h3>
                <p className="text-white/70 mb-6">
                  Revolutionizing construction businesses with AI-powered automation. From project management to customer communications, HummingAgent brings cutting-edge AI solutions to the construction industry.
                </p>
                <Link
                  href="https://hummingagent.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rust to-copper text-white font-semibold rounded-full hover:from-rust-dark hover:to-rust transition-all shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-rust/20 to-copper/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-rust to-copper rounded-2xl flex items-center justify-center shadow-2xl">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Autodesk", "BuilderTrend", "Kahua", "Cultivate Advisors"].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 flex items-center justify-center h-24 shadow-md hover:shadow-xl transition-shadow border border-rust/5"
              >
                <span className="text-charcoal/70 font-semibold">{partner}</span>
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
              href="/partners"
              className="inline-flex items-center gap-2 text-rust font-semibold hover:text-rust-dark"
            >
              View All Partners
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Devon CTA Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rust to-copper rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 beam-pattern opacity-10" />
            <div className="relative">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mic2 className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mb-4">
                Meet Devon Tilly
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Informational entrepreneur, podcast host, and leader of the Master Facilitators tribe. Devon has interviewed the best minds in construction and connected thousands of builders.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rust font-semibold rounded-full hover:bg-sand transition-colors shadow-lg"
              >
                Learn Devon's Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
