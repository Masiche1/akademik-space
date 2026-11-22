import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ciealbus-u5-lesson-5-1",
  code: "5-1",
  title: "Strategic Analysis: PESTLE and SWOT",
  goal: "I CAN apply PESTLE and SWOT frameworks to analyse business environments.",
  standards: [
    "Cambridge A Level Business 9707",
    "Unit 5: strategic analysis tools",
  ],
  vocabulary: [
    {
      term: "PESTLE",
      definition:
        "Political, Economic, Social, Technological, Legal, Environmental analysis.",
    },
    {
      term: "SWOT",
      definition: "Strengths, Weaknesses, Opportunities, Threats.",
    },
    {
      term: "Macro-environment",
      definition: "External factors beyond firm control.",
    },
    {
      term: "Micro-environment",
      definition: "Industry and competitive factors.",
    },
    {
      term: "Core competence",
      definition: "Unique capability giving competitive advantage.",
    },
    {
      term: "Stakeholder",
      definition: "Person/group affected by business decisions.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u5l1-c1-pestle",
      title: "PESTLE analysis of the macro-environment",
      skill: "Apply PESTLE to analyse external business factors.",
      lesson: {
        sections: [
          {
            heading: "PESTLE framework",
            body: "Analyzes **macro-environment** factors beyond firm control: **P**olitical (government policy, stability, trade agreements), **E**conomic (growth, inflation, interest rates, exchange rates), **S**ocial (demographics, culture, lifestyle trends), **T**echnological (innovation, automation, digital disruption), **L**egal (employment law, consumer protection, regulation), **E**nvironmental (climate change, sustainability, resource scarcity).",
          },
          {
            heading: "Using PESTLE effectively",
            body: "PESTLE identifies **opportunities** (e.g. growing eco-conscious market) and **threats** (e.g. new regulations, recession). Must be specific to the business and industry — generic lists score poorly. Link factors to business strategy: e.g. technological change → need for R&D investment.",
          },
        ],
        keyFormulas: [
          {
            name: "PESTLE",
            statement: "Political→Economic→Social→Tech→Legal→Environmental",
          },
          { name: "Macro-environment", statement: "Beyond firm control" },
          { name: "Micro-environment", statement: "Industry/competitors" },
        ],
        workedExample: {
          problem: "Apply PESTLE to a coffee shop chain.",
          solution:
            "P: minimum wage rises increase costs. E: recession reduces disposable income → fewer coffee sales. S: health trends favour specialty coffee. T: online ordering apps. L: food safety regulations. E: climate change threatens coffee bean supply.",
        },
      },
      questions: [
        {
          id: "ciealbus-q-u5l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "PESTLE stands for:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Political, Economic, Social, Technological, Legal, Environmental",
              },
              { id: "b", text: "Price, Elasticity, Supply, Tax" },
              { id: "c", text: "Production, Employees, Sales, Trade" },
              { id: "d", text: "People, Economy, Society, Technology" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "PESTLE", statement: "Six factors." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Six factors",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'macro-environment' in business analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Macro-env", statement: "External." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "External factors beyond firm control — political, economic, social, technological, legal, environmental conditions affecting all businesses; analysed via PESTLE.",
            commonErrors: ["Internal factors."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two 'technological' factors a retailer might face.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Tech factors", statement: "Innovation." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. rise of e-commerce forcing online presence, and self-checkout/automation reducing need for staff — technology changes how retail operates; firms must adapt or lose customers.",
            commonErrors: ["No tech impact."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply PESTLE to analyse opportunities for an electric vehicle manufacturer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PESTLE app",
                statement: "Applied analysis.",
              },
            ],
            steps: [
              { reasoning: "P/E.", marks: 1, markCode: "M" },
              { reasoning: "S/T.", marks: 1, markCode: "M" },
              { reasoning: "L/E.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "P: government EV subsidies favourable. E: rising fuel prices boost demand. S: environmental awareness growing. T: battery tech improving. L: emissions regulations tighten. E: climate concerns drive adoption — strong tailwinds for EV makers.",
            commonErrors: ["Generic list."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the usefulness of PESTLE analysis for strategic decision-making.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PESTLE eval",
                statement: "Framework value.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Systematic scan of macro factors, identifies opportunities/threats, easy to communicate — but can produce generic lists, static snapshot, ignores micro-environment; best combined with SWOT/Porter's for complete analysis.",
            commonErrors: ["Perfect tool."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between macro and micro environment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Macro vs micro",
                statement: "External vs industry.",
              },
            ],
            steps: [
              { reasoning: "Macro.", marks: 1, markCode: "M" },
              { reasoning: "Micro.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Macro: broad external factors (PESTLE) affecting all businesses. Micro: industry-specific factors — competitors, customers, suppliers (Porter's five forces); both needed for full analysis.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which PESTLE factor covers government policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic" },
              { id: "b", text: "Political" },
              { id: "c", text: "Legal" },
              { id: "d", text: "Social" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Political", statement: "Government." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Political",
            commonErrors: ["Legal."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two 'legal' factors affecting businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Legal factors", statement: "Regulation." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. employment laws (minimum wage, working hours) and consumer protection regulations (product safety, advertising rules) — compliance costs, limits practices, creates level playing field.",
            commonErrors: ["No legal impact."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does PESTLE differ from SWOT analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "PESTLE vs SWOT",
                statement: "External vs combined.",
              },
            ],
            steps: [
              { reasoning: "PESTLE.", marks: 1, markCode: "M" },
              { reasoning: "SWOT.", marks: 1, markCode: "M" },
              { reasoning: "Relation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "PESTLE analyses external macro-environment only; SWOT combines internal (strengths/weaknesses) and external (opportunities/threats) — PESTLE feeds into SWOT's O/T sections.",
            commonErrors: ["Same tool."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a recession identified through PESTLE's 'Economic' factor affects business strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recession strategy",
                statement: "Response.",
              },
            ],
            steps: [
              { reasoning: "Impact.", marks: 1, markCode: "M" },
              { reasoning: "Strategic response.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Recession → lower demand, credit tightening — firms cut costs, focus on essential products, improve efficiency, delay expansion; some invest in counter-cyclical opportunities; strategy adapts to economic reality.",
            commonErrors: ["No response needed."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which PESTLE factor covers climate change and sustainability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Legal" },
              { id: "b", text: "Social" },
              { id: "c", text: "Economic" },
              { id: "d", text: "Environmental" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Environmental",
                statement: "Climate+sustainability.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Environmental",
            commonErrors: ["Legal."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two 'economic' factors that could affect a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Economic factors", statement: "Macro." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. inflation (raises input costs, reduces real incomes) and interest rates (affect borrowing costs and consumer spending) — also economic growth, exchange rates, unemployment.",
            commonErrors: ["No econ impact."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which PESTLE factor covers rising health and lifestyle trends?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Technological" },
              { id: "b", text: "Political" },
              { id: "c", text: "Social" },
              { id: "d", text: "Economic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Social", statement: "Demographics+lifestyle." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Social",
            commonErrors: ["Technological."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply PESTLE to a fast-food restaurant chain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PESTLE app",
                statement: "Applied analysis.",
              },
            ],
            steps: [
              { reasoning: "P/E.", marks: 1, markCode: "M" },
              { reasoning: "S/T.", marks: 1, markCode: "M" },
              { reasoning: "L/E.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "P: minimum wage and food regulation tighten. E: inflation raises food costs. S: health-conscious consumers shift demand. T: delivery apps and kiosks. L: hygiene and advertising rules. E: packaging waste pressure — mixed environment requiring adaptation.",
            commonErrors: ["Generic list."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how PESTLE analysis can identify both opportunities and threats for a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PESTLE O/T",
                statement: "Dual outcomes.",
              },
            ],
            steps: [
              { reasoning: "Opportunity mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Threat mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Favourable changes (growing demand, supportive policy, new technology) = opportunities to exploit; unfavourable changes (recession, new regulation, disruption) = threats to defend against; same PESTLE factor can be O or T depending on firm position.",
            commonErrors: ["Only threats."],
          },
        },
        {
          id: "ciealbus-q-u5l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the limitations of PESTLE analysis when applied to strategic planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PESTLE limits",
                statement: "Framework critique.",
              },
            ],
            steps: [
              { reasoning: "Limit 1.", marks: 1, markCode: "M" },
              { reasoning: "Limit 2.", marks: 1, markCode: "M" },
              { reasoning: "Limit 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Can produce long generic lists with no prioritisation, static snapshot of changing environment, ignores micro-environment and firm-specific factors; useful as starting scan but must be combined with SWOT/Porter and reviewed regularly.",
            commonErrors: ["Sufficient alone."],
          },
        },
      ],
    },
    {
      id: "ciealbus-u5l1-c2-swot",
      title: "SWOT analysis",
      skill: "Conduct and apply SWOT analysis to business strategy.",
      lesson: {
        sections: [
          {
            heading: "SWOT components",
            body: "**Strengths**: internal advantages (brand, skills, resources, location). **Weaknesses**: internal disadvantages (high costs, poor reputation, skill gaps). **Opportunities**: external favourable trends (new markets, technology, regulations). **Threats**: external challenges (competition, recession, new entrants). S/W internal, O/T external — controllable vs uncontrollable.",
          },
          {
            heading: "Using SWOT strategically",
            body: "SWOT informs strategy: **SO strategies** (use strengths to seize opportunities), **WO** (overcome weaknesses to exploit opportunities), **ST** (use strengths to counter threats), **WT** (defensive — minimise weaknesses, avoid threats). SWOT is a starting point — needs prioritisation and action to be useful.",
          },
        ],
        keyFormulas: [
          { name: "S/W", statement: "Internal" },
          { name: "O/T", statement: "External" },
          { name: "SO strategy", statement: "Strengths+Opportunities" },
        ],
        workedExample: {
          problem: "SWOT for a local bakery facing supermarket competition.",
          solution:
            "S: fresh products, loyal customers, prime location. W: limited capital, no delivery. O: growing demand for artisan bread, online ordering. T: supermarket price competition, rising flour costs — strategy: emphasise quality/differentiation, add delivery.",
        },
      },
      questions: [
        {
          id: "ciealbus-q-u5l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SWOT stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strategy, Wealth, Output, Team" },
              { id: "b", text: "Sales, Work, Operations, Trade" },
              {
                id: "c",
                text: "Strengths, Weaknesses, Opportunities, Threats",
              },
              { id: "d", text: "Supply, Workers, Orders, Tax" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "SWOT", statement: "Four factors." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Four factors",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which SWOT elements are 'internal' to the business?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "fact", name: "Internal", statement: "S+W." }],
            steps: [
              { reasoning: "Correct elements.", marks: 1, markCode: "M" },
              { reasoning: "Why.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Strengths and Weaknesses — internal factors the firm can control (resources, capabilities, costs); Opportunities/Threats are external, uncontrollable.",
            commonErrors: ["O/T internal."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of 'strengths' a business might have.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Strengths", statement: "Advantages." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. strong brand reputation (customer loyalty, pricing power) and skilled workforce (quality, innovation) — also prime location, patents, financial resources.",
            commonErrors: ["External factors."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply SWOT to a small coffee shop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SWOT app", statement: "Applied." },
            ],
            steps: [
              { reasoning: "S/W.", marks: 1, markCode: "M" },
              { reasoning: "O/T.", marks: 1, markCode: "M" },
              { reasoning: "Strategy link.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "S: loyal customers, quality coffee. W: limited capital, no delivery. O: growing coffee culture, delivery apps. T: chain competition, rising costs — strategy: emphasise quality/service, add delivery via apps.",
            commonErrors: ["Generic list."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the usefulness of SWOT analysis for business strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SWOT eval",
                statement: "Tool value.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Simple, comprehensive, identifies strategic options (SO/WO/ST/WT) — but subjective, static, no prioritisation, can be generic; useful starting point but needs depth (PESTLE, Porter) and action planning to deliver value.",
            commonErrors: ["Perfect tool."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'SO strategy' mean in SWOT?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SO", statement: "Strength+Opp." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Strategy using internal strengths to exploit external opportunities — e.g. strong brand + growing market = expand aggressively; most favourable strategic position.",
            commonErrors: ["WT strategy."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In SWOT, 'Opportunities' are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Internal weaknesses" },
              { id: "b", text: "External favourable trends" },
              { id: "c", text: "Internal strengths" },
              { id: "d", text: "External threats" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Opportunities",
                statement: "External+positive.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** External positive",
            commonErrors: ["Internal."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of 'weaknesses' a business might have.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Weaknesses", statement: "Disadvantages." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. high operating costs (reduces profit margin) and outdated technology (loses to competitors) — also poor location, skill gaps, weak brand, limited capital.",
            commonErrors: ["Strengths."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how SWOT analysis feeds into strategic planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SWOT→strategy",
                statement: "Informs choices.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identifies strategic options — leverage strengths for opportunities, address weaknesses, defend against threats; provides basis for choosing growth, diversification, or defensive strategies.",
            commonErrors: ["No connection."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the limitations of SWOT analysis in complex business environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SWOT limits",
                statement: "Simplification.",
              },
            ],
            steps: [
              { reasoning: "Limit 1.", marks: 1, markCode: "M" },
              { reasoning: "Limit 2.", marks: 1, markCode: "M" },
              { reasoning: "Limit 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oversimplifies complex reality — factors interdependent (strength may become weakness if market changes), subjective assessment, no prioritisation, static snapshot; needs supplementary tools and ongoing review.",
            commonErrors: ["Sufficient alone."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In SWOT, 'Threats' are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "External challenges" },
              { id: "b", text: "Internal weaknesses" },
              { id: "c", text: "External opportunities" },
              { id: "d", text: "Internal strengths" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Threats",
                statement: "External+negative.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** External negative",
            commonErrors: ["Internal."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of 'threats' a business might face.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Threats", statement: "External risks." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. increased competition from new entrants (erodes market share) and rising raw material costs (squeezes profit margins) — also recession, changing consumer tastes, new regulations.",
            commonErrors: ["Internal factors."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which SWOT strategy uses internal strengths to counter external threats?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SO strategy" },
              { id: "b", text: "ST strategy" },
              { id: "c", text: "WT strategy" },
              { id: "d", text: "WO strategy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "ST", statement: "Strengths vs threats." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** ST strategy",
            commonErrors: ["SO."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply SWOT to a tech startup launching a new app.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SWOT app", statement: "Applied." },
            ],
            steps: [
              { reasoning: "S/W.", marks: 1, markCode: "M" },
              { reasoning: "O/T.", marks: 1, markCode: "M" },
              { reasoning: "Strategy link.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "S: innovative product, agile team. W: limited funding, no brand. O: growing app market, remote work trends. T: big tech competitors, rapid tech change — strategy: niche differentiation, seek investment, move fast.",
            commonErrors: ["Generic list."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a 'WT strategy' differs from an 'SO strategy' and when each is appropriate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "WT vs SO", statement: "Strategy types." },
            ],
            steps: [
              { reasoning: "SO explained.", marks: 1, markCode: "M" },
              { reasoning: "WT explained.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "SO: exploit strengths to seize opportunities — aggressive growth when position strong. WT: minimise weaknesses and avoid threats — defensive survival when position weak; chosen when firm lacks resources to compete directly.",
            commonErrors: ["Same strategy."],
          },
        },
        {
          id: "ciealbus-q-u5l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how SWOT analysis can be combined with PESTLE to improve strategic decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SWOT+PESTLE",
                statement: "Combined analysis.",
              },
            ],
            steps: [
              { reasoning: "Complementarity.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "PESTLE scans macro-environment to identify opportunities/threats; SWOT adds internal strengths/weaknesses — together give complete picture: external context plus internal capability; more robust than either alone.",
            commonErrors: ["Redundant tools."],
          },
        },
      ],
    },
  ],
};
