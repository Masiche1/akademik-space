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
              { id: "b", text: "Direction of eating only" },
              { id: "c", text: "Size order" },
              { id: "d", text: "Time order" },
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
              { id: "c", text: "The constant factor" },
              { id: "d", text: "The hypothesis" },
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
              { id: "a", text: "Igneous" },
              { id: "b", text: "Sedimentary" },
              { id: "c", text: "Metamorphic" },
              { id: "d", text: "Limestone" },
            ],
            correctChoiceId: "a",
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
