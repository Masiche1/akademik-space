import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "langb-u6-lesson-6-1",
  code: "6-1",
  title: "Intercultural Communication Frameworks",
  goal: "I CAN apply frameworks for analysing cultural differences in communication and adapt my style accordingly.",
  standards: ["Intercultural", "Communication", "Cultural frameworks", "Language B SL"],
  vocabulary: [
    { term: "Intercultural framework", definition: "A model for comparing cultural dimensions, e.g. individualism vs collectivism." },
    { term: "Individualism", definition: "A cultural orientation prioritising personal autonomy and individual achievement." },
    { term: "Collectivism", definition: "A cultural orientation prioritising group harmony and collective responsibility." },
    { term: "Power distance", definition: "The degree to which a culture accepts unequal power distribution in relationships." },
    { term: "Uncertainty avoidance", definition: "A culture's tolerance for ambiguity and unstructured situations." },
    { term: "Cultural adaptation", definition: "Adjusting your communication style to suit a different cultural context." },
  ],
  concepts: [
    {
      id: "langb-u6-cultural-dimensions",
      title: "Cultural dimensions in communication",
      skill: "Use cultural dimension frameworks to predict and understand differences in communication style.",
      lesson: {
        sections: [
          {
            heading: "Frameworks give us a map",
            body: "Cultural differences can seem random until you have a framework. Researchers have identified dimensions along which cultures vary: **individualism vs collectivism** (self vs group), **power distance** (flat vs hierarchical), **uncertainty avoidance** (tolerant vs rule-seeking). These are tendencies, not rules — individuals vary — but they help predict communication patterns.",
          },
          {
            heading: "Individualism vs collectivism",
            body: "**Individualist** cultures (e.g. much of North America, Western Europe) value personal achievement, direct self-expression and individual rights — 'I' statements are normal. **Collectivist** cultures (e.g. many East Asian, African, Latin American cultures) value group harmony, indirect communication and duty to family/community — 'we' is natural. Misreading this causes friction: directness that seems honest to one culture seems rude to another.",
          },
          {
            heading: "Power distance and uncertainty",
            body: "**Power distance**: low-distance cultures treat boss and employee as near-equals — questioning authority is acceptable. High-distance cultures expect deference to hierarchy — direct disagreement with a superior is risky. **Uncertainty avoidance**: high-avoidance cultures prefer rules, schedules and explicit instructions; low-avoidance cultures tolerate ambiguity and improvisation. Knowing these helps you adapt — or at least not misinterpret.",
          },
        ],
        keyFormulas: [
          { name: "Key dimensions", statement: "Individualism/collectivism + power distance + uncertainty avoidance" },
          { name: "Tendency not rule", statement: "Dimensions describe cultural tendencies — individuals always vary" },
        ],
        workedExample: {
          problem: "A student from a high-power-distance culture won't disagree with a teacher in class. Why?",
          solution: "In high power-distance cultures, challenging authority is culturally inappropriate — silence is respect, not disengagement. Understanding this prevents misjudging the student.",
        },
      },
      questions: [
        {
          id: "langb-u6-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'collectivism' describe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A culture where everyone lives alone" },
              { id: "b", text: "A cultural orientation prioritising group harmony and collective responsibility" },
              { id: "c", text: "A culture with no leaders" },
              { id: "d", text: "A culture that bans all groups" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collectivism", statement: "Cultural orientation valuing group harmony and collective identity over individual autonomy." },
            ],
            steps: [
              { reasoning: "Collectivism centres the group over the individual.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A cultural orientation prioritising group harmony and collective responsibility",
            commonErrors: ["Confusing collectivism with simply 'living together'."],
          },
        },
        {
          id: "langb-u6-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three cultural dimensions used to compare communication styles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural dimensions", statement: "Individualism/collectivism, power distance, uncertainty avoidance." },
            ],
            steps: [
              { reasoning: "Individualism vs collectivism: self-expression vs group harmony.", marks: 1, markCode: "M" },
              { reasoning: "Power distance: flat vs hierarchical relationships.", marks: 1, markCode: "M" },
              { reasoning: "Uncertainty avoidance: tolerance for ambiguity vs preference for rules.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Individualism/collectivism, power distance, uncertainty avoidance.",
            commonErrors: ["Treating dimensions as fixed rules rather than tendencies."],
          },
        },
        {
          id: "langb-u6-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how 'power distance' affects communication in a classroom or workplace.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Power distance in practice", statement: "High distance = deference expected; low distance = questioning acceptable." },
            ],
            steps: [
              { reasoning: "High power distance: students/workers defer to teachers/bosses — disagreement is risky.", marks: 1, markCode: "M" },
              { reasoning: "Low power distance: authority is questioned openly — debate is normal.", marks: 1, markCode: "M" },
              { reasoning: "Same behaviour (silence or direct challenge) means different things in each culture.", marks: 1, markCode: "R" },
              { reasoning: "Adapting means knowing which norm applies before judging someone's behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High distance expects deference; low distance welcomes challenge — same behaviour reads differently.",
            commonErrors: ["Judging silence as disengagement without considering cultural norms."],
          },
        },
        {
          id: "langb-u6-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A classmate from a collectivist culture rarely speaks in group discussions and defers to the teacher's opinion.",
          parts: [
            { label: "a", prompt: "Explain this behaviour using cultural dimensions.", marks: 2 },
            { label: "b", prompt: "Describe how a teacher from a low-power-distance culture might misinterpret it.", marks: 2 },
            { label: "c", prompt: "Suggest how the class could adapt to include this student.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framework application", statement: "Dimensions explain behaviour; adaptation follows understanding." },
            ],
            steps: [
              { part: "a", reasoning: "Collectivism: group harmony and deference to authority valued over individual self-expression.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "High power distance: deferring to teacher is respectful, not submissive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Low-distance teacher may read silence as disengagement or lack of confidence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "May misread deference as agreement rather than cultural norm.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Adaptation: give thinking time, allow written input, pair them with a peer, invite rather than pressure.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Create space for their participation style rather than forcing Western norms.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Inclusion through adaptation = intercultural competence in action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Collectivism + high power distance explain deference. (b) Low-distance teacher may misread as disengagement. (c) Adapt: thinking time, written input, peer support.",
            commonErrors: ["Forcing the student to conform to one cultural norm."],
          },
        },
        {
          id: "langb-u6-q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which cultural dimension describes the degree to which a culture accepts unequal power distribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uncertainty avoidance" },
              { id: "b", text: "Power distance" },
              { id: "c", text: "Individualism" },
              { id: "d", text: "Collectivism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Power distance", statement: "The degree to which a culture accepts unequal power distribution in relationships." },
            ],
            steps: [
              { reasoning: "Power distance measures acceptance of hierarchy and unequal power.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Power distance",
            commonErrors: ["Confusing power distance with uncertainty avoidance."],
          },
        },
        {
          id: "langb-u6-q26",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a low power-distance culture, a student openly disagreeing with a teacher would most likely be seen as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disrespectful and rude" },
              { id: "b", text: "Engaged and critical-thinking" },
              { id: "c", text: "Confused about the rules" },
              { id: "d", text: "Politely indifferent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Low power distance", statement: "Authority is questioned openly — debate is normal." },
            ],
            steps: [
              { reasoning: "Low power-distance cultures treat questioning authority as acceptable or positive.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Engaged and critical-thinking",
            commonErrors: ["Judging the behaviour by high-power-distance norms."],
          },
        },
        {
          id: "langb-u6-q27",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Cultures with high uncertainty avoidance typically prefer...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spontaneous improvisation" },
              { id: "b", text: "Explicit rules, schedules and clear instructions" },
              { id: "c", text: "Ambiguous, open-ended tasks" },
              { id: "d", text: "Avoiding all planning" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Uncertainty avoidance", statement: "A culture's tolerance for ambiguity — high avoidance prefers rules and structure." },
            ],
            steps: [
              { reasoning: "High uncertainty avoidance seeks structure, rules and predictability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Explicit rules, schedules and clear instructions",
            commonErrors: ["Reversing the meaning — high avoidance means low tolerance for ambiguity."],
          },
        },
        {
          id: "langb-u6-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "A culture where 'we' is more natural than 'I' and group harmony is valued is best described as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individualist" },
              { id: "b", text: "Low power distance" },
              { id: "c", text: "Collectivist" },
              { id: "d", text: "High uncertainty avoidance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collectivism", statement: "Group harmony and collective identity valued over individual autonomy." },
            ],
            steps: [
              { reasoning: "'We' orientation and group harmony are hallmarks of collectivism.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Collectivist",
            commonErrors: ["Confusing group orientation with power distance."],
          },
        },
        {
          id: "langb-u6-q29",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement about cultural dimensions is most accurate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are fixed rules that every person in a culture must follow" },
              { id: "b", text: "They describe tendencies — individuals within a culture always vary" },
              { id: "c", text: "They apply only to workplace communication" },
              { id: "d", text: "They can predict every individual's behaviour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tendency not rule", statement: "Dimensions describe cultural tendencies — individuals always vary." },
            ],
            steps: [
              { reasoning: "Dimensions are generalisations that help prediction, not deterministic rules.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They describe tendencies — individuals within a culture always vary",
            commonErrors: ["Treating dimensions as stereotypes that fix every individual's behaviour."],
          },
        },
        {
          id: "langb-u6-q30",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A culture that values indirect communication, saving face and duty to the group is most likely...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High power distance only" },
              { id: "b", text: "High uncertainty avoidance only" },
              { id: "c", text: "Individualist" },
              { id: "d", text: "Collectivist" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Collectivist communication", statement: "Indirectness, face-saving and group duty signal collectivist orientation." },
            ],
            steps: [
              { reasoning: "Indirectness and group duty align with collectivist values, not the other dimensions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Collectivist",
            commonErrors: ["Attributing indirectness to power distance alone."],
          },
        },
        {
          id: "langb-u6-q31",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Uncertainty avoidance' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoiding all contact with foreigners" },
              { id: "b", text: "A culture's tolerance for ambiguity and unstructured situations" },
              { id: "c", text: "Fear of making grammatical errors" },
              { id: "d", text: "Avoiding exams and assessments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Uncertainty avoidance", statement: "A culture's tolerance for ambiguity and unstructured situations." },
            ],
            steps: [
              { reasoning: "Uncertainty avoidance concerns tolerance for ambiguity, not language or social avoidance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A culture's tolerance for ambiguity and unstructured situations",
            commonErrors: ["Interpreting 'avoidance' literally as avoiding people."],
          },
        },
        {
          id: "langb-u6-q32",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one example of how 'power distance' might appear in classroom behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Power distance", statement: "Acceptance of unequal power — high distance expects deference, low distance welcomes questioning." },
            ],
            steps: [
              { reasoning: "Valid example: students defer silently to teacher (high distance) or openly question/disagree (low distance).", marks: 1, markCode: "M" },
              { reasoning: "Example correctly linked to the dimension.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. In high power-distance cultures students stay silent and defer to the teacher; in low power-distance cultures students question and debate openly.",
            commonErrors: ["Giving an example unrelated to hierarchy or authority."],
          },
        },
        {
          id: "langb-u6-q33",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'uncertainty avoidance' can affect communication style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Uncertainty avoidance in communication", statement: "High avoidance = explicit, structured, rule-bound communication; low avoidance = tolerance for ambiguity." },
            ],
            steps: [
              { reasoning: "High uncertainty avoidance: speakers prefer explicit instructions, clear schedules, detailed explanations.", marks: 1, markCode: "M" },
              { reasoning: "Low uncertainty avoidance: speakers tolerate vagueness, improvisation and open-ended discussion.", marks: 1, markCode: "M" },
              { reasoning: "The same level of detail can feel reassuring to one culture and patronising or unnecessary to another.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High avoidance cultures want explicit structure and rules; low avoidance cultures tolerate ambiguity — so detail levels differ.",
            commonErrors: ["Describing uncertainty avoidance without linking it to communication behaviour."],
          },
        },
        {
          id: "langb-u6-q34",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare how individualist and collectivist cultures might differ in expressing disagreement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Individualism vs collectivism", statement: "Direct self-expression vs indirect, harmony-preserving communication." },
            ],
            steps: [
              { reasoning: "Individualist cultures: direct disagreement is acceptable — 'I think you're wrong because...' is normal.", marks: 1, markCode: "M" },
              { reasoning: "Collectivist cultures: disagreement is often indirect — silence, hedging, 'perhaps we could consider...' to preserve harmony.", marks: 1, markCode: "M" },
              { reasoning: "Face-saving matters more in collectivist cultures, so open contradiction risks relationship damage.", marks: 1, markCode: "R" },
              { reasoning: "The same message is delivered differently: bluntly vs. wrapped in softening language.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Individualist: direct, explicit disagreement. Collectivist: indirect, harmony-preserving disagreement.",
            commonErrors: ["Treating indirectness as dishonesty rather than a cultural norm."],
          },
        },
        {
          id: "langb-u6-q35",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cultural dimensions should be treated as tendencies, not rules, when judging someone's behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tendency not rule", statement: "Dimensions describe cultural tendencies — individuals always vary." },
            ],
            steps: [
              { reasoning: "Dimensions describe averages across cultures — no individual perfectly matches the profile.", marks: 1, markCode: "R" },
              { reasoning: "Personal factors (upbringing, personality, context, education) override cultural defaults.", marks: 1, markCode: "M" },
              { reasoning: "Judging an individual by the stereotype risks misreading them — the same error as ignoring culture entirely.", marks: 1, markCode: "M" },
              { reasoning: "Use dimensions to generate hypotheses, then confirm with the actual person before concluding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dimensions are tendencies — individuals vary, so they guide prediction but must be confirmed case by case.",
            commonErrors: ["Using dimensions to stereotype individuals rather than as starting hypotheses."],
          },
        },
        {
          id: "langb-u6-q36",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a business meeting, a manager from a high power-distance culture works with an employee from a low power-distance culture. Predict two possible sources of friction and explain each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Power distance friction", statement: "Deference expectations vs open questioning create misreads in both directions." },
            ],
            steps: [
              { reasoning: "Friction 1: employee's open challenge of the manager's ideas may be read as disrespect by the high-distance manager.", marks: 1, markCode: "M" },
              { reasoning: "Friction 2: manager's directive, unconsulted decisions may be read as authoritarian by the low-distance employee.", marks: 1, markCode: "M" },
              { reasoning: "Both behaviours are normal within their own cultural frame — neither is intentionally rude.", marks: 1, markCode: "R" },
              { reasoning: "Resolution requires explicit norms or mutual adaptation, not blaming either party.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Manager may read open challenge as disrespect; employee may read unconsulted direction as authoritarian.",
            commonErrors: ["Blaming one party's personality instead of explaining via power distance."],
          },
        },
        {
          id: "langb-u6-q37",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "An exchange student from a high-uncertainty-avoidance, high-power-distance culture joins your class.",
          parts: [
            { label: "a", prompt: "Explain two ways their cultural dimensions might shape their classroom behaviour.", marks: 2 },
            { label: "b", prompt: "Describe how a teacher from a low-power-distance culture might misinterpret that behaviour.", marks: 2 },
            { label: "c", prompt: "Suggest three adaptations the class could make to include this student.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framework application", statement: "Dimensions predict behaviour; misinterpretation is common; adaptation restores inclusion." },
            ],
            steps: [
              { part: "a", reasoning: "High power distance: defers to teacher, avoids contradicting authority.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "High uncertainty avoidance: wants clear instructions, structured tasks, explicit criteria.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Low-distance teacher may read deference as passivity or lack of critical thinking.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "May misread requests for structure as dependence rather than cultural norm.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Adaptation 1: provide written instructions and explicit task criteria.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adaptation 2: allow written or paired contributions before whole-class speaking.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adaptation 3: privately invite their views so they can contribute without public challenge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Deference + need for structure. (b) Misread as passivity/dependence. (c) Written instructions, paired input, private invitations.",
            commonErrors: ["Forcing the student to adopt low-distance, low-avoidance norms."],
          },
        },
      ],
    },
    {
      id: "langb-u6-adaptation",
      title: "Adapting communication style",
      skill: "Adjust greetings, directness, formality and non-verbal cues to communicate effectively across cultures.",
      lesson: {
        sections: [
          {
            heading: "Adaptation is not imitation",
            body: "Cultural adaptation means adjusting your **communication style**, not pretending to be someone else. You might soften directness for a high-context culture, use more formal address for high power distance, or slow down and check understanding for a new language speaker. The goal is mutual understanding, not perfect mimicry.",
          },
          {
            heading: "Practical adaptations",
            body: "**Directness**: soften statements for indirect cultures ('Perhaps we could consider...' vs 'We must do X'). **Formality**: match the register to the culture's expectations — some cultures expect more ceremony, others less. **Non-verbal**: eye contact, personal space, gestures all carry cultural meaning — when unsure, observe and ask. **Pace**: slower speech and checking comprehension helps non-native speakers.",
          },
          {
            heading: "The risk of over-adaptation",
            body: "Over-adapting can backfire — exaggerated mimicry feels patronising, and abandoning your own style entirely isn't necessary. Effective adaptation is moderate: adjust the big differences (directness, formality) while remaining yourself. Authenticity plus awareness beats performance. The aim is being understood and understanding others.",
          },
        ],
        keyFormulas: [
          { name: "Adaptation targets", statement: "Directness + formality + pace + non-verbal cues" },
          { name: "Moderate not mimic", statement: "Adjust big differences, stay authentic — don't perform" },
        ],
        workedExample: {
          problem: "You need to give negative feedback to a colleague from a high-context culture. How do you adapt?",
          solution: "Soften directness: 'I have some concerns about the report' rather than 'This report is wrong'. Build rapport first, offer solutions, check understanding.",
        },
      },
      questions: [
        {
          id: "langb-u6-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'cultural adaptation' in communication mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pretending to be from another culture" },
              { id: "b", text: "Adjusting your communication style to suit a different cultural context" },
              { id: "c", text: "Learning every language perfectly" },
              { id: "d", text: "Avoiding all cross-cultural contact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural adaptation", statement: "Adjusting communication style for mutual understanding across cultures." },
            ],
            steps: [
              { reasoning: "Adaptation adjusts style, not identity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adjusting your communication style to suit a different cultural context",
            commonErrors: ["Confusing adaptation with imitation or pretence."],
          },
        },
        {
          id: "langb-u6-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three aspects of communication you might adapt for a different culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Adaptation targets", statement: "Directness, formality, pace and non-verbal cues." },
            ],
            steps: [
              { reasoning: "Directness: soften or sharpen statements to match cultural norms.", marks: 1, markCode: "M" },
              { reasoning: "Formality: adjust register — titles, greetings, politeness levels.", marks: 1, markCode: "M" },
              { reasoning: "Pace/non-verbal: slow speech, check comprehension, observe gesture norms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Directness, formality, pace/non-verbal cues.",
            commonErrors: ["Adapting only language choice while ignoring non-verbal norms."],
          },
        },
        {
          id: "langb-u6-q7",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'moderate adaptation' is better than either ignoring cultural differences or over-adapting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Balanced adaptation", statement: "Awareness + adjustment + authenticity = effective communication." },
            ],
            steps: [
              { reasoning: "Ignoring differences causes misunderstandings — you miss why something felt wrong.", marks: 1, markCode: "R" },
              { reasoning: "Over-adapting feels inauthentic or patronising — performance, not communication.", marks: 1, markCode: "M" },
              { reasoning: "Moderate adaptation adjusts the big differences while staying yourself.", marks: 1, markCode: "M" },
              { reasoning: "Authenticity plus awareness produces genuine mutual understanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moderate adaptation balances respect for difference with authenticity — neither ignoring nor performing.",
            commonErrors: ["Either ignoring cultural norms entirely or exaggerating them patronisingly."],
          },
        },
        {
          id: "langb-u6-q8",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are working on a group project with students from different cultural backgrounds.",
          parts: [
            { label: "a", prompt: "Describe two potential sources of miscommunication in the group.", marks: 2 },
            { label: "b", prompt: "Explain how cultural dimensions might explain these differences.", marks: 2 },
            { label: "c", prompt: "Suggest three ways to adapt your communication to improve the group's work.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applied adaptation", statement: "Identify differences -> explain via frameworks -> adapt constructively." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. direct vs indirect disagreement; different attitudes to deadlines/hierarchy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two plausible miscommunication sources.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dimensions explain: individualism vs collectivism, power distance, uncertainty avoidance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Framework applied to the specific behaviours.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Adaptation 1: establish explicit norms for the group.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adaptation 2: rotate leadership, invite all voices, allow written input.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adaptation 3: check understanding, clarify decisions explicitly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Directness/hierarchy differences. (b) Explained via dimensions. (c) Explicit norms, inclusive processes, clarification.",
            commonErrors: ["Blaming individuals for cultural communication differences."],
          },
        },
        {
          id: "langb-u6-q38",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Cultural adaptation' in communication primarily means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfectly imitating another culture's behaviour" },
              { id: "b", text: "Giving up your own communication style entirely" },
              { id: "c", text: "Speaking only in the other person's language" },
              { id: "d", text: "Adjusting your communication style to suit a different cultural context" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural adaptation", statement: "Adjusting communication style for mutual understanding — not imitation." },
            ],
            steps: [
              { reasoning: "Adaptation adjusts style for the context while remaining yourself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Adjusting your communication style to suit a different cultural context",
            commonErrors: ["Confusing adaptation with complete imitation or abandonment of your own style."],
          },
        },
        {
          id: "langb-u6-q39",
          difficulty: "core",
          totalMarks: 2,
          stem: "When giving negative feedback to someone from an indirect, high-context culture, the best first adaptation is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State the criticism as bluntly as possible" },
              { id: "b", text: "Soften directness and build rapport first" },
              { id: "c", text: "Send the feedback only by email" },
              { id: "d", text: "Avoid giving any feedback" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Adapting directness", statement: "Indirect cultures need softened, rapport-first criticism." },
            ],
            steps: [
              { reasoning: "Indirect cultures respond better to softened statements and relationship-first approaches.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Soften directness and build rapport first",
            commonErrors: ["Assuming blunt honesty is universally respected."],
          },
        },
        {
          id: "langb-u6-q40",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Matching the register' when adapting communication means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using the same slang as your friends" },
              { id: "b", text: "Adjusting formality — titles, greetings, politeness level — to cultural expectations" },
              { id: "c", text: "Speaking as loudly as possible" },
              { id: "d", text: "Avoiding all polite expressions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register adaptation", statement: "Matching formality and politeness levels to cultural norms." },
            ],
            steps: [
              { reasoning: "Register = level of formality; cultures differ in expected ceremony and address.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adjusting formality — titles, greetings, politeness level — to cultural expectations",
            commonErrors: ["Thinking register only concerns grammar rather than social formality."],
          },
        },
        {
          id: "langb-u6-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "Slowing your speech and checking comprehension primarily helps...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-native speakers and anyone processing a second language" },
              { id: "b", text: "Only fluent native speakers" },
              { id: "c", text: "People who are hard of hearing only" },
              { id: "d", text: "Nobody — it wastes time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pace adaptation", statement: "Slower speech + comprehension checks aid second-language processing." },
            ],
            steps: [
              { reasoning: "Reduced pace and comprehension checks lower the processing load for L2 speakers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Non-native speakers and anyone processing a second language",
            commonErrors: ["Assuming everyone processes speech at native speed."],
          },
        },
        {
          id: "langb-u6-q42",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Exaggerated mimicry of another culture's behaviour often backfires because it...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is grammatically incorrect" },
              { id: "b", text: "Feels patronising or inauthentic — performance rather than communication" },
              { id: "c", text: "Is illegal in most countries" },
              { id: "d", text: "Always improves relationships" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moderate not mimic", statement: "Exaggerated mimicry feels patronising; authenticity plus awareness works better." },
            ],
            steps: [
              { reasoning: "Over-adaptation reads as performance, which damages trust and authenticity.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Feels patronising or inauthentic — performance rather than communication",
            commonErrors: ["Thinking more adaptation is always better."],
          },
        },
        {
          id: "langb-u6-q43",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Moderate adaptation' means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adapting every aspect of your behaviour completely" },
              { id: "b", text: "Ignoring all cultural differences" },
              { id: "c", text: "Adapting the big differences — directness, formality — while remaining yourself" },
              { id: "d", text: "Only adapting your accent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moderate adaptation", statement: "Adjust the big differences while staying authentic." },
            ],
            steps: [
              { reasoning: "Effective adaptation targets major differences without abandoning your identity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Adapting the big differences — directness, formality — while remaining yourself",
            commonErrors: ["Choosing between total imitation and total non-adaptation."],
          },
        },
        {
          id: "langb-u6-q44",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When you are unsure about non-verbal norms in a new culture (eye contact, personal space, gestures), the best approach is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume your own norms apply everywhere" },
              { id: "b", text: "Avoid all eye contact permanently" },
              { id: "c", text: "Observe others and ask when unsure" },
              { id: "d", text: "Copy the most confident person's gestures exactly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Non-verbal uncertainty", statement: "Observe local norms and ask — don't assume or over-copy." },
            ],
            steps: [
              { reasoning: "Observation plus polite clarification is the safe, respectful strategy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Observe others and ask when unsure",
            commonErrors: ["Applying your home-culture non-verbal norms unthinkingly."],
          },
        },
        {
          id: "langb-u6-q45",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two aspects of communication you could adapt when meeting someone from a different culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Adaptation targets", statement: "Directness, formality, pace, non-verbal cues." },
            ],
            steps: [
              { reasoning: "Any two valid: directness, formality/register, pace, non-verbal cues, greeting style.", marks: 1, markCode: "M" },
              { reasoning: "Both examples are genuinely adaptable aspects of communication.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. directness and formality (also acceptable: pace, non-verbal cues, greetings).",
            commonErrors: ["Listing fixed traits like 'personality' instead of adjustable style features."],
          },
        },
        {
          id: "langb-u6-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'softening directness' means and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Softening directness", statement: "Replacing blunt statements with hedged, indirect phrasing for harmony-preserving cultures." },
            ],
            steps: [
              { reasoning: "Softening = wrapping criticism or disagreement in tentative, indirect language.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'This is wrong' becomes 'I have some concerns about this section — perhaps we could review it'.", marks: 1, markCode: "M" },
              { reasoning: "Purpose: preserves the other person's face while still conveying the message.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Softening = hedged, indirect phrasing (e.g. 'perhaps we could consider...' instead of 'we must...') to preserve harmony.",
            commonErrors: ["So softening the message becomes so vague it loses all meaning."],
          },
        },
        {
          id: "langb-u6-q47",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why adjusting your pace and checking comprehension matters in cross-cultural communication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pace adaptation", statement: "Slower speech and comprehension checks reduce processing load for L2 speakers." },
            ],
            steps: [
              { reasoning: "Second-language listeners need more processing time — natural native pace can overwhelm them.", marks: 1, markCode: "M" },
              { reasoning: "Checking comprehension ('Does that make sense?') catches misunderstandings early.", marks: 1, markCode: "M" },
              { reasoning: "These adjustments signal respect and prevent the listener silently losing the thread.", marks: 1, markCode: "R" },
              { reasoning: "It benefits everyone, not just non-native speakers — clarity is universally effective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slower pace + comprehension checks reduce processing load and catch misunderstandings early.",
            commonErrors: ["Assuming silence means understanding rather than checking."],
          },
        },
        {
          id: "langb-u6-q48",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why both ignoring cultural differences and over-adapting can damage communication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced adaptation", statement: "Neither ignoring nor performing works — moderate adaptation does." },
            ],
            steps: [
              { reasoning: "Ignoring differences causes predictable misunderstandings — you miss why something felt wrong.", marks: 1, markCode: "R" },
              { reasoning: "Over-adapting feels inauthentic or patronising — it becomes performance, not communication.", marks: 1, markCode: "M" },
              { reasoning: "Both extremes fail for opposite reasons: one lacks awareness, the other lacks authenticity.", marks: 1, markCode: "M" },
              { reasoning: "The effective middle adjusts major differences while remaining genuinely yourself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ignoring causes misunderstandings; over-adapting feels patronising — moderate adaptation balances both.",
            commonErrors: ["Presenting only one extreme rather than comparing both failures."],
          },
        },
        {
          id: "langb-u6-q49",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You must present a project to an international audience including students from both individualist and collectivist cultures. Describe two adaptations you would make to your presentation style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applied adaptation", statement: "Adjust directness, formality, pace and structure to reach mixed audiences." },
            ],
            steps: [
              { reasoning: "Adaptation 1: soften direct claims and invite input — e.g. 'we'd value your thoughts' rather than only asserting conclusions.", marks: 1, markCode: "M" },
              { reasoning: "Adaptation 2: moderate pace, check comprehension, and use clear visual structure for non-native listeners.", marks: 1, markCode: "M" },
              { reasoning: "Both adaptations serve the collectivist members without alienating individualist ones.", marks: 1, markCode: "R" },
              { reasoning: "Adaptation is purposeful and moderate — not caricatured mimicry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. soften assertions + invite group input; slow pace + check comprehension for mixed audiences.",
            commonErrors: ["Adapting only for one cultural group and excluding the other."],
          },
        },
        {
          id: "langb-u6-q50",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are preparing a welcome speech for exchange students arriving from several different cultures.",
          parts: [
            { label: "a", prompt: "Identify two cultural differences that might affect how the students respond to your speech.", marks: 2 },
            { label: "b", prompt: "Explain how these differences relate to communication dimensions.", marks: 2 },
            { label: "c", prompt: "Describe three ways you would adapt the speech to communicate effectively.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applied adaptation", statement: "Identify differences -> link to dimensions -> adapt constructively." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. direct vs indirect humour; formal vs casual address expectations; tolerance for ambiguity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two plausible, distinct differences identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Differences map to individualism/collectivism, power distance or uncertainty avoidance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Framework correctly applied to the specific differences.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Adaptation 1: use clear structure and moderate pace for comprehension.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adaptation 2: choose inclusive, unambiguous humour and avoid culture-specific references.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adaptation 3: warm, moderately formal welcome that doesn't assume familiarity norms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Directness/formality/humour differences. (b) Linked to dimensions. (c) Clear structure, inclusive humour, warm moderate formality.",
            commonErrors: ["Writing a speech that assumes one cultural norm for everyone."],
          },
        },
      ],
    },
  ],
};
