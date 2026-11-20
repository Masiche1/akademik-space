import type { Lesson } from "../../../types.ts";
import {
  editingQuestions,
  revisingQuestions,
} from "./expanded-questions.ts";

export const lesson33: Lesson = {
  id: "mll2-u3-lesson-3-3",
  code: "3-3",
  title: "Editing and Improving",
  goal: "I CAN edit a draft for clarity, sentence variety, word choice and correctness.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Edit", definition: "To improve a draft by fixing errors and making it clearer." },
    { term: "Revise", definition: "To rethink and improve content, structure and style — bigger changes than editing." },
    { term: "Proofread", definition: "The final check for spelling, punctuation and grammar." },
    { term: "Sentence variety", definition: "Mixing short and long sentences so writing flows and stays interesting." },
    { term: "Clarity", definition: "Writing that is easy to understand — no confusion or ambiguity." },
  ],
  concepts: [
    {
      id: "mll2-u3-editing",
      title: "Editing techniques",
      skill: "Edit a draft systematically for clarity, variety and correctness.",
      lesson: {
        sections: [
          {
            heading: "What to check",
            body: "When editing, check in this order: **clarity** (does it make sense?), **structure** (do paragraphs flow?), **word choice** (are words precise?), **sentence variety** (too many short or long?), and **correctness** (spelling, punctuation, grammar).",
          },
          {
            heading: "Sentence variety",
            body: "Choppy: 'She ran. She was late. She was tired.' Better: 'Running late and exhausted, she sprinted.' Mix **short** sentences (for impact) with **longer** ones (for detail). Vary sentence beginnings — don't start every sentence with 'The' or 'She'.",
          },
          {
            heading: "Read aloud",
            body: "The best editing tool is your **ear**. Read your draft aloud — awkward sentences, repeated words and missing commas all become obvious when you hear them.",
          },
        ],
        keyFormulas: [
          { name: "Edit checklist", statement: "Clarity → structure → word choice → sentence variety → correctness." },
        ],
        workedExample: {
          problem: "Edit: 'The dog was very big. It was very old. It was very slow.'",
          solution: "Vary and strengthen: 'The enormous old dog moved slowly.' — one strong sentence replaces three weak ones.",
        },
      },
      questions: [
        {
          id: "mll2-u3-editing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between 'editing' and 'proofreading'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same thing" },
              { id: "b", text: "Editing improves content and style; proofreading checks final spelling/punctuation" },
              { id: "c", text: "Proofreading happens first" },
              { id: "d", text: "Editing is only for spelling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Editing stages", statement: "Edit for content/style first, then proofread for errors last." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): editing improves ideas/style; proofreading catches final errors — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Editing improves content and style; proofreading checks final spelling/punctuation",
          },
        },
        {
          id: "mll2-u3-editing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify two problems in this sentence and fix them: 'Me and Sam went to the shops and we buyed some sweets.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Common errors", statement: "Pronoun case and irregular verb forms are common editing targets." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'Me and Sam' → 'Sam and I' or 'We' (subject pronoun needed).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'buyed' → 'bought' (irregular past tense).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Sam and I went to the shops and we bought some sweets.",
          },
        },
        {
          id: "mll2-u3-editing-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Draft Paragraph",
            author: "Written for Akademik Space",
            text: "The park was nice. It had trees. It had a lake. It had a playground. We played games. We had fun.",
          },
          stem: "Identify two editing problems and rewrite the paragraph more effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety and specificity", statement: "Repeated sentence patterns and vague words weaken writing." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): every sentence starts 'It had' or 'We' — repetitive structure needs variety.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): 'nice', 'games', 'fun' are vague — replace with specific details.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): e.g. 'The park was shaded by old trees and a still lake. We raced across the playground, shrieking with laughter.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Problems: repetitive 'It had' structure and vague words. Fix: vary sentences and add specifics — e.g. 'The park was shaded by old trees...'",
          },
        },
        {
          id: "mll2-u3-editing-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify one clarity problem and one punctuation problem in: 'When the bell rang the students ran to class they was late.'", marks: 2 },
            { label: "b", prompt: "Rewrite the sentence correctly.", marks: 1 },
            { label: "c", prompt: "Explain why reading aloud helps editing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Editing for clarity and correctness", statement: "Fix run-ons, pronoun agreement and unclear references." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): clarity — 'the bell rang the students ran' is a run-on needing a comma or full stop; 'they was' should be 'they were'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): punctuation — missing comma after 'rang' or a full stop between clauses.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): 'When the bell rang, the students ran to class. They were late.'", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): reading aloud reveals rhythm problems, awkward phrasing and missing punctuation that the eye skips.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): the ear catches errors like 'they was' that eyes may miss.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Run-on + 'they was' error. (b) 'When the bell rang, the students ran to class. They were late.' (c) The ear catches rhythm, awkwardness and errors.",
          },
        },
        ...editingQuestions,
      ],
    },
    {
      id: "mll2-u3-revising",
      title: "Revising: bigger changes",
      skill: "Revise a draft for content, structure and style — not just errors.",
      lesson: {
        sections: [
          {
            heading: "Edit vs revise",
            body: "**Editing** fixes surface problems (spelling, punctuation, grammar). **Revising** is deeper — you **rethink** the piece: Is the structure right? Are the ideas clear? Is there enough detail? Does it achieve its purpose? Revise before you edit.",
          },
          {
            heading: "Questions for revision",
            body: "Ask: Does the **beginning** hook the reader? Does each **paragraph** have one clear idea? Is there enough **detail**? Does the **ending** satisfy? Would a reader understand my **purpose**?",
          },
          {
            heading: "The revision process",
            body: "1. **Read** your draft as if you're a stranger. 2. **Mark** problems. 3. **Rewrite** weak parts — don't just patch, rethink. 4. **Read again** — does it flow? Then edit and proofread.",
          },
        ],
        keyFormulas: [
          { name: "Revision questions", statement: "Is the structure right? Are ideas clear? Is there enough detail? Does it achieve its purpose?" },
        ],
        workedExample: {
          problem: "A story draft has a great opening but a rushed ending. What should you revise?",
          solution: "The ending needs more development — add the problem's resolution, character feelings and a satisfying close, not just quick fixes.",
        },
      },
      questions: [
        {
          id: "mll2-u3-revising-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'revising' mean in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixing spelling mistakes" },
              { id: "b", text: "Rethinking and improving content, structure and style" },
              { id: "c", text: "Writing the first draft" },
              { id: "d", text: "Checking punctuation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Revision", statement: "Revision is deep improvement of content and structure; editing is surface fixes." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): revising = rethinking content/structure/style — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Rethinking and improving content, structure and style",
          },
        },
        {
          id: "mll2-u3-revising-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two questions you should ask when revising a story draft.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Revision questions", statement: "Good revision asks about structure, clarity, detail and purpose." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): e.g. 'Does the beginning hook the reader?' — a structural/content question.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): e.g. 'Is there enough detail?' or 'Does the ending solve the problem?' — another revision-level question.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'Does the beginning hook the reader?' 'Is there enough detail?' 'Does the ending satisfy?'",
          },
        },
        {
          id: "mll2-u3-revising-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Draft Story",
            author: "Written for Akademik Space",
            text: "Sam found a map. He followed it. He found treasure. He was happy. The end.",
          },
          stem: "This draft has all correct grammar and punctuation but is still weak. Explain two revision (not editing) improvements needed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Deep revision", statement: "Correct grammar isn't enough — content needs detail, feeling and structure." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): add sensory detail and feelings — what does the treasure look like? How does Sam feel? — instead of flat statements.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B (Organizing): build the middle — obstacles, problems, setbacks — instead of 'followed it. found treasure' with no tension.", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): 'The end.' is a lazy ending — a satisfying ending needs resolution and emotional closure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add sensory detail and feelings; build obstacles in the middle; replace 'The end.' with a real resolution — all content revision, not error-fixing.",
          },
        },
        {
          id: "mll2-u3-revising-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Read this draft and identify one structural problem: 'I woke up. I ate breakfast. I went to school. School was boring. I went home. I did homework. I slept.'", marks: 2 },
            { label: "b", prompt: "Rewrite the paragraph with better structure and some detail.", marks: 2 },
            { label: "c", prompt: "Explain the difference between your revision and simple editing.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural revision", statement: "Reordering events and adding detail improves flow beyond fixing errors." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): flat chronological list with no connection or emphasis — 'school was boring' is telling, not showing.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): no paragraph breaks or grouping of related events.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C (Producing text): a revised version with grouping, connection and detail, e.g. 'After a quick breakfast, I trudged to school — another boring day. By evening I was too tired for homework.'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D (Using language): varied sentence structure and correct grammar.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): revision changed content/structure; editing would only fix errors — different levels of improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Flat list, no grouping, telling not showing. (b) Revised with connection and detail. (c) Revision changes content; editing fixes errors.",
          },
        },
        ...revisingQuestions,
      ],
    },
  ],
};
