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
              { id: "a", text: "Company rules for workers" },
              {
                id: "b",
                text: "Government laws and measures affecting family life",
              },
              { id: "c", text: "Family traditions" },
              { id: "d", text: "Religious guidelines" },
            ],
            correctChoiceId: "b",
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
              "**(b)** Government laws and measures affecting family life",
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
        {
          id: "asoc-u3-po-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'parental leave'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leave taken for holidays" },
              { id: "b", text: "Unpaid overtime" },
              { id: "c", text: "Time off for sickness" },
              {
                id: "d",
                text: "Time off work for new parents, often paid by the state or employer",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parental leave",
                statement: "Paid time off for new parents.",
              },
            ],
            steps: [
              {
                reasoning: "Parental leave = new parents' time off.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Time off for new parents",
            commonErrors: ["Confusing with annual leave."],
          },
        },
        {
          id: "asoc-u3-po-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'child benefit'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A tax on large families" },
              {
                id: "b",
                text: "A state payment made to parents for each child",
              },
              { id: "c", text: "Free school meals only" },
              { id: "d", text: "A private insurance scheme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Child benefit",
                statement: "State payment per child.",
              },
            ],
            steps: [
              {
                reasoning: "Child benefit = per-child payment.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** State payment per child",
            commonErrors: ["Confusing with tax credits."],
          },
        },
        {
          id: "asoc-u3-po-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How can maternity leave policy reinforce traditional gender roles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no effect on gender roles" },
              { id: "b", text: "It removes all gender differences" },
              { id: "c", text: "It forces fathers to stay at home" },
              {
                id: "d",
                text: "If only mothers take the leave, it reinforces the idea that mothers are the carers",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy and gender",
                statement: "Leave design shapes roles.",
              },
            ],
            steps: [
              {
                reasoning: "Mothers-only leave → mother as carer.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Reinforces mother-as-carer",
            commonErrors: ["Saying policy never affects roles."],
          },
        },
        {
          id: "asoc-u3-po-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do postmodernists argue family policy should reflect?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The diversity of family forms in contemporary society",
              },
              { id: "b", text: "Only religious family values" },
              { id: "c", text: "No family policies at all" },
              { id: "d", text: "Only the nuclear family model" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postmodern policy view",
                statement: "Policy should reflect diversity.",
              },
            ],
            steps: [
              {
                reasoning: "Postmodern = diverse forms.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Diversity of family forms",
            commonErrors: ["Saying nuclear only."],
          },
        },
        {
          id: "asoc-u3-po-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 500 families, 40% used state-subsidised childcare. How many families is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 200 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "40% of 500 = 0.4 x 500 = 200.",
              },
            ],
            steps: [
              { reasoning: "Convert 40% to 0.4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.4 by 500 to get 200.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "200",
            commonErrors: ["Using 40 instead of 0.4."],
          },
        },
        {
          id: "asoc-u3-po-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 300 respondents, 25% said parental leave policy had improved their work-life balance. How many respondents is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 75 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "25% of 300 = 0.25 x 300 = 75.",
              },
            ],
            steps: [
              { reasoning: "Convert 25% to 0.25.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.25 by 300 to get 75.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "75",
            commonErrors: ["Reporting 0.25 instead of 75."],
          },
        },
        {
          id: "asoc-u3-po-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Four types of family policy — marriage law, divorce law, parental leave and child benefit — are discussed equally by 400 students. How many students discuss each policy?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal shares",
                statement: "400 / 4 = 100 per policy.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total by number of policies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "400 / 4 = 100.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "100",
            commonErrors: ["Dividing by 3 or 5 instead of 4."],
          },
        },
        {
          id: "asoc-u3-po-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Child benefit pays $100 per month for each child. How much does a family with 3 children receive per month?",
          response: { type: "numeric", parts: [{ label: "a", answer: 300 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Benefit calculation",
                statement: "100 x 3 = $300 per month.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply payment by number of children.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "100 x 3 = 300 dollars.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "300",
            commonErrors: ["Answering $100 (per child) not total."],
          },
        },
        {
          id: "asoc-u3-po-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a study of 50 countries, same-sex marriage is legal in 30. What percentage of the countries is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "(30 / 50) x 100 = 60%.",
              },
            ],
            steps: [
              {
                reasoning: "Divide 30 by 50 to get 0.6.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Convert to percentage: 0.6 x 100 = 60%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Reporting 0.6 instead of 60%."],
          },
        },
        {
          id: "asoc-u3-po-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do family policies vary so much between countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They reflect different cultural values about 'the family'" },
              { id: "b", text: "Only wealthy countries have policies" },
              { id: "c", text: "Policies are random with no pattern" },
              { id: "d", text: "All countries have identical policies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global variation",
                statement: "Policy reflects cultural values.",
              },
            ],
            steps: [
              {
                reasoning: "Values shape policy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Cultural values differ",
            commonErrors: ["Claiming policies are identical."],
          },
        },
        {
          id: "asoc-u3-po-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do Nordic countries' family policies typically support?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Dual-earner families and work-life balance",
              },
              { id: "b", text: "Restricting divorce" },
              { id: "c", text: "No childcare provision" },
              { id: "d", text: "Only traditional nuclear families" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nordic model",
                statement: "Supports dual-earner families.",
              },
            ],
            steps: [
              {
                reasoning: "Nordic = work-life balance support.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Dual-earner families",
            commonErrors: ["Saying they support only nuclear."],
          },
        },
        {
          id: "asoc-u3-po-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Family and social policy.",
          parts: [
            { label: "a", prompt: "Define social policy.", marks: 1 },
            { label: "b", prompt: "Name three family-related policies.", marks: 2 },
            {
              label: "c",
              prompt: "Explain how parental leave can affect gender roles.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Contrast New Right and feminist views of family policy.",
              marks: 3,
            },
            {
              label: "e",
              prompt: "Evaluate how well family policies reflect diverse family forms.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family policy",
                statement: "Definition+examples+gender+debates+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Government measures affecting family.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any three policies named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correctly identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Leave design shapes carer roles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Reinforces or challenges gender roles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "New Right: welfare dependency blame.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Feminist: reinforces gender roles critique.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear contrast made.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Many policies assume nuclear model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) policy (b) examples (c) gender roles (d) debates (e) evaluation",
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
