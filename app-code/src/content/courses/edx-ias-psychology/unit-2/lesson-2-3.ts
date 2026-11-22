import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "eias-psych-u2-lesson-2-3",
  code: "2-3",
  title: "Memory in Everyday Life",
  goal: "I CAN apply memory theory to everyday situations and evaluate memory research.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 2 — Memory"],
  vocabulary: [
    {
      term: "Flashbulb memory",
      definition: "Vivid, detailed memory of emotionally significant event.",
    },
    {
      term: "Source amnesia",
      definition: "Remembering info but forgetting its source.",
    },
    {
      term: "Repressed memory",
      definition: "Traumatic memory unconsciously blocked.",
    },
    {
      term: "Deja vu",
      definition: "Feeling of having experienced current situation before.",
    },
    {
      term: "Serial position effect",
      definition: "Better recall of first (primacy) and last (recency) items.",
    },
    {
      term: "Spacing effect",
      definition: "Better retention with spaced vs massed practice.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u2-everyday",
      title: "Everyday Memory Phenomena",
      skill: "Explain everyday memory experiences using theory.",
      lesson: {
        sections: [
          {
            heading: "Special memory phenomena",
            body: "**Flashbulb memory**: vivid recall of emotional events — 9/11, JFK assassination. Feels accurate but details may be wrong — confidence ≠ accuracy. **Source amnesia**: remember fact but not where learned — heard on TV vs read. **Deja vu**: familiarity without recognition — processing familiarity before recall.\n\n**Serial position effect**: primacy (first items → LTM via rehearsal) + recency (last items → still in STM). **Spacing effect**: distributed practice > massed — better long-term retention.",
          },
          {
            heading: "Everyday applications",
            body: "**Study strategies**: spaced practice, elaborative rehearsal, testing effect (retrieval practice). **Memory in court**: eyewitness testimony unreliable — reforms needed. **False memories**: can implant memories — Loftus 'lost in mall' study.\n\n**Evaluation**: memory research has real-world applications but lab studies may lack ecological validity.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Remember first and last items on list better than middle. Effect?",
          solution: "Serial position effect.",
        },
      },
      questions: [
        {
          id: "eias-psych-u2-ev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a flashbulb memory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "False memory" },
              { id: "b", text: "Vivid memory of emotional event" },
              { id: "c", text: "Forgotten memory" },
              { id: "d", text: "Vague memory" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flashbulb",
                statement: "Emotional vivid.",
              },
            ],
            steps: [
              {
                reasoning: "Flashbulb = emotional event memory.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Emotional vivid",
            commonErrors: ["Vague confused."],
          },
        },
        {
          id: "eias-psych-u2-ev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two everyday memory phenomena.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory phenomena",
                statement: "Special experiences.",
              },
            ],
            steps: [
              {
                reasoning: "Flashbulb memory — vivid emotional recall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Tip-of-tongue — retrieval failure, known but inaccessible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deja vu — familiarity without recognition.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Flashbulb, tip-of-tongue, deja vu.",
            commonErrors: ["Only one.", "Wrong phenomenon."],
          },
        },
        {
          id: "eias-psych-u2-ev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the serial position effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Serial position",
                statement: "Primacy + recency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primacy: first items rehearsed → transferred to LTM.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Recency: last items still in STM → easy recall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Middle items: displaced/interfered — hardest to recall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Explains why beginnings/endings of lists remembered best.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "First+last better than middle.",
            commonErrors: ["All equal.", "No mechanism."],
          },
        },
        {
          id: "eias-psych-u2-ev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student crams the night before exam vs spaces study over weeks.",
          parts: [
            {
              label: "a",
              prompt: "Predict which performs better and why.",
              marks: 4,
            },
            { label: "b", prompt: "Explain the testing effect.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Study strategies",
                statement: "Spacing + retrieval.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Spaced study better — spacing effect, distributed practice.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Cramming → STM overload, poor LTM encoding.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Testing effect — retrieval practice strengthens memory.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Self-testing > re-reading — active recall builds stronger traces.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) spaced better (b) testing strengthens",
            commonErrors: ["Cramming better.", "No effect."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u2-evaluation",
      title: "Evaluating Memory Research",
      skill: "Critically evaluate memory studies and theories.",
      lesson: {
        sections: [
          {
            heading: "Strengths of memory research",
            body: "**Scientific**: controlled experiments — reliable findings. **Practical applications**: eyewitness testimony reforms, study techniques. **Theoretical**: explains forgetting, encoding, retrieval — comprehensive models.\n\n**Ecological validity**: some studies artificial — lab tasks differ from real memory use. **Individual differences**: research may not generalise across cultures/ages.",
          },
          {
            heading: "Criticisms",
            body: "**Reductionism**: complex memory reduced to simple stores/processes. **Lab vs real**: artificial tasks (word lists) vs everyday memory. **Cultural bias**: research mostly Western — may not apply universally. **Flashbulb memory**: confidence ≠ accuracy — vivid but wrong.\n\n**Repressed memory debate**: Freud's theory controversial — false memory implantation possible.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Memory study uses word lists in lab. Limitation?",
          solution: "Low ecological validity — artificial task.",
        },
      },
      questions: [
        {
          id: "eias-psych-u2-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is ecological validity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Real-world applicability" },
              { id: "b", text: "Statistical power" },
              { id: "c", text: "Lab accuracy" },
              { id: "d", text: "Cultural bias" },
            ],
            correctChoiceId: "a",
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
          id: "eias-psych-u2-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two limitations of memory research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research limits",
                statement: "Artificial + biased.",
              },
            ],
            steps: [
              {
                reasoning: "Low ecological validity — artificial lab tasks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cultural bias — mostly Western participants.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reductionism — oversimplifies complex processes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Validity, culture, reductionism.",
            commonErrors: ["Strength.", "Only one."],
          },
        },
        {
          id: "eias-psych-u2-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why flashbulb memories may be unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flashbulb accuracy",
                statement: "Confidence ≠ accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "Vivid/confident memory ≠ accurate memory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Emotional arousal can distort encoding — weapon focus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Post-event info can alter details — misinformation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Neisser's Challenger study — memories changed over time.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Confidence high but details may be wrong.",
            commonErrors: ["Always accurate.", "No reason."],
          },
        },
        {
          id: "eias-psych-u2-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the multi-store model of memory.",
          parts: [
            { label: "a", prompt: "Give two strengths.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Model evaluation",
                statement: "For and against.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Explains rehearsal transfer — STM to LTM.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Supported by evidence — encoding differences found.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Overly simplistic — STM more complex than suggested.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Rehearsal not only transfer — other processes exist.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) rehearsal+evidence (b) simplistic+incomplete",
            commonErrors: ["Perfect model.", "Only strengths."],
          },
        },
      ],
    },
  ],
};
