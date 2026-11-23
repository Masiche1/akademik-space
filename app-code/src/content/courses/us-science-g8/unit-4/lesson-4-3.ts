import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "s8-u4-lesson-4-3",
  code: "4-3",
  title: "Capstone: Science Synthesis and Review",
  goal: "I CAN integrate physics, biology, and earth/space science to analyze complex real-world systems.",
  standards: [
    "MS-ESS3-1",
    "MS-ESS3-4",
    "MS-PS3-3",
    "SEP: Constructing Explanations",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    {
      term: "Interdisciplinary",
      definition: "Combining knowledge from multiple scientific fields.",
    },
    {
      term: "Systems thinking",
      definition:
        "Understanding how components interact to produce system behavior.",
    },
    {
      term: "Feedback",
      definition: "Output influencing input — stabilizing or amplifying.",
    },
    {
      term: "Human impact",
      definition:
        "The effect of human activities on natural and engineered systems.",
    },
    {
      term: "Sustainability",
      definition:
        "Meeting present needs without compromising future generations.",
    },
    {
      term: "Trade-off",
      definition: "Improving one property often worsens another.",
    },
    {
      term: "Emergent property",
      definition: "System-level behavior arising from component interactions.",
    },
    {
      term: "Evidence-based",
      definition: "Conclusions supported by data and testing.",
    },
  ],
  concepts: [
    {
      id: "s8-u4-systems",
      title: "Systems and interdisciplinary science",
      skill:
        "Apply systems thinking to connect physics, biology, and earth science in real problems.",
      lesson: {
        sections: [
          {
            heading: "Real problems are interdisciplinary",
            body: "Climate change involves: physics (energy transfer), chemistry (greenhouse gases), biology (ecosystem impacts), earth science (atmosphere, oceans). Technology involves physics (energy), engineering (design), biology (human factors). Everything connects.",
          },
          {
            heading: "Systems thinking",
            body: "Define boundaries: what's inside vs outside? Identify feedback loops. Look for emergent properties. Consider time scales (immediate vs long-term). Evaluate trade-offs and unintended consequences.",
          },
          {
            heading: "Science for solutions",
            body: "Effective solutions require understanding multiple disciplines: renewable energy (physics + chemistry + economics), conservation (biology + ecology + policy), technology (physics + engineering + ethics).",
          },
        ],
        keyFormulas: [
          {
            name: "Interdisciplinary",
            statement: "Multiple fields combine for complete understanding",
          },
          {
            name: "Systems",
            statement: "Everything connected through feedback",
          },
        ],
        workedExample: {
          problem:
            "How does smartphone technology connect physics and biology?",
          solution:
            "Physics: EM waves for communication, circuits for processing. Biology: human factors design, ergonomics, cognitive load. Both needed for effective technology.",
        },
      },
      questions: [
        {
          id: "s8-u4-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'systems thinking' in science?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thinking about computer systems" },
              { id: "b", text: "Understanding how components interact" },
              { id: "c", text: "Thinking step by step" },
              { id: "d", text: "Using only one discipline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Systems thinking",
                statement: "Understanding component interactions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Systems thinking = analyzing how parts interact to produce system behavior.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Understanding component interactions",
            commonErrors: ["Thinking it means computers."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u4-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a smartphone connects physics and biology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Physics",
                statement: "EM waves, circuits, energy.",
              },
              {
                kind: "principle",
                name: "Biology",
                statement: "Human factors, ergonomics, cognition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Physics: EM waves enable communication; circuits process signals; battery stores energy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Biology: human factors design considers ergonomics, cognitive load, usability.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Both disciplines needed — physics for function, biology for usability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Physics enables function; biology informs human-centered design.",
            commonErrors: ["Only mentioning one discipline."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "s8-u4-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how climate change demonstrates systems thinking across disciplines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interdisciplinary",
                statement: "Multiple sciences explain different aspects.",
              },
              {
                kind: "principle",
                name: "Systems",
                statement: "Feedback loops amplify or stabilize.",
              },
            ],
            steps: [
              {
                reasoning: "Physics: greenhouse gases trap infrared radiation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Chemistry: CO₂ from fossil fuels; ocean acidification.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Biology: species migration, extinction, ecosystem disruption.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Earth science: sea level rise, extreme weather, ice melt.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Physics (energy), chemistry (gases), biology (life), earth science (climate) all connect.",
            commonErrors: ["Addressing only one discipline."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "s8-u4-systems-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze this scenario: A city replaces a coal power plant with solar+storage.",
          parts: [
            {
              label: "a",
              prompt: "Identify the physics principles involved.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe environmental impacts of each option.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What social/economic factors matter?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Write a recommendation considering all factors.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy physics",
                statement: "Energy transformations and efficiency.",
              },
              {
                kind: "principle",
                name: "Systems thinking",
                statement: "Multiple factors interact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Physics: solar converts light→electric; storage converts electrical→chemical→electrical.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Coal: chemical→thermal→mechanical→electrical with ~35% efficiency.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Coal: CO₂ emissions, air pollution, mining impacts, land use.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Solar: no operational emissions but manufacturing impacts, land use, intermittency.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Storage: battery production impacts; enables solar reliability.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Economic: upfront costs vs long-term savings; job creation in installation vs mining.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Social: energy reliability, air quality health benefits, equity of access.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Recommendation: solar+storage with grid backup during transition — balances sustainability and reliability.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Acknowledges trade-offs while prioritizing long-term sustainability.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) solar light→elec, coal chem→elec (b) coal emits/mines; solar clean but intermittent (c) costs/jobs/health (d) solar+storage hybrid.",
            commonErrors: ["Ignoring trade-offs or social factors."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "s8-u4-review",
      title: "Course synthesis and review",
      skill:
        "Integrate all grade 8 science concepts for comprehensive understanding.",
      lesson: {
        sections: [
          {
            heading: "Complete concept map",
            body: "- **Physical science**: forces, motion, energy, waves, light, information, circuits\n- **Life science**: cells, heredity, DNA, evolution, natural selection, ecosystems\n- **Earth/space science**: solar system, Earth's systems, plate tectonics, climate, resources\n- **Scientific practice**: investigation design, data analysis, argument from evidence, evaluation",
          },
          {
            heading: "Big ideas",
            body: "Matter and energy flow through systems. Forces cause motion. Energy transforms but isn't created. Life evolves through selection. Earth is a complex system in space. Science is evidence-based and interdisciplinary.",
          },
          {
            heading: "Connections",
            body: "Technology (waves/info/circuits), medicine (evolution/antibiotics), environment (climate/energy), space exploration (astronomy). Grade 8 science connects to everything around you — it's the foundation for understanding how the world works.",
          },
        ],
        keyFormulas: [
          {
            name: "Newton's laws",
            statement: "Force, motion, and interaction",
          },
          {
            name: "Energy conservation",
            statement: "Energy transforms, isn't created/destroyed",
          },
          {
            name: "Evolution",
            statement: "Variation + selection → adaptation",
          },
        ],
        workedExample: {
          problem:
            "Review: Explain antibiotic resistance using evolution and physics.",
          solution:
            "Evolution: resistant bacteria survive selection. Physics: energy for reproduction from metabolism; antibiotic (selection pressure) determines survival.",
        },
      },
      questions: [
        {
          id: "s8-u4-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the relationship between force and acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force causes velocity" },
              { id: "b", text: "Force = mass × acceleration" },
              { id: "c", text: "Acceleration causes force" },
              { id: "d", text: "No relationship" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Newton's second law",
                statement: "$F = ma$.",
              },
            ],
            steps: [
              {
                reasoning: "Force equals mass times acceleration.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $F = ma$",
            commonErrors: ["Confusing with velocity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u4-review-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how energy conservation applies to a pendulum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "Total energy constant; transforms between forms.",
              },
              {
                kind: "principle",
                name: "Pendulum",
                statement: "PE ↔ KE conversion.",
              },
            ],
            steps: [
              {
                reasoning: "At top: maximum potential energy, zero kinetic.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "At bottom: maximum kinetic energy, minimum potential.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Total energy constant (minus friction losses) — energy conserved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "PE↔KE conversion; total energy conserved (minus friction).",
            commonErrors: ["Thinking energy is destroyed."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "s8-u4-review-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how DNA evidence supports evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNA comparison",
                statement: "Similar species have similar DNA.",
              },
              {
                kind: "principle",
                name: "Common descent",
                statement: "Shared DNA indicates common ancestor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Closely related species have more similar DNA sequences.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This suggests common ancestry — species diverged from shared ancestor.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "DNA mutations accumulate over time — more differences = more time since divergence.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "DNA evidence strongly supports evolutionary theory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Similar DNA → common ancestor; mutations accumulate over time.",
            commonErrors: ["Not connecting DNA to common descent."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "s8-u4-review-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Comprehensive problem: Evaluate whether renewable energy can replace fossil fuels for a city.",
          parts: [
            {
              label: "a",
              prompt: "Compare energy sources using physics principles.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe environmental impacts of each.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What economic and social factors matter?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Write a recommendation with justification.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy physics",
                statement: "Compare efficiency, reliability, storage.",
              },
              {
                kind: "principle",
                name: "Systems thinking",
                statement: "Consider all impacts and trade-offs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solar: light→electric, ~15-20% efficiency, intermittent; wind: kinetic→electric, ~40-50% efficiency, intermittent.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Fossil: chemical→thermal→mechanical→electric, ~35% efficiency, dispatchable.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Fossil: CO₂ emissions, pollution, finite supply; solar/wind: land use, manufacturing impacts, intermittency.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Solar/wind: no operational emissions, renewable; but need storage for reliability.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Storage: battery impacts but enables renewable reliability.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Economic: upfront costs vs long-term savings; job creation; energy prices.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Social: energy reliability, air quality, equity, energy independence.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Recommendation: transition to renewables+storage with fossil backup during transition — balances sustainability and reliability.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Acknowledges trade-offs while prioritizing long-term sustainability.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) solar/wind vs fossil efficiency (b) fossil emits; renewables clean but intermittent (c) costs/jobs/health (d) transition recommended.",
            commonErrors: ["Ignoring trade-offs or transition challenges."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
