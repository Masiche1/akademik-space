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
              { id: "a", text: "Comparing children's class to parents'" },
              { id: "b", text: "Moving within one's lifetime" },
              { id: "c", text: "Changing jobs horizontally" },
              { id: "d", text: "Geographic movement" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Comparing children's class to parents'",
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
              { id: "a", text: "Government" },
              { id: "b", text: "Teachers" },
              { id: "c", text: "Students" },
              { id: "d", text: "Publishers" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Government",
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
