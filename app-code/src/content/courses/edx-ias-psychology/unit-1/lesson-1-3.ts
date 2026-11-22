import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "eias-psych-u1-lesson-1-3",
  code: "1-3",
  title: "Social Identity and Group Behaviour",
  goal: "I CAN explain social identity theory and intergroup behaviour.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 1 — Social Influence"],
  vocabulary: [
    {
      term: "Social identity",
      definition: "Part of self-concept derived from group membership.",
    },
    { term: "In-group", definition: "Group we identify with." },
    { term: "Out-group", definition: "Group we compare ourselves against." },
    {
      term: "In-group favouritism",
      definition: "Prefer own group over others.",
    },
    {
      term: "Out-group derogation",
      definition: "Negative attitudes toward other groups.",
    },
    {
      term: "Minimal group paradigm",
      definition: "Arbitrary group assignment still produces bias.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u1-socialid",
      title: "Social Identity Theory",
      skill: "Explain how group membership shapes identity and behaviour.",
      lesson: {
        sections: [
          {
            heading: "Social identity theory",
            body: "**Tajfel & Turner**: people derive self-esteem from group memberships. **Categorisation**: divide world into in-group/out-group. **Comparison**: favour in-group, derogate out-group — boosts self-esteem.\n\n**Minimal group studies**: randomly assigned groups (e.g., 'Klee' vs 'Kandinsky' fans) — still showed in-group bias → categorisation alone sufficient for prejudice.",
          },
          {
            heading: "Intergroup behaviour",
            body: "**In-group favouritism**: prefer own group — allocate more resources, rate higher. **Out-group derogation**: negative stereotypes, discrimination. **Realistic conflict**: competition for resources → intergroup hostility (Sherif's Robbers Cave).\n\n**Contact hypothesis**: equal-status, cooperative contact reduces prejudice — Allport's conditions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Randomly assigned to 'Group A' vs 'Group B'. Still shows bias?",
          solution: "Yes — minimal group paradigm.",
        },
      },
      questions: [
        {
          id: "eias-psych-u1-sid-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is social identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Self-concept from group membership" },
              { id: "b", text: "Group conformity" },
              { id: "c", text: "Social role" },
              { id: "d", text: "Personal identity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social identity",
                statement: "Group-based self.",
              },
            ],
            steps: [
              {
                reasoning: "Social identity = group membership self.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Group-based self",
            commonErrors: ["Personal confused."],
          },
        },
        {
          id: "eias-psych-u1-sid-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two findings from minimal group paradigm studies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minimal groups",
                statement: "Arbitrary bias.",
              },
            ],
            steps: [
              {
                reasoning: "Random assignment still produces in-group bias.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "People favour own group even without real difference.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Categorisation alone sufficient for prejudice.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Arbitrary groups → in-group favouritism.",
            commonErrors: ["No bias.", "Only one."],
          },
        },
        {
          id: "eias-psych-u1-sid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the contact hypothesis for reducing prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contact hypothesis",
                statement: "Equal status contact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Equal-status contact between groups reduces prejudice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Cooperation toward shared goals — superordinate goals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Institutional support — authority figures endorse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: integrated schools, joint projects.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Equal contact + cooperation → less prejudice.",
            commonErrors: ["Any contact.", "No conditions."],
          },
        },
        {
          id: "eias-psych-u1-sid-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two rival sports teams' fans clash violently.",
          parts: [
            {
              label: "a",
              prompt: "Explain using social identity theory.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest ways to reduce conflict.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intergroup conflict",
                statement: "In-group vs out-group.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Strong in-group identity — team loyalty.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Out-group derogation — rival fans seen negatively.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Superordinate goals — shared activities both groups value.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Contact hypothesis — equal-status cooperative events.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) in/out-group (b) superordinate+contact",
            commonErrors: ["No theory.", "No solution."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u1-culture",
      title: "Cultural Differences in Social Influence",
      skill:
        "Compare individualist and collectivist cultures in social influence.",
      lesson: {
        sections: [
          {
            heading: "Individualism vs collectivism",
            body: "**Individualist cultures** (US, UK): personal goals > group, independent self, less conformity. **Collectivist cultures** (Japan, China): group harmony > individual, interdependent self, more conformity.\n\n**Conformity**: higher in collectivist cultures — group harmony valued. **Obedience**: higher in cultures with respect for authority. **Milgram replication**: Spain/Italy similar; but cultural variations exist.",
          },
          {
            heading: "Cultural influences",
            body: "**Power distance**: cultures accepting authority hierarchy → more obedience. **Uncertainty avoidance**: cultures seeking certainty → more conformity. **Group orientation**: collectivist → stronger group influence.\n\n**Evaluation**: cultural differences real but within-culture variation also large — avoid stereotypes.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Country values group harmony over individual achievement. Culture type?",
          solution: "Collectivist.",
        },
      },
      questions: [
        {
          id: "eias-psych-u1-cult-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a collectivist culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group harmony over individual" },
              { id: "b", text: "Low conformity" },
              { id: "c", text: "Individual goals first" },
              { id: "d", text: "Independent self" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collectivism",
                statement: "Group > individual.",
              },
            ],
            steps: [
              {
                reasoning: "Collectivist = group priority.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Group priority",
            commonErrors: ["Individualist confused."],
          },
        },
        {
          id: "eias-psych-u1-cult-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two cultural differences in conformity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural conformity",
                statement: "Collectivist higher.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Collectivist cultures show higher conformity — group harmony.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Individualist cultures show more independence — personal choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Power distance affects obedience — hierarchical cultures more obedient.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Collectivist conformity↑, individualist independence↑.",
            commonErrors: ["No difference.", "Only one."],
          },
        },
        {
          id: "eias-psych-u1-cult-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Milgram's findings may not generalise across cultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural validity",
                statement: "Cultural variation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cultural norms differ — obedience expectations vary.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Power distance — hierarchical cultures more obedient.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Individualism — Western cultures may resist more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Replications show variation — not universal rate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Cultural norms vary → obedience rates differ.",
            commonErrors: ["Universal.", "No variation."],
          },
        },
        {
          id: "eias-psych-u1-cult-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A multinational company must manage teams across cultures.",
          parts: [
            {
              label: "a",
              prompt: "Identify two cultural challenges.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cross-cultural management",
                statement: "Cultural awareness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Conformity differences — collectivist teams more consensus-seeking.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Authority distance — hierarchical vs flat cultures.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Cultural training — understand differences.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Inclusive leadership — adapt style to culture.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) conformity+authority (b) training+adaptation",
            commonErrors: ["One culture.", "No solution."],
          },
        },
      ],
    },
  ],
};
