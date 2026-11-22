import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "eiasbiz-u3-lesson-3-1",
  code: "3-1",
  title: "Market Research and Segmentation",
  goal: "I CAN explain market research methods and market segmentation.",
  standards: ["Edexcel IAS Business WBP01 Unit 3 — Marketing"],
  vocabulary: [
    {
      term: "Market research",
      definition:
        "Gathering information about markets, customers and competitors.",
    },
    {
      term: "Primary research",
      definition: "First-hand data — surveys, interviews, observations.",
    },
    {
      term: "Secondary research",
      definition: "Existing data — reports, statistics, competitor info.",
    },
    {
      term: "Market segmentation",
      definition: "Dividing market into groups with similar needs.",
    },
    {
      term: "Target market",
      definition: "Specific segment the business aims to serve.",
    },
    {
      term: "Questionnaire",
      definition: "Structured set of questions for gathering data.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u3-research",
      title: "Market Research Methods",
      skill: "Distinguish primary and secondary research and evaluate methods.",
      lesson: {
        sections: [
          {
            heading: "Primary research",
            body: "**Questionnaires**: cheap, wide reach, but limited depth. **Interviews**: detailed responses, expensive, time-consuming. **Observations**: watch behaviour — e.g., footfall in shops. **Focus groups**: discuss products — rich feedback, small sample bias.\n\n**Sampling**: random (unbiased but may miss groups), quota (representative), convenience (easy but biased), snowball (hard-to-reach groups).",
          },
          {
            heading: "Secondary research",
            body: "**Government statistics**: census, employment, trade data — free, reliable. **Market reports**: industry analyses — expensive but comprehensive. **Competitor data**: websites, prices, reviews — publicly available.\n\n**Evaluation**: primary = current, specific, but costly; secondary = cheap, fast, but may be outdated/irrelevant.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Company surveys 500 customers about new product idea. Method?",
          solution: "Primary research — questionnaire.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-res-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is primary market research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gathering first-hand data directly" },
              { id: "b", text: "Reading newspapers" },
              { id: "c", text: "Guessing customer needs" },
              { id: "d", text: "Using existing reports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary research",
                statement: "First-hand data.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = own data collection.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** First-hand data",
            commonErrors: ["Secondary confused."],
          },
        },
        {
          id: "eiasbiz-u3-res-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of primary research methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary methods",
                statement: "Surveys, interviews.",
              },
            ],
            steps: [
              {
                reasoning: "Questionnaires/surveys.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interviews or focus groups.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Observation or experiments.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Questionnaires, interviews, observation.",
            commonErrors: ["Secondary.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u3-res-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two advantages and two disadvantages of questionnaires.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Questionnaire evaluation",
                statement: "Cheap/wide vs shallow.",
              },
            ],
            steps: [
              {
                reasoning: "Advantages: cheap, wide reach, quick.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advantages: easy to analyse quantitatively.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantages: shallow answers, low response rate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Disadvantages: can't clarify questions, biased wording.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Cheap/wide vs shallow/biased.",
            commonErrors: ["Only one side.", "No detail."],
          },
        },
        {
          id: "eiasbiz-u3-res-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A new café wants to understand customer preferences before opening.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two primary research methods.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest one secondary research source.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research choice",
                statement: "Primary for specific needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Street interviews near location — direct feedback.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Online questionnaire — wide reach, cheap.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Local council footfall data or competitor analysis.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Secondary = existing data, cheap context.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) interviews+questionnaire (b) secondary source",
            commonErrors: ["Only one.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u3-segmentation",
      title: "Market Segmentation",
      skill: "Apply segmentation criteria and evaluate targeting strategies.",
      lesson: {
        sections: [
          {
            heading: "Segmentation criteria",
            body: "**Demographic**: age, gender, income, occupation. **Geographic**: location, climate, urban/rural. **Psychographic**: lifestyle, values, personality. **Behavioural**: usage rate, loyalty, benefits sought.\n\n**Example**: car market — family buyers (safety, space), young professionals (status, efficiency), retirees (comfort, reliability).",
          },
          {
            heading: "Targeting strategies",
            body: "**Undifferentiated**: one product for whole market — e.g., mass-market goods. **Differentiated**: different products per segment — e.g., car ranges. **Concentrated/niche**: focus on one segment — luxury brands. **Micromarketing**: individual-level targeting — personalised offers.\n\n**Positioning**: how product is perceived vs competitors — quality, value, prestige, convenience.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Smartphone maker targets eco-conscious youth with sustainable materials. Segment?",
          solution: "Psychographic + demographic segmentation.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-seg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is market segmentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raising prices" },
              { id: "b", text: "Selling to everyone" },
              { id: "c", text: "Advertising" },
              { id: "d", text: "Dividing market into similar-need groups" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Segmentation",
                statement: "Group similar customers.",
              },
            ],
            steps: [
              {
                reasoning: "Segmentation = divide market.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Divide market",
            commonErrors: ["Targeting confused."],
          },
        },
        {
          id: "eiasbiz-u3-seg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two segmentation criteria with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Segmentation criteria",
                statement: "Demo, geo, psycho, behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Demographic — age, income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Psychographic — lifestyle, values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Behavioural — usage, loyalty.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Demographic, psychographic, behavioural.",
            commonErrors: ["Only one.", "Wrong criteria."],
          },
        },
        {
          id: "eiasbiz-u3-seg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between differentiated and niche targeting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Targeting",
                statement: "Multiple segments vs one.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differentiated: different products for different segments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Differentiated: broader market coverage, more costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Niche: focus on one specialised segment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Niche: less competition, less volume, higher margins possible.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Differentiated=multi-segment; niche=single focus.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "eiasbiz-u3-seg-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A coffee shop chain wants to expand.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two possible target segments.",
              marks: 4,
            },
            { label: "b", prompt: "Recommend a targeting strategy.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Targeting",
                statement: "Match product to segment.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Busy professionals — convenience, speed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Students — value, wifi, study space.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Differentiated — different offerings per segment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Or niche — premium segment only.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 2 segments (b) differentiated or niche",
            commonErrors: ["No segments.", "No strategy."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u3-mix",
      title: "The Marketing Mix",
      skill: "Explain the 4Ps and 7Ps and their interdependence.",
      lesson: {
        sections: [
          {
            heading: "The 4Ps",
            body: "**Product**: design, features, quality, branding, packaging. **Price**: pricing strategy — cost-plus, penetration, skimming, competitive. **Place**: distribution channels — direct, retailers, online, wholesalers. **Promotion**: advertising, sales promotion, PR, personal selling, digital marketing.\n\n**Interdependence**: change one P affects others — premium price needs premium product, quality promotion, exclusive place.",
          },
          {
            heading: "The 7Ps",
            body: "Services marketing adds: **People** (staff quality, training), **Process** (how service delivered — queues, booking), **Physical evidence** (environment, uniforms, website design).\n\n**Example**: restaurant — product=food, price=menu prices, place=location/delivery, promotion=offers, people=waiters, process=ordering system, physical=decor.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "New smartphone launch. Which P covers advertising?",
          solution: "Promotion.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-mix-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the 4Ps of the marketing mix?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Production, Profit, Plan, Policy" },
              { id: "b", text: "Product, Price, Place, Promotion" },
              { id: "c", text: "Price, Place, People, Process" },
              { id: "d", text: "Product, People, Process, Physical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "4Ps",
                statement: "Product-Price-Place-Promotion.",
              },
            ],
            steps: [
              { reasoning: "4Ps = core mix.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Product-Price-Place-Promotion",
            commonErrors: ["7Ps only."],
          },
        },
        {
          id: "eiasbiz-u3-mix-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What additional Ps does the 7Ps add for services?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "7Ps",
                statement: "People, Process, Physical.",
              },
            ],
            steps: [
              {
                reasoning: "People — staff quality/training.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Process — how service delivered.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Physical evidence — environment/branding.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "People, Process, Physical evidence.",
            commonErrors: ["4Ps.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u3-mix-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the marketing mix elements are interdependent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mix interdependence",
                statement: "4Ps must align.",
              },
            ],
            steps: [
              {
                reasoning: "Premium price requires premium product quality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Premium product needs quality promotion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Exclusive product needs exclusive distribution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "All Ps must send consistent message.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Elements must align — change one affects others.",
            commonErrors: ["Independent.", "No example."],
          },
        },
        {
          id: "eiasbiz-u3-mix-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A luxury watch brand launches a new model.",
          parts: [
            {
              label: "a",
              prompt: "Describe product and price strategy.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Describe place and promotion strategy.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketing mix",
                statement: "Consistent premium positioning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Product: premium materials, craftsmanship, heritage.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Price: high price — skimming, signals exclusivity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Place: exclusive boutiques, flagship stores.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Promotion: aspirational advertising, celebrity endorsements.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) premium product+price (b) exclusive place+promo",
            commonErrors: ["Inconsistent mix.", "No strategy."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u3-pricing",
      title: "Pricing Strategies",
      skill: "Evaluate pricing methods and their business impact.",
      lesson: {
        sections: [
          {
            heading: "Pricing methods",
            body: "**Cost-plus**: costs + markup — simple, ensures profit margin. **Competitive**: match competitors — common in retail. **Penetration**: low launch price — gain market share fast, then raise. **Skimming**: high launch price — early adopters, then reduce. **Value-based**: price on perceived value — premium products.\n\n**Dynamic pricing**: adjust by demand/time — airlines, Uber. **Predatory pricing**: below cost to eliminate competitors — often illegal.",
          },
          {
            heading: "Pricing factors",
            body: "**Costs**: must cover costs + profit. **Competition**: market prices set ceiling. **Demand**: price elasticity — luxury vs necessity. **Positioning**: price signals quality — cheap can mean low quality.\n\n**Price elasticity**: % change in demand ÷ % change in price. Elastic (>1): demand very sensitive — e.g., holidays. Inelastic (<1): demand insensitive — e.g., petrol, insulin.",
          },
        ],
        keyFormulas: [
          {
            name: "Price elasticity",
            statement: "%Δ quantity demanded ÷ %Δ price.",
          },
        ],
        workedExample: {
          problem: "Petrol price rises 10%, demand falls 2%. Elasticity?",
          solution: "0.2 — inelastic, revenue rises.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-price-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is penetration pricing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Matching competitors" },
              { id: "b", text: "Cost-plus pricing" },
              { id: "c", text: "High launch price" },
              { id: "d", text: "Low launch price to gain market share" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Penetration",
                statement: "Low price entry.",
              },
            ],
            steps: [
              {
                reasoning: "Penetration = low entry price.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Low entry price",
            commonErrors: ["Skimming confused."],
          },
        },
        {
          id: "eiasbiz-u3-price-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is price elasticity of demand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Price elasticity",
                statement: "Demand sensitivity.",
              },
            ],
            steps: [
              {
                reasoning: "% change in quantity demanded ÷ % change in price.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Elastic (>1): demand very sensitive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inelastic (<1): demand insensitive.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Measures demand sensitivity to price.",
            commonErrors: ["Wrong formula.", "No types."],
          },
        },
        {
          id: "eiasbiz-u3-price-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business might choose skimming over penetration pricing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Skimming",
                statement: "High price first.",
              },
            ],
            steps: [
              {
                reasoning: "Maximises revenue from early adopters.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Signals premium quality/exclusivity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Recovers development costs quickly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Then lower price to reach mass market.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Max early revenue, signals premium, then reduce.",
            commonErrors: ["Penetration.", "No reason."],
          },
        },
        {
          id: "eiasbiz-u3-price-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A streaming service must choose a pricing strategy.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two strategies and justify each.",
              marks: 4,
            },
            { label: "b", prompt: "Explain one pricing risk.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pricing strategy",
                statement: "Match to market.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Penetration — gain subscribers fast in competitive market.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Value-based — premium content justifies higher price.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Too high — customers switch to cheaper rivals.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Too low — hard to raise later, may signal low quality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) penetration+value (b) price risk both ways",
            commonErrors: ["One strategy.", "No risk."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u3-promotion",
      title: "Promotion and Digital Marketing",
      skill: "Evaluate promotional methods and digital channels.",
      lesson: {
        sections: [
          {
            heading: "Promotion methods",
            body: "**Advertising**: TV, radio, print, online — mass reach, expensive. **Sales promotion**: discounts, offers, samples — short-term boost. **Public relations**: press releases, events — builds reputation. **Personal selling**: face-to-face — high cost, personal touch. **Digital marketing**: social media, SEO, email, influencer — targeted, measurable, lower cost.\n\n**Above/below the line**: above = mass advertising (TV); below = targeted promotion (direct mail, sales reps).",
          },
          {
            heading: "Digital marketing",
            body: "**Social media**: engagement, brand awareness, targeted ads. **SEO**: appear in search results — organic traffic. **Email marketing**: direct, personalised, measurable. **Content marketing**: blogs, videos — build authority.\n\n**Evaluation**: reach vs cost, measurability, targeting precision, speed of response.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Company wants cheap targeted ads to young customers. Method?",
          solution: "Social media advertising.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-promo-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is sales promotion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personal selling" },
              { id: "b", text: "Public relations" },
              { id: "c", text: "TV advertising" },
              { id: "d", text: "Short-term incentives to boost sales" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sales promotion",
                statement: "Short-term incentives.",
              },
            ],
            steps: [
              {
                reasoning: "Sales promo = short-term boost.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Short-term incentives",
            commonErrors: ["Advertising confused."],
          },
        },
        {
          id: "eiasbiz-u3-promo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of digital marketing over traditional advertising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital marketing",
                statement: "Targeted, measurable, cheap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Precise targeting — demographics, interests, behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Measurable — track clicks, conversions, ROI.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower cost — small businesses can compete.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Targeting, measurability, cost.",
            commonErrors: ["Traditional better.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u3-promo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business might combine above-the-line and below-the-line promotion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Promotion mix",
                statement: "Mass + targeted.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Above-the-line: build awareness broadly — TV, billboards.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Below-the-line: convert interest — sales reps, direct mail.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Combination reaches wide audience then converts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: TV ad → website → sales call.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Awareness (above) + conversion (below).",
            commonErrors: ["One only.", "No combination."],
          },
        },
        {
          id: "eiasbiz-u3-promo-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A local bakery wants to promote a new cake range.",
          parts: [
            { label: "a", prompt: "Suggest two promotion methods.", marks: 4 },
            {
              label: "b",
              prompt: "Explain why each suits a small business.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Promotion choice",
                statement: "Cost-effective methods.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Social media — Instagram photos of cakes.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Local sampling/tastings — in-store promotion.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Social media: free/cheap, visual product, local targeting.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Sampling: customers try before buying, builds loyalty.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) social+sampling (b) cheap+targeted",
            commonErrors: ["TV ads.", "No justification."],
          },
        },
      ],
    },
  ],
};
