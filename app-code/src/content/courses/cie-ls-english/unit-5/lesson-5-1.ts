import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cile-u5-lesson-5-1",
  code: "5-1",
  title: "Expository writing: explaining processes",
  goal: "I CAN write clear explanations of processes and concepts using logical sequence, technical vocabulary and examples.",
  standards: ["0861 Writing: expository skills"],
  vocabulary: [
    { term: "Exposition", definition: "Writing that explains or informs — processes, concepts, instructions." },
    { term: "Chronological order", definition: "Steps arranged in the order they occur." },
    { term: "Technical vocabulary", definition: "Subject-specific terms used precisely (e.g. 'photosynthesis', 'mitosis')." },
    { term: "Connective", definition: "Words that link ideas — 'first', 'then', 'because', 'however'." },
    { term: "Analogy", definition: "Comparing a complex idea to something familiar to aid understanding." },
    { term: "Definition", definition: "A precise statement of what a term means in context." },
  ],
  concepts: [
    {
      id: "cile-u5-process-explanation",
      title: "Explaining processes",
      skill: "Write clear, logical explanations of how things work using sequence, connectives and precise vocabulary.",
      lesson: {
        sections: [
          {
            heading: "Structure of process explanation",
            body: "- **Introduce**: what the process is and why it matters.\n- **Sequence**: steps in logical order — usually chronological.\n- **Detail**: what happens at each stage and why.\n- **Conclude**: the outcome or significance.",
          },
          {
            heading: "Language of explanation",
            body: "- **Connectives**: 'first', 'then', 'next', 'finally' for sequence; 'because', 'so', 'therefore' for cause.\n- **Technical terms**: use them precisely — define if the audience may not know them.\n- **Active voice**: 'The machine compresses the air' is clearer than 'The air is compressed by the machine' for processes.",
          },
          {
            heading: "Clarity checks",
            body: "- Can a reader follow without prior knowledge?\n- Are steps in the right order?\n- Are technical terms defined or familiar?\n- Is the explanation accurate — no skipped stages?",
          },
        ],
        keyFormulas: [
          { name: "Process explanation", statement: "Introduce → sequence → detail → conclude. Use connectives for logic and technical terms precisely." },
        ],
        workedExample: {
          problem: "Explain how to make a cup of tea in three steps.",
          solution: "1. Boil water and warm the cup. 2. Add a tea bag and pour the water. 3. Steep for three minutes, then remove the bag. Each step is sequential, uses connectives, and is precise.",
        },
      },
      questions: [
        {
          id: "cile-u5-process-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connective best introduces the final step in a process explanation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "However" },
              { id: "b", text: "Finally" },
              { id: "c", text: "Although" },
              { id: "d", text: "Similarly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sequence connectives", statement: "'Finally' signals the last step." },
            ],
            steps: [
              { reasoning: "'Finally' marks the end of a sequence.", working: "\\text{'finally'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Finally",
            commonErrors: ["Choosing 'however' — that signals contrast, not sequence."],
          },
        },
        {
          id: "cile-u5-process-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is chronological order important in process explanations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological order", statement: "Steps must occur in the order they actually happen for the process to work." },
            ],
            steps: [
              { reasoning: "Processes are causal — each step depends on the previous.", working: "\\text{causal}", marks: 1, markCode: "AO2" },
              { reasoning: "Wrong order makes the explanation inaccurate and unusable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Each step depends on the previous one; chronological order ensures the explanation is accurate and the reader can follow the process correctly.",
            commonErrors: ["Saying 'it sounds better' — the reason is logical necessity, not style."],
          },
        },
        {
          id: "cile-u5-process-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'Photosynthesis is when plants make food.' Improve this definition for clarity and precision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Precise definition", statement: "Definitions should state what the thing IS, using accurate technical terms." },
            ],
            steps: [
              { reasoning: "Problem: 'make food' is vague — what food? how?", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: specify the process — 'the process by which green plants convert light energy into chemical energy (glucose) using chlorophyll'.", working: "\\text{precise}", marks: 1, markCode: "AO2" },
              { reasoning: "Add context: where it happens (chloroplasts), what it needs (light, water, CO2).", working: "\\text{context}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: accurate, complete, technically correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Photosynthesis is the process by which green plants use light energy, water and carbon dioxide to produce glucose and oxygen, occurring in chloroplasts.' — precise, technical, complete.",
            commonErrors: ["Adding more vague words ('natural process') instead of technical precision."],
          },
        },
        {
          id: "cile-u5-process-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing an explanation of how a specific process works (e.g. photosynthesis, water cycle, making bread).",
          parts: [
            { label: "a", prompt: "Write an introduction defining the process.", marks: 2 },
            { label: "b", prompt: "List the steps in logical order.", marks: 2 },
            { label: "c", prompt: "Explain one step in detail using technical vocabulary.", marks: 2 },
            { label: "d", prompt: "Write a conclusion explaining the outcome or significance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Expository structure", statement: "Introduce → sequence → detail → conclude, with precise technical language." },
            ],
            steps: [
              { part: "a", reasoning: "Introduction defines the process accurately.", working: "\\text{definition}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear and accessible.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Steps in correct chronological order.", working: "\\text{order}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "All essential steps included.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "One step explained with technical terms.", working: "\\text{technical}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Explanation is accurate and clear.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Conclusion states the outcome/significance.", working: "\\text{outcome}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Connects back to introduction.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Concise and meaningful.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) accurate introduction (b) logical step sequence (c) detailed technical explanation (d) meaningful conclusion",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear definition.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct sequence.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Disordered.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Technical detail accurate.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Meaningful, connected conclusion.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (c) using technical terms without explaining them."],
          },
        },
      ],
    },
    {
      id: "cile-u5-information-texts",
      title: "Information and report writing",
      skill: "Write clear information texts and reports using appropriate structure, tone and organisation.",
      lesson: {
        sections: [
          {
            heading: "Information text features",
            body: "- **Headings and subheadings**: organise content, guide the reader.\n- **Paragraphs**: one idea each, topic sentence first.\n- **Bullet points**: for lists of facts, features, steps.\n- **Technical terms**: used precisely for the intended audience.",
          },
          {
            heading: "Report structure",
            body: "- **Title**: states the subject clearly.\n- **Introduction**: purpose and context.\n- **Findings/body**: organised sections — chronological, by category, or by importance.\n- **Conclusion**: summary of key points or recommendations.",
          },
          {
            heading: "Tone for information",
            body: "- **Formal but accessible**: precise, objective, no slang or contractions.\n- **Audience-aware**: experts get technical terms; general readers get explanations.\n- **Objective**: present facts without personal opinion unless reporting it.",
          },
        ],
        keyFormulas: [
          { name: "Information text", statement: "Clear headings + one idea per paragraph + precise vocabulary + objective tone = effective information text." },
        ],
        workedExample: {
          problem: "Write a report title for a school recycling survey.",
          solution: "'Recycling Habits in Year 9: Survey Report' — clear, specific, states subject and method.",
        },
      },
      questions: [
        {
          id: "cile-u5-info-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most appropriate title for a report about a school trip?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Our Amazing Trip!" },
              { id: "b", text: "School Trip to the Science Museum: Report" },
              { id: "c", text: "Things We Saw" },
              { id: "d", text: "A Day Out" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report title", statement: "Titles state subject and purpose clearly and formally." },
            ],
            steps: [
              { reasoning: "(b) is specific, formal, and states subject + type.", working: "\\text{specific/ formal}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** School Trip to the Science Museum: Report",
            commonErrors: ["Choosing (a) — too informal and vague for a report."],
          },
        },
        {
          id: "cile-u5-info-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why bullet points are useful in information texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Bullet points", statement: "They present lists of facts clearly and scannably." },
            ],
            steps: [
              { reasoning: "Bullets break information into digestible units.", working: "\\text{digestible}", marks: 1, markCode: "AO2" },
              { reasoning: "They allow skimming — readers can find key facts quickly.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Bullet points break information into clear, scannable units — readers can quickly identify key facts without reading every sentence.",
            commonErrors: ["Saying 'they look nice' — the function is clarity and scannability."],
          },
        },
        {
          id: "cile-u5-info-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes a report with no headings, long paragraphs, and informal language ('stuff', 'loads of'). Rewrite the approach to make it more effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report conventions", statement: "Headings, short paragraphs, formal vocabulary are required." },
            ],
            steps: [
              { reasoning: "Problem: no headings — reader cannot navigate.", working: "\\text{no headings}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: add headings and subheadings for each section.", marks: 1, markCode: "AO2" },
              { reasoning: "Problem: long paragraphs — overwhelming.", working: "\\text{long paragraphs}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: break into one-idea paragraphs, use bullets for lists, replace informal words with precise terms.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Add clear headings/subheadings, break paragraphs into single ideas, use bullets for lists, and replace informal words ('stuff', 'loads of') with precise formal vocabulary.",
            commonErrors: ["Only fixing one issue — reports need structure AND register AND paragraph control."],
          },
        },
        {
          id: "cile-u5-info-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing an information text about a topic of your choice (e.g. a scientific process, a historical event, a technical how-to).",
          parts: [
            { label: "a", prompt: "Write a title and introduction stating the subject and purpose.", marks: 2 },
            { label: "b", prompt: "Plan the sections with headings.", marks: 2 },
            { label: "c", prompt: "Write one paragraph demonstrating clear structure and precise vocabulary.", marks: 2 },
            { label: "d", prompt: "Explain how your text is organised for the reader.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Information text", statement: "Title + intro + headed sections + precise vocabulary + objective tone." },
            ],
            steps: [
              { part: "a", reasoning: "Title states subject; introduction states purpose.", working: "\\text{title+purpose}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear and appropriate.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Headings organise content logically.", working: "\\text{headings}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Sections cover all essential points.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Paragraph has topic sentence, supporting detail, precise vocabulary.", working: "\\text{structure+vocab}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear and accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Organisation explained — headings, paragraphing, sequence.", working: "\\text{organisation}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Reader navigation addressed.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion is clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) title + purpose (b) logical headings (c) structured paragraph with precise vocab (d) organisation explained",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear title and intro.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Logical headings.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Well-structured paragraph.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Organisation clearly explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) listing features without explaining how they help the reader."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u5-expository-notes",
      title: "Expository and information writing — revision notes",
      summary: "Process explanations, report structure, technical vocabulary and organisation.",
      sections: [
        {
          heading: "Process explanations",
          body: "Introduce → sequence → detail → conclude. Chronological order, connectives ('first', 'then', 'finally'), precise technical terms.",
        },
        {
          heading: "Information texts and reports",
          body: "Headings, one idea per paragraph, bullets for lists, formal objective tone. Reports: title, intro, findings, conclusion.",
        },
        {
          heading: "Writing checklist",
          body: "Is the structure logical? Are technical terms defined? Is the tone formal and objective? Can the reader navigate easily?",
        },
      ],
    },
  ],
};
