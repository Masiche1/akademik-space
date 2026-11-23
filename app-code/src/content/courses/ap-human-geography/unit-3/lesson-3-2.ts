import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "aphg-u3-lesson-3-2",
  code: "3-2",
  title: "Urbanization and Cities",
  goal: "I CAN explain urbanization patterns, models, and urban challenges.",
  standards: ["Unit 5"],
  vocabulary: [
    { term: "Urbanization", definition: "Increasing proportion of population living in cities — 55%+ of world now urban." },
    { term: "Megacity", definition: "City with 10+ million people — Tokyo (37M), Delhi (30M), Shanghai (27M)." },
    { term: "Primate city", definition: "City disproportionately larger than others — dominates national urban hierarchy." },
    { term: "Concentric zone model", definition: "Burgess model — city grows outward in rings (CBD → transition → working class → residential → commuter)." },
    { term: "Gentrification", definition: "Wealthier residents move into poorer neighborhoods, displacing original residents." },
    { term: "Urban sprawl", definition: "Low-density, automobile-dependent expansion of cities into suburbs." },
  ],
  concepts: [
    {
      id: "aphg-u3-urbanization-cities",
      title: "Cities and urbanization",
      skill: "Analyze urbanization patterns and city models.",
      lesson: {
        sections: [
          {
            heading: "Urbanization",
            body: "World crossed 50% urban threshold ~2008; growth concentrated in Africa/Asia; megacities (10M+) dominate; primate cities (Bangkok, Mexico City) dwarf other cities.",
          },
          {
            heading: "City models",
            body: "Burgess concentric zones (CBD→residential rings); Hoyt sector model (sectors along transport); multiple nuclei (subcenters); global cities (NYC, London, Tokyo) dominate world economy.",
          },
        ],
        keyFormulas: [
          { name: "Urbanization", statement: "Rural → Urban shift; >50% world urban since ~2008" },
          { name: "City models", statement: "Concentric (Burgess) / Sector (Hoyt) / Multiple nuclei / Global cities" },
        ],
        workedExample: {
          problem: "Why does Burgess's concentric zone model fail to describe modern cities?",
          solution: "It assumed cities grow outward in uniform rings — but modern cities have highways creating sectors, multiple employment centers, and suburbanization breaking the monocentric pattern.",
        },
      },
      questions: [
        {
          id: "aphg-u3-urbanization-cities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A megacity is a city with ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 million people"
                    },
                    {
                              "id": "b",
                              "text": "10 million or more people"
                    },
                    {
                              "id": "c",
                              "text": "100 million people"
                    },
                    {
                              "id": "d",
                              "text": "any large city"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Megacity",
                              "statement": "10M+ population threshold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A megacity has 10 million or more people — Tokyo (37M), Delhi (30M), Shanghai (27M) are the largest.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10 million+",
          "commonErrors": [
                    "Confusing with 'large city' (1M+) or 'world city.'"
          ]
},
        },
        {
          id: "aphg-u3-urbanization-cities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Burgess's concentric zone model describes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cities growing in sectors"
                    },
                    {
                              "id": "b",
                              "text": "city growth in outward rings from CBD"
                    },
                    {
                              "id": "c",
                              "text": "multiple employment centers"
                    },
                    {
                              "id": "d",
                              "text": "global city networks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Burgess model",
                              "statement": "Concentric zone urban structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Burgess's concentric zone model (1925) describes cities growing outward in rings — CBD in center, then transition, working-class, residential, commuter zones.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It was based on Chicago but doesn't fit modern polycentric cities.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Outward rings from CBD",
          "commonErrors": [
                    "Confusing with Hoyt's sector model."
          ]
},
        },
        {
          id: "aphg-u3-urbanization-cities-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximately what percentage of the world population lives in cities today? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent",
                              "answer": 56
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Estimate",
                              "statement": "~56% urban as of 2020s."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Approximately 56% of the world population lives in urban areas — crossed 50% around 2008.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $56$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "56",
          "commonErrors": [
                    "Using outdated figures (~30% in 1950)."
          ]
},
        },
        {
          id: "aphg-u3-urbanization-cities-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Burgess's concentric zone model works and why it's limited for modern cities.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Concentric zone model",
                              "statement": "Rings from CBD outward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Burgess (1925): cities grow outward in rings — CBD center; transition zone (industry, poor housing); working-class zone; residential zone; commuter zone. Based on Chicago's monocentric structure.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Limitations: assumes single CBD (modern cities have multiple centers); ignores highways creating sectors; doesn't account for suburbanization; reflects 1920s industrial city not contemporary polycentric urban form.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hoyt's sector model and multiple nuclei models better describe modern cities with transport corridors and subcenters.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Burgess = concentric rings; fails due to polycentric modern cities",
          "commonErrors": [
                    "Treating it as universally applicable — it's historically specific."
          ]
},
        },
        {
          id: "aphg-u3-urbanization-cities-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the causes and consequences of gentrification. Who benefits and who loses?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Gentrification",
                              "statement": "Neighborhood change dynamics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Causes: urban renewal, rising property values, influx of wealthier residents seeking affordable housing near city centers; cities encourage it for tax revenue and 'revitalization.'",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Consequences: displacement of long-term residents (often poor/minority); rising rents and property taxes; loss of affordable housing and community character; 'urban renewal' can destroy neighborhoods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Winners: new residents get affordable urban housing; cities gain tax revenue; businesses benefit from affluent customers. Losers: displaced residents lose homes, community, access to services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verdict: gentrification has mixed effects — revitalizes areas but displaces vulnerable populations; policy should balance investment with affordable housing protections.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Gentrification revitalizes but displaces — mixed outcomes",
          "commonErrors": [
                    "One-sided — both benefits and harms exist."
          ]
},
        },
      ],
    },
  ],
};
