import type { Lesson } from "../../../types.ts";

export const lesson1032: Lesson = {
  id: "cils-u10-lesson-10-3",
  code: "10-3",
  title: "Stage 9 Checkpoint — Earth, Environment and Working Scientifically",
  goal: "I CAN apply earth science, environmental and scientific method skills at Stage 9 checkpoint standard.",
  standards: ["0893 Checkpoint Stage 9: earth science and scientific method"],
  stage: 9,
  vocabulary: [
    {
      term: "Ecosystem",
      definition: "Community of organisms interacting with their environment.",
    },
    {
      term: "Food chain",
      definition: "Sequence showing who eats whom — arrows show energy flow.",
    },
    { term: "Hypothesis", definition: "Testable prediction to investigate." },
    {
      term: "Variable",
      definition: "Factor that can change in an experiment.",
    },
    {
      term: "Fair test",
      definition: "Only one variable changed; others kept constant.",
    },
  ],
  concepts: [
    {
      id: "cils-u10-s9-earth",
      title: "Stage 9 earth and environment checkpoint",
      skill: "Describe ecosystems, food chains and environmental issues.",
      lesson: {
        sections: [
          {
            heading: "Ecosystems",
            body: "Producers (plants) → consumers → decomposers. Food chain arrows show energy flow direction. Human impacts: deforestation, pollution, climate change threaten ecosystems.",
          },
        ],
        keyFormulas: [
          {
            name: "Food chain",
            statement: "Grass → rabbit → fox (energy flows arrow direction)",
          },
          {
            name: "Threats",
            statement: "Habitat loss, pollution, overexploitation",
          },
        ],
        workedExample: {
          problem: "Why do top predators exist in smaller numbers?",
          solution:
            "Only ~10% of energy transfers up each trophic level — less energy = fewer individuals.",
        },
      },
      questions: [
        {
          id: "cils-u10-s9-e-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food chain 'grass → rabbit → fox', what does the arrow represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direction of energy flow" },
              { id: "b", text: "Time order" },
              { id: "c", text: "Size order" },
              { id: "d", text: "Direction of eating only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food chain",
                statement: "Arrows = energy flow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arrows point from food source to consumer = energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Direction of energy flow",
          },
        },
        {
          id: "cils-u10-s9-e-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two human activities that harm ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Threats",
                statement:
                  "Habitat loss, pollution, overexploitation, climate change.",
              },
            ],
            steps: [
              { reasoning: "Any two valid threats.", marks: 1, markCode: "A" },
              { reasoning: "Two correct activities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deforestation, pollution, overfishing, etc.",
          },
        },
        {
          id: "cils-u10-s9-e-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why producers are essential to an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Producers",
                statement: "Base of food chain — make their own food.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Producers photosynthesise — make food from sunlight.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "All other organisms depend on producers directly or indirectly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Remove producers → whole food web collapses.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "They produce food/energy for the whole ecosystem via photosynthesis.",
          },
        },
        {
          id: "cils-u10-s9-e-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how deforestation affects an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deforestation",
                statement: "Habitat loss → species decline → climate impact.",
              },
            ],
            steps: [
              {
                reasoning: "Destroys habitats — species lose homes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces producers → less food for consumers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Less CO₂ absorbed → contributes to climate change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Biodiversity loss — ecosystem less resilient.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Habitat loss → species decline → less CO₂ absorption → biodiversity loss.",
          },
        },
        {
          id: "cils-u10-s9-e-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism acts as a decomposer in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fungus" },
              { id: "b", text: "An eagle" },
              { id: "c", text: "A lion" },
              { id: "d", text: "A grass plant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposer",
                statement: "Breaks down dead organisms, recycling nutrients.",
              },
            ],
            steps: [
              {
                reasoning: "Fungi and bacteria decompose dead material.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A fungus",
          },
        },
        {
          id: "cils-u10-s9-e-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Producers capture $5000$ kJ of energy. About $10\\%$ transfers to primary consumers. Calculate the energy received by primary consumers.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 500, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "About 10% of energy passes to the next trophic level.",
              },
            ],
            steps: [
              {
                reasoning: "Use $5000 \\times 0.10$.",
                working: "5000 \\times 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value.",
                working: "500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct unit kJ.",
                working: "kJ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$500$ kJ",
          },
        },
        {
          id: "cils-u10-s9-e-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the role of decomposers in an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decomposers",
                statement: "Break down dead matter and recycle nutrients.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposers break down dead organisms and waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This returns nutrients to soil for producers — completes nutrient cycling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "They break down dead material and return nutrients to the soil for reuse.",
          },
        },
        {
          id: "cils-u10-s9-e-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which human activity directly causes water pollution that can lead to algal blooms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recycling paper" },
              { id: "b", text: "Planting trees" },
              { id: "c", text: "Fertiliser runoff into rivers" },
              { id: "d", text: "Building a school" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Water pollution",
                statement: "Nutrient runoff causes eutrophication and algal blooms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fertilisers add nitrates/phosphates to water → algae overgrow → oxygen depleted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fertiliser runoff into rivers",
          },
        },
        {
          id: "cils-u10-s9-e-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Four population counts are $4$, $6$, $5$ and $7$ thousand. Calculate the mean population.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5.5, unit: "thousand" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mean",
                statement: "Mean = sum of values $\\div$ number of values.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = $4 + 6 + 5 + 7 = 22$; divide by 4.",
                working: "22/4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct mean.",
                working: "5.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5.5$ thousand",
          },
        },
        {
          id: "cils-u10-s9-e-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe how pollution affects an ecosystem's food chain.",
          parts: [
            { label: "a", prompt: "Name two types of pollution that harm ecosystems.", marks: 2 },
            { label: "b", prompt: "Explain how water pollution affects aquatic organisms.", marks: 3 },
            { label: "c", prompt: "Explain how air pollution affects land ecosystems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pollution effects",
                statement: "Pollution harms organisms directly and disrupts food chains.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any two: water pollution, air pollution, soil contamination, plastic waste.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Two valid types.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Toxic chemicals kill fish/invertebrates directly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Algal blooms deplete oxygen — organisms suffocate.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Toxins accumulate up food chain (bioaccumulation).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Acid rain damages plants and soils.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Soot/dust blocks sunlight reducing photosynthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Effects propagate through food web.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) water/air pollution (b) kills organisms + depletes oxygen + bioaccumulation (c) damages plants/blocks light",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Mechanisms explained.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
            ],
            commonErrors: ["Naming pollution without explaining ecosystem effects."],
          },
        },
        {
          id: "cils-u10-s9-e-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do top predators exist in much smaller numbers than producers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only about 10% of energy transfers up each trophic level" },
              { id: "b", text: "They reproduce faster" },
              { id: "c", text: "They eat less food" },
              { id: "d", text: "They live longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trophic pyramid",
                statement: "Energy loss limits numbers at higher levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "~10% energy per level → less energy supports fewer individuals.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Only about 10% of energy transfers up each trophic level",
          },
        },
        {
          id: "cils-u10-s9-e-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Producers capture $2000$ kJ of energy. Calculate the energy reaching secondary consumers assuming $10\\%$ transfer at each level.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trophic transfer",
                statement: "Each level receives ~10% of the level below.",
              },
            ],
            steps: [
              {
                reasoning: "Level 1: $2000 \\times 0.10 = 200$ kJ.",
                working: "2000 \\times 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Level 2: $200 \\times 0.10 = 20$ kJ.",
                working: "200 \\times 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Secondary consumers receive $20$ kJ.",
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$ kJ",
          },
        },
        {
          id: "cils-u10-s9-e-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the role of the water cycle in supporting ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water cycle",
                statement: "Evaporation, condensation, precipitation cycle water for all life.",
              },
            ],
            steps: [
              {
                reasoning: "Water evaporates, condenses and falls as rain — supplies fresh water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plants need water for photosynthesis; all organisms need water to survive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It provides fresh water for photosynthesis and survival of all organisms.",
          },
        },
        {
          id: "cils-u10-s9-e-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the most direct consequence of habitat loss for an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faster decomposition only" },
              { id: "b", text: "More rainfall" },
              { id: "c", text: "Increased biodiversity" },
              { id: "d", text: "Reduced biodiversity and disrupted food chains" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Habitat loss",
                statement: "Loss of habitat reduces species numbers and destabilises ecosystems.",
              },
            ],
            steps: [
              {
                reasoning: "Less habitat → fewer species → weaker food chains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reduced biodiversity and disrupted food chains",
          },
        },
        {
          id: "cils-u10-s9-e-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A fish population of $500$ decreases to $400$ after pollution. Calculate the percentage decrease.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage decrease",
                statement: "$\\frac{change}{original} \\times 100\\%$.",
              },
            ],
            steps: [
              {
                reasoning: "Use $\\frac{500 - 400}{500} \\times 100 = \\frac{100}{500} \\times 100$.",
                working: "100/500 \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct percentage.",
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20\\%$",
          },
        },
        {
          id: "cils-u10-s9-e-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review earth and environment science at Stage 9.",
          parts: [
            { label: "a", prompt: "Describe the components of an ecosystem.", marks: 3 },
            { label: "b", prompt: "Explain how energy flows through a food chain.", marks: 2 },
            { label: "c", prompt: "Describe three threats to ecosystems.", marks: 2 },
            { label: "d", prompt: "Explain why biodiversity matters.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ecosystem review",
                statement: "Components + energy flow + threats + biodiversity value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Producers, consumers (herbivores/carnivores), decomposers + abiotic factors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Multiple components correct.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Clear description.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Energy flows sun→producers→consumers→decomposers; ~10% per level; arrows show direction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Habitat loss/deforestation, pollution, overexploitation, climate change (any three).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Three valid threats.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "High biodiversity = resilient ecosystems, more resources, better stability.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Reasoned.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) producers/consumers/decomposers+abiotic (b) ~10%/level (c) habitat loss/pollution/overexploitation (d) resilience",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Components correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Three threats.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Treating energy as cycling — it flows one way; nutrients cycle."],
          },
        },
      ],
    },
    {
      id: "cils-u10-s9-scientific",
      title: "Stage 9 working scientifically checkpoint",
      skill: "Plan fair tests, identify variables and draw conclusions.",
      lesson: {
        sections: [
          {
            heading: "Scientific method",
            body: "Question → hypothesis → fair test → data → conclusion. Fair test: one independent variable changed, others controlled, repeats for reliability. Results must support the conclusion.",
          },
        ],
        keyFormulas: [
          {
            name: "Variables",
            statement:
              "Independent (changed), dependent (measured), controlled (kept same)",
          },
        ],
        workedExample: {
          problem:
            "Testing whether fertiliser affects plant growth — identify variables.",
          solution:
            "Independent: fertiliser amount; dependent: plant height; controlled: light, water, soil type.",
        },
      },
      questions: [
        {
          id: "cils-u10-s9-s-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an experiment, what is the independent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The factor deliberately changed" },
              { id: "b", text: "The result measured" },
              { id: "c", text: "The hypothesis" },
              { id: "d", text: "The constant factor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent variable",
                statement: "Deliberately changed.",
              },
            ],
            steps: [
              {
                reasoning: "Independent variable is what you change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Factor deliberately changed",
          },
        },
        {
          id: "cils-u10-s9-s-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should experiments be repeated?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reliability",
                statement: "Repeats check consistency.",
              },
            ],
            steps: [
              {
                reasoning: "Checks results are consistent/reliable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identifies anomalies (odd results).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "To check reliability and spot anomalies.",
          },
        },
        {
          id: "cils-u10-s9-s-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student tests paper plane distance vs wing size. Identify the three variable types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Variables",
                statement: "Independent/dependent/controlled.",
              },
            ],
            steps: [
              { reasoning: "Independent: wing size.", marks: 1, markCode: "M" },
              {
                reasoning: "Dependent: distance flown.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Controlled: throw force, paper type, wind.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "IV=wing size; DV=distance; controlled=throw, paper, wind.",
          },
        },
        {
          id: "cils-u10-s9-s-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A hypothesis 'salt water freezes faster than fresh water' is tested with identical volumes at the same temperature. Is this a fair test? Justify.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fair test",
                statement: "Only one variable differs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fair: only salt content differs — volume and temperature same.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dependent variable: freezing time/temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need repeats for reliability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conclusion must match measured data.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Yes — only salt differs; repeats needed and conclusion must follow data.",
          },
        },
        {
          id: "cils-u10-s9-s-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an experiment, what is the dependent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The result that is measured" },
              { id: "b", text: "The factor deliberately changed" },
              { id: "c", text: "The factor kept constant" },
              { id: "d", text: "The prediction being tested" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependent variable",
                statement: "The outcome measured in response to changes.",
              },
            ],
            steps: [
              {
                reasoning: "Dependent variable is what you measure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The result that is measured",
          },
        },
        {
          id: "cils-u10-s9-s-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Four readings are $4$, $5$, $3$ and $4$ cm. Calculate the mean.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mean",
                statement: "Mean = sum $\\div$ number of values.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = $16$; divide by 4.",
                working: "16/4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct mean with unit.",
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4$ cm",
          },
        },
        {
          id: "cils-u10-s9-s-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why must variables other than the independent variable be controlled?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Controlled variables",
                statement: "Keeping others constant ensures a fair test.",
              },
            ],
            steps: [
              {
                reasoning: "If other variables change, you cannot tell which caused the result.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Controlled variables make the test fair and the conclusion valid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "So only the independent variable affects the result — ensures a fair test.",
          },
        },
        {
          id: "cils-u10-s9-s-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes a good hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always true" },
              { id: "b", text: "It is testable and makes a prediction" },
              { id: "c", text: "It is a fact" },
              { id: "d", text: "It cannot be tested" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "A testable prediction that can be investigated.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothesis must be testable — you can design an experiment for it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "It is testable and makes a prediction",
          },
        },
        {
          id: "cils-u10-s9-s-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student records lengths of $10.2$, $10.4$ and $10.3$ cm. Calculate the mean length.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10.3, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mean",
                statement: "Mean = sum $\\div$ count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = $30.9$; divide by 3.",
                working: "30.9/3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct mean.",
                working: "10.3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10.3$ cm",
          },
        },
        {
          id: "cils-u10-s9-s-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate whether an experiment is a fair test.",
          parts: [
            { label: "a", prompt: "Identify the variables in the experiment described.", marks: 3 },
            { label: "b", prompt: "Judge whether it is a fair test.", marks: 2 },
            { label: "c", prompt: "Suggest improvements if needed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fair test evaluation",
                statement: "One variable changed, others controlled, repeats for reliability.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Correctly identify independent, dependent and controlled variables.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Accurate identification.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All three types named.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Fair only if one variable changed and others controlled.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Justified judgement.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "e.g. add repeats, tighten controls, use more precise apparatus.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Specific improvements.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reasoned suggestions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) IV/DV/controlled identified (b) fair if one variable only (c) repeats/better controls",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "All variables.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Justified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Unjustified.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Specific.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Judging fairness without checking all variables."],
          },
        },
        {
          id: "cils-u10-s9-s-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student's results consistently support their hypothesis. What does this show about reliability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeats gave consistent results — reliable, but validity still needs checking" },
              { id: "b", text: "The results are unreliable" },
              { id: "c", text: "No further testing is needed" },
              { id: "d", text: "The hypothesis is automatically true" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reliability vs validity",
                statement: "Consistency shows reliability; validity needs correct method.",
              },
            ],
            steps: [
              {
                reasoning: "Consistent results = reliable; still need to check the test measures the right thing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Repeats gave consistent results — reliable, but validity still needs checking",
          },
        },
        {
          id: "cils-u10-s9-s-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Time readings are $3.1$, $3.5$, $3.3$ and $3.4$ s. Calculate the range.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.4, unit: "s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Range",
                statement: "Range = largest $-$ smallest.",
              },
            ],
            steps: [
              {
                reasoning: "Largest $3.5$, smallest $3.1$; subtract.",
                working: "3.5 - 3.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct range.",
                working: "0.4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.4$ s",
          },
        },
        {
          id: "cils-u10-s9-s-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the steps of the scientific method in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "Question→hypothesis→fair test→data→conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Observation/question → testable hypothesis → designed experiment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect data → analyse → draw conclusion supported by data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Question → hypothesis → fair test → data → conclusion.",
          },
        },
        {
          id: "cils-u10-s9-s-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What should you do with an anomalous result?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always delete it" },
              { id: "b", text: "Change it to fit the pattern" },
              { id: "c", text: "Ignore it completely" },
              { id: "d", text: "Investigate the cause and repeat the measurement if needed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Anomalies",
                statement: "Investigate cause; repeat or exclude only with justification.",
              },
            ],
            steps: [
              {
                reasoning: "Anomalies need investigation, not silent deletion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Investigate the cause and repeat the measurement if needed",
          },
        },
        {
          id: "cils-u10-s9-s-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Five repeat measurements are $2.1$, $2.3$, $2.0$, $2.2$ and $2.4$ cm. Calculate the mean.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.2, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mean",
                statement: "Mean = sum $\\div$ count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = $11.0$; divide by 5.",
                working: "11.0/5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct division.",
                working: "2.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct unit.",
                working: "cm",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.2$ cm",
          },
        },
        {
          id: "cils-u10-s9-s-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review working scientifically at Stage 9 checkpoint.",
          parts: [
            { label: "a", prompt: "Describe how to plan a fair test.", marks: 3 },
            { label: "b", prompt: "Explain the three variable types.", marks: 2 },
            { label: "c", prompt: "Describe how to ensure reliable results.", marks: 2 },
            { label: "d", prompt: "Explain how conclusions must relate to data.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Working scientifically",
                statement: "Fair test→variables→reliability→conclusion follows data.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Identify variables, control others, choose apparatus, repeat trials.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Multiple elements.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Complete plan.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Independent (changed), dependent (measured), controlled (kept same).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "All correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Repeat trials, average results, control variables, precise equipment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Conclusion must be supported by the data — cannot claim beyond evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Reasoned.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) variables/controls/repeats (b) IV/DV/controlled (c) repeat+average (d) conclusion follows data",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Conclusion not matching the data collected."],
          },
        },
      ],
    },
    {
      id: "cils-u10-s9-mx",
      title: "Stage 9 mixed checkpoint",
      skill:
        "Apply earth science, environment and working scientifically skills together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine rocks and the water cycle, environmental change and experimental design. Support answers with evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Reliability",
            statement:
              "Repeating measurements and averaging reduces random error",
          },
          {
            name: "Greenhouse effect",
            statement:
              "Greenhouse gases trap infrared radiation, warming the atmosphere",
          },
        ],
        workedExample: {
          problem:
            "Why should a student repeat a measurement three times and calculate a mean?",
          solution:
            "Repeating reduces the effect of random error and makes the result more reliable.",
        },
      },
      questions: [
        {
          id: "cils-u10-s9-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of rock forms when molten lava cools and solidifies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sedimentary" },
              { id: "b", text: "Igneous" },
              { id: "c", text: "Metamorphic" },
              { id: "d", text: "Limestone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Igneous rock",
                statement: "Formed from cooled and solidified molten rock.",
              },
            ],
            steps: [
              {
                reasoning: "Cooling lava forms igneous rock.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Igneous",
          },
        },
        {
          id: "cils-u10-s9-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the layer of the Earth that includes the crust and the upper mantle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lithosphere",
                statement:
                  "Rigid outer layer of the Earth comprising the crust and upper mantle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The lithosphere contains the crust and upper mantle.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Lithosphere",
          },
        },
        {
          id: "cils-u10-s9-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student measures the mass of a sample five times and calculates a mean. Explain why repeating the measurement improves reliability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reliability",
                statement:
                  "Repeating measurements reduces the effect of random error.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Random errors cause individual readings to vary above or below the true value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeating gives several readings so anomalies can be identified and averaged out.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The mean of repeated readings is closer to the true value, improving reliability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Averaging repeats reduces random error and makes the result more reliable",
          },
        },
        {
          id: "cils-u10-s9-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how human activities increase atmospheric carbon dioxide and state one consequence for the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Enhanced greenhouse effect",
                statement:
                  "More greenhouse gases trap more infrared radiation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Burning fossil fuels for energy releases stored carbon as $CO_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deforestation reduces photosynthesis, so less $CO_2$ is absorbed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rising $CO_2$ enhances the greenhouse effect, trapping more heat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consequence: global warming, rising sea levels or more extreme weather.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fossil fuel burning and deforestation raise $CO_2$, enhancing the greenhouse effect and causing global warming",
          },
        },
        {
          id: "cils-u10-s9-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of rock forms from compressed and cemented sediments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lava" },
              { id: "b", text: "Igneous" },
              { id: "c", text: "Metamorphic" },
              { id: "d", text: "Sedimentary" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sedimentary rock",
                statement: "Forms from layers of sediment compressed over time.",
              },
            ],
            steps: [
              {
                reasoning: "Sedimentary rocks form from deposited sediments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sedimentary",
          },
        },
        {
          id: "cils-u10-s9-mx-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student records masses of $7.8$, $7.9$ and $8.0$ g. Calculate the mean mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7.9, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mean",
                statement: "Mean = sum $\\div$ count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = $23.7$; divide by 3.",
                working: "23.7/3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct mean with unit.",
                working: "7.9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$7.9$ g",
          },
        },
        {
          id: "cils-u10-s9-mx-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the three main types of rock and describe how each forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rock types",
                statement: "Igneous (cooled magma/lava), sedimentary (compacted sediments), metamorphic (heat/pressure).",
              },
            ],
            steps: [
              {
                reasoning: "Igneous: cooled and solidified molten rock.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sedimentary: layers of sediment compressed and cemented.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metamorphic: existing rock changed by heat and pressure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Igneous (cooled magma), sedimentary (compacted sediments), metamorphic (heat/pressure).",
          },
        },
        {
          id: "cils-u10-s9-mx-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which rock type forms when existing rock is changed by heat and pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sedimentary" },
              { id: "b", text: "Igneous" },
              { id: "c", text: "Granite only" },
              { id: "d", text: "Metamorphic" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metamorphic rock",
                statement: "Forms when heat and pressure change existing rock.",
              },
            ],
            steps: [
              {
                reasoning: "Heat + pressure transform rock into metamorphic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Metamorphic",
          },
        },
        {
          id: "cils-u10-s9-mx-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert $1.5$ km to metres.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1500, unit: "m" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Unit conversion",
                statement: "$1$ km $= 1000$ m.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply by 1000.",
                working: "1.5 \\times 1000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1500$ m",
          },
        },
        {
          id: "cils-u10-s9-mx-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain the enhanced greenhouse effect and human contributions.",
          parts: [
            { label: "a", prompt: "Explain the natural greenhouse effect.", marks: 3 },
            { label: "b", prompt: "Describe two human activities that increase greenhouse gases.", marks: 2 },
            { label: "c", prompt: "State two consequences of global warming.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Greenhouse effect",
                statement: "Greenhouse gases trap infrared radiation, warming the atmosphere.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sunlight warms Earth; surface emits infrared; greenhouse gases trap some heat.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Natural effect keeps Earth warm enough for life.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Clear mechanism.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Burning fossil fuels; deforestation — any two valid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two correct activities.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Rising sea levels, more extreme weather, habitat loss, crop changes (any two).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Second consequence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Consequences linked to warming.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) gases trap IR heat (b) fossil fuels/deforestation (c) sea levels/extreme weather",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Mechanism clear.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Two consequences.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "c" },
            ],
            commonErrors: ["Confusing greenhouse effect with ozone depletion."],
          },
        },
        {
          id: "cils-u10-s9-mx-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the water cycle, which process returns water vapour to the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Runoff" },
              { id: "b", text: "Evaporation" },
              { id: "c", text: "Infiltration" },
              { id: "d", text: "Precipitation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaporation",
                statement: "Liquid water becomes vapour and enters the atmosphere.",
              },
            ],
            steps: [
              {
                reasoning: "Evaporation (and transpiration) puts water vapour into air.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Evaporation",
          },
        },
        {
          id: "cils-u10-s9-mx-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Four experiment repeats give values $9$, $11$, $10$ and $10$ cm³. Calculate the mean.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mean",
                statement: "Mean = sum $\\div$ count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = $40$; divide by 4.",
                working: "40/4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct mean with unit.",
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$ cm³",
          },
        },
        {
          id: "cils-u10-s9-mx-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how to make an experiment a fair test.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fair test",
                statement: "One variable changed; all others controlled; repeats for reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Change only the independent variable; keep all others constant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Repeat trials and average results for reliability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Change one variable, control the rest, and repeat trials.",
          },
        },
        {
          id: "cils-u10-s9-mx-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which action most reduces the effect of random error in an experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Taking a single careful reading" },
              { id: "b", text: "Using rough estimates" },
              { id: "c", text: "Guessing the result" },
              { id: "d", text: "Repeating measurements and calculating a mean" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Random error",
                statement: "Repeats and averaging reduce random error.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple readings + mean cancel out random variations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Repeating measurements and calculating a mean",
          },
        },
        {
          id: "cils-u10-s9-mx-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Burning $100$ kg of coal releases $40$ kg of carbon dioxide. Calculate the percentage of the coal mass released as $CO_2$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "$\\frac{part}{whole} \\times 100\\%$.",
              },
            ],
            steps: [
              {
                reasoning: "Use $\\frac{40}{100} \\times 100$.",
                working: "40/100 \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct percentage.",
                working: "40",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$40\\%$",
          },
        },
        {
          id: "cils-u10-s9-mx-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Mixed checkpoint: apply earth science, environment and working scientifically skills.",
          parts: [
            { label: "a", prompt: "Describe the rock cycle briefly.", marks: 3 },
            { label: "b", prompt: "Explain the greenhouse effect and one human impact.", marks: 2 },
            { label: "c", prompt: "Describe how to plan a fair test.", marks: 2 },
            { label: "d", prompt: "Explain how to evaluate experimental results.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mixed checkpoint",
                statement: "Rocks + climate + fair tests + evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Molten rock cools → igneous; weathering/erosion → sediments → sedimentary; heat/pressure → metamorphic; melting returns to magma.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Multiple stages.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Cycle described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Greenhouse gases trap infrared → warming; human impact e.g. fossil fuel burning raises CO₂.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Identify variables, control others, choose apparatus, repeat trials.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Check reliability (repeats), validity (correct method), identify errors, suggest improvements.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Complete evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) igneous→sedimentary→metamorphic→magma (b) gases trap heat+CO₂ (c) variables/controls/repeats (d) reliability/validity/errors",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Cycle correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Answering topics separately — checkpoint questions integrate skills."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u10-stage9-earth-scientific-notes",
      title: "Stage 9 earth science and scientific method — revision notes",
      summary: "Ecosystems, food chains, fair tests, variables.",
      sections: [
        {
          heading: "Ecosystems",
          body: "Producers→consumers→decomposers; arrows = energy flow; ~10% energy per level; threats: habitat loss, pollution.",
        },
        {
          heading: "Scientific method",
          body: "Fair test = one variable changed, others controlled, repeats for reliability; conclusion follows data.",
        },
      ],
    },
  ],
};
