import type { Lesson } from "../../../types.ts";

export const lesson523: Lesson = {
  id: "ciealgeo-u2-lesson-2-3",
  code: "2-3",
  title: "Urbanisation and Urban Issues",
  goal: "I CAN explain urbanisation patterns, challenges and management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: urban"],

  vocabulary: [
    {
      term: "Urbanisation",
      definition: "Increasing proportion living in urban areas.",
    },
    { term: "Megacity", definition: "City with 10+ million population." },
    { term: "Urban sprawl", definition: "Uncontrolled outward expansion." },
    { term: "Informal settlement", definition: "Unplanned housing (slums)." },
    {
      term: "Gentrification",
      definition: "Wealthy people moving into poor areas.",
    },
    { term: "Urban primacy", definition: "One city dominates country." },
  ],
  concepts: [
    {
      id: "ciealgeo-u2-s3-urb",
      title: "Urbanisation",
      skill: "Analyse urban issues.",
      lesson: {
        sections: [
          {
            heading: "Urbanisation patterns",
            body: "Developed countries: slow growth, suburbanisation, counterurbanisation. Developing: rapid growth, megacities, informal settlements.",
          },
          {
            heading: "Urban challenges",
            body: "Housing shortage, informal settlements, traffic congestion, pollution, crime, inequality, infrastructure strain.",
          },
          {
            heading: "Management",
            body: "Planning, public transport, affordable housing, slum upgrading, green belts. Success varies.",
          },
        ],
        keyFormulas: [
          { name: "Urbanisation", statement: "urban population growth" },
          { name: "Megacity", statement: "10M+ population" },
          { name: "Informal settlement", statement: "slums" },
        ],
        workedExample: {
          problem: "Why do megacities face housing challenges?",
          solution:
            "Rapid population growth outpaces housing supply → informal settlements, slums, overcrowding.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u2-urb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is urbanisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Increasing proportion living in urban areas",
              },
              {
                id: "b",
                text: "City building",
              },
              {
                id: "c",
                text: "A type of migration",
              },
              {
                id: "d",
                text: "Rural decline",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urbanisation",
                statement: "Urban growth.",
              },
            ],
            steps: [
              {
                reasoning: "Urbanisation = urban population increase.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Urban population growth",
          },
        },
        {
          id: "ciealgeo-u2-urb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a megacity? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Megacity",
                statement: "10M+ city.",
              },
            ],
            steps: [
              {
                reasoning: "City with 10+ million population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examples: Tokyo, Delhi, Shanghai.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10M+ city example",
          },
        },
        {
          id: "ciealgeo-u2-urb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the main urban challenges in developing countries?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Urban challenges",
                statement: "Problems.",
              },
            ],
            steps: [
              {
                reasoning: "Informal settlements, housing shortage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Traffic, pollution, crime, inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Infrastructure strain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Housing, traffic, inequality",
          },
        },
        {
          id: "ciealgeo-u2-urb-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define urbanisation, megacity, urban sprawl, informal settlement, gentrification, urban primacy. (b) What is urbanisation? (c) What is megacity? (d) What are urban challenges? (e) What is informal settlement? (f) What is gentrification? (g) What is urban primacy? (h) Evaluate urban management strategies.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Urban",
                statement: "Challenges, management.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Urban population growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 10M+ city.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Housing, traffic, inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Slums.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Wealthy move in.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) One city dominates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Planning, transport, housing mixed success.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Urbanisation analysis.",
          },
        },
        {
          id: "ciealgeo-u2-urb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Urbanisation is best measured as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rural population decline alone" },
              { id: "b", text: "The proportion of a country's population living in urban areas" },
              { id: "c", text: "The number of skyscrapers" },
              { id: "d", text: "The total number of cities only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Urbanisation", statement: "Increase in the urban share of population." },
            ],
            steps: [{ reasoning: "Urbanisation concerns the proportion, not just total urban numbers.", marks: 1, markCode: "M" }],
            finalAnswer: "Urban share of population.",
          },
        },
        {
          id: "ciealgeo-u2-urb-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how rapid urban population growth can strain urban services.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Urban service strain", statement: "Population growth can outpace housing, water, transport and sanitation provision." },
            ],
            steps: [
              { reasoning: "Housing supply may not keep pace with demand.", marks: 1, markCode: "M" },
              { reasoning: "Transport, water and sanitation systems become overloaded.", marks: 1, markCode: "M" },
              { reasoning: "Informal settlements and overcrowding often result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rapid growth can exceed service capacity, producing housing and infrastructure shortages.",
            commonErrors: ["Listing problems without linking to growth."],
          },
        },
        {
          id: "ciealgeo-u2-urb-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Counterurbanisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Construction of city centres" },
              { id: "b", text: "Movement of people from urban areas to rural or smaller towns" },
              { id: "c", text: "Migration into informal settlements" },
              { id: "d", text: "Rapid growth of megacities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Counterurbanisation", statement: "Net movement away from large urban centres." },
            ],
            steps: [{ reasoning: "Counterurbanisation reverses the usual rural-to-urban movement.", marks: 1, markCode: "M" }],
            finalAnswer: "Movement away from large cities.",
          },
        },
        {
          id: "ciealgeo-u2-urb-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare urbanisation patterns in developed and developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Urbanisation patterns", statement: "Developed cities mature slowly while developing cities often grow rapidly." },
            ],
            steps: [
              { reasoning: "Developed countries show slow growth, suburbanisation and counterurbanisation.", marks: 1, markCode: "M" },
              { reasoning: "Developing countries often experience rapid growth, megacities and informal settlements.", marks: 1, markCode: "M" },
              { reasoning: "Infrastructure and planning capacity differ between contexts.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion compares rates, drivers and outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Developed urbanisation is slower and more decentralised; developing urbanisation is often faster and more concentrated.",
            commonErrors: ["Assuming all cities follow the same pattern."],
          },
        },
        {
          id: "ciealgeo-u2-urb-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An informal settlement is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A protected green space" },
              { id: "b", text: "A government office district" },
              { id: "c", text: "A planned suburb with services" },
              { id: "d", text: "Unplanned housing developed without official permission" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informal settlement", statement: "Unplanned housing often lacking services and legal status." },
            ],
            steps: [{ reasoning: "Informal settlements develop outside formal planning controls.", marks: 1, markCode: "M" }],
            finalAnswer: "Unplanned housing without official approval.",
          },
        },
        {
          id: "ciealgeo-u2-urb-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A city region has 18 million urban residents and 7 million rural residents. (a) What is the total population? (b) What percentage of the population is urban?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25000000, unit: "people" },
              { label: "b", answer: 72, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Urbanisation percentage", statement: "Urban percentage = urban population / total population x 100." },
            ],
            steps: [
              { part: "a", reasoning: "18000000 + 7000000 = 25000000 people.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "18000000 / 25000000 x 100 = 72%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 25000000; b) 72%",
            commonErrors: ["Dividing urban population by rural population."],
          },
        },
        {
          id: "ciealgeo-u2-urb-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate urban management strategies for reducing congestion and pollution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Urban management", statement: "Transport, land-use and environmental policies can reduce urban pressures." },
            ],
            steps: [
              { reasoning: "Public transport investment can reduce car dependency.", marks: 1, markCode: "M" },
              { reasoning: "Congestion charging and low-emission zones reduce traffic pollution.", marks: 1, markCode: "M" },
              { reasoning: "Planning and green space improve liveability.", marks: 1, markCode: "M" },
              { reasoning: "Costs and political feasibility affect implementation.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion supports an integrated strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Integrated transport, land-use and environmental policies are most effective but require funding and enforcement.",
            commonErrors: ["Recommending one measure without evaluation."],
          },
        },
        {
          id: "ciealgeo-u2-urb-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Urban primacy occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A city has no suburbs" },
              { id: "b", text: "Rural areas grow fastest" },
              { id: "c", text: "Several cities are equal in size" },
              { id: "d", text: "One city dominates a country's population and economy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Urban primacy", statement: "Dominance of one city over others." },
            ],
            steps: [{ reasoning: "Urban primacy means one city is disproportionately important.", marks: 1, markCode: "M" }],
            finalAnswer: "One city dominates.",
          },
        },
        {
          id: "ciealgeo-u2-urb-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A city has 2 million residents in an area of 400 km². Calculate its population density in people per square kilometre.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5000, unit: "people/km2" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Population density", statement: "Density = population / area." },
            ],
            steps: [
              { part: "a", reasoning: "2000000 / 400 = 5000 people per km2.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "5000 people/km2",
            commonErrors: ["Dividing area by population."],
          },
        },
        {
          id: "ciealgeo-u2-urb-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gentrification can lead to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Automatic reductions in traffic" },
              { id: "b", text: "No change in land values" },
              { id: "c", text: "Guaranteed housing affordability" },
              { id: "d", text: "Rising property prices and displacement of lower-income residents" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gentrification", statement: "Wealthy in-migration can raise prices and displace poorer residents." },
            ],
            steps: [{ reasoning: "New investment and demand can increase housing costs.", marks: 1, markCode: "M" }],
            finalAnswer: "Rising prices and possible displacement.",
          },
        },
        {
          id: "ciealgeo-u2-urb-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A city of 1.2 million grows at 2% per year. (a) How many people does this represent? (b) What is the population after one year?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 24000, unit: "people" },
              { label: "b", answer: 1224000, unit: "people" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Population growth", statement: "Growth = population x percentage rate." },
            ],
            steps: [
              { part: "a", reasoning: "1200000 x 0.02 = 24000 people.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "1200000 + 24000 = 1224000 people.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 24000; b) 1224000",
            commonErrors: ["Adding 2 people rather than 2%."],
          },
        },
        {
          id: "ciealgeo-u2-urb-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why urban sprawl can create environmental problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Urban sprawl", statement: "Uncontrolled outward growth consumes land and increases travel." },
            ],
            steps: [
              { reasoning: "Greenfield and farmland are converted to housing and roads.", marks: 1, markCode: "M" },
              { reasoning: "Longer journeys increase traffic emissions.", marks: 1, markCode: "M" },
              { reasoning: "Loss of habitats and open space reduces environmental quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sprawl destroys open land and increases car dependence, pollution and habitat loss.",
            commonErrors: ["Treating sprawl as automatically beneficial."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u2-urb-notes",
      title: "Urbanisation — notes",
      summary:
        "Rapid urban growth → megacities, informal settlements, infrastructure strain.",
      sections: [
        {
          heading: "Key idea",
          body: "Urbanisation creates opportunities and challenges.",
        },
        {
          heading: "Management",
          body: "Planning, transport, affordable housing key to sustainable cities.",
        },
      ],
    },
  ],
};
