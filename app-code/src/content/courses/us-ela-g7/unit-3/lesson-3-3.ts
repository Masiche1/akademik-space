import type { Lesson, TextExtract } from "../../../types.ts";
import { levels6, levels8 } from "./levels.ts";

const REPORT: TextExtract = {
  title: "Field Trip Report (draft)",
  author: "Written for Akademik Space",
  text: "Last Friday our class visited the science museum, which was two hours away. Walking through the dinosaur hall, a huge skeleton towered over us. Because the guide was funny, everyone listened closely. We saw a long, narrow tunnel that glowed blue, and some students wanted to go in twice. Due to the fact that it was raining, we ate lunch inside the museum, but nobody minded. In my opinion, I think it was the best trip of the year.",
};

export const lesson33: Lesson = {
  id: "ela7-u3-lesson-3-3",
  code: "3-3",
  title: "Conventions",
  goal: "I CAN build and revise varied sentences with phrases and clauses, fix misplaced modifiers, punctuate coordinate adjectives, spell correctly and write concisely.",
  standards: ["L.7.1", "L.7.2", "L.7.3"],
  vocabulary: [
    { term: "Phrase", definition: "A group of words that works together but has no subject-verb pair, such as 'after the game'." },
    { term: "Clause", definition: "A group of words with a subject and a verb. An independent clause can stand alone; a dependent clause cannot." },
    { term: "Complex sentence", definition: "A sentence with one independent clause and at least one dependent clause." },
    { term: "Compound-complex sentence", definition: "A sentence with two or more independent clauses and at least one dependent clause." },
    { term: "Misplaced modifier", definition: "A word or phrase placed so that it seems to describe the wrong word in the sentence." },
    { term: "Coordinate adjectives", definition: "Two or more adjectives that equally describe a noun and are separated by commas, such as 'a cold, dark night'." },
    { term: "Wordiness", definition: "Using more words than necessary to express an idea." },
  ],
  concepts: [
    {
      id: "ela7-u3-sentences-clauses",
      title: "Phrases, clauses and sentence types",
      skill: "Identify phrases and clauses, build simple, compound, complex and compound-complex sentences, and fix misplaced modifiers.",
      lesson: {
        sections: [
          {
            heading: "Phrases, clauses and four sentence types",
            body: "A **clause** has a subject and a verb; a **phrase** does not. An independent clause expresses a complete thought. A dependent clause begins with a word such as *because*, *although*, *when* or *who* and cannot stand alone. A **simple** sentence has one independent clause. A **compound** sentence joins two independent clauses with a comma and a conjunction (*and*, *but*, *so*) or a semicolon. A **complex** sentence has one independent and one or more dependent clauses. A **compound-complex** sentence has two independent clauses and at least one dependent clause.",
          },
          {
            heading: "Misplaced modifiers",
            body: "A modifier describes a word, so it must sit next to the word it describes. In 'Walking through the dinosaur hall, a huge skeleton towered over us', the phrase seems to describe the skeleton, as if it were walking. Fix it by placing the modifier beside the right word or by rewriting: 'Walking through the dinosaur hall, we saw a huge skeleton tower over us.' Ask yourself: who or what is doing the action in the opening phrase?",
          },
        ],
        keyFormulas: [
          { name: "Independent and dependent clauses", statement: "An independent clause can stand alone; a dependent clause has a subject and verb but begins with a subordinating word and needs an independent clause." },
          { name: "Sentence types", statement: "Simple: 1 independent. Compound: 2+ independent. Complex: 1 independent + 1+ dependent. Compound-complex: 2+ independent + 1+ dependent." },
          { name: "Misplaced modifier", statement: "A modifier that is not next to the word it describes, so the sentence says something illogical." },
        ],
        workedExample: {
          problem: "Identify the sentence type: 'Although it rained, we played soccer, and our team won.'",
          solution: "This is a **compound-complex** sentence. 'Although it rained' is a dependent clause. 'We played soccer' and 'our team won' are two independent clauses joined by a comma and the conjunction 'and'. Two independent clauses plus one dependent clause makes it compound-complex.",
        },
      },
      questions: [
        {
          id: "ela7-u3-sentences-clauses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a complex sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bus arrived, and we climbed aboard." },
              { id: "b", text: "We climbed aboard the bus." },
              { id: "c", text: "When the bus arrived, we climbed aboard." },
              { id: "d", text: "The bus arrived; we climbed aboard." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Complex sentence", statement: "One independent clause plus at least one dependent clause." }],
            steps: [{ reasoning: "'When the bus arrived' is a dependent clause attached to the independent clause 'we climbed aboard'.", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(c)**. Choices (a) and (d) are compound (two independent clauses) and (b) is simple.",
            commonErrors: ["Choosing (a) because it has two clauses without checking whether both can stand alone."],
          },
        },
        {
          id: "ela7-u3-sentences-clauses-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence corrects the misplaced modifier in this sentence? \"Covered in chocolate sauce, Grandma served us the ice cream.\"",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grandma served us the ice cream, covered in chocolate sauce." },
              { id: "b", text: "Grandma, covered in chocolate sauce, served us the ice cream." },
              { id: "c", text: "Grandma served us the ice cream covered in chocolate sauce." },
              { id: "d", text: "Covered in chocolate sauce, the ice cream was served by Grandma to us, and we ate." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Modifier placement", statement: "Place a modifier directly beside the word it describes." }],
            steps: [
              { reasoning: "The modifier 'covered in chocolate sauce' is meant to describe the ice cream, so it must follow 'ice cream'.", marks: 1, markCode: "AO5" },
              { reasoning: "Choices (a) and (b) still attach it to Grandma or leave it ambiguous, and (d) leaves the modifier in front of the ice cream clumsily and adds an unrelated clause; (c) is clear and concise.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "**(c)**. Placing the phrase directly after 'ice cream' shows what was covered in sauce.",
            commonErrors: ["Choosing (b), which creates a different misplaced meaning: Grandma is covered in sauce."],
          },
        },
        {
          id: "ela7-u3-sentences-clauses-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Combine these four simple sentences into two sentences, one complex and one compound-complex. Underline or label your clauses.\n\nThe storm ended. We left the shelter. The road was flooded. We walked around the lake.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clauses", statement: "Independent clauses stand alone; dependent clauses begin with subordinating words such as when, because or although." },
              { kind: "convention", name: "Punctuating combined sentences", statement: "Use a comma after an introductory dependent clause and a comma before a coordinating conjunction joining independent clauses." },
            ],
            steps: [
              { reasoning: "Creates one correct complex sentence, for example 'When the storm ended, we left the shelter.'", marks: 2, markCode: "AO5" },
              { reasoning: "Creates one correct compound-complex sentence with two independent clauses and a dependent clause, for example 'Because the road was flooded, we walked around the lake, and we reached home by dark.'", marks: 2, markCode: "AO5" },
              { reasoning: "Uses accurate punctuation and keeps the meaning of the original sentences.", marks: 2, markCode: "AO5" },
            ],
            levels: levels6("writing"),
            finalAnswer: "When the storm ended, we left the shelter. Because the road was flooded, we walked around the lake, and the detour took an hour. (Any accurate combinations with correct clause types.)",
            commonErrors: ["Creating a compound sentence when a complex one was asked for.", "Omitting the comma after an introductory dependent clause.", "Making a compound-complex sentence that has only one independent clause."],
          },
        },
        {
          id: "ela7-u3-sentences-clauses-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: REPORT,
          stem: "Answer all parts of this question about the draft 'Field Trip Report'.",
          parts: [
            { label: "a", prompt: "Identify the dependent clause in the first sentence of the draft: 'Last Friday our class visited the science museum, which was two hours away.'", marks: 2 },
            { label: "b", prompt: "The second sentence contains a misplaced modifier. Explain the error and rewrite the sentence correctly.", marks: 4 },
            { label: "c", prompt: "Rewrite the first four sentences of the report as a revised paragraph that includes one simple, one compound, one complex and one compound-complex sentence, with no misplaced modifiers.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clauses and sentence types", statement: "Sentence type depends on the number and kind of clauses." },
              { kind: "convention", name: "Modifier placement", statement: "A modifier belongs beside the word it describes." },
              { kind: "skill", name: "Revision for variety", statement: "Combine and restructure sentences to vary length and structure." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies the dependent clause, which has a subject ('which') and verb ('was') but cannot stand alone.", evidence: "which was two hours away", marks: 2, markCode: "AO5" },
              { part: "b", reasoning: "Explains that the opening phrase seems to describe the skeleton, as if the skeleton were walking, rather than the students.", evidence: "Walking through the dinosaur hall, a huge skeleton towered over us", marks: 2, markCode: "AO5" },
              { part: "b", reasoning: "Rewrites with the modifier beside the correct subject, for example 'Walking through the dinosaur hall, we saw a huge skeleton towering over us.'", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Includes all four sentence types accurately (one of each).", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Eliminates the misplaced modifier and keeps the meaning of the draft.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Punctuates clauses correctly, with commas after introductory clauses and before conjunctions.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Reads smoothly, with varied sentence openings and logical connections.", marks: 2, markCode: "AO4" },
            ],
            levels: levels8("writing", "c"),
            finalAnswer: "(a) 'which was two hours away'. (b) The phrase 'Walking through the dinosaur hall' appears to describe the skeleton. Correct: 'Walking through the dinosaur hall, we saw a huge skeleton tower over us.' (c) 'Last Friday our class visited the science museum. We walked through the dinosaur hall, and a huge skeleton towered over us. Because the guide was funny, everyone listened closely. We saw a long, narrow tunnel that glowed blue, and some students wanted to go in twice.' (Types: simple, compound, complex, compound-complex.)",
            commonErrors: ["In (a), choosing the independent clause instead of the 'which' clause.", "In (b), moving words around without fixing who is walking.", "In (c), not having two independent clauses in the compound-complex sentence."],
          },
        },
      ],
    },
    {
      id: "ela7-u3-commas-concision",
      title: "Coordinate adjectives, spelling and concise language",
      skill: "Punctuate coordinate adjectives with commas, spell correctly and eliminate wordiness and redundancy.",
      lesson: {
        sections: [
          {
            heading: "Commas with coordinate adjectives and spelling",
            body: "Use a comma between **coordinate adjectives**, which equally describe a noun and could be joined with *and*: a loud, crowded hallway. Do not use a comma when the adjectives are cumulative, meaning the first modifies the whole phrase that follows: three red apples, a small wooden box. Test: can you swap the order or insert *and*? If so, use a comma. For spelling, consult a dictionary and review patterns and commonly confused words such as *their/there/they're*, *its/it's* and *affect/effect*.",
          },
          {
            heading: "Concise language",
            body: "Strong writers say more with fewer words. Cut **wordiness** and redundancy. 'Due to the fact that' becomes 'because'; 'in my opinion, I think' becomes 'I think'; 'at this point in time' becomes 'now'; 'the reason is because' becomes 'because'. Watch for repeated ideas ('free gift', 'return back') and for weak openers such as 'there are' and 'it is'. Revision should keep the meaning and the formal tone.",
          },
        ],
        keyFormulas: [
          { name: "Coordinate adjectives", statement: "Adjectives that can be reordered or joined by 'and' are separated by commas: a tall, quiet student." },
          { name: "Cumulative adjectives", statement: "Adjectives that cannot be reordered or joined with 'and' take no comma: a large plastic bin." },
          { name: "Concision", statement: "Replace wordy phrases and delete repeated ideas without changing the meaning." },
        ],
        workedExample: {
          problem: "Revise for punctuation and concision: 'Due to the fact that it was a cold dark night, we returned back to the cabin.'",
          solution: "Because it was a cold, dark night, we returned to the cabin. 'Due to the fact that' becomes 'because'; 'cold' and 'dark' are coordinate adjectives (a dark, cold night works too), so a comma separates them; and 'back' is redundant after 'returned'. The revision is shorter, clearer and correctly punctuated.",
        },
      },
      questions: [
        {
          id: "ela7-u3-commas-concision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses commas with coordinate adjectives correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We walked along a quiet winding path." },
              { id: "b", text: "We walked along a quiet, winding path." },
              { id: "c", text: "We walked along a, quiet winding path." },
              { id: "d", text: "We walked along, a quiet winding path." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Coordinate adjectives", statement: "Separate adjectives that equally describe a noun with a comma." }],
            steps: [{ reasoning: "'Quiet' and 'winding' each describe the path equally, and 'a winding, quiet path' also works, so a comma goes between them.", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(b)**. Choice (a) omits the comma, and (c) and (d) place commas in the wrong spots.",
            commonErrors: ["Leaving out the comma between equal adjectives."],
          },
        },
        {
          id: "ela7-u3-commas-concision-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which revision of the sentence is the most concise while keeping its meaning? \"In my opinion, I think that the reason the team lost is because they did not practice enough.\"",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I think the team lost because they did not practice enough." },
              { id: "b", text: "In my opinion, the team lost on account of the fact that they did not practice enough." },
              { id: "c", text: "I think that the team lost, and the reason is because they did not practice." },
              { id: "d", text: "In my opinion, I think the team lost because of not practicing enough." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Concision", statement: "Delete repeated ideas and replace wordy phrases with single words." }],
            steps: [
              { reasoning: "Removes the repeated 'in my opinion' and 'I think' and the empty phrase 'the reason is'.", marks: 1, markCode: "AO5" },
              { reasoning: "Keeps the full meaning in a clear sentence, unlike (b), (c) and (d), which keep redundant or wordy phrases.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "**(a)**. It keeps the meaning in the fewest words.",
            commonErrors: ["Keeping 'in my opinion' together with 'I think'.", "Choosing a version that is shorter but changes the meaning."],
          },
        },
        {
          id: "ela7-u3-commas-concision-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Revise each sentence for punctuation and concision, then correct any spelling error.\n\n1. The old creaky gate swung open at this point in time.\n2. Their going to recieve a free gift.\n3. Due to the fact that it was a bright sunny day, we stayed outside.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Coordinate adjectives", statement: "Use a comma between adjectives that can be reordered or joined by 'and'." },
              { kind: "technique", name: "Concision", statement: "Replace wordy phrases and remove redundancy." },
              { kind: "convention", name: "Spelling and usage", statement: "Distinguish their and they're, and use the i before e except after c pattern with care." },
            ],
            steps: [
              { reasoning: "Sentence 1: adds the comma ('old, creaky gate') and replaces 'at this point in time' with 'now'.", marks: 2, markCode: "AO5" },
              { reasoning: "Sentence 2: corrects 'Their' to 'They're', 'recieve' to 'receive', and removes the redundant 'free' from 'free gift'.", marks: 2, markCode: "AO5" },
              { reasoning: "Sentence 3: replaces 'Due to the fact that' with 'Because', adds the comma ('bright, sunny day'), and keeps the sentence meaning.", marks: 2, markCode: "AO5" },
            ],
            levels: levels6("writing"),
            finalAnswer: "1. The old, creaky gate swung open now. 2. They're going to receive a gift. 3. Because it was a bright, sunny day, we stayed outside.",
            commonErrors: ["Fixing the comma but leaving the wordy phrase.", "Writing 'there' for 'they're'.", "Missing the redundant word 'free'."],
          },
        },
        {
          id: "ela7-u3-commas-concision-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: REPORT,
          stem: "Answer all parts of this question about the draft 'Field Trip Report'.",
          parts: [
            { label: "a", prompt: "Identify the coordinate adjectives in the draft and write the phrase with the correct punctuation.", marks: 2 },
            { label: "b", prompt: "Find two wordy phrases in the draft and replace each with a concise alternative.", marks: 4 },
            { label: "c", prompt: "Rewrite the last two sentences of the draft ('Due to the fact that it was raining... In my opinion, I think it was the best trip of the year.') as a concise, formal paragraph ending, and then explain two changes you made.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Coordinate adjectives", statement: "Use a comma between adjectives that equally describe a noun." },
              { kind: "technique", name: "Concision", statement: "Eliminate wordy phrases and repeated ideas." },
              { kind: "skill", name: "Editing", statement: "Revise for clarity and explain editing choices." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies 'long' and 'narrow' as coordinate adjectives describing the tunnel.", evidence: "a long, narrow tunnel", marks: 1, markCode: "AO5" },
              { part: "a", reasoning: "Confirms the comma is correct because the adjectives can be reordered ('a narrow, long tunnel') or joined with 'and'.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "'Due to the fact that' can be replaced with 'Because'.", evidence: "Due to the fact that", marks: 2, markCode: "AO5" },
              { part: "b", reasoning: "'In my opinion, I think' repeats itself and can become 'I think' or just a direct statement.", evidence: "In my opinion, I think", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Rewrites with concise wording, for example replacing the wordy openers with 'Because it was raining'.", marks: 3, markCode: "AO5" },
              { part: "c", reasoning: "Keeps the meaning and a formal tone, and ends with a clear concluding statement about the trip.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Explains one change accurately, naming the wordy phrase and the replacement.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Explains a second change accurately and shows why it improves the writing.", marks: 2, markCode: "AO5" },
            ],
            levels: [
              { part: "c", level: "Level 4", marks: "9-10", descriptor: "Thorough, precise revision that is fully concise and formal, with accurate, well-explained editing choices." },
              { part: "c", level: "Level 3", marks: "6-8", descriptor: "Clear, adequate revision with mostly concise wording and adequate explanation of changes." },
              { part: "c", level: "Level 2", marks: "3-5", descriptor: "Partial revision that leaves some wordiness; explanation of changes is general." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Minimal revision with little explanation." },
            ],
            finalAnswer: "(a) a long, narrow tunnel. (b) 'Due to the fact that' becomes 'Because'; 'In my opinion, I think' becomes 'I think'. (c) 'Because it was raining, we ate lunch inside the museum, and nobody minded. I think it was the best trip of the year.' Changes: 'Due to the fact that' became 'Because', which is shorter and clearer, and 'In my opinion, I think' became 'I think', removing the repeated idea.",
            commonErrors: ["In (a), adding a comma to a cumulative phrase.", "In (b), replacing a wordy phrase with another wordy phrase.", "In (c), changing the meaning or leaving the repetition."],
          },
        },
      ],
    },
  ],
};
