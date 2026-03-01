"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag, User, ExternalLink } from "lucide-react";

interface Episode {
  id: number;
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  link: string;
  guest?: string;
  company?: string;
  category?: string;
}

const categories = [
  "All",
  "Leadership",
  "Technology",
  "Artificial Intelligence",
  "Architecture",
  "Mental Health",
  "Business",
];

export default function BlogPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
    return selectedCategory === "All" || episode.category === selectedCategory;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Convert episodes to blog-style posts
  const featuredPosts = filteredEpisodes.slice(0, 2);
  const recentPosts = filteredEpisodes.slice(2, 8);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charcoal to-aged-wood py-20 relative overflow-hidden">
        <div className="absolute inset-0 beam-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-rust rounded-full blur-[150px]"
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              The AOC <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Industry insights, episode highlights, and the latest in construction innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-sand-light border-b border-rust/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-rust text-white"
                    : "bg-white text-charcoal hover:bg-rust hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading */}
      {loading && (
        <section className="py-16 bg-sand-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Posts */}
      {!loading && featuredPosts.length > 0 && (
        <section className="py-16 bg-sand-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-playfair">
                Featured <span className="text-gradient">Articles</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-rust/5"
                >
                  <div className="h-48 bg-gradient-to-br from-charcoal to-aged-wood relative">
                    <div className="absolute top-4 left-4 px-3 py-1 bg-rust text-white text-xs font-semibold rounded-full">
                      Episode {post.id}
                    </div>
                    {post.category && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal font-playfair mb-3 group-hover:text-rust transition-colors">
                      {post.title}
                    </h3>
                    {post.guest && (
                      <p className="text-charcoal/60 text-sm mb-3">
                        Featuring: {post.guest}{post.company && ` of ${post.company}`}
                      </p>
                    )}
                    <p className="text-charcoal/70 mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-rust/10">
                      <div className="flex items-center gap-4 text-sm text-charcoal/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.pubDate)}
                        </span>
                        {post.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.duration}
                          </span>
                        )}
                      </div>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rust font-medium text-sm hover:text-rust-dark flex items-center gap-1"
                      >
                        Listen
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {!loading && recentPosts.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-playfair">
                Recent <span className="text-gradient">Posts</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-rust/5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-rust" />
                    <span className="text-sm text-rust font-medium">{post.category || 'Episode'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal font-playfair mb-2 group-hover:text-rust transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.guest && (
                    <p className="text-charcoal/60 text-sm mb-2">with {post.guest}</p>
                  )}
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-charcoal/60">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.pubDate)}
                    </span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rust font-medium text-sm hover:text-rust-dark flex items-center gap-1"
                    >
                      Listen <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/episodes"
                className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-semibold rounded-full hover:bg-rust transition-colors shadow-lg"
              >
                View All Episodes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
