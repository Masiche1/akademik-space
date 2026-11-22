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
              { id: "b", text: "Love, support, protection, guidance" },
              { id: "c", text: "Social, political, cultural, religious" },
              { id: "d", text: "Cooking, cleaning, childcare, earning" },
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
        {
          id: "asoc-u3-fu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sociologist identified the family's four key functions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marx" },
              { id: "b", text: "Durkheim" },
              { id: "c", text: "Murdock" },
              { id: "d", text: "Becker" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Murdock",
                statement: "Four functions of the family.",
              },
            ],
            steps: [
              {
                reasoning: "Murdock = four functions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Murdock",
            commonErrors: ["Saying Marx or Durkheim."],
          },
        },
        {
          id: "asoc-u3-fu-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did Parsons mean when he said the nuclear family 'fits' industrial society?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too large for modern life" },
              { id: "b", text: "It is the only family form in history" },
              {
                id: "c",
                text: "Its small size and specialised roles suit industrial economic needs",
              },
              { id: "d", text: "It should be abolished" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parsons' fit",
                statement: "Nuclear family suits industrial society.",
              },
            ],
            steps: [
              {
                reasoning: "Fit = structural compatibility.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Suits industrial needs",
            commonErrors: ["Saying nuclear family is universal."],
          },
        },
        {
          id: "asoc-u3-fu-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the New Right blame for the 'underclass'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Immigration policies" },
              { id: "b", text: "Structural unemployment only" },
              { id: "c", text: "Economic recessions" },
              {
                id: "d",
                text: "Welfare dependency and absent fathers/lone parenthood",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "New Right",
                statement: "Dependency + absent fathers blamed.",
              },
            ],
            steps: [
              {
                reasoning: "Murray: welfare + absent fathers.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Welfare dependency + absent fathers",
            commonErrors: ["Saying structural causes."],
          },
        },
        {
          id: "asoc-u3-fu-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a key criticism of the functionalist view of the family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It emphasises class conflict" },
              { id: "b", text: "It recognises all family diversity" },
              { id: "c", text: "It ignores conflict and exploitation inside the family" },
              { id: "d", text: "It denies the family has functions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist critique",
                statement: "Ignores internal conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Consensus view ignores conflict.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Ignores conflict/exploitation",
            commonErrors: ["Saying functionalism is a conflict theory."],
          },
        },
        {
          id: "asoc-u3-fu-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 500 adults, 62% said the family provides important emotional support. How many adults is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 310 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "62% of 500 = 0.62 x 500 = 310.",
              },
            ],
            steps: [
              { reasoning: "Convert 62% to 0.62.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.62 by 500 to get 310.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "310",
            commonErrors: ["Using 62 instead of 0.62."],
          },
        },
        {
          id: "asoc-u3-fu-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 250 lone-parent families studied, 30% cited the absent father as a key issue. How many families is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 75 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "30% of 250 = 0.3 x 250 = 75.",
              },
            ],
            steps: [
              { reasoning: "Convert 30% to 0.3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.3 by 250 to get 75.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "75",
            commonErrors: ["Reporting 0.3 instead of 75."],
          },
        },
        {
          id: "asoc-u3-fu-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three functions of the family — socialisation, economic support and emotional care — are named equally by 360 respondents. How many respondents name each function?",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal shares",
                statement: "360 / 3 = 120 per function.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total by number of functions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "360 / 3 = 120.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "120",
            commonErrors: ["Dividing by 2 or 4 instead of 3."],
          },
        },
        {
          id: "asoc-u3-fu-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Support for the nuclear family as the ideal fell from 65% to 50% among 400 respondents. By how many fewer respondents did it fall?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in respondents",
                statement: "65% of 400 = 260; 50% of 400 = 200; fall = 60.",
              },
            ],
            steps: [
              {
                reasoning: "260 respondents at 65%; 200 at 50%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Decrease = 260 - 200 = 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Answering 15 (percentage points) not respondents."],
          },
        },
        {
          id: "asoc-u3-fu-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 600 respondents, 12% blamed welfare dependency for family breakdown. How many respondents is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 72 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "12% of 600 = 0.12 x 600 = 72.",
              },
            ],
            steps: [
              { reasoning: "Convert 12% to 0.12.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.12 by 600 to get 72.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "72",
            commonErrors: ["Using 12 instead of 0.12."],
          },
        },
        {
          id: "asoc-u3-fu-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do feminists criticise the New Right view of lone-parent families?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It fully supports gender equality" },
              { id: "b", text: "It praises all family forms equally" },
              { id: "c", text: "It ignores structural causes of poverty and blames mothers" },
              { id: "d", text: "It ignores the nuclear family" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feminist critique of New Right",
                statement: "Blames lone mothers, ignores structure.",
              },
            ],
            steps: [
              {
                reasoning: "New Right scapegoats lone parents.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Blames mothers, ignores structure",
            commonErrors: ["Saying feminists agree with New Right."],
          },
        },
        {
          id: "asoc-u3-fu-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "For Parsons, what two psychological functions does the family perform?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Collects taxes and votes" },
              { id: "b", text: "Produces goods and services" },
              { id: "c", text: "Runs schools and hospitals" },
              {
                id: "d",
                text: "Socialises children and stabilises adult personalities",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parsons' functions",
                statement: "Socialisation + stabilisation.",
              },
            ],
            steps: [
              {
                reasoning: "Parsons: socialise + stabilise.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Socialise + stabilise",
            commonErrors: ["Listing economic functions."],
          },
        },
        {
          id: "asoc-u3-fu-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Functionalist and New Right views.",
          parts: [
            { label: "a", prompt: "State Murdock's four functions of the family.", marks: 2 },
            {
              label: "b",
              prompt: "Explain Parsons' idea that the nuclear family 'fits' industrial society.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain the New Right view of lone-parent families.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Evaluate functionalist and New Right perspectives on the family.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family theories",
                statement: "Functions+fit+New Right+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sexual, reproductive, economic, educational.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "All four named.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Nuclear suits industrial economy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Stabilises personalities/socialises.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Lone parents blamed for problems.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Nuclear family seen as solution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Underclass argument explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both assume nuclear universal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Ignore conflict/diversity/structure.",
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
            finalAnswer:
              "(a) functions (b) fit (c) New Right (d) evaluation",
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
              { id: "a", text: "Challenges all authority" },
              {
                id: "b",
                text: "Reproduces labour power and supports ideology",
              },
              { id: "c", text: "Provides equal partnership" },
              { id: "d", text: "Has no social function" },
            ],
            correctChoiceId: "b",
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
        {
          id: "asoc-u3-mf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the Marxist view, what is 'domestic labour'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Work done in an office" },
              { id: "b", text: "Voluntary community work" },
              { id: "c", text: "Paid factory labour" },
              {
                id: "d",
                text: "Unpaid housework and childcare performed in the home",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domestic labour",
                statement: "Unpaid housework/childcare.",
              },
            ],
            steps: [
              {
                reasoning: "Domestic = unpaid home work.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Unpaid housework/childcare",
            commonErrors: ["Saying it is paid work."],
          },
        },
        {
          id: "asoc-u3-mf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the postmodern view of family forms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The family will disappear entirely" },
              { id: "b", text: "All families must marry" },
              { id: "c", text: "Only the nuclear family is normal" },
              {
                id: "d",
                text: "Family forms are diverse and chosen; there is no single 'normal' family",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postmodern family",
                statement: "Diversity + individual choice.",
              },
            ],
            steps: [
              {
                reasoning: "Postmodern = diverse/chosen.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Diverse and chosen",
            commonErrors: ["Saying nuclear is the only form."],
          },
        },
        {
          id: "asoc-u3-mf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the ideological function of the family in the Marxist view?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It provides free education" },
              { id: "b", text: "It teaches children to accept hierarchy and private property" },
              { id: "c", text: "It challenges all authority" },
              { id: "d", text: "It has no social function" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ideological function",
                statement: "Family legitimises capitalism.",
              },
            ],
            steps: [
              {
                reasoning: "Family transmits acceptance of system.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Teaches acceptance of hierarchy/property",
            commonErrors: ["Confusing with functionalist functions."],
          },
        },
        {
          id: "asoc-u3-mf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do radical feminists argue about patriarchy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Patriarchy is purely biological" },
              { id: "b", text: "Gender equality already exists" },
              {
                id: "c",
                text: "Men dominate women regardless of social class and it must be overthrown",
              },
              { id: "d", text: "It exists only under capitalism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Radical feminism",
                statement: "Patriarchy independent of class.",
              },
            ],
            steps: [
              {
                reasoning: "Radical = patriarchy primary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Male dominance regardless of class",
            commonErrors: ["Saying patriarchy only exists under capitalism."],
          },
        },
        {
          id: "asoc-u3-mf-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 250 women, 60% said they do the majority of housework. How many women is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 150 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "60% of 250 = 0.6 x 250 = 150.",
              },
            ],
            steps: [
              { reasoning: "Convert 60% to 0.6.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.6 by 250 to get 150.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "150",
            commonErrors: ["Reporting 0.6 instead of 150."],
          },
        },
        {
          id: "asoc-u3-mf-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 400 couples surveyed, 30% reported sharing all housework equally. How many couples is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "30% of 400 = 0.3 x 400 = 120.",
              },
            ],
            steps: [
              { reasoning: "Convert 30% to 0.3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.3 by 400 to get 120.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "120",
            commonErrors: ["Using 30 instead of 0.3."],
          },
        },
        {
          id: "asoc-u3-mf-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a study of 200 families, the Marxist view holds that most domestic labour is unpaid. If 45% of families have one partner doing most unpaid work, how many families is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "45% of 200 = 0.45 x 200 = 90.",
              },
            ],
            steps: [
              { reasoning: "Convert 45% to 0.45.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.45 by 200 to get 90.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "90",
            commonErrors: ["Reporting 0.45 instead of 90."],
          },
        },
        {
          id: "asoc-u3-mf-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Economists estimate unpaid domestic labour at $20 per hour. A carer spends 15 hours per week on it. What is the weekly value of this labour?",
          response: { type: "numeric", parts: [{ label: "a", answer: 300 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Valuing labour",
                statement: "20 x 15 = $300 per week.",
              },
            ],
            steps: [
              { reasoning: "Multiply hourly rate by hours.", marks: 1, markCode: "AO1" },
              {
                reasoning: "20 x 15 = 300 dollars per week.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "300",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "asoc-u3-mf-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The proportion of dual-earner couples rose from 25% to 40% among 300 couples. By how many couples did it rise?",
          response: { type: "numeric", parts: [{ label: "a", answer: 45 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in couples",
                statement: "40% of 300 = 120; 25% of 300 = 75; rise = 45.",
              },
            ],
            steps: [
              {
                reasoning: "120 couples at 40%; 75 at 25%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increase = 120 - 75 = 45.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "45",
            commonErrors: ["Answering 15 (percentage points) not couples."],
          },
        },
        {
          id: "asoc-u3-mf-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How do liberal and radical feminists differ in their view of the family?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Liberal feminists seek reform within the family; radical feminists see patriarchy as needing overthrow",
              },
              { id: "b", text: "They hold identical views" },
              { id: "c", text: "Liberal feminists want to abolish the family" },
              { id: "d", text: "Radical feminists deny gender inequality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feminist strands",
                statement: "Reform vs patriarchy overthrow.",
              },
            ],
            steps: [
              {
                reasoning: "Liberal=reform; radical=overthrow patriarchy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reform vs overthrow",
            commonErrors: ["Treating all feminists alike."],
          },
        },
        {
          id: "asoc-u3-mf-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the Marxist view say the family does for capitalism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It challenges the ruling class" },
              {
                id: "b",
                text: "It reproduces labour power cheaply and teaches acceptance of the system",
              },
              { id: "c", text: "It distributes wealth equally" },
              { id: "d", text: "It has no economic role" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist family",
                statement: "Supports capitalism.",
              },
            ],
            steps: [
              {
                reasoning: "Family serves capitalism.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reproduces labour + ideology",
            commonErrors: ["Confusing with functionalism."],
          },
        },
        {
          id: "asoc-u3-mf-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Marxist, feminist and postmodern views.",
          parts: [
            { label: "a", prompt: "Explain the Marxist view of the family's role.", marks: 3 },
            { label: "b", prompt: "Explain the feminist view of the family.", marks: 3 },
            {
              label: "c",
              prompt: "Explain the postmodern view of family diversity.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Compare the Marxist and postmodern views of the family.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict theories",
                statement: "Marxist+feminist+postmodern+comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Reproduces labour power.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Ideological support for capitalism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Unpaid domestic labour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Patriarchy/domestic labour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Site of women's oppression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Different feminist strands.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Diverse chosen family forms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "No single 'normal' family.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Marxist=serves capitalism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Postmodern=diversity/freedom.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Marxist (b) feminist (c) postmodern (d) comparison",
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
