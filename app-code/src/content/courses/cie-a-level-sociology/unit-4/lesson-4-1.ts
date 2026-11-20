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
              { id: "a", text: "Shared values and social solidarity" },
              { id: "b", text: "Revolution against capitalism" },
              { id: "c", text: "Individual competition only" },
              { id: "d", text: "Religious doctrine" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Shared values and social solidarity",
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
              { id: "b", text: "School matches student abilities" },
              { id: "c", text: "Teachers correspond with parents" },
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
