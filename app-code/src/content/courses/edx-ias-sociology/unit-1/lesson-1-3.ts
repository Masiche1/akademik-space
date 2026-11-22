import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "eias-soc-u1-lesson-1-3",
  code: "1-3",
  title: "Evaluating Socialisation Theory",
  goal: "I CAN evaluate socialisation theories and apply them to real contexts.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 1 — Socialisation"],
  vocabulary: [
    { term: "Consensus", definition: "General agreement on norms and values." },
    {
      term: "Conflict",
      definition: "Struggle between groups — class, gender, ethnicity.",
    },
    { term: "Agency", definition: "Individual capacity to act independently." },
    {
      term: "Structure",
      definition: "Social forces constraining individual action.",
    },
    {
      term: "Determinism",
      definition: "Behaviour determined by social forces.",
    },
    {
      term: "Resistance",
      definition: "Opposition to dominant norms or authority.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u1-evaluation",
      title: "Strengths and Weaknesses of Theories",
      skill: "Evaluate functionalist, Marxist and interactionist views.",
      lesson: {
        sections: [
          {
            heading: "Comparing perspectives",
            body: "**Functionalist**: explains stability, consensus — but ignores conflict, too optimistic. **Marxist**: explains inequality, power — but too deterministic, ignores agency/resistance. **Interactionist**: shows agency, micro-level — but neglects structural forces (class, power).\n\n**Structure vs agency**: functionalist/Marxist emphasise structure; interactionist emphasises agency. Best sociology combines both.",
          },
          {
            heading: "Evaluation criteria",
            body: "**Explanatory power**: does theory explain socialisation? **Evidence**: supported by research? **Scope**: covers all aspects? **Practical**: useful for policy?\n\n**Example**: Marxist explains class reproduction but can't explain why some working-class succeed — agency matters.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Theory explains inequality but ignores individual choice. Weakness?",
          solution: "Too deterministic — neglects agency.",
        },
      },
      questions: [
        {
          id: "eias-soc-u1-ev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is agency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group conformity" },
              { id: "b", text: "Cultural norm" },
              { id: "c", text: "Social structure" },
              { id: "d", text: "Individual capacity to act independently" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agency",
                statement: "Independent action.",
              },
            ],
            steps: [
              {
                reasoning: "Agency = individual choice.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Independent action",
            commonErrors: ["Structure confused."],
          },
        },
        {
          id: "eias-soc-u1-ev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two strengths of functionalism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist strengths",
                statement: "Stability + consensus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Explains social stability — shared norms bind society.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consensus view — shows how society works together.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Family/school roles explained — clear functions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Stability, consensus, clear roles.",
            commonErrors: ["Weakness.", "Only one."],
          },
        },
        {
          id: "eias-soc-u1-ev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one weakness of Marxist theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist weakness",
                statement: "Deterministic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Too deterministic — ignores individual agency/resistance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Students not passive — can resist dominant ideology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Can't explain all inequality — some working-class succeed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Overemphasises class — ignores gender, ethnicity, other divisions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Deterministic — ignores agency/resistance.",
            commonErrors: ["Strength.", "No weakness."],
          },
        },
        {
          id: "eias-soc-u1-ev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate interactionist approach to socialisation.",
          parts: [
            { label: "a", prompt: "Give two strengths.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interactionist eval",
                statement: "Agency vs structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Shows agency — people actively construct identity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Micro-level detail — everyday interactions explained.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Neglects structure — class, power, institutions.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Hard to generalise — individual cases not society-wide.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) agency+micro (b) neglects structure",
            commonErrors: ["Perfect theory.", "Only strengths."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u1-applications",
      title: "Socialisation in Practice",
      skill: "Apply socialisation theory to real-world examples.",
      lesson: {
        sections: [
          {
            heading: "Socialisation and policy",
            body: "**Education policy**: comprehensive vs selective — how schools socialise differently. **Parenting**: social class affects parenting style — middle-class 'concerted cultivation', working-class 'natural growth'. **Media**: mass media as agent — consumer culture, gender roles, violence.\n\n**Socialisation failures**: feral children (Genie), institutional deprivation — show critical importance of socialisation.",
          },
          {
            heading: "Resisting socialisation",
            body: "**Counter-culture**: groups rejecting dominant norms — hippies, goths. **Youth subcultures**: mods, punks — alternative identities. **Political resistance**: activists challenging dominant ideology.\n\n**Evaluation**: socialisation powerful but not deterministic — agency allows resistance.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Middle-class parents enrol child in music, sports, enrichment. Parenting style?",
          solution: "Concerted cultivation.",
        },
      },
      questions: [
        {
          id: "eias-soc-u1-prac-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is concerted cultivation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working-class parenting" },
              { id: "b", text: "Laissez-faire parenting" },
              { id: "c", text: "Middle-class structured enrichment" },
              { id: "d", text: "Authoritarian parenting" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Concerted cultivation",
                statement: "Middle-class enrichment.",
              },
            ],
            steps: [
              {
                reasoning: "Concerted = structured middle-class.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Middle-class enrichment",
            commonErrors: ["Working-class confused."],
          },
        },
        {
          id: "eias-soc-u1-prac-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two agents of socialisation in modern society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modern agents",
                statement: "Media + peers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mass media — consumer culture, gender roles, violence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Peer groups — subcultures, youth identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Internet/social media — new agent, global influence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Media, peers, internet.",
            commonErrors: ["Family only.", "Only one."],
          },
        },
        {
          id: "eias-soc-u1-prac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how media acts as an agent of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media socialisation",
                statement: "Values + roles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transmits values — consumer culture, success ideals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gender roles — stereotypical portrayals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Violence — normalises aggression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Global influence — shapes attitudes across cultures.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Values+roles+violence+global.",
            commonErrors: ["No influence.", "Only one aspect."],
          },
        },
        {
          id: "eias-soc-u1-prac-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Teenager rejects family values, joins punk subculture.",
          parts: [
            {
              label: "a",
              prompt: "Explain using interactionist view.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain resistance to socialisation.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resistance",
                statement: "Agency + subculture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Peer group provides alternative identity — belonging.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Looking-glass self — sees self through punk peers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Agency — individuals can resist dominant norms.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Counter-culture — alternative values, style, music.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) peer identity (b) agency+counter-culture",
            commonErrors: ["Passive only.", "No theory."],
          },
        },
      ],
    },
  ],
};
