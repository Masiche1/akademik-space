import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "eias-psych-u1-lesson-1-1",
  code: "1-1",
  title: "Conformity and Obedience",
  goal: "I CAN explain conformity and obedience to authority.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 1 — Social Influence"],
  vocabulary: [
    {
      term: "Conformity",
      definition: "Changing behaviour/opinions to match group norms.",
    },
    {
      term: "Obedience",
      definition: "Following direct orders from authority figure.",
    },
    {
      term: "Compliance",
      definition: "Publicly agreeing but privately disagreeing.",
    },
    {
      term: "Internalisation",
      definition: "Privately accepting group norms as own.",
    },
    {
      term: "Agentic state",
      definition: "Obeying authority as 'agent' — not responsible.",
    },
    {
      term: "Autonomous state",
      definition: "Acting on own conscience — personal responsibility.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u1-conformity",
      title: "Types and Explanations of Conformity",
      skill: "Distinguish conformity types and explain causes.",
      lesson: {
        sections: [
          {
            heading: "Conformity types",
            body: "**Compliance**: go along publicly, disagree privately — social reward/avoidance of rejection. **Internalisation**: genuinely accept group norms — permanent change. **Identification**: conform to be like someone we admire.\n\n**Causes**: normative social influence (want approval/avoid rejection) vs informational social influence (uncertain → trust group). **Factors**: group size, unanimity, task difficulty, culture (collectivist vs individualist).",
          },
          {
            heading: "Classic studies",
            body: "**Asch (1951)**: line judgment — 75% conformed at least once with unanimous wrong majority. **Factors**: conformity dropped to ~5% when one dissenter present — social support breaks conformity.\n\n**Sherif (1936)**: autokinetic effect — ambiguous task → group norm established.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Person agrees with group publicly but disagrees privately. Type?",
          solution: "Compliance.",
        },
      },
      questions: [
        {
          id: "eias-psych-u1-conf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is conformity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Independent thinking" },
              { id: "b", text: "Following orders" },
              { id: "c", text: "Changing behaviour to match group norms" },
              { id: "d", text: "Disobeying orders" },
            ],
            correctChoiceId: "c",
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
              {
                reasoning: "Conformity = group influence.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Match group norms",
            commonErrors: ["Obedience confused."],
          },
        },
        {
          id: "eias-psych-u1-conf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish compliance from internalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Conformity types",
                statement: "Public vs private.",
              },
            ],
            steps: [
              {
                reasoning: "Compliance: publicly agree, privately disagree.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Internalisation: privately accept — permanent change.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Compliance driven by social reward; internalisation by genuine belief.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Compliance=public only; internalisation=private.",
            commonErrors: ["Same thing.", "Reversed."],
          },
        },
        {
          id: "eias-psych-u1-conf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Asch's participants conformed to wrong answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Asch conformity",
                statement: "Normative influence.",
              },
            ],
            steps: [
              {
                reasoning: "Unanimous majority — social pressure to conform.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Normative influence — fear of rejection/embarrassment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ambiguous task — uncertain of correct answer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "One dissenter broke conformity — social support matters.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Social pressure + uncertainty → conformity.",
            commonErrors: ["Informational only.", "No factors."],
          },
        },
        {
          id: "eias-psych-u1-conf-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student conforms to peer pressure to cheat on exams.",
          parts: [
            { label: "a", prompt: "Identify conformity type.", marks: 3 },
            { label: "b", prompt: "Explain how to reduce it.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conformity reduction",
                statement: "Social support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Likely compliance — public conformity, private disagreement.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Or internalisation if genuinely accepts cheating norms.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Social support — find allies who resist.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Confidence/knowledge — reduce uncertainty.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Personal values — internalise ethical norms.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) compliance/internalisation (b) support+values",
            commonErrors: ["Obedience.", "No reduction."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u1-obedience",
      title: "Obedience to Authority",
      skill: "Explain Milgram's research and factors affecting obedience.",
      lesson: {
        sections: [
          {
            heading: "Milgram experiment",
            body: "Participants administered 'electric shocks' to learner on experimenter's orders. **65% went to maximum 450V** despite apparent distress. Key findings: ordinary people obey authority even when harming others.\n\n**Agentic state**: obedience shifts responsibility to authority — 'just following orders'. **Autonomous state**: personal responsibility — refuse if immoral.",
          },
          {
            heading: "Factors affecting obedience",
            body: "**Proximity**: closer authority → more obedience. **Legitimacy**: credible authority (scientist vs con man). **Support**: another dissenter reduces obedience. **Buffer**: learner in separate room vs same room — less direct contact → more obedience.\n\n**Evaluation**: ethical issues (deception, distress), artificial setting, but real-world relevance (war crimes, corporate misconduct).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Experimenter in same room vs far away. Obedience?",
          solution: "Higher when closer — proximity matters.",
        },
      },
      questions: [
        {
          id: "eias-psych-u1-obed-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is obedience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Following direct orders from authority" },
              { id: "b", text: "Conforming to group" },
              { id: "c", text: "Independent choice" },
              { id: "d", text: "Following friends" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obedience",
                statement: "Authority orders.",
              },
            ],
            steps: [
              {
                reasoning: "Obedience = authority orders.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Authority orders",
            commonErrors: ["Conformity confused."],
          },
        },
        {
          id: "eias-psych-u1-obed-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that increase obedience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Obedience factors",
                statement: "Authority + proximity.",
              },
            ],
            steps: [
              {
                reasoning: "Legitimate authority — credible expert/scientist.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Proximity — authority figure physically present.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No dissenting models — no one else refuses.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Legitimacy, proximity, no dissent.",
            commonErrors: ["Decrease factors.", "Only one."],
          },
        },
        {
          id: "eias-psych-u1-obed-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the agentic state in obedience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agentic state",
                statement: "Shifted responsibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Person enters agentic state — sees self as agent of authority.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Responsibility shifts to authority figure — 'just following orders'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Moral judgment suspended — obedience feels justified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Exit when authority loses legitimacy or conscience intervenes.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Agent of authority — responsibility shifted.",
            commonErrors: ["Autonomous.", "No mechanism."],
          },
        },
        {
          id: "eias-psych-u1-obed-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A manager orders staff to falsify safety reports.",
          parts: [
            { label: "a", prompt: "Explain why staff might obey.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest ways to increase resistance.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Obedience resistance",
                statement: "Social + moral.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Legitimate authority — manager has power.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Agentic state — 'just following orders'.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Dissenting models — colleagues who refuse.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Clear ethics policy — whistleblower protection.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) authority+agentic (b) dissent+ethics",
            commonErrors: ["No obedience.", "No resistance."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u1-minority",
      title: "Minority Influence",
      skill: "Explain how minorities can influence majority opinion.",
      lesson: {
        sections: [
          {
            heading: "Minority influence",
            body: "**Conversion**: minority consistently argues position — majority privately accepts over time. **Consistency**: minority must hold position consistently — wavering loses influence. **Commitment**: willingness to sacrifice — extreme positions gain attention.\n\n**Moscovici (1969)**: consistent minority of 2 vs majority of 4 — 32% of majority privately agreed vs 5% control.",
          },
          {
            heading: "Minority vs majority influence",
            body: "**Majority**: compliance — public agreement, private disagreement. **Minority**: conversion — private acceptance, deeper change. **Key difference**: majority produces compliance; minority produces conversion.\n\n**Conditions**: consistency, commitment, flexibility (appear reasonable), timing.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Small group consistently argues for recycling. Majority privately agrees but won't say publicly. Influence type?",
          solution: "Minority conversion.",
        },
      },
      questions: [
        {
          id: "eias-psych-u1-min-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is minority influence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Authority orders" },
              { id: "b", text: "Small group changing majority opinion" },
              { id: "c", text: "Majority pressure" },
              { id: "d", text: "Conformity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Minority influence",
                statement: "Small group effect.",
              },
            ],
            steps: [
              {
                reasoning: "Minority = small group influences majority.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Small group effect",
            commonErrors: ["Majority confused."],
          },
        },
        {
          id: "eias-psych-u1-min-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two conditions for effective minority influence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minority conditions",
                statement: "Consistency + commitment.",
              },
            ],
            steps: [
              {
                reasoning: "Consistency — hold position firmly, don't waver.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Commitment — willing to sacrifice for position.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Flexibility — appear reasonable, not extreme.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Consistency, commitment, flexibility.",
            commonErrors: ["Wavering.", "Only one."],
          },
        },
        {
          id: "eias-psych-u1-min-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between compliance and conversion in social influence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Influence types",
                statement: "Public vs private.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compliance: publicly agree, privately disagree — superficial.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Conversion: privately accept — deep, lasting change.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Majority influence → compliance; minority → conversion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Conversion more resistant to change — genuinely held.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Compliance=public; conversion=private/deep.",
            commonErrors: ["Same thing.", "Reversed."],
          },
        },
        {
          id: "eias-psych-u1-min-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A small environmental group wants to change public opinion.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two minority influence strategies.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain why consistency matters.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minority strategy",
                statement: "Consistency + commitment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Consistent messaging — same position every time.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Appealing but firm — not extreme, reasonable tone.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Consistency signals conviction — majority takes them seriously.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Wavering weakens influence — seen as unsure.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) consistency+reasonable (b) conviction signal",
            commonErrors: ["Waver.", "Extreme only."],
          },
        },
      ],
    },
  ],
};
