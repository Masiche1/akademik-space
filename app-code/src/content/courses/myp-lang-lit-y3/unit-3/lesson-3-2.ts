import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mll3-u3-lesson-3-2",
  code: "3-2",
  title: "Writing Reviews and Opinion Pieces",
  goal: "I CAN write a review or opinion piece that evaluates, justifies a judgment and recommends to the audience.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
  ],
  vocabulary: [
    { term: "Review", definition: "A text that evaluates something — a film, book, restaurant, product." },
    { term: "Opinion piece", definition: "An article expressing the writer's view on an issue." },
    { term: "Evaluation", definition: "Judging the quality or value of something — strengths and weaknesses." },
    { term: "Verdict", definition: "The writer's final judgment or recommendation." },
    { term: "Balanced review", definition: "A review that considers both strengths and weaknesses fairly." },
  ],
  concepts: [
    {
      id: "mll3-u3-review-structure",
      title: "Review structure",
      skill: "Write reviews that describe, evaluate and recommend with a clear verdict.",
      lesson: {
        sections: [
          {
            heading: "The review arc",
            body: "A good review follows an arc: **describe** (what is it? what happens?), **evaluate** (what's good? what's bad?), **conclude** (verdict — is it worth it?). This guides readers from facts to judgment.",
          },
          {
            heading: "Evaluation language",
            body: "Use **evaluative language**: 'stunning', 'predictable', 'moving', 'rushed', 'brilliant', 'disappointing'. But back judgments with **evidence** — 'the ending was rushed' is stronger than 'I didn't like it'.",
          },
          {
            heading: "Balanced vs one-sided",
            body: "A **balanced review** acknowledges both strengths and weaknesses: 'The visuals are stunning, though the story is predictable.' A one-sided review only praises or only criticizes — it may be less credible. Balance builds trust.",
          },
        ],
        keyFormulas: [
          { name: "Review arc", statement: "Describe → Evaluate → Verdict. Back judgments with evidence." },
        ],
        workedExample: {
          problem: "Write a one-sentence verdict for a film with great visuals but a weak story.",
          solution: "'Despite its breathtaking visuals, the predictable story makes this a film for the eyes, not the heart — worth seeing once.'",
        },
      },
      questions: [
        {
          id: "mll3-u3-review-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the typical structure of a review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No fixed structure" },
              { id: "b", text: "Evaluation → verdict → description" },
              { id: "c", text: "Description → evaluation → verdict" },
              { id: "d", text: "Verdict → description → evaluation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review structure", statement: "Reviews describe first, then evaluate, then give a verdict." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): describe → evaluate → verdict — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Description → evaluation → verdict",
          },
        },
        {
          id: "mll3-u3-review-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Review",
            author: "Written for Akademik Space",
            text: "The new bakery on Main Street serves excellent sourdough — crusty outside, soft inside. The coffee is average, and the queue can be long at weekends. Despite the wait, the bread alone makes it worth a visit.",
          },
          stem: "Identify the strength, weakness and verdict in this review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balanced review", statement: "Reviews present both strengths and weaknesses before a verdict." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): strength — 'excellent sourdough'; weakness — 'coffee is average', 'long queue'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): verdict — 'worth a visit' despite the wait.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strength: excellent bread. Weakness: average coffee, long queue. Verdict: worth a visit for the bread.",
          },
        },
        {
          id: "mll3-u3-review-structure-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'The film was bad' is a weak review statement, and how to improve it with evaluation and evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Evaluative writing", statement: "Specific judgments with evidence are stronger than vague opinions." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'bad' is vague — it doesn't say what aspect (story, acting, visuals) or why.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): improve by specifying — 'the story was predictable and the dialogue felt wooden'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): evidence-based evaluation guides the reader — 'the plot repeated itself in the second act' shows exactly what's wrong.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "'Bad' is vague — specify what and why: 'the story was predictable, the dialogue wooden, and the plot repeated itself in act two.'",
          },
        },
        {
          id: "mll3-u3-review-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the 'describe' part of a review for a restaurant you know.", marks: 2 },
            { label: "b", prompt: "Write one evaluative sentence with evidence (strength or weakness).", marks: 2 },
            { label: "c", prompt: "Write a verdict sentence recommending or not recommending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review writing", statement: "Describe → evaluate → verdict, with evidence for judgments." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a description of the restaurant — food, atmosphere, service.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): clear, sensory or factual description.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): an evaluative sentence with evidence, e.g. 'The pasta was perfectly al dente, though the service was slow.'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion C (Producing text): judgment is specific, not just 'good' or 'bad'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): a clear verdict — 'Recommended for a quiet dinner' or 'Skip it unless you love fast food.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Description. (b) Evidence-based evaluation. (c) Clear verdict.",
          },
        },
        {
          id: "mll3-u3-review-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first part of a typical review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of prices" },
              { id: "b", text: "The verdict" },
              { id: "c", text: "The author's biography" },
              { id: "d", text: "Description — what the thing is and what happens" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review arc", statement: "Reviews describe first, then evaluate, then give a verdict." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): description comes first — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Description — what the thing is and what happens",
          },
        },
        {
          id: "mll3-u3-review-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'verdict' in a review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The writer's final judgment or recommendation" },
              { id: "b", text: "A quote from the author" },
              { id: "c", text: "A description of the plot" },
              { id: "d", text: "The review's title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verdict", statement: "The verdict is the final judgment or recommendation." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): verdict = final judgment/recommendation — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The writer's final judgment or recommendation",
          },
        },
        {
          id: "mll3-u3-review-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "The new Italian restaurant on High Street serves wood-fired pizza with a thin, crispy crust. The pasta dishes are rich and generous. Service is friendly but slow at weekends. Overall, a solid choice for a relaxed dinner.",
          },
          stem: "Which part of this review is the verdict?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The pasta dishes are rich and generous'" },
              { id: "b", text: "'The new Italian restaurant on High Street'" },
              { id: "c", text: "'Overall, a solid choice for a relaxed dinner'" },
              { id: "d", text: "'Service is friendly but slow'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review verdict", statement: "The verdict is the final recommendation — 'Overall, a solid choice'." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Overall, a solid choice' is the verdict — (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 'Overall, a solid choice for a relaxed dinner'",
          },
        },
        {
          id: "mll3-u3-review-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence belongs in the 'describe' part of a review — facts only, no opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The novel follows a young detective solving thefts in 1950s London.'" },
              { id: "b", text: "'It was absolutely brilliant.'" },
              { id: "c", text: "'You must read this immediately!'" },
              { id: "d", text: "'One of the worst books ever written.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review description", statement: "The describe part gives facts — plot, genre, format — without judgment." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): (b) states plot facts neutrally; the others are evaluations or imperatives — (b).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** 'The novel follows a young detective solving thefts in 1950s London.'",
          },
        },
        {
          id: "mll3-u3-review-structure-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "This musical is an absolute triumph! The songs are catchy, the dancing is incredible, and the set design is breathtaking. I defy anyone to find a single flaw.",
          },
          stem: "This review is one-sided. Explain why a balanced review would be more credible, and what a balanced version might include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balanced review", statement: "Acknowledging weaknesses alongside strengths builds trust." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'absolute triumph', 'I defy anyone to find a flaw' — absolute praise leaves no room for criticism; it reads as fan enthusiasm, not evaluation.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): a balanced review would admit a weakness — 'the second act drags' or 'the acoustics were muddy' — showing the reviewer actually weighed pros and cons.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): credibility comes from honesty — a review that admits flaws seems more trustworthy than one that claims perfection.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "One-sided praise ('defy anyone to find a flaw') reads as fan enthusiasm, not evaluation — a balanced review would admit a weakness, making the praise believable.",
          },
        },
        {
          id: "mll3-u3-review-structure-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the describe part of a review for a film.", marks: 2 },
            { label: "b", prompt: "Write one evaluative sentence with evidence.", marks: 2 },
            { label: "c", prompt: "Write a verdict for a specific audience.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review writing", statement: "Describe → evaluate with evidence → targeted verdict." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): describes the film — plot, genre, key features.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): clear, factual description.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): an evaluative sentence with evidence, e.g. 'The action scenes are thrilling, though the dialogue feels wooden.'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion C (Producing text): specific judgment, not just 'good' or 'bad'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): a targeted verdict, e.g. 'Recommended for action fans; skip if you want strong dialogue.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Factual description. (b) Evidence-based evaluation. (c) Targeted verdict.",
          },
        },
        {
          id: "mll3-u3-review-structure-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "The café serves excellent coffee and fresh pastries. The seats are uncomfortable and it's always noisy. Worth a visit for the coffee alone.",
          },
          stem: "How many strengths does this review identify? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Review evaluation", statement: "Strengths: excellent coffee, fresh pastries — 2 positives; weaknesses: uncomfortable seats, noisy." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'excellent coffee' and 'fresh pastries' — 2 strengths.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "mll3-u3-review-structure-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should a review back judgments with evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the review longer" },
              { id: "b", text: "To hide the writer's opinion" },
              { id: "c", text: "Because specific evidence makes judgments convincing and credible" },
              { id: "d", text: "Because it's required by law" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Evidence-based evaluation", statement: "Specific evidence makes judgments convincing." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): evidence makes judgments convincing — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Because specific evidence makes judgments convincing and credible",
          },
        },
        {
          id: "mll3-u3-review-structure-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Reviews",
            author: "Written for Akademik Space",
            text: "Review A: 'The food was nice.'\nReview B: 'The pasta was perfectly al dente and the sauce had a rich tomato base.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many specific details does Review A give?", marks: 1 },
            { label: "b", prompt: "How many specific details does Review B give?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Specific evaluation", statement: "Review B gives concrete details; Review A is vague." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Review A has no specifics — 0.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'al dente' and 'rich tomato base' — 2 specifics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0 (b) 2",
          },
        },
        {
          id: "mll3-u3-review-structure-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does a 'balanced review' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A very long review" },
              { id: "b", text: "A review that considers both strengths and weaknesses fairly" },
              { id: "c", text: "A review with no opinions" },
              { id: "d", text: "A review that only praises" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balanced review", statement: "A balanced review weighs strengths and weaknesses fairly." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): balanced = strengths + weaknesses — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A review that considers both strengths and weaknesses fairly",
          },
        },
        {
          id: "mll3-u3-review-structure-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is 'I didn't like it' a weak review statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too formal" },
              { id: "b", text: "It uses big words" },
              { id: "c", text: "It is too long" },
              { id: "d", text: "It is vague — it doesn't say what aspect or why" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Specific evaluation", statement: "Vague dislikes are unconvincing; specific judgments with evidence guide readers." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'I didn't like it' is vague — no aspect (plot, acting) or reason — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It is vague — it doesn't say what aspect or why",
          },
        },
        {
          id: "mll3-u3-review-structure-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this review and answer all parts.",
          extract: {
            title: "Review: The Last Train",
            author: "Written for Akademik Space",
            text: "The Last Train is a quiet, haunting film about a retired conductor's final journey. The cinematography is stunning — every frame feels painted. The story, however, moves slowly, and the ending arrives without the emotional payoff the setup promises.\n\nDespite its flaws, it's worth seeing for the visuals alone. Best for fans of slow, atmospheric cinema.",
          },
          parts: [
            { label: "a", prompt: "Identify the strength and weakness in this review.", marks: 2 },
            { label: "b", prompt: "Explain how the structure guides the reader to the verdict.", marks: 2 },
            { label: "c", prompt: "Who is the target audience?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review structure", statement: "Describe → evaluate → verdict; targeted recommendations guide the right audience." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): strength — 'stunning' cinematography, 'every frame feels painted'; weakness — 'moves slowly', 'ending arrives without payoff'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): the contrast ('however', 'Despite its flaws') presents balanced judgment.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion B (Organizing): description first (plot, visuals), evaluation middle (strengths, weaknesses), verdict end ('worth seeing').", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): 'Despite its flaws' signals the evaluative turn — readers weigh pros and cons before the verdict.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'fans of slow, atmospheric cinema' — the reviewer targets a specific audience rather than a blanket verdict.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Strength: stunning visuals; weakness: slow pacing, weak ending. (b) Describe → evaluate → verdict guides fair judgment. (c) Slow/atmospheric cinema fans.",
          },
        },
      ],
    },
    {
      id: "mll3-u3-opinion-writing",
      title: "Opinion pieces",
      skill: "Write opinion pieces with a clear position, reasons and evidence.",
      lesson: {
        sections: [
          {
            heading: "State your position",
            body: "An **opinion piece** argues a viewpoint. Start with a clear **thesis** — your position in one sentence: 'School uniforms should be abolished.' Then support it with **reasons** and **evidence**.",
          },
          {
            heading: "Reasons and evidence",
            body: "Each paragraph should give one **reason** for your position, backed by **evidence** — facts, examples, expert quotes. Don't just assert — prove. 'Uniforms are expensive' → 'Uniforms cost families an average of $200 per year, which is a burden for many.'",
          },
          {
            heading: "Addressing the other side",
            body: "Strong opinion pieces **acknowledge opposition**: 'Some argue uniforms create equality, but they also suppress individuality.' This shows you've considered other views and makes your argument stronger.",
          },
        ],
        keyFormulas: [
          { name: "Opinion structure", statement: "Thesis → Reasons + Evidence → Address opposition → Conclusion." },
        ],
        workedExample: {
          problem: "Write the thesis for an opinion piece about homework.",
          solution: "'Homework should be reduced in secondary school because it causes stress without improving learning.'",
        },
      },
      questions: [
        {
          id: "mll3-u3-opinion-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'thesis' in an opinion piece?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of essay" },
              { id: "b", text: "A long conclusion" },
              { id: "c", text: "A quotation from an expert" },
              { id: "d", text: "The writer's main position stated in one sentence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thesis", statement: "The thesis states the writer's position clearly." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): thesis = main position in one sentence — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The writer's main position stated in one sentence",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a thesis statement for an opinion piece arguing that school should start later in the morning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thesis", statement: "A thesis states position + reason in one clear sentence." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): e.g. 'School should start at 9am because teenagers' sleep patterns make early starts harmful.'", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): the thesis includes both position ('should start at 9am') and reason ('sleep patterns').", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'School should start at 9am because teenagers' sleep patterns make early starts harmful.'",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Opinion Draft",
            author: "Written for Akademik Space",
            text: "I think uniforms are bad. They are ugly. Everyone hates them. We should get rid of them.",
          },
          stem: "This opinion piece is weak. Identify two problems and explain how to fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Strong argument", statement: "Opinions need reasons and evidence, not just assertions." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'They are ugly', 'Everyone hates them' are unsupported assertions — no reasons or evidence.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'everyone hates them' is a false generalization — not everyone does.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): fix by adding reasons — 'uniforms suppress individuality' or 'they cost families money' — backed by evidence.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Problems: unsupported assertions and false generalization. Fix: add reasons (individuality, cost) with evidence.",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a thesis for an opinion piece on 'Should homework be abolished?'", marks: 1 },
            { label: "b", prompt: "Write one paragraph giving a reason with evidence.", marks: 2 },
            { label: "c", prompt: "Write one sentence acknowledging the opposing view.", marks: 1 },
            { label: "d", prompt: "Explain why acknowledging opposition strengthens your argument.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Argument structure", statement: "Thesis → reasons + evidence → acknowledge opposition → conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): a clear thesis, e.g. 'Homework should be reduced because it causes stress without improving learning.'", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): a reason with evidence, e.g. 'Studies show excessive homework increases stress (reason) — students report sleeping less (evidence).'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion C (Producing text): clear, logical paragraph structure.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): e.g. 'Some argue homework reinforces learning, but the evidence shows diminishing returns.'", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A (Analysing): acknowledging opposition shows fairness and strengthens credibility — you've considered other views.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Thesis. (b) Reason + evidence. (c) Opposition acknowledged. (d) Shows fairness and strengthens argument.",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'thesis' of an opinion piece?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The writer's main position in one sentence" },
              { id: "b", text: "The evidence used" },
              { id: "c", text: "The conclusion" },
              { id: "d", text: "A quotation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thesis", statement: "The thesis states the writer's position clearly in one sentence." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): thesis = main position — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The writer's main position in one sentence",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a stronger thesis: 'I think homework is bad' or 'Homework should be reduced because it causes stress without improving learning'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I think homework is bad' — it's shorter" },
              { id: "b", text: "Neither is a thesis" },
              { id: "c", text: "Both are equally strong" },
              { id: "d", text: "'Homework should be reduced because...' — it states position and reason" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strong thesis", statement: "A strong thesis states position + reason, not just a vague opinion." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): the second thesis states position ('reduced') and reason ('stress without improving learning') — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 'Homework should be reduced because...' — it states position and reason",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Opinion Piece",
            author: "Written for Akademik Space",
            text: "School uniforms should be abolished. They suppress individuality, cost families money, and don't improve behaviour — as the evidence shows.",
          },
          stem: "What is the thesis of this opinion piece?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The evidence shows'" },
              { id: "b", text: "There is no thesis" },
              { id: "c", text: "'School uniforms should be abolished'" },
              { id: "d", text: "'They suppress individuality'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thesis", statement: "The thesis is the main position — 'uniforms should be abolished'." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): 'School uniforms should be abolished' is the thesis — the rest gives reasons — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'School uniforms should be abolished'",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest thesis statement for an opinion piece on students having more say in school decisions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'This piece is about school decisions.'" },
              { id: "b", text: "'Why do students even care?'" },
              { id: "c", text: "'Students should have more say in school decisions because their input improves decisions and engagement.'" },
              { id: "d", text: "'School is interesting.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thesis", statement: "A thesis states position + reason in one clear sentence." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): (b) states position and reason in one sentence; the others lack a clear stance — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'Students should have more say in school decisions because their input improves decisions and engagement.'",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Opinion Piece",
            author: "Written for Akademik Space",
            text: "Bottled water is a scam. It's overpriced, the plastic destroys the planet, and tap water tastes exactly the same. Companies just want your money. We should ban it.",
          },
          stem: "This opinion piece has problems. Identify two weaknesses and explain how to strengthen the argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Strong argument", statement: "Opinions need evidence and fairness; exaggeration and unsupported claims weaken them." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'a scam', 'just want your money' — unsupported assertions and loaded language; no evidence that companies 'just' want money.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'tap water tastes exactly the same' is a false generalization — not everyone's tap water tastes the same.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): strengthen by adding evidence — statistics on plastic waste, price comparisons, expert views — and acknowledging bottled water's convenience for some.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Weaknesses: unsupported assertions ('a scam', 'just want your money') and false generalization ('tastes exactly the same'). Strengthen with evidence and fairness.",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a thesis for an opinion piece on 'Should phones be banned in class?'.", marks: 1 },
            { label: "b", prompt: "Write one paragraph giving a reason with evidence.", marks: 2 },
            { label: "c", prompt: "Write one sentence acknowledging the opposing view.", marks: 1 },
            { label: "d", prompt: "Write a conclusion sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Argument structure", statement: "Thesis → reasons + evidence → acknowledge opposition → conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): a clear thesis, e.g. 'Phones should be restricted in class because they reduce focus and learning.'", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): a reason with evidence, e.g. 'Studies show phones reduce attention — students check them every few minutes (evidence: classroom observations).'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion C (Producing text): clear paragraph structure.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): e.g. 'Some argue phones aid learning, but the evidence shows distraction outweighs benefit.'", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion B (Organizing): a conclusion restating position — e.g. 'Phones have their place, but not in the classroom.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Thesis. (b) Reason + evidence. (c) Opposition acknowledged. (d) Conclusion.",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Opinion Piece",
            author: "Written for Akademik Space",
            text: "Thesis: 'Recycling should be compulsory in schools.'\nReason 1: It teaches responsibility.\nReason 2: It reduces waste.\nOpposition: Some say it's inconvenient.",
          },
          stem: "How many reasons does this opinion piece give? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Opinion structure", statement: "Reasons support the thesis — 2 reasons listed here." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): Reason 1 (responsibility) and Reason 2 (reduces waste) — 2 reasons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should an opinion piece acknowledge the opposing view?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it shows fairness and strengthens your argument by addressing counterarguments" },
              { id: "b", text: "Because it's required by law" },
              { id: "c", text: "To confuse the reader" },
              { id: "d", text: "To make the piece longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Addressing opposition", statement: "Acknowledging other views shows fairness and strengthens credibility." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): acknowledging opposition shows fairness and strengthens argument — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Because it shows fairness and strengthens your argument by addressing counterarguments",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Theses",
            author: "Written for Akademik Space",
            text: "Thesis A: 'Exercise is good.'\nThesis B: 'Schools should require daily exercise because it improves both health and academic performance.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many theses state a specific position with a reason?", marks: 1 },
            { label: "b", prompt: "How many theses are vague opinions?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strong thesis", statement: "Thesis B states position + reason; Thesis A is vague." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): Thesis B is specific with reason — 1.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): Thesis A ('exercise is good') is vague — 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 (b) 1",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What makes 'Everyone knows this is true' a weak argument move?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's a false generalization — it pressures agreement without evidence" },
              { id: "b", text: "It's too formal" },
              { id: "c", text: "It's too long" },
              { id: "d", text: "It uses big words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "False generalization", statement: "'Everyone knows' assumes universal agreement — an unsupported claim." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Everyone knows' is a false generalization pressuring agreement — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It's a false generalization — it pressures agreement without evidence",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student argues 'School should start later because teenagers need more sleep.' Explain how to support this with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Evidence-based argument", statement: "Claims need supporting evidence — studies, data, examples." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the claim needs evidence — cite studies showing teenagers' sleep patterns, or data on schools that start later.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): e.g. 'Research shows teenagers' circadian rhythms make early starts harmful — schools starting at 9am report better attendance.'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Support with evidence — cite sleep research or examples of schools with later starts showing improved attendance and wellbeing.",
          },
        },
        {
          id: "mll3-u3-opinion-writing-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this opinion piece and answer all parts.",
          extract: {
            title: "The Opinion Piece",
            author: "Written for Akademik Space",
            text: "Video games are destroying a generation. Children spend hours glued to screens, their eyes damaged, their social skills dead. Schools should ban them entirely.\n\nSome might argue games teach problem-solving, but the evidence of harm is overwhelming.",
          },
          parts: [
            { label: "a", prompt: "Identify the thesis.", marks: 1 },
            { label: "b", prompt: "Identify two problems with the argument.", marks: 2 },
            { label: "c", prompt: "Explain how the opposition is acknowledged — and whether it's handled well.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Critical argument analysis", statement: "Strong arguments need evidence and fair treatment of opposition." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): thesis — 'Schools should ban video games entirely' (or 'video games are destroying a generation').", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): 'destroying a generation', 'social skills dead' — exaggerated claims without evidence; no data on screen time or harm.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'ban them entirely' is absolutist — ignores nuance (educational games, moderation); 'eyes damaged' is asserted without source.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): opposition ('games teach problem-solving') is acknowledged — good — but dismissed with 'evidence is overwhelming' without showing that evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): acknowledging then dismissing without engagement is weak — a strong argument would weigh the counter-evidence fairly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Thesis: ban video games. (b) Exaggerated claims, no evidence, absolutist position. (c) Opposition acknowledged but dismissed without engagement — weak handling.",
          },
        },
      ],
    },
  ],
};
