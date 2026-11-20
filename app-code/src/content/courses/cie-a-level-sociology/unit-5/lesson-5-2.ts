import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "asoc-u5-lesson-5-2",
  code: "5-2",
  title: "Globalisation: Poverty, Migration and Crime",
  goal: "I CAN explain contemporary issues of globalisation: inequality, migration and global crime.",
  standards: ["9699 P4: Contemporary issues"],
  vocabulary: [
    {
      term: "Global inequality",
      definition: "Uneven wealth and development between countries.",
    },
    {
      term: "Core-periphery",
      definition: "Model of rich centre countries exploiting poorer periphery.",
    },
    {
      term: "Economic migration",
      definition: "Moving countries for work/better opportunities.",
    },
    {
      term: "Forced migration",
      definition: "Fleeing war, persecution or disaster.",
    },
    {
      term: "Global crime",
      definition: "Criminal activities spanning national borders.",
    },
    {
      term: "Human trafficking",
      definition: "Illegal trade of people for exploitation.",
    },
  ],
  concepts: [
    {
      id: "asoc-u5-poverty-migration",
      title: "Globalisation, poverty and migration",
      skill: "Explain globalisation's effects on poverty and migration.",
      lesson: {
        sections: [
          {
            heading: "Global inequality",
            body: "Wealth concentrated in core countries (North/West); periphery countries poorer. Dependency theory: core exploits periphery through trade/corporations. Globalisation can widen OR narrow gaps — evidence mixed. Some 'emerging' economies benefit.",
          },
          {
            heading: "Migration",
            body: "Economic migrants seek work/better lives. Forced migrants flee war/persecution (refugees). Globalisation enables movement via transport/communication but also creates barriers. Migration reshapes identities and economies in both origin and destination countries.",
          },
          {
            heading: "Effects",
            body: "Remittances support families in origin countries. Brain drain vs brain gain debates. Host countries gain workers but face integration challenges. Migration is both cause and consequence of globalisation.",
          },
        ],
        keyFormulas: [
          {
            name: "Poverty/migration",
            statement:
              "Inequality: core-periphery; Migration: economic+forced; effects mixed.",
          },
        ],
        workedExample: {
          problem: "How does globalisation relate to migration?",
          solution:
            "Globalisation enables movement (transport/info) and creates pressures (jobs, conflict) driving both economic and forced migration.",
        },
      },
      questions: [
        {
          id: "asoc-u5-pm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the core-periphery model?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Rich centre countries exploiting poorer periphery",
              },
              { id: "b", text: "Geographic map of continents" },
              { id: "c", text: "Migration routes" },
              { id: "d", text: "Trade agreements only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Core-periphery",
                statement: "Rich core exploits poor periphery.",
              },
            ],
            steps: [
              {
                reasoning: "Core-periphery = inequality model.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Rich centre countries exploiting poorer periphery",
            commonErrors: ["Thinking it's geographic only."],
          },
        },
        {
          id: "asoc-u5-pm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish economic from forced migration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Migration types",
                statement: "Economic=choice for work; Forced=fleeing danger.",
              },
            ],
            steps: [
              {
                reasoning: "Economic: seeking opportunities.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Forced: war/persecution/disaster.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Economic=moves for work; forced=flees war/persecution.",
            commonErrors: ["Using interchangeably."],
          },
        },
        {
          id: "asoc-u5-pm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that globalisation increases global inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global inequality",
                statement: "Widening vs narrowing gaps.",
              },
            ],
            steps: [
              {
                reasoning: "Core-periphery exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Some economies benefit.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Evidence mixed.", marks: 1, markCode: "AO2" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Globalisation has mixed effects — widens gaps for some, enables growth for others.",
            commonErrors: ["One-sided claim."],
          },
        },
        {
          id: "asoc-u5-pm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Poverty and migration.",
          parts: [
            { label: "a", prompt: "Global inequality?", marks: 2 },
            { label: "b", prompt: "Core-periphery?", marks: 2 },
            { label: "c", prompt: "Migration types?", marks: 2 },
            { label: "d", prompt: "Migration effects?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty/migration",
                statement: "Inequality+migration+effects.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Uneven wealth.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Between countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Core exploits periphery.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Dependency view.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Economic vs forced.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Remittances/brain drain.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Host benefits/challenges.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Balanced view.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) inequality (b) core-periphery (c) types (d) effects",
          },
        },
      ],
    },
    {
      id: "asoc-u5-crime",
      title: "Global Crime",
      skill:
        "Explain types of global crime and challenges of detection and punishment.",
      lesson: {
        sections: [
          {
            heading: "Types of global crime",
            body: "Human trafficking, drug trafficking, cybercrime, terrorism, money laundering, corporate/environmental crimes, arms dealing. Span borders, involve organised networks, exploit legal differences between countries.",
          },
          {
            heading: "Detection and punishment challenges",
            body: "Jurisdiction problems — which country prosecutes? Corruption and weak institutions in some states. Sophisticated technology enables crime. Global coordination needed but difficult — different laws, priorities, capacities.",
          },
          {
            heading: "Responses",
            body: "International organisations (Interpol, UN) coordinate. Extraterritorial laws allow prosecution abroad. Financial tracking (anti-money laundering). Technology both enables and fights crime.",
          },
        ],
        keyFormulas: [
          {
            name: "Global crime",
            statement:
              "Trafficking/cyber/terrorism; jurisdiction problems; coordination needed.",
          },
        ],
        workedExample: {
          problem: "Why is global crime hard to punish?",
          solution:
            "Criminals exploit border/legal differences; prosecution requires international coordination across jurisdictions.",
        },
      },
      questions: [
        {
          id: "asoc-u5-gc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of global crime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Human trafficking" },
              { id: "b", text: "Local theft" },
              { id: "c", text: "Parking violation" },
              { id: "d", text: "School bullying" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global crime",
                statement: "Crosses borders.",
              },
            ],
            steps: [
              {
                reasoning: "Trafficking = global crime.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Human trafficking",
            commonErrors: ["Picking local crime."],
          },
        },
        {
          id: "asoc-u5-gc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What makes global crime difficult to punish?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crime challenges",
                statement: "Jurisdiction+coordination+technology.",
              },
            ],
            steps: [
              {
                reasoning: "Which country prosecutes?",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Need international coordination.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Jurisdiction problems and need for international coordination.",
            commonErrors: ["Only saying it's hard."],
          },
        },
        {
          id: "asoc-u5-gc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate responses to global crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global crime responses",
                statement: "Coordination vs limitations.",
              },
            ],
            steps: [
              {
                reasoning: "Interpol/UN coordinate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Extraterritorial laws help.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weak states/corruption limit.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Responses exist but limited by jurisdiction, corruption and capacity differences.",
            commonErrors: ["Description only."],
          },
        },
        {
          id: "asoc-u5-gc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Global crime.",
          parts: [
            { label: "a", prompt: "Define global crime.", marks: 1 },
            { label: "b", prompt: "Three types?", marks: 3 },
            {
              label: "c",
              prompt: "Detection/punishment challenges?",
              marks: 3,
            },
            { label: "d", prompt: "Responses?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global crime",
                statement: "Definition+types+challenges+responses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Crosses borders.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any three types.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Jurisdiction issues.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Coordination needed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Technology/corruption.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Interpol/extraterritorial.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Financial tracking.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) definition (b) types (c) challenges (d) responses",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u5-5-2-notes",
      title: "Contemporary globalisation issues — notes",
      summary: "Inequality, migration, global crime.",
      sections: [
        {
          heading: "Inequality/migration",
          body: "Core-periphery model; economic vs forced migration; remittances, brain drain, host challenges.",
        },
        {
          heading: "Global crime",
          body: "Trafficking/cyber/terrorism; jurisdiction problems; Interpol/UN/extraterritorial responses.",
        },
      ],
    },
  ],
};
