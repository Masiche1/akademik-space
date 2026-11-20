import type { Lesson } from "../../../types.ts";

export const lesson351: Lesson = {
  id: "cieihis-u3-lesson-3-1",
  code: "3-1",
  title: "Apartheid in South Africa",
  goal: "I CAN explain apartheid system and resistance movements.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Apartheid"],
  
  vocabulary: [
    { term: "Apartheid", definition: "System of racial segregation in South Africa 1948-1994." },
    { term: "ANC", definition: "African National Congress — liberation movement." },
    { term: "Nelson Mandela", definition: "Anti-apartheid leader, first black president." },
    { term: "Sharpeville Massacre", definition: "1960 killing of peaceful protesters." },
    { term: "Bantu Education Act", definition: "1953 law enforcing segregated education." },
    { term: "Truth and Reconciliation Commission", definition: "Post-apartheid justice body." },
  ],
  concepts: [
    {
      id: "cieihis-u3-s1-apart",
      title: "Apartheid",
      skill: "Understand apartheid system and resistance.",
      lesson: {
        sections: [
          {
            heading: "Apartheid system",
            body: "1948: National Party introduced apartheid — racial segregation laws. Population Registration Act classified races. Group Areas Act forced residential segregation. Pass laws controlled movement. Bantu Education enforced inferior schooling.",
          },
          {
            heading: "Resistance",
            body: "ANC led resistance — initially peaceful, later armed struggle after Sharpeville 1960. Mandela imprisoned 1964-1990. International sanctions increased pressure. 1990: Mandela released. 1994: first democratic elections — Mandela president.",
          },
        ],
        keyFormulas: [
          { name: "Apartheid", statement: "1948-1994 segregation" },
          { name: "ANC", statement: "liberation movement" },
          { name: "1994", statement: "first democratic elections" },
        ],
        workedExample: {
          problem: "How did international pressure contribute to ending apartheid?",
          solution: "Sanctions, divestment, cultural boycotts isolated South Africa economically and politically.",
        },
      },
      questions: [
        {
          id: "cieihis-u3-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was apartheid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "System of racial segregation in South Africa 1948-1994"
                    },
                    {
                              "id": "b",
                              "text": "A type of government"
                    },
                    {
                              "id": "c",
                              "text": "A peace treaty"
                    },
                    {
                              "id": "d",
                              "text": "A trade agreement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Apartheid",
                              "statement": "Racial segregation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Apartheid = racial segregation system.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Racial segregation system"
},
        },
        {
          id: "cieihis-u3-ap-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who was Nelson Mandela?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mandela",
                              "statement": "Anti-apartheid leader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Anti-apartheid leader, first black president.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Imprisoned 27 years, released 1990.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Anti-apartheid leader"
},
        },
        {
          id: "cieihis-u3-ap-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was the Sharpeville Massacre?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sharpeville",
                              "statement": "1960 protest killing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1960 killing of peaceful protesters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Led to ANC turning to armed struggle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "International condemnation increased.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1960 protest killing"
},
        },
        {
          id: "cieihis-u3-ap-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define apartheid, ANC, Nelson Mandela, Sharpeville Massacre, Bantu Education Act, Truth and Reconciliation Commission. (b) What was apartheid? (c) Who was Mandela? (d) What was Sharpeville? (e) When did apartheid end? (f) What was ANC? (g) How did international pressure help? (h) Evaluate success of anti-apartheid movement.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Apartheid",
                              "statement": "System, resistance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Racial segregation system.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Anti-apartheid leader.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1960 protest killing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1994.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Liberation movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Sanctions, divestment, boycotts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation — ended but inequality remains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Apartheid system and resistance."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u3-ap-notes",
      title: "Apartheid — notes",
      summary: "1948-1994 racial segregation. ANC resistance, Mandela leadership, international sanctions → 1994 democracy.",
      sections: [
        { heading: "Key idea", body: "Apartheid enforced racial hierarchy through legal discrimination." },
        { heading: "End", body: "Mandela released 1990, first democratic elections 1994." },
      ],
    },
  ],
};
