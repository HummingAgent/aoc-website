"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";

const posts = [
  {
    slug: "future-of-prefab-construction",
    title: "The Future of Prefab Construction: What to Expect in 2026",
    excerpt: "Offsite construction is evolving rapidly. Here's what industry leaders are predicting for the coming year.",
    author: "Devon Tilly",
    date: "February 24, 2026",
    readTime: "5 min read",
    category: "Industry Trends",
    featured: true,
  },
  {
    slug: "ai-construction-business",
    title: "How AI is Transforming Small Construction Businesses",
    excerpt: "From customer service to project management, AI tools are leveling the playing field for smaller builders.",
    author: "Guest Contributor",
    date: "February 18, 2026",
    readTime: "7 min read",
    category: "Technology",
    featured: true,
  },
  {
    slug: "master-facilitators-spotlight",
    title: "Master Facilitators Spotlight: Building a System Built Empire",
    excerpt: "Meet three community members who've transformed their businesses through offsite construction.",
    author: "AOC Team",
    date: "February 10, 2026",
    readTime: "4 min read",
    category: "Community",
    featured: false,
  },
  {
    slug: "construction-mental-health",
    title: "Breaking the Stigma: Mental Health in Construction",
    excerpt: "The construction industry has one of the highest suicide rates. Here's how we're starting the conversation.",
    author: "Devon Tilly",
    date: "February 3, 2026",
    readTime: "6 min read",
    category: "Mental Health",
    featured: false,
  },
  {
    slug: "podcast-episode-highlights",
    title: "Top 10 Podcast Moments of 2025",
    excerpt: "Looking back at the most impactful conversations and insights from last year's episodes.",
    author: "AOC Team",
    date: "January 28, 2026",
    readTime: "8 min read",
    category: "Podcast",
    featured: false,
  },
  {
    slug: "housing-affordability-solutions",
    title: "5 Innovative Solutions to the Housing Affordability Crisis",
    excerpt: "Construction industry leaders share their approaches to making housing more accessible.",
    author: "Guest Contributor",
    date: "January 20, 2026",
    readTime: "6 min read",
    category: "Innovation",
    featured: false,
  },
];

const categories = [
  "All",
  "Industry Trends",
  "Technology",
  "Community",
  "Mental Health",
  "Podcast",
  "Innovation",
];

export default function BlogPage() {
  const featuredPosts = posts.filter((post) => post.featured);
  const recentPosts = posts.filter((post) => !post.featured);

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
              Industry insights, community stories, and the latest in construction innovation.
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
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-charcoal hover:bg-rust hover:text-white transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
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
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-rust/5"
              >
                <div className="h-48 bg-gradient-to-br from-charcoal to-aged-wood relative">
                  <div className="absolute top-4 left-4 px-3 py-1 bg-rust text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-rust-light text-sm mb-1">{post.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal font-playfair mb-3 group-hover:text-rust transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-charcoal/70 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-rust/10">
                    <div className="flex items-center gap-4 text-sm text-charcoal/60">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-rust font-medium text-sm hover:text-rust-dark flex items-center gap-1"
                    >
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
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
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-rust/5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-rust" />
                  <span className="text-sm text-rust font-medium">{post.category}</span>
                </div>
                <h3 className="text-lg font-bold text-charcoal font-playfair mb-2 group-hover:text-rust transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-charcoal/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-charcoal text-white font-semibold rounded-full hover:bg-rust transition-colors shadow-lg">
              Load More Posts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
