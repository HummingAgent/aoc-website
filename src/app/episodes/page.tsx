"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Play, 
  Search, 
  Calendar, 
  Clock, 
  Mic2,
  Grid3X3,
  List,
  X
} from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";

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

const categories = [
  "All",
  "Leadership",
  "Technology",
  "Artificial Intelligence",
  "Prefabrication",
  "Architecture",
  "Mental Health",
  "Housing",
  "Business",
];

export default function EpisodesPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [nowPlaying, setNowPlaying] = useState<Episode | null>(null);
  const [displayCount, setDisplayCount] = useState(12);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const res = await fetch('/api/episodes');
        const data = await res.json();
        setEpisodes(data.episodes || []);
      } catch (error) {
        console.error('Failed to fetch episodes:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchEpisodes();
  }, []);

  const filteredEpisodes = episodes.filter((episode) => {
    const matchesSearch =
      episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (episode.guest?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (episode.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    const matchesCategory =
      selectedCategory === "All" || episode.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedEpisodes = filteredEpisodes.slice(0, displayCount);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const playEpisode = (episode: Episode) => {
    setNowPlaying(episode);
  };

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
          className="absolute top-20 right-20 w-96 h-96 bg-rust rounded-full blur-[150px]"
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
              Episode <span className="text-gradient">Archive</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Explore {episodes.length}+ conversations with industry leaders, innovative thinkers, and construction experts.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/50" />
              <input
                type="text"
                placeholder="Search episodes, guests, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-rust shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Audio Player */}
      <AnimatePresence>
        {nowPlaying && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-charcoal/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="max-w-4xl mx-auto">
              <AudioPlayer
                audioUrl={nowPlaying.audioUrl}
                title={nowPlaying.title}
                episodeNumber={nowPlaying.id}
                guest={nowPlaying.guest}
                onClose={() => setNowPlaying(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filters and Episodes */}
      <section className={`py-12 ${nowPlaying ? 'pb-48' : ''}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8"
          >
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-rust text-white"
                      : "bg-white text-charcoal hover:bg-rust/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid" ? "bg-rust text-white" : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list" ? "bg-rust text-white" : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Results Count */}
          <p className="text-charcoal/60 mb-6">
            {loading ? 'Loading episodes...' : `Showing ${displayedEpisodes.length} of ${filteredEpisodes.length} episodes`}
          </p>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
                  <div className="h-40 bg-gray-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Episodes Grid/List */}
          {!loading && (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {displayedEpisodes.map((episode, index) => (
                <motion.article
                  key={episode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-rust/5 ${
                    viewMode === "list" ? "flex" : ""
                  } ${nowPlaying?.id === episode.id ? "ring-2 ring-rust" : ""}`}
                >
                  {viewMode === "grid" ? (
                    <>
                      {/* Grid View */}
                      <div 
                        className="relative h-48 bg-charcoal p-4"
                      >
                        {episode.imageUrl && (
                          <Image
                            src={episode.imageUrl}
                            alt={episode.title}
                            fill
                            className="object-contain"
                          />
                        )}
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                        {episode.category && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedCategory(episode.category!);
                            }}
                            className="absolute top-3 left-3 px-2 py-1 bg-rust/90 text-white text-xs font-semibold rounded-full hover:bg-rust transition-colors cursor-pointer"
                          >
                            {episode.category}
                          </button>
                        )}
                        {nowPlaying?.id === episode.id && (
                          <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            Playing
                          </div>
                        )}
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="text-rust-light text-sm">Episode {episode.id}</div>
                          <h3 className="text-lg font-bold text-white font-playfair line-clamp-2">
                            {episode.title}
                          </h3>
                        </div>
                        {/* Play Button Overlay - always visible on mobile, hover on desktop */}
                        <button 
                          onClick={() => playEpisode(episode)}
                          className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                        >
                          <div className="w-14 h-14 rounded-full bg-rust/90 flex items-center justify-center shadow-xl hover:bg-rust hover:scale-110 transition-all">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                          </div>
                        </button>
                      </div>
                      <div className="p-5">
                        {episode.guest && (
                          <div className="flex items-center gap-2 mb-3">
                            <Mic2 className="w-4 h-4 text-rust" />
                            <span className="font-medium text-charcoal">{episode.guest}</span>
                            {episode.company && (
                              <span className="text-charcoal/60 text-sm">• {episode.company}</span>
                            )}
                          </div>
                        )}
                        {episode.quote && (
                          <p className="text-charcoal/70 italic text-sm mb-4 line-clamp-2">
                            "{episode.quote}"
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-3 border-t border-rust/10">
                          <div className="flex items-center gap-3 text-xs text-charcoal/60">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(episode.pubDate)}
                            </span>
                            {episode.duration && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {episode.duration}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => playEpisode(episode)}
                            className="text-rust font-medium text-sm hover:text-rust-dark flex items-center gap-1"
                          >
                            <Play className="w-3 h-3 fill-rust" />
                            Play
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* List View */}
                      <div className="relative w-32 md:w-48 bg-gradient-to-br from-charcoal to-aged-wood flex items-center justify-center shrink-0">
                        <div className="text-4xl font-bold text-white/20 font-playfair">
                          {episode.id}
                        </div>
                        <button
                          onClick={() => playEpisode(episode)}
                          className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                        >
                          <div className="w-12 h-12 rounded-full bg-rust/90 flex items-center justify-center hover:scale-110 transition-all">
                            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                          </div>
                        </button>
                      </div>
                      <div className="flex-1 p-5">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {episode.category && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedCategory(episode.category!);
                              }}
                              className="px-2 py-1 bg-rust/10 text-rust text-xs font-semibold rounded-full hover:bg-rust/20 transition-colors cursor-pointer"
                            >
                              {episode.category}
                            </button>
                          )}
                          {nowPlaying?.id === episode.id && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-600 text-xs font-semibold rounded-full flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                              Playing
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-charcoal font-playfair mb-2">
                          {episode.title}
                        </h3>
                        {episode.guest && (
                          <div className="flex items-center gap-2 text-sm text-charcoal/70 mb-2">
                            <span className="font-medium">{episode.guest}</span>
                            {episode.company && <span>• {episode.company}</span>}
                          </div>
                        )}
                        {episode.quote && (
                          <p className="text-charcoal/60 italic text-sm mb-3 line-clamp-1">
                            "{episode.quote}"
                          </p>
                        )}
                        <div className="flex items-center gap-4 text-xs text-charcoal/60">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(episode.pubDate)}
                          </span>
                          {episode.duration && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {episode.duration}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center pr-5">
                        <button
                          onClick={() => playEpisode(episode)}
                          className="px-4 py-2 bg-rust text-white rounded-full text-sm font-medium hover:bg-rust-dark transition-colors flex items-center gap-2"
                        >
                          <Play className="w-3 h-3 fill-white" />
                          Play
                        </button>
                      </div>
                    </>
                  )}
                </motion.article>
              ))}
            </div>
          )}

          {/* Load More */}
          {!loading && displayCount < filteredEpisodes.length && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setDisplayCount(prev => prev + 12)}
                className="px-8 py-4 bg-charcoal text-white font-semibold rounded-full hover:bg-rust transition-colors shadow-lg"
              >
                Load More Episodes ({filteredEpisodes.length - displayCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Podcast Platforms CTA */}
      <section className={`py-12 bg-sand-light ${nowPlaying ? 'mb-32' : ''}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal font-playfair mb-4">
            Subscribe on Your Favorite Platform
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://podcasts.apple.com/us/podcast/the-art-of-construction/id932645265"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white rounded-full text-charcoal font-medium shadow-md hover:shadow-lg hover:bg-rust hover:text-white transition-all"
            >
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/7BlCk55C41hoPZrs7GqSeB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white rounded-full text-charcoal font-medium shadow-md hover:shadow-lg hover:bg-rust hover:text-white transition-all"
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/@theartofconstruction"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white rounded-full text-charcoal font-medium shadow-md hover:shadow-lg hover:bg-rust hover:text-white transition-all"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
