import type { Lesson } from "../../../types.ts";

export const lesson346: Lesson = {
  id: "cieihis-u2-lesson-2-6",
  code: "2-6",
  title: "Civil Rights Movement in the USA",
  goal: "I CAN explain the Civil Rights Movement and key figures.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Civil Rights"],
  
  vocabulary: [
    { term: "Civil Rights Movement", definition: "Movement for racial equality in USA." },
    { term: "Segregation", definition: "Racial separation in public facilities." },
    { term: "Martin Luther King Jr", definition: "Civil rights leader advocating non-violence." },
    { term: "Malcolm X", definition: "Civil rights leader advocating self-defence." },
    { term: "Civil Rights Act", definition: "1964 law banning discrimination." },
    { term: "Voting Rights Act", definition: "1965 law ensuring voting rights." },
  ],
  concepts: [
    {
      id: "cieihis-u2-s6-cr",
      title: "Civil Rights Movement",
      skill: "Understand US civil rights struggle.",
      lesson: {
        sections: [
          {
            heading: "Background",
            body: "Jim Crow laws enforced segregation. African Americans faced discrimination in housing, education, employment, voting. NAACP and other organisations campaigned for change.",
          },
          {
            heading: "Key events",
            body: "1954 Brown v Board (school desegregation). 1955 Montgomery Bus Boycott (Rosa Parks). 1963 March on Washington (MLK 'I Have a Dream'). 1964 Civil Rights Act. 1965 Voting Rights Act.",
          },
          {
            heading: "Key figures",
            body: "MLK: non-violent resistance, integration. Malcolm X: Black Power, self-defence. Rosa Parks: bus boycott catalyst. Thurgood Marshall: legal strategy.",
          },
        ],
        keyFormulas: [
          { name: "Civil Rights", statement: "racial equality movement" },
          { name: "MLK", statement: "non-violence leader" },
          { name: "1964", statement: "Civil Rights Act" },
        ],
        workedExample: {
          problem: "Why was the Montgomery Bus Boycott significant?",
          solution: "Showed power of non-violent protest — economic pressure forced desegregation of buses.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Civil Rights Movement?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Movement for racial equality in USA"
                    },
                    {
                              "id": "b",
                              "text": "A military conflict"
                    },
                    {
                              "id": "c",
                              "text": "A trade union"
                    },
                    {
                              "id": "d",
                              "text": "A political party"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Civil Rights",
                              "statement": "Racial equality movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Civil Rights = racial equality struggle.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Racial equality movement"
},
        },
        {
          id: "cieihis-u2-cr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who was Martin Luther King Jr?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MLK",
                              "statement": "Non-violence leader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Civil rights leader advocating non-violence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Famous for 'I Have a Dream' speech 1963.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Non-violence civil rights leader"
},
        },
        {
          id: "cieihis-u2-cr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was the Montgomery Bus Boycott?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bus boycott",
                              "statement": "1955 protest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1955 protest after Rosa Parks arrest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "African Americans boycotted segregated buses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Led to desegregation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1955 bus desegregation protest"
},
        },
        {
          id: "cieihis-u2-cr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Civil Rights Movement, segregation, MLK, Malcolm X, Civil Rights Act, Voting Rights Act. (b) What was Civil Rights Movement? (c) Who was MLK? (d) What was Montgomery Bus Boycott? (e) What was Civil Rights Act? (f) What was Voting Rights Act? (g) What were Jim Crow laws? (h) Evaluate success of Civil Rights Movement.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Civil Rights",
                              "statement": "Movement, figures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Racial equality movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Non-violence leader.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1955 bus protest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1964 anti-discrimination law.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 1965 voting rights law.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Segregation laws.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation — progress but inequality remains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Civil Rights Movement."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-cr-notes",
      title: "Civil Rights — notes",
      summary: "Jim Crow segregation→non-violent protests→1964/1965 Acts. MLK vs Malcolm X strategies.",
      sections: [
        { heading: "Key idea", body: "Non-violent resistance + legal strategy achieved major civil rights victories." },
        { heading: "Key events", body: "Brown 1954, Montgomery 1955, March on Washington 1963, Acts 1964/1965." },
      ],
    },
  ],
};
