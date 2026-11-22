import type { Lesson } from "../../../types.ts";

const harbourExtract = {
  title: "Letters from the Harbour",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "My dear Priya,\n\nYou asked me to tell you about the harbour before it changes completely, so here is what I see each morning from my window. The fishing fleet is half its old size. Where twenty boats once crowded the quay, nine remain, their nets hanging like sleeping bats to dry. The old chandlery — the shop that sold rope and tar and coffee to sailors — is now a café selling smoothies to tourists.\n\nYet not everything is loss. The council has restored the lighthouse, and on calm evenings its beam still sweeps across the water exactly as it did when my grandfather kept watch there. The new ferry terminal, ugly as it is, brings visitors who actually buy fish from the market instead of photographing it.\n\nI do not know whether I am watching a place die or a place learn to be something new. Perhaps both. Write back soon — the tide waits for no one.\n\nWith love,\nDaniel",
};

const robotExtract = {
  title: "The School Robot",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Unit 7 had been in the school corridor cupboard for six months before anyone decided what to do with it. It was a tall grey machine with a single camera eye and arms designed, apparently, for carrying boxes in a warehouse.\n\nWhen the head teacher finally wheeled it into Room 4B, the children invented a name for it within a minute: BOLT. It could not speak, but it could fetch, carry, photograph the whiteboard and plug itself in when its battery ran low. The teachers used it to collect homework. The children used it to impress their parents.\n\nIn November a power cut hit the school for an hour. The lights died, the laptops slept — and for the first time anyone could remember, Room 4B was completely quiet. Nobody knew what to do with the sudden stillness.\n\nWhen the power returned, BOLT rolled back into the cupboard on its own, as if it had decided the experiment was over. It never came out again.",
};

