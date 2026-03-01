"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Play, 
  Pause,
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
  ChevronRight,
  ExternalLink,
  SkipBack,
  SkipForward
} from "lucide-react";

interface Episode {
  id: number;
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  audioUrl: string;
  imageUrl: string;
  link: string;
  guest?: string;
  company?: string;
  quote?: string;
  category?: string;
}

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
  const [latestEpisodes, setLatestEpisodes] = useState<Episode[]>([]);
  const [totalEpisodes, setTotalEpisodes] = useState(387);
  const [loading, setLoading] = useState(true);
  
  // Audio player state
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioLoading, setAudioLoading] = useState(false);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const res = await fetch('/api/episodes');
        const data = await res.json();
        setLatestEpisodes((data.episodes || []).slice(0, 3));
        setTotalEpisodes(data.episodes?.length || 387);
      } catch (error) {
        console.error('Failed to fetch episodes:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchEpisodes();
  }, []);

  // Audio player controls
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);
    const handleCanPlay = () => setAudioLoading(false);
    const handleWaiting = () => setAudioLoading(true);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("waiting", handleWaiting);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("waiting", handleWaiting);
    };
  }, [latestEpisodes]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.currentTime + seconds, duration));
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const featuredEpisode = latestEpisodes[0];

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
              {/* Hidden Audio Element */}
              {featuredEpisode && (
                <audio ref={audioRef} src={featuredEpisode.audioUrl} preload="metadata" />
              )}
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Episode Image */}
                {featuredEpisode?.imageUrl && (
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `linear-gradient(to bottom, rgba(44,44,44,0.2), rgba(44,44,44,0.9)), url(${featuredEpisode.imageUrl})` 
                    }}
                  />
                )}
                
                <div className="p-8">
                {/* Now Playing Badge */}
                <div className="absolute top-4 left-8 px-4 py-2 bg-rust text-white text-sm font-semibold rounded-full flex items-center gap-2 z-10">
                  <span className="relative flex h-2 w-2">
                    {isPlaying ? (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </>
                    ) : (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white/50"></span>
                    )}
                  </span>
                  {isPlaying ? "Now Playing" : "Latest Episode"}
                </div>

                {/* Episode Info */}
                <div className="mb-8">
                  {featuredEpisode ? (
                    <>
                      <div className="flex items-center gap-2 text-rust-light text-sm mb-2">
                        <span className="px-2 py-1 bg-rust/20 rounded">Episode {featuredEpisode.id}</span>
                        {featuredEpisode.category && (
                          <>
                            <span>•</span>
                            <span>{featuredEpisode.category}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white font-playfair mb-2">
                        {featuredEpisode.title}
                      </h3>
                      {featuredEpisode.guest && (
                        <p className="text-white/60">
                          with {featuredEpisode.guest}{featuredEpisode.company && ` of ${featuredEpisode.company}`}
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="animate-pulse space-y-3">
                      <div className="h-6 bg-white/10 rounded w-32" />
                      <div className="h-8 bg-white/10 rounded w-full" />
                      <div className="h-4 bg-white/10 rounded w-48" />
                    </div>
                  )}
                </div>

                {/* Quote */}
                {featuredEpisode?.quote && (
                  <blockquote className="relative pl-4 border-l-2 border-rust mb-8">
                    <p className="text-white/80 italic">
                      "{featuredEpisode.quote}"
                    </p>
                  </blockquote>
                )}

                {/* Player Controls */}
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={(e) => {
                        const audio = audioRef.current;
                        if (audio) {
                          audio.currentTime = parseFloat(e.target.value);
                          setCurrentTime(parseFloat(e.target.value));
                        }
                      }}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-rust [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-white/50">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-6">
                    <button 
                      onClick={() => skip(-15)}
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      title="Skip back 15 seconds"
                    >
                      <SkipBack className="w-5 h-5 text-white" />
                    </button>
                    <button 
                      onClick={togglePlay}
                      disabled={!featuredEpisode || audioLoading}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-rust to-copper flex items-center justify-center hover:from-rust-dark hover:to-rust transition-all shadow-lg glow-rust disabled:opacity-50"
                    >
                      {audioLoading ? (
                        <div className="w-7 h-7 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : isPlaying ? (
                        <Pause className="w-7 h-7 text-white fill-white" />
                      ) : (
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      )}
                    </button>
                    <button 
                      onClick={() => skip(30)}
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      title="Skip forward 30 seconds"
                    >
                      <SkipForward className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Listen Platforms */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-3 text-center">
                    Also available on
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://podcasts.apple.com/us/podcast/the-art-of-construction/id932645265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 rounded-lg text-white/70 text-sm hover:bg-white/10 transition-colors"
                    >
                      Apple Podcasts
                    </a>
                    <a
                      href="https://open.spotify.com/show/7BlCk55C41hoPZrs7GqSeB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 rounded-lg text-white/70 text-sm hover:bg-white/10 transition-colors"
                    >
                      Spotify
                    </a>
                    <a
                      href="https://www.youtube.com/@theartofconstruction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 rounded-lg text-white/70 text-sm hover:bg-white/10 transition-colors"
                    >
                      YouTube
                    </a>
                  </div>
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
            {loading ? (
              // Loading skeleton
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-24" />
                        <div className="h-3 bg-gray-200 rounded w-16" />
                      </div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>
              ))
            ) : (
              latestEpisodes.map((episode, index) => (
              <motion.article
                key={episode.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all card-lift border border-rust/5"
              >
                {/* Episode Header */}
                <div 
                  className="relative h-48 bg-gradient-to-br from-charcoal to-aged-wood p-6 bg-cover bg-center"
                  style={{ backgroundImage: episode.imageUrl ? `linear-gradient(to bottom, rgba(44,44,44,0.3), rgba(44,44,44,0.85)), url(${episode.imageUrl})` : undefined }}
                >
                  {episode.category && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-rust/90 text-white text-xs font-semibold rounded-full">
                      {episode.category}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-rust-light text-sm mb-1">Episode {episode.id}</div>
                    <h3 className="text-xl font-bold text-white font-playfair line-clamp-2">
                      {episode.title}
                    </h3>
                  </div>
                  {/* Play Button Overlay */}
                  <a 
                    href={episode.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="w-16 h-16 rounded-full bg-rust/90 flex items-center justify-center shadow-xl hover:bg-rust transition-colors">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </a>
                </div>

                {/* Episode Body */}
                <div className="p-6">
                  {episode.guest && (
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
                  )}

                  {episode.quote && (
                    <blockquote className="text-charcoal/70 italic text-sm mb-4 line-clamp-2">
                      "{episode.quote}"
                    </blockquote>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-rust/10">
                    <div className="flex items-center gap-4 text-sm text-charcoal/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(episode.pubDate)}
                      </span>
                      {episode.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {episode.duration}
                        </span>
                      )}
                    </div>
                    <a
                      href={episode.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rust font-medium text-sm hover:text-rust-dark flex items-center gap-1 group/link"
                    >
                      Listen
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )))}
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
              View All {totalEpisodes}+ Episodes
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
