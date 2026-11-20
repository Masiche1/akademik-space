import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olep-u3-lesson-3-2",
  code: "3-2",
  title: "Attachment and Moral Development",
  goal: "I CAN describe attachment theory and stages of moral development.",
  standards: ["2219: Developmental psychology"],
  vocabulary: [
    {
      term: "Attachment",
      definition: "Close emotional bond between infant and caregiver.",
    },
    {
      term: "Secure attachment",
      definition: "Healthy bond — caregiver is safe base.",
    },
    {
      term: "Insecure attachment",
      definition: "Avoidant or resistant bond from inconsistent care.",
    },
    {
      term: "Stranger anxiety",
      definition: "Distress when unfamiliar person approaches.",
    },
    {
      term: "Separation anxiety",
      definition: "Distress when caregiver leaves.",
    },
    {
      term: "Moral development",
      definition: "How understanding of right and wrong develops.",
    },
  ],
  concepts: [
    {
      id: "olep-u3-attachment",
      title: "Attachment Theory",
      skill: "Describe attachment types and Bowlby's theory.",
      lesson: {
        sections: [
          {
            heading: "Bowlby's theory",
            body: "John Bowlby proposed attachment is innate — evolutionary need for protection. Critical period ~first year. Secure attachment → confident, independent child. Ainsworth's Strange Situation identified types: secure (60%), avoidant (20%), resistant/ambivalent (12%), disorganised (8%).",
          },
          {
            heading: "Attachment types",
            body: "Secure: caregiver responsive — child explores freely, distressed on separation, comforted on return. Avoidant: indifferent to caregiver — caregiver unresponsive. Resistant: clingy, angry — inconsistent care. Disorganised: contradictory — frightening caregiver.",
          },
          {
            heading: "Long-term effects",
            body: "Secure attachment → better relationships, higher self-esteem, emotional resilience. Insecure → anxiety, relationship difficulties. Internal working model — attachment style carries into adulthood. Culture affects types — secure dominant in Western samples.",
          },
        ],
        keyFormulas: [
          {
            name: "Attachment",
            statement:
              "Bowlby: innate+critical period; Ainsworth: secure/avoidant/resistant/disorganised.",
          },
        ],
        workedExample: {
          problem: "What is the Strange Situation?",
          solution:
            "Ainsworth's observation procedure — infant separated from/reunited with caregiver to classify attachment type.",
        },
      },
      questions: [
        {
          id: "olep-u3-at-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who proposed attachment theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "John Bowlby" },
              { id: "b", text: "Jean Piaget" },
              { id: "c", text: "Lev Vygotsky" },
              { id: "d", text: "B.F. Skinner" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bowlby",
                statement: "Attachment theory founder.",
              },
            ],
            steps: [{ reasoning: "Bowlby.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** John Bowlby",
            commonErrors: ["Confusing theorists."],
          },
        },
        {
          id: "olep-u3-at-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Strange Situation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Strange Situation",
                statement: "Ainsworth's attachment test.",
              },
            ],
            steps: [
              {
                reasoning: "Observation procedure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Separation/reunion classifies attachment.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Ainsworth's procedure observing infant's reaction to caregiver leaving/returning — classifies attachment type.",
            commonErrors: ["Thinking it's a test of intelligence."],
          },
        },
        {
          id: "olep-u3-at-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe secure vs avoidant attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attachment types",
                statement: "Secure vs avoidant behaviours.",
              },
            ],
            steps: [
              {
                reasoning: "Secure: explores, distressed, comforted.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Avoidant: indifferent, avoids contact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Causes: responsive vs unresponsive care.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Secure: uses caregiver as safe base, distressed on separation, comforted on return. Avoidant: indifferent, avoids contact — from unresponsive care.",
            commonErrors: ["Only describing one type."],
          },
        },
        {
          id: "olep-u3-at-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Attachment.",
          parts: [
            { label: "a", prompt: "Bowlby's theory?", marks: 2 },
            { label: "b", prompt: "Attachment types?", marks: 3 },
            { label: "c", prompt: "Strange Situation?", marks: 2 },
            { label: "d", prompt: "Long-term effects?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attachment",
                statement: "Theory+types+test+effects.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Innate/critical period.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Evolutionary need.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Secure/avoidant/resistant/disorganised.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Behaviours described.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Separation/reunion procedure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Classifies type.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Relationships/self-esteem.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Internal working model.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) theory (b) types (c) test (d) effects",
          },
        },
      ],
    },
    {
      id: "olep-u3-moral",
      title: "Moral Development",
      skill: "Describe Kohlberg's stages of moral reasoning.",
      lesson: {
        sections: [
          {
            heading: "Kohlberg's theory",
            body: "Lawrence Kohlberg studied moral reasoning through dilemmas (Heinz steals drug). Three levels, six stages: pre-conventional (punishment/obedience → self-interest), conventional (good boy/girl → law and order), post-conventional (social contract → universal principles). Not all reach highest stages.",
          },
          {
            heading: "Stage details",
            body: "Pre-conventional: avoid punishment (stage 1), serve self-interest (stage 2). Conventional: gain approval (stage 3), follow law (stage 4). Post-conventional: social contract usefulness (stage 5), universal ethical principles (stage 6). Development depends on cognitive growth + social experience.",
          },
          {
            heading: "Criticisms",
            body: "Male-biased sample — Gilligan argued women emphasise care vs justice. Cultural bias — stages reflect Western values. Discrepancy between reasoning and behaviour — people may know right but act wrong. Heinz dilemma hypothetical vs real-life.",
          },
        ],
        keyFormulas: [
          {
            name: "Kohlberg",
            statement:
              "Pre-conventional→conventional→post-conventional; 6 stages total.",
          },
        ],
        workedExample: {
          problem:
            "What distinguishes conventional from post-conventional morality?",
          solution:
            "Conventional follows rules/approval; post-conventional questions laws against universal ethical principles.",
        },
      },
      questions: [
        {
          id: "olep-u3-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who developed stages of moral reasoning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lawrence Kohlberg" },
              { id: "b", text: "Jean Piaget" },
              { id: "c", text: "John Bowlby" },
              { id: "d", text: "Erik Erikson" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kohlberg",
                statement: "Moral development theorist.",
              },
            ],
            steps: [{ reasoning: "Kohlberg.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Lawrence Kohlberg",
            commonErrors: ["Confusing theorists."],
          },
        },
        {
          id: "olep-u3-md-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three levels of moral development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moral levels",
                statement: "Pre-conventional, conventional, post-conventional.",
              },
            ],
            steps: [
              { reasoning: "Any two levels.", marks: 1, markCode: "AO1" },
              { reasoning: "All three named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Pre-conventional, conventional, post-conventional.",
            commonErrors: ["Missing one level."],
          },
        },
        {
          id: "olep-u3-md-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one criticism of Kohlberg's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kohlberg criticisms",
                statement: "Gender/cultural bias; reasoning vs behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Male-biased sample (Gilligan).",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Or cultural bias.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Or reasoning≠behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Explained clearly.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Male-biased sample (Gilligan: care vs justice); cultural bias; or gap between reasoning and actual behaviour.",
            commonErrors: ["Vague criticism."],
          },
        },
        {
          id: "olep-u3-md-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Moral development.",
          parts: [
            { label: "a", prompt: "Kohlberg's theory?", marks: 2 },
            { label: "b", prompt: "Three levels?", marks: 3 },
            { label: "c", prompt: "Stage examples?", marks: 2 },
            { label: "d", prompt: "Criticisms?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moral dev",
                statement: "Theory+levels+examples+criticisms.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Stages via dilemmas.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Six stages/three levels.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Pre-conventional named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Conventional named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Post-conventional named.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Punishment→approval→principles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear progression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Gender/cultural bias.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Or behaviour gap.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) theory (b) levels (c) stages (d) criticisms",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u3-3-2-notes",
      title: "Attachment and moral development — notes",
      summary: "Bowlby/Ainsworth attachment types; Kohlberg's moral stages.",
      sections: [
        {
          heading: "Attachment",
          body: "Bowlby innate+critical period; secure/avoidant/resistant/disorganised; internal working model.",
        },
        {
          heading: "Moral",
          body: "Kohlberg: pre-conventional→conventional→post-conventional; criticisms=gender/cultural bias.",
        },
      ],
    },
  ],
};