export const lesson12: Lesson = {
  id: "cile-u1-lesson-1-2",
  code: "1-2",
  title: "Summarising and main ideas",
  goal: "I CAN identify the main idea of a text and summarise it accurately without copying the original wording.",
  standards: ["0861 Reading: summarising and selecting key points"],
  vocabulary: [
    { term: "Main idea", definition: "The central point or message a text is built around." },
    { term: "Topic sentence", definition: "The sentence (often first) that states the paragraph's main point." },
    { term: "Summary", definition: "A much shorter version of a text that keeps only the essential points." },
    { term: "Key detail", definition: "A fact or example needed to support the main idea." },
    { term: "Subordinate point", definition: "A supporting idea that matters less than the main idea." },
    { term: "Paraphrase", definition: "Restating something in your own words without changing its meaning." },
  ],
  concepts: [
    {
      id: "cile-u1-main-idea",
      title: "Identifying the main idea",
      skill: "Distinguish the main idea from supporting detail and identify topic sentences in paragraphs.",
      lesson: {
        sections: [
          {
            heading: "Main idea vs detail",
            body: "Every paragraph usually has one **main idea** supported by **details**. The main idea answers 'what is this paragraph mostly about?'; details answer 'how do we know?'\n\n- **Topic sentence**: often the first or last sentence of a paragraph; it states the main idea directly.\n- **Examples and evidence**: specific facts, quotes, descriptions — necessary but not the main idea.\n- A text's **overall main idea** is bigger than any single paragraph: ask what the whole piece is arguing or describing.",
          },
          {
            heading: "Traps when identifying main ideas",
            body: "- **Detail that sounds important**: a striking quotation may be evidence, not the main idea.\n- **First line bias**: the opening line of a text can be an attention-grabber, not the thesis.\n- **Personal response**: 'I liked it' is your reaction, not the text's main idea.",
          },
        ],
        keyFormulas: [
          { name: "Main idea test", statement: "If you removed all the details, the main idea would still make sense — and every detail would still support it." },
        ],
        workedExample: {
          problem: "Paragraph: 'The fishing fleet is half its old size. Where twenty boats once crowded the quay, nine remain.' What is the main idea?",
          solution: "Main idea: the harbour's fishing industry has declined. 'Half its old size' and 'nine remain' are supporting details giving evidence of the decline.",
        },
      },
      questions: [
        {
          id: "cile-u1-mainidea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "What is the main idea of the whole letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The lighthouse is beautiful" },
              { id: "b", text: "Daniel should move away from the harbour" },
              { id: "c", text: "The harbour is changing, with both losses and gains" },
              { id: "d", text: "Tourists are ruining the fish market" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "The central point the whole text builds around — here, change with mixed outcomes." },
            ],
            steps: [
              { reasoning: "The letter weighs losses (boats, chandlery) against gains (lighthouse, ferry).", working: "\\text{losses and gains}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The harbour is changing, with both losses and gains",
            commonErrors: ["Choosing (c) — tourists buying fish is presented as a gain, not a problem."],
          },
        },
        {
          id: "cile-u1-mainidea-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: harbourExtract,
          stem: "State the topic sentence (or main point) of the second paragraph: 'Yet not everything is loss.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "The sentence stating the paragraph's controlling idea." },
            ],
            steps: [
              { reasoning: "The paragraph lists gains: restored lighthouse, ferry bringing real customers.", working: "\\text{lighthouse; ferry visitors}", marks: 1, markCode: "AO2" },
              { reasoning: "Main point: the harbour also has positive changes.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Some aspects of the harbour are improving — the lighthouse is restored and the new ferry brings genuine visitors.",
            commonErrors: ["Quoting only one detail (e.g. the lighthouse) instead of the paragraph's combined point."],
          },
        },
        {
          id: "cile-u1-mainidea-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: harbourExtract,
          stem: "Daniel writes: 'I do not know whether I am watching a place die or a place learn to be something new.' Explain how this sentence relates to the main idea of the letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ambiguity", statement: "A deliberately unresolved either/or can encapsulate a text's central tension." },
            ],
            steps: [
              { reasoning: "The sentence weighs decline ('die') against transformation ('something new').", working: "\\text{die vs something new}", marks: 1, markCode: "AO2" },
              { reasoning: "This mirrors the whole letter, which lists losses and gains.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclude it states the main idea as an open question.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It captures the letter's central tension — the harbour may be declining or reinventing itself — so it acts as the text's main idea in question form.",
            commonErrors: ["Treating it as a literal question Daniel needs answered rather than the letter's theme."],
          },
        },
        {
          id: "cile-u1-mainidea-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: robotExtract,
          stem: "The extract describes a robot's brief career in a classroom.",
          parts: [
            { label: "a", prompt: "State the main idea of the second paragraph.", marks: 2 },
            { label: "b", prompt: "State two details that support that main idea.", marks: 2 },
            { label: "c", prompt: "What is the main idea of the whole extract?", marks: 2 },
            { label: "d", prompt: "Explain why the final sentence ('It never came out again') matters to the main idea.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "Paragraph main idea: the robot became a fixture of classroom life; whole-text idea: its novelty faded once people adapted." },
            ],
            steps: [
              { part: "a", reasoning: "Paragraph 2 shows BOLT becoming part of daily routine.", working: "\\text{part of routine}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "State it clearly.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Detail: teachers used it to collect homework.", working: "\\text{collect homework}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Detail: children used it to impress parents / it fetched, carried, photographed.", working: "\\text{impress parents}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Whole extract: brief novelty followed by quiet abandonment.", working: "\\text{novelty then abandonment}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "State it as a complete sentence.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "The ending shows people preferred quiet — the robot's purpose ended.", working: "\\text{quiet preferred}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Link: confirms the theme that novelty fades once routine reasserts itself.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) BOLT became part of the classroom routine (b) homework collection; impressing parents (c) the robot's novelty was short-lived and it was quietly abandoned (d) it confirms people preferred stillness — novelty faded",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Both details accurately stated.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One or no valid detail.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Main idea accurately identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or incorrect.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Explains the ending's link to the theme.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No link made.", part: "d" },
            ],
            commonErrors: ["In (c) summarising only paragraph 2 instead of the whole extract."],
          },
        },
        {
          id: "cile-u1-mainidea-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "According to the letter, how many boats remain in the harbour?",
          response: { type: "numeric", parts: [{ label: "Boats remaining", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Supporting detail", statement: "'Where twenty boats once crowded the quay, nine remain' — the number proves the fleet's decline." },
            ],
            steps: [
              { reasoning: "The letter states twenty boats once crowded the quay and nine remain.", working: "9", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "9",
            commonErrors: ["Answering 20 — that was the old number, not what remains."],
          },
        },
        {
          id: "cile-u1-mainidea-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "A student claims the main idea of the letter is 'the lighthouse is beautiful'. Which statement best corrects this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main idea is that Daniel loves boats." },
              { id: "b", text: "The lighthouse is the main idea because it is mentioned last." },
              { id: "c", text: "The lighthouse is only a supporting detail; the main idea is that the harbour is changing." },
              { id: "d", text: "The letter has no main idea." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea vs detail", statement: "A striking detail is not the main idea; the lighthouse is one example of change." },
            ],
            steps: [
              { reasoning: "The letter weighs many losses and gains; the lighthouse is one gain among several.", working: "\\text{lighthouse = one gain}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** The lighthouse is only a supporting detail; the main idea is that the harbour is changing.",
            commonErrors: ["Choosing (b) — position in the text does not make a detail the main idea."],
          },
        },
        {
          id: "cile-u1-mainidea-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: robotExtract,
          stem: "State the main idea of the third paragraph (the power-cut paragraph).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paragraph main idea", statement: "What the paragraph is mostly about, not its individual details." },
            ],
            steps: [
              { reasoning: "The paragraph describes the lights and laptops dying, leaving an unfamiliar silence.", working: "\\text{unfamiliar silence}", marks: 1, markCode: "AO2" },
              { reasoning: "Main idea: the class experienced a strange quiet they did not know how to handle.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The power cut removed all noise and technology, leaving Room 4B in a silence nobody knew how to handle.",
            commonErrors: ["Answering 'the power went out' — that is the event, not the paragraph's main idea."],
          },
        },
        {
          id: "cile-u1-mainidea-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: harbourExtract,
          stem: "State the main idea of the second paragraph ('Yet not everything is loss') and give one detail that supports it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "The sentence stating the paragraph's controlling idea; details then support it." },
            ],
            steps: [
              { reasoning: "Main idea: parts of the harbour are improving as well as declining.", working: "\\text{gains exist too}", marks: 1, markCode: "AO2" },
              { reasoning: "Valid detail: the restored lighthouse, or the ferry bringing real customers.", working: "\\text{lighthouse; ferry}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Main idea: the harbour also has positive changes. Detail: e.g. the council restored the lighthouse / the ferry brings visitors who buy fish.",
            commonErrors: ["Giving only a detail without stating the paragraph's main idea."],
          },
        },
        {
          id: "cile-u1-mainidea-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "How many of these statements state a MAIN IDEA rather than a supporting detail? 'The harbour is changing in ways Daniel cannot yet judge.' 'The fishing fleet is half its old size.' 'Daniel is unsure whether the place is dying or becoming something new.' 'The letter weighs losses against gains.'",
          response: { type: "numeric", parts: [{ label: "Main idea statements", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea vs detail", statement: "The fleet's size is evidence for the idea of decline, not the idea itself." },
            ],
            steps: [
              { reasoning: "Three statements state or paraphrase the overall main idea; 'the fleet is half its old size' is a measurable detail.", working: "3", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting all four — the fleet statistic is a supporting detail."],
          },
        },
        {
          id: "cile-u1-mainidea-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: harbourExtract,
          stem: "Explain how the detail 'the chandlery ... is now a café selling smoothies to tourists' supports the letter's main idea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Compressed contrast", statement: "One detail can carry both a loss and a gain, efficiently evidencing a main idea." },
            ],
            steps: [
              { reasoning: "The chandlery was part of the old working harbour; the café is part of the new tourist harbour.", working: "\\text{old vs new}", marks: 1, markCode: "AO2" },
              { reasoning: "This single fact shows both decline (traditional trade gone) and change (tourism arrived).", working: "\\text{decline + tourism}", marks: 1, markCode: "AO2" },
              { reasoning: "It therefore evidences the main idea that the harbour is changing with mixed outcomes.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The detail compresses loss and gain into one image — a working harbour shop replaced by a tourist café — so it efficiently evidences the main idea of change with mixed outcomes.",
            commonErrors: ["Saying only 'it shows the harbour changed' without explaining the loss/gain contrast."],
          },
        },
        {
          id: "cile-u1-mainidea-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: robotExtract,
          stem: "Write a topic sentence for a paragraph describing how the class responded to BOLT.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "A sentence that states the paragraph's main point and controls the details that follow." },
            ],
            steps: [
              { reasoning: "Topic sentence must capture the idea that the class adopted BOLT quickly and enthusiastically.", working: "\\text{rapid adoption}", marks: 1, markCode: "AO2" },
              { reasoning: "Sentence is grammatically complete and general enough to cover the paragraph's details.", marks: 1, markCode: "AO2" },
              { reasoning: "Phrased in the student's own words rather than copied.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'BOLT was embraced by the class almost immediately, with teachers and children finding different uses for it.'",
            commonErrors: ["Writing a detail ('The children named it BOLT') instead of a controlling topic sentence."],
          },
        },
        {
          id: "cile-u1-mainidea-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: robotExtract,
          stem: "What is the main idea of the whole extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A warehouse robot was too big for a classroom" },
              { id: "b", text: "A power cut destroyed a school robot" },
              { id: "c", text: "Children should not name machines" },
              { id: "d", text: "A robot's brief popularity ended when people realised they preferred quiet" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "The central point the whole text builds around — novelty, then quiet abandonment." },
            ],
            steps: [
              { reasoning: "The extract traces BOLT's rise, the revealing silence, and its permanent removal.", working: "\\text{rise then removal}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** A robot's brief popularity ended when people realised they preferred quiet",
            commonErrors: ["Choosing (d) — the power cut did not destroy BOLT; it ended its usefulness."],
          },
        },
        {
          id: "cile-u1-mainidea-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "How many boats once crowded the quay, according to the letter?",
          response: { type: "numeric", parts: [{ label: "Original number of boats", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Detail", statement: "A specific fact used as evidence for a main idea." },
            ],
            steps: [
              { reasoning: "The letter says twenty boats once crowded the quay.", working: "20", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "20",
            commonErrors: ["Answering 9 — that is how many remain, not how many once crowded the quay."],
          },
        },
        {
          id: "cile-u1-mainidea-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: harbourExtract,
          stem: "Compare the main idea of the first paragraph with that of the last paragraph. How do they differ and how are they connected?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "Each paragraph has its own main idea; together they build the whole-text idea." },
            ],
            steps: [
              { reasoning: "First paragraph's main idea: the harbour has visibly declined (fewer boats, chandlery gone).", working: "\\text{decline}", marks: 1, markCode: "AO2" },
              { reasoning: "Last paragraph's main idea: Daniel cannot tell whether this is death or reinvention.", working: "\\text{die or something new}", marks: 1, markCode: "AO2" },
              { reasoning: "They differ: the first states observed loss; the last states unresolved judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "Connection: the uncertainty in the last paragraph is made possible by the evidence of change in the first.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Paragraph 1's main idea is observable decline; the last paragraph's is Daniel's uncertainty about whether decline means death or reinvention — the evidence of change leads to the open question.",
            commonErrors: ["Treating both paragraphs as having the same main idea without distinguishing evidence from judgement."],
          },
        },
        {
          id: "cile-u1-mainidea-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: robotExtract,
          stem: "The extract describes a robot's time in a classroom.",
          parts: [
            { label: "a", prompt: "State the main idea of the first paragraph.", marks: 2 },
            { label: "b", prompt: "Give two details from the second paragraph that show BOLT became part of school life.", marks: 2 },
            { label: "c", prompt: "What does 'invented a name for it within a minute' suggest about how quickly BOLT was accepted?", marks: 2 },
            { label: "d", prompt: "Explain how the main idea of the whole extract differs from the main idea of any single paragraph.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "Paragraph ideas are local; the whole-text idea is the arc they build together." },
            ],
            steps: [
              { part: "a", reasoning: "BOLT spent six months unused in a cupboard before anyone decided its purpose.", working: "\\text{six months unused}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "State it as a complete sentence.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Detail: teachers used it to collect homework.", working: "\\text{collect homework}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Detail: children used it to impress parents / it fetched, carried, photographed the board.", working: "\\text{impress parents}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Naming shows instant, enthusiastic adoption — the class claimed it as theirs.", working: "\\text{instant ownership}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It signals the robot's rapid integration into classroom culture.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Single paragraphs cover stages: storage, adoption, quiet, removal.", working: "\\text{stages}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Whole-text idea: novelty was brief and quietly abandoned once people preferred stillness.", working: "\\text{novelty fades}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: the whole idea is larger than any one paragraph's point.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) BOLT lay unused for six months before the school decided what to do with it (b) e.g. collecting homework; impressing parents (c) it shows instant, enthusiastic adoption (d) paragraphs give stages; the whole extract is about brief novelty ending in quiet abandonment",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Paragraph main idea accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or incorrect.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid supporting details.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or invented details.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Interprets the naming detail accurately.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Literal reading only.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear distinction between paragraph and whole-text ideas.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial distinction.", part: "d" },
            ],
            commonErrors: ["In (d) repeating a single paragraph's main idea as the whole-text idea."],
          },
        },
        {
          id: "cile-u1-mainidea-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: harbourExtract,
          stem: "You are analysing 'Letters from the Harbour'.",
          parts: [
            { label: "a", prompt: "State the main idea of the first paragraph.", marks: 2 },
            { label: "b", prompt: "State two details that support that main idea.", marks: 2 },
            { label: "c", prompt: "What is the main idea of the whole letter?", marks: 2 },
            { label: "d", prompt: "Explain the effect of ending with 'the tide waits for no one'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "Whole-text main idea: the harbour is changing with both losses and gains, and Daniel cannot yet judge which dominates." },
            ],
            steps: [
              { part: "a", reasoning: "The harbour has visibly declined: the fleet is half its size and the chandlery is gone.", working: "\\text{visible decline}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Stated as a complete sentence.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Detail: twenty boats reduced to nine.", working: "\\text{twenty to nine}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Detail: the chandlery is now a smoothie café.", working: "\\text{chandlery to cafe}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Whole letter: change with mixed outcomes — losses and gains — unresolved.", working: "\\text{mixed change}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurately captures both decline and improvement.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "The tide image echoes time passing and change being unstoppable.", working: "\\text{tide = time/change}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It reinforces the theme of inevitable transformation and urges a prompt reply.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) the harbour has visibly declined (b) twenty boats to nine; chandlery now a café (c) the harbour is changing with both losses and gains (d) the tide image stresses unstoppable change and adds urgency to 'write back soon'",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Paragraph main idea accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or incorrect.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid supporting details.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or invented details.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Whole-letter main idea captures losses and gains.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One-sided or vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Explains the closing image's link to theme.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid explanation.", part: "d" },
            ],
            commonErrors: ["In (c) giving only the decline and ignoring the gains."],
          },
        },
      ],
    },
    {
      id: "cile-u1-summarising",
      title: "Summarising",
      skill: "Condense a text to its essential points in your own words, keeping names, numbers and key relationships.",
      lesson: {
        sections: [
          {
            heading: "How to summarise",
            body: "A summary keeps the **skeleton** of a text: main ideas and the few details needed to make them clear. It removes examples, repetition, description and opinion.\n\n- **Keep**: who, what happened, the outcome, key numbers or names.\n- **Cut**: adjectives, anecdotes, quotations used only for colour, your own reactions.\n- **Paraphrase**: never copy whole sentences; rewrite in your own words.",
          },
          {
            heading: "Common summary mistakes",
            body: "- **Too long**: if your summary is more than a third of the original, it is not a summary.\n- **Too short**: cutting the outcome or the main point makes it useless.\n- **Adding opinions**: a summary reports the text; it does not review it.\n- **Copying**: lifted phrases suggest you have not understood the text.",
          },
        ],
        keyFormulas: [
          { name: "Summary formula", statement: "Who + what happened + outcome, in your own words, at roughly a third of the original length." },
        ],
        workedExample: {
          problem: "Summarise the first paragraph of 'Letters from the Harbour' in one sentence.",
          solution: "Daniel describes how the harbour has declined: the fishing fleet has shrunk from twenty boats to nine and the old chandlery is now a smoothie café.",
        },
      },
      questions: [
        {
          id: "cile-u1-summary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: robotExtract,
          stem: "Which of these is the BEST one-sentence summary of the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A robot named BOLT was brought into a classroom, became popular, and was put away after a power cut revealed everyone preferred quiet." },
              { id: "b", text: "A power cut caused chaos in Room 4B." },
              { id: "c", text: "Children named a warehouse robot BOLT." },
              { id: "d", text: "A robot was found in a cupboard and never used." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Keeps who, what happened and the outcome; drops detail and opinion." },
            ],
            steps: [
              { reasoning: "Only (a) covers the whole arc: arrival, popularity, quiet ending.", working: "\\text{full arc}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A robot named BOLT was brought into a classroom, became popular, and was put away after a power cut revealed everyone preferred quiet.",
            commonErrors: ["Choosing (d) — true but covers only the naming moment, not the whole extract."],
          },
        },
        {
          id: "cile-u1-summary-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: harbourExtract,
          stem: "Summarise the final paragraph of the letter in one sentence, using your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Keep the main idea; cut description; paraphrase." },
            ],
            steps: [
              { reasoning: "The paragraph weighs decline against reinvention and ends with a call to write back.", working: "\\text{die or something new}", marks: 1, markCode: "AO2" },
              { reasoning: "Paraphrase into one sentence without copying phrases.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Daniel is unsure whether the harbour is dying or reinventing itself, and urges Priya to reply soon.",
            commonErrors: ["Copying 'a place die or a place learn to be something new' verbatim instead of paraphrasing."],
          },
        },
        {
          id: "cile-u1-summary-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: robotExtract,
          stem: "A student summarises the extract as: 'A robot helped a class with homework until the electricity failed.' Identify two ways this summary is inadequate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary criteria", statement: "Must keep the main idea and outcome; must not distort or omit the ending." },
            ],
            steps: [
              { reasoning: "It omits the outcome: the power cut showed people preferred quiet and BOLT was never used again.", working: "\\text{omits outcome}", marks: 1, markCode: "AO2" },
              { reasoning: "It omits the build-up: six months in storage, naming, teachers and children adopting it.", working: "\\text{omits build-up}", marks: 1, markCode: "AO2" },
              { reasoning: "It implies the robot was still wanted; the extract's point is its quiet abandonment.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It leaves out the ending (BOLT was put away for good after the power cut revealed everyone preferred quiet) and the build-up of its adoption; it also wrongly implies the robot remained useful.",
            commonErrors: ["Saying only 'it is too short' without explaining what essential content is missing."],
          },
        },
        {
          id: "cile-u1-summary-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: harbourExtract,
          stem: "You have been asked to summarise 'Letters from the Harbour' for a class newsletter.",
          parts: [
            { label: "a", prompt: "Write a one-sentence summary of the whole letter.", marks: 3 },
            { label: "b", prompt: "List the two losses and two gains Daniel mentions.", marks: 2 },
            { label: "c", prompt: "Explain why 'the chandlery is now a café' is a good detail to include in a summary.", marks: 2 },
            { label: "d", prompt: "State one thing you should NOT include in the summary and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Who/what/outcome in own words; keep key contrasts, cut colour." },
            ],
            steps: [
              { part: "a", reasoning: "One sentence covering change, losses and gains.", working: "\\text{harbour changing; losses and gains}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Paraphrased, not copied.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate and complete.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Losses: fewer fishing boats (twenty to nine); chandlery became a café.", working: "\\text{boats; chandlery}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Gains: restored lighthouse; ferry brings real customers.", working: "\\text{lighthouse; ferry}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It compresses a whole change into one image — decline and tourism in a single fact.", working: "\\text{compressed contrast}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Essential, not decorative detail.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Exclude e.g. the lighthouse beam 'sweeping as it did when my grandfather kept watch' — colour, not core point.", working: "\\text{colour detail}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Justify: summaries cut description that does not carry the main idea.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) e.g. 'Daniel describes the harbour changing: its fishing fleet has shrunk and old shops have become tourist cafés, though the restored lighthouse and new ferry bring some gains.' (b) losses: boats twenty→nine, chandlery→café; gains: lighthouse restored, ferry visitors (c) it compresses decline-and-tourism into one essential fact (d) e.g. the grandfather lighthouse memory — atmospheric colour, not core",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Accurate one-sentence summary in own words covering the whole letter.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Covers part of the letter or copies phrasing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "All four points correctly identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or confused points.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explains the detail's summarising value.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "No valid justification.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Identifies excludable material and justifies the cut.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid exclusion.", part: "d" },
            ],
            commonErrors: ["In (a) writing a list of details rather than a connected sentence."],
          },
        },
        {
          id: "cile-u1-summary-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: robotExtract,
          stem: "How many months did BOLT sit unused in the cupboard before the school decided what to do with it?",
          response: { type: "numeric", parts: [{ label: "Months unused", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Keep who/what/outcome; paraphrase; cut description." },
            ],
            steps: [
              { reasoning: "The first paragraph states Unit 7/BOLT spent six months in a cupboard.", working: "6", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering with a different number — the text says six months."],
          },
        },
        {
          id: "cile-u1-summary-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "How many of these details should be CUT from a summary of the letter? 'The fleet shrank from twenty boats to nine.' 'The chandlery is now a smoothie café.' 'The lighthouse beam sweeps as it did when my grandfather kept watch.' 'Daniel is unsure whether the harbour is dying or changing.'",
          response: { type: "numeric", parts: [{ label: "Details to cut", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary criteria", statement: "Cut description and personal colour; keep key facts and the outcome." },
            ],
            steps: [
              { reasoning: "Only the grandfather lighthouse memory is atmospheric colour; the other three carry the main idea.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting the boat and chandlery facts — both are essential evidence of change."],
          },
        },
        {
          id: "cile-u1-summary-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: robotExtract,
          stem: "Summarise the first paragraph of the extract in one sentence using your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Keep who/what/outcome; paraphrase; cut description." },
            ],
            steps: [
              { reasoning: "Paragraph 1: Unit 7 sat unused in a cupboard for six months; it was designed for warehouse work.", working: "\\text{unused; warehouse design}", marks: 1, markCode: "AO2" },
              { reasoning: "One paraphrased sentence, not copied wording.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "A warehouse robot called Unit 7 spent six months in a school cupboard before anyone decided what to do with it.",
            commonErrors: ["Copying 'a tall grey machine with a single camera eye' — description, not needed."],
          },
        },
        {
          id: "cile-u1-summary-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: harbourExtract,
          stem: "A student writes: 'Daniel's letter says the harbour has problems but also some good things.' Give two ways to improve this summary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary criteria", statement: "A summary must be specific enough to be useful and must paraphrase." },
            ],
            steps: [
              { reasoning: "Problem 1: too vague — 'problems' and 'good things' name no actual points.", working: "\\text{too vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Problem 2: could be improved by naming specifics — fewer boats, chandlery→café, restored lighthouse, ferry.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It is too vague — it should name the actual points: the shrinking fleet and lost chandlery (problems) versus the restored lighthouse and new ferry (gains).",
            commonErrors: ["Saying only 'make it longer' without identifying what specific content is missing."],
          },
        },
        {
          id: "cile-u1-summary-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "How many distinct points (losses and gains) does Daniel mention in the letter?",
          response: { type: "numeric", parts: [{ label: "Losses and gains", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Key detail", statement: "A fact needed to make the main idea clear — here, the concrete evidence of change." },
            ],
            steps: [
              { reasoning: "Losses: fleet twenty→nine, chandlery→café (2); gains: restored lighthouse, ferry visitors (2) = 4.", working: "4", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only the losses — Daniel also names two gains."],
          },
        },
        {
          id: "cile-u1-summary-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: robotExtract,
          stem: "Explain why a summary must paraphrase rather than copy, using an example from the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paraphrase", statement: "Restating the text's meaning in your own words proves understanding and avoids plagiarism." },
            ],
            steps: [
              { reasoning: "Copying whole sentences shows you have lifted wording, not understood the text.", working: "\\text{lifting vs understanding}", marks: 1, markCode: "AO2" },
              { reasoning: "Example: 'nets hanging like sleeping bats' could be paraphrased as 'their nets were left to dry'.", working: "\\text{paraphrase example}", marks: 1, markCode: "AO2" },
              { reasoning: "Paraphrasing keeps the meaning while demonstrating comprehension.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Copying phrases lifts wording without showing understanding; e.g. 'hanging like sleeping bats' can become 'left to dry' — same meaning, own words.",
            commonErrors: ["Saying 'it is cheating' without explaining the comprehension/paraphrase point."],
          },
        },
        {
          id: "cile-u1-summary-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: harbourExtract,
          stem: "Write a summary of the whole letter in no more than 30 words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Who + what happened + outcome, in own words, roughly a third of the original length." },
            ],
            steps: [
              { reasoning: "Summary covers the letter's arc: the harbour is changing.", working: "\\text{changing harbour}", marks: 1, markCode: "AO2" },
              { reasoning: "Includes both sides: fewer boats and lost chandlery versus restored lighthouse and new ferry.", working: "\\text{losses + gains}", marks: 1, markCode: "AO2" },
              { reasoning: "30 words or fewer, paraphrased, accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Daniel describes his harbour changing: the fishing fleet has shrunk and old shops have become cafés, though a restored lighthouse and new ferry bring some gains.' (28 words)",
            commonErrors: ["Exceeding 30 words or copying phrases like 'a place die or a place learn to be something new'."],
          },
        },
        {
          id: "cile-u1-summary-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: robotExtract,
          stem: "Which of these is NOT needed in a summary of the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The exact design of its warehouse arms" },
              { id: "b", text: "The power cut led to its being put away for good" },
              { id: "c", text: "BOLT was kept in a cupboard for six months" },
              { id: "d", text: "The children called it BOLT" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary criteria", statement: "Description that does not carry the main idea is cut." },
            ],
            steps: [
              { reasoning: "The arms' design is decorative description; the other options carry the story.", working: "\\text{design = colour}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The exact design of its warehouse arms",
            commonErrors: ["Choosing (a) — the six-month storage explains why the robot was surplus, so it matters."],
          },
        },
        {
          id: "cile-u1-summary-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "What is the 'skeleton' of the letter that a summary must keep?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All of Daniel's opinions about tourists" },
              { id: "b", text: "Every description of the lighthouse" },
              { id: "c", text: "The contrast between decline and improvement, plus Daniel's uncertainty" },
              { id: "d", text: "The list of shops on the quay" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Skeleton of a text", statement: "The main ideas and the few details needed to support them." },
            ],
            steps: [
              { reasoning: "The letter's skeleton is change-with-mixed-outcomes and the open question about it.", working: "\\text{losses/gains + uncertainty}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The contrast between decline and improvement, plus Daniel's uncertainty",
            commonErrors: ["Choosing (d) — there is no list of shops; the chandlery is a single example."],
          },
        },
        {
          id: "cile-u1-summary-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: robotExtract,
          stem: "Two students summarise the extract. Student A: 'A robot helped a class until a power cut, then was put away.' Student B: 'A robot fetched homework for Room 4B; after a blackout revealed everyone preferred quiet, it was never used again.' Explain why B's summary is better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary quality", statement: "Better summaries keep who/what/outcome specifically and paraphrase accurately." },
            ],
            steps: [
              { reasoning: "A is vague: 'helped a class' and 'put away' lose the specifics.", working: "\\text{A vague}", marks: 1, markCode: "AO2" },
              { reasoning: "B keeps the who (Room 4B), the what (fetching homework) and the outcome (never used again).", working: "\\text{B specific}", marks: 1, markCode: "AO2" },
              { reasoning: "B also captures the reason — the revealed preference for quiet.", working: "\\text{reason kept}", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion: B preserves the extract's point while A flattens it.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "B's summary is specific (Room 4B, homework), keeps the outcome (never used again) and the reason (preferred quiet); A is too vague and loses the extract's point.",
            commonErrors: ["Saying only 'B is longer' without explaining what extra content is essential."],
          },
        },
        {
          id: "cile-u1-summary-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: harbourExtract,
          stem: "You must summarise 'Letters from the Harbour' for a class newsletter.",
          parts: [
            { label: "a", prompt: "Write a one-sentence summary of the whole letter.", marks: 3 },
            { label: "b", prompt: "List the losses and gains Daniel mentions.", marks: 2 },
            { label: "c", prompt: "A classmate's summary is 200 words long. Explain the problem.", marks: 2 },
            { label: "d", prompt: "Rewrite this copied phrase as a paraphrase: 'the chandlery ... is now a café selling smoothies to tourists.'", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "A third of the original length; own words; keeps main ideas and outcome." },
            ],
            steps: [
              { part: "a", reasoning: "One sentence covering the whole letter's arc.", working: "\\text{whole arc}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Paraphrased, not copied.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate and complete.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Losses: fleet twenty→nine; chandlery became a café.", working: "\\text{boats; chandlery}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Gains: restored lighthouse; ferry bringing real customers.", working: "\\text{lighthouse; ferry}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "200 words is far more than a third of the letter — it is a retelling, not a summary.", working: "\\text{too long}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It likely includes description, repetition and opinion that should be cut.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Paraphrase e.g. 'the old chandlery has been replaced by a café aimed at tourists'.", working: "\\text{own words}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Keeps the meaning (loss of old trade, gain of tourism) without copying.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) e.g. 'Daniel sees his harbour changing: fewer fishing boats and tourist cafés, balanced by a restored lighthouse and a busier ferry.' (b) losses: boats, chandlery; gains: lighthouse, ferry (c) far too long — a summary should be about a third of the original (d) e.g. 'the old chandlery has been replaced by a café aimed at tourists'",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Accurate one-sentence whole-letter summary in own words.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial or copied summary.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "All four points correctly listed.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or confused points.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Identifies the length problem and why.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "No valid explanation.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Accurate paraphrase keeping the meaning.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Still copied or changed meaning.", part: "d" },
            ],
            commonErrors: ["In (d) changing the meaning (e.g. saying the café closed) instead of just rewording."],
          },
        },
        {
          id: "cile-u1-summary-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: robotExtract,
          stem: "You are summarising the extract about BOLT.",
          parts: [
            { label: "a", prompt: "Write a one-sentence summary of the whole extract.", marks: 3 },
            { label: "b", prompt: "Give two details that could be cut from a summary.", marks: 2 },
            { label: "c", prompt: "Give two details that must be kept.", marks: 2 },
            { label: "d", prompt: "Explain why 'It never came out again' belongs in the summary.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Keep the arc — arrival, popularity, outcome — in own words; cut colour." },
            ],
            steps: [
              { part: "a", reasoning: "One sentence covering BOLT's arrival, use, power cut and removal.", working: "\\text{full arc}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Paraphrased accurately.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Captures the outcome, not just events.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Cuttable: e.g. the warehouse-arm design; 'single camera eye'.", working: "\\text{physical description}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Second valid cuttable detail.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Keepable: the power cut and the silence it revealed.", working: "\\text{power cut}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Keepable: BOLT was never used again / put away for good.", working: "\\text{never used again}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "It is the outcome — without it the summary has no ending.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) e.g. 'A school robot named BOLT became popular in Room 4B, but after a power cut revealed everyone preferred quiet it was put away for good.' (b) e.g. warehouse-arm design; camera eye (c) e.g. the power cut; never used again (d) it is the outcome — a summary without it has no ending",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Accurate whole-extract summary with outcome.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial or copied summary.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid cuttable details.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Essential details wrongly cut.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two essential details identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "c" },
              { level: "Level 1", marks: "1", descriptor: "Identifies it as the outcome.", part: "d" },
            ],
            commonErrors: ["In (b) cutting the power cut or the ending — those are essential."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u1-summary-mainidea-notes",
      title: "Main ideas and summarising — revision notes",
      summary: "Topic sentences, main idea vs detail, and how to write a real summary.",
      sections: [
        {
          heading: "Main idea vs detail",
          body: "Main idea = what the paragraph/text is mostly about. Details = the evidence for it. The topic sentence usually states the main idea; striking quotes are often just evidence.",
        },
        {
          heading: "Summary rules",
          body: "Keep: who, what happened, outcome, key numbers/names. Cut: description, repetition, opinions, your reactions. Paraphrase — never copy sentences.",
        },
        {
          heading: "Exam technique",
          body: "Test a summary: does it cover the WHOLE text's arc and end with the outcome? If it only covers one paragraph, it fails.",
        },
      ],
    },
  ],
};
