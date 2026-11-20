import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olep-u4-lesson-4-1",
  code: "4-1",
  title: "Conformity",
  goal: "I CAN describe conformity types, Asch's and Sherif's studies and reasons for conforming.",
  standards: ["2219: Social psychology"],
  vocabulary: [
    {
      term: "Conformity",
      definition: "Changing behaviour/attitudes to match group norms.",
    },
    {
      term: "Normative influence",
      definition: "Conforming to be accepted/be liked.",
    },
    {
      term: "Informational influence",
      definition: "Conforming because others seem better informed.",
    },
    {
      term: "Compliance",
      definition: "Publicly conforming while privately disagreeing.",
    },
    { term: "Internalisation", definition: "Privately accepting group norms." },
    {
      term: "Group norm",
      definition: "Expected/acceptable behaviour in a group.",
    },
  ],
  concepts: [
    {
      id: "olep-u4-conformity",
      title: "Types and studies of conformity",
      skill: "Describe conformity types and classic experiments.",
      lesson: {
        sections: [
          {
            heading: "Types of conformity",
            body: "Compliance: go along publicly, disagree privately (face-saving). Identification: conforming to a group you admire. Internalisation: genuinely adopting group's beliefs. Reasons: normative influence (want acceptance) and informational influence (others seem right).",
          },
          {
            heading: "Sherif's study",
            body: "Muzafer Sherif 1935 — autokinetic effect (moving light in dark). Ambiguous situation; participants' estimates converged to group norm. Showed informational influence — people use others as reference when unsure.",
          },
          {
            heading: "Asch's study",
            body: "Solomon Asch 1951 — line judgment task. ConfedERATES gave wrong answers; ~37% of participants conformed at least once, ~5% always. Showed normative influence — conformity even when answer obviously wrong. Size of majority and unanimity increased conformity.",
          },
        ],
        keyFormulas: [
          {
            name: "Conformity",
            statement:
              "Compliance/identification/internalisation; Sherif=informational, Asch=normative.",
          },
        ],
        workedExample: {
          problem: "Why did Asch's participants conform to wrong answers?",
          solution:
            "Normative influence — fear of disapproval/rejection outweighed obvious correctness of their own judgment.",
        },
      },
      questions: [
        {
          id: "olep-u4-cf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is conformity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing behaviour to match group norms" },
              { id: "b", text: "Obeying orders" },
              { id: "c", text: "Following rules" },
              { id: "d", text: "Learning by observation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity",
                statement: "Match group norms.",
              },
            ],
            steps: [
              { reasoning: "Match group norms.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Changing behaviour to match group norms",
            commonErrors: ["Confusing with obedience."],
          },
        },
        {
          id: "olep-u4-cf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish normative from informational influence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Influence types",
                statement: "Want acceptance vs others informed.",
              },
            ],
            steps: [
              {
                reasoning: "Normative = want to be liked.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Informational = others seem right.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Normative = conform to be accepted; informational = conform because others appear better informed.",
            commonErrors: ["Swapping them."],
          },
        },
        {
          id: "olep-u4-cf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What did Asch's conformity study show?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Asch",
                statement: "People conform to wrong answers.",
              },
            ],
            steps: [
              {
                reasoning: "Line judgment with confederates.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "~37% conformed at least once.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Normative influence shown.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "~37% conformed to obviously wrong answers to avoid disapproval — demonstrates normative influence.",
            commonErrors: ["Vague 'people conformed'."],
          },
        },
        {
          id: "olep-u4-cf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Conformity.",
          parts: [
            { label: "a", prompt: "Define conformity?", marks: 1 },
            { label: "b", prompt: "Types?", marks: 3 },
            { label: "c", prompt: "Sherif?", marks: 2 },
            { label: "d", prompt: "Asch?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conformity",
                statement: "Definition+types+studies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Match group norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Compliance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Identification.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Internalisation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Autokinetic study.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Informational influence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Line judgment study.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "~37% conformed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Normative influence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) definition (b) types (c) Sherif (d) Asch",
          },
        },
      ],
    },
    {
      id: "olep-u4-obedience",
      title: "Obedience to Authority",
      skill:
        "Describe Milgram's obedience experiments and factors affecting obedience.",
      lesson: {
        sections: [
          {
            heading: "Milgram's study",
            body: "Stanley Milgram 1961 — participants ('teachers') administered electric shocks to 'learner' (confederate) for wrong answers, up to 450V ('XXX'). Learner pretended pain. 65% went to maximum voltage despite protests. Variations: proximity of learner, authority presence, uniform increased obedience.",
          },
          {
            heading: "Why people obey",
            body: "Agentic state — people see themselves as agents of authority, not responsible. Foot-in-door gradual escalation — started at 15V. Authority legitimacy — scientist in white coat. Diffusion of responsibility — 'just following orders'. Setting legitimised behaviour.",
          },
          {
            heading: "Ethics and implications",
            body: "Major ethical issues — deception (participants thought shocks real), psychological distress (some breakdowns). Debriefing questioned as insufficient. Shows ordinary people can commit harmful acts under authority — relevance to Holocaust/Nazi Germany. Led to stricter ethics codes.",
          },
        ],
        keyFormulas: [
          {
            name: "Obedience",
            statement:
              "Milgram: 65% to 450V; agentic state; proximity/uniform/proximity factors.",
          },
        ],
        workedExample: {
          problem: "Why did 65% of Milgram's participants obey to the end?",
          solution:
            "Agentic state — they saw themselves as agents of legitimate authority, not personally responsible; gradual escalation prevented early refusal.",
        },
      },
      questions: [
        {
          id: "olep-u4-ob-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did Milgram's participants think they were doing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Administering real electric shocks" },
              { id: "b", text: "Playing a game" },
              { id: "c", text: "Testing memory only" },
              { id: "d", text: "Filming a movie" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Milgram deception",
                statement: "Thought shocks were real.",
              },
            ],
            steps: [
              { reasoning: "Thought real shocks.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Administering real electric shocks",
            commonErrors: ["Thinking it was fake from start."],
          },
        },
        {
          id: "olep-u4-ob-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What percentage of participants went to maximum voltage?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Milgram result",
                statement: "65% to 450V.",
              },
            ],
            steps: [
              { reasoning: "65% figure.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Despite learner protests.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "65% went to maximum voltage (450V) despite the learner's apparent distress.",
            commonErrors: ["Wrong percentage."],
          },
        },
        {
          id: "olep-u4-ob-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the agentic state?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agentic state",
                statement: "See self as agent of authority.",
              },
            ],
            steps: [
              { reasoning: "See self as agent.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Authority takes responsibility.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Explains obedience.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "State where people see themselves as agents of authority — responsibility shifts to the authority figure, enabling obedience.",
            commonErrors: ["Vague definition."],
          },
        },
        {
          id: "olep-u4-ob-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Obedience.",
          parts: [
            { label: "a", prompt: "Milgram's study?", marks: 3 },
            { label: "b", prompt: "Result?", marks: 1 },
            { label: "c", prompt: "Agentic state?", marks: 2 },
            { label: "d", prompt: "Ethical issues?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Obedience",
                statement: "Study+result+theory+ethics.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Teacher-learner setup.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Deception involved.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Authority figure present.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "65% to 450V.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Agent of authority.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Responsibility shifted.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "d", reasoning: "Deception.", marks: 1, markCode: "AO1" },
              {
                part: "d",
                reasoning: "Distress to participants.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Debriefing questioned.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) study (b) result (c) agentic (d) ethics",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u4-4-1-notes",
      title: "Conformity and obedience — notes",
      summary:
        "Conformity types/studies; Milgram obedience, agentic state, ethics.",
      sections: [
        {
          heading: "Conformity",
          body: "Compliance/identification/internalisation; Sherif=informational, Asch=normative (~37%).",
        },
        {
          heading: "Obedience",
          body: "Milgram 65% to 450V; agentic state; proximity/uniform factors; ethical issues.",
        },
      ],
    },
  ],
};
