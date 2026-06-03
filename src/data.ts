import { ServiceItem, PortfolioItem, TestimonialItem, FaqItem, ProcessStep, EstimateConfig } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    tagline: "Your dream fairytale brought to life with visual grandeur",
    description: "End-to-end luxury wedding planning, custom themes, royal entries, pre-wedding festivities, and pristine rituals planning.",
    longDescription: "Dwarka Events specializes in creating breathtaking royal and contemporary weddings across Delhi NCR. From premium venue selection to customized floral concepts, guest hospitality management, and wedding choreography, we turn your dreams into reality.",
    iconName: "Heart",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Royal entry setup",
      "Varmala and stage decoration",
      "Sangeet, Haldi & Mehendi coordination",
      "Guest relations & travel desk assistance",
      "Bridal entry concepts and makeup artist coordination"
    ]
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    tagline: "Professional excellence meets pristine execution",
    description: "Flawless annual general meetings, high-tech product launches, corporate seminars, and engaging team-building retreats.",
    longDescription: "Aligning with your corporate values and brand vision, we develop, design, and manage high-impact business forums, seminars, award ceremonies, and employee engagement events on a grand scale.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    features: [
      "State-of-the-art interactive AV & sound setups",
      "Professional keynote stage lighting and backdrop screens",
      "Seamless registration systems & delegate badges",
      "Custom branding installations and media booths",
      "VIP hosting and multi-city catering logistics"
    ]
  },
  {
    id: "birthday-parties",
    title: "Birthday Parties",
    tagline: "Vibrant themes and cheerful celebrations for all ages",
    description: "Whimsical cartoon themes, grand milestone anniversaries, custom cake setups, balloon art, and complete children's entertainment.",
    longDescription: "Whether it is a child's magical 1st birthday, or a grand 50th milestone celebration, we craft thematic, colorful celebrations with outstanding photo backdrops, interactive stalls, and engaging play zones.",
    iconName: "Cake",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Custom 3D theme setup (Superhero, Princess, Jungle, etc.)",
      "Interactive magic shows, puppet play, and tattoo artists",
      "Extravagant dessert counters & matching themes",
      "Premium photo booth & selfie frames",
      "Fun food counters (Popcorn, Candy-floss, Chocolate Fountain)"
    ]
  },
  {
    id: "anniversary-celebrations",
    title: "Anniversary Celebrations",
    tagline: "Honoring milestones of enduring love and legacy",
    description: "Elegant silver, golden, and diamond wedding anniversaries designed with warm acoustic music and emotional retrospectives.",
    longDescription: "Celebrate your beautiful milestone with friends and family. We coordinate nostalgic memories displays, fine dining experiences, elegant floral backdrops, and live classic band performances.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Nostalgic digital wall and photo galleries",
      "Luxurious floral arrangements and warm mood lighting",
      "Custom premium mocktail & food pairing menu",
      "Live acoustic performance or classic instrumental music",
      "Milestone videography and souvenir creation"
    ]
  },
  {
    id: "cultural-programs",
    title: "Cultural Programs",
    tagline: "Vibrant festivals, folk arts, and community celebrations",
    description: "Grand Navratri Dandiya events, Lohri bonfires, Diwali melas, Holi rain dances, and traditional regional folk art presentations.",
    longDescription: "Delhi is rich in community values, and we specialize in grand multi-thousand-guest community festivals, offering massive stage design, stellar light shows, security, and celebrity coordination.",
    iconName: "Music",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Grand designer stage & LED vertical walls",
      "Traditional folk dancers & classical music artists",
      "Authentic festive catering experience",
      "Permissions & security liaison setup",
      "Festive prop setups and experiential photobooths"
    ]
  },
  {
    id: "religious-events",
    title: "Religious Events",
    tagline: "Divine experiences designed with pure devotion",
    description: "Immersive Mata ki Chowki, Jagran, Shrimad Bhagwat Katha, and pious worship spaces beautifully decorated with fresh traditional marigolds.",
    longDescription: "We coordinate religious and spiritual events with utmost purity and custom aesthetics. We supply premium sitting arrangements, exquisite fresh flower decorations, specialized spiritual sound engineering, and elite bhajan singers.",
    iconName: "Milestone",
    image: "https://images.unsplash.com/photo-1609137144813-2dbe4889bf65?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Devotional darbar backdrop & fresh flower installations",
      "High fidelity sound system tailored for spiritual symphonies",
      "Separate premium seating for ladies and elders",
      "Sattvik catering & prasad distribution coordination",
      "Experienced bhajan mandli and musical instrument artists"
    ]
  },
  {
    id: "stage-sound",
    title: "Stage & Sound Setup",
    tagline: "Immersive acoustics and visual majesty",
    description: "Professional concert-grade line array sound, high-density LED backdrop screens, Trussing, and dynamic laser lighting rigs.",
    longDescription: "Perfect sound and spectacular lighting form the heartbeat of every event. We deploy advanced audio mixers, powerful base subwoofers, customized stage platforms, and state-of-the-art visual design tools.",
    iconName: "Volume2",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Concert-grade Line-Array systems (JBL, L-Acoustics)",
      "High refresh-rate outdoor & indoor LED screens (P3, P2.5)",
      "Automated moving-head sharpy beams and profile lights",
      "Rigid aluminum trussing & rotating stages",
      "Dedicated sound engineers and live mixing consoles"
    ]
  },
  {
    id: "event-decoration",
    title: "Event Decoration",
    tagline: "Transforming venues into visual masterworks",
    description: "Magnificent floral pathways, custom drapes, crystal chandeliers, neon art galleries, and bespoke entrance gateways.",
    longDescription: "Our creative decor department designs themes from scratch, utilizing fresh exotic flowers, luxurious drapes, retro candles, and rustic bohemian elements fitting both classical and contemporary tastes.",
    iconName: "Flower",
    image: "https://images.unsplash.com/photo-1520854225860-f3d970dd4098?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Premium imported floral arrangements (Orchids, Carnations, Lilies)",
      "Luxe seating, high-tables, and customized table-linens",
      "Dynamic uplighting, fairylight walls, and neon photobooths",
      "Easel displays, custom signboards, and welcome arches",
      "Theme-based entrance corridors and fabric backdrops"
    ]
  },
  {
    id: "entertainment-management",
    title: "Entertainment & Artists",
    tagline: "Stellar line-ups that keep guests energized and captivated",
    description: "Celebrity DJs, live Bollywood cover bands, instrumental violinists, anchor/emcees, and dazzling live dance troupes.",
    longDescription: "Leave the crowd wanting more with premier entertainment options. We manage complete artist bookings, contracts, travel riders, greenrooms, and live show timers seamlessly.",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Elite Bollywood and Punjabi celebrity live singers",
      "Proactive corporate emcees & standup comics",
      "Exotic LED dance acts & traditional Kathak/Punjabi Bhangra",
      "Interactive photo simulators & virtual reality gaming zones",
      "Energetic DJs with premium live music controllers"
    ]
  },
  {
    id: "catering-coordination",
    title: "Catering Coordination",
    tagline: "Experiential global cuisines that elevate your guest experiences",
    description: "Scrumptious Indian regional buffets, live Oriental woks, Italian mocktail counters, elite dessert tables, and premium service.",
    longDescription: "We partner with NCR's most prestigious culinary experts to design customized menus. Savor everything from street-food chaat counters to elite silver-service gourmet banquets.",
    iconName: "Utensils",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Traditional pure-veg and non-veg customized menu curators",
      "Live interactive interactive food counters & expert chefs",
      "Premium glassware, designer cutlery, and copper-chafing platters",
      "Trained five-star style standard waiting staff",
      "Signature refreshing mocktails and healthy juices bars"
    ]
  },
  {
    id: "venue-management",
    title: "Venue Booking & Liaison",
    tagline: "Exclusive locations matching your grandeur",
    description: "Elite collaborations with Delhi-NCR's top five-star hotels, massive open-air farmhouses, and exquisite banquets.",
    longDescription: "Finding the perfect canvas is step one. We leverage 20+ years of active partnership to secure the most premium event spaces at negotiated industry rates, ensuring seamless permissions.",
    iconName: "MapPin",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Five-star hotels collaborations (Taj, Oberoi, Hyatt, Radisson)",
      "Luxury farmhouses in Chattarpur, Dwarka, and Gurugram",
      "Detailed site inspections with floor layouts mapping",
      "Strict government approval & local fire safety permissions support",
      "Pre-planned indoor/outdoor backup layouts for monsoon times"
    ]
  },
  {
    id: "social-gatherings",
    title: "Social Gatherings",
    tagline: "Intimate and meaningful family reunions",
    description: "Elite kitty parties, retirement celebrations, baby showers, alumni meetups, and elegant private pool parties.",
    longDescription: "Sometimes the most cherished moments are the mini ones. We provide cost-effective yet incredibly styled layouts for warm, personal house-parties and private club bookings.",
    iconName: "Users",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Chic pool deck decoration & cozy tenting",
      "Thematic retro music playlisting & custom karaoke setup",
      "Intimate custom photo walls",
      "Handmade guest welcome hampers & return gifts coordination",
      "Instant polaroid photography and memorial guestbooks"
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-1",
    title: "The Royal Rajput Wedding",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    location: "Chattarpur Farmhouses, South Delhi",
    year: "2025",
    description: "A monumental 3-day wedding featuring grand palatial dome stages, 15,000 meters of premium velvet drapes, and a stellar entry on a royal chariot.",
    highlights: ["Palatial Stage Decor", "200+ Floral Urns", "Celebrity Punjabi Singer Booking", "800+ Guests Catered"]
  },
  {
    id: "port-2",
    title: "Tech Summit & Annual Awards 2026",
    category: "Corporate Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    location: "Leela Ambience, Gurugram",
    year: "2026",
    description: "A state-of-the-art tech conference featuring interactive 3D holographic projection, LED vertical walls, and multi-country delegation management.",
    highlights: ["Holographic Projection Screen", "Interactive Registration App", "Laser Opening Show", "400+ Business Delegates"]
  },
  {
    id: "port-3",
    title: "Whimsical Alice 1st Birthday",
    category: "Birthdays",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    location: "Dwarka Sector 12, Delhi",
    year: "2025",
    description: "A magical forest setup for baby girl Aarya, featuring 40-foot entry castle decor, magical mist machines, and premium interactive carnival game booths.",
    highlights: ["3D Castle Entry Gate", "Imported Balloon Sculptures", "Live Custom Chocolate Factory", "Kids Foam Play Zone"]
  },
  {
    id: "port-4",
    title: "Sufi Symphony & Qawwali Concert",
    category: "Stage Shows",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    location: "Siri Fort Auditorium, New Delhi",
    year: "2025",
    description: "An elegant night of divine music featuring acoustic sound engineering, traditional Mughal theme sitting arrangements, and live acoustic projection maps.",
    highlights: ["Mughdal Theme Decor", "Acoustic Line Array Tuning", "Traditional Diwan Seating", "Live streaming integration"]
  },
  {
    id: "port-5",
    title: "Vasant Utsav Cultural & Dandiya Mela",
    category: "Cultural Events",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    location: "Dwarka DDA Ground, New Delhi",
    year: "2025",
    description: "The largest Navratri celebration in Sector 10 with traditional Gujarati design, energetic live Garba band, food stalls from all states of India, and multi-tier crowd management.",
    highlights: ["2000+ Gatherings Management", "Traditional Dandiya Ornaments", "40+ Food and Handicraft Stalls", "24/7 CCTV & Private Guard Cover"]
  },
  {
    id: "port-6",
    title: "Luxury Pastel Beach-Theme Mehendi",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
    location: "Radisson Blu, Dwarka",
    year: "2026",
    description: "An ultra-chic daytime event with a beautiful pastel pink and lemon yellow theme, pool deck floral canopy drape designs, and custom premium mocktail counters.",
    highlights: ["Pastel Canopy Architecture", "Exotic Flower Swing Photo Op", "Artisanal Custom Mehendi Stalls", "Live Hand-pan Musician"]
  },
  {
    id: "port-7",
    title: "Auto Launch Event: Unveiling 2026",
    category: "Corporate Events",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    location: "Taj Palace, Chanakyapuri, Delhi",
    year: "2026",
    description: "Launch party for an elegant premium luxury vehicle, with cinematic mist effects, automated curtain drop system, and spectacular laser projection choreography.",
    highlights: ["Cinematic Curtain Drop System", "Dynamic Floor Laser Rigging", "Media & Press Lounge Setup", "VIP Cocktails Pairing"]
  },
  {
    id: "port-8",
    title: "A Golden 50th Wedding Anniversary",
    category: "Birthdays", // Or social gatherings, displayed under celebratory category
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=800",
    location: "Welcomhotel by ITC, Dwarka",
    year: "2025",
    description: "A cozy and deeply emotional golden jubilee celebration featuring an elegant gold-trimmed centerpiece lobby, live violin quartet, and customized memoir screening.",
    highlights: ["Stunning Gold Table Centers", "Live Violin Quartet", "Documentary Video Presentation", "Custom Family Crest Backdrop"]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rishi & Tanya Sharma",
    role: "Bride & Groom",
    eventDate: "November 2025",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    comment: "Planning our wedding with Dwarka Events was the best decision we made. Their team treated us like family, and managed every small detail from floral arches to the guest management. Our entry felt absolutely royal, and our guests are still speaking about the catering coordination and pristine decor!"
  },
  {
    id: "test-2",
    name: "Aman Deshmukh",
    role: "Regional HR Director",
    company: "Fintech Growth Corp",
    eventDate: "January 2026",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    comment: "With Dwarka Events leading our annual tech awards gala at Leela Ambience, we did not have to worry about a single detail. The dynamic sound and LED layouts was flawless, and the interactive badge printing machine reduced waiting queues dramatically. Professionalism and performance par excellence!"
  },
  {
    id: "test-3",
    name: "Dr. Preeti Verma",
    role: "Mother of Baby Aarya",
    eventDate: "March 2026",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    comment: "They created a literal fairytale wonderland for my daughter's first birthday. The 3D castle entry gate was show-stopping. The kids loved the chocolate fudge fountain, the face tattoos, and the customized magic play. Extremely neat, punctual, and safe coordination."
  },
  {
    id: "test-4",
    name: "Mr. Satish Malhotra",
    role: "Retired Chief Engineer",
    eventDate: "December 2025",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    comment: "We hosted parents' Golden 50th wedding anniversary, and Dwarka Events managed to keep the aura incredibly warm yet luxurious. The selection of the nostalgic digital photo wall and the live instrumental sitar players was perfect. Truly recommend them for family gatherings."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "1. Premium Consultation",
    duration: "Step One (Initial)",
    description: "We host an introductory coffee chat to hear your vision, theme requirements, guest count, and budgets. We map initial venue styles and creative inspirations.",
    iconName: "HelpCircle", // Coffee/Help
    highlights: ["Budget definition", "Initial theme curation", "Venue style layout", "Date alignment"]
  },
  {
    step: 2,
    title: "2. Strategic Planning & Blueprint",
    duration: "Step Two (Development)",
    description: "Our design architects render digital 2D schemas of the venue stage, curate customized culinary menus, contract core entertainment, and set strict timelines.",
    iconName: "FileText",
    highlights: ["Floral & drapery fabric approval", "Catering menu tastings", "Artist contracts booking", "Complete timeline Gantt chart"]
  },
  {
    step: 3,
    title: "3. Flawless On-Site Execution",
    duration: "Step Three (The Big Day)",
    description: "Our core on-ground crew manages early morning truss builds, sound tuning, guest hospitality checklists, coordinates timing for entries, and handles dynamic emergency protocols.",
    iconName: "Cpu",
    highlights: ["Dedicated event coordinator", "Sound-check and light rehearsal", "Artist hospitality", "Real-time itinerary tracking"]
  },
  {
    step: 4,
    title: "4. Celebration & Reliving Memories",
    duration: "Step Four (Post-Event)",
    description: "You toast with family while we safely unpack structures, coordinate vendor settlements, compile early photography highlights, and review client satisfaction.",
    iconName: "Award",
    highlights: ["Exquisite clean-up & breakdown", "Fast-track photography delivery", "Feedback surveys review", "Lifelong memory archiving"]
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you plan and manage events outside of Delhi NCR?",
    answer: "Our primary expertise and local resources are based in Delhi NCR (Delhi, Noida, Greater Noida, Gurugram, Faridabad, and Ghaziabad) where we have served since 2001. However, we also cater to elegant destination weddings and corporate retreats in Rajasthan (Jaipur, Udaipur) and Uttarakhand (Mussoorie, Dehradun) with custom teams.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How far in advance should we book Dwarka Events?",
    answer: "For grand weddings and peak-season cultural events (October to March), we highly recommend booking 4 to 6 months in advance to secure premium five-star venues and top tier artists. For corporate award evenings and birthdays, 3 to 4 weeks are generally comfortable.",
    category: "Planning"
  },
  {
    id: "faq-3",
    question: "Can we hire you only for Stage Design, Sound Rigging, or Decor?",
    answer: "Absolutely! While we love executing end-to-end event production, we also offer modular premium services such as custom flower decoration, high-density concert Sound & Stage, Trussing, and visual projection maps.",
    category: "Planning"
  },
  {
    id: "faq-4",
    question: "How do you calculate event estimating packages?",
    answer: "Pricing depends on the event venue scale, guest counts (influencing catering, seating & badge printing packages), complexity of staging/sound rigs, and exotic flower quantities. Our interactive Cost Estimator widget on this website helps you calculate immediate baseline budgets!",
    category: "Pricing"
  },
  {
    id: "faq-5",
    question: "Do you coordinate with external five-star catering companies?",
    answer: "Yes. If the five-star venue provides in-house catering, we act as the operational liaison to coordinate uniform waiting staffs, premium buffet layout layouts, timeline alignments, and custom food trials.",
    category: "Decor"
  }
];

