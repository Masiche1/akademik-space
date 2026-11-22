import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "eias-psych-u3-lesson-3-3",
  code: "3-3",
  title: "Attachment Applications and Evaluation",
  goal: "I CAN apply attachment theory to real-world contexts and evaluate the evidence.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 3 — Attachment"],
  vocabulary: [
    { term: "Daycare", definition: "Non-parental care for children." },
    {
      term: "Attachment figure",
      definition: "Person to whom infant is attached.",
    },
    {
      term: "Secure base",
      definition: "Attachment provides safety for exploration.",
    },
    {
      term: "Sensitivity",
      definition: "Caregiver responsiveness to infant signals.",
    },
    {
      term: "Continuity hypothesis",
      definition: "Early attachment predicts later outcomes.",
    },
    {
      term: "Romanian orphans",
      definition: "Children deprived of attachment in institutions.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u3-applications",
      title: "Attachment in Practice",
      skill: "Apply attachment theory to childcare and social policy.",
      lesson: {
        sections: [
          {
            heading: "Daycare and attachment",
            body: "**Quality daycare**: consistent caregiver, responsive, low child:staff ratio → doesn't harm attachment, may even help. **Poor daycare**: high turnover, insensitive care → insecure attachment risk.\n\n**Romanian orphan studies**: severe deprivation → developmental delays, attachment problems. **Adoption studies**: early adoption (<6 months) → catch-up development; later adoption → persistent problems.\n\n**Social policy**: parental leave supports attachment — Bowlby argued mothers should stay home first years.",
          },
          {
            heading: "Improving attachment",
            body: "**Sensitive caregiving**: respond promptly to signals — builds secure attachment. **Consistency**: predictable care → trust. **Multiple attachments**: other caregivers can support if primary unavailable — Rutter.\n\n**Applications**: parenting programmes, childcare standards, adoption matching.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Daycare centre has 1:3 ratio, responsive caregivers. Effect on attachment?",
          solution: "Likely secure — quality care.",
        },
      },
      questions: [
        {
          id: "eias-psych-u3-app-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is sensitive caregiving?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strict discipline" },
              { id: "b", text: "Ignoring cries" },
              { id: "c", text: "Responsive to infant signals" },
              { id: "d", text: "Physical punishment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensitivity",
                statement: "Responsive care.",
              },
            ],
            steps: [
              {
                reasoning: "Sensitive = responsive to signals.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Responsive",
            commonErrors: ["Strict confused."],
          },
        },
        {
          id: "eias-psych-u3-app-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two features of quality daycare.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality daycare",
                statement: "Consistent + responsive.",
              },
            ],
            steps: [
              {
                reasoning: "Low child:staff ratio — individual attention.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consistent caregiver — stable attachment figure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Responsive/sensitive care — meets infant needs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Ratio, consistency, responsiveness.",
            commonErrors: ["Any daycare.", "Only one."],
          },
        },
        {
          id: "eias-psych-u3-app-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what Romanian orphan studies showed about attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Romanian orphans",
                statement: "Deprivation effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Severe institutional deprivation → developmental delays.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Attachment problems — difficulty forming bonds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Early adoption → catch-up development possible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Later adoption → persistent problems — critical period evidence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Deprivation → delays; early adoption helps.",
            commonErrors: ["No effect.", "Permanent always."],
          },
        },
        {
          id: "eias-psych-u3-app-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A government considers extending parental leave to support attachment.",
          parts: [
            {
              label: "a",
              prompt: "Explain the attachment theory rationale.",
              marks: 4,
            },
            { label: "b", prompt: "Evaluate this policy.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parental leave",
                statement: "Attachment support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Critical period — early attachment forms in first years.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Secure attachment → better development — Bowlby's theory.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Supports bonding — but may disadvantage working parents/careers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Quality daycare can substitute — not just parental care.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) critical period+bonding (b) helps but daycare works",
            commonErrors: ["No theory.", "Perfect policy."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u3-evaluation",
      title: "Evaluating Attachment Theory",
      skill: "Critically evaluate attachment research and theory.",
      lesson: {
        sections: [
          {
            heading: "Strengths of attachment theory",
            body: "**Cross-cultural support**: Strange Situation replicated globally — secure dominant everywhere. **Practical applications**: informs childcare, adoption, parenting. **Theoretical**: explains development, adult relationships — comprehensive.\n\n**Ethical research**: Harlow controversial; but Ainsworth's methods less harmful — observational.",
          },
          {
            heading: "Limitations and criticisms",
            body: "**Monotropy disputed**: multiple attachments fine — Rutter. **Deterministic**: early attachment doesn't doom — later experiences matter. **Cultural bias**: Strange Situation Western-focused — may not fit collectivist cultures. **Measurement**: Strange Situation lab-based — ecological validity questions.\n\n**Alternative views**: social learning explains attachment without evolution; attachment may be relationship-specific, not trait.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Study uses artificial lab separation. Limitation?",
          solution: "Low ecological validity.",
        },
      },
      questions: [
        {
          id: "eias-psych-u3-ev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is ecological validity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistical power" },
              { id: "b", text: "Real-world applicability" },
              { id: "c", text: "Cultural bias" },
              { id: "d", text: "Lab accuracy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecological validity",
                statement: "Real-world fit.",
              },
            ],
            steps: [
              {
                reasoning: "Ecological validity = real-world relevance.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Real-world fit",
            commonErrors: ["Lab confused."],
          },
        },
        {
          id: "eias-psych-u3-ev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two strengths of attachment theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory strengths",
                statement: "Evidence + applications.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cross-cultural support — secure attachment universal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Practical applications — childcare, adoption policies.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Explains development — links early to adult outcomes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Evidence, applications, explanatory power.",
            commonErrors: ["Weakness.", "Only one."],
          },
        },
        {
          id: "eias-psych-u3-ev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two criticisms of Bowlby's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory criticisms",
                statement: "Disputed + deterministic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monotropy disputed — multiple attachments can be healthy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Deterministic — early attachment doesn't guarantee outcomes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cultural bias — Western individualist assumptions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Critical period too rigid — later attachment possible.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Monotropy, determinism, culture, rigidity.",
            commonErrors: ["No criticism.", "Only one."],
          },
        },
        {
          id: "eias-psych-u3-ev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate Ainsworth's Strange Situation.",
          parts: [
            { label: "a", prompt: "Give two strengths.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SS evaluation",
                statement: "Standardised vs artificial.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Standardised procedure — reliable classification.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Cross-cultural replication — predicts outcomes.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Artificial lab setting — low ecological validity.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Brief observation — may miss typical behaviour.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) standardised+predictive (b) artificial+brief",
            commonErrors: ["Perfect method.", "Only strengths."],
          },
        },
      ],
    },
  ],
};
