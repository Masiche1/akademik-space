import type { Lesson } from "../../../types.ts";

const reviewExtract = {
  title: "Film Review: 'The Long Way Home'",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "The Long Way Home is the kind of film that stays with you long after the credits roll — not because it is perfect, but because it is honest.\n\nThe story follows a teenager, Mara, who drives her late grandmother's unreliable van across the country to scatter her ashes. The road movie format is familiar, but director Imani Cole refuses to let it become sentimental. Mara's grief is shown through small actions: she cannot throw the ashes until she has driven past every place her grandmother ever mentioned.\n\nThe film's weakness is its middle hour, which drags through landscapes that look identical. But the final scene — Mara alone at the cliff edge, finally letting go — is worth the wait. It is a film about how grief works in real life: slowly, awkwardly, and without ceremony.\n\nRecommended for anyone who has ever lost someone they loved. Not for viewers seeking light entertainment.",
};

const speechExtract = {
  title: "Speech to the School Council",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Members of the council, I am here today to talk about something that affects every single one of us in this room, whether we admit it or not: the state of our toilets.\n\nNow, I know what you are thinking. 'A student is talking about toilets. How charming.' But hear me out, because this is not about vanity — it is about dignity. When the third-floor toilets have been out of order for six weeks, when students are walking to the other side of the building and missing lessons, that is not a facilities problem. That is a message that we do not matter.\n\nI have collected four hundred signatures on a petition. I have photographs. I have a list of every day each toilet has been unusable since September. I am not asking you to fix them today — I am asking you to acknowledge that this is happening, and to give us a date when it will stop.\n\nWe are not asking for the moon. We are asking for the basics. Thank you.",
};

const lighthouseExtract = {
  title: "The Lighthouse Keeper",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Elias had kept the light on Greyrock Point for nineteen years, and in nineteen years he had never once let it go dark.\n\nThe lighthouse stood on a fist of black rock at the end of the headland, reachable only by a path that the sea had tried many times to erase. Every evening Elias climbed the hundred and twelve steps to the lamp room, his knees complaining a little more each year, and set the great lens turning.\n\nShips passed in the night and never knew his name. That, he told himself, was the point. A light did not need to be thanked; it needed to be lit.\n\nWhen the automation letters finally arrived, offering him a cottage in the village and a pension, Elias read them twice, then walked up the hundred and twelve steps one last time. The lamp, he knew, would keep turning without him. Someone, somewhere, would still need it to.",
};

