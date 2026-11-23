import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "s8-u10-lesson-10-1",
  code: "10-1",
  title: "Capstone: Scientific Investigation and Data Analysis",
  goal: "I CAN design investigations, analyze data, and integrate science concepts across domains.",
  standards: [
    "MS-ETS1-1",
    "MS-ETS1-2",
    "MS-ETS1-3",
    "SEP: Asking Questions",
    "SEP: Planning and Carrying Out Investigations",
  ],
  vocabulary: [
    {
      term: "Investigation",
      definition: "Systematic study to answer a question.",
    },
    {
      term: "Variable",
      definition: "Factor that can change in an experiment.",
    },
    {
      term: "Independent variable",
      definition: "Variable deliberately changed.",
    },
    { term: "Dependent variable", definition: "Variable measured as result." },
    { term: "Control", definition: "Unchanged baseline for comparison." },
    { term: "Data", definition: "Information collected during investigation." },
    { term: "Conclusion", definition: "Interpretation supported by data." },
  ],
  concepts: [
    {
      id: "s8-u10-investigation-design",
      title: "Designing investigations",
      skill:
        "Plan experiments with variables, controls, and measurable outcomes.",
      lesson: {
        sections: [
          {
            heading: "Experimental design",
            body: "A good investigation:\n\n1. **Question**: what are you trying to find out?\n2. **Hypothesis**: testable prediction.\n3. **Variables**: independent (changed), dependent (measured), controlled (kept same).\n4. **Procedure**: steps to follow.\n5. **Data collection**: measurements/observations.",
          },
          {
            heading: "Controls and variables",
            body: "- **Independent variable**: what you change (e.g., light amount).\n- **Dependent variable**: what you measure (e.g., plant growth).\n- **Controls**: unchanged factors (temperature, water, soil).\n- **Control group**: baseline without experimental treatment.",
          },
        ],
        keyFormulas: [
          {
            name: "Variables",
            statement:
              "Independent = changed; dependent = measured; controlled = same.",
          },
          { name: "Control group", statement: "Baseline for comparison." },
          { name: "Hypothesis", statement: "Testable prediction." },
        ],
        workedExample: {
          problem:
            "Design an experiment testing if fertilizer affects plant growth.",
          solution:
            "Independent: fertilizer amount. Dependent: plant height. Controls: same light, water, soil. Two groups: with/without fertilizer.",
        },
      },
      questions: [
        {
          id: "s8-u10-design-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the independent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measured result" },
              { id: "b", text: "Variable deliberately changed" },
              { id: "c", text: "Unchanged factor" },
              { id: "d", text: "Random factor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent variable",
                statement: "Variable deliberately changed.",
              },
            ],
            steps: [
              {
                reasoning: "Independent variable = what experimenter changes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Variable deliberately changed.",
            commonErrors: ["Confusing with dependent."],
          },
        },
        {
          id: "s8-u10-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a plant growth experiment with different light levels, identify the variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Variables",
                statement:
                  "Independent = light; dependent = growth; controlled = others.",
              },
            ],
            steps: [
              {
                reasoning: "Independent: amount of light.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Dependent: plant height/growth rate.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Controlled: water, soil, temperature, plant type.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Independent = light; dependent = growth; controlled = water/soil/temp.",
            commonErrors: ["Missing a variable."],
          },
        },
        {
          id: "s8-u10-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are control groups important in experiments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Control group",
                statement: "Baseline for comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Control group doesn't receive treatment.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Allows comparison — shows if treatment had effect.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Without control, can't tell if change is due to treatment or other factors.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Essential for valid conclusions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Control group provides baseline for comparison.",
            commonErrors: ["Saying controls aren't needed."],
          },
        },
        {
          id: "s8-u10-design-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design an experiment to test if exercise affects heart rate.",
          parts: [
            { label: "a", prompt: "State hypothesis.", marks: 2 },
            { label: "b", prompt: "Identify variables.", marks: 3 },
            { label: "c", prompt: "Describe control group.", marks: 2 },
            { label: "d", prompt: "What data would you collect?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Experimental design",
                statement: "Testable hypothesis + variables + controls.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hypothesis: exercise increases heart rate.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Independent: exercise; dependent: heart rate; controlled: age, fitness, time.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Control: resting heart rate without exercise.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Heart rate measurements before/during/after exercise.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Exercise ↑ HR (b) Exercise/HR/age+fitness (c) Resting (d) HR measurements.",
            commonErrors: ["Not identifying controls."],
          },
        },
      ],
    },
    {
      id: "s8-u10-data-analysis",
      title: "Data Analysis and Interpretation",
      skill:
        "Analyze experimental data, identify patterns, and draw evidence-based conclusions.",
      lesson: {
        sections: [
          {
            heading: "Data types",
            body: "**Quantitative**: numerical (measurements, counts).\n**Qualitative**: descriptive (observations, colors).\n\nData should be:\n- Accurate (measured correctly)\n- Precise (consistent)\n- Objective (not biased)",
          },
          {
            heading: "Analysis steps",
            body: "1. Organize data in tables/graphs.\n2. Look for patterns/trends.\n3. Compare to hypothesis.\n4. Draw conclusions supported by data.\n5. Consider sources of error.",
          },
        ],
        keyFormulas: [
          {
            name: "Data types",
            statement: "Quantitative = numbers; qualitative = descriptions.",
          },
          {
            name: "Analysis",
            statement: "Organize → patterns → compare → conclude.",
          },
          {
            name: "Error",
            statement: "Measurement uncertainty, bias, random variation.",
          },
        ],
        workedExample: {
          problem:
            "Plants with fertilizer grew 15 cm; without grew 10 cm. What conclusion?",
          solution:
            "Fertilizer increased growth by 5 cm (50% increase) — supports hypothesis.",
        },
      },
      questions: [
        {
          id: "s8-u10-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is quantitative data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Descriptions" },
              { id: "b", text: "Numerical measurements" },
              { id: "c", text: "Colors" },
              { id: "d", text: "Shapes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantitative data",
                statement: "Numerical measurements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quantitative = numbers; qualitative = descriptions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Numerical measurements.",
            commonErrors: ["Choosing (a): that's qualitative."],
          },
        },
        {
          id: "s8-u10-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the steps of data analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data analysis",
                statement: "Organize → patterns → compare → conclude.",
              },
            ],
            steps: [
              {
                reasoning: "Organize data in tables/graphs.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Identify patterns/trends.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Compare to hypothesis; draw conclusions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Organize → patterns → compare → conclude.",
            commonErrors: ["Skipping steps."],
          },
        },
        {
          id: "s8-u10-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might experimental results vary between trials?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Experimental variation",
                statement:
                  "Random error, measurement uncertainty, natural variation.",
              },
            ],
            steps: [
              {
                reasoning: "Random variation in biological systems.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Measurement uncertainty/imprecision.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Uncontrolled environmental factors.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Solution: repeat trials, average results.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Random variation + measurement error + uncontrolled factors.",
            commonErrors: ["Saying results should be identical."],
          },
        },
        {
          id: "s8-u10-data-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student measures plant heights: 10, 12, 11, 13, 10 cm (control) and 15, 17, 16, 18, 15 cm (fertilizer).",
          parts: [
            {
              label: "a",
              prompt: "Calculate mean height for each group.",
              marks: 3,
            },
            { label: "b", prompt: "What is the difference?", marks: 2 },
            {
              label: "c",
              prompt: "Does fertilizer increase growth?",
              marks: 2,
            },
            { label: "d", prompt: "What conclusion can you draw?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean calculation",
                statement: "$\\bar{x} = \\frac{\\sum x}{n}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Control: $(10+12+11+13+10)/5 = 11.2$ cm. Fertilizer: $(15+17+16+18+15)/5 = 16.2$ cm.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$16.2 - 11.2 = 5$ cm difference.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Yes — fertilizer group is ~45% taller.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Fertilizer significantly increases plant growth.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 11.2 vs 16.2 cm (b) 5 cm (c) Yes (d) Fertilizer increases growth.",
            commonErrors: ["Calculation errors."],
          },
        },
      ],
    },
    {
      id: "s8-u10-synthesis",
      title: "Integrated Science Synthesis",
      skill: "Integrate concepts across physical, life, and Earth sciences.",
      lesson: {
        sections: [
          {
            heading: "Cross-domain connections",
            body: "Science concepts connect across domains:\n\n- **Energy**: photosynthesis (life) → food → motion (physical).\n- **Matter**: atoms (physical) → molecules → cells (life).\n- **Forces**: gravity (physical) → orbits (Earth) → tides (Earth).\n- **Waves**: light (physical) → vision (life) → communication (technology).",
          },
          {
            heading: "Systems thinking",
            body: "Viewing phenomena as systems:\n\n- Ecosystems: energy flow + matter cycling.\n- Solar system: gravity + motion + energy.\n- Cells: chemistry + energy + information.\n- Climate: energy + matter + feedback loops.",
          },
        ],
        keyFormulas: [
          {
            name: "Cross-domain",
            statement: "Energy, matter, forces, waves connect all sciences.",
          },
          {
            name: "Systems",
            statement:
              "Ecosystems, solar system, cells, climate — interconnected.",
          },
        ],
        workedExample: {
          problem: "How does photosynthesis connect life and physical science?",
          solution:
            "Converts light energy (physical) to chemical energy (life) — energy transformation.",
        },
      },
      questions: [
        {
          id: "s8-u10-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does photosynthesis connect life and physical science?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It doesn't" },
              { id: "b", text: "Light energy → chemical energy" },
              { id: "c", text: "Chemical → light" },
              { id: "d", text: "Matter creation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photosynthesis",
                statement: "Light energy → chemical energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photosynthesis converts light (physical) to chemical (life).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Light energy → chemical energy.",
            commonErrors: ["Choosing (c): reversed."],
          },
        },
        {
          id: "s8-u10-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of how a physical science concept applies to life science.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cross-domain",
                statement: "Physics concepts apply to biology.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diffusion/osmosis: physical principles in cell transport.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Energy conservation: cellular respiration transforms energy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Waves: light enables vision; sound enables hearing.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Diffusion, energy conservation, waves in biology.",
            commonErrors: ["Not giving specific example."],
          },
        },
        {
          id: "s8-u10-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how systems thinking helps understand climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Systems thinking",
                statement: "Climate = interconnected energy/matter/feedback.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Climate involves atmosphere, oceans, ice, life — interconnected.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Feedback loops amplify/reduce changes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Greenhouse effect = energy balance system.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Systems thinking reveals complex interactions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Climate is interconnected system with feedback loops.",
            commonErrors: ["Treating climate as simple."],
          },
        },
        {
          id: "s8-u10-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace energy from the Sun to a human eating a plant.",
          parts: [
            {
              label: "a",
              prompt: "How does energy reach the plant?",
              marks: 3,
            },
            { label: "b", prompt: "How does plant store energy?", marks: 2 },
            { label: "c", prompt: "How does human get energy?", marks: 2 },
            {
              label: "d",
              prompt: "What happens to energy at each step?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy flow",
                statement: "Sun → photosynthesis → plant → human → heat.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sunlight reaches plant leaves.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Photosynthesis converts light to chemical energy (glucose).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Human eats plant → digests → cellular respiration.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Energy lost as heat at each transformation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Sunlight (b) Chemical energy (c) Digestion/respiration (d) Heat losses.",
            commonErrors: ["Not tracing transformations."],
          },
        },
      ],
    },
  ],
};
