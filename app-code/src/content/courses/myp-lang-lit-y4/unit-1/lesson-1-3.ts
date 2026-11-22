import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mll4-u1-lesson-1-3",
  code: "1-3",
  title: "Evaluating Texts and Purposes",
  goal: "I CAN evaluate how well different texts achieve their purposes and justify judgments with evidence.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion C: Producing text",
  ],
  vocabulary: [
    { term: "Evaluation", definition: "Judging the quality or effectiveness of a text against its purpose." },
    { term: "Criteria", definition: "Standards used to judge — clarity, impact, craft, appropriateness." },
    { term: "Judgment", definition: "A considered opinion supported by evidence." },
    { term: "Strength", definition: "Something a text does well." },
    { term: "Weakness", definition: "Something a text does poorly or could improve." },
  ],
  concepts: [
    {
      id: "mll4-u1-evaluating-texts",
      title: "How to evaluate a text",
      skill: "Judge a text's effectiveness using criteria and support judgments with evidence.",
      lesson: {
        sections: [
          {
            heading: "What makes a text good?",
            body: "A text is good if it **achieves its purpose**. A news report should inform clearly; a poem should move the reader; an ad should persuade. Judge by **fitness for purpose**, not personal taste alone — though personal response matters too.",
          },
          {
            heading: "Evaluation criteria",
            body: "Use criteria: **clarity** (easy to understand?), **impact** (does it affect you?), **craft** (skilled language?), **appropriateness** (right for audience?), **originality** (says something new?). For each, ask: what's the evidence?",
          },
          {
            heading: "Balanced judgment",
            body: "Strong evaluations acknowledge **strengths and weaknesses**. 'The poem has beautiful imagery but its message is unclear.' One-sided praise or criticism is less convincing. Support every claim with **specific evidence** from the text.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation criteria", statement: "Clarity + Impact + Craft + Appropriateness + Originality. Support with evidence." },
        ],
        workedExample: {
          problem: "Evaluate: 'The speech was long but powerful — it made everyone think about their choices.'",
          solution: "Strength: powerful impact ('made everyone think'). Weakness: possibly too long. Judgment: effective despite length — impact outweighs brevity.",
        },
      },
      questions: [
        {
          id: "mll4-u1-evaluating-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the most important question when evaluating a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is it expensive?" },
              { id: "b", text: "Is it long?" },
              { id: "c", text: "Does it achieve its purpose?" },
              { id: "d", text: "Is it popular?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Purpose", statement: "A text is judged by how well it achieves its purpose." }],
            steps: [{ reasoning: "Criterion A (Analysing): effectiveness = achieves purpose — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Does it achieve its purpose?",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Article",
            author: "Written for Akademik Space",
            text: "The school won the debating championship. The article explains the rules, lists team members, gives the final score, and quotes the captain. It does not mention any previous championships or the team's training.",
          },
          stem: "Evaluate this article: what's its strength and what's missing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation", statement: "Strengths and weaknesses are identified with evidence." }],
            steps: [
              { reasoning: "Criterion A (Analysing): strength — clear facts, quotes, score; weakness — no context (previous wins, training).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the article informs but doesn't contextualize — effective as news but thin as a story.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strength: clear facts and quotes. Weakness: lacks context/history — effective as news, thin as narrative.",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Poem",
            author: "Written for Akademik Space",
            text: "The old tree stands alone\nin the middle of the field.\nIts branches reach for the sky\nbut they never seem to touch it.\nYears pass, and it remains —\nrooted, waiting, still.",
          },
          stem: "Evaluate this poem using at least two criteria (e.g., imagery, impact, originality).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Poetic evaluation", statement: "Poems are judged on imagery, emotional impact and craft." }],
            steps: [
              { reasoning: "Criterion A (Analysing): imagery — 'branches reach for the sky but never touch' creates a poignant image of longing/unreached potential.", evidence: "never seem to touch it", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): impact — 'rooted, waiting, still' creates a mood of patience and endurance.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): originality — the tree-as-metaphor for endurance is somewhat familiar, but the execution is clean.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong imagery and mood ('reach for sky', 'rooted, waiting'); somewhat familiar theme but well executed.",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "State the purpose of this text: 'Attention shoppers! Buy one get one free this weekend!'", marks: 1 },
            { label: "b", prompt: "Evaluate whether it achieves its purpose, using one strength and one weakness.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement that would make it more effective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Purpose evaluation", statement: "Judge by whether the text achieves its aim." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): purpose — to persuade customers to buy.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): strength — 'buy one get one free' is a clear, compelling offer; weakness — no product details, urgency or call to action specifics.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): it partially achieves purpose — grabs attention but lacks detail to convince.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): improvement — add product, deadline and specific call to action.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): explains how the improvement increases effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Persuade to buy. (b) Clear offer but lacks detail — partially effective. (c) Add product, deadline, specific action.",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in evaluating any text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identify its purpose" },
              { id: "b", text: "Check the spelling" },
              { id: "c", text: "Read the reviews" },
              { id: "d", text: "Count the words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluation order", statement: "Identify purpose first — it determines the criteria." }],
            steps: [
              { reasoning: "Criterion A (Analysing): purpose first — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Identify its purpose",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Notice",
            author: "Written for Akademik Space",
            text: "School notice: 'Year 10 students must attend the careers fair on Friday at 2pm in the main hall. Bring your CV if you have one. Refreshments will be provided.'",
          },
          stem: "Evaluate this notice: what is its purpose and is it effective?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Purpose evaluation", statement: "A notice should inform clearly — check completeness and clarity." }],
            steps: [
              { reasoning: "Criterion A (Analysing): purpose — inform Year 10 students about the careers fair.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): effective — gives who, what, when, where and extras; clear and complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose: inform about careers fair. Effective — clear details (who, when, where, what to bring).",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between 'clarity' and 'impact' as evaluation criteria?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clarity = long; impact = short" },
              { id: "b", text: "Clarity = emotion; impact = understanding" },
              { id: "c", text: "Clarity = easy to understand; impact = emotional/intellectual effect" },
              { id: "d", text: "They mean the same thing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaluation criteria", statement: "Clarity = easy to understand; impact = emotional/intellectual effect." }],
            steps: [
              { reasoning: "Criterion A (Analysing): clarity = understandable, impact = affects reader — (a).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): different criteria measuring different qualities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Clarity = easy to understand; impact = emotional/intellectual effect",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Poem",
            author: "Written for Akademik Space",
            text: "Grandmother's house, empty now.\nThe garden still blooms —\nroses nobody tends,\nsunflowers turning to face\nthe sun that no longer matters.",
          },
          stem: "Evaluate this poem using at least two criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Poetic evaluation", statement: "Judge poems on imagery, emotional impact and originality." }],
            steps: [
              { reasoning: "Criterion A (Analysing): imagery — 'roses nobody tends', 'sunflowers turning to face the sun' — vivid, poignant details.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): impact — abandonment and neglect create melancholy; 'empty now' sets grief.", evidence: "Grandmother's house, empty now", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): originality — garden-as-grief metaphor is somewhat familiar but well executed; 'sun that no longer matters' adds depth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong imagery and emotional impact; somewhat familiar theme but skilled execution.",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a weakness in this text? 'The report was very detailed and comprehensive. It covered everything thoroughly.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too detailed" },
              { id: "b", text: "It is too short" },
              { id: "c", text: "It uses vague, repetitive language without specifics" },
              { id: "d", text: "It has too many facts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Specificity", statement: "Effective writing uses specific details, not vague claims." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'very detailed', 'comprehensive', 'everything' are vague — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): repetition of similar claims adds nothing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It uses vague, repetitive language without specifics",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "We stand at a crossroads. Our town is dying — shops closing, young people leaving, the high street emptying year by year. But we have a choice. We can let it die, or we can fight. I say we fight.",
          },
          stem: "Evaluate this speech using at least two criteria (clarity, impact, appropriateness).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Speech evaluation", statement: "Speeches are judged on clarity, emotional impact and call to action." }],
            steps: [
              { reasoning: "Criterion A (Analysing): clarity — 'crossroads', 'dying', 'fight' — simple, direct language appropriate for public speech.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): impact — 'Our town is dying' creates urgency; 'we can fight' offers hope and agency.", evidence: "I say we fight", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): appropriateness — short sentences, repetition of 'we', direct address — suits spoken delivery and community audience.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): weakness — no specific evidence or plan; relies on emotion alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clear, impactful, appropriate for speech — but lacks evidence/specific plan; emotional appeal strong.",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this text and answer all parts.",
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'An absolute triumph! The best film of the decade — every scene a masterpiece, every performance flawless. There is nothing to criticise. Everyone must see this.'",
          },
          parts: [
            { label: "a", prompt: "Identify the purpose of this text.", marks: 1 },
            { label: "b", prompt: "Evaluate its effectiveness using two criteria.", marks: 2 },
            { label: "c", prompt: "Suggest one weakness and one improvement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Review evaluation", statement: "Reviews persuade readers to watch — credibility needs balance and specifics." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): purpose — persuade readers to watch the film.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): impact — 'triumph', 'masterpiece' creates enthusiasm; weakness — 'nothing to criticise', 'everyone must' is unbalanced and unbelievable.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): no specifics — no plot, scenes, performances named — empty praise.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): weakness — one-sided, no evidence, exaggerated claims.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): improvement — add specific details, acknowledge minor flaws, qualify recommendation.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Persuade to watch. (b) Enthusiastic but unbalanced/no specifics. (c) Weakness: empty praise; improvement: add specifics, balance.",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'originality' mean as an evaluation criterion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether the text uses big words" },
              { id: "b", text: "How long the text is" },
              { id: "c", text: "Whether the text says something new or fresh" },
              { id: "d", text: "Whether the text is famous" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Originality", statement: "Originality = saying something new or offering a fresh perspective." }],
            steps: [
              { reasoning: "Criterion A (Analysing): originality = freshness — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Whether the text says something new or fresh",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Explanation",
            author: "Written for Akademik Space",
            text: "Photosynthesis. Plants need sunlight, water and carbon dioxide. They use these to make food (glucose) and oxygen. This happens in the leaves.",
          },
          stem: "Evaluate this explanation: what works well and what could be improved?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Explanatory evaluation", statement: "Good explanations are clear, accurate and appropriately pitched." }],
            steps: [
              { reasoning: "Criterion A (Analysing): strength — clear, simple, accurate basics ('sunlight, water, carbon dioxide' → 'food and oxygen').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): weakness — no detail on process or why it matters; very brief — could add 'chlorophyll' or significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strength: clear basics. Weakness: lacks depth/detail — could expand on process and importance.",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a one-sided evaluation less convincing than a balanced one?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because acknowledging counter-arguments shows fairness and depth" },
              { id: "b", text: "Because balanced reviews cost more" },
              { id: "c", text: "Because one-sided reviews are always wrong" },
              { id: "d", text: "Because balanced evaluations are longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Balanced judgment", statement: "Acknowledging counter-arguments demonstrates fairness and depth." }],
            steps: [
              { reasoning: "Criterion A (Analysing): balance shows fairness — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): one-sided praise/criticism seems biased or unthinking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Because acknowledging counter-arguments shows fairness and depth",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Article",
            author: "Written for Akademik Space",
            text: "School meals are 'a disgrace', says catering manager. 'The government must act immediately — our children deserve better.'",
          },
          stem: "Evaluate this extract. What is its purpose, and how effective is it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasive evaluation", statement: "Judge persuasive texts on evidence, tone and call to action." }],
            steps: [
              { reasoning: "Criterion A (Analysing): purpose — persuade government/public to improve school meals.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): strength — 'a disgrace', 'deserve better' creates emotional urgency; direct call 'must act'.", evidence: "our children deserve better", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): weakness — no evidence for 'disgrace' claim; 'must act immediately' is vague demand without specifics.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): effective emotionally but weak rationally — would persuade sympathisers, not skeptics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose: persuade action on school meals. Effective emotionally ('disgrace', 'deserve better') but lacks evidence.",
          },
        },
        {
          id: "mll4-u1-evaluating-texts-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two text messages.",
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            text: "Message A: 'Reminder: Library books are due back on Friday. Late books incur a 10p fine per day. Please return all items promptly to avoid charges.'\n\nMessage B: 'Hey! Just a heads up — the library books are due Friday. If you're late there's a small fine but no biggie. See you there!'",
          },
          parts: [
            { label: "a", prompt: "Identify the purpose of each message.", marks: 1 },
            { label: "b", prompt: "Compare their register and effectiveness.", marks: 2 },
            { label: "c", prompt: "Which message better achieves its purpose? Explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Register and purpose", statement: "Effective messages match register to context and audience." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): both remind about library book deadline — A formal/official, B casual/friendly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A is formal ('Reminder', 'incur', 'promptly'); B is informal ('Hey', 'heads up', 'no biggie').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A is clearer about consequences ('10p fine per day'); B is friendlier but vaguer ('small fine').", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): depends on audience — A better for official notice; B better for friends; both achieve purpose differently.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): A more precise/informative; B more approachable — effectiveness = fit to context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Remind about deadline. (b) A formal/precise; B casual/friendly. (c) Depends on audience — A for official, B for friends.",
          },
        },
      ],
    },
    {
      id: "mll4-u1-judgment-evidence",
      title: "Justified judgments",
      skill: "Form and defend evaluative judgments using criteria and textual evidence.",
      lesson: {
        sections: [
          {
            heading: "Judgment vs opinion",
            body: "An **opinion** is 'I liked it'. A **judgment** is 'It's effective because the imagery creates vivid images and the structure builds tension'. A judgment uses **criteria** and **evidence** — it's reasoned, not just felt.",
          },
          {
            heading: "The judgment formula",
            body: "State your judgment → give your **reason** → support with **evidence** → acknowledge any **counter-argument**. 'The poem is effective (judgment) because its imagery is vivid (reason) — 'the sky wept silver' creates a strong picture (evidence) — though its theme is familiar (counter).'.",
          },
          {
            heading: "Defending your view",
            body: "Expect to be challenged. Know **why** you think what you think — which criteria matter most to you? Be ready to explain with evidence. A weak defense ('because I said so') loses; a strong one ('the evidence shows...') persuades.",
          },
        ],
        keyFormulas: [
          { name: "Judgment structure", statement: "Judgment → Reason → Evidence → Acknowledge counter-argument." },
        ],
        workedExample: {
          problem: "Defend: 'Poem A is better than Poem B.'",
          solution: "Poem A is more effective because its precise verbs ('darted', 'whispered') create clearer images than B's general words ('went', 'said'), making the scene more vivid for the reader.",
        },
      },
      questions: [
        {
          id: "mll4-u1-judgment-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a judgment different from an opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opinions are always wrong" },
              { id: "b", text: "Judgments use criteria and evidence" },
              { id: "c", text: "Judgments are about facts" },
              { id: "d", text: "Judgments are always longer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Judgment", statement: "A judgment is a reasoned evaluation using criteria and evidence." }],
            steps: [{ reasoning: "Criterion A (Analysing): judgment = criteria + evidence — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Judgments use criteria and evidence",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Turn this opinion into a judgment: 'I think the ending was good.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment", statement: "Add criteria and evidence to support the evaluation." }],
            steps: [
              { reasoning: "Criterion A (Analysing): e.g. 'The ending was effective because it resolved the central conflict and left the reader with a clear emotional conclusion.'", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): includes criteria (resolution, emotional impact) and implies evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'The ending was effective — it resolved the central conflict and gave the reader a clear emotional conclusion.'",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Responses",
            author: "Written for Akademik Space",
            text: "Student A: 'I liked the story. It was good.'\n\nStudent B: 'The story was effective because the first-person narrator created intimacy, though the ending felt rushed — three events were resolved in one paragraph.'",
          },
          stem: "Which response is a stronger evaluation? Explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation quality", statement: "Specific criteria + evidence = strong evaluation; vague praise = weak." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Student B's response identifies specific techniques ('first-person narrator', 'intimacy') and a specific weakness ('ending felt rushed').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Student A's 'liked it, it was good' gives no criteria or evidence — it's an opinion, not a judgment.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B's response is balanced (strength + weakness) and uses evidence — stronger evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Student B — uses specific criteria, identifies techniques, and balances strengths/weaknesses with evidence.",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "State a judgment about a text you've read (e.g., 'the poem is effective').", marks: 1 },
            { label: "b", prompt: "Give one reason supporting your judgment.", marks: 1 },
            { label: "c", prompt: "Support it with a quotation or specific detail.", marks: 2 },
            { label: "d", prompt: "Acknowledge one counter-argument or weakness.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment structure", statement: "Judgment → reason → evidence → counter-argument." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): a clear judgment stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): a reason — e.g. 'because its imagery is vivid'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): a quotation or specific detail supporting the reason.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion D (Using language): quotation accurately cited or detail precisely described.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion A (Analysing): a counter-argument acknowledged — shows balance and depth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Judgment + reason + evidence (quotation) + counter-argument — a complete evaluative response.",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first element of a strong evaluative judgment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A summary" },
              { id: "b", text: "A quotation" },
              { id: "c", text: "A clear judgment statement" },
              { id: "d", text: "A counter-argument" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment structure", statement: "Judgment → reason → evidence → counter-argument." }],
            steps: [
              { reasoning: "Criterion A (Analysing): judgment comes first — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A clear judgment statement",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Turn this opinion into a judgment: 'The poem was nice.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment", statement: "Add criteria and evidence to support the evaluation." }],
            steps: [
              { reasoning: "Criterion A (Analysing): e.g. 'The poem was effective because its imagery created vivid pictures and its structure built emotional tension.'", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): includes criteria (imagery, structure) and implies evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'The poem was effective — its imagery created vivid pictures and its structure built emotional tension.'",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is 'I liked it' weaker than 'It was effective because...'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it's shorter" },
              { id: "b", text: "Because opinions are always wrong" },
              { id: "c", text: "Because 'effective' is a bigger word" },
              { id: "d", text: "Because 'I liked it' gives no criteria or evidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment vs opinion", statement: "Opinions state preference; judgments give reasons and evidence." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'I liked it' = preference, no reasoning — (a).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'effective because...' uses criteria and evidence — reasoned evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Because 'I liked it' gives no criteria or evidence",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Responses",
            author: "Written for Akademik Space",
            text: "Student A: 'The film was boring and too long.'\n\nStudent B: 'The film's pacing dragged in the middle act — the subplot about the sister could have been cut — though the final scene was powerful.'",
          },
          stem: "Compare these two responses. Which is a stronger evaluation and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation quality", statement: "Specific criticism with evidence beats vague judgment." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is vague — 'boring', 'too long' with no specifics.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B identifies specific weakness ('middle act', 'subplot') and acknowledges strength ('final scene was powerful').", evidence: "the subplot about the sister could have been cut", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is balanced and evidence-based — stronger evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Student B — specific evidence, balanced view vs A's vague criticism.",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a counter-argument in evaluative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An argument against your own judgment" },
              { id: "b", text: "A strong argument" },
              { id: "c", text: "A summary" },
              { id: "d", text: "A quotation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Counter-argument", statement: "An opposing view acknowledged to strengthen your judgment." }],
            steps: [
              { reasoning: "Criterion A (Analysing): counter-argument = opposing view — (a).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): acknowledging it shows balance and strengthens credibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** An argument against your own judgment",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Claim",
            author: "Written for Akademik Space",
            text: "Student A: 'The book is amazing.'\n\nStudent B: 'The book is effective because the first-person narrator creates intimacy — we experience events through her eyes — though the ending feels rushed, resolving three conflicts in one page.'",
          },
          stem: "Defend or critique Student B's evaluation. Is it a strong judgment? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment evaluation", statement: "Strong judgments identify techniques, cite evidence and acknowledge weaknesses." }],
            steps: [
              { reasoning: "Criterion A (Analysing): B identifies specific technique ('first-person narrator') and its effect ('intimacy').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B cites evidence ('her eyes') and acknowledges weakness ('ending feels rushed').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): balanced, evidence-based — strong judgment; could strengthen by quoting specific lines.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A's 'amazing' is pure opinion — no criteria, no evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "B's evaluation is strong — technique + evidence + balance; A is just opinion.",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this claim and answer all parts.",
          extract: {
            title: "The Judgment",
            author: "Written for Akademik Space",
            text: "'Poem A is better than Poem B because its precise verbs create clearer images.'",
          },
          parts: [
            { label: "a", prompt: "Identify the judgment being made.", marks: 1 },
            { label: "b", prompt: "State the reason given.", marks: 1 },
            { label: "c", prompt: "Suggest what evidence would strengthen this judgment.", marks: 2 },
            { label: "d", prompt: "Suggest one counter-argument.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment structure", statement: "Judgment → reason → evidence → counter-argument." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): judgment — Poem A is better than Poem B.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): reason — precise verbs create clearer images.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): evidence — quote specific verbs from both poems and compare their vividness.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): e.g. 'A uses darted/whispered vs B's went/said' — concrete comparison.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A (Analysing): counter — Poem B might have better imagery in other aspects, or A's precision might feel cold.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A better than B. (b) Precise verbs. (c) Quote and compare specific verbs. (d) B may excel elsewhere.",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'evidence' mean in an evaluative judgment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's biography" },
              { id: "b", text: "A summary of the plot" },
              { id: "c", text: "Specific details or quotations from the text supporting your claim" },
              { id: "d", text: "Your personal opinion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Evidence", statement: "Evidence = specific details/quotations supporting an evaluative claim." }],
            steps: [
              { reasoning: "Criterion A (Analysing): evidence = textual support — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Specific details or quotations from the text supporting your claim",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student writes: 'The ending was bad because I didn't like it.' Why is this a weak judgment?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment quality", statement: "Weak judgments give no criteria or evidence — just preference." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'bad' is vague — no criterion (what makes an ending bad?).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'I didn't like it' is personal preference, not analysis — no evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak — no criteria, no evidence, just personal dislike.",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the strongest evaluative statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I think the poem was okay.'" },
              { id: "b", text: "'The poem was effective — its imagery was vivid, though its message was unclear.'" },
              { id: "c", text: "'The poem was very good.'" },
              { id: "d", text: "'The poem was written in 1999.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment quality", statement: "Strong judgments use criteria, evidence and balance." }],
            steps: [
              { reasoning: "Criterion A (Analysing): (c) gives criteria ('imagery vivid') and acknowledges weakness ('message unclear').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): others are vague or factual without evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The poem was effective — its imagery was vivid, though its message was unclear.",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Debate",
            author: "Written for Akademik Space",
            text: "Student A: 'Text A is better. It has more emotion.'\n\nStudent B: 'Text A is more effective for its purpose because its first-person narration creates intimacy — we feel the character's fear directly. Text B's third-person distance makes us observe rather than experience. However, Text B's ending is more original.'",
          },
          stem: "Evaluate Student B's judgment. Is it stronger than Student A's? Explain using criteria and evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment comparison", statement: "Strong judgments identify purpose, technique, effect and acknowledge counter-arguments." }],
            steps: [
              { reasoning: "Criterion A (Analysing): B identifies purpose ('effective for its purpose'), technique ('first-person narration'), and effect ('feel the fear directly').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B acknowledges counter-argument ('Text B's ending is more original') — balanced.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A's 'more emotion' is vague — no technique identified, no evidence, no acknowledgment of B's strengths.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is stronger — structured judgment with criteria, technique analysis and balance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Student B stronger — purpose + technique + effect + counter-argument vs A's vague 'more emotion'.",
          },
        },
        {
          id: "mll4-u1-judgment-evidence-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts about this evaluative claim.",
          extract: {
            title: "The Claim",
            author: "Written for Akademik Space",
            text: "'The novel's ending is more powerful than the film's because it leaves the protagonist's fate ambiguous.'",
          },
          parts: [
            { label: "a", prompt: "Identify the judgment and its reason.", marks: 1 },
            { label: "b", prompt: "Suggest one piece of evidence that would support this claim.", marks: 2 },
            { label: "c", prompt: "Suggest one counter-argument and how to respond to it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Judgment defence", statement: "Support judgments with evidence; prepare counter-arguments." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): judgment — novel's ending more powerful; reason — ambiguity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): evidence — quote the novel's final lines showing ambiguity vs film's explicit resolution.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): e.g. 'the door closed but we never learn if she entered' — textual support.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): counter — film's ending might be more emotionally satisfying or visually powerful.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): response — ambiguity invites interpretation; film must choose one, limiting meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Novel ending better; reason ambiguity. (b) Quote ambiguous final lines. (c) Counter: film more satisfying; response: ambiguity richer.",
          },
        },
      ],
    },
  ],
};
