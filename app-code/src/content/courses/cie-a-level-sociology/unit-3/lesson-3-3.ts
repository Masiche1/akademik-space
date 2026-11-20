import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "asoc-u3-lesson-3-3",
  code: "3-3",
  title: "Family and Social Policy",
  goal: "I CAN evaluate how social policy affects family forms and roles.",
  standards: ["9699 P2: Diversity and social change"],
  vocabulary: [
    {
      term: "Social policy",
      definition: "Government laws and measures affecting family life.",
    },
    {
      term: "Welfare state",
      definition: "System of state support for citizens' wellbeing.",
    },
    { term: "Parental leave", definition: "Time off work for new parents." },
    {
      term: "Child benefit",
      definition: "State payment to parents per child.",
    },
    {
      term: "Same-sex marriage",
      definition: "Legal marriage for same-sex couples.",
    },
    {
      term: "Work-life balance",
      definition: "Balancing paid work and family responsibilities.",
    },
  ],
  concepts: [
    {
      id: "asoc-u3-policy",
      title: "Social policy and the family",
      skill: "Explain how social policy shapes family life.",
      lesson: {
        sections: [
          {
            heading: "Family-related policies",
            body: "Marriage laws and divorce laws shape family formation/breakdown. Parental leave and childcare provisions affect work-family balance. Child benefits/tax credits support families financially. Same-sex marriage legalisation enables new family forms.",
          },
          {
            heading: "Policy debates",
            body: "New Right: welfare encourages lone parenthood and dependency. Feminists: policies reinforce gender roles (maternity leave → mothers care). Postmodernists: policies should reflect diverse family forms. Questions of who policy 'targets' — nuclear family assumptions.",
          },
          {
            heading: "Global variations",
            body: "Family policies vary widely — Nordic countries support dual-earner families; some countries restrict divorce or same-sex families. Policy reflects cultural values about 'the family'.",
          },
        ],
        keyFormulas: [
          {
            name: "Family policy",
            statement:
              "Laws shape formation/breakdown; policies reflect values; debates over targets.",
          },
        ],
        workedExample: {
          problem: "How does parental leave policy affect gender roles?",
          solution:
            "If only mothers take leave, reinforces 'mother as carer'; shared parental leave can promote equality.",
        },
      },
      questions: [
        {
          id: "asoc-u3-po-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is social policy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Government laws and measures affecting family life",
              },
              { id: "b", text: "Company rules for workers" },
              { id: "c", text: "Family traditions" },
              { id: "d", text: "Religious guidelines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social policy",
                statement: "Government measures affecting family.",
              },
            ],
            steps: [
              {
                reasoning: "Social policy = government action.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Government laws and measures affecting family life",
            commonErrors: ["Confusing with company policy."],
          },
        },
        {
          id: "asoc-u3-po-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does same-sex marriage legalisation affect families?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Same-sex marriage",
                statement: "Enables new recognised family forms.",
              },
            ],
            steps: [
              {
                reasoning: "Legal recognition of relationships.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Enables parenting/adoption rights.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Legally recognises same-sex relationships and enables parenting rights.",
            commonErrors: ["Saying it changes biology."],
          },
        },
        {
          id: "asoc-u3-po-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that family policies assume the nuclear family.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy assumptions",
                statement: "Nuclear assumptions vs diverse reality.",
              },
            ],
            steps: [
              {
                reasoning: "Many policies target nuclear model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Diverse forms may be excluded.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Some policies adapt to diversity.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Many policies assume nuclear family, marginalising diverse forms.",
            commonErrors: ["One-sided argument."],
          },
        },
        {
          id: "asoc-u3-po-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Family and social policy.",
          parts: [
            { label: "a", prompt: "Define social policy.", marks: 1 },
            { label: "b", prompt: "Three family-related policies?", marks: 3 },
            {
              label: "c",
              prompt: "New Right vs feminist policy views?",
              marks: 3,
            },
            { label: "d", prompt: "How do policies vary globally?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family policy",
                statement: "Definition+examples+debates+variation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Government measures.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any three policies.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "New Right: dependency.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Feminist: gender roles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Comparison.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Nordic vs restrictive examples.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Reflects values.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) policy (b) examples (c) debates (d) variation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u3-3-3-notes",
      title: "Family policy — notes",
      summary:
        "How government policy shapes family forms and roles; global variation.",
      sections: [
        {
          heading: "Policy effects",
          body: "Marriage/divorce laws, parental leave, benefits, same-sex marriage shape family life.",
        },
        {
          heading: "Debates",
          body: "New Right sees welfare dependency; feminists see reinforced gender roles; policies often assume nuclear family.",
        },
      ],
    },
  ],
};
