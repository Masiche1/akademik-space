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
              { id: "a", text: "Trade agreements only" },
              {
                id: "b",
                text: "Rich centre countries exploiting poorer periphery",
              },
              { id: "c", text: "Migration routes" },
              { id: "d", text: "Geographic map of continents" },
            ],
            correctChoiceId: "b",
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
              "**(b)** Rich centre countries exploiting poorer periphery",
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
        {
          id: "asoc-u5-pm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does dependency theory argue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poor countries simply lag behind the West" },
              { id: "b", text: "Poor countries are kept underdeveloped by rich countries" },
              { id: "c", text: "Development depends only on geography" },
              { id: "d", text: "All countries develop at the same rate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependency theory",
                statement: "Rich exploit poor.",
              },
            ],
            steps: [
              {
                reasoning: "Dependency = exploitation, not lag.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Poor countries are kept underdeveloped by rich countries",
            commonErrors: ["Confusing with modernisation."],
          },
        },
        {
          id: "asoc-u5-pm-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of forced migration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Studying overseas for a degree" },
              { id: "b", text: "Moving abroad for a better job" },
              { id: "c", text: "Fleeing a war zone as a refugee" },
              { id: "d", text: "Retiring to a warmer country" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forced migration",
                statement: "Fleeing danger, not choice.",
              },
            ],
            steps: [
              {
                reasoning: "War/persecution = forced.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Fleeing a war zone as a refugee",
            commonErrors: ["Picking a voluntary move."],
          },
        },
        {
          id: "asoc-u5-pm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Remittances refer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Money sent by migrants to family in origin countries" },
              { id: "b", text: "Foreign investment in infrastructure" },
              { id: "c", text: "Government aid to refugees" },
              { id: "d", text: "Wages paid by host-country firms" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Remittances",
                statement: "Money sent home by migrants.",
              },
            ],
            steps: [
              {
                reasoning: "Remittances = migrant transfers home.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Money sent by migrants to family in origin countries",
            commonErrors: ["Confusing with aid or wages."],
          },
        },
        {
          id: "asoc-u5-pm-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The 'brain drain' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decline in agricultural output" },
              { id: "b", text: "Media leaving a country" },
              { id: "c", text: "Skilled workers emigrating from poorer countries" },
              { id: "d", text: "Loss of rainfall in dry regions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brain drain",
                statement: "Loss of skilled workers.",
              },
            ],
            steps: [
              {
                reasoning: "Brain drain = skilled emigration.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Skilled workers emigrating from poorer countries",
            commonErrors: ["Literal interpretation of 'drain'."],
          },
        },
        {
          id: "asoc-u5-pm-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the core-periphery model, which group benefits most?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Migrant workers" },
              { id: "b", text: "Core (rich centre) countries" },
              { id: "c", text: "Peripheral countries" },
              { id: "d", text: "International charities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Core-periphery",
                statement: "Core exploits periphery.",
              },
            ],
            steps: [
              {
                reasoning: "Core benefits at periphery's expense.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Core (rich centre) countries",
            commonErrors: ["Reversing the model."],
          },
        },
        {
          id: "asoc-u5-pm-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 500 migrants surveyed, 40% moved for economic reasons. How many migrants is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "40% of 500 = 0.4 x 500.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 200.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "200",
            commonErrors: ["Using the wrong total."],
          },
        },
        {
          id: "asoc-u5-pm-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Remittances to a country rose from $8 billion to $10 billion. What was the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage increase",
                statement: "Change/original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = 10 - 8 = 2.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "2/8 x 100 = 25%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "25",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u5-pm-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 1,500 people, 30% had a family member working abroad. How many people was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 450 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "30% of 1500 = 0.3 x 1500.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 450.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "450",
            commonErrors: ["Forgetting decimal conversion."],
          },
        },
        {
          id: "asoc-u5-pm-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Country A's GDP per capita is $12,000 and Country B's is $4,000. How many times larger is A's GDP per capita?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio",
                statement: "Larger/smaller.",
              },
            ],
            steps: [
              { reasoning: "12000/4000 = 3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Three times larger.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "3",
            commonErrors: ["Subtracting instead of dividing."],
          },
        },
        {
          id: "asoc-u5-pm-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two effects of migration on origin countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Migration effects",
                statement: "Remittances vs brain drain.",
              },
            ],
            steps: [
              {
                reasoning: "Remittances support families.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Brain drain loses skilled workers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Clear explanation of both.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Remittances benefit families; brain drain deprives origin countries of skilled workers.",
            commonErrors: ["Only covering destination effects."],
          },
        },
        {
          id: "asoc-u5-pm-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that migration always benefits host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Host country effects",
                statement: "Benefits vs challenges.",
              },
            ],
            steps: [
              {
                reasoning: "Hosts gain workers/labour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Integration challenges exist.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "'Always' is too absolute.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Migration benefits hosts through labour supply but creates integration challenges — not always beneficial.",
            commonErrors: ["Accepting 'always' without critique."],
          },
        },
        {
          id: "asoc-u5-pm-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Globalisation, poverty and migration — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Explain what is meant by global inequality.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Distinguish economic from forced migration.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain two effects of migration on origin countries.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Evaluate the impact of migration on host countries.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty/migration",
                statement: "Inequality+types+effects+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Uneven wealth between countries.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Economic=choice for work.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Forced=fleeing danger.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Remittances/brain drain.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear effects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Labour benefits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Integration challenges.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) inequality (b) types (c) origin effects (d) host effects",
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
              { id: "a", text: "Parking violation" },
              { id: "b", text: "Local theft" },
              { id: "c", text: "Human trafficking" },
              { id: "d", text: "School bullying" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Human trafficking",
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
        {
          id: "asoc-u5-gc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT an example of global crime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A local burglary in a single neighbourhood" },
              { id: "b", text: "Drug trafficking networks" },
              { id: "c", text: "Cybercrime operating across borders" },
              { id: "d", text: "Money laundering through offshore accounts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global crime",
                statement: "Crosses national borders.",
              },
            ],
            steps: [
              {
                reasoning: "Local crime does not cross borders.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A local burglary in a single neighbourhood",
            commonErrors: ["Picking a cross-border crime."],
          },
        },
        {
          id: "asoc-u5-gc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Human trafficking is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Smuggling goods across borders" },
              { id: "b", text: "The illegal trade of people for exploitation" },
              { id: "c", text: "Legal migration for work" },
              { id: "d", text: "A form of cybercrime only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human trafficking",
                statement: "Illegal trade of people.",
              },
            ],
            steps: [
              {
                reasoning: "Trafficking = people, not goods.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** The illegal trade of people for exploitation",
            commonErrors: ["Confusing with people smuggling."],
          },
        },
        {
          id: "asoc-u5-gc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main jurisdiction problem in global crime is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How to train officers" },
              { id: "b", text: "How to fund police forces" },
              { id: "c", text: "Which country has the right to prosecute" },
              { id: "d", text: "How to collect evidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Jurisdiction",
                statement: "Which country prosecutes?",
              },
            ],
            steps: [
              {
                reasoning: "Jurisdiction = who prosecutes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Which country has the right to prosecute",
            commonErrors: ["Vague answers about coordination."],
          },
        },
        {
          id: "asoc-u5-gc-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Extraterritorial laws allow countries to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prosecute crimes committed outside their borders" },
              { id: "b", text: "Extradite all foreign nationals" },
              { id: "c", text: "Set global crime policy alone" },
              { id: "d", text: "Ignore foreign laws entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Extraterritoriality",
                statement: "Prosecute abroad.",
              },
            ],
            steps: [
              {
                reasoning: "Extraterritorial = beyond borders.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Prosecute crimes committed outside their borders",
            commonErrors: ["Overstating unilateral power."],
          },
        },
        {
          id: "asoc-u5-gc-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Interpol's main role is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing international trade laws" },
              { id: "b", text: "Trying criminals in one court" },
              { id: "c", text: "Funding national police forces" },
              { id: "d", text: "Coordinating police cooperation across countries" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interpol",
                statement: "International police coordination.",
              },
            ],
            steps: [
              {
                reasoning: "Interpol coordinates, not prosecutes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Coordinating police cooperation across countries",
            commonErrors: ["Thinking it prosecutes directly."],
          },
        },
        {
          id: "asoc-u5-gc-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country reported 2,000 cybercrime cases and convicted 250 offenders. What percentage of cases resulted in conviction?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "250/2000 = 0.125.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "0.125 x 100 = 12.5%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "12.5",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "asoc-u5-gc-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Seizures of illicit goods rose from $300 million to $360 million. What was the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage increase",
                statement: "Change/original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = 360 - 300 = 60.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "60/300 x 100 = 20%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "20",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u5-gc-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 800 security officials, 60% cited jurisdiction problems as the biggest obstacle. How many officials was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 480 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "60% of 800 = 0.6 x 800.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 480.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "480",
            commonErrors: ["Using the wrong base."],
          },
        },
        {
          id: "asoc-u5-gc-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Illicit drug trafficking is estimated to generate $150 billion annually. If 20% of profits are laundered through one region, what is that amount?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of total",
                statement: "20% of 150.",
              },
            ],
            steps: [
              {
                reasoning: "0.2 x 150 = 30.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Amount = $30 billion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Forgetting decimal conversion."],
          },
        },
        {
          id: "asoc-u5-gc-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why cybercrime is difficult to detect and prosecute.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cybercrime",
                statement: "Digital, borderless, anonymous.",
              },
            ],
            steps: [
              {
                reasoning: "Crosses borders instantly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Anonymous/difficult to trace.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Jurisdiction and evidence problems.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Cybercrime is borderless and anonymous, creating detection and jurisdiction difficulties.",
            commonErrors: ["Only mentioning technology."],
          },
        },
        {
          id: "asoc-u5-gc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate international responses to global crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crime responses",
                statement: "Coordination vs limitations.",
              },
            ],
            steps: [
              {
                reasoning: "Interpol/UN coordinate effectively.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Extraterritorial laws extend reach.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weak states/corruption limit success.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Responses exist but are limited by differing laws, corruption and national capacity.",
            commonErrors: ["Description only, no evaluation."],
          },
        },
        {
          id: "asoc-u5-gc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Global crime — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Define global crime and name two types.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the jurisdiction problem.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does technology both enable and fight global crime?",
              marks: 2,
            },
            { label: "d", prompt: "Evaluate responses to global crime.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global crime",
                statement: "Definition+jurisdiction+technology+responses.",
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
                part: "a",
                reasoning: "Two valid types named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Which country prosecutes unclear.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Criminals exploit legal differences.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Enables cybercrime/anonymity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Also aids tracking/coordination.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Interpol/extraterritorial responses.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Limitations acknowledged.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) definition/types (b) jurisdiction (c) technology (d) evaluation",
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