export const ESTIMATE_DATA: Record<string, EstimateConfig> = {
  wedding: {
    eventType: "Royal Wedding",
    basePrice: 250000, // Decor & Planning base INR
    guestPriceMultiplier: 1500, // per plate dynamic catering + seating
    availableExtras: [
      { id: "ext-1", name: "Premium Exotic Flower Upgrade", price: 75000, description: "Imported orchids, lilies, and vintage floral pathways." },
      { id: "ext-2", name: "Concert-grade Sound Rig & Trussing", price: 120000, description: "Line-array dynamic sound, automated moving beams & haze." },
      { id: "ext-3", name: "Celebrity Artist Booking & Greenroom", price: 150000, description: "Elite regional or classical singers and active emcee hosting." },
      { id: "ext-4", name: "Multi-camera Cinematic Highlight Film", price: 90000, description: "4K cinematic dji drone footage, premium edits, and photobook." },
      { id: "ext-5", name: "Royal Carriage & Accent Entry Setup", price: 45000, description: "Dry-ice mist fountains, sparkling firework beams, custom carriage." }
    ]
  },
  corporate: {
    eventType: "Corporate Conference / Summit",
    basePrice: 150000,
    guestPriceMultiplier: 1200,
    availableExtras: [
      { id: "ext-1", name: "High-density LED Wall Backdrop (P2.5)", price: 95000, description: "Panoramic screens for high-impact brand showcases." },
      { id: "ext-2", name: "Interactive RFID Self-Badge Registers", price: 40000, description: "QR code validation scanners and automated badge prints." },
      { id: "ext-3", name: "Multi-screen Audio-Video Streaming Mix", price: 60000, description: "Broadcast-quality live stream to YouTube/Webinars with slides." },
      { id: "ext-4", name: "Premium VIP Corporate Gifting hampers", price: 75000, description: "Custom laser-engraved eco-friendly diary, mug & sweet box." }
    ]
  },
  birthday: {
    eventType: "Thematic Birthday Carnival",
    basePrice: 80000,
    guestPriceMultiplier: 750,
    availableExtras: [
      { id: "ext-1", name: "3D Extravagant Theme Castle & Entry", price: 35000, description: "Large custom cutout themes, customized character life-sizes." },
      { id: "ext-2", name: "Interactive Magic Show & MC Stalls", price: 20000, description: "Trained illusionists, bubble display artists, energetic hosts." },
      { id: "ext-3", name: "Thematic Candy & French Crepe Bars", price: 25000, description: "Live caramel-popcorn, cotton-candy, chocolate fondue cascade." },
      { id: "ext-4", name: "Instant Polaroid Photo Board Frame", price: 15000, description: "Unlimited prints for kids with cute custom paper frames." }
    ]
  },
  anniversary: {
    eventType: "Intimate Milestone Anniversary",
    basePrice: 95000,
    guestPriceMultiplier: 1100,
    availableExtras: [
      { id: "ext-1", name: "Acoustic Live Violin / Sitar Duo", price: 30000, description: "Beautiful classical instrumentalists for ambient background." },
      { id: "ext-2", name: "Fairylight Canopy Tunnel Setup", price: 40000, description: "Romantic pathways lit with warm miniature glowing lights." },
      { id: "ext-3", name: "Digital Biography Documentary Film", price: 25000, description: "We compile vintage photographs into a touching 8-min cinematic film." },
      { id: "ext-4", name: "Handmade Signature Guest Registry", price: 12000, description: "Canvas fingerprint art memorial framed with luxury glass wood." }
    ]
  },
  cultural: {
    eventType: "Community Festival / Garba Night",
    basePrice: 300000,
    guestPriceMultiplier: 500,
    availableExtras: [
      { id: "ext-1", name: "Massive 60-foot Designer Stage", price: 140000, description: "Heavy-duty steel trussing with weatherproof ceiling canvas." },
      { id: "ext-2", name: "Elite Live 8-Piece Garba / Folk Orchestra", price: 110000, description: "Traditional dhol players, key synthesists, and high-energy vocals." },
      { id: "ext-3", name: "Government Liaison & Security Cover", price: 80000, description: "Private crowd control bouncers, local fire permits & licensing." },
      { id: "ext-4", name: "Multi-stall Festive Village Decor", price: 65000, description: "Traditional clay-vessels, marigold string arrays, village-selfie-ops." }
    ]
  }
};
