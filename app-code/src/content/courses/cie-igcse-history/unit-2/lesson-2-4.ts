import type { Lesson } from "../../../types.ts";

export const lesson344: Lesson = {
  id: "cieihis-u2-lesson-2-4",
  code: "2-4",
  title: "Decolonisation and Independence Movements",
  goal: "I CAN explain decolonisation and independence movements in Africa and Asia.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: decolonisation"],

  vocabulary: [
    {
      term: "Decolonisation",
      definition: "Process of colonies gaining independence.",
    },
    { term: "Nationalism", definition: "Desire for self-determination." },
    { term: "Colonialism", definition: "Control of one country by another." },
    {
      term: "Imperialism",
      definition: "Extending power through colonisation.",
    },
    {
      term: "Neocolonialism",
      definition: "Economic control after political independence.",
    },
    {
      term: "Bandung Conference",
      definition: "1955 meeting of Asian/African nations.",
    },
  ],
  concepts: [
    {
      id: "cieihis-u2-s4-decol",
      title: "Decolonisation",
      skill: "Understand independence movements.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "WWII weakened European powers. Nationalist movements gained strength. Cold War pressure. UN support for self-determination. Economic exploitation resentment.",
          },
          {
            heading: "Key examples",
            body: "India 1947 (Gandhi's non-violence), Ghana 1957 (Nkrumah), Algeria 1962 (war of independence), Vietnam 1954/1975. Most African countries independent by 1960s-70s.",
          },
          {
            heading: "Challenges",
            body: "Neocolonialism — economic dependence continues. Artificial borders create ethnic conflicts. Poverty, corruption, lack of infrastructure.",
          },
        ],
        keyFormulas: [
          { name: "Decolonisation", statement: "independence process" },
          { name: "India", statement: "1947 independence" },
          { name: "Ghana", statement: "1957 first sub-Saharan" },
        ],
        workedExample: {
          problem: "Why did decolonisation accelerate after WWII?",
          solution:
            "European powers weakened + nationalist movements strengthened + Cold War pressure + UN support.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is decolonisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A trade agreement",
              },
              {
                id: "b",
                text: "A type of war",
              },
              {
                id: "c",
                text: "Process of colonies gaining independence",
              },
              {
                id: "d",
                text: "A natural disaster",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decolonisation",
                statement: "Independence process.",
              },
            ],
            steps: [
              {
                reasoning: "Decolonisation = colonies gaining independence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Independence process",
          },
        },
        {
          id: "cieihis-u2-dc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is neocolonialism?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neocolonialism",
                statement: "Economic control.",
              },
            ],
            steps: [
              {
                reasoning: "Economic control after political independence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Former colonies dependent on former rulers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Economic control after independence",
          },
        },
        {
          id: "cieihis-u2-dc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What caused decolonisation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decolonisation causes",
                statement: "Independence drivers.",
              },
            ],
            steps: [
              {
                reasoning: "WWII weakened European powers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nationalist movements strengthened.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cold War + UN support.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "WWII weakness + nationalism",
          },
        },
        {
          id: "cieihis-u2-dc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define decolonisation, nationalism, colonialism, imperialism, neocolonialism, Bandung Conference. (b) What is decolonisation? (c) What is neocolonialism? (d) What caused decolonisation? (e) When did India gain independence? (f) When did Ghana gain independence? (g) What challenges do post-colonial states face? (h) Evaluate whether decolonisation was successful.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Decolonisation",
                statement: "Causes, examples.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Independence process.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Economic control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) WWII weakness + nationalism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) 1947.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) 1957.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Neocolonialism, borders, poverty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Decolonisation and independence.",
          },
        },
        {
          id: "cieihis-u2-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who led India's independence movement using non-violent resistance?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Gandhi",
              },
              {
                id: "b",
                text: "Nkrumah",
              },
              {
                id: "c",
                text: "Mandela",
              },
              {
                id: "d",
                text: "Ho Chi Minh",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gandhi",
                statement: "Non-violence leader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mahatma Gandhi led India's independence struggle through non-violent resistance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Gandhi",
          },
        },
        {
          id: "cieihis-u2-dc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did India gain independence from Britain?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1947,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Indian independence",
                statement: "1947.",
              },
            ],
            steps: [
              {
                reasoning:
                  "India gained independence in 1947, largely through Gandhi's non-violent movement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1947",
          },
        },
        {
          id: "cieihis-u2-dc-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Bandung Conference of 1955?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bandung Conference",
                statement: "1955 Asian-African meeting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A meeting of Asian and African nations held in Bandung, Indonesia in 1955.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It promoted solidarity among newly independent and anti-colonial states.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1955 Asian-African solidarity conference",
          },
        },
        {
          id: "cieihis-u2-dc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which was the first sub-Saharan African colony to gain independence?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Kenya",
              },
              {
                id: "b",
                text: "Algeria",
              },
              {
                id: "c",
                text: "Ghana",
              },
              {
                id: "d",
                text: "Nigeria",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Ghana 1957",
                statement: "First sub-Saharan independence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ghana became the first sub-Saharan African country to gain independence in 1957 under Nkrumah.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Ghana",
          },
        },
        {
          id: "cieihis-u2-dc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did Ghana gain independence? (b) In which year did Algeria gain independence after a war of independence?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1957,
              },
              {
                label: "b",
                answer: 1962,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Decolonisation dates",
                statement: "1957-62.",
              },
            ],
            steps: [
              {
                reasoning: "Ghana gained independence in 1957.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Algeria gained independence from France in 1962 after a war of independence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1957, b) 1962",
          },
        },
        {
          id: "cieihis-u2-dc-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is nationalism in the context of decolonisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The belief that colonies should remain under European rule",
              },
              {
                id: "b",
                text: "A European policy of dividing colonies",
              },
              {
                id: "c",
                text: "A type of international trade agreement",
              },
              {
                id: "d",
                text: "The desire of colonised peoples for self-determination",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nationalism",
                statement: "Self-determination desire.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nationalism was the desire of colonised peoples for self-determination and independence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** The desire of colonised peoples for self-determination",
          },
        },
        {
          id: "cieihis-u2-dc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two challenges faced by post-colonial states after independence.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Post-colonial challenges",
                statement: "Independence problems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Neocolonialism — continued economic dependence on former colonial powers through trade and investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Artificial colonial borders created ethnic conflicts and unstable new states.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poverty, corruption and lack of infrastructure hampered development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Neocolonialism + borders + poverty",
          },
        },
        {
          id: "cieihis-u2-dc-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains why decolonisation accelerated after the Second World War?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "WWII weakened European powers while nationalist movements and international pressure strengthened",
              },
              {
                id: "b",
                text: "The United Nations banned all forms of colonialism overnight",
              },
              {
                id: "c",
                text: "European colonial powers grew stronger and more able to hold their empires",
              },
              {
                id: "d",
                text: "Colonial economies collapsed because trade with Europe stopped completely",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decolonisation causes",
                statement: "WWII weakness + nationalism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "WWII weakened European powers, while nationalist movements strengthened and the UN and Cold War dynamics favoured independence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** WWII weakened European powers while nationalist movements and international pressure strengthened",
          },
        },
        {
          id: "cieihis-u2-dc-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year was the Bandung Conference held? (b) In which year — the 'Year of Africa' — did seventeen African nations gain independence?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1955,
              },
              {
                label: "b",
                answer: 1960,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Decolonisation milestones",
                statement: "1955-60.",
              },
            ],
            steps: [
              {
                reasoning: "The Bandung Conference was held in 1955.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "1960, the 'Year of Africa', saw seventeen African nations gain independence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1955, b) 1960",
          },
        },
        {
          id: "cieihis-u2-dc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess whether decolonisation was a success for former colonies.",
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
                  "Thesis: decolonisation achieved political independence but often failed to deliver economic self-determination.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: independence movements succeeded — India 1947, Ghana 1957, most of Africa by the 1960s-70s — ending formal colonial rule.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: neocolonialism, artificial borders, poverty and weak institutions meant many states remained economically dependent and unstable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing political success against economic and social limitations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Political success but economic and social challenges remained",
          },
        },
        {
          id: "cieihis-u2-dc-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is neocolonialism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A form of military rule by former colonial powers",
              },
              {
                id: "b",
                text: "A treaty guaranteeing colonial borders",
              },
              {
                id: "c",
                text: "Economic control of former colonies after political independence",
              },
              {
                id: "d",
                text: "The re-imposition of direct colonial administration",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neocolonialism",
                statement: "Economic control after independence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Neocolonialism is continued economic control of former colonies through trade, investment and aid after political independence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Economic control of former colonies after political independence",
          },
        },
        {
          id: "cieihis-u2-dc-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how artificial colonial borders created problems after independence.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Colonial borders",
                statement: "Post-independence conflicts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "European powers drew borders for their own convenience, often dividing ethnic groups or combining rivals within single states.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Newly independent states inherited borders that did not reflect local realities, causing disputes and civil conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Border disputes remain a source of instability and interstate conflict in Africa and Asia.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Artificial borders fuelled ethnic conflict and instability",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-dc-notes",
      title: "Decolonisation — notes",
      summary:
        "WWII weakened Europe + nationalism → independence wave. Challenges: neocolonialism, borders, poverty.",
      sections: [
        {
          heading: "Key idea",
          body: "Political independence achieved but economic dependence often continued.",
        },
        {
          heading: "Examples",
          body: "India 1947, Ghana 1957, Algeria 1962, most Africa by 1960s-70s.",
        },
      ],
    },
  ],
};
