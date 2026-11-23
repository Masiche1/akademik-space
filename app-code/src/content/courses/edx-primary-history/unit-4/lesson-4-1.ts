import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edxph-u4-lesson-4-1",
  code: "4-1",
  title: "Significant People",
  goal: "I CAN describe the achievements of significant historical figures.",
  standards: ["Y5-Y6 History", "Significant people"],
  vocabulary: [
    {
      term: "Explorer",
      definition: "Someone who travels to discover new places.",
    },
    { term: "Inventor", definition: "Someone who creates new things." },
    {
      term: "Leader",
      definition: "Someone who guides or rules a group or country.",
    },
    {
      term: "Achievement",
      definition: "Something important someone has done.",
    },
  ],
  concepts: [
    {
      id: "edxph-u4-explorers",
      title: "Explorers and Discoveries",
      skill: "Describe famous explorers and their achievements.",
      lesson: {
        sections: [
          {
            heading: "Age of Exploration",
            body: "From the 1400s, European explorers travelled the world: Christopher Columbus (1492 — reached the Americas, though he thought it was Asia), Vasco da Gama (1498 — first European to reach India by sea), Ferdinand Magellan (first to sail around the world — expedition completed 1522 after his death), and James Cook (explored Australia and Pacific, 1768-1779).",
          },
          {
            heading: "Impact of exploration",
            body: "Exploration connected continents — trade, colonisation, exchange of plants/animals/ideas (Columbian Exchange). But it also brought disease to indigenous peoples, slavery, and exploitation. Exploration changed the world permanently — for better and worse.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Who first sailed around the world?",
          solution: "Magellan's expedition (1522) — Magellan died en route.",
        },
      },
      questions: [
        {
          id: "edxph-u4-exp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who reached the Americas in 1492?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vasco da Gama" },
              { id: "b", text: "Christopher Columbus" },
              { id: "c", text: "James Cook" },
              { id: "d", text: "Magellan" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Columbus",
                statement: "1492, Americas.",
              },
            ],
            steps: [{ reasoning: "Columbus = 1492.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Columbus",
            commonErrors: ["Wrong explorer."],
          },
        },
        {
          id: "edxph-u4-exp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Whose expedition first sailed around the world?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Columbus" },
              { id: "b", text: "Magellan's expedition" },
              { id: "c", text: "Cook" },
              { id: "d", text: "da Gama" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circumnavigation",
                statement: "Magellan's expedition.",
              },
            ],
            steps: [
              {
                reasoning: "Magellan expedition = first.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Magellan's",
            commonErrors: ["Wrong person."],
          },
        },
        {
          id: "edxph-u4-exp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two explorers and what each achieved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Explorers",
                statement: "Columbus, da Gama, Cook, Magellan.",
              },
            ],
            steps: [
              {
                reasoning: "Explorer 1 + achievement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explorer 2 + achievement.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. Columbus+Cook",
            commonErrors: ["No achievements."],
          },
        },
        {
          id: "edxph-u4-exp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two positive and two negative effects of the Age of Exploration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exploration effects",
                statement: "Connection vs exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "Positive — global trade, exchange of ideas/goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative — disease, slavery, exploitation of indigenous peoples.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Balanced evaluation.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Trade+exchange vs disease+slavery",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "edxph-u4-inventors",
      title: "Inventors and Scientists",
      skill: "Describe key inventors and scientific discoveries.",
      lesson: {
        sections: [
          {
            heading: "Great inventors",
            body: "Isaac Newton (gravity, laws of motion), Charles Darwin (evolution by natural selection), Alexander Fleming (penicillin), Tim Berners-Lee (World Wide Web), and the Wright brothers (aeroplane). Each transformed their field — Newton's physics, Darwin's biology, Fleming's medicine, Berners-Lee's communication, Wrights' transport.",
          },
          {
            heading: "Scientific method",
            body: "Scientists use observation, experimentation, evidence and peer review to discover how the world works. Key discoveries: heliocentric model (Earth orbits Sun — Copernicus/Galileo), germ theory (Pasteur/Lister — disease caused by microbes), evolution (Darwin), and relativity (Einstein). Science builds on previous knowledge.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What did Alexander Fleming discover?",
          solution: "Penicillin — the first antibiotic.",
        },
      },
      questions: [
        {
          id: "edxph-u4-inv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who invented the World Wide Web?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bill Gates" },
              { id: "b", text: "Tim Berners-Lee" },
              { id: "c", text: "Steve Jobs" },
              { id: "d", text: "Alan Turing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "WWW", statement: "Berners-Lee." },
            ],
            steps: [
              { reasoning: "Berners-Lee = WWW.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Berners-Lee",
            commonErrors: ["Wrong person."],
          },
        },
        {
          id: "edxph-u4-inv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What did Charles Darwin propose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relativity" },
              { id: "b", text: "Evolution by natural selection" },
              { id: "c", text: "Germ theory" },
              { id: "d", text: "Gravity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Darwin", statement: "Evolution." },
            ],
            steps: [
              { reasoning: "Darwin = evolution.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Evolution",
            commonErrors: ["Wrong theory."],
          },
        },
        {
          id: "edxph-u4-inv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two scientists/inventors and their contributions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scientists",
                statement: "Newton, Darwin, Fleming, Wrights.",
              },
            ],
            steps: [
              {
                reasoning: "Person 1 + contribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Person 2 + contribution.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. Newton+Darwin",
            commonErrors: ["No contributions."],
          },
        },
        {
          id: "edxph-u4-inv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why scientific discoveries often build on previous work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scientific progress",
                statement: "Cumulative knowledge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Scientists use earlier discoveries as starting points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New tools/techniques enable new questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — Darwin built on geology; Einstein built on Newton.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Cumulative knowledge+examples",
            commonErrors: ["Isolated discovery view."],
          },
        },
      ],
    },
    {
      id: "edxph-u4-leaders",
      title: "Leaders and Movements",
      skill: "Describe important leaders and social movements.",
      lesson: {
        sections: [
          {
            heading: "Political leaders",
            body: "Nelson Mandela (ended apartheid in South Africa, became president), Martin Luther King Jr. (civil rights movement in USA), Mahatma Gandhi (led India's independence through non-violence), Winston Churchill (British PM in WWII). Each led movements for justice or survival.",
          },
          {
            heading: "Social movements",
            body: "Movements changed society: women's suffrage (right to vote — UK women got vote 1918/1928), civil rights (end to racial discrimination), abolition of slavery, and workers' rights (unions, shorter hours). These movements used protest, campaigns, law changes and sometimes sacrifice to achieve change.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Who led India's independence movement?",
          solution: "Mahatma Gandhi — non-violent resistance.",
        },
      },
      questions: [
        {
          id: "edxph-u4-lead-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who ended apartheid in South Africa?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mandela" },
              { id: "b", text: "Gandhi" },
              { id: "c", text: "King" },
              { id: "d", text: "Churchill" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Apartheid",
                statement: "Mandela ended it.",
              },
            ],
            steps: [
              { reasoning: "Mandela = apartheid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mandela",
            commonErrors: ["Wrong person."],
          },
        },
        {
          id: "edxph-u4-lead-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the women's suffrage movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A war" },
              { id: "b", text: "Campaign for women's right to vote" },
              { id: "c", text: "A political party" },
              { id: "d", text: "A type of clothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Suffrage",
                statement: "Right to vote.",
              },
            ],
            steps: [{ reasoning: "Suffrage = vote.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Right to vote",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxph-u4-lead-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two leaders and the causes they fought for.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leaders",
                statement: "Mandela, Gandhi, MLK.",
              },
            ],
            steps: [
              { reasoning: "Leader 1 + cause.", marks: 1, markCode: "M" },
              { reasoning: "Leader 2 + cause.", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. Mandela+Gandhi",
            commonErrors: ["No causes."],
          },
        },
        {
          id: "edxph-u4-lead-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how social movements achieve change. Use one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social change",
                statement: "Protest+law+awareness.",
              },
            ],
            steps: [
              {
                reasoning: "Methods — protest, campaigns, legal challenges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example — suffragettes campaigned for vote.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result — law changed (1918/1928).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Methods+example+result",
            commonErrors: ["No example."],
          },
        },
      ],
    },
    {
      id: "edxph-u4-events",
      title: "Significant Events",
      skill: "Describe major events of the 20th century.",
      lesson: {
        sections: [
          {
            heading: "World War I and II",
            body: "WWI (1914-1918) was fought between European powers — over 16 million died, empires collapsed. WWII (1939-1945) was the deadliest conflict — 70-85 million died, including the Holocaust (systematic murder of 6 million Jews). Both wars reshaped the world — led to the UN, nuclear weapons, and the Cold War.",
          },
          {
            heading: "20th century milestones",
            body: "Other key events: moon landing (1969), invention of the internet (1980s-90s), fall of the Berlin Wall (1989), end of Cold War (1991), 9/11 attacks (2001), COVID-19 pandemic (2020-). Each changed the world — technology, politics, society.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "When was the moon landing?",
          solution: "1969 — Apollo 11.",
        },
      },
      questions: [
        {
          id: "edxph-u4-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did World War II end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1918" },
              { id: "b", text: "1945" },
              { id: "c", text: "1939" },
              { id: "d", text: "1950" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "WWII", statement: "1939-1945." },
            ],
            steps: [{ reasoning: "1945 = end.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 1945",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "edxph-u4-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Holocaust?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A battle" },
              { id: "b", text: "Systematic murder of 6 million Jews" },
              { id: "c", text: "A treaty" },
              { id: "d", text: "A type of weapon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Holocaust",
                statement: "Genocide of Jews.",
              },
            ],
            steps: [
              { reasoning: "Holocaust = genocide.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Genocide",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u4-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two major events of the 20th century and their years.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "20th century",
                statement: "WWI, WWII, moon landing.",
              },
            ],
            steps: [
              {
                reasoning: "Event 1 + year, e.g. WWI 1914-18.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Event 2 + year, e.g. moon landing 1969.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. WWI+moon landing",
            commonErrors: ["Wrong years."],
          },
        },
        {
          id: "edxph-u4-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how World War II changed the world. Give two effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WWII effects",
                statement: "Global reshaping.",
              },
            ],
            steps: [
              {
                reasoning: "Effect 1 — UN created, colonialism declined.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Effect 2 — nuclear weapons, Cold War, superpowers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Massive loss of life changed societies.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "UN+nuclear+decolonisation",
            commonErrors: ["Only military view."],
          },
        },
      ],
    },
  ],
};
