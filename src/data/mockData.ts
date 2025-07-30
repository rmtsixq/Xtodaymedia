import { Article, Video, Podcast, TeamMember } from '@/types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Future of Digital Journalism: Adapting to Changing Media Landscapes',
    slug: 'future-digital-journalism-media-landscapes',
    excerpt: 'As traditional media continues to evolve, digital platforms are reshaping how we consume and interact with news. This comprehensive analysis explores the trends shaping journalism\'s future.',
    content: `
      <p>The media landscape has undergone dramatic transformations in the past decade, with digital platforms fundamentally altering how news is produced, distributed, and consumed. As traditional newspapers struggle with declining readership and advertising revenue, digital-first publications are pioneering new approaches to journalism that prioritize engagement, multimedia storytelling, and direct reader relationships.</p>

      <h2>The Rise of Digital-First Publishing</h2>
      <p>Publications that began as digital entities have shown remarkable adaptability, leveraging social media, email newsletters, and innovative subscription models to build sustainable businesses. These organizations understand that modern readers expect immediate access to information, interactive content, and personalized experiences.</p>

      <h2>Challenges and Opportunities</h2>
      <p>While digital transformation presents numerous opportunities, it also introduces new challenges including information overload, the spread of misinformation, and the need for rapid response journalism. News organizations must balance speed with accuracy, engagement with integrity.</p>

      <h2>The Role of Multimedia Storytelling</h2>
      <p>Modern journalism increasingly relies on multimedia elements – videos, podcasts, interactive graphics, and immersive experiences – to engage audiences. This shift requires newsrooms to develop new skills and adopt emerging technologies.</p>

      <p>The future of journalism lies not in choosing between traditional and digital approaches, but in thoughtfully integrating the best of both worlds to serve audiences more effectively than ever before.</p>
    `,
    author: {
      name: 'Sarah Johnson',
      username: 'sarah-johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior Media Analyst with 10+ years covering digital transformation in journalism'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    category: 'Media Analysis',
    tags: ['Digital Media', 'Journalism', 'Future Trends', 'Technology'],
    featuredImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop',
    readTime: 8,
    isEditorsPick: true,
    isFeatured: true
  },
  {
    id: '2',
    title: 'Climate Change and Urban Planning: Building Sustainable Cities',
    slug: 'climate-change-urban-planning-sustainable-cities',
    excerpt: 'Cities worldwide are reimagining urban development to address climate challenges. From green infrastructure to smart transportation, explore innovative solutions for sustainable urban living.',
    content: `
      <p>As urban populations continue to grow and climate change intensifies, cities around the world are facing unprecedented challenges. The need for sustainable urban planning has never been more critical, with metropolitan areas responsible for approximately 70% of global carbon emissions.</p>

      <h2>Green Infrastructure Revolution</h2>
      <p>Forward-thinking cities are implementing green infrastructure solutions that not only reduce environmental impact but also improve quality of life for residents. Green roofs, urban forests, and permeable surfaces are becoming standard elements of modern city planning.</p>

      <h2>Transportation Innovation</h2>
      <p>Public transportation systems are being revolutionized with electric buses, bike-sharing programs, and pedestrian-friendly urban design. These initiatives not only reduce emissions but create more livable, connected communities.</p>

      <h2>Energy Efficiency and Renewable Resources</h2>
      <p>Smart building technologies and renewable energy integration are transforming how cities consume power. Solar panels, wind turbines, and energy-efficient building codes are becoming cornerstones of sustainable development.</p>

      <p>The cities that successfully adapt to these challenges will serve as models for urban development in the climate change era, proving that environmental responsibility and economic prosperity can coexist.</p>
    `,
    author: {
      name: 'Michael Chen',
      username: 'michael-chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Urban Planning Specialist and Environmental Policy Researcher'
    },
    publishedAt: '2024-01-14T14:30:00Z',
    category: 'Environment',
    tags: ['Climate Change', 'Urban Planning', 'Sustainability', 'Green Technology'],
    featuredImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop',
    readTime: 6,
    isEditorsPick: true
  },
  {
    id: '3',
    title: 'The Economics of Remote Work: Long-term Implications for Businesses',
    slug: 'economics-remote-work-business-implications',
    excerpt: 'Remote work has transformed from a pandemic necessity to a permanent fixture of modern employment. Analyzing the economic impacts and future implications for businesses and workers.',
    content: `
      <p>The COVID-19 pandemic accelerated the adoption of remote work practices, fundamentally altering the traditional office-based employment model. As we move forward, businesses and economists are beginning to understand the long-term implications of this shift.</p>

      <h2>Cost-Benefit Analysis for Employers</h2>
      <p>Companies are discovering significant cost savings through reduced office space requirements, lower utility costs, and decreased overhead expenses. However, these savings must be weighed against investments in digital infrastructure and potential productivity challenges.</p>

      <h2>Impact on Employee Satisfaction and Retention</h2>
      <p>Studies show that remote work options significantly impact employee satisfaction and retention rates. Workers value the flexibility and improved work-life balance, leading to reduced turnover and recruitment costs for employers.</p>

      <h2>Geographic Distribution of Talent</h2>
      <p>Remote work has enabled companies to access talent pools beyond their immediate geographic area, leading to increased competition for skilled workers but also greater opportunities for businesses to find specialized expertise.</p>

      <p>As remote work becomes a permanent feature of the employment landscape, businesses must adapt their strategies to maximize the benefits while addressing the challenges of distributed teams.</p>
    `,
    author: {
      name: 'Emily Rodriguez',
      username: 'emily-rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Labor Economics Researcher and Workplace Trends Analyst'
    },
    publishedAt: '2024-01-13T09:15:00Z',
    category: 'Business',
    tags: ['Remote Work', 'Economics', 'Workplace Trends', 'Business Strategy'],
    featuredImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop',
    readTime: 7
  },
  {
    id: '4',
    title: 'Artificial Intelligence in Healthcare: Revolutionizing Patient Care',
    slug: 'ai-healthcare-revolutionizing-patient-care',
    excerpt: 'AI technologies are transforming healthcare delivery, from diagnostic accuracy to personalized treatment plans. Exploring the current applications and future potential of AI in medicine.',
    content: `
      <p>Artificial intelligence is rapidly transforming healthcare, offering unprecedented opportunities to improve patient outcomes, reduce costs, and enhance the efficiency of medical practice. From diagnostic imaging to drug discovery, AI applications are revolutionizing every aspect of healthcare delivery.</p>

      <h2>Diagnostic Excellence Through Machine Learning</h2>
      <p>AI-powered diagnostic tools are achieving remarkable accuracy in detecting diseases, often surpassing human specialists in specific areas. Medical imaging analysis, pathology review, and early disease detection are being revolutionized by sophisticated algorithms.</p>

      <h2>Personalized Treatment and Precision Medicine</h2>
      <p>AI enables healthcare providers to develop personalized treatment plans based on individual patient data, genetic information, and treatment response patterns. This approach promises more effective treatments with fewer side effects.</p>

      <h2>Operational Efficiency and Cost Reduction</h2>
      <p>Healthcare systems are leveraging AI to optimize scheduling, reduce administrative burdens, and streamline operations. These improvements can significantly reduce costs while improving patient experience.</p>

      <p>As AI technology continues to advance, its integration into healthcare will likely accelerate, offering new possibilities for improving human health and extending lifespans.</p>
    `,
    author: {
      name: 'Dr. James Wilson',
      username: 'james-wilson',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      bio: 'Healthcare Technology Specialist and Medical AI Researcher'
    },
    publishedAt: '2024-01-12T16:45:00Z',
    category: 'Technology',
    tags: ['Artificial Intelligence', 'Healthcare', 'Medical Technology', 'Innovation'],
    featuredImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
    readTime: 9
  }
];

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'The Future of Renewable Energy: A Global Perspective',
    description: 'Join our expert panel as they discuss the latest developments in renewable energy technology and its impact on global climate goals.',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder YouTube ID
    thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=480&h=360&fit=crop',
    author: {
      name: 'Energy Desk Team',
      username: 'energy-desk',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-14T11:00:00Z',
    category: 'Environment',
    duration: '28:45',
    views: 15420
  },
  {
    id: '2',
    title: 'Tech Startup Success Stories: Lessons from Silicon Valley',
    description: 'Hear from successful entrepreneurs about their journey from idea to IPO, including the challenges they faced and strategies that led to success.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=480&h=360&fit=crop',
    author: {
      name: 'Business Insider Team',
      username: 'business-insider',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-13T15:30:00Z',
    category: 'Business',
    duration: '35:12',
    views: 23150
  },
  {
    id: '3',
    title: 'Climate Change Impact on Global Food Systems',
    description: 'An in-depth analysis of how changing weather patterns are affecting agriculture worldwide and what this means for food security.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=480&h=360&fit=crop',
    author: {
      name: 'Science Report',
      username: 'science-report',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-12T10:15:00Z',
    category: 'Science',
    duration: '22:38',
    views: 18760
  }
];

export const mockPodcasts: Podcast[] = [
  {
    id: '1',
    title: 'The Digital Transformation Series: Episode 12 - AI Ethics',
    description: 'We dive deep into the ethical implications of artificial intelligence, discussing bias, privacy, and the responsibility of tech companies in developing AI systems.',
    spotifyEpisodeId: '4uLU6hMCjMI75M1A2tKUQC', // Placeholder Spotify ID
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop',
    host: {
      name: 'Alex Thompson',
      username: 'alex-thompson',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-15T06:00:00Z',
    category: 'Technology',
    duration: '42:15',
    season: 2,
    episode: 12
  },
  {
    id: '2',
    title: 'Global Politics Weekly: Democracy in the Digital Age',
    description: 'How social media and digital platforms are influencing democratic processes around the world. Features interviews with political scientists and digital rights advocates.',
    spotifyEpisodeId: '4uLU6hMCjMI75M1A2tKUQC',
    thumbnail: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=300&h=300&fit=crop',
    host: {
      name: 'Maria Santos',
      username: 'maria-santos',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-14T07:30:00Z',
    category: 'Politics',
    duration: '38:22',
    season: 3,
    episode: 8
  },
  {
    id: '3',
    title: 'Health & Wellness Today: Mental Health in the Workplace',
    description: 'Exploring strategies for maintaining mental health in professional environments, featuring insights from workplace psychologists and wellness experts.',
    spotifyEpisodeId: '4uLU6hMCjMI75M1A2tKUQC',
    thumbnail: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop',
    host: {
      name: 'Dr. Lisa Park',
      username: 'lisa-park',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-13T12:00:00Z',
    category: 'Health',
    duration: '45:18',
    season: 1,
    episode: 15
  }
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jennifer Adams',
    role: 'Editor-in-Chief',
    bio: 'Jennifer brings over 15 years of editorial experience to our team. She previously served as senior editor at major publications and is passionate about investigative journalism and digital media innovation.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face',
    email: 'jennifer.adams@mediawebsite.com',
    socialLinks: {
      twitter: 'https://twitter.com/jadams_editor',
      linkedin: 'https://linkedin.com/in/jennifer-adams-editor'
    }
  },
  {
    id: '2',
    name: 'David Kim',
    role: 'Managing Editor',
    bio: 'David oversees our daily operations and content strategy. With a background in both traditional and digital journalism, he ensures our editorial standards while embracing new storytelling formats.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    email: 'david.kim@mediawebsite.com',
    socialLinks: {
      twitter: 'https://twitter.com/dkim_news',
      linkedin: 'https://linkedin.com/in/david-kim-journalist'
    }
  },
  {
    id: '3',
    name: 'Rachel Foster',
    role: 'Senior Reporter',
    bio: 'Rachel specializes in environmental and science reporting. Her work has been recognized with several journalism awards, and she holds a master\'s degree in Environmental Science.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    email: 'rachel.foster@mediawebsite.com',
    socialLinks: {
      twitter: 'https://twitter.com/rfoster_env',
      website: 'https://rachelfoster.journalist.com'
    }
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    role: 'Video Producer',
    bio: 'Marcus leads our video content creation and multimedia storytelling initiatives. He has a background in documentary filmmaking and brings cinematic quality to our digital content.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    email: 'marcus.johnson@mediawebsite.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/marcus-johnson-producer',
      website: 'https://marcusjohnsonfilms.com'
    }
  },
  {
    id: '5',
    name: 'Sophie Chen',
    role: 'Podcast Host & Producer',
    bio: 'Sophie creates and hosts our flagship podcasts, bringing complex topics to life through engaging conversations. She has a talent for making expert insights accessible to general audiences.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    email: 'sophie.chen@mediawebsite.com',
    socialLinks: {
      twitter: 'https://twitter.com/sophie_podcasts',
      linkedin: 'https://linkedin.com/in/sophie-chen-podcaster'
    }
  },
  {
    id: '6',
    name: 'Thomas Wright',
    role: 'Technology Editor',
    bio: 'Thomas covers the latest developments in technology and their societal impact. He has a computer science background and excels at explaining complex technical concepts to broad audiences.',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face',
    email: 'thomas.wright@mediawebsite.com',
    socialLinks: {
      twitter: 'https://twitter.com/twright_tech',
      website: 'https://thomaswright.tech'
    }
  }
];