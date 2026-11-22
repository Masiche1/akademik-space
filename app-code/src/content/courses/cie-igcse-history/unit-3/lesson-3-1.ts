import type { Lesson } from "../../../types.ts";

export const lesson351: Lesson = {
  id: "cieihis-u3-lesson-3-1",
  code: "3-1",
  title: "Apartheid in South Africa",
  goal: "I CAN explain apartheid system and resistance movements.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Apartheid"],

  vocabulary: [
    {
      term: "Apartheid",
      definition: "System of racial segregation in South Africa 1948-1994.",
    },
    {
      term: "ANC",
      definition: "African National Congress — liberation movement.",
    },
    {
      term: "Nelson Mandela",
      definition: "Anti-apartheid leader, first black president.",
    },
    {
      term: "Sharpeville Massacre",
      definition: "1960 killing of peaceful protesters.",
    },
    {
      term: "Bantu Education Act",
      definition: "1953 law enforcing segregated education.",
    },
    {
      term: "Truth and Reconciliation Commission",
      definition: "Post-apartheid justice body.",
    },
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
          problem:
            "How did international pressure contribute to ending apartheid?",
          solution:
            "Sanctions, divestment, cultural boycotts isolated South Africa economically and politically.",
        },
      },
      questions: [
        {
          id: "cieihis-u3-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was apartheid?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "System of racial segregation in South Africa 1948-1994",
              },
              {
                id: "b",
                text: "A trade agreement",
              },
              {
                id: "c",
                text: "A type of government",
              },
              {
                id: "d",
                text: "A peace treaty",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Apartheid",
                statement: "Racial segregation.",
              },
            ],
            steps: [
              {
                reasoning: "Apartheid = racial segregation system.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Racial segregation system",
          },
        },
        {
          id: "cieihis-u3-ap-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who was Nelson Mandela?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mandela",
                statement: "Anti-apartheid leader.",
              },
            ],
            steps: [
              {
                reasoning: "Anti-apartheid leader, first black president.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Imprisoned 27 years, released 1990.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Anti-apartheid leader",
          },
        },
        {
          id: "cieihis-u3-ap-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was the Sharpeville Massacre?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sharpeville",
                statement: "1960 protest killing.",
              },
            ],
            steps: [
              {
                reasoning: "1960 killing of peaceful protesters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Led to ANC turning to armed struggle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "International condemnation increased.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1960 protest killing",
          },
        },
        {
          id: "cieihis-u3-ap-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define apartheid, ANC, Nelson Mandela, Sharpeville Massacre, Bantu Education Act, Truth and Reconciliation Commission. (b) What was apartheid? (c) Who was Mandela? (d) What was Sharpeville? (e) When did apartheid end? (f) What was ANC? (g) How did international pressure help? (h) Evaluate success of anti-apartheid movement.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Apartheid",
                statement: "System, resistance.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Racial segregation system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Anti-apartheid leader.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) 1960 protest killing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) 1994.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Liberation movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Sanctions, divestment, boycotts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced evaluation — ended but inequality remains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Apartheid system and resistance.",
          },
        },
        {
          id: "cieihis-u3-ap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which political party introduced the apartheid system in South Africa in 1948?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The National Party",
              },
              {
                id: "b",
                text: "The United Party",
              },
              {
                id: "c",
                text: "The African National Congress",
              },
              {
                id: "d",
                text: "The Democratic Alliance",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "National Party",
                statement: "Apartheid introducer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The National Party introduced apartheid after winning the 1948 election.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** The National Party",
          },
        },
        {
          id: "cieihis-u3-ap-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year were the first democratic elections held in South Africa?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1994,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "1994 elections",
                statement: "First democratic vote.",
              },
            ],
            steps: [
              {
                reasoning:
                  "South Africa held its first democratic elections in 1994, won by the ANC with Nelson Mandela as president.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1994",
          },
        },
        {
          id: "cieihis-u3-ap-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What were the pass laws under apartheid?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pass laws",
                statement: "Movement control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Laws requiring Black South Africans to carry pass documents to travel or work outside designated areas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They controlled the movement of Black people and enforced labour and residential segregation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Pass documents controlling Black movement",
          },
        },
        {
          id: "cieihis-u3-ap-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did the Group Areas Act do under apartheid?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It created voting districts for Black South Africans",
              },
              {
                id: "b",
                text: "It banned all political parties except the ANC",
              },
              {
                id: "c",
                text: "It forced different racial groups to live in separate residential areas",
              },
              {
                id: "d",
                text: "It nationalised South African industries",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Group Areas Act",
                statement: "Residential segregation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Group Areas Act forcibly separated racial groups into designated residential areas.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** It forced different racial groups to live in separate residential areas",
          },
        },
        {
          id: "cieihis-u3-ap-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year was apartheid introduced in South Africa? (b) In which year was Nelson Mandela released from prison?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1948,
              },
              {
                label: "b",
                answer: 1990,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Apartheid dates",
                statement: "1948-90.",
              },
            ],
            steps: [
              {
                reasoning: "Apartheid was introduced in 1948.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Nelson Mandela was released from prison in 1990.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1948, b) 1990",
          },
        },
        {
          id: "cieihis-u3-ap-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the ANC?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The African National Congress, the main liberation movement",
              },
              {
                id: "b",
                text: "A UN peacekeeping force",
              },
              {
                id: "c",
                text: "A South African trade union federation",
              },
              {
                id: "d",
                text: "The South African ruling party under apartheid",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ANC",
                statement: "Liberation movement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The African National Congress (ANC) led the liberation struggle against apartheid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** The African National Congress, the main liberation movement",
          },
        },
        {
          id: "cieihis-u3-ap-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways in which international pressure helped to end apartheid.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "International pressure",
                statement: "Anti-apartheid campaign.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Economic sanctions and trade embargoes by foreign governments and the UN isolated South Africa economically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divestment and cultural boycotts — in sport, music and academia — damaged South Africa's international standing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "International isolation made continued white-minority rule unsustainable, pressuring the regime to negotiate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sanctions + boycotts + isolation",
          },
        },
        {
          id: "cieihis-u3-ap-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains why apartheid collapsed in the early 1990s?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A foreign military invasion forced change",
              },
              {
                id: "b",
                text: "The United Nations imposed direct rule over South Africa",
              },
              {
                id: "c",
                text: "Internal resistance, international sanctions and economic strain made the system unsustainable",
              },
              {
                id: "d",
                text: "The National Party voluntarily chose to end segregation",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Apartheid collapse",
                statement: "Multiple pressures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apartheid collapsed under combined pressure of internal resistance, international sanctions and economic decline.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** Internal resistance, international sanctions and economic strain made the system unsustainable",
          },
        },
        {
          id: "cieihis-u3-ap-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year was the Sharpeville Massacre? (b) In which year was the Bantu Education Act passed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1960,
              },
              {
                label: "b",
                answer: 1953,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Apartheid dates",
                statement: "1953-60.",
              },
            ],
            steps: [
              {
                reasoning: "The Sharpeville Massacre occurred in 1960.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The Bantu Education Act was passed in 1953.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1960, b) 1953",
          },
        },
        {
          id: "cieihis-u3-ap-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the role of Nelson Mandela in the ending of apartheid.",
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
                  "Thesis: Mandela was the iconic leader of the anti-apartheid struggle — imprisoned for 27 years and released in 1990 to negotiate the transition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: his leadership of the ANC, international campaigns for his release and his role in the 1994 election victory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: apartheid's collapse also depended on mass resistance, international sanctions, economic strain and De Klerk's reforms — Mandela was a symbol as much as a sole cause.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing Mandela's unique symbolic and negotiating role against wider structural pressures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mandela was pivotal but collapse had many causes",
          },
        },
        {
          id: "cieihis-u3-ap-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Truth and Reconciliation Commission?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A United Nations agency monitoring South Africa",
              },
              {
                id: "b",
                text: "A commission that drafted South Africa's constitution",
              },
              {
                id: "c",
                text: "A court that punished all apartheid-era officials",
              },
              {
                id: "d",
                text: "A post-apartheid body that investigated human rights abuses and promoted reconciliation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TRC",
                statement: "Post-apartheid justice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Truth and Reconciliation Commission investigated apartheid-era abuses and promoted national reconciliation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(d)** A post-apartheid body that investigated human rights abuses and promoted reconciliation",
          },
        },
        {
          id: "cieihis-u3-ap-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how apartheid affected the daily lives of Black South Africans.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Apartheid impact",
                statement: "Daily life effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pass laws, Group Areas and segregation restricted where Black people could live, work and travel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bantu Education provided inferior schooling, limiting opportunities and entrenching inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Segregated public facilities, political exclusion and police repression shaped everyday experience and humiliation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Restricted movement, inferior education, segregation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u3-ap-notes",
      title: "Apartheid — notes",
      summary:
        "1948-1994 racial segregation. ANC resistance, Mandela leadership, international sanctions → 1994 democracy.",
      sections: [
        {
          heading: "Key idea",
          body: "Apartheid enforced racial hierarchy through legal discrimination.",
        },
        {
          heading: "End",
          body: "Mandela released 1990, first democratic elections 1994.",
        },
      ],
    },
  ],
};
