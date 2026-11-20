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
            { id: "b", text: "Speaking very fast" },
            { id: "c", text: "Using perfect grammar" },
            { id: "d", text: "Memorising answers" },
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
            { id: "a", text: "Emphasising one syllable in a word" },
            { id: "b", text: "Speaking loudly" },
            { id: "c", text: "Using correct grammar" },
            { id: "d", text: "Spelling correctly" },
          ], correctChoiceId: "a" },
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