export const lesson23: Lesson = {
  id: "cile-u2-lesson-2-3",
  code: "2-3",
  title: "Structure of texts",
  goal: "I CAN analyse how the overall structure of a text — chronological, problem-solution, flashback, frame — shapes meaning.",
  standards: ["0861 Reading: whole-text structure"],
  vocabulary: [
    { term: "Chronological order", definition: "Events told in the order they happened." },
    { term: "Flashback", definition: "A scene that jumps back in time to reveal earlier events." },
    { term: "Problem–solution structure", definition: "A text organised around a problem and its resolution." },
    { term: "Frame narrative", definition: "A story within a story — an outer narrative frames an inner one." },
    { term: "Climax", definition: "The point of highest tension or turning point in a narrative." },
    { term: "Circular structure", definition: "A text that ends by returning to its beginning or central image." },
  ],
  concepts: [
    {
      id: "cile-u2-text-structure",
      title: "Analysing text structure",
      skill: "Identify the organising structure of a text and explain how it shapes meaning and reader response.",
      lesson: {
        sections: [
          {
            heading: "Common structures",
            body: "- **Chronological**: events in time order — simple, clear, builds to an ending.\n- **Problem–solution**: a difficulty is established, explored, resolved — common in speeches and articles.\n- **Flashback**: jumps back to reveal background — creates mystery, deepens character.\n- **Frame**: a story inside a story — the outer frame comments on the inner tale.\n- **Circular**: ends where it began — suggests inevitability or completion.",
          },
          {
            heading: "Why structure matters",
            body: "Structure controls **when** the reader learns information and **how** tension builds. A flashback delays revelation; a problem–solution structure creates expectation of resolution; a circular ending gives a sense of closure or fate.",
          },
          {
            heading: "Analysing structure",
            body: "1. Map the sections: what happens in each?\n2. Identify the pattern: time order? problem–solution? frame?\n3. Ask: why this structure? What would be lost if it were told differently?",
          },
        ],
        keyFormulas: [
          { name: "Structure → meaning", statement: "The order in which information is released shapes what the reader understands and feels." },
        ],
        workedExample: {
          problem: "The film review: 'not because it is perfect, but because it is honest' — how does the opening structure the review?",
          solution: "The concession ('not perfect') before the claim ('honest') creates a balanced, credible judgement — the structure signals this is a thoughtful review, not a fan piece.",
        },
      },
      questions: [
        {
          id: "cile-u2-struct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: reviewExtract,
          stem: "What structure does the film review use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Circular narrative" },
              { id: "b", text: "Problem–solution" },
              { id: "c", text: "Chronological summary of the plot" },
              { id: "d", text: "Flashback" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological structure", statement: "The review follows the film's narrative order: setup, journey, climax, verdict." },
            ],
            steps: [
              { reasoning: "The review describes the story in order before giving a verdict.", working: "\\text{plot order}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Chronological summary of the plot",
            commonErrors: ["Choosing (a) — there is no problem being solved for the reader."],
          },
        },
        {
          id: "cile-u2-struct-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: speechExtract,
          stem: "Identify the structure of the speech and state its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Problem–solution", statement: "The speech establishes a problem (broken toilets) and demands a solution (repairs and a date)." },
            ],
            steps: [
              { reasoning: "Structure: problem established, evidence presented, demand made.", working: "\\text{problem → evidence → demand}", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose: to persuade the council to act on the toilet repairs.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Problem–solution structure: it establishes the broken-toilet problem, backs it with evidence, and demands repairs — designed to persuade the council.",
            commonErrors: ["Describing content without identifying the organising structure."],
          },
        },
        {
          id: "cile-u2-struct-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: reviewExtract,
          stem: "Explain how the review's structure — praise first, weakness in the middle, verdict at the end — shapes the reader's response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Delayed verdict", statement: "Holding the recommendation until after balanced analysis builds trust." },
            ],
            steps: [
              { reasoning: "Opening praise ('stays with you', 'honest') establishes credibility.", working: "\\text{early praise}", marks: 1, markCode: "AO2" },
              { reasoning: "Middle admits weakness ('middle hour drags') — balanced judgement.", working: "\\text{admits flaw}", marks: 1, markCode: "AO2" },
              { reasoning: "Final verdict ('Recommended for...') lands after trust is built.", working: "\\text{delayed verdict}", marks: 1, markCode: "AO2" },
              { reasoning: "Structure makes the recommendation feel earned, not hyped.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The balanced structure — praise, then honest flaw, then verdict — builds trust so the final recommendation feels credible rather than promotional.",
            commonErrors: ["Saying the structure is 'good' without explaining how it affects the reader."],
          },
        },
        {
          id: "cile-u2-struct-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: speechExtract,
          stem: "The speech uses a deliberate structure to persuade the council.",
          parts: [
            { label: "a", prompt: "Identify the opening hook and its effect.", marks: 2 },
            { label: "b", prompt: "How does the speaker anticipate and counter the council's likely reaction?", marks: 2 },
            { label: "c", prompt: "Explain the effect of the evidence list ('four hundred signatures... photographs... list').", marks: 2 },
            { label: "d", prompt: "Why does the speaker end with 'We are not asking for the moon'?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive structure", statement: "Hook → anticipated objection → evidence → modest demand → memorable close." },
            ],
            steps: [
              { part: "a", reasoning: "Hook: 'the state of our toilets' — deliberately mundane subject made serious.", working: "\\text{mundane made serious}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Effect: disarms mockery by owning it ('How charming').", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "She voices the objection: 'A student is talking about toilets.'", working: "\\text{voices objection}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Then reframes: 'not about vanity — it is about dignity.'", working: "\\text{reframes as dignity}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "List of three concrete proofs — signatures, photos, dates — makes the claim undeniable.", working: "\\text{signatures/photos/dates}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Specificity signals preparation and seriousness.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "'Not asking for the moon' minimises the demand — repairs are basic rights.", working: "\\text{minimal demand}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It makes refusal seem unreasonable — who denies the basics?", working: "\\text{refusal unreasonable}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The idiom gives a memorable, quotable ending.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) mundane subject made serious; owns the mockery (b) voices then reframes the objection as dignity (c) concrete evidence proves preparedness (d) minimises demand so refusal seems unreasonable; quotable close",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Hook identified with effect explained.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Objection handling accurately described.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Evidence list's effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Closing strategy explained convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'it sounds nice' without explaining the persuasive logic."],
          },
        },
        {
          id: "cile-u2-struct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: reviewExtract,
          stem: "How many of these describe the film review's overall structure? 'Chronological summary leading to a verdict.' 'Problem-solution.' 'Flashback narrative.' 'Circular structure.'",
          response: { type: "numeric", parts: [{ label: "Correct structures", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological structure", statement: "The review follows the film's events in order before delivering a verdict." },
            ],
            steps: [
              { reasoning: "Only 'chronological summary leading to a verdict' fits — the review summarises plot in order then judges.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Choosing 'problem-solution' — no problem is being solved for the reader."],
          },
        },
        {
          id: "cile-u2-struct-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: speechExtract,
          stem: "How many of these texts would most likely use a PROBLEM–SOLUTION structure? 'A petition speech about broken school toilets.' 'A film review.' 'A diary entry about a bad day.' 'An advert for a scooter.'",
          response: { type: "numeric", parts: [{ label: "Problem-solution texts", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Problem–solution", statement: "A difficulty is established, evidenced, and a resolution demanded." },
            ],
            steps: [
              { reasoning: "The petition speech and the advert both set up a problem then offer a resolution = 2.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the film review — it summarises plot, it does not solve a reader's problem."],
          },
        },
        {
          id: "cile-u2-struct-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: reviewExtract,
          stem: "Explain the structural role of the final paragraph ('Recommended for anyone who has ever lost someone...').",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verdict", statement: "The closing paragraph delivers the reviewer's judgement and defines the audience." },
            ],
            steps: [
              { reasoning: "It states who should see the film and who should not — a clear verdict.", working: "\\text{who should/shouldn't see}", marks: 1, markCode: "AO2" },
              { reasoning: "Placed last, it rewards the reader who read the whole balanced analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The final paragraph delivers the verdict — who the film is for and who it is not for — placed last so it concludes the balanced analysis.",
            commonErrors: ["Saying it 'summarises' — it judges and targets an audience."],
          },
        },
        {
          id: "cile-u2-struct-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: speechExtract,
          stem: "How does the problem–solution structure create an expectation of resolution in the speech?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structure and expectation", statement: "Naming a problem makes the audience await its solution." },
            ],
            steps: [
              { reasoning: "The problem is established vividly — six weeks out of order, missed lessons.", working: "\\text{problem established}", marks: 1, markCode: "AO2" },
              { reasoning: "This creates pressure for a resolution — the council must respond or seem uncaring.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "By vividly establishing the problem and its human cost, the structure makes the council's response feel inevitable — they must offer a solution or appear indifferent.",
            commonErrors: ["Describing the problem without explaining the structural expectation it creates."],
          },
        },
        {
          id: "cile-u2-struct-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: reviewExtract,
          stem: "Where in the review's structure does the weakness of the film appear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the middle, between praise and verdict" },
              { id: "b", text: "In the opening hook" },
              { id: "c", text: "Before any praise is given" },
              { id: "d", text: "In the final recommendation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balanced structure", statement: "Praise first, honest weakness in the middle, verdict last." },
            ],
            steps: [
              { reasoning: "'The film's weakness is its middle hour' sits between praise and the final verdict.", working: "\\text{middle position}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** In the middle, between praise and verdict",
            commonErrors: ["Choosing (a) — the opening is praise, not weakness."],
          },
        },
        {
          id: "cile-u2-struct-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: speechExtract,
          stem: "Explain why the speaker places the evidence list ('four hundred signatures... photographs... list') where she does in the problem–solution structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural placement", statement: "Evidence follows the problem and precedes the demand — it bridges grievance to action." },
            ],
            steps: [
              { reasoning: "The problem (broken toilets) is established first, creating the need.", working: "\\text{problem first}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence then proves the problem is real and organised — not a complaint.", marks: 1, markCode: "AO2" },
              { reasoning: "It leads directly into the demand ('I am not asking you to fix them today'), making the ask feel justified.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The evidence sits between problem and demand: it proves the grievance is organised and serious, so the request for action feels justified rather than emotional.",
            commonErrors: ["Saying the evidence 'supports the argument' without explaining its structural position."],
          },
        },
        {
          id: "cile-u2-struct-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: reviewExtract,
          stem: "Explain how admitting the film's weakness before giving the recommendation affects the review's credibility.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balanced judgement", statement: "Admitting flaws before praising makes the verdict seem honest, not promotional." },
            ],
            steps: [
              { reasoning: "The reviewer admits 'the middle hour drags' — a real criticism.", working: "\\text{admits flaw}", marks: 1, markCode: "AO2" },
              { reasoning: "Because the flaw is admitted, the later praise ('the final scene... is worth the wait') feels earned.", marks: 1, markCode: "AO2" },
              { reasoning: "The reader trusts a reviewer who is willing to criticise — the recommendation becomes credible.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Admitting the weakness first makes the reviewer seem honest; the reader trusts the praise that follows because it survives a real criticism — the recommendation feels earned, not hyped.",
            commonErrors: ["Saying the review is 'balanced' without explaining the credibility effect."],
          },
        },
        {
          id: "cile-u2-struct-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: speechExtract,
          stem: "In the problem–solution structure, what is 'I am not asking you to fix them today'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opening hook" },
              { id: "b", text: "The demand/solution request" },
              { id: "c", text: "The evidence" },
              { id: "d", text: "The problem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Demand", statement: "The request for action — here, a date for repairs, not immediate fixes." },
            ],
            steps: [
              { reasoning: "It states what the speaker wants the council to do — the solution request.", working: "\\text{request for action}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The demand/solution request",
            commonErrors: ["Choosing (a) — it is not describing the problem; it is asking for action."],
          },
        },
        {
          id: "cile-u2-struct-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "How many of these best describe the structure of 'The Lighthouse Keeper'? 'Chronological narrative.' 'Flashback.' 'Circular poem.' 'Problem–solution speech.'",
          response: { type: "numeric", parts: [{ label: "Correct structures", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological narrative", statement: "Events unfold in time order — routine, then the letters, then the final climb." },
            ],
            steps: [
              { reasoning: "Nineteen years of routine, letters arrive, final climb — chronological = 1.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Choosing 'problem-solution' — it is a story, not a speech with a problem to solve."],
          },
        },
        {
          id: "cile-u2-struct-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: speechExtract,
          stem: "How would the speech's persuasive effect change if the evidence were presented before the problem was described?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural order", statement: "Problem-first creates emotional investment; evidence-first feels like a report." },
            ],
            steps: [
              { reasoning: "Currently the problem is felt before it is proven — emotion leads.", working: "\\text{emotion first}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence-first would feel bureaucratic — numbers before the human cost.", marks: 1, markCode: "AO2" },
              { reasoning: "The council might see it as a complaint rather than a moral claim.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion: the current order maximises pressure by making the council feel the problem first.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Evidence-first would feel like a report, not a moral claim — the council would respond to data rather than feel the human cost. Problem-first makes the demand feel inevitable.",
            commonErrors: ["Saying 'it would be the same' — order fundamentally changes emotional response."],
          },
        },
        {
          id: "cile-u2-struct-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: reviewExtract,
          stem: "You are analysing the structure of the film review.",
          parts: [
            { label: "a", prompt: "Identify the review's overall structure.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the opening concession ('not because it is perfect, but because it is honest').", marks: 2 },
            { label: "c", prompt: "What role does the 'weakness' paragraph play in the structure?", marks: 2 },
            { label: "d", prompt: "Why does the review end with 'Recommended for anyone...' rather than a summary?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Review structure", statement: "Hook → balanced analysis → weakness → verdict; the ending judges, not summarises." },
            ],
            steps: [
              { part: "a", reasoning: "Chronological plot summary leading to a final verdict.", working: "\\text{chronological → verdict}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurately identified.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Concession ('not perfect') before claim ('honest') creates balanced credibility.", working: "\\text{concession → claim}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Signals a thoughtful review, not a fan piece.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "The weakness paragraph balances the praise — prevents the review sounding promotional.", working: "\\text{balances praise}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It earns the reader's trust before the verdict.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "A verdict tells the reader what to do; a summary would just repeat.", working: "\\text{verdict vs summary}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "'Recommended for...' defines the audience — actionable guidance.", working: "\\text{audience defined}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: ending with judgement is the review's purpose.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) chronological summary → verdict (b) concession-then-claim builds credibility (c) the weakness balances praise and earns trust (d) a verdict guides the reader; a summary would add nothing",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Structure accurately identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong or vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Concession effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Weakness paragraph's role explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Verdict-vs-summary distinction argued.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'it is a good ending' without explaining why verdict beats summary."],
          },
        },
        {
          id: "cile-u2-struct-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: lighthouseExtract,
          stem: "You are analysing the structure of 'The Lighthouse Keeper'.",
          parts: [
            { label: "a", prompt: "Identify the structure and explain how the repeated 'hundred and twelve steps' shapes it.", marks: 2 },
            { label: "b", prompt: "How does the arrival of the automation letters function structurally?", marks: 2 },
            { label: "c", prompt: "Explain the effect of ending with Elias's understanding rather than his death or departure.", marks: 2 },
            { label: "d", prompt: "Why does this order of events suit the extract's theme?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological with echo", statement: "Time order is marked by the repeated climb; the ending resolves rather than concludes." },
            ],
            steps: [
              { part: "a", reasoning: "Chronological; 'hundred and twelve steps' repeats, marking routine and its end.", working: "\\text{112 steps x2}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "The repetition ties the opening routine to the final climb — circular echo.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "The letters are the turning point — routine interrupted, conflict introduced.", working: "\\text{turning point}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "They force the climax: one last climb, acceptance.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Ending on understanding, not death, keeps the focus on dignity.", working: "\\text{dignity}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The light continues — his work outlives him, which is the point.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Time order lets routine be felt before it is lost — loss needs prior stability.", working: "\\text{stability then loss}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Suit theme: quiet duty is valued only because we see it first as routine.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) chronological; the repeated '112 steps' ties routine to its end (b) the letters are the turning point forcing the final climb (c) ending on understanding keeps dignity and shows work outliving the worker (d) routine-then-loss makes quiet duty meaningful",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Structure and repetition effect explained.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Letters' structural role explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Ending choice explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Theme-structure link explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid link.", part: "d" },
            ],
            commonErrors: ["In (a) calling it 'circular' — the repetition echoes but the narrative does not literally return to its start."],
          },
        },
      ],
    },
    {
      id: "cile-u2-narrative-structure",
      title: "Narrative structure",
      skill: "Analyse how narrative structure — opening, build-up, climax, resolution — creates tension and meaning.",
      lesson: {
        sections: [
          {
            heading: "The shape of a story",
            body: "Most narratives follow a pattern:\n\n- **Opening**: establishes character, setting, and the status quo.\n- **Build-up**: introduces conflict or complication; tension rises.\n- **Climax**: the turning point — highest tension, the moment everything changes.\n- **Resolution**: aftermath; how characters and situations settle.",
          },
          {
            heading: "Pace and tension",
            body: "Writers control tension through **pacing**: short paragraphs and sentences speed things up; long descriptions slow them down. The climax often uses the shortest, most dramatic sentences. The resolution slows again, allowing reflection.",
          },
          {
            heading: "Structural choices in narrative",
            body: "- **In medias res**: starting mid-action, then flashing back — immediate engagement.\n- **Circular**: ending where it began — suggests fate or completion.\n- **Frame**: a narrator tells the story — adds reliability questions.",
          },
        ],
        keyFormulas: [
          { name: "Narrative arc", statement: "Opening (status quo) → build-up (conflict) → climax (turning point) → resolution (aftermath)." },
        ],
        workedExample: {
          problem: "In the lighthouse extract, where is the climax?",
          solution: "The climax is Elias climbing the steps one last time and accepting the automation — the moment he lets go of his life's work. The resolution is his understanding that the light will 'still need' to be lit.",
        },
      },
      questions: [
        {
          id: "cile-u2-narr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "How many of these events belong to the BUILD-UP stage of the narrative? 'The automation letters finally arrived.' 'Nineteen years of routine established.' 'Elias read the letters twice.' 'The lamp turned without him.'",
          response: { type: "numeric", parts: [{ label: "Build-up events", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Build-up", statement: "The complication that raises tension before the climax." },
            ],
            steps: [
              { reasoning: "The letters arriving and Elias reading them twice introduce and develop the conflict = 2; routine is the opening and the lamp turning is the resolution.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the routine — that is the opening/status quo, not the build-up."],
          },
        },
        {
          id: "cile-u2-narr-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: lighthouseExtract,
          stem: "Identify the climax of the extract and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax", statement: "The turning point of highest tension where the central conflict peaks." },
            ],
            steps: [
              { reasoning: "Climax: Elias climbing the steps 'one last time' and accepting automation.", working: "\\text{final climb}", marks: 1, markCode: "AO2" },
              { reasoning: "Why: it is the moment he confronts and accepts the end of his life's work — maximum emotional tension.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The climax is Elias's final climb up the 112 steps and his acceptance that the lamp will turn without him — the peak of his emotional conflict.",
            commonErrors: ["Choosing the opening (introducing Elias) — that is the status quo, not the turning point."],
          },
        },
        {
          id: "cile-u2-narr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: lighthouseExtract,
          stem: "Explain how the pacing of the extract creates tension before the climax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing", statement: "Sentence and paragraph length control tension; longer build-up, shorter climax." },
            ],
            steps: [
              { reasoning: "Evidence: early paragraphs are descriptive and steady — routine established.", working: "\\text{steady routine}", marks: 1, markCode: "AO2" },
              { reasoning: "The automation letters introduce disruption — pace quickens slightly.", working: "\\text{disruption}", marks: 1, markCode: "AO2" },
              { reasoning: "Final paragraph: short, decisive sentences — 'The lamp, he knew, would keep turning without him.'", working: "\\text{short decisive}", marks: 1, markCode: "AO2" },
              { reasoning: "The acceleration mirrors Elias's emotional climax.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Steady descriptive pacing establishes routine; the letters disrupt it; the final paragraph's short, decisive sentences accelerate into the climax, mirroring Elias's emotional peak.",
            commonErrors: ["Describing events without linking pacing to tension."],
          },
        },
        {
          id: "cile-u2-narr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: lighthouseExtract,
          stem: "The extract is a short narrative about Elias, the lighthouse keeper.",
          parts: [
            { label: "a", prompt: "Identify the opening's function in establishing character and setting.", marks: 2 },
            { label: "b", prompt: "How does the build-up create the central conflict?", marks: 2 },
            { label: "c", prompt: "Explain the climax and its emotional impact.", marks: 2 },
            { label: "d", prompt: "What does the resolution suggest about the value of quiet, unnoticed work?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative arc", statement: "Opening establishes status quo; build-up creates conflict; climax resolves it; resolution shows aftermath." },
            ],
            steps: [
              { part: "a", reasoning: "Opening: 'nineteen years... never once let it go dark' — establishes dedication.", working: "\\text{dedication}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Setting: isolated rock, 112 steps — physical and emotional remoteness.", working: "\\text{isolation}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Build-up: routine detailed, then automation letters arrive.", working: "\\text{routine → letters}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Conflict: his life's work vs inevitable technological change.", working: "\\text{work vs change}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Climax: final climb, acceptance that the lamp continues without him.", working: "\\text{final climb}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Impact: grief transformed into understanding — he lets go with dignity.", working: "\\text{grief → dignity}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Resolution: 'Someone, somewhere, would still need it to' — purpose outlives the person.", working: "\\text{purpose outlives}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Suggests quiet work matters even when unseen and unthanked.", working: "\\text{unseen matters}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion linking structure to theme.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) dedication and isolation established (b) routine disrupted by automation letters (c) final climb = letting go with dignity (d) unseen work still matters — purpose outlives the person",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Opening function accurately identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Conflict accurately described.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Climax identified with impact explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Theme argued convincingly through resolution.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'the lighthouse is important' without linking to the theme of unseen work."],
          },
        },
        {
          id: "cile-u2-narr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "For how many years has Elias kept the lighthouse, according to the extract?",
          response: { type: "numeric", parts: [{ label: "Years of service", answer: 19 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resolution", statement: "The aftermath — how the conflict settles; here, acceptance." },
            ],
            steps: [
              { reasoning: "The opening states 'nineteen years' of unbroken duty at the lighthouse.", working: "19", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "19",
            commonErrors: ["Answering 112 — that is the number of steps, not years."],
          },
        },
        {
          id: "cile-u2-narr-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: reviewExtract,
          stem: "Within the film described in the review, what is the climax of Mara's story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mara reads her grandmother's letters" },
              { id: "b", text: "Mara drives the van across the country" },
              { id: "c", text: "Mara is alone at the cliff edge, finally letting go" },
              { id: "d", text: "Mara cannot throw the ashes until she has driven past every place" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax", statement: "The turning point of highest tension — here, finally letting go." },
            ],
            steps: [
              { reasoning: "The review calls the cliff-edge scene 'the final scene' and the emotional payoff.", working: "\\text{cliff edge, letting go}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Mara is alone at the cliff edge, finally letting go",
            commonErrors: ["Choosing (a) — the journey is the build-up, not the climax."],
          },
        },
        {
          id: "cile-u2-narr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: lighthouseExtract,
          stem: "Identify the opening's function in establishing the status quo.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opening/status quo", statement: "The opening establishes routine and dedication before conflict arrives." },
            ],
            steps: [
              { reasoning: "'Nineteen years... never once let it go dark' establishes unbroken routine.", working: "\\text{19 years, never dark}", marks: 1, markCode: "AO2" },
              { reasoning: "Function: we need the stable routine first so its loss feels significant.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The opening establishes nineteen years of unbroken duty — the status quo — so the reader feels the weight of what is about to change.",
            commonErrors: ["Saying it 'introduces the character' without explaining the status-quo function."],
          },
        },
        {
          id: "cile-u2-narr-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: reviewExtract,
          stem: "In the film's narrative, how does 'she cannot throw the ashes until she has driven past every place her grandmother ever mentioned' function?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Build-up", statement: "A ritualised obstacle prolongs tension before the climax." },
            ],
            steps: [
              { reasoning: "It creates a rule the character must fulfil — delay before release.", working: "\\text{rule/delay}", marks: 1, markCode: "AO2" },
              { reasoning: "It shows grief working 'slowly, awkwardly' — matching the film's theme.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The rule delays the release of the ashes, stretching the grief — the journey becomes a ritual that mirrors how real grief works slowly.",
            commonErrors: ["Saying it 'moves the plot' without linking it to grief's slowness."],
          },
        },
        {
          id: "cile-u2-narr-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "Which paragraph has the fastest pacing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first (introducing Elias)" },
              { id: "b", text: "All paragraphs are equally paced" },
              { id: "c", text: "The final paragraph (the letters and last climb)" },
              { id: "d", text: "The second (the routine climb)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing", statement: "Shorter sentences and decisive actions speed the climax." },
            ],
            steps: [
              { reasoning: "The final paragraph uses short, decisive sentences — 'read them twice, then walked'.", working: "\\text{short, decisive}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The final paragraph (the letters and last climb)",
            commonErrors: ["Choosing (b) — the routine climb is described slowly and steadily."],
          },
        },
        {
          id: "cile-u2-narr-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: reviewExtract,
          stem: "The review says grief works 'slowly, awkwardly, and without ceremony'. How does the film's own narrative structure mirror this?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structure mirrors theme", statement: "The film's slow build and delayed climax enact grief's own rhythm." },
            ],
            steps: [
              { reasoning: "The middle hour 'drags' — grief is not streamlined or efficient.", working: "\\text{dragging middle}", marks: 1, markCode: "AO2" },
              { reasoning: "The release comes only at the cliff edge — late, like real grief.", marks: 1, markCode: "AO2" },
              { reasoning: "So the narrative form itself performs the theme: grief is slow, awkward, unresolved until it isn't.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The film's dragging middle and delayed release mirror grief's own rhythm — slow, awkward, without ceremony — so the structure enacts the theme rather than just stating it.",
            commonErrors: ["Saying the film 'is about grief' without linking structure to theme."],
          },
        },
        {
          id: "cile-u2-narr-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "How many steps does Elias climb on his final ascent?",
          response: { type: "numeric", parts: [{ label: "Steps", answer: 112 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Repetition and climax", statement: "Repeating the ritual climb marks it as the final, climactic act." },
            ],
            steps: [
              { reasoning: "The extract states 'the hundred and twelve steps one last time'.", working: "112", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "112",
            commonErrors: ["Answering 19 — that is his years of service, not the steps."],
          },
        },
        {
          id: "cile-u2-narr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: reviewExtract,
          stem: "Which sentence in the review marks the resolution/evaluation stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recommended for anyone who has ever lost someone" },
              { id: "b", text: "It is a film about how grief works in real life" },
              { id: "c", text: "The film's weakness is its middle hour" },
              { id: "d", text: "The story follows a teenager, Mara" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resolution/verdict", statement: "The closing recommendation resolves the review's purpose." },
            ],
            steps: [
              { reasoning: "'Recommended for...' is the verdict — who should see it.", working: "\\text{verdict}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Recommended for anyone who has ever lost someone",
            commonErrors: ["Choosing (c) — it interprets the film but does not resolve the review's purpose."],
          },
        },
        {
          id: "cile-u2-narr-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "What does 'Elias read them twice' suggest about the narrative's pacing before the climax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The letters are confusing" },
              { id: "b", text: "He cannot read well" },
              { id: "c", text: "He is excited about the offer" },
              { id: "d", text: "He is hesitant — the letters force a decision he is not ready for" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hesitation before climax", statement: "A small pause before the turning point heightens tension." },
            ],
            steps: [
              { reasoning: "Reading twice signals reluctance — he must process the end of his work.", working: "\\text{reluctance}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** He is hesitant — the letters force a decision he is not ready for",
            commonErrors: ["Choosing (a) — excitement would not require reading twice."],
          },
        },
        {
          id: "cile-u2-narr-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: lighthouseExtract,
          stem: "Analyse how the narrative arc creates pathos (emotional sympathy) in the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Narrative arc and pathos", statement: "Routine → loss → acceptance builds sympathy for quiet, unseen lives." },
            ],
            steps: [
              { reasoning: "Opening establishes routine and dedication — we know his life first.", working: "\\text{routine first}", marks: 1, markCode: "AO2" },
              { reasoning: "Build-up introduces the threat — automation, an impersonal force.", marks: 1, markCode: "AO2" },
              { reasoning: "Climax: the last climb — he accepts without bitterness.", marks: 1, markCode: "AO2" },
              { reasoning: "Resolution dignifies him — pathos comes from his quiet endurance, not melodrama.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The arc — routine, threat, quiet acceptance — builds pathos through accumulation: we know his life, watch it threatened, and see him let go with dignity.",
            commonErrors: ["Saying 'it is sad' without tracing the arc's emotional build."],
          },
        },
        {
          id: "cile-u2-narr-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: lighthouseExtract,
          stem: "You are analysing the narrative structure of 'The Lighthouse Keeper'.",
          parts: [
            { label: "a", prompt: "Identify the function of the opening paragraph.", marks: 2 },
            { label: "b", prompt: "How does the second paragraph build the status quo?", marks: 2 },
            { label: "c", prompt: "Identify and explain the climax.", marks: 2 },
            { label: "d", prompt: "What does the resolution suggest about the meaning of Elias's work?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative arc", statement: "Opening → status quo → conflict → climax → resolution." },
            ],
            steps: [
              { part: "a", reasoning: "Opening establishes nineteen years of unbroken duty.", working: "\\text{19 years}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Function: status quo that makes later loss significant.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Second paragraph details the routine — steps, lamp, isolation.", working: "\\text{routine detail}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Deepens the status quo so its disruption hurts more.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Climax: the automation letters and the final climb.", working: "\\text{letters + last climb}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It is the moment he accepts the end of his life's work.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Resolution: 'Someone, somewhere, would still need it to' — purpose outlives person.", working: "\\text{purpose outlives}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "His work mattered even though unseen — quiet duty has value.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: the resolution reframes loss as legacy.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) establishes status quo/dedication (b) deepens routine so disruption hurts (c) letters + final climb = accepting the end of his work (d) purpose outlives the person — quiet unseen work still matters",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Opening function accurately identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Build-up function explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Climax identified and explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Resolution meaning argued convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'he is sad' without the theme of unseen work."],
          },
        },
        {
          id: "cile-u2-narr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: lighthouseExtract,
          stem: "You are analysing the narrative structure of 'The Lighthouse Keeper'.",
          parts: [
            { label: "a", prompt: "Identify the opening, build-up, climax and resolution.", marks: 2 },
            { label: "b", prompt: "Explain how the pacing accelerates toward the climax.", marks: 2 },
            { label: "c", prompt: "What is the function of 'A light did not need to be thanked; it needed to be lit.'?", marks: 2 },
            { label: "d", prompt: "How does the structure support the theme of quiet duty?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative arc", statement: "Routine → conflict → acceptance; pacing and motif support the theme." },
            ],
            steps: [
              { part: "a", reasoning: "Opening: nineteen years of duty; build-up: automation letters; climax: final climb; resolution: acceptance.", working: "\\text{arc identified}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All four stages accurately labelled.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Early paragraphs are descriptive and steady; final paragraph is short and decisive.", working: "\\text{steady → decisive}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Acceleration mirrors Elias's emotional peak.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It states his philosophy — duty needs no recognition.", working: "\\text{duty no thanks}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It explains why he kept the light — the theme in his own words.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Routine-then-loss structure makes quiet duty visible only by threatening it.", working: "\\text{threat reveals value}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The theme is that unseen work matters — structure enacts this by showing what is lost.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) opening=19yr duty; build-up=letters; climax=last climb; resolution=acceptance (b) steady→decisive pacing mirrors emotion (c) 'needed to be lit' states his duty philosophy (d) threatening routine reveals the value of quiet unseen work",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "All four arc stages identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing stages.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Pacing acceleration explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Quote's function explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Theme-structure link explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid link.", part: "d" },
            ],
            commonErrors: ["In (d) treating the theme as 'sadness' rather than 'value of unseen duty'."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u2-structure-notes",
      title: "Text and narrative structure — revision notes",
      summary: "Chronological, problem–solution, flashback, frame; narrative arc and pacing.",
      sections: [
        {
          heading: "Text structures",
          body: "Chronological (time order), problem–solution (difficulty → resolution), flashback (delayed revelation), frame (story within story), circular (ends where it began). Structure controls when the reader learns what.",
        },
        {
          heading: "Narrative arc",
          body: "Opening (status quo) → build-up (conflict) → climax (turning point) → resolution (aftermath). Pacing: long build-up, short climax, slow resolution.",
        },
        {
          heading: "Exam technique",
          body: "Identify the structure, map the sections, then ask why this structure was chosen — what would be lost if it were different?",
        },
      ],
    },
  ],
};
