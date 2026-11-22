import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cieipsych-u3-lesson-3-3",
  code: "3-3",
  title: "Developmental psychology: attachment, language and morality",
  goal: "I CAN explain attachment theories and stages, language acquisition and moral development.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 4: Developmental psychology",
  ],
  vocabulary: [
    {
      term: "Attachment",
      definition: "Close emotional bond between infant and caregiver.",
    },
    {
      term: "Strange Situation",
      definition: "Ainsworth's procedure classifying attachment types.",
    },
    {
      term: "Secure attachment",
      definition:
        "Infant uses caregiver as safe base, distressed on separation, soothed on return.",
    },
    {
      term: "Internal working model",
      definition:
        "Bowlby's mental template of relationships formed in infancy.",
    },
    {
      term: "Critical period",
      definition:
        "Bowlby's proposed window (~2.5 years) for forming attachments.",
    },
    {
      term: "Monotropy",
      definition:
        "Bowlby's claim that one primary attachment figure is enough.",
    },
    {
      term: "Language acquisition",
      definition: "How children learn to produce and understand language.",
    },
    {
      term: "Universal grammar",
      definition: "Chomsky's innate language rules all humans share.",
    },
    {
      term: "Overgeneralisation",
      definition: "Applying grammar rules too broadly, e.g. 'foots'.",
    },
    {
      term: "Piaget's stages",
      definition:
        "Sensorimotor, preoperational, concrete operational, formal operational.",
    },
    {
      term: "Egocentrism",
      definition:
        "Child's inability to see another's viewpoint (preoperational).",
    },
    {
      term: "Kohlberg's stages",
      definition:
        "Pre-conventional, conventional, post-conventional moral reasoning.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u3-attachment",
      title: "Attachment theory and types",
      skill:
        "Explain Bowlby and Ainsworth's theories and classify attachment styles.",
      lesson: {
        sections: [
          {
            heading: "Bowlby's attachment theory",
            body: "Bowlby proposed attachment is **innate and adaptive** — infants are born with behaviours (crying, smiling, grasping) that keep caregivers close for protection and survival. Attachment forms during a **critical period** (~2.5 years); failure to attach causes **privation** (never had an attachment) or **deprivation** (lost one) leading to long-term emotional damage. He argued for **monotropy** — one primary attachment figure (usually the mother) is essential, though later evidence suggests multiple attachments can be beneficial.",
          },
          {
            heading: "Harlow's monkeys",
            body: "Harlow (1959) tested attachment in rhesus monkeys using wire/cloth surrogate mothers. Monkeys preferred the **cloth mother** for comfort even when only the wire mother provided food — showing **contact comfort** matters more than food. Monkeys with cloth mothers developed better social skills; those with only wire mothers became withdrawn and abusive. This supported Bowlby's view that attachment is about comfort, not just feeding.",
          },
          {
            heading: "Ainsworth's Strange Situation",
            body: "Ainsworth classified attachment by observing infants during separations/reunions with caregivers: **secure** (distressed on separation, easily soothed on return — ~65%), **insecure-avoidant** (little distress, avoids caregiver on return), **insecure-resistant/ambivalent** (very distressed, angry and clingy on return). Later, **disorganised** was added for inconsistent behaviour. Attachment style relates to later relationships via the **internal working model** — a mental template of how relationships work.",
          },
        ],
        keyFormulas: [
          {
            name: "Secure",
            statement: "Distressed on separation, soothed on return",
          },
          {
            name: "Insecure-avoidant",
            statement: "Little distress, avoids caregiver",
          },
          {
            name: "Insecure-resistant",
            statement: "Very distressed, angry/clingy on return",
          },
          {
            name: "Internal working model",
            statement: "Mental template of relationships from early attachment",
          },
        ],
        workedExample: {
          problem:
            "A 12-month-old cries when mother leaves, calms quickly when she returns. Classify attachment.",
          solution:
            "Secure attachment — distressed on separation and easily soothed on return, using mother as safe base.",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-at-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Attachment is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A learned behaviour" },
              {
                id: "b",
                text: "A close emotional bond between infant and caregiver",
              },
              { id: "c", text: "A feeding relationship" },
              { id: "d", text: "A social contract" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Attachment",
                statement: "Close emotional bond infant-caregiver.",
              },
            ],
            steps: [
              {
                reasoning: "Attachment is an emotional bond.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Close emotional bond.",
          },
        },
        {
          id: "cieipsych-u3-at-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bowlby proposed that attachment is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Optional" },
              { id: "b", text: "Only with food" },
              { id: "c", text: "Learned through reinforcement" },
              { id: "d", text: "Innate and adaptive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bowlby on attachment",
                statement: "Innate and adaptive.",
              },
            ],
            steps: [
              {
                reasoning: "Bowlby saw attachment as innate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Innate and adaptive.",
          },
        },
        {
          id: "cieipsych-u3-at-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The critical period for attachment is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 years" },
              { id: "b", text: "2.5 years" },
              { id: "c", text: "1 month" },
              { id: "d", text: "20 years" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical period",
                statement: "~2.5 years for attachment formation.",
              },
            ],
            steps: [
              {
                reasoning: "Critical period ≈ 2.5 years.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 2.5 years.",
          },
        },
        {
          id: "cieipsych-u3-at-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Monotropy refers to Bowlby's claim that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple attachments are impossible" },
              { id: "b", text: "One primary attachment figure is essential" },
              { id: "c", text: "Fathers cannot attach" },
              { id: "d", text: "Attachment is optional" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monotropy",
                statement: "One primary attachment figure suffices.",
              },
            ],
            steps: [
              {
                reasoning: "Monotropy = one primary figure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One primary attachment figure is essential.",
          },
        },
        {
          id: "cieipsych-u3-at-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Harlow's monkeys preferred the cloth mother because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was warmer" },
              { id: "b", text: "It provided food" },
              { id: "c", text: "It provided contact comfort" },
              { id: "d", text: "It was bigger" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contact comfort",
                statement: "Comfort matters more than food for attachment.",
              },
            ],
            steps: [
              {
                reasoning: "Cloth mother provided comfort, not food.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) It provided contact comfort.",
          },
        },
        {
          id: "cieipsych-u3-at-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Strange Situation was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ainsworth" },
              { id: "b", text: "Piaget" },
              { id: "c", text: "Harlow" },
              { id: "d", text: "Bowlby" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ainsworth",
                statement: "Developed Strange Situation classification.",
              },
            ],
            steps: [
              {
                reasoning: "Ainsworth created the Strange Situation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Ainsworth.",
          },
        },
        {
          id: "cieipsych-u3-at-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A securely attached infant on reunion with caregiver typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is angry and clingy" },
              { id: "b", text: "Shows no reaction" },
              { id: "c", text: "Avoids the caregiver" },
              { id: "d", text: "Is easily soothed and returns to play" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secure reunion",
                statement: "Easily soothed on return.",
              },
            ],
            steps: [
              {
                reasoning: "Secure infants are soothed quickly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Easily soothed and returns to play.",
          },
        },
        {
          id: "cieipsych-u3-at-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An insecure-avoidant infant typically:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Shows little distress and avoids caregiver on return",
              },
              { id: "b", text: "Is angry" },
              { id: "c", text: "Is very distressed" },
              { id: "d", text: "Is easily soothed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insecure-avoidant",
                statement: "Little distress, avoids caregiver.",
              },
            ],
            steps: [
              {
                reasoning: "Avoidant = little distress, avoidance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Little distress, avoids caregiver.",
          },
        },
        {
          id: "cieipsych-u3-at-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An insecure-resistant infant typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is easily soothed" },
              { id: "b", text: "Shows no distress" },
              {
                id: "c",
                text: "Is very distressed and angry/clingy on return",
              },
              { id: "d", text: "Avoids caregiver" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insecure-resistant",
                statement: "Very distressed, angry/clingy.",
              },
            ],
            steps: [
              {
                reasoning: "Resistant = angry and clingy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Very distressed, angry/clingy.",
          },
        },
        {
          id: "cieipsych-u3-at-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the internal working model?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal working model",
                statement:
                  "Mental template of relationships from early attachment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It's a mental template formed in infancy about how relationships work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It influences later relationships — e.g. secure infants become confident adults.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mental template of relationships formed in infancy; influences later relationships.",
          },
        },
        {
          id: "cieipsych-u3-at-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between privation and deprivation in attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Privation vs deprivation",
                statement: "Never had vs lost attachment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Privation: never had an attachment formed (e.g. institutionalised).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deprivation: had an attachment but lost it (e.g. bereavement).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Privation = never attached; deprivation = lost attachment.",
          },
        },
        {
          id: "cieipsych-u3-at-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Harlow's study supports Bowlby's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harlow's support",
                statement: "Contact comfort > food for attachment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monkeys preferred cloth mother even when wire mother fed them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shows attachment is about comfort/security, not just feeding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supports Bowlby's view of innate attachment needs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Contact comfort preferred over food → supports innate attachment theory.",
          },
        },
        {
          id: "cieipsych-u3-at-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Bowlby's monotropy hypothesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monotropy evaluation",
                statement: "One primary figure may be too restrictive.",
              },
            ],
            steps: [
              {
                reasoning: "Bowlby argued one primary figure is essential.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence shows infants form multiple attachments (mother, father, siblings).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiple attachments can be beneficial — more secure base.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "So monotropy is too restrictive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evidence shows multiple attachments are normal and beneficial — monotropy too restrictive.",
          },
        },
        {
          id: "cieipsych-u3-at-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Strange Situation measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory" },
              { id: "b", text: "Language" },
              {
                id: "c",
                text: "Attachment type through separation and reunion behaviour",
              },
              { id: "d", text: "Intelligence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strange Situation",
                statement: "Classifies attachment via separation/reunion.",
              },
            ],
            steps: [
              {
                reasoning: "Strange Situation measures attachment type.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Attachment type.",
          },
        },
        {
          id: "cieipsych-u3-at-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'safe base' concept in attachment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Safe base",
                statement: "Caregiver provides security for exploration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Securely attached infants use caregiver as a base for exploring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They return to caregiver when threatened.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Caregiver provides security for exploration; infant returns when threatened.",
          },
        },
        {
          id: "cieipsych-u3-at-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Harlow's research was conducted on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhesus monkeys" },
              { id: "b", text: "Adult humans" },
              { id: "c", text: "Dogs" },
              { id: "d", text: "Human infants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harlow's subjects",
                statement: "Rhesus monkeys.",
              },
            ],
            steps: [
              {
                reasoning: "Harlow used rhesus monkeys.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rhesus monkeys.",
          },
        },
        {
          id: "cieipsych-u3-at-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does Ainsworth's 'insecure-disorganised' attachment look like?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Disorganised attachment",
                statement: "Inconsistent, confused behaviour on reunion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Infant shows contradictory behaviour — approaches then freezes or falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Often linked to abusive or frightening caregivers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inconsistent/confused behaviour; linked to frightening caregivers.",
          },
        },
        {
          id: "cieipsych-u3-at-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how attachment style might affect adult relationships.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attachment continuity",
                statement:
                  "Early attachment → internal working model → adult relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Early attachment forms an internal working model of relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Secure infants → confident adults who trust partners.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Insecure attachment → difficulties trusting or depending on others.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Internal working model carries early attachment into adult relationships.",
          },
        },
        {
          id: "cieipsych-u3-at-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Ainsworth's Strange Situation as a measure of attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strange Situation evaluation",
                statement: "Controlled but culturally limited.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: controlled, standardised procedure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: predicts later outcomes (social skills, relationships).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: one observation may not reflect stable attachment.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: culturally biased — secure style may not be universal ideal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Standardised and predictive but single-observation and culturally limited.",
          },
        },
        {
          id: "cieipsych-u3-at-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately what percentage of infants show secure attachment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10%" },
              { id: "b", text: "90%" },
              { id: "c", text: "65%" },
              { id: "d", text: "50%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secure prevalence",
                statement: "~65% of infants show secure attachment.",
              },
            ],
            steps: [
              {
                reasoning: "~65% show secure attachment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 65%.",
          },
        },
        {
          id: "cieipsych-u3-at-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is Bowlby's 'maternal deprivation hypothesis'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maternal deprivation",
                statement: "Failure to form attachment causes lasting harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lack of attachment during critical period causes emotional damage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "He argued mothers should stay at home with young children.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lack of attachment causes lasting emotional harm.",
          },
        },
        {
          id: "cieipsych-u3-at-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Harlow's findings challenged learning theory explanations of attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harlow vs learning theory",
                statement: "Attachment isn't just about food/reward.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Learning theory said attachment = association with food (primary reinforcer).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But monkeys attached to cloth mother that gave no food.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This showed contact comfort matters more than feeding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Attachment to comfort-giving mother, not food-giving one → not just learning.",
          },
        },
        {
          id: "cieipsych-u3-at-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a study to test whether attachment style affects later friendships.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Correlational or longitudinal approach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use longitudinal design — measure attachment in infancy, friendships later.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strange Situation for attachment; self-report or observation for friendships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Control for confounding variables (family background, temperament).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethical issues: confidentiality, consent, right to withdraw.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Longitudinal design with Strange Situation + friendship measures; control confounds.",
          },
        },
        {
          id: "cieipsych-u3-at-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The internal working model is a concept from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Harlow" },
              { id: "b", text: "Ainsworth" },
              { id: "c", text: "Skinner" },
              { id: "d", text: "Bowlby" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bowlby's model",
                statement: "Internal working model is Bowlby's concept.",
              },
            ],
            steps: [
              {
                reasoning: "Bowlby proposed internal working model.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Bowlby.",
          },
        },
        {
          id: "cieipsych-u3-at-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'privation' in attachment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Privation",
                statement: "Never having formed an attachment.",
              },
            ],
            steps: [
              {
                reasoning: "Privation means never having an attachment figure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "E.g. children raised in institutions without consistent care.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Never having formed an attachment.",
          },
        },
        {
          id: "cieipsych-u3-at-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Ainsworth's Strange Situation distinguishes secure from insecure attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strange Situation distinctions",
                statement: "Behaviour on separation and reunion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secure: distressed on separation, easily soothed on return.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Insecure-avoidant: little distress, avoids caregiver.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Insecure-resistant: very distressed, angry/clingy on return.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Secure = soothed easily; insecure types show avoidance or resistance.",
          },
        },
        {
          id: "cieipsych-u3-at-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Strange Situation was conducted with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infants aged 12-18 months" },
              { id: "b", text: "Adults" },
              { id: "c", text: "Elderly" },
              { id: "d", text: "Newborns" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strange Situation age",
                statement: "Used with infants ~12-18 months.",
              },
            ],
            steps: [
              {
                reasoning: "Strange Situation used with infants.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Infants aged 12-18 months.",
          },
        },
        {
          id: "cieipsych-u3-at-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'deprivation' in attachment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deprivation",
                statement: "Losing an attachment that existed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deprivation means losing an attachment that had formed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "E.g. separation through bereavement or institutional care.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Losing an attachment that had formed.",
          },
        },
        {
          id: "cieipsych-u3-at-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate Harlow's monkey studies as evidence for attachment theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harlow evaluation",
                statement: "Supports comfort > food but has ethical issues.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: clearly showed contact comfort > food.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: controlled conditions, clear IV/DV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: ethical issues — monkeys raised in isolation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: animal studies may not generalise to humans.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strong evidence for comfort > food but ethical concerns and generalisation issues.",
          },
        },
        {
          id: "cieipsych-u3-at-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might attachment be adaptive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adaptive value",
                statement: "Attachment protects infants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Attachment keeps infants close to caregivers for protection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This increases survival chances — adaptive behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Keeps infants protected → increases survival → adaptive.",
          },
        },
      ],
    },
    {
      id: "cieipsych-u3-lang-moral",
      title: "Language acquisition and moral development",
      skill:
        "Explain theories of language acquisition and stages of moral reasoning.",
      lesson: {
        sections: [
          {
            heading: "Language acquisition theories",
            body: "**Skinner (behaviourist)**: language is learned through reinforcement — parents reward correct speech, children imitate. **Chomsky (nativist)**: humans are born with an innate **Language Acquisition Device (LAD)** containing universal grammar rules — explaining why children acquire language rapidly and create novel sentences. **Social interactionist**: language develops through social interaction — caregivers scaffold learning. Evidence: children overgeneralise rules ('foots') showing rule-learning, not just imitation.",
          },
          {
            heading: "Piaget's stages of cognitive development",
            body: "**Sensorimotor (0-2y)**: learns through senses and actions; develops object permanence. **Preoperational (2-7y)**: uses symbols and language but egocentric — can't take others' viewpoints; lacks conservation. **Concrete operational (7-11y)**: understands conservation and logical operations with concrete objects; still can't think abstractly. **Formal operational (11y+)**: can think abstractly and hypothetically.",
          },
          {
            heading: "Kohlberg's stages of moral development",
            body: "**Pre-conventional** (self-interest): Stage 1 obedience/punishment ('don't steal or I'll be punished'), Stage 2 individualism ('what's in it for me?'). **Conventional** (social rules): Stage 3 good boy/girl ('be nice to be liked'), Stage 4 law and order ('rules maintain society'). **Post-conventional** (principles): Stage 5 social contract ('laws can be changed if unjust'), Stage 6 universal ethical principles ('human rights above laws').",
          },
        ],
        keyFormulas: [
          {
            name: "Piaget stages",
            statement: "Sensorimotor → preoperational → concrete → formal",
          },
          {
            name: "Kohlberg levels",
            statement: "Pre-conventional → conventional → post-conventional",
          },
          {
            name: "Chomsky",
            statement: "Innate LAD + universal grammar",
          },
        ],
        workedExample: {
          problem:
            "A child says 'the sun follows me'. Which Piaget stage and concept?",
          solution:
            "Preoperational stage — egocentrism: the child can't take the sun's viewpoint and assumes everything revolves around them.",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-lm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Skinner's behaviourist view of language acquisition is that language is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genetic" },
              { id: "b", text: "Automatic" },
              { id: "c", text: "Learned through reinforcement and imitation" },
              { id: "d", text: "Innate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Skinner",
                statement: "Language learned through reinforcement.",
              },
            ],
            steps: [
              {
                reasoning: "Skinner = reinforcement and imitation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Learned through reinforcement.",
          },
        },
        {
          id: "cieipsych-u3-lm-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Chomsky proposed that language ability is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impossible without teaching" },
              {
                id: "b",
                text: "Innate — humans are born with a Language Acquisition Device",
              },
              { id: "c", text: "Learned only through reward" },
              { id: "d", text: "Only in adults" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chomsky",
                statement: "Innate LAD + universal grammar.",
              },
            ],
            steps: [
              {
                reasoning: "Chomsky = innate language ability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Innate LAD.",
          },
        },
        {
          id: "cieipsych-u3-lm-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Language Acquisition Device (LAD) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A teaching method" },
              { id: "b", text: "A speech therapy tool" },
              { id: "c", text: "An innate mechanism for acquiring language" },
              { id: "d", text: "A computer program" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LAD",
                statement: "Innate language acquisition mechanism.",
              },
            ],
            steps: [
              {
                reasoning: "LAD = innate language mechanism.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Innate language mechanism.",
          },
        },
        {
          id: "cieipsych-u3-lm-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Universal grammar refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A specific language" },
              { id: "b", text: "Dialect differences" },
              {
                id: "c",
                text: "Innate rules of language shared by all humans",
              },
              { id: "d", text: "Grammar books" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Universal grammar",
                statement: "Innate language rules shared by all humans.",
              },
            ],
            steps: [
              {
                reasoning: "Universal grammar = innate shared rules.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Innate shared rules.",
          },
        },
        {
          id: "cieipsych-u3-lm-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Overgeneralisation in language acquisition refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using too many words" },
              {
                id: "b",
                text: "Applying grammar rules too broadly, e.g. 'foots'",
              },
              { id: "c", text: "Speaking too slowly" },
              { id: "d", text: "Speaking too loudly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Overgeneralisation",
                statement: "Applying rules too broadly.",
              },
            ],
            steps: [
              {
                reasoning: "Overgeneralisation = rule applied too broadly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Applying rules too broadly.",
          },
        },
        {
          id: "cieipsych-u3-lm-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Overgeneralisation provides evidence for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rule-learning rather than pure imitation" },
              { id: "b", text: "Children can't learn grammar" },
              { id: "c", text: "Language is learned by reward" },
              { id: "d", text: "Parents teach grammar" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Overgeneralisation evidence",
                statement: "Shows rule-learning, not imitation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Foots' shows children apply rules, not just imitate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rule-learning rather than imitation.",
          },
        },
        {
          id: "cieipsych-u3-lm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Piaget's first stage of cognitive development is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Preoperational" },
              { id: "b", text: "Formal operational" },
              { id: "c", text: "Concrete operational" },
              { id: "d", text: "Sensorimotor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensorimotor",
                statement: "First Piaget stage (0-2 years).",
              },
            ],
            steps: [
              {
                reasoning: "Sensorimotor is first stage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sensorimotor.",
          },
        },
        {
          id: "cieipsych-u3-lm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Object permanence develops during:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal operational stage" },
              { id: "b", text: "Adulthood" },
              { id: "c", text: "Sensorimotor stage" },
              { id: "d", text: "Preoperational stage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Object permanence",
                statement: "Develops in sensorimotor stage.",
              },
            ],
            steps: [
              {
                reasoning: "Object permanence = sensorimotor.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sensorimotor stage.",
          },
        },
        {
          id: "cieipsych-u3-lm-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Egocentrism is characteristic of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensorimotor stage" },
              { id: "b", text: "Formal operational stage" },
              { id: "c", text: "Preoperational stage" },
              { id: "d", text: "Adulthood" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Egocentrism",
                statement: "Can't take others' viewpoints (preoperational).",
              },
            ],
            steps: [
              {
                reasoning: "Egocentrism = preoperational.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Preoperational stage.",
          },
        },
        {
          id: "cieipsych-u3-lm-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between Skinner's and Chomsky's views on language acquisition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Language theories",
                statement: "Behaviourist vs nativist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Skinner: language learned through reinforcement and imitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Chomsky: language is innate — LAD + universal grammar.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Skinner = learned; Chomsky = innate.",
          },
        },
        {
          id: "cieipsych-u3-lm-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is conservation in Piaget's theory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conservation",
                statement:
                  "Understanding quantity stays same despite appearance change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Understanding that amount doesn't change when appearance does.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Develops in concrete operational stage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Understanding quantity stays same despite appearance changes; concrete operational.",
          },
        },
        {
          id: "cieipsych-u3-lm-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why overgeneralisation challenges Skinner's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Overgeneralisation challenge",
                statement: "Children create novel forms, not just imitate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Skinner said children imitate correct speech rewarded by parents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But 'foots' and 'goed' are novel — not imitations of correct speech.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shows children learn rules and overapply them — supports Chomsky.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Novel overgeneralised forms show rule-learning, not imitation.",
          },
        },
        {
          id: "cieipsych-u3-lm-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 5-year-old says 'the sun follows me because I am special'. Explain using Piaget.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Piaget application",
                statement: "Identify stage and concept.",
              },
            ],
            steps: [
              {
                reasoning: "5 years old = preoperational stage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can't take the sun's viewpoint — egocentrism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Assumes everything revolves around self.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lacks conservation and logical operations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Preoperational egocentrism — can't see from sun's viewpoint.",
          },
        },
        {
          id: "cieipsych-u3-lm-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The formal operational stage typically begins around:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 years" },
              { id: "b", text: "11-12 years" },
              { id: "c", text: "7 years" },
              { id: "d", text: "18 years" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal operational age",
                statement: "Begins ~11-12 years.",
              },
            ],
            steps: [
              {
                reasoning: "Formal operational begins ~11-12.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 11-12 years.",
          },
        },
        {
          id: "cieipsych-u3-lm-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is Kohlberg's pre-conventional level?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pre-conventional",
                statement: "Moral reasoning based on self-interest.",
              },
            ],
            steps: [
              {
                reasoning: "Stage 1: obedience/punishment — avoid punishment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stage 2: individualism — what's in it for me.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Self-interest level: punishment avoidance and personal gain.",
          },
        },
        {
          id: "cieipsych-u3-lm-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Kohlberg's conventional level is based on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Universal principles" },
              { id: "b", text: "Social rules and approval" },
              { id: "c", text: "Punishment" },
              { id: "d", text: "Self-interest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conventional level",
                statement: "Based on social rules and approval.",
              },
            ],
            steps: [
              {
                reasoning: "Conventional = social rules.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Social rules and approval.",
          },
        },
        {
          id: "cieipsych-u3-lm-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is Kohlberg's 'law and order' stage?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Law and order",
                statement: "Stage 4 — rules maintain social order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Moral reasoning based on maintaining social order through rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Believes laws should be obeyed regardless of personal views.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rules maintain social order; laws must be obeyed.",
          },
        },
        {
          id: "cieipsych-u3-lm-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Kohlberg's stages differ from Piaget's stages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget vs Kohlberg",
                statement: "Cognitive vs moral development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Piaget studied cognitive development — thinking abilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Kohlberg studied moral reasoning — how we judge right/wrong.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both are stage theories but different domains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Piaget = cognitive thinking; Kohlberg = moral reasoning.",
          },
        },
        {
          id: "cieipsych-u3-lm-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Chomsky's nativist theory of language acquisition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chomsky evaluation",
                statement: "Explains rapid acquisition but LAD unproven.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: explains rapid language acquisition in children.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: overgeneralisation shows rule-learning, not imitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: no direct evidence for LAD or universal grammar.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: ignores social interaction's role in language.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains acquisition speed and overgeneralisation but LAD unproven; ignores social role.",
          },
        },
        {
          id: "cieipsych-u3-lm-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Concrete operational children can understand:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Abstract ideas" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Conservation" },
              { id: "d", text: "Hypotheticals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concrete operational",
                statement: "Understands conservation.",
              },
            ],
            steps: [
              {
                reasoning: "Concrete operational = conservation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Conservation.",
          },
        },
        {
          id: "cieipsych-u3-lm-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is Kohlberg's post-conventional level?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Post-conventional",
                statement: "Based on universal ethical principles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stage 5: social contract — laws can change if unjust.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stage 6: universal principles — human rights above laws.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Based on universal ethical principles; laws can be questioned.",
          },
        },
        {
          id: "cieipsych-u3-lm-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the 'three mountains task' demonstrates egocentrism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Three mountains task",
                statement: "Shows preoperational egocentrism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Child shown a model of mountains from different viewpoints.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Asked to choose what a doll at another position sees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Preoperational children choose their own view — egocentric.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Children can't see from doll's viewpoint — egocentrism.",
          },
        },
        {
          id: "cieipsych-u3-lm-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Piaget's stage theory of cognitive development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget evaluation",
                statement: "Comprehensive but rigid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: comprehensive framework for cognitive development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: supported by evidence (object permanence, conservation).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: stages may not be as discrete as proposed.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: understates social/cultural influences on development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Comprehensive and supported but stages may be less discrete than proposed.",
          },
        },
        {
          id: "cieipsych-u3-lm-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Kohlberg's 'good boy/good girl' stage belongs to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensorimotor" },
              { id: "b", text: "Conventional level" },
              { id: "c", text: "Post-conventional level" },
              { id: "d", text: "Pre-conventional level" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Good boy/girl",
                statement: "Stage 3 — conventional level.",
              },
            ],
            steps: [
              {
                reasoning: "Good boy/girl = conventional.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Conventional level.",
          },
        },
        {
          id: "cieipsych-u3-lm-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'social contract' stage in Kohlberg's theory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social contract",
                statement: "Stage 5 — laws can be changed if unjust.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Laws are social agreements that can be changed if they violate rights.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Majority rules but individual rights protected.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Laws can be changed if unjust; majority rules with rights protected.",
          },
        },
        {
          id: "cieipsych-u3-lm-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how social interactionist theory differs from both Skinner and Chomsky.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social interactionist",
                statement: "Language develops through social interaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unlike Skinner — emphasizes social interaction, not just reinforcement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike Chomsky — no innate LAD; language is socially constructed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Caregivers scaffold children's language learning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Language developed through social interaction — neither pure learning nor innate.",
          },
        },
        {
          id: "cieipsych-u3-lm-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Piaget stage involves conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Preoperational" },
              { id: "b", text: "Concrete operational" },
              { id: "c", text: "Sensorimotor" },
              { id: "d", text: "Formal operational" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation stage",
                statement: "Concrete operational.",
              },
            ],
            steps: [
              {
                reasoning: "Conservation = concrete operational.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Concrete operational.",
          },
        },
        {
          id: "cieipsych-u3-lm-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is Kohlberg's 'universal ethical principles' stage?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Universal principles",
                statement: "Stage 6 — human rights above laws.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Moral reasoning based on universal human rights and dignity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May break laws if they violate these principles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Human rights above laws; may break unjust laws.",
          },
        },
        {
          id: "cieipsych-u3-lm-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate Kohlberg's theory of moral development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kohlberg evaluation",
                statement: "Comprehensive but culturally biased.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: comprehensive stages of moral reasoning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: supported by evidence across cultures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: based on male participants — gender bias.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: post-conventional stage rarely reached; culturally biased.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Comprehensive but gender-biased and culturally limited.",
          },
        },
        {
          id: "cieipsych-u3-lm-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is language considered uniquely human?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Language uniqueness",
                statement: "Complex, creative, rule-governed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Humans can create novel sentences using grammar rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Animals communicate but lack this generative capacity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unique ability to create novel grammatical sentences.",
          },
        },
      ],
    },
  ],
};
