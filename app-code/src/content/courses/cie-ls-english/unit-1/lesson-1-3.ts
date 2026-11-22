import type { Lesson } from "../../../types.ts";

const advertExtract = {
  title: "An Advertisement",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Tired of queuing?\n\nEvery morning, millions of commuters lose an hour of their lives stuck in traffic, watching the same grey buildings slide past the window. There is a better way.\n\nIntroducing the Zephyr — the electric scooter that folds to the size of a briefcase and charges in twenty minutes. Glide past the traffic. Breathe the morning air. Arrive at work energised, not exhausted.\n\nThe Zephyr is not for everyone. It is for people who refuse to waste their lives in queues. It is for people who choose freedom.\n\nOrder yours today at zephyr-ride.example — and join the revolution.",
};

const diaryExtract = {
  title: "From My Diary",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "14 March\n\nToday I did the thing I have been afraid of for three years. I stood on the stage of the school hall and read my poem to two hundred people. My hands shook so badly I was sure everyone could see. They could not.\n\nThe strangest part was the silence afterwards. Nobody clapped immediately; everyone seemed to be holding their breath. Then someone laughed — not unkindly, but because my last line was ridiculous. I laughed too. The tension broke like ice on a pond.\n\nI walked off stage feeling lighter than I have in months. Fear, it turns out, is mostly in your head. The audience was just people.\n\nI will read again next term. That is a promise.",
};

