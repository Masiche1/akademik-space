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
              { id: "a", text: "About 50%" },
              { id: "b", text: "About 10%" },
              { id: "c", text: "100%" },
              { id: "d", text: "About 90%" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** About 10%",
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
        { id: "oleg-u3-es-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A producer in an ecosystem is an organism that...",
          response: { type: "mcq", choices: [ { id: "a", text: "eats other organisms" }, { id: "b", text: "breaks down dead matter" }, { id: "c", text: "only lives in water" }, { id: "d", text: "makes food by photosynthesis" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Producer", statement: "Plants/algae photosynthesise." } ], steps: [ { reasoning: "Producers make food by photosynthesis.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** makes food by photosynthesis", commonErrors: ["Confusing producers with consumers."] } },
        { id: "oleg-u3-es-q6", difficulty: "core", totalMarks: 2,
          stem: "A food chain has 10 000 kJ of energy in producers. If 10% transfers to herbivores, calculate the energy at herbivore level.",
          response: { type: "numeric", parts: [ { label: "Energy", answer: 1000, unit: "kJ" } ] },
          markscheme: { principles: [ { kind: "formula", name: "10% rule", statement: "About 10% energy passes to next trophic level." } ], steps: [ { reasoning: "0.10 x 10 000 = 1000 kJ.", marks: 2, markCode: "AO1" } ], finalAnswer: "1000 kJ", commonErrors: ["Using 100% transfer."] } },
        { id: "oleg-u3-es-q7", difficulty: "core", totalMarks: 1,
          stem: "A primary consumer is best described as...",
          response: { type: "mcq", choices: [ { id: "a", text: "top predator" }, { id: "b", text: "producer" }, { id: "c", text: "decomposer" }, { id: "d", text: "herbivore feeding on producers" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Primary consumer", statement: "Herbivore eats producers." } ], steps: [ { reasoning: "Primary consumers are herbivores.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** herbivore feeding on producers", commonErrors: ["Confusing trophic levels."] } },
        { id: "oleg-u3-es-q8", difficulty: "core", totalMarks: 2,
          stem: "Energy falls from 5 000 kJ to 500 kJ between trophic levels. Calculate the percentage transferred.",
          response: { type: "numeric", parts: [ { label: "Percentage", answer: 10, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Energy transfer", statement: "Part/whole x 100." } ], steps: [ { reasoning: "500 / 5 000 x 100 = 10%.", marks: 2, markCode: "AO1" } ], finalAnswer: "10 %", commonErrors: ["Dividing in wrong order."] } },
        { id: "oleg-u3-es-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain the role of decomposers in an ecosystem.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Decomposers", statement: "They recycle nutrients back to producers." } ], steps: [ { reasoning: "Define decomposers as bacteria/fungi.", marks: 1, markCode: "AO1" }, { reasoning: "Explain they break down dead material.", marks: 1, markCode: "AO1" }, { reasoning: "Link to nutrient recycling for producers.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude why they are essential.", marks: 1, markCode: "AO3" } ], finalAnswer: "Decomposers break down dead matter and recycle nutrients so producers can reuse them.", commonErrors: ["Saying they only remove waste."] } },
        { id: "oleg-u3-es-q10", difficulty: "core", totalMarks: 1,
          stem: "A food web is more realistic than a food chain because...",
          response: { type: "mcq", choices: [ { id: "a", text: "it is always shorter" }, { id: "b", text: "it has no arrows" }, { id: "c", text: "organisms eat multiple foods and show interconnections" }, { id: "d", text: "it ignores predators" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Food webs", statement: "Webs show multiple feeding links." } ], steps: [ { reasoning: "Webs show organisms eat several foods.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** organisms eat multiple foods and show interconnections", commonErrors: ["Thinking chains are more complete."] } },
        { id: "oleg-u3-es-q11", difficulty: "challenge", totalMarks: 2,
          stem: "If 2 000 kJ reaches secondary consumers after 10% transfer, calculate the energy at the primary consumer level.",
          response: { type: "numeric", parts: [ { label: "Primary", answer: 20000, unit: "kJ" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Reverse percentage", statement: "Primary = secondary / 0.10." } ], steps: [ { reasoning: "2 000 / 0.10 = 20 000 kJ.", marks: 2, markCode: "AO1" } ], finalAnswer: "20000 kJ", commonErrors: ["Multiplying by 10% again."] } },
        { id: "oleg-u3-es-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Why are top predators usually rare in an ecosystem?",
          response: { type: "mcq", choices: [ { id: "a", text: "little energy remains after repeated 10% transfers" }, { id: "b", text: "they need no food" }, { id: "c", text: "producers eat them" }, { id: "d", text: "they reproduce fastest" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "principle", name: "Energy pyramid", statement: "Energy loss limits top predators." } ], steps: [ { reasoning: "Energy loss leaves little for top predators.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** little energy remains after repeated 10% transfers", commonErrors: ["Ignoring energy loss."] } },
        { id: "oleg-u3-es-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe how energy flows through a food chain and why biomass decreases at each level.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Energy flow", statement: "Energy decreases up the food chain." } ], steps: [ { reasoning: "State energy flows producer→herbivore→carnivore.", marks: 1, markCode: "AO1" }, { reasoning: "Mention only about 10% transfers.", marks: 1, markCode: "AO1" }, { reasoning: "Explain rest lost as heat/metabolism.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude why top levels are small.", marks: 1, markCode: "AO3" } ], finalAnswer: "Energy flows through trophic levels with about 10% transfer, so biomass and numbers decrease upwards.", commonErrors: ["Saying energy is recycled fully."] } },
        { id: "oleg-u3-es-q14", difficulty: "core", totalMarks: 1,
          stem: "Nutrient cycles such as carbon and nitrogen move nutrients between...",
          response: { type: "mcq", choices: [ { id: "a", text: "biotic and abiotic components" }, { id: "b", text: "only soil" }, { id: "c", text: "only living things" }, { id: "d", text: "only air" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Nutrient cycling", statement: "Cycles link living and non-living parts." } ], steps: [ { reasoning: "Cycles connect biotic and abiotic pools.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** biotic and abiotic components", commonErrors: ["Limiting to one component."] } },
        { id: "oleg-u3-es-q15", difficulty: "core", totalMarks: 2,
          stem: "A pond has 8 000 kJ in producers. After two trophic transfers at 10% each, calculate energy at the third consumer level.",
          response: { type: "numeric", parts: [ { label: "Energy", answer: 80, unit: "kJ" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Successive transfer", statement: "Apply 10% per level." } ], steps: [ { reasoning: "8 000 x 0.1 x 0.1 = 80 kJ.", marks: 2, markCode: "AO1" } ], finalAnswer: "80 kJ", commonErrors: ["Only applying one transfer."] } },
        { id: "oleg-u3-es-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Abiotic factors in an ecosystem include...",
          response: { type: "mcq", choices: [ { id: "a", text: "only animals" }, { id: "b", text: "only decomposers" }, { id: "c", text: "only plants" }, { id: "d", text: "light, water, temperature and soil" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Abiotic factors", statement: "Non-living environmental factors." } ], steps: [ { reasoning: "Abiotic factors are non-living.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** light, water, temperature and soil", commonErrors: ["Confusing with biotic factors."] } },
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
              { id: "a", text: "Grass" },
              { id: "b", text: "Ferns" },
              { id: "c", text: "Lichens" },
              { id: "d", text: "Oak trees" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Lichens",
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
        { id: "oleg-u3-si-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A climax community is...",
          response: { type: "mcq", choices: [ { id: "a", text: "a food chain" }, { id: "b", text: "the first pioneer species" }, { id: "c", text: "a disturbed habitat" }, { id: "d", text: "the stable end-stage ecosystem of succession" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Climax community", statement: "Stable final stage of succession." } ], steps: [ { reasoning: "Climax is the stable end stage.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** the stable end-stage ecosystem of succession", commonErrors: ["Confusing with pioneer stage."] } },
        { id: "oleg-u3-si-q6", difficulty: "core", totalMarks: 2,
          stem: "Primary succession takes about 1 000 years to reach climax, while secondary takes 200 years. Calculate how many times faster secondary succession is.",
          response: { type: "numeric", parts: [ { label: "Ratio", answer: 5, unit: "times" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Ratio", statement: "Primary/secondary." } ], steps: [ { reasoning: "1 000 / 200 = 5 times faster.", marks: 2, markCode: "AO1" } ], finalAnswer: "5 times", commonErrors: ["Dividing in wrong order."] } },
        { id: "oleg-u3-si-q7", difficulty: "core", totalMarks: 1,
          stem: "Secondary succession begins where...",
          response: { type: "mcq", choices: [ { id: "a", text: "bare rock has no soil" }, { id: "b", text: "soil remains after a disturbance" }, { id: "c", text: "only water is present" }, { id: "d", text: "no life ever existed" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Secondary succession", statement: "Starts with existing soil after disturbance." } ], steps: [ { reasoning: "Secondary succession needs existing soil.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** soil remains after a disturbance", commonErrors: ["Confusing with primary succession."] } },
        { id: "oleg-u3-si-q8", difficulty: "foundation", totalMarks: 2,
          stem: "An area of 500 km² forest is cleared, leaving 350 km². Calculate the percentage cleared.",
          response: { type: "numeric", parts: [ { label: "Percentage", answer: 30, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage", statement: "Part/whole x 100." } ], steps: [ { reasoning: "Cleared = 150; 150 / 500 x 100 = 30%.", marks: 2, markCode: "AO1" } ], finalAnswer: "30 %", commonErrors: ["Using remaining area as numerator."] } },
        { id: "oleg-u3-si-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain the difference between primary and secondary succession.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "comparison", name: "Succession types", statement: "Soil presence determines type and speed." } ], steps: [ { reasoning: "Define primary as starting on bare rock/no soil.", marks: 1, markCode: "AO1" }, { reasoning: "Define secondary as starting where soil remains.", marks: 1, markCode: "AO1" }, { reasoning: "Compare speed: primary slower, secondary faster.", marks: 1, markCode: "AO2" }, { reasoning: "Give examples of pioneer species.", marks: 1, markCode: "AO3" } ], finalAnswer: "Primary starts on bare rock without soil and is slow; secondary starts with soil and is faster.", commonErrors: ["Reversing the definitions."] } },
        { id: "oleg-u3-si-q10", difficulty: "core", totalMarks: 1,
          stem: "Which human activity is a major cause of habitat destruction?",
          response: { type: "mcq", choices: [ { id: "a", text: "Ecotourism" }, { id: "b", text: "Protected areas" }, { id: "c", text: "Deforestation" }, { id: "d", text: "Reforestation" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "principle", name: "Human impacts", statement: "Deforestation destroys habitats." } ], steps: [ { reasoning: "Deforestation removes habitats and species.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** Deforestation", commonErrors: ["Choosing a conservation activity."] } },
        { id: "oleg-u3-si-q11", difficulty: "core", totalMarks: 2,
          stem: "A fish stock falls from 60 000 tonnes to 45 000 tonnes due to overfishing. Calculate the percentage decline.",
          response: { type: "numeric", parts: [ { label: "Decline", answer: 25, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage decline", statement: "Decrease/original x 100." } ], steps: [ { reasoning: "(60 - 45) / 60 x 100 = 25%.", marks: 2, markCode: "AO1" } ], finalAnswer: "25 %", commonErrors: ["Using new stock as base."] } },
        { id: "oleg-u3-si-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Overexploitation differs from pollution because it...",
          response: { type: "mcq", choices: [ { id: "a", text: "always increases biodiversity" }, { id: "b", text: "only affects air" }, { id: "c", text: "directly removes or kills species faster than they reproduce" }, { id: "d", text: "has no ecological effect" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "principle", name: "Overexploitation", statement: "Taking resources faster than renewal depletes species." } ], steps: [ { reasoning: "Overexploitation removes species faster than renewal.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** directly removes or kills species faster than they reproduce", commonErrors: ["Confusing with pollution."] } },
        { id: "oleg-u3-si-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate two conservation strategies for protecting ecosystems.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Conservation", statement: "Protected areas and restoration reduce damage." } ], steps: [ { reasoning: "Name two strategies such as protected areas or reforestation.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how each protects species/habitat.", marks: 1, markCode: "AO2" }, { reasoning: "Mention limitations or needs.", marks: 1, markCode: "AO2" }, { reasoning: "Reach a judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "Protected areas prevent exploitation while reforestation restores habitat and carbon storage.", commonErrors: ["Listing strategies without mechanisms."] } },
        { id: "oleg-u3-si-q14", difficulty: "core", totalMarks: 1,
          stem: "Pioneer species in primary succession are typically...",
          response: { type: "mcq", choices: [ { id: "a", text: "top predators" }, { id: "b", text: "lichens or mosses that tolerate bare rock" }, { id: "c", text: "decomposers only" }, { id: "d", text: "large trees" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Pioneer species", statement: "Hardy species colonise bare surfaces first." } ], steps: [ { reasoning: "Lichens/mosses tolerate bare rock first.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** lichens or mosses that tolerate bare rock", commonErrors: ["Choosing climax species."] } },
        { id: "oleg-u3-si-q15", difficulty: "foundation", totalMarks: 2,
          stem: "Reforestation plants 5 000 trees per year. How many years to plant 40 000 trees?",
          response: { type: "numeric", parts: [ { label: "Years", answer: 8, unit: "years" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Time = total/rate", statement: "Divide target by annual rate." } ], steps: [ { reasoning: "40 000 / 5 000 = 8 years.", marks: 2, markCode: "AO1" } ], finalAnswer: "8 years", commonErrors: ["Multiplying instead of dividing."] } },
        { id: "oleg-u3-si-q16", difficulty: "core", totalMarks: 1,
          stem: "Climate change threatens ecosystems mainly because it...",
          response: { type: "mcq", choices: [ { id: "a", text: "has no effect" }, { id: "b", text: "removes all predators" }, { id: "c", text: "alters habitats faster than species can adapt" }, { id: "d", text: "always increases rainfall" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "principle", name: "Climate change", statement: "Rapid change outpaces adaptation." } ], steps: [ { reasoning: "Rapid habitat change exceeds species' ability to adapt.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** alters habitats faster than species can adapt", commonErrors: ["Underestimating the effect."] } },
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
