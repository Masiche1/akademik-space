import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "eias-soc-u2-lesson-2-3",
  code: "2-3",
  title: "Multiculturalism and Ethnic Identity",
  goal: "I CAN explain multiculturalism and ethnic identity formation.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 2 — Culture and Identity"],
  vocabulary: [
    {
      term: "Multiculturalism",
      definition: "Society with multiple coexisting cultures.",
    },
    {
      term: "Assimilation",
      definition: "Minority adopts dominant culture, loses own.",
    },
    {
      term: "Integration",
      definition: "Minority keeps own culture while participating in society.",
    },
    {
      term: "Racism",
      definition: "Prejudice + discrimination based on ethnicity.",
    },
    {
      term: "Institutional racism",
      definition: "Racism embedded in institutions/policies.",
    },
    {
      term: "Ethnic identity",
      definition: "Sense of belonging to ethnic group.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u2-multicultural",
      title: "Multiculturalism and Integration",
      skill: "Explain multiculturalism and assimilation vs integration.",
      lesson: {
        sections: [
          {
            heading: "Multiculturalism",
            body: "**Multicultural society**: multiple ethnic groups coexist — each maintains culture. **Benefits**: cultural richness, diversity, economic contribution. **Challenges**: tension, competition for resources, identity politics.\n\n**Assimilation**: minority abandons own culture, adopts dominant — loses identity. **Integration**: keeps own culture while participating — balanced. **Segregation**: groups live separately — social exclusion.",
          },
          {
            heading: "Racism and discrimination",
            body: "**Individual racism**: personal prejudice — acts of discrimination. **Institutional racism**: policies disadvantage minorities — even without intent (e.g., hiring practices). **Effects**: poorer outcomes — education, employment, health.\n\n**Evaluation**: multiculturalism praised for diversity but criticised for fragmentation — debate continues.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Immigrant keeps language/religion but participates in society. Model?",
          solution: "Integration.",
        },
      },
      questions: [
        {
          id: "eias-soc-u2-multi-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is multiculturalism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Segregation" },
              { id: "b", text: "One dominant culture" },
              { id: "c", text: "Cultural assimilation" },
              { id: "d", text: "Multiple coexisting cultures" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiculturalism",
                statement: "Multiple cultures.",
              },
            ],
            steps: [
              {
                reasoning: "Multiculturalism = multiple cultures.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Multiple cultures",
            commonErrors: ["Assimilation confused."],
          },
        },
        {
          id: "eias-soc-u2-multi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish assimilation and integration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Assimilation vs integration",
                statement: "Lose vs keep culture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assimilation — abandon own culture, adopt dominant.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Integration — keep own culture + participate in society.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Assimilation loses identity; integration preserves.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Assimilation=lose, integration=keep+participate.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eias-soc-u2-multi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain institutional racism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Institutional racism",
                statement: "Embedded discrimination.",
              },
            ],
            steps: [
              {
                reasoning: "Racism embedded in institutions/policies.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Even without intent — systemic disadvantage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: hiring practices, school funding, policing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Harder to identify — not individual acts.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Systemic disadvantage in institutions.",
            commonErrors: ["Individual only.", "Intentional only."],
          },
        },
        {
          id: "eias-soc-u2-multi-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "School with diverse student body faces cultural tensions.",
          parts: [
            {
              label: "a",
              prompt: "Explain multicultural challenge.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two approaches.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multicultural education",
                statement: "Diversity + inclusion.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Different values/norms conflict — tension.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Some groups feel excluded — identity issues.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Celebrate diversity — multicultural curriculum.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Inclusive policies — equal treatment, anti-racism.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) conflict+exclusion (b) celebrate+include",
            commonErrors: ["No challenge.", "No approach."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u2-ethnic",
      title: "Ethnic Identity",
      skill: "Explain formation and significance of ethnic identity.",
      lesson: {
        sections: [
          {
            heading: "Ethnic identity formation",
            body: "**Primary socialisation**: family transmits language, religion, traditions. **Secondary**: school, community, media reinforce. **Ethnic community**: institutions — churches, cultural centres — maintain identity.\n\n**Second generation**: children of immigrants — negotiate between cultures — 'in-between' identity, hybrid.",
          },
          {
            heading: "Ethnicity and outcomes",
            body: "**Ethnic inequality**: some groups disadvantaged — education, employment, health. **Model minority myth**: stereotype of successful ethnic group — hides variation. **Ethnic pride**: positive identity — resilience, community strength.\n\n**Evaluation**: ethnic identity fluid — changes over time, context, generation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Child of immigrants speaks two languages, celebrates two festivals. Identity?",
          solution: "Hybrid/bicultural identity.",
        },
      },
      questions: [
        {
          id: "eias-soc-u2-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is ethnic identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "National identity only" },
              { id: "b", text: "Class identity" },
              { id: "c", text: "Sense of belonging to ethnic group" },
              { id: "d", text: "Gender identity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethnic identity",
                statement: "Group belonging.",
              },
            ],
            steps: [
              {
                reasoning: "Ethnic identity = ethnic group belonging.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Ethnic belonging",
            commonErrors: ["National confused."],
          },
        },
        {
          id: "eias-soc-u2-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways ethnic identity is formed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnic formation",
                statement: "Family + community.",
              },
            ],
            steps: [
              {
                reasoning: "Family — language, religion, traditions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Community — ethnic institutions, cultural events.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "School/media — reinforce or challenge identity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Family, community, school/media.",
            commonErrors: ["Only one.", "Wrong source."],
          },
        },
        {
          id: "eias-soc-u2-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the experience of second-generation immigrants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second generation",
                statement: "Between cultures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Navigate two cultures — parents' heritage + host society.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'In-between' identity — hybrid, bicultural.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May face discrimination — neither fully accepted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Can develop strong ethnic pride — cultural richness.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Two cultures → hybrid identity.",
            commonErrors: ["Single identity.", "No conflict."],
          },
        },
        {
          id: "eias-soc-u2-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ethnic minority student achieves top grades but still faces barriers.",
          parts: [
            { label: "a", prompt: "Explain 'model minority' myth.", marks: 4 },
            { label: "b", prompt: "Suggest barriers they may face.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Model minority",
                statement: "Stereotype + barriers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Stereotype — ethnic group seen as universally successful.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Hides variation — not all members succeed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Discrimination — despite achievement, bias persists.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Institutional barriers — fewer opportunities, networks.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) stereotype+hidden (b) discrimination+barriers",
            commonErrors: ["No barriers.", "No myth."],
          },
        },
      ],
    },
  ],
};
