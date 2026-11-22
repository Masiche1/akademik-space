import type { Lesson } from "../../../types.ts";

export const lesson141: Lesson = {
  id: "cie-ol-fl-lesson-4-1",
  code: "4-1",
  title: "Non-fiction genres",
  goal: "I CAN identify and analyse non-fiction text types.",
  standards: ["1119 Reading: non-fiction"],
  vocabulary: [
    { term: "Non-fiction", definition: "Writing based on fact/reality." },
    { term: "Autobiography", definition: "Self-written life story." },
    { term: "Biography", definition: "Life story written by another." },
    { term: "Essay", definition: "Short piece on a topic." },
    { term: "Speech", definition: "Formal address to audience." },
    { term: "Article", definition: "Journalistic or opinion piece." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-nonfiction-genres",
      title: "Non-fiction genres",
      skill: "Distinguish non-fiction types and their purposes.",
      lesson: {
        sections: [
          {
            heading: "Life writing",
            body: "Autobiography (self), biography (other), memoir (personal reflections). Purpose: record, reflect, share experience.",
          },
          {
            heading: "Expository writing",
            body: "Essay, article, report — inform or explain. Structure: introduction, body, conclusion. Objective or subjective tone.",
          },
          {
            heading: "Persuasive writing",
            body: "Speech, editorial, letter — convince audience. Uses rhetoric, evidence, emotional appeals.",
          },
        ],
        keyFormulas: [
          { name: "Non-fiction genres", statement: "Life writing+expository+persuasive=different purposes/structures." },
        ],
        workedExample: {
          problem: "Text recounts author's childhood experiences.",
          solution: "Autobiography/memoir — personal account, subjective, reflective tone.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ng-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What distinguishes autobiography from biography?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Length" },
              { id: "b", text: "Publication date" },
              { id: "c", text: "Author writes own life vs other's" },
              { id: "d", text: "Fiction vs non-fiction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Autobiography vs biography", statement: "Auto=self-written; bio=written by another." },
            ],
            steps: [
              { reasoning: "Auto=self, bio=other.", working: "self vs other", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Author writes own life vs other's",
            commonErrors: ["Choosing (c) — both are non-fiction."],
          },
        },
        {
          id: "cie-ol-fl-ng-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the purpose of expository writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expository", statement: "Inform or explain — objective, structured." },
            ],
            steps: [
              { reasoning: "Inform/explain.", working: "inform", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Inform or explain — objective, structured.",
            commonErrors: ["Confusing with persuasive."],
          },
        },
        {
          id: "cie-ol-fl-ng-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does persuasive writing differ from expository?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Persuasive vs expository", statement: "Persuasive=convince; expository=inform. Different techniques/tone." },
            ],
            steps: [
              { reasoning: "Persuasive aims to convince.", working: "convince", marks: 1, markCode: "AO2" },
              { reasoning: "Expository aims to inform.", working: "inform", marks: 1, markCode: "AO2" },
              { reasoning: "Persuasive uses rhetoric/emotion; expository uses facts/logic.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Persuasive=convince+rhetoric; expository=inform+facts.",
            commonErrors: ["Both use facts — persuasive adds emotional appeal."],
          },
        },
        {
          id: "cie-ol-fl-ng-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Non-fiction genres.",
          parts: [
            { label: "a", prompt: "Auto vs bio?", marks: 2 },
            { label: "b", prompt: "Expository purpose?", marks: 2 },
            { label: "c", prompt: "Persuasive vs expository?", marks: 2 },
            { label: "d", prompt: "Name non-fiction types.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Genres", statement: "Auto/bio, expository, persuasive, types." },
            ],
            steps: [
              { part: "a", reasoning: "Auto=self; bio=other.", working: "auto/bio", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Inform or explain — objective.", working: "expository", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Persuasive=convince; expository=inform.", working: "comparison", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Autobiography, biography, essay, speech, article, report.", working: "types", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) self vs other (b) inform/explain (c) convince vs inform (d) auto/bio/essay/speech/article",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Types listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Confusing persuasive and expository."],
          },
        },
        {
          id: "cie-ol-fl-ng-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A text recounting selected personal memories rather than a complete life story is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A report" },
              { id: "b", text: "A memoir" },
              { id: "c", text: "A timetable" },
              { id: "d", text: "An editorial" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Memoir", statement: "Personal account focused on selected memories or episodes." },
            ],
            steps: [
              { reasoning: "Selected memories = memoir.", working: "memories", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** A memoir",
            commonErrors: ["Choosing (b) — a report informs impartially."],
          },
        },
        {
          id: "cie-ol-fl-ng-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which genre primarily aims to convince an audience to act or believe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A persuasive speech" },
              { id: "b", text: "A dictionary entry" },
              { id: "c", text: "A factual report" },
              { id: "d", text: "A recipe" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Persuasive genre", statement: "Speeches, editorials, letters that aim to convince." },
            ],
            steps: [
              { reasoning: "Convince = persuasive.", working: "convince", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A persuasive speech",
            commonErrors: ["Choosing (b) — reports inform, not convince."],
          },
        },
        {
          id: "cie-ol-fl-ng-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The typical structure of an essay is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Verse, refrain, volta" },
              { id: "b", text: "Act, scene, epilogue" },
              { id: "c", text: "Headline, byline, caption" },
              { id: "d", text: "Introduction, body paragraphs, conclusion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Essay structure", statement: "Introduction, body, conclusion." },
            ],
            steps: [
              { reasoning: "Intro-body-conclusion.", working: "structure", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Introduction, body paragraphs, conclusion",
            commonErrors: ["Choosing (d) — that's drama."],
          },
        },
        {
          id: "cie-ol-fl-ng-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a biography?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biography", statement: "A life story written by someone other than the subject." },
            ],
            steps: [
              { reasoning: "Records another person's life.", working: "life story", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "To present the life of a person, written by another author.",
            commonErrors: ["Confusing with autobiography."],
          },
        },
        {
          id: "cie-ol-fl-ng-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an editorial differ from a news report?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Editorial vs report", statement: "Editorial argues a viewpoint; report presents facts." },
            ],
            steps: [
              { reasoning: "Editorial expresses opinion/argument.", working: "opinion", marks: 1, markCode: "AO2" },
              { reasoning: "Report aims for factual, objective coverage.", working: "facts", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "An editorial argues a viewpoint; a news report presents facts objectively.",
            commonErrors: ["Treating both as neutral."],
          },
        },
        {
          id: "cie-ol-fl-ng-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a speech's occasion affects its content.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Occasion", statement: "Occasion shapes subject, tone, examples and formality." },
            ],
            steps: [
              { reasoning: "The occasion determines the topic and purpose.", working: "topic", marks: 1, markCode: "AO2" },
              { reasoning: "It sets the appropriate tone and formality.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Examples and appeals are chosen for that audience/moment.", working: "examples", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Occasion determines topic, tone, examples and formality of the speech.",
            commonErrors: ["Ignoring the audience and setting."],
          },
        },
        {
          id: "cie-ol-fl-ng-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A report's primary purpose is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Entertain with a fictional story" },
              { id: "b", text: "Express personal nostalgia" },
              { id: "c", text: "Convince readers to buy a product" },
              { id: "d", text: "Present information clearly and objectively" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Presents information/findings clearly and objectively." },
            ],
            steps: [
              { reasoning: "Report = clear objective information.", working: "objective", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Present information clearly and objectively",
            commonErrors: ["Choosing (b) — that's advertising."],
          },
        },
        {
          id: "cie-ol-fl-ng-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is life writing described as 'subjective'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subjective", statement: "Filtered through personal feelings, perspective and selection." },
            ],
            steps: [
              { reasoning: "It reflects one person's perspective.", working: "perspective", marks: 1, markCode: "AO2" },
              { reasoning: "The author selects and colours events personally.", working: "selective", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "It is filtered through personal feelings, perspective and the author's selection of events.",
            commonErrors: ["Assuming life writing is pure fact."],
          },
        },
        {
          id: "cie-ol-fl-ng-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the purposes of an autobiography and a persuasive speech.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose comparison", statement: "Autobiography records/reflections; speech aims to convince." },
            ],
            steps: [
              { reasoning: "Autobiography records or reflects on a life.", working: "record", marks: 1, markCode: "AO2" },
              { reasoning: "A speech aims to persuade or move an audience.", working: "persuade", marks: 1, markCode: "AO2" },
              { reasoning: "Autobiography is reflective/subjective; speech is rhetorical/appealing.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Clear contrast drawn.", working: "contrast", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Autobiography records/reflections on a life; a speech aims to convince an audience.",
            commonErrors: ["Treating both as simply 'telling' texts."],
          },
        },
        {
          id: "cie-ol-fl-ng-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two expository (informative) text types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Expository types", statement: "Essay, article, report — inform or explain." },
            ],
            steps: [
              { reasoning: "Any two of essay, article, report.", working: "types", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Essay, article, report (any two).",
            commonErrors: ["Naming persuasive genres like speeches."],
          },
        },
        {
          id: "cie-ol-fl-ng-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A letter to a newspaper editor arguing a viewpoint is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chronological narrative" },
              { id: "b", text: "Persuasive writing" },
              { id: "c", text: "Technical reporting" },
              { id: "d", text: "A recipe" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Persuasive letter", statement: "Argues a viewpoint to convince the reader." },
            ],
            steps: [
              { reasoning: "Arguing a viewpoint = persuasive.", working: "persuasive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Persuasive writing",
            commonErrors: ["Choosing (c) — it's opinion, not neutral reporting."],
          },
        },
        {
          id: "cie-ol-fl-ng-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Non-fiction genres review.",
          parts: [
            { label: "a", prompt: "State the purpose of a biography.", marks: 1 },
            { label: "b", prompt: "Name two persuasive techniques used in speeches.", marks: 2 },
            { label: "c", prompt: "Give one example of life writing.", marks: 1 },
            { label: "d", prompt: "Outline the structure of an essay.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Genres review", statement: "Purposes, techniques, examples and structures of non-fiction." },
            ],
            steps: [
              { part: "a", reasoning: "Presents a person's life written by another.", working: "biography", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Any two of rhetoric, repetition, emotional appeals, evidence.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Both named correctly.", working: "correct", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Autobiography, biography or memoir.", working: "life writing", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Introduction, body paragraphs, conclusion.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "All three stages named.", working: "complete", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) presents another's life (b) rhetoric/emotion/evidence (c) autobiography/biography/memoir (d) intro-body-conclusion",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Confusing persuasive and expository genres."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-life-writing",
      title: "Life writing analysis",
      skill: "Analyse autobiographies, biographies and memoirs.",
      lesson: {
        sections: [
          {
            heading: "Reliability",
            body: "Memory is selective — authors choose what to include/emphasise. Consider perspective and purpose.",
          },
          {
            heading: "Structure",
            body: "Chronological (time order) or thematic (topics). Flashbacks, reflections, present-day framing.",
          },
          {
            heading: "Voice and tone",
            body: "First person creates intimacy; tone varies — nostalgic, critical, celebratory, sombre.",
          },
        ],
        keyFormulas: [
          { name: "Life writing", statement: "Reliability+structure+voice=tone=analysis." },
        ],
        workedExample: {
          problem: "Memoir focuses on one childhood summer.",
          solution: "Thematic structure — explores specific period deeply rather than whole life chronologically.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-lw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why might life writing be unreliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too short" },
              { id: "b", text: "Memory is selective" },
              { id: "c", text: "Always accurate" },
              { id: "d", text: "Fiction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reliability", statement: "Memory selective — authors choose what to include." },
            ],
            steps: [
              { reasoning: "Memory selective.", working: "selective", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Memory is selective",
            commonErrors: ["Choosing (b) — memory isn't perfect."],
          },
        },
        {
          id: "cie-ol-fl-lw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'chronological' structure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological", statement: "Events in time order." },
            ],
            steps: [
              { reasoning: "Time order.", working: "time", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Events presented in time order.",
            commonErrors: ["Confusing with thematic."],
          },
        },
        {
          id: "cie-ol-fl-lw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does first-person voice affect life writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "First-person effect", statement: "Creates intimacy, subjectivity, personal perspective." },
            ],
            steps: [
              { reasoning: "Intimacy — reader feels close to author.", working: "intimacy", marks: 1, markCode: "AO2" },
              { reasoning: "Subjectivity — one perspective only.", working: "subjectivity", marks: 1, markCode: "AO2" },
              { reasoning: "Personal perspective shapes meaning.", working: "perspective", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Intimacy+subjectivity+personal perspective.",
            commonErrors: ["Treating as objective record."],
          },
        },
        {
          id: "cie-ol-fl-lw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Life writing analysis.",
          parts: [
            { label: "a", prompt: "Why unreliable?", marks: 1 },
            { label: "b", prompt: "Chronological structure?", marks: 2 },
            { label: "c", prompt: "First-person effect?", marks: 3 },
            { label: "d", prompt: "Structure types?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Life writing", statement: "Reliability, structure, voice, types." },
            ],
            steps: [
              { part: "a", reasoning: "Memory is selective.", working: "reliable", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Events in time order.", working: "chronological", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Intimacy, subjectivity, perspective.", working: "voice", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Chronological, thematic, flashback, present framing.", working: "structures", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) selective memory (b) time order (c) intimacy+subjectivity (d) chronological/thematic/flashback",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Types listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Treating life writing as pure fact."],
          },
        },
        {
          id: "cie-ol-fl-lw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure organises life writing by topics rather than by time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thematic" },
              { id: "b", text: "Chronological" },
              { id: "c", text: "Numerical" },
              { id: "d", text: "Alphabetical" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thematic structure", statement: "Events grouped by topic rather than time order." },
            ],
            steps: [
              { reasoning: "Topics = thematic.", working: "topics", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Thematic",
            commonErrors: ["Choosing (b) — that's time order."],
          },
        },
        {
          id: "cie-ol-fl-lw-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'flashback' in life writing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ends the narrative" },
              { id: "b", text: "Predicts the future" },
              { id: "c", text: "Returns to earlier events out of time order" },
              { id: "d", text: "Lists facts without comment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flashback", statement: "A return to earlier events, interrupting the main time order." },
            ],
            steps: [
              { reasoning: "Flashback = earlier events revisited.", working: "earlier", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Returns to earlier events out of time order",
            commonErrors: ["Choosing (d) — that's an epilogue."],
          },
        },
        {
          id: "cie-ol-fl-lw-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A 'nostalgic' tone in life writing suggests the writer feels:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fear of the future" },
              { id: "b", text: "Anger at the present" },
              { id: "c", text: "Complete indifference" },
              { id: "d", text: "Fond remembrance of the past" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nostalgic tone", statement: "Warm, longing attitude towards the past." },
            ],
            steps: [
              { reasoning: "Nostalgic = fond past feeling.", working: "fond", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Fond remembrance of the past",
            commonErrors: ["Choosing (b) — that's bitterness or anger."],
          },
        },
        {
          id: "cie-ol-fl-lw-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does a memoir typically differ from an autobiography?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Memoir vs autobiography", statement: "Memoir focuses on selected episodes; autobiography covers a whole life." },
            ],
            steps: [
              { reasoning: "Memoir selects episodes/memories.", working: "episodes", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A memoir focuses on selected memories or episodes rather than a complete life story.",
            commonErrors: ["Treating them as identical."],
          },
        },
        {
          id: "cie-ol-fl-lw-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can present-day framing affect a memoir?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Framing", statement: "Present-day perspective contrasts with past events, adding reflection." },
            ],
            steps: [
              { reasoning: "It contrasts then with now.", working: "contrast", marks: 1, markCode: "AO2" },
              { reasoning: "It adds reflective commentary and meaning.", working: "reflection", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "It contrasts the past with the present and adds reflective commentary.",
            commonErrors: ["Ignoring the effect of the framing device."],
          },
        },
        {
          id: "cie-ol-fl-lw-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how tone shapes the meaning of life writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone in life writing", statement: "Tone colours events and guides the reader's response." },
            ],
            steps: [
              { reasoning: "Tone (nostalgic, critical, celebratory) colours how events are presented.", working: "colours", marks: 1, markCode: "AO2" },
              { reasoning: "It guides the reader's emotional response.", working: "response", marks: 1, markCode: "AO2" },
              { reasoning: "It reveals the author's attitude towards their own experience.", working: "attitude", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tone colours events, guides the reader's response and reveals the author's attitude.",
            commonErrors: ["Naming tones without explaining their effect."],
          },
        },
        {
          id: "cie-ol-fl-lw-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a feature of chronological structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Natural sequence of events" },
              { id: "b", text: "Events in time order" },
              { id: "c", text: "Development over time" },
              { id: "d", text: "Events grouped by topic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological", statement: "Events presented in time order, not by topic." },
            ],
            steps: [
              { reasoning: "Grouping by topic is thematic, not chronological.", working: "topic", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Events grouped by topic",
            commonErrors: ["Choosing (b) — that IS chronological."],
          },
        },
        {
          id: "cie-ol-fl-lw-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a biography be more 'objective' than an autobiography?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Biographer distance", statement: "An outside author can offer perspective, though still selects facts." },
            ],
            steps: [
              { reasoning: "The biographer is not the subject, so distance may reduce self-interest.", working: "distance", marks: 1, markCode: "AO2" },
              { reasoning: "But the biographer still selects and interprets — never fully neutral.", working: "selects", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "An outside author may offer more distance, though the biography is still selective and interpreted.",
            commonErrors: ["Claiming biography is completely objective."],
          },
        },
        {
          id: "cie-ol-fl-lw-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how structure affects meaning in life writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure and meaning", statement: "Chronological shows development; thematic deepens focus on selected aspects." },
            ],
            steps: [
              { reasoning: "Chronological structure shows growth and change over time.", working: "growth", marks: 1, markCode: "AO2" },
              { reasoning: "Thematic structure deepens exploration of chosen topics.", working: "topics", marks: 1, markCode: "AO2" },
              { reasoning: "Flashbacks and framing add reflection and contrast.", working: "flashback", marks: 1, markCode: "AO2" },
              { reasoning: "Structure choice shapes what the reader understands.", working: "meaning", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Chronological shows development; thematic deepens focus; framing/flashbacks add reflection.",
            commonErrors: ["Describing structure without linking it to effect."],
          },
        },
        {
          id: "cie-ol-fl-lw-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'selective memory' mean in life writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Selective memory", statement: "The author chooses which events to remember and include." },
            ],
            steps: [
              { reasoning: "Author chooses what to include.", working: "chooses", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The author chooses which events to remember and include, shaping the account.",
            commonErrors: ["Assuming all events are recorded equally."],
          },
        },
        {
          id: "cie-ol-fl-lw-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "First-person narration in life writing mainly creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple viewpoints" },
              { id: "b", text: "Intimacy and subjectivity" },
              { id: "c", text: "A detached tone" },
              { id: "d", text: "Complete objectivity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "First person", statement: "Creates intimacy but limits perspective to one view." },
            ],
            steps: [
              { reasoning: "First person = intimacy + subjectivity.", working: "intimacy", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Intimacy and subjectivity",
            commonErrors: ["Choosing (b) — first person is subjective."],
          },
        },
        {
          id: "cie-ol-fl-lw-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Life writing review.",
          parts: [
            { label: "a", prompt: "Define 'thematic' structure.", marks: 1 },
            { label: "b", prompt: "Give two reasons life writing may be unreliable.", marks: 2 },
            { label: "c", prompt: "Name one effect of first-person voice.", marks: 1 },
            { label: "d", prompt: "Name two structures used in life writing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Life writing review", statement: "Structures, reliability, voice and effects." },
            ],
            steps: [
              { part: "a", reasoning: "Events grouped by topic, not time.", working: "thematic", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Selective memory and personal perspective.", working: "memory", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Both reasons given.", working: "both", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Intimacy or subjectivity.", working: "voice", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Chronological and thematic.", working: "structures", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Both named correctly.", working: "correct", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) grouped by topic (b) selective memory+perspective (c) intimacy (d) chronological/thematic",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Treating life writing as pure fact."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-speech-article",
      title: "Speeches and articles",
      skill: "Analyse persuasive and journalistic texts.",
      lesson: {
        sections: [
          {
            heading: "Speech analysis",
            body: "Consider: occasion, audience, purpose. Rhetorical devices: repetition, rhetorical questions, direct address, emotional appeals.",
          },
          {
            heading: "Article analysis",
            body: "News vs opinion vs feature. Consider: headline, structure, bias, evidence, tone.",
          },
          {
            heading: "Rhetorical devices",
            body: "Tricolon (three-part), anaphora (repetition), rhetorical questions, emotive language, inclusive pronouns ('we').",
          },
        ],
        keyFormulas: [
          { name: "Speech/article", statement: "Occasion+audience+purpose+devices+analysis." },
        ],
        workedExample: {
          problem: "Speech uses 'we must act now' repeatedly.",
          solution: "Anaphora + inclusive 'we' + urgency — creates collective responsibility and momentum.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-sa2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'anaphora' in speeches?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three-part list" },
              { id: "b", text: "Emotional word" },
              { id: "c", text: "Repetition at sentence starts" },
              { id: "d", text: "Question to audience" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anaphora", statement: "Repetition of words at sentence beginnings." },
            ],
            steps: [
              { reasoning: "Anaphora = repeated openings.", working: "repeated", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Repetition at sentence starts",
            commonErrors: ["Choosing (b) — that's rhetorical question."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'rhetorical question'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical question", statement: "Question not expecting answer — persuades/emphasises." },
            ],
            steps: [
              { reasoning: "Question for effect, not answer.", working: "effect", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Question not expecting answer — persuades/emphasises.",
            commonErrors: ["Thinking it needs an answer."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to analyse bias in articles?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article bias", statement: "Word choice, selection, omission, tone reveal perspective." },
            ],
            steps: [
              { reasoning: "Word choice — positive/negative connotations.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Selection — what stories chosen/omitted.", working: "selection", marks: 1, markCode: "AO2" },
              { reasoning: "Tone — objective vs subjective.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice+selection+omission+tone=reveal bias.",
            commonErrors: ["Accepting articles as neutral."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Speeches and articles.",
          parts: [
            { label: "a", prompt: "Define anaphora.", marks: 1 },
            { label: "b", prompt: "Define rhetorical question.", marks: 2 },
            { label: "c", prompt: "How to analyse bias?", marks: 3 },
            { label: "d", prompt: "Rhetorical devices?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speeches/articles", statement: "Anaphora, rhetorical questions, bias, devices." },
            ],
            steps: [
              { part: "a", reasoning: "Repetition at sentence starts.", working: "anaphora", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Question for effect not answer.", working: "rhetorical", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word choice, selection, omission, tone.", working: "bias", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Tricolon, anaphora, rhetorical questions, emotive language, 'we'.", working: "devices", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) repeated openings (b) effect not answer (c) word choice+selection+tone (d) tricolon/anaphora/emotive",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Devices listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Missing rhetorical devices."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'tricolon' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single powerful word" },
              { id: "b", text: "A rhetorical question" },
              { id: "c", text: "A type of headline" },
              { id: "d", text: "A three-part structure or list" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tricolon", statement: "A three-part phrase or list, e.g. 'of the people, by the people, for the people'." },
            ],
            steps: [
              { reasoning: "Tricolon = three parts.", working: "three", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** A three-part structure or list",
            commonErrors: ["Choosing (c) — that's a rhetorical question."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Inclusive pronouns such as 'we' in a speech mainly:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exclude the audience" },
              { id: "b", text: "Make the speech longer" },
              { id: "c", text: "Create a shared identity and responsibility" },
              { id: "d", text: "Weaken the argument" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inclusive pronouns", statement: "'We' binds speaker and audience into one group." },
            ],
            steps: [
              { reasoning: "'We' creates shared identity.", working: "shared", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Create a shared identity and responsibility",
            commonErrors: ["Choosing (b) — 'we' includes, not excludes."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "'Emotive language' in speeches and articles aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Present neutral facts" },
              { id: "b", text: "Define technical terms" },
              { id: "c", text: "Trigger an emotional response in the reader" },
              { id: "d", text: "List statistics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Emotive language", statement: "Words chosen to arouse feeling rather than reason." },
            ],
            steps: [
              { reasoning: "Emotive = arouses feeling.", working: "feeling", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Trigger an emotional response in the reader",
            commonErrors: ["Choosing (b) — that's objective language."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What three factors should you consider first when analysing a speech?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech context", statement: "Occasion, audience and purpose frame all analysis." },
            ],
            steps: [
              { reasoning: "Occasion, audience, purpose.", working: "context", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Occasion, audience and purpose.",
            commonErrors: ["Starting with devices before context."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does a newspaper headline differ from the article body?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Headline vs body", statement: "Headline attracts attention and compresses; body develops detail." },
            ],
            steps: [
              { reasoning: "Headline is short, punchy, designed to attract.", working: "attract", marks: 1, markCode: "AO2" },
              { reasoning: "Body provides detail, evidence and context.", working: "detail", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The headline attracts attention in few words; the body develops detail and evidence.",
            commonErrors: ["Assuming the headline is neutral."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how anaphora creates momentum in a speech.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anaphora effect", statement: "Repeated openings build rhythm, emphasis and emotional drive." },
            ],
            steps: [
              { reasoning: "Repetition creates rhythm and predictability.", working: "rhythm", marks: 1, markCode: "AO2" },
              { reasoning: "It emphasises the repeated idea powerfully.", working: "emphasis", marks: 1, markCode: "AO2" },
              { reasoning: "It builds emotional momentum toward a climax.", working: "momentum", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Repetition builds rhythm, emphasis and emotional momentum in the speech.",
            commonErrors: ["Defining anaphora without explaining its effect."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A news report is distinguished from an editorial mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Having no headline" },
              { id: "b", text: "Presenting facts rather than arguing a viewpoint" },
              { id: "c", text: "Being shorter" },
              { id: "d", text: "Using no evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report vs editorial", statement: "Reports inform; editorials argue." },
            ],
            steps: [
              { reasoning: "Report=facts, editorial=opinion.", working: "facts", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Presenting facts rather than arguing a viewpoint",
            commonErrors: ["Choosing (d) — reports use evidence."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'sensationalism' in journalism?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sensationalism", statement: "Exaggerating or dramatising events to attract attention." },
            ],
            steps: [
              { reasoning: "Exaggerates/dramatises for attention.", working: "exaggerate", marks: 1, markCode: "AO2" },
              { reasoning: "Often sacrifices accuracy or balance.", working: "accuracy", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Exaggerating or dramatising events to attract attention, often at the cost of accuracy.",
            commonErrors: ["Confusing with ordinary reporting."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how rhetorical devices serve a speech's purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Devices serve purpose", statement: "Rhetoric persuades, emotive language moves, repetition emphasises." },
            ],
            steps: [
              { reasoning: "Rhetorical devices structure and strengthen the argument.", working: "argument", marks: 1, markCode: "AO2" },
              { reasoning: "Emotive language and inclusive 'we' create connection.", working: "connection", marks: 1, markCode: "AO2" },
              { reasoning: "Repetition/anaphora builds momentum and emphasis.", working: "momentum", marks: 1, markCode: "AO2" },
              { reasoning: "All serve the persuasive purpose.", working: "purpose", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Devices structure, connect and build momentum — all serving the persuasive purpose.",
            commonErrors: ["Listing devices without linking to purpose."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two typical features of a newspaper feature article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Feature article", statement: "Longer, in-depth, human interest, more descriptive than news." },
            ],
            steps: [
              { reasoning: "Any two of in-depth, human interest, descriptive, longer.", working: "features", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "In-depth coverage and human interest (also: descriptive, longer-form).",
            commonErrors: ["Describing straight news reporting."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Direct address ('you', 'your') in a speech mainly:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Involves the audience personally" },
              { id: "b", text: "Ends the speech" },
              { id: "c", text: "Creates distance" },
              { id: "d", text: "Lists facts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Direct address", statement: "'You' makes each listener feel personally involved." },
            ],
            steps: [
              { reasoning: "'You' involves audience personally.", working: "involves", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Involves the audience personally",
            commonErrors: ["Choosing (b) — direct address creates closeness."],
          },
        },
        {
          id: "cie-ol-fl-sa2-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Speeches and articles review.",
          parts: [
            { label: "a", prompt: "Define 'tricolon'.", marks: 1 },
            { label: "b", prompt: "Give two indicators of bias in an article.", marks: 2 },
            { label: "c", prompt: "State the effect of a rhetorical question.", marks: 1 },
            { label: "d", prompt: "Contrast the purpose of a speech and a report.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech/article review", statement: "Devices, bias, effects and purposes." },
            ],
            steps: [
              { part: "a", reasoning: "A three-part structure/list.", working: "tricolon", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Any two of loaded word choice, one-sided selection, omission.", working: "bias", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Both indicators given.", working: "both", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Emphasises a point without expecting an answer.", working: "emphasis", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Speech persuades; report informs.", working: "purposes", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Clear contrast stated.", working: "contrast", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) three-part list (b) loaded words+one-sided selection (c) emphasis (d) persuade vs inform",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Missing rhetorical devices."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-nonfiction-notes-1",
      title: "Non-fiction — revision notes",
      summary: "Genres, life writing, speeches/articles.",
      sections: [
        {
          heading: "Non-fiction",
          body: "Genres: autobiography/biography/memoir, essay/article/report, speech/editorial. Life writing: selective memory, chronological/thematic. Speeches: anaphora, rhetorical questions, emotive language. Articles: bias via word choice/selection/tone.",
        },
      ],
    },
  ],
};
