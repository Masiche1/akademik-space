import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cieigeo-u4-lesson-4-1",
  code: "4-1",
  title: "Climate Change and Ecosystems",
  goal: "I CAN explain the enhanced greenhouse effect, climate impacts and ecosystem structure at IGCSE Geography standard.",
  standards: ["Cambridge IGCSE Geography 0460", "Climate change, ecosystems"],
  vocabulary: [
    {
      term: "Greenhouse effect",
      definition: "Atmospheric gases trapping outgoing infrared radiation.",
    },
    {
      term: "Enhanced greenhouse effect",
      definition: "Extra warming from human-added greenhouse gases.",
    },
    {
      term: "Producer",
      definition: "Organism making its own food, e.g. plants.",
    },
    { term: "Consumer", definition: "Organism feeding on other organisms." },
    {
      term: "Decomposer",
      definition: "Organism breaking down dead material, recycling nutrients.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u4-s1-climate",
      title: "Climate change and ecosystems",
      skill: "Explain greenhouse mechanisms, climate impacts and food webs.",
      lesson: {
        sections: [
          {
            heading: "Enhanced greenhouse effect",
            body: "Greenhouse gases (CO2, methane, water vapour) let sunlight in but trap outgoing heat — the natural greenhouse effect keeps Earth habitable. Burning fossil fuels and deforestation add extra gases, enhancing the effect: more heat retained, global temperatures rise, weather patterns shift.",
          },
          {
            heading: "Ecosystems",
            body: "Ecosystems = community of organisms + environment. Producers (plants) capture energy via photosynthesis; consumers transfer it up food chains; decomposers recycle nutrients. Only ~10% of energy passes between trophic levels — most is lost as heat. Human activities disrupt this balance through habitat loss, pollution and overexploitation.",
          },
        ],
        keyFormulas: [
          { name: "Greenhouse", statement: "short-wave in, long-wave trapped" },
          {
            name: "Energy transfer",
            statement: "~10% passes to next trophic level",
          },
        ],
        workedExample: {
          problem:
            "Explain two ways human activity enhances the greenhouse effect.",
          solution:
            "Burning fossil fuels releases stored carbon as CO2; deforestation removes trees that absorb CO2.",
        },
      },
      questions: [
        {
          id: "cieigeo-u4-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is the main contributor to the enhanced greenhouse effect from human activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse gases",
                statement: "CO2, methane, water vapour trap heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CO2 from burning fossil fuels is the main human-added gas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Carbon dioxide",
          },
        },
        {
          id: "cieigeo-u4-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two physical impacts of climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Climate impacts",
                statement: "Physical + human consequences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rising sea levels from melting ice; more frequent extreme weather events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shifting rainfall patterns causing droughts or floods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sea level rise; extreme weather; changing rainfall patterns",
          },
        },
        {
          id: "cieigeo-u4-cl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a food chain grass → grasshopper → frog → snake, what role does the grass play, and roughly what percentage of the grass's energy reaches the snake?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trophic levels",
                statement: "~10% energy transfer between levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Grass is the producer — it makes food by photosynthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Energy passes grass→grasshopper→frog→snake = 3 transfers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "~10% each step: 0.1³ ≈ 0.1% reaches the snake.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Producer; ~0.1% of original energy",
          },
        },
        {
          id: "cieigeo-u4-cl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between mitigation and adaptation as responses to climate change, with one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Responses",
                statement:
                  "Mitigation = reduce causes; adaptation = cope with effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mitigation addresses causes — e.g. switching to renewable energy cuts CO2 emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adaptation addresses effects — e.g. building flood defences or drought-resistant crops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mitigation is long-term prevention; adaptation is coping with changes already underway.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both are needed; neither alone is sufficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mitigation reduces emissions (renewables); adaptation copes with impacts (flood defences)",
          },
        },
        {
          id: "cieigeo-u4-cl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the natural greenhouse effect?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ozone blocking all solar radiation",
              },
              {
                id: "b",
                text: "Greenhouse gases trapping outgoing heat, keeping Earth habitable",
              },
              {
                id: "c",
                text: "The Sun heating Earth's surface directly",
              },
              {
                id: "d",
                text: "Clouds reflecting sunlight back into space",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse effect",
                statement: "Gases trap outgoing infrared radiation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The natural greenhouse effect retains enough heat for life.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Greenhouse gases trapping outgoing heat, keeping Earth habitable",
          },
        },
        {
          id: "cieigeo-u4-cl-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which human activity is a major source of methane, a greenhouse gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Burning coal for electricity" },
              { id: "b", text: "Generating tidal power" },
              { id: "c", text: "Decomposition of waste in landfills" },
              { id: "d", text: "Operating wind turbines" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse gases",
                statement: "CO2 and methane trap outgoing heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Landfill waste decomposes anaerobically, releasing methane.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Decomposition of waste in landfills",
          },
        },
        {
          id: "cieigeo-u4-cl-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a grassland ecosystem, plants store 80 000 kJ of energy. Calculate (a) the energy passed to primary consumers and (b) the energy passed on to secondary consumers.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Energy to primary consumers (kJ)",
                answer: 8000,
                unit: "kJ",
              },
              {
                label: "(b) Energy to secondary consumers (kJ)",
                answer: 800,
                unit: "kJ",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trophic levels",
                statement: "~10% of energy passes to the next level.",
              },
            ],
            steps: [
              {
                reasoning: "80 000 × 0.10 = 8 000 kJ to primary consumers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8 000 × 0.10 = 800 kJ to secondary consumers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "8 000 kJ; 800 kJ",
          },
        },
        {
          id: "cieigeo-u4-cl-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of decomposers in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hunting and eating live prey" },
              { id: "b", text: "Absorbing sunlight for energy" },
              {
                id: "c",
                text: "Breaking down dead organisms and recycling nutrients",
              },
              {
                id: "d",
                text: "Producing food through photosynthesis",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposer",
                statement: "Breaks down dead material, recycling nutrients.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Decomposers return nutrients to the soil for reuse.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Breaking down dead organisms and recycling nutrients",
          },
        },
        {
          id: "cieigeo-u4-cl-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country cleared 1 500 km² of forest in one year. Its total forest cover is 12 000 km². Calculate (a) the percentage of forest cleared and (b) the forest area remaining.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Percentage cleared (%)",
                answer: 12.5,
                unit: "%",
              },
              {
                label: "(b) Forest remaining (km²)",
                answer: 10500,
                unit: "km^2",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Deforestation rate",
                statement:
                  "Cleared ÷ total cover × 100; remaining = total − cleared.",
              },
            ],
            steps: [
              {
                reasoning: "1 500 ÷ 12 000 × 100 = 12.5% cleared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "12 000 − 1 500 = 10 500 km² remaining.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "12.5%; 10 500 km²",
          },
        },
        {
          id: "cieigeo-u4-cl-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A producer stores 600 000 J of energy. Calculate (a) the energy reaching primary consumers and (b) the energy reaching secondary consumers.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Energy to primary consumers (J)",
                answer: 60000,
                unit: "J",
              },
              {
                label: "(b) Energy to secondary consumers (J)",
                answer: 6000,
                unit: "J",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trophic levels",
                statement: "~10% of energy passes to the next level.",
              },
            ],
            steps: [
              {
                reasoning: "600 000 × 0.10 = 60 000 J to primary consumers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "60 000 × 0.10 = 6 000 J to secondary consumers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "60 000 J; 6 000 J",
          },
        },
        {
          id: "cieigeo-u4-cl-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best explains why protected areas alone may not stop deforestation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Enforcement is costly and logging pressure may shift to unprotected land",
              },
              {
                id: "b",
                text: "Cleared forests regrow instantly",
              },
              {
                id: "c",
                text: "Protected areas always succeed completely",
              },
              {
                id: "d",
                text: "Protection increases rainfall in the region",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conservation limits",
                statement: "Protection faces enforcement and leakage problems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Demand for land may relocate logging beyond park boundaries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Enforcement is costly and logging pressure may shift to unprotected land",
          },
        },
        {
          id: "cieigeo-u4-cl-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A power station emits 20 000 tonnes of CO2 per year. Renewable sources offset 35% of emissions. Calculate (a) the mass of CO2 offset and (b) the mass still emitted.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) CO2 offset (tonnes)",
                answer: 7000,
                unit: "tonnes",
              },
              {
                label: "(b) CO2 still emitted (tonnes)",
                answer: 13000,
                unit: "tonnes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Mitigation",
                statement: "Offset % × total; remaining = total − offset.",
              },
            ],
            steps: [
              {
                reasoning: "20 000 × 0.35 = 7 000 tonnes offset.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "20 000 − 7 000 = 13 000 tonnes still emitted.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "7 000 tonnes; 13 000 tonnes",
          },
        },
        {
          id: "cieigeo-u4-cl-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organism is a producer in a food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oak tree" },
              { id: "b", text: "Eagle" },
              { id: "c", text: "Earthworm" },
              { id: "d", text: "Mushroom fungus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Producer",
                statement: "Makes its own food, e.g. plants.",
              },
            ],
            steps: [
              {
                reasoning: "Trees photosynthesise, producing their own food.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Oak tree",
          },
        },
        {
          id: "cieigeo-u4-cl-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does only about 10% of energy pass to the next trophic level?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Consumers store energy while sleeping",
              },
              {
                id: "b",
                text: "Plants absorb 90% of the sunlight themselves",
              },
              {
                id: "c",
                text: "Decomposers take all the remaining energy",
              },
              {
                id: "d",
                text: "Most energy is used for respiration, movement and is lost as heat",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Energy transfer",
                statement: "~10% passes on; the rest is lost as heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Respiration and movement use most energy before it can pass on.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Most energy is used for respiration, movement and is lost as heat",
          },
        },
        {
          id: "cieigeo-u4-cl-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that creating protected areas is the best way to conserve tropical rainforests.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Weigh benefits against risks, then judge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefit: parks stop logging and preserve habitats and species.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: can fund conservation through eco-tourism and park fees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk: enforcement is expensive and logging may shift to unprotected land (leakage).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: effective only if combined with sustainable livelihoods and enforcement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective only alongside enforcement and local benefits; alone it can leak",
          },
        },
        {
          id: "cieigeo-u4-cl-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pond food chain stores 40 000 kJ of energy in plants. Calculate (a) the energy reaching secondary consumers after two transfers and (b) the energy lost as heat during those two transfers.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Energy after two transfers (kJ)",
                answer: 400,
                unit: "kJ",
              },
              {
                label: "(b) Energy lost as heat (kJ)",
                answer: 39600,
                unit: "kJ",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trophic levels",
                statement: "~10% passes on; ~90% is lost as heat each step.",
              },
            ],
            steps: [
              {
                reasoning:
                  "40 000 × 0.10 × 0.10 = 400 kJ reaches secondary consumers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "40 000 − 400 = 39 600 kJ lost as heat.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "400 kJ; 39 600 kJ",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u4-climate-notes",
      title: "Climate and ecosystems — revision notes",
      summary:
        "Enhanced greenhouse effect, impacts, food webs, mitigation vs adaptation.",
      sections: [
        {
          heading: "Key skills",
          body: "Explain mechanisms (not just list impacts); use the ~10% rule for energy transfer; distinguish mitigation from adaptation.",
        },
        {
          heading: "Exam tips",
          body: "Link every human activity to a specific greenhouse gas or ecosystem disruption — vague 'pollution' answers lose marks.",
        },
      ],
    },
  ],
};
