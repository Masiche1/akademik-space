import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "s7-u10-lesson-10-2",
  code: "10-2",
  title: "Engineering Design and Technology",
  goal: "I CAN describe the engineering design process, evaluate technology solutions, and analyze trade-offs in design decisions.",
  standards: [
    "MS-ETS1-1",
    "MS-ETS1-2",
    "MS-ETS1-3",
    "SEP: Planning and Carrying Out Investigations",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Engineering design",
      definition:
        "The process of solving problems through design and iteration.",
    },
    {
      term: "Prototype",
      definition:
        "A working model built to test a design before full production.",
    },
    {
      term: "Trade-off",
      definition: "A compromise where improving one aspect worsens another.",
    },
    {
      term: "Constraint",
      definition: "A limitation on a design (cost, materials, safety).",
    },
    {
      term: "Optimization",
      definition: "Making the best possible design given constraints.",
    },
    {
      term: "Iteration",
      definition: "Repeating the design process to improve a solution.",
    },
    { term: "Criteria", definition: "The requirements a solution must meet." },
  ],
  concepts: [
    {
      id: "s7-u10-design-process",
      title: "The engineering design process",
      skill:
        "Describe the steps of the engineering design process and apply them to problems.",
      lesson: {
        sections: [
          {
            heading: "Steps of design",
            body: "The engineering design process:\n\n1. **Define the problem**: What needs to be solved?\n2. **Research**: Gather information about constraints and existing solutions.\n3. **Brainstorm**: Generate possible solutions.\n4. **Choose and design**: Select the best idea and create a detailed plan.\n5. **Build prototype**: Create a working model.\n6. **Test and evaluate**: Test against criteria and constraints.\n7. **Iterate**: Improve based on results.\n8. **Implement**: Final solution.",
          },
          {
            heading: "Criteria and constraints",
            body: "- **Criteria**: requirements the solution must meet (e.g., must be cheap, durable, safe).\n- **Constraints**: limitations on the design (e.g., budget, available materials, time).\n\nA good design meets all criteria while respecting constraints.",
          },
        ],
        keyFormulas: [
          {
            name: "Design process",
            statement:
              "Define → research → brainstorm → design → prototype → test → iterate → implement.",
          },
          { name: "Criteria", statement: "Requirements solution must meet." },
          { name: "Constraints", statement: "Limitations on design." },
        ],
        workedExample: {
          problem: "Design a bridge to span a river.",
          solution:
            "Define (cross river safely), research (materials, load), brainstorm (beam, arch, suspension), design, prototype, test, iterate, build.",
        },
      },
      questions: [
        {
          id: "s7-u10-design-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in the engineering design process?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Build a prototype" },
              { id: "b", text: "Define the problem" },
              { id: "c", text: "Test the solution" },
              { id: "d", text: "Implement the design" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Design process",
                statement: "First step: define the problem.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The design process starts by defining the problem to solve.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Define the problem.",
            commonErrors: ["Choosing (a): prototyping comes later."],
          },
        },
        {
          id: "s7-u10-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between criteria and constraints.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Criteria vs constraints",
                statement:
                  "Criteria = requirements; constraints = limitations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criteria: requirements the solution must meet (performance, safety).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Constraints: limitations on the design (cost, materials, time).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Good design meets criteria while respecting constraints.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Criteria = requirements; constraints = limitations.",
            commonErrors: ["Confusing the two terms."],
          },
        },
        {
          id: "s7-u10-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is iteration important in engineering design?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Iteration",
                statement:
                  "Improving designs through repeated testing and refinement.",
              },
            ],
            steps: [
              {
                reasoning: "First designs are rarely perfect.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Testing reveals problems and areas for improvement.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Iteration allows refinement until criteria are met.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This leads to better, more reliable solutions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Iteration improves designs through repeated testing and refinement.",
            commonErrors: ["Saying first design is always best."],
          },
        },
        {
          id: "s7-u10-design-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a solution for a school needing more parking space.",
          parts: [
            { label: "a", prompt: "Define the problem.", marks: 2 },
            {
              label: "b",
              prompt: "List two criteria and two constraints.",
              marks: 2,
            },
            { label: "c", prompt: "Propose two possible solutions.", marks: 2 },
            { label: "d", prompt: "Which would you choose and why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Design process",
                statement:
                  "Define → criteria/constraints → solutions → choose.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Not enough parking for students and staff.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Criteria: safe, convenient, affordable. Constraints: budget, available land.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Expand lot; multi-story garage; shared parking; shuttle service.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Choose based on criteria met within constraints (e.g., expand lot if budget allows).",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Parking shortage (b) Safe/affordable; budget/land (c) Expand/garage/shuttle (d) Best fits criteria.",
            commonErrors: ["Not defining problem first."],
          },
        },
      ],
    },
    {
      id: "s7-u10-trade-offs",
      title: "Trade-offs and Optimization",
      skill:
        "Analyze trade-offs in engineering designs and optimize solutions.",
      lesson: {
        sections: [
          {
            heading: "Trade-offs in design",
            body: "A **trade-off** is a compromise where improving one aspect worsens another. Examples:\n\n- **Car design**: lighter = better fuel economy but less safe.\n- **Building materials**: stronger = heavier and more expensive.\n- **Energy**: solar = clean but expensive initially; fossil fuels = cheap but polluting.\n\nGood engineers identify trade-offs and choose the best balance.",
          },
          {
            heading: "Optimization",
            body: "**Optimization** means making the best possible design given constraints. This involves:\n\n- Identifying the most important criteria.\n- Finding the design that best balances competing factors.\n- Accepting that perfection is impossible — the goal is the best compromise.",
          },
        ],
        keyFormulas: [
          {
            name: "Trade-off",
            statement: "Improving one aspect worsens another.",
          },
          {
            name: "Optimization",
            statement: "Best possible design given constraints.",
          },
          {
            name: "Balance",
            statement: "Good design balances competing factors.",
          },
        ],
        workedExample: {
          problem:
            "A laptop battery should be light but long-lasting. What's the trade-off?",
          solution:
            "Lighter batteries have less capacity; larger batteries are heavier. The design must balance weight vs battery life.",
        },
      },
      questions: [
        {
          id: "s7-u10-trade-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a trade-off in engineering design?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A design with no compromises" },
              { id: "b", text: "Improving one aspect worsens another" },
              { id: "c", text: "A type of material" },
              { id: "d", text: "A testing method" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade-off",
                statement: "Improving one aspect worsens another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trade-offs are compromises where one improvement comes at the cost of another.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Improving one aspect worsens another.",
            commonErrors: ["Saying trade-offs don't exist."],
          },
        },
        {
          id: "s7-u10-trade-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a trade-off in product design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Trade-offs",
                statement: "Competing factors require compromise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Car: lighter weight = better fuel economy but less safety.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Smartphone: larger screen = better viewing but shorter battery life.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Building: more insulation = lower heating costs but higher upfront cost.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Car: light vs safe. Phone: screen vs battery. Building: insulation vs cost.",
            commonErrors: ["Not identifying the competing factors."],
          },
        },
        {
          id: "s7-u10-trade-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why optimization is necessary in engineering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Optimization",
                statement: "Best possible design given constraints.",
              },
            ],
            steps: [
              {
                reasoning: "Resources (money, materials, time) are limited.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Perfect designs are impossible — trade-offs exist.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Optimization finds the best balance of competing factors.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This ensures the most effective solution within constraints.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Limited resources + trade-offs require optimization for best balance.",
            commonErrors: ["Saying perfect designs are possible."],
          },
        },
        {
          id: "s7-u10-trade-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A city must choose between two bus systems: electric buses (expensive, clean) or diesel buses (cheap, polluting).",
          parts: [
            { label: "a", prompt: "What are the trade-offs?", marks: 2 },
            {
              label: "b",
              prompt: "Which criteria are most important?",
              marks: 2,
            },
            { label: "c", prompt: "What would you recommend?", marks: 2 },
            {
              label: "d",
              prompt: "How could you improve the recommendation?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Trade-off analysis",
                statement:
                  "Cost vs environmental impact vs long-term benefits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Electric = high upfront cost, low emissions. Diesel = low cost, high emissions.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Depends on priorities: environment, budget, long-term health costs.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Electric if environmental priority; diesel if immediate budget constraint.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Phased transition: start with diesel, replace with electric as budget allows.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Cost vs emissions (b) Environment vs budget (c) Depends on priority (d) Phased transition.",
            commonErrors: ["Choosing without considering trade-offs."],
          },
        },
      ],
    },
    {
      id: "s7-u10-technology",
      title: "Technology and Society",
      skill: "Evaluate how technology affects society and the environment.",
      lesson: {
        sections: [
          {
            heading: "Technology's impacts",
            body: "Technology affects society in many ways:\n\n- **Positive**: clean energy, medical advances, communication, efficiency.\n- **Negative**: pollution, resource depletion, job displacement, privacy concerns.\n- **Mixed**: smartphones (connectivity vs distraction), social media (communication vs misinformation).",
          },
          {
            heading: "Responsible technology",
            body: "Responsible technology development considers:\n\n- Environmental impact (lifecycle analysis).\n- Social equity (access for all).\n- Ethical implications (privacy, safety).\n- Long-term sustainability.",
          },
        ],
        keyFormulas: [
          {
            name: "Technology impacts",
            statement: "Positive, negative, and mixed effects.",
          },
          {
            name: "Responsible tech",
            statement: "Consider environment, equity, ethics, sustainability.",
          },
          {
            name: "Evaluation",
            statement: "Assess benefits vs costs before adoption.",
          },
        ],
        workedExample: {
          problem: "Evaluate solar panels as a technology.",
          solution:
            "Positive: clean energy, reduces emissions. Negative: manufacturing impacts, initial cost. Overall: sustainable if managed well.",
        },
      },
      questions: [
        {
          id: "s7-u10-tech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a positive impact of technology?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increased pollution" },
              { id: "b", text: "Clean energy" },
              { id: "c", text: "Resource depletion" },
              { id: "d", text: "Job displacement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Technology impacts",
                statement: "Can be positive, negative or mixed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clean energy is a positive impact; the others are negative.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Clean energy.",
            commonErrors: ["Choosing a negative impact."],
          },
        },
        {
          id: "s7-u10-tech-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two positive and two negative impacts of technology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Technology impacts",
                statement: "Mixed effects require evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Positive: clean energy, medical advances, communication.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Negative: pollution, resource depletion, job displacement.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Mixed: smartphones connect but can distract; social media connects but spreads misinformation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Positive: clean energy, communication. Negative: pollution, job loss. Mixed: smartphones, social media.",
            commonErrors: ["Listing only positive or only negative."],
          },
        },
        {
          id: "s7-u10-tech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What does responsible technology development consider?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Responsible tech",
                statement: "Environment, equity, ethics, sustainability.",
              },
            ],
            steps: [
              {
                reasoning: "Environmental impact (lifecycle analysis).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Social equity (access for all).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Ethical implications (privacy, safety).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Long-term sustainability.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Environment, equity, ethics, sustainability.",
            commonErrors: ["Considering only cost or only environment."],
          },
        },
        {
          id: "s7-u10-tech-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate electric vehicles (EVs) as a technology for reducing pollution.",
          parts: [
            { label: "a", prompt: "What problem do EVs solve?", marks: 2 },
            { label: "b", prompt: "What are two benefits?", marks: 2 },
            { label: "c", prompt: "What are two drawbacks?", marks: 2 },
            { label: "d", prompt: "Would you recommend EVs? Why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Technology evaluation",
                statement: "Benefits vs drawbacks; context matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Reduce tailpipe emissions and air pollution from vehicles.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "No tailpipe emissions; lower operating costs; quieter.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "High upfront cost; battery disposal; charging infrastructure; electricity source matters.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Yes if electricity is clean and infrastructure exists; no if coal-powered grid.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Reduce emissions (b) Clean, cheap to run (c) Cost, infrastructure (d) Depends on context.",
            commonErrors: ["Ignoring electricity source or infrastructure."],
          },
        },
      ],
    },
  ],
};
