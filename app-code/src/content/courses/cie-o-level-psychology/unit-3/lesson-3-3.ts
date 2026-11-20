import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olep-u3-lesson-3-3",
  code: "3-3",
  title: "Vygotsky, Erikson and Adolescence",
  goal: "I CAN describe Vygotsky's sociocultural theory, Erikson's stages and adolescent development.",
  standards: ["2219: Developmental psychology"],
  vocabulary: [
    {
      term: "Zone of Proximal Development",
      definition: "Gap between what child can do alone and with help.",
    },
    {
      term: "Scaffolding",
      definition: "Support given to help child reach next level.",
    },
    {
      term: "Identity crisis",
      definition: "Erikson's stage of questioning self in adolescence.",
    },
    { term: "Puberty", definition: "Physical maturation — hormonal changes." },
    {
      term: "Formal operations",
      definition: "Piaget's stage of abstract reasoning.",
    },
    {
      term: "Peer pressure",
      definition: "Influence of friends on behaviour/attitudes.",
    },
  ],
  concepts: [
    {
      id: "olep-u3-vygotsky-erikson",
      title: "Vygotsky and Erikson",
      skill: "Describe sociocultural theory and psychosocial stages.",
      lesson: {
        sections: [
          {
            heading: "Vygotsky's theory",
            body: "Lev Vygotsky — social interaction drives development. ZPD: what child can do with guidance exceeds what they do alone. Scaffolding: teacher/parent support adjusted as skill grows. More knowledgeable other (MKO) helps. Language central — thought develops through speech. Contrast Piaget: social, not just individual.",
          },
          {
            heading: "Erikson's stages",
            body: "Eight psychosocial stages across lifespan — each has crisis to resolve: trust vs mistrust (infancy), autonomy vs shame (toddler), initiative vs guilt (preschool), industry vs inferiority (school), identity vs role confusion (adolescence), intimacy vs isolation (young adult), generativity vs stagnation (middle), integrity vs despair (old age).",
          },
          {
            heading: "Adolescence",
            body: "Puberty — hormonal changes, physical maturation, secondary sexual characteristics. Piaget's formal operations — abstract reasoning. Erikson's identity crisis — 'who am I?'. Peer influence grows; risk-taking increases (brain development — prefrontal cortex matures late).",
          },
        ],
        keyFormulas: [
          {
            name: "Vygotsky/Erikson",
            statement:
              "ZPD+scaffolding; 8 psychosocial crises; identity in adolescence.",
          },
        ],
        workedExample: {
          problem: "How does scaffolding relate to the ZPD?",
          solution:
            "Scaffolding is the support given within the ZPD — teacher helps child do what they can't yet do alone, gradually removing support.",
        },
      },
      questions: [
        {
          id: "olep-u3-ve-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Zone of Proximal Development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gap between solo ability and guided ability" },
              { id: "b", text: "A physical growth stage" },
              { id: "c", text: "A memory test" },
              { id: "d", text: "A type of attachment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ZPD",
                statement: "Alone vs with help gap.",
              },
            ],
            steps: [
              {
                reasoning: "Gap between abilities.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Gap between solo ability and guided ability",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "olep-u3-ve-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is scaffolding?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scaffolding",
                statement: "Support within ZPD.",
              },
            ],
            steps: [
              {
                reasoning: "Support given to child.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gradually removed as skill grows.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Support provided within the ZPD, gradually removed as the child masters the skill.",
            commonErrors: ["Thinking permanent help."],
          },
        },
        {
          id: "olep-u3-ve-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does Erikson's identity crisis relate to adolescence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity crisis",
                statement: "Adolescent stage: identity vs role confusion.",
              },
            ],
            steps: [
              {
                reasoning: "Adolescents question 'who am I'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Try roles/values to form identity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Success→identity; failure→confusion.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Adolescence is Erikson's identity vs role confusion stage — young people explore roles/values to form stable identity.",
            commonErrors: ["Vague answer."],
          },
        },
        {
          id: "olep-u3-ve-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Vygotsky and Erikson.",
          parts: [
            { label: "a", prompt: "ZPD?", marks: 2 },
            { label: "b", prompt: "Scaffolding?", marks: 2 },
            { label: "c", prompt: "Erikson stages?", marks: 3 },
            { label: "d", prompt: "Adolescence?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dev theories",
                statement: "ZPD+scaffolding+Erikson+adolescence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Alone vs guided gap.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Learning potential.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Support in ZPD.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Gradual removal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "8 psychosocial stages.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Crisis at each stage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Examples given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Puberty/identity crisis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Formal operations/risk-taking.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) ZPD (b) scaffolding (c) Erikson (d) adolescence",
          },
        },
      ],
    },
    {
      id: "olep-u3-adolescence",
      title: "Adolescent Development",
      skill: "Describe physical, cognitive and social changes in adolescence.",
      lesson: {
        sections: [
          {
            heading: "Physical changes",
            body: "Puberty — hormones (testosterone/oestrogen) trigger secondary sexual characteristics: growth spurt, voice changes, body hair, sexual maturation. Timing varies — early/late maturers face different social pressures. Brain still developing — prefrontal cortex (decision-making, impulse control) matures late (~mid-20s).",
          },
          {
            heading: "Cognitive changes",
            body: "Piaget's formal operations — abstract thinking, hypothetical reasoning, systematic problem-solving. Metacognition improves — thinking about thinking. Idealism — adolescents may hold extreme views. Risk assessment still developing — explains risk-taking behaviour.",
          },
          {
            heading: "Social/emotional changes",
            body: "Peer group becomes central — conformity and peer pressure increase. Identity formation — exploring values, beliefs, relationships. Emotional volatility — mood swings common. Relationships with parents often conflict as independence sought. Erikson's identity crisis — key developmental task.",
          },
        ],
        keyFormulas: [
          {
            name: "Adolescence",
            statement:
              "Puberty+hormones; formal operations; peer pressure; identity crisis.",
          },
        ],
        workedExample: {
          problem: "Why do adolescents take more risks?",
          solution:
            "Prefrontal cortex (impulse control) matures late while limbic system (emotion/reward) develops earlier — reward-seeking outweighs caution.",
        },
      },
      questions: [
        {
          id: "olep-u3-ad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is puberty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical maturation triggered by hormones" },
              { id: "b", text: "A cognitive stage" },
              { id: "c", text: "A social group" },
              { id: "d", text: "A type of attachment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Puberty",
                statement: "Hormonal physical maturation.",
              },
            ],
            steps: [
              { reasoning: "Physical maturation.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Physical maturation triggered by hormones",
            commonErrors: ["Confusing with adolescence generally."],
          },
        },
        {
          id: "olep-u3-ad-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two cognitive changes in adolescence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adolescent cognition",
                statement: "Abstract thought+metacognition.",
              },
            ],
            steps: [
              { reasoning: "Any two changes.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Abstract/hypothetical reasoning (formal operations), metacognition, idealism, improved problem-solving.",
            commonErrors: ["Only physical changes."],
          },
        },
        {
          id: "olep-u3-ad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do adolescents engage in more risk-taking?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Risk-taking",
                statement: "Brain development imbalance.",
              },
            ],
            steps: [
              {
                reasoning: "Prefrontal cortex immature.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Limbic/reward system active.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Peer pressure amplifies.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Prefrontal cortex (impulse control) matures late while reward/emotion systems develop earlier — risk-taking outweighs caution, amplified by peer pressure.",
            commonErrors: ["Blaming only hormones."],
          },
        },
        {
          id: "olep-u3-ad-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Adolescent development.",
          parts: [
            { label: "a", prompt: "Physical changes?", marks: 2 },
            { label: "b", prompt: "Cognitive changes?", marks: 3 },
            { label: "c", prompt: "Social changes?", marks: 2 },
            { label: "d", prompt: "Risk-taking?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adolescence",
                statement: "Physical+cognitive+social+risk.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Puberty/hormones.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Secondary characteristics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Formal operations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Metacognition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Idealism/brain development.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Peer group/identity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Parent conflict.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Brain imbalance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Peer pressure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) physical (b) cognitive (c) social (d) risk",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u3-3-3-notes",
      title: "Vygotsky, Erikson, adolescence — notes",
      summary:
        "ZPD/scaffolding; Erikson's stages; adolescent physical/cognitive/social changes.",
      sections: [
        {
          heading: "Theories",
          body: "Vygotsky: ZPD+scaffolding+MKO; Erikson: 8 psychosocial crises.",
        },
        {
          heading: "Adolescence",
          body: "Puberty; formal operations; identity crisis; peer pressure; risk-taking (brain imbalance).",
        },
      ],
    },
  ],
};
