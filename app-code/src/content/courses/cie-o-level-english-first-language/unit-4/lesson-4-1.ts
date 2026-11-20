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
              { id: "a", text: "Author writes own life vs other's" },
              { id: "b", text: "Length" },
              { id: "c", text: "Fiction vs non-fiction" },
              { id: "d", text: "Publication date" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Autobiography vs biography", statement: "Auto=self-written; bio=written by another." },
            ],
            steps: [
              { reasoning: "Auto=self, bio=other.", working: "self vs other", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Author writes own life vs other's",
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
              { id: "a", text: "Memory is selective" },
              { id: "b", text: "Always accurate" },
              { id: "c", text: "Fiction" },
              { id: "d", text: "Too short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reliability", statement: "Memory selective — authors choose what to include." },
            ],
            steps: [
              { reasoning: "Memory selective.", working: "selective", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Memory is selective",
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
              { id: "a", text: "Repetition at sentence starts" },
              { id: "b", text: "Question to audience" },
              { id: "c", text: "Three-part list" },
              { id: "d", text: "Emotional word" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anaphora", statement: "Repetition of words at sentence beginnings." },
            ],
            steps: [
              { reasoning: "Anaphora = repeated openings.", working: "repeated", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Repetition at sentence starts",
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
