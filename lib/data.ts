export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featuredImage: string;
  isEditorsPick: boolean;
  views?: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  duration: string;
  views: number;
  publishedAt: string;
  thumbnail: string;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  spotifyId: string;
  season: number;
  episode: number;
  duration: string;
  publishedAt: string;
  thumbnail: string;
}

export interface TeamMember {
  id: string;
  name: string;
  username: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    email: string;
  };
}

export const categories = [
  'STEM', 
  'Social Studies', 
  'Politics', 
  'Philosophy', 
  'Art & Literature', 
  'Women Rights',
  'Science & Technology'
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'From Slave Shouts to Concert Halls: The Social Evolution of Jazz',
    slug: 'social-evolution-of-jazz',
    excerpt: 'Dating back to ancient history, music has been a primary tool for expressing humans\' social provisions and living conditions.',
    content: `Jazz music represents one of the most profound examples of artistic expression emerging from struggle and resilience. From its origins in the fields and plantations of the American South to its eventual recognition in prestigious concert halls worldwide, jazz has undergone a remarkable social transformation.

## The Origins of Jazz

The roots of jazz can be traced back to the late 19th and early 20th centuries, emerging from African American communities in the Southern United States. Born from a confluence of musical traditions - African rhythms, European harmonies, and American folk music - jazz represented more than just entertainment; it was a voice for the voiceless.

The earliest forms of jazz grew out of work songs, spirituals, and field hollers that enslaved people used to communicate, maintain morale, and preserve their cultural identity. These musical expressions served as coded messages, emotional outlets, and communal bonding experiences during one of the darkest periods in American history.

## The Great Migration and Urban Jazz

As African Americans moved north during the Great Migration, they brought their musical traditions with them. Cities like New Orleans, Chicago, and New York became breeding grounds for jazz innovation. The music began to evolve, incorporating new instruments, complex harmonies, and sophisticated rhythms.

Jazz clubs became cultural sanctuaries where African American artists could express themselves freely, even as segregation laws limited their opportunities elsewhere. These venues served as proving grounds for legendary musicians like Louis Armstrong, Duke Ellington, and Bessie Smith.

## Breaking Barriers

The mid-20th century saw jazz begin to break down racial barriers in unprecedented ways. Musicians like Benny Goodman integrated their bands, bringing Black and white musicians together on stage at a time when such collaboration was revolutionary. The music's intellectual complexity and emotional depth began to earn respect from mainstream audiences and critics.

## Jazz in Concert Halls

The transformation from street music to concert hall performance reached its pinnacle with artists like Miles Davis, John Coltrane, and Charlie Parker. Their innovations elevated jazz to an art form worthy of academic study and formal presentation. Today, jazz is taught in universities, performed in symphony halls, and recognized as America's classical music.

## Legacy and Impact

The social evolution of jazz mirrors the broader struggle for civil rights and cultural recognition in America. What began as the musical expression of oppressed people has become a symbol of artistic freedom, cultural exchange, and human resilience. Jazz's journey from the margins to the mainstream demonstrates the power of authentic artistic expression to transcend social barriers and unite people across racial and cultural divides.

The story of jazz is ultimately a story of triumph - not just of music over silence, but of dignity over oppression, creativity over conformity, and hope over despair. It reminds us that the most powerful art often emerges from the deepest struggles, and that cultural expression can be a force for social change.`,
    author: {
      name: 'Maya Johnson',
      username: 'mayajohnson',
      avatar: '/avatars/maya.jpg'
    },
    category: 'Art & Literature',
    tags: ['jazz', 'music history', 'civil rights', 'cultural studies'],
    publishedAt: '2024-01-15',
    readTime: 8,
    featuredImage: '/images/jazz-evolution.jpg',
    isEditorsPick: true,
    views: 1243
  },
  {
    id: '2',
    title: 'Vegan Ecofeminism: The Intersection of Gender, Animal, and Environmental Justice',
    slug: 'vegan-ecofeminism-intersection',
    excerpt: 'Veganism and feminism do not seem to be interrelated, yet they are linked on deep ethical grounds.',
    content: `The relationship between feminism, environmentalism, and animal rights may not be immediately apparent, but these movements share profound philosophical and practical connections. Vegan ecofeminism emerges as a framework that recognizes the interconnected nature of various forms of oppression and exploitation.

## Understanding Ecofeminism

Ecofeminism emerged in the 1970s as a movement that draws connections between the oppression of women and the degradation of the environment. Scholars like Carolyn Merchant and Vandana Shiva argued that patriarchal societies have historically dominated both women and nature, viewing both as resources to be controlled and exploited.

This perspective suggests that the same mindset that leads to the subjugation of women also drives environmental destruction. Both women and nature are often characterized as irrational, chaotic, and in need of masculine control and domination.

## The Animal Connection

Vegan ecofeminism extends this analysis to include the treatment of animals in our society. The connections become clear when we examine:

### Language and Symbolism
The language used to describe women, animals, and nature often overlaps. Terms like "cow," "pig," and "chicken" are used as derogatory terms for women. Women are often described in animalistic terms when their behavior doesn't conform to social expectations.

### Reproductive Control
Both women and female animals have their reproductive capacities controlled and exploited. The dairy and egg industries rely on the continuous impregnation and exploitation of female animals, paralleling historical and contemporary attempts to control women's reproductive choices.

### Objectification
Women and animals are both objectified and commodified. Women's bodies are reduced to their sexual and reproductive functions, while animals are reduced to their economic value as food, clothing, or entertainment.

## Environmental Justice

The environmental aspect of vegan ecofeminism highlights how environmental degradation disproportionately affects marginalized communities, including women. Climate change, pollution, and resource depletion impact women more severely due to existing inequalities.

Animal agriculture contributes significantly to environmental problems:
- Greenhouse gas emissions
- Deforestation
- Water pollution and scarcity
- Soil degradation
- Biodiversity loss

## Intersectional Analysis

Vegan ecofeminism employs an intersectional approach, recognizing that different forms of oppression are interconnected. It acknowledges that:

- Environmental racism affects communities of color disproportionately
- Women in developing countries bear the brunt of climate change impacts
- Indigenous communities face displacement for agricultural expansion
- Workers in animal agriculture, often marginalized people, face dangerous working conditions

## Practical Implications

This framework suggests that addressing one form of oppression without considering others is insufficient. True justice requires:

1. **Dietary Choices**: Adopting plant-based diets to reduce harm to animals and the environment
2. **Political Action**: Supporting policies that protect women's rights, animal welfare, and environmental health
3. **Economic Justice**: Promoting fair labor practices and economic systems that don't exploit workers, animals, or the environment
4. **Educational Advocacy**: Raising awareness about the connections between different forms of oppression

## Challenges and Criticisms

Critics argue that vegan ecofeminism may oversimplify complex issues or impose privileged perspectives on others. Some concerns include:

- Economic accessibility of vegan diets
- Cultural and traditional practices involving animals
- Practical challenges for marginalized communities
- Risk of cultural imperialism

## Moving Forward

Despite these challenges, vegan ecofeminism offers valuable insights into the interconnected nature of justice issues. It encourages us to think holistically about the systems that perpetuate oppression and to seek solutions that address multiple forms of injustice simultaneously.

The movement calls for a transformation of our relationship with the natural world, moving from domination to cooperation, from exploitation to respect. It envisions a world where the liberation of women, animals, and the environment are understood as interconnected goals rather than separate struggles.

By recognizing these connections, we can work toward more comprehensive and effective strategies for creating a just and sustainable world for all beings.`,
    author: {
      name: 'Dr. Sarah Green',
      username: 'sarahgreen',
      avatar: '/avatars/sarah.jpg'
    },
    category: 'Women Rights',
    tags: ['ecofeminism', 'veganism', 'environmental justice', 'intersectionality'],
    publishedAt: '2024-01-12',
    readTime: 12,
    featuredImage: '/images/ecofeminism.jpg',
    isEditorsPick: true,
    views: 892
  },
  {
    id: '3',
    title: 'Deepening into How AI Understands Different Contexts',
    slug: 'ai-understanding-contexts',
    excerpt: 'As humans, we can understand the contextual meanings of concepts through living and connecting.',
    content: `Artificial Intelligence has made remarkable strides in recent years, but one of the most fascinating and challenging aspects of AI development is context understanding. While humans naturally comprehend context through experience and intuition, AI systems must be explicitly trained to recognize and interpret contextual nuances.

## The Challenge of Context

Context is everything that surrounds and gives meaning to information. For humans, context comes naturally - we understand that the word "bank" means something different when talking about rivers versus finance, or that sarcasm changes the meaning of words entirely. For AI, this contextual understanding represents one of the greatest challenges in achieving human-like intelligence.

## How AI Processes Context

### Statistical Patterns
Traditional AI approaches rely heavily on statistical patterns in data. Machine learning models analyze vast amounts of text to identify correlations between words, phrases, and meanings. While effective for many applications, this approach can miss subtle contextual cues that humans would easily recognize.

### Neural Networks and Deep Learning
Modern AI systems use neural networks that can process multiple layers of information simultaneously. These networks can capture more complex relationships between words and concepts, allowing for better contextual understanding. Transformer models, like those used in GPT systems, have been particularly successful in this regard.

### Attention Mechanisms
One of the most significant breakthroughs in AI context understanding has been the development of attention mechanisms. These allow AI models to focus on relevant parts of the input when making decisions, much like how humans pay attention to specific details when understanding context.

## Types of Context AI Must Navigate

### Linguistic Context
This includes understanding how words relate to each other within sentences and paragraphs. AI must recognize:
- Syntax and grammar rules
- Semantic relationships between words
- Pronoun references and anaphora resolution
- Discourse markers and transitions

### Situational Context
AI systems must understand the broader situation in which communication occurs:
- Time and place references
- Cultural and social contexts
- Domain-specific knowledge
- Pragmatic implications

### Emotional Context
Understanding emotions and sentiment requires AI to recognize:
- Tone and mood indicators
- Emotional subtext
- Sarcasm and irony
- Empathetic responses

## Current Capabilities and Limitations

### Strengths
Modern AI systems excel at:
- Processing large amounts of contextual information quickly
- Identifying patterns across multiple languages and domains
- Maintaining context across long conversations or documents
- Adapting to new contexts through fine-tuning

### Limitations
However, AI still struggles with:
- Understanding implicit context that humans take for granted
- Recognizing when context has shifted subtly
- Handling ambiguous or contradictory information
- Applying common sense reasoning
- Understanding cultural nuances and unspoken assumptions

## Real-World Applications

### Natural Language Processing
AI context understanding powers many applications we use daily:
- Search engines that understand query intent
- Virtual assistants that maintain conversation context
- Translation systems that preserve meaning across languages
- Content recommendation systems

### Healthcare
In medical applications, contextual AI can:
- Analyze patient symptoms in context of medical history
- Understand treatment outcomes in specific patient populations
- Interpret medical literature with domain-specific context

### Education
Educational AI systems use context to:
- Adapt content to individual learning styles
- Understand student questions in educational context
- Provide personalized feedback based on progress

## The Future of Contextual AI

### Multimodal Understanding
Future AI systems will likely integrate multiple types of input - text, images, audio, and video - to build richer contextual understanding. This multimodal approach could help AI better understand situations the way humans do.

### Cultural Competence
Developing AI that understands cultural context will be crucial for global applications. This includes understanding cultural norms, values, and communication styles that vary across different societies.

### Ethical Considerations
As AI becomes better at understanding context, we must consider:
- Privacy implications of contextual analysis
- Bias in contextual interpretation
- Transparency in AI decision-making
- The right to contextual privacy

## Philosophical Implications

The development of contextual AI raises profound questions about the nature of understanding itself:
- What does it mean for a machine to "understand" context?
- Can AI ever truly comprehend meaning without lived experience?
- How do we measure genuine understanding versus sophisticated pattern matching?

## Conclusion

While AI has made significant progress in contextual understanding, it remains one of the frontier challenges in artificial intelligence. The ability to understand context is fundamental to human communication and intelligence, and replicating this capability in machines represents both a technical challenge and a philosophical puzzle.

As we continue to develop more sophisticated AI systems, the goal is not necessarily to replicate human contextual understanding exactly, but to create systems that can effectively navigate and interpret context in ways that are useful, reliable, and ethical. The journey toward contextual AI understanding is ongoing, with each advancement bringing us closer to more natural and effective human-AI interaction.`,
    author: {
      name: 'Alex Chen',
      username: 'alexchen',
      avatar: '/avatars/alex.jpg'
    },
    category: 'Science & Technology',
    tags: ['artificial intelligence', 'machine learning', 'natural language processing', 'context'],
    publishedAt: '2024-01-10',
    readTime: 15,
    featuredImage: '/images/ai-context.jpg',
    isEditorsPick: true,
    views: 1567
  }
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'Understanding Climate Change: A Scientific Perspective',
    description: 'An in-depth look at the scientific consensus on climate change and its implications for our future.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Science & Technology',
    duration: '15:42',
    views: 12543,
    publishedAt: '2024-01-08',
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fshopequo.com%2Fblogs%2Fblog%2Fwhat-is-climate-change%3Fsrsltid%3DAfmBOopYGMLwfI64fV4RyO81E_HpQ2YW801KLYnwrUkvvWNODYwJrbPz&psig=AOvVaw1rF5ejXjMWr0NLqfXsfFv1&ust=1753962235318000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJidwNHA5I4DFQAAAAAdAAAAABAE'
  },
  {
    id: '2',
    title: 'The Art of Political Discourse in Modern Democracy',
    description: 'Exploring how political conversation has evolved in the digital age and its impact on democratic processes.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Politics',
    duration: '22:15',
    views: 8901,
    publishedAt: '2024-01-05',
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ragan.com%2Fpolitical-discourse-at-work-managing-the-2024-election%2F&psig=AOvVaw0iMcHzfEKzfNDl2OKagp8u&ust=1753962270122000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICd4-LA5I4DFQAAAAAdAAAAABAE'
  }
];

