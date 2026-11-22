import type { Lesson, TextExtract } from "../../../types.ts";

const MODEL_STORY: TextExtract = {
  title: "The Key in the Orchard",
  author: "Written for Akademik Space",
  source: "Original model narrative opening",
  text: "Every summer of my childhood ended the same way: with my grandmother pressing a small iron key into my palm and saying, 'Keep it safe.' I never asked what it opened. In our family, questions were a kind of trespass.\n\nThis August was different. She did not hold out the key. She sat in her kitchen chair with her hands folded over her knees, looking at the orchard through the window as though it might leave if she blinked.\n\n'Go and look under the third apple tree,' she said at last.\n\nI went. The grass was long and wet, and the apples lay where they had fallen, brown and softening, humming with wasps. At the foot of the third tree, half swallowed by roots, was a square of rusted metal with a keyhole.\n\nI knelt. My hands, I noticed, were shaking. The key turned as easily as if it had been waiting all those years for someone to ask.",
};

const DIALOGUE_MODEL: TextExtract = {
  title: "The Interview",
  author: "Written for Akademik Space",
  source: "Original model dialogue",
  text: "Mr Okafor did not look up from the papers. 'You're early,' he said.\n\n'I thought it best,' said Dara. She had rehearsed this in the mirror. In the mirror it had sounded confident.\n\n'Sit.' He turned a page. 'Why do you want this job?'\n\nDara's mouth was suddenly very dry. 'Because,' she began, and stopped. The clock ticked. Somewhere a door banged. 'Because I'm good at it,' she said, and her voice came out smaller than she had planned.\n\nFor the first time, Mr Okafor looked up. He studied her for a long moment, then, to her astonishment, he smiled. 'Good,' he said. 'Most people tell me they're passionate.'",
};

