import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "oles-u4-lesson-4-1",
  code: "4-1",
  title: "Narrative writing",
  goal: "I CAN write an engaging story with clear plot and characters.",
  standards: ["1120 Writing: composition"],
  vocabulary: [
    { term: "Narrative", definition: "A story told in order of events." },
    { term: "Plot", definition: "The sequence of events in a story." },
    { term: "Character", definition: "A person or animal in a story." },
    { term: "Setting", definition: "Where and when the story happens." },
    { term: "Climax", definition: "The most exciting or important moment of the story." },
  ],
  concepts: [
    {
      id: "oles-u4-plot",
      title: "Story structure",
      skill: "Build a story with beginning, problem, climax and ending.",
      lesson: {
        sections: [
          { heading: "The story arc", body: "Every good story has: an opening that sets the scene and characters, a problem or conflict, rising tension, a climax where the problem peaks, and a resolution. Without a problem, a story has no engine." },
          { heading: "Show, don't tell", body: "Instead of 'She was nervous', write 'Her hands shook as she opened the letter.' Actions and details let the reader feel the emotion — this is what examiners reward." },
        ],
        keyFormulas: [
          { name: "Story arc", statement: "Opening → problem → rising tension → climax → resolution." },
        ],
        workedExample: {
          problem: "Story idea: missed bus. Map the arc.",
          solution: "Opening: waiting at bus stop. Problem: bus doesn't come. Tension: phone dead, late for exam. Climax: runs and arrives just in time. Resolution: learns to check timetable.",
        },
      },
      questions: [
        {
          id: "oles-u4-sp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The climax of a story is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The most tense or important moment" },
            { id: "b", text: "The first sentence" },
            { id: "c", text: "The character list" },
            { id: "d", text: "The title" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Climax", statement: "Peak moment of tension." }], steps: [{ reasoning: "Climax = highest point of the story's tension.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** The most tense moment" },
        },
        {
          id: "oles-u4-sp-q2", difficulty: "core", totalMarks: 2,
          stem: "Name the parts of a basic story structure.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Story arc", statement: "Opening, problem, tension, climax, resolution." }], steps: [
            { reasoning: "Opening, problem/conflict, rising tension, climax, resolution.", marks: 1, markCode: "AO2" },
            { reasoning: "All parts named.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Opening; problem; rising tension; climax; resolution." },
        },
        {
          id: "oles-u4-sp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain 'show, don't tell' with an example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Show don't tell", statement: "Actions and details replace emotion labels." }], steps: [
            { reasoning: "'Tell' states the emotion: 'He was angry.'", marks: 1, markCode: "AO2" },
            { reasoning: "'Show' gives evidence: 'He clenched his fists and shouted.'", marks: 1, markCode: "AO2" },
            { reasoning: "Showing lets the reader feel the emotion themselves.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear example and explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Replace emotion labels with actions/details the reader can interpret." },
        },
        {
          id: "oles-u4-sp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Narrative structure review.",
          parts: [
            { label: "a", prompt: "Name the story arc parts.", marks: 3 },
            { label: "b", prompt: "What is the climax?", marks: 2 },
            { label: "c", prompt: "What does 'show, don't tell' mean?", marks: 2 },
            { label: "d", prompt: "Why is a problem essential?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Narrative", statement: "Arc + climax + showing + conflict." }], steps: [
            { part: "a", reasoning: "Opening, problem, tension, climax, resolution.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "At least four parts.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Complete arc.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "The peak moment of tension or conflict.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Use actions and details instead of naming emotions.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct meaning.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Without conflict there is no tension or reason to keep reading.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains necessity.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) arc parts (b) peak tension (c) actions not labels (d) drives the story",
            levels: [
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
    {
      id: "oles-u4-character",
      title: "Characters and dialogue",
      skill: "Create believable characters and natural dialogue.",
      lesson: {
        sections: [
          { heading: "Building characters", body: "Give each main character a want (what they desire) and a flaw (what holds them back). These two things create conflict and make characters feel real. Describe characters through action and speech, not just appearance." },
          { heading: "Writing dialogue", body: "Dialogue should sound like real speech but be purposeful — it reveals character and moves the plot. Use said-bookisms sparingly ('she said' is fine; 'she exclaimed furiously' is usually unnecessary). Punctuate correctly: 'Hello,' she said. 'Where are you going?'" },
        ],
        keyFormulas: [
          { name: "Character", statement: "Want + flaw = believable conflict; dialogue reveals character." },
        ],
        workedExample: {
          problem: "Character: wants to win a race, but is lazy. How does this create story?",
          solution: "The want drives the plot (training, race day); the flaw creates obstacles (skips practice, almost loses). Conflict makes the story work.",
        },
      },
      questions: [
        {
          id: "oles-u4-ch-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A character's 'flaw' is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A weakness that creates conflict" },
            { id: "b", text: "Their best quality" },
            { id: "c", text: "Their appearance" },
            { id: "d", text: "Their job" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Flaw", statement: "Weakness creating conflict." }], steps: [{ reasoning: "Flaws generate obstacles in the story.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** A weakness creating conflict" },
        },
        {
          id: "oles-u4-ch-q2", difficulty: "core", totalMarks: 2,
          stem: "What two things make a character believable?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Character", statement: "Want + flaw." }], steps: [
            { reasoning: "A want (desire) and a flaw (weakness).", marks: 1, markCode: "AO2" },
            { reasoning: "Both named.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A want and a flaw." },
        },
        {
          id: "oles-u4-ch-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how dialogue can reveal a character's personality.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Dialogue", statement: "Speech shows character." }], steps: [
            { reasoning: "Word choice, sentence length and tone show education, mood, attitude.", marks: 1, markCode: "AO2" },
            { reasoning: "What a character says and avoids saying reveals their values.", marks: 1, markCode: "AO2" },
            { reasoning: "Example: short rude replies suggest impatience.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Dialogue word choice, tone and content reveal personality." },
        },
        {
          id: "oles-u4-ch-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Character and dialogue review.",
          parts: [
            { label: "a", prompt: "What is a character flaw?", marks: 2 },
            { label: "b", prompt: "Why give a character a 'want'?", marks: 2 },
            { label: "c", prompt: "How does dialogue move the plot?", marks: 2 },
            { label: "d", prompt: "Why punctuate dialogue correctly?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Character", statement: "Want + flaw; dialogue reveals and advances." }], steps: [
            { part: "a", reasoning: "A weakness that creates obstacles and conflict.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "The want drives the character's actions and the plot.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Dialogue delivers information and decisions that advance events.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct function.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Correct punctuation makes dialogue readable and shows accuracy.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains clarity.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Links to marks.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) weakness/conflict (b) drives plot (c) delivers events (d) readability + accuracy",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u4-4-1-notes", title: "Narrative writing — notes", summary: "Story arc, conflict and believable characters.",
      sections: [
        { heading: "Structure", body: "Opening → problem → tension → climax → resolution. Every story needs conflict." },
        { heading: "Characters", body: "Want + flaw = believable. Show emotions through action, not labels. Dialogue reveals character." },
      ] },
  ],
};
