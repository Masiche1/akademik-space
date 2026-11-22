import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "eias-psych-u3-lesson-3-2",
  code: "3-2",
  title: "Attachment in Childhood and Adulthood",
  goal: "I CAN explain effects of attachment on development and adult relationships.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 3 — Attachment"],
  vocabulary: [
    {
      term: "Attachment disruption",
      definition: "Separation from attachment figure.",
    },
    {
      term: "Protest-despair-detachment",
      definition: "Stages of response to separation.",
    },
    {
      term: "Maternal deprivation",
      definition: "Separation from mother in critical period.",
    },
    {
      term: "Adult attachment style",
      definition: "Pattern of relating in romantic relationships.",
    },
    {
      term: "Secure base",
      definition: "Attachment figure provides safety for exploration.",
    },
    {
      term: "Separation anxiety",
      definition: "Distress when separated from attachment figure.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u3-disruption",
      title: "Attachment Disruption and Deprivation",
      skill: "Explain effects of separation and deprivation on children.",
      lesson: {
        sections: [
          {
            heading: "Separation responses",
            body: "**Bowlby**: protest (cry/search) → despair (withdrawal) → detachment (indifference). **Robertson & Robertson**: brief daily separations less harmful than prolonged; child needs substitute attachment figure.\n\n**Effects**: disrupted sleep/eating, aggression, difficulty forming relationships — especially if prolonged separation in critical period.",
          },
          {
            heading: "Maternal deprivation",
            body: "**Bowlby hypothesis**: prolonged separation in critical period → irreversible damage — affectionless psychopathy, inability to form relationships. **Evidence**: 44 thieves study — thieves with early deprivation more likely affectionless.\n\n**Criticism**: correlation not causation — deprivation may result from family problems, not cause psychopathy. Rutter showed multiple attachments can compensate.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Child cries then becomes withdrawn after mother leaves. Stage?",
          solution: "Despair.",
        },
      },
      questions: [
        {
          id: "eias-psych-u3-dis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are Bowlby's three stages of separation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fear-sadness-happiness" },
              { id: "b", text: "Protest-despair-detachment" },
              { id: "c", text: "Shock-denial-anger" },
              { id: "d", text: "Anger-sadness-acceptance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Separation stages",
                statement: "PDD sequence.",
              },
            ],
            steps: [
              {
                reasoning: "Protest → despair → detachment.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Protest-despair-detachment",
            commonErrors: ["Other sequence."],
          },
        },
        {
          id: "eias-psych-u3-dis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two effects of prolonged early separation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation effects",
                statement: "Developmental impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Affectionless psychopathy — inability to feel guilt.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Difficulty forming close relationships — insecure attachment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Aggression, disrupted sleep/eating — emotional dysregulation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Psychopathy, relationship problems, aggression.",
            commonErrors: ["No effect.", "Only one."],
          },
        },
        {
          id: "eias-psych-u3-dis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain maternal deprivation hypothesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deprivation",
                statement: "Critical period damage.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prolonged separation from mother in critical period.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Causes irreversible damage — affectionless psychopathy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "44 thieves study — early deprivation linked to psychopathy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Criticism: correlation, not causation — family problems confound.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Early separation → irreversible psychopathy.",
            commonErrors: ["Temporary.", "No evidence."],
          },
        },
        {
          id: "eias-psych-u3-dis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A child is separated from mother for 3 months at age 2.",
          parts: [
            { label: "a", prompt: "Predict likely responses.", marks: 4 },
            { label: "b", prompt: "Suggest ways to minimise harm.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation management",
                statement: "Mitigate damage.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Protest → despair → detachment sequence.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Risk of insecure attachment, emotional problems.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Substitute attachment figure — familiar caregiver.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Frequent contact, gradual separation — ease transition.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) PDD+insecure (b) substitute+gradual",
            commonErrors: ["No response.", "No mitigation."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u3-adult",
      title: "Adult Attachment",
      skill: "Explain adult attachment styles and their origins.",
      lesson: {
        sections: [
          {
            heading: "Adult attachment styles",
            body: "**Secure**: comfortable with intimacy, trusts partner, seeks support — ~60%. **Anxious-preoccupied**: fears abandonment, clingy, needs reassurance. **Dismissive-avoidant**: avoids intimacy, independent, suppresses emotions. **Fearful-avoidant**: wants intimacy but fears rejection.\n\n**Hazan & Shaver**: adult styles mirror childhood attachment — internal working model carried forward.",
          },
          {
            heading: "Stability and change",
            body: "**Stability**: childhood attachment predicts adult style — secure children → secure adults. **Change**: relationships can reshape attachment — positive partner experience → earned security. **Measurement**: Adult Attachment Interview, self-report questionnaires.\n\n**Evaluation**: adult attachment more complex than infant — multiple relationships, life experiences.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Adult clings to partner, fears abandonment, needs constant reassurance. Style?",
          solution: "Anxious-preoccupied.",
        },
      },
      questions: [
        {
          id: "eias-psych-u3-ad-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is adult attachment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Work attachment" },
              { id: "b", text: "Friendship" },
              { id: "c", text: "Child bonding" },
              { id: "d", text: "Pattern of relating in adult relationships" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adult attachment",
                statement: "Relationship style.",
              },
            ],
            steps: [
              {
                reasoning: "Adult attachment = relationship pattern.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Relationship pattern",
            commonErrors: ["Child confused."],
          },
        },
        {
          id: "eias-psych-u3-ad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two adult attachment styles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adult styles",
                statement: "Secure, anxious, avoidant.",
              },
            ],
            steps: [
              {
                reasoning: "Secure — comfortable intimacy + independence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Anxious-preoccupied — fears abandonment, clingy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Dismissive-avoidant — avoids intimacy, suppresses emotions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Secure, anxious, avoidant, fearful.",
            commonErrors: ["Child styles.", "Only one."],
          },
        },
        {
          id: "eias-psych-u3-ad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how childhood attachment influences adult relationships.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Continuity",
                statement: "IWM carried forward.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internal working model — expectations of self/others.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Secure childhood → secure adult — trusts, comfortable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Insecure childhood → insecure adult — anxious or avoidant.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "But change possible — positive relationships reshape IWM.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "IWM → adult style, but change possible.",
            commonErrors: ["Fixed forever.", "No link."],
          },
        },
        {
          id: "eias-psych-u3-ad-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A couple's relationship shows anxious-preoccupied and dismissive-avoidant styles.",
          parts: [
            {
              label: "a",
              prompt: "Describe each partner's likely behaviour.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two ways to improve compatibility.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attachment compatibility",
                statement: "Styles interact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Anxious: clings, seeks reassurance, fears abandonment.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Avoidant: withdraws, suppresses emotions, avoids intimacy.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Communication — express needs explicitly.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Therapy — understand attachment patterns, build earned security.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) anxious+avoidant (b) communication+therapy",
            commonErrors: ["Same style.", "No solution."],
          },
        },
      ],
    },
  ],
};
