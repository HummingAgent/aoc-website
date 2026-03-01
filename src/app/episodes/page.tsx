"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Play, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Mic2,
  ChevronRight,
  Grid3X3,
  List
} from "lucide-react";

// Sample episodes data
const episodes = [
  {
    id: 387,
    title: "Know Your Operating Principles",
    guest: "Lora Lapiz",
    company: "Defy Logik",
    date: "February 26, 2026",
    duration: "45 min",
    quote: "Presence is your invisible safety protocol.",
    category: "Leadership",
    featured: true,
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
    featured: true,
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
    featured: false,
  },
  {
    id: 384,
    title: "Designing with Gratitude",
    guest: "Sidney Aulds",
    company: "Sidney Aulds Building Studio",
    date: "January 15, 2026",
    duration: "41 min",
    quote: "Start your day with gratitude, and end your day with gratitude.",
    category: "Architecture",
    featured: false,
  },
  {
    id: 383,
    title: "AI and Small Businesses",
    guest: "AI Series",
    company: "",
    date: "December 4, 2025",
    duration: "47 min",
    quote: "Start in small areas of your business and test it there.",
    category: "Artificial Intelligence",
    featured: true,
  },
  {
    id: 382,
    title: "Are You Up to the Challenge? Help Us Solve Housing Affordability",
    guest: "HIA",
    company: "Housing Innovation Alliance",
    date: "November 20, 2025",
    duration: "36 min",
    quote: "Do you have a solution, idea, or dream that could help solve the housing crisis?",
    category: "Innovation",
    featured: false,
  },
  {
    id: 381,
    title: "Architecture with Intention",
    guest: "Industry Expert",
    company: "",
    date: "November 6, 2025",
    duration: "44 min",
    quote: "A more common sense approach to what we're doing.",
    category: "Architecture",
    featured: false,
  },
  {
    id: 380,
    title: "Advice for Installing Indoor Golf Simulators",
    guest: "Aaron Walz",
    company: "Uneekor",
    date: "October 23, 2025",
    duration: "39 min",
    quote: "Incorporating the golf simulator space really takes that luxury home to the next level.",
    category: "Indoor-Outdoor Living",
    featured: false,
  },
];

const categories = [
  "All",
  "Leadership",
  "Technology",
  "Artificial Intelligence",
  "Prefabrication",
  "Architecture",
  "Mental Health",
  "Innovation",
  "Indoor-Outdoor Living",
];

export default function EpisodesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredEpisodes = episodes.filter((episode) => {
    const matchesSearch =
      episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      episode.guest.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || episode.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
              Episode <span className="text-gradient">Archive</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Explore 387+ conversations with industry leaders, innovative thinkers, and construction experts.
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

      {/* Filters and Episodes */}
      <section className="py-12">
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
            Showing {filteredEpisodes.length} episodes
          </p>

          {/* Episodes Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredEpisodes.map((episode, index) => (
              <motion.article
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-rust/5 ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                {viewMode === "grid" ? (
                  <>
                    {/* Grid View */}
                    <div className="relative h-40 bg-gradient-to-br from-charcoal to-aged-wood p-4">
                      <div className="absolute top-3 left-3 px-2 py-1 bg-rust/90 text-white text-xs font-semibold rounded-full">
                        {episode.category}
                      </div>
                      {episode.featured && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-gold text-charcoal text-xs font-semibold rounded-full">
                          Featured
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-rust-light text-sm">Episode {episode.id}</div>
                        <h3 className="text-lg font-bold text-white font-playfair line-clamp-2">
                          {episode.title}
                        </h3>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-rust/90 flex items-center justify-center shadow-xl">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Mic2 className="w-4 h-4 text-rust" />
                        <span className="font-medium text-charcoal">{episode.guest}</span>
                        {episode.company && (
                          <span className="text-charcoal/60 text-sm">• {episode.company}</span>
                        )}
                      </div>
                      <p className="text-charcoal/70 italic text-sm mb-4 line-clamp-2">
                        "{episode.quote}"
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-rust/10">
                        <div className="flex items-center gap-3 text-xs text-charcoal/60">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {episode.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {episode.duration}
                          </span>
                        </div>
                        <Link
                          href={`/episodes/${episode.id}`}
                          className="text-rust font-medium text-sm hover:text-rust-dark flex items-center gap-1"
                        >
                          Listen
                          <ChevronRight className="w-4 h-4" />
                        </Link>
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
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-rust/90 flex items-center justify-center">
                          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-rust/10 text-rust text-xs font-semibold rounded-full">
                          {episode.category}
                        </span>
                        {episode.featured && (
                          <span className="px-2 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-charcoal font-playfair mb-2">
                        {episode.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-charcoal/70 mb-2">
                        <span className="font-medium">{episode.guest}</span>
                        {episode.company && <span>• {episode.company}</span>}
                      </div>
                      <p className="text-charcoal/60 italic text-sm mb-3">
                        "{episode.quote}"
                      </p>
                      <div className="flex items-center gap-4 text-xs text-charcoal/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {episode.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {episode.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center pr-5">
                      <Link
                        href={`/episodes/${episode.id}`}
                        className="px-4 py-2 bg-rust text-white rounded-full text-sm font-medium hover:bg-rust-dark transition-colors"
                      >
                        Listen Now
                      </Link>
                    </div>
                  </>
                )}
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-charcoal text-white font-semibold rounded-full hover:bg-rust transition-colors shadow-lg">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
