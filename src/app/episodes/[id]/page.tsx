"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Play, 
  Pause,
  Calendar, 
  Clock, 
  Mic2,
  ArrowLeft,
  Share2,
  ExternalLink
} from "lucide-react";
import { use } from "react";
import AudioPlayer from "@/components/AudioPlayer";
// linkifyText removed - using raw HTML from RSS feed

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

export default function EpisodePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [relatedEpisodes, setRelatedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    async function fetchEpisode() {
      try {
        const res = await fetch('/api/episodes');
        const data = await res.json();
        const episodes = data.episodes || [];
        const found = episodes.find((ep: Episode) => ep.id === parseInt(resolvedParams.id));
        setEpisode(found || null);
        
        // Get related episodes (same category, excluding current)
        if (found) {
          const related = episodes
            .filter((ep: Episode) => ep.category === found.category && ep.id !== found.id)
            .slice(0, 3);
          setRelatedEpisodes(related);
        }
      } catch (error) {
        console.error('Failed to fetch episode:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchEpisode();
  }, [resolvedParams.id]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = async () => {
    if (navigator.share && episode) {
      try {
        await navigator.share({
          title: episode.title,
          text: `Check out this episode of The Art of Construction: ${episode.title}`,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rust"></div>
      </div>
    );
  }

  if (!episode) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-charcoal mb-4">Episode not found</h1>
        <Link 
          href="/episodes" 
          className="text-rust hover:text-rust-dark flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Episodes
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-header.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-charcoal/95" />
        <div className="absolute inset-0 beam-pattern opacity-10" />
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link 
              href="/episodes" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Episodes
            </Link>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Episode Image */}
              <div className="relative w-full lg:w-80 h-80 rounded-2xl overflow-hidden shadow-2xl shrink-0">
                {episode.imageUrl && (
                  <Image
                    src={episode.imageUrl}
                    alt={episode.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              </div>

              {/* Episode Info */}
              <div className="flex-1">
                {episode.category && (
                  <Link
                    href={`/episodes/category/${episode.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block px-3 py-1 bg-rust/90 text-white text-sm font-semibold rounded-full mb-4 hover:bg-rust transition-colors"
                  >
                    {episode.category}
                  </Link>
                )}
                
                <div className="text-rust-light text-lg mb-2">Episode {episode.id}</div>
                <h1 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
                  {episode.title}
                </h1>

                {episode.guest && (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-rust/20 flex items-center justify-center">
                      <Mic2 className="w-5 h-5 text-rust-light" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{episode.guest}</div>
                      {episode.company && (
                        <div className="text-white/60 text-sm">{episode.company}</div>
                      )}
                    </div>
                  </div>
                )}

                {episode.quote && (
                  <blockquote className="text-white/80 italic text-lg mb-6 border-l-4 border-rust pl-4">
                    "{episode.quote}"
                  </blockquote>
                )}

                <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-6">
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

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleShare}
                    className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <a
                    href={episode.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on AudioBoom
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audio Player Section */}
      <section className="py-8 bg-charcoal border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AudioPlayer
            audioUrl={episode.audioUrl}
            title={episode.title}
            episodeNumber={episode.id}
            guest={episode.guest}
          />
        </div>
      </section>

      {/* Show Notes / Description */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-charcoal font-playfair mb-6">
              Show Notes
            </h2>
            <div 
              className="show-notes-content text-charcoal/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: episode.description }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Episodes */}
      {relatedEpisodes.length > 0 && (
        <section className="py-12 bg-sand-light">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal font-playfair mb-8">
              More in {episode.category}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedEpisodes.map((related) => (
                <Link
                  key={related.id}
                  href={`/episodes/${related.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div className="relative h-32 bg-charcoal">
                    {related.imageUrl && (
                      <Image
                        src={related.imageUrl}
                        alt={related.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                    <div className="absolute bottom-2 left-3 text-rust-light text-sm">
                      Episode {related.id}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-charcoal font-playfair line-clamp-2 group-hover:text-rust transition-colors">
                      {related.title}
                    </h3>
                    {related.guest && (
                      <p className="text-sm text-charcoal/60 mt-1">{related.guest}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe CTA */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal font-playfair mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-charcoal/70 mb-6">
            Subscribe on your favorite platform to get new episodes automatically.
          </p>
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
