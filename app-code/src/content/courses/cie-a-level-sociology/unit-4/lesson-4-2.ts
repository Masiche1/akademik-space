import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "asoc-u4-lesson-4-2",
  code: "4-2",
  title: "Education and Social Mobility",
  goal: "I CAN describe how education relates to social mobility and curriculum.",
  standards: [
    "9699 P3: Education and social mobility, influences on the curriculum",
  ],
  vocabulary: [
    {
      term: "Social mobility",
      definition: "Movement up or down the social class hierarchy.",
    },
    {
      term: "Intergenerational mobility",
      definition: "Comparing children's class position to parents'.",
    },
    {
      term: "Absolute mobility",
      definition: "Change in a society's overall class structure.",
    },
    {
      term: "Relative mobility",
      definition: "Movement compared to others in society.",
    },
    { term: "Meritocracy", definition: "Rewards based on ability and effort." },
    {
      term: "Credentialism",
      definition: "Society valuing qualifications over actual skills.",
    },
  ],
  concepts: [
    {
      id: "asoc-u4-mobility",
      title: "Education and social mobility",
      skill: "Explain how education affects social mobility.",
      lesson: {
        sections: [
          {
            heading: "Types of mobility",
            body: "Intergenerational: children vs parents' class — vertical (up/down) or horizontal (same level, different job). Absolute: overall structure changes. Relative: compared to peers. Education is the main route to upward mobility in meritocratic societies.",
          },
          {
            heading: "Education as mobility route",
            body: "Qualifications open doors to professional jobs. Meritocracy claim: effort + ability → reward regardless of background. Reality: class still shapes access — middle-class children have cultural capital, better schools, parental support.",
          },
          {
            heading: "Limits of mobility",
            body: "Class background strongly predicts attainment. Education can reproduce inequality (Marxist view) as much as enable mobility. Credential inflation — more qualifications needed for same jobs.",
          },
        ],
        keyFormulas: [
          {
            name: "Mobility",
            statement:
              "Vertical=up/down; Horizontal=same level; Education=main route but class matters.",
          },
        ],
        workedExample: {
          problem: "How can education enable social mobility?",
          solution:
            "Qualifications → professional jobs → higher income/class position than parents.",
        },
      },
      questions: [
        {
          id: "asoc-u4-mb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is intergenerational mobility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geographic movement" },
              { id: "b", text: "Moving within one's lifetime" },
              { id: "c", text: "Comparing children's class to parents'" },
              { id: "d", text: "Changing jobs horizontally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intergenerational",
                statement: "Children vs parents' class.",
              },
            ],
            steps: [
              {
                reasoning: "Intergenerational = generations.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Comparing children's class to parents'",
            commonErrors: ["Confusing with intragenerational."],
          },
        },
        {
          id: "asoc-u4-mb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is credentialism?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Credentialism",
                statement: "Qualifications valued over skills.",
              },
            ],
            steps: [
              {
                reasoning: "Qualifications valued.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "May not reflect real ability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Society values qualifications over actual skills — inflation of credentials.",
            commonErrors: ["Saying it's about certificates only."],
          },
        },
        {
          id: "asoc-u4-mb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that education enables social mobility.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education & mobility",
                statement: "Route vs reproduction.",
              },
            ],
            steps: [
              {
                reasoning: "Qualifications open opportunities.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Class still shapes access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cultural capital advantage.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Education can enable mobility but class background still strongly influences attainment.",
            commonErrors: ["One-sided claim."],
          },
        },
        {
          id: "asoc-u4-mb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Education and mobility.",
          parts: [
            { label: "a", prompt: "Define social mobility.", marks: 1 },
            { label: "b", prompt: "Vertical vs horizontal?", marks: 2 },
            { label: "c", prompt: "How education aids mobility?", marks: 3 },
            { label: "d", prompt: "Limits of mobility?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mobility",
                statement: "Definition+types+route+limits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Class movement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Up/down vs same level.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Qualifications → jobs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Meritocracy claim.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Class shapes access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cultural capital.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Reproduction possible.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) mobility (b) types (c) route (d) limits",
          },
        },
        {
          id: "asoc-u4-mb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is vertical social mobility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Movement up or down the class hierarchy" },
              { id: "b", text: "Moving to a different town for work" },
              { id: "c", text: "Gaining a qualification without changing class" },
              { id: "d", text: "Changing from one manual job to another" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertical mobility", statement: "Movement up or down the hierarchy." },
            ],
            steps: [{ reasoning: "Vertical mobility changes class position.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Movement up or down the class hierarchy",
            commonErrors: ["Confusing vertical mobility with horizontal movement."],
          },
        },
        {
          id: "asoc-u4-mb-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does absolute mobility differ from relative mobility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absolute concerns overall class structure; relative concerns position compared with peers" },
              { id: "b", text: "They are identical terms" },
              { id: "c", text: "Absolute means moving abroad; relative means moving house" },
              { id: "d", text: "Absolute applies only to men; relative only to women" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute and relative mobility", statement: "Overall structure versus peers." },
            ],
            steps: [{ reasoning: "The distinction is between structural change and comparative position.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Absolute concerns overall class structure; relative concerns position compared with peers",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "asoc-u4-mb-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which resource most directly gives middle-class pupils an advantage in school?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Freedom from teacher expectations" },
              { id: "b", text: "Guaranteed university places" },
              { id: "c", text: "Cultural capital such as knowledge and attitudes valued by school" },
              { id: "d", text: "Automatic exemption from all exams" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural capital", statement: "Valued knowledge, skills and attitudes." },
            ],
            steps: [{ reasoning: "Cultural capital helps pupils match school expectations.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Cultural capital such as knowledge and attitudes valued by school",
            commonErrors: ["Confusing cultural capital with material resources alone."],
          },
        },
        {
          id: "asoc-u4-mb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is credential inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More qualifications are required for jobs that once needed fewer" },
              { id: "b", text: "Qualifications become cheaper over time" },
              { id: "c", text: "Students receive higher grades automatically" },
              { id: "d", text: "Employers stop using qualifications entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Credential inflation", statement: "Rising qualification demands." },
            ],
            steps: [{ reasoning: "Credential inflation means credentials expand faster than job requirements.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** More qualifications are required for jobs that once needed fewer",
            commonErrors: ["Confusing credential inflation with rising grades."],
          },
        },
        {
          id: "asoc-u4-mb-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pattern best shows that education can reproduce inequality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Qualifications have no effect on jobs" },
              { id: "b", text: "Only ability determines every result" },
              { id: "c", text: "Children from advantaged backgrounds are more likely to gain high qualifications" },
              { id: "d", text: "All pupils achieve identical outcomes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Educational reproduction", statement: "Advantage tends to pass between generations." },
            ],
            steps: [{ reasoning: "Linked attainment shows how inequality can be reproduced.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Children from advantaged backgrounds are more likely to gain high qualifications",
            commonErrors: ["Assuming education always creates mobility."],
          },
        },
        {
          id: "asoc-u4-mb-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement is the strongest criticism of the claim that education is a meritocracy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Some pupils work harder than others" },
              { id: "b", text: "Schools have different subjects" },
              { id: "c", text: "Family background, cultural capital and school quality still affect attainment" },
              { id: "d", text: "Qualifications can be useful to employers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Meritocracy critique", statement: "Unequal starting points affect outcomes." },
            ],
            steps: [{ reasoning: "Meritocracy claims rewards depend mainly on ability and effort.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(c)** Family background, cultural capital and school quality still affect attainment",
            commonErrors: ["Choosing a neutral feature rather than evidence against meritocracy."],
          },
        },
        {
          id: "asoc-u4-mb-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a cohort of 300 pupils, 28% moved into a higher occupational class than their parents. How many pupils moved up?",
          response: { type: "numeric", parts: [{ label: "a", answer: 84 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mobility proportion", statement: "28% of 300 = 0.28 x 300." },
            ],
            steps: [
              { reasoning: "Convert 28% to a decimal.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply 0.28 by 300.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "84",
            commonErrors: ["Using 28 as a count rather than a percentage."],
          },
        },
        {
          id: "asoc-u4-mb-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The professional class grows from 12% to 18% of the workforce. Calculate the percentage-point increase.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage-point change", statement: "18 - 12 = 6." },
            ],
            steps: [
              { reasoning: "Identify the two percentages.", marks: 1, markCode: "AO1" },
              { reasoning: "Subtract the old percentage from the new one.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "6",
            commonErrors: ["Dividing 6 by 12 and calling the result percentage points."],
          },
        },
        {
          id: "asoc-u4-mb-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 250 graduates, 90 entered professional jobs. What percentage entered professional jobs?",
          response: { type: "numeric", parts: [{ label: "a", answer: 36 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage formula", statement: "(90 / 250) x 100 = 36." },
            ],
            steps: [
              { reasoning: "Divide 90 by 250.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply by 100.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "36",
            commonErrors: ["Reporting 0.36 instead of 36%."],
          },
        },
        {
          id: "asoc-u4-mb-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A school has 400 pupils. If 15% come from low-income households, how many pupils is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "15% of 400 = 0.15 x 400." },
            ],
            steps: [
              { reasoning: "Convert 15% to a decimal.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply 0.15 by 400.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "60",
            commonErrors: ["Using 1.5 instead of 0.15."],
          },
        },
        {
          id: "asoc-u4-mb-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Among 120 working-class graduates, 42 obtain degree-level jobs. What percentage is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 35 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage formula", statement: "(42 / 120) x 100 = 35." },
            ],
            steps: [
              { reasoning: "Divide 42 by 120.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply by 100.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "35",
            commonErrors: ["Subtracting 42 from 120 before converting to a percentage."],
          },
        },
        {
          id: "asoc-u4-mb-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that education is the main route to social mobility.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Education and mobility", statement: "Opportunity versus reproduction." },
            ],
            steps: [
              { reasoning: "Qualifications can open access to professional occupations.", marks: 1, markCode: "AO1" },
              { reasoning: "Meritocratic ideals suggest effort and ability should matter.", marks: 1, markCode: "AO1" },
              { reasoning: "Class background, cultural capital and school quality still affect attainment.", marks: 1, markCode: "AO2" },
              { reasoning: "A balanced judgement recognises mobility and limits.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Education enables some mobility but does not fully overcome class-based inequalities.",
            commonErrors: ["Arguing only that education always creates mobility."],
          },
        },
      ],
    },
    {
      id: "asoc-u4-curriculum",
      title: "Influences on the Curriculum",
      skill: "Explain who controls the curriculum and why it matters.",
      lesson: {
        sections: [
          {
            heading: "Who controls the curriculum",
            body: "Government sets national curriculum and exams. Teachers interpret and deliver it. Publishers produce textbooks. Professional bodies influence subjects. Exam boards shape what's tested.",
          },
          {
            heading: "Curriculum debates",
            body: "Knowledge vs skills debate. Whose knowledge counts — middle-class 'legitimate' knowledge vs working-class culture. Marxists: curriculum serves capitalism. Feminists: male-dominated canon. Postmodernists: fragmented knowledge.",
          },
          {
            heading: "Hidden curriculum effects",
            body: "What school teaches beyond subjects — punctuality, obedience, competition, deference to authority. Shapes attitudes and future workers/citizens.",
          },
        ],
        keyFormulas: [
          {
            name: "Curriculum",
            statement:
              "Government sets; debates over knowledge/skills and whose knowledge counts.",
          },
        ],
        workedExample: {
          problem: "Why does the curriculum matter sociologically?",
          solution:
            "It reflects power relations — deciding what knowledge is 'legitimate' shapes class/gender outcomes.",
        },
      },
      questions: [
        {
          id: "asoc-u4-cu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who primarily controls the national curriculum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teachers" },
              { id: "b", text: "Students" },
              { id: "c", text: "Publishers" },
              { id: "d", text: "Government" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Curriculum control",
                statement: "Government sets it.",
              },
            ],
            steps: [
              { reasoning: "Government controls.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Government",
            commonErrors: ["Saying teachers decide."],
          },
        },
        {
          id: "asoc-u4-cu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the hidden curriculum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement: "Unwritten norms and values.",
              },
            ],
            steps: [
              {
                reasoning: "Beyond formal subjects.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Teaches norms/attitudes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Unwritten lessons about norms, obedience, punctuality and values.",
            commonErrors: ["Confusing with formal curriculum."],
          },
        },
        {
          id: "asoc-u4-cu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the curriculum reflects middle-class knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Curriculum bias",
                statement: "Legitimate knowledge vs class culture.",
              },
            ],
            steps: [
              {
                reasoning: "Middle-class 'legitimate' knowledge valued.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Working-class culture devalued.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reproduces inequality.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Curriculum often reflects middle-class knowledge, disadvantaging working-class students.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u4-cu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Curriculum influences.",
          parts: [
            { label: "a", prompt: "Who controls curriculum?", marks: 1 },
            { label: "b", prompt: "Hidden curriculum?", marks: 2 },
            { label: "c", prompt: "Knowledge vs skills debate?", marks: 3 },
            { label: "d", prompt: "Whose knowledge counts?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Curriculum",
                statement: "Control+hidden+debates+knowledge.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Government.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Unwritten norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Beyond subjects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "What schools should teach.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Debate exists.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Both have value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Class bias in knowledge.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Gender bias too.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Power relations.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) government (b) hidden (c) debate (d) knowledge",
          },
        },
        {
          id: "asoc-u4-cu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What role do teachers play in the curriculum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They write every national examination" },
              { id: "b", text: "They decide the entire national curriculum alone" },
              { id: "c", text: "They have no influence on what is taught" },
              { id: "d", text: "They interpret and deliver the prescribed content" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Teacher role", statement: "Interpretation and delivery." },
            ],
            steps: [{ reasoning: "Teachers implement and interpret curriculum content.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** They interpret and deliver the prescribed content",
            commonErrors: ["Confusing teachers with curriculum designers."],
          },
        },
        {
          id: "asoc-u4-cu-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How can exam boards influence the curriculum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By deciding pupils' family backgrounds" },
              { id: "b", text: "By replacing all teachers in schools" },
              { id: "c", text: "By setting pupils' future occupations directly" },
              { id: "d", text: "By shaping what knowledge and skills are tested" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exam boards", statement: "Assessment shapes what is valued." },
            ],
            steps: [{ reasoning: "Assessment priorities influence curriculum emphasis.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** By shaping what knowledge and skills are tested",
            commonErrors: ["Thinking exam boards only mark papers."],
          },
        },
        {
          id: "asoc-u4-cu-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the central knowledge-versus-skills debate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether pupils should choose their own schools" },
              { id: "b", text: "Whether schools should teach mathematics" },
              { id: "c", text: "Whether teachers should be paid more" },
              { id: "d", text: "Whether schools should prioritise subject knowledge or practical skills" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Knowledge versus skills", statement: "What schools should emphasise." },
            ],
            steps: [{ reasoning: "The debate concerns curriculum priorities.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** Whether schools should prioritise subject knowledge or practical skills",
            commonErrors: ["Treating it as a debate about school funding."],
          },
        },
        {
          id: "asoc-u4-cu-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How would a Marxist criticise the school curriculum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It prevents all forms of competition" },
              { id: "b", text: "It is completely free of all social influence" },
              { id: "c", text: "It guarantees equal outcomes for every pupil" },
              { id: "d", text: "It legitimises knowledge that serves capitalist interests" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Marxist curriculum", statement: "Knowledge reflects power relations." },
            ],
            steps: [{ reasoning: "Marxists argue curriculum content serves dominant economic interests.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** It legitimises knowledge that serves capitalist interests",
            commonErrors: ["Assuming curriculum content is politically neutral."],
          },
        },
        {
          id: "asoc-u4-cu-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is meant by 'whose knowledge counts'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Which teachers mark the hardest papers" },
              { id: "b", text: "How many pupils pass exams" },
              { id: "c", text: "How much money schools spend on books" },
              { id: "d", text: "Which groups' knowledge is treated as legitimate in school" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Whose knowledge counts", statement: "Legitimate knowledge reflects power." },
            ],
            steps: [{ reasoning: "The phrase asks which cultural knowledge is valued.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** Which groups' knowledge is treated as legitimate in school",
            commonErrors: ["Interpreting it as a question about exam statistics."],
          },
        },
        {
          id: "asoc-u4-cu-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which criticism is most associated with a feminist analysis of the curriculum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The curriculum contains no subjects at all" },
              { id: "b", text: "Girls are excluded from every school subject" },
              { id: "c", text: "Teachers refuse to teach science" },
              { id: "d", text: "The canon often privileges male authors and perspectives" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feminist curriculum", statement: "Gender bias in knowledge." },
            ],
            steps: [{ reasoning: "Feminists highlight male dominance in the curriculum canon.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** The canon often privileges male authors and perspectives",
            commonErrors: ["Confusing curriculum bias with pupil behaviour."],
          },
        },
        {
          id: "asoc-u4-cu-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 250 pupils, 32% say the curriculum reflects their own culture. How many pupils is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 80 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "32% of 250 = 0.32 x 250." },
            ],
            steps: [
              { reasoning: "Convert 32% to a decimal.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply 0.32 by 250.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "80",
            commonErrors: ["Multiplying by 32 instead of 0.32."],
          },
        },
        {
          id: "asoc-u4-cu-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A school offers 20 subjects. If 5 are vocational, what percentage of subjects are vocational?",
          response: { type: "numeric", parts: [{ label: "a", answer: 25 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage formula", statement: "(5 / 20) x 100 = 25." },
            ],
            steps: [
              { reasoning: "Divide the vocational subjects by the total.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply by 100.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "25",
            commonErrors: ["Reporting 0.25 instead of a percentage."],
          },
        },
        {
          id: "asoc-u4-cu-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a sample of 400 pupils, 76% say they understand the purpose of lessons. How many pupils is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 304 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "76% of 400 = 0.76 x 400." },
            ],
            steps: [
              { reasoning: "Convert 76% to a decimal.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply 0.76 by 400.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "304",
            commonErrors: ["Using 7.6 instead of 0.76."],
          },
        },
        {
          id: "asoc-u4-cu-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 120 examined students, 18 choose humanities subjects. What percentage choose humanities?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage formula", statement: "(18 / 120) x 100 = 15." },
            ],
            steps: [
              { reasoning: "Divide 18 by 120.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply by 100.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "15",
            commonErrors: ["Subtracting instead of calculating a proportion."],
          },
        },
        {
          id: "asoc-u4-cu-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A curriculum review finds that 9 of 60 schools changed their schemes of work. What percentage changed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage formula", statement: "(9 / 60) x 100 = 15." },
            ],
            steps: [
              { reasoning: "Divide 9 by 60.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply by 100.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "15",
            commonErrors: ["Using 60 as the numerator."],
          },
        },
        {
          id: "asoc-u4-cu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the school curriculum reflects power relations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Curriculum and power", statement: "Legitimate knowledge versus equality." },
            ],
            steps: [
              { reasoning: "Government and exam boards control what is taught and tested.", marks: 1, markCode: "AO1" },
              { reasoning: "Marxists and feminists argue curriculum content reflects dominant interests.", marks: 1, markCode: "AO1" },
              { reasoning: "Evidence shows middle-class, male-centred knowledge is often privileged.", marks: 1, markCode: "AO2" },
              { reasoning: "A balanced judgement notes curriculum reforms and counter-arguments.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The curriculum is shaped by power, though reforms and teacher interpretation can widen representation.",
            commonErrors: ["Claiming the curriculum has no social influence."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u4-4-2-notes",
      title: "Mobility and curriculum — notes",
      summary:
        "Social mobility types, education as route, curriculum control and bias.",
      sections: [
        {
          heading: "Mobility",
          body: "Vertical/horizontal; intergenerational; education main route but class still shapes outcomes.",
        },
        {
          heading: "Curriculum",
          body: "Government controls; hidden curriculum teaches norms; 'whose knowledge counts' reflects power.",
        },
      ],
    },
  ],
};
