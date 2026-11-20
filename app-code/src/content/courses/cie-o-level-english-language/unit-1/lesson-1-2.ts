import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cie-ol-el-lesson-1-2",
  code: "1-2",
  title: "Summary writing skills",
  goal: "I CAN write accurate summaries that capture key points concisely.",
  standards: ["1123 Writing: summary"],
  vocabulary: [
    { term: "Summary", definition: "Brief statement of main points — own words, no detail." },
    { term: "Main point", definition: "Most important idea in a passage." },
    { term: "Key detail", definition: "Supporting information for main point." },
    { term: "Condense", definition: "Express in fewer words without losing meaning." },
    { term: "Paraphrase", definition: "Rewrite in own words — not copy." },
    { term: "Objective", definition: "Factual, no personal opinion." },
  ],
  concepts: [
    {
      id: "cie-ol-el-summary",
      title: "Summary technique",
      skill: "Identify main points and condense them into a concise summary.",
      lesson: {
        sections: [
          {
            heading: "What makes a good summary?",
            body: "- Covers all main points\n- Omits minor details\n- Uses own words (paraphrase)\n- Concise — usually 1/4 to 1/3 of original\n- Objective — no opinions\n- Logical order",
          },
          {
            heading: "Process",
            body: "1. Read text carefully\n2. Identify main points vs supporting details\n3. Note key terms/phrases to include\n4. Write summary in own words\n5. Check word limit\n6. Edit for conciseness",
          },
          {
            heading: "Common mistakes",
            body: "Copying sentences verbatim, including minor details, missing main points, exceeding word limit, adding opinions.",
          },
        ],
        keyFormulas: [
          { name: "Summary", statement: "Main points only, own words, concise, objective, word limit." },
        ],
        workedExample: {
          problem: "How to summarise a passage about climate change?",
          solution: "Identify main points: causes, effects, solutions — condense each into one sentence in own words.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-sum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a summary include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main points only" },
              { id: "b", text: "Every detail" },
              { id: "c", text: "Personal opinions" },
              { id: "d", text: "Minor examples" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Main points only — no minor details." },
            ],
            steps: [
              { reasoning: "Summary = main points condensed.", working: "main points", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main points only",
            commonErrors: ["Choosing (b) — that's copying, not summarising."],
          },
        },
        {
          id: "cie-ol-el-sum-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What language should a summary use?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Summary language", statement: "Own words — paraphrase, not copy." },
            ],
            steps: [
              { reasoning: "Paraphrase — own words, not copied sentences.", working: "paraphrase", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Own words — paraphrase the text, don't copy sentences.",
            commonErrors: ["Copying verbatim — must paraphrase."],
          },
        },
        {
          id: "cie-ol-el-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the process of writing a summary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary process", statement: "Read→identify main points→paraphrase→check word limit→edit." },
            ],
            steps: [
              { reasoning: "Read text carefully, identify main points.", working: "read+identify", marks: 1, markCode: "AO2" },
              { reasoning: "Paraphrase in own words — condense each point.", working: "paraphrase", marks: 1, markCode: "AO2" },
              { reasoning: "Check word limit, edit for conciseness.", working: "check+edit", marks: 1, markCode: "AO2" },
              { reasoning: "Process clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Read→identify main points→paraphrase→check word limit→edit.",
            commonErrors: ["Skipping identification — need to find main points first."],
          },
        },
        {
          id: "cie-ol-el-sum-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate a summary.",
          parts: [
            { label: "a", prompt: "What is a summary?", marks: 1 },
            { label: "b", prompt: "List three summary requirements.", marks: 2 },
            { label: "c", prompt: "Describe the process.", marks: 3 },
            { label: "d", prompt: "What are common mistakes?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary", statement: "Main points, own words, concise, objective, word limit." },
            ],
            steps: [
              { part: "a", reasoning: "Brief statement of main points in own words.", working: "definition", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Own words, main points only, concise, objective, word limit.", working: "requirements", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Read→identify→paraphrase→check→edit.", working: "process", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Copying, minor details, missing points, word limit, opinions.", working: "mistakes", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) brief main points (b) own words/main points/concise (c) read→identify→paraphrase→check (d) copying/details/opinions",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three+ requirements.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Process clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple mistakes.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Summary as opinion piece — must be objective."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-directed",
      title: "Directed writing",
      skill: "Write to a specific purpose, audience and format.",
      lesson: {
        sections: [
          {
            heading: "What is directed writing?",
            body: "Writing task with specific instructions — write a letter, report, article, review for a given audience and purpose.",
          },
          {
            heading: "Key elements",
            body: "- **Purpose**: inform, persuade, complain, request\n- **Audience**: who will read it\n- **Format**: letter, email, report, article\n- **Content**: what to include",
          },
          {
            heading: "Technique",
            body: "Adapt language/register to audience. Follow format conventions. Address purpose directly. Include all required content.",
          },
        ],
        keyFormulas: [
          { name: "Directed writing", statement: "Purpose+audience+format+content — adapt register and follow conventions." },
        ],
        workedExample: {
          problem: "Write a complaint letter to a shop about faulty goods.",
          solution: "Formal register, letter format, state problem clearly, request remedy, polite but firm tone.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-dir-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'directed writing' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing with specific instructions" },
              { id: "b", text: "Free writing" },
              { id: "c", text: "Copying text" },
              { id: "d", text: "Grammar exercises" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Directed writing", statement: "Writing to specific purpose/audience/format." },
            ],
            steps: [
              { reasoning: "Directed = given instructions.", working: "instructions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Writing with specific instructions",
            commonErrors: ["Choosing (b) — it's guided, not free."],
          },
        },
        {
          id: "cie-ol-el-dir-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three elements of directed writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Elements", statement: "Purpose, audience, format, content." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Purpose, audience, format, content (any three).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-dir-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should you adapt language for different audiences?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register", statement: "Formal for official, informal for friends; vocabulary/sentence structure varies." },
            ],
            steps: [
              { reasoning: "Formal: official letters, reports — polite, standard English.", working: "formal", marks: 1, markCode: "AO2" },
              { reasoning: "Informal: friends, casual emails — contractions, slang OK.", working: "informal", marks: 1, markCode: "AO2" },
              { reasoning: "Adjust vocabulary, sentence length, tone to audience.", working: "adapt", marks: 1, markCode: "AO2" },
              { reasoning: "Register explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal for official (polite, standard); informal for friends (contractions, casual).",
            commonErrors: ["Same register for all — must adapt."],
          },
        },
        {
          id: "cie-ol-el-dir-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate directed writing.",
          parts: [
            { label: "a", prompt: "Define directed writing.", marks: 1 },
            { label: "b", prompt: "List key elements.", marks: 2 },
            { label: "c", prompt: "Describe letter format.", marks: 3 },
            { label: "d", prompt: "How to adapt for audience?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Directed writing", statement: "Purpose/audience/format; register adapts; conventions followed." },
            ],
            steps: [
              { part: "a", reasoning: "Writing to specific instructions — purpose, audience, format.", working: "definition", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Purpose, audience, format, content.", working: "elements", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "All four.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Sender's address, date, recipient, greeting, body, closing, signature.", working: "format", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal for official, informal for friends — adjust vocabulary/tone.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) specific instructions (b) purpose/audience/format/content (c) letter format (d) register adapts",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "All four.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Format complete.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Adaptation clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ignoring format conventions."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-narrative",
      title: "Narrative and descriptive writing",
      skill: "Write engaging narratives and vivid descriptions.",
      lesson: {
        sections: [
          {
            heading: "Narrative structure",
            body: "Opening (hook) → rising action → climax → resolution → conclusion. Character, setting, plot, theme.",
          },
          {
            heading: "Descriptive techniques",
            body: "Sensory details (sight, sound, smell, touch, taste), imagery, figurative language, varied sentence structure.",
          },
          {
            heading: "Show don't tell",
            body: "Instead of 'she was nervous' — 'her hands trembled as she gripped the doorframe'. Use action/dialogue to reveal character.",
          },
        ],
        keyFormulas: [
          { name: "Narrative", statement: "Structure: opening→rising→climax→resolution; sensory details; show don't tell." },
        ],
        workedExample: {
          problem: "How to write an engaging opening?",
          solution: "Hook: question, surprising fact, vivid description, or dialogue — draw reader in immediately.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-narr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'show don't tell'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use action/details instead of stating" },
              { id: "b", text: "Always use dialogue" },
              { id: "c", text: "Only describe settings" },
              { id: "d", text: "Never use adjectives" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Show don't tell", statement: "Use details/action instead of stating directly." },
            ],
            steps: [
              { reasoning: "Show = demonstrate through details, not state.", working: "demonstrate", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Use action/details instead of stating",
            commonErrors: ["Choosing (d) — adjectives still used, just not alone."],
          },
        },
        {
          id: "cie-ol-el-narr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three narrative structure elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Structure", statement: "Opening, rising action, climax, resolution." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Opening, rising action, climax, resolution (any three).",
            commonErrors: ["Missing climax — key element."],
          },
        },
        {
          id: "cie-ol-el-narr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to write vivid descriptions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description", statement: "Sensory details, imagery, figurative language, varied sentences." },
            ],
            steps: [
              { reasoning: "Use all five senses — sight, sound, smell, touch, taste.", working: "senses", marks: 1, markCode: "AO2" },
              { reasoning: "Figurative language: similes, metaphors, personification.", working: "figurative", marks: 1, markCode: "AO2" },
              { reasoning: "Vary sentence length and structure for rhythm.", working: "variety", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sensory details + figurative language + varied sentences = vivid description.",
            commonErrors: ["Only adjectives — need sensory and figurative."],
          },
        },
        {
          id: "cie-ol-el-narr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate narrative skills.",
          parts: [
            { label: "a", prompt: "Describe narrative structure.", marks: 2 },
            { label: "b", prompt: "Explain 'show don't tell'.", marks: 2 },
            { label: "c", prompt: "List descriptive techniques.", marks: 3 },
            { label: "d", prompt: "How to write engaging opening?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative", statement: "Structure, show don't tell, sensory details, engaging opening." },
            ],
            steps: [
              { part: "a", reasoning: "Opening→rising action→climax→resolution→conclusion.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Use action/details instead of stating — 'her hands trembled' vs 'she was nervous'.", working: "show", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Sensory details, imagery, figurative language, varied sentences.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Hook: question, fact, vivid description, or dialogue.", working: "opening", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) show don't tell (c) sensory/figurative/varied (d) hook",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ techniques.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Telling not showing — state feelings directly."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-persuasive",
      title: "Persuasive and argumentative writing",
      skill: "Construct arguments and persuade readers effectively.",
      lesson: {
        sections: [
          {
            heading: "Argument structure",
            body: "Introduction (thesis) → main points with evidence → counterarguments → conclusion. Each point needs support.",
          },
          {
            heading: "Persuasive techniques",
            body: "Rhetorical questions, emotive language, statistics, expert opinions, inclusive language ('we'), direct address ('you').",
          },
          {
            heading: "Tone and register",
            body: "Formal for serious issues, passionate for causes. Balance firmness with respect. Avoid insults.",
          },
        ],
        keyFormulas: [
          { name: "Persuasion", statement: "Thesis→points+evidence→counterarguments→conclusion; persuasive techniques." },
        ],
        workedExample: {
          problem: "How to structure an argument for school uniforms?",
          solution: "Thesis: uniforms beneficial. Points: equality, focus, safety. Evidence: studies, examples. Address counterarguments. Conclude strongly.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-persu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the thesis statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main argument in introduction" },
              { id: "b", text: "Final conclusion" },
              { id: "c", text: "Supporting detail" },
              { id: "d", text: "Question to reader" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "Main argument stated in introduction." },
            ],
            steps: [
              { reasoning: "Thesis = main argument.", working: "main argument", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main argument in introduction",
            commonErrors: ["Choosing (c) — that's evidence/support."],
          },
        },
        {
          id: "cie-ol-el-persu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Rhetorical questions, emotive language, statistics, expert opinions." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical questions, emotive language, statistics, expert opinions (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-persu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to structure an argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument structure", statement: "Thesis→points+evidence→counterarguments→conclusion." },
            ],
            steps: [
              { reasoning: "Introduction states thesis clearly.", working: "introduction", marks: 1, markCode: "AO2" },
              { reasoning: "Main points each with evidence.", working: "points", marks: 1, markCode: "AO2" },
              { reasoning: "Address counterarguments, conclude strongly.", working: "conclusion", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Thesis→points+evidence→counterarguments→conclusion.",
            commonErrors: ["No counterarguments — weak argument."],
          },
        },
        {
          id: "cie-ol-el-persu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate persuasive writing.",
          parts: [
            { label: "a", prompt: "Describe argument structure.", marks: 2 },
            { label: "b", prompt: "Name persuasive techniques.", marks: 3 },
            { label: "c", prompt: "Explain tone/register.", marks: 2 },
            { label: "d", prompt: "How to address counterarguments?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Persuasion", statement: "Structure+techniques+tone+counterarguments." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis→points+evidence→counterarguments→conclusion.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Rhetorical Q, emotive, statistics, expert, inclusive, direct address.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal for serious issues, passionate for causes — firm but respectful.", working: "tone", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Acknowledge opposing view, refute with evidence, show why yours is stronger.", working: "counter", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) techniques (c) tone/register (d) acknowledge+refute",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ techniques.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Ignoring counterarguments — weakens argument."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-writing-notes",
      title: "Writing skills — revision notes",
      summary: "Summary, directed writing, narrative, persuasive techniques.",
      sections: [
        {
          heading: "Writing types",
          body: "Summary: main points, own words, concise. Directed: purpose/audience/format. Narrative: structure+show don't tell. Persuasive: thesis+evidence+techniques.",
        },
      ],
    },
  ],
};