export const lesson13: Lesson = {
  id: "cile-u1-lesson-1-3",
  code: "1-3",
  title: "Purpose and audience",
  goal: "I CAN identify a writer's purpose and intended audience, and explain how they shape the language and structure of a text.",
  standards: ["0861 Reading: purpose, audience and writer's effect"],
  vocabulary: [
    { term: "Purpose", definition: "What the writer wants to achieve: inform, explain, persuade, entertain or describe." },
    { term: "Audience", definition: "The person or group the writer is writing for." },
    { term: "Register", definition: "The level of formality chosen to suit the audience and purpose." },
    { term: "Tone", definition: "The writer's attitude towards the subject or reader (e.g. serious, playful, urgent)." },
    { term: "Persuasive technique", definition: "A deliberate choice — repetition, rhetorical question, emotive language — used to convince." },
    { term: "Second person", definition: "Addressing the reader as 'you'; common in adverts and instructions." },
  ],
  concepts: [
    {
      id: "cile-u1-writers-purpose",
      title: "Identifying purpose",
      skill: "Work out why a text was written — to inform, explain, persuade, entertain or describe — from its content and language.",
      lesson: {
        sections: [
          {
            heading: "The main purposes",
            body: "- **To inform**: gives facts the reader may not know (news report, textbook).\n- **To explain**: makes something clear or understandable (manual, science article).\n- **To persuade**: wants the reader to think or act (advert, speech, review).\n- **To entertain**: wants the reader to enjoy (story, poem, diary).\n- **To describe**: recreates a person, place or event vividly (travel writing, description).\n\nMany texts blend purposes — an advert informs *and* persuades — so name the dominant one and note the blend.",
          },
          {
            heading: "Clues to purpose",
            body: "- **Content**: statistics and facts suggest informing; commands and benefits suggest persuading.\n- **Language**: formal vs informal, emotive vs neutral words.\n- **Structure**: a problem–solution shape suggests persuasion; chronological order suggests narrative or recount.",
          },
        ],
        keyFormulas: [
          { name: "Purpose + audience = choices", statement: "Everything a writer chooses — words, tone, structure — follows from who they write for and why." },
        ],
        workedExample: {
          problem: "Ad: 'Tired of queuing? ... The Zephyr is not for everyone. It is for people who refuse to waste their lives in queues.' What is the purpose?",
          solution: "To persuade the reader to buy the Zephyr. Evidence: commands ('Order yours today'), benefits ('arrive energised'), and exclusion ('not for everyone') that flatters the target reader.",
        },
      },
      questions: [
        {
          id: "cile-u1-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: advertExtract,
          stem: "What is the main purpose of this text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To entertain with a story about commuters" },
              { id: "b", text: "To inform readers about traffic laws" },
              { id: "c", text: "To describe a journey to work" },
              { id: "d", text: "To persuade readers to buy the Zephyr" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Dominant purpose is to persuade: commands, benefits and a call to action." },
            ],
            steps: [
              { reasoning: "'Order yours today' and 'join the revolution' are calls to action.", working: "\\text{order today}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** To persuade readers to buy the Zephyr",
            commonErrors: ["Choosing (a) — it mentions traffic but only as a problem the product solves."],
          },
        },
        {
          id: "cile-u1-purpose-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: diaryExtract,
          stem: "State the writer's purpose in keeping this diary entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "A diary records and reflects on personal experience — to entertain the self and preserve memory." },
            ],
            steps: [
              { reasoning: "It recounts a personal event: reading a poem to an audience.", working: "\\text{personal recount}", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose: to record and reflect on the experience (and resolve to continue).", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "To record and reflect on a personal experience — facing a fear — and to note a resolution to do it again.",
            commonErrors: ["Saying 'to inform others' — the diary is private, addressed to the writer's future self."],
          },
        },
        {
          id: "cile-u1-purpose-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: advertExtract,
          stem: "Explain how the line 'It is not for everyone. It is for people who refuse to waste their lives in queues' serves the writer's purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Exclusive appeal", statement: "Telling readers who a product is NOT for flatters the intended audience into self-selecting." },
            ],
            steps: [
              { reasoning: "'Not for everyone' creates exclusivity.", working: "\\text{exclusivity}", marks: 1, markCode: "AO2" },
              { reasoning: "'Refuse to waste their lives' flatters the reader's self-image.", working: "\\text{flattery}", marks: 1, markCode: "AO2" },
              { reasoning: "Together they persuade by making the reader feel chosen, not sold to.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The exclusive framing flatters the target reader — choosing the Zephyr marks them as someone who values freedom over queues — which persuades more effectively than a plain claim.",
            commonErrors: ["Saying it 'gives information about who should buy' without linking it to persuasion."],
          },
        },
        {
          id: "cile-u1-purpose-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: diaryExtract,
          stem: "The diary entry is written for the writer's future self, not a public audience.",
          parts: [
            { label: "a", prompt: "State two features of the language that show it is personal writing.", marks: 2 },
            { label: "b", prompt: "What does the writer want the reader (her future self) to take away?", marks: 2 },
            { label: "c", prompt: "Explain how the detail about the audience laughing changes the mood of the entry.", marks: 2 },
            { label: "d", prompt: "How would the entry be different if written for a newspaper audience? Suggest two changes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Personal register", statement: "Diary writing uses first person, informal tone and direct address to the self." },
              { kind: "technique", name: "Audience shaping", statement: "Register, content and structure all shift when the intended audience changes." },
            ],
            steps: [
              { part: "a", reasoning: "Feature: first person ('I did the thing').", working: "\\text{first person}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Feature: informal, honest voice ('Fear, it turns out, is mostly in your head').", working: "\\text{informal reflection}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Takeaway: facing fear is less terrible than imagined; courage is worthwhile.", working: "\\text{fear overstated}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "And: 'I will read again next term' — resolve to repeat the experience.", working: "\\text{resolve}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Before: tension, held breath, fear.", working: "\\text{tense}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The laugh breaks the tension — the audience becomes 'just people'.", working: "\\text{laughter breaks tension}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Change 1: formal register — remove contractions/colloquialisms, add context for strangers.", working: "\\text{formal register}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Change 2: third-person or reported style; focus on the event's news value rather than private feeling.", working: "\\text{reported/public angle}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Both changes justified by the audience shift.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) first person; informal reflective voice (b) fear is overrated — face it again (c) the laugh dissolves tension, humanising the audience (d) e.g. formal register and a public/news angle instead of private reflection",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two valid features of personal register identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Features missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Takeaway accurately stated.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explains the mood change with evidence.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "No explanation.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two audience-appropriate changes clearly explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One plausible change.", part: "d" },
            ],
            commonErrors: ["In (d) suggesting changes unrelated to audience (e.g. 'make it longer')."],
          },
        },
        {
          id: "cile-u1-purpose-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: diaryExtract,
          stem: "How many of these describe a diary's typical purpose? 'To record a personal experience.' 'To reflect on feelings.' 'To persuade a mass audience to buy.' 'To advertise a product.'",
          response: { type: "numeric", parts: [{ label: "Typical diary purposes", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "A diary records personal experience and reflects on it — it is private, not a sales tool." },
            ],
            steps: [
              { reasoning: "Recording experience and reflecting on feelings fit a diary = 2; persuading and advertising belong to other genres.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting all four — a diary is private and reflective, not persuasive or commercial."],
          },
        },
        {
          id: "cile-u1-purpose-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: advertExtract,
          stem: "The Zephyr advertisement informs readers about a product AND persuades them to buy it. What is its dominant purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To persuade" },
              { id: "b", text: "To entertain" },
              { id: "c", text: "To inform" },
              { id: "d", text: "To describe" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dominant purpose", statement: "When purposes blend, name the one the text is ultimately driving towards." },
            ],
            steps: [
              { reasoning: "The product details serve the call to action 'Order yours today'.", working: "\\text{order today}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** To persuade",
            commonErrors: ["Choosing (a) — facts are present but they are there to sell, not to inform for its own sake."],
          },
        },
        {
          id: "cile-u1-purpose-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: diaryExtract,
          stem: "State the writer's purpose in keeping this diary entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "To record and reflect on a personal experience." },
            ],
            steps: [
              { reasoning: "It recounts a personal event — reading a poem to an audience.", working: "\\text{personal recount}", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose: to preserve the memory and reflect on what was learned (fear is overrated; resolve to repeat).", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "To record and reflect on the experience of facing a fear, and to note a resolution to do it again.",
            commonErrors: ["Saying 'to entertain readers' — the diary is private; entertainment is not its purpose."],
          },
        },
        {
          id: "cile-u1-purpose-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: advertExtract,
          stem: "The Zephyr advert both informs and persuades. Explain which purpose is dominant and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Dominant purpose is the one the whole text drives towards." },
            ],
            steps: [
              { reasoning: "The facts (folds to briefcase size, charges in twenty minutes) are evidence for the sale.", working: "\\text{facts as evidence}", marks: 1, markCode: "AO2" },
              { reasoning: "Dominant purpose is persuasion: benefits, flattery and the command 'Order yours today'.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Persuasion is dominant — the product information exists to convince the reader to buy, ending in the call to action.",
            commonErrors: ["Saying 'both equally' without identifying which drives the text."],
          },
        },
        {
          id: "cile-u1-purpose-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: advertExtract,
          stem: "How many of these texts would most likely have the purpose 'to persuade'? 'A scooter advertisement.' 'A charity donation appeal.' 'A science article making photosynthesis clear.' 'A diary entry about a bad day.'",
          response: { type: "numeric", parts: [{ label: "Persuasive texts", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose: to persuade", statement: "Texts that aim to convince the reader to act or believe." },
            ],
            steps: [
              { reasoning: "The advert and the donation appeal both aim to convince the reader to act = 2.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the science article — it aims to explain, not persuade."],
          },
        },
        {
          id: "cile-u1-purpose-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: advertExtract,
          stem: "Explain how the advert's structure (problem, then product, then call to action) serves its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Problem–solution structure", statement: "Presenting a problem before the solution makes the product feel necessary." },
            ],
            steps: [
              { reasoning: "The opening problem ('queuing', 'lose an hour') creates a need.", working: "\\text{problem first}", marks: 1, markCode: "AO2" },
              { reasoning: "The product is then presented as the solution ('There is a better way').", marks: 1, markCode: "AO2" },
              { reasoning: "The call to action completes the persuasive arc.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The problem–solution–action shape makes the Zephyr feel necessary: it names the commuter's pain, offers the cure, then tells the reader exactly what to do.",
            commonErrors: ["Describing the structure without linking it to persuasion."],
          },
        },
        {
          id: "cile-u1-purpose-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: diaryExtract,
          stem: "Why does the writer end the diary entry with 'I will read again next term. That is a promise.'? Explain how it serves her purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Resolution", statement: "Ending on a resolve shows what the writer took from the experience." },
            ],
            steps: [
              { reasoning: "The entry's purpose is to record and reflect; the ending records the lesson learned.", working: "\\text{lesson recorded}", marks: 1, markCode: "AO2" },
              { reasoning: "'A promise' turns reflection into commitment — she will repeat the experience.", marks: 1, markCode: "AO2" },
              { reasoning: "For the future-self audience this is a motivational closing, fitting the diary's purpose.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It completes the reflection: having survived the fear once, she resolves to do it again — a commitment worth remembering, which is exactly what a diary is for.",
            commonErrors: ["Saying it 'summarises the event' — it actually records the takeaway and resolve."],
          },
        },
        {
          id: "cile-u1-purpose-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: advertExtract,
          stem: "How many of these lines from the advert are COMMANDS (imperatives directing the reader to act)? 'Order yours today.' 'There is a better way.' 'Join the revolution.' 'Tired of queuing?'",
          response: { type: "numeric", parts: [{ label: "Imperative commands", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hook", statement: "Commands direct the reader to act — key persuasive devices." },
            ],
            steps: [
              { reasoning: "'Order yours today' and 'Join the revolution' are imperatives = 2; 'There is a better way' is a statement and 'Tired of queuing?' is a question.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'There is a better way' — it is a statement, not a command."],
          },
        },
        {
          id: "cile-u1-purpose-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: diaryExtract,
          stem: "Which statement correctly distinguishes the diary's purpose from its audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Purpose and audience are the same thing" },
              { id: "b", text: "Purpose is what the writer wants to achieve; audience is who it is written for" },
              { id: "c", text: "A diary's purpose is to persuade its audience" },
              { id: "d", text: "Purpose is the reader; audience is the writer's goal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose vs audience", statement: "Purpose = the writer's aim; audience = the intended reader." },
            ],
            steps: [
              { reasoning: "The diary aims to record/reflect (purpose) for her future self (audience).", working: "\\text{aim vs reader}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Purpose is what the writer wants to achieve; audience is who it is written for",
            commonErrors: ["Choosing (a) — confusing the two concepts."],
          },
        },
        {
          id: "cile-u1-purpose-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: advertExtract,
          stem: "Analyse how the advert's language choices serve its persuasive purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive language", statement: "Commands, benefits, repetition and flattery all drive the reader towards buying." },
            ],
            steps: [
              { reasoning: "Commands: 'Order yours today', 'join the revolution' direct the reader to act.", working: "\\text{commands}", marks: 1, markCode: "AO2" },
              { reasoning: "Benefits: 'arrive energised, not exhausted' sells the outcome, not the product.", marks: 1, markCode: "AO2" },
              { reasoning: "Flattery/exclusion: 'not for everyone' flatters the self-selecting reader.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion: every choice serves the purpose of persuading a purchase.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Commands push action, benefit language sells the outcome, and the exclusive framing flatters the reader — all serving the persuasive purpose of making them buy.",
            commonErrors: ["Listing techniques without explaining how each persuades."],
          },
        },
        {
          id: "cile-u1-purpose-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: advertExtract,
          stem: "You are analysing the Zephyr advertisement.",
          parts: [
            { label: "a", prompt: "State the dominant purpose of the text.", marks: 2 },
            { label: "b", prompt: "Identify two pieces of product information that serve that purpose.", marks: 2 },
            { label: "c", prompt: "Explain how 'There is a better way' acts as a turning point.", marks: 2 },
            { label: "d", prompt: "How would the text's purpose change if it were a safety leaflet for the scooter instead? Suggest two changes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Dominant purpose here is to persuade; a leaflet would shift to to inform/to explain." },
            ],
            steps: [
              { part: "a", reasoning: "Dominant purpose: to persuade the reader to buy the Zephyr.", working: "\\text{to persuade}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Justified by the call to action and benefit-led language.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Info 1: folds to briefcase size / charges in twenty minutes.", working: "\\text{specs}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Info 2: electric, glides past traffic — each framed as a benefit.", working: "\\text{benefit framing}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It pivots from problem to solution, making the product feel like the answer.", working: "\\text{pivot}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Short, punchy phrasing heightens the sales pitch.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Change 1: purpose shifts to informing/explaining — instructions and safety rules replace benefits.", working: "\\text{inform not sell}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Change 2: remove commands like 'Order yours today'; use clear sequential instructions and warnings.", working: "\\text{instructions}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Both changes justified by the new purpose.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) to persuade (b) e.g. folding size; twenty-minute charge — each framed as a benefit (c) it pivots problem→solution, making the scooter feel like the answer (d) e.g. replace benefits with safety instructions; replace 'order today' with clear steps",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Dominant purpose correctly identified and justified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong or unjustified.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid product details linked to persuasion.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Details missing or unlinked.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explains the turning point's persuasive role.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "No valid explanation.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two purpose-appropriate changes clearly explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One plausible change.", part: "d" },
            ],
            commonErrors: ["In (d) changing only the topic, not the purpose-driven language."],
          },
        },
        {
          id: "cile-u1-purpose-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: diaryExtract,
          stem: "You are analysing the diary entry.",
          parts: [
            { label: "a", prompt: "State the writer's purpose.", marks: 2 },
            { label: "b", prompt: "Give two features of language that reveal this purpose.", marks: 2 },
            { label: "c", prompt: "What does the writer want her future self to remember?", marks: 2 },
            { label: "d", prompt: "Explain how the purpose would differ if this were written as a speech to students about overcoming fear.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Diary: record and reflect privately; a speech would aim to persuade/inspire an audience." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose: to record and reflect on a personal experience of facing fear.", working: "\\text{record + reflect}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Stated clearly.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Feature: first person, informal voice ('The strangest part was').", working: "\\text{first person informal}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Feature: direct reflection and resolve ('Fear ... is mostly in your head').", working: "\\text{reflection}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Remember: fear is mostly imagined; the audience was 'just people'.", working: "\\text{fear overrated}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "And: she intends to read again — courage is repeatable.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "A speech would persuade/inspire rather than privately reflect.", working: "\\text{persuade/inspire}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It would use direct address, rhetorical devices and a public-friendly structure.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) to record and reflect on facing fear (b) e.g. first-person informal voice; direct reflective conclusions (c) fear is overrated and courage is repeatable (d) a speech would aim to inspire/persuade an audience, using direct address and rhetorical techniques",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Purpose accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid language features.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Features missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Takeaway accurately identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Purpose shift explained convincingly.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid explanation.", part: "d" },
            ],
            commonErrors: ["In (d) saying only 'it would be more formal' without explaining the purpose shift."],
          },
        },
      ],
    },
    {
      id: "cile-u1-audience",
      title: "Audience and tone",
      skill: "Analyse how a writer adjusts tone, register and techniques to suit an intended audience.",
      lesson: {
        sections: [
          {
            heading: "Audience shapes everything",
            body: "The same information is written differently for different readers:\n\n- **Experts** get technical terms and assumed knowledge.\n- **Children** get simple sentences, examples and encouragement.\n- **Sceptical readers** get evidence, logic and acknowledgement of doubts.\n- **General public** gets a balance: clear but not condescending.",
          },
          {
            heading: "Tone and register",
            body: "- **Tone**: the writer's attitude — urgent, playful, respectful, sarcastic, reassuring.\n- **Register**: formality level — slang and contractions (informal) vs full sentences and formal vocabulary (formal).\n- Clues: pronouns ('we' vs 'you'), sentence length, word choice, punctuation.",
          },
          {
            heading: "Analysing for the audience",
            body: "Ask: Who is this for? What do they already know? What does the writer want them to feel or do? Then check whether the language matches: does a 'formal' text use slang? Does a children's text talk down to them?",
          },
        ],
        keyFormulas: [
          { name: "Audience analysis", statement: "Audience → assumptions about knowledge → choice of register, tone and technique → expected reader response." },
        ],
        workedExample: {
          problem: "Ad line: 'It is for people who refuse to waste their lives in queues.' Who is the audience and what tone is used?",
          solution: "Audience: commuters who value time and self-image. Tone: flattering, aspirational — 'refuse to waste their lives' flatters the reader as someone in control.",
        },
      },
      questions: [
        {
          id: "cile-u1-audience-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: advertExtract,
          stem: "Who is the intended audience of this advertisement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electricity engineers" },
              { id: "b", text: "Traffic police officers" },
              { id: "c", text: "Scooter manufacturers" },
              { id: "d", text: "Commuters frustrated by traffic queues" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "The reader the text is built for — here, people stuck in traffic who want an alternative." },
            ],
            steps: [
              { reasoning: "The opening question and benefits target commuters losing time in queues.", working: "\\text{commuters in queues}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Commuters frustrated by traffic queues",
            commonErrors: ["Choosing (d) — manufacturers would need technical specs, not emotional appeals."],
          },
        },
        {
          id: "cile-u1-audience-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: advertExtract,
          stem: "Identify two techniques the writer uses to address the reader directly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Direct address", statement: "Second person ('you', 'your') and rhetorical questions pull the reader into the text." },
            ],
            steps: [
              { reasoning: "Technique 1: rhetorical question 'Tired of queuing?'", working: "\\text{rhetorical question}", marks: 1, markCode: "AO2" },
              { reasoning: "Technique 2: second person / command 'Order yours today' and possessive 'your lives'.", working: "\\text{'your'; 'order yours'}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical question ('Tired of queuing?') and second-person address/command ('your lives', 'Order yours today').",
            commonErrors: ["Listing content (scooter features) rather than audience-directed techniques."],
          },
        },
        {
          id: "cile-u1-audience-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: diaryExtract,
          stem: "Analyse the tone of the diary entry and explain how it suits the intended audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone", statement: "Tone is the writer's attitude; diary tone is honest, informal and reflective." },
            ],
            steps: [
              { reasoning: "Tone identified: honest, self-deprecating then relieved ('I laughed too').", working: "\\text{honest, relieved}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: informal phrasing 'The strangest part was'.", working: "\\text{informal phrasing}", marks: 1, markCode: "AO2" },
              { reasoning: "Link to audience: the future self needs honesty, not performance.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The tone is candid and quietly triumphant — honest about fear, then relieved. This suits a private audience (her future self), who needs truth rather than polish.",
            commonErrors: ["Describing tone without linking it to the audience."],
          },
        },
        {
          id: "cile-u1-audience-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: advertExtract,
          stem: "You are asked to rewrite the Zephyr advertisement for two different audiences.",
          parts: [
            { label: "a", prompt: "Describe the tone and register you would use for teenage readers.", marks: 2 },
            { label: "b", prompt: "Describe the tone and register for a business audience of delivery managers.", marks: 2 },
            { label: "c", prompt: "Give one example of a phrase that would suit each audience.", marks: 2 },
            { label: "d", prompt: "Explain why the same product needs different texts for different audiences.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Informal slang suits teens; formal, benefit-driven language suits business." },
              { kind: "technique", name: "Audience", statement: "Different readers have different priorities; the pitch must match them." },
            ],
            steps: [
              { part: "a", reasoning: "Teens: casual, energetic, slang-adjacent, peer-oriented.", working: "\\text{casual/energetic}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Register described precisely.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Business: formal, precise, ROI/time-saving focused.", working: "\\text{formal, ROI-focused}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Register described precisely.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Teen example: 'Ditch the queue. Own the morning.'", working: "\\text{ditch the queue}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Business example: 'Reduce average commute time by 40%.'", working: "\\text{reduce commute time}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Different audiences value different benefits (freedom vs productivity).", working: "\\text{different benefits}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Language must match expectations: slang alienates business readers, formality bores teens.", working: "\\text{mismatch risk}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: audience determines every choice.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) casual, energetic, peer-appeal register for teens (b) formal, data-led, productivity-focused for managers (c) e.g. 'Ditch the queue' vs 'Cut commute time by 40%' (d) audiences prioritise different benefits, so tone/register must differ",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate tone/register described for teens.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Inappropriate or vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate tone/register described for business.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Inappropriate or vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "One apt example phrase for each audience.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Examples missing or wrong register.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explains audience-driven adaptation convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial explanation.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'because they are different people' without explaining what changes and why."],
          },
        },
        {
          id: "cile-u1-audience-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: diaryExtract,
          stem: "Who is the intended audience of this diary entry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A newspaper readership" },
              { id: "b", text: "Poetry critics" },
              { id: "c", text: "The writer's future self" },
              { id: "d", text: "The writer's classmates" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "The reader the text is written for — a diary addresses the writer's future self." },
            ],
            steps: [
              { reasoning: "Private, first-person reflection with no public address indicates a self-audience.", working: "\\text{future self}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The writer's future self",
            commonErrors: ["Choosing (b) — classmates appear in the story but are not the audience."],
          },
        },
        {
          id: "cile-u1-audience-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: advertExtract,
          stem: "How many of these phrases use a FORMAL register? 'There is a better way.' 'The scooter facilitates efficient urban transit.' 'Passengers are requested to board promptly.' 'Utilise the Zephyr to optimise your commute.'",
          response: { type: "numeric", parts: [{ label: "Formal phrases", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Informal register uses short, conversational phrasing; formal register uses long words and full constructions." },
            ],
            steps: [
              { reasoning: "'Facilitates', 'requested' and 'utilise/optimise' are formal vocabulary = 3; 'There is a better way' is short and conversational.", working: "3", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'There is a better way' — it is informal, matching the advert's punchy tone."],
          },
        },
        {
          id: "cile-u1-audience-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: diaryExtract,
          stem: "Identify the intended audience of the diary entry and give one clue that reveals it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience clues", statement: "Register, pronouns and content reveal who a text is for." },
            ],
            steps: [
              { reasoning: "Audience: the writer's future self (private diary).", working: "\\text{future self}", marks: 1, markCode: "AO2" },
              { reasoning: "Clue: first-person honesty and personal resolve ('That is a promise') suit a private reader.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Audience: her future self; clue: candid first-person reflection and a personal promise need no public polish.",
            commonErrors: ["Identifying the audience as 'anyone who reads it' without a clue."],
          },
        },
        {
          id: "cile-u1-audience-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: advertExtract,
          stem: "Describe the tone of the Zephyr advertisement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone", statement: "Tone is the writer's attitude — here, urgent, aspirational and flattering." },
            ],
            steps: [
              { reasoning: "Tone identified: urgent and aspirational ('join the revolution').", working: "\\text{urgent/aspirational}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: commands and exclusive flattery ('not for everyone').", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Urgent, aspirational and flattering — it flatters the reader as someone who 'refuses to waste their lives' and pushes them to act now.",
            commonErrors: ["Calling it 'formal' — the advert is deliberately informal and punchy."],
          },
        },
        {
          id: "cile-u1-audience-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: advertExtract,
          stem: "How many of these phrases FIT the Zephyr advert's aspirational commuter register? 'Ditch the queue.' 'Arrive energised, not exhausted.' 'Subject to availability. Terms and conditions apply.' 'Join the revolution.'",
          response: { type: "numeric", parts: [{ label: "Fitting phrases", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Audience fit", statement: "Language must match the audience's expectations; legal small-print kills the aspirational tone." },
            ],
            steps: [
              { reasoning: "Three phrases are punchy and aspirational; 'terms and conditions' is dry legalese that alienates commuters.", working: "3", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'terms and conditions' — it clashes with the advert's energetic tone."],
          },
        },
        {
          id: "cile-u1-audience-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: advertExtract,
          stem: "Analyse how the advert's use of the second person ('you', 'your') shapes its relationship with the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Second person", statement: "Addressing the reader as 'you' creates directness and personal involvement." },
            ],
            steps: [
              { reasoning: "'your lives' and 'Order yours' make the reader the subject of every sentence.", working: "\\text{'your'; 'yours'}", marks: 1, markCode: "AO2" },
              { reasoning: "It creates intimacy — the advert speaks to the reader as an individual, not a crowd.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: the reader feels personally addressed and responsible for acting.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Second-person address makes the advert feel like a personal conversation, involving the reader directly so they feel the problem and the solution as their own.",
            commonErrors: ["Saying 'it is polite' — the effect is involvement and pressure, not politeness."],
          },
        },
        {
          id: "cile-u1-audience-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: diaryExtract,
          stem: "Explain how the diary's register suits its intended audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Informal, honest register suits a private audience who needs truth, not performance." },
            ],
            steps: [
              { reasoning: "Register is informal and candid: 'The strangest part was', 'it turns out'.", working: "\\text{informal/candid}", marks: 1, markCode: "AO2" },
              { reasoning: "It admits fear and shaking hands — too honest for a public audience.", marks: 1, markCode: "AO2" },
              { reasoning: "For her future self, honesty is the point: she needs the truth recorded.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The candid, informal register suits a private audience: her future self needs an honest record of fear and triumph, not a polished public account.",
            commonErrors: ["Describing the register without linking it to the audience's needs."],
          },
        },
        {
          id: "cile-u1-audience-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: advertExtract,
          stem: "How many of these audiences would the Zephyr advert suit? 'Commuters stuck in traffic.' 'Tourists visiting the city.' 'Scooter repair technicians.' 'City mayors.'",
          response: { type: "numeric", parts: [{ label: "Suitable audiences", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "The reader the text is built for — here, frustrated commuters." },
            ],
            steps: [
              { reasoning: "Only commuters stuck in traffic match the opening question and benefits.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting technicians — they need technical specs, not emotional benefits."],
          },
        },
        {
          id: "cile-u1-audience-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: diaryExtract,
          stem: "Which word best describes the diary writer's tone towards her audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal and detached" },
              { id: "b", text: "Urgent and commanding" },
              { id: "c", text: "Candid and reflective" },
              { id: "d", text: "Sarcastic and mocking" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone", statement: "Tone is the writer's attitude; here it is honest, informal and thoughtful." },
            ],
            steps: [
              { reasoning: "'It turns out', 'I laughed too' show honest self-reflection.", working: "\\text{honest reflection}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Candid and reflective",
            commonErrors: ["Choosing (d) — there are no commands or urgency; it is a private entry."],
          },
        },
        {
          id: "cile-u1-audience-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: diaryExtract,
          stem: "Analyse how the diary entry's content and style are shaped by its audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Audience shaping", statement: "A private audience allows candour, first person and unresolved feeling." },
            ],
            steps: [
              { reasoning: "Content: private fears and a promise — things she would not publish.", working: "\\text{private content}", marks: 1, markCode: "AO2" },
              { reasoning: "Style: first person, informal phrasing, direct self-address.", marks: 1, markCode: "AO2" },
              { reasoning: "Audience fit: her future self needs honesty and a record, not entertainment.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion: every choice serves the private purpose for a private reader.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The audience is her future self, so the entry is candid first-person reflection — private fears, honest detail and a personal promise — all choices a public audience would never see.",
            commonErrors: ["Listing features without explaining why a private audience permits them."],
          },
        },
        {
          id: "cile-u1-audience-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: diaryExtract,
          stem: "You must adapt the diary entry for a school magazine audience.",
          parts: [
            { label: "a", prompt: "Describe the tone and register suitable for a magazine audience.", marks: 2 },
            { label: "b", prompt: "Give two changes to content needed for public readers.", marks: 2 },
            { label: "c", prompt: "Give one example phrase that would suit the magazine version.", marks: 2 },
            { label: "d", prompt: "Explain why the diary's private audience allowed details a magazine would cut.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Magazine register is more polished but still accessible; private diary register is raw and candid." },
            ],
            steps: [
              { part: "a", reasoning: "Magazine: warm, polished, mildly formal — engaging but not raw.", working: "\\text{polished warm}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Register described precisely.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Content change 1: add context for strangers (what the poem was, why it mattered).", working: "\\text{context}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Content change 2: cut or soften the most private details ('hands shook').", working: "\\text{soften private}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Example: 'Standing on that stage taught me that fear is mostly in your head.'", working: "\\text{polished example}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Phrase suits a public, reflective audience.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Private audience needs raw honesty; public readers need context and polish.", working: "\\text{raw vs polished}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Details like shaking hands or 'I laughed too' are too intimate for strangers.", working: "\\text{too intimate}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: audience determines what is kept and how it is expressed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) warm, polished, mildly formal register (b) add context for strangers; soften/cut the most private details (c) e.g. 'Standing on that stage taught me that fear is mostly in your head.' (d) a private audience tolerates raw candour; a public audience needs context, polish and less intimacy",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate magazine tone/register described.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Inappropriate or vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two audience-appropriate content changes.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Changes missing or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Apt example phrase in the right register.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Example missing or wrong register.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explains audience-driven adaptation convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial explanation.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'it would be shorter' without explaining the audience reason."],
          },
        },
        {
          id: "cile-u1-audience-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: advertExtract,
          stem: "You are rewriting the Zephyr advert for two new audiences.",
          parts: [
            { label: "a", prompt: "Describe the audience and tone for teenage readers.", marks: 2 },
            { label: "b", prompt: "Describe the audience and tone for delivery-fleet managers.", marks: 2 },
            { label: "c", prompt: "Give one example phrase suited to each audience.", marks: 2 },
            { label: "d", prompt: "Explain why audience determines every language choice in an advert.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Audience", statement: "Different audiences have different priorities, so tone, register and benefits must change." },
            ],
            steps: [
              { part: "a", reasoning: "Teens: casual, energetic, peer-appeal; freedom and image matter.", working: "\\text{casual/energetic}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Audience and tone both described.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Managers: formal, data-led, productivity-focused.", working: "\\text{formal/data-led}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Audience and tone both described.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Teen example: 'Ditch the queue. Own the morning.'", working: "\\text{ditch the queue}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Manager example: 'Cut average commute time by 40%.'", working: "\\text{cut commute time}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Audiences value different benefits, so the pitch must match theirs.", working: "\\text{matching benefits}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Wrong register alienates the reader, so every choice follows from the audience.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) teens — casual, energetic, freedom/image appeal (b) managers — formal, data-led, productivity appeal (c) e.g. 'Ditch the queue' vs 'Cut commute time by 40%' (d) audiences prioritise different benefits, so tone/register must match or the advert fails",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Audience and tone appropriate for teens.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Inappropriate or vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Audience and tone appropriate for managers.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Inappropriate or vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "One apt example phrase for each.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Examples missing or wrong register.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Explains audience-driven choices.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid explanation.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'because audiences differ' without explaining what specifically changes."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u1-purpose-audience-notes",
      title: "Purpose and audience — revision notes",
      summary: "Why texts are written, who they are for, and how tone/register reveal both.",
      sections: [
        {
          heading: "Purposes",
          body: "Inform (facts), explain (clarity), persuade (convince), entertain (enjoy), describe (recreate). Most texts blend purposes — name the dominant one.",
        },
        {
          heading: "Audience signals",
          body: "Register (formal/informal), tone (attitude), pronouns ('you' vs 'we'), assumed knowledge, and techniques (rhetorical questions, commands) all reveal the intended reader.",
        },
        {
          heading: "Exam technique",
          body: "Always link technique to effect on the audience: 'The rhetorical question hooks commuters who feel trapped in queues.'",
        },
      ],
    },
  ],
};
