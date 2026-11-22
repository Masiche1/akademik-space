import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mla4-u2-lesson-2-2",
  code: "2-2",
  title: "Writing Essays and Reports",
  goal: "I CAN write clear essays and reports with an introduction, organised paragraphs, examples and a conclusion.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Essay", definition: "A piece of writing that presents and explains an idea or argument." },
    { term: "Paragraph", definition: "A group of sentences that develops one main idea." },
    { term: "Introduction", definition: "The opening part that introduces the topic and main idea." },
    { term: "Conclusion", definition: "The ending that summarises the main points." },
    { term: "Report", definition: "A text that gives information about an event, project or investigation." },
  ],
  concepts: [
    {
      id: "mla4-u2-essay-writing",
      title: "Essay structure",
      skill: "Write an essay with a clear topic sentence, supporting paragraphs and a conclusion.",
      lesson: {
        sections: [
          {
            heading: "Essay parts",
            body: "An essay usually has an **introduction** (topic and main idea), **body paragraphs** (reasons and examples) and a **conclusion** (summary of the main idea). Each paragraph should focus on one point.",
          },
          {
            heading: "Topic sentences",
            body: "The first sentence of a paragraph is often the **topic sentence**. It tells the reader what the paragraph is about: 'One reason school uniforms are useful is that they reduce differences between students.' Then give details and examples.",
          },
          {
            heading: "Linking ideas",
            body: "Use linking words to connect ideas: 'First', 'Another reason', 'For example', 'However' and 'In conclusion'. Good linking makes the essay easy to follow.",
          },
        ],
        keyFormulas: [
          { name: "Essay structure", statement: "Introduction -> Body paragraphs -> Conclusion" },
          { name: "Linking words", statement: "First / Another reason / For example / However / In conclusion" },
        ],
        workedExample: {
          problem: "Write a topic sentence for a paragraph about uniforms reducing bullying.",
          solution: "'One advantage of school uniforms is that they can reduce bullying based on clothing.'",
        },
      },
      questions: [
        {
          id: "mla4-u2-essay-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sentence that states the main idea of a paragraph" },
              { id: "b", text: "The last sentence of an essay" },
              { id: "c", text: "A question to the reader" },
              { id: "d", text: "A list of examples" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Topic sentence", statement: "States the main idea of a paragraph." }],
            steps: [{ reasoning: "Criterion D: Writing — topic sentence = main idea of paragraph.", working: "topic", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** The sentence that states the main idea of a paragraph",
            commonErrors: ["Confusing topic sentence with conclusion."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-essay-writing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Essay Paragraph",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "One reason exercise is important is that it improves health. Students who exercise regularly often have more energy and better concentration. For example, a short walk after lunch can help students focus in the afternoon.",
          },
          stem: "Identify the topic sentence and one supporting example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Paragraph analysis", statement: "Topic sentence states main idea; examples support it." }],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence: exercise improves health.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — supporting detail: more energy and better concentration.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — example: walk after lunch helps focus.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Topic: exercise improves health; example: post-lunch walk improves focus.",
            commonErrors: ["Missing the example signal 'For example'."],
            examinerNote: "Both topic and example required.",
          },
        },
        {
          id: "mla4-u2-essay-writing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Essay Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Some people think homework should be banned. Others believe homework helps students practise. In my opinion, homework is useful when it is not too long and is related to what we learn in class.",
          },
          stem: "Explain how the writer presents different views and states an opinion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced writing", statement: "Present views fairly, then give a clear opinion." }],
            steps: [
              { reasoning: "Criterion D: Writing — view 1: some think homework should be banned.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — view 2: others think homework helps practise.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — opinion: useful when not too long and relevant.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explanation is clear and balanced.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Writer presents both views then gives a qualified opinion: useful if moderate and relevant.",
            commonErrors: ["Missing the writer's own opinion."],
            examinerNote: "Must identify both sides and the opinion.",
          },
        },
        {
          id: "mla4-u2-essay-writing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Essay Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Write an essay answering: 'Should students be allowed to use phones in class?' Include an introduction, two body paragraphs and a conclusion.",
          },
          stem: "Write the essay sections requested.",
          parts: [
            { label: "a", prompt: "Write an introduction with your opinion.", marks: 1 },
            { label: "b", prompt: "Write two body paragraphs: one reason for and one reason against.", marks: 2 },
            { label: "c", prompt: "Write a conclusion.", marks: 2 },
            { label: "d", prompt: "Add one linking phrase to connect paragraphs.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Essay production", statement: "Introduction, balanced body, conclusion and cohesion." }],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — introduction states topic and opinion.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — paragraph for 'for' side with reason.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — paragraph for 'against' side with reason.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — conclusion summarises position.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — conclusion is clear and accurate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — linking phrase connects ideas appropriately.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — language is accurate and formal enough.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — structure is logical and easy to follow.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) intro+opinion (b) for/against paragraphs (c) conclusion (d) linking phrase.",
            commonErrors: ["Writing only one side or no conclusion."],
            examinerNote: "Essay should be balanced and organised.",
          },
        },
        {
          id: "mla4-u2-essay-writing-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of an essay usually comes first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction" },
              { id: "b", text: "References" },
              { id: "c", text: "Conclusion" },
              { id: "d", text: "Body paragraph" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Essay structure", statement: "Introduction → body → conclusion." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — introduction is first.", working: "intro", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Introduction",
            commonErrors: ["Starting with body paragraphs."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-essay-writing-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which linking word shows contrast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'For example'" },
              { id: "b", text: "'Therefore'" },
              { id: "c", text: "'However'" },
              { id: "d", text: "'First'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linking words", statement: "'However' signals contrast." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'However' introduces a contrasting idea.", working: "contrast", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'However'",
            commonErrors: ["Confusing 'however' with 'therefore' (cause)."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-essay-writing-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Essay Paragraph",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "One benefit of exercise is better health. Students who exercise regularly have more energy. For example, a short walk can improve concentration.",
          },
          stem: "Identify the topic sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph analysis", statement: "Topic sentence states the main idea." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence: 'One benefit of exercise is better health.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correctly identified as first sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'One benefit of exercise is better health.'",
            commonErrors: ["Choosing a supporting sentence instead."],
            examinerNote: "Exact sentence needed.",
          },
        },
        {
          id: "mla4-u2-essay-writing-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Essay Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "The essay has three parts: an introduction, two body paragraphs and a conclusion.",
          },
          stem: "How many body paragraphs does the essay have?",
          response: {
            type: "numeric",
            parts: [
              { label: "paragraphs", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure scanning", statement: "Count the listed parts." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — text says 'two body paragraphs'.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**2**",
            commonErrors: ["Counting introduction or conclusion."],
            examinerNote: "D1 for 2.",
          },
        },
        {
          id: "mla4-u2-essay-writing-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Essay Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Some students think uniforms are unnecessary. Others believe they create equality. In my view, uniforms help students focus on learning rather than appearance.",
          },
          stem: "How does the writer structure their argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No opinion is stated" },
              { id: "b", text: "The writer agrees with everyone" },
              { id: "c", text: "Only one side is presented" },
              { id: "d", text: "Both sides are presented, then a personal opinion is given" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay structure", statement: "Present views then give opinion." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Some... Others...' = both sides; 'In my view' = opinion.", working: "both sides + opinion", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — structure is balanced and clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Both sides are presented, then a personal opinion is given",
            commonErrors: ["Missing the personal opinion."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u2-essay-writing-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Essay Paragraph",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "School uniforms can reduce bullying. First, students cannot be judged by expensive clothes. Second, everyone looks the same, so appearance matters less. However, some students feel uniforms limit their self-expression.",
          },
          stem: "Explain how the paragraph is organised and identify the linking words used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph organisation", statement: "Topic sentence + points + contrast link." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence states the main idea (reduce bullying).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — two supporting points given (First/Second).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — linking words: First, Second, However.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Organised: topic → two points → contrast; links: First, Second, However.",
            commonErrors: ["Missing the 'However' contrast."],
            examinerNote: "Organisation and links both needed.",
          },
        },
        {
          id: "mla4-u2-essay-writing-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Essay Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "In conclusion, reading is important. It helps us learn. Reading is fun. Students should read more books.",
          },
          stem: "Rewrite this conclusion to be stronger and more specific.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conclusion writing", statement: "Strong conclusions summarise main points clearly." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — combines ideas into one clear sentence.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adds specific reason or benefit.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — language is accurate and formal.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Reading improves knowledge, imagination and communication, so students should read regularly.'",
            commonErrors: ["Repeating short vague sentences."],
            examinerNote: "Must be one cohesive, specific sentence.",
          },
        },
        {
          id: "mla4-u2-essay-writing-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is the best topic sentence for a paragraph about exercise benefits?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'One benefit of exercise is improved health.'" },
              { id: "b", text: "'Exercise is something people do.'" },
              { id: "c", text: "'I like sports.'" },
              { id: "d", text: "'In conclusion, exercise matters.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic sentence", statement: "States main idea clearly." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — option b states a clear main idea.", working: "main idea", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'One benefit of exercise is improved health.'",
            commonErrors: ["Choosing vague or concluding sentences."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-essay-writing-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Essay Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Homework is good. Homework is bad. Homework helps. Homework stresses students. In my opinion, homework depends on the subject and the amount.",
          },
          stem: "What is the main weakness of this essay excerpt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses too many linking words" },
              { id: "b", text: "It is too long" },
              { id: "c", text: "It presents opposing views without explanation or development" },
              { id: "d", text: "It has a clear conclusion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay critique", statement: "Undeveloped claims weaken essays." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentences are short, unsupported claims.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — no examples or explanation given.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It presents opposing views without explanation or development",
            commonErrors: ["Not identifying lack of development."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u2-essay-writing-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Essay Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Introduction: 'This essay discusses whether students should use phones in class.'\nBody: 'Phones can help students learn. For example, they can look up information quickly. Phones can also distract students.'\nConclusion: 'Phones have both advantages and disadvantages.'",
          },
          stem: "Evaluate this essay structure and suggest two improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay evaluation", statement: "Structure exists but needs development." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — strength: clear three-part structure present.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — weakness: very thin; only one example and no development.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — improvement 1: add more reasons and examples.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — improvement 2: give a clearer personal opinion in conclusion.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Structure present; needs more development, examples and a clear opinion.",
            commonErrors: ["Saying the essay has no structure."],
            examinerNote: "Must balance strengths and weaknesses.",
          },
        },
        {
          id: "mla4-u2-essay-writing-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Essay Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "First, students waste time on phones. Another reason is distraction. Furthermore, phones can be misused.",
          },
          stem: "What do 'First', 'Another reason' and 'Furthermore' all do in this paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They signal additional points in a sequence" },
              { id: "b", text: "They show contrast" },
              { id: "c", text: "They introduce examples" },
              { id: "d", text: "They end the paragraph" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Addition links", statement: "'First', 'Another reason', 'Furthermore' add points." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — these phrases signal additional supporting points.", working: "addition", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** They signal additional points in a sequence",
            commonErrors: ["Confusing with contrast or example signals."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-essay-writing-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Essay Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Write an essay answering: 'Should students be required to learn a foreign language?' Include an introduction, two body paragraphs and a conclusion.",
          },
          stem: "Write the essay sections.",
          parts: [
            { label: "a", prompt: "Write an introduction with your position.", marks: 1 },
            { label: "b", prompt: "Write two body paragraphs with reasons or examples.", marks: 2 },
            { label: "c", prompt: "Write a conclusion that summarises your view.", marks: 1 },
            { label: "d", prompt: "Add linking phrases between ideas.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay production", statement: "Structure, content, conclusion, cohesion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — introduction states topic and position.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — body paragraph 1 with reason/example.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — body paragraph 2 with reason/example.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — conclusion summarises position clearly.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — linking phrases used appropriately.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — language is accurate and organised.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) intro+position (b) two paragraphs (c) conclusion (d) linking.",
            commonErrors: ["No conclusion or no linking."],
            examinerNote: "Essay must be organised and developed.",
          },
        },
      ],
    },
    {
      id: "mla4-u2-formal-report",
      title: "Reports and formal letters",
      skill: "Write simple reports and formal letters with a clear purpose, organised information and polite language.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "A report gives information clearly. It usually has a **title**, **introduction** (what the report is about), **main information** (facts or findings) and **conclusion** (what it means or what should happen next).",
          },
          {
            heading: "Formal letter basics",
            body: "A formal letter starts with 'Dear...' and ends with 'Yours sincerely' or 'Yours faithfully'. State your purpose in the first paragraph: 'I am writing to ask for...', 'I am writing to inform you that...'. Keep the language polite and clear.",
          },
          {
            heading: "Clear requests",
            body: "When asking for something, be polite but clear: 'Could you please send me...', 'I would appreciate your help with...'. Include what you need and why. Avoid slang and unnecessary details.",
          },
        ],
        keyFormulas: [
          { name: "Report parts", statement: "Title -> Introduction -> Information -> Conclusion" },
          { name: "Letter openings", statement: "I am writing to ask / I am writing to inform / I would appreciate" },
        ],
        workedExample: {
          problem: "Write an opening sentence for a letter requesting a school transcript.",
          solution: "'I am writing to request a copy of my school transcript for my university application.'",
        },
      },
      questions: [
        {
          id: "mla4-u2-formal-report-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a formal letter begin with?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only a signature" },
              { id: "b", text: "A long story" },
              { id: "c", text: "Slang or jokes" },
              { id: "d", text: "'Dear...' followed by a clear purpose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter opening", statement: "Formal letters use 'Dear' and state purpose early." }],
            steps: [{ reasoning: "Criterion D: Writing — salutation plus clear purpose.", working: "purpose", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** 'Dear...' followed by a clear purpose",
            commonErrors: ["Starting with casual language."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-formal-report-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Title: School Trip to the Science Museum\n\nIntroduction: Our class visited the Science Museum on Friday.\n\nMain information: We saw robots, saw an electricity show and visited the space exhibition. Most students enjoyed the trip.\n\nConclusion: The trip helped us learn about science in a practical way.",
          },
          stem: "Identify the title, introduction and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Report analysis", statement: "Reports have clear sections: title, intro, information, conclusion." }],
            steps: [
              { reasoning: "Criterion D: Writing — title: School Trip to the Science Museum.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — introduction: class visited museum on Friday.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — conclusion: trip helped learning about science.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Title, intro (visit Friday) and conclusion (helped learning) identified.",
            commonErrors: ["Confusing main information with conclusion."],
            examinerNote: "All three parts must be identified.",
          },
        },
        {
          id: "mla4-u2-formal-report-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Letter Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Hi Mr Brown,\n\nCan you send me the homework? I need it for Friday. Thanks.\n\nSam",
          },
          stem: "Rewrite the letter in formal style.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal letter revision", statement: "Use polite salutation, clear request and formal close." }],
            steps: [
              { reasoning: "Criterion D: Writing — salutation becomes 'Dear Mr Brown'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — request is polite and clear: 'I would be grateful if you could send me the homework.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — deadline and reason included.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — formal close e.g. 'Yours sincerely, Sam'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Dear Mr Brown, I would be grateful if you could send me the homework for Friday. Yours sincerely, Sam",
            commonErrors: ["Keeping casual greeting or vague request."],
            examinerNote: "All formal elements required.",
          },
        },
        {
          id: "mla4-u2-formal-report-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Report Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Write a short report about a class event you attended or organised (e.g. a sports day, exhibition or field trip).",
          },
          stem: "Write the report sections requested.",
          parts: [
            { label: "a", prompt: "Write a title.", marks: 1 },
            { label: "b", prompt: "Write an introduction of two sentences.", marks: 2 },
            { label: "c", prompt: "Write three main information points.", marks: 2 },
            { label: "d", prompt: "Write a conclusion and recommendation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Report production", statement: "Title, introduction, information and conclusion/recommendation." }],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — title is clear and relevant.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — introduction states what/when/where.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — introduction is coherent.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — information point 1 is factual.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — information points 2-3 are factual and clear.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion summarises event.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — recommendation is practical.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — language is formal and accurate.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) title (b) intro (c) three points (d) conclusion+recommendation.",
            commonErrors: ["Writing only opinions without factual information."],
            examinerNote: "Report should be informative and organised.",
          },
        },
        {
          id: "mla4-u2-formal-report-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a correct formal letter closing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Yours sincerely,' or 'Yours faithfully,'" },
              { id: "b", text: "'Bye, see ya!'" },
              { id: "c", text: "'Later!'" },
              { id: "d", text: "'TTYL'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter closing", statement: "Formal letters end with 'Yours sincerely/faithfully'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — formal closings are 'Yours sincerely' or 'Yours faithfully'.", working: "formal close", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'Yours sincerely,' or 'Yours faithfully,'",
            commonErrors: ["Choosing casual closings."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-formal-report-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is appropriate for the opening of a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Hey there!'" },
              { id: "b", text: "'Guess what!'" },
              { id: "c", text: "'I am writing to ask for...'" },
              { id: "d", text: "'What's up?'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter opening", statement: "Formal letters state purpose early." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I am writing to...' states purpose formally.", working: "purpose", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'I am writing to ask for...'",
            commonErrors: ["Choosing casual openings."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-formal-report-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Title: Science Fair\n\nIntroduction: Our class organised a science fair on Friday.\n\nMain information: Students showed 30 projects. Parents attended in large numbers.\n\nConclusion: The fair was a success.",
          },
          stem: "Identify the title and the main information section.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report analysis", statement: "Identify report sections." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — title: 'Science Fair'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — main information: 30 projects, parents attended.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Title: Science Fair; info: 30 projects, parents attended.",
            commonErrors: ["Confusing conclusion with main information."],
            examinerNote: "Both sections needed.",
          },
        },
        {
          id: "mla4-u2-formal-report-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Letter Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Dear Ms Lee,\n\nI am writing to request a copy of my transcript.\n\nYours sincerely,\nSam",
          },
          stem: "What is the purpose of this letter?",
          response: {
            type: "numeric",
            parts: [
              { label: "purpose", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose identification", statement: "State the letter's single clear purpose." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — letter has one purpose: request a transcript copy.", working: "1 purpose", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**1** purpose — requesting a transcript.",
            commonErrors: ["Listing multiple purposes."],
            examinerNote: "D1 for 1.",
          },
        },
        {
          id: "mla4-u2-formal-report-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Letters",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Letter A: 'Hi Tom, can you bring the game on Friday?'\nLetter B: 'Dear Mr Brown, I am writing to confirm the meeting scheduled for Friday.'",
          },
          stem: "Which letter is formal and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are equally formal" },
              { id: "b", text: "Neither is formal" },
              { id: "c", text: "Letter A — it is shorter" },
              { id: "d", text: "Letter B — formal greeting, clear purpose, polite register" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Formal letters use polite greetings and clear purpose." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — Letter B has 'Dear Mr Brown' and clear purpose.", working: "formal", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — Letter A is casual ('Hi', 'can you').", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Letter B — formal greeting, clear purpose, polite register",
            commonErrors: ["Choosing based on length rather than register."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u2-formal-report-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Letter Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Hi Ms Chen,\n\nI need the homework for Friday. Send it soon.\n\nThanks,\nAlex",
          },
          stem: "Rewrite the letter in formal style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal letter revision", statement: "Formal greeting, polite request, formal close." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Hi' → 'Dear Ms Chen'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — request made polite: 'Could you please send me the homework for Friday?'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'Thanks' → 'Yours sincerely, Alex'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Dear Ms Chen, Could you please send me the homework for Friday? Yours sincerely, Alex",
            commonErrors: ["Keeping casual greeting or close."],
            examinerNote: "All formal elements needed.",
          },
        },
        {
          id: "mla4-u2-formal-report-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Title: Sports Day\n\nIntroduction: Our school held its annual sports day on Thursday.\n\nMain information: Students competed in running, jumping and throwing events. The weather was sunny. Parents watched from the stands.\n\nConclusion: The day was enjoyable for everyone.",
          },
          stem: "Suggest two improvements to make this report more detailed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report improvement", statement: "Add specifics and structure to reports." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — improvement 1: add numbers or results (winners, times).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — improvement 2: add a recommendation or next step.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — suggestions are specific and relevant.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Add results/numbers and a recommendation; suggestions are specific.",
            commonErrors: ["Vague suggestions like 'write more'."],
            examinerNote: "Improvements must be concrete.",
          },
        },
        {
          id: "mla4-u2-formal-report-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "When writing a formal letter, when should you use 'Yours faithfully' instead of 'Yours sincerely'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When writing to a friend" },
              { id: "b", text: "Never — they are identical" },
              { id: "c", text: "Only in reports" },
              { id: "d", text: "When you do not know the recipient's name" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter closing choice", statement: "'Yours faithfully' when name unknown." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Yours faithfully' is used when the addressee's name is unknown.", working: "unknown name", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** When you do not know the recipient's name",
            commonErrors: ["Confusing the two closings."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-formal-report-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Letter Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Dear Sir or Madam,\n\nI am writing to complain about the noise from the construction site near my home. It starts at 6am and continues until evening. I would appreciate your help in resolving this matter.\n\nYours faithfully,\nA. Hassan",
          },
          stem: "Why is 'Dear Sir or Madam' the correct salutation here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the letter is very short" },
              { id: "b", text: "Because it is a casual letter" },
              { id: "c", text: "Because the writer does not know the recipient's name" },
              { id: "d", text: "Because the writer is angry" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Salutation choice", statement: "'Dear Sir/Madam' when name unknown." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Sir or Madam' used when recipient's name is unknown.", working: "unknown name", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — matches 'Yours faithfully' closing.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Because the writer does not know the recipient's name",
            commonErrors: ["Choosing based on tone or length."],
            examinerNote: "D2 for (a).",
          },
        },
        {
          id: "mla4-u2-formal-report-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Report Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Title: Book Week\n\nIntroduction: Our school celebrated Book Week in March.\n\nMain information: Students dressed as characters, read aloud and created posters. The library was decorated with book-themed displays.\n\nConclusion: Book Week was fun and encouraged reading.",
          },
          stem: "Evaluate this report and suggest two ways to improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report evaluation", statement: "Structure present; needs detail and objectivity." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — strength: clear sections (title, intro, info, conclusion).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — weakness: vague ('fun'), lacks numbers or quotes.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — improvement 1: add specific details or statistics.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — improvement 2: add a recommendation or objective outcome.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Structured but vague; add specifics and objective outcomes.",
            commonErrors: ["Missing that 'fun' is too subjective."],
            examinerNote: "Must identify both strength and weakness.",
          },
        },
        {
          id: "mla4-u2-formal-report-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Letter Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "I am writing to inform you that our class will be visiting the museum on Tuesday. Please ensure all permission forms are returned by Monday.",
          },
          stem: "What is the main function of the first sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To give a list of excuses" },
              { id: "b", text: "To apologise" },
              { id: "c", text: "To state the letter's purpose clearly" },
              { id: "d", text: "To ask a question" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Purpose statement", statement: "First sentence states why the letter is written." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I am writing to inform you' states purpose.", working: "purpose", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** To state the letter's purpose clearly",
            commonErrors: ["Confusing purpose with detail."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-formal-report-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Letter Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Write a formal letter to the school principal requesting permission for your class to hold a charity event.",
          },
          stem: "Write the letter sections.",
          parts: [
            { label: "a", prompt: "Write the salutation and opening purpose sentence.", marks: 1 },
            { label: "b", prompt: "Explain the event and why you are writing.", marks: 2 },
            { label: "c", prompt: "Make the request politely and clearly.", marks: 1 },
            { label: "d", prompt: "Write the closing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal letter production", statement: "Salutation, purpose, request, closing." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — formal salutation + purpose stated.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — event described clearly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — reason for writing explained.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — request is polite and specific.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — formal closing used correctly.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — tone is respectful throughout.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) salutation+purpose (b) event+reason (c) polite request (d) closing.",
            commonErrors: ["Casual tone or missing purpose."],
            examinerNote: "Letter must be formal and purposeful.",
          },
        },
      ],
    },
  ],
};
