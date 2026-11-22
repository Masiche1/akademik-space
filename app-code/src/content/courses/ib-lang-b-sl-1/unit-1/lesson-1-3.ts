import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "langb-u1-lesson-1-3",
  code: "1-3",
  title: "Vocabulary Building and Inference",
  goal: "I CAN learn vocabulary in context, use word families, and infer meaning of unknown words from clues.",
  standards: ["Vocabulary", "Inference", "Comprehension", "Language B SL"],
  vocabulary: [
    { term: "Word family", definition: "A group of related words sharing a root, e.g. 'decide', 'decision', 'decisive'." },
    { term: "Collocation", definition: "Words that naturally go together, e.g. 'make a decision' not 'do a decision'." },
    { term: "Context clue", definition: "Surrounding words or examples that reveal the meaning of an unknown word." },
    { term: "Register of a word", definition: "The formality level of a word — 'kids' vs 'children', 'buy' vs 'purchase'." },
    { term: "False friend", definition: "A word that looks like a word in your language but has a different meaning." },
    { term: "Connotation", definition: "The feeling or association a word carries beyond its dictionary meaning." },
  ],
  concepts: [
    {
      id: "langb-u1-vocab-building",
      title: "Building vocabulary systematically",
      skill: "Learn words in context, organise them by word families and collocations, and record them for review.",
      lesson: {
        sections: [
          {
            heading: "Learn words, not lists",
            body: "Isolated word lists are forgotten quickly. Learn vocabulary **in context**: read a sentence, notice the word, guess its meaning, then check. Record each word with an example sentence, its word family and any collocations. Five words learned deeply beat fifty memorised and lost.",
          },
          {
            heading: "Word families and collocations",
            body: "A **word family** shares a root: 'create', 'creative', 'creation', 'creativity'. Learning the family multiplies your vocabulary. **Collocations** are fixed partnerships — 'do homework', 'make progress', 'heavy rain' — and using them correctly is a mark of natural language use in writing and speaking.",
          },
          {
            heading: "Beware false friends and register",
            body: "A **false friend** looks familiar but means something else (e.g. 'actual' does not mean 'current' in English). Always check a new word's **connotation** and register: a word that is fine in conversation may be too informal for an essay. When in doubt, choose the neutral, common word.",
          },
        ],
        keyFormulas: [
          { name: "Word family", statement: "Root + prefixes/suffixes = multiple forms: act -> active, action, actor, activity" },
          { name: "Collocation", statement: "Fixed word partners must be learned as chunks: 'make a decision'" },
        ],
        workedExample: {
          problem: "You meet 'The committee reached a unanimous decision.' How can you expand this into vocabulary learning?",
          solution: "Record 'decision' with its family (decide, decisive, decidedly), the collocation 'reach/make a decision', and the context sentence. One encounter yields a whole word family plus a collocation.",
        },
      },
      questions: [
        {
          id: "langb-u1-q17",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'word family'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Related words sharing a common root" },
              { id: "b", text: "Words from the same country" },
              { id: "c", text: "Words that rhyme with each other" },
              { id: "d", text: "A list of synonyms" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word family", statement: "A set of words sharing a root, e.g. decide/decision/decisive." },
            ],
            steps: [
              { reasoning: "Word families group forms derived from the same base word.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Related words sharing a common root",
            commonErrors: ["Confusing word families with synonyms or rhyming words."],
          },
        },
        {
          id: "langb-u1-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three pieces of information you should record for each new word you learn.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary recording", statement: "Word + example sentence + word family/collocation maximises retention." },
            ],
            steps: [
              { reasoning: "The word itself with its part of speech and translation if needed.", marks: 1, markCode: "M" },
              { reasoning: "An example sentence showing the word in real context.", marks: 1, markCode: "M" },
              { reasoning: "Related forms or collocations, e.g. word family members and typical word partners.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Word + part of speech, example sentence, word family/collocations.",
            commonErrors: ["Recording only the translation with no context."],
          },
        },
        {
          id: "langb-u1-q19",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "A difficult sentence",
            author: "Written for Akademik Space",
            source: "Inference practice",
            text: "Although the path was steep and the weather turned cold, the hikers pressed on, driven by the promise of a clear view from the summit.",
          },
          stem: "Explain what the word 'pressed on' means here and identify the context clues that reveal it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context clues", statement: "Nearby words like 'although', 'steep', 'cold' and 'promise' reveal meaning without a dictionary." },
            ],
            steps: [
              { reasoning: "'Pressed on' means continued walking despite difficulty.", marks: 1, markCode: "M" },
              { reasoning: "Clue 1: 'although the path was steep and the weather turned cold' signals an obstacle being overcome.", marks: 1, markCode: "M" },
              { reasoning: "Clue 2: 'driven by the promise of a clear view' shows motivation to continue.", marks: 1, markCode: "M" },
              { reasoning: "Inference combines obstacle + motivation to deduce 'kept going'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Pressed on' = continued despite difficulty; clues are the obstacles (steep, cold) and the motivation (clear view).",
            commonErrors: ["Guessing meaning from the word alone without using surrounding clues."],
          },
        },
        {
          id: "langb-u1-q20",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You encounter the word 'reluctant' in a text: 'She was reluctant to leave the party.'",
          parts: [
            { label: "a", prompt: "Infer its meaning from context and give a simple definition.", marks: 2 },
            { label: "b", prompt: "List two other words from the same word family or with similar meaning.", marks: 2 },
            { label: "c", prompt: "Write an original sentence using 'reluctant' correctly, and explain why your sentence shows understanding.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Deep vocabulary learning", statement: "Infer meaning, extend with word family/synonyms, then produce in a correct original sentence." },
            ],
            steps: [
              { part: "a", reasoning: "Context shows she did not want to leave — 'reluctant' means unwilling or hesitant.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate definition given.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two of: hesitation, unwillingness, loath, disinclined.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both words relevant and correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Original sentence uses 'reluctant' in a correct pattern, e.g. 'reluctant to + verb'.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sentence shows the word's meaning of unwillingness/hesitation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explanation demonstrates awareness of meaning and usage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unwilling/hesitant, inferred from not wanting to leave. (b) e.g. hesitant, unwilling. (c) Correct original sentence + explanation.",
            commonErrors: ["Using the word in a grammatically wrong pattern, e.g. 'reluctant of leaving'."],
          },
        },
        {
          id: "langb-u1-q73",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a collocation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A word's dictionary translation only" },
              { id: "b", text: "Any two words that rhyme" },
              { id: "c", text: "Words that naturally combine, such as 'make a decision'" },
              { id: "d", text: "A list of antonyms" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collocation", statement: "A natural fixed combination of words used together." },
            ],
            steps: [
              { reasoning: "Collocations are conventional word partnerships.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Words that naturally combine, such as 'make a decision'",
            commonErrors: ["Confusing collocations with synonyms or word families."],
          },
        },
        {
          id: "langb-u1-q74",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which set is a word family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "big, small, medium" },
              { id: "b", text: "run, fast, athlete" },
              { id: "c", text: "happy, quickly, table" },
              { id: "d", text: "create, creative, creation, creativity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word family", statement: "Related forms share a root and often different suffixes or prefixes." },
            ],
            steps: [
              { reasoning: "'create' forms share the root 'creat-'.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** create, creative, creation, creativity",
            commonErrors: ["Grouping related meanings without shared word forms."],
          },
        },
        {
          id: "langb-u1-q75",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is learning vocabulary in context better than memorising isolated lists?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lists cannot contain new words" },
              { id: "b", text: "Isolated words are always false friends" },
              { id: "c", text: "Context removes the need to learn meaning" },
              { id: "d", text: "Context shows meaning, usage, collocations and memory hooks" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual learning", statement: "Sentences reveal meaning and usage that lists alone cannot." },
            ],
            steps: [
              { reasoning: "Context supplies meaning and usage evidence.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Context shows meaning, usage, collocations and memory hooks",
            commonErrors: ["Thinking translation alone is enough for vocabulary learning."],
          },
        },
        {
          id: "langb-u1-q76",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is a false friend problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recording an example sentence" },
              { id: "b", text: "Assuming 'actual' means 'current' because a similar word exists in another language" },
              { id: "c", text: "Learning a word family together" },
              { id: "d", text: "Using a collocation correctly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "False friend", statement: "A word resembling another language's word but having a different meaning." },
            ],
            steps: [
              { reasoning: "False friends arise from misleading similarity.", marks: 1, markCode: "M" },
              { reasoning: "The example in choice (a) illustrates this danger.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Assuming 'actual' means 'current' because a similar word exists in another language",
            commonErrors: ["Trusting similar-looking words without checking meaning."],
          },
        },
        {
          id: "langb-u1-q77",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does register matter when choosing vocabulary for an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal words are always easier to spell" },
              { id: "b", text: "Informal words can weaken the formal tone required in academic writing" },
              { id: "c", text: "All words have the same formality" },
              { id: "d", text: "Register only matters in speaking" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Register", statement: "Vocabulary formality must match the task, audience and text type." },
            ],
            steps: [
              { reasoning: "Essays require a more formal register than conversation.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) explains the risk.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Informal words can weaken the formal tone required in academic writing",
            commonErrors: ["Choosing a word only because its meaning is close, ignoring tone."],
          },
        },
        {
          id: "langb-u1-q78",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the best reason to record a new word with an example sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sentence shows how the word is actually used" },
              { id: "b", text: "It proves the word is a cognate" },
              { id: "c", text: "It replaces the need for meaning" },
              { id: "d", text: "It makes the vocabulary list longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary recording", statement: "Example sentences preserve context, collocation and usage." },
            ],
            steps: [
              { reasoning: "Usage evidence improves retention and correct production.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The sentence shows how the word is actually used",
            commonErrors: ["Recording only translations without usage."],
          },
        },
        {
          id: "langb-u1-q79",
          difficulty: "core",
          totalMarks: 6,
          stem: "You find the word 'reliable' in the sentence: 'Our bus driver is reliable because she is never late.'",
          parts: [
            { label: "a", prompt: "Infer its meaning from context.", marks: 2 },
            { label: "b", prompt: "Name two other words in the same word family or similar meaning.", marks: 2 },
            { label: "c", prompt: "Write a correct collocation using 'reliable'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Deep word learning", statement: "Meaning, family and collocation together create usable vocabulary." },
            ],
            steps: [
              { part: "a", reasoning: "'Reliable' means dependable or trustworthy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The clue is 'never late', showing consistent dependability.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two of: dependable, trustworthy, reliability, rely.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both answers are relevant and correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A natural collocation is 'a reliable source' or 'reliable transport'.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The phrase uses the word naturally and correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Dependable/trustworthy. (b) e.g. dependable, reliability. (c) e.g. 'a reliable source'.",
            commonErrors: ["Inventing an unnatural collocation such as 'make reliable'."],
          },
        },
        {
          id: "langb-u1-q80",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Design a vocabulary entry for a word you want to learn.",
          parts: [
            { label: "a", prompt: "Choose a useful word and give its meaning.", marks: 2 },
            { label: "b", prompt: "Write an original example sentence.", marks: 2 },
            { label: "c", prompt: "Add one word-family member or collocation.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary entry", statement: "Meaning plus context plus extension supports retention and use." },
            ],
            steps: [
              { part: "a", reasoning: "A relevant word is chosen and its meaning is accurate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The definition is clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The sentence uses the word correctly in context.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The sentence is original and meaningful.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A correct family member or collocation is added.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Word + accurate meaning + correct example sentence + word family/collocation.",
            commonErrors: ["Copying a dictionary example without understanding its use."],
          },
        },
        {
          id: "langb-u1-q81",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Complete the word family.",
          parts: [
            { label: "a", prompt: "From 'decide', give one noun form.", marks: 2 },
            { label: "b", prompt: "From 'decide', give one adjective form.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word family", statement: "Related forms share a root with different grammatical functions." },
            ],
            steps: [
              { part: "a", reasoning: "'Decision' is the noun form.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The form is grammatically correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Decisive' is an adjective form.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The form is grammatically correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) decision. (b) decisive.",
            commonErrors: ["Giving synonyms rather than forms of the same root."],
          },
        },
        {
          id: "langb-u1-q82",
          difficulty: "core",
          totalMarks: 6,
          stem: "You read: 'The evidence was compelling, so the jury reached a quick verdict.'",
          parts: [
            { label: "a", prompt: "Infer the meaning of 'compelling'.", marks: 2 },
            { label: "b", prompt: "Explain the clue that supports your inference.", marks: 2 },
            { label: "c", prompt: "Write a sentence using 'compelling' correctly.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contextual inference", statement: "Cause-and-result logic reveals word meaning." },
            ],
            steps: [
              { part: "a", reasoning: "'Compelling' means convincing or strongly persuasive.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The result 'quick verdict' confirms strong persuasion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The clue is the cause 'so the jury reached a quick verdict'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The result shows the evidence persuaded the jury.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The sentence uses 'compelling' in a correct pattern.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The meaning of convincing is preserved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Convincing/persuasive. (b) The result 'quick verdict' shows persuasion. (c) Correct original sentence using the meaning.",
            commonErrors: ["Guessing a noun or unrelated meaning without checking the sentence."],
          },
        },
        {
          id: "langb-u1-q83",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A student wants to learn the word 'controversial'.",
          parts: [
            { label: "a", prompt: "Write a context sentence and infer its meaning.", marks: 3 },
            { label: "b", prompt: "Give two related forms or synonyms.", marks: 2 },
            { label: "c", prompt: "Explain how to check whether the word fits a formal essay.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary acquisition", statement: "Context, related forms and register checks make vocabulary usable." },
            ],
            steps: [
              { part: "a", reasoning: "A correct context sentence is provided.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The meaning is inferred as causing disagreement or debate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The sentence supports the meaning.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two of: controversy, controversially, disputed, debatable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both are relevant.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check whether the word's tone matches the essay's audience and purpose.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is generally neutral/formal enough for analytical writing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Context sentence plus 'causing debate'. (b) e.g. controversy, disputed. (c) Check register and connotation for the essay.",
            commonErrors: ["Learning only the translation without usage or tone."],
          },
        },
        {
          id: "langb-u1-q84",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word belongs to the same word family as 'act'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "action" },
              { id: "b", text: "happy" },
              { id: "c", text: "table" },
              { id: "d", text: "quickly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word family", statement: "Forms of 'act' share the root with different endings." },
            ],
            steps: [
              { reasoning: "'Action' shares the root 'act-'.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** action",
            commonErrors: ["Giving unrelated synonyms instead of same-root forms."],
          },
        },
      ],
    },
    {
      id: "langb-u1-inference",
      title: "Inferring meaning from context",
      skill: "Use context clues — contrast, example, cause and punctuation — to deduce the meaning of unfamiliar words without a dictionary.",
      lesson: {
        sections: [
          {
            heading: "Why inference beats dictionary-hunting",
            body: "In an exam you cannot stop to look up every unknown word. **Inference** means deducing meaning from clues around the word. Readers who infer keep their momentum and score higher in comprehension. The clues are usually nearby: a contrast, an example, an explanation or even punctuation.",
          },
          {
            heading: "The main clue types",
            body: "**Contrast**: 'unlike her brother, who was talkative, she was taciturn' — taciturn = quiet. **Example**: 'such as mangoes and bananas' after 'tropical fruit'. **Explanation**: 'the path was treacherous, covered in ice and loose rocks'. **Punctuation**: commas or dashes often signal a definition nearby: 'the artefact — a small clay pot — was found...'.",
          },
          {
            heading: "Confirming your guess",
            body: "After inferring, test the meaning by reading the whole sentence again with your guess substituted. If it makes sense, you are probably right. If not, try a different part of speech or look for a second clue. Keep a list of words you inferred successfully — it shows your growing vocabulary.",
          },
        ],
        keyFormulas: [
          { name: "Clue signals", statement: "unlike/but/however = contrast; such as/for example = example; dashes/commas = apposition" },
          { name: "Verification", statement: "Substitute your guess into the sentence — does it still make sense?" },
        ],
        workedExample: {
          problem: "Infer 'treacherous' in: 'The mountain path was treacherous after the storm.'",
          solution: "No explicit clue, so use world knowledge + register: a storm-damaged path is dangerous. 'Treacherous' = dangerous/unreliable. Verify by substituting: 'dangerous after the storm' — sensible.",
        },
      },
      questions: [
        {
          id: "langb-u1-q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'inference' mean in reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working out unstated meaning from context clues" },
              { id: "b", text: "Reading the text aloud" },
              { id: "c", text: "Summarising a text in one sentence" },
              { id: "d", text: "Translating a text word by word" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "Deduction of meaning not stated directly, using context and knowledge." },
            ],
            steps: [
              { reasoning: "Inference is reading between the lines using clues.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Working out unstated meaning from context clues",
            commonErrors: ["Thinking inference means copying the text's literal meaning."],
          },
        },
        {
          id: "langb-u1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the three main types of context clues used to infer word meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clue types", statement: "Contrast, example and explanation clues reveal meaning." },
            ],
            steps: [
              { reasoning: "Contrast clues: signal words like 'unlike', 'but', 'however' set up a difference.", marks: 1, markCode: "M" },
              { reasoning: "Example clues: 'such as', 'for example', 'including' illustrate the unknown word.", marks: 1, markCode: "M" },
              { reasoning: "Explanation clues: the sentence itself describes or defines the word, often with punctuation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contrast, example and explanation clues.",
            commonErrors: ["Listing clue types without the signal words that identify them."],
          },
        },
        {
          id: "langb-u1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Describing a market",
            author: "Written for Akademik Space",
            source: "Inference practice",
            text: "The bazaar was chaotic — stalls selling everything from spices to second-hand bicycles jostled for space along narrow lanes.",
          },
          stem: "Explain how the writer uses punctuation and examples to convey meaning, and infer the meaning of 'jostled'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Punctuation and example clues", statement: "Dashes introduce explanation; 'everything from...to...' lists examples that define scope." },
            ],
            steps: [
              { reasoning: "The dash after 'chaotic' signals an explanation of what chaos looks like here.", marks: 1, markCode: "M" },
              { reasoning: "The list 'from spices to second-hand bicycles' gives concrete examples of the variety sold.", marks: 1, markCode: "M" },
              { reasoning: "'Jostled' can be inferred: stalls crowded together along narrow lanes — they pushed or competed for space.", marks: 1, markCode: "M" },
              { reasoning: "Substituting 'competed/pushed' keeps the sentence sensible, confirming the inference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dashes explain 'chaotic'; examples show variety; 'jostled' = crowded/pushed for space.",
            commonErrors: ["Ignoring punctuation clues and guessing randomly."],
          },
        },
        {
          id: "langb-u1-q24",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You read: 'Unlike his cheerful sister, Tom was rather morose during the trip.'",
          parts: [
            { label: "a", prompt: "Infer the meaning of 'morose' and name the clue type used.", marks: 2 },
            { label: "b", prompt: "Identify two more signal words that introduce contrast clues.", marks: 2 },
            { label: "c", prompt: "Explain why inferring is better than stopping to consult a dictionary during an exam reading.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contrast inference", statement: "'Unlike' sets up an opposite; the unknown word must contrast with 'cheerful'." },
            ],
            steps: [
              { part: "a", reasoning: "'Morose' means gloomy/sad — the opposite of cheerful.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clue type: contrast, signalled by 'unlike'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two of: but, however, whereas, on the other hand, in contrast.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both signal words correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Dictionary lookup breaks concentration and wastes exam time.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Inference uses skills already in the text — faster and trains real reading ability.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Only words that block overall meaning truly need attention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Gloomy/sad; contrast clue via 'unlike'. (b) e.g. however, whereas. (c) Faster, keeps flow, builds real competence; reserve lookups for blocking words.",
            commonErrors: ["Inferring the same meaning as 'cheerful' — contrast clues signal opposites."],
          },
        },
        {
          id: "langb-u1-q85",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which phrase most likely introduces an example clue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "such as" },
              { id: "b", text: "meanwhile" },
              { id: "c", text: "therefore" },
              { id: "d", text: "unlike" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clue signals", statement: "'Such as' and 'for example' introduce illustrations." },
            ],
            steps: [
              { reasoning: "Example signals introduce instances of a category.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** such as",
            commonErrors: ["Confusing contrast signals with example signals."],
          },
        },
        {
          id: "langb-u1-q86",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 'The hikers crossed the ravine — a deep rocky valley — before noon,' what does the punctuation tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The hikers crossed at noon" },
              { id: "b", text: "'Ravine' means a dangerous animal" },
              { id: "c", text: "The sentence is unfinished" },
              { id: "d", text: "The dashes provide a definition or explanation of 'ravine'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Apposition", statement: "Dashes often set off a phrase that explains or defines the nearby word." },
            ],
            steps: [
              { reasoning: "The inserted phrase 'a deep rocky valley' defines ravine.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The dashes provide a definition or explanation of 'ravine'",
            commonErrors: ["Ignoring punctuation clues and guessing randomly."],
          },
        },
        {
          id: "langb-u1-q87",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'inference' require a reader to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy the sentence exactly" },
              { id: "b", text: "Ignore unfamiliar words" },
              { id: "c", text: "Deduce meaning that is not stated directly" },
              { id: "d", text: "Translate every word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "Inference draws conclusions from clues rather than explicit statements." },
            ],
            steps: [
              { reasoning: "Inference works with unstated meaning.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deduce meaning that is not stated directly",
            commonErrors: ["Confusing inference with literal comprehension."],
          },
        },
        {
          id: "langb-u1-q88",
          difficulty: "core",
          totalMarks: 3,
          stem: "In 'Unlike the noisy market, the museum was silent,' what can you infer about 'silent'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It means expensive" },
              { id: "b", text: "It means completely without sound" },
              { id: "c", text: "It means modern" },
              { id: "d", text: "It means crowded" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contrast inference", statement: "'Unlike' signals that the unknown meaning contrasts with 'noisy'." },
            ],
            steps: [
              { reasoning: "The contrast is between noisy and silent.", marks: 1, markCode: "M" },
              { reasoning: "The opposite of noisy is quiet or without sound.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It means completely without sound",
            commonErrors: ["Choosing a meaning that does not contrast with 'noisy'."],
          },
        },
        {
          id: "langb-u1-q89",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "After inferring a word's meaning, what is the best verification step?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume the first guess is always right" },
              { id: "b", text: "Substitute your guess into the sentence and check whether it makes sense" },
              { id: "c", text: "Translate only that word" },
              { id: "d", text: "Choose the longest dictionary definition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Verification", statement: "A plausible inference should still make the whole sentence sensible." },
            ],
            steps: [
              { reasoning: "Substitution tests the guess in context.", marks: 1, markCode: "M" },
              { reasoning: "A sensible result supports the inference; nonsense suggests another guess.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is the correct verification method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Substitute your guess into the sentence and check whether it makes sense",
            commonErrors: ["Accepting a guess without testing it."],
          },
        },
        {
          id: "langb-u1-q90",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word most clearly signals a contrast clue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "however" },
              { id: "b", text: "then" },
              { id: "c", text: "because" },
              { id: "d", text: "including" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contrast signals", statement: "Words like 'however', 'unlike' and 'whereas' introduce opposites." },
            ],
            steps: [
              { reasoning: "'However' signals a contrast.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** however",
            commonErrors: ["Choosing cause or sequence signals instead of contrast."],
          },
        },
        {
          id: "langb-u1-q91",
          difficulty: "core",
          totalMarks: 6,
          stem: "Use inference on this sentence.",
          extract: {
            title: "The old bridge",
            author: "Written for Akademik Space",
            source: "Inference practice",
            text: "The wooden bridge looked fragile, its planks cracked and one rail hanging loose, so the walkers chose the longer route.",
          },
          parts: [
            { label: "a", prompt: "Infer the meaning of 'fragile'.", marks: 2 },
            { label: "b", prompt: "Name the two clues that support the inference.", marks: 2 },
            { label: "c", prompt: "Explain why the walkers' choice confirms the meaning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence-based inference", statement: "Physical details and resulting action confirm a meaning." },
            ],
            steps: [
              { part: "a", reasoning: "'Fragile' means easily broken or weak.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The definition fits the damaged bridge.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Clues are 'cracked' planks and the 'hanging loose' rail.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both details show the bridge was unsafe.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Choosing the longer route shows the walkers avoided danger.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The action confirms 'fragile' means unsafe/easily damaged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Easily broken/weak. (b) Cracked planks and loose rail. (c) Avoiding it confirms the bridge was unsafe.",
            commonErrors: ["Ignoring the walkers' action as evidence."],
          },
        },
        {
          id: "langb-u1-q92",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare example clues and explanation clues.",
          parts: [
            { label: "a", prompt: "Define an example clue.", marks: 2 },
            { label: "b", prompt: "Define an explanation clue.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Clue types", statement: "Examples illustrate; explanations define or describe directly." },
            ],
            steps: [
              { part: "a", reasoning: "An example clue gives instances of the unknown word's category.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Signals include 'such as' and 'for example'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "An explanation clue states what the word means or describes it.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It may use punctuation such as dashes or commas.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It directly supports the inference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Example clues list instances; explanation clues define or describe the word, often with punctuation.",
            commonErrors: ["Treating every nearby detail as an explanation."],
          },
        },
        {
          id: "langb-u1-q93",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'Unlike Tom, Ana was punctual,' what type of context clue is used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sequence clue" },
              { id: "b", text: "A cause clue" },
              { id: "c", text: "An example clue" },
              { id: "d", text: "A contrast clue" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clue identification", statement: "Signal words and punctuation reveal how context supports meaning." },
            ],
            steps: [
              { reasoning: "'Unlike' signals a contrast between Tom and Ana.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A contrast clue",
            commonErrors: ["Naming the topic instead of the clue type."],
          },
        },
        {
          id: "langb-u1-q94",
          difficulty: "core",
          totalMarks: 6,
          stem: "Infer 'tedious' in: 'The students found the lecture tedious because it repeated the same slides for an hour.'",
          parts: [
            { label: "a", prompt: "Infer the meaning of 'tedious'.", marks: 2 },
            { label: "b", prompt: "Name the clue type and signal.", marks: 2 },
            { label: "c", prompt: "Verify the inference by substitution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference and verification", statement: "Cause-and-result clues support a meaning that can be substituted into the sentence." },
            ],
            steps: [
              { part: "a", reasoning: "'Tedious' means boring or tiresome.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The repeated slides explain why students felt it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The clue type is explanation/cause.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The signal is 'because it repeated the same slides'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substituting 'boring' keeps the sentence sensible.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The verified meaning is boring/tiresome.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Boring/tiresome. (b) Explanation clue via 'because'. (c) 'Boring' fits the sentence logically.",
            commonErrors: ["Inferring 'interesting' despite the negative reaction."],
          },
        },
        {
          id: "langb-u1-q95",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Explain how a reader can infer without a dictionary.",
          parts: [
            { label: "a", prompt: "Describe the role of context clues.", marks: 3 },
            { label: "b", prompt: "Explain why inference preserves exam time.", marks: 2 },
            { label: "c", prompt: "State when a dictionary or careful rereading is still needed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strategic inference", statement: "Most unknown words can be inferred; only meaning-blocking words require deeper attention." },
            ],
            steps: [
              { part: "a", reasoning: "Context clues such as contrast, example and explanation reveal meaning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "World knowledge and word parts also support guesses.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The reader combines clues to form a provisional meaning.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Inference keeps reading momentum and avoids stopping.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This saves time for questions that truly need precision.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A word that blocks the whole answer or repeats centrally may need closer attention.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verification through substitution remains essential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use clues and knowledge to infer, verify by substitution, and reserve slower attention for words that block meaning.",
            commonErrors: ["Either ignoring all unknown words or stopping for every one."],
          },
        },
        {
          id: "langb-u1-q96",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyse the inference demands in a short extract.",
          extract: {
            title: "Village market",
            author: "Written for Akademik Space",
            source: "Inference practice",
            text: "Although the stalls were cramped, the market buzzed with life; vendors called out prices while children weaved between baskets of fruit.",
          },
          parts: [
            { label: "a", prompt: "Infer the meaning of 'cramped'.", marks: 2 },
            { label: "b", prompt: "Explain how 'although' changes the inference.", marks: 3 },
            { label: "c", prompt: "Infer the mood created by 'buzzed with life'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contrast and imagery", statement: "Contrast signals and vivid details together shape inferred meaning." },
            ],
            steps: [
              { part: "a", reasoning: "'Cramped' means crowded or lacking space.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The context of stalls and baskets supports this.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Although' signals contrast between cramped space and lively activity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It warns the reader not to infer that the market was unpleasant overall.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The busy details after the semicolon carry the positive impression.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The mood is lively, energetic and busy.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "'Buzzed' and 'weaved' suggest movement and noise.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The inference is supported by the contrast with cramped conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Crowded/lacking space. (b) 'Although' contrasts cramped space with lively activity. (c) The mood is energetic and busy despite the crowding.",
            commonErrors: ["Letting 'cramped' dominate and missing the positive contrast."],
          },
        },
      ],
    },
  ],
};
