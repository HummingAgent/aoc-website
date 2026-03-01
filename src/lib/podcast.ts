import Parser from 'rss-parser';

export interface Episode {
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

export interface PodcastFeed {
  title: string;
  description: string;
  link: string;
  image: string;
  author: string;
  email: string;
  episodes: Episode[];
}

const RSS_FEED_URL = 'https://audioboom.com/channels/3045781.rss';

// Parse duration from seconds to readable format
function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  if (mins >= 60) {
    const hrs = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hrs}h ${remainingMins}m`;
  }
  return `${mins} min`;
}

// Extract quote from description
function extractQuote(description: string): string | undefined {
  // Look for text between quotes in strong tags at the start (most common pattern)
  const match = description.match(/<strong>"([^"]+)"<\/strong>/);
  if (match && !match[1].includes('http') && !match[1].includes('linkedin')) {
    return match[1];
  }
  // Try to find a quote that's NOT a URL - look for sentences that start with capital and end with period
  const match2 = description.match(/"([A-Z][^"]{20,200}[.!?])"/);
  if (match2 && !match2[1].includes('http') && !match2[1].includes('linkedin') && !match2[1].includes('.com')) {
    return match2[1];
  }
  return undefined;
}

// Try to extract guest name from description
function extractGuest(description: string, title: string): { guest?: string; company?: string } {
  // Look for "chats with [Name] of [Company]" pattern
  const match = description.match(/chats with[^<]*<a[^>]*>([^<]+)<\/a>[^<]*(?:of\s*)?<a[^>]*>([^<]+)<\/a>/i);
  if (match) {
    return { guest: match[1].trim(), company: match[2].trim() };
  }
  
  // Try simpler pattern
  const match2 = description.match(/chats with\s+([A-Z][a-z]+\s+[A-Z][a-z]+)/);
  if (match2) {
    return { guest: match2[1] };
  }
  
  return {};
}

// Categorize episode based on title/description
function categorizeEpisode(title: string, description: string): string {
  const text = (title + ' ' + description).toLowerCase();
  
  if (text.includes('ai ') || text.includes('artificial intelligence')) return 'Artificial Intelligence';
  if (text.includes('prefab') || text.includes('offsite') || text.includes('modular')) return 'Prefabrication';
  if (text.includes('mental health') || text.includes('trauma') || text.includes('suicide')) return 'Mental Health';
  if (text.includes('architect')) return 'Architecture';
  if (text.includes('technology') || text.includes('software') || text.includes('tech')) return 'Technology';
  if (text.includes('leadership') || text.includes('operating principles')) return 'Leadership';
  if (text.includes('housing') || text.includes('affordab')) return 'Housing';
  if (text.includes('golf') || text.includes('indoor') || text.includes('outdoor')) return 'Indoor-Outdoor Living';
  if (text.includes('veteran')) return 'Veterans';
  if (text.includes('schedule') || text.includes('scheduling')) return 'Project Management';
  
  return 'Business';
}

export async function fetchPodcastFeed(): Promise<PodcastFeed> {
  const parser = new Parser({
    customFields: {
      item: [
        ['itunes:episode', 'episodeNumber'],
        ['itunes:duration', 'duration'],
        ['itunes:image', 'image', { keepArray: false }],
        ['enclosure', 'enclosure'],
      ],
    },
  });

  const feed = await parser.parseURL(RSS_FEED_URL);

  const episodes: Episode[] = feed.items.map((item) => {
    const episodeNum = parseInt(item.episodeNumber || '0', 10);
    const description = item.content || item.contentSnippet || '';
    const { guest, company } = extractGuest(description, item.title || '');
    const quote = extractQuote(description);
    const category = categorizeEpisode(item.title || '', description);
    
    // Duration might be in seconds or already formatted
    let durationStr = '';
    if (item.duration) {
      const durationNum = parseInt(item.duration, 10);
      if (!isNaN(durationNum)) {
        durationStr = formatDuration(durationNum);
      } else {
        durationStr = item.duration;
      }
    }

    return {
      id: episodeNum,
      title: (item.title || '').replace(/^\d+:\s*/, ''), // Remove episode number prefix
      description: item.contentSnippet || '',
      pubDate: item.pubDate || '',
      duration: durationStr,
      audioUrl: item.enclosure?.url || '',
      imageUrl: item.image?.href || (item.image as any)?.$?.href || '/images/podcast-cover.jpg',
      link: item.link || '',
      guest,
      company,
      quote,
      category,
    };
  });

  return {
    title: feed.title || 'The Art of Construction',
    description: feed.description || '',
    link: feed.link || 'https://theartofconstruction.net',
    image: feed.image?.url || '/images/podcast-cover.jpg',
    author: 'Devon Tilly',
    email: 'devon@theaoc.us',
    episodes,
  };
}

// Social links extracted from the RSS feed
export const socialLinks = {
  instagram: 'https://www.instagram.com/aocmasterfacilitators/',
  facebook: 'https://www.facebook.com/TheArtofConstructionmvwd',
  linkedin: 'https://www.linkedin.com/company/theart-of-construction/',
  applePodcasts: 'https://podcasts.apple.com/us/podcast/the-art-of-construction/id932645265',
  spotify: 'https://open.spotify.com/show/7BlCk55C41hoPZrs7GqSeB',
  youtube: 'https://www.youtube.com/@theartofconstruction',
};

export const rssFeedUrl = RSS_FEED_URL;
