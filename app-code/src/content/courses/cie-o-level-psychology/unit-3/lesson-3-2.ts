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
              { id: "a", text: "Jean Piaget" },
              { id: "b", text: "John Bowlby" },
              { id: "c", text: "Lev Vygotsky" },
              { id: "d", text: "B.F. Skinner" },
            ],
            correctChoiceId: "b",
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
        {
          id: "olep-u3-at-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which psychologist proposed that attachment is an innate, evolutionary need for protection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lawrence Kohlberg" },
              { id: "b", text: "John Bowlby" },
              { id: "c", text: "Lev Vygotsky" },
              { id: "d", text: "Jean Piaget" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bowlby",
                statement: "Attachment theory founder.",
              },
            ],
            steps: [
              {
                reasoning: "Bowlby proposed attachment theory.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** John Bowlby",
            commonErrors: ["Confusing with Ainsworth (who tested it)."],
          },
        },
        {
          id: "olep-u3-at-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bowlby suggested there is a critical period for attachment of approximately...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the first year of life" },
              { id: "b", text: "ages 5-10" },
              { id: "c", text: "the first month only" },
              { id: "d", text: "adolescence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical period",
                statement: "~First year for attachment.",
              },
            ],
            steps: [
              {
                reasoning: "Attachment forms mainly in first year.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The first year of life",
            commonErrors: ["Saying any age is equally important."],
          },
        },
        {
          id: "olep-u3-at-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the Strange Situation, a securely attached infant typically...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "shows contradictory behaviour" },
              { id: "b", text: "ignores the caregiver completely" },
              { id: "c", text: "explores freely, becomes distressed on separation and is comforted on reunion" },
              { id: "d", text: "clings angrily and cannot be comforted" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secure attachment",
                statement: "Explores, distressed, comforted.",
              },
            ],
            steps: [
              {
                reasoning: "Secure = balanced attachment behaviours.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Explores, distressed on separation, comforted on return",
            commonErrors: ["Confusing with resistant type."],
          },
        },
        {
          id: "olep-u3-at-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An avoidantly attached child in the Strange Situation typically...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "shows little distress on separation and avoids the caregiver on return" },
              { id: "b", text: "explores confidently and seeks comfort" },
              { id: "c", text: "freezes or shows contradictory behaviour" },
              { id: "d", text: "clings to the caregiver and is hard to comfort" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Avoidant attachment",
                statement: "Indifferent to caregiver.",
              },
            ],
            steps: [
              {
                reasoning: "Avoidant = little attachment behaviour.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Little distress, avoids caregiver",
            commonErrors: ["Confusing with resistant type."],
          },
        },
        {
          id: "olep-u3-at-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A child in the Strange Situation clings to the caregiver before separation, shows intense distress, and on reunion both seeks contact and angrily rejects it. Which attachment type is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Secure" },
              { id: "b", text: "Disorganised" },
              { id: "c", text: "Avoidant" },
              { id: "d", text: "Resistant/ambivalent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resistant attachment",
                statement: "Clingy, angry, inconsistent care.",
              },
            ],
            steps: [
              {
                reasoning: "Mixed approach-avoidance signals resistance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Linked to inconsistent caregiving.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Resistant/ambivalent",
            commonErrors: ["Confusing with disorganised."],
          },
        },
        {
          id: "olep-u3-at-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In Ainsworth's Strange Situation studies, about $60\\%$ of infants were classified as securely attached. In a sample of $50$ infants, how many would be predicted to be secure?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Predicted number",
                statement: "percentage x sample size.",
              },
            ],
            steps: [
              {
                reasoning: "0.60 x 50 = 30 infants.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 30.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "olep-u3-at-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Ainsworth reported approximately $20\\%$ avoidant and $60\\%$ secure attachment. In a group of $25$ children, how many would be expected to be avoidantly attached?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Predicted number",
                statement: "percentage x sample size.",
              },
            ],
            steps: [
              {
                reasoning: "0.20 x 25 = 5 children.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 5.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "olep-u3-at-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a sample of $20$ children, $12$ were securely attached and $4$ avoidantly attached. Calculate the percentage-point difference between secure and avoidant rates.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Difference",
                statement: "(12/20 - 4/20) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "60% - 20% = 40 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 40 percentage points.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "40 percentage points",
          },
        },
        {
          id: "olep-u3-at-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a Strange Situation sample of $40$ children, $24$ were secure, $8$ avoidant, $5$ resistant and $3$ disorganised. Calculate the percentage classified as resistant.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12.5, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(resistant / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "5 / 40 = 0.125.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Consistent with Ainsworth's ~12% resistant.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Percentage = 12.5%.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "12.5%",
          },
        },
        {
          id: "olep-u3-at-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Attachment",
                statement: "Close emotional bond with caregiver.",
              },
            ],
            steps: [
              {
                reasoning: "Close emotional bond.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Typically with primary caregiver in infancy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "A close emotional bond between an infant and its primary caregiver.",
            commonErrors: ["Saying it is only physical closeness."],
          },
        },
        {
          id: "olep-u3-at-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Bowlby's concept of the internal working model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internal working model",
                statement: "Attachment style carries into later relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Early attachment forms a mental model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Model shapes expectations of others.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Influences later adult relationships.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Secure model → better relationships.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Early attachment creates a mental model of relationships that guides behaviour into adulthood.",
            commonErrors: ["Saying it is a fixed destiny."],
          },
        },
        {
          id: "olep-u3-at-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Attachment.",
          parts: [
            { label: "a", prompt: "Who proposed attachment theory?", marks: 1 },
            { label: "b", prompt: "What is the Strange Situation?", marks: 2 },
            { label: "c", prompt: "Name two insecure attachment types.", marks: 2 },
            { label: "d", prompt: "Secure attachment proportion?", marks: 1 },
            { label: "e", prompt: "Long-term effect of secure attachment?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attachment",
                statement: "Theory+test+types+effects.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "John Bowlby.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Ainsworth's structured observation test.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Separations/reunions with caregiver.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two: avoidant, resistant, disorganised.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "~60%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Better relationships/higher self-esteem/resilience.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Internal working model link.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Contrast with insecure outcomes.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) Bowlby (b) Strange Situation (c) insecure types (d) 60% (e) effects",
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
              { id: "a", text: "John Bowlby" },
              { id: "b", text: "Lawrence Kohlberg" },
              { id: "c", text: "Erik Erikson" },
              { id: "d", text: "Jean Piaget" },
            ],
            correctChoiceId: "b",
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
        {
          id: "olep-u3-md-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which psychologist developed a stage theory of moral reasoning using dilemmas such as the Heinz dilemma?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jean Piaget" },
              { id: "b", text: "John Bowlby" },
              { id: "c", text: "Lawrence Kohlberg" },
              { id: "d", text: "Carol Gilligan" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kohlberg",
                statement: "Moral development theorist.",
              },
            ],
            steps: [
              {
                reasoning: "Kohlberg proposed moral stages.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Lawrence Kohlberg",
            commonErrors: ["Confusing with Gilligan (a critic)."],
          },
        },
        {
          id: "olep-u3-md-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Kohlberg's Heinz dilemma, Heinz steals an overpriced drug to save his wife. What is the dilemma testing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory for drug prices" },
              { id: "b", text: "The reasoning behind a moral choice — law vs human life" },
              { id: "c", text: "Physical strength" },
              { id: "d", text: "Language development" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heinz dilemma",
                statement: "Tests moral reasoning.",
              },
            ],
            steps: [
              {
                reasoning: "Dilemma probes reasoning, not the decision itself.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Moral reasoning behind the choice",
            commonErrors: ["Thinking it tests whether Heinz should steal."],
          },
        },
        {
          id: "olep-u3-md-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Kohlberg's stage 1 (pre-conventional), moral decisions are based on...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "universal ethical principles" },
              { id: "b", text: "avoiding punishment and obedience to authority" },
              { id: "c", text: "self-interest only" },
              { id: "d", text: "gaining social approval" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stage 1",
                statement: "Punishment and obedience orientation.",
              },
            ],
            steps: [
              {
                reasoning: "Stage 1 = avoid punishment.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Avoiding punishment / obedience",
            commonErrors: ["Confusing with stage 2 (self-interest)."],
          },
        },
        {
          id: "olep-u3-md-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Kohlberg's stage 4 (conventional), moral decisions are based on...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "universal principles of justice" },
              { id: "b", text: "maintaining law and order" },
              { id: "c", text: "avoiding punishment" },
              { id: "d", text: "personal benefit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stage 4",
                statement: "Law and order orientation.",
              },
            ],
            steps: [
              {
                reasoning: "Stage 4 = law and order.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Maintaining law and order",
            commonErrors: ["Confusing with stage 3 (approval)."],
          },
        },
        {
          id: "olep-u3-md-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Kohlberg's stage 6 (post-conventional) reasoning is based on...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "fear of punishment" },
              { id: "b", text: "universal ethical principles that may override laws" },
              { id: "c", text: "what the majority approves" },
              { id: "d", text: "strict obedience to law" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stage 6",
                statement: "Universal ethical principles.",
              },
            ],
            steps: [
              {
                reasoning: "Stage 6 = principles above law.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Highest level, rarely reached.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Universal ethical principles",
            commonErrors: ["Confusing with stage 5 (social contract)."],
          },
        },
        {
          id: "olep-u3-md-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Kohlberg proposed $6$ stages grouped into $3$ levels. How many stages does each level contain on average?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stages per level",
                statement: "total stages / total levels.",
              },
            ],
            steps: [
              {
                reasoning: "6 / 3 = 2 stages per level.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 2.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "olep-u3-md-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a moral-reasoning study, $36$ out of $60$ participants gave conventional-level reasoning. Calculate the percentage at the conventional level.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(conventional / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "36 / 60 = 0.6.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 60%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "olep-u3-md-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of $50$ moral judgments collected, $25$ were pre-conventional, $20$ conventional and $5$ post-conventional. What percentage were post-conventional?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(post-conventional / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "5 / 50 = 0.1.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 10%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "10%",
          },
        },
        {
          id: "olep-u3-md-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Gilligan argued Kohlberg's research was male-biased. In a sample of $50$ women, $40$ emphasised care-based rather than justice-based reasoning. Calculate the percentage emphasising care, and state Gilligan's main claim.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(care-based / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "40 / 50 = 0.8.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gilligan: women emphasise care over justice.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Percentage = 80%.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "80%",
          },
        },
        {
          id: "olep-u3-md-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define moral reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moral reasoning",
                statement: "Thinking behind moral judgements.",
              },
            ],
            steps: [
              {
                reasoning: "The thinking/reasoning behind right-wrong choices.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Distinct from the behaviour itself.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "The thinking process behind moral judgements and decisions.",
            commonErrors: ["Confusing with moral behaviour."],
          },
        },
        {
          id: "olep-u3-md-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one criticism of Kohlberg's theory of moral development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criticisms",
                statement: "Gender bias, cultural bias, reasoning-behaviour gap.",
              },
            ],
            steps: [
              {
                reasoning: "Name a criticism (e.g. male-biased sample).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Explain it (Gilligan: care vs justice).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Link to theory's limitation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Evaluative conclusion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Any valid criticism explained, e.g. male-biased sample (Gilligan), cultural bias, or reasoning-behaviour discrepancy.",
            commonErrors: ["Listing without explaining."],
          },
        },
        {
          id: "olep-u3-md-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Kohlberg's theory of moral development.",
          parts: [
            { label: "a", prompt: "Who proposed the theory?", marks: 1 },
            { label: "b", prompt: "Name the three levels.", marks: 2 },
            { label: "c", prompt: "Describe stage 1 reasoning.", marks: 2 },
            { label: "d", prompt: "Describe stage 4 reasoning.", marks: 2 },
            { label: "e", prompt: "One criticism?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kohlberg",
                statement: "Theory+levels+stages+criticism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Lawrence Kohlberg.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Pre-conventional.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Conventional+post-conventional.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Punishment/obedience orientation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Avoid punishment basis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Law and order orientation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Maintaining social order.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Male bias/cultural bias/reasoning-behaviour gap.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Criticism elaborated.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) Kohlberg (b) levels (c) stage 1 (d) stage 4 (e) criticism",
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
