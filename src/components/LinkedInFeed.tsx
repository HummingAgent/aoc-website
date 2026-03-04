"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowRight, Users, MessageSquare, ThumbsUp } from "lucide-react";
import Link from "next/link";

const LINKEDIN_URL = "https://www.linkedin.com/company/theart-of-construction/";

// Featured posts - these can be updated manually or via API in the future
const featuredPosts = [
  {
    id: 1,
    preview: "🎙️ NEW EPISODE: The AI Revolution in Construction with Paul Wirth from Assembly AI. Our most-listened episode of 2025!",
    likes: 127,
    comments: 23,
    date: "2 days ago",
  },
  {
    id: 2,
    preview: "Excited to announce our official AI partner: @HummingAgent! Together we're bringing cutting-edge automation to construction businesses.",
    likes: 89,
    comments: 15,
    date: "1 week ago",
  },
  {
    id: 3,
    preview: "500+ Master Facilitators and counting! Thank you to everyone who's joined the tribe. The future of construction is being built right here.",
    likes: 156,
    comments: 31,
    date: "2 weeks ago",
  },
];

export default function LinkedInFeed() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0077b5]/5 to-[#0077b5]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5]/20 rounded-full text-[#0077b5] text-sm font-semibold mb-4">
            <Linkedin className="w-4 h-4" />
            Connect With Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-playfair mb-4">
            Join the Conversation on <span className="text-[#0077b5]">LinkedIn</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Stay updated with the latest in construction innovation. Follow us for industry insights, episode announcements, and community highlights.
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featuredPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#0077b5]/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-sm">The Art of Construction</div>
                  <div className="text-charcoal/50 text-xs">{post.date}</div>
                </div>
              </div>
              
              <p className="text-charcoal/80 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.preview}
              </p>
              
              <div className="flex items-center gap-4 text-charcoal/50 text-sm">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 text-[#0077b5] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View on LinkedIn
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-colors shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-5 h-5" />
            Follow Us on LinkedIn
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
              <Users className="w-4 h-4 inline mr-1" />
              2.5K+
            </span>
          </a>
          <p className="text-charcoal/50 text-sm mt-3">
            Join thousands of construction professionals in our network
          </p>
        </motion.div>
      </div>
    </section>
  );
}
