import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "psych-u2-lesson-2-3",
  code: "2-3",
  title: "Cognitive Development and Lifespan Development",
  goal: "I CAN describe Piaget's stages of cognitive development and evaluate theories of lifespan development.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "Schema", definition: "A mental framework or organised pattern of knowledge used to interpret experience." },
    { term: "Assimilation", definition: "Fitting new information into existing schemas." },
    { term: "Accommodation", definition: "Modifying existing schemas to fit new information." },
    { term: "Object permanence", definition: "Understanding that objects continue to exist when out of sight — achieved in sensorimotor stage." },
    { term: "Conservation", definition: "Understanding that quantity stays the same despite changes in appearance — achieved in concrete operational stage." },
    { term: "Continuity vs discontinuity", definition: "Whether development is gradual and cumulative or proceeds in distinct stages." },
  ],
  concepts: [
    {
      id: "psych-u2-piaget",
      title: "Piaget's theory of cognitive development",
      skill: "Describe Piaget's four stages, the processes of assimilation and accommodation, and evaluate the theory.",
      lesson: {
        sections: [
          {
            heading: "Schemas, assimilation and accommodation",
            body: "Piaget argued children actively construct knowledge through **schemas** — organised mental frameworks. When new information fits an existing schema, the child **assimilates** it. When it doesn't fit, the child **accommodates** by changing the schema. Development occurs through **equilibration** — balancing assimilation and accommodation to reach **equilibrium** when schemas match reality.",
          },
          {
            heading: "The four stages",
            body: "**Sensorimotor (0–2 years)**: object permanence develops; thinking is sensory and motor. **Preoperational (2–7)**: symbolic thought and language emerge, but thinking is egocentric and lacks conservation. **Concrete operational (7–11)**: logical thinking about concrete events; conservation achieved; still struggles with abstract ideas. **Formal operational (11+)**: abstract, hypothetical and scientific reasoning develops.",
          },
          {
            heading: "Evaluating Piaget",
            body: "Strengths: revolutionised views of children as active learners; stages are supported by classic tasks (conservation, three mountains). Limitations: stage boundaries may be too rigid — children show abilities earlier than predicted (e.g. object permanence at ~8 months); culture affects performance; understates social influences on development (Vygotsky's zone of proximal development).",
          },
        ],
        keyFormulas: [
          { name: "Piaget's stages", statement: "Sensorimotor → Preoperational → Concrete operational → Formal operational" },
          { name: "Adaptation processes", statement: "Assimilation (fit new to old) + Accommodation (change old for new)" },
        ],
        workedExample: {
          problem: "A child insists there are more sweets in a tall thin glass than the same number in a short wide glass. What stage is this and why?",
          solution: "Preoperational stage: the child focuses on one dimension (height) and lacks conservation — the ability to understand quantity is unchanged despite appearance. Conservation typically emerges in the concrete operational stage.",
        },
      },
      questions: [
        {
          id: "psych-u2-piq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Fitting new information into an existing schema is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Accommodation" },
              { id: "b", text: "Equilibration" },
              { id: "c", text: "Conservation" },
              { id: "d", text: "Assimilation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Assimilation", statement: "Incorporating new experiences into existing schemas without changing them." },
            ],
            steps: [
              { reasoning: "Assimilation fits new info to existing schemas; accommodation changes schemas.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Assimilation",
            commonErrors: ["Reversing assimilation and accommodation."],
          },
        },
        {
          id: "psych-u2-piq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the key cognitive achievement of the concrete operational stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Concrete operational", statement: "Logical thinking about concrete events; conservation achieved." },
            ],
            steps: [
              { reasoning: "Children aged ~7–11 can perform logical operations on concrete objects.", marks: 1, markCode: "M" },
              { reasoning: "Conservation is achieved — understanding quantity is unchanged by changes in appearance (e.g. poured liquids).", marks: 1, markCode: "M" },
              { reasoning: "They can also classify hierarchically and reverse operations mentally, though abstract thought remains limited.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Logical concrete reasoning and conservation; abstract thinking still developing.",
            commonErrors: ["Claiming abstract reasoning appears at this stage — that is formal operational."],
          },
        },
        {
          id: "psych-u2-piq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how Piaget's concept of egocentrism differs from everyday use of the word.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Piagetian egocentrism", statement: "Inability to take another's perspective — a cognitive limitation, not selfishness." },
            ],
            steps: [
              { reasoning: "Everyday 'egocentric' means selfish or self-absorbed — a personality trait.", marks: 1, markCode: "M" },
              { reasoning: "Piaget's egocentrism is a cognitive limitation: the child cannot mentally represent another person's viewpoint.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: the three mountains task — children describe the scene from their own view, not the doll's.", marks: 1, markCode: "R" },
              { reasoning: "It is a developmental stage, not a moral failing — children outgrow it around age 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Piagetian egocentrism = cognitive inability to see others' perspectives, not selfishness.",
            commonErrors: ["Interpreting egocentrism as selfishness rather than a cognitive stage."],
          },
        },
        {
          id: "psych-u2-piq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A 5-year-old hides a toy under a cloth while another child watches, then moves it while unseen — but still searches only under the first cloth.",
          parts: [
            { label: "a", prompt: "Identify the Piagetian concept demonstrated and explain it.", marks: 2 },
            { label: "b", prompt: "Explain which stage this child is in and what comes next.", marks: 3 },
            { label: "c", prompt: "Evaluate Piaget's stage theory in the light of this example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Object permanence stages", statement: "Early sensorimotor children lack object permanence; it develops gradually, not all at once." },
            ],
            steps: [
              { part: "a", reasoning: "This is partial object permanence — the child knows objects persist but cannot track invisible displacement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Searching only under the first cloth shows the child cannot mentally represent the object's new location.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The child is transitioning from sensorimotor to preoperational — object permanence emerging but incomplete.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Next comes full object permanence with invisible displacements, then symbolic thought in preoperational stage.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gradual emergence within stages contradicts Piaget's abrupt stage shifts.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Supports Piaget: development is sequential and constructive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Challenges Piaget: abilities emerge gradually within stages, not at fixed ages — stages may be too rigid.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Overall: stages capture broad trends but underestimate individual variation and earlier competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Partial object permanence. (b) Sensorimotor→preoperational transition. (c) Broad support but stages too rigid.",
            commonErrors: ["Assuming object permanence appears fully at age 2 — it develops gradually."],
          },
        },
        {
          id: "psych-u2-piq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Piaget's sensorimotor stage covers approximately which age range?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11 years onwards" },
              { id: "b", text: "7–11 years" },
              { id: "c", text: "Birth to 2 years" },
              { id: "d", text: "2–7 years" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Piaget's stages", statement: "Sensorimotor 0–2, preoperational 2–7, concrete operational 7–11, formal operational 11+." },
            ],
            steps: [
              { reasoning: "The sensorimotor stage runs from birth to about age 2.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Birth to 2 years",
            commonErrors: ["Confusing sensorimotor with preoperational ages."],
          },
        },
        {
          id: "psych-u2-piq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the key hallmark of Piaget's preoperational stage (ages 2–7)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conservation of quantity" },
              { id: "b", text: "Abstract hypothetical reasoning" },
              { id: "c", text: "Egocentric thinking and symbolic play" },
              { id: "d", text: "Fully developed object permanence at birth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Preoperational stage", statement: "Symbolic thought and language emerge, but thinking is egocentric and lacks conservation." },
            ],
            steps: [
              { reasoning: "Preoperational children use symbols (language, pretend play) but cannot take others' perspectives or conserve.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Egocentric thinking and symbolic play",
            commonErrors: ["Choosing conservation — that is achieved in the concrete operational stage."],
          },
        },
        {
          id: "psych-u2-piq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The ability to understand that quantity remains the same despite changes in appearance (conservation) is typically achieved in which stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal operational" },
              { id: "b", text: "Concrete operational" },
              { id: "c", text: "Preoperational" },
              { id: "d", text: "Sensorimotor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conservation", statement: "Understanding that quantity is unchanged by superficial transformations — a concrete operational achievement." },
            ],
            steps: [
              { reasoning: "Conservation emerges around age 7 with logical operations on concrete objects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Concrete operational",
            commonErrors: ["Answering formal operational — conservation precedes abstract reasoning."],
          },
        },
        {
          id: "psych-u2-piq8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Piaget's 'three mountains task' was designed primarily to test which ability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conservation of volume" },
              { id: "b", text: "Object permanence" },
              { id: "c", text: "Abstract reasoning" },
              { id: "d", text: "Visual-spatial egocentrism" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Three mountains task", statement: "Children describe a scene from their own viewpoint, revealing egocentrism." },
            ],
            steps: [
              { reasoning: "The task tests whether children can describe a scene from another person's perspective — spatial egocentrism.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Visual-spatial egocentrism",
            commonErrors: ["Confusing egocentrism tasks with conservation tasks."],
          },
        },
        {
          id: "psych-u2-piq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which ability characterises Piaget's formal operational stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Symbolic pretend play" },
              { id: "b", text: "Conservation of number" },
              { id: "c", text: "Abstract, hypothetical and scientific reasoning" },
              { id: "d", text: "Goal-directed sensorimotor actions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formal operational stage", statement: "Abstract thought, hypothetical reasoning and systematic problem-solving emerge around age 11+." },
            ],
            steps: [
              { reasoning: "Formal operational thinkers can reason about possibilities, not just concrete realities.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Abstract, hypothetical and scientific reasoning",
            commonErrors: ["Choosing conservation — that is concrete operational, not formal."],
          },
        },
        {
          id: "psych-u2-piq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many distinct stages does Piaget's theory of cognitive development propose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Piaget's stages", statement: "Sensorimotor, preoperational, concrete operational, formal operational — four stages." },
            ],
            steps: [
              { reasoning: "Count the stages: sensorimotor, preoperational, concrete operational, formal operational.", marks: 1, markCode: "M" },
              { reasoning: "That gives 4 stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting five by including infancy as separate from sensorimotor."],
          },
        },
        {
          id: "psych-u2-piq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between assimilation and accommodation, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Assimilation vs accommodation", statement: "Assimilation fits new info into existing schemas; accommodation changes schemas to fit new info." },
            ],
            steps: [
              { reasoning: "Assimilation: a child calls all four-legged animals 'doggie' — fitting new animals into the existing dog schema.", marks: 1, markCode: "M" },
              { reasoning: "Accommodation: after repeated correction, the child creates a broader 'animal' schema — modifying the old one.", marks: 1, markCode: "M" },
              { reasoning: "Development proceeds through equilibration — balancing assimilation and accommodation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Assimilation = fit new to old schema; accommodation = change schema. Example: 'doggie' for all animals → creating an 'animal' category.",
            commonErrors: ["Reversing the two processes."],
          },
        },
        {
          id: "psych-u2-piq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two key achievements of Piaget's sensorimotor stage (birth–2 years).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sensorimotor stage", statement: "Intelligence expressed through sensory and motor actions; object permanence develops." },
            ],
            steps: [
              { reasoning: "Object permanence: understanding objects continue to exist when out of sight — emerges gradually by ~8–12 months.", marks: 1, markCode: "M" },
              { reasoning: "Goal-directed behaviour: actions become intentional — e.g. reaching for a hidden or desired object rather than by chance.", marks: 1, markCode: "M" },
              { reasoning: "Early reflexes develop into coordinated sensorimotor schemes through circular reactions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Object permanence and goal-directed behaviour mark the sensorimotor stage.",
            commonErrors: ["Describing language or symbolic thought — those are preoperational achievements."],
          },
        },
        {
          id: "psych-u2-piq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate Piaget's stage theory of cognitive development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluating Piaget", statement: "Strengths: children as active constructors, classic task evidence; limitations: rigid stages, underestimated earlier competence, cultural bias." },
            ],
            steps: [
              { reasoning: "Strength: revolutionised views of children as active learners who construct knowledge through schemas.", marks: 1, markCode: "R" },
              { reasoning: "Strength: stage-like patterns confirmed by classic tasks (conservation, three mountains).", marks: 1, markCode: "M" },
              { reasoning: "Limitation: abilities emerge earlier and more gradually than stage ages suggest — e.g. object permanence at ~8 months.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: stages capture broad trends but are too rigid and underplay social and cultural influences (cf. Vygotsky).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Piaget's stages describe real qualitative shifts but boundaries are too rigid and competence emerges earlier than predicted.",
            commonErrors: ["One-sided evaluation — needs strengths, limitations and a judgement."],
          },
        },
        {
          id: "psych-u2-piq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A 6-year-old can sort a set of shapes by colour but cannot sort them simultaneously by colour AND shape, insisting the two criteria give different answers.",
          parts: [
            { label: "a", prompt: "Identify the Piagetian stage and explain what the child can and cannot yet do.", marks: 2 },
            { label: "b", prompt: "Explain which cognitive limitation this illustrates.", marks: 3 },
            { label: "c", prompt: "Evaluate Piaget's stage theory in the light of this example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Classification and centration", statement: "Preoperational children can classify along one dimension but cannot coordinate two at once." },
            ],
            steps: [
              { part: "a", reasoning: "Preoperational stage — the child can classify by a single dimension (colour) but not perform hierarchical/dual classification.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The inability to hold two sorting rules at once reflects limited logical operations on concrete material.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "This illustrates centration — focusing on one aspect while ignoring others.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It also reflects lack of reversibility and hierarchical classification, both concrete operational abilities.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The child's answer is consistent and logical within their one-dimensional focus — not random error.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Supports Piaget: the specific, predictable limitation fits the preoperational profile.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Challenges Piaget: real-world tasks are often easier than Piaget's formal tests — competence may be context-dependent.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: the example fits the stage pattern but highlights that stage abilities emerge gradually, not abruptly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Preoperational — one-dimensional classification only. (b) Centration. (c) Fits stage pattern but shows gradual emergence.",
            commonErrors: ["Calling the child's answer 'wrong' — it is consistent with preoperational centration."],
          },
        },
        {
          id: "psych-u2-piq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain Piaget's concept of equilibration and its role in cognitive development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equilibration", statement: "The drive to balance assimilation and accommodation, producing cognitive growth when schemas match reality." },
            ],
            steps: [
              { reasoning: "Children experience disequilibrium when new information cannot be assimilated into existing schemas.", marks: 1, markCode: "M" },
              { reasoning: "This motivates accommodation — changing schemas until they fit reality again (equilibrium).", marks: 1, markCode: "M" },
              { reasoning: "Each cycle of disequilibrium → accommodation produces more advanced thinking.", marks: 1, markCode: "M" },
              { reasoning: "Equilibration is the engine of stage progression in Piaget's theory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Equilibration balances assimilation and accommodation; disequilibrium drives schema change and stage progression.",
            commonErrors: ["Confusing equilibration with equilibrium alone — it is the process of reaching balance."],
          },
        },
        {
          id: "psych-u2-piq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a study, 30% of 200 five-year-olds successfully passed a conservation task. How many children passed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation timing", statement: "Conservation typically emerges in the concrete operational stage, around age 7." },
            ],
            steps: [
              { reasoning: "Calculate 30% of 200: 0.30 × 200.", marks: 1, markCode: "M" },
              { reasoning: "0.30 × 200 = 60 children.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 children",
            commonErrors: ["Answering 30 — that is the percentage, not the count."],
          },
        },
      ],
    },
    {
      id: "psych-u2-lifespan",
      title: "Lifespan development theories",
      skill: "Describe continuity vs discontinuity, nature vs nurture, and evaluate major developmental theories including Erikson's stages.",
      lesson: {
        sections: [
          {
            heading: "Continuity vs discontinuity",
            body: "**Continuity** views development as gradual, cumulative change — like growth, abilities strengthen steadily. **Discontinuity** views development as distinct stages with qualitative shifts — like Piaget's stages or puberty. Most psychologists accept elements of both: quantitative growth (height, vocabulary) is continuous, while qualitative reorganisations (object permanence, formal operations) appear discontinuous.",
          },
          {
            heading: "Nature versus nurture",
            body: "**Nature** emphasises genetic inheritance — temperament and maturation unfold biologically. **Nurture** emphasises environment — parenting, culture, learning shape development. Modern views reject either/or: genes and environment interact (epigenetics), and heritability estimates show both matter. Adoption and twin studies suggest both contribute to intelligence, personality and attachment.",
          },
          {
            heading: "Erikson's psychosocial stages",
            body: "Erikson proposed eight stages across the lifespan, each defined by a crisis: trust vs mistrust (infancy), autonomy vs shame (toddler), initiative vs guilt (preschool), industry vs inferiority (school), identity vs role confusion (adolescence), intimacy vs isolation (young adult), generativity vs stagnation (middle adult), integrity vs despair (old age). Successful resolution of each crisis enables healthy development; failure produces lasting difficulties.",
          },
        ],
        keyFormulas: [
          { name: "Development debates", statement: "Continuity vs discontinuity; Nature vs nurture — both interact" },
          { name: "Erikson's stages", statement: "8 crises across lifespan, each with two possible outcomes" },
        ],
        workedExample: {
          problem: "Is language acquisition more nature or nurture?",
          solution: "Both interact: humans have an innate language capacity (nature — universal grammar, critical period), but the specific language acquired depends entirely on environment (nurture — input and culture). Neither alone suffices.",
        },
      },
      questions: [
        {
          id: "psych-u2-lsq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Erikson's stage facing adolescents is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Industry vs inferiority" },
              { id: "b", text: "Generativity vs stagnation" },
              { id: "c", text: "Identity vs role confusion" },
              { id: "d", text: "Intimacy vs isolation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Erikson's stages", statement: "Adolescence = identity vs role confusion." },
            ],
            steps: [
              { reasoning: "Erikson's fifth stage, adolescence, centres on identity formation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Identity vs role confusion",
            commonErrors: ["Confusing adolescence (identity) with young adulthood (intimacy)."],
          },
        },
        {
          id: "psych-u2-lsq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between continuity and discontinuity views of development, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Continuity vs discontinuity", statement: "Continuity = gradual quantitative change; discontinuity = qualitative stage shifts." },
            ],
            steps: [
              { reasoning: "Continuity: development as gradual accumulation — e.g. vocabulary growing steadily with age.", marks: 1, markCode: "M" },
              { reasoning: "Discontinuity: development as distinct stages — e.g. Piaget's shift from preoperational to concrete operational thinking.", marks: 1, markCode: "M" },
              { reasoning: "Most development shows both: quantitative growth plus occasional qualitative reorganisations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Continuity = gradual; discontinuity = staged. Reality blends both.",
            commonErrors: ["Presenting them as mutually exclusive rather than complementary."],
          },
        },
        {
          id: "psych-u2-lsq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the nature–nurture debate is now considered a false dichotomy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gene-environment interaction", statement: "Genes and environment interact; neither acts independently." },
            ],
            steps: [
              { reasoning: "Genes influence how we respond to environment (e.g. temperament affects which experiences we seek).", marks: 1, markCode: "M" },
              { reasoning: "Environment influences gene expression — epigenetics shows experience can switch genes on or off.", marks: 1, markCode: "M" },
              { reasoning: "Twin and adoption studies show both contribute variably to traits — the proportions differ by characteristic.", marks: 1, markCode: "R" },
              { reasoning: "Modern view: development is an interaction, not a competition — asking 'how much' nature vs nurture is meaningless.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genes and environment interact inseparably — the debate is a false dichotomy.",
            commonErrors: ["Arguing one side 'wins' — interaction is the correct position."],
          },
        },
        {
          id: "psych-u2-lsq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A teenager experiences a severe identity crisis and asks 'Who am I?'",
          parts: [
            { label: "a", prompt: "Identify which Eriksonian stage this represents and explain the crisis.", marks: 2 },
            { label: "b", prompt: "Describe two ways successful resolution of this crisis might appear.", marks: 3 },
            { label: "c", prompt: "Evaluate Erikson's theory for explaining adolescent development.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Identity crisis", statement: "Erikson's fifth stage: forming a coherent sense of self vs role confusion." },
            ],
            steps: [
              { part: "a", reasoning: "Identity vs role confusion — the adolescent crisis of forming a stable self-concept.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'Who am I?' reflects uncertainty about values, goals and social roles.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exploration of different roles, values and beliefs leads to commitments.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Development of a coherent identity — consistent sense of self across contexts.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Confidence to form intimate relationships later, as identity provides foundation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: captures the subjective, psychosocial nature of adolescence better than purely cognitive theories.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: stages are culturally specific — identity formation differs across collectivist societies.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hard to test empirically — 'successful resolution' is vaguely defined and not directly measurable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Identity vs role confusion. (b) Exploration + coherent commitments. (c) Insightful but vague and culturally limited.",
            commonErrors: ["Treating Erikson's stages as strictly age-bound — timing varies individually."],
          },
        },
        {
          id: "psych-u2-lsq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Erikson's stage of 'trust vs mistrust' occurs during:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Old age" },
              { id: "b", text: "School age" },
              { id: "c", text: "Adolescence" },
              { id: "d", text: "Infancy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Erikson's stages", statement: "Trust vs mistrust is the first stage, covering infancy." },
            ],
            steps: [
              { reasoning: "Erikson's first psychosocial crisis, trust vs mistrust, is resolved in infancy through consistent caregiving.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Infancy",
            commonErrors: ["Confusing the first stage with autonomy vs shame (toddlerhood)."],
          },
        },
        {
          id: "psych-u2-lsq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Erikson's 'industry vs inferiority' stage is most associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "School age and developing competence" },
              { id: "b", text: "Middle adulthood and raising the next generation" },
              { id: "c", text: "Young adulthood and intimate relationships" },
              { id: "d", text: "Adolescence and identity formation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Erikson's stages", statement: "Industry vs inferiority is the school-age stage where children develop competence." },
            ],
            steps: [
              { reasoning: "During school age, children learn skills and either develop industry (competence) or feel inferior.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** School age and developing competence",
            commonErrors: ["Confusing industry vs inferiority with initiative vs guilt (preschool)."],
          },
        },
        {
          id: "psych-u2-lsq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the nature–nurture debate, the 'nature' position emphasises:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genetic inheritance and biological maturation" },
              { id: "b", text: "Learning through reinforcement and observation" },
              { id: "c", text: "Social expectations and peer pressure" },
              { id: "d", text: "Environmental influences such as parenting and culture" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nature", statement: "The position that development is driven by genetic inheritance and biological programmes." },
            ],
            steps: [
              { reasoning: "Nature refers to innate, genetically influenced factors; nurture refers to environmental experience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Genetic inheritance and biological maturation",
            commonErrors: ["Reversing nature and nurture."],
          },
        },
        {
          id: "psych-u2-lsq8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Epigenetics is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The percentage of a trait determined by genes" },
              { id: "b", text: "The study of identical twins raised apart" },
              { id: "c", text: "The critical period for language acquisition" },
              { id: "d", text: "How environmental experience can influence gene expression" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Epigenetics", statement: "Environmental factors can switch genes on or off without changing the DNA sequence." },
            ],
            steps: [
              { reasoning: "Epigenetics shows nurture can alter how genes are expressed — bridging nature and nurture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** How environmental experience can influence gene expression",
            commonErrors: ["Confusing epigenetics with heritability estimates."],
          },
        },
        {
          id: "psych-u2-lsq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many psychosocial stages does Erikson's theory propose across the lifespan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "8" },
              { id: "c", text: "10" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Erikson's stages", statement: "Eight stages from trust vs mistrust (infancy) to integrity vs despair (old age)." },
            ],
            steps: [
              { reasoning: "Erikson proposed eight stages, each defined by a crisis with two possible outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 8",
            commonErrors: ["Confusing Erikson's eight stages with Piaget's four."],
          },
        },
        {
          id: "psych-u2-lsq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A twin study estimates that 60% of the variance in a personality trait is heritable. Two individuals differ by 50 points on this trait. According to the estimate, approximately how many points of the difference are attributed to genetic factors?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heritability", statement: "Heritability estimates the proportion of trait variance attributable to genetic factors." },
            ],
            steps: [
              { reasoning: "Calculate 60% of 50: 0.60 × 50.", marks: 1, markCode: "M" },
              { reasoning: "0.60 × 50 = 30 points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 points",
            commonErrors: ["Answering 60 — that is the percentage, not the point difference."],
          },
        },
        {
          id: "psych-u2-lsq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe Erikson's first three psychosocial stages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Erikson's early stages", statement: "Trust vs mistrust (infancy), autonomy vs shame/doubt (toddler), initiative vs guilt (preschool)." },
            ],
            steps: [
              { reasoning: "Trust vs mistrust (infancy): consistent caregiving builds trust; neglect produces mistrust.", marks: 1, markCode: "M" },
              { reasoning: "Autonomy vs shame and doubt (toddlerhood): learning self-control and independence versus shame.", marks: 1, markCode: "M" },
              { reasoning: "Initiative vs guilt (preschool): children explore and plan activities, developing initiative or feeling guilty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Trust vs mistrust, autonomy vs shame/doubt, initiative vs guilt.",
            commonErrors: ["Listing stages without the associated crisis or age period."],
          },
        },
        {
          id: "psych-u2-lsq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how nature and nurture interact in development, using one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nature-nurture interaction", statement: "Genes and environment interact; neither acts independently of the other." },
            ],
            steps: [
              { reasoning: "Genes influence how we respond to the environment — e.g. temperament shapes which experiences a child seeks out.", marks: 1, markCode: "M" },
              { reasoning: "Environment influences gene expression — e.g. nutrition or stress can alter how genes are switched on or off (epigenetics).", marks: 1, markCode: "M" },
              { reasoning: "Example: language — an innate capacity (nature) requires environmental input to develop (nurture).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genes and environment interact bidirectionally — e.g. innate language capacity requires environmental input.",
            commonErrors: ["Arguing for one side only — the correct position is interaction."],
          },
        },
        {
          id: "psych-u2-lsq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate Erikson's theory of psychosocial development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluating Erikson", statement: "Strengths: captures psychosocial nature of development across lifespan; limitations: vague, culturally specific, hard to test." },
            ],
            steps: [
              { reasoning: "Strength: uniquely covers the whole lifespan, emphasising social and emotional development alongside cognition.", marks: 1, markCode: "R" },
              { reasoning: "Strength: the crisis framework captures real subjective experiences such as adolescent identity formation.", marks: 1, markCode: "R" },
              { reasoning: "Limitation: stages are culturally specific — identity and autonomy expectations differ across collectivist societies.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: insightful descriptive framework, but 'successful resolution' is vaguely defined and difficult to test empirically.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Erikson offers a rich lifespan view but stages are culturally bound and hard to measure precisely.",
            commonErrors: ["Presenting Erikson as purely biological or purely cognitive — he emphasised psychosocial crises."],
          },
        },
        {
          id: "psych-u2-lsq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A 16-year-old repeatedly engages in dangerous stunts to impress peers, while their parents describe them as 'going through a difficult phase'.",
          parts: [
            { label: "a", prompt: "Identify the Eriksonian stage this teenager is in and explain the central crisis.", marks: 2 },
            { label: "b", prompt: "Explain two factors that may contribute to the risk-taking behaviour.", marks: 3 },
            { label: "c", prompt: "Evaluate the 'storm and stress' view of adolescence in the light of this case.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adolescent development", statement: "Identity vs role confusion; peer influence and asynchronous brain maturation shape risk-taking." },
            ],
            steps: [
              { part: "a", reasoning: "Identity vs role confusion — the adolescent crisis of forming a coherent sense of self.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Risk-taking to impress peers reflects identity experimentation and peer validation seeking.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Peer influence: adolescents seek social acceptance, and peers can normalise or reward risky behaviour.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Brain maturation: the limbic/emotional system develops before the prefrontal cortex fully matures, so sensation-seeking outpaces self-regulation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Puberty-related hormonal changes also heighten emotional reactivity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Support: identity exploration and some turmoil are normative features of Erikson's fifth stage.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Challenge: most adolescents develop without significant storm and stress — this case may reflect individual or contextual factors.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: adolescence involves real challenges but is better seen as a period of growth with variability, not universal turmoil.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Identity vs role confusion. (b) Peer influence + asynchronous brain maturation. (c) Some turmoil is normative but not universal.",
            commonErrors: ["Accepting 'storm and stress' as inevitable for all adolescents."],
          },
        },
        {
          id: "psych-u2-lsq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how continuity and discontinuity views of development can both apply to human development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Continuity and discontinuity", statement: "Quantitative growth is continuous; qualitative reorganisations appear discontinuous." },
            ],
            steps: [
              { reasoning: "Continuity applies to gradual quantitative change — e.g. vocabulary or height accumulating steadily with age.", marks: 1, markCode: "M" },
              { reasoning: "Discontinuity applies to qualitative shifts — e.g. Piaget's stages where new ways of thinking suddenly become possible.", marks: 1, markCode: "M" },
              { reasoning: "Most psychologists accept both: development shows continuous accumulation punctuated by reorganisations.", marks: 1, markCode: "R" },
              { reasoning: "Puberty is another example of a discontinuous biological shift within continuous overall growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Development blends continuous quantitative growth with discontinuous qualitative stage shifts.",
            commonErrors: ["Arguing one view is correct and the other wrong — they describe different aspects."],
          },
        },
        {
          id: "psych-u2-lsq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Height has an estimated heritability of about 80%. If two siblings differ in height by 10 cm, approximately how many centimetres of that difference are attributed to genetic factors?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heritability", statement: "Heritability estimates the proportion of trait variance due to genetic factors." },
            ],
            steps: [
              { reasoning: "Calculate 80% of 10 cm: 0.80 × 10.", marks: 1, markCode: "M" },
              { reasoning: "0.80 × 10 = 8 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 cm",
            commonErrors: ["Answering 80 — that is the percentage, not the centimetre difference."],
          },
        },
      ],
    },
  ],
};
