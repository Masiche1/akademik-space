import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "asoc-u3-lesson-3-1",
  code: "3-1",
  title: "Theories of the Family and Social Change",
  goal: "I CAN evaluate functionalist, Marxist, feminist and postmodern views of the family.",
  standards: [
    "9699 P2: Perspectives on the role of the family, diversity and social change",
  ],
  vocabulary: [
    {
      term: "Nuclear family",
      definition: "Family of two parents and their dependent children.",
    },
    {
      term: "Functionalism",
      definition: "Theory seeing society as a system working for social order.",
    },
    {
      term: "Marxism",
      definition:
        "Theory seeing society shaped by class conflict under capitalism.",
    },
    {
      term: "Feminism",
      definition:
        "Theory focusing on women's oppression and gender inequality.",
    },
    {
      term: "Postmodernism",
      definition:
        "Theory emphasising diversity, choice and fragmented identities.",
    },
    {
      term: "New Right",
      definition: "Perspective blaming family breakdown for social problems.",
    },
  ],
  concepts: [
    {
      id: "asoc-u3-functionalism",
      title: "Functionalist and New Right views",
      skill: "Explain functionalist and New Right perspectives on the family.",
      lesson: {
        sections: [
          {
            heading: "Functionalism",
            body: "Murdock: family performs four functions — sexual, reproductive, economic, educational. Parsons: nuclear family 'fits' industrial society — stabilises adult personalities, socialises children. Family is a positive institution for social order.",
          },
          {
            heading: "New Right",
            body: "Murray: welfare dependency and absent fathers cause underclass. Lone-parent families seen as cause of crime/poverty, not consequence. Nuclear family with traditional gender roles is the solution to social problems.",
          },
          {
            heading: "Criticisms",
            body: "Functionalism ignores conflict and exploitation inside the family. New Right ignores structural causes of poverty and diversity of family forms. Both assume nuclear family is 'natural' and universal.",
          },
        ],
        keyFormulas: [
          {
            name: "Family theories",
            statement:
              "Functionalism=positive functions; New Right=nuclear family solves problems.",
          },
        ],
        workedExample: {
          problem: "How does functionalism explain the family's role?",
          solution:
            "Family performs essential functions (socialisation, stabilisation) that maintain social order — Parsons' 'fit' with industrial society.",
        },
      },
      questions: [
        {
          id: "asoc-u3-fu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What four functions did Murdock identify for the family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sexual, reproductive, economic, educational" },
              { id: "b", text: "Social, political, cultural, religious" },
              { id: "c", text: "Cooking, cleaning, childcare, earning" },
              { id: "d", text: "Love, support, protection, guidance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Murdock",
                statement: "Sexual, reproductive, economic, educational.",
              },
            ],
            steps: [
              {
                reasoning: "Murdock's four functions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sexual, reproductive, economic, educational",
            commonErrors: ["Listing household tasks."],
          },
        },
        {
          id: "asoc-u3-fu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the New Right view of lone-parent families?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "New Right",
                statement: "Lone parents cause social problems.",
              },
            ],
            steps: [
              {
                reasoning: "Absent fathers → underclass.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Nuclear family is the solution.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Lone-parent families blamed for crime and poverty; nuclear family preferred.",
            commonErrors: ["Saying lone parents are praised."],
          },
        },
        {
          id: "asoc-u3-fu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the functionalist view of the family.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalism",
                statement: "Positive functions vs ignores conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies essential functions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Explains social order role.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ignores conflict/exploitation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Sees family as positive but ignores internal conflict and diversity.",
            commonErrors: ["Only describing, no evaluation."],
          },
        },
        {
          id: "asoc-u3-fu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Functionalist and New Right views.",
          parts: [
            { label: "a", prompt: "Murdock's functions?", marks: 2 },
            { label: "b", prompt: "Parsons' 'fit' idea?", marks: 2 },
            { label: "c", prompt: "New Right view of family?", marks: 3 },
            { label: "d", prompt: "Criticisms of both?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family theories",
                statement: "Functions+fit+New Right+criticism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Four functions.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "Fits industrial society.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Stabilises personalities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Lone parents cause problems.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Nuclear family solution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Underclass argument.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Ignore conflict/diversity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Assume nuclear universal.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) functions (b) fit (c) New Right (d) criticisms",
          },
        },
      ],
    },
    {
      id: "asoc-u3-marxist-feminist",
      title: "Marxist and feminist views of the family",
      skill: "Explain Marxist and feminist perspectives on the family.",
      lesson: {
        sections: [
          {
            heading: "Marxist view",
            body: "Family reproduces labour power cheaply — workers' families provide unpaid domestic labour, emotional support. Ideological function: family teaches acceptance of hierarchy and private property. Family supports capitalism.",
          },
          {
            heading: "Feminist views",
            body: "Liberal: family can be equal partnership, reform needed. Marxist/socialist: family under capitalism exploits women — domestic labour unpaid. Radical: patriarchy — men dominate family regardless of class. Family is a site of women's oppression.",
          },
          {
            heading: "Postmodern view",
            body: "Family forms are diverse — cohabitation, same-sex, lone-parent, child-free couples. No 'normal' family. Individuals choose relationships freely. Traditional nuclear family is just one option among many.",
          },
        ],
        keyFormulas: [
          {
            name: "Conflict theories",
            statement:
              "Marxist=capitalism; Feminist=patriarchy; Postmodern=diversity.",
          },
        ],
        workedExample: {
          problem: "How does the Marxist view see the family?",
          solution:
            "Family reproduces labour power and teaches acceptance of capitalism — supporting the ruling class.",
        },
      },
      questions: [
        {
          id: "asoc-u3-mf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the Marxist view say the family does for capitalism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reproduces labour power and supports ideology",
              },
              { id: "b", text: "Provides equal partnership" },
              { id: "c", text: "Challenges all authority" },
              { id: "d", text: "Has no social function" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marxist family",
                statement: "Reproduces labour, supports ideology.",
              },
            ],
            steps: [
              {
                reasoning: "Labour reproduction + ideology.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Reproduces labour power and supports ideology",
            commonErrors: ["Confusing with functionalism."],
          },
        },
        {
          id: "asoc-u3-mf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do feminists argue about the family?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feminism",
                statement: "Family is a site of women's oppression.",
              },
            ],
            steps: [
              {
                reasoning: "Patriarchy/domestic labour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Women disadvantaged inside family.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Family is a site of women's oppression through patriarchy and unpaid domestic labour.",
            commonErrors: ["Saying feminists praise the family."],
          },
        },
        {
          id: "asoc-u3-mf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare Marxist and postmodern views of the family.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist vs postmodern",
                statement: "Capitalism critique vs diversity.",
              },
            ],
            steps: [
              {
                reasoning: "Marxist: family serves capitalism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Postmodern: diverse family forms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different assumptions.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Marxist=family serves capitalism; postmodern=diverse family forms.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u3-mf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Marxist, feminist and postmodern views.",
          parts: [
            { label: "a", prompt: "Marxist view?", marks: 3 },
            { label: "b", prompt: "Feminist view?", marks: 3 },
            { label: "c", prompt: "Postmodern view?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict theories",
                statement: "Marxist+feminist+postmodern.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Labour reproduction.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Ideological support.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Supports capitalism.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Patriarchy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Domestic labour unpaid.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Site of oppression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Diverse family forms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Choice/freedom.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "No 'normal' family.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Marxist (b) feminist (c) postmodern",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u3-3-1-notes",
      title: "Family theories — notes",
      summary:
        "Functionalist, New Right, Marxist, feminist, postmodern views of the family.",
      sections: [
        {
          heading: "Consensus",
          body: "Functionalism: family performs essential functions. New Right: nuclear family solves social problems.",
        },
        {
          heading: "Conflict/diversity",
          body: "Marxist: serves capitalism. Feminist: patriarchy oppresses women. Postmodern: diverse family forms.",
        },
      ],
    },
  ],
};
