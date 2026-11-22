import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "eias-psych-u3-lesson-3-1",
  code: "3-1",
  title: "Attachment Theories and Types",
  goal: "I CAN explain attachment theories and the three attachment styles.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 3 — Attachment"],
  vocabulary: [
    {
      term: "Attachment",
      definition: "Close emotional bond between infant and caregiver.",
    },
    {
      term: "Monotropy",
      definition: "Infant forms one primary attachment figure.",
    },
    {
      term: "Internal working model",
      definition: "Mental representation of self and others from attachment.",
    },
    {
      term: "Secure attachment",
      definition: "Comfortable with intimacy and independence.",
    },
    {
      term: "Insecure-avoidant",
      definition: "Avoids intimacy; indifferent to caregiver departure/return.",
    },
    {
      term: "Insecure-resistant",
      definition: "Anxious; clings and resists comfort on reunion.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u3-theories",
      title: "Attachment Theories",
      skill: "Explain Bowlby's theory and learning explanations.",
      lesson: {
        sections: [
          {
            heading: "Bowlby's attachment theory",
            body: "**Evolutionary**: attachment is adaptive — survival. **Monotropy**: infant needs ONE primary attachment figure for healthy development. **Critical period**: ~2.5 years — attachment must form in this window. **Internal working model**: attachment shapes expectations of self and others.\n\n**Evaluation**: monotropy disputed — multiple attachments fine (Rutter). Internal working model supported but hard to measure.",
          },
          {
            heading: "Learning explanations",
            body: "**Classical conditioning**: caregiver associated with comfort/food → attachment. **Operant conditioning**: caregiver reduces distress → negative reinforcement.\n\n**Evaluation**: explains attachment but ignores innate need for contact — Harlow showed contact comfort > food.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Infant distressed, caregiver returns — infant calms quickly. Attachment style?",
          solution: "Secure.",
        },
      },
      questions: [
        {
          id: "eias-psych-u3-th-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is monotropy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One primary attachment figure" },
              { id: "b", text: "No attachment" },
              { id: "c", text: "Weak bonding" },
              { id: "d", text: "Multiple attachments" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monotropy",
                statement: "One primary figure.",
              },
            ],
            steps: [
              {
                reasoning: "Monotropy = single primary attachment.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** One primary figure",
            commonErrors: ["Multiple confused."],
          },
        },
        {
          id: "eias-psych-u3-th-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two features of Bowlby's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bowlby",
                statement: "Evolutionary + critical period.",
              },
            ],
            steps: [
              {
                reasoning: "Evolutionary — attachment adaptive for survival.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Critical period — ~2.5 years for attachment formation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Internal working model — shapes self/other expectations.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Evolutionary, critical period, IWM.",
            commonErrors: ["Learning theory.", "Only one."],
          },
        },
        {
          id: "eias-psych-u3-th-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the internal working model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IWM",
                statement: "Mental representation.",
              },
            ],
            steps: [
              {
                reasoning: "Mental model of self — 'am I worthy of love?'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mental model of others — 'can I trust people?'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Shaped by early attachment — secure → positive models.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Guides future relationships — adult attachment styles.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Self/other expectations from early attachment.",
            commonErrors: ["Fixed trait.", "No future link."],
          },
        },
        {
          id: "eias-psych-u3-th-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Critically evaluate Bowlby's monotropy hypothesis.",
          parts: [
            { label: "a", prompt: "State the hypothesis.", marks: 2 },
            { label: "b", prompt: "Give two criticisms.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monotropy evaluation",
                statement: "One vs multiple.",
              },
            ],
            steps: [
              {
                reasoning: "(a) One primary attachment figure essential.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Multiple attachments exist — Rutter's studies.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Fathers, grandparents also form attachments — not just one.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Quality over quantity — secure multiple attachments fine.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) one primary (b) multiple attachments exist",
            commonErrors: ["Unsupported.", "No criticism."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u3-types",
      title: "Attachment Types: Ainsworth's Strange Situation",
      skill: "Describe the Strange Situation and three attachment styles.",
      lesson: {
        sections: [
          {
            heading: "Strange Situation procedure",
            body: "**Ainsworth**: mother+infant play → stranger enters → mother leaves (separation) → stranger comforts → mother returns (reunion) → stranger leaves → mother leaves again.\n\n**Observed**: infant behaviour during separation and reunion — key indicator of attachment style.",
          },
          {
            heading: "Three attachment styles",
            body: "**Secure (60-65%)**: distressed on separation, seeks comfort on reunion, calms quickly. **Insecure-avoidant (15-20%)**: indifferent to separation, avoids caregiver on reunion. **Insecure-resistant/ambivalent (10-15%)**: clingy, distressed, resists comfort even after reunion.\n\n**Disorganised**: rare — contradictory behaviour, fear of caregiver.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Infant ignores caregiver on reunion, plays independently. Style?",
          solution: "Insecure-avoidant.",
        },
      },
      questions: [
        {
          id: "eias-psych-u3-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the Strange Situation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory test" },
              { id: "b", text: "IQ test" },
              { id: "c", text: "Personality test" },
              {
                id: "d",
                text: "Procedure observing infant-caregiver separation/reunion",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Strange Situation",
                statement: "Separation/reunion test.",
              },
            ],
            steps: [
              {
                reasoning: "Strange Situation = attachment assessment.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Separation/reunion test",
            commonErrors: ["Memory confused."],
          },
        },
        {
          id: "eias-psych-u3-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two features of secure attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secure attachment",
                statement: "Comfort + independence.",
              },
            ],
            steps: [
              {
                reasoning: "Distressed on separation — shows attachment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Seeks comfort on reunion — approaches caregiver.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Calms quickly — returns to play.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Distress→comfort→calm.",
            commonErrors: ["Avoidant.", "Only one."],
          },
        },
        {
          id: "eias-psych-u3-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe insecure-avoidant attachment behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Avoidant",
                statement: "Indifferent + avoids.",
              },
            ],
            steps: [
              {
                reasoning: "Little distress on separation — seems independent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoids caregiver on reunion — ignores/turns away.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "May be masking distress — physiological arousal despite calm.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Linked to insensitive caregiving — caregiver rejects needs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Indifferent + avoids reunion.",
            commonErrors: ["Secure confused.", "Resistant confused."],
          },
        },
        {
          id: "eias-psych-u3-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare secure and insecure-resistant attachment.",
          parts: [
            { label: "a", prompt: "Describe secure behaviour.", marks: 4 },
            { label: "b", prompt: "Describe resistant behaviour.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Secure vs resistant",
                statement: "Reunion response differs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Secure: distressed on separation, seeks comfort, calms quickly.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Secure: confident exploration — uses caregiver as secure base.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Resistant: very distressed, clingy, seeks comfort but resists it.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Resistant: angry/passive on reunion — can't be comforted.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) calms quickly (b) can't be comforted",
            commonErrors: ["Same.", "Avoidant confused."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u3-studies",
      title: "Key Attachment Studies",
      skill:
        "Describe and evaluate Harlow, Lorenz, Bowlby and Ainsworth studies.",
      lesson: {
        sections: [
          {
            heading: "Harlow's monkey studies",
            body: "**Method**: infant monkeys separated from mothers, given choice between wire mother (food) and cloth mother (comfort). **Findings**: monkeys clung to cloth mother — contact comfort > food. **Conclusion**: attachment based on comfort, not just feeding — challenges learning theory.\n\n**Evaluation**: unethical (distress); but showed innate need for contact.",
          },
          {
            heading: "Lorenz, Bowlby & Ainsworth",
            body: "**Lorenz imprinting**: goslings followed first moving object — critical period for attachment. **Bowlby**: monotropy theory — evolutionary, critical period. **Ainsworth**: Strange Situation — classified attachment styles; Ugandan study showed cross-cultural validity.\n\n**Evaluation**: Lorenz — animal studies generalise? Bowlby — monotropy disputed. Ainsworth — lab observation, may lack ecological validity.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Monkey clings to cloth mother despite wire having food. Finding?",
          solution: "Contact comfort > food.",
        },
      },
      questions: [
        {
          id: "eias-psych-u3-st-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What did Harlow's monkeys prefer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No mother" },
              { id: "b", text: "Wire mother (food)" },
              { id: "c", text: "Cloth mother (comfort)" },
              { id: "d", text: "Both equally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harlow",
                statement: "Comfort > food.",
              },
            ],
            steps: [
              {
                reasoning: "Harlow: contact comfort preferred.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Cloth/comfort",
            commonErrors: ["Food confused."],
          },
        },
        {
          id: "eias-psych-u3-st-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two findings from Harlow's study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harlow findings",
                statement: "Comfort + exploration.",
              },
            ],
            steps: [
              {
                reasoning: "Monkeys clung to cloth mother — contact comfort.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Wire mother only visited for food — not for comfort.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Attachment provides security for exploration.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Comfort mother + secure base.",
            commonErrors: ["Food mother.", "Only one."],
          },
        },
        {
          id: "eias-psych-u3-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Lorenz's imprinting findings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imprinting",
                statement: "Critical period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Goslings followed first moving object seen — Lorenz.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Critical period — imprinting only in early hours/days.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Irreversible — once imprinted, can't be changed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Supports critical period for attachment formation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Early exposure → irreversible imprinting.",
            commonErrors: ["Reversible.", "No critical period."],
          },
        },
        {
          id: "eias-psych-u3-st-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate Harlow's study.",
          parts: [
            { label: "a", prompt: "Give two strengths.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harlow evaluation",
                statement: "Ethics + validity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Showed contact comfort essential — challenged learning theory.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Controlled experiment — clear cause-effect.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Unethical — severe distress, long-term damage.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Animal study — generalisation to humans questionable.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) comfort+control (b) unethical+animal",
            commonErrors: ["Perfect study.", "Only strengths."],
          },
        },
      ],
    },
  ],
};
