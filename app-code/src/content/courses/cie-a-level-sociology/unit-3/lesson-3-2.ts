import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "asoc-u3-lesson-3-2",
  code: "3-2",
  title: "Family Diversity and Social Change",
  goal: "I CAN describe changing family forms and evaluate reasons for diversity.",
  standards: ["9699 P2: Diversity and social change"],
  vocabulary: [
    {
      term: "Family diversity",
      definition:
        "Range of family forms beyond the traditional nuclear family.",
    },
    { term: "Lone-parent family", definition: "Family headed by one parent." },
    {
      term: "Cohabitation",
      definition: "Couple living together without marriage.",
    },
    { term: "Same-sex family", definition: "Family with same-sex parents." },
    {
      term: "Family of choice",
      definition: "Chosen relationships, often without biological ties.",
    },
    {
      term: "Postmodernisation",
      definition: "Shift to individual choice and fragmented identities.",
    },
  ],
  concepts: [
    {
      id: "asoc-u3-diversity",
      title: "Types of family diversity",
      skill: "Describe the main types of family diversity.",
      lesson: {
        sections: [
          {
            heading: "Diverse family forms",
            body: "Lone-parent (divorce/widowhood/choice). Reconstituted/blended families. Cohabiting couples. Same-sex families. Child-free couples. Beanpole (multi-generational). 'Family of choice' — friends as family. Extended family networks.",
          },
          {
            heading: "Reasons for change",
            body: "Rising divorce rates. Female employment and economic independence. Contraception and smaller families. Attitude shifts — less social pressure to marry. Gay rights. Individualisation — personal choice over tradition.",
          },
          {
            heading: "Evaluation",
            body: "Diversity is real but nuclear family persists — still majority form in many societies. 'Family' remains important for most people. Diversity may reflect class/ethnic differences too.",
          },
        ],
        keyFormulas: [
          {
            name: "Family diversity",
            statement:
              "Lone-parent, reconstituted, cohabiting, same-sex, child-free, extended.",
          },
        ],
        workedExample: {
          problem: "What factors explain rising family diversity?",
          solution:
            "Divorce, women's employment, contraception, changing attitudes, individualisation.",
        },
      },
      questions: [
        {
          id: "asoc-u3-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a form of family diversity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Traditional nuclear family" },
              { id: "b", text: "Lone-parent family" },
              { id: "c", text: "Same-sex family" },
              { id: "d", text: "Reconstituted family" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diversity",
                statement: "Forms beyond nuclear family.",
              },
            ],
            steps: [
              {
                reasoning: "Nuclear is traditional, not diverse.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Traditional nuclear family",
            commonErrors: ["Picking a diverse form."],
          },
        },
        {
          id: "asoc-u3-dv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two factors explaining rising family diversity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Change factors",
                statement: "Divorce, employment, contraception, attitudes.",
              },
            ],
            steps: [
              { reasoning: "Any two factors.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Divorce, female employment, contraception, changing attitudes, individualisation.",
            commonErrors: ["Only one factor."],
          },
        },
        {
          id: "asoc-u3-dv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that the nuclear family is in decline.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nuclear decline",
                statement: "Diversity rising vs nuclear persists.",
              },
            ],
            steps: [
              {
                reasoning: "Diverse forms increasing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Nuclear still majority.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Class/ethnic differences.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Diversity rising but nuclear family persists as majority form.",
            commonErrors: ["One-sided argument."],
          },
        },
        {
          id: "asoc-u3-dv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Family diversity.",
          parts: [
            { label: "a", prompt: "Define family diversity.", marks: 1 },
            { label: "b", prompt: "Three diverse forms?", marks: 3 },
            { label: "c", prompt: "Three reasons for change?", marks: 3 },
            { label: "d", prompt: "Is nuclear family declining?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diversity",
                statement: "Definition+forms+reasons+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Forms beyond nuclear.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any three forms.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Any three factors.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Diversity vs persistence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) diversity (b) forms (c) reasons (d) evaluation",
          },
        },
      ],
    },
    {
      id: "asoc-u3-family-roles",
      title: "Family Roles: Gender and Age",
      skill:
        "Describe gender equality and age-related experiences of family life.",
      lesson: {
        sections: [
          {
            heading: "Gender roles in the family",
            body: "Traditional: women do housework/childcare (domestic labour), men earn breadwinner role. Changes: women in paid work, men doing more housework — but 'dual burden' remains for many women. Symmetrical family thesis (Young & Willmott) vs feminist critique — work often just adds to women's load.",
          },
          {
            heading: "Age and family life",
            body: "Children: socialisation, education, emotional support. Adults: balancing work/parenthood. Older people: grandparents provide childcare; retirement changes roles. 'Beanpole' families span generations. Sandwich generation cares for children and elderly parents.",
          },
          {
            heading: "Negotiation and power",
            body: "Decision-making varies — money management, childcare, major purchases. Feminists argue men still hold more power. Equality varies by class, ethnicity, generation.",
          },
        ],
        keyFormulas: [
          {
            name: "Family roles",
            statement:
              "Gender: domestic labour+dual burden; Age: sandwich generation+grandparent care.",
          },
        ],
        workedExample: {
          problem: "What is the 'dual burden' for women?",
          solution:
            "Women do paid work AND most housework/childcare — employment adds to rather than replaces domestic labour.",
        },
      },
      questions: [
        {
          id: "asoc-u3-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'dual burden' for women?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paid work plus most housework/childcare" },
              { id: "b", text: "Two jobs at once" },
              { id: "c", text: "Caring for two children" },
              { id: "d", text: "Double parenting responsibilities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dual burden",
                statement: "Paid work + domestic labour.",
              },
            ],
            steps: [
              {
                reasoning: "Employment + housework.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Paid work plus most housework/childcare",
            commonErrors: ["Saying it's about two jobs."],
          },
        },
        {
          id: "asoc-u3-fr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the symmetrical family thesis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetrical family",
                statement: "Young & Willmott — equal roles.",
              },
            ],
            steps: [
              {
                reasoning: "Partners share roles equally.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Young & Willmott's view.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Young & Willmott argued family roles becoming equal/shared.",
            commonErrors: ["Saying it's about identical twins."],
          },
        },
        {
          id: "asoc-u3-fr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the symmetrical family thesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Symmetrical thesis",
                statement: "Equal roles vs dual burden reality.",
              },
            ],
            steps: [
              {
                reasoning: "Some evidence of sharing.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Dual burden persists.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Class/ethnic differences.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Partial sharing but women still carry most domestic burden.",
            commonErrors: ["Accepting thesis uncritically."],
          },
        },
        {
          id: "asoc-u3-fr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Family roles.",
          parts: [
            { label: "a", prompt: "Define dual burden.", marks: 1 },
            { label: "b", prompt: "Symmetrical family thesis?", marks: 2 },
            { label: "c", prompt: "Age-related family roles?", marks: 3 },
            { label: "d", prompt: "Who holds more power?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family roles",
                statement: "Dual burden+symmetrical+age+power.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Work + domestic labour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Young & Willmott.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Equal roles claim.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Children/adults/elderly roles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Sandwich generation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Grandparent care.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Men often more power.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Decision-making varies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Feminist critique.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) dual burden (b) symmetrical (c) age roles (d) power",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u3-3-2-notes",
      title: "Family diversity and roles — notes",
      summary:
        "Diverse family forms, reasons for change, gender/age roles, power.",
      sections: [
        {
          heading: "Diversity",
          body: "Lone-parent, reconstituted, cohabiting, same-sex, child-free. Causes: divorce, employment, contraception, attitudes.",
        },
        {
          heading: "Roles",
          body: "Dual burden for women; symmetrical family thesis contested; sandwich generation; men often hold power.",
        },
      ],
    },
  ],
};
