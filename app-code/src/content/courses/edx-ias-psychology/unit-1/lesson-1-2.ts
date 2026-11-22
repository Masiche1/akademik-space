import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "eias-psych-u1-lesson-1-2",
  code: "1-2",
  title: "Social Roles and Situational Behaviour",
  goal: "I CAN explain how roles and situations shape behaviour.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 1 — Social Influence"],
  vocabulary: [
    {
      term: "Social role",
      definition: "Expected behaviour associated with a position.",
    },
    {
      term: "Role conflict",
      definition: "Competing demands of different roles.",
    },
    {
      term: "Deindividuation",
      definition:
        "Loss of individual identity in groups — reduced self-awareness.",
    },
    {
      term: "Social loafing",
      definition: "Reduced effort when working in group vs alone.",
    },
    {
      term: "Bystander effect",
      definition: "Less likely to help when others present.",
    },
    {
      term: "Diffusion of responsibility",
      definition:
        "Responsibility shared among group — less individual accountability.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u1-roles",
      title: "Social Roles and Situational Factors",
      skill: "Explain how roles and situations affect behaviour.",
      lesson: {
        sections: [
          {
            heading: "Role effects",
            body: "**Zimbardo prison study (1971)**: students assigned guard/prisoner roles — guards became abusive, prisoners passive within days. Roles shaped behaviour beyond personality.\n\n**Role conflict**: competing demands — e.g., manager vs parent. **Role ambiguity**: unclear expectations — uncertainty. **Role strain**: too many demands on one role.",
          },
          {
            heading: "Situational factors",
            body: "**Deindividuation**: anonymity in crowds — reduces self-awareness, increases disinhibition (riots, online trolling). **Social loafing**: less effort in groups — 'someone else will do it'. **Bystander effect**: more people present → less likely to help — diffusion of responsibility.\n\n**Evaluation**: situations powerfully shape behaviour — but individuals retain some agency.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Person doesn't help victim because 10 others are watching. Effect?",
          solution: "Bystander effect — diffusion of responsibility.",
        },
      },
      questions: [
        {
          id: "eias-psych-u1-roles-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a social role?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Authority order" },
              { id: "b", text: "Expected behaviour for a position" },
              { id: "c", text: "Group conformity" },
              { id: "d", text: "Personal choice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social role",
                statement: "Position expectations.",
              },
            ],
            steps: [
              {
                reasoning: "Role = expected behaviour for position.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Expected behaviour",
            commonErrors: ["Choice confused."],
          },
        },
        {
          id: "eias-psych-u1-roles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two findings from Zimbardo's prison study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Zimbardo study",
                statement: "Roles shape behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Guards became abusive — role expectations internalised.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Prisoners became passive/submissive — role conformity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ordinary students — situation shaped behaviour.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Guards abusive, prisoners passive.",
            commonErrors: ["Personality only.", "Only one."],
          },
        },
        {
          id: "eias-psych-u1-roles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the bystander effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bystander effect",
                statement: "Diffusion of responsibility.",
              },
            ],
            steps: [
              {
                reasoning: "More witnesses → less likely any individual helps.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Diffusion of responsibility — 'someone else will act'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pluralistic ignorance — look to others for cues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Alone → more likely to help — personal responsibility.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "More people → less help — responsibility diffused.",
            commonErrors: ["Always help.", "No mechanism."],
          },
        },
        {
          id: "eias-psych-u1-roles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A crowd at a concert becomes unruly and destructive.",
          parts: [
            { label: "a", prompt: "Explain deindividuation.", marks: 4 },
            { label: "b", prompt: "Suggest ways to reduce it.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deindividuation",
                statement: "Anonymity effect.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Crowd anonymity — individual identity lost.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Reduced self-awareness → disinhibition, anti-social behaviour.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Increase accountability — name tags, individual recognition.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Clear rules/norms — emphasise shared values.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) anonymity→disinhibition (b) accountability+rules",
            commonErrors: ["No deindividuation.", "No reduction."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u1-resistance",
      title: "Resistance to Social Influence",
      skill: "Explain factors enabling resistance to conformity and obedience.",
      lesson: {
        sections: [
          {
            heading: "Resistance factors",
            body: "**Social support**: one dissenter breaks conformity/obedience — Asch showed 5% conformity with ally vs 75% without. **Locus of control**: internal locus — believe own actions control outcomes → resist pressure. **Confidence**: knowledge/ability reduces uncertainty → less need to conform.\n\n**Independent behaviour**: requires confidence, support, strong personal values.",
          },
          {
            heading: "Individual differences",
            body: "**Internal locus**: 'I control my life' → resist authority. **External locus**: 'life controlled by fate/others' → more obedient/conforming. **Self-esteem**: high self-esteem → less need for group approval.\n\n**Culture**: individualist cultures → more independence; collectivist → more conformity.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Person refuses to obey unethical order citing personal conscience. Factor?",
          solution: "Internal locus of control.",
        },
      },
      questions: [
        {
          id: "eias-psych-u1-res-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is locus of control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group pressure" },
              { id: "b", text: "Social role" },
              { id: "c", text: "Belief about control over events" },
              { id: "d", text: "Authority figure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Locus of control",
                statement: "Control belief.",
              },
            ],
            steps: [
              {
                reasoning: "Locus = where control is believed to lie.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Control belief",
            commonErrors: ["Authority confused."],
          },
        },
        {
          id: "eias-psych-u1-res-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that increase resistance to social influence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resistance factors",
                statement: "Support + confidence.",
              },
            ],
            steps: [
              {
                reasoning: "Social support — allies who dissent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Internal locus of control — personal responsibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Confidence/knowledge — less uncertainty.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Support, internal locus, confidence.",
            commonErrors: ["Increase factors.", "Only one."],
          },
        },
        {
          id: "eias-psych-u1-res-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how internal locus of control affects obedience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Locus and obedience",
                statement: "Self-efficacy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internal locus — believe own actions control outcomes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Less likely to blame authority — take responsibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "More likely to resist unethical orders — personal values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "External locus → more obedient — see authority as controlling.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Internal→resist; external→obey.",
            commonErrors: ["No difference.", "Reversed."],
          },
        },
        {
          id: "eias-psych-u1-res-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Employees face pressure to cut safety corners to meet targets.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two ways to increase resistance.",
              marks: 4,
            },
            { label: "b", prompt: "Explain why these work.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resistance strategies",
                statement: "Support + values.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Create allies — employees who refuse together.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Clear ethics policy — whistleblower protection.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Social support breaks conformity — dissenting models.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Strong values + confidence — internal locus empowers refusal.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) allies+ethics (b) support+values work",
            commonErrors: ["No resistance.", "No mechanism."],
          },
        },
      ],
    },
  ],
};
