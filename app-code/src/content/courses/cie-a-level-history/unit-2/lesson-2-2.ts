import type { Lesson } from "../../../types.ts";

export const lesson622: Lesson = {
  id: "ciealhis-u2-lesson-2-2",
  code: "2-2",
  title: "Apartheid and Anti-Apartheid Movement",
  goal: "I CAN explain apartheid system, resistance and its end.",
  standards: ["Cambridge A Level History 9489", "Paper 2: Apartheid"],
  
  vocabulary: [
    { term: "Apartheid", definition: "System of racial segregation 1948-1994." },
    { term: "ANC", definition: "African National Congress — liberation movement." },
    { term: "Nelson Mandela", definition: "Anti-apartheid leader, first black president." },
    { term: "Sharpeville Massacre", definition: "1960 killing of peaceful protesters." },
    { term: "Bantu Education Act", definition: "1953 law enforcing segregated education." },
    { term: "Truth and Reconciliation Commission", definition: "Post-apartheid justice body." },
  ],
  concepts: [
    {
      id: "ciealhis-u2-s2-apart",
      title: "Apartheid",
      skill: "Understand apartheid system and resistance.",
      lesson: {
        sections: [
          {
            heading: "Apartheid system",
            body: "1948: National Party introduced apartheid — racial segregation. Population Registration Act classified races. Group Areas Act forced residential segregation. Pass laws controlled movement.",
          },
          {
            heading: "Resistance",
            body: "ANC led resistance — initially peaceful, later armed struggle after Sharpeville 1960. Mandela imprisoned 1964-1990. International sanctions increased pressure. 1994: first democratic elections.",
          },
        ],
        keyFormulas: [
          { name: "Apartheid", statement: "1948-1994" },
          { name: "ANC", statement: "liberation movement" },
          { name: "1994", statement: "democratic elections" },
        ],
        workedExample: {
          problem: "How did international pressure contribute to ending apartheid?",
          solution: "Sanctions, divestment, cultural boycotts isolated South Africa economically and politically.",
        },
      },
      questions: [
        {
          id: "ciealhis-u2-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was apartheid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "System of racial segregation 1948-1994"
                    },
                    {
                              "id": "b",
                              "text": "A type of government"
                    },
                    {
                              "id": "c",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "d",
                              "text": "A peace treaty"
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
          id: "ciealhis-u2-ap-q2",
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
          id: "ciealhis-u2-ap-q3",
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
                              "statement": "1960 protest."
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
          id: "ciealhis-u2-ap-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define apartheid, ANC, Mandela, Sharpeville, Bantu Education Act, Truth Commission. (b) What was apartheid? (c) Who was Mandela? (d) What was Sharpeville? (e) When did apartheid end? (f) What was ANC? (g) How did international pressure help? (h) Evaluate success of anti-apartheid movement.",
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
                              "reasoning": "(b) Racial segregation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Anti-apartheid leader.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1960 protest.",
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
                              "reasoning": "(g) Sanctions, boycotts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Ended but inequality remains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Apartheid analysis."
},
        },
        {
          id: "ciealhis-u2-ap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the main purpose of the Population Registration Act?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To organise population resettlement voluntarily" },
              { id: "b", text: "To classify South Africans by race for legal discrimination" },
              { id: "c", text: "To provide health care to all citizens" },
              { id: "d", text: "To register voters for democratic elections" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Population Registration Act", statement: "Racial classification." }
            ],
            steps: [
              { reasoning: "The law created the racial categories used to enforce apartheid.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** To classify South Africans by race for legal discrimination"
          }
        },
        {
          id: "ciealhis-u2-ap-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was apartheid formally introduced?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1948 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Apartheid", statement: "Introduced in 1948." }
            ],
            steps: [
              { reasoning: "The National Party government introduced apartheid in 1948.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1948"
          }
        },
        {
          id: "ciealhis-u2-ap-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did the Group Areas Act enforce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Integrated public transport systems" },
              { id: "b", text: "Equal access to urban land" },
              { id: "c", text: "Free movement between provinces" },
              { id: "d", text: "Compulsory residential segregation by race" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Group Areas Act", statement: "Residential segregation." }
            ],
            steps: [
              { reasoning: "The act designated areas where different racial groups could live.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** Compulsory residential segregation by race"
          }
        },
        {
          id: "ciealhis-u2-ap-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was Nelson Mandela released from prison?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1990 }]
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Mandela", statement: "Released in 1990." }
            ],
            steps: [
              { reasoning: "Mandela was released on 11 February 1990.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1990"
          }
        },
        {
          id: "ciealhis-u2-ap-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how pass laws and residential segregation restricted the lives of Black South Africans.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Apartheid controls", statement: "Movement and residence." }
            ],
            steps: [
              { reasoning: "Pass laws controlled movement and made arrests frequent.", marks: 1, markCode: "M" },
              { reasoning: "Group Areas forced people from homes and separated communities.", marks: 1, markCode: "M" },
              { reasoning: "Together these measures limited work, family life and political organisation.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Restricted movement, residence and daily life"
          }
        },
        {
          id: "ciealhis-u2-ap-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What change did the Sharpeville Massacre encourage in ANC strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A decision to accept segregated education" },
              { id: "b", text: "A turn towards armed struggle after peaceful protest was violently suppressed" },
              { id: "c", text: "An immediate alliance with the National Party" },
              { id: "d", text: "A complete abandonment of political mobilisation" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "ANC strategy", statement: "Shift after Sharpeville." }
            ],
            steps: [
              { reasoning: "State violence convinced many activists that peaceful protest alone was insufficient.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** A turn towards armed struggle after peaceful protest was violently suppressed"
          }
        },
        {
          id: "ciealhis-u2-ap-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year were South Africa's first democratic elections held?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1994 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Apartheid end", statement: "1994 elections." }
            ],
            steps: [
              { reasoning: "The first multiracial democratic election occurred in 1994.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1994"
          }
        },
        {
          id: "ciealhis-u2-ap-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare peaceful and armed forms of anti-apartheid resistance.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Resistance methods", statement: "Peaceful and armed." }
            ],
            steps: [
              { reasoning: "Peaceful protest built moral legitimacy and mass participation.", marks: 1, markCode: "M" },
              { reasoning: "Armed struggle showed regime intransigence but risked severe repression.", marks: 1, markCode: "M" },
              { reasoning: "Both forms interacted with international pressure to weaken apartheid.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Complementary methods with different risks"
          }
        },
        {
          id: "ciealhis-u2-ap-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What was the main aim of international sanctions against South Africa?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To support the South African military directly" },
              { id: "b", text: "To divide South Africa into separate states" },
              { id: "c", text: "To pressure the government economically and politically to end apartheid" },
              { id: "d", text: "To remove Nelson Mandela from prison secretly" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "International pressure", statement: "Sanctions and boycotts." }
            ],
            steps: [
              { reasoning: "Sanctions increased the cost of maintaining apartheid.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** To pressure the government economically and politically to end apartheid"
          }
        },
        {
          id: "ciealhis-u2-ap-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain how sanctions, divestment and cultural boycotts affected South Africa.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "International pressure", statement: "External leverage." }
            ],
            steps: [
              { reasoning: "Economic sanctions reduced trade, investment and government revenue.", marks: 1, markCode: "M" },
              { reasoning: "Cultural and sporting boycotts isolated the regime internationally.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Economic isolation and diplomatic isolation"
          }
        },
        {
          id: "ciealhis-u2-ap-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What was the Bantu Education Act designed to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Train teachers for integrated schools" },
              { id: "b", text: "Enforce racially segregated and inferior education for Black pupils" },
              { id: "c", text: "Provide equal university access to all South Africans" },
              { id: "d", text: "Fund private schools for white children" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Bantu Education Act", statement: "Segregated schooling." }
            ],
            steps: [
              { reasoning: "The 1953 act entrenched educational inequality.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** Enforce racially segregated and inferior education for Black pupils"
          }
        },
        {
          id: "ciealhis-u2-ap-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate the success of the anti-apartheid movement.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Balanced judgement." }
            ],
            steps: [
              { reasoning: "It achieved the end of legal apartheid and democratic elections in 1994.", marks: 1, markCode: "M" },
              { reasoning: "Economic inequality and social divisions remained after transition.", marks: 1, markCode: "M" },
              { reasoning: "A strong answer weighs political transformation against continuing challenges.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Major political success with lasting economic problems"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u2-ap-notes",
      title: "Apartheid — notes",
      summary: "1948-1994 racial segregation. ANC resistance, Mandela, international sanctions → 1994.",
      sections: [
        { heading: "Key idea", body: "Apartheid enforced racial hierarchy through legal discrimination." },
        { heading: "End", body: "Mandela released 1990, democratic elections 1994." },
      ],
    },
  ],
};
