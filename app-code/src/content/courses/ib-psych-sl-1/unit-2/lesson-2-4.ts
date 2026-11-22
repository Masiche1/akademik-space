import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "psych-u2-lesson-2-4",
  code: "2-4",
  title: "Developmental Psychology: Attachment, Vygotsky and Adolescence",
  goal: "I CAN describe attachment theory and the strange situation, explain Vygotsky's social constructivism and evaluate adolescent development.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "Attachment", definition: "The enduring emotional bond between an infant and caregiver." },
    { term: "Strange situation", definition: "Ainsworth's laboratory procedure for assessing infant attachment styles." },
    { term: "Secure attachment", definition: "An attachment style marked by distress on separation and comfort on reunion." },
    { term: "Zone of proximal development", definition: "The gap between what a child can do alone and what they can do with guidance." },
    { term: "Scaffolding", definition: "Temporary support that helps a learner achieve a task within their ZPD." },
    { term: "Private speech", definition: "Children's self-directed talk used to guide their own thinking and actions." },
  ],
  concepts: [
    {
      id: "psych-u2-attachment",
      title: "Attachment",
      skill: "Describe Bowlby's theory, Ainsworth's strange situation and the effects of attachment styles on development.",
      lesson: {
        sections: [
          {
            heading: "Bowlby's attachment theory",
            body: "**John Bowlby** proposed that infants are biologically programmed to form an **attachment** to a primary caregiver — an evolved 'behavioural system' ensuring proximity and protection. Attachment develops through **monotropy** (a primary figure), a **critical period** (roughly the first year), and an **internal working model**: a mental template of relationships formed in infancy that guides expectations and behaviour in later relationships.",
          },
          {
            heading: "Ainsworth's strange situation",
            body: "**Mary Ainsworth's strange situation** observes infants aged 12–18 months through separations and reunions with the caregiver in an unfamiliar room with a stranger. It classifies three styles: **secure** (distressed by separation, easily comforted), **insecure-avoidant** (ignores caregiver, little distress), and **insecure-resistant/ambivalent** (intensely distressed, cannot be soothed). Secure attachment is associated with the most positive developmental outcomes.",
          },
          {
            heading: "Effects of attachment styles",
            body: "Early attachment predicts later outcomes: securely attached children tend to form better friendships, show greater emotional regulation and perform better academically. Avoidant and resistant styles correlate with relationship difficulties. Critically, attachment is not destiny — it can change with new caregiving experiences, and cross-cultural studies show variation in style distributions.",
          },
        ],
        keyFormulas: [
          { name: "Attachment styles", statement: "Secure → comfort on reunion; Avoidant → ignores caregiver; Resistant → clingy, inconsolable" },
          { name: "Internal working model", statement: "Early attachment forms a template shaping later relationships" },
          { name: "Key studies", statement: "Bowlby (theory), Ainsworth (strange situation), Harlow (contact comfort)" },
        ],
        workedExample: {
          problem: "An infant cries when the mother leaves, but calms quickly when she returns and resumes playing. Which attachment style is this?",
          solution: "Secure attachment. The infant shows healthy separation distress but is easily comforted and returns to exploration — the hallmark of a secure internal working model.",
        },
      },
      questions: [
        {
          id: "psych-u2-devq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Ainsworth's strange situation was designed to assess:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attachment styles in infants" },
              { id: "b", text: "Memory capacity" },
              { id: "c", text: "Language acquisition" },
              { id: "d", text: "Cognitive development" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Strange situation", statement: "Ainsworth's procedure classifying attachment as secure, avoidant or resistant." },
            ],
            steps: [
              { reasoning: "The strange situation measures infant responses to separation and reunion with the caregiver.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Attachment styles in infants",
            commonErrors: ["Confusing the strange situation with Piagetian conservation tasks."],
          },
        },
        {
          id: "psych-u2-devq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two key ideas of Bowlby's attachment theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bowlby's theory", statement: "Attachment is innate, forms in a critical period with a primary figure, and creates an internal working model." },
            ],
            steps: [
              { reasoning: "Innate behaviour system: infants are biologically programmed to seek proximity to caregivers for survival.", marks: 1, markCode: "M" },
              { reasoning: "Critical period and monotropy: attachment forms mainly in the first year with one primary figure.", marks: 1, markCode: "M" },
              { reasoning: "Internal working model: early attachment becomes a template guiding later social relationships.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Innate attachment behaviour, critical period/monotropy, and the internal working model.",
            commonErrors: ["Describing Ainsworth's procedure instead of Bowlby's theoretical ideas."],
          },
        },
        {
          id: "psych-u2-devq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how early attachment experiences may affect relationships in adulthood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attachment continuity", statement: "The internal working model carries attachment expectations into later relationships." },
            ],
            steps: [
              { reasoning: "Securely attached infants develop expectations that others are reliable and that they are worthy of love.", marks: 1, markCode: "M" },
              { reasoning: "This model shapes adult romantic relationships — securely attached adults tend to form trusting, stable partnerships.", marks: 1, markCode: "M" },
              { reasoning: "Insecure styles predict anxiety, avoidance or preoccupation in adult relationships.", marks: 1, markCode: "R" },
              { reasoning: "However, the effect is probabilistic: later experiences and therapy can revise the internal working model.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Early attachment forms expectations about self and others that tend to carry into adult relationships, though they can change.",
            commonErrors: ["Claiming attachment style rigidly determines adult relationships."],
          },
        },
        {
          id: "psych-u2-devq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A school counsellor claims that 'children with insecure attachments are doomed to poor outcomes.'",
          parts: [
            { label: "a", prompt: "Describe the three attachment styles identified by Ainsworth.", marks: 2 },
            { label: "b", prompt: "Explain two ways early attachment may influence later development.", marks: 3 },
            { label: "c", prompt: "Evaluate the claim that insecure attachment dooms children to poor outcomes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attachment outcomes", statement: "Secure attachment predicts better outcomes, but attachment is modifiable — not destiny." },
            ],
            steps: [
              { part: "a", reasoning: "Secure: distressed on separation, comforted on reunion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Avoidant and resistant: ignoring caregiver or inconsolable distress respectively.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Internal working model: insecure styles create negative expectations about self and others.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Emotional regulation and social skills: insecure attachment correlates with poorer peer relationships and self-esteem.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cognitive/academic effects: secure attachment is linked to better exploration and school performance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Correlational evidence: insecure attachment is associated with, not proven to cause, poor outcomes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Attachment can change: responsive later caregiving, stable relationships and therapy revise the internal working model.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: risk factor, not destiny — outcome depends on ongoing environment and support.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Secure, avoidant, resistant. (b) Internal model, emotional regulation, social/academic effects. (c) Risk factor, not destiny.",
            commonErrors: ["Ignoring that attachment patterns can be revised by later experience."],
          },
        },
        {
          id: "psych-u2-attq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Ainsworth's strange situation, a securely attached infant typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shows intense distress that cannot be soothed" },
              { id: "b", text: "Ignores the caregiver completely on reunion" },
              { id: "c", text: "Shows no reaction to either separation or reunion" },
              { id: "d", text: "Is distressed by separation and easily comforted on reunion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Secure attachment", statement: "Distress on separation, easy comfort and resumed exploration on reunion." },
            ],
            steps: [
              { reasoning: "Secure infants seek comfort from the caregiver and quickly return to play after reunion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Is distressed by separation and easily comforted on reunion",
            commonErrors: ["Confusing secure with insecure-resistant (inconsolable distress)."],
          },
        },
        {
          id: "psych-u2-attq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An infant classified as insecure-avoidant in the strange situation typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seeks comfort and explores confidently" },
              { id: "b", text: "Displays disorganised, frozen behaviour" },
              { id: "c", text: "Clings to the caregiver and cannot be comforted" },
              { id: "d", text: "Shows little distress and avoids or ignores the caregiver on reunion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insecure-avoidant", statement: "Little separation distress; avoids or ignores the caregiver on reunion." },
            ],
            steps: [
              { reasoning: "Avoidant infants appear indifferent — they do not seek contact and may turn away on reunion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Shows little distress and avoids or ignores the caregiver on reunion",
            commonErrors: ["Confusing avoidant (indifference) with resistant (clingy, inconsolable)."],
          },
        },
        {
          id: "psych-u2-attq3",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Bowlby's theory, the 'critical period' for attachment refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The roughly first year of life when attachment most readily forms" },
              { id: "b", text: "The period of adolescence when identity forms" },
              { id: "c", text: "The time needed to complete the strange situation" },
              { id: "d", text: "The window for learning language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical period", statement: "Attachment forms most readily in the first year; later formation is harder." },
            ],
            steps: [
              { reasoning: "Bowlby proposed attachment develops mainly during a sensitive/critical period in infancy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The roughly first year of life when attachment most readily forms",
            commonErrors: ["Confusing the attachment critical period with other developmental windows."],
          },
        },
        {
          id: "psych-u2-attq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Harlow's monkey studies challenged which assumption about attachment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That attachment styles vary across cultures" },
              { id: "b", text: "That attachment is learned through reinforcement" },
              { id: "c", text: "That infants form attachments to multiple caregivers" },
              { id: "d", text: "That attachment depends primarily on food provision" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Harlow's contact comfort", statement: "Infant monkeys preferred a cloth surrogate providing contact comfort over a wire mother providing food." },
            ],
            steps: [
              { reasoning: "Harlow showed attachment is driven by comfort and security, not just feeding — supporting Bowlby's innate-behaviour view.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** That attachment depends primarily on food provision",
            commonErrors: ["Thinking Harlow supported learning theory — he supported innate attachment behaviour."],
          },
        },
        {
          id: "psych-u2-attq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Bowlby's 'internal working model' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A laboratory procedure for measuring attachment" },
              { id: "b", text: "The genetic programme for attachment behaviour" },
              { id: "c", text: "A mental template of relationships formed in infancy that guides later expectations" },
              { id: "d", text: "A list of caregiving techniques" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Internal working model", statement: "Early attachment forms a mental template shaping expectations about self and others in later relationships." },
            ],
            steps: [
              { reasoning: "The internal working model is a cognitive representation of relationships built from early attachment experience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A mental template of relationships formed in infancy that guides later expectations",
            commonErrors: ["Confusing the internal working model with the strange situation procedure."],
          },
        },
        {
          id: "psych-u2-attq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many attachment styles did Ainsworth identify using the strange situation?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Attachment styles", statement: "Secure, insecure-avoidant and insecure-resistant/ambivalent — three styles." },
            ],
            steps: [
              { reasoning: "Ainsworth classified infants into secure, avoidant and resistant/ambivalent styles.", marks: 1, markCode: "M" },
              { reasoning: "That gives 3 styles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Including a fourth 'disorganised' style — that was added later and is not part of Ainsworth's original classification."],
          },
        },
        {
          id: "psych-u2-attq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe how secure and insecure-avoidant infants differ in their behaviour during the strange situation reunion episodes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Attachment styles in reunion", statement: "Secure infants seek and accept comfort; avoidant infants ignore or avoid the caregiver." },
            ],
            steps: [
              { reasoning: "Secure infants show distress on separation and actively seek contact and comfort on reunion, then resume exploration.", marks: 1, markCode: "M" },
              { reasoning: "Avoidant infants show little separation distress and on reunion actively avoid or ignore the caregiver — turning away or focusing on toys.", marks: 1, markCode: "M" },
              { reasoning: "The contrast shows secure attachment supports confident exploration while avoidant attachment reflects suppressed proximity-seeking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Secure = seeks comfort and resumes play; avoidant = ignores or avoids caregiver on reunion.",
            commonErrors: ["Describing resistant/ambivalent infants instead of the two asked for."],
          },
        },
        {
          id: "psych-u2-attq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how Bowlby's internal working model may influence adult relationships.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Internal working model", statement: "Early attachment becomes a template guiding expectations of self and others in later relationships." },
            ],
            steps: [
              { reasoning: "Secure attachment builds expectations that others are reliable and that one is worthy of love.", marks: 1, markCode: "M" },
              { reasoning: "These expectations tend to produce trusting, stable adult romantic relationships.", marks: 1, markCode: "M" },
              { reasoning: "Insecure styles predict anxiety, avoidance or preoccupation in adult relationships — though the model can be revised by later experience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The internal working model carries attachment expectations into adulthood, influencing relationship style — though it remains changeable.",
            commonErrors: ["Claiming attachment rigidly determines adult relationships — later experience can revise the model."],
          },
        },
        {
          id: "psych-u2-attq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate Ainsworth's strange situation as a method for assessing attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strange situation evaluation", statement: "Standardised and predictive, but artificial, brief and culturally biased." },
            ],
            steps: [
              { reasoning: "Strength: standardised procedure allowing reliable classification of attachment styles.", marks: 1, markCode: "R" },
              { reasoning: "Strength: attachment classifications predict later social and emotional outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: the lab setting is artificial — separation stress may not reflect natural caregiving.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: useful but culturally biased — 'secure' behaviour is defined by Western ideals of independence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The strange situation is standardised and predictive but artificial, brief and culturally biased.",
            commonErrors: ["Evaluating without mentioning cultural bias — a key IB criticism."],
          },
        },
        {
          id: "psych-u2-attq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "During a home observation, a 14-month-old plays happily while the mother is present, shows mild distress when she leaves, and on her return turns to toys without seeking contact.",
          parts: [
            { label: "a", prompt: "Classify this attachment style and describe the key behavioural evidence.", marks: 2 },
            { label: "b", prompt: "Explain two ways this attachment style might affect the child's later development.", marks: 3 },
            { label: "c", prompt: "Evaluate the claim that attachment style is fixed in infancy and cannot change.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Insecure-avoidant attachment", statement: "Avoidance of the caregiver on reunion; associated with later relationship and emotional difficulties but not fixed." },
            ],
            steps: [
              { part: "a", reasoning: "Insecure-avoidant — the infant shows little separation distress and avoids the caregiver on reunion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Turning to toys rather than seeking contact is the hallmark avoidant reunion behaviour.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Internal working model: the child may learn that proximity-seeking is not reliably rewarded, shaping later relationships.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Emotional regulation: avoidant attachment correlates with suppressed emotion and poorer peer relationships.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Exploration: the child may appear independent but actually shows limited secure-base behaviour.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Attachment shows continuity — early styles predict later outcomes probabilistically.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But it is not destiny: responsive caregiving, stable relationships and therapy can revise the internal working model.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: attachment is a risk factor shaped by ongoing experience, not a fixed trait.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Insecure-avoidant. (b) Negative working model, poorer emotional regulation, pseudo-independence. (c) Probabilistic, not fixed.",
            commonErrors: ["Classifying as secure because the infant 'plays happily' — reunion behaviour is the diagnostic feature."],
          },
        },
        {
          id: "psych-u2-attq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the three key ideas of Bowlby's attachment theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bowlby's theory", statement: "Attachment is an innate behavioural system forming in a critical period with a primary figure, producing an internal working model." },
            ],
            steps: [
              { reasoning: "Innate behavioural system: infants are biologically programmed to seek proximity to caregivers for protection and survival.", marks: 1, markCode: "M" },
              { reasoning: "Critical period and monotropy: attachment forms mainly in the first year with one primary figure.", marks: 1, markCode: "M" },
              { reasoning: "Internal working model: the early relationship becomes a template guiding later social expectations and behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Together these ideas frame attachment as evolved, timed and psychologically formative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Innate attachment system, critical period/monotropy, and the internal working model.",
            commonErrors: ["Describing Ainsworth's strange situation instead of Bowlby's theoretical claims."],
          },
        },
        {
          id: "psych-u2-attq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a large sample, 65% of infants were classified as securely attached. If 200 infants were assessed, how many showed secure attachment?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 130 }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Secure attachment prevalence", statement: "Secure attachment is the most common style in Western samples." },
            ],
            steps: [
              { reasoning: "Calculate 65% of 200: 0.65 × 200.", marks: 1, markCode: "M" },
              { reasoning: "0.65 × 200 = 130 infants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "130 infants",
            commonErrors: ["Answering 65 — that is the percentage, not the count."],
          },
        },
      ],
    },
    {
      id: "psych-u2-vygotsky-adolescence",
      title: "Vygotsky and adolescence",
      skill: "Explain the ZPD, scaffolding and private speech, and evaluate adolescent development.",
      lesson: {
        sections: [
          {
            heading: "Vygotsky's social constructivism",
            body: "**Lev Vygotsky** argued that cognitive development arises through social interaction. The **zone of proximal development (ZPD)** is the gap between what a child can do independently and what they can achieve with guidance. **Scaffolding** is the temporary support — prompts, demonstrations, questions — that helps a learner succeed within the ZPD, then fades as competence grows. **Private speech** (self-talk) is how children internalise social speech to regulate their own thinking.",
          },
          {
            heading: "Adolescent development",
            body: "Adolescence (roughly 11–18) involves **identity formation** — Erikson's **identity vs role confusion** stage, where teens explore who they are. **Peer influence** increases as adolescents seek autonomy and social acceptance; **risk-taking** rises partly because the emotional brain (limbic system) develops before the prefrontal cortex fully matures. Hormonal changes of puberty interact with social and cultural contexts.",
          },
          {
            heading: "Evaluation",
            body: "Vygotsky's ideas are supported by evidence that guided learning accelerates development, but scaffolding is hard to define and measure precisely. The 'storm and stress' view of adolescence is now challenged — most adolescents develop without significant turmoil, and culture shapes the experience of adolescence. Biological maturation sets timing but does not determine outcomes.",
          },
        ],
        keyFormulas: [
          { name: "ZPD", statement: "Can do alone ← ZPD → can do with guidance (scaffolding)" },
          { name: "Development path", statement: "Social interaction → private speech → internalised thought" },
          { name: "Adolescence", statement: "Puberty + identity exploration + peer influence + developing self-regulation" },
        ],
        workedExample: {
          problem: "A teacher demonstrates a maths technique, then asks guiding questions as students practise. Which Vygotskian concepts are at work?",
          solution: "Scaffolding within the ZPD: the demonstration and questions support students at their current level, and the fading of help as they gain competence lets them perform independently — moving tasks from the ZPD into independent ability.",
        },
      },
      questions: [
        {
          id: "psych-u2-devq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The zone of proximal development refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The age when puberty begins" },
              { id: "b", text: "Tasks a child cannot yet do at all" },
              { id: "c", text: "Tasks a child can do only with guidance" },
              { id: "d", text: "Tasks a child has fully mastered" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ZPD", statement: "The gap between independent ability and ability with guidance." },
            ],
            steps: [
              { reasoning: "The ZPD lies between what the child can do alone and what they can do with support.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Tasks a child can do only with guidance",
            commonErrors: ["Confusing the ZPD with already-mastered skills."],
          },
        },
        {
          id: "psych-u2-devq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe scaffolding and private speech in Vygotsky's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scaffolding & private speech", statement: "Scaffolding = temporary support within the ZPD; private speech = self-talk internalising social speech." },
            ],
            steps: [
              { reasoning: "Scaffolding: a more knowledgeable other provides temporary support (hints, demonstration) that is gradually withdrawn.", marks: 1, markCode: "M" },
              { reasoning: "Private speech: children talk to themselves to guide problem-solving, later internalising it as inner speech/thought.", marks: 1, markCode: "M" },
              { reasoning: "Both show cognitive development is socially driven, not purely individual.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scaffolding supports learning within the ZPD; private speech shows social speech becoming inner thought.",
            commonErrors: ["Defining scaffolding as permanent help rather than temporary support."],
          },
        },
        {
          id: "psych-u2-devq7",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two factors that shape development during adolescence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adolescent factors", statement: "Puberty, identity formation, peer influence and brain maturation interact." },
            ],
            steps: [
              { reasoning: "Biological: puberty triggers hormonal changes affecting mood, body image and sleep patterns.", marks: 1, markCode: "M" },
              { reasoning: "Cognitive/social: Erikson's identity vs role confusion — teens experiment with roles and beliefs.", marks: 1, markCode: "M" },
              { reasoning: "Peer influence rises as adolescents seek autonomy; peer norms can encourage or discourage risk-taking.", marks: 1, markCode: "R" },
              { reasoning: "Risk-taking partly reflects the limbic system maturing before the prefrontal cortex — sensation-seeking outpaces self-regulation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Puberty, identity exploration, peer influence and asynchronous brain maturation shape adolescence.",
            commonErrors: ["Reducing adolescence to 'hormones' without social and cognitive factors."],
          },
        },
        {
          id: "psych-u2-devq8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A teacher argues that 'all learning should be teacher-directed because children cannot learn alone.'",
          parts: [
            { label: "a", prompt: "Define the zone of proximal development.", marks: 2 },
            { label: "b", prompt: "Explain how peer interaction supports learning, with reference to Vygotsky.", marks: 3 },
            { label: "c", prompt: "Evaluate the teacher's claim that children cannot learn without direction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social learning", statement: "Learning is social: peers and teachers scaffold within the ZPD, but independent learning also develops." },
            ],
            steps: [
              { part: "a", reasoning: "The gap between what a child can do independently and what they can achieve with guidance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tasks within the ZPD are optimal for learning — not too easy, not too hard.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Peers act as 'more knowledgeable others' — a slightly more capable classmate can scaffold a task.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collaboration exposes children to private speech and shared problem-solving, internalising strategies.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vygotsky saw all higher mental functions originating in social interaction — peers are legitimate teachers.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Partly true: guidance within the ZPD accelerates learning beyond independent ability.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But children do learn independently through exploration and play; the ZPD includes self-directed discovery.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: directed instruction matters most for new skills; independence grows as competence internalises — balance is needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Gap between solo ability and guided ability. (b) Peers scaffold via ZPD and shared speech. (c) Direction helps but independence also develops.",
            commonErrors: ["Presenting Vygotsky as arguing children cannot learn without teachers."],
          },
        },
        {
          id: "psych-u2-devq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Vygotsky's theory, scaffolding refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Permanent help given by a teacher" },
              { id: "b", text: "Temporary support that helps a learner succeed within the ZPD, then fades" },
              { id: "c", text: "A child's independent problem-solving" },
              { id: "d", text: "The genetic programme for cognitive development" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scaffolding", statement: "Temporary support within the ZPD — hints, demonstrations, questions — withdrawn as competence grows." },
            ],
            steps: [
              { reasoning: "Scaffolding is by definition temporary support that fades as the learner gains independence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Temporary support that helps a learner succeed within the ZPD, then fades",
            commonErrors: ["Defining scaffolding as permanent assistance."],
          },
        },
        {
          id: "psych-u2-devq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Vygotsky's concept of private speech describes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading aloud silently" },
              { id: "b", text: "Whispering secrets to friends" },
              { id: "c", text: "Self-directed talk children use to guide their own thinking, later internalised as inner speech" },
              { id: "d", text: "Talking to imaginary companions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Private speech", statement: "Children's self-talk that regulates thinking and is gradually internalised as inner speech." },
            ],
            steps: [
              { reasoning: "Private speech is functional self-talk — a bridge from social speech to internal thought.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Self-directed talk children use to guide their own thinking, later internalised as inner speech",
            commonErrors: ["Confusing private speech with pretend play or imaginary friends."],
          },
        },
        {
          id: "psych-u2-devq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Adolescence is typically defined as spanning approximately which ages?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18–25 years" },
              { id: "b", text: "8–12 years" },
              { id: "c", text: "11–18 years" },
              { id: "d", text: "5–10 years" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Adolescence", statement: "Roughly ages 11–18, marked by puberty, identity formation and increasing peer influence." },
            ],
            steps: [
              { reasoning: "Adolescence begins around puberty (~11) and extends to early adulthood (~18).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 11–18 years",
            commonErrors: ["Confusing adolescence with childhood or emerging adulthood."],
          },
        },
        {
          id: "psych-u2-devq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "One biological explanation for increased risk-taking in adolescence is that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adolescents have lower dopamine levels than adults" },
              { id: "b", text: "The limbic/emotional system develops before the prefrontal cortex fully matures" },
              { id: "c", text: "The prefrontal cortex matures before the limbic system" },
              { id: "d", text: "Puberty has no effect on brain development" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adolescent brain development", statement: "The emotional limbic system matures before the self-regulating prefrontal cortex." },
            ],
            steps: [
              { reasoning: "Sensation-seeking (limbic) outpaces impulse control (prefrontal), increasing risk-taking.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The limbic/emotional system develops before the prefrontal cortex fully matures",
            commonErrors: ["Reversing the maturation order — prefrontal control develops last."],
          },
        },
        {
          id: "psych-u2-devq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Effective scaffolding should ideally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only be provided by parents, not teachers" },
              { id: "b", text: "Be maintained permanently to ensure success" },
              { id: "c", text: "Be replaced by independent worksheets immediately" },
              { id: "d", text: "Be withdrawn gradually as the learner's competence increases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scaffolding fading", statement: "Support is temporary and faded as competence grows — this transfer builds independence." },
            ],
            steps: [
              { reasoning: "The purpose of scaffolding is to be withdrawn so tasks move from the ZPD into independent ability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Be withdrawn gradually as the learner's competence increases",
            commonErrors: ["Thinking permanent support is helpful — it prevents internalisation of skills."],
          },
        },
        {
          id: "psych-u2-devq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A child can complete 3 tasks independently and, with guidance, can complete 7 tasks in total. According to Vygotsky's ZPD, how many tasks lie within the zone of proximal development?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ZPD", statement: "The ZPD is the gap between what can be done alone and what can be done with guidance." },
            ],
            steps: [
              { reasoning: "ZPD = guided ability minus independent ability: 7 - 3.", marks: 1, markCode: "M" },
              { reasoning: "7 - 3 = 4 tasks in the ZPD.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 tasks",
            commonErrors: ["Answering 7 — that is total guided ability, not the ZPD gap."],
          },
        },
        {
          id: "psych-u2-devq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how a teacher could use scaffolding when introducing a new maths concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scaffolding in teaching", statement: "Support matched to the ZPD — demonstration, prompts, questions — faded as competence grows." },
            ],
            steps: [
              { reasoning: "Demonstrate the technique first, then guide students with questions and hints rather than giving answers.", marks: 1, markCode: "M" },
              { reasoning: "Match support to current ability — tasks within the ZPD are neither too easy nor too hard.", marks: 1, markCode: "M" },
              { reasoning: "Gradually withdraw help as students succeed, moving tasks from guided to independent performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Demonstrate, guide with prompts within the ZPD, then fade support as competence grows.",
            commonErrors: ["Describing permanent teacher-centred instruction rather than temporary fading support."],
          },
        },
        {
          id: "psych-u2-devq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the progression from social speech to private speech to inner speech in Vygotsky's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Speech development", statement: "Cognitive functions originate socially, then become private, then internalised as thought." },
            ],
            steps: [
              { reasoning: "Social speech: children first use language to communicate with others — the source of higher mental functions.", marks: 1, markCode: "M" },
              { reasoning: "Private speech: children turn speech inward, talking to themselves aloud to guide problem-solving.", marks: 1, markCode: "M" },
              { reasoning: "Inner speech: private speech becomes silent inner thought — thinking itself is internalised social speech.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Social speech → private (self-directed) speech → internalised inner thought.",
            commonErrors: ["Omitting the social origin — Vygotsky argued all higher functions begin socially."],
          },
        },
        {
          id: "psych-u2-devq17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare Vygotsky's and Piaget's views on how children learn.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vygotsky vs Piaget", statement: "Piaget: individual constructivist stages; Vygotsky: social interaction within the ZPD drives development." },
            ],
            steps: [
              { reasoning: "Piaget: children construct knowledge individually through assimilation and accommodation across fixed stages.", marks: 1, markCode: "M" },
              { reasoning: "Vygotsky: development arises through social interaction — the ZPD and scaffolding mean learning can precede development.", marks: 1, markCode: "M" },
              { reasoning: "Key difference: Piaget sees stages as maturational ceilings; Vygotsky sees guided social learning as able to extend ability.", marks: 1, markCode: "R" },
              { reasoning: "Evidence for Vygotsky: guided instruction accelerates development; evidence for Piaget: stage-like patterns in classic tasks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Piaget emphasises individual staged construction; Vygotsky emphasises socially scaffolded learning within the ZPD.",
            commonErrors: ["Claiming one theory is simply 'right' — the comparison should weigh evidence for both."],
          },
        },
        {
          id: "psych-u2-devq18",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In a classroom, a teacher pairs each struggling student with a more capable peer for a weekly problem-solving session.",
          parts: [
            { label: "a", prompt: "Identify the Vygotskian concepts this arrangement uses.", marks: 2 },
            { label: "b", prompt: "Explain how peer interaction supports learning, with reference to the ZPD.", marks: 3 },
            { label: "c", prompt: "Evaluate whether children can learn effectively without any teacher direction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social learning", statement: "Peers act as more knowledgeable others who scaffold within the ZPD." },
            ],
            steps: [
              { part: "a", reasoning: "Scaffolding and the zone of proximal development — the peer provides temporary support within the gap between solo and guided ability.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The peer functions as a 'more knowledgeable other' — Vygotsky's term for anyone who can guide learning.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tasks just beyond independent ability lie in the ZPD, where guidance is most effective.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The peer's explanations and questions expose the learner to private speech and shared strategies that become internalised.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vygotsky argued all higher mental functions originate in social interaction — peers are legitimate teachers.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Partly true: guidance within the ZPD accelerates learning beyond what children achieve alone.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But children do learn independently through exploration, play and self-directed discovery.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: direction matters most for new skills; independence grows as competence internalises — a balance is needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Scaffolding + ZPD via a more knowledgeable other. (b) Peers extend ability through guided social interaction. (c) Direction helps but independence also develops.",
            commonErrors: ["Presenting peer learning as a replacement for all teaching — it works within the ZPD, not beyond it."],
          },
        },
        {
          id: "psych-u2-devq19",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe three key features of development during adolescence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adolescent development", statement: "Puberty, identity formation, peer influence and brain maturation interact." },
            ],
            steps: [
              { reasoning: "Biological: puberty triggers hormonal changes affecting mood, body image and sleep.", marks: 1, markCode: "M" },
              { reasoning: "Psychosocial: Erikson's identity vs role confusion — teens explore roles, values and beliefs.", marks: 1, markCode: "M" },
              { reasoning: "Social: peer influence increases as adolescents seek autonomy and peer acceptance.", marks: 1, markCode: "M" },
              { reasoning: "Cognitive/neural: the limbic system matures before the prefrontal cortex, contributing to risk-taking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Puberty, identity exploration, peer influence and asynchronous brain maturation.",
            commonErrors: ["Reducing adolescence to hormones alone without social and cognitive factors."],
          },
        },
        {
          id: "psych-u2-devq20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If adolescence is defined as spanning ages 11 to 18, how many years does it cover?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Adolescence", statement: "Typically ages 11–18." },
            ],
            steps: [
              { reasoning: "Calculate the span: 18 - 11.", marks: 1, markCode: "M" },
              { reasoning: "18 - 11 = 7 years.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 years",
            commonErrors: ["Answering 8 — subtracting incorrectly; 18 - 11 = 7."],
          },
        },
      ],
    },
  ],
};
