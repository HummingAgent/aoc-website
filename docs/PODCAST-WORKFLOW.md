# AOC Podcast Upload Workflow

## Overview

The AOC website automatically pulls episodes from AudioBoom's RSS feed. Episodes appear on the site within 1 hour of being published to AudioBoom.

## Workflow for Chloe

### Step 1: Record in Riverside
1. Devon records episode in Riverside
2. Export the final audio file

### Step 2: Upload to AudioBoom
1. Go to [AudioBoom](https://audioboom.com) and log in
2. Channel: Art of Construction (ID: 3045781)
3. Click "Upload" and select the audio file
4. Fill in episode details:
   - **Title**: Format as `[Episode #]: [Guest Name] - [Topic]`
   - **Description**: Include guest bio, company, and key quote
   - **Episode number**: Sequential (check last episode)
   - **Cover image**: Upload episode-specific art if available

### Step 3: Automatic Website Update
- The website checks AudioBoom RSS feed every hour
- New episodes appear automatically
- No manual website updates needed!

### Episode Auto-Categorization
The website automatically categorizes episodes based on keywords:
- **AI/Technology**: Episodes mentioning AI, software, tech
- **Prefabrication**: Modular, offsite, prefab topics
- **Leadership**: Operating principles, leadership stories
- **Mental Health**: Wellness, trauma, mental health topics
- **Architecture**: Architect guests or design focus
- etc.

### Guest Info Extraction
The website automatically extracts:
- Guest name (from "chats with [Name]" pattern)
- Company name (from links in description)
- Key quote (from text in quotes)

**Pro tip**: Format descriptions consistently for best auto-extraction:
```
Devon Tilly chats with <a href="linkedin-url">Guest Name</a> of <a href="company-url">Company Name</a>.

<strong>"A great quote from the episode."</strong>

[Rest of description...]
```

## RSS Feed
- URL: `https://audioboom.com/channels/3045781.rss`
- Cache: 1 hour

## Troubleshooting

### Episode not showing up?
1. Check AudioBoom - is it published (not draft)?
2. Wait up to 1 hour for cache refresh
3. Check if episode number is set correctly

### Wrong category?
- Categories are auto-detected from title/description keywords
- Can be manually adjusted in future CMS update

### Missing guest info?
- Make sure description follows the "chats with" format
- Include guest LinkedIn and company links

## Social Media Automation (Coming Soon)
- Riverside clips → Social posts
- Show notes → Blog posts
- Episode alerts → Email subscribers

---

*Last updated: 2026-03-04*
