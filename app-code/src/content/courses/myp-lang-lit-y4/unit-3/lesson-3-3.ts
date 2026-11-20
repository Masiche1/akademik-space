import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mll4-u3-lesson-3-3",
  code: "3-3",
  title: "Language Conventions in Writing",
  goal: "I CAN apply language conventions — grammar, punctuation, spelling, and sentence variety — to produce accurate and effective writing.",
  standards: [
    "MYP Language and Literature",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Grammar", definition: "The rules of sentence structure — subject-verb agreement, tense, clauses." },
    { term: "Punctuation", definition: "Marks controlling meaning and rhythm — commas, full stops, colons, dashes." },
    { term: "Spelling", definition: "Correct written form of words." },
    { term: "Sentence variety", definition: "Mixing short and long sentences for rhythm and emphasis." },
    { term: "Conventions", definition: "The standard rules of written language." },
  ],
  concepts: [
    {
      id: "mll4-u3-language-conventions",
      title: "Accuracy in writing",
      skill: "Apply grammar, punctuation and spelling conventions correctly.",
      lesson: {
        sections: [
          {
            heading: "Grammar essentials",
            body: "Key rules: **subject-verb agreement** ('she goes' not 'she go'), **tense consistency** (don't switch randomly), **sentence completeness** (every sentence needs a subject and verb), **parallel structure** ('reading, writing, and arithmetic').",
          },
          {
            heading: "Punctuation purpose",
            body: "Punctuation controls meaning: **commas** separate items and clauses; **full stops** end sentences; **colons** introduce lists/explanations; **semicolons** join related independent clauses; **apostrophes** show possession or contraction. Wrong punctuation changes meaning.",
          },
          {
            heading: "Why accuracy matters",
            body: "Errors distract readers and undermine credibility. A reader focused on spelling mistakes can't focus on your ideas. Accuracy is the **foundation** — get it right before worrying about style. Proofread: read aloud, check each sentence.",
          },
        ],
        keyFormulas: [
          { name: "Accuracy checklist", statement: "Grammar + Punctuation + Spelling = clean, credible writing." },
        ],
        workedExample: {
          problem: "Fix: 'their going to the park its to late'",
          solution: "'They're going to the park — it's too late' — their/they're/there confusion + its/it's confusion + punctuation.",
        },
      },
      questions: [
        {
          id: "mll4-u3-language-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does subject-verb agreement mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subject and verb must match in number" },
              { id: "b", text: "Subject and verb must rhyme" },
              { id: "c", text: "Subject and verb must be long" },
              { id: "d", text: "Subject and verb must be capitalized" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Subject-verb agreement", statement: "Subject and verb must agree in number (singular/plural)." }],
            steps: [{ reasoning: "Criterion D (Using language): agreement = number match — (a).", marks: 1, markCode: "D" }],
            finalAnswer: "**(a)** Subject and verb must match in number",
          },
        },
        {
          id: "mll4-u3-language-conventions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Correct this sentence: 'The students is going to there house because its raining.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Common errors", statement: "is/are agreement, their/there/they're, its/it's." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'is' → 'are' (plural subject 'students'); 'there' → 'their' (possession); 'its' → 'it's' (contraction of it is).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): corrected: 'The students are going to their house because it's raining.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'The students are going to their house because it's raining.'",
          },
        },
        {
          id: "mll4-u3-language-conventions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'Me and my friend goes to the park. We was playing football when it start to rain. Their happy because they dont mind getting wet.'",
          },
          stem: "Identify and correct three errors in this draft.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Error correction", statement: "Common errors: pronoun case, verb agreement, contractions." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'Me and my friend goes' → 'My friend and I go' — pronoun case + subject-verb agreement.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'We was playing... it start' → 'We were playing... it started' — past tense agreement.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'Their' → 'They're' (they are); 'dont' → 'don't' — apostrophe needed.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'My friend and I go to the park. We were playing football when it started to rain. They're happy because they don't mind getting wet.'",
          },
        },
        {
          id: "mll4-u3-language-conventions-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Explain why 'The dog wagged it's tail' is incorrect.", marks: 1 },
            { label: "b", prompt: "Correct it and explain the rule.", marks: 1 },
            { label: "c", prompt: "Rewrite this for sentence variety: 'I went to the shop. I bought milk. I came home.'", marks: 2 },
            { label: "d", prompt: "Explain why sentence variety improves writing.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conventions and style", statement: "Accuracy + variety = effective writing." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): 'it's' = it is; possession needs 'its' (no apostrophe).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): 'The dog wagged its tail' — 'its' shows possession.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): varied rewrite — e.g. 'After going to the shop for milk, I returned home.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): combines sentences, varies structure.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C (Producing text): variety creates rhythm and emphasis — avoids monotony.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) 'it's' = it is; need 'its' for possession. (b) 'The dog wagged its tail.' (c) Combined sentence. (d) Variety creates rhythm/emphasis.",
          },
        },
        {
          id: "mll4-u3-language-conventions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between 'their', 'there' and 'they're'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are all the same" },
              { id: "b", text: "'their' = possession, 'there' = place, 'they're' = they are" },
              { id: "c", text: "'their' = they are, 'there' = possession" },
              { id: "d", text: "Only spelling differs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Common errors", statement: "their = possession; there = place; they're = they are." }],
            steps: [
              { reasoning: "Criterion D (Using language): correct distinction — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'their' = possession, 'there' = place, 'they're' = they are",
          },
        },
        {
          id: "mll4-u3-language-conventions-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Correct this sentence: 'The team is winning because it's captain scored the winning goal.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Common errors", statement: "its = possession; it's = it is." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'it's' → 'its' — 'its captain' shows possession (the captain of the team), not 'it is'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): corrected: 'The team is winning because its captain scored the winning goal.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'The team is winning because its captain scored the winning goal.'",
          },
        },
        {
          id: "mll4-u3-language-conventions-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does an apostrophe show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only plural nouns" },
              { id: "b", text: "Possession or contraction" },
              { id: "c", text: "End of a sentence" },
              { id: "d", text: "Emphasis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Apostrophe", statement: "Shows possession or contraction." }],
            steps: [
              { reasoning: "Criterion D (Using language): apostrophe = possession ('dog's') or contraction ('don't') — (b).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): NOT used for simple plurals.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Possession or contraction",
          },
        },
        {
          id: "mll4-u3-language-conventions-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'Me and Sam goes to the library. We was reading when the librarian told us to be quiet. Their happy because they love books.'",
          },
          stem: "Identify and correct three errors in this draft.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Error correction", statement: "Pronoun case, verb agreement, their/they're." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'Me and Sam goes' → 'Sam and I go' — pronoun case + subject-verb agreement.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'We was reading' → 'We were reading' — past tense agreement.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'Their' → 'They're' (they are) — contraction needed.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'Sam and I go to the library. We were reading when the librarian told us to be quiet. They're happy because they love books.'",
          },
        },
        {
          id: "mll4-u3-language-conventions-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog wagged it's tail" },
              { id: "b", text: "The dog wagged its tail" },
              { id: "c", text: "The dogs wagged it's tail" },
              { id: "d", text: "The dog wagged its' tail" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "its/it's", statement: "'its' = possession (no apostrophe); 'it's' = it is." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'its' for possession — (b).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'it's' would mean 'it is' — wrong here.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** The dog wagged its tail",
          },
        },
        {
          id: "mll4-u3-language-conventions-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'Their going to the park because its a nice day. We should of left earlier but we was too busy.'",
          },
          stem: "Identify and correct all errors in this draft.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Error correction", statement: "their/there/they're, its/it's, should have." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'Their' → 'They're' (they are); 'its' → 'it's' (it is).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'should of' → 'should have' — common error.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'we was' → 'we were' — subject-verb agreement.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): corrected: 'They're going to the park because it's a nice day. We should have left earlier but we were too busy.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'They're going to the park because it's a nice day. We should have left earlier but we were too busy.'",
          },
        },
        {
          id: "mll4-u3-language-conventions-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'Me and my brother goes to school. We was late because the bus don't come. Their happy when they finally arrives.'",
          },
          parts: [
            { label: "a", prompt: "Identify three errors in this draft.", marks: 2 },
            { label: "b", prompt: "Correct the entire draft.", marks: 2 },
            { label: "c", prompt: "Explain the rule for 'should of' vs 'should have'.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conventions", statement: "Pronoun case, verb agreement, contractions, modal + have." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): errors — 'Me and my brother goes' (pronoun case + agreement); 'was' → 'were'; 'don't' → 'doesn't' or 'didn't'; 'Their' → 'They're'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): at least three errors identified.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): corrected — 'My brother and I go to school. We were late because the bus didn't come. They're happy when they finally arrive.'", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): all errors corrected.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): 'should have' is correct; 'should of' is wrong — 'have' is the past participle after modal.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Pronoun case, agreement, contraction errors. (b) 'My brother and I go...' corrected. (c) 'should have' not 'should of'.",
          },
        },
        {
          id: "mll4-u3-language-conventions-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'parallel structure' in grammar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentences of the same length" },
              { id: "b", text: "Using the same grammatical form for items in a list" },
              { id: "c", text: "Rhyming words" },
              { id: "d", text: "Repeated sentences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Parallel structure", statement: "Same grammatical form for items in a list." }],
            steps: [
              { reasoning: "Criterion D (Using language): parallel = same form — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Using the same grammatical form for items in a list",
          },
        },
        {
          id: "mll4-u3-language-conventions-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The List",
            author: "Written for Akademik Space",
            text: "'She likes reading, to swim, and plays tennis.'",
          },
          stem: "Identify and correct the error in this sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parallel structure", statement: "List items should use same grammatical form." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'reading' (gerund), 'to swim' (infinitive), 'plays' (verb) — inconsistent forms.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): corrected — 'She likes reading, swimming, and playing tennis.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'She likes reading, swimming, and playing tennis.' — parallel gerunds.",
          },
        },
        {
          id: "mll4-u3-language-conventions-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which punctuation mark introduces a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Full stop" },
              { id: "b", text: "Colon" },
              { id: "c", text: "Comma" },
              { id: "d", text: "Question mark" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Punctuation", statement: "Colon introduces lists and explanations." }],
            steps: [
              { reasoning: "Criterion D (Using language): colon = list introducer — (b).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): e.g. 'Bring these items: pen, paper, ruler.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Colon",
          },
        },
        {
          id: "mll4-u3-language-conventions-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "'The survey was conducted on Monday. The data was collected and analyzed. The results was surprising. We has written a report.'",
          },
          stem: "Identify and correct three errors in this report excerpt.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Error correction", statement: "Subject-verb agreement errors." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'The results was' → 'The results were' — plural subject.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'We has written' → 'We have written' — 'has' is singular; 'we' needs 'have'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'was conducted... was collected' — consistent past tense OK, but 'analyzed' vs 'analysed' spelling variant acceptable.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): corrected: 'The survey was conducted on Monday. The data was collected and analysed. The results were surprising. We have written a report.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'The results were surprising. We have written a report.' — fix 'was'→'were', 'has'→'have'.",
          },
        },
        {
          id: "mll4-u3-language-conventions-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this draft and answer all parts.",
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'Their going to visit there grandmother because its her birthday. We should of bought her a gift but we was too busy.'",
          },
          parts: [
            { label: "a", prompt: "Identify four errors in this draft.", marks: 2 },
            { label: "b", prompt: "Correct the entire draft.", marks: 2 },
            { label: "c", prompt: "Explain the difference between 'there' and 'their'.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conventions", statement: "their/there/they're, its/it's, should have, agreement." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): errors — 'Their' → 'They're'; 'there grandmother' → 'their grandmother'; 'its' → 'it's'; 'should of' → 'should have'; 'we was' → 'we were'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): at least four errors identified.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): corrected — 'They're going to visit their grandmother because it's her birthday. We should have bought her a gift but we were too busy.'", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): all errors corrected.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): 'there' = place; 'their' = possession; 'they're' = they are.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Multiple errors. (b) 'They're going to visit their grandmother...' corrected. (c) there=place, their=possession, they're=they are.",
          },
        },
      ],
    },
    {
      id: "mll4-u3-sentence-style",
      title: "Sentence style and variety",
      skill: "Use sentence variety — short, long, compound, complex — to create rhythm and emphasis.",
      lesson: {
        sections: [
          {
            heading: "Types of sentences",
            body: "**Simple**: one clause ('She ran.'). **Compound**: two independent clauses joined ('She ran, and he followed.'). **Complex**: one independent + one dependent clause ('Although she was tired, she ran.'). **Variety** = mixing these for effect.",
          },
          {
            heading: "Why vary sentences?",
            body: "All short sentences = choppy, breathless. All long = exhausting, hard to follow. Skilled writers **vary length**: short for impact ('Stop. Look. Listen.'), long for development. Vary **structure** too — don't start every sentence the same way.",
          },
          {
            heading: "Style choices",
            body: "Sentence style affects tone: **short sentences** = urgency, tension, directness. **Long sentences** = flow, detail, sophistication. **Fragments** = dramatic effect (use sparingly). The best writers control rhythm like music.",
          },
        ],
        keyFormulas: [
          { name: "Sentence variety", statement: "Mix simple/compound/complex + vary length = rhythm and emphasis." },
        ],
        workedExample: {
          problem: "Improve: 'The storm came. The wind blew. The rain fell. The sky was dark.'",
          solution: "Vary: 'The storm came with a roar. Wind screamed through the trees, and rain lashed against the windows. The sky turned a bruised purple.'",
        },
      },
      questions: [
        {
          id: "mll4-u3-sentence-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a compound sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One short sentence" },
              { id: "b", text: "Two independent clauses joined" },
              { id: "c", text: "A question" },
              { id: "d", text: "A very long sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Compound sentence", statement: "Two independent clauses joined by conjunction." }],
            steps: [{ reasoning: "Criterion D (Using language): compound = two independent clauses — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Two independent clauses joined",
          },
        },
        {
          id: "mll4-u3-sentence-style-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "Version A: 'It was raining. The streets were wet. People had umbrellas.\n\nVersion B: 'Rain hammered against the windows. Streets gleamed like mirrors, and people hurried past with umbrellas held like shields.'",
          },
          stem: "Which version uses sentence variety more effectively? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Varied structure + imagery = vivid, rhythmic writing." }],
            steps: [
              { reasoning: "Criterion C (Producing text): Version A is repetitive short sentences — flat, list-like.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): Version B varies structure and adds imagery ('hammered', 'gleamed like mirrors', 'like shields') — vivid and rhythmic.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Version B — varied structure + imagery creates vivid, rhythmic description vs A's flat repetition.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "'She ran. Fast. Faster than she had ever run. The footsteps behind her grew louder. She didn't look back. She couldn't. Not yet.'",
          },
          stem: "Analyse the sentence variety and its effect on tension.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety for effect", statement: "Short sentences create urgency; fragments add drama." }],
            steps: [
              { reasoning: "Criterion A (Analysing): short sentences ('She ran. Fast.') create urgency and breathlessness.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): fragment 'Faster than she had ever run' adds dramatic emphasis.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): final 'She couldn't. Not yet.' builds suspense — short sentences control pacing and tension.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Short sentences and fragments create urgency and suspense — skilled control of rhythm for tension.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Rewrite these as one compound sentence: 'The bell rang. The students rushed out.'", marks: 1 },
            { label: "b", prompt: "Rewrite them as one complex sentence.", marks: 1 },
            { label: "c", prompt: "Explain how each version changes the emphasis.", marks: 2 },
            { label: "d", prompt: "Write a version using a fragment for dramatic effect.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence transformation", statement: "Different structures create different emphasis." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): compound — 'The bell rang, and the students rushed out.'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C (Producing text): complex — 'When the bell rang, the students rushed out.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): compound treats events as equal; complex makes bell-ringing the cause/background.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): structure changes which event feels primary vs dependent.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion C (Producing text): fragment — e.g. 'Bell ringing. Feet pounding the corridor.' — dramatic effect.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Compound (equal events) vs complex (cause-effect) vs fragment (dramatic) — structure controls emphasis.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'simple sentence'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two clauses joined" },
              { id: "b", text: "One independent clause — one complete thought" },
              { id: "c", text: "A question" },
              { id: "d", text: "A very long sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Simple sentence", statement: "One independent clause — one complete thought." }],
            steps: [
              { reasoning: "Criterion D (Using language): simple = one clause — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** One independent clause — one complete thought",
          },
        },
        {
          id: "mll4-u3-sentence-style-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            text: "Version A: 'The storm came. The wind blew. The rain fell.\n\nVersion B: 'The storm came with a roar, wind screaming through the trees, rain lashing against the windows.'",
          },
          stem: "Which version uses sentence variety more effectively? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Varied structure + imagery = vivid, rhythmic writing." }],
            steps: [
              { reasoning: "Criterion C (Producing text): A is repetitive short sentences — flat, list-like.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): B combines into flowing sentence with imagery ('roar', 'screaming', 'lashing') — vivid and rhythmic.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Version B — combined structure + imagery vs A's repetitive short sentences.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'complex sentence'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two independent clauses" },
              { id: "b", text: "One independent clause plus one dependent clause" },
              { id: "c", text: "A very short sentence" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Complex sentence", statement: "One independent + one dependent clause." }],
            steps: [
              { reasoning: "Criterion D (Using language): complex = independent + dependent — (b).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): e.g. 'Although she was tired, she ran.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** One independent clause plus one dependent clause",
          },
        },
        {
          id: "mll4-u3-sentence-style-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "'She ran. She ran fast. She ran faster than ever. She didn't stop. She couldn't.'",
          },
          stem: "Analyse the sentence variety and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Short sentences + repetition = urgency; variety controls pacing." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'She ran' repeated — creates rhythm and urgency.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'ran fast', 'ran faster than ever' — intensifying, breathless effect.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'She couldn't' — fragment-like ending builds suspense and tension.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repetition + short sentences + fragment ending = urgency and suspense — controlled pacing.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a compound sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She ran." },
              { id: "b", text: "She ran, and he followed." },
              { id: "c", text: "Although she ran..." },
              { id: "d", text: "Running fast..." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Compound sentence", statement: "Two independent clauses joined." }],
            steps: [
              { reasoning: "Criterion D (Using language): (b) has two independent clauses — compound.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): others are simple, complex, fragment.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** She ran, and he followed.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "Version A: 'It was night. The stars were out. The moon was bright.\n\nVersion B: 'Night fell. Stars scattered across the velvet sky like diamonds on black silk, and the moon hung low, a silver coin in the dark.'",
          },
          stem: "Evaluate which version uses sentence variety more effectively — consider rhythm and imagery.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Varied structure + imagery = vivid, rhythmic writing." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is choppy repetition — 'It was', 'stars were', 'moon was' — flat.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B uses complex structure, similes ('like diamonds'), imagery ('velvet sky', 'silver coin') — vivid.", evidence: "like diamonds on black silk", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B's varied rhythm creates beauty; A's repetition is monotonous.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B more effective — controlled variety vs A's flat repetition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Version B more effective — varied structure + rich imagery vs A's choppy repetition.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Sentences",
            author: "Written for Akademik Space",
            text: "'The bell rang. The students rushed out. The corridor was loud.'",
          },
          parts: [
            { label: "a", prompt: "Rewrite as one compound sentence.", marks: 1 },
            { label: "b", prompt: "Rewrite as one complex sentence.", marks: 1 },
            { label: "c", prompt: "Explain how each version changes the emphasis.", marks: 2 },
            { label: "d", prompt: "Write a version using a fragment for dramatic effect.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence transformation", statement: "Different structures create different emphasis." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): compound — 'The bell rang, and the students rushed out.'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C (Producing text): complex — 'When the bell rang, the students rushed out.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): compound treats events as equal; complex makes bell-ringing the cause/background.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): structure changes which event feels primary vs dependent.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion C (Producing text): fragment — e.g. 'Bell ringing. Feet pounding the corridor.' — dramatic effect.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Compound. (b) Complex. (c) Compound = equal; complex = cause-effect. (d) Fragment for drama.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is sentence variety important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes writing longer" },
              { id: "b", text: "It creates rhythm, emphasis and keeps the reader engaged" },
              { id: "c", text: "It uses more words" },
              { id: "d", text: "It impresses teachers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Sentence variety", statement: "Variety creates rhythm and emphasis — avoids monotony." }],
            steps: [
              { reasoning: "Criterion C (Producing text): variety = rhythm + engagement — (b).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It creates rhythm, emphasis and keeps the reader engaged",
          },
        },
        {
          id: "mll4-u3-sentence-style-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Passages",
            author: "Written for Akademik Space",
            text: "Passage A: 'The dog ran. The dog jumped. The dog barked.\n\nPassage B: 'The dog tore across the garden, leapt the fence, and barked at the mailman.'",
          },
          stem: "Which passage uses sentence variety more effectively? Explain.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Passage A — repetition is clearer" },
              { id: "b", text: "Passage B — combined structure and vivid verbs" },
              { id: "c", text: "Both are equally effective" },
              { id: "d", text: "Neither uses variety" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Combined structure + specific verbs = vivid writing." }],
            steps: [
              { reasoning: "Criterion C (Producing text): A repeats 'The dog' — monotonous; B combines with vivid verbs ('tore', 'leapt') — (b).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): B's varied structure creates dynamic rhythm.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Passage B — combined structure and vivid verbs",
          },
        },
        {
          id: "mll4-u3-sentence-style-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What effect do short sentences create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Confusion" },
              { id: "b", text: "Urgency, tension, directness" },
              { id: "c", text: "Boredom" },
              { id: "d", text: "Length" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence length", statement: "Short sentences create urgency and emphasis." }],
            steps: [
              { reasoning: "Criterion A (Analysing): short = urgency/tension — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Stop. Look. Listen.' — punchy, memorable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Urgency, tension, directness",
          },
        },
        {
          id: "mll4-u3-sentence-style-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "'The exam was hard. It was very hard. I studied a lot. I still failed. I was sad. I cried.'",
          },
          stem: "Rewrite this passage using sentence variety to create a more engaging narrative.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Mix simple/compound/complex for rhythm and emphasis." }],
            steps: [
              { reasoning: "Criterion C (Producing text): problem — repetitive short sentences, flat ('hard', 'sad').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): fix — vary length, combine ideas, add specificity — e.g. 'The exam was brutal. I had studied for weeks, yet I still failed. Sitting in my room that evening, I cried.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion A (Analysing): varied version creates rhythm and emotional impact — 'brutal' intensifies, 'yet' adds contrast, longer final sentence builds mood.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): controlled variety vs monotony — more engaging and expressive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rewrite with varied lengths, combined ideas, specific words — creates rhythm and emotional impact.",
          },
        },
        {
          id: "mll4-u3-sentence-style-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two passages.",
          extract: {
            title: "Two Passages",
            author: "Written for Akademik Space",
            text: "Passage A: 'The city was busy. The streets were full. The shops were open. The people were walking.\n\nPassage B: 'The city pulsed with life — streets jammed with traffic, shops spilling light onto the pavement, crowds flowing like rivers through the crossings.'",
          },
          parts: [
            { label: "a", prompt: "Identify the structural differences.", marks: 1 },
            { label: "b", prompt: "Explain which uses sentence variety more effectively.", marks: 2 },
            { label: "c", prompt: "Describe the effect each creates on the reader.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Varied structure + imagery = vivid, immersive writing." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A uses repetitive 'The X was Y' pattern; B uses complex structure with dashes and imagery.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B more effective — varied syntax, vivid imagery ('pulsed', 'spilling light', 'rivers') vs A's monotony.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B's flow mimics the city's energy; A's repetition is flat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): A creates dull, factual impression; B creates vivid, immersive experience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): B's rhythm echoes the subject — busy, flowing, alive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A repetitive; B varied/imagery. (b) B more effective. (c) A dull/factual; B vivid/immersive.",
          },
        },
      ],
    },
  ],
};
