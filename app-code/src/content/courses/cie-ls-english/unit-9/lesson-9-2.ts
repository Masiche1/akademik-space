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
              { id: "a", text: "Taking detailed notes" },
              { id: "b", text: "Hearing words without processing them" },
              { id: "c", text: "Waiting for your turn to speak" },
              { id: "d", text: "Fully concentrating on what is being said" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active listening", statement: "Full concentration and engagement with spoken content." },
            ],
            steps: [
              { reasoning: "Active listening = engaged processing, not passive hearing.", working: "\\text{engaged}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Fully concentrating on what is being said",
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
        {
          id: "cile-u9-listen-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which behaviour shows active listening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Checking your phone" },
              { id: "b", text: "Predicting what the speaker will say next" },
              { id: "c", text: "Planning your reply while the speaker talks" },
              { id: "d", text: "Waiting silently for your turn to speak" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active listening", statement: "Focus, predict, question, connect, summarise — engaged processing." },
            ],
            steps: [
              { reasoning: "Predicting what comes next is one of the five active-listening strategies.", working: "\\text{predict}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Predicting what the speaker will say next",
            commonErrors: ["Choosing (a) — waiting to speak is passive, not active."],
          },
        },
        {
          id: "cile-u9-listen-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A speaker says: 'We must act now — the evidence is overwhelming and delay will cost lives.' What is the speaker's most likely purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To instruct" },
              { id: "b", text: "To persuade" },
              { id: "c", text: "To entertain" },
              { id: "d", text: "To complain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Inform (facts), persuade (opinions), entertain (stories), instruct (directions)." },
            ],
            steps: [
              { reasoning: "'We must act' and emotional appeals aim to change the audience's view — persuasion.", working: "\\text{persuade}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** To persuade",
            commonErrors: ["Choosing (c) — there are no step-by-step directions given."],
          },
        },
        {
          id: "cile-u9-listen-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'main idea' of a spoken text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speaker's name" },
              { id: "b", text: "Every detail mentioned" },
              { id: "c", text: "The loudest part of the speech" },
              { id: "d", text: "The single most important point" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "The central, most important point of the text." },
            ],
            steps: [
              { reasoning: "The main idea is the big point; details support it.", working: "\\text{central}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** The single most important point",
            commonErrors: ["Choosing (a) — details are not the main idea."],
          },
        },
        {
          id: "cile-u9-listen-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a supporting detail rather than a main idea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The topic of the speech" },
              { id: "b", text: "The central claim of the speech" },
              { id: "c", text: "The speaker's conclusion" },
              { id: "d", text: "An example the speaker gives" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Supporting detail", statement: "Facts, examples or explanations that back up the main idea." },
            ],
            steps: [
              { reasoning: "An example backs up a claim — it supports rather than states the main idea.", working: "\\text{example}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** An example the speaker gives",
            commonErrors: ["Choosing (b) — the central claim IS the main idea."],
          },
        },
        {
          id: "cile-u9-listen-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a speaker's 'tone' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How fast they speak" },
              { id: "b", text: "Their accent" },
              { id: "c", text: "Only how loud they speak" },
              { id: "d", text: "Their attitude towards the subject" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "The speaker's attitude — formal, serious, humorous, sarcastic." },
            ],
            steps: [
              { reasoning: "Tone conveys attitude, not volume, speed or accent.", working: "\\text{attitude}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** Their attitude towards the subject",
            commonErrors: ["Choosing (a) — volume is delivery, not tone."],
          },
        },
        {
          id: "cile-u9-listen-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The active-listening formula lists 5 strategies. A student practises 3 of them during a talk. How many strategies remain unused?",
          response: {
            type: "numeric",
            parts: [{ label: "unused", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening strategies", statement: "Focus, predict, question, connect, summarise = 5 strategies." },
            ],
            steps: [
              { reasoning: "Total strategies = 5.", marks: 1, markCode: "AO1" },
              { reasoning: "Unused = 5 - 3 = 2.", working: "5-3=2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 3 — that counts the used strategies."],
          },
        },
        {
          id: "cile-u9-listen-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A listening exam lasts 6 minutes with 4 questions to answer afterwards. Give: (a) the number of speaker purposes you should be able to identify (inform, persuade, entertain, instruct); (b) the average time in seconds per question if you spend the whole 6 minutes answering.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 90, unit: "s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam timing", statement: "Divide total time by number of questions for average time each." },
            ],
            steps: [
              { part: "a", reasoning: "Four purposes: inform, persuade, entertain, instruct.", working: "\\text{4}", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "6 x 60 = 360 seconds total.", working: "6 \\times 60 = 360", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "360 / 4 = 90 seconds per question.", working: "360 \\div 4 = 90", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 4 (b) 90 s",
            commonErrors: ["Forgetting to convert minutes to seconds for part (b)."],
          },
        },
        {
          id: "cile-u9-listen-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A checkpoint listening task is worth 9 marks: purpose 2, supporting details 2, inference 2, and extended response 3. Give: (a) the marks for the extended response; (b) the marks for purpose plus inference combined.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mark awareness", statement: "Read the mark allocation — it tells you how much detail is expected." },
            ],
            steps: [
              { part: "a", reasoning: "Extended response carries 3 marks.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Purpose plus inference = 2 + 2 = 4 marks.", working: "2+2=4", marks: 1, markCode: "AO2" },
              { reasoning: "Check: 2+2+2+3 = 9, matching the total.", working: "2+2+2+3=9", marks: 1, markCode: "AO3" },
              { reasoning: "Higher marks signal the need for developed answers.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3 (b) 4",
            commonErrors: ["Assuming equal marks per question — allocations vary."],
          },
        },
        {
          id: "cile-u9-listen-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many strategies does the active-listening formula 'Focus → predict → question → connect → summarise' contain?",
          response: {
            type: "numeric",
            parts: [{ label: "strategies", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Listening formula", statement: "Five strategies in sequence." },
            ],
            steps: [
              { reasoning: "Count the steps: focus, predict, question, connect, summarise.", working: "\\text{5}", marks: 1, markCode: "AO1" },
              { reasoning: "There are 5 strategies.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5",
            commonErrors: ["Answering 4 — missing one of the five steps."],
          },
        },
        {
          id: "cile-u9-listen-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between simply hearing words and active listening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active vs passive", statement: "Hearing is passive; active listening processes, predicts and summarises." },
            ],
            steps: [
              { reasoning: "Hearing = sound reaches your ears; active listening = full concentration and processing.", working: "\\text{process}", marks: 1, markCode: "AO2" },
              { reasoning: "Active listening involves predicting, questioning and mentally summarising.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Hearing is passive — words reach your ears. Active listening fully concentrates, predicts, questions and summarises what is said.",
            commonErrors: ["Treating them as the same — the key is engaged processing."],
          },
        },
        {
          id: "cile-u9-listen-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A speaker says: 'Well, that was certainly... interesting.' Explain the likely implied meaning and how the tone signals it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference", statement: "Implied meaning differs from literal words — tone and hesitation signal it." },
            ],
            steps: [
              { reasoning: "'Certainly' and the pause before 'interesting' suggest the speaker doubts it was good.", working: "\\text{hesitation}", marks: 1, markCode: "AO2" },
              { reasoning: "Implied meaning: the speaker is being sarcastic or unimpressed.", marks: 1, markCode: "AO2" },
              { reasoning: "Tone evidence: flat delivery and 'well' opening signal reluctance.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The speaker is unimpressed or sarcastic — 'certainly' and the hesitation before 'interesting' signal the opposite of literal praise.",
            commonErrors: ["Taking 'interesting' at face value as genuine praise."],
          },
        },
        {
          id: "cile-u9-listen-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A speaker describes their 'successful' school year using a flat tone and long pauses. Infer the speaker's real attitude and justify your inference with two details from this description.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from tone", statement: "Mismatch between words and delivery reveals true attitude." },
            ],
            steps: [
              { reasoning: "Inference: the speaker is not genuinely positive — likely disappointed or resigned.", working: "\\text{inference}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence 1: flat tone contradicts the word 'successful'.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence 2: long pauses suggest reluctance or sadness.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion: implied meaning differs from literal words.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The speaker is probably disappointed despite saying 'successful' — the flat tone and pauses contradict the positive words.",
            commonErrors: ["Accepting 'successful' literally — tone reveals the true attitude."],
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
              { id: "c", text: "Linear notes" },
              { id: "d", text: "Bullet points" },
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
        {
          id: "cile-u9-notes-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which note-taking method divides the page into a cues column, a notes column and a summary section?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cornell notes" },
              { id: "b", text: "Bullet points" },
              { id: "c", text: "Mind map" },
              { id: "d", text: "Linear notes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cornell method", statement: "Columns for cues and notes plus a bottom summary." },
            ],
            steps: [
              { reasoning: "The column layout is the defining feature of Cornell notes.", working: "\\text{columns}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Cornell notes",
            commonErrors: ["Choosing (a) — mind maps branch from a centre, not columns."],
          },
        },
        {
          id: "cile-u9-notes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which note-taking method is best for showing relationships such as cause and effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linear notes" },
              { id: "b", text: "Bullet-point list" },
              { id: "c", text: "Mind map" },
              { id: "d", text: "Full sentences" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Method selection", statement: "Mind maps show relationships visually through branches." },
            ],
            steps: [
              { reasoning: "Branches visually link ideas — ideal for cause-effect and comparisons.", working: "\\text{branches}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** Mind map",
            commonErrors: ["Choosing (a) — linear notes show sequence, not relationships."],
          },
        },
        {
          id: "cile-u9-notes-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should your notes primarily contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the speaker's jokes" },
              { id: "b", text: "Every word the speaker says" },
              { id: "c", text: "Keywords, main ideas and key facts" },
              { id: "d", text: "Your full opinion on the topic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Selectivity", statement: "Keywords and main ideas — never verbatim transcription." },
            ],
            steps: [
              { reasoning: "Effective notes capture meaning selectively, not every word.", working: "\\text{keywords}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Keywords, main ideas and key facts",
            commonErrors: ["Choosing (a) — verbatim notes are too slow to write."],
          },
        },
        {
          id: "cile-u9-notes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Cornell notes, what is the left-hand 'cues' column used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing full sentences" },
              { id: "b", text: "Counting the words spoken" },
              { id: "c", text: "Short questions and prompts for review" },
              { id: "d", text: "Drawing pictures" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cues column", statement: "Keywords/questions on the left that prompt recall of the notes." },
            ],
            steps: [
              { reasoning: "Cues are short prompts that help you recall the fuller notes.", working: "\\text{prompts}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** Short questions and prompts for review",
            commonErrors: ["Choosing (a) — the cues column holds short prompts, not sentences."],
          },
        },
        {
          id: "cile-u9-notes-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "When is linear note-taking (writing in full sentences) the best choice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When maximum detail and accuracy are needed and time allows" },
              { id: "b", text: "When speed matters most" },
              { id: "c", text: "When the speaker talks very fast" },
              { id: "d", text: "Never — it is always worse" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Method trade-offs", statement: "Linear notes are slowest but most detailed." },
            ],
            steps: [
              { reasoning: "Full sentences capture nuance but take longest — choose when detail matters more than speed.", working: "\\text{detail}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** When maximum detail and accuracy are needed and time allows",
            commonErrors: ["Choosing (c) — linear notes are the worst choice for fast speech."],
          },
        },
        {
          id: "cile-u9-notes-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A mind map has one central idea and 4 branches for details. How many nodes (boxes or circles) does the map contain in total?",
          response: {
            type: "numeric",
            parts: [{ label: "nodes", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mind map", statement: "One central idea plus branches for details." },
            ],
            steps: [
              { reasoning: "Total = 1 central node + 4 branches.", working: "1+4=5", marks: 1, markCode: "AO2" },
              { reasoning: "There are 5 nodes.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "5",
            commonErrors: ["Answering 4 — forgetting the central node."],
          },
        },
        {
          id: "cile-u9-notes-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 2-minute talk contains 150 words. You identify 12 filler words ('um', 'like', 'you know'). If you skip all filler words, how many content words remain for your notes?",
          response: {
            type: "numeric",
            parts: [{ label: "remaining", answer: 138 }],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Skipping filler", statement: "Filler words carry no meaning — leave them out of notes." },
            ],
            steps: [
              { reasoning: "Total words = 150, filler = 12.", working: "150-12", marks: 1, markCode: "AO2" },
              { reasoning: "Remaining = 150 - 12 = 138.", marks: 1, markCode: "AO2" },
              { reasoning: "In practice you would still select keywords, not all 138 words.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "138",
            commonErrors: ["Answering 150 — forgetting to subtract filler words."],
          },
        },
        {
          id: "cile-u9-notes-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A note-taking task is worth 9 marks: choosing a method 2, recording the main idea 3, recording two details 2, and explaining what you skipped 2. Give: (a) the marks for recording the main idea; (b) the combined marks for the two details and the skip explanation.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mark awareness", statement: "Check mark allocations — they show where the most credit lies." },
            ],
            steps: [
              { part: "a", reasoning: "Main idea recording carries 3 marks.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Details plus skip explanation = 2 + 2 = 4 marks.", working: "2+2=4", marks: 1, markCode: "AO2" },
              { reasoning: "Check: 2+3+2+2 = 9 — matches the total.", working: "2+3+2+2=9", marks: 1, markCode: "AO3" },
              { reasoning: "The main idea earns the most marks — prioritise it.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3 (b) 4",
            commonErrors: ["Assuming equal marks across all four parts."],
          },
        },
        {
          id: "cile-u9-notes-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many sections does the Cornell note-taking method divide a page into?",
          response: {
            type: "numeric",
            parts: [{ label: "sections", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cornell layout", statement: "Cues column, notes column, summary section." },
            ],
            steps: [
              { reasoning: "Cues + notes + summary = 3 sections.", working: "\\text{3}", marks: 1, markCode: "AO1" },
              { reasoning: "The summary sits at the bottom of the page.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — the summary section is a third part."],
          },
        },
        {
          id: "cile-u9-notes-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why keywords work better than full sentences in listening notes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Keyword notes", statement: "Short forms are faster to write and easier to review." },
            ],
            steps: [
              { reasoning: "Keywords are quicker to write — you keep up with fast speech.", working: "\\text{speed}", marks: 1, markCode: "AO2" },
              { reasoning: "They force you to identify meaning, and are easier to scan during review.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Keywords are faster to write (keeping pace with speech) and easier to review — you capture meaning rather than transcribing.",
            commonErrors: ["Saying full sentences are 'clearer' — they are too slow for live listening."],
          },
        },
        {
          id: "cile-u9-notes-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert this spoken sentence into effective notes: 'Well, um, the thing is, you know, exams are, like, really stressful for most students.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Note conversion", statement: "Drop filler, keep keywords that carry meaning." },
            ],
            steps: [
              { reasoning: "Remove filler: 'um', 'you know', 'like', 'the thing is'.", working: "\\text{filler removed}", marks: 1, markCode: "AO2" },
              { reasoning: "Keep keywords: exams, stressful, most students.", marks: 1, markCode: "AO2" },
              { reasoning: "Result is a short note capturing the meaning.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Exams — very stressful for most students.' or similar keyword note.",
            commonErrors: ["Keeping filler words or writing the full sentence verbatim."],
          },
        },
        {
          id: "cile-u9-notes-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A lecture is packed with statistics and dates. Compare Cornell notes and bullet-point notes for this content and recommend one, justifying your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Method selection", statement: "Match the method to the content — facts favour speed and accuracy." },
            ],
            steps: [
              { reasoning: "Bullet points: fastest for lists of facts, figures and dates.", working: "\\text{bullets}", marks: 1, markCode: "AO2" },
              { reasoning: "Cornell: structured review via cues and summary, but slower to write during the lecture.", marks: 1, markCode: "AO2" },
              { reasoning: "Recommendation: bullet points during the lecture for speed and accuracy.", marks: 1, markCode: "AO2" },
              { reasoning: "Alternatively Cornell if review is the priority — justification is what matters.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Bullet points recommended — statistics and dates are factual lists best captured quickly; Cornell is slower but offers better review structure.",
            commonErrors: ["Recommending mind maps — they suit relationships, not lists of facts."],
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
