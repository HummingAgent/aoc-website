import { NextResponse } from 'next/server';
import { fetchPodcastFeed } from '@/lib/podcast';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const feed = await fetchPodcastFeed();
    return NextResponse.json(feed);
  } catch (error) {
    console.error('Failed to fetch podcast feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch podcast feed' },
      { status: 500 }
    );
  }
}
