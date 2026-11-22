import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ebz10-u2-lesson-2-3",
  code: "2-3",
  title: "Promotion and Digital Marketing",
  goal: "I CAN explain promotional methods and evaluate digital marketing.",
  standards: ["Edexcel IGCSE Business 4BS0 — Marketing"],
  vocabulary: [
    {
      term: "Advertising",
      definition: "Paid communication to promote products — TV, online, print.",
    },
    {
      term: "Public relations (PR)",
      definition: "Managing image — press releases, events, sponsorship.",
    },
    {
      term: "Sales promotion",
      definition: "Short-term incentives — discounts, competitions, samples.",
    },
    {
      term: "Social media marketing",
      definition: "Promotion via platforms — Instagram, TikTok, Facebook.",
    },
    {
      term: "Search engine optimisation (SEO)",
      definition: "Improving website ranking in search results.",
    },
  ],
  concepts: [
    {
      id: "ebz10-u2-promotion",
      title: "Traditional Promotion Methods",
      skill: "Compare advertising, PR, sales promotion and personal selling.",
      lesson: {
        sections: [
          {
            heading: "Promotion methods",
            body: "**Advertising**: paid, controlled message — TV, radio, billboards, print. Wide reach, builds awareness, but expensive and one-way.\n**Public relations**: unpaid/earned coverage — press releases, charity events, sponsorship. Builds credibility, but less control over message.\n**Sales promotion**: short-term incentives — discounts, buy-one-get-one-free, free samples, competitions. Boosts immediate sales, but may reduce long-term profit.\n**Personal selling**: face-to-face — salespeople, demos, showrooms. Persuasive, builds relationships, but expensive per customer.",
          },
          {
            heading: "Choosing methods",
            body: "**Target audience**: young → social media; older → print/TV; business buyers → personal selling. **Budget**: small budget → social media, PR; large → TV ads. **Product type**: complex → demos/personal selling; simple → advertising.\n\n**Integrated marketing**: best results combine methods — advertise + promote + PR together for consistent message.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A new soft drink wants quick sales. Which promotion method?",
          solution:
            "Sales promotion — free samples, launch discounts to drive immediate purchases.",
        },
      },
      questions: [
        {
          id: "ebz10-u2-promotion-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is sales promotion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing product quality" },
              { id: "b", text: "Hiring more salespeople" },
              { id: "c", text: "Short-term incentives to boost sales" },
              { id: "d", text: "Long-term brand building" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sales promotion",
                statement:
                  "Short-term incentives — discounts, samples, competitions.",
              },
            ],
            steps: [
              {
                reasoning: "Sales promotion = short-term incentives.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Short-term incentives",
            commonErrors: ["Long-term confused."],
          },
        },
        {
          id: "ebz10-u2-promotion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one advantage and one disadvantage of TV advertising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "TV advertising",
                statement: "Wide reach but expensive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage: reaches millions, combines visuals/sound.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantage: very expensive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Disadvantage: can't target specific audiences well.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Wide reach/visual impact; expensive, poor targeting.",
            commonErrors: ["Only one side.", "Vague."],
          },
        },
        {
          id: "ebz10-u2-promotion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is public relations considered more credible than advertising?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PR credibility",
                statement: "Earned media seen as independent endorsement.",
              },
            ],
            steps: [
              {
                reasoning: "PR is unpaid/earned — third party endorsement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Customers trust independent sources more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advertising is paid — seen as biased.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But PR less control over message.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "PR = independent endorsement = more credible; less control.",
            commonErrors: ["Same as advertising.", "No credibility link."],
          },
        },
        {
          id: "ebz10-u2-promotion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A charity wants to promote a fundraising event.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two traditional promotion methods and why.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two digital promotion methods and why.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Promotion selection",
                statement: "Match method to audience, budget, goals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Local newspaper ads — reaches community cheaply.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Radio/TV spot — wider reach for bigger event.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Social media campaign — target young donors, low cost.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Email newsletter to supporters — direct, personal.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) newspaper/radio (b) social media/email",
            commonErrors: ["Wrong audience.", "No reasoning."],
          },
        },
      ],
    },
    {
      id: "ebz10-u2-digital",
      title: "Digital and Social Media Marketing",
      skill: "Evaluate digital marketing channels and their impact.",
      lesson: {
        sections: [
          {
            heading: "Digital channels",
            body: "**Social media**: Instagram, TikTok, Facebook, Twitter — targeted ads, influencer marketing, viral content. **Search engines**: Google Ads, SEO — reach people actively searching. **Email marketing**: newsletters, offers — direct, personalised, low cost. **Websites**: e-commerce, content marketing — owned channel, full control.\n\n**Benefits**: cheap, targeted, measurable, interactive, global reach. **Drawbacks**: privacy concerns, ad blindness, need digital skills, fast-changing.",
          },
          {
            heading: "Measuring digital marketing",
            body: "**Metrics**: clicks, conversions, engagement (likes/shares), reach, ROI. **Analytics tools**: Google Analytics, social media insights. **A/B testing**: compare two versions to see which performs better.\n\n**Challenges**: data privacy (GDPR), fake reviews, influencer credibility, algorithm changes affecting reach.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A business posts on Instagram and gets 10,000 views but only 50 sales. What metric matters most?",
          solution:
            "Conversion rate — 50/10,000 = 0.5% — views don't equal sales.",
        },
      },
      questions: [
        {
          id: "ebz10-u2-digital-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is SEO?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Posting on social media" },
              { id: "b", text: "Paying for top search results" },
              { id: "c", text: "Sending emails to customers" },
              { id: "d", text: "Optimising website to rank higher in search" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SEO",
                statement:
                  "Search Engine Optimisation — improving organic ranking.",
              },
            ],
            steps: [
              {
                reasoning: "SEO = optimising for search ranking.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Organic search ranking",
            commonErrors: ["Paid ads confused."],
          },
        },
        {
          id: "ebz10-u2-digital-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of social media marketing over TV advertising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Social vs TV",
                statement: "Cheaper, targeted, measurable.",
              },
            ],
            steps: [
              {
                reasoning: "Much cheaper — small budget works.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can target specific demographics precisely.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Measurable — track clicks, engagement, sales.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Cheaper, targeted, measurable — unlike expensive TV.",
            commonErrors: ["TV advantages listed.", "No comparison."],
          },
        },
        {
          id: "ebz10-u2-digital-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'vanity metrics' (likes, followers) can be misleading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vanity metrics",
                statement: "Engagement ≠ sales — need conversion metrics.",
              },
            ],
            steps: [
              {
                reasoning: "Likes/followers don't equal purchases.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Need conversion rate — visitors → buyers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Focus on ROI — revenue vs marketing spend.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: 10k likes but 0 sales = failure.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Engagement ≠ revenue — track conversions and ROI.",
            commonErrors: ["Likes = success assumed.", "No metric link."],
          },
        },
        {
          id: "ebz10-u2-digital-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A small bakery wants to use digital marketing on a limited budget.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two free/low-cost digital channels.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two metrics to measure success.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital marketing planning",
                statement: "Low-cost channels + measurable outcomes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Instagram/Facebook business page — free, visual.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Google Business Profile — free local visibility.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Website traffic / online orders.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Social media engagement leading to sales.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) Instagram/Google Business (b) traffic/orders/engagement",
            commonErrors: ["Expensive channels.", "Vanity metrics."],
          },
        },
      ],
    },
  ],
};
