import { NextResponse } from "next/server";

const AUDIOBOOM_CHANNEL_ID = "3045781";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const response = await fetch(
      `https://api.audioboom.com/channels/${AUDIOBOOM_CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from AudioBoom");
    }

    const data = await response.json();
    const channel = data.body?.channel;

    return NextResponse.json({
      episodes: channel?.channel_clips_count || 387,
      // Downloads require authenticated API access
      // Devon needs to provide API credentials to enable this
      downloads: null,
      downloadsDisplay: "721K+", // Static until we have API access
      title: channel?.title || "The Art of Construction",
      description: channel?.description || "",
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching AudioBoom stats:", error);
    // Return fallback values
    return NextResponse.json({
      episodes: 387,
      downloads: null,
      downloadsDisplay: "721K+",
      title: "The Art of Construction",
      description: "",
      lastUpdated: new Date().toISOString(),
      error: "Using cached values",
    });
  }
}
