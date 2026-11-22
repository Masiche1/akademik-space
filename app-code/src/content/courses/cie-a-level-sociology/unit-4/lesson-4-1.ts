import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "asoc-u4-lesson-4-1",
  code: "4-1",
  title: "Theories of Education",
  goal: "I CAN evaluate functionalist, Marxist, feminist and interactionist views of education.",
  standards: ["9699 P3: Theories about the role of education"],
  vocabulary: [
    {
      term: "Hidden curriculum",
      definition: "Unwritten lessons schools teach about norms and values.",
    },
    {
      term: "Cultural capital",
      definition: "Knowledge, skills and attitudes valued by society.",
    },
    {
      term: "Social reproduction",
      definition: "Education reproducing existing social inequalities.",
    },
    {
      term: "Meritocracy",
      definition: "System where rewards are based on ability and effort.",
    },
    { term: "Streaming", definition: "Grouping students by ability." },
    {
      term: "Labelling",
      definition:
        "Teachers attaching labels to students that shape expectations.",
    },
  ],
  concepts: [
    {
      id: "asoc-u4-functionalism",
      title: "Functionalist view of education",
      skill: "Explain the functionalist role of education in society.",
      lesson: {
        sections: [
          {
            heading: "Durkheim and Parsons",
            body: "Durkheim: school teaches shared values — social solidarity. Parsons: school is a bridge between family (particularistic, ascribed status) and work (universalistic, achieved status). Teaches meritocratic values.",
          },
          {
            heading: "Davis and Moore",
            body: "Education sorts people into roles by ability — 'sifting and sorting'. Society needs different skills; education allocates people accordingly, rewarding the most able. Meritocratic — positions match talent.",
          },
          {
            heading: "Criticisms",
            body: "Ignores inequalities in access and outcomes. Assumes meritocracy that evidence challenges — class/ethnicity still shape attainment. Doesn't explain hidden curriculum and labelling.",
          },
        ],
        keyFormulas: [
          {
            name: "Functionalist education",
            statement: "Social solidarity + meritocratic sorting.",
          },
        ],
        workedExample: {
          problem: "How does functionalism see education's role?",
          solution:
            "Teaches shared values and sorts people into roles by ability — maintaining social order meritocratically.",
        },
      },
      questions: [
        {
          id: "asoc-u4-fu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Durkheim say education teaches?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individual competition only" },
              { id: "b", text: "Shared values and social solidarity" },
              { id: "c", text: "Revolution against capitalism" },
              { id: "d", text: "Religious doctrine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Durkheim",
                statement: "Shared values, social solidarity.",
              },
            ],
            steps: [
              {
                reasoning: "Durkheim = solidarity.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Shared values and social solidarity",
            commonErrors: ["Confusing with Marx."],
          },
        },
        {
          id: "asoc-u4-fu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the hidden curriculum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement: "Unwritten lessons about norms.",
              },
            ],
            steps: [
              {
                reasoning: "Unwritten norms/values.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Beyond formal subjects.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Unwritten lessons schools teach about norms, obedience and values.",
            commonErrors: ["Saying it's secret syllabus."],
          },
        },
        {
          id: "asoc-u4-fu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the functionalist view of education.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist education",
                statement: "Order vs inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Teaches values, sorts roles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Maintains social order.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ignores inequality/labelling.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Positive functions but ignores real inequalities in attainment.",
            commonErrors: ["Description only."],
          },
        },
        {
          id: "asoc-u4-fu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Functionalist education.",
          parts: [
            { label: "a", prompt: "Durkheim's view?", marks: 2 },
            { label: "b", prompt: "Parsons' view?", marks: 2 },
            { label: "c", prompt: "Davis & Moore?", marks: 3 },
            { label: "d", prompt: "Criticisms?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalism",
                statement: "Durkheim+Parsons+Davis-Moore+critique.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Social solidarity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Shared values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Bridge to work.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Universalistic values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Sifting and sorting.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Roles by ability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Meritocracy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Ignores inequality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Meritocracy questioned.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) Durkheim (b) Parsons (c) Davis-Moore (d) criticisms",
          },
        },
        {
          id: "asoc-u4-fu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For Durkheim, what is the main social function of education?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Training students only for manual labour" },
              { id: "b", text: "Replacing religion in every society" },
              { id: "c", text: "Creating social solidarity through shared values" },
              { id: "d", text: "Eliminating all forms of inequality" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Durkheim", statement: "Education creates social solidarity." },
            ],
            steps: [{ reasoning: "Durkheim links school to shared values and solidarity.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Creating social solidarity through shared values",
            commonErrors: ["Confusing Durkheim with a conflict theorist."],
          },
        },
        {
          id: "asoc-u4-fu-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "According to Parsons, what changes when a child moves from family to school?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Particularistic, ascribed roles become universalistic, achieved roles" },
              { id: "b", text: "All status differences disappear" },
              { id: "c", text: "Academic success becomes impossible" },
              { id: "d", text: "Family loyalties are strengthened" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parsons", statement: "School is a bridge from family to work." },
            ],
            steps: [{ reasoning: "Parsons sees school preparing students for universalistic achievement.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Particularistic, ascribed roles become universalistic, achieved roles",
            commonErrors: ["Reversing the direction of the transition."],
          },
        },
        {
          id: "asoc-u4-fu-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Davis and Moore mean by 'sifting and sorting'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teachers rank students without using evidence" },
              { id: "b", text: "Education allocates people to roles according to ability" },
              { id: "c", text: "Schools physically separate students by wealth" },
              { id: "d", text: "Employers choose students directly from schools" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Davis and Moore", statement: "Education sorts people into social roles." },
            ],
            steps: [{ reasoning: "The phrase describes meritocratic allocation of roles.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Education allocates people to roles according to ability",
            commonErrors: ["Treating it as tracking only, without the role-allocation idea."],
          },
        },
        {
          id: "asoc-u4-fu-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which criticism most directly challenges the functionalist claim that education is meritocratic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teachers sometimes work long hours" },
              { id: "b", text: "Students enjoy some school subjects" },
              { id: "c", text: "Different schools offer different facilities" },
              { id: "d", text: "Class, ethnicity and gender still shape attainment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Functionalist critique", statement: "Evidence challenges meritocracy." },
            ],
            steps: [{ reasoning: "Persistent attainment gaps contradict rewards based only on merit.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(d)** Class, ethnicity and gender still shape attainment",
            commonErrors: ["Identifying a feature of schooling rather than a meritocracy critique."],
          },
        },
        {
          id: "asoc-u4-fu-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best captures the functionalist view of the hidden curriculum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a secret syllabus controlled by parents" },
              { id: "b", text: "It has no connection with future work roles" },
              { id: "c", text: "It teaches pupils the norms needed for social cohesion" },
              { id: "d", text: "It mainly prepares pupils for political protest" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hidden curriculum", statement: "Unwritten norms and values." },
            ],
            steps: [{ reasoning: "Functionalists see these norms as supporting order and work roles.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** It teaches pupils the norms needed for social cohesion",
            commonErrors: ["Treating the hidden curriculum as intentionally secret content."],
          },
        },
        {
          id: "asoc-u4-fu-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pairing best summarises functionalist education theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social solidarity plus meritocratic role allocation" },
              { id: "b", text: "Cultural capital plus credential inflation" },
              { id: "c", text: "Class reproduction plus revolutionary consciousness" },
              { id: "d", text: "Gender stereotyping plus teacher labelling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Functionalism", statement: "Order, solidarity and meritocratic sorting." },
            ],
            steps: [{ reasoning: "The other options belong mainly to conflict or interactionist views.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Social solidarity plus meritocratic role allocation",
            commonErrors: ["Confusing functionalism with Marxist or interactionist theory."],
          },
        },
        {
          id: "asoc-u4-fu-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a sample of 240 students, 35% say that school taught them shared values. How many students is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 84 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "35% of 240 = 0.35 x 240." },
            ],
            steps: [
              { reasoning: "Convert 35% to a decimal.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply 0.35 by 240.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "84",
            commonErrors: ["Multiplying 35 by 240 without converting the percentage."],
          },
        },
        {
          id: "asoc-u4-fu-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Top-grade attainment is 78% for middle-class pupils and 54% for working-class pupils. Calculate the percentage-point gap.",
          response: { type: "numeric", parts: [{ label: "a", answer: 24 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage-point gap", statement: "78 - 54 = 24." },
            ],
            steps: [
              { reasoning: "Identify the two attainment rates.", marks: 1, markCode: "AO1" },
              { reasoning: "Subtract to find the gap in percentage points.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "24",
            commonErrors: ["Calculating a relative percentage instead of a percentage-point difference."],
          },
        },
        {
          id: "asoc-u4-fu-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A school places 45% of its 180 students in the top set. How many students are in the top set?",
          response: { type: "numeric", parts: [{ label: "a", answer: 81 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Streaming calculation", statement: "45% of 180 = 0.45 x 180." },
            ],
            steps: [
              { reasoning: "Convert 45% to a decimal.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply 0.45 by 180.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "81",
            commonErrors: ["Adding 45 to 180 instead of finding a proportion."],
          },
        },
        {
          id: "asoc-u4-fu-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 500 pupils, 18% attend an independent school. How many pupils is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Survey proportion", statement: "18% of 500 = 0.18 x 500." },
            ],
            steps: [
              { reasoning: "Convert 18% to a decimal.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply 0.18 by 500.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "90",
            commonErrors: ["Using 1.8 instead of 0.18."],
          },
        },
        {
          id: "asoc-u4-fu-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 150 graduates, 60 enter professional occupations. What percentage of the graduates enter professional occupations?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage formula", statement: "(part / whole) x 100." },
            ],
            steps: [
              { reasoning: "Divide 60 by 150.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply by 100 to give a percentage.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "40",
            commonErrors: ["Leaving the answer as the decimal 0.4."],
          },
        },
        {
          id: "asoc-u4-fu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the functionalist view that education maintains social order through meritocratic sorting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Functionalist evaluation", statement: "Social order versus persistent inequality." },
            ],
            steps: [
              { reasoning: "Durkheim and Parsons link education to shared values and preparation for work.", marks: 1, markCode: "AO1" },
              { reasoning: "Davis and Moore argue roles are allocated by ability.", marks: 1, markCode: "AO1" },
              { reasoning: "Evidence shows class, ethnicity and gender affect attainment, questioning meritocracy.", marks: 1, markCode: "AO2" },
              { reasoning: "A balanced judgement recognises both functions and limitations.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Education may promote cohesion, but attainment gaps challenge the claim that rewards are purely merit-based.",
            commonErrors: ["Repeating functionalist claims without evaluation."],
          },
        },
      ],
    },
    {
      id: "asoc-u4-conflict",
      title: "Marxist, feminist and interactionist views",
      skill: "Explain conflict and interactionist theories of education.",
      lesson: {
        sections: [
          {
            heading: "Marxist view",
            body: "Bowles & Gintis: 'correspondence principle' — school mirrors workplace (hierarchy, obedience, competition). Hidden curriculum reproduces class inequality. Education serves capitalism by producing compliant workers.",
          },
          {
            heading: "Feminist and interactionist views",
            body: "Feminists: school reinforces gender stereotypes — boys 'succeed', girls steered to caring subjects. Interactionists (Labelling theory): teachers label students 'bright'/'thick' — self-fulfilling prophecy affects achievement. Pygmalion effect (Rosenthal).",
          },
          {
            heading: "Evaluation",
            body: "Conflict theories explain inequality well but underplay individual agency. Interactionism explains classroom processes but ignores wider structural forces.",
          },
        ],
        keyFormulas: [
          {
            name: "Conflict theories",
            statement:
              "Marxist=correspondence; Feminist=gender; Interactionist=labelling.",
          },
        ],
        workedExample: {
          problem: "What is the correspondence principle?",
          solution:
            "School structure mirrors workplace — teaching obedience and hierarchy reproduces class relations.",
        },
      },
      questions: [
        {
          id: "asoc-u4-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correspondence principle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "School mirrors workplace structure" },
              { id: "b", text: "Teachers correspond with parents" },
              { id: "c", text: "School matches student abilities" },
              { id: "d", text: "Subjects correspond to jobs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correspondence",
                statement: "School mirrors workplace.",
              },
            ],
            steps: [
              { reasoning: "Bowles & Gintis.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** School mirrors workplace structure",
            commonErrors: ["Confusing with streaming."],
          },
        },
        {
          id: "asoc-u4-co-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the self-fulfilling prophecy in education?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Self-fulfilling prophecy",
                statement: "Labels shape student performance.",
              },
            ],
            steps: [
              {
                reasoning: "Teacher labels → expectations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Student performs to match.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Teacher labels ('bright'/'thick') shape student achievement.",
            commonErrors: ["Saying it's about predictions only."],
          },
        },
        {
          id: "asoc-u4-co-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare Marxist and interactionist views of education.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist vs interactionist",
                statement: "Structural reproduction vs classroom labelling.",
              },
            ],
            steps: [
              {
                reasoning: "Marxist: reproduces class.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Interactionist: labelling effects.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Macro vs micro focus.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Marxist=structural reproduction; interactionist=micro-level labelling.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u4-co-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Conflict and interactionist theories.",
          parts: [
            { label: "a", prompt: "Correspondence principle?", marks: 2 },
            { label: "b", prompt: "Marxist view overall?", marks: 3 },
            { label: "c", prompt: "Labelling theory?", marks: 2 },
            { label: "d", prompt: "Feminist critique?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education theories",
                statement: "Correspondence+Marxist+labelling+feminist.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "School=workplace.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Reproduces workers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Hidden curriculum.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Serves capitalism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reproduces inequality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Labels → expectations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Gender stereotypes reinforced.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Girls steered to 'caring' subjects.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) correspondence (b) Marxist (c) labelling (d) feminist",
          },
        },
        {
          id: "asoc-u4-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who proposed the correspondence principle in education?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Durkheim and Parsons" },
              { id: "b", text: "Rosenthal and Jacobson" },
              { id: "c", text: "Herman and Chomsky" },
              { id: "d", text: "Bowles and Gintis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correspondence principle", statement: "Bowles and Gintis." },
            ],
            steps: [{ reasoning: "The principle is associated with Bowles and Gintis.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** Bowles and Gintis",
            commonErrors: ["Attributing it to functionalist theorists."],
          },
        },
        {
          id: "asoc-u4-co-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the Marxist view, what does the hidden curriculum mainly reproduce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religious beliefs across all classes" },
              { id: "b", text: "Cooperation without any power differences" },
              { id: "c", text: "Independent critical thinking about capitalism" },
              { id: "d", text: "Obedience, hierarchy and acceptance of authority" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Marxist hidden curriculum", statement: "It prepares compliant workers." },
            ],
            steps: [{ reasoning: "Marxists link school norms to workplace discipline and class relations.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** Obedience, hierarchy and acceptance of authority",
            commonErrors: ["Confusing the hidden curriculum with the formal syllabus."],
          },
        },
        {
          id: "asoc-u4-co-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Pygmalion effect in education?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Streaming removes all achievement gaps" },
              { id: "b", text: "Higher teacher expectations can raise student performance" },
              { id: "c", text: "Students always achieve exactly what teachers predict" },
              { id: "d", text: "Ability tests determine every future outcome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pygmalion effect", statement: "Expectations shape achievement." },
            ],
            steps: [{ reasoning: "The effect describes performance responding to expectations.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Higher teacher expectations can raise student performance",
            commonErrors: ["Saying expectations have no effect on outcomes."],
          },
        },
        {
          id: "asoc-u4-co-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which claim best represents the feminist view of education?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Schools reinforce gender stereotypes and unequal subject choices" },
              { id: "b", text: "Gender is irrelevant to educational achievement" },
              { id: "c", text: "Girls are labelled as naturally better at every subject" },
              { id: "d", text: "Schools have completely removed all gender differences" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feminist education", statement: "Gender stereotypes are reproduced." },
            ],
            steps: [{ reasoning: "Feminists focus on how schooling reproduces gendered expectations.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Schools reinforce gender stereotypes and unequal subject choices",
            commonErrors: ["Confusing feminist theory with functionalism."],
          },
        },
        {
          id: "asoc-u4-co-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is interactionism described as a micro-level approach?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It focuses on classroom interactions, labels and interpretations" },
              { id: "b", text: "It studies school buildings rather than behaviour" },
              { id: "c", text: "It ignores teachers and pupils completely" },
              { id: "d", text: "It examines only national economic structures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interactionism", statement: "Micro-level classroom processes." },
            ],
            steps: [{ reasoning: "Interactionists study everyday teacher-pupil interaction.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** It focuses on classroom interactions, labels and interpretations",
            commonErrors: ["Treating interactionism as a structural theory."],
          },
        },
        {
          id: "asoc-u4-co-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main limitation of interactionist labelling theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It assumes every student responds in exactly the same way" },
              { id: "b", text: "It underplays wider structural inequalities such as class and the economy" },
              { id: "c", text: "It only applies to university students" },
              { id: "d", text: "It denies that teachers can ever label students" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interactionist limitation", statement: "Micro focus may neglect macro structures." },
            ],
            steps: [{ reasoning: "Labelling theory explains classroom processes but can miss wider social forces.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** It underplays wider structural inequalities such as class and the economy",
            commonErrors: ["Confusing a limitation with the theory's main claim."],
          },
        },
        {
          id: "asoc-u4-co-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a sample of 200 pupils, 62% say they have been labelled by a teacher. How many pupils is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 124 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "62% of 200 = 0.62 x 200." },
            ],
            steps: [
              { reasoning: "Convert 62% to a decimal.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply 0.62 by 200.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "124",
            commonErrors: ["Calculating 62% of a different sample size."],
          },
        },
        {
          id: "asoc-u4-co-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Girls achieve a mean grade score of 68 and boys 61 in a school study. Calculate the difference between the two mean scores.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mean difference", statement: "68 - 61 = 7." },
            ],
            steps: [
              { reasoning: "Identify the two mean scores.", marks: 1, markCode: "AO1" },
              { reasoning: "Subtract the smaller score from the larger.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "7",
            commonErrors: ["Dividing by the number of pupils instead of subtracting the means."],
          },
        },
        {
          id: "asoc-u4-co-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A researcher observes 8 teacher-pupil interactions in a 40-minute lesson. How many interactions occur per 10 minutes on average?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate calculation", statement: "8 / 40 x 10 = 2." },
            ],
            steps: [
              { reasoning: "Find interactions per minute or scale the rate.", marks: 1, markCode: "AO1" },
              { reasoning: "Convert the rate to per 10 minutes.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
            commonErrors: ["Reporting 0.2 without converting to a per-10-minute rate."],
          },
        },
        {
          id: "asoc-u4-co-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a sample of 300 pupils, 45 report feeling stereotyped at school. What percentage is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage formula", statement: "(45 / 300) x 100 = 15." },
            ],
            steps: [
              { reasoning: "Divide the number reporting by the sample size.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply by 100 to express it as a percentage.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "15",
            commonErrors: ["Leaving the answer as 0.15 instead of a percentage."],
          },
        },
        {
          id: "asoc-u4-co-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A class has 24 pupils. If 5 pupils are placed in the bottom set, what percentage of the class is in the bottom set?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20.8333, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage formula", statement: "(5 / 24) x 100." },
            ],
            steps: [
              { reasoning: "Divide 5 by 24.", marks: 1, markCode: "AO1" },
              { reasoning: "Multiply by 100 and round appropriately.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "20.8",
            commonErrors: ["Reporting 24 as the denominator incorrectly."],
          },
        },
        {
          id: "asoc-u4-co-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare Marxist, feminist and interactionist explanations of educational inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conflict and interactionist comparison", statement: "Structural reproduction, gender, labels and micro processes." },
            ],
            steps: [
              { reasoning: "Marxists explain inequality through correspondence and reproduction of class relations.", marks: 1, markCode: "AO1" },
              { reasoning: "Feminists emphasise gender stereotypes and unequal subject pathways.", marks: 1, markCode: "AO1" },
              { reasoning: "Interactionists focus on teacher labels, expectations and self-fulfilling prophecy.", marks: 1, markCode: "AO1" },
              { reasoning: "A balanced comparison notes macro structures and micro classroom processes.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Marxists and feminists stress structural reproduction, while interactionists explain classroom-level labelling processes.",
            commonErrors: ["Treating the three theories as identical."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u4-4-1-notes",
      title: "Theories of education — notes",
      summary:
        "Functionalist, Marxist, feminist, interactionist views; hidden curriculum.",
      sections: [
        {
          heading: "Consensus",
          body: "Durkheim: solidarity; Parsons: bridge to work; Davis-Moore: meritocratic sorting.",
        },
        {
          heading: "Conflict",
          body: "Marxist: correspondence principle; feminist: gender stereotypes; interactionist: labelling/self-fulfilling prophecy.",
        },
      ],
    },
  ],
};
