/**
 * content.js — All site text in one place.
 *
 * To update any text on the site, find the key below and edit its value.
 * Keys are grouped by page. "shared_" keys appear on every page.
 *
 * HTML tags (e.g. <strong>, <em>, <br>) inside values are supported.
 */

const CONTENT = {

  // ═══════════════════════════════════════════════════════════════
  // SHARED — nav logo & footer (same on every page)
  // ═══════════════════════════════════════════════════════════════
  shared_nav_logo:        "Bunmi Akinremi",
  shared_nav_news:        "News",
  shared_nav_blog:        "Blog",
  shared_nav_videos:      "Videos",
  shared_nav_speaking:    "Speaking",
  shared_nav_side_quests: "Side Quests",
  shared_nav_about:       "About",
  shared_nav_contact:     "Contact",
  shared_footer_copy:     "© 2026 Olubunmi Akinremi",
  shared_footer_loc:      "Lagos, Nigeria",

  // ═══════════════════════════════════════════════════════════════
  // HOME — index.html
  // ═══════════════════════════════════════════════════════════════
  home_title:          "Bunmi Akinremi. AI Engineer · Researcher · Speaker",
  home_hero_eyebrow:   "AI Engineer · Researcher · Speaker · Builder",
  home_hero_name:      "Bunmi<br><em>Akinremi</em>",
  home_hero_subtitle:  "Building intelligent systems at the frontier of RL, Gen AI, &amp; MLOps",
  home_hero_body:      "Research Fellow @LiGHT · Member @IEEE P4011 · Adjunct Faculty at Pan-Atlantic University · ELLIS 2025 PhD Shortlistee.",
  home_cta_work:       "View My Work",
  home_cta_blog:       "Read My Blog",
  home_cta_contact:    "Get In Touch",

  home_stat_1_n: "3+",      home_stat_1_l: "Years in Production ML",
  home_stat_2_n: "£70k",    home_stat_2_l: "Research Grant Awarded",
  home_stat_3_n: "Top 10",  home_stat_3_l: "NASA Space Apps Globally",
  home_stat_4_n: "5+",      home_stat_4_l: "Publications &amp; Articles",

  // — News items —
  home_news_heading: "What's New",

  home_news_0_date:  "Jun 2026",
  home_news_0_badge: "New",
  home_news_0_text:  "<strong>Started Cofounder role at Divas in AI</strong>. Amplifying the efforts to train and mentor young women in AI skills.",


  home_news_1_date:  "Jun 2026",
  home_news_1_badge: "New",
  home_news_1_text:  "<strong>Started Research Fellowship at LiGHT, EPFL, Switzerland</strong>. Joining the Laboratory for Intelligent Global Health Technologies to work at the intersection of AI and global health impact.",

  home_news_2_date:  "May 2026",
  home_news_2_badge: "Position",
  home_news_2_text:  "Left my position as <strong>AI Engineer at Bfree Africa</strong>.",

  home_news_3_date:  "May 2026",
  home_news_3_badge: "Guest Lecture",
  home_news_3_text:  "Delivered a guest lecture on <strong>introduction to Reinforcement Learning</strong> at Namibia University.",

  home_news_4_date:  "Jan 2026",
  home_news_4_badge: "Speaking",
  home_news_4_text:  "Spoke at <strong>AMLD Africa</strong> (South Africa) and <strong>TEDx Ayobo</strong> (Lagos) within the same month. Two stages, two countries, one message.",

  home_news_5_date:  "Jan 2026",
  home_news_5_badge: "Position",
  home_news_5_text:  "Started as <strong>AI Engineer at Bfree Africa</strong> and <strong>Adjunct Faculty at Pan-Atlantic University</strong> — building and teaching simultaneously.",

  home_news_6_date:  "2025",
  home_news_6_badge: "Award",
  home_news_6_text:  "<strong>ELLIS PhD Programme 2025 — Shortlisted.</strong> Top 400 out of 6,000+ applicants for Europe's most competitive AI doctoral programme.",

  home_news_7_date:  "Dec 2025",
  home_news_7_badge: "Speaking",
  home_news_7_text:  "Presented <em>\"Agent Teaming in Mixed Motive Environments\"</em> at <strong>Python Summit Warsaw, Poland</strong>.",

  home_news_8_date:  "Nov 2024",
  home_news_8_badge: "Grant",
  home_news_8_text:  "Awarded <strong>£70,000 research grant</strong> from the French Embassy Fund for AI-powered plastic waste identification and transformation.",

  // — Featured In cards —
  home_featured_heading: "Featured In",

  home_feat_1_label: "Young People in Tech",
  home_feat_1_org:   "Young People in Tech",
  home_feat_1_date:  "Jun 2026 · Lagos, Nigeria",
  home_feat_1_quote: "\"Some of the most important work in AI happens between research and implementation. We're pleased to welcome <strong>Bunmi Akinremi</strong>, AI/ML Engineer and Lecturer, to The Artificial Future.\"",
  home_feat_1_tag:   "Speaker Feature",

  home_feat_2_label: "Thinking About Thinking",
  home_feat_2_org:   "Thinking About Thinking",
  home_feat_2_date:  "Apr 2026 · AE Global Summit, London",
  home_feat_2_quote: "\"I've been selected as a <strong>Thinking About Thinking Ambassador for 2026</strong>. Supporting thoughtful, responsible discussion around AI, including the AE Global Summit on Open Problems for AI in London, Nov 2026.\"",
  home_feat_2_tag:   "Ambassador",

  home_feat_3_label: "ONE DEV Africa",
  home_feat_3_org:   "ONE DEV Africa",
  home_feat_3_date:  "Apr 2026 · International Women's Month",
  home_feat_3_quote: "\"We celebrate <strong>40 incredible women developers across Africa</strong>. Women who are building, solving real problems, and contributing to a global digital economy that often overlooks them.\" <em>311 reactions.</em>",
  home_feat_3_tag:   "Women in Tech Feature",

  home_feat_4_label: "IndabaX Uganda",
  home_feat_4_org:   "IndabaX Uganda",
  home_feat_4_date:  "Mar 2026 · Deep Learning Indaba X",
  home_feat_4_quote: "\"Celebrating the women shaping the future of AI in Africa. This #InternationalWomensDay, we spotlight the brilliant women speaking at <strong>Deep Learning Indaba X Uganda 2026</strong>. Researchers, innovators, and leaders driving responsible AI forward.\"",
  home_feat_4_tag:   "Women in AI · Speaker",

  home_feat_5_label: "WiMLDS Lagos",
  home_feat_5_org:   "WiMLDS Lagos",
  home_feat_5_date:  "2025 · Personality of the Month",
  home_feat_5_quote: "\"<strong>Bunmi Akinremi</strong> is a brilliant mind passionate about research and building intelligent systems, who blends technical depth with creative flair, demonstrating that data science and storytelling can coexist.\"",
  home_feat_5_tag:   "Personality of the Month",

  home_feat_6_label: "Nigerians in AI",
  home_feat_6_org:   "Nigerians in AI",
  home_feat_6_date:  "Mar 2026 · AI Innovation Wednesday",
  home_feat_6_quote: "\"An <strong>AI researcher and engineer building technology that actually serves people</strong>. Deploying production-grade ML systems, contributing to AI governance and ethics, and mentoring African ML researchers.\" <em>298 reactions.</em>",
  home_feat_6_tag:   "AI Leader Feature",

  home_feat_7_label: "Carpe Datum Podcast",
  home_feat_7_org:   "Carpe Datum Podcast",
  home_feat_7_date:  "2024 · Season 1, Episode 11",
  home_feat_7_quote: "\"<strong>S1E11: Bunmi Akinremi — Passion to Profession.</strong> Her Data Driven Journey: from Microsoft Certified AI Engineer to building production ML systems in advertising, education, and beyond.\"",
  home_feat_7_tag:   "Podcast Guest",

  // — Explore / Directory —
  home_explore_heading: "Explore",

  home_dir_1_num: "01", home_dir_1_name: "Blog",        home_dir_1_desc: "Writing on AI, language &amp; building things",
  home_dir_2_num: "02", home_dir_2_name: "Videos",      home_dir_2_desc: "Educational content on YouTube",
  home_dir_3_num: "03", home_dir_3_name: "Speaking",    home_dir_3_desc: "Conferences, talks &amp; panels",
  home_dir_4_num: "04", home_dir_4_name: "Side Quests", home_dir_4_desc: "The fun experiments &amp; personal projects",
  home_dir_5_num: "05", home_dir_5_name: "About",       home_dir_5_desc: "Background, experience, publications &amp; CV",
  home_dir_6_num: "06", home_dir_6_name: "Contact",     home_dir_6_desc: "Newsletter, collaborations &amp; speaking",

  // ═══════════════════════════════════════════════════════════════
  // ABOUT — about.html
  // ═══════════════════════════════════════════════════════════════
  about_title:      "About Bunmi Akinremi",
  about_crumb:      "Bunmi Akinremi",
  about_page_title: "About",
  about_page_desc:  "Background, experience, publications, awards, and CV — everything in one place.",

  about_who_heading: "Who Am I?",
  about_bio_1: "I'm an AI Engineer specialising in NLP, ads analytics, statistical modelling, and responsible AI. Currently I work as AI Engineer at <strong>Bfree Africa</strong>, building intelligent systems for financial services, and as Adjunct Faculty at <strong>Pan-Atlantic University</strong>. In June 2026, I begin a research internship at <strong>LiGHT, EPFL</strong> in Switzerland — and I've been shortlisted for the prestigious <strong>ELLIS PhD Programme</strong>, one of Europe's most competitive doctoral tracks in AI.",
  about_bio_2: "My research in reinforcement learning explores how agents learn to collaborate in mixed-motive environments — theory, ethics, and real-world deployment in one question. I've spoken at AMLD Africa, TEDx, Python Summit Warsaw, and ML Lagos, and I review papers for ICLR and ECCV workshops.",
  about_bio_3: "Being introverted has shaped how deliberately I communicate and how deeply I think. Quiet confidence, consequential work.",

  about_skills_heading:    "Core Expertise",
  about_skill_nlp_name:    "NLP &amp; GenAI",
  about_skill_nlp_tags:    "<span class=\"tag\">LLMs</span><span class=\"tag\">BERT</span><span class=\"tag\">Whisper</span><span class=\"tag\">RAG</span><span class=\"tag\">LangChain</span><span class=\"tag\">Fine-tuning</span>",
  about_skill_mlops_name:  "MLOps &amp; Cloud",
  about_skill_mlops_tags:  "<span class=\"tag\">Kubeflow</span><span class=\"tag\">Kubernetes</span><span class=\"tag\">MLflow</span><span class=\"tag\">Docker</span><span class=\"tag\">Azure</span><span class=\"tag\">AWS</span><span class=\"tag\">GCP</span>",
  about_skill_rai_name:    "Responsible AI",
  about_skill_rai_tags:    "<span class=\"tag\">Red Teaming</span><span class=\"tag\">RLHF</span><span class=\"tag\">Bias Mitigation</span><span class=\"tag\">SHAP/LIME</span>",
  about_skill_lang_name:   "Languages",
  about_skill_lang_tags:   "<span class=\"tag\">Python</span><span class=\"tag\">R</span><span class=\"tag\">SQL</span><span class=\"tag\">JAX</span>",

  // — Experience —
  about_exp_heading: "Experience",

  about_exp_1_date:    "May–Jul 2026",
  about_exp_1_company: "LiGHT, EPFL",
  about_exp_1_loc:     "Lausanne, Switzerland",
  about_exp_1_role:    "Research Intern",
  about_exp_1_bullets: "<li>Conducting research at the Laboratory for Intelligent Global Health Technologies — working at the intersection of AI and global health impact.</li>",

  about_exp_2_date:    "2026 — Present",
  about_exp_2_company: "Bfree Africa",
  about_exp_2_loc:     "Lagos, Nigeria",
  about_exp_2_role:    "AI Engineer",
  about_exp_2_bullets: "<li>Building intelligent AI systems for African financial services, focusing on scalable NLP and decision-support infrastructure.</li>",

  about_exp_3_date:    "2026 — Present",
  about_exp_3_company: "Pan-Atlantic University",
  about_exp_3_loc:     "Lagos, Nigeria",
  about_exp_3_role:    "Adjunct Faculty",
  about_exp_3_bullets: "<li>Teaching and mentoring the next generation of AI practitioners, translating frontier research into applied curriculum for African students.</li>",

  about_exp_4_date:    "Mar 2023 — Jan 2026",
  about_exp_4_company: "Kochava",
  about_exp_4_loc:     "US, Remote",
  about_exp_4_role:    "Machine Learning Engineer",
  about_exp_4_bullets: "<li><span class=\"hl\">50% faster training</span> — distributed training system on Kubernetes resolving critical CPU bottlenecks</li><li><span class=\"hl\">50% forecast accuracy gain</span> — replaced legacy models with LLM-based Chronos architecture, cutting modelling time by 30%</li><li><span class=\"hl\">95% anomaly detection accuracy</span> — automated data quality assurance pipeline</li><li><span class=\"hl\">40% faster client onboarding</span> — Kubeflow pipeline for notebook-to-production deployment</li>",

  about_exp_5_date:    "Apr — Aug 2024",
  about_exp_5_company: "CJID",
  about_exp_5_loc:     "Abuja, Nigeria",
  about_exp_5_role:    "ML Engineer — GenAI &amp; LLMs",
  about_exp_5_bullets: "<li><span class=\"hl\">70% reduction in manual labour</span> — organisation's first GenAI platform for local language audio transcription</li><li>Fine-tuned BERT and Whisper on African datasets for fake news detection</li>",

  about_exp_6_date:    "Sep 2022 — Feb 2023",
  about_exp_6_company: "Rural Farmers Hub",
  about_exp_6_loc:     "Abuja, Nigeria",
  about_exp_6_role:    "Machine Learning Engineer",
  about_exp_6_bullets: "<li><span class=\"hl\">25% faster GIS analysis</span> via Computer Vision + OpenCV on satellite imagery</li><li><span class=\"hl\">20% accuracy improvement</span> — custom ML Soil Organic Matter estimator</li>",

  about_cv_text: "<strong>Want the full picture?</strong> My CV includes education, certifications, volunteer work, and full publication list.",
  about_cv_btn:  "Download CV (PDF)",

  // — Publications —
  about_pubs_heading: "Publications",
  about_pub_1_venue: "Interspeech 2025",
  about_pub_1_title: "The NaijaVoices Dataset: Cultivating Large-Scale, High-Quality, Culturally-Rich Speech Data for African Languages",
  about_pub_2_venue: "DataCamp",
  about_pub_2_title: "Optuna for Deep Reinforcement Learning",
  about_pub_3_venue: "DataCamp",
  about_pub_3_title: "Structural Equation Modelling",
  about_pub_4_venue: "Kaggle",
  about_pub_4_title: "Principles vs Implementation: AI Ethics",
  about_pub_5_venue: "Neptune.ai",
  about_pub_5_title: "Best Tools For Model Tuning and Hyperparameter Optimization",

  // — Awards —
  about_awards_heading: "Honours &amp; Awards",

  about_award_f1_year: "2025",
  about_award_f1_name: "ELLIS PhD Programme — Shortlisted",
  about_award_f1_desc: "Top 400 out of 6,000+ applicants for one of Europe's most prestigious AI doctoral programmes.",

  about_award_f2_year: "2026 · Lausanne, Switzerland",
  about_award_f2_name: "Research Internship &amp; LiGHT, EPFL",
  about_award_f2_desc: "Selected for a research internship at EPFL's Laboratory for Intelligent Global Health Technologies.",

  about_award_1_year: "Nov 2024",
  about_award_1_name: "Research Grant £70k",
  about_award_1_desc: "French Embassy Fund · Plastic waste identification &amp; transformation",

  about_award_2_year: "2024",
  about_award_2_name: "Black in AI Emerging Leaders",
  about_award_2_desc: "Top 127 from 590+ global applications",

  about_award_3_year: "Oct 2022",
  about_award_3_name: "NASA Space Apps Global Finalist",
  about_award_3_desc: "Top 10 globally out of 3,000+ participants",

  about_award_4_year: "Nov 2022",
  about_award_4_name: "Miss Algorithm",
  about_award_4_desc: "Top female AI expert, DSN AI Bootcamp",

  // ═══════════════════════════════════════════════════════════════
  // BLOG — blog.html
  // ═══════════════════════════════════════════════════════════════
  blog_title:      "Blog — Bunmi Akinremi",
  blog_crumb:      "Bunmi Akinremi",
  blog_page_title: "Blog",
  blog_page_desc:  "Published writing on AI engineering, career reflections, African tech, and hands-on tutorials — across Medium and beyond.",

  blog_1_tag:     "Career · AI Engineering",
  blog_1_title:   "On Teaching Minds and Building Machines: Notes from a Lecturer and AI Engineer",
  blog_1_excerpt: "Notes from living between two roles — building production AI systems and teaching the next generation of practitioners. What overlaps, what doesn't, and what both require.",
  blog_1_source:  "Medium",

  blog_2_tag:     "Statistics · ML",
  blog_2_title:   "Still Scaling Statistical Models in the Age of AI",
  blog_2_excerpt: "In a world chasing transformers and trillion-parameter models, the fundamentals still matter. A case for why statistical rigour is the most underrated skill in modern ML.",
  blog_2_source:  "Medium",

  blog_3_tag:     "Career · Machine Learning",
  blog_3_title:   "My ML Engineering Journey: Insights, Challenges and Lessons Learned",
  blog_3_excerpt: "Three years of production ML — the insights that surprised me, the challenges nobody warned about, and the lessons I had to learn the hard way.",
  blog_3_source:  "Medium",

  blog_4_tag:     "Career · Reflection",
  blog_4_title:   "Access: What Happens When Opportunities Are Not Enough",
  blog_4_excerpt: "On structural barriers, geographic luck, and what it really takes for talent from underrepresented places to reach global stages. A personal essay.",
  blog_4_source:  "Medium",

  blog_5_tag:     "Speaking · Career",
  blog_5_title:   "Speaking at a Global Data Science Conference in Belgrade — My Experience",
  blog_5_excerpt: "What it felt like to represent Africa on a European stage — the prep, the nerves, the moment on stage, and what happened after. Part one of the Belgrade story.",
  blog_5_source:  "Medium",

  blog_6_tag:     "Speaking · Career",
  blog_6_title:   "Speaking at a Global Data Science Conference in Belgrade — The Episodes",
  blog_6_excerpt: "Part two: the memorable side conversations, unexpected connections, and why international visibility still feels like a privilege that should be a right.",
  blog_6_source:  "Medium",

  blog_7_tag:     "Tech · Future of Work",
  blog_7_title:   "Technologies Changing the Way We Work",
  blog_7_excerpt: "A look at the tools, automation trends, and AI-driven shifts reshaping how teams build, collaborate, and ship — and what remains irreducibly human.",
  blog_7_source:  "Medium",

  blog_8_tag:     "African AI · Computer Vision",
  blog_8_title:   "Identifying Nigerian Dishes Using AI on Android — Part 1",
  blog_8_excerpt: "Building a food recognition app trained on Nigerian cuisine: why existing models fail at local dishes, how we collected the data, and the architecture we chose.",
  blog_8_source:  "Medium · ComeTheHeartbeat",

  blog_9_tag:     "African AI · Android",
  blog_9_title:   "Identifying Nigerian Dishes Using AI on Android — Part 2",
  blog_9_excerpt: "The technical deep dive: model optimisation for mobile, deployment choices, on-device inference constraints, and lessons from shipping to real users.",
  blog_9_source:  "Medium · ComeTheHeartbeat",

  blog_10_tag:     "Hackathon · Side Quest",
  blog_10_title:   "NASA Space Apps Challenge: My Hackathon Saga",
  blog_10_excerpt: "How a 72-hour sprint became a globally recognised project — from idea to top 10 out of 3,000+ teams worldwide. The full story of NASA Space Apps 2022.",
  blog_10_source:  "Medium",

  blog_11_tag:     "Reflection · Personal",
  blog_11_title:   "A Psych View of 2022: A Poetic Developer's Tales",
  blog_11_excerpt: "A year of building and learning, seen through the lens of psychology and verse. A developer's introspective look at growth, setbacks, and showing up anyway.",
  blog_11_source:  "Medium · 2022",

  blog_12_tag:     "Tutorial · NLP",
  blog_12_title:   "Creating Intents for Your Chatbot Using Rasa NLU",
  blog_12_excerpt: "A hands-on walkthrough of building intent classification for conversational AI using Rasa's NLU framework — with working examples and common pitfalls to avoid.",
  blog_12_source:  "Medium",

  blog_13_tag:     "Tutorial · NLP",
  blog_13_title:   "Thinking of Building a Chatbot? Here Are a Few Things to Know First",
  blog_13_excerpt: "Before you write a single line: the mental models, architectural choices, and practical traps worth understanding before starting any chatbot project.",
  blog_13_source:  "Medium",

  blog_14_tag:     "Tutorial · Python",
  blog_14_title:   "Getting Started with NumPy and Pandas",
  blog_14_excerpt: "A beginner-friendly introduction to the two libraries every data practitioner depends on — clear examples, common patterns, no fluff.",
  blog_14_source:  "Medium · AI+ OAU",

  // ═══════════════════════════════════════════════════════════════
  // SPEAKING — speaking.html
  // ═══════════════════════════════════════════════════════════════
  speaking_title:      "Speaking — Bunmi Akinremi",
  speaking_crumb:      "Bunmi Akinremi",
  speaking_page_title: "Speaking &amp;<br><em>Conferences</em>",
  speaking_page_desc:  "Talking about AI sovereignty, responsible systems, and building for the African context — on stages around the world.",

  speaking_talks_heading: "Talks",

  speaking_talk_1_event: "AMLD Africa",
  speaking_talk_1_date:  "Jan 2026 · Kigali, Rwanda",
  speaking_talk_1_title: "\"Sovereignty is a Pipe Dream Without Pipelines: A Builder's Manifesto\"",

  speaking_talk_2_event: "TEDx Ayobo",
  speaking_talk_2_date:  "Jan 2026 · Lagos, Nigeria",
  speaking_talk_2_title: "\"From Users to Makers: Inspiring the Next Generation of Tech Creators\"",

  speaking_talk_3_event: "Python Summit Warsaw",
  speaking_talk_3_date:  "Dec 2025 · Warsaw, Poland",
  speaking_talk_3_title: "\"Agent Teaming in Mixed Motive Environments: Learning to Collaborate Amid Conflicting Goals\"",

  speaking_talk_4_event: "ML Lagos 2025",
  speaking_talk_4_date:  "Oct 2025 · Virtual",
  speaking_talk_4_title: "\"Human-Centred Evaluation for AI\"",

  speaking_invite_heading: "Invite Me to Speak",
  speaking_invite_h2:      "Let's bring these ideas<br><em>to your stage.</em>",
  speaking_invite_desc:    "I speak on AI sovereignty, responsible NLP, multi-agent systems, and building impactful AI for underrepresented communities. Available for conferences, panels, university lectures, and corporate events.",
  speaking_topics_label:   "Topics I speak on:",
  speaking_topic_1:        "AI Sovereignty &amp; African Tech Infrastructure",
  speaking_topic_2:        "Responsible AI &amp; Human-Centred Evaluation",
  speaking_topic_3:        "Multi-Agent RL &amp; Cooperative AI",
  speaking_topic_4:        "NLP for Low-Resource &amp; African Languages",
  speaking_topic_5:        "MLOps in Practice: Notebook to Production",
  speaking_invite_btn:     "Get In Touch",

  // ═══════════════════════════════════════════════════════════════
  // SIDE QUESTS — side-quests.html
  // ═══════════════════════════════════════════════════════════════
  sq_title:      "Side Quests — Bunmi Akinremi",
  sq_crumb:      "Bunmi Akinremi",
  sq_page_title: "Side<br><em>Quests</em>",
  sq_page_desc:  "The experiments, passion projects, and unexpected adventures that happen alongside the main work.",

  sq_section_heading: "Active &amp; Completed",
  sq_section_label:   "● the fun stuff",

  sq_1_icon:   "🎙️",
  sq_1_name:   "NaijaVoices Dataset",
  sq_1_status: "● Published · Interspeech 2025",
  sq_1_desc:   "Cultivating large-scale, high-quality, culturally-rich speech data for African languages. Because our voices deserve to be heard — and learned from. Published at Interspeech 2025.",

  sq_2_icon:   "🌍",
  sq_2_name:   "Plastic Waste AI",
  sq_2_status: "● Active · £70k Funded",
  sq_2_desc:   "AI-powered plastic waste identification and transformation, funded by the French Embassy. Building environmental impact tools for African communities — because climate work is AI work.",

  sq_3_icon:   "🚀",
  sq_3_name:   "NASA Space Apps",
  sq_3_status: "● Completed · Global Top 10",
  sq_3_desc:   "Built a space-tech solution that placed in the global top 10 out of 3,000+ participants — turning a weekend hackathon into a globally recognised project. Oct 2022.",

  sq_4_icon:   "📹",
  sq_4_name:   "YouTube Channel",
  sq_4_status: "● Launching Soon",
  sq_4_desc:   "Educational videos on NLP, MLOps, and responsible AI. Making frontier research accessible — especially for engineers on the African continent who were never meant to be left behind.",

  sq_5_icon:   "🌾",
  sq_5_name:   "Soil Intelligence",
  sq_5_status: "● Completed · 2022–2023",
  sq_5_desc:   "A custom ML model estimating Soil Organic Matter from satellite imagery for Rural Farmers Hub — 20% accuracy improvement over baseline, helping smallholder farmers make better decisions.",

  sq_6_icon:   "📰",
  sq_6_name:   "Fake News Detection",
  sq_6_status: "● Completed · 2024",
  sq_6_desc:   "Fine-tuned BERT and Whisper on African datasets for fake news detection at CJID, the Centre for Journalism Innovation and Development. Supporting press freedom with AI.",

  // ═══════════════════════════════════════════════════════════════
  // VIDEOS — videos.html
  // ═══════════════════════════════════════════════════════════════
  videos_title:      "Videos — Bunmi Akinremi",
  videos_crumb:      "Bunmi Akinremi",
  videos_page_title: "Educational<br><em>Videos</em>",
  videos_page_desc:  "Making frontier AI research accessible — especially for engineers on the African continent.",

  videos_section_heading: "YouTube Channel",
  videos_subscribe:       "Subscribe →",

  videos_1_title: "Introduction to RLHF: Reinforcement Learning from Human Feedback",
  videos_1_meta:  "Coming Soon · Educational Series",
  videos_2_title: "Building a RAG System with LangChain and Azure OpenAI — Step by Step",
  videos_2_meta:  "Coming Soon · Tutorial",
  videos_3_title: "Responsible AI in Practice: Red Teaming Language Models",
  videos_3_meta:  "Coming Soon · Talk Recording",
  videos_4_title: "Kubeflow Pipelines: From Local Notebook to Production ML",
  videos_4_meta:  "Coming Soon · Tutorial",
  videos_5_title: "Fine-Tuning Whisper for African Languages: A Practical Guide",
  videos_5_meta:  "Coming Soon · Tutorial",
  videos_6_title: "Multi-Agent Systems Explained: Theory, Ethics, and Real-World Deployment",
  videos_6_meta:  "Coming Soon · Lecture",

  // ═══════════════════════════════════════════════════════════════
  // CONTACT — contact.html
  // ═══════════════════════════════════════════════════════════════
  contact_title:      "Contact — Bunmi Akinremi",
  contact_crumb:      "Bunmi Akinremi",
  contact_page_title: "Let's build something<br><em>meaningful.</em>",
  contact_page_desc:  "Open to AI engineering roles, research collaborations, and speaking invitations — especially at the intersection of African AI and responsible systems.",

  contact_heading: "Get In Touch",
  contact_para_1:  "I'm always happy to talk about potential collaborations, research ideas, speaking engagements, or just to connect with people doing interesting work in AI.",
  contact_para_2:  "The best way to reach me is email. I try to respond within a few days.",

  contact_email_label:    "Email",
  contact_linkedin_label: "LinkedIn",
  contact_github_label:   "GitHub",
  contact_twitter_label:  "Twitter / X",

  newsletter_heading:     "Newsletter",
  newsletter_desc:        "Occasional notes on AI research, building in public, African tech, and things I'm learning. No spam — only when I have something worth saying.",
  newsletter_placeholder: "your@email.com",
  newsletter_btn:         "Subscribe",
  newsletter_note:        "No spam · Unsubscribe any time",

};

// ─── Content Loader — do not edit below this line ──────────────────────────
(function () {
  function load() {
    document.querySelectorAll('[data-cid]').forEach(function (el) {
      var key = el.getAttribute('data-cid');
      var val = CONTENT[key];
      if (val === undefined) return;
      if (el.tagName === 'TITLE') { document.title = val; return; }
      el.innerHTML = val;
    });
    document.querySelectorAll('[data-cid-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-cid-placeholder');
      if (CONTENT[key] !== undefined) el.placeholder = CONTENT[key];
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
