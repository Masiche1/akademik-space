import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "asoc-u1-lesson-1-3",
  code: "1-3",
  title: "Specific Research Methods",
  goal: "I CAN describe and evaluate questionnaires, interviews, observation and experiments.",
  standards: ["9699: Research methods"],
  vocabulary: [
    {
      term: "Questionnaire",
      definition: "Written set of questions — structured or semi-structured.",
    },
    {
      term: "Structured interview",
      definition: "Interview with fixed questions — standardised.",
    },
    {
      term: "Unstructured interview",
      definition: "Flexible interview — respondent-led.",
    },
    {
      term: "Participant observation",
      definition: "Researcher joins group and observes from inside.",
    },
    {
      term: "Non-participant observation",
      definition: "Researcher observes without joining.",
    },
    { term: "Field experiment", definition: "Experiment in natural setting." },
  ],
  concepts: [
    {
      id: "asoc-u1-questionnaire-interview",
      title: "Questionnaires and interviews",
      skill: "Evaluate questionnaires and interview methods.",
      lesson: {
        sections: [
          {
            heading: "Questionnaires",
            body: "Self-completion written questions. Advantages: cheap, large samples, no interviewer bias. Disadvantages: low response rate, can't probe, misinterpretation. Structured=closed questions; semi-structured=some open questions.",
          },
          {
            heading: "Interviews",
            body: "Structured: fixed questions — reliable, comparable, but inflexible. Unstructured: flexible — detailed, rapport, but not comparable. Telephone/postal/web variants. Interviewer effect: respondents may give socially desirable answers.",
          },
          {
            heading: "Choosing methods",
            body: "Quantitative aims → questionnaire/structured interview. Qualitative aims → unstructured interview/observation. Mixed methods combine strengths — triangulation increases validity.",
          },
        ],
        keyFormulas: [
          {
            name: "Methods",
            statement:
              "Questionnaire=cheap+large; Interview=detail+rapport; Mixed=triangulation.",
          },
        ],
        workedExample: {
          problem: "Why might questionnaires give misleading results?",
          solution:
            "Respondents may misunderstand questions, give socially desirable answers, or not return them — low response bias.",
        },
      },
      questions: [
        {
          id: "asoc-u1-qi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a structured interview?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Interview with fixed questions asked to all respondents",
              },
              { id: "b", text: "Flexible interview where respondent leads" },
              { id: "c", text: "Written questionnaire" },
              { id: "d", text: "Observation without participation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structured interview",
                statement: "Fixed questions, standardised.",
              },
            ],
            steps: [
              {
                reasoning: "Fixed questions = structured.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Fixed questions",
            commonErrors: ["Confusing with unstructured."],
          },
        },
        {
          id: "asoc-u1-qi-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'interviewer effect'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interviewer effect",
                statement:
                  "Respondents alter answers due to interviewer presence.",
              },
            ],
            steps: [
              {
                reasoning: "Respondents may give socially desirable answers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Or be influenced by interviewer characteristics.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Respondents alter answers due to interviewer presence.",
            commonErrors: ["Saying it's a sampling issue."],
          },
        },
        {
          id: "asoc-u1-qi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate questionnaires as a research method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Questionnaire evaluation",
                statement: "Cheap+large vs low response+misinterpretation.",
              },
            ],
            steps: [
              {
                reasoning: "Advantages: cheap, large samples, no bias.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Disadvantages: low response, can't probe.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Misinterpretation of questions.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Cheap+large samples but low response+misinterpretation.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "asoc-u1-qi-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Questionnaires and interviews.",
          parts: [
            { label: "a", prompt: "Define structured interview.", marks: 1 },
            { label: "b", prompt: "Define interviewer effect.", marks: 2 },
            {
              label: "c",
              prompt: "Two advantages of questionnaires?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Two disadvantages of questionnaires?",
              marks: 2,
            },
            {
              label: "e",
              prompt: "When would you choose unstructured interviews?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Q/I methods",
                statement: "Definitions+evaluation+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Fixed questions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Altered answers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Social desirability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Cheap/large.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "No interviewer bias.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Low response.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Can't probe/misinterpret.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Qualitative aims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Need detail/context.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "e", reasoning: "Justified.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "(a) fixed Qs (b) interviewer effect (c) advantages (d) disadvantages (e) qualitative aims",
          },
        },
      ],
    },
    {
      id: "asoc-u1-observation-experiment",
      title: "Observation and experiments",
      skill: "Describe and evaluate observation and experimental methods.",
      lesson: {
        sections: [
          {
            heading: "Observation",
            body: "Participant observation: researcher joins group — detailed, valid, but risks 'going native' and ethical issues. Non-participant: observes from outside — objective but may miss context. Overt vs covert.",
          },
          {
            heading: "Experiments",
            body: "Laboratory: controlled — reliable, but artificial. Field: natural setting — more valid, less controlled. Quasi-experimental: no random allocation. Problems: Hawthorne effect (people change when observed), ethical issues.",
          },
          {
            heading: "Case studies",
            body: "In-depth study of one person/group/organisation. Very detailed and valid but not generalisable. Triangulation (combining methods) can strengthen findings.",
          },
        ],
        keyFormulas: [
          {
            name: "Observation/experiment",
            statement:
              "Participant=inside+detail; Non-participant=outside+objective; Lab=controlled; Field=natural.",
          },
        ],
        workedExample: {
          problem: "Why is participant observation ethically problematic?",
          solution:
            "Covert observation may involve deception; researcher may witness illegal activity; consent issues.",
        },
      },
      questions: [
        {
          id: "asoc-u1-oe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is participant observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Researcher joins the group being studied" },
              { id: "b", text: "Researcher observes from outside" },
              { id: "c", text: "Controlled laboratory experiment" },
              { id: "d", text: "Written questionnaire" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Participant observation",
                statement: "Join group being studied.",
              },
            ],
            steps: [
              {
                reasoning: "Participant = joins group.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Joins the group",
            commonErrors: ["Confusing with non-participant."],
          },
        },
        {
          id: "asoc-u1-oe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Hawthorne effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hawthorne effect",
                statement: "People change behaviour when observed.",
              },
            ],
            steps: [
              {
                reasoning: "Behaviour changes under observation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Affects validity of findings.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "People change behaviour when observed.",
            commonErrors: ["Saying it's about productivity only."],
          },
        },
        {
          id: "asoc-u1-oe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare laboratory and field experiments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lab vs field",
                statement: "Controlled+reliable vs natural+valid.",
              },
            ],
            steps: [
              {
                reasoning: "Lab: controlled, reliable, artificial.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Field: natural, valid, less controlled.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Different trade-offs.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Lab=controlled+reliable; field=natural+valid.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u1-oe-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Observation and experiments.",
          parts: [
            { label: "a", prompt: "Define participant observation.", marks: 1 },
            { label: "b", prompt: "Define Hawthorne effect.", marks: 2 },
            { label: "c", prompt: "Two advantages of observation?", marks: 2 },
            {
              label: "d",
              prompt: "Two disadvantages of observation?",
              marks: 2,
            },
            {
              label: "e",
              prompt: "When would you use a field experiment?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Obs/exp",
                statement: "Definitions+evaluation+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Join group.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Change when observed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Affects validity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Detailed/contextual.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Natural behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Ethical issues.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Observer bias/time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Need natural setting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Realistic behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "e", reasoning: "Justified.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "(a) participant (b) Hawthorne (c) advantages (d) disadvantages (e) natural setting",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u1-1-3-notes",
      title: "Specific methods — notes",
      summary:
        "Questionnaires, interviews, observation, experiments, case studies.",
      sections: [
        {
          heading: "Methods",
          body: "Questionnaire=cheap+large; interview=detail+rapport; participant obs=inside; lab exp=controlled; field exp=natural.",
        },
        {
          heading: "Issues",
          body: "Interviewer effect, Hawthorne effect, ethical issues, observer bias.",
        },
      ],
    },
  ],
};
