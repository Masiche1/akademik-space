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
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "b",
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