export const podcasts: Podcast[] = [
  {
    id: '1',
    title: 'Women in STEM: Breaking Barriers',
    description: 'A conversation with leading female scientists about their experiences and the future of women in STEM fields.',
    spotifyId: '4rOoJ6Egrf8K2IrywzwOMk',
    season: 1,
    episode: 5,
    duration: '45:30',
    publishedAt: '2024-01-06',
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1BmMUpx0I9c&psig=AOvVaw2-vlQ4A3p-uICZ0MIRYJZD&ust=1753962298299000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJjN0-_A5I4DFQAAAAAdAAAAABAE'
  },
  {
    id: '2',
    title: 'Philosophy in Daily Life: Ancient Wisdom for Modern Problems',
    description: 'How ancient philosophical principles can help us navigate contemporary challenges and ethical dilemmas.',
    spotifyId: '4rOoJ6Egrf8K2IrywzwOMk',
    season: 1,
    episode: 3,
    duration: '38:22',
    publishedAt: '2024-01-03',
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplypsychology.org%2Fwhatispsychology.html&psig=AOvVaw24C0grRXFj1DS15G9I0T6e&ust=1753962318952000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOi7wPnA5I4DFQAAAAAdAAAAABAE'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Maya Johnson',
    username: 'mayajohnson',
    role: 'Editor-in-Chief',
    bio: 'Dr. Johnson is a cultural historian specializing in African American music and social movements. She holds a PhD from Columbia University and has published extensively on the intersection of art and social justice.',
    avatar: '/avatars/maya.jpg',
    expertise: ['Cultural History', 'Music Studies', 'Social Justice', 'Civil Rights'],
    social: {
      twitter: 'https://twitter.com/mayajmusic',
      linkedin: 'https://linkedin.com/in/mayajohnson',
      email: 'maya@xtimes.org'
    }
  },
  {
    id: '2',
    name: 'Dr. Sarah Green',
    username: 'sarahgreen',
    role: 'Senior Writer - Environmental Justice',
    bio: 'Environmental scientist and feminist scholar with over 15 years of experience in sustainability research. Dr. Green is passionate about the intersection of environmental and social justice.',
    avatar: '/avatars/sarah.jpg',
    expertise: ['Environmental Science', 'Ecofeminism', 'Sustainability', 'Climate Policy'],
    social: {
      twitter: 'https://twitter.com/sarahgreen_eco',
      linkedin: 'https://linkedin.com/in/drsarahgreen',
      email: 'sarah@xtimes.org'
    }
  },
  {
    id: '3',
    name: 'Alex Chen',
    username: 'alexchen',
    role: 'Technology Editor',
    bio: 'AI researcher and technology journalist with expertise in machine learning and ethics. Alex brings complex technical concepts to general audiences through clear, engaging writing.',
    avatar: '/avatars/alex.jpg',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Tech Ethics', 'Digital Society'],
    social: {
      twitter: 'https://twitter.com/alexchentech',
      linkedin: 'https://linkedin.com/in/alexchen-ai',
      email: 'alex@xtimes.org'
    }
  }
];

export const featuredContent = {
  hero: {
    title: 'The Middle East\'s largest student-led academic journal',
    subtitle: 'Delivering trustworthy journalism through articles, videos, and podcasts with a focus on user experience and accessibility.',
    image: '/images/hero-bg.jpg'
  },
  editorsPicks: articles.filter(article => article.isEditorsPick),
  latestArticles: articles.slice(0, 6),
  featuredVideo: videos[0],
  featuredPodcast: podcasts[0]
};