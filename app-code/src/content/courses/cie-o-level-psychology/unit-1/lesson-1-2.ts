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
              { id: "a", text: "Freud" },
              { id: "b", text: "Piaget" },
              { id: "c", text: "Skinner" },
              { id: "d", text: "Bandura" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Piaget",
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
        {
          id: "olep-u1-cd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Egocentrism in Piaget's theory refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "poor memory" },
              { id: "b", text: "focus on oneself only" },
              { id: "c", text: "lack of language" },
              { id: "d", text: "inability to see another person's perspective" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Egocentrism",
                statement: "Cannot take another's viewpoint.",
              },
            ],
            steps: [
              {
                reasoning: "Egocentrism = perspective-taking failure.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** inability to see another person's perspective",
            commonErrors: ["Thinking it means selfishness."],
          },
        },
        {
          id: "olep-u1-cd-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a schema?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Schema",
                statement: "Mental framework for organising knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Mental framework/structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Used to interpret new experiences.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "A schema is a mental framework that organises knowledge and guides interpretation of new experiences.",
            commonErrors: ["Defining it as a stage."],
          },
        },
        {
          id: "olep-u1-cd-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Assimilation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "fitting new information into an existing schema" },
              { id: "b", text: "copying another's behaviour" },
              { id: "c", text: "forgetting old information" },
              { id: "d", text: "changing a schema to fit new information" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Assimilation",
                statement: "Fit new info into existing schema.",
              },
            ],
            steps: [
              {
                reasoning: "Assimilation = fit into schema.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** fitting new information into an existing schema",
            commonErrors: ["Confusing with accommodation."],
          },
        },
        {
          id: "olep-u1-cd-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe two features of the concrete operational stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concrete operational",
                statement: "Logical thinking about concrete objects; conservation achieved.",
              },
            ],
            steps: [
              {
                reasoning: "Logical thinking about concrete objects.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Conservation achieved; less egocentric.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear description.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Children think logically about concrete objects and achieve conservation (~ages 7-11).",
            commonErrors: ["Listing abstract reasoning."],
          },
        },
        {
          id: "olep-u1-cd-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Piaget's formal operational stage begins around age:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "2" },
              { id: "c", text: "16" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal operational",
                statement: "~age 11+, abstract reasoning.",
              },
            ],
            steps: [
              { reasoning: "Formal operational ~11+.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 11",
            commonErrors: ["Confusing stage ages."],
          },
        },
        {
          id: "olep-u1-cd-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain equilibration in Piaget's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equilibration",
                statement: "Balance between assimilation and accommodation.",
              },
            ],
            steps: [
              {
                reasoning: "Tension between assimilation and accommodation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Resolved by adapting schemas → development.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Equilibration is the drive to balance assimilation and accommodation, driving cognitive development.",
            commonErrors: ["Defining as a stage."],
          },
        },
        {
          id: "olep-u1-cd-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A child who assumes everyone sees what they see is displaying:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "accommodation" },
              { id: "b", text: "conservation" },
              { id: "c", text: "object permanence" },
              { id: "d", text: "egocentrism" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Egocentrism",
                statement: "Cannot adopt another's viewpoint.",
              },
            ],
            steps: [
              { reasoning: "Egocentrism.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** egocentrism",
            commonErrors: ["Confusing with centration."],
          },
        },
        {
          id: "olep-u1-cd-q12",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Piaget's theory of cognitive development.",
          parts: [
            { label: "a", prompt: "Define schema.", marks: 1 },
            { label: "b", prompt: "Assimilation vs accommodation?", marks: 2 },
            { label: "c", prompt: "Conservation — what and when?", marks: 2 },
            { label: "d", prompt: "Two criticisms of Piaget?", marks: 2 },
            { label: "e", prompt: "How has Piaget influenced education?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget",
                statement: "Concepts+processes+conservation+evaluation+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mental framework.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Fit in vs change schema.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Distinction clear.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Quantity unchanged despite appearance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Achieved in concrete operational.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Any two criticisms (fixed stages/cultural bias/underestimates).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Criticisms explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Hands-on, child-centred, discovery learning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Application explained.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) schema (b) assimilation/accommodation (c) conservation (d) criticisms (e) education",
          },
        },
        {
          id: "olep-u1-cd-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is conservation? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conservation",
                statement: "Quantity unchanged despite appearance change.",
              },
            ],
            steps: [
              {
                reasoning: "Understanding quantity stays same.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example: water poured into different-shaped glass.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Conservation is understanding that quantity is unchanged despite changes in appearance, e.g. liquid poured into a taller glass.",
            commonErrors: ["Thinking it is about memory."],
          },
        },
        {
          id: "olep-u1-cd-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Symbolic thought develops but conservation is absent in which stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "concrete operational" },
              { id: "b", text: "formal operational" },
              { id: "c", text: "preoperational" },
              { id: "d", text: "sensorimotor" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Preoperational",
                statement: "Symbolic thought, no conservation.",
              },
            ],
            steps: [
              { reasoning: "Preoperational.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** preoperational",
            commonErrors: ["Confusing stages."],
          },
        },
        {
          id: "olep-u1-cd-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Piaget's theory of cognitive development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget evaluation",
                statement: "Weigh strengths vs weaknesses.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: stages well supported by observations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weakness: stages may not be fixed; cultural bias.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Application: influenced education practice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Piaget's staged view is influential and well evidenced, but stages may be less fixed and culturally biased than claimed.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "olep-u1-cd-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Object permanence is typically achieved during which stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "formal operational" },
              { id: "b", text: "preoperational" },
              { id: "c", text: "sensorimotor" },
              { id: "d", text: "concrete operational" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Object permanence",
                statement: "Achieved in sensorimotor stage (~8 months).",
              },
            ],
            steps: [
              { reasoning: "Sensorimotor.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** sensorimotor",
            commonErrors: ["Confusing stage ages."],
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
              { id: "a", text: "Piaget" },
              { id: "b", text: "Kohlberg" },
              { id: "c", text: "Skinner" },
              { id: "d", text: "Freud" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Kohlberg",
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
        {
          id: "olep-u1-ma-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Attachment theory was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Freud" },
              { id: "b", text: "Kohlberg" },
              { id: "c", text: "Piaget" },
              { id: "d", text: "Bowlby" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bowlby",
                statement: "Attachment theory.",
              },
            ],
            steps: [
              {
                reasoning: "Bowlby = attachment.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Bowlby",
            commonErrors: ["Confusing with Kohlberg."],
          },
        },
        {
          id: "olep-u1-ma-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is insecure attachment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insecure attachment",
                statement: "Inconsistent care → anxiety/clinginess.",
              },
            ],
            steps: [
              {
                reasoning: "Inconsistent/unpredictable care.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Leads to anxiety and clinginess.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Insecure attachment results from inconsistent care, producing anxiety and clinginess.",
            commonErrors: ["Saying it is caused by neglect of food only."],
          },
        },
        {
          id: "olep-u1-ma-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A child who steals because they fear punishment is reasoning at Kohlberg's:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "conventional level" },
              { id: "b", text: "post-conventional level" },
              { id: "c", text: "pre-conventional level" },
              { id: "d", text: "formal operational stage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pre-conventional",
                statement: "Avoid punishment, gain rewards.",
              },
            ],
            steps: [
              {
                reasoning: "Avoiding punishment = pre-conventional.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** pre-conventional level",
            commonErrors: ["Confusing Kohlberg with Piaget."],
          },
        },
        {
          id: "olep-u1-ma-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between Kohlberg's pre-conventional and conventional levels.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kohlberg levels",
                statement: "Pre-conventional=self-interest; conventional=social rules.",
              },
            ],
            steps: [
              {
                reasoning: "Pre-conventional: avoid punishment, gain rewards.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Conventional: follow rules and expectations of others.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Contrast clearly explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Pre-conventional reasoning focuses on self-interest (avoiding punishment, gaining rewards); conventional reasoning follows social rules and expectations.",
            commonErrors: ["Defining levels but not contrasting them."],
          },
        },
        {
          id: "olep-u1-ma-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the nature vs nurture debate, 'nature' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "parental discipline" },
              { id: "b", text: "schooling" },
              { id: "c", text: "environmental experience" },
              { id: "d", text: "genetic and biological influences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nature",
                statement: "Genetics/biology shape development.",
              },
            ],
            steps: [
              {
                reasoning: "Nature = genetic/biological.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** genetic and biological influences",
            commonErrors: ["Confusing nature with nurture."],
          },
        },
        {
          id: "olep-u1-ma-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two effects of secure attachment on later development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secure attachment effects",
                statement: "Confidence, independence, better relationships, emotional regulation.",
              },
            ],
            steps: [
              {
                reasoning: "Any two effects (confidence/independence/better relationships).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Effects explained clearly.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Secure attachment leads to confidence, independence and better adult relationships.",
            commonErrors: ["Repeating the definition without effects."],
          },
        },
        {
          id: "olep-u1-ma-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Kohlberg developed his theory by studying responses to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "moral dilemmas" },
              { id: "b", text: "memory tests" },
              { id: "c", text: "perception tasks" },
              { id: "d", text: "reflex behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kohlberg method",
                statement: "Reasoning about moral dilemmas.",
              },
            ],
            steps: [
              {
                reasoning: "Moral dilemmas.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** moral dilemmas",
            commonErrors: ["Confusing with Piaget's methods."],
          },
        },
        {
          id: "olep-u1-ma-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe two attachment styles and their likely outcomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attachment styles",
                statement: "Secure vs insecure attachment and outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "Secure: consistent care → confidence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Secure outcome explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Insecure: inconsistent care → anxiety/clinginess.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Insecure outcome explained.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Secure attachment (consistent care) produces confidence; insecure attachment (inconsistent care) produces anxiety and clinginess.",
            commonErrors: ["Describing styles without outcomes."],
          },
        },
        {
          id: "olep-u1-ma-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the nature vs nurture debate in development, giving an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature vs nurture",
                statement: "Genetics vs environment; most accept interaction.",
              },
            ],
            steps: [
              {
                reasoning: "Nature = genetic/biological factors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Nurture = environmental/experiential factors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Interaction of both accepted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Relevant example given.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Nature (genetics) and nurture (environment) both shape development; most psychologists accept an interaction, e.g. temperament influenced by genes and upbringing.",
            commonErrors: ["Treating the debate as either/or."],
          },
        },
        {
          id: "olep-u1-ma-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Post-conventional morality is based on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "fear of punishment" },
              { id: "b", text: "universal ethical principles" },
              { id: "c", text: "approval of others" },
              { id: "d", text: "reward seeking" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Post-conventional",
                statement: "Universal ethical principles.",
              },
            ],
            steps: [
              {
                reasoning: "Post-conventional = ethical principles.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** universal ethical principles",
            commonErrors: ["Confusing with conventional level."],
          },
        },
        {
          id: "olep-u1-ma-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What role do caregivers play in the formation of attachment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Caregiver role",
                statement: "Consistent vs inconsistent care determines attachment style.",
              },
            ],
            steps: [
              {
                reasoning: "Caregiver provides care/responsiveness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Consistency of care determines secure vs insecure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Caregivers shape attachment through the consistency and responsiveness of their care.",
            commonErrors: ["Ignoring consistency of care."],
          },
        },
        {
          id: "olep-u1-ma-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Moral development and attachment.",
          parts: [
            { label: "a", prompt: "Define attachment.", marks: 1 },
            { label: "b", prompt: "Kohlberg's three levels?", marks: 3 },
            { label: "c", prompt: "Secure vs insecure attachment?", marks: 2 },
            { label: "d", prompt: "Nature vs nurture?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development",
                statement: "Attachment+Kohlberg+nature/nurture.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Emotional bond between child and caregiver.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Pre-conventional level.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Conventional level.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Post-conventional level.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Consistent care → secure; inconsistent → insecure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Outcomes contrasted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Nature = genetics; nurture = environment.",
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
              "(a) attachment (b) Kohlberg levels (c) secure/insecure (d) nature/nurture",
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
