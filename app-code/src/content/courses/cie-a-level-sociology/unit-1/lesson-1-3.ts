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
              { id: "b", text: "Observation without participation" },
              { id: "c", text: "Written questionnaire" },
              { id: "d", text: "Flexible interview where respondent leads" },
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
        {
          id: "asoc-u1-qi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a semi-structured questionnaire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A questionnaire with only closed questions" },
              { id: "b", text: "A face-to-face interview" },
              {
                id: "c",
                text: "A questionnaire mixing closed and open questions",
              },
              { id: "d", text: "A covert observation schedule" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semi-structured questionnaire",
                statement: "Mix of closed and open questions.",
              },
            ],
            steps: [
              {
                reasoning: "Semi-structured = closed + open mix.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Mix of closed and open questions",
            commonErrors: ["Confusing with structured questionnaire."],
          },
        },
        {
          id: "asoc-u1-qi-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which research method is best for gaining detailed, in-depth responses?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laboratory experiment" },
              { id: "b", text: "Unstructured interview" },
              { id: "c", text: "Observation checklist" },
              { id: "d", text: "Structured questionnaire" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method choice",
                statement: "Qualitative aims → unstructured interview.",
              },
            ],
            steps: [
              {
                reasoning: "Unstructured gives detail/rapport.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Unstructured interview",
            commonErrors: ["Choosing a quantitative method."],
          },
        },
        {
          id: "asoc-u1-qi-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'social desirability bias'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interviewers lead respondents to answers" },
              { id: "b", text: "The sample is unrepresentative" },
              {
                id: "c",
                text: "Respondents give answers they think are socially acceptable",
              },
              { id: "d", text: "Respondents answer questions randomly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social desirability bias",
                statement: "Answers shaped by what seems acceptable.",
              },
            ],
            steps: [
              {
                reasoning: "Respondents seek acceptability.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Respondents give socially acceptable answers",
            commonErrors: ["Confusing with interviewer effect."],
          },
        },
        {
          id: "asoc-u1-qi-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an advantage of questionnaires over interviews?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Builds rapport with respondents" },
              { id: "b", text: "Allows probing of answers" },
              { id: "c", text: "No interviewer effect" },
              { id: "d", text: "Produces only qualitative data" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Questionnaire advantage",
                statement: "Self-completion removes interviewer bias.",
              },
            ],
            steps: [
              {
                reasoning: "No interviewer → no interviewer effect.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** No interviewer effect",
            commonErrors: ["Listing an interview advantage."],
          },
        },
        {
          id: "asoc-u1-qi-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A researcher sends out 400 questionnaires and receives 280 completed returns. What is the response rate as a percentage?",
          response: { type: "numeric", parts: [{ label: "a", answer: 70 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Response rate",
                statement: "(Returns / Sent) x 100 = 70%.",
              },
            ],
            steps: [
              {
                reasoning: "Divide returns by questionnaires sent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "280 / 400 = 0.7; x 100 = 70%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "70",
            commonErrors: ["Reporting 0.7 instead of 70%."],
          },
        },
        {
          id: "asoc-u1-qi-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 250 students, 36% said they preferred online questionnaires. How many students is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "36% of 250 = 0.36 x 250 = 90.",
              },
            ],
            steps: [
              { reasoning: "Convert 36% to 0.36.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.36 by 250 to get 90.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "90",
            commonErrors: ["Using 36 instead of 0.36."],
          },
        },
        {
          id: "asoc-u1-qi-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A postal survey is sent to 600 households and 45% of questionnaires are returned. How many questionnaires are returned?",
          response: { type: "numeric", parts: [{ label: "a", answer: 270 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "45% of 600 = 0.45 x 600 = 270.",
              },
            ],
            steps: [
              { reasoning: "Convert 45% to 0.45.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.45 by 600 to get 270.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "270",
            commonErrors: ["Adding 45 to 600 instead of multiplying."],
          },
        },
        {
          id: "asoc-u1-qi-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The response rate to a questionnaire rose from 30% to 45% on a sample of 200 people. By how many extra responses did it increase?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in responses",
                statement: "45% of 200 minus 30% of 200 = 90 - 60 = 30.",
              },
            ],
            steps: [
              {
                reasoning: "30% of 200 = 60; 45% of 200 = 90.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Subtract the two counts: 90 - 60 = 30.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Answering 15 (the percentage-point change) instead of the number of responses."],
          },
        },
        {
          id: "asoc-u1-qi-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 150 interviewees, 40% gave socially desirable answers. How many interviewees does this represent?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "40% of 150 = 0.4 x 150 = 60.",
              },
            ],
            steps: [
              { reasoning: "Convert 40% to 0.4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.4 by 150 to get 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Reporting 0.4 instead of 60."],
          },
        },
        {
          id: "asoc-u1-qi-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do unstructured interviews tend to lack reliability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They require no interviewer skill" },
              { id: "b", text: "They use only closed questions" },
              { id: "c", text: "They always produce quantitative data" },
              {
                id: "d",
                text: "Responses cannot be standardised and compared across interviews",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unstructured reliability",
                statement: "No fixed questions → not comparable.",
              },
            ],
            steps: [
              {
                reasoning: "Flexible questions prevent standardisation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Responses cannot be standardised",
            commonErrors: ["Saying unstructured interviews are too cheap."],
          },
        },
        {
          id: "asoc-u1-qi-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "When would a researcher choose a questionnaire rather than an interview?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When in-depth probing of individual responses is needed" },
              { id: "b", text: "When rapport with respondents is essential" },
              { id: "c", text: "When non-verbal cues must be observed" },
              {
                id: "d",
                text: "When a large, cheap sample with comparable data is needed",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method choice",
                statement: "Quantitative aims → questionnaire.",
              },
            ],
            steps: [
              {
                reasoning: "Questionnaires suit large comparable samples.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Large, cheap, comparable sample",
            commonErrors: ["Confusing with qualitative aims."],
          },
        },
        {
          id: "asoc-u1-qi-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Questionnaires and interviews.",
          parts: [
            {
              label: "a",
              prompt: "Define a semi-structured questionnaire.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain what is meant by social desirability bias.",
              marks: 2,
            },
            { label: "c", prompt: "Give two strengths of questionnaires.", marks: 2 },
            { label: "d", prompt: "Give two weaknesses of interviews.", marks: 2 },
            {
              label: "e",
              prompt: "Suggest when a researcher should choose a questionnaire over an interview.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Q/I methods",
                statement: "Definitions+bias+strengths+weaknesses+choice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mix of closed and open questions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Respondents give acceptable answers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Threatens validity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Cheap/large samples.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "No interviewer effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Interviewer effect.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Time-consuming/costly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Quantitative aims.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Large comparable sample needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Justified choice.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) semi-structured (b) social desirability (c) strengths (d) weaknesses (e) quantitative aims",
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
              { id: "b", text: "Written questionnaire" },
              { id: "c", text: "Controlled laboratory experiment" },
              { id: "d", text: "Researcher observes from outside" },
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
        {
          id: "asoc-u1-oe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is covert observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Researcher joins the group openly" },
              { id: "b", text: "Observation in a laboratory" },
              {
                id: "c",
                text: "Researcher observes without the group knowing",
              },
              { id: "d", text: "Questionnaire-based observation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Covert observation",
                statement: "Subjects unaware they are observed.",
              },
            ],
            steps: [
              {
                reasoning: "Covert = hidden from subjects.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Observe without group knowing",
            commonErrors: ["Confusing with overt observation."],
          },
        },
        {
          id: "asoc-u1-oe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a laboratory experiment?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Experiment conducted in a controlled artificial setting",
              },
              { id: "b", text: "Experiment conducted in a natural setting" },
              { id: "c", text: "Survey of past behaviour" },
              { id: "d", text: "Observation without participation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lab experiment",
                statement: "Controlled artificial setting.",
              },
            ],
            steps: [
              {
                reasoning: "Lab = controlled setting.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Controlled artificial setting",
            commonErrors: ["Confusing with field experiment."],
          },
        },
        {
          id: "asoc-u1-oe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a quasi-experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Experiment conducted covertly" },
              {
                id: "b",
                text: "Experiment with no random allocation to conditions",
              },
              { id: "c", text: "Non-experimental observation" },
              {
                id: "d",
                text: "Experiment where participants are randomly allocated",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quasi-experiment",
                statement: "No random allocation to groups.",
              },
            ],
            steps: [
              {
                reasoning: "Quasi = no random allocation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** No random allocation",
            commonErrors: ["Saying it is fully controlled."],
          },
        },
        {
          id: "asoc-u1-oe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'going native' refer to in participant observation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Researcher adopts the group's perspective and loses objectivity",
              },
              { id: "b", text: "Experiment in a natural setting" },
              { id: "c", text: "Questionnaire mistranslation" },
              { id: "d", text: "Researcher studies foreign cultures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Going native",
                statement: "Loss of researcher objectivity.",
              },
            ],
            steps: [
              {
                reasoning: "Going native = lost objectivity.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Loses objectivity/adopts group view",
            commonErrors: ["Saying it means travelling abroad."],
          },
        },
        {
          id: "asoc-u1-oe-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A researcher records 48 instances of a behaviour during 8 hours of observation. What is the average number of instances per hour?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate calculation",
                statement: "48 / 8 = 6 instances per hour.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total instances by hours observed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "48 / 8 = 6.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "6",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "asoc-u1-oe-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a field experiment, 120 participants began the study and 30% dropped out. How many participants completed it?",
          response: { type: "numeric", parts: [{ label: "a", answer: 84 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Completion count",
                statement: "30% of 120 = 36 dropped out; 120 - 36 = 84.",
              },
            ],
            steps: [
              {
                reasoning: "30% of 120 = 36 participants dropped out.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Subtract dropouts from total: 120 - 36 = 84.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "84",
            commonErrors: ["Answering 36 (the number who dropped out)."],
          },
        },
        {
          id: "asoc-u1-oe-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two researchers each observe for 6 hours. What is the total observation time in minutes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 720 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time conversion",
                statement: "2 x 6 = 12 hours; 12 x 60 = 720 minutes.",
              },
            ],
            steps: [
              {
                reasoning: "Total hours = 2 x 6 = 12.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Convert to minutes: 12 x 60 = 720.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "720",
            commonErrors: ["Answering 12 (hours) instead of minutes."],
          },
        },
        {
          id: "asoc-u1-oe-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a lab experiment, 60% of 200 participants showed the target behaviour. In a field replication, 40% of 150 participants did. How many more participants showed it in the lab experiment?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing counts",
                statement: "Lab: 0.6 x 200 = 120; field: 0.4 x 150 = 60; difference = 60.",
              },
            ],
            steps: [
              {
                reasoning: "Lab = 120; field = 60 participants.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Difference = 120 - 60 = 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Subtracting percentages (20) instead of counts."],
          },
        },
        {
          id: "asoc-u1-oe-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Participant observation lasted 5 days with 4 hours of observation each day. How many total minutes were spent observing?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1200 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Total observation time",
                statement: "5 x 4 = 20 hours; 20 x 60 = 1200 minutes.",
              },
            ],
            steps: [
              {
                reasoning: "Total hours = 5 x 4 = 20.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Convert to minutes: 20 x 60 = 1200.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "1200",
            commonErrors: ["Answering 20 (hours) instead of minutes."],
          },
        },
        {
          id: "asoc-u1-oe-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is covert participant observation ethically problematic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too expensive to conduct" },
              { id: "b", text: "It cannot produce quantitative data" },
              { id: "c", text: "It always causes the Hawthorne effect" },
              {
                id: "d",
                text: "It involves deception and raises consent issues",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Covert ethics",
                statement: "Deception + consent problems.",
              },
            ],
            steps: [
              {
                reasoning: "Covert = deception/consent issues.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Deception and consent issues",
            commonErrors: ["Saying covert is always illegal."],
          },
        },
        {
          id: "asoc-u1-oe-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "When would a field experiment be preferred to a laboratory experiment?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "When realistic behaviour in a natural setting is needed",
              },
              { id: "b", text: "When results must be completely artificial" },
              { id: "c", text: "When deception is required" },
              { id: "d", text: "When tight control of variables is essential" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Field vs lab",
                statement: "Field = natural setting, more valid.",
              },
            ],
            steps: [
              {
                reasoning: "Field suits realistic natural behaviour.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Realistic behaviour in natural setting",
            commonErrors: ["Confusing with laboratory control."],
          },
        },
        {
          id: "asoc-u1-oe-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Observation and experiments.",
          parts: [
            {
              label: "a",
              prompt: "Define participant observation.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain the Hawthorne effect.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Give two advantages of field experiments.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give two disadvantages of observation.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Suggest when a laboratory experiment is the best choice.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Obs/exp",
                statement: "Definitions+effects+advantages+choice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Join group being studied.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "People change when observed.",
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
                reasoning: "Natural setting/realistic.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "More valid than lab.",
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
                reasoning: "Need control of variables.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Reliability essential.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Justified choice.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) participant (b) Hawthorne (c) field advantages (d) disadvantages (e) control needed",
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
