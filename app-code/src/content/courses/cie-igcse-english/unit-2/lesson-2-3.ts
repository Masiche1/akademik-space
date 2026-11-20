import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ciege-u2-lesson-2-3",
  code: "2-3",
  title: "Structure and Narrative Technique",
  goal: "I CAN analyse how writers structure texts and use narrative techniques.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 2: structure"],
  vocabulary: [
    { term: "Structure", definition: "How a text is organised — beginning, middle, end." },
    { term: "Flashback", definition: "A shift to an earlier time in the narrative." },
    { term: "Foreshadowing", definition: "Hints of what will happen later." },
    { term: "Cliffhanger", definition: "A moment of suspense ending a section." },
    { term: "Circular structure", definition: "Ending where the story began." },
  ],
  concepts: [
    {
      id: "ciege-u2-s3-structure",
      title: "Analysing structure",
      skill: "Explain how text organisation creates effect at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Text structure",
            body: "Look at how the text is organised: chronological order, flashbacks, parallel storylines, circular endings. The structure shapes how the reader experiences events.",
          },
          {
            heading: "Pace and tension",
            body: "Short sentences and paragraphs speed up reading and create tension. Long, flowing sentences slow the pace and build atmosphere. Writers manipulate this deliberately.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why might a writer use very short sentences in an action scene?",
          solution: "To speed up the pace and create urgency — short sentences mirror rapid events.",
        },
      },
      questions: [
        {
          id: "ciege-u2-s3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Chase",
            author: "Written for Akademik Space",
            text: "He ran. The door slammed. Footsteps echoed. He was gone.",
          },
          stem: "What effect do the short sentences create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Slow, calm pace" }, { id: "b", text: "Fast, urgent pace" }, { id: "c", text: "Confusion" }, { id: "d", text: "Humour" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence length", statement: "Short sentences = speed." }],
            steps: [
              { reasoning: "Short sentences create urgency and speed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fast, urgent pace",
          },
        },
        {
          id: "ciege-u2-s3-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Chase",
            author: "Written for Akademik Space",
            text: "He ran. The door slammed. Footsteps echoed. He was gone.",
          },
          stem: "Explain how sentence structure contributes to the tension.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace", statement: "Sentence length affects speed." }],
            steps: [
              { reasoning: "Each sentence is short and abrupt.", marks: 1, markCode: "AO3" },
              { reasoning: "This mirrors the rapid, panicked action.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Short sentences = urgency",
          },
        },
        {
          id: "ciege-u2-s3-st-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "She opened the letter. It was from her brother — the one who had disappeared twenty years ago. He was alive.",
          },
          stem: "How does the writer build suspense in these three sentences?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Suspense", statement: "Delayed information builds tension." }],
            steps: [
              { reasoning: "First sentence is simple and factual.", marks: 1, markCode: "AO3" },
              { reasoning: "The dash reveals the surprising sender gradually.", marks: 1, markCode: "AO3" },
              { reasoning: "Final short sentence delivers the shock — 'He was alive.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Gradual reveal, punchy ending",
          },
        },
        {
          id: "ciege-u2-s3-st-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Return",
            author: "Written for Akademik Space",
            text: "The story began with a boy leaving home. It ended with the same boy, years later, standing at the same gate — only this time he was coming back.",
          },
          stem: "What narrative structure does this extract describe? Explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular structure", statement: "Ends where it began." }],
            steps: [
              { reasoning: "Circular structure — begins and ends at the same place.", marks: 1, markCode: "AO3" },
              { reasoning: "The repetition emphasises change over time.", marks: 1, markCode: "AO2" },
              { reasoning: "'Only this time he was coming back' highlights the difference.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates a sense of completion and reflection.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Circular — emphasises change",
          },
        },
      ],
    },
    {
      id: "ciege-u2-s3-techniques",
      title: "Narrative techniques",
      skill: "Identify foreshadowing, flashbacks and other techniques.",
      lesson: {
        sections: [
          {
            heading: "Common techniques",
            body: "Foreshadowing hints at future events ('little did she know...'). Flashbacks interrupt the present to show earlier events. Cliffhangers end sections on suspense.",
          },
          {
            heading: "Analysing technique",
            body: "When asked about a technique, name it, quote the evidence, and explain why the writer used it — to build suspense, develop character, or create irony.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'The door creaked open — or was it closing?' What technique is this?",
          solution: "Ambiguity/suspense — the uncertainty about direction creates tension.",
        },
      },
      questions: [
        {
          id: "ciege-u2-s3-nt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "As she packed her bag, she noticed the dark clouds gathering — though she did not yet know what they would bring.",
          },
          stem: "What technique is used here?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Flashback" }, { id: "b", text: "Foreshadowing" }, { id: "c", text: "Satire" }, { id: "d", text: "Dialogue" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Foreshadowing", statement: "Hints of future events." }],
            steps: [
              { reasoning: "Dark clouds + 'did not yet know' hints at coming trouble.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Foreshadowing",
          },
        },
        {
          id: "ciege-u2-s3-nt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "As she packed her bag, she noticed the dark clouds gathering — though she did not yet know what they would bring.",
          },
          stem: "What does the foreshadowing suggest will happen?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Foreshadowing", statement: "Predict from hints." }],
            steps: [
              { reasoning: "Dark clouds suggest a storm or trouble.", marks: 1, markCode: "AO2" },
              { reasoning: "'Did not yet know' implies something bad is coming.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Trouble or a storm is coming",
          },
        },
        {
          id: "ciege-u2-s3-nt-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Reunion",
            author: "Written for Akademik Space",
            text: "He recognised her instantly — the same laugh, the same eyes — though twenty years had changed everything else.",
          },
          stem: "How does the writer use contrast in this sentence?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Contrast", statement: "Similarity vs change." }],
            steps: [
              { reasoning: "'Same laugh, same eyes' vs 'twenty years had changed everything else'.", marks: 1, markCode: "AO3" },
              { reasoning: "Highlights what has stayed the same vs what has changed.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates emotional depth — recognition despite time.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Same vs changed — emotional contrast",
          },
        },
        {
          id: "ciege-u2-s3-nt-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Secret",
            author: "Written for Akademik Space",
            text: "She almost told him the truth. Instead, she smiled and said nothing, watching his face for any sign of suspicion.",
          },
          stem: "Analyse how the writer creates tension through the character's actions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tension through action", statement: "Almost + restraint = suspense." }],
            steps: [
              { reasoning: "'Almost told him' — the near-disclosure creates suspense.", marks: 1, markCode: "AO3" },
              { reasoning: "'Instead... said nothing' — restraint heightens tension.", marks: 1, markCode: "AO2" },
              { reasoning: "'Watching... for any sign of suspicion' — her fear is palpable.", marks: 1, markCode: "AO2" },
              { reasoning: "Actions reveal inner conflict without stating it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Near-disclosure + restraint = tension",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u2-s3-struct-notes",
      title: "Structure and narrative technique — revision notes",
      summary: "Sentence pace, foreshadowing, flashbacks, circular endings.",
      sections: [
        { heading: "Structure", body: "Short sentences = speed/tension; long sentences = slow/atmospheric. Circular structures end where they began." },
        { heading: "Techniques", body: "Foreshadowing hints at future; flashbacks show earlier events; cliffhangers create suspense. Always name technique + evidence + effect." },
      ],
    },
  ],
};
