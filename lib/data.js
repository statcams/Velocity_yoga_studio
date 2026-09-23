// NOTE: Ellie is confirmed. The second instructor slot is a placeholder —
// swap in their real name, headshot, specialties, and bio before launch.
export const teachers = [
  {
    id: "ellie",
    name: "Ellie",
    role: "Program Director & Lead Instructor",
    bio: "Ellie brings a background in high-tech program leadership to her teaching — the same care for structure and clarity, applied to how a class is sequenced and how a room feels. She teaches classes designed to be approachable for first timers and grounding for regulars alike.",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=500&q=80",
    imageAlt:
      "Ellie, Program Director and lead yoga instructor at Velocity Yoga Studio in Redmond, WA",
    placeholderImage: true,
  },
  {
    id: "second-instructor",
    name: "Second Instructor",
    role: "Specialties TBD",
    bio: "Pending name, photo, and bio from the second instructor.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80",
    imageAlt: "Placeholder headshot — second Velocity Yoga instructor bio pending",
    placeholder: true,
    placeholderImage: true,
  },
];

// NOTE: only one confirmed event/workshop so far — add more cards here as
// Ellie schedules them so the homepage section doesn't look sparse.
export const events = [
  {
    id: "sound-healing-adam-riehl",
    date: "November 20, 7–8 PM",
    title: "Sound Healing with Adam Riehl",
    description:
      "Join us at Velocity Yoga and let the vibrations move through you, release what needs releasing, and simply be. No experience required. Bring a mat, water, and an eye mask if you like, and wear layers.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Sound healing workshop with Adam Riehl at Velocity Yoga Studio in Redmond, WA",
  },
];

