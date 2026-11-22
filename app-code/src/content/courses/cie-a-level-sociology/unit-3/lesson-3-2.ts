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
              { id: "a", text: "Lone-parent family" },
              { id: "b", text: "Same-sex family" },
              { id: "c", text: "Traditional nuclear family" },
              { id: "d", text: "Reconstituted family" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Traditional nuclear family",
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
        {
          id: "asoc-u3-dv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'beanpole' family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A family that eats only vegetables" },
              {
                id: "b",
                text: "A multi-generational family with few children in each generation",
              },
              { id: "c", text: "A single-parent family" },
              { id: "d", text: "A wealthy extended family" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Beanpole family",
                statement: "Tall, thin multi-generational family.",
              },
            ],
            steps: [
              {
                reasoning: "Beanpole = generations, few children.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Multi-generational, few children",
            commonErrors: ["Confusing with nuclear family."],
          },
        },
        {
          id: "asoc-u3-dv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'family of choice'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A family arranged by the state" },
              {
                id: "b",
                text: "Chosen relationships, often without biological or legal ties",
              },
              { id: "c", text: "The nuclear family only" },
              { id: "d", text: "A family that adopts children" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Family of choice",
                statement: "Chosen, non-biological ties.",
              },
            ],
            steps: [
              {
                reasoning: "Choice = chosen relationships.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Chosen non-biological ties",
            commonErrors: ["Saying it's legally defined."],
          },
        },
        {
          id: "asoc-u3-dv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a reconstituted (blended) family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A family with no parents" },
              {
                id: "b",
                text: "A family formed when a parent remarries and children from previous relationships join",
              },
              { id: "c", text: "A cohabiting couple without children" },
              { id: "d", text: "A family that never divorces" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reconstituted family",
                statement: "Remarriage blending children.",
              },
            ],
            steps: [
              {
                reasoning: "Reconstituted = step-family.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Remarriage blending children",
            commonErrors: ["Confusing with lone-parent."],
          },
        },
        {
          id: "asoc-u3-dv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'individualisation' help explain about family diversity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no effect on the family" },
              { id: "b", text: "Only rich people have diverse families" },
              { id: "c", text: "Families are forced by law to diversify" },
              {
                id: "d",
                text: "People increasingly choose relationships based on personal preference rather than tradition",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Individualisation",
                statement: "Personal choice over tradition.",
              },
            ],
            steps: [
              {
                reasoning: "Choice replaces tradition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Personal choice over tradition",
            commonErrors: ["Saying diversity is forced."],
          },
        },
        {
          id: "asoc-u3-dv-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 500 families, 22% are lone-parent families. How many families is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 110 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "22% of 500 = 0.22 x 500 = 110.",
              },
            ],
            steps: [
              { reasoning: "Convert 22% to 0.22.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.22 by 500 to get 110.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "110",
            commonErrors: ["Using 22 instead of 0.22."],
          },
        },
        {
          id: "asoc-u3-dv-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 300 couples surveyed, 35% lived together before marriage (cohabitation). How many couples is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 105 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "35% of 300 = 0.35 x 300 = 105.",
              },
            ],
            steps: [
              { reasoning: "Convert 35% to 0.35.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.35 by 300 to get 105.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "105",
            commonErrors: ["Reporting 0.35 instead of 105."],
          },
        },
        {
          id: "asoc-u3-dv-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 400 adults surveyed, 15% chose to remain child-free. How many adults is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "15% of 400 = 0.15 x 400 = 60.",
              },
            ],
            steps: [
              { reasoning: "Convert 15% to 0.15.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.15 by 400 to get 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Using 15 instead of 0.15."],
          },
        },
        {
          id: "asoc-u3-dv-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Lone-parent families rose from 12% to 20% of 600 families. By how many families did the number rise?",
          response: { type: "numeric", parts: [{ label: "a", answer: 48 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in families",
                statement: "20% of 600 = 120; 12% of 600 = 72; rise = 48.",
              },
            ],
            steps: [
              {
                reasoning: "120 families at 20%; 72 at 12%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increase = 120 - 72 = 48.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "48",
            commonErrors: ["Answering 8 (percentage points) not families."],
          },
        },
        {
          id: "asoc-u3-dv-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Same-sex couples rose from 2% to 5% of 1,000 couples in a study. By how many couples did the number rise?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in couples",
                statement: "5% of 1000 = 50; 2% of 1000 = 20; rise = 30.",
              },
            ],
            steps: [
              {
                reasoning: "50 couples at 5%; 20 at 2%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increase = 50 - 20 = 30.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Answering 3 (percentage points) not couples."],
          },
        },
        {
          id: "asoc-u3-dv-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might family diversity reflect class and ethnic differences?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diversity is random with no pattern" },
              { id: "b", text: "All groups have identical family forms" },
              { id: "c", text: "Only middle-class families are diverse" },
              {
                id: "d",
                text: "Different groups have different resources, values and traditions shaping family forms",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diversity patterns",
                statement: "Class/ethnicity shape family forms.",
              },
            ],
            steps: [
              {
                reasoning: "Groups differ in resources/values.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Resources/values differ",
            commonErrors: ["Claiming all groups are identical."],
          },
        },
        {
          id: "asoc-u3-dv-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is cohabitation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sharing a house with strangers" },
              {
                id: "b",
                text: "A couple living together in a sexual relationship without being married",
              },
              { id: "c", text: "Living with parents as an adult" },
              { id: "d", text: "A type of marriage ceremony" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohabitation",
                statement: "Living together unmarried.",
              },
            ],
            steps: [
              {
                reasoning: "Cohabit = unmarried couple.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Unmarried co-residence",
            commonErrors: ["Confusing with marriage."],
          },
        },
        {
          id: "asoc-u3-dv-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Family diversity.",
          parts: [
            { label: "a", prompt: "Define family diversity.", marks: 1 },
            { label: "b", prompt: "Name three diverse family forms.", marks: 2 },
            {
              label: "c",
              prompt: "Explain two reasons for rising family diversity.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain what is meant by a 'family of choice'.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Evaluate the view that the nuclear family is in decline.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diversity",
                statement: "Definition+forms+reasons+choice+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Forms beyond nuclear family.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any three diverse forms.",
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
                reasoning: "Any two factors (divorce/employment/attitudes).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "First factor explained.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Second factor explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Chosen non-biological relationships.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Friends as family example.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Diversity rising vs nuclear persists.",
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
              "(a) diversity (b) forms (c) reasons (d) choice (e) evaluation",
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
              { id: "a", text: "Two jobs at once" },
              { id: "b", text: "Caring for two children" },
              { id: "c", text: "Paid work plus most housework/childcare" },
              { id: "d", text: "Double parenting responsibilities" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Paid work plus most housework/childcare",
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
        {
          id: "asoc-u3-fr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'sandwich generation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parents who only have one child" },
              { id: "b", text: "Retired people living alone" },
              { id: "c", text: "Teenagers caring for siblings" },
              {
                id: "d",
                text: "Adults caring for both their children and their elderly parents",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sandwich generation",
                statement: "Caring for children + elderly parents.",
              },
            ],
            steps: [
              {
                reasoning: "Sandwiched between generations.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Caring for children and elderly",
            commonErrors: ["Confusing with grandparents only."],
          },
        },
        {
          id: "asoc-u3-fr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'breadwinner' role in the traditional family?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The male partner who is the primary earner",
              },
              { id: "b", text: "The child who does homework" },
              { id: "c", text: "The parent who cooks meals" },
              { id: "d", text: "The person who pays all bills equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Breadwinner role",
                statement: "Primary male earner.",
              },
            ],
            steps: [
              {
                reasoning: "Breadwinner = main earner.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Primary male earner",
            commonErrors: ["Saying it's gender-neutral."],
          },
        },
        {
          id: "asoc-u3-fr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did Young and Willmott's symmetrical family thesis claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Women should do all housework" },
              { id: "b", text: "Men never do housework" },
              { id: "c", text: "Family roles are becoming more equal and shared" },
              { id: "d", text: "The family is disappearing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Symmetrical thesis",
                statement: "Roles becoming equal.",
              },
            ],
            steps: [
              {
                reasoning: "Young & Willmott = shared roles.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Roles becoming equal",
            commonErrors: ["Saying it's a feminist critique."],
          },
        },
        {
          id: "asoc-u3-fr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'domestic labour'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paid office work" },
              { id: "b", text: "Childcare provided by the state" },
              {
                id: "c",
                text: "Unpaid housework and childcare performed in the home",
              },
              { id: "d", text: "Work in a factory" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domestic labour",
                statement: "Unpaid home work.",
              },
            ],
            steps: [
              {
                reasoning: "Domestic = unpaid home work.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Unpaid housework/childcare",
            commonErrors: ["Saying it is paid work."],
          },
        },
        {
          id: "asoc-u3-fr-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 300 mothers, 70% said they do the majority of childcare. How many mothers is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 210 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "70% of 300 = 0.7 x 300 = 210.",
              },
            ],
            steps: [
              { reasoning: "Convert 70% to 0.7.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.7 by 300 to get 210.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "210",
            commonErrors: ["Using 70 instead of 0.7."],
          },
        },
        {
          id: "asoc-u3-fr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 250 adults surveyed, 40% described themselves as part of the 'sandwich generation'. How many adults is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "40% of 250 = 0.4 x 250 = 100.",
              },
            ],
            steps: [
              { reasoning: "Convert 40% to 0.4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.4 by 250 to get 100.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "100",
            commonErrors: ["Reporting 0.4 instead of 100."],
          },
        },
        {
          id: "asoc-u3-fr-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Family roles are studied across 3 life stages — childhood, adulthood and old age — with 450 people divided equally. How many people are in each stage?",
          response: { type: "numeric", parts: [{ label: "a", answer: 150 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal groups",
                statement: "450 / 3 = 150 per stage.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total by number of stages.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "450 / 3 = 150.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "150",
            commonErrors: ["Dividing by 2 or 4 instead of 3."],
          },
        },
        {
          id: "asoc-u3-fr-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a study of 200 families, grandparents provide regular childcare in 35% of them. How many families is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 70 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "35% of 200 = 0.35 x 200 = 70.",
              },
            ],
            steps: [
              { reasoning: "Convert 35% to 0.35.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.35 by 200 to get 70.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "70",
            commonErrors: ["Reporting 0.35 instead of 70."],
          },
        },
        {
          id: "asoc-u3-fr-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A woman works 30 paid hours and does 20 hours of domestic labour each week. What is her total weekly work commitment in hours?",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Total work",
                statement: "30 + 20 = 50 hours.",
              },
            ],
            steps: [
              { reasoning: "Add paid and domestic hours.", marks: 1, markCode: "AO1" },
              {
                reasoning: "30 + 20 = 50 hours.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "50",
            commonErrors: ["Counting only paid hours (30)."],
          },
        },
        {
          id: "asoc-u3-fr-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do feminists reject the symmetrical family thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it ignores class differences" },
              { id: "b", text: "Because it was written by men only" },
              { id: "c", text: "Because women still do most domestic labour despite paid work" },
              { id: "d", text: "Because it is supported by all evidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feminist critique",
                statement: "Dual burden persists.",
              },
            ],
            steps: [
              {
                reasoning: "Work adds to, not replaces, domestic load.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Dual burden persists",
            commonErrors: ["Accepting the thesis uncritically."],
          },
        },
        {
          id: "asoc-u3-fr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who typically holds more decision-making power in the family, according to feminist research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Women" },
              { id: "b", text: "Elderly relatives" },
              { id: "c", text: "Men" },
              { id: "d", text: "Children" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family power",
                statement: "Men often hold more power.",
              },
            ],
            steps: [
              {
                reasoning: "Feminists: men dominate decisions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Men",
            commonErrors: ["Saying power is always equal."],
          },
        },
        {
          id: "asoc-u3-fr-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Family roles.",
          parts: [
            { label: "a", prompt: "Define the dual burden.", marks: 1 },
            {
              label: "b",
              prompt: "Explain the symmetrical family thesis.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe how family roles change with age.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain the role of the 'sandwich generation'.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Evaluate the view that family roles are becoming more equal.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family roles",
                statement: "Dual burden+symmetrical+age+sandwich+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Paid work + domestic labour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Young & Willmott — equal roles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Claim explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Children/adults/older roles differ.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Grandparent care mentioned.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Roles explained across life course.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Cares for children + elderly parents.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Dual caring pressure explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Some sharing vs dual burden.",
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
              "(a) dual burden (b) symmetrical (c) age roles (d) sandwich (e) evaluation",
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
