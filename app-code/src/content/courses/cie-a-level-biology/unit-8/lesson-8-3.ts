import type { Lesson } from "../../../types.ts";

export const lesson813: Lesson = {
  id: "cial-b-u8-lesson-8-3",
  code: "8-3",
  title: "Populations and succession",
  goal: "I CAN describe population growth, limiting factors, succession and human impact on ecosystems.",
  standards: ["9700 15.2: populations, succession, human impact"],
  vocabulary: [
    { term: "Population", definition: "Group of organisms of the same species in an area." },
    { term: "Carrying capacity", definition: "Maximum population size an environment can sustain." },
    { term: "Limiting factor", definition: "Factor restricting population growth (food, space, disease)." },
    { term: "Succession", definition: "Directional change in community composition over time." },
    { term: "Pioneer species", definition: "First colonisers of bare habitat (lichens, mosses)." },
    { term: "Climax community", definition: "Stable, self-sustaining final community." },
  ],
  concepts: [
    {
      id: "cial-b-u8-population",
      title: "Population growth",
      skill: "Describe exponential vs logistic growth and limiting factors.",
      lesson: {
        sections: [
          {
            heading: "Exponential growth",
            body: "J-shaped curve: unlimited resources → population doubles at regular intervals. Rare in nature — eventually limited by resources. Bacteria in fresh culture show this briefly.",
          },
          {
            heading: "Logistic growth and carrying capacity",
            body: "S-shaped curve: slow start → rapid growth → slows → plateaus at carrying capacity ($K$). Limiting factors: food, water, space, disease, predation, waste accumulation. Population oscillates around $K$.",
          },
          {
            heading: "Density-dependent vs independent",
            body: "Density-dependent: effect increases with density (competition, disease, predation). Density-independent: affects all densities equally (floods, fires, harsh weather).",
          },
        ],
        keyFormulas: [
          { name: "Carrying capacity", statement: "Maximum sustainable population ($K$)" },
          { name: "Logistic curve", statement: "S-shaped — growth slows at $K$" },
        ],
        workedExample: {
          problem: "Why can't populations grow exponentially forever?",
          solution: "Resources (food, space, water) are finite — limiting factors cap growth at carrying capacity.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-pp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is carrying capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum population an environment can sustain" },
              { id: "b", text: "Fastest growth rate" },
              { id: "c", text: "Smallest population size" },
              { id: "d", text: "Number of predators" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Carrying capacity", statement: "Max sustainable population." }],
            steps: [{ reasoning: "$K$ = max population environment supports.", marks: 1, markCode: "A" }],
            finalAnswer: "Maximum sustainable population",
          },
        },
        {
          id: "cial-b-u8-pp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two limiting factors that affect population growth.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Limiting factors", statement: "Food, water, space, disease, predation, waste." }],
            steps: [
              { reasoning: "Any two valid factors.", marks: 1, markCode: "A" },
              { reasoning: "Two correct factors named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Food, water, space, disease, etc.",
          },
        },
        {
          id: "cial-b-u8-pp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between density-dependent and density-independent limiting factors with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Limiting factors", statement: "Density-dependent increases with density; independent affects all equally." }],
            steps: [
              { reasoning: "Density-dependent: effect worsens as population grows (competition, disease).", marks: 1, markCode: "M" },
              { reasoning: "Example: disease spread or food competition.", marks: 1, markCode: "A" },
              { reasoning: "Density-independent: same effect regardless of density (floods, fires).", marks: 1, markCode: "M" },
              { reasoning: "Example: volcanic eruption or frost.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Dependent=competition/disease; independent=floods/fires",
          },
        },
        {
          id: "cial-b-u8-pp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Population growth.",
          parts: [
            { label: "a", prompt: "Define carrying capacity.", marks: 1 },
            { label: "b", prompt: "Describe exponential growth and give an example.", marks: 3 },
            { label: "c", prompt: "Describe logistic growth.", marks: 2 },
            { label: "d", prompt: "Distinguish density-dependent from density-independent factors.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Population growth", statement: "Exponential J-curve vs logistic S-curve; K limits growth." }],
            steps: [
              { part: "a", reasoning: "Max sustainable population.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Unlimited resources → doubling at intervals.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "J-shaped curve.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: bacteria in culture.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "S-shaped: growth slows at carrying capacity.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Density-dependent worsens with density.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Density-independent affects all equally.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Examples of each.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) max sustainable (b) J-curve exponential (c) S-curve logistic (d) dep/indep",
          },
        },
      ],
    },
    {
      id: "cial-b-u8-succession",
      title: "Succession and human impact",
      skill: "Describe ecological succession and human effects on ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Primary succession",
            body: "On bare rock/no soil: pioneer species (lichens, mosses) weather rock → soil forms → grasses → shrubs → trees → climax community. Very slow (hundreds of years). Example: volcanic island colonisation.",
          },
          {
            heading: "Secondary succession",
            body: "After disturbance where soil remains (fire, farming abandonment): faster recovery. Grasses/weeds → shrubs → young forest → mature forest. Example: abandoned farmland → woodland over decades.",
          },
          {
            heading: "Human impact",
            body: "Deforestation, pollution, overexploitation, climate change → habitat loss → species extinction → loss of ecosystem services (pollination, water purification, carbon storage). Sustainable management balances use and conservation.",
          },
        ],
        keyFormulas: [
          { name: "Succession", statement: "Pioneers→grasses→shrubs→trees→climax community" },
          { name: "Primary vs secondary", statement: "No soil (slow) vs soil present (faster)" },
        ],
        workedExample: {
          problem: "After a forest fire, grasses appear first, then shrubs, then trees. What type of succession is this?",
          solution: "Secondary succession — soil remained after fire, so recovery is faster than primary succession on bare rock.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-sx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are pioneer species?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First organisms to colonise bare habitat" },
              { id: "b", text: "Top predators" },
              { id: "c", text: "Largest species" },
              { id: "d", text: "Endangered species" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Pioneer species", statement: "First colonisers of bare habitat." }],
            steps: [{ reasoning: "Pioneers = lichens, mosses on bare rock.", marks: 1, markCode: "A" }],
            finalAnswer: "First colonisers",
          },
        },
        {
          id: "cial-b-u8-sx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between primary and secondary succession.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Succession", statement: "Primary=no soil, slow; secondary=soil present, faster." }],
            steps: [
              { reasoning: "Primary: bare rock, no soil — very slow.", marks: 1, markCode: "M" },
              { reasoning: "Secondary: soil remains after disturbance — faster.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No soil (slow) vs soil (fast)",
          },
        },
        {
          id: "cial-b-u8-sx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why secondary succession is faster than primary succession.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Succession", statement: "Existing soil/seeds/seeds bank speeds recovery." }],
            steps: [
              { reasoning: "Soil already present — no need to weather rock.", marks: 1, markCode: "M" },
              { reasoning: "Seed bank in soil → plants germinate quickly.", marks: 1, markCode: "M" },
              { reasoning: "Surviving organisms/residual nutrients accelerate recovery.", marks: 1, markCode: "M" },
              { reasoning: "Overall faster than starting from bare rock.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Soil+seeds+nutrients remain → faster",
          },
        },
        {
          id: "cial-b-u8-sx-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Succession and human impact.",
          parts: [
            { label: "a", prompt: "Define succession and name the stages.", marks: 3 },
            { label: "b", prompt: "Distinguish primary from secondary succession.", marks: 2 },
            { label: "c", prompt: "What are pioneer species? Give two examples.", marks: 2 },
            { label: "d", prompt: "Name two human activities that disrupt ecosystems.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Succession", statement: "Pioneers→...→climax; primary slow, secondary fast." }],
            steps: [
              { part: "a", reasoning: "Directional community change over time.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Stages: pioneers→grasses→shrubs→trees→climax.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All stages in order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Primary=no soil, slow; secondary=soil, fast.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "First colonisers (lichens, mosses).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Two examples.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any two: deforestation, pollution, overexploitation, climate change.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) stages (b) primary/secondary (c) lichens/mosses (d) 2 impacts",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u8-populations-notes",
      title: "Populations and succession — revision notes",
      summary: "Population growth curves, limiting factors, ecological succession.",
      sections: [
        {
          heading: "Populations",
          body: "Exponential growth (J-curve, unlimited resources) → logistic growth (S-curve, plateaus at carrying capacity K). Limiting factors: food, space, disease, predation. Density-dependent factors worsen with density; independent (floods, fires) don't.",
        },
        {
          heading: "Succession",
          body: "Pioneer species (lichens, mosses) → grasses → shrubs → trees → climax community. Primary succession on bare rock (no soil, very slow); secondary after disturbance with soil (faster). Human impacts: deforestation, pollution, overexploitation, climate change.",
        },
        {
          heading: "Exam checklist",
          body: "For growth curves identify J vs S shape and the role of carrying capacity. For succession state whether soil is present to classify primary vs secondary.",
        },
      ],
    },
  ],
};
