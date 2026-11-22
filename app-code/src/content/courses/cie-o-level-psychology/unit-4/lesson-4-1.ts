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
              { id: "b", text: "Following rules" },
              { id: "c", text: "Learning by observation" },
              { id: "d", text: "Obeying orders" },
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
        {
          id: "olep-u4-cf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Compliance as a type of conformity means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "admiring and copying a group you respect" },
              { id: "b", text: "agreeing publicly while privately disagreeing" },
              { id: "c", text: "obeying a direct order" },
              { id: "d", text: "genuinely adopting the group's beliefs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compliance",
                statement: "Surface agreement, private disagreement.",
              },
            ],
            steps: [
              {
                reasoning: "Compliance = public-only agreement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Public agreement, private disagreement",
            commonErrors: ["Confusing with internalisation."],
          },
        },
        {
          id: "olep-u4-cf-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identification as a type of conformity occurs when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a person conforms to a group they admire or want to be like" },
              { id: "b", text: "a person disagrees with everyone" },
              { id: "c", text: "a person agrees only to avoid punishment" },
              { id: "d", text: "a person copies without any attachment to the group" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Identification",
                statement: "Conform to admired group.",
              },
            ],
            steps: [
              {
                reasoning: "Identification = role-model conformity.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Conforming to an admired group",
            commonErrors: ["Confusing with compliance."],
          },
        },
        {
          id: "olep-u4-cf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Internalisation as a type of conformity means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "agreeing only when watched" },
              { id: "b", text: "genuinely adopting the group's beliefs as your own" },
              { id: "c", text: "copying a celebrity" },
              { id: "d", text: "following orders" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internalisation",
                statement: "Genuine belief adoption.",
              },
            ],
            steps: [
              {
                reasoning: "Internalisation = deep belief change.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Genuinely adopting group beliefs",
            commonErrors: ["Confusing with compliance."],
          },
        },
        {
          id: "olep-u4-cf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sherif's 1935 autokinetic effect study showed that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "people always obeyed authority" },
              { id: "b", text: "conformity only happens with obvious answers" },
              { id: "c", text: "people's estimates of a moving light converged to a group norm in an ambiguous situation" },
              { id: "d", text: "groups never influence judgement" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sherif",
                statement: "Autokinetic convergence = informational influence.",
              },
            ],
            steps: [
              {
                reasoning: "Ambiguous task → use others as reference.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Estimates converged to group norm",
            commonErrors: ["Confusing with Asch's study."],
          },
        },
        {
          id: "olep-u4-cf-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In Asch's line-judgement study, what were the approximate proportions of participants who conformed at least once and who always conformed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100% always; 0% never" },
              { id: "b", text: "~37% at least once; ~5% always" },
              { id: "c", text: "~5% at least once; ~37% always" },
              { id: "d", text: "~50% at least once; ~50% always" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asch findings",
                statement: "~37% conformed at least once; ~5% always.",
              },
            ],
            steps: [
              {
                reasoning: "Asch found substantial but not universal conformity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows normative influence on clear tasks.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** ~37% at least once; ~5% always",
            commonErrors: ["Reversing the percentages."],
          },
        },
        {
          id: "olep-u4-cf-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a replication of Asch's study, $15$ out of $60$ participants conformed at least once. Calculate the conformity rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(conformers / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "15 / 60 = 0.25.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Rate = 25%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "olep-u4-cf-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an Asch-style experiment, conformity was $32\\%$ with a majority of $3$ and $37\\%$ with a majority of $8$. Calculate the increase in conformity rate, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Increase",
                statement: "larger majority rate - smaller majority rate.",
              },
            ],
            steps: [
              {
                reasoning: "37 - 32 = 5 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Effect plateaus after ~3-4 members.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "5 percentage points",
          },
        },
        {
          id: "olep-u4-cf-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three participants in Sherif's study gave distance estimates of $2.5$, $3.0$ and $3.5$ cm before discussion. What was their mean initial estimate?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean",
                statement: "sum / number of values.",
              },
            ],
            steps: [
              {
                reasoning: "(2.5 + 3.0 + 3.5) / 3 = 9 / 3 = 3.0.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 3.0 cm.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3.0",
          },
        },
        {
          id: "olep-u4-cf-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In Asch's study conformity was about $37\\%$ with a unanimous majority. When one confederate disagreed, conformity fell to about $5\\%$. Calculate the drop in conformity, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Drop",
                statement: "unanimous rate - dissent rate.",
              },
            ],
            steps: [
              {
                reasoning: "37 - 5 = 32 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "One dissenter breaks unanimity dramatically.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 32 percentage points.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "32 percentage points",
          },
        },
        {
          id: "olep-u4-cf-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between compliance, identification and internalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity types",
                statement: "Surface/admixture/genuine.",
              },
            ],
            steps: [
              {
                reasoning: "Compliance: public agreement only.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Identification: admired group; internalisation: genuine belief.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Compliance=surface; identification=admired group; internalisation=genuine belief.",
            commonErrors: ["Treating all as the same."],
          },
        },
        {
          id: "olep-u4-cf-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how Sherif's and Asch's studies demonstrate different reasons for conformity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conformity studies",
                statement: "Sherif=informational; Asch=normative.",
              },
            ],
            steps: [
              {
                reasoning: "Sherif: ambiguous task → informational influence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Asch: clear task → normative influence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sherif: use others as information source.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Asch: conformity despite knowing answer.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Sherif showed informational influence (ambiguous task); Asch showed normative influence (clear task, wrong answers).",
            commonErrors: ["Swapping the two studies."],
          },
        },
        {
          id: "olep-u4-cf-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Conformity.",
          parts: [
            { label: "a", prompt: "Define conformity.", marks: 1 },
            { label: "b", prompt: "Three types of conformity?", marks: 2 },
            { label: "c", prompt: "What did Sherif find?", marks: 2 },
            { label: "d", prompt: "What did Asch find?", marks: 2 },
            { label: "e", prompt: "One factor affecting conformity?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conformity",
                statement: "Definition+types+studies+factor.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Matching group norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Compliance/identification/internalisation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any three named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Autokinetic estimates converged.",
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
                reasoning: "~37% conformed at least once.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Normative influence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Group size/unanimity/task difficulty/culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) definition (b) types (c) Sherif (d) Asch (e) factor",
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
              { id: "a", text: "Playing a game" },
              { id: "b", text: "Filming a movie" },
              { id: "c", text: "Testing memory only" },
              { id: "d", text: "Administering real electric shocks" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Administering real electric shocks",
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
        {
          id: "olep-u4-ob-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Milgram's 1961 obedience study, participants ('teachers') believed they were...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "administering real electric shocks to a learner" },
              { id: "b", text: "testing memory" },
              { id: "c", text: "giving advice only" },
              { id: "d", text: "watching a video of shocks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Milgram setup",
                statement: "Teachers believed shocks were real.",
              },
            ],
            steps: [
              {
                reasoning: "Deception: learner was confederate.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Administering real shocks (they believed)",
            commonErrors: ["Saying shocks were real."],
          },
        },
        {
          id: "olep-u4-ob-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Milgram's key finding was that approximately what percentage of participants obeyed to the maximum 450V?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "33%" },
              { id: "b", text: "65%" },
              { id: "c", text: "5%" },
              { id: "d", text: "95%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Milgram result",
                statement: "65% to 450V.",
              },
            ],
            steps: [
              {
                reasoning: "65% obeyed fully.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** 65%",
            commonErrors: ["Confusing with Asch's 33%."],
          },
        },
        {
          id: "olep-u4-ob-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'agentic state' in Milgram's theory means people...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "always disobey" },
              { id: "b", text: "lose all memory of events" },
              { id: "c", text: "act completely autonomously" },
              { id: "d", text: "see themselves as agents of authority and not personally responsible" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agentic state",
                statement: "Self as agent of authority.",
              },
            ],
            steps: [
              {
                reasoning: "Agentic state shifts responsibility to authority.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** See self as agent of authority",
            commonErrors: ["Saying people act freely."],
          },
        },
        {
          id: "olep-u4-ob-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which variation of Milgram's procedure produced the LEAST obedience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The experimenter wore a lab coat" },
              { id: "b", text: "The learner was in a different room and could not be seen or heard" },
              { id: "c", text: "The study was at Yale University" },
              { id: "d", text: "The learner was close and visible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proximity",
                statement: "Distance from victim reduces obedience.",
              },
            ],
            steps: [
              {
                reasoning: "Physical distance reduces obedience.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Learner remote — less obedience",
            commonErrors: ["Choosing uniform/university (these increase obedience)."],
          },
        },
        {
          id: "olep-u4-ob-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The 'foot-in-the-door' technique helps explain obedience because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "it removes all responsibility" },
              { id: "b", text: "starting with small requests escalates commitment to larger ones" },
              { id: "c", text: "people always refuse large requests first" },
              { id: "d", text: "authority figures never escalate demands" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Foot-in-door",
                statement: "Gradual escalation increases compliance.",
              },
            ],
            steps: [
              {
                reasoning: "Small initial steps build commitment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Milgram started at 15V, escalating.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)** Gradual escalation increases obedience",
            commonErrors: ["Saying large requests come first."],
          },
        },
        {
          id: "olep-u4-ob-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $65\\%$ of $80$ participants in a Milgram-style study obeyed fully, how many participants obeyed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 52 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Predicted number",
                statement: "percentage x sample size.",
              },
            ],
            steps: [
              {
                reasoning: "0.65 x 80 = 52 participants.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 52.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "52",
          },
        },
        {
          id: "olep-u4-ob-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Milgram's shocks started at $15$ volts and increased in $15$-volt steps to a maximum of $450$ volts. How many voltage steps were there from start to maximum?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Number of steps",
                statement: "max voltage / step size.",
              },
            ],
            steps: [
              {
                reasoning: "450 / 15 = 30 steps.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 30.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "olep-u4-ob-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a Milgram variation, obedience fell from $65\\%$ (experimenter present) to $20\\%$ (experimenter absent). Calculate the drop in obedience, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 45, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Drop",
                statement: "authority present rate - authority absent rate.",
              },
            ],
            steps: [
              {
                reasoning: "65 - 20 = 45 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows authority proximity matters.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "45 percentage points",
          },
        },
        {
          id: "olep-u4-ob-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In four obedience variations with $25$ participants each, the mean number obeying fully was $16$ per group. Calculate the mean obedience rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 64, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean rate",
                statement: "(mean obeyers / group size) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "16 / 25 = 0.64.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Consistent with Milgram's high obedience.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Rate = 64%.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "64%",
          },
        },
        {
          id: "olep-u4-ob-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define obedience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obedience",
                statement: "Following an authority's direct orders.",
              },
            ],
            steps: [
              {
                reasoning: "Following authority's commands.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Distinct from peer conformity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Following direct orders from a legitimate authority figure.",
            commonErrors: ["Confusing with conformity."],
          },
        },
        {
          id: "olep-u4-ob-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the agentic state and how it accounts for obedience in Milgram's study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agentic state",
                statement: "Self seen as agent of authority.",
              },
            ],
            steps: [
              {
                reasoning: "Agentic state = viewing self as instrument of authority.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Responsibility shifted to the authority figure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Autonomous state overridden by legitimate authority.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Explains high obedience rates (65%).",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "In the agentic state people see themselves as agents of authority, shifting responsibility away from themselves — explaining high obedience.",
            commonErrors: ["Saying people are naturally cruel."],
          },
        },
        {
          id: "olep-u4-ob-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Obedience — Milgram's study.",
          parts: [
            { label: "a", prompt: "What did Milgram study?", marks: 1 },
            { label: "b", prompt: "Key result?", marks: 1 },
            { label: "c", prompt: "Agentic state?", marks: 2 },
            { label: "d", prompt: "Two ethical issues?", marks: 3 },
            { label: "e", prompt: "One real-world implication?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Obedience",
                statement: "Study+result+theory+ethics+implication.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Obedience to authority (electric shocks).",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "65% to 450V.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Self as agent of authority.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Responsibility shifted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Deception (shocks not real).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Psychological distress/breakdowns.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Debriefing questioned as insufficient.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Ordinary people obey harmful orders (Holocaust/Nazi Germany).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Stricter ethics codes followed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) study (b) 65% (c) agentic (d) ethics (e) implication",
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
