import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "tok-u1-lesson-1-3",
  code: "1-3",
  title: "Language, Emotion and Faith",
  goal: "I CAN explain how language, emotion and faith function as ways of knowing and evaluate their contributions and limits.",
  standards: ["TOK", "Ways of Knowing", "Language", "Emotion", "Faith"],
  vocabulary: [
    { term: "Language", definition: "A system of symbols and rules used to communicate, think and construct meaning." },
    { term: "Linguistic relativity", definition: "The hypothesis that the structure of a language shapes the thought patterns of its speakers." },
    { term: "Emotion", definition: "Affective states — feelings such as joy, fear or empathy — that influence cognition and judgment." },
    { term: "Faith", definition: "Belief or trust that is not based on empirical proof, often involving commitment beyond evidence." },
    { term: "Framing", definition: "How the choice of words and categories shapes the way an issue is understood." },
    { term: "Affective knowledge", definition: "Knowledge gained through feeling and emotional engagement rather than pure reason." },
  ],
  concepts: [
    {
      id: "tok-u1-language",
      title: "Language as a way of knowing",
      skill: "Explain how language enables and constrains knowledge and evaluate linguistic relativity.",
      lesson: {
        sections: [
          {
            heading: "Language as the vehicle of knowledge",
            body: "Language lets us share, record and refine knowledge: without it there would be no science, history or philosophy as we know them. It also structures thought itself — we think **in** language. Naming something is often the first step to understanding it; categories like 'justice' or 'democracy' carry whole frameworks of meaning.",
          },
          {
            heading: "Limits of language",
            body: "Language can distort as well as transmit: metaphors frame issues invisibly, euphemisms hide unpleasant realities, and some experiences (grief, aesthetic response, mystical states) resist verbal capture. The Sapir-Whorf hypothesis suggests language may limit what we can think — though evidence suggests influence rather than strict determination.",
          },
          {
            heading: "TOK significance",
            body: "In TOK essays, language questions are rich: does the medium limit the message? Can different languages produce genuinely different knowledge? Ask who controls terminology — political language ('collateral damage', 'enhanced interrogation') reveals how framing shapes what counts as knowledge.",
          },
        ],
        keyFormulas: [
          { name: "Language double role", statement: "Enables shared knowledge but filters and frames what can be expressed" },
          { name: "Framing test", statement: "Ask: whose words are being used, and what do they make visible or invisible?" },
        ],
        workedExample: {
          problem: "Is it true that 'we cannot know what we cannot say'?",
          solution: "Partly. Language structures and limits articulation, but tacit knowledge, perception and intuition operate beyond words. The claim is strongest in domains requiring precise shared definition (law, science) and weakest in domains of felt experience (art, emotion).",
        },
      },
      questions: [
        {
          id: "tok-u1-l13c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Linguistic relativity (the Sapir-Whorf hypothesis) proposes that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Language has no effect on thought" },
              { id: "b", text: "The structure of language shapes thought patterns" },
              { id: "c", text: "All languages express identical concepts" },
              { id: "d", text: "Thinking is impossible without writing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linguistic relativity", statement: "The hypothesis that language structure influences or shapes the thought patterns of its speakers." },
            ],
            steps: [
              { reasoning: "The hypothesis claims language influences thought, not that it has no effect or that all languages are identical.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Language structure shapes thought patterns",
            commonErrors: ["Confusing linguistic relativity with linguistic determinism."],
          },
        },
        {
          id: "tok-u1-l13c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how language can distort knowledge even while transmitting it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Language distortion", statement: "Word choice, metaphor and framing shape what is understood and hidden." },
            ],
            steps: [
              { reasoning: "Metaphors and euphemisms frame reality — 'collateral damage' hides civilian harm.", marks: 1, markCode: "M" },
              { reasoning: "Categories and terminology determine what can be thought and said within a discourse.", marks: 1, markCode: "M" },
              { reasoning: "Some experiences (grief, aesthetic response) resist verbal capture entirely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Language transmits knowledge but also frames it — word choice, metaphor and categories shape what is understood and concealed.",
            commonErrors: ["Treating language as a neutral transparent medium."],
          },
        },
        {
          id: "tok-u1-l13c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that language limits what we can know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Language and limits", statement: "Language structures thought but does not strictly determine it." },
            ],
            steps: [
              { reasoning: "For: language shapes categories and available concepts; some ideas are hard to express.", marks: 1, markCode: "M" },
              { reasoning: "Against: people think beyond words — perception, intuition and tacit knowledge operate pre-linguistically.", marks: 1, markCode: "M" },
              { reasoning: "Language also evolves and can be stretched to express new ideas.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: language constrains articulation more than thought itself, but shapes what counts as sayable knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Language shapes and constrains expression of knowledge but does not absolutely limit what can be known.",
            commonErrors: ["One extreme: language determines thought entirely, or has no effect."],
          },
        },
        {
          id: "tok-u1-l13c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of language in the production of knowledge.",
          parts: [
            { label: "a", prompt: "Explain two ways language enables knowledge.", marks: 2 },
            { label: "b", prompt: "Explain two ways language can distort or limit knowledge.", marks: 3 },
            { label: "c", prompt: "Evaluate whether different languages produce different knowledge.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Language and knowledge", statement: "Language is both the medium of shared knowledge and a filter that shapes what can be expressed." },
            ],
            steps: [
              { part: "a", reasoning: "Enables shared, cumulative knowledge — science and history depend on communication.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Structures thought — categories and terms organise understanding.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Framing and euphemism can conceal or distort reality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Linguistic categories may limit what can be conceived or said.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Some experiences resist verbal expression — tacit and felt knowledge.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Different languages carve up experience differently — colour terms, spatial metaphors.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evidence suggests influence rather than strict determination of thought.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: languages produce different emphases and expressions of knowledge, not wholly different realities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Enables sharing and structures thought. (b) Frames, euphemises, limits expression. (c) Different emphases, not wholly different knowledge.",
            commonErrors: ["Confusing language influence with language determinism."],
          },
        },
        {
          id: "tok-u1-l13c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Linguistic relativity claims that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Language has no effect on thought" },
              { id: "b", text: "The structure of a language influences its speakers' thought patterns" },
              { id: "c", text: "All languages express identical concepts" },
              { id: "d", text: "Thinking is impossible without writing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linguistic relativity", statement: "The hypothesis that language structure shapes or influences thought." },
            ],
            steps: [
              { reasoning: "Relativity claims influence, not determinism or no effect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Language structure influences thought",
            commonErrors: ["Confusing relativity with determinism."],
          },
        },
        {
          id: "tok-u1-l13c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Framing refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mathematical structure of an argument" },
              { id: "b", text: "How the choice of words and categories shapes understanding of an issue" },
              { id: "c", text: "The physical format of a document" },
              { id: "d", text: "A camera shot composition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Framing", statement: "Word choice and categories shape what is noticed and how an issue is understood." },
            ],
            steps: [
              { reasoning: "Framing is about linguistic presentation shaping perception of an issue.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Word choice shaping understanding",
            commonErrors: ["Confusing framing with formal structure."],
          },
        },
        {
          id: "tok-u1-l13c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A euphemism such as 'collateral damage' illustrates that language can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always convey facts neutrally" },
              { id: "b", text: "Conceal or soften unpleasant realities" },
              { id: "c", text: "Never influence thought" },
              { id: "d", text: "Only describe physical objects" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Euphemism", statement: "Euphemisms replace direct terms with softer ones, hiding or minimising what is meant." },
            ],
            steps: [
              { reasoning: "'Collateral damage' avoids saying civilian deaths — language conceals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Conceal or soften unpleasant realities",
            commonErrors: ["Treating language as a neutral medium."],
          },
        },
        {
          id: "tok-u1-l13c1q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways in which language enables the production of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Language enables knowledge", statement: "Language allows shared, cumulative and precise knowledge." },
            ],
            steps: [
              { reasoning: "Language lets knowledge be shared, recorded and refined — science, history and philosophy depend on it.", marks: 2, markCode: "M" },
              { reasoning: "It structures thought itself: categories and terms organise understanding.", marks: 1, markCode: "M" },
              { reasoning: "Naming is often the first step to understanding a phenomenon.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Language enables shared cumulative knowledge and structures thought through categories and naming.",
            commonErrors: ["Listing only one way language enables knowledge."],
          },
        },
        {
          id: "tok-u1-l13c1q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways in which language can limit or distort knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Language limits", statement: "Language frames, euphemises and categorises, which can hide or distort what is known." },
            ],
            steps: [
              { reasoning: "Metaphors and euphemisms frame issues invisibly — 'collateral damage' hides harm.", marks: 2, markCode: "M" },
              { reasoning: "Categories and terminology determine what can be thought or said within a discourse.", marks: 1, markCode: "M" },
              { reasoning: "Some experiences — grief, aesthetic response — resist verbal capture entirely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Language distorts through framing and euphemism and limits expression of felt or tacit knowledge.",
            commonErrors: ["Claiming language has no effect on knowledge."],
          },
        },
        {
          id: "tok-u1-l13c1q10",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate the evidence for and against linguistic relativity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Linguistic relativity evidence", statement: "Evidence suggests language influences thought without strictly determining it." },
            ],
            steps: [
              { reasoning: "For: different languages carve up experience differently — colour terms, spatial metaphors, kinship categories.", marks: 1, markCode: "M" },
              { reasoning: "For: speakers of different languages attend to and remember colour shades differently.", marks: 1, markCode: "M" },
              { reasoning: "Against: people can think beyond their language; translation and learning new concepts occur.", marks: 1, markCode: "R" },
              { reasoning: "Against: strong determinism is refuted — thought is not imprisoned by language.", marks: 1, markCode: "R" },
              { reasoning: "Language influences salience and expression more than it determines thought.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: weak linguistic relativity is supported; strong determinism is not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Language influences thought patterns without determining them; weak relativity is supported, strong determinism is not.",
            commonErrors: ["Treating the hypothesis as proven or disproven entirely."],
          },
        },
        {
          id: "tok-u1-l13c1q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why naming is often described as the first step to understanding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Naming and knowledge", statement: "Giving something a name fixes it as a category and makes it available for shared discussion." },
            ],
            steps: [
              { reasoning: "A name isolates a phenomenon from the flux of experience as a distinct object of attention.", marks: 1, markCode: "M" },
              { reasoning: "Once named, the thing can be classified, compared and discussed.", marks: 1, markCode: "M" },
              { reasoning: "Naming also carries connotations — what we call something shapes how we think about it.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: naming precedes and enables conceptual knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Naming isolates and categorises experience, making it discussable and thinkable.",
            commonErrors: ["Treating naming as merely labelling with no cognitive role."],
          },
        },
        {
          id: "tok-u1-l13c1q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that 'we cannot know what we cannot say.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sayability and knowledge", statement: "Language structures articulation but does not exhaust knowledge." },
            ],
            steps: [
              { reasoning: "For: much knowledge requires precise shared definition — law, science, mathematics depend on language.", marks: 1, markCode: "M" },
              { reasoning: "For: categories and terms determine what can be expressed and therefore examined.", marks: 1, markCode: "M" },
              { reasoning: "Against: tacit knowledge, perception and intuition operate before and beyond words.", marks: 1, markCode: "R" },
              { reasoning: "Against: artists and mystics claim knowledge that resists verbal capture.", marks: 1, markCode: "R" },
              { reasoning: "Language limits articulation more than thought itself.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: the claim holds for shared, precise knowledge but fails for tacit and felt knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "We cannot fully share what we cannot say, but we can know things we cannot articulate.",
            commonErrors: ["Accepting or rejecting the claim absolutely."],
          },
        },
        {
          id: "tok-u1-l13c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of language in the production of knowledge.",
          parts: [
            { label: "a", prompt: "Explain two ways language enables knowledge.", marks: 2 },
            { label: "b", prompt: "Explain two ways language can distort or limit knowledge.", marks: 3 },
            { label: "c", prompt: "Evaluate whether different languages produce different knowledge.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Language and knowledge", statement: "Language is both the medium of shared knowledge and a filter that shapes what can be expressed." },
            ],
            steps: [
              { part: "a", reasoning: "Enables shared, cumulative knowledge — science and history depend on communication.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Structures thought — categories and terms organise understanding.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Framing and euphemism can conceal or distort reality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Linguistic categories may limit what can be conceived or said.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Some experiences resist verbal expression — tacit and felt knowledge.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Different languages carve up experience differently — colour terms, spatial metaphors.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evidence suggests influence rather than strict determination of thought.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: languages produce different emphases and expressions of knowledge, not wholly different realities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Enables sharing and structures thought. (b) Frames, euphemises, limits expression. (c) Different emphases, not wholly different knowledge.",
            commonErrors: ["Confusing language influence with language determinism."],
          },
        },
        {
          id: "tok-u1-l13c1q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Language's 'double role' in knowledge refers to the fact that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only transmits information without affecting it" },
              { id: "b", text: "Both enables shared knowledge and filters what can be expressed" },
              { id: "c", text: "Is irrelevant to knowledge production" },
              { id: "d", text: "Only works in written form" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Double role of language", statement: "Language enables shared knowledge while filtering and framing expression." },
            ],
            steps: [
              { reasoning: "Language both transmits knowledge and shapes what can be said.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Enables and filters knowledge",
            commonErrors: ["Seeing only the enabling role of language."],
          },
        },
        {
          id: "tok-u1-l13c1q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tacit knowledge is best defined as knowledge that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Can be fully stated in words" },
              { id: "b", text: "We can use but cannot fully articulate in words" },
              { id: "c", text: "Is always false" },
              { id: "d", text: "Requires no learning" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tacit knowledge", statement: "Knowledge we possess and use but cannot fully put into words." },
            ],
            steps: [
              { reasoning: "Tacit knowledge resists verbal articulation — e.g. riding a bike.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Used but not fully articulable",
            commonErrors: ["Confusing tacit knowledge with ignorance."],
          },
        },
        {
          id: "tok-u1-l13c1q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how political language can frame an issue and shape what counts as knowledge about it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Political framing", statement: "Choices of labels and categories direct attention and shape what is seen as relevant or true." },
            ],
            steps: [
              { reasoning: "Labels like 'freedom fighter' versus 'terrorist' frame the same acts differently.", marks: 1, markCode: "M" },
              { reasoning: "Terms like 'tax relief' versus 'tax cut' carry different assumptions.", marks: 1, markCode: "M" },
              { reasoning: "Framing determines which questions seem legitimate and which facts seem salient.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: political language shapes the knowledge landscape, not just describes it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Political labels frame issues, directing attention and shaping what counts as relevant knowledge.",
            commonErrors: ["Treating political language as neutral description."],
          },
        },
        {
          id: "tok-u1-l13c1q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how different languages can produce different knowledge, using colour vocabulary as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Linguistic categories", statement: "Languages divide continuous experience into different categories, affecting perception and memory." },
            ],
            steps: [
              { reasoning: "Some languages have many distinct colour terms; others have few.", marks: 1, markCode: "M" },
              { reasoning: "Speakers of languages with more colour categories distinguish and remember shades better.", marks: 1, markCode: "M" },
              { reasoning: "This suggests language shapes what aspects of experience are salient and memorable.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: languages produce different emphases in knowledge, though not wholly different realities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Languages with richer colour vocabularies yield finer perceptual and mnemonic distinctions.",
            commonErrors: ["Claiming languages produce completely different realities."],
          },
        },
        {
          id: "tok-u1-l13c1q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether translation can ever capture a text's meaning fully.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Translation limits", statement: "Translation transfers meaning between linguistic systems but inevitably loses connotation and cultural context." },
            ],
            steps: [
              { reasoning: "Against full capture: connotations, idioms and cultural references resist transfer.", marks: 1, markCode: "M" },
              { reasoning: "Against: different languages categorise experience differently, so equivalents are approximate.", marks: 1, markCode: "M" },
              { reasoning: "For: skilled translation preserves core propositional meaning and communicative intent.", marks: 1, markCode: "M" },
              { reasoning: "For: meaning can be paraphrased across languages, suggesting a shared substrate of thought.", marks: 1, markCode: "R" },
              { reasoning: "Translation always involves interpretation and choices by the translator.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: translation approximates meaning well but never captures it completely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation conveys core meaning but inevitably loses connotation and cultural nuance.",
            commonErrors: ["Claiming translation is either perfect or impossible."],
          },
        },
        {
          id: "tok-u1-l13c1q19",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Knowledge question: To what extent does language determine what we can know?",
          parts: [
            { label: "a", prompt: "Explain two ways language shapes what can be known.", marks: 3 },
            { label: "b", prompt: "Explain two ways knowledge can exceed language.", marks: 2 },
            { label: "c", prompt: "Reach a justified conclusion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Language and determinism", statement: "Language shapes categories and expression without imprisoning thought." },
            ],
            steps: [
              { part: "a", reasoning: "Categories and terms organise what can be conceived and discussed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Framing and metaphor shape how issues are understood.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Gaps in vocabulary can make some ideas hard to express.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tacit knowledge, perception and intuition operate without words.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "People learn new languages and concepts, showing thought is not fixed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Language strongly influences what is easy to think and say.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But it does not absolutely determine what can be known.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: language shapes the landscape of the knowable without fencing it in.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Categories, framing, vocabulary gaps. (b) Tacit knowledge, learnability. (c) Shaping influence, not determination.",
            commonErrors: ["Binary determinism versus no-effect answers."],
          },
        },
        {
          id: "tok-u1-l13c1q20",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The strong (determinist) version of the Sapir-Whorf hypothesis claims that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Language slightly influences thought" },
              { id: "b", text: "Language strictly determines what its speakers can think" },
              { id: "c", text: "Language has no relation to thought" },
              { id: "d", text: "All languages are equally rich" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linguistic determinism", statement: "The strong claim that language determines the limits of thought." },
            ],
            steps: [
              { reasoning: "Determinism is the strong version: language strictly bounds thought.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Language strictly determines thought",
            commonErrors: ["Confusing the strong and weak versions of the hypothesis."],
          },
        },
      ],
    },
    {
      id: "tok-u1-emotion-faith",
      title: "Emotion and faith as ways of knowing",
      skill: "Evaluate how emotion and faith contribute to knowledge and where they conflict with reason and evidence.",
      lesson: {
        sections: [
          {
            heading: "Emotion: the affective way of knowing",
            body: "Emotion gives knowledge of value and significance: we know injustice feels wrong, beauty moves us, danger alarms us. Empathy lets us understand others' inner lives in ways reason alone cannot. But emotion also distorts — fear breeds prejudice, anger clouds judgment, and we often rationalise feelings after the fact.",
          },
          {
            heading: "Faith: knowing beyond proof",
            body: "Faith is trust or belief held without empirical demonstration — religious faith, trust in persons, commitment to ideals. It provides meaning, motivation and community. Faith claims access to truths reason cannot reach, but it is unfalsifiable: no evidence can prove it wrong, which is also its weakness as a route to knowledge.",
          },
          {
            heading: "Tensions and synthesis",
            body: "Emotion and faith challenge the dominance of pure reason: some knowledge (moral insight, religious experience, aesthetic judgement) seems to require them. Yet both can override evidence — belief persisting despite disconfirmation is sometimes called **motivated reasoning**. TOK asks you to weigh when affective and committed knowing illuminate versus when they deceive.",
          },
        ],
        keyFormulas: [
          { name: "Emotion role", statement: "Provides knowledge of value and others' experience; vulnerable to distortion" },
          { name: "Faith role", statement: "Provides meaning and commitment beyond evidence; unfalsifiable" },
        ],
        workedExample: {
          problem: "Can emotion be a source of knowledge in ethics?",
          solution: "Yes — moral emotions like empathy and indignation give access to value that pure reason struggles to ground. But emotion alone is unreliable: the same emotion can justify cruelty or compassion. Ethically, emotion should inform but be checked by reason and evidence.",
        },
      },
      questions: [
        {
          id: "tok-u1-l13c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Faith as a way of knowing is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Belief based on empirical proof" },
              { id: "b", text: "Belief or trust held without empirical demonstration" },
              { id: "c", text: "Logical deduction from premises" },
              { id: "d", text: "Direct sensory observation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Faith", statement: "Belief or trust not based on empirical proof, involving commitment beyond evidence." },
            ],
            steps: [
              { reasoning: "Faith is defined by commitment without empirical demonstration.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Belief held without empirical demonstration",
            commonErrors: ["Confusing faith with reason or perception."],
          },
        },
        {
          id: "tok-u1-l13c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how emotion can function as a way of knowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Affective knowledge", statement: "Emotion gives access to value, significance and others' inner experience." },
            ],
            steps: [
              { reasoning: "Emotion provides knowledge of value — we feel injustice, beauty, danger before reasoning about them.", marks: 1, markCode: "M" },
              { reasoning: "Empathy gives access to others' feelings and perspectives unavailable to pure reason.", marks: 1, markCode: "M" },
              { reasoning: "However emotion can distort judgment when it overrides evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emotion yields affective knowledge of value and others' experience, though it can also distort judgment.",
            commonErrors: ["Dismissing emotion entirely as irrational."],
          },
        },
        {
          id: "tok-u1-l13c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate faith as a reliable way of knowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reliability of faith", statement: "Faith provides meaning beyond evidence but is unfalsifiable and unverifiable." },
            ],
            steps: [
              { reasoning: "For: faith provides meaning, motivation and access to truths beyond empirical reach.", marks: 1, markCode: "M" },
              { reasoning: "Against: faith is unfalsifiable — no evidence can confirm or refute it.", marks: 1, markCode: "M" },
              { reasoning: "Different faiths contradict each other yet all claim knowledge, undermining reliability.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: faith yields committed belief and meaning but not publicly verifiable knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Faith gives meaning and commitment but cannot be verified or falsified, so it is weak as a route to shared knowledge.",
            commonErrors: ["Treating faith as either infallible or worthless."],
          },
        },
        {
          id: "tok-u1-l13c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the contributions of emotion and faith to knowledge.",
          parts: [
            { label: "a", prompt: "Explain one area of knowledge where emotion is essential.", marks: 2 },
            { label: "b", prompt: "Explain one area where faith provides knowledge that reason cannot.", marks: 3 },
            { label: "c", prompt: "Evaluate the dangers of relying on emotion and faith as ways of knowing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emotion and faith", statement: "Both access forms of knowledge reason cannot, but both risk overriding evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Ethics or aesthetics: moral insight and aesthetic response require emotional engagement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Empathy in human sciences gives access to others' experience.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Religion: faith claims access to transcendent truths beyond empirical test.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Faith also underpins trust in persons and commitment to ideals without proof.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reason cannot verify or refute these claims — they rest on commitment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Emotion can produce prejudice, motivated reasoning and distortion.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Faith can resist disconfirmation and conflict with other knowledge claims.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: valuable complements to reason but dangerous when they override evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ethics/aesthetics/human sciences. (b) Religion, trust, ideals. (c) Risk of bias and unfalsifiability.",
            commonErrors: ["Treating emotion and faith as interchangeable with reason."],
          },
        },
        {
          id: "tok-u1-l13c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Emotion as a way of knowing is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Logical deduction from premises" },
              { id: "b", text: "Affective states that give access to value and others' experience" },
              { id: "c", text: "Direct sensory observation" },
              { id: "d", text: "Memorised facts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Emotion as WOK", statement: "Emotion provides affective knowledge of value, significance and others' inner lives." },
            ],
            steps: [
              { reasoning: "Emotion yields knowledge through feeling rather than inference or sensation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Affective access to value and experience",
            commonErrors: ["Confusing emotion with reason or perception."],
          },
        },
        {
          id: "tok-u1-l13c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Faith as a way of knowing is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Belief verified by experiment" },
              { id: "b", text: "Trust or belief held without empirical demonstration" },
              { id: "c", text: "Deduction from accepted axioms" },
              { id: "d", text: "Consensus among scientists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Faith", statement: "Belief or trust held without empirical proof." },
            ],
            steps: [
              { reasoning: "Faith is defined by commitment beyond evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Belief without empirical demonstration",
            commonErrors: ["Confusing faith with verified knowledge."],
          },
        },
        {
          id: "tok-u1-l13c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Empathy contributes to knowledge by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replacing the need for evidence" },
              { id: "b", text: "Giving access to others' inner experience and perspectives" },
              { id: "c", text: "Proving moral claims deductively" },
              { id: "d", text: "Eliminating bias automatically" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Empathy", statement: "Empathy provides knowledge of others' feelings and perspectives unavailable to pure reason." },
            ],
            steps: [
              { reasoning: "Empathy is an emotional capacity that reveals inner experience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Access to others' inner experience",
            commonErrors: ["Thinking empathy eliminates bias rather than adding a source of knowledge."],
          },
        },
        {
          id: "tok-u1-l13c2q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how emotion provides knowledge of value that reason alone struggles to supply.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Affective knowledge of value", statement: "Emotions register significance and value directly, grounding moral and aesthetic judgement." },
            ],
            steps: [
              { reasoning: "We feel injustice, beauty and danger before we can reason about them.", marks: 1, markCode: "M" },
              { reasoning: "Emotional responses carry evaluative information — what matters, what harms, what is beautiful.", marks: 1, markCode: "M" },
              { reasoning: "Pure reason can describe facts but struggles to ground why they matter.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: emotion supplies knowledge of value that reason alone cannot fully generate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emotion registers value and significance directly, grounding moral and aesthetic knowledge.",
            commonErrors: ["Dismissing emotion as purely irrational."],
          },
        },
        {
          id: "tok-u1-l13c2q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how faith provides kinds of knowledge or meaning that evidence cannot supply.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Faith beyond evidence", statement: "Faith supplies meaning, purpose and commitment that empirical methods cannot reach." },
            ],
            steps: [
              { reasoning: "Faith answers questions of ultimate meaning and purpose that evidence cannot address.", marks: 1, markCode: "M" },
              { reasoning: "It sustains commitment to ideals and persons even when proof is unavailable.", marks: 1, markCode: "M" },
              { reasoning: "Religious and spiritual experience is claimed to reveal truths beyond empirical test.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: faith provides meaning and commitment, though not publicly verifiable knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Faith supplies meaning, purpose and commitment that empirical evidence cannot provide.",
            commonErrors: ["Claiming faith produces verifiable knowledge like science."],
          },
        },
        {
          id: "tok-u1-l13c2q10",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate the claim that 'emotion is the enemy of knowledge.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emotion and knowledge", statement: "Emotion both enables affective knowledge and risks distorting judgment." },
            ],
            steps: [
              { reasoning: "Against: emotion provides knowledge of value, others' experience and moral insight.", marks: 1, markCode: "M" },
              { reasoning: "Against: empathy and moral emotion are essential in ethics and the human sciences.", marks: 1, markCode: "M" },
              { reasoning: "For: emotion can override evidence — fear breeds prejudice, anger clouds judgment.", marks: 1, markCode: "M" },
              { reasoning: "For: motivated reasoning lets beliefs persist despite disconfirmation.", marks: 1, markCode: "R" },
              { reasoning: "Emotion is a source of knowledge when it informs and a distortion when it decides.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: emotion is a necessary but dangerous way of knowing that requires checks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emotion is not simply the enemy of knowledge — it is a necessary source that must be checked against evidence.",
            commonErrors: ["One-sided condemnation or celebration of emotion."],
          },
        },
        {
          id: "tok-u1-l13c2q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what 'motivated reasoning' is and give an example of how it distorts knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Motivated reasoning", statement: "Reasoning driven by desire or commitment rather than evidence, producing biased conclusions." },
            ],
            steps: [
              { reasoning: "Motivated reasoning selects and interprets evidence to support a desired conclusion.", marks: 1, markCode: "M" },
              { reasoning: "Example: a fan dismissing evidence that their team cheated while accepting identical evidence against rivals.", marks: 1, markCode: "M" },
              { reasoning: "Emotion and commitment drive the reasoning, not the other way around.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: motivation can corrupt even careful reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Motivated reasoning biases evidence selection to reach desired conclusions, corrupting knowledge.",
            commonErrors: ["Assuming reasoning is always neutral."],
          },
        },
        {
          id: "tok-u1-l13c2q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether religious faith can be regarded as a source of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Faith and knowledge", statement: "Religious faith claims access to truths beyond empirical test, but cannot be publicly verified or falsified." },
            ],
            steps: [
              { reasoning: "For: faith provides meaning, moral orientation and access to claimed transcendent truths.", marks: 1, markCode: "M" },
              { reasoning: "For: religious experience may reveal dimensions of reality inaccessible to other methods.", marks: 1, markCode: "M" },
              { reasoning: "Against: faith claims are unfalsifiable — no evidence could prove them wrong.", marks: 1, markCode: "M" },
              { reasoning: "Against: contradictory faiths all claim knowledge, undermining reliability.", marks: 1, markCode: "R" },
              { reasoning: "Faith yields committed belief rather than shared, checkable knowledge.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: faith is a meaningful way of believing but a weak way of knowing in the public sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Religious faith provides meaning and committed belief but not publicly verifiable knowledge.",
            commonErrors: ["Treating faith as either proven knowledge or pure fantasy."],
          },
        },
        {
          id: "tok-u1-l13c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the contributions of emotion and faith to knowledge.",
          parts: [
            { label: "a", prompt: "Explain one area of knowledge where emotion is essential.", marks: 2 },
            { label: "b", prompt: "Explain one area where faith provides knowledge that reason cannot.", marks: 3 },
            { label: "c", prompt: "Evaluate the dangers of relying on emotion and faith as ways of knowing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emotion and faith", statement: "Both access forms of knowledge reason cannot, but both risk overriding evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Ethics or aesthetics: moral insight and aesthetic response require emotional engagement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Empathy in human sciences gives access to others' experience.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Religion: faith claims access to transcendent truths beyond empirical test.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Faith also underpins trust in persons and commitment to ideals without proof.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reason cannot verify or refute these claims — they rest on commitment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Emotion can produce prejudice, motivated reasoning and distortion.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Faith can resist disconfirmation and conflict with other knowledge claims.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: valuable complements to reason but dangerous when they override evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ethics/aesthetics/human sciences. (b) Religion, trust, ideals. (c) Risk of bias and unfalsifiability.",
            commonErrors: ["Treating emotion and faith as interchangeable with reason."],
          },
        },
        {
          id: "tok-u1-l13c2q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the best example of emotion functioning as a way of knowing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculating a chemical reaction rate" },
              { id: "b", text: "Feeling moral indignation at an act of injustice" },
              { id: "c", text: "Reciting a memorised formula" },
              { id: "d", text: "Observing a cell under a microscope" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moral emotion", statement: "Emotions like indignation register value judgements directly." },
            ],
            steps: [
              { reasoning: "Moral indignation is an affective response that knows injustice as wrong.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Moral indignation at injustice",
            commonErrors: ["Confusing emotional knowledge with neutral observation."],
          },
        },
        {
          id: "tok-u1-l13c2q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "To say that faith is 'unfalsifiable' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faith claims can be proven false by evidence" },
              { id: "b", text: "No evidence could in principle prove faith wrong" },
              { id: "c", text: "Faith is always incorrect" },
              { id: "d", text: "Faith requires no commitment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unfalsifiability", statement: "A claim is unfalsifiable if no possible evidence could refute it." },
            ],
            steps: [
              { reasoning: "Unfalsifiability means the claim cannot be tested against evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** No evidence could prove it wrong",
            commonErrors: ["Confusing unfalsifiable with proven true."],
          },
        },
        {
          id: "tok-u1-l13c2q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "The main danger of emotion as a way of knowing is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never provides any knowledge" },
              { id: "b", text: "Can override evidence and produce bias or prejudice" },
              { id: "c", text: "Is too slow to be useful" },
              { id: "d", text: "Only works in mathematics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Danger of emotion", statement: "Emotion can distort judgment when it overrides evidence." },
            ],
            steps: [
              { reasoning: "Fear breeds prejudice and anger clouds judgment — emotion can mislead.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Can override evidence and produce bias",
            commonErrors: ["Denying emotion has any value as a way of knowing."],
          },
        },
        {
          id: "tok-u1-l13c2q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how faith can coexist with reason, and how it can conflict with reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Faith-reason relation", statement: "Faith and reason can complement each other or compete for authority." },
            ],
            steps: [
              { reasoning: "Coexistence: reason can examine the coherence and implications of faith claims without proving them.", marks: 1, markCode: "M" },
              { reasoning: "Coexistence: many traditions integrate reasoned argument with committed belief.", marks: 1, markCode: "M" },
              { reasoning: "Conflict: when faith claims contradict evidence or reasoned conclusions, one must yield.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: harmony is possible when each respects the other's domain; conflict arises over authority.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Faith and reason coexist when examining different domains but conflict when claims contradict.",
            commonErrors: ["Treating faith and reason as always opposed or always compatible."],
          },
        },
        {
          id: "tok-u1-l13c2q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two people hold contradictory religious faiths yet both claim to have knowledge. Evaluate what this implies about faith as a way of knowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contradictory faiths", statement: "Mutually exclusive faith claims cannot all be true, undermining faith's claim to knowledge." },
            ],
            steps: [
              { reasoning: "Contradictory claims cannot all correspond to reality — at most one can be true.", marks: 1, markCode: "M" },
              { reasoning: "Faith offers no shared method to adjudicate between competing claims.", marks: 1, markCode: "M" },
              { reasoning: "This suggests faith yields subjective certainty rather than objective knowledge.", marks: 1, markCode: "R" },
              { reasoning: "However, each believer may still gain personal meaning and orientation.", marks: 1, markCode: "R" },
              { reasoning: "The disagreement is itself evidence that faith is not a reliable public route to knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: faith produces committed belief and meaning, not intersubjective knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contradictory faiths show faith yields personal conviction and meaning, not verifiable knowledge.",
            commonErrors: ["Claiming all religions are equally true as knowledge."],
          },
        },
        {
          id: "tok-u1-l13c2q19",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Knowledge question: When should emotion and faith be trusted as ways of knowing?",
          parts: [
            { label: "a", prompt: "Describe two contexts where emotion provides reliable knowledge.", marks: 2 },
            { label: "b", prompt: "Describe two contexts where faith provides valuable knowing.", marks: 3 },
            { label: "c", prompt: "Reach a justified conclusion about when they should be trusted.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trusting affect and faith", statement: "Emotion and faith are trustworthy for meaning and value but unreliable for factual claims." },
            ],
            steps: [
              { part: "a", reasoning: "Moral and aesthetic domains: emotion registers value judgements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Interpersonal understanding: empathy reveals others' experience.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Religious experience: faith claims access to transcendent meaning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Trust in persons: faith underpins relationships without proof.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Commitment to ideals: faith sustains values beyond evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Trust emotion and faith for questions of value, meaning and relationship.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Do not trust them for empirical or factual claims that evidence can test.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: trust them in their own domains but not as substitutes for evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Value, empathy. (b) Meaning, trust, ideals. (c) Trust for meaning and value, verify for facts.",
            commonErrors: ["Either embracing or rejecting emotion and faith wholesale."],
          },
        },
        {
          id: "tok-u1-l13c2q20",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The strongest objection to faith as a way of knowing is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is too slow to be useful" },
              { id: "b", text: "Is unfalsifiable and cannot be verified by evidence" },
              { id: "c", text: "Requires too much training" },
              { id: "d", text: "Only works in mathematics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Objection to faith", statement: "Unfalsifiability means faith claims cannot be tested against evidence." },
            ],
            steps: [
              { reasoning: "A way of knowing should be checkable; faith resists all testing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Unfalsifiable and unverifiable",
            commonErrors: ["Objecting to faith on grounds other than its unfalsifiability."],
          },
        },
      ],
    },
  ],
};
