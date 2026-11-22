import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olep-u1-lesson-1-3",
  code: "1-3",
  title: "Humanistic, Biological and Social Approaches",
  goal: "I CAN describe the humanistic, biological and social approaches to psychology.",
  standards: ["2219: Approaches to psychology"],
  vocabulary: [
    {
      term: "Humanistic approach",
      definition: "Approach emphasising free will and self-actualisation.",
    },
    {
      term: "Self-actualisation",
      definition: "Realising one's full potential.",
    },
    {
      term: "Biological approach",
      definition: "Approach studying brain, genes and physiology.",
    },
    {
      term: "Social approach",
      definition: "Approach studying how others influence behaviour.",
    },
    {
      term: "Twin studies",
      definition:
        "Comparing identical/fraternal twins to study nature vs nurture.",
    },
    {
      term: "Social facilitation",
      definition: "Improved performance when others are present.",
    },
  ],
  concepts: [
    {
      id: "olep-u1-humanistic-bio",
      title: "Humanistic and biological approaches",
      skill: "Describe humanistic and biological approaches.",
      lesson: {
        sections: [
          {
            heading: "Humanistic approach",
            body: "Rogers, Maslow: focus on free will, personal growth, self-actualisation. Maslow's hierarchy: physiological → safety → love/belonging → esteem → self-actualisation. Client-centred therapy: unconditional positive regard.",
          },
          {
            heading: "Biological approach",
            body: "Behaviour determined by biology — genes, brain, hormones. Twin studies compare identical (same genes) vs fraternal twins. Case studies of brain damage show localisation. neurotransmitters affect mood.",
          },
          {
            heading: "Nature vs nurture",
            body: "Nature: genetics/biology; Nurture: environment/experience. Twin studies provide evidence — identical twins more similar even when raised apart. Most accept interaction between both.",
          },
        ],
        keyFormulas: [
          {
            name: "Humanistic/bio",
            statement: "Humanistic=free will+growth; Biological=genes+brain.",
          },
        ],
        workedExample: {
          problem: "How do twin studies inform nature vs nurture?",
          solution:
            "Identical twins share 100% genes; if more similar than fraternal twins, suggests genetic influence.",
        },
      },
      questions: [
        {
          id: "olep-u1-hb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is self-actualisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoiding punishment" },
              { id: "b", text: "Realising one's full potential" },
              { id: "c", text: "Unconscious desire" },
              { id: "d", text: "Copying others" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Self-actualisation",
                statement: "Realising full potential.",
              },
            ],
            steps: [
              {
                reasoning: "Self-actualisation = full potential.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Realising full potential",
            commonErrors: ["Confusing with basic needs."],
          },
        },
        {
          id: "olep-u1-hb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a twin study?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Twin study",
                statement: "Comparing identical vs fraternal twins.",
              },
            ],
            steps: [
              {
                reasoning: "Compare identical/fraternal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Studies nature vs nurture.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Comparing identical/fraternal twins for nature vs nurture.",
            commonErrors: ["Saying it's about reproduction."],
          },
        },
        {
          id: "olep-u1-hb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Maslow's hierarchy of needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow",
                statement:
                  "Physiological→safety→love→esteem→self-actualisation.",
              },
            ],
            steps: [
              { reasoning: "Lower needs first.", marks: 1, markCode: "AO1" },
              { reasoning: "Higher needs later.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Self-actualisation at top.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear hierarchy.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Physiological→safety→love→esteem→self-actualisation.",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "olep-u1-hb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Humanistic and biological.",
          parts: [
            { label: "a", prompt: "Define self-actualisation.", marks: 1 },
            { label: "b", prompt: "Define twin study.", marks: 2 },
            { label: "c", prompt: "Maslow's hierarchy?", marks: 3 },
            { label: "d", prompt: "Biological approach evidence?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Humanistic/bio",
                statement: "Definitions+theory+evidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Full potential.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Identical vs fraternal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Nature vs nurture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Five levels.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Genes/brain/hormones.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Twin studies/brain damage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Evidence used.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) self-actualisation (b) twin study (c) Maslow (d) bio evidence",
          },
        },
        {
          id: "olep-u1-hb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which psychologist developed the hierarchy of needs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carl Rogers" },
              { id: "b", text: "Albert Bandura" },
              { id: "c", text: "Sigmund Freud" },
              { id: "d", text: "Abraham Maslow" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow",
                statement: "Hierarchy of needs.",
              },
            ],
            steps: [
              {
                reasoning: "Maslow proposed the hierarchy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Abraham Maslow",
            commonErrors: ["Confusing with Rogers."],
          },
        },
        {
          id: "olep-u1-hb-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In client-centred therapy, unconditional positive regard means the therapist...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "gives the client direct advice" },
              { id: "b", text: "accepts the client without judgement" },
              { id: "c", text: "interprets unconscious conflicts" },
              { id: "d", text: "only praises good behaviour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unconditional positive regard",
                statement: "Accept client without judgement.",
              },
            ],
            steps: [
              {
                reasoning: "UPR = acceptance without conditions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Accepts the client without judgement",
            commonErrors: ["Thinking it means constant praise."],
          },
        },
        {
          id: "olep-u1-hb-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Twin studies provide the strongest evidence for which side of the nature-nurture debate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nurture only" },
              { id: "b", text: "Nature — genetic influence" },
              { id: "c", text: "Neither side" },
              { id: "d", text: "Cultural influence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Twin studies",
                statement: "Evidence for genetic (nature) influence.",
              },
            ],
            steps: [
              {
                reasoning: "Comparing identical vs fraternal twins tests genes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Nature — genetic influence",
            commonErrors: ["Saying nurture."],
          },
        },
        {
          id: "olep-u1-hb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the biological approach study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How groups influence behaviour" },
              { id: "b", text: "Only childhood experiences" },
              { id: "c", text: "Unconscious conflicts" },
              {
                id: "d",
                text: "Genes, brain, hormones and physiology",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biological approach",
                statement: "Genes, brain, hormones, physiology.",
              },
            ],
            steps: [
              {
                reasoning: "Bio approach = biology of behaviour.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Genes, brain, hormones, physiology",
            commonErrors: ["Confusing with social approach."],
          },
        },
        {
          id: "olep-u1-hb-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A researcher finds identical twins raised apart are much more similar in a trait than fraternal twins raised together. What does this most strongly suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identical twins are always identical" },
              { id: "b", text: "Nurture is irrelevant" },
              { id: "c", text: "Environment has no effect at all" },
              { id: "d", text: "Genetic factors strongly influence the trait" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature vs nurture",
                statement: "Twin similarity → genetic influence.",
              },
            ],
            steps: [
              {
                reasoning: "Identical twins share genes, not environment when apart.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Similarity suggests genetic influence.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Genetic factors strongly influence the trait",
            commonErrors: ["Ignoring that environment still plays a role."],
          },
        },
        {
          id: "olep-u1-hb-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a twin study, identical twins show $80\\%$ similarity in a personality trait and fraternal twins show $45\\%$. Calculate the percentage-point difference in similarity.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 35, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Difference",
                statement: "identical similarity - fraternal similarity.",
              },
            ],
            steps: [
              {
                reasoning: "Difference = 80 - 45 = 35 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 35%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "35%",
          },
        },
        {
          id: "olep-u1-hb-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A class of $28$ students is assessed on Maslow's hierarchy. $21$ students have reached at least the esteem level. What percentage of the class has reached esteem or above?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(part / whole) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Fraction = 21 / 28 = 0.75.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 0.75 x 100 = 75%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "olep-u1-hb-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A genetic-marker study found that $42$ out of $56$ participants carrying the marker showed the trait. Calculate the percentage showing the trait.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(showing trait / carriers) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Fraction = 42 / 56 = 0.75.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 75%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "olep-u1-hb-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A patient's serotonin level averaged $120$ units before treatment and $90$ units after $8$ weeks. Calculate the percentage decrease.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage decrease",
                statement: "(original - new) / original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Decrease = 120 - 90 = 30 units.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fraction = 30 / 120 = 0.25.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage decrease = 25%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "olep-u1-hb-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define the humanistic approach to psychology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Humanistic approach",
                statement: "Free will, growth, self-actualisation.",
              },
            ],
            steps: [
              {
                reasoning: "Emphasis on free will and personal growth.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Mentions self-actualisation or Rogers/Maslow.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Emphasises free will, personal growth and self-actualisation.",
            commonErrors: ["Confusing with behavioural approach."],
          },
        },
        {
          id: "olep-u1-hb-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how twin studies are used to investigate the nature-nurture debate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin studies",
                statement: "Identical vs fraternal comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Identical twins share 100% genes; fraternal ~50%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Compare similarity between twin types.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Twins raised apart add environmental control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Greater identical-twin similarity suggests genes matter.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Identical twins share all genes; comparing them with fraternal twins shows whether similarity is genetic or environmental.",
            commonErrors: ["Not explaining why twin types differ genetically."],
          },
        },
        {
          id: "olep-u1-hb-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Humanistic and biological approaches.",
          parts: [
            { label: "a", prompt: "Name the psychologist of the hierarchy of needs.", marks: 1 },
            { label: "b", prompt: "Define the biological approach.", marks: 2 },
            { label: "c", prompt: "Describe a twin study.", marks: 2 },
            { label: "d", prompt: "Give one piece of biological evidence.", marks: 2 },
            { label: "e", prompt: "Evaluate the humanistic approach.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Humanistic/bio",
                statement: "Theory+evidence+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Abraham Maslow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Studies genes, brain, hormones.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Behaviour determined by biology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Compare identical vs fraternal twins.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Used for nature vs nurture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Twin studies/brain damage/neurotransmitters.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Evidence linked to biology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Strength: free will, holistic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Limitation: unscientific, hard to test.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) Maslow (b) biological approach (c) twin study (d) bio evidence (e) evaluation",
          },
        },
      ],
    },
    {
      id: "olep-u1-social",
      title: "Social approach and social behaviour",
      skill:
        "Describe the social approach and key social psychological phenomena.",
      lesson: {
        sections: [
          {
            heading: "Social approach",
            body: "How others influence behaviour — conformity, obedience, attitudes, prejudice. Asch conformity, Milgram obedience, social identity theory. Group influence on individual behaviour.",
          },
          {
            heading: "Conformity and obedience",
            body: "Conformity: matching group norms (Asch ~33%). Obedience: following authority (Milgram ~65%). Normative influence: want to be liked. Informational: want to be right.",
          },
          {
            heading: "Prejudice and discrimination",
            body: "Prejudice: negative attitudes toward groups. Discrimination: behaviour based on prejudice. Causes: social learning, realistic conflict, social identity. Can be reduced through contact (Allport's contact hypothesis).",
          },
        ],
        keyFormulas: [
          {
            name: "Social",
            statement:
              "Conformity=group norms; Obedience=authority; Prejudice=attitudes.",
          },
        ],
        workedExample: {
          problem: "How does social identity theory explain prejudice?",
          solution:
            "We favour our in-group to boost self-esteem — out-groups become targets for prejudice.",
        },
      },
      questions: [
        {
          id: "olep-u1-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is conformity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disagreeing" },
              { id: "b", text: "Copying exactly" },
              { id: "c", text: "Matching group norms" },
              { id: "d", text: "Following orders" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity",
                statement: "Match group norms.",
              },
            ],
            steps: [
              {
                reasoning: "Conformity = group norms.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Matching group norms",
            commonErrors: ["Confusing with obedience."],
          },
        },
        {
          id: "olep-u1-so-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What did Asch's conformity study find?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asch",
                statement: "~33% conformity on clear wrong answers.",
              },
            ],
            steps: [
              { reasoning: "~33% conformed.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Even when obviously wrong.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "~33% conformity on clear wrong answers.",
            commonErrors: ["Saying 100%."],
          },
        },
        {
          id: "olep-u1-so-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between prejudice and discrimination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prejudice vs discrimination",
                statement: "Attitudes vs behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Prejudice = attitudes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Discrimination = behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Can exist without each other.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Prejudice=attitudes; discrimination=behaviour.",
            commonErrors: ["Using interchangeably."],
          },
        },
        {
          id: "olep-u1-so-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Social approach.",
          parts: [
            { label: "a", prompt: "Define conformity.", marks: 1 },
            { label: "b", prompt: "Asch finding?", marks: 2 },
            { label: "c", prompt: "Prejudice vs discrimination?", marks: 3 },
            { label: "d", prompt: "How reduce prejudice?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social",
                statement: "Conformity+Asch+prejudice+reduction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Group norms.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "~33%.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "Wrong answers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Attitudes vs behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Distinction clear.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Contact hypothesis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Equal status.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cooperation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) conformity (b) Asch (c) prejudice/discrimination (d) reduction",
          },
        },
        {
          id: "olep-u1-so-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Obedience is best defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "copying a model" },
              { id: "b", text: "following direct orders from an authority" },
              { id: "c", text: "matching group norms" },
              { id: "d", text: "disagreeing with the group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obedience",
                statement: "Following authority's orders.",
              },
            ],
            steps: [
              {
                reasoning: "Obedience = authority, not peers.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Following direct orders from an authority",
            commonErrors: ["Confusing with conformity."],
          },
        },
        {
          id: "olep-u1-so-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Normative social influence leads people to conform in order to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "be liked and accepted by the group" },
              { id: "b", text: "gain information about reality" },
              { id: "c", text: "express their true beliefs" },
              { id: "d", text: "avoid punishment from authority" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normative influence",
                statement: "Conform to be liked.",
              },
            ],
            steps: [
              {
                reasoning: "Normative = social acceptance.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Be liked and accepted by the group",
            commonErrors: ["Confusing with informational influence."],
          },
        },
        {
          id: "olep-u1-so-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Informational social influence occurs when people conform because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "an authority orders them" },
              { id: "b", text: "they are unsure and treat others as a source of information" },
              { id: "c", text: "they fear rejection" },
              { id: "d", text: "they want to be liked" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informational influence",
                statement: "Conform because others seem right.",
              },
            ],
            steps: [
              {
                reasoning: "Informational = others as information source.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Unsure — treat others as a source of information",
            commonErrors: ["Confusing with normative influence."],
          },
        },
        {
          id: "olep-u1-so-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Social identity theory explains prejudice mainly through...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "competition for resources only" },
              { id: "b", text: "classical conditioning" },
              { id: "c", text: "in-group favouritism boosting self-esteem" },
              { id: "d", text: "obedience to authority" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social identity",
                statement: "In-group favouritism → prejudice.",
              },
            ],
            steps: [
              {
                reasoning: "Favouring own group boosts self-esteem.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** In-group favouritism boosting self-esteem",
            commonErrors: ["Confusing with realistic conflict."],
          },
        },
        {
          id: "olep-u1-so-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to Allport's contact hypothesis, prejudice is most likely to be reduced when groups...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "are kept fully separate" },
              { id: "b", text: "compete for limited resources" },
              { id: "c", text: "meet only briefly and informally" },
              { id: "d", text: "have equal-status contact and work together toward shared goals" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contact hypothesis",
                statement: "Equal-status contact reduces prejudice.",
              },
            ],
            steps: [
              {
                reasoning: "Conditions: equal status, cooperation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Equal-status contact toward shared goals",
            commonErrors: ["Thinking any contact reduces prejudice."],
          },
        },
        {
          id: "olep-u1-so-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a replication study, $15$ out of $60$ participants conformed to an incorrect group answer at least once. Calculate the conformity rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(conformers / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Fraction = 15 / 60 = 0.25.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Rate = 0.25 x 100 = 25%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "olep-u1-so-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Milgram found that $65\\%$ of participants obeyed to the maximum voltage. In a similar study of $40$ participants, how many are predicted to obey fully?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 26 }],
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
                reasoning: "0.65 x 40 = 26 participants.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 26.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "26",
          },
        },
        {
          id: "olep-u1-so-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A school survey of $80$ students found that $12$ students showed prejudiced attitudes toward a minority group. What percentage of students showed prejudice?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(12 / 80) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Fraction = 12 / 80 = 0.15.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 15%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "15%",
          },
        },
        {
          id: "olep-u1-so-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In an experiment on group size and conformity, conformity rates were $30\\%$ with pairs, $37\\%$ with groups of three and $38\\%$ with groups of four. Calculate the increase in conformity rate from pairs to groups of four, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Difference",
                statement: "largest rate - smallest rate.",
              },
            ],
            steps: [
              {
                reasoning: "Difference = 38 - 30 = 8 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increase plateaus around 3-4 members.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 8 percentage points.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "8 percentage points",
          },
        },
        {
          id: "olep-u1-so-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between compliance and internalisation as types of conformity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity types",
                statement: "Compliance=surface; internalisation=belief.",
              },
            ],
            steps: [
              {
                reasoning: "Compliance: agree publicly, disagree privately.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Internalisation: genuinely adopt group beliefs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Compliance=surface agreement; internalisation=genuine belief change.",
            commonErrors: ["Treating them as the same."],
          },
        },
        {
          id: "olep-u1-so-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the two main reasons why people conform to group norms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conformity reasons",
                statement: "Normative + informational influence.",
              },
            ],
            steps: [
              {
                reasoning: "Normative: want acceptance/avoid rejection.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Normative explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Informational: unsure, others seem right.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Informational explained.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Normative influence (be liked) and informational influence (others seem right).",
            commonErrors: ["Giving only one reason."],
          },
        },
        {
          id: "olep-u1-so-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Social approach.",
          parts: [
            { label: "a", prompt: "Define obedience.", marks: 1 },
            { label: "b", prompt: "Asch's key finding?", marks: 2 },
            { label: "c", prompt: "Two types of conformity?", marks: 2 },
            { label: "d", prompt: "Milgram result + one ethical issue?", marks: 2 },
            { label: "e", prompt: "One way to reduce prejudice?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social",
                statement: "Conformity+obedience+prejudice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Following authority's orders.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "~33-37% conformed.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "Even to obviously wrong answers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Compliance/identification/internalisation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Any two named.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "65% to 450V.", marks: 1, markCode: "AO1" },
              {
                part: "d",
                reasoning: "Deception/distress issue.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Contact hypothesis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Equal status/cooperation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) obedience (b) Asch (c) conformity types (d) Milgram (e) prejudice reduction",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u1-1-3-notes",
      title: "Humanistic, biological, social — notes",
      summary:
        "Humanistic (free will), biological (genes), social (conformity, prejudice).",
      sections: [
        {
          heading: "Approaches",
          body: "Humanistic=self-actualisation; biological=genes+brain; social=group influence.",
        },
        {
          heading: "Social",
          body: "Conformity=group norms; obedience=authority; prejudice=attitudes; discrimination=behaviour.",
        },
      ],
    },
  ],
};
