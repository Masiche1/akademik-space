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
              { id: "a", text: "To inform readers about traffic laws" },
              { id: "b", text: "To persuade readers to buy the Zephyr" },
              { id: "c", text: "To entertain with a story about commuters" },
              { id: "d", text: "To describe a journey to work" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Dominant purpose is to persuade: commands, benefits and a call to action." },
            ],
            steps: [
              { reasoning: "'Order yours today' and 'join the revolution' are calls to action.", working: "\\text{order today}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** To persuade readers to buy the Zephyr",
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
              { id: "a", text: "Traffic police officers" },
              { id: "b", text: "Commuters frustrated by traffic queues" },
              { id: "c", text: "Electricity engineers" },
              { id: "d", text: "Scooter manufacturers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "The reader the text is built for — here, people stuck in traffic who want an alternative." },
            ],
            steps: [
              { reasoning: "The opening question and benefits target commuters losing time in queues.", working: "\\text{commuters in queues}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Commuters frustrated by traffic queues",
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
