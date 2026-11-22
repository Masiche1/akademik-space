import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "bus-u1-lesson-1-3",
  code: "1-3",
  title: "Enterprise and entrepreneurship",
  goal: "I CAN describe the characteristics of entrepreneurs and enterprising businesses, and explain the role of business plans and enterprise support.",
  standards: ["Paper 1", "Paper 2", "Topic 1.3"],
  vocabulary: [
    {
      term: "Enterprise",
      definition:
        "The willingness and ability to take risks and create new business ventures.",
    },
    {
      term: "Entrepreneur",
      definition:
        "An individual who identifies opportunities, takes risks and organises resources to start a business.",
    },
    {
      term: "Entrepreneurial skills",
      definition:
        "Abilities such as creativity, risk-taking, teamwork, communication and problem-solving.",
    },
    {
      term: "Business plan",
      definition:
        "A document setting out a proposed business's objectives, strategies, finances and forecasts.",
    },
    {
      term: "Franchise",
      definition:
        "A business model where the owner pays for the right to trade under an established brand.",
    },
    {
      term: "Enterprise education",
      definition:
        "Teaching that develops enterprise skills and awareness of business opportunities.",
    },
    {
      term: "Business incubator",
      definition:
        "An organisation that supports start-ups with premises, advice and finance in their early stages.",
    },
  ],
  concepts: [
    {
      id: "bus-u1-entrepreneur",
      title: "The entrepreneur and enterprise",
      skill:
        "Describe entrepreneurial characteristics, enterprise skills and the role of enterprise in the economy.",
      lesson: {
        sections: [
          {
            heading: "What makes an entrepreneur",
            body: "An **entrepreneur** spots opportunities, takes calculated risks and combines land, labour and capital to create value. Typical characteristics include **creativity**, **initiative**, **risk-taking**, **resilience**, **persuasion** and **leadership**. Successful entrepreneurs often fail several times before succeeding — persistence matters as much as the idea.",
          },
          {
            heading: "Enterprise skills in business",
            body: "Enterprise is not only for start-ups. Inside established firms, **enterprise skills** drive innovation: spotting market gaps, improving products, launching new ventures (intrapreneurship). Governments promote **enterprise education** because new businesses create jobs, raise competition and drive economic growth.",
          },
          {
            heading: "Forms of enterprise",
            body: "Enterprise appears as **start-ups**, **franchises** (buying into a proven brand like fast food chains), **social enterprises** (businesses with social aims) and **intrapreneurship** inside large firms. Each balances risk and reward differently — a franchise lowers risk by providing a tested model and brand.",
          },
        ],
        keyFormulas: [
          {
            name: "Entrepreneurial characteristics",
            statement:
              "Risk-taking, creativity, initiative, resilience, leadership",
          },
          {
            name: "Enterprise impact",
            statement: "New jobs + competition + innovation → economic growth",
          },
        ],
        workedExample: {
          problem:
            "A student notices her school lacks a snack bar. Identify three entrepreneurial characteristics she would need and one risk she faces.",
          solution:
            "Characteristics: initiative (spotting the gap), risk-taking (investing savings), persuasion (winning school approval). Risk: financial loss if demand is lower than expected.",
        },
      },
      questions: [
        {
          id: "bus-u1-ent-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which characteristic is most associated with an entrepreneur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoiding all risk" },
              { id: "b", text: "Taking calculated risks to start ventures" },
              { id: "c", text: "Waiting for others to act first" },
              { id: "d", text: "Preferring guaranteed salaries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entrepreneur",
                statement:
                  "Someone who identifies opportunities, takes risks and organises resources to create a business.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Entrepreneurs are defined by spotting opportunities and bearing risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Taking calculated risks",
            commonErrors: [
              "Confusing entrepreneurs with managers — managers may not own or risk capital.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State three ways new businesses benefit the wider economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enterprise benefits",
                statement:
                  "Job creation, increased competition, innovation, tax revenue.",
              },
            ],
            steps: [
              {
                reasoning: "Create employment for founders and staff.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increase competition, improving quality and lowering prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drive innovation and pay taxes — any valid benefit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Jobs, competition, innovation, tax revenue, growth.",
            commonErrors: [
              "Listing benefits to the entrepreneur only, not the economy.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a franchise might be less risky for a new entrepreneur than starting an independent business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Franchise advantage",
                statement:
                  "Established brand, proven systems and support reduce uncertainty.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The franchisee trades under a recognised brand with existing customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The franchisor supplies tested products, training and marketing systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ongoing support and sometimes financing reduce the risk of failure.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: proven model lowers risk compared with an untested idea.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Brand recognition, proven systems and franchisor support reduce uncertainty.",
            commonErrors: [
              "Ignoring that franchisees pay fees and lose independence.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A graduate wants to start a meal-delivery business but has little experience and limited savings.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a business plan would help this entrepreneur.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe two sources of support a new entrepreneur could use.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the graduate should start the business now or gain experience first.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enterprise support",
                statement:
                  "Business plans, incubators, mentors and finance reduce start-up risk.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Forces the entrepreneur to test the idea, forecast finances and plan marketing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "A plan is essential to win finance and support from lenders or agencies.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Business incubators/enterprise agencies provide premises, advice and networks.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Mentors or enterprise education programmes build skills.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Bank loans, grants or investors supply finance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Starting now tests the idea but risks failure with limited savings; experience improves odds but may miss the opportunity.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned judgement for the specific case.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Tests idea, forecasts, attracts finance. (b) Incubators, mentors, finance. (c) Trade-off between risk and opportunity.",
            commonErrors: [
              "Listing support without explaining how it helps a start-up.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An entrepreneur is best described as someone who:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Works only for a government agency" },
              {
                id: "b",
                text: "Identifies opportunities, takes risks and organises resources to create a venture",
              },
              { id: "c", text: "Lends money to businesses" },
              { id: "d", text: "Manages an existing business for a salary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entrepreneur",
                statement:
                  "An individual who spots opportunities, takes risks and combines resources to create value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The defining acts are spotting opportunity, bearing risk and organising resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Identifies opportunities, takes risks and organises resources",
            commonErrors: [
              "Confusing entrepreneurs with managers or investors.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Enterprise education mainly aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guarantee business success" },
              { id: "b", text: "Replace university degrees" },
              {
                id: "c",
                text: "Develop enterprise skills and awareness of business opportunities",
              },
              { id: "d", text: "Train people to be accountants" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enterprise education",
                statement:
                  "Teaching that builds enterprise skills, creativity and awareness of opportunities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It builds skills such as risk-taking, teamwork and problem-solving.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Develop enterprise skills and awareness of business opportunities",
            commonErrors: [
              "Thinking enterprise education guarantees success — it builds skills, not outcomes.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Intrapreneurship refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Employees acting entrepreneurially inside an established firm",
              },
              { id: "b", text: "Starting a business outside any organisation" },
              { id: "c", text: "Buying a franchise" },
              { id: "d", text: "Working for a social enterprise only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intrapreneurship",
                statement:
                  "Entrepreneurial behaviour — innovation and new ventures — within a large organisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intrapreneurs use enterprise skills inside an existing employer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Employees acting entrepreneurially inside an established firm",
            commonErrors: [
              "Confusing intrapreneurship with starting an independent business.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A social enterprise is best described as a business that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is owned by the government" },
              {
                id: "b",
                text: "Combines profit-making with social or environmental aims",
              },
              { id: "c", text: "Operates only as a charity" },
              { id: "d", text: "Never makes a profit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social enterprise",
                statement:
                  "A business trading for profit while pursuing social or environmental objectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It earns revenue like a normal firm but reinvests for social aims.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Combines profit-making with social or environmental aims",
            commonErrors: [
              "Confusing social enterprises with charities — they trade commercially.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Resilience is an important entrepreneurial characteristic because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removes the need for finance" },
              { id: "b", text: "It means avoiding all risk" },
              { id: "c", text: "It guarantees the venture will succeed" },
              {
                id: "d",
                text: "Most entrepreneurs fail several times before succeeding",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resilience",
                statement:
                  "The ability to recover from setbacks — essential because most ventures face early failure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Start-ups often fail; persistence through failure separates successful entrepreneurs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Most entrepreneurs fail several times before succeeding",
            commonErrors: [
              "Thinking resilience means never failing — it means recovering from failure.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A drawback of buying a franchise compared with starting an independent business is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete freedom to change the product" },
              { id: "b", text: "No need to pay any fees" },
              {
                id: "c",
                text: "Paying fees or royalties and having less independence",
              },
              { id: "d", text: "Guaranteed profit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Franchise trade-off",
                statement:
                  "Lower risk and proven systems are paid for through fees and reduced independence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Franchisees pay upfront fees and ongoing royalties to the franchisor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They must follow the franchisor's rules, limiting independence.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Paying fees or royalties and having less independence",
            commonErrors: [
              "Listing only franchise benefits — the question asks for a drawback.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Describe three characteristics of a successful entrepreneur.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entrepreneurial characteristics",
                statement:
                  "Risk-taking, creativity, initiative, resilience, persuasion, leadership.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Risk-taking — willing to invest money and effort with uncertain returns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Creativity and initiative — spotting opportunities others miss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Resilience/persistence — recovering from failure and setbacks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Any three valid characteristics clearly described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Risk-taking, creativity/initiative, resilience, persuasion, leadership.",
            commonErrors: [
              "Listing skills like accounting without explaining entrepreneurial traits.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how enterprise education can benefit an economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enterprise education benefits",
                statement:
                  "More enterprise skills lead to more start-ups, jobs and innovation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Graduates with enterprise skills are more likely to start businesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "New businesses create jobs and increase competition, improving efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Innovation and enterprise drive economic growth and competitiveness.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: enterprise education is a long-term investment in the economy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "More skilled potential entrepreneurs → more start-ups → jobs, competition and growth.",
            commonErrors: [
              "Describing benefits to individuals only, not the wider economy.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why persistence is a key entrepreneurial characteristic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Persistence",
                statement:
                  "Most new ventures face early problems and setbacks; continuing despite them is essential.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistics show most start-ups face cash-flow problems or weak demand in the first years.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Many successful entrepreneurs failed before — failure is a learning experience, not the end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Persistence means adapting the product, cutting costs and trying again rather than quitting.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Without persistence, good ideas die before they can succeed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: resilience turns setbacks into experience and eventual success.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Start-ups face high failure risk; persistence lets entrepreneurs learn and adapt until they succeed.",
            commonErrors: ["Claiming successful entrepreneurs never fail."],
          },
        },
        {
          id: "bus-u1-ent-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A student wants to start an online store selling handmade crafts but has little money and no business experience.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two entrepreneurial skills or characteristics the student would need.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe two sources of support available to a new entrepreneur.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the student should start the business now or gain experience first.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enterprise skills and support",
                statement:
                  "Skills like risk-taking and creativity, plus support from incubators, mentors and finance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Risk-taking — investing limited savings with uncertain returns.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Creativity/initiative — spotting the market gap and promoting the store.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Business incubators or enterprise agencies offer advice, workspace and networks.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Mentors provide experience; enterprise courses build skills.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Small loans, grants or investors could supply finance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Starting now tests the idea cheaply (online, low overhead) but risks losing limited savings; experience improves odds but may miss the market window.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement — e.g. start small-scale while building skills through support.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Risk-taking, creativity/initiative. (b) Incubators, mentors, finance. (c) Trade-off between low-cost testing and lack of experience.",
            commonErrors: [
              "Listing support without explaining how it helps this specific start-up.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A new business has fixed costs of $12,000, sells its product for $8 each and has variable costs of $5 per unit. Calculate the break-even output in units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Break-even output (units)",
                answer: 4000,
                unit: "units",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Break-even",
                statement:
                  "Break-even output = fixed costs / (price - variable cost per unit)",
              },
            ],
            steps: [
              {
                reasoning: "Calculate contribution per unit.",
                working: "8 - 5 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide fixed costs by contribution.",
                working: "12000 / 3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the break-even output.",
                working: "= 4000 units",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4,000$ units",
            commonErrors: [
              "Dividing fixed costs by price instead of contribution per unit.",
            ],
          },
        },
        {
          id: "bus-u1-ent-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A start-up has fixed costs of $20,000 and a contribution of $4 per unit. The entrepreneur wants a profit of $8,000. Calculate the output needed to achieve this profit.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Output for target profit (units)",
                answer: 7000,
                unit: "units",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Target profit output",
                statement:
                  "Output = (fixed costs + target profit) / contribution per unit",
              },
            ],
            steps: [
              {
                reasoning: "Total funds needed = fixed costs + desired profit.",
                working: "20000 + 8000 = 28000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by contribution per unit.",
                working: "28000 / 4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the required output.",
                working: "= 7000 units",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Check: 7000 units covers fixed costs and leaves $8,000 profit.",
                working: "7000 x 4 - 20000 = 8000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$7,000$ units",
            commonErrors: [
              "Using only fixed costs — forgetting to add the target profit.",
            ],
          },
        },
      ],
    },
    {
      id: "bus-u1-plan",
      title: "Business plans and enterprise support",
      skill:
        "Explain the contents and purposes of a business plan and describe support available to new enterprises.",
      lesson: {
        sections: [
          {
            heading: "What a business plan contains",
            body: "A **business plan** covers: the business idea and objectives; market analysis; marketing strategy; operations plan; management structure; and financial forecasts (cash-flow forecast, profit forecast, break-even). It forces the entrepreneur to test assumptions and is usually required by banks, investors and government support schemes.",
          },
          {
            heading: "Sources of enterprise support",
            body: "New entrepreneurs can access **business incubators** (workspace, mentoring, seed finance), **government enterprise agencies** (advice, grants), **mentors** (experienced businesspeople), **enterprise education programmes** and **small-business finance schemes**. Support lowers failure rates by building skills before and during start-up.",
          },
          {
            heading: "Why planning matters",
            body: "Research suggests most business failures result from poor planning — no market research, weak cash-flow forecasts or underestimating costs. A plan is a living document: it guides decisions, convinces lenders, and helps the entrepreneur spot problems early enough to adapt.",
          },
        ],
        keyFormulas: [
          {
            name: "Business plan contents",
            statement:
              "Idea, market analysis, marketing, operations, management, financial forecasts",
          },
          {
            name: "Support sources",
            statement:
              "Incubators, government agencies, mentors, finance schemes",
          },
        ],
        workedExample: {
          problem:
            "List three sections of a business plan and explain why a bank would require one before lending.",
          solution:
            "Market analysis (proves demand), financial forecasts (shows repayment ability), marketing plan (shows how sales will be achieved). The bank needs evidence the venture can generate enough cash to repay the loan.",
        },
      },
      questions: [
        {
          id: "bus-u1-plan-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which section of a business plan shows whether the business will have enough cash to survive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marketing plan" },
              { id: "b", text: "Management structure" },
              { id: "c", text: "Cash-flow forecast" },
              { id: "d", text: "Market analysis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash-flow forecast",
                statement:
                  "A projection of expected cash inflows and outflows over a period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Survival depends on timing of cash in and out — that is the cash-flow forecast.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Cash-flow forecast",
            commonErrors: [
              "Choosing profit forecast — profit ignores timing of cash.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State three purposes of a business plan for a new entrepreneur.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Business plan purposes",
                statement:
                  "Test the idea, guide decisions, attract finance and support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tests and refines the business idea through research and forecasts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Provides a decision-making framework as the business grows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Essential for winning loans, investment and support — any valid purpose.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Test idea, guide decisions, attract finance/support.",
            commonErrors: [
              "Saying the plan is only for the bank — it guides the entrepreneur too.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how a business incubator helps a start-up business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Business incubator",
                statement:
                  "Provides premises, mentoring, networks and sometimes finance to early-stage firms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Offers low-cost workspace and shared services, cutting early fixed costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Provides mentoring and business advice that builds the entrepreneur's skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Networks and sometimes seed finance improve survival chances.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: support reduces the failure risk of new ventures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Premises, mentoring, networks and finance reduce start-up risk.",
            commonErrors: ["Describing an incubator as only a funding body."],
          },
        },
        {
          id: "bus-u1-plan-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Statistics show most new businesses fail within five years.",
          parts: [
            {
              label: "a",
              prompt: "Identify two common reasons why new businesses fail.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how market research reduces the risk of failure.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether government support schemes can significantly reduce business failure rates.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Failure causes and prevention",
                statement:
                  "Poor planning, weak demand, cash-flow problems; research and support mitigate them.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Poor planning/market research — product with no real demand.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Cash-flow problems or undercapitalisation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Research reveals whether customers want the product and at what price.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Identifies market size, competitors and gaps before committing capital.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Allows the entrepreneur to adapt the product and forecast realistically.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Support helps but cannot guarantee success — markets and management matter too.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on effectiveness of schemes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Poor planning, weak demand, cash-flow failure. (b) Validates demand, size and price before investing. (c) Helpful but not a guarantee.",
            commonErrors: ["Claiming research eliminates risk entirely."],
          },
        },
        {
          id: "bus-u1-plan-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A business plan is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of staff salaries" },
              { id: "b", text: "A tax return for the business" },
              {
                id: "c",
                text: "A document setting out objectives, strategies, finances and forecasts",
              },
              { id: "d", text: "A legal contract with customers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business plan",
                statement:
                  "A document covering the idea, market analysis, strategies, operations and financial forecasts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It sets out the venture's aims and how it will achieve them financially.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** A document setting out objectives, strategies, finances and forecasts",
            commonErrors: [
              "Confusing a business plan with an accounting document.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which section of a business plan analyses competitors and target customers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Market analysis" },
              { id: "b", text: "Operations plan" },
              { id: "c", text: "Cash-flow forecast" },
              { id: "d", text: "Management structure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Market analysis",
                statement:
                  "The plan section examining market size, competitors, customers and demand.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Customers and competitors are studied in the market analysis section.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Market analysis",
            commonErrors: [
              "Choosing the marketing plan — analysis is research, marketing plan is strategy.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A cash-flow forecast differs from a profit forecast because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is written by the bank" },
              {
                id: "b",
                text: "Tracks the timing of cash inflows and outflows",
              },
              { id: "c", text: "Ignores all costs" },
              { id: "d", text: "Only covers the first month" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash-flow vs profit",
                statement:
                  "Profit ignores timing; cash-flow shows when money actually enters and leaves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A business can be profitable yet fail if cash arrives too late.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Tracks the timing of cash inflows and outflows",
            commonErrors: [
              "Thinking profit and cash are the same — timing differences matter.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Banks usually require a business plan before lending because they want to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Set the interest rate at zero" },
              {
                id: "b",
                text: "Assess whether the venture can generate enough cash to repay the loan",
              },
              { id: "c", text: "Take over the business" },
              { id: "d", text: "Guarantee the business will succeed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lender requirement",
                statement:
                  "Lenders need evidence of viable demand and repayment capacity before lending.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The plan's forecasts show whether cash flows will cover repayments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Assess whether the venture can generate enough cash to repay the loan",
            commonErrors: [
              "Thinking the bank wants ownership — it wants repayment security.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Most new business failures are most strongly linked to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Charging prices that are too high" },
              {
                id: "b",
                text: "Poor planning — weak market research and cash-flow forecasts",
              },
              { id: "c", text: "Employing too many staff" },
              { id: "d", text: "Businesses being too well planned" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Failure causes",
                statement:
                  "Most failures trace to poor planning: no market research, weak forecasts, underestimated costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Products with no real demand and cash-flow surprises kill most start-ups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Poor planning — weak market research and cash-flow forecasts",
            commonErrors: [
              "Blaming external factors — research points to planning failures.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a business plan should be treated as a living document and updated regularly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Living business plan",
                statement:
                  "Plans must reflect changing market conditions, costs and actual performance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Actual sales, costs and market conditions change after launch.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Updating the plan keeps forecasts realistic and decisions aligned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It helps spot problems early — cash shortfalls, weak demand — while they can still be fixed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: a static plan becomes misleading; a living plan guides adaptation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conditions change; regular updates keep the plan realistic and reveal problems early.",
            commonErrors: [
              "Treating the plan as a one-off document written only for the bank.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two reasons why entrepreneurs find writing a business plan useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Business plan benefits",
                statement:
                  "Testing assumptions and structuring decisions before committing capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It forces the entrepreneur to test the idea — market research may reveal weak demand before money is spent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Financial forecasts expose whether the venture can cover costs and generate cash.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It provides a benchmark for measuring actual performance against the plan.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Any two valid reasons clearly explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tests the idea and finances before launch; guides decisions and performance review.",
            commonErrors: [
              "Saying the plan is only needed to impress lenders.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain how a cash-flow forecast helps a new business survive its first year.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash-flow forecasting",
                statement:
                  "Projecting when cash enters and leaves identifies shortfall periods before they occur.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Start-ups often have high upfront costs but slow initial sales — a timing gap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The forecast shows exactly which months cash will be short, allowing action in advance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The entrepreneur can arrange overdrafts, delay spending or build reserves before the gap hits.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Without it, a profitable-on-paper business can fail from running out of cash.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: the forecast turns a survival risk into a manageable planning problem.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It predicts cash shortfalls early so the entrepreneur can arrange finance or cut spending in time.",
            commonErrors: [
              "Confusing cash-flow with profit — a firm can be profitable yet insolvent.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Compare the support offered by a business incubator and by a mentor to a new entrepreneur.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enterprise support types",
                statement:
                  "Incubators provide infrastructure and networks; mentors provide personal experience and guidance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An incubator offers premises, shared services, training and sometimes seed finance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It provides a structured environment and networks of other start-ups and investors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A mentor is an experienced businessperson giving one-to-one advice and introductions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mentoring is more personal and flexible but lacks the physical resources of an incubator.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: they complement each other — incubator for resources, mentor for wisdom.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Incubator = premises, training, networks, finance; mentor = personal guidance and experience.",
            commonErrors: [
              "Describing both as the same thing — they differ in formality and resources.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A graduate is writing a business plan for a new café and will present it to a bank.",
          parts: [
            {
              label: "a",
              prompt: "Identify two sections the plan must include.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the market analysis section helps the graduate.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether having a business plan guarantees the café's success.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Business plan contents",
                statement:
                  "Idea, market analysis, marketing, operations, management and financial forecasts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any two: market analysis, marketing plan, operations plan, management structure, financial forecasts.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both sections correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "It shows whether enough customers want the café and at what prices.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It identifies competitors and gaps the café could exploit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It provides the evidence the bank needs to judge repayment risk.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "A plan improves the odds but cannot guarantee success — execution, competition and luck still matter.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned judgement on the plan's limits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Any two valid sections. (b) Validates demand, competition and bank confidence. (c) Improves odds but does not guarantee success.",
            commonErrors: ["Claiming a business plan guarantees success."],
          },
        },
        {
          id: "bus-u1-plan-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A new business forecasts cash receipts of $20,000 and cash payments of $18,000 in its first month. It starts with $5,000 in the bank. Calculate the closing cash balance for the month.",
          response: {
            type: "numeric",
            parts: [
              { label: "Closing cash balance ($)", answer: 7000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing cash balance",
                statement:
                  "Closing balance = opening balance + receipts - payments",
              },
            ],
            steps: [
              {
                reasoning: "Net cash movement = receipts - payments.",
                working: "20000 - 18000 = 2000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add opening balance.",
                working: "5000 + 2000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the closing balance.",
                working: "= 7000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$7,000$",
            commonErrors: [
              "Subtracting receipts from payments — receipts increase cash.",
            ],
          },
        },
        {
          id: "bus-u1-plan-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A planned café has fixed costs of $30,000, sells meals for $10 each and has variable costs of $6 per meal. Calculate the break-even output in meals.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Break-even output (meals)",
                answer: 7500,
                unit: "meals",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Break-even",
                statement:
                  "Break-even output = fixed costs / contribution per unit",
              },
            ],
            steps: [
              {
                reasoning: "Calculate contribution per meal.",
                working: "10 - 6 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide fixed costs by contribution.",
                working: "30000 / 4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the break-even output.",
                working: "= 7500 meals",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Check: 7500 meals x $4 = $30,000 covering all fixed costs.",
                working: "7500 x 4 = 30000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$7,500$ meals",
            commonErrors: [
              "Using price instead of contribution — variable costs must be deducted first.",
            ],
          },
        },
      ],
    },
  ],
};
