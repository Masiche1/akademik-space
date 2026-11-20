import type { Lesson } from "../../../types.ts";

export const lesson523: Lesson = {
  id: "ciealgeo-u2-lesson-2-3",
  code: "2-3",
  title: "Urbanisation and Urban Issues",
  goal: "I CAN explain urbanisation patterns, challenges and management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: urban"],
  
  vocabulary: [
    { term: "Urbanisation", definition: "Increasing proportion living in urban areas." },
    { term: "Megacity", definition: "City with 10+ million population." },
    { term: "Urban sprawl", definition: "Uncontrolled outward expansion." },
    { term: "Informal settlement", definition: "Unplanned housing (slums)." },
    { term: "Gentrification", definition: "Wealthy people moving into poor areas." },
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
          solution: "Rapid population growth outpaces housing supply → informal settlements, slums, overcrowding.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u2-urb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is urbanisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Increasing proportion living in urban areas"
                    },
                    {
                              "id": "b",
                              "text": "City building"
                    },
                    {
                              "id": "c",
                              "text": "Rural decline"
                    },
                    {
                              "id": "d",
                              "text": "A type of migration"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Urbanisation",
                              "statement": "Urban growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Urbanisation = urban population increase.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Urban population growth"
},
        },
        {
          id: "ciealgeo-u2-urb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a megacity? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Megacity",
                              "statement": "10M+ city."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "City with 10+ million population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: Tokyo, Delhi, Shanghai.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "10M+ city example"
},
        },
        {
          id: "ciealgeo-u2-urb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the main urban challenges in developing countries?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Urban challenges",
                              "statement": "Problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Informal settlements, housing shortage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Traffic, pollution, crime, inequality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Infrastructure strain.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Housing, traffic, inequality"
},
        },
        {
          id: "ciealgeo-u2-urb-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define urbanisation, megacity, urban sprawl, informal settlement, gentrification, urban primacy. (b) What is urbanisation? (c) What is megacity? (d) What are urban challenges? (e) What is informal settlement? (f) What is gentrification? (g) What is urban primacy? (h) Evaluate urban management strategies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Urban",
                              "statement": "Challenges, management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Urban population growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 10M+ city.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Housing, traffic, inequality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Slums.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Wealthy move in.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) One city dominates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Planning, transport, housing mixed success.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Urbanisation analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u2-urb-notes",
      title: "Urbanisation — notes",
      summary: "Rapid urban growth → megacities, informal settlements, infrastructure strain.",
      sections: [
        { heading: "Key idea", body: "Urbanisation creates opportunities and challenges." },
        { heading: "Management", body: "Planning, transport, affordable housing key to sustainable cities." },
      ],
    },
  ],
};
