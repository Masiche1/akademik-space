import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "oles-u6-lesson-6-2",
  code: "6-2",
  title: "Speaking fluency and pronunciation",
  goal: "I CAN speak English fluently with clear pronunciation.",
  standards: ["1120 Speaking: fluency"],
  vocabulary: [
    { term: "Fluency", definition: "Speaking smoothly and continuously without long pauses." },
    { term: "Pronunciation", definition: "How words are said — sounds, stress and rhythm." },
    { term: "Stress", definition: "The emphasised syllable in a word — 'PHOtograph' vs 'phoTOgraphy'." },
    { term: "Intonation", definition: "The rise and fall of the voice in speech." },
    { term: "Filler", definition: "Words like 'um' and 'er' used to fill pauses." },
  ],
  concepts: [
    {
      id: "oles-u6-fluency",
      title: "Building fluency",
      skill: "Speak continuously and confidently without long pauses.",
      lesson: {
        sections: [
          { heading: "Fluency vs accuracy", body: "Fluency means speaking smoothly with few pauses; accuracy means correct grammar. In speaking tests, fluency and clear communication matter more than perfect grammar — but avoid so many errors the listener cannot follow." },
          { heading: "Beating pauses", body: "Long pauses kill fluency. Instead of silence, use linking phrases: 'Well...', 'What I mean is...', 'For example...'. These buy thinking time while still sounding fluent." },
        ],
        keyFormulas: [
          { name: "Fluency", statement: "Linking phrases fill pauses; communication beats perfection." },
        ],
        workedExample: {
          problem: "You need time to think during a speaking test. What do you say?",
          solution: "Use a linking phrase: 'That's an interesting question. Well, in my opinion...' — buys time and sounds fluent.",
        },
      },
      questions: [
        {
          id: "oles-u6-fl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Fluency means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speaking smoothly without long pauses" },
            { id: "b", text: "Using perfect grammar" },
            { id: "c", text: "Memorising answers" },
            { id: "d", text: "Speaking very fast" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Fluency", statement: "Smooth continuous speech." }], steps: [{ reasoning: "Fluency = smooth flow, not speed or perfection.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Smooth speech without long pauses" },
        },
        {
          id: "oles-u6-fl-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two linking phrases that help fluency.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Linking phrases", statement: "Fill pauses naturally." }], steps: [
            { reasoning: "Any two: 'Well', 'What I mean is', 'For example', 'As I said', 'In my opinion'.", marks: 1, markCode: "AO2" },
            { reasoning: "Both valid.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'Well...' and 'What I mean is...'" },
        },
        {
          id: "oles-u6-fl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why perfect grammar is less important than clear communication in speaking tests.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Fluency priority", statement: "Communication is the goal." }], steps: [
            { reasoning: "The examiner listens for whether you can communicate.", marks: 1, markCode: "AO2" },
            { reasoning: "Minor errors don't block understanding.", marks: 1, markCode: "AO2" },
            { reasoning: "Frequent pauses and self-correction hurt more than small errors.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Clear communication matters most; small errors are forgiven." },
        },
        {
          id: "oles-u6-fl-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Fluency review.",
          parts: [
            { label: "a", prompt: "Define fluency.", marks: 2 },
            { label: "b", prompt: "Name two linking phrases.", marks: 2 },
            { label: "c", prompt: "Why avoid long pauses?", marks: 2 },
            { label: "d", prompt: "Fluency vs accuracy — which matters more?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Fluency", statement: "Smooth speech via linking phrases." }], steps: [
            { part: "a", reasoning: "Speaking smoothly and continuously without long pauses.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two valid linking phrases.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Pauses break the flow and lose fluency marks.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Fluency/communication first; accuracy matters but shouldn't block speech.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Nuanced priority.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Exam-aware answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) smooth speech (b) two phrases (c) breaks flow (d) fluency first",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u6-fl-q5", difficulty: "foundation", totalMarks: 1,
          stem: "'Well...' and 'What I mean is...' are examples of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Presentation titles" },
            { id: "b", text: "Fillers only" },
            { id: "c", text: "Linking phrases" },
            { id: "d", text: "Grammar mistakes" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Linking phrases", statement: "Fill pauses naturally." }], steps: [{ reasoning: "They link ideas and buy thinking time.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** linking phrases" },
        },
        {
          id: "oles-u6-fl-q6", difficulty: "core", totalMarks: 2,
          stem: "What should you do when you need thinking time in a speaking test?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stay completely silent" },
            { id: "b", text: "Speak as fast as possible" },
            { id: "c", text: "Repeat the question word for word" },
            { id: "d", text: "Use a linking phrase like 'Well...'" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Linking phrases", statement: "Buy time while sounding fluent." }], steps: [
            { reasoning: "Linking phrases fill pauses naturally.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** use a linking phrase" },
        },
        {
          id: "oles-u6-fl-q7", difficulty: "foundation", totalMarks: 1,
          stem: "How many linking phrases are in this answer: 'Well... For example... As I said...'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Linking phrases", statement: "Count the phrases." }], steps: [
            { reasoning: "Well, For example, As I said → 3.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u6-fl-q8", difficulty: "core", totalMarks: 2,
          stem: "'Um' and 'er' are called…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fillers" },
            { id: "b", text: "Signal phrases" },
            { id: "c", text: "Collocations" },
            { id: "d", text: "Linking phrases" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Filler", statement: "Words used to fill pauses." }], steps: [
            { reasoning: "'Um'/'er' fill pauses but add little meaning.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** fillers" },
        },
        {
          id: "oles-u6-fl-q9", difficulty: "core", totalMarks: 2,
          stem: "Give two linking phrases and explain what each one does.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Linking phrases", statement: "Fill pauses and connect ideas." }], steps: [
            { reasoning: "Any two valid phrases: 'Well', 'What I mean is', 'For example', 'In my opinion'.", marks: 1, markCode: "AO2" },
            { reasoning: "Functions explained — buying time and linking ideas.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'Well' buys time; 'For example' introduces an illustration." },
        },
        {
          id: "oles-u6-fl-q10", difficulty: "core", totalMarks: 1,
          stem: "How many linking expressions appear in 'Well, what I mean is...'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Linking phrases", statement: "Count the expressions." }], steps: [
            { reasoning: "'Well' and 'what I mean is' → 2.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u6-fl-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Why is speaking very fast not the same as being fluent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Slow speech is always fluent" },
            { id: "b", text: "Fast speech always has perfect grammar" },
            { id: "c", text: "Fluency is smooth flow; speed alone makes you hard to follow" },
            { id: "d", text: "Speed has nothing to do with speech" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Fluency", statement: "Smooth continuous speech." }], steps: [
            { reasoning: "Fluency = smooth flow at a reasonable pace, not raw speed.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** smooth flow, not speed" },
        },
        {
          id: "oles-u6-fl-q12", difficulty: "challenge", totalMarks: 2,
          stem: "How many linking phrases are in this sentence: 'Well, for example, I mean...'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Linking phrases", statement: "Count the phrases." }], steps: [
            { reasoning: "Well, for example, I mean → 3.", marks: 1, markCode: "AO1" },
            { reasoning: "Count is correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u6-fl-q13", difficulty: "foundation", totalMarks: 1,
          stem: "The main goal of practising fluency is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "To communicate clearly and smoothly" },
            { id: "b", text: "To finish speaking first" },
            { id: "c", text: "To memorise perfect answers" },
            { id: "d", text: "To speak without any errors" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Fluency", statement: "Communication is the goal." }], steps: [{ reasoning: "Fluency serves clear communication.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** communicate clearly" },
        },
        {
          id: "oles-u6-fl-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between fluency and accuracy and why exams reward communication.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Fluency vs accuracy", statement: "Communication beats perfection." }], steps: [
            { reasoning: "Fluency = smooth speech without long pauses; accuracy = correct grammar.", marks: 1, markCode: "AO2" },
            { reasoning: "Examiners listen for whether you can communicate your ideas.", marks: 1, markCode: "AO2" },
            { reasoning: "Small errors are forgiven; long pauses and self-correction hurt more.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Fluency = smooth flow; accuracy = correct forms; communication matters most." },
        },
        {
          id: "oles-u6-fl-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many words are in the linking phrase 'What I mean is'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Linking phrases", statement: "Count the words." }], steps: [
            { reasoning: "What / I / mean / is → 4.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u6-fl-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which response shows the best fluency when asked a difficult question?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Saying 'I don't know' repeatedly" },
            { id: "b", text: "Mumbling without pausing" },
            { id: "c", text: "A long silence, then 'I don't know.'" },
            { id: "d", text: "'Well... that's interesting. For example...'" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Linking phrases", statement: "Fill pauses naturally." }], steps: [
            { reasoning: "Linking phrases buy time and keep speech flowing.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** uses linking phrases" },
        },
      ],
    },
    {
      id: "oles-u6-pronunciation",
      title: "Pronunciation and word stress",
      skill: "Improve clarity through stress, rhythm and clear sounds.",
      lesson: {
        sections: [
          { heading: "Word stress", body: "English words have one stressed syllable: 'PHOtograph', 'phoTOgraphy', 'photoGRAPHic'. Wrong stress can make words unrecognisable — 'a PREsent' (gift) vs 'preSENT' (verb). Learn stress patterns for common words." },
          { heading: "Sentence rhythm", body: "English is stress-timed: content words (nouns, verbs, adjectives) are stressed; function words (the, a, to, of) are weak. Speak in rhythm groups, not word by word — this makes you sound natural." },
        ],
        keyFormulas: [
          { name: "Stress", statement: "One stressed syllable per word; content words carry sentence stress." },
        ],
        workedExample: {
          problem: "Say 'I want to buy a present for you.' Which words carry stress?",
          solution: "WANT, BUY, PREsent, YOU — the content words. 'to', 'a', 'for' are weak.",
        },
      },
      questions: [
        {
          id: "oles-u6-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Word stress means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speaking loudly" },
            { id: "b", text: "Emphasising one syllable in a word" },
            { id: "c", text: "Using correct grammar" },
            { id: "d", text: "Spelling correctly" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Word stress", statement: "One stressed syllable." }], steps: [{ reasoning: "Stress = emphasised syllable.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Emphasised syllable" },
        },
        {
          id: "oles-u6-pr-q2", difficulty: "core", totalMarks: 2,
          stem: "Which words are usually stressed in a sentence?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Content words", statement: "Nouns, verbs, adjectives stressed." }], steps: [
            { reasoning: "Content words: nouns, main verbs, adjectives, adverbs.", marks: 1, markCode: "AO2" },
            { reasoning: "Function words (the, a, to) stay weak.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Content words — nouns, verbs, adjectives — are stressed." },
        },
        {
          id: "oles-u6-pr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why correct word stress matters for being understood.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Stress clarity", statement: "Wrong stress can change meaning." }], steps: [
            { reasoning: "English listeners expect stress on specific syllables.", marks: 1, markCode: "AO2" },
            { reasoning: "Wrong stress can make a word unrecognisable.", marks: 1, markCode: "AO2" },
            { reasoning: "It can even change meaning — 'PREsent' vs 'preSENT'.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Correct stress makes words recognisable and can change meaning." },
        },
        {
          id: "oles-u6-pr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Pronunciation review.",
          parts: [
            { label: "a", prompt: "What is word stress?", marks: 2 },
            { label: "b", prompt: "Which words are stressed in sentences?", marks: 2 },
            { label: "c", prompt: "Give a stress pair example.", marks: 2 },
            { label: "d", prompt: "How to practise pronunciation?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Pronunciation", statement: "Stress patterns + rhythm + practice." }], steps: [
            { part: "a", reasoning: "One syllable in each word is emphasised.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Content words — nouns, verbs, adjectives.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct category.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Any valid pair: 'PREsent' vs 'preSENT', 'PHOtograph' vs 'phoTOgraphy'.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct pair.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Listen and repeat; record yourself; learn stress patterns.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Effective methods.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete advice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) one stressed syllable (b) content words (c) valid pair (d) listen-repeat-record",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u6-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In the word 'PHOtograph', the stressed syllable is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The first syllable" },
            { id: "b", text: "The third syllable" },
            { id: "c", text: "The second syllable" },
            { id: "d", text: "All syllables equally" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Word stress", statement: "One stressed syllable per word." }], steps: [{ reasoning: "PHOtograph stresses the first syllable.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** first syllable" },
        },
        {
          id: "oles-u6-pr-q6", difficulty: "core", totalMarks: 2,
          stem: "Which words usually carry stress in an English sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Every word equally" },
            { id: "b", text: "Only the first word" },
            { id: "c", text: "Function words — 'the', 'a', 'to'" },
            { id: "d", text: "Content words — nouns, verbs, adjectives" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Content words", statement: "Nouns, verbs, adjectives stressed." }], steps: [
            { reasoning: "Content words carry sentence stress; function words stay weak.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** content words" },
        },
        {
          id: "oles-u6-pr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "How many syllables are in the word 'photography'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Syllables", statement: "Count the vowel sounds." }], steps: [
            { reasoning: "pho-to-gra-phy → 4 syllables.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u6-pr-q8", difficulty: "core", totalMarks: 2,
          stem: "'preSENT' (verb) vs 'PREsent' (noun) shows that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Word stress can change meaning" },
            { id: "b", text: "Spelling changes the tense" },
            { id: "c", text: "The words are pronounced identically" },
            { id: "d", text: "Volume changes grammar" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Stress clarity", statement: "Stress position can change meaning." }], steps: [
            { reasoning: "Different stress = different word/meaning.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** stress changes meaning" },
        },
        {
          id: "oles-u6-pr-q9", difficulty: "core", totalMarks: 2,
          stem: "How do you say 'present' differently as a noun and as a verb?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Word stress", statement: "Stress position signals word class." }], steps: [
            { reasoning: "Noun: 'PREsent' (first syllable stressed).", marks: 1, markCode: "AO1" },
            { reasoning: "Verb: 'preSENT' (second syllable stressed).", marks: 1, markCode: "AO1" },
          ], finalAnswer: "Noun: PREsent; verb: preSENT." },
        },
        {
          id: "oles-u6-pr-q10", difficulty: "core", totalMarks: 1,
          stem: "In 'I want to buy a present for you', how many content words are stressed?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "convention", name: "Content words", statement: "Nouns, verbs, adjectives stressed." }], steps: [
            { reasoning: "want, buy, present, you → 4 content words.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u6-pr-q11", difficulty: "challenge", totalMarks: 2,
          stem: "English is described as 'stress-timed' because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stressed syllables come at roughly regular beats" },
            { id: "b", text: "Consonants are never pronounced" },
            { id: "c", text: "Every syllable takes equal time" },
            { id: "d", text: "All vowels are long" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Sentence rhythm", statement: "Stressed beats at regular intervals." }], steps: [
            { reasoning: "English rhythm is built on stressed beats, not equal syllable timing.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** regular stressed beats" },
        },
        {
          id: "oles-u6-pr-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A word has 3 syllables with stress on the second. How many unstressed syllables does it have?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Word stress", statement: "One stressed syllable per word." }], steps: [
            { reasoning: "3 total − 1 stressed = 2 unstressed.", marks: 1, markCode: "AO1" },
            { reasoning: "Calculation correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u6-pr-q13", difficulty: "foundation", totalMarks: 1,
          stem: "'Intonation' is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The rise and fall of the voice in speech" },
            { id: "b", text: "The speed of speech" },
            { id: "c", text: "The spelling of a word" },
            { id: "d", text: "The volume of speech" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Intonation", statement: "Voice rise and fall." }], steps: [{ reasoning: "Intonation = pitch movement.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** rise and fall of the voice" },
        },
        {
          id: "oles-u6-pr-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to practise word stress and sentence rhythm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Pronunciation practice", statement: "Listen, repeat, record, learn patterns." }], steps: [
            { reasoning: "Listen to native models and repeat them aloud.", marks: 1, markCode: "AO2" },
            { reasoning: "Record yourself and compare stress patterns.", marks: 1, markCode: "AO2" },
            { reasoning: "Learn stress patterns for common words like 'PHOtograph'.", marks: 1, markCode: "AO2" },
            { reasoning: "Complete advice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Listen-repeat-record; learn stress patterns; speak in rhythm groups." },
        },
        {
          id: "oles-u6-pr-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many syllables in 'photograph' are stressed?",
          response: { type: "numeric", parts: [ { label: "a", answer: 1 } ] },
          markscheme: { principles: [{ kind: "convention", name: "Word stress", statement: "One stressed syllable per word." }], steps: [
            { reasoning: "Every English word has exactly one stressed syllable → 1.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "1" },
        },
        {
          id: "oles-u6-pr-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which is the correct stress pattern for 'photography'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "photograPHY" },
            { id: "b", text: "photogRAPHY" },
            { id: "c", text: "PHOtography" },
            { id: "d", text: "phoTOgraphy" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Word stress", statement: "Learn stress patterns per word." }], steps: [
            { reasoning: "'Photography' stresses the second syllable: phoTOgraphy.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** phoTOgraphy" },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u6-6-2-notes", title: "Fluency and pronunciation — notes", summary: "Smooth speech and correct word stress.",
      sections: [
        { heading: "Fluency", body: "Linking phrases fill pauses. Communicate clearly — small errors are forgiven." },
        { heading: "Pronunciation", body: "One stressed syllable per word; content words carry sentence stress. 'PREsent' vs 'preSENT'." },
      ] },
  ],
};
