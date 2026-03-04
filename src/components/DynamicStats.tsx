"use client";

import { useEffect, useState } from "react";

interface Stats {
  episodes: number;
  downloadsDisplay: string;
}

export function usePodcastStats() {
  const [stats, setStats] = useState<Stats>({
    episodes: 387,
    downloadsDisplay: "721K+",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          episodes: data.episodes || 387,
          downloadsDisplay: data.downloadsDisplay || "721K+",
        });
      })
      .catch(() => {
        // Keep defaults on error
      })
      .finally(() => setLoading(false));
  }, []);

  return { stats, loading };
}

interface DynamicStatProps {
  type: "episodes" | "downloads";
  className?: string;
}

export function DynamicStat({ type, className = "" }: DynamicStatProps) {
  const { stats, loading } = usePodcastStats();

  if (loading) {
    return (
      <span className={`animate-pulse ${className}`}>
        {type === "episodes" ? "387+" : "721K+"}
      </span>
    );
  }

  if (type === "episodes") {
    return <span className={className}>{stats.episodes}+</span>;
  }

  return <span className={className}>{stats.downloadsDisplay}</span>;
}
