import type { Lesson } from "../../../types.ts";
import {
  clausesQuestions,
  wordClassesQuestions,
} from "./expanded-questions.ts";

export const lesson21: Lesson = {
  id: "mll2-u2-lesson-2-1",
  code: "2-1",
  title: "Word Classes and Sentence Structure",
  goal: "I CAN identify nouns, verbs, adjectives and adverbs and use them to build clear sentences and clauses.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Noun", definition: "A naming word — a person, place, thing or idea (teacher, London, book, happiness)." },
    { term: "Verb", definition: "An action or being word — run, is, think, become." },
    { term: "Adjective", definition: "A describing word that tells more about a noun — 'the red car'." },
    { term: "Adverb", definition: "A word that describes a verb, adjective or another adverb — often ends in -ly: 'ran quickly'." },
    { term: "Clause", definition: "A group of words with a subject and a verb; a sentence may have one or more clauses." },
  ],
  concepts: [
    {
      id: "mll2-u2-word-classes",
      title: "Word classes",
      skill: "Identify nouns, verbs, adjectives and adverbs in sentences.",
      lesson: {
        sections: [
          {
            heading: "The main word classes",
            body: "**Nouns** name things: 'the **dog** barked'. **Verbs** show action or being: 'the dog **barked**'. **Adjectives** describe nouns: 'the **noisy** dog'. **Adverbs** describe verbs (and often adjectives): 'the dog barked **loudly**'.",
          },
          {
            heading: "How to spot them",
            body: "Ask: does the word name something (noun)? Show action or being (verb)? Describe a noun (adjective)? Describe a verb or add -ly (adverb)? 'Quickly' ends in -ly and tells how — adverb. 'Quick' describes a noun — adjective.",
          },
          {
            heading: "Why word classes matter",
            body: "Knowing word classes helps you choose **precise** words. 'The big dog ran' is flat; 'The enormous dog sprinted' is vivid — 'enormous' (adjective) and 'sprinted' (verb) are stronger choices than 'big' and 'ran'.",
          },
        ],
        keyFormulas: [
          { name: "Word class test", statement: "Names = noun; action/being = verb; describes noun = adjective; describes verb (-ly) = adverb." },
        ],
        workedExample: {
          problem: "Identify the word class of each word: 'The hungry fox moved silently through the forest.'",
          solution: "fox = noun; moved = verb; hungry = adjective (describes fox); silently = adverb (describes moved); forest = noun.",
        },
      },
      questions: [
        {
          id: "mll2-u2-word-classes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'The children played happily in the garden', what word class is 'happily'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Verb" },
              { id: "b", text: "Noun" },
              { id: "c", text: "Adjective" },
              { id: "d", text: "Adverb" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adverb", statement: "Adverbs describe verbs and often end in -ly." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'happily' ends in -ly and describes how they played — an adverb. (d)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Adverb",
          },
        },
        {
          id: "mll2-u2-word-classes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the noun, verb and adjective in: 'The ancient castle stood on the hill.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word classes", statement: "Nouns name, verbs act, adjectives describe nouns." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): noun — 'castle' (or 'hill'); verb — 'stood'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): adjective — 'ancient' describes the castle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Noun: castle/hill. Verb: stood. Adjective: ancient.",
          },
        },
        {
          id: "mll2-u2-word-classes-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Improve this sentence by replacing weak words with stronger ones from the same word class: 'The man went quickly through the big building.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Precise word choice", statement: "Stronger nouns, verbs, adjectives and adverbs create vivid writing." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): replace 'went' with a stronger verb like 'hurried', 'rushed' or 'strode'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): replace 'big' with 'enormous', 'vast' or 'sprawling' (adjective).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): a full improved sentence such as 'The man hurried through the enormous building.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'The man hurried through the enormous building.' — stronger verb and adjective.",
          },
        },
        {
          id: "mll2-u2-word-classes-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Label the word class of each word: 'The lazy cat slept quietly.'", marks: 2 },
            { label: "b", prompt: "Rewrite the sentence using a stronger verb and a stronger adjective.", marks: 2 },
            { label: "c", prompt: "Explain why your changes improve the sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Word class and precision", statement: "Identifying word classes lets you swap in stronger alternatives." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'lazy' = adjective, 'cat' = noun, 'slept' = verb, 'quietly' = adverb.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'the' is a determiner (article) — accept as not a content word class.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion C (Producing text): e.g. 'The drowsy cat dozed peacefully.' — stronger adjective and verb.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D (Using language): grammar and word order remain correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): stronger words paint a more precise picture — 'drowsy' and 'dozed' match better than 'lazy' and 'slept'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lazy=adj, cat=noun, slept=verb, quietly=adv. (b) e.g. 'The drowsy cat dozed peacefully.' (c) More precise, vivid words.",
          },
        },
        ...wordClassesQuestions,
      ],
    },
    {
      id: "mll2-u2-clauses",
      title: "Clauses and sentence variety",
      skill: "Identify clauses and combine simple sentences into compound and complex ones.",
      lesson: {
        sections: [
          {
            heading: "What is a clause?",
            body: "A **clause** has a **subject** (who/what) and a **verb** (what they do). 'The dog barked' is one clause. 'When the dog barked, we jumped' has two clauses — 'When the dog barked' and 'we jumped'.",
          },
          {
            heading: "Simple, compound, complex",
            body: "A **simple sentence** has one clause: 'She smiled.' A **compound sentence** joins two equal clauses with 'and', 'but', 'or': 'She smiled, but he didn't.' A **complex sentence** joins clauses where one depends on the other: 'Because she smiled, he relaxed.'",
          },
          {
            heading: "Why vary sentences",
            body: "Using only short simple sentences sounds choppy. Mixing simple, compound and complex sentences makes writing **flow** and lets you show which ideas are more important. 'He ran. He was late. He was tired.' → 'Running late and exhausted, he sprinted to the gate.'",
          },
        ],
        keyFormulas: [
          { name: "Sentence types", statement: "Simple = 1 clause. Compound = clauses joined by and/but/or. Complex = main clause + dependent clause." },
        ],
        workedExample: {
          problem: "Combine: 'It rained. We stayed inside.'",
          solution: "Compound: 'It rained, so we stayed inside.' Complex: 'Because it rained, we stayed inside.'",
        },
      },
      questions: [
        {
          id: "mll2-u2-clauses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many clauses are in: 'Although it was late, she kept working'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two" },
              { id: "b", text: "One" },
              { id: "c", text: "Three" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clause", statement: "A clause has a subject and a verb; 'although it was late' and 'she kept working' are two clauses." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Although it was late' (subject 'it', verb 'was') + 'she kept working' = two clauses — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Two",
          },
        },
        {
          id: "mll2-u2-clauses-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Combine into one compound sentence: 'The bell rang. The students rushed out.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Compound sentence", statement: "Join two independent clauses with a conjunction like 'and', 'but', 'so'." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'The bell rang, and the students rushed out.' — comma + 'and' joins the clauses.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'so' or 'then' also acceptable — 'The bell rang, so the students rushed out.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "The bell rang, and the students rushed out.",
          },
        },
        {
          id: "mll2-u2-clauses-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Rewrite these choppy sentences as one complex sentence: 'It was raining. I forgot my umbrella. I ran to the bus stop.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence combining", statement: "Dependent clauses (because, although, when) link ideas with logic." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): an example — 'Because it was raining and I had forgotten my umbrella, I ran to the bus stop.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): the cause ('raining', 'forgot umbrella') is subordinated to the main action ('ran').", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): the combined sentence is smoother and shows the logical connection between events.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Because it was raining and I had forgotten my umbrella, I ran to the bus stop.'",
          },
        },
        {
          id: "mll2-u2-clauses-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write one simple sentence about the weather.", marks: 1 },
            { label: "b", prompt: "Turn it into a compound sentence by adding a second idea joined with 'but' or 'so'.", marks: 2 },
            { label: "c", prompt: "Turn it into a complex sentence using 'because', 'although' or 'when'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence variety", statement: "Simple, compound and complex sentences each have a distinct structure." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): a simple sentence — one clause, e.g. 'The wind blew.'", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): a compound sentence, e.g. 'The wind blew, but the sky stayed clear.'", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): correct conjunction and punctuation joining two independent clauses.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): a complex sentence, e.g. 'Although the wind blew, the sky stayed clear.'", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): the dependent clause is correctly subordinated with its own subject and verb.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) e.g. 'The wind blew.' (b) 'The wind blew, but the sky stayed clear.' (c) 'Although the wind blew, the sky stayed clear.'",
          },
        },
        ...clausesQuestions,
      ],
    },
  ],
};
