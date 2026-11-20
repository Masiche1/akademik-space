import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olep-u1-lesson-1-2",
  code: "1-2",
  title: "Developmental Psychology",
  goal: "I CAN describe stages of cognitive, moral and social development.",
  standards: ["2219: Developmental psychology"],
  vocabulary: [
    {
      term: "Cognitive development",
      definition: "Development of thinking, reasoning and problem-solving.",
    },
    {
      term: "Moral development",
      definition: "Development of understanding of right and wrong.",
    },
    {
      term: "Attachment",
      definition: "Emotional bond between child and caregiver.",
    },
    {
      term: "Nature vs nurture",
      definition: "Debate: genetics vs environment in development.",
    },
    {
      term: "Piaget",
      definition: "Psychologist studying cognitive development stages.",
    },
    {
      term: "Kohlberg",
      definition: "Psychologist studying moral development stages.",
    },
  ],
  concepts: [
    {
      id: "olep-u1-cognitive-dev",
      title: "Cognitive development (Piaget)",
      skill: "Describe Piaget's stages of cognitive development.",
      lesson: {
        sections: [
          {
            heading: "Piaget's stages",
            body: "Sensorimotor (0-2): object permanence. Preoperational (2-7): symbolic thought, egocentrism. Concrete operational (7-11): logical thinking about concrete objects. Formal operational (11+): abstract reasoning.",
          },
          {
            heading: "Key concepts",
            body: "Schemas: mental frameworks for organising knowledge. Assimilation: fitting new info into existing schemas. Accommodation: changing schemas to fit new info. Equilibration: balance between the two.",
          },
          {
            heading: "Criticisms",
            body: "Stages may not be universal — some children develop faster/slower. Underestimates children's abilities. Cultural differences in development rates.",
          },
        ],
        keyFormulas: [
          {
            name: "Piaget",
            statement:
              "Sensorimotor→preoperational→concrete→formal operational.",
          },
        ],
        workedExample: {
          problem: "What is object permanence?",
          solution:
            "Understanding that objects exist even when out of sight — developed in sensorimotor stage.",
        },
      },
      questions: [
        {
          id: "olep-u1-cd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who developed stages of cognitive development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Piaget" },
              { id: "b", text: "Freud" },
              { id: "c", text: "Skinner" },
              { id: "d", text: "Bandura" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Piaget",
                statement: "Cognitive development stages.",
              },
            ],
            steps: [
              {
                reasoning: "Piaget = cognitive stages.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Piaget",
            commonErrors: ["Confusing with Kohlberg."],
          },
        },
        {
          id: "olep-u1-cd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is object permanence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Object permanence",
                statement: "Objects exist even when out of sight.",
              },
            ],
            steps: [
              {
                reasoning: "Understanding hidden objects exist.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Developed in sensorimotor stage.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Objects exist even when out of sight.",
            commonErrors: ["Saying it's about vision."],
          },
        },
        {
          id: "olep-u1-cd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe Piaget's stages of cognitive development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget stages",
                statement: "Sensorimotor→preoperational→concrete→formal.",
              },
            ],
            steps: [
              { reasoning: "Sensorimotor (0-2).", marks: 1, markCode: "AO1" },
              { reasoning: "Preoperational (2-7).", marks: 1, markCode: "AO1" },
              {
                reasoning: "Concrete operational (7-11).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Formal operational (11+).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Sensorimotor→preoperational→concrete→formal.",
            commonErrors: ["Missing stages."],
          },
        },
        {
          id: "olep-u1-cd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cognitive development.",
          parts: [
            { label: "a", prompt: "Who is Piaget?", marks: 1 },
            { label: "b", prompt: "Define object permanence.", marks: 2 },
            { label: "c", prompt: "Piaget's stages?", marks: 3 },
            { label: "d", prompt: "Criticisms?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget",
                statement: "Definition+stages+criticism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cognitive development.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Objects exist when hidden.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Sensorimotor stage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Four stages.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Ages correct.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Not universal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Underestimates ability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cultural differences.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) Piaget (b) object permanence (c) stages (d) criticisms",
          },
        },
      ],
    },
    {
      id: "olep-u1-moral-attachment",
      title: "Moral development and attachment",
      skill: "Describe Kohlberg's stages and attachment theory.",
      lesson: {
        sections: [
          {
            heading: "Kohlberg's moral development",
            body: "Pre-conventional: avoid punishment, gain rewards. Conventional: follow rules/expectations. Post-conventional: universal ethical principles. Based on reasoning about moral dilemmas.",
          },
          {
            heading: "Attachment theory",
            body: "Bowlby: infants form attachment bonds with caregivers. Secure attachment: consistent care → confident exploration. Insecure: inconsistent care → anxiety/clinginess. Styles affect adult relationships.",
          },
          {
            heading: "Nature vs nurture",
            body: "Nature: genetics/biology shape development. Nurture: environment/experience shapes development. Most psychologists accept interaction — both influence outcomes.",
          },
        ],
        keyFormulas: [
          {
            name: "Development",
            statement:
              "Kohlberg=3 levels; Bowlby=attachment; Nature+nurture=interaction.",
          },
        ],
        workedExample: {
          problem: "How does secure attachment affect development?",
          solution:
            "Consistent care → confidence → better relationships, independence, emotional regulation.",
        },
      },
      questions: [
        {
          id: "olep-u1-ma-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who studied moral development stages?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kohlberg" },
              { id: "b", text: "Piaget" },
              { id: "c", text: "Freud" },
              { id: "d", text: "Skinner" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kohlberg",
                statement: "Moral development stages.",
              },
            ],
            steps: [
              {
                reasoning: "Kohlberg = moral stages.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Kohlberg",
            commonErrors: ["Confusing with Piaget."],
          },
        },
        {
          id: "olep-u1-ma-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is secure attachment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secure attachment",
                statement: "Consistent care → confidence.",
              },
            ],
            steps: [
              { reasoning: "Consistent care.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Confident exploration.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Consistent care → confident, independent child.",
            commonErrors: ["Saying it's about food only."],
          },
        },
        {
          id: "olep-u1-ma-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe Kohlberg's levels of moral development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kohlberg",
                statement: "Pre-conventional→conventional→post-conventional.",
              },
            ],
            steps: [
              {
                reasoning: "Pre-conventional: avoid punishment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Conventional: follow rules.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Post-conventional: principles.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear levels.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Pre-conventional→conventional→post-conventional.",
            commonErrors: ["Missing levels."],
          },
        },
        {
          id: "olep-u1-ma-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Moral development and attachment.",
          parts: [
            { label: "a", prompt: "Who is Kohlberg?", marks: 1 },
            { label: "b", prompt: "Secure attachment?", marks: 2 },
            { label: "c", prompt: "Kohlberg's levels?", marks: 3 },
            { label: "d", prompt: "Nature vs nurture?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development",
                statement: "Kohlberg+attachment+nature/nurture.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Moral development.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Consistent care.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Confidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Three levels.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Described.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Nature=genetics; nurture=environment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Interaction accepted.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) Kohlberg (b) secure (c) levels (d) nature/nurture",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u1-1-2-notes",
      title: "Developmental psychology — notes",
      summary:
        "Piaget's stages, Kohlberg's moral levels, attachment, nature vs nurture.",
      sections: [
        {
          heading: "Cognitive",
          body: "Piaget: sensorimotor→preoperational→concrete→formal. Schemas, assimilation, accommodation.",
        },
        {
          heading: "Moral/attachment",
          body: "Kohlberg: pre-conventional→conventional→post-conventional. Bowlby: secure vs insecure attachment.",
        },
      ],
    },
  ],
};