// NOTE: items with `placeholder: true` are still pending final answers from
// Ellie (pricing, cancellation window, parking details) — shown in italics
// on the FAQ page until confirmed.
export const faqCategories = [
  {
    id: "what-to-bring",
    label: "What to Bring",
    questions: [
      {
        q: "Do I need to bring my own mat and other props?",
        a: "We have a limited number of mats available to loan, but we recommend bringing your own — something you feel comfortable and familiar with. As for other props, the studio provides knee cushions, bolsters, blocks, blankets, and straps, so no need to bring props.",
      },
      {
        q: "What should I wear?",
        a: "Comfortable, stretchy clothing you can move freely in. Yoga is practiced barefoot, so socks are optional, but grippy socks are ok.",
      },
      {
        q: "Should I eat before class?",
        a: "A light snack 1–2 hours before is ideal — a full meal right before class can feel uncomfortable during twists and inversions.",
      },
    ],
  },
  {
    id: "etiquette",
    label: "Etiquette & Studio Policies",
    questions: [
      {
        q: "How early should I arrive?",
        a: "Please arrive 10–15 minutes before class to check in and set up, especially for your first visit.",
      },
      {
        q: "What's your cancellation policy?",
        a: "[confirm cancellation window]",
        placeholder: true,
      },
      {
        q: "Is the studio phone-free?",
        a: "We ask that phones stay silenced and put away during class out of respect for the group's focus.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Passes",
    questions: [
      {
        q: "What are your class rates and packages?",
        a: "[pricing table TBD — pull from finalized rate sheet]",
        placeholder: true,
      },
      {
        q: "Do you offer intro or drop-in rates for first-timers?",
        a: "Yes — see our intro offer on the Schedule & Booking page.",
      },
    ],
  },
  {
    id: "beginner-tips",
    label: "Beginner Tips",
    questions: [
      {
        q: "I've never done yoga before — which class should I take?",
        a: "Look for classes labeled \"All Levels\" or \"Beginner-Friendly\" on the schedule. Every teacher offers modifications, so you'll never feel behind.",
      },
      {
        q: "What if I'm not flexible?",
        a: "Flexibility is a result of practice, not a requirement to start. Most students say their flexibility improved after they started coming — not before.",
      },
    ],
  },
  {
    id: "finding-us",
    label: "Finding Us",
    questions: [
      {
        q: "Where exactly is the studio located?",
        a: "We're on the second floor, directly above Velocity Pickleball Club in Redmond, WA. Look for the studio signage near the stairwell/elevator as you enter the building.",
      },
      {
        q: "Where do I park?",
        a: "[confirm shared lot / entrance details with club]",
        placeholder: true,
      },
    ],
  },
];

// Starter posts drafted from the SEO content brief so the blog isn't empty
// at launch. Swap `author` for the real byline once confirmed.
export const posts = [
  {
    slug: "beginner-yoga-poses-after-pickleball",
    title: "5 Beginner Yoga Poses to Try After a Pickleball Match",
    category: "Practice Tips",
    author: "Velocity Team",
    date: "September 2, 2026",
    excerpt:
      "A quick post-game stretch routine for pickleball players — built for the exact audience one floor down.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Yoga mat set up for post-pickleball stretching at Velocity Yoga Studio in Redmond, WA",
    content: [
      "If you just came off the courts at Velocity Pickleball Club, your hips, shoulders, and calves have been working overtime — quick lateral shuffles and overhead swings put a lot of one-directional strain on the body. A short yoga sequence upstairs is one of the easiest ways to walk out feeling loose instead of locked up.",
      "Start with Downward-Facing Dog to lengthen the calves and hamstrings that just spent an hour absorbing every lunge. Hold for five slow breaths, pedaling the feet to release the calves individually.",
      "Move into a low lunge to open the hip flexors, which tighten from repeated split-step stances. Follow it with Seated Forward Fold to ease the lower back, and finish in Child's Pose to let the shoulders and spine fully release.",
      "You don't need a full class to feel the benefit — even 10 minutes on a mat after a match can cut down on next-day soreness. Velocity Yoga is a two-minute walk from the courts, and drop-ins are always welcome.",
    ],
  },
  {
    slug: "how-to-choose-your-first-yoga-class-redmond",
    title: "How to Choose Your First Yoga Class in Redmond, WA",
    category: "Practice Tips",
    author: "Ellie",
    date: "August 20, 2026",
    excerpt:
      "Targets \"first yoga class Redmond\" and similar beginner-intent searches; doubles as an FAQ-page companion piece.",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Beginner yoga student in her first class at Velocity Yoga Studio in Redmond, WA",
    content: [
      "Searching \"yoga classes near me\" in Redmond turns up a long list of studios, and it's hard to know where a total beginner actually belongs. Here's how we'd suggest narrowing it down.",
      "Start with the class description, not the style name. \"All Levels\" and \"Beginner-Friendly\" labels exist for a reason — they tell you the teacher will build in modifications and won't assume prior experience.",
      "Ask how small the classes run. Smaller rooms mean more hands-on cueing, which matters most in your first few sessions while you're still learning what alignment feels like in your own body.",
      "Consider the whole experience, not just the hour on the mat. At Velocity, we're on the second floor above Velocity Pickleball Club in Redmond — so if you're nervous about walking in alone, you can come for a match downstairs first and get a feel for the building before your class.",
      "Most importantly: come as you are. Every teacher at Velocity Yoga expects a mixed-experience room, and nobody is tracking how flexible you are on day one.",
    ],
  },
  {
    slug: "vinyasa-vs-hatha",
    title: "Vinyasa vs. Hatha: What's the Difference (and Which Should You Start With)?",
    category: "Practice Tips",
    author: "Ellie",
    date: "August 5, 2026",
    excerpt:
      "Evergreen educational content that ranks well long-term and links naturally to the Yoga Poses Library.",
    image:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Instructor demonstrating a Vinyasa flow transition at Velocity Yoga Studio",
    content: [
      "Vinyasa and Hatha are two of the most common words you'll see on a studio schedule, and they describe pace more than difficulty.",
      "Hatha classes move slowly and hold poses longer, giving you time to check alignment and build strength in a single shape before moving to the next. It's a good entry point if you want time to think through each pose.",
      "Vinyasa links poses together with the breath, moving from one shape to the next in a continuous flow. It builds more cardiovascular intensity and works well once you're comfortable with the basic postures and don't need as much time to set up each one.",
      "If you're brand new, we'd suggest starting with a Hatha or All Levels class to get familiar with foundational poses like Mountain Pose, Downward-Facing Dog, and Child's Pose — you can browse alignment cues for all of them in our Yoga Pose Library — then trying a Vinyasa class once those shapes feel familiar in your body.",
    ],
  },
  {
    slug: "why-we-built-a-yoga-studio-above-a-pickleball-club",
    title: "Why We Built a Yoga Studio Above a Pickleball Club",
    category: "Studio News",
    author: "Ellie",
    date: "July 22, 2026",
    excerpt:
      "Founder story / studio-news post — great for backlinks, local press, and social sharing; reinforces the brand's unique angle.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Velocity Yoga Studio entrance above Velocity Pickleball Club in Redmond, WA",
    content: [
      "Pickleball and yoga don't get paired together very often, but the more time we spent around Velocity Pickleball Club, the more obvious the connection became.",
      "Pickleball is fast, competitive, and social — and it's also hard on the body in a specific, repetitive way. Ask any regular player about their shoulders, hips, or knees. What that community needed wasn't just another gym; it was a space built for recovery, mobility, and slowing down.",
      "Building Velocity Yoga on the second floor, directly above the courts, means that space is never more than a flight of stairs away. Players can walk up after a match still warm and loosen up before the soreness sets in. Yogis get a studio with a built-in, ready-made community right downstairs.",
      "We designed Velocity Yoga's classes to meet you wherever your body is on a particular day — recovering, stretching, or simply showing up — whether you found us through pickleball or you're brand new to both.",
    ],
  },
  {
    slug: "5-minute-breathing-exercise-post-workout-recovery",
    title: "A 5-Minute Breathing Exercise for Post-Workout Recovery",
    category: "Mindfulness",
    author: "Ellie",
    date: "July 10, 2026",
    excerpt:
      "Short, practical, shareable — good for Instagram cross-posting and low-effort SEO volume.",
    image:
      "https://images.unsplash.com/photo-1508050249012-c94d8ce22276?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Person practicing a seated breathing exercise for post-workout recovery",
    content: [
      "Whether you just left a pickleball match, a flow class, or a hard gym session, your nervous system is still in \"go\" mode when you walk out the door. Five minutes of focused breathing can shift you from that revved-up state into recovery.",
      "Find a seated or lying position and let your breath settle for a few rounds. Then begin: inhale for a count of four, hold for four, exhale for six. The longer exhale is what tells your nervous system it's safe to downshift.",
      "Repeat for five minutes, keeping your jaw, shoulders, and hands soft. If your mind wanders — and it will — just come back to counting the breath.",
      "This is a simple ritual to close out any workout, and it takes no equipment, no mat, and no experience. Try it in the car before you drive home, or right on the studio floor before you head back downstairs.",
    ],
  },
];

export const poses = [
  {
    id: "mountain",
    name: "Mountain Pose",
    sanskrit: "Tadasana",
    category: "standing",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Student practicing Mountain Pose (Tadasana) at Velocity Yoga Studio in Redmond, WA",
    cues: [
      "Stand with feet together or hip-width apart, weight evenly distributed.",
      "Engage the thighs and lengthen the tailbone toward the floor.",
      "Roll shoulders back and down, crown of the head reaching up.",
    ],
    benefits: [
      "Improves posture and body awareness.",
      "Strengthens thighs, knees, and ankles.",
      "Calms the mind and centers the breath.",
    ],
    modifications: [
      "Stand with feet hip-width apart for more stability.",
      "Practice against a wall to check alignment.",
    ],
    safety: "Avoid locking the knees; keep a micro-bend if you have knee sensitivity.",
  },
  {
    id: "downward-dog",
    name: "Downward-Facing Dog",
    sanskrit: "Adho Mukha Svanasana",
    category: "standing",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Yoga instructor leading a beginner class in Downward-Facing Dog at Velocity Yoga Studio, Redmond, WA",
    cues: [
      "From all fours, tuck the toes and lift the hips up and back.",
      "Press firmly through the palms, spreading the fingers wide.",
      "Let the head hang relaxed between the arms.",
    ],
    benefits: [
      "Stretches shoulders, hamstrings, and calves.",
      "Builds strength in arms and legs.",
      "Energizes the body and relieves fatigue.",
    ],
    modifications: [
      "Bend the knees generously if hamstrings are tight.",
      "Use blocks under the hands for wrist support.",
    ],
    safety: "Skip or modify with wrist injuries; keep the neck relaxed, not compressed.",
  },
  {
    id: "seated-forward-fold",
    name: "Seated Forward Fold",
    sanskrit: "Paschimottanasana",
    category: "seated",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Student in Seated Forward Fold (Paschimottanasana) at Velocity Yoga Studio in Redmond, WA",
    cues: [
      "Sit with legs extended straight in front of you.",
      "Hinge forward from the hips, leading with the chest.",
      "Hold shins, ankles, or feet — wherever is comfortable.",
    ],
    benefits: [
      "Stretches the spine, shoulders, and hamstrings.",
      "Calms the nervous system, eases stress.",
      "Aids digestion when practiced gently.",
    ],
    modifications: [
      "Sit on a folded blanket to tilt the pelvis forward.",
      "Use a strap around the feet if hands don't reach.",
    ],
    safety: "Avoid rounding aggressively through the lower back; bend knees if needed.",
  },
  {
    id: "childs-pose",
    name: "Child's Pose",
    sanskrit: "Balasana",
    category: "restorative",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Student resting in Child's Pose (Balasana) at Velocity Yoga Studio in Redmond, WA",
    cues: [
      "Kneel with big toes touching, knees wide or together.",
      "Fold forward, resting the torso between or on the thighs.",
      "Extend arms forward or alongside the body.",
    ],
    benefits: [
      "Gently stretches hips, thighs, and lower back.",
      "Promotes deep relaxation and stress relief.",
      "A safe resting pose between more active postures.",
    ],
    modifications: [
      "Place a bolster or pillow under the torso for support.",
      "Widen the knees for more room for the belly.",
    ],
    safety: "Avoid with knee injuries unless well cushioned; use caution during pregnancy.",
  },
  {
    id: "headstand",
    name: "Headstand",
    sanskrit: "Sirsasana",
    category: "inversions",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Advanced student practicing Headstand (Sirsasana) at Velocity Yoga Studio in Redmond, WA",
    cues: [
      "Interlace fingers, forearms grounded, crown of head on mat.",
      "Walk feet toward the body and lift hips over shoulders.",
      "Engage the core and float the legs up slowly, in control.",
    ],
    benefits: [
      "Builds core, shoulder, and arm strength.",
      "Improves focus, balance, and circulation.",
      "Builds confidence when practiced consistently.",
    ],
    modifications: [
      "Practice against a wall for support and safety.",
      "Try a supported dolphin pose first to build strength.",
    ],
    safety:
      "Avoid with neck injuries, high blood pressure, or during pregnancy; always learn with a qualified teacher first.",
  },
  {
    id: "warrior-two",
    name: "Warrior II",
    sanskrit: "Virabhadrasana II",
    category: "standing",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1508050249012-c94d8ce22276?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Student holding Warrior II (Virabhadrasana II) at Velocity Yoga Studio in Redmond, WA",
    cues: [
      "Step feet wide, front foot forward, back foot turned in slightly.",
      "Bend the front knee to a right angle over the ankle.",
      "Extend arms parallel to the floor, gaze over the front hand.",
    ],
    benefits: [
      "Strengthens legs, glutes, and core.",
      "Opens hips and chest, builds stamina.",
      "Cultivates focus and steady breath under effort.",
    ],
    modifications: [
      "Shorten the stance for more stability.",
      "Rest the back hand on the hip if shoulders fatigue.",
    ],
    safety: "Keep the front knee tracking over the ankle, not collapsing inward.",
  },
  {
    id: "bridge",
    name: "Bridge Pose",
    sanskrit: "Setu Bandhasana",
    category: "restorative",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Student lifting into Bridge Pose (Setu Bandhasana) at Velocity Yoga Studio in Redmond, WA",
    cues: [
      "Lie on your back, knees bent, feet hip-width apart near hips.",
      "Press feet down and lift hips toward the ceiling.",
      "Clasp hands beneath the back or keep arms alongside the body.",
    ],
    benefits: [
      "Strengthens the back, glutes, and hamstrings.",
      "Opens the chest and shoulders.",
      "A gentle energizing alternative to deeper backbends.",
    ],
    modifications: [
      "Place a block under the sacrum for a supported version.",
      "Keep feet closer to the hips for more lift.",
    ],
    safety: "Avoid with recent neck or shoulder injury; move in and out slowly.",
  },
  {
    id: "lotus",
    name: "Lotus Pose",
    sanskrit: "Padmasana",
    category: "seated",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Advanced student seated in Lotus Pose (Padmasana) at Velocity Yoga Studio in Redmond, WA",
    cues: [
      "Sit with legs extended, then bend one knee, placing the foot on the opposite thigh.",
      "Repeat with the second leg, stacking feet on opposite thighs.",
      "Rest hands on knees, spine tall and relaxed.",
    ],
    benefits: [
      "Deepens hip flexibility over time.",
      "Supports long, steady seated meditation.",
      "Calms the mind and steadies the breath.",
    ],
    modifications: [
      "Practice Half Lotus or simple cross-legged sitting first.",
      "Sit on a cushion to tilt the hips forward.",
    ],
    safety: "Never force the knees; discontinue if you feel sharp knee pain.",
  },
];

export const poseCategories = [
  { id: "all", label: "All Poses" },
  { id: "standing", label: "Standing" },
  { id: "seated", label: "Seated" },
  { id: "inversions", label: "Inversions" },
  { id: "restorative", label: "Restorative" },
];

export const blogCategories = [
  { id: "all", label: "All Posts" },
  { id: "Mindfulness", label: "Mindfulness" },
  { id: "Studio News", label: "Studio News" },
  { id: "Practice Tips", label: "Practice Tips" },
  { id: "Nutrition", label: "Nutrition" },
  { id: "Community Spotlight", label: "Community Spotlight" },
];
