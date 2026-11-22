import type { Lesson } from "../../../types.ts";

export const lesson346: Lesson = {
  id: "cieihis-u2-lesson-2-6",
  code: "2-6",
  title: "Civil Rights Movement in the USA",
  goal: "I CAN explain the Civil Rights Movement and key figures.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Civil Rights"],

  vocabulary: [
    {
      term: "Civil Rights Movement",
      definition: "Movement for racial equality in USA.",
    },
    {
      term: "Segregation",
      definition: "Racial separation in public facilities.",
    },
    {
      term: "Martin Luther King Jr",
      definition: "Civil rights leader advocating non-violence.",
    },
    {
      term: "Malcolm X",
      definition: "Civil rights leader advocating self-defence.",
    },
    {
      term: "Civil Rights Act",
      definition: "1964 law banning discrimination.",
    },
    {
      term: "Voting Rights Act",
      definition: "1965 law ensuring voting rights.",
    },
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
          solution:
            "Showed power of non-violent protest — economic pressure forced desegregation of buses.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Civil Rights Movement?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A political party",
              },
              {
                id: "b",
                text: "A trade union",
              },
              {
                id: "c",
                text: "Movement for racial equality in USA",
              },
              {
                id: "d",
                text: "A military conflict",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Civil Rights",
                statement: "Racial equality movement.",
              },
            ],
            steps: [
              {
                reasoning: "Civil Rights = racial equality struggle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Racial equality movement",
          },
        },
        {
          id: "cieihis-u2-cr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who was Martin Luther King Jr?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MLK",
                statement: "Non-violence leader.",
              },
            ],
            steps: [
              {
                reasoning: "Civil rights leader advocating non-violence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Famous for 'I Have a Dream' speech 1963.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Non-violence civil rights leader",
          },
        },
        {
          id: "cieihis-u2-cr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was the Montgomery Bus Boycott?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bus boycott",
                statement: "1955 protest.",
              },
            ],
            steps: [
              {
                reasoning: "1955 protest after Rosa Parks arrest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "African Americans boycotted segregated buses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Led to desegregation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1955 bus desegregation protest",
          },
        },
        {
          id: "cieihis-u2-cr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Civil Rights Movement, segregation, MLK, Malcolm X, Civil Rights Act, Voting Rights Act. (b) What was Civil Rights Movement? (c) Who was MLK? (d) What was Montgomery Bus Boycott? (e) What was Civil Rights Act? (f) What was Voting Rights Act? (g) What were Jim Crow laws? (h) Evaluate success of Civil Rights Movement.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Civil Rights",
                statement: "Movement, figures.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Racial equality movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Non-violence leader.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) 1955 bus protest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) 1964 anti-discrimination law.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) 1965 voting rights law.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Segregation laws.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced evaluation — progress but inequality remains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Civil Rights Movement.",
          },
        },
        {
          id: "cieihis-u2-cr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the significance of Brown v Board of Education in 1954?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It declared school segregation unconstitutional",
              },
              {
                id: "b",
                text: "It ended the Montgomery Bus Boycott",
              },
              {
                id: "c",
                text: "It created the Voting Rights Act",
              },
              {
                id: "d",
                text: "It legalised school segregation",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brown v Board",
                statement: "1954 desegregation ruling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Brown v Board of Education (1954) declared racial segregation in schools unconstitutional.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** It declared school segregation unconstitutional",
          },
        },
        {
          id: "cieihis-u2-cr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Civil Rights Act passed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1964,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Civil Rights Act",
                statement: "1964.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Civil Rights Act was passed in 1964, banning discrimination on the basis of race, colour, religion, sex or national origin.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1964",
          },
        },
        {
          id: "cieihis-u2-cr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What were the Jim Crow laws?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Jim Crow",
                statement: "Segregation laws.",
              },
            ],
            steps: [
              {
                reasoning:
                  "State and local laws enforcing racial segregation in the American South.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They mandated separate facilities for Black and white Americans in schools, transport and public places.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Segregation laws in the American South",
          },
        },
        {
          id: "cieihis-u2-cr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who refused to give up her bus seat to a white passenger in Montgomery in 1955, sparking the bus boycott?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Coretta Scott King",
              },
              {
                id: "b",
                text: "Fannie Lou Hamer",
              },
              {
                id: "c",
                text: "Rosa Parks",
              },
              {
                id: "d",
                text: "Ella Baker",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rosa Parks",
                statement: "Boycott catalyst.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rosa Parks' arrest in 1955 for refusing to surrender her seat sparked the Montgomery Bus Boycott.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Rosa Parks",
          },
        },
        {
          id: "cieihis-u2-cr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did the Montgomery Bus Boycott begin? (b) In which year was the March on Washington held?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1955,
              },
              {
                label: "b",
                answer: 1963,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Civil Rights dates",
                statement: "1955-63.",
              },
            ],
            steps: [
              {
                reasoning: "The Montgomery Bus Boycott began in 1955.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The March on Washington, where MLK gave his 'I Have a Dream' speech, was held in 1963.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1955, b) 1963",
          },
        },
        {
          id: "cieihis-u2-cr-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the Voting Rights Act of 1965?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A law legalising school segregation",
              },
              {
                id: "b",
                text: "A law banning all forms of racial discrimination in housing",
              },
              {
                id: "c",
                text: "A law ensuring the voting rights of African Americans",
              },
              {
                id: "d",
                text: "A law creating the NAACP",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Voting Rights Act",
                statement: "1965 voting law.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Voting Rights Act of 1965 outlawed discriminatory practices that prevented African Americans from voting.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** A law ensuring the voting rights of African Americans",
          },
        },
        {
          id: "cieihis-u2-cr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the approaches of Martin Luther King Jr and Malcolm X to achieving civil rights.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "MLK vs Malcolm X",
                statement: "Tactics compared.",
              },
            ],
            steps: [
              {
                reasoning:
                  "MLK advocated non-violent resistance, integration and appealing to American conscience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Malcolm X advocated self-defence, racial pride and later Black Power, criticising non-violence as ineffective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both aimed at racial equality but differed sharply over means and integration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Non-violence vs self-defence",
          },
        },
        {
          id: "cieihis-u2-cr-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains the significance of the Montgomery Bus Boycott?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It showed the power of organised non-violent economic protest",
              },
              {
                id: "b",
                text: "It led directly to the Civil Rights Act of 1964",
              },
              {
                id: "c",
                text: "It ended all forms of segregation in America",
              },
              {
                id: "d",
                text: "It proved that violent protest was necessary for change",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bus boycott significance",
                statement: "Non-violent pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The boycott's economic pressure forced bus desegregation, demonstrating the effectiveness of non-violent protest and launching MLK's leadership.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** It showed the power of organised non-violent economic protest",
          },
        },
        {
          id: "cieihis-u2-cr-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year was the Civil Rights Act passed? (b) In which year was the Voting Rights Act passed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1964,
              },
              {
                label: "b",
                answer: 1965,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Civil Rights Acts",
                statement: "1964-65.",
              },
            ],
            steps: [
              {
                reasoning: "The Civil Rights Act was passed in 1964.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The Voting Rights Act was passed in 1965.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1964, b) 1965",
          },
        },
        {
          id: "cieihis-u2-cr-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess how successful the Civil Rights Movement was in achieving its goals.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Assessment",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis: the movement achieved major legal victories — desegregation, the 1964 Civil Rights Act and the 1965 Voting Rights Act.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: Brown v Board, Montgomery, March on Washington and mass protests forced federal legislation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: de facto segregation, economic inequality and continued discrimination show legal success did not end racial injustice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing legislative achievement against the persistence of inequality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Major legal success but inequality persisted",
          },
        },
        {
          id: "cieihis-u2-cr-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is segregation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A Supreme Court ruling",
              },
              {
                id: "b",
                text: "A type of voting system",
              },
              {
                id: "c",
                text: "Racial separation enforced by law in public facilities",
              },
              {
                id: "d",
                text: "A form of protest",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Segregation",
                statement: "Racial separation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Segregation was the enforced racial separation of facilities, enforced by Jim Crow laws in the American South.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Racial separation enforced by law in public facilities",
          },
        },
        {
          id: "cieihis-u2-cr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the Civil Rights Movement succeeded in achieving major legal change in the USA.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Movement success",
                statement: "Causes of victory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-violent tactics — boycotts, marches, sit-ins — won public sympathy and exposed the injustice of segregation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Legal strategy through cases like Brown v Board and organisations such as the NAACP undermined segregation in the courts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Federal government support and media coverage turned civil rights into a national moral issue, producing the 1964 and 1965 Acts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Non-violent tactics + legal strategy + federal support",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-cr-notes",
      title: "Civil Rights — notes",
      summary:
        "Jim Crow segregation→non-violent protests→1964/1965 Acts. MLK vs Malcolm X strategies.",
      sections: [
        {
          heading: "Key idea",
          body: "Non-violent resistance + legal strategy achieved major civil rights victories.",
        },
        {
          heading: "Key events",
          body: "Brown 1954, Montgomery 1955, March on Washington 1963, Acts 1964/1965.",
        },
      ],
    },
  ],
};
