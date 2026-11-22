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
              { id: "a", text: "A memory test" },
              { id: "b", text: "A physical growth stage" },
              { id: "c", text: "Gap between solo ability and guided ability" },
              { id: "d", text: "A type of attachment" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Gap between solo ability and guided ability",
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
        {
          id: "olep-u3-ve-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Vygotsky's Zone of Proximal Development (ZPD) refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "what a child cannot do at any age" },
              { id: "b", text: "what a child can do independently" },
              { id: "c", text: "what a child can do with guidance but not yet alone" },
              { id: "d", text: "the child's chronological age" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ZPD",
                statement: "Gap between solo and guided ability.",
              },
            ],
            steps: [
              {
                reasoning: "ZPD = assisted vs independent ability gap.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** What a child can do with guidance but not alone",
            commonErrors: ["Confusing with independent ability."],
          },
        },
        {
          id: "olep-u3-ve-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Scaffolding in Vygotsky's theory means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "punishment for wrong answers" },
              { id: "b", text: "permanent help from a teacher" },
              { id: "c", text: "learning through imitation only" },
              { id: "d", text: "support that is gradually reduced as the child masters a skill" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scaffolding",
                statement: "Temporary support reduced as skill grows.",
              },
            ],
            steps: [
              {
                reasoning: "Scaffolding = adjustable temporary support.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Support gradually reduced as skill is mastered",
            commonErrors: ["Saying support never changes."],
          },
        },
        {
          id: "olep-u3-ve-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'more knowledgeable other' (MKO) in Vygotsky's theory is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the child's peers only" },
              { id: "b", text: "anyone who knows more than the child and can guide learning" },
              { id: "c", text: "only the child's parents" },
              { id: "d", text: "only teachers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MKO",
                statement: "Person with more knowledge who guides.",
              },
            ],
            steps: [
              {
                reasoning: "MKO can be parent, teacher or peer.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Anyone with more knowledge who guides the child",
            commonErrors: ["Limiting MKO to teachers only."],
          },
        },
        {
          id: "olep-u3-ve-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does Vygotsky's view of development differ most from Piaget's?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are identical theories" },
              { id: "b", text: "Vygotsky studied only adults; Piaget only children" },
              { id: "c", text: "Vygotsky emphasised social interaction; Piaget emphasised individual construction" },
              { id: "d", text: "Vygotsky rejected all stages; Piaget accepted them" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vygotsky vs Piaget",
                statement: "Social vs individual development.",
              },
            ],
            steps: [
              {
                reasoning: "Vygotsky = social interaction drives development.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Piaget = child constructs knowledge individually.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** Vygotsky=social; Piaget=individual construction",
            commonErrors: ["Saying both are identical."],
          },
        },
        {
          id: "olep-u3-ve-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Erikson's stage of 'identity vs role confusion' occurs during...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "infancy" },
              { id: "b", text: "adolescence" },
              { id: "c", text: "old age" },
              { id: "d", text: "early childhood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Identity crisis",
                statement: "Adolescence stage.",
              },
            ],
            steps: [
              {
                reasoning: "Identity vs role confusion = adolescence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fifth of Erikson's eight stages.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Adolescence",
            commonErrors: ["Confusing with trust vs mistrust."],
          },
        },
        {
          id: "olep-u3-ve-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Erikson proposed $8$ psychosocial stages across the lifespan. The 'identity vs role confusion' stage is the $5$th. What fraction of the stages come before it? Express as a decimal.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Fraction",
                statement: "stages before / total stages.",
              },
            ],
            steps: [
              {
                reasoning: "4 stages before stage 5; 4/8 = 0.5.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 0.5.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "0.5",
          },
        },
        {
          id: "olep-u3-ve-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A child scored $6$ out of $20$ on a task alone but $15$ out of $20$ with guidance. Calculate the gain in performance due to guidance.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ZPD gain",
                statement: "guided score - solo score.",
              },
            ],
            steps: [
              {
                reasoning: "15 - 6 = 9 points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gain shows the ZPD.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "olep-u3-ve-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A teacher provides scaffolding by giving hints. Over $6$ sessions the number of hints per task falls from $8$ to $2$. Calculate the reduction in hints.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reduction",
                statement: "initial hints - final hints.",
              },
            ],
            steps: [
              {
                reasoning: "8 - 2 = 6 fewer hints.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows fading of scaffolding.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "olep-u3-ve-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Erikson proposed $8$ stages spanning roughly $80$ years of life. Calculate the average length of each stage in years.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Average stage length",
                statement: "lifespan / number of stages.",
              },
            ],
            steps: [
              {
                reasoning: "80 / 8 = 10 years.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Stages vary in real length; this is an average.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 10 years.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "olep-u3-ve-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define the Zone of Proximal Development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ZPD",
                statement: "Gap between solo and guided ability.",
              },
            ],
            steps: [
              {
                reasoning: "What child can do with guidance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Beyond what they can do alone.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "The gap between what a child can do alone and what they can do with guidance.",
            commonErrors: ["Confusing with independent ability."],
          },
        },
        {
          id: "olep-u3-ve-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain scaffolding and why it is useful for learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scaffolding",
                statement: "Support within ZPD, gradually faded.",
              },
            ],
            steps: [
              {
                reasoning: "Scaffolding = temporary support within ZPD.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Support adjusted to child's level.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gradually reduced as skill improves.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Allows tasks beyond independent ability.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Scaffolding provides adjustable support within the ZPD, faded as competence grows, enabling learning beyond independent ability.",
            commonErrors: ["Saying scaffolding is permanent."],
          },
        },
        {
          id: "olep-u3-ve-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Vygotsky and Erikson.",
          parts: [
            { label: "a", prompt: "Define ZPD.", marks: 1 },
            { label: "b", prompt: "Define scaffolding.", marks: 2 },
            { label: "c", prompt: "What is the MKO?", marks: 2 },
            { label: "d", prompt: "Name two Erikson stages.", marks: 2 },
            { label: "e", prompt: "Adolescent crisis?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vygotsky/Erikson",
                statement: "ZPD+scaffolding+Erikson+adolescence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Guided vs solo ability gap.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Temporary adjustable support.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Faded as skill grows.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "More knowledgeable other.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Parent/teacher/peer who guides.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Any two of the eight stages.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Identity vs role confusion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "'Who am I?' exploration.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) ZPD (b) scaffolding (c) MKO (d) stages (e) identity crisis",
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
              { id: "b", text: "A type of attachment" },
              { id: "c", text: "A social group" },
              { id: "d", text: "A cognitive stage" },
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
        {
          id: "olep-u3-ad-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Puberty is best defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a stage of formal operational thought" },
              { id: "b", text: "the identity crisis only" },
              { id: "c", text: "the period of hormonal changes leading to physical and sexual maturation" },
              { id: "d", text: "a type of social learning" },
            ],
            correctChoiceId: "c",
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
              {
                reasoning: "Puberty = hormonal maturation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Hormonal changes causing physical/sexual maturation",
            commonErrors: ["Confusing with cognitive development."],
          },
        },
        {
          id: "olep-u3-ad-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Secondary sexual characteristics include...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "breast development, voice deepening and body hair" },
              { id: "b", text: "abstract reasoning" },
              { id: "c", text: "conservation" },
              { id: "d", text: "object permanence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary sexual characteristics",
                statement: "Visible puberty changes.",
              },
            ],
            steps: [
              {
                reasoning: "SSC = outward physical changes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Breast development, voice change, body hair",
            commonErrors: ["Listing cognitive changes."],
          },
        },
        {
          id: "olep-u3-ad-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do adolescents tend to take more risks than adults?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Risk-taking is purely learned behaviour" },
              { id: "b", text: "Peer pressure is the only cause" },
              { id: "c", text: "Adolescents lack all reasoning ability" },
              { id: "d", text: "The emotional/reward brain develops before the prefrontal cortex that controls impulses" },
            ],
            correctChoiceId: "d",
          },
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
                reasoning: "Prefrontal cortex matures late (~mid-20s).",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Reward system matures before impulse control",
            commonErrors: ["Saying adolescents cannot reason."],
          },
        },
        {
          id: "olep-u3-ad-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Erikson's 'identity crisis' in adolescence refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "conflict with parents only" },
              { id: "b", text: "a Piagetian stage" },
              { id: "c", text: "the struggle to develop a stable sense of self and values" },
              { id: "d", text: "a mental illness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Identity crisis",
                statement: "'Who am I?' exploration.",
              },
            ],
            steps: [
              {
                reasoning: "Identity crisis = self-definition struggle.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Struggle to form a stable sense of self",
            commonErrors: ["Confusing with mental illness."],
          },
        },
        {
          id: "olep-u3-ad-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Metacognition in adolescents refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "remembering facts" },
              { id: "b", text: "physical growth" },
              { id: "c", text: "thinking about one's own thinking and learning strategies" },
              { id: "d", text: "copying peers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metacognition",
                statement: "Thinking about thinking.",
              },
            ],
            steps: [
              {
                reasoning: "Metacognition = awareness of own cognition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Improves during adolescence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** Thinking about one's own thinking",
            commonErrors: ["Confusing with memory."],
          },
        },
        {
          id: "olep-u3-ad-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Puberty typically begins around age $11$ in girls and age $12$ in boys. Calculate the difference in typical onset age, in years.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Age difference",
                statement: "boys' onset - girls' onset.",
              },
            ],
            steps: [
              {
                reasoning: "12 - 11 = 1 year.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 1 year.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "olep-u3-ad-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The prefrontal cortex typically matures around age $25$. A $15$-year-old adolescent is how many years before this maturation?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Years before maturation",
                statement: "maturation age - current age.",
              },
            ],
            steps: [
              {
                reasoning: "25 - 15 = 10 years.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Explains immature impulse control.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "olep-u3-ad-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a study of peer influence, $14$ out of $20$ adolescents conformed to a peer group's risky choice. Calculate the conformity percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 70, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(conformed / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "14 / 20 = 0.7.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 70%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "70%",
          },
        },
        {
          id: "olep-u3-ad-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "On a metacognition test, $11$-year-olds averaged $20$ out of $40$ and $13$-year-olds averaged $30$ out of $40$. Calculate the percentage-point improvement with age.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Improvement",
                statement: "(30/40 - 20/40) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "75% - 50% = 25 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows cognitive development in adolescence.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 25 percentage points.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "25 percentage points",
          },
        },
        {
          id: "olep-u3-ad-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define adolescence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adolescence",
                statement: "Transition period of physical/cognitive/social change.",
              },
            ],
            steps: [
              {
                reasoning: "Period of puberty and development.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Includes identity formation and peer influence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "The developmental period between childhood and adulthood involving puberty, cognitive and social change.",
            commonErrors: ["Defining it as only physical change."],
          },
        },
        {
          id: "olep-u3-ad-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why adolescent risk-taking may be partly explained by brain development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Risk-taking",
                statement: "Reward system early; prefrontal cortex late.",
              },
            ],
            steps: [
              {
                reasoning: "Reward/emotional centres mature earlier.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prefrontal cortex (impulse control) matures ~mid-20s.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Imbalance → reward-seeking without full control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Peer influence amplifies risk-taking.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The reward system develops before impulse control (prefrontal cortex), creating an imbalance that increases risk-taking, amplified by peer influence.",
            commonErrors: ["Saying the adolescent brain is fully mature."],
          },
        },
        {
          id: "olep-u3-ad-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Adolescence.",
          parts: [
            { label: "a", prompt: "Define puberty.", marks: 1 },
            { label: "b", prompt: "Two physical changes?", marks: 2 },
            { label: "c", prompt: "One cognitive change?", marks: 2 },
            { label: "d", prompt: "One social/emotional change?", marks: 2 },
            { label: "e", prompt: "Why more risk-taking?", marks: 2 },
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
                reasoning: "Hormonal physical maturation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Growth spurt/secondary sexual characteristics/voice change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Formal operations/abstract thought/metacognition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Any one explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Peer group central/identity formation/emotional volatility.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Any one explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Reward system before prefrontal cortex.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Peer influence amplifies.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) puberty (b) physical (c) cognitive (d) social (e) risk-taking",
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
