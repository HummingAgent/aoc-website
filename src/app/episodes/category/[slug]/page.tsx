"use client";

import { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Clock,
  Search,
  Grid3X3,
  List,
  ArrowLeft,
  Mic2,
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

const categoryMapping: Record<string, string> = {
  "architecture": "Architecture",
  "business": "Business",
  "technology": "Technology",
  "leadership": "Leadership",
  "prefabrication": "Prefabrication",
  "housing": "Housing",
  "indoor-outdoor-living": "Indoor-Outdoor Living",
  "ai-series": "Artificial Intelligence",
  "artificial-intelligence": "Artificial Intelligence",
  "mental-health": "Mental Health",
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const categoryName = categoryMapping[slug.toLowerCase()] || slug.charAt(0).toUpperCase() + slug.slice(1);
  
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [playingEpisode, setPlayingEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch("/api/episodes");
        const data = await response.json();
        // Filter by category - API returns { episodes: [...] }
        const allEpisodes = data.episodes || [];
        const filtered = allEpisodes.filter((ep: Episode) => 
          ep.category?.toLowerCase() === categoryName.toLowerCase()
        );
        setEpisodes(filtered);
      } catch (error) {
        console.error("Failed to fetch episodes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodes();
  }, [categoryName]);

  const filteredEpisodes = episodes.filter((episode) => {
    const matchesSearch =
      episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (episode.guest?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (episode.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesSearch;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-sand">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-aged-wood to-charcoal overflow-hidden">
        <div className="absolute inset-0 beam-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/episodes"
              className="inline-flex items-center gap-2 text-rust-light hover:text-rust transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              All Episodes
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rust/20 rounded-full text-rust-light text-sm font-medium mb-6 ml-4">
              <Mic2 className="w-4 h-4" />
              Category
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              {categoryName}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''} in this category
            </p>
          </motion.div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between"
          >
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-rust/10 focus:border-rust focus:ring-2 focus:ring-rust/20 outline-none transition-all text-charcoal"
              />
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

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-charcoal/10" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-charcoal/10 rounded w-1/4" />
                    <div className="h-6 bg-charcoal/10 rounded w-3/4" />
                    <div className="h-4 bg-charcoal/10 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Episodes */}
          {!loading && (
            <AnimatePresence mode="wait">
              {viewMode === "grid" ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredEpisodes.map((episode, index) => (
                    <motion.div
                      key={episode.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all card-lift border border-rust/5"
                    >
                      <div
                        className="relative h-48 bg-charcoal p-6"
                      >
                        {episode.imageUrl && (
                          <Image
                            src={episode.imageUrl}
                            alt={episode.title}
                            fill
                            className="object-contain"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                        <Link
                          href={`/episodes/category/${slug}`}
                          className="absolute top-3 left-3 px-2 py-1 bg-rust/90 text-white text-xs font-semibold rounded-full hover:bg-rust transition-colors"
                        >
                          {episode.category}
                        </Link>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-rust-light text-sm mb-1">Episode {episode.id}</div>
                          <h3 className="text-xl font-bold text-white font-playfair line-clamp-2">
                            {episode.title}
                          </h3>
                        </div>
                        <button
                          onClick={() => setPlayingEpisode(episode)}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-rust/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110"
                        >
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </button>
                      </div>
                      <div className="p-6">
                        {episode.guest && (
                          <p className="text-charcoal/60 text-sm mb-3">
                            with {episode.guest}
                            {episode.company && ` of ${episode.company}`}
                          </p>
                        )}
                        <p className="text-charcoal/70 text-sm line-clamp-2 mb-4">
                          {episode.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-charcoal/50">{formatDate(episode.pubDate)}</span>
                          <span className="flex items-center gap-1 text-rust">
                            <Clock className="w-4 h-4" />
                            {episode.duration}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {filteredEpisodes.map((episode, index) => (
                    <motion.div
                      key={episode.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-rust/5 flex"
                    >
                      <div
                        className="w-48 min-h-[120px] bg-charcoal flex-shrink-0 relative"
                      >
                        {episode.imageUrl && (
                          <Image
                            src={episode.imageUrl}
                            alt={episode.title}
                            fill
                            className="object-contain"
                          />
                        )}
                        <button
                          onClick={() => setPlayingEpisode(episode)}
                          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Play className="w-10 h-10 text-white fill-white" />
                        </button>
                      </div>
                      <div className="flex-1 p-5">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Link
                            href={`/episodes/category/${slug}`}
                            className="px-2 py-1 bg-rust/10 text-rust text-xs font-semibold rounded-full hover:bg-rust/20 transition-colors"
                          >
                            {episode.category}
                          </Link>
                          <span className="text-charcoal/40 text-sm">Episode {episode.id}</span>
                          <span className="text-charcoal/40">•</span>
                          <span className="text-charcoal/40 text-sm">{formatDate(episode.pubDate)}</span>
                        </div>
                        <h3 className="text-lg font-bold text-charcoal font-playfair mb-2 group-hover:text-rust transition-colors">
                          {episode.title}
                        </h3>
                        {episode.guest && (
                          <p className="text-charcoal/60 text-sm mb-2">
                            with {episode.guest}
                            {episode.company && ` of ${episode.company}`}
                          </p>
                        )}
                        <p className="text-charcoal/70 text-sm line-clamp-2 mb-3">
                          {episode.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-rust text-sm">
                            <Clock className="w-4 h-4" />
                            {episode.duration}
                          </span>
                          <button
                            onClick={() => setPlayingEpisode(episode)}
                            className="flex items-center gap-1 text-rust hover:text-rust-dark transition-colors text-sm font-medium"
                          >
                            <Play className="w-4 h-4" />
                            Play Episode
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* No Results */}
          {!loading && filteredEpisodes.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Mic2 className="w-16 h-16 text-charcoal/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-charcoal mb-2">No episodes found</h3>
              <p className="text-charcoal/60">
                {searchQuery ? "Try adjusting your search" : `No episodes in the ${categoryName} category yet`}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Audio Player */}
      {playingEpisode && (
        <AudioPlayer
          audioUrl={playingEpisode.audioUrl}
          title={playingEpisode.title}
          episodeNumber={playingEpisode.id}
          guest={playingEpisode.guest}
          onClose={() => setPlayingEpisode(null)}
        />
      )}
    </div>
  );
}
