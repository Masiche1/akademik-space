import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "oleg-u3-lesson-3-2",
  code: "3-2",
  title: "Changing Ecosystems",
  goal: "I CAN describe ecosystem structure, succession and human impacts on ecosystems.",
  standards: ["2217: Changing ecosystems"],
  vocabulary: [
    {
      term: "Ecosystem",
      definition: "Community of organisms interacting with their environment.",
    },
    { term: "Producer", definition: "Organism making food by photosynthesis." },
    { term: "Consumer", definition: "Organism feeding on other organisms." },
    { term: "Decomposer", definition: "Organism breaking down dead material." },
    { term: "Succession", definition: "Change in ecosystem over time." },
    { term: "Biodiversity", definition: "Variety of species in an ecosystem." },
  ],
  concepts: [
    {
      id: "oleg-u3-ecosystem-structure",
      title: "Ecosystem structure and energy flow",
      skill: "Describe ecosystem components and energy flow.",
      lesson: {
        sections: [
          {
            heading: "Components",
            body: "Producers (plants) capture energy via photosynthesis. Consumers: primary (herbivores), secondary (carnivores), tertiary (top predators). Decomposers (bacteria/fungi) recycle nutrients. Abiotic factors: light, water, temperature, soil.",
          },
          {
            heading: "Energy flow",
            body: "Food chains show energy transfer: producer → herbivore → carnivore. Only ~10% energy passes to next level (rest lost as heat). Food webs show interconnected chains. Decomposers return nutrients to soil for producers.",
          },
          {
            heading: "Nutrient cycling",
            body: "Carbon, nitrogen, phosphorus cycle between biotic and abiotic components. Decomposers crucial — without them nutrients lock up in dead matter.",
          },
        ],
        keyFormulas: [
          {
            name: "Ecosystems",
            statement: "Producers→consumers→decomposers; ~10% energy transfer.",
          },
        ],
        workedExample: {
          problem: "Why are top predators rare?",
          solution:
            "Only ~10% energy transfers each level — little energy reaches top predators.",
        },
      },
      questions: [
        {
          id: "oleg-u3-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What percentage of energy typically transfers to the next trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 10%" },
              { id: "b", text: "About 50%" },
              { id: "c", text: "About 90%" },
              { id: "d", text: "100%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Energy transfer",
                statement: "~10% to next level.",
              },
            ],
            steps: [{ reasoning: "10% rule.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** About 10%",
            commonErrors: ["Thinking 100% transfers."],
          },
        },
        {
          id: "oleg-u3-es-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish producers, consumers and decomposers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecosystem roles",
                statement: "Make food, eat, recycle.",
              },
            ],
            steps: [
              {
                reasoning: "Producers photosynthesise.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Consumers eat; decomposers recycle.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Producers make food; consumers eat; decomposers break down and recycle.",
            commonErrors: ["Confusing roles."],
          },
        },
        {
          id: "oleg-u3-es-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why food webs are more realistic than food chains.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food webs",
                statement: "Interconnected feeding relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Organisms eat multiple foods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows ecosystem complexity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows impact of species loss.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Food webs show organisms eat multiple foods — more realistic and shows stability.",
            commonErrors: ["Saying chains are wrong."],
          },
        },
        {
          id: "oleg-u3-es-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Ecosystem structure.",
          parts: [
            { label: "a", prompt: "Define ecosystem.", marks: 1 },
            { label: "b", prompt: "Producers vs consumers?", marks: 2 },
            { label: "c", prompt: "Energy transfer?", marks: 3 },
            { label: "d", prompt: "Role of decomposers?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ecosystems",
                statement: "Definition+roles+energy+decomposers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Community + environment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Make vs eat food.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "~10% transfer.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Rest lost as heat.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Consequence: few predators.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Break down dead matter.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Recycle nutrients.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Essential for producers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) ecosystem (b) roles (c) energy (d) decomposers",
          },
        },
      ],
    },
    {
      id: "oleg-u3-succession-impact",
      title: "Succession and Human Impact",
      skill:
        "Describe ecological succession and evaluate human impacts on ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Succession",
            body: "Primary succession: on bare rock/no soil — lichens → mosses → grasses → shrubs → trees (very slow). Secondary succession: after disturbance where soil remains — faster, pioneer species first. Climax community: stable end-stage ecosystem.",
          },
          {
            heading: "Human impacts",
            body: "Deforestation reduces biodiversity and carbon storage. Pollution (air/water/plastic) harms species. Overexploitation (overfishing, poaching) depletes populations. Climate change alters habitats faster than species adapt. Habitat destruction is the biggest threat.",
          },
          {
            heading: "Conservation",
            body: "Protected areas, sustainable farming, reforestation, pollution controls, international agreements (CITES, climate accords). Ecotourism balances use and protection.",
          },
        ],
        keyFormulas: [
          {
            name: "Succession/impact",
            statement:
              "Primary=bare rock slow; Secondary=soil fast; impacts=deforestation+pollution+overexploitation.",
          },
        ],
        workedExample: {
          problem: "Primary vs secondary succession?",
          solution:
            "Primary starts on bare rock without soil (lichens first, slow); secondary starts with soil after disturbance (faster).",
        },
      },
      questions: [
        {
          id: "oleg-u3-si-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which species typically starts primary succession?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lichens" },
              { id: "b", text: "Oak trees" },
              { id: "c", text: "Grass" },
              { id: "d", text: "Ferns" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pioneer species",
                statement: "Lichens/mosses first.",
              },
            ],
            steps: [
              { reasoning: "Lichens pioneer.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Lichens",
            commonErrors: ["Choosing later-stage species."],
          },
        },
        {
          id: "oleg-u3-si-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish primary from secondary succession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Succession types",
                statement: "Bare rock vs soil present.",
              },
            ],
            steps: [
              {
                reasoning: "Primary: no soil, slow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Secondary: soil, faster.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Primary starts on bare rock without soil; secondary starts where soil remains.",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "oleg-u3-si-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how deforestation affects an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deforestation",
                statement: "Biodiversity loss + carbon + soil.",
              },
            ],
            steps: [
              {
                reasoning: "Reduces biodiversity/habitat.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increases CO₂ (carbon storage lost).",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Soil erosion follows.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Loses biodiversity, releases carbon, causes soil erosion.",
            commonErrors: ["Only one effect."],
          },
        },
        {
          id: "oleg-u3-si-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Succession and human impact.",
          parts: [
            { label: "a", prompt: "Primary succession?", marks: 2 },
            { label: "b", prompt: "Secondary succession?", marks: 2 },
            { label: "c", prompt: "Three human impacts?", marks: 3 },
            { label: "d", prompt: "Conservation methods?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ecosystems",
                statement: "Succession+impacts+conservation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Bare rock/no soil.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Slow, lichens first.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Soil remains.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Faster recovery.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any three impacts.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Protected areas/sustainable use.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Example.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "(a) primary (b) secondary (c) impacts (d) conservation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u3-3-2-notes",
      title: "Ecosystems — notes",
      summary:
        "Structure, energy flow, succession, human impacts, conservation.",
      sections: [
        {
          heading: "Structure/flow",
          body: "Producers→consumers→decomposers; ~10% energy transfer; food webs.",
        },
        {
          heading: "Change/impact",
          body: "Primary vs secondary succession; deforestation, pollution, overexploitation; conservation responses.",
        },
      ],
    },
  ],
};
