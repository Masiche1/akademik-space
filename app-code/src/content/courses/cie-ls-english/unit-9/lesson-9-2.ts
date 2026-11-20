import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "cile-u9-lesson-9-2",
  code: "9-2",
  title: "Listening skills: active listening and note-taking",
  goal: "I CAN listen actively, take useful notes and respond accurately to spoken information.",
  standards: ["0861 Listening: comprehension and response"],
  vocabulary: [
    { term: "Active listening", definition: "Fully concentrating on what is being said — not just hearing." },
    { term: "Note-taking", definition: "Recording key information while listening." },
    { term: "Main idea", definition: "The central point of a spoken text." },
    { term: "Supporting detail", definition: "Facts, examples or explanations that back up the main idea." },
    { term: "Speaker's purpose", definition: "Why the speaker is communicating — inform, persuade, entertain." },
    { term: "Inference", definition: "Reading between the lines — what is implied but not stated." },
  ],
  concepts: [
    {
      id: "cile-u9-active-listening",
      title: "Active listening",
      skill: "Identify main ideas, supporting details, speaker's purpose and implied meanings in spoken texts.",
      lesson: {
        sections: [
          {
            heading: "Active listening strategies",
            body: "- **Focus**: eliminate distractions; listen for the main point first.\n- **Predict**: anticipate what comes next based on context.\n- **Question**: ask yourself 'Why is the speaker saying this?'\n- **Connect**: relate to what you already know.\n- **Summarise**: mentally recap key points.",
          },
          {
            heading: "Identifying key elements",
            body: "- **Main idea**: the single most important point.\n- **Supporting details**: examples, statistics, explanations.\n- **Purpose**: inform (facts), persuade (opinions), entertain (stories), instruct (directions).\n- **Tone**: formal, informal, serious, humorous.",
          },
          {
            heading: "Inference",
            body: "Listeners must read between the lines — what does the speaker really mean? A speaker who says 'It's... interesting weather today' on a stormy day may be being sarcastic.",
          },
        ],
        keyFormulas: [
          { name: "Listening formula", statement: "Focus → predict → question → connect → summarise = active listening." },
        ],
        workedExample: {
          problem: "Speaker: 'Well, that was certainly an ambitious plan.' Tone suggests doubt. What is the implied meaning?",
          solution: "The speaker is sceptical — 'ambitious' and the hesitant 'well' suggest they doubt the plan will succeed. Implied meaning differs from literal words.",
        },
      },
      questions: [
        {
          id: "cile-u9-listen-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is active listening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hearing words without processing them" },
              { id: "b", text: "Fully concentrating on what is being said" },
              { id: "c", text: "Taking detailed notes" },
              { id: "d", text: "Waiting for your turn to speak" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active listening", statement: "Full concentration and engagement with spoken content." },
            ],
            steps: [
              { reasoning: "Active listening = engaged processing, not passive hearing.", working: "\\text{engaged}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Fully concentrating on what is being said",
            commonErrors: ["Choosing (a) — hearing without processing is passive listening."],
          },
        },
        {
          id: "cile-u9-listen-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A speaker says 'That was certainly an ambitious plan.' What is the likely implied meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference", statement: "Implied meaning often differs from literal words — tone and context matter." },
            ],
            steps: [
              { reasoning: "'Certainly' and 'ambitious' suggest the speaker doubts feasibility.", working: "\\text{doubt}", marks: 1, markCode: "AO2" },
              { reasoning: "Likely implied meaning: the plan seems unrealistic or unlikely to succeed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The speaker is expressing scepticism — the plan seems too ambitious or unrealistic. 'Certainly' is often used ironically to signal doubt.",
            commonErrors: ["Taking 'ambitious' literally as praise — the tone suggests the opposite."],
          },
        },
        {
          id: "cile-u9-listen-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "During a spoken presentation on climate change, the speaker says 'Some people say it's too late to act, but I disagree.' Identify the main idea and explain how you would take notes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Note-taking", statement: "Capture main ideas and key details, not everything verbatim." },
            ],
            steps: [
              { reasoning: "Main idea: speaker rejects the 'too late' argument — action is still possible.", working: "\\text{main idea}", marks: 1, markCode: "AO2" },
              { reasoning: "Note-taking: write the main point briefly, then add supporting details as they come.", marks: 1, markCode: "AO2" },
              { reasoning: "Don't write every word — use keywords and symbols.", working: "\\text{keywords}", marks: 1, markCode: "AO2" },
              { reasoning: "Organise notes by main point for easy review.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Main idea: action on climate change is still worthwhile. Notes: 'Climate change — NOT too late; action needed' + supporting details as keywords.",
            commonErrors: ["Writing verbatim — notes should capture meaning, not transcribe."],
          },
        },
        {
          id: "cile-u9-listen-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are listening to a 2-minute spoken text and need to respond to questions.",
          parts: [
            { label: "a", prompt: "State the speaker's main purpose (inform/persuade/entertain/instruct).", marks: 2 },
            { label: "b", prompt: "Identify two supporting details you heard.", marks: 2 },
            { label: "c", prompt: "Identify one implied meaning (what was suggested but not stated).", marks: 2 },
            { label: "d", prompt: "Explain how note-taking would help you answer questions accurately.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening comprehension", statement: "Purpose + details + inference = full comprehension." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose correctly identified with justification.", working: "\\text{purpose}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Justification is accurate.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Two accurate details identified.", working: "\\text{details}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Details are relevant.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Implied meaning identified accurately.", working: "\\text{inference}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Evidence from tone/context given.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Note-taking benefits explained.", working: "\\text{notes}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Links to accuracy.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) purpose + justification (b) two details (c) inference + evidence (d) note-taking explanation",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Purpose identified accurately.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate details.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Inference with evidence.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Literal only.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Note-taking convincingly explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (c) stating the literal meaning instead of the implied meaning."],
          },
        },
      ],
    },
    {
      id: "cile-u9-note-taking",
      title: "Note-taking methods",
      skill: "Use Cornell notes, mind maps and bullet points to capture spoken information effectively.",
      lesson: {
        sections: [
          {
            heading: "Note-taking methods",
            body: "- **Cornell**: divide page into cues (left), notes (right), summary (bottom).\n- **Mind map**: central idea with branches for details — visual, good for relationships.\n- **Bullet points**: keywords and short phrases — fastest, good for facts.\n- **Linear**: write in sentences — most detailed but slowest.",
          },
          {
            heading: "What to record",
            body: "- **Main ideas**: the big points.\n- **Key facts**: numbers, names, dates.\n- **Relationships**: cause-effect, comparison, sequence.\n- **Speaker's attitude**: tone, emphasis, opinion markers ('I think', 'clearly').",
          },
          {
            heading: "What to skip",
            body: "- Filler words: 'um', 'you know', 'like'.\n- Repeated information.\n- Minor details that don't support the main idea.",
          },
        ],
        keyFormulas: [
          { name: "Note-taking rule", statement: "Keywords + main ideas + relationships = effective notes. Skip filler and repetition." },
        ],
        workedExample: {
          problem: "Speaker says: 'Well, um, the main thing is that climate change is real, you know, and we need to act now, like, urgently.' Take notes.",
          solution: "Skip 'um', 'you know', 'like'. Note: 'Climate change real — action needed urgently.'",
        },
      },
      questions: [
        {
          id: "cile-u9-notes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which note-taking method uses a central idea with branching details?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cornell notes" },
              { id: "b", text: "Mind map" },
              { id: "c", text: "Bullet points" },
              { id: "d", text: "Linear notes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mind map", statement: "Central idea with branches — visual organisation." },
            ],
            steps: [
              { reasoning: "Mind maps are radial — centre with branches.", working: "\\text{radial}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Mind map",
            commonErrors: ["Choosing (a) — Cornell uses columns, not branches."],
          },
        },
        {
          id: "cile-u9-notes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you NOT record in notes? Give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Note-taking selectivity", statement: "Skip filler, repetition and minor details — capture meaning." },
            ],
            steps: [
              { reasoning: "Don't record filler: 'um', 'you know', 'like'.", working: "\\text{filler}", marks: 1, markCode: "AO2" },
              { reasoning: "Don't record repeated or minor details that don't support main ideas.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Don't record filler words ('um', 'you know') or repeated/minor details — focus on main ideas and key facts.",
            commonErrors: ["Saying 'don't take notes' — the point is selectivity, not abstinence."],
          },
        },
        {
          id: "cile-u9-notes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare mind maps and bullet-point notes for recording a spoken presentation. When would each be better?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Method selection", statement: "Different methods suit different content — visual relationships vs factual lists." },
            ],
            steps: [
              { reasoning: "Mind maps: good for showing relationships, cause-effect, comparisons.", working: "\\text{relationships}", marks: 1, markCode: "AO2" },
              { reasoning: "Bullet points: good for facts, lists, sequential information.", working: "\\text{facts}", marks: 1, markCode: "AO2" },
              { reasoning: "Mind maps slower to create but show structure; bullets faster but linear.", marks: 1, markCode: "AO2" },
              { reasoning: "Choose based on content type and speed needed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Mind maps excel at showing relationships and structure (cause-effect, comparisons) but are slower. Bullet points are faster for facts and lists but don't show relationships. Choose based on content and speed.",
            commonErrors: ["Saying one is always better — each has situational advantages."],
          },
        },
        {
          id: "cile-u9-notes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are taking notes during a spoken presentation.",
          parts: [
            { label: "a", prompt: "Choose a note-taking method and justify it.", marks: 2 },
            { label: "b", prompt: "Record the main idea in your chosen format.", marks: 3 },
            { label: "c", prompt: "Record two supporting details.", marks: 2 },
            { label: "d", prompt: "Explain what you chose to skip and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Effective note-taking", statement: "Right method + main idea + details + selectivity = useful notes." },
            ],
            steps: [
              { part: "a", reasoning: "Method chosen and justified appropriately.", working: "\\text{method}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Justification is accurate.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Main idea captured accurately in chosen format.", working: "\\text{main}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Format used correctly.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear and concise.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Two details recorded accurately.", working: "\\text{details}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Details are relevant.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Skipped elements identified.", working: "\\text{skip}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Justification is sound.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) justified method (b) main idea in format (c) two details (d) skipped elements explained",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Method justified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Weak.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Main idea captured clearly.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate details.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Skip justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["Recording everything verbatim — notes should be selective."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u9-listening-notes",
      title: "Listening skills — revision notes",
      summary: "Active listening, inference and note-taking methods.",
      sections: [
        {
          heading: "Active listening",
          body: "Focus → predict → question → connect → summarise. Identify main ideas, supporting details, speaker's purpose and implied meanings.",
        },
        {
          heading: "Note-taking",
          body: "Cornell (columns), mind maps (relationships), bullets (facts), linear (detail). Record keywords and main ideas; skip filler and repetition.",
        },
      ],
    },
  ],
};
