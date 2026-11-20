import type { Lesson } from "../../../types.ts";

export const lesson514: Lesson = {
  id: "ciealgeo-u1-lesson-1-4",
  code: "1-4",
  title: "Ecosystems and Biodiversity",
  goal: "I CAN explain ecosystem structure, succession and conservation.",
  standards: ["Cambridge A Level Geography 9696", "Paper 1: ecosystems"],
  
  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms + environment." },
    { term: "Food chain", definition: "Sequence of who eats whom." },
    { term: "Food web", definition: "Interconnected food chains." },
    { term: "Succession", definition: "Change in ecosystem over time." },
    { term: "Biodiversity", definition: "Variety of life in ecosystem." },
    { term: "Carrying capacity", definition: "Max population environment supports." },
  ],
  concepts: [
    {
      id: "ciealgeo-u1-s4-eco",
      title: "Ecosystems",
      skill: "Analyse ecosystem structure and conservation.",
      lesson: {
        sections: [
          {
            heading: "Ecosystem structure",
            body: "Producers → primary consumers → secondary consumers → decomposers. Energy flow through trophic levels. Nutrient cycles (carbon, nitrogen).",
          },
          {
            heading: "Succession",
            body: "Pioneer species → intermediate → climax community. Primary (new land) vs secondary (after disturbance).",
          },
          {
            heading: "Biodiversity",
            body: "Species richness, evenness, genetic diversity. Hotspots: tropical rainforests, coral reefs. Threats: habitat loss, climate change, invasive species.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "organisms + environment" },
          { name: "Succession", statement: "ecosystem change" },
          { name: "Biodiversity", statement: "life variety" },
        ],
        workedExample: {
          problem: "Why is biodiversity important for ecosystem stability?",
          solution: "More species = more redundancy, better resistance to disturbance, greater ecosystem services.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u1-eco-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an ecosystem?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Community of organisms + environment"
                    },
                    {
                              "id": "b",
                              "text": "Just animals"
                    },
                    {
                              "id": "c",
                              "text": "Just plants"
                    },
                    {
                              "id": "d",
                              "text": "A type of climate"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ecosystem",
                              "statement": "Organisms + environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ecosystem = organisms + environment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Organisms + environment"
},
        },
        {
          id: "ciealgeo-u1-eco-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is succession?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Succession",
                              "statement": "Ecosystem change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Change in ecosystem over time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pioneer → climax community.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ecosystem change"
},
        },
        {
          id: "ciealgeo-u1-eco-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is biodiversity important?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Biodiversity",
                              "statement": "Importance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ecosystem stability/resilience.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ecosystem services (pollination, water).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Genetic resources, potential medicines.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Stability, services, resources"
},
        },
        {
          id: "ciealgeo-u1-eco-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ecosystem, food chain, food web, succession, biodiversity, carrying capacity. (b) What is ecosystem? (c) What is succession? (d) What is biodiversity? (e) Why is biodiversity important? (f) What are ecosystem services? (g) What threatens biodiversity? (h) Evaluate conservation strategies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ecosystems",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Organisms + environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Ecosystem change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Life variety.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Stability, services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Pollination, water, climate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Habitat loss, climate, invasive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Protected areas, sustainable use effective.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Ecosystem analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u1-eco-notes",
      title: "Ecosystems — notes",
      summary: "Ecosystem=organisms+environment. Succession=pioneer→climax. Biodiversity crucial.",
      sections: [
        { heading: "Key idea", body: "Biodiversity provides ecosystem services and resilience." },
        { heading: "Threats", body: "Habitat loss, climate change, invasive species reduce biodiversity." },
      ],
    },
  ],
};