export const lesson31: Lesson = {
  id: "el9-u3-lesson-3-1",
  code: "3-1",
  title: "Writing to Narrate",
  goal: "I CAN shape a narrative with a purposeful structure and create convincing characters through description and dialogue.",
  standards: ["KS3 Writing", "AO4", "AO5"],
  vocabulary: [
    { term: "Narrative arc", definition: "The shape of a story: opening, build-up, climax, resolution." },
    { term: "Hook", definition: "An opening that grabs the reader's attention immediately." },
    { term: "Flashback", definition: "A section that returns to an earlier time in the story." },
    { term: "Show, don't tell", definition: "Revealing feelings through action, speech and detail instead of naming them." },
    { term: "Characterisation", definition: "How a writer builds a character through description, actions, speech and thoughts." },
    { term: "Subtext", definition: "What characters really mean beneath what they actually say." },
    { term: "Dialogue tag", definition: "Words such as 'she said' that attribute speech to a speaker." },
  ],
  concepts: [
    {
      id: "el9-u3-narrative-structure",
      title: "Narrative structure",
      skill: "Plan and write a narrative with an effective opening, a controlled build-up, a turning point and a satisfying ending.",
      lesson: {
        sections: [
          {
            heading: "Planning the shape of a story",
            body: "A strong short story is built on one moment of change. Plan five stages: **opening** (hook and setting), **build-up** (tension or mystery develops), **climax** (the turning point), **resolution** and an **ending** that echoes the beginning or leaves a lasting image. In a short piece, focus on one event and one or two characters. Trying to cover too much leads to rushed storytelling.",
          },
          {
            heading: "Controlling pace and focus",
            body: "Vary the pace: slow, detailed sentences for important moments; short sentences for sudden events. Shift focus deliberately, from a wide setting to a small detail, or from a character's face to a distant sound. Consider a cyclical structure, as in the model where the key returns at the close. Paragraph at each shift in time, place or speaker, and make every detail work: if you mention a key, it must matter.",
          },
        ],
        keyFormulas: [
          { name: "Five-part arc", statement: "Opening, build-up, climax, resolution, ending." },
          { name: "Pace", statement: "Long sentences slow time; short sentences speed it up or deliver impact." },
          { name: "Cyclical structure", statement: "End by returning to an image or phrase from the opening." },
        ],
        workedExample: {
          problem: "How does the model opening 'The Key in the Orchard' hook the reader?",
          solution: "The opening sentence establishes a repeated ritual and introduces the intriguing object, the key, within the first line. The line 'questions were a kind of trespass' hints at family secrets, creating mystery. The second paragraph interrupts the ritual ('This August was different'), signalling that something is about to change. The structure then moves from conversation to action to discovery, ending on the key turning 'as if it had been waiting', which closes the mystery while suggesting more to come.",
        },
      },
      questions: [
        {
          id: "el9-u3-narrative-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MODEL_STORY,
          stem: "Which sentence marks the turning point that signals the story is about to change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I never asked what it opened." },
              { id: "b", text: "Every summer of my childhood ended the same way." },
              { id: "c", text: "This August was different." },
              { id: "d", text: "I knelt." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Turning point", statement: "A sentence that breaks the established pattern and signals change." }],
            steps: [{ reasoning: "After a repeated ritual, 'This August was different' breaks the pattern and announces change.", evidence: "This August was different.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** 'This August was different.' It interrupts the established routine.",
            commonErrors: ["Choosing (b), which establishes the pattern rather than breaking it."],
          },
        },
        {
          id: "el9-u3-narrative-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MODEL_STORY,
          stem: "Explain why the writer ends the story on the sentence 'The key turned as easily as if it had been waiting all those years for someone to ask.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cyclical structure", statement: "Echoing an opening image or idea at the end." },
              { kind: "technique", name: "Personification", statement: "The key is given a human wish for effect." },
            ],
            steps: [
              { reasoning: "It echoes the opening key and the idea of unasked questions: 'for someone to ask', so the ending resolves the opening theme.", evidence: "waiting all those years for someone to ask", marks: 1, markCode: "AO2" },
              { reasoning: "The simile suggests ease and inevitability, giving closure.", evidence: "as easily as if", marks: 1, markCode: "AO2" },
              { reasoning: "It leaves a lasting, mysterious image because the reader still does not know what is inside.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "It echoes the opening key and the family's unasked questions, giving closure, while the personified key leaves a mysterious image: what was it waiting to reveal?",
            commonErrors: ["Saying 'it finishes the story' with no effect.", "Ignoring the link to the opening."],
          },
        },
        {
          id: "el9-u3-narrative-structure-q3",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Write the opening of a story (about 150 to 200 words) that begins with someone discovering an object that should not be there. Your writing will be marked for content and organisation (AO4) and for technical accuracy (AO5).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hook", statement: "Open with an intriguing detail, line of speech or action." },
              { kind: "skill", name: "Controlled structure", statement: "Vary sentence length and shift focus deliberately." },
              { kind: "skill", name: "Technical accuracy", statement: "Accurate spelling, punctuation and sentence control." },
            ],
            steps: [
              { reasoning: "A hook in the first sentence that raises a question or creates atmosphere.", marks: 3, markCode: "AO4" },
              { reasoning: "A clear sense of place, character and mood, with some figurative language or sensory detail.", marks: 3, markCode: "AO4" },
              { reasoning: "Controlled structure: paragraphing, pace and shifts of focus leading to a sense of what will happen next.", marks: 3, markCode: "AO4" },
              { reasoning: "Accurate spelling, punctuation and varied sentence structures with ambitious vocabulary.", marks: 3, markCode: "AO5" },
            ],
            levels: [
              { level: "Level 4", marks: "10-12", descriptor: "Assured, engaging opening with a purposeful hook and controlled structure; ambitious vocabulary and accurate, varied sentences." },
              { level: "Level 3", marks: "7-9", descriptor: "Clear opening with some effective devices; generally controlled and accurate." },
              { level: "Level 2", marks: "4-6", descriptor: "Some attempt at a hook and structure; some errors that occasionally hinder meaning." },
              { level: "Level 1", marks: "1-3", descriptor: "Simple, limited opening; frequent errors; little control of structure." },
            ],
            finalAnswer: "A top response opens with an intriguing line (for example: 'The shoebox was warm, which was the first wrong thing about it'), builds atmosphere through sensory detail, uses short sentences for the moment of discovery and ends the opening on a question or unsettling image.",
            commonErrors: ["Starting with 'One day...' and a list of events.", "Trying to fit an entire plot into 200 words.", "Telling emotions ('I was scared') instead of showing them."],
          },
        },
        {
          id: "el9-u3-narrative-structure-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: MODEL_STORY,
          stem: "Use the model narrative to answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two details from the second paragraph that show the grandmother's behaviour has changed.", marks: 2 },
            { label: "b", prompt: "Explain how the writer builds tension in the fourth and fifth paragraphs.", marks: 6 },
            { label: "c", prompt: "Write the next section of the story (about 200 words), continuing from the opening of the box. Control your structure and pace to build to a surprising discovery.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Building tension", statement: "Slow description, sensory detail and physical reactions delay the revelation." },
              { kind: "skill", name: "Structural control", statement: "Paragraphing, pace and focus shifts guide the reader." },
            ],
            steps: [
              { part: "a", reasoning: "She does not hold out the key.", evidence: "She did not hold out the key.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "She sits looking anxiously at the orchard, hands folded.", evidence: "as though it might leave if she blinked", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Slow, sensory detail (long wet grass, softening apples, wasps) delays the discovery and builds unease.", evidence: "humming with wasps", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The object is revealed gradually: 'half swallowed by roots', 'rusted metal', 'keyhole'.", evidence: "half swallowed by roots", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Short sentence 'I knelt.' and physical reaction 'shaking' slow the pace and show emotion without telling.", evidence: "My hands, I noticed, were shaking.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Continues logically from the model, maintaining the voice and mystery.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Builds to a surprising but plausible discovery using sensory detail and figurative language.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Controls pace and paragraphing with short sentences at the moment of discovery.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Accurate punctuation, spelling and varied, ambitious vocabulary.", marks: 3, markCode: "AO5" },
            ],
            levels: [
              { part: "b", level: "Level 3", marks: "5-6", descriptor: "Clear, well-chosen analysis of how detail, pace and sentence length build tension." },
              { part: "b", level: "Level 2", marks: "3-4", descriptor: "Some understanding of how tension is built, with some relevant references." },
              { part: "b", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments." },
              { part: "c", level: "Level 4", marks: "10-12", descriptor: "Assured, controlled writing that builds convincingly to a discovery; ambitious vocabulary and accurate, varied sentences." },
              { part: "c", level: "Level 3", marks: "7-9", descriptor: "Clear, sustained writing with effective devices; generally accurate." },
              { part: "c", level: "Level 2", marks: "4-6", descriptor: "Some control of structure; some errors." },
              { part: "c", level: "Level 1", marks: "1-3", descriptor: "Simple, limited writing; frequent errors." },
            ],
            finalAnswer: "(a) She does not hold out the key; she stares at the orchard 'as though it might leave if she blinked'. (b) Tension is built by slow sensory description, gradual revelation of the object and the short sentence 'I knelt.' plus the shaking hands. (c) A strong continuation keeps the first-person voice, delays the reveal with detail and uses short sentences at the crucial moment.",
            commonErrors: ["Rushing to the reveal in two sentences.", "Changing narrator voice.", "Describing tension without quoting."],
          },
        },
      ],
    },
    {
      id: "el9-u3-characterisation-dialogue",
      title: "Characterisation and dialogue",
      skill: "Create convincing characters through selected detail, actions and punctuated dialogue with subtext.",
      lesson: {
        sections: [
          {
            heading: "Show, don't tell",
            body: "Instead of writing 'Dara was nervous', show it: 'Dara's mouth was suddenly very dry.' Choose one or two telling details: a gesture, an object, a habit. Characters are revealed by what they do, what they say and how others react. A reader trusts what they infer more than what they are simply told.",
          },
          {
            heading: "Writing dialogue",
            body: "Start a new line for each new speaker. Punctuate correctly: inside the speech marks, put the comma, full stop or question mark before the closing mark ('You're early,' he said.). Keep speech brief and purposeful, and use **subtext**: characters rarely say exactly what they feel. Use action beats and simple tags ('said') and vary sentence length to match the speaker.",
          },
        ],
        keyFormulas: [
          { name: "Show, don't tell", statement: "Reveal feeling through action, speech and detail." },
          { name: "Dialogue punctuation", statement: "New line per speaker; punctuation inside speech marks; lower-case after a comma." },
          { name: "Subtext", statement: "What is meant beneath what is said." },
        ],
        workedExample: {
          problem: "How does the writer present Mr Okafor in 'The Interview'?",
          solution: "Mr Okafor is presented as controlled and slightly intimidating through his terse speech and actions. He 'did not look up from the papers', which suggests he is dismissive and holds power. His clipped commands, 'Sit.', add authority. However, his surprising smile and the line 'Most people tell me they're passionate' reveal wit and a preference for honesty, making him a more complex, human figure than the stern interviewer first appears.",
        },
      },
      questions: [
        {
          id: "el9-u3-characterisation-dialogue-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence best shows nervousness without stating it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She said that she was nervous." },
              { id: "b", text: "Dara felt nervous and worried." },
              { id: "c", text: "She was very nervous about the interview." },
              { id: "d", text: "Her fingers twisted the strap of her bag until the knuckles whitened." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Show, don't tell", statement: "Use physical detail to imply emotion." }],
            steps: [{ reasoning: "Option (a) uses a physical action to imply nervousness; the others name the emotion directly.", evidence: "twisted the strap of her bag", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(d)** It shows nervousness through action instead of naming it.",
            commonErrors: ["Choosing (b) or (c) because they are clearer; clarity is not the same as showing."],
          },
        },
        {
          id: "el9-u3-characterisation-dialogue-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this line of dialogue so that it is punctuated correctly: \"where are you going\" asked Mum \"to the library\" I replied",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue punctuation", statement: "Capital letters begin speech; punctuation goes inside the speech marks; new speaker, new line." },
              { kind: "skill", name: "Technical accuracy", statement: "Accurate punctuation is assessed under AO5." },
            ],
            steps: [
              { reasoning: "Capital letter to begin each piece of speech and a question mark inside the speech marks.", evidence: "'Where are you going?' asked Mum.", marks: 1, markCode: "AO5" },
              { reasoning: "New line for the new speaker.", marks: 1, markCode: "AO5" },
              { reasoning: "Correct punctuation for the reply, with a comma or full stop inside the speech marks.", evidence: "'To the library,' I replied.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "'Where are you going?' asked Mum.\n\n'To the library,' I replied.",
            commonErrors: ["Putting the question mark outside the speech marks.", "Capitalising 'asked'.", "Keeping both speakers on one line."],
          },
        },
        {
          id: "el9-u3-characterisation-dialogue-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short dialogue (about 100 to 150 words) between two characters in which one is hiding something. Use subtext, accurate punctuation and at least one action beat to reveal the character's feelings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtext", statement: "Characters hint at feelings and secrets without stating them." },
              { kind: "convention", name: "Dialogue conventions", statement: "New speaker, new line; punctuation inside speech marks." },
            ],
            steps: [
              { reasoning: "Distinct voices and a clear situation in which one character conceals something.", marks: 2, markCode: "AO4" },
              { reasoning: "Subtext and action beats that reveal feeling indirectly.", marks: 2, markCode: "AO4" },
              { reasoning: "Brief, purposeful speech with control of tone and pace.", marks: 2, markCode: "AO4" },
              { reasoning: "Accurate dialogue punctuation, spelling and sentence control.", marks: 2, markCode: "AO5" },
            ],
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Assured dialogue with convincing subtext, distinct voices and secure punctuation." },
              { level: "Level 3", marks: "5-6", descriptor: "Clear dialogue with some subtext; mostly accurate." },
              { level: "Level 2", marks: "3-4", descriptor: "Some attempt at character and punctuation; errors present." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited; frequent punctuation errors." },
            ],
            finalAnswer: "A strong answer might show one character avoiding eye contact, answering questions with questions and fiddling with an object, while the other notices but says nothing; the tension lies in what is not said.",
            commonErrors: ["Characters stating their feelings outright.", "Lines too long and information-heavy.", "Punctuation outside speech marks."],
          },
        },
        {
          id: "el9-u3-characterisation-dialogue-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: DIALOGUE_MODEL,
          stem: "Read the model dialogue and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two details which show that Dara is nervous.", marks: 2 },
            { label: "b", prompt: "Explain what the sentence 'In the mirror it had sounded confident.' tells you about Dara.", marks: 4 },
            { label: "c", prompt: "How does the writer present the relationship between Dara and Mr Okafor? Refer to the dialogue and the actions.", marks: 6 },
            { label: "d", prompt: "Write a scene (about 200 words) in which a character is waiting to hear important news. Reveal their personality through dialogue, action and subtext.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Show, don't tell", statement: "Physical reactions and understatement reveal emotion." },
              { kind: "technique", name: "Power in dialogue", statement: "Short commands and interruptions suggest authority." },
              { kind: "convention", name: "Dialogue conventions", statement: "Correct punctuation and layout." },
            ],
            steps: [
              { part: "a", reasoning: "Her mouth is dry.", evidence: "Dara's mouth was suddenly very dry.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Her voice comes out smaller than planned (or she stops mid-sentence).", evidence: "her voice came out smaller than she had planned", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She had practised for the interview, showing she is well-prepared and anxious to succeed.", evidence: "She had rehearsed this in the mirror.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The contrast with real life shows her confidence collapses under pressure, a relatable and gently humorous moment.", evidence: "In the mirror it had sounded confident.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Mr Okafor holds power through terse commands and not looking up.", evidence: "Sit.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Dara is deferential and anxious, shown by her hesitations and short answers.", evidence: "Because,' she began, and stopped.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The smile and remark at the end shift the relationship towards respect and show Mr Okafor's liking for honesty.", evidence: "he smiled", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "A clear situation, with a distinct personality revealed by what the character says and does.", marks: 2, markCode: "AO4" },
              { part: "d", reasoning: "Effective subtext and action beats.", marks: 2, markCode: "AO4" },
              { part: "d", reasoning: "Controlled pace and tone that build to a moment of suspense.", marks: 2, markCode: "AO4" },
              { part: "d", reasoning: "Accurate punctuation, spelling and varied vocabulary.", marks: 2, markCode: "AO5" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear, well-chosen analysis of how dialogue and action present the relationship." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some understanding; some relevant references." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments." },
              { part: "d", level: "Level 4", marks: "7-8", descriptor: "Assured writing with convincing characterisation, subtext and accurate punctuation." },
              { part: "d", level: "Level 3", marks: "5-6", descriptor: "Clear writing with some effective devices; mostly accurate." },
              { part: "d", level: "Level 2", marks: "3-4", descriptor: "Some control of character and form; some errors." },
              { part: "d", level: "Level 1", marks: "1-2", descriptor: "Simple, limited writing; frequent errors." },
            ],
            finalAnswer: "(a) Her mouth is dry; her voice comes out smaller than planned. (b) She prepared carefully but her confidence collapses in reality, a relatable, gently humorous detail. (c) Okafor holds power through terse commands and not looking up; Dara is hesitant; the smile at the end shifts the relationship to respect. (d) A strong scene reveals personality through fidgeting, clipped speech and what is left unsaid.",
            commonErrors: ["Retelling rather than analysing in (c).", "Characters stating feelings in (d).", "Incorrect speech punctuation."],
          },
        },
      ],
    },
  ],
};
