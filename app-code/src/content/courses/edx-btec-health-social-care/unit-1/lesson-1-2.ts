import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edxbtechsc-u1-lesson-1-2",
  code: "1-2",
  title: "Theories of Development",
  goal: "I CAN explain major developmental theories — Piaget's cognitive stages, Bowlby's attachment theory, and socio-cultural perspectives — and apply them to care scenarios.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 1: Human Lifespan and Development",
  ],
  vocabulary: [
    {
      term: "Cognitive development",
      definition:
        "The growth of thinking, reasoning, memory, language and problem-solving abilities.",
    },
    {
      term: "Schema",
      definition:
        "A mental framework or 'file' that organises knowledge; new information is assimilated into or accommodated by schemas.",
    },
    {
      term: "Attachment",
      definition:
        "The emotional bond between an infant and primary caregiver that shapes later relationships and emotional security.",
    },
    {
      term: "Zone of proximal development",
      definition:
        "Vygotsky's concept: the gap between what a learner can do alone and what they can do with guidance.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u1-l2-piaget",
      title: "Piaget's Theory of Cognitive Development",
      skill: "Describe Piaget's stages and apply them to children's thinking.",
      lesson: {
        sections: [
          {
            heading: "How children think",
            body: "Jean Piaget proposed children actively construct knowledge through **assimilation** (fitting new info into existing schemas) and **accommodation** (changing schemas to fit new info). Development proceeds through four stages as children mature and gain experience.\n\nKey idea: children are not 'mini-adults' — their reasoning has qualitative differences at each stage. A 4-year-old who cannot conserve quantity genuinely cannot think that way yet; they are not being difficult.",
          },
          {
            heading: "The four stages",
            body: "**Sensorimotor (0–2):** learns through senses and actions; develops object permanence (knowing things exist when hidden). **Pre-operational (2–7):** symbolic thought and language emerge, but thinking is egocentric and lacks conservation. **Concrete operational (7–11):** logical thinking about concrete objects — conservation, classification, reversibility. **Formal operational (11+):** abstract, hypothetical and scientific reasoning.\n\nLimitations: stage ages are approximate; not all children move through stages uniformly; cultural and educational factors matter.",
          },
        ],
        keyFormulas: [
          {
            name: "Conservation",
            statement:
              "Understanding quantity stays the same despite changes in appearance (Piaget's key concrete-operational test).",
          },
          {
            name: "Egocentrism",
            statement:
              "Pre-operational children struggle to see others' viewpoints.",
          },
        ],
        workedExample: {
          problem:
            "A 5-year-old says two identical rows of counters have 'more' when one is spread out. Explain via Piaget.",
          solution:
            "The child is in the pre-operational stage — cannot conserve number; appearance (spread = more) overrides logic. By concrete operational stage (~7-8), the child would conserve correctly.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u1-l2-piaget-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In Piaget's theory, 'object permanence' develops during which stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pre-operational" },
              { id: "b", text: "Concrete operational" },
              { id: "c", text: "Sensorimotor" },
              { id: "d", text: "Formal operational" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Object permanence",
                statement:
                  "Knowing objects exist when out of sight — a sensorimotor achievement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Object permanence is a sensorimotor milestone (0–2).",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Sensorimotor",
            commonErrors: ["Confusing with later stages."],
          },
        },
        {
          id: "edxbtechsc-u1-l2-piaget-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between assimilation and accommodation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Assimilation vs accommodation",
                statement:
                  "Assimilation fits new info to existing schemas; accommodation changes schemas to fit new info.",
              },
            ],
            steps: [
              {
                reasoning: "Assimilation defined with example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Accommodation defined with example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear contrast and relationship to development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Assimilation = new info fits existing schema; accommodation = schema changes to fit new info.",
            commonErrors: ["Definitions swapped.", "No examples."],
          },
        },
        {
          id: "edxbtechsc-u1-l2-piaget-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A caregiver shows a 6-year-old two identical glasses of water, pours one into a taller thin glass, and asks which has more water. The child says the taller glass. Analyse this using Piaget's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation task",
                statement:
                  "Conservation of liquid is a concrete-operational achievement; failure indicates pre-operational thinking.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies the task as conservation of liquid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correctly places child in pre-operational stage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains appearance-over-logic reasoning.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Notes this is normal development, not error.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Classic conservation failure — pre-operational egocentrism/perceptual reasoning; expected at age 6.",
            commonErrors: [
              "Calling it a 'wrong answer' without theory.",
              "Wrong stage identification.",
            ],
          },
        },
        {
          id: "edxbtechsc-u1-l2-piaget-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A nursery designs activities for children aged 3–5 and 10–12.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe two cognitive characteristics of each age group using Piaget's stages.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Suggest one appropriate activity for each group and justify it.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget applied",
                statement:
                  "Pre-operational (3–5): symbolic play, egocentrism; concrete operational (10–12): logical concrete reasoning, conservation.",
              },
            ],
            steps: [
              {
                reasoning: "Pre-operational trait 1: symbolic play/language.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Pre-operational trait 2: egocentrism/no conservation.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Concrete-operational trait 1: conservation/classification.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Concrete-operational trait 2: logical concrete reasoning.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Activity for 3–5 suited to symbolic/pre-operational thinking.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Activity justified by stage.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Activity for 10–12 suited to concrete operations.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Activity justified by stage.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) pre-op: symbolic play/egocentrism; concrete-op: conservation/logic (b) role-play for young; sorting/classification games for older",
            commonErrors: [
              "Activities not matched to stage.",
              "Misidentified stages.",
            ],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u1-l2-attachment",
      title: "Attachment Theory and Social Development",
      skill:
        "Explain Bowlby's attachment theory and its influence on later relationships.",
      lesson: {
        sections: [
          {
            heading: "Attachment theory",
            body: "John Bowlby proposed infants form an innate **attachment** to a primary caregiver — an emotional bond providing security that underpins exploration and emotional regulation. Ainsworth identified attachment styles through the 'Strange Situation': **secure** (caregiver as safe base), **insecure-avoidant**, **insecure-ambivalent** and later **disorganised**.\n\nThe **critical/sensitive period** concept suggests early attachments have lasting effects; however, later relationships and experiences can modify attachment patterns — attachment is not destiny.",
          },
          {
            heading: "Vygotsky and social learning",
            body: "Lev Vygotsky emphasised learning as fundamentally social: the **zone of proximal development** is what a child can achieve with guidance that they cannot yet do alone — the role of the 'more knowledgeable other'. Scaffolding is the temporary support that is gradually removed.\n\nBandura's **social learning theory** adds that children learn by observing and imitating models — explaining how aggression, prosocial behaviour and gender roles are transmitted without direct instruction.",
          },
        ],
        keyFormulas: [
          {
            name: "Secure base",
            statement:
              "Attachment figure provides safety that enables exploration.",
          },
          {
            name: "ZPD",
            statement: "What can be done with help but not yet alone.",
          },
          {
            name: "Scaffolding",
            statement:
              "Temporary support adjusted to the learner's level, then faded.",
          },
        ],
        workedExample: {
          problem:
            "A toddler clings to their key worker, then explores the room, returning periodically to check. Identify the attachment pattern.",
          solution:
            "Secure attachment — the worker acts as a safe base; the child explores confidently and uses the attachment figure for emotional regulation.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u1-l2-attachment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Bowlby's attachment theory proposes that infants have an innate need to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "learn language quickly" },
              { id: "b", text: "achieve milestones on time" },
              { id: "c", text: "form emotional bonds with caregivers" },
              { id: "d", text: "develop object permanence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Attachment",
                statement:
                  "Innate emotional bond to caregiver providing security.",
              },
            ],
            steps: [
              {
                reasoning: "Attachment = emotional bond with caregiver.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Form emotional bonds",
            commonErrors: ["Confusing attachment with cognition."],
          },
        },
        {
          id: "edxbtechsc-u1-l2-attachment-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the concept of the 'secure base' in attachment theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secure base",
                statement:
                  "The attachment figure provides safety that enables confident exploration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Definition: attachment figure = source of security.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effect: child explores more freely and returns for reassurance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Links to emotional regulation and later independence.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Secure base = trusted caregiver enabling exploration and emotional regulation.",
            commonErrors: [
              "Vague 'bond' answers.",
              "No functional explanation.",
            ],
          },
        },
        {
          id: "edxbtechsc-u1-l2-attachment-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A child with insecure-ambivalent attachment is collected from nursery. Describe likely behaviour and explain its origin in attachment theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insecure-ambivalent attachment",
                statement:
                  "Inconsistent caregiving → child is anxious, clingy and hard to comfort.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Behaviour: clingy, distressed, resistant to comfort.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Origin: inconsistent/unpredictable caregiving.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links behaviour to caregiver response pattern.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Notes attachment style is not fixed — can change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clingy/anxious behaviour from inconsistent caregiving; attachment styles are changeable through consistent care.",
            commonErrors: [
              "Blaming the child.",
              "Treating attachment as permanent.",
            ],
          },
        },
        {
          id: "edxbtechsc-u1-l2-attachment-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A care home introduces a 'buddy system' where new residents are paired with settled residents.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain how attachment theory might apply to older adults forming new bonds.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how Vygotsky's ZPD might apply to a resident learning new technology.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate the buddy system using one of these theories.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory application across lifespan",
                statement:
                  "Attachment needs and social learning persist into older age.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Attachment needs persist — need for secure bonds in care settings.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "New bonds can provide security in unfamiliar environment.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Theory applied accurately to older adults.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "ZPD: resident can do more with peer guidance than alone.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Buddy provides scaffolding/modeling.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Learning is social — peer demonstration effective.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Evaluation links theory to practice.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) attachment needs persist (b) buddy scaffolds learning (c) theory supports buddy system",
            commonErrors: [
              "Theories applied only to children.",
              "No link to the scenario.",
            ],
          },
        },
      ],
    },
  ],
};
