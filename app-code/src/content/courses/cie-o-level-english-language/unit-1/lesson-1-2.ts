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
              { id: "a", text: "Minor examples" },
              { id: "b", text: "Main points only" },
              { id: "c", text: "Every detail" },
              { id: "d", text: "Personal opinions" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-el-sum-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ideal length of a summary compared to the original text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About one-quarter to one-third" },
              { id: "b", text: "Twice as long" },
              { id: "c", text: "Exactly half" },
              { id: "d", text: "The same length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Summary length", statement: "Usually 1/4 to 1/3 of original." },
            ],
            steps: [
              { reasoning: "Summary is condensed — much shorter than original.", working: "1/4-1/3", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** About one-quarter to one-third",
            commonErrors: ["Choosing (b) — that's copying, not summarising."],
          },
        },
        {
          id: "cie-ol-el-sum-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A passage of 480 words must be summarised. (a) If the summary should be one-third of the original, how many words should it be? (b) If another passage of 900 words allows a one-quarter summary, how many words is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 160, unit: "words" },
              { label: "b", answer: 225, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary length calculation", statement: "Divide word count by the allowed fraction." },
            ],
            steps: [
              { reasoning: "480 divided by 3 gives 160 words.", working: "480 / 3 = 160", marks: 1, markCode: "AO2" },
              { reasoning: "900 divided by 4 gives 225 words.", working: "900 / 4 = 225", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 160 words; (b) 225 words",
            commonErrors: ["Multiplying instead of dividing by the fraction."],
          },
        },
        {
          id: "cie-ol-el-sum-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which detail should be OMITTED from a summary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A minor example" },
              { id: "b", text: "The conclusion" },
              { id: "c", text: "A key statistic" },
              { id: "d", text: "The main cause" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Summary content", statement: "Main points only — omit minor details." },
            ],
            steps: [
              { reasoning: "Minor examples are supporting details, not main points.", working: "minor example", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A minor example",
            commonErrors: ["Choosing (d) — key statistics may support main points."],
          },
        },
        {
          id: "cie-ol-el-sum-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a summary avoid personal opinions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Objective summary", statement: "Summary reports the text's main points, not the writer's views." },
            ],
            steps: [
              { reasoning: "A summary must be objective — it reports what the text says, not what the writer thinks.", working: "objective", marks: 1, markCode: "AO2" },
              { reasoning: "Opinions belong to the summariser, not the source text, and would distort the content.", working: "no opinion", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Because a summary must be objective — it reports the text's main points, not personal views.",
            commonErrors: ["Thinking opinions add value — they make the summary inaccurate."],
          },
        },
        {
          id: "cie-ol-el-sum-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A passage has 12 sentences: 4 state main points and 8 give supporting details. (a) How many main points should the summary cover? (b) How many sentences are supporting details? (c) If each main point needs about 15 words, what is the approximate summary length?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 8 },
              { label: "c", answer: 60, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary planning", statement: "Identify main points; condense each into a short phrase." },
            ],
            steps: [
              { reasoning: "The 4 main-point sentences are what the summary must cover.", working: "4 main points", marks: 1, markCode: "AO2" },
              { reasoning: "8 of the 12 sentences are supporting details to be omitted.", working: "8 details", marks: 1, markCode: "AO2" },
              { reasoning: "4 points times 15 words each gives 60 words.", working: "4 x 15 = 60", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 8; (c) 60 words",
            commonErrors: ["Including all 12 sentences — details must be omitted."],
          },
        },
        {
          id: "cie-ol-el-sum-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'paraphrase' mean in summary writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delete words at random" },
              { id: "b", text: "Rewrite in your own words" },
              { id: "c", text: "Copy the text exactly" },
              { id: "d", text: "Translate into another language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paraphrase", statement: "Rewrite the meaning in your own words." },
            ],
            steps: [
              { reasoning: "Paraphrase = own words, same meaning.", working: "own words", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Rewrite in your own words",
            commonErrors: ["Choosing (b) — copying is plagiarism, not paraphrasing."],
          },
        },
        {
          id: "cie-ol-el-sum-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to check a summary before submitting it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary checking", statement: "Check word limit, coverage of main points, own words, objectivity." },
            ],
            steps: [
              { reasoning: "Check the word count is within the limit.", working: "word limit", marks: 1, markCode: "AO2" },
              { reasoning: "Check all main points are covered and no minor details remain.", working: "coverage", marks: 1, markCode: "AO2" },
              { reasoning: "Check the language is your own — no copied sentences.", working: "own words", marks: 1, markCode: "AO2" },
              { reasoning: "Check it is objective and concise.", working: "objective", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Check word limit, main-point coverage, own words, and objectivity.",
            commonErrors: ["Skipping the check — errors in length or copying lose marks."],
          },
        },
        {
          id: "cie-ol-el-sum-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A summary of 250 words is written for a passage that allows only 100 words. What should the student do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cut it down to about 100 words" },
              { id: "b", text: "Ignore the limit" },
              { id: "c", text: "Add more supporting detail" },
              { id: "d", text: "Submit it as it is" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limits", statement: "Answers must stay within the stated word limit." },
            ],
            steps: [
              { reasoning: "250 words far exceeds the 100-word limit — must condense.", working: "cut to 100", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Cut it down to about 100 words",
            commonErrors: ["Choosing (b) — exceeding the word limit loses marks."],
          },
        },
        {
          id: "cie-ol-el-sum-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) A summary draft uses 120 words but the limit is 80. How many words must be cut? (b) A passage of 640 words allows a summary of one-eighth of its length. How many words is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, unit: "words" },
              { label: "b", answer: 80, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word limit calculation", statement: "Cut excess words; divide by fraction for allowed length." },
            ],
            steps: [
              { reasoning: "120 minus 80 equals 40 words to cut.", working: "120 - 80 = 40", marks: 1, markCode: "AO2" },
              { reasoning: "640 divided by 8 equals 80 words.", working: "640 / 8 = 80", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 40 words; (b) 80 words",
            commonErrors: ["Adding instead of subtracting the excess."],
          },
        },
        {
          id: "cie-ol-el-sum-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply summary technique.",
          parts: [
            { label: "a", prompt: "State two requirements of a good summary.", marks: 2 },
            { label: "b", prompt: "Explain why copying sentences is penalised.", marks: 2 },
            { label: "c", prompt: "Describe how to order a summary logically.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary technique", statement: "Requirements, originality, logical order." },
            ],
            steps: [
              { part: "a", reasoning: "Own words, main points only, concise, objective, word limit — any two.", working: "requirements", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Both valid.", working: "two valid", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Copying is plagiarism and shows no understanding — must paraphrase.", working: "plagiarism", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Follow the text's order — causes then effects then conclusion.", working: "order", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Logical.", working: "logical", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) own words/main points (b) plagiarism/shows no understanding (c) follow text order",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "One or vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Logical.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Reordering randomly — follow the text's logical order."],
          },
        },
        {
          id: "cie-ol-el-sum-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence belongs in a summary of a text about plastic pollution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastic pollution harms oceans and affects marine life." },
              { id: "b", text: "On Tuesday I went to the beach." },
              { id: "c", text: "The author uses a metaphor in paragraph three." },
              { id: "d", text: "I think plastic is absolutely terrible." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Summary content", statement: "Main points only, objective, no opinions." },
            ],
            steps: [
              { reasoning: "(a) states a main point objectively.", working: "main point", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Plastic pollution harms oceans and affects marine life.",
            commonErrors: ["Choosing (b) — that's an opinion, not a summary point."],
          },
        },
        {
          id: "cie-ol-el-sum-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A summary has 3 main points written at 20 words each plus a 10-word introduction. What is the total length? (b) If the word limit is 90 and the draft is 110 words, by how many words does it exceed the limit?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 70, unit: "words" },
              { label: "b", answer: 20, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary word calculation", statement: "Sum the parts; subtract limit from draft." },
            ],
            steps: [
              { reasoning: "3 times 20 plus 10 equals 70 words.", working: "3 x 20 + 10 = 70", marks: 1, markCode: "AO2" },
              { reasoning: "110 minus 90 equals 20 words over.", working: "110 - 90 = 20", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 70 words; (b) 20 words",
            commonErrors: ["Forgetting the introduction words in (a)."],
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
              { id: "a", text: "Free writing" },
              { id: "b", text: "Grammar exercises" },
              { id: "c", text: "Copying text" },
              { id: "d", text: "Writing with specific instructions" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-el-dir-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which element of directed writing tells you WHO will read the text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Format" },
              { id: "b", text: "Content" },
              { id: "c", text: "Purpose" },
              { id: "d", text: "Audience" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "The specific group the writing is addressed to." },
            ],
            steps: [
              { reasoning: "Audience = who reads it.", working: "audience", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Audience",
            commonErrors: ["Choosing (b) — purpose is WHY you write."],
          },
        },
        {
          id: "cie-ol-el-dir-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A formal letter has 8 required elements. A student includes 5 of them. (a) How many elements are missing? (b) If the letter needs at least 60 words and the draft has 45, how many more words are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 15, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Directed writing checklist", statement: "Include all format elements; meet word minimum." },
            ],
            steps: [
              { reasoning: "8 required minus 5 included equals 3 missing.", working: "8 - 5 = 3", marks: 1, markCode: "AO2" },
              { reasoning: "60 minus 45 equals 15 more words needed.", working: "60 - 45 = 15", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 15 words",
            commonErrors: ["Counting wrong elements — check against the format list."],
          },
        },
        {
          id: "cie-ol-el-dir-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of the 'format' in directed writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To pick fonts" },
              { id: "b", text: "To decide the word count" },
              { id: "c", text: "To choose colours" },
              { id: "d", text: "To show how the text should be organised" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Format", statement: "The required structure — letter, email, report conventions." },
            ],
            steps: [
              { reasoning: "Format = the required structure and conventions.", working: "structure", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** To show how the text should be organised",
            commonErrors: ["Thinking format is decoration — it is required structure."],
          },
        },
        {
          id: "cie-ol-el-dir-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to follow the required format in directed writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Format conventions", statement: "Examiners award marks for correct structure." },
            ],
            steps: [
              { reasoning: "Format conventions are part of the assessment — ignoring them loses marks.", working: "marks", marks: 1, markCode: "AO2" },
              { reasoning: "Correct format also shows the writing suits its real-world purpose.", working: "purpose", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Because format conventions are assessed and show the writing suits its purpose.",
            commonErrors: ["Treating format as optional — it carries marks."],
          },
        },
        {
          id: "cie-ol-el-dir-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A complaint letter must state the problem, give details, and request a remedy, in that order. A student writes 3 paragraphs of 40, 60 and 50 words. (a) What is the total word count? (b) What is the average paragraph length? (c) How many required content elements does the letter need?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 150, unit: "words" },
              { label: "b", answer: 50, unit: "words" },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter planning", statement: "Include all required content elements; check word count." },
            ],
            steps: [
              { reasoning: "40 plus 60 plus 50 equals 150 words.", working: "40 + 60 + 50 = 150", marks: 1, markCode: "AO2" },
              { reasoning: "150 divided by 3 equals 50 words per paragraph.", working: "150 / 3 = 50", marks: 1, markCode: "AO2" },
              { reasoning: "Problem, details, remedy — 3 elements.", working: "3 elements", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 150 words; (b) 50 words; (c) 3",
            commonErrors: ["Forgetting one required element — check the task list."],
          },
        },
        {
          id: "cie-ol-el-dir-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "You are asked to write an email to your headteacher about a school trip. Which register is appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slang" },
              { id: "b", text: "Formal" },
              { id: "c", text: "Informal" },
              { id: "d", text: "Text-speak" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register choice", statement: "Official recipients require formal register." },
            ],
            steps: [
              { reasoning: "A headteacher is an official recipient — formal register.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Formal",
            commonErrors: ["Choosing (b) — teachers are not friends; use formal."],
          },
        },
        {
          id: "cie-ol-el-dir-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the purpose of a directed writing task affects its content.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose and content", statement: "Purpose determines what must be included and how." },
            ],
            steps: [
              { reasoning: "To inform: facts and clear information are needed.", working: "inform", marks: 1, markCode: "AO2" },
              { reasoning: "To persuade: arguments and evidence are needed.", working: "persuade", marks: 1, markCode: "AO2" },
              { reasoning: "To complain: problem, details and remedy request are needed.", working: "complain", marks: 1, markCode: "AO2" },
              { reasoning: "To request: a clear, polite request is needed.", working: "request", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Purpose determines content: inform=facts, persuade=arguments, complain=problem+remedy, request=clear ask.",
            commonErrors: ["Writing the same content regardless of purpose."],
          },
        },
        {
          id: "cie-ol-el-dir-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a feature of an informal letter to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Dear Sir' greeting" },
              { id: "b", text: "Contractions and casual tone" },
              { id: "c", text: "'Yours faithfully' closing" },
              { id: "d", text: "Formal vocabulary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal register", statement: "Contractions, casual tone for friends." },
            ],
            steps: [
              { reasoning: "Informal letters use contractions and relaxed language.", working: "contractions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Contractions and casual tone",
            commonErrors: ["Choosing (b)/(c) — those are formal features."],
          },
        },
        {
          id: "cie-ol-el-dir-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A directed writing task requires at least 200 words. A draft has 180 words. (a) How many more words are needed? (b) If the maximum is 350 words and another draft has 320, how many spare words remain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "words" },
              { label: "b", answer: 30, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word count checking", statement: "Check minimum and maximum limits." },
            ],
            steps: [
              { reasoning: "200 minus 180 equals 20 more words needed.", working: "200 - 180 = 20", marks: 1, markCode: "AO2" },
              { reasoning: "350 minus 320 equals 30 spare words.", working: "350 - 320 = 30", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 20 words; (b) 30 words",
            commonErrors: ["Exceeding the maximum or falling below the minimum."],
          },
        },
        {
          id: "cie-ol-el-dir-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply directed writing principles.",
          parts: [
            { label: "a", prompt: "Name the four elements of directed writing.", marks: 2 },
            { label: "b", prompt: "Explain the difference between formal and informal register.", marks: 2 },
            { label: "c", prompt: "Why does the audience matter?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Directed writing", statement: "Elements, register, audience." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose, audience, format, content — any listed.", working: "elements", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All four or most named.", working: "four", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Formal: standard English, no contractions; informal: casual, contractions.", working: "registers", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Audience determines register and content — must suit the reader.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) purpose/audience/format/content (b) formal vs informal features (c) determines register/content",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Elements named.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Ignoring the audience — register must match."],
          },
        },
        {
          id: "cie-ol-el-dir-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which closing is appropriate for a formal letter to an unknown recipient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Love" },
              { id: "b", text: "Bye" },
              { id: "c", text: "Yours faithfully" },
              { id: "d", text: "Cheers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Valediction", statement: "Formal letters use 'Yours faithfully' with 'Dear Sir/Madam'." },
            ],
            steps: [
              { reasoning: "Unknown recipient + formal = 'Yours faithfully'.", working: "faithfully", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Yours faithfully",
            commonErrors: ["Choosing (b) — that's informal."],
          },
        },
        {
          id: "cie-ol-el-dir-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A report has 5 required sections; a student writes only 3. How many are missing? (b) A letter format requires 7 elements; a student includes 4. How many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Format completeness", statement: "Check all required elements are present." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 report sections missing.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "7 minus 4 equals 3 letter elements missing.", working: "7 - 4 = 3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 3",
            commonErrors: ["Not checking format requirements against a list."],
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
              { id: "b", text: "Never use adjectives" },
              { id: "c", text: "Always use dialogue" },
              { id: "d", text: "Only describe settings" },
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
        {
          id: "cie-ol-el-narr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'climax' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ending" },
              { id: "b", text: "The introduction" },
              { id: "c", text: "The opening scene" },
              { id: "d", text: "The highest point of tension" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax", statement: "Highest point of tension or action in a story." },
            ],
            steps: [
              { reasoning: "Climax = peak tension.", working: "peak", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The highest point of tension",
            commonErrors: ["Choosing (c) — that's the resolution."],
          },
        },
        {
          id: "cie-ol-el-narr-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A story has 5 structure stages: opening, rising action, climax, falling action, resolution. (a) How many stages are there? (b) If the climax occurs at paragraph 8 of a 12-paragraph story, how many paragraphs come after the climax?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story structure", statement: "Opening→rising→climax→falling→resolution." },
            ],
            steps: [
              { reasoning: "Five stages are listed.", working: "5 stages", marks: 1, markCode: "AO1" },
              { reasoning: "12 minus 8 equals 4 paragraphs after the climax.", working: "12 - 8 = 4", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 4",
            commonErrors: ["Counting the climax paragraph itself — ask what comes AFTER it."],
          },
        },
        {
          id: "cie-ol-el-narr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Her hands trembled as she gripped the doorframe' is an example of what technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising" },
              { id: "b", text: "Telling directly" },
              { id: "c", text: "Show don't tell" },
              { id: "d", text: "Reporting facts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show don't tell", statement: "Use action and detail instead of stating emotions." },
            ],
            steps: [
              { reasoning: "Physical action demonstrates fear without stating it.", working: "action", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Show don't tell",
            commonErrors: ["Missing that the emotion is shown, not stated."],
          },
        },
        {
          id: "cie-ol-el-narr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two sensory details you could use to describe a beach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sensory detail", statement: "Use sight, sound, smell, touch, taste." },
            ],
            steps: [
              { reasoning: "Any two valid sensory details — e.g. sound of waves, smell of salt.", working: "details", marks: 1, markCode: "AO2" },
              { reasoning: "Both appropriate to a beach.", working: "appropriate", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "E.g. sound of waves crashing; smell of salt spray; feel of warm sand.",
            commonErrors: ["Abstract details — must appeal to a sense."],
          },
        },
        {
          id: "cie-ol-el-narr-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A description uses 6 adjectives, 4 similes and 2 metaphors. (a) How many figurative devices are there? (b) How many senses are appealed to if it uses sight, sound and smell? (c) If one more simile is added, how many figurative devices will there be?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 3 },
              { label: "c", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting techniques", statement: "Similes and metaphors are figurative devices; senses are counted separately." },
            ],
            steps: [
              { reasoning: "4 similes plus 2 metaphors equals 6 figurative devices.", working: "4 + 2 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "Sight, sound and smell are 3 senses.", working: "3 senses", marks: 1, markCode: "AO2" },
              { reasoning: "6 plus 1 equals 7 figurative devices.", working: "6 + 1 = 7", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 3; (c) 7",
            commonErrors: ["Counting adjectives as figurative devices — they are not."],
          },
        },
        {
          id: "cie-ol-el-narr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence shows fear rather than telling it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was a frightening moment." },
              { id: "b", text: "She was scared." },
              { id: "c", text: "Fear filled her body." },
              { id: "d", text: "Her breath caught and she froze." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show don't tell", statement: "Physical reactions demonstrate emotion." },
            ],
            steps: [
              { reasoning: "(a) uses physical action to show fear.", working: "physical reaction", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Her breath caught and she froze.",
            commonErrors: ["Choosing (b)/(c) — those state the emotion directly."],
          },
        },
        {
          id: "cie-ol-el-narr-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to write an engaging story opening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story openings", statement: "Use a hook — question, fact, description or dialogue." },
            ],
            steps: [
              { reasoning: "Start with a hook that grabs attention immediately.", working: "hook", marks: 1, markCode: "AO2" },
              { reasoning: "Hooks can be a question, surprising fact, vivid description or dialogue.", working: "hook types", marks: 1, markCode: "AO2" },
              { reasoning: "Introduce the main character or situation early.", working: "character", marks: 1, markCode: "AO2" },
              { reasoning: "Keep it concise — draw the reader in fast.", working: "concise", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Use a hook (question/fact/description/dialogue), introduce character early, stay concise.",
            commonErrors: ["Slow openings with background info — lose the reader."],
          },
        },
        {
          id: "cie-ol-el-narr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which narrative element reveals events set in an earlier time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Foreshadowing" },
              { id: "b", text: "Denouement" },
              { id: "c", text: "Flashback" },
              { id: "d", text: "Climax" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flashback", statement: "Scene set in past time." },
            ],
            steps: [
              { reasoning: "Flashback = past events.", working: "past", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Flashback",
            commonErrors: ["Choosing (b) — foreshadowing hints at the future."],
          },
        },
        {
          id: "cie-ol-el-narr-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A story outline has 500 words. (a) If rising action should take 40% of the story, how many words is that? (b) If the resolution takes 10%, how many words is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200, unit: "words" },
              { label: "b", answer: 50, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story planning", statement: "Allocate word count proportionally to structure." },
            ],
            steps: [
              { reasoning: "40% of 500 equals 200 words for rising action.", working: "0.4 x 500 = 200", marks: 1, markCode: "AO2" },
              { reasoning: "10% of 500 equals 50 words for the resolution.", working: "0.1 x 500 = 50", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 200 words; (b) 50 words",
            commonErrors: ["Misreading percentages — check the fraction of total."],
          },
        },
        {
          id: "cie-ol-el-narr-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply narrative writing skills.",
          parts: [
            { label: "a", prompt: "Describe the stages of narrative structure.", marks: 2 },
            { label: "b", prompt: "Give an example of 'show don't tell'.", marks: 2 },
            { label: "c", prompt: "What is the role of sensory detail?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative writing", statement: "Structure, show don't tell, sensory detail." },
            ],
            steps: [
              { part: "a", reasoning: "Opening→rising action→climax→falling action→resolution.", working: "stages", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All or most stages.", working: "complete", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Action/detail instead of stating, e.g. 'her hands trembled'.", working: "example", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Valid example.", working: "valid", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Engages the senses — makes scenes vivid and immersive.", working: "sensory", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure stages (b) action example (c) vivid immersion",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Stages named.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid example.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Telling emotions directly instead of showing."],
          },
        },
        {
          id: "cie-ol-el-narr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the BEST hook for a story opening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Letters are pieces of paper." },
              { id: "b", text: "I will now describe a letter." },
              { id: "c", text: "The letter arrived on the morning everything changed." },
              { id: "d", text: "This is a story about a letter." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hooks", statement: "Openings should intrigue immediately." },
            ],
            steps: [
              { reasoning: "(a) creates intrigue and hints at change — an effective hook.", working: "intrigue", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The letter arrived on the morning everything changed.",
            commonErrors: ["Choosing (b) — announcing the story is not a hook."],
          },
        },
        {
          id: "cie-ol-el-narr-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A story plan has 3 rising-action scenes and 1 climax scene. How many action scenes are there in total? (b) If a story is 800 words and the opening hook takes 50 words, what percentage is the hook?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 6.25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story planning maths", statement: "Count scenes; calculate percentages of word count." },
            ],
            steps: [
              { reasoning: "3 plus 1 equals 4 action scenes.", working: "3 + 1 = 4", marks: 1, markCode: "AO2" },
              { reasoning: "50 divided by 800 times 100 equals 6.25%.", working: "50/800 x 100 = 6.25", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 6.25%",
            commonErrors: ["Forgetting the climax counts as an action scene."],
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
              { id: "a", text: "Supporting detail" },
              { id: "b", text: "Question to reader" },
              { id: "c", text: "Main argument in introduction" },
              { id: "d", text: "Final conclusion" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cie-ol-el-persu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a thesis statement state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Supporting evidence" },
              { id: "b", text: "A summary" },
              { id: "c", text: "The main argument" },
              { id: "d", text: "The reader's opinion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "Main argument stated in the introduction." },
            ],
            steps: [
              { reasoning: "Thesis = main argument.", working: "main argument", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The main argument",
            commonErrors: ["Choosing (b) — that's evidence."],
          },
        },
        {
          id: "cie-ol-el-persu-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An argument has 3 main points, and each point needs 2 pieces of evidence. (a) How many pieces of evidence are needed in total? (b) If each main point needs about 50 words, what is the total word count for the points?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 150, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument planning", statement: "Each main point needs supporting evidence." },
            ],
            steps: [
              { reasoning: "3 points times 2 evidence each equals 6.", working: "3 x 2 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "3 times 50 equals 150 words.", working: "3 x 50 = 150", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 150 words",
            commonErrors: ["Giving evidence for only some points — every point needs support."],
          },
        },
        {
          id: "cie-ol-el-persu-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of emotive language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The data shows a rise." },
              { id: "b", text: "According to studies..." },
              { id: "c", text: "Save our children from danger!" },
              { id: "d", text: "Fact: 70% agree." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotive language", statement: "Words that appeal to feelings." },
            ],
            steps: [
              { reasoning: "'Save our children from danger' appeals to emotion.", working: "emotion", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Save our children from danger!",
            commonErrors: ["Choosing (b)/(d) — those are logical appeals."],
          },
        },
        {
          id: "cie-ol-el-persu-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Persuasive techniques", statement: "Rhetorical questions, emotive language, statistics, expert opinions, inclusive language." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical questions, emotive language, statistics, expert opinions, inclusive language (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-persu-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A speech uses 4 rhetorical questions, 3 statistics and 2 expert quotes. (a) How many persuasive devices appear in total? (b) How many of them are statistics? (c) How many are expert quotes?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9 },
              { label: "b", answer: 3 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting techniques", statement: "Count each persuasive device occurrence." },
            ],
            steps: [
              { reasoning: "4 plus 3 plus 2 equals 9 devices.", working: "4 + 3 + 2 = 9", marks: 1, markCode: "AO2" },
              { reasoning: "3 statistics are given.", working: "3 statistics", marks: 1, markCode: "AO2" },
              { reasoning: "2 expert quotes are given.", working: "2 quotes", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 9; (b) 3; (c) 2",
            commonErrors: ["Counting types instead of occurrences."],
          },
        },
        {
          id: "cie-ol-el-persu-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "'We must act now — our children's future depends on it.' This sentence mainly uses which techniques?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Passive voice" },
              { id: "b", text: "Only facts" },
              { id: "c", text: "Inclusive language and emotive language" },
              { id: "d", text: "Only statistics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inclusive + emotive", statement: "'We' includes the reader; 'children's future' appeals to emotion." },
            ],
            steps: [
              { reasoning: "'We' is inclusive; 'children's future' is emotive.", working: "inclusive+emotive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Inclusive language and emotive language",
            commonErrors: ["Missing the inclusive 'we' — it binds reader and writer."],
          },
        },
        {
          id: "cie-ol-el-persu-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to structure an argument effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument structure", statement: "Thesis→points+evidence→counterarguments→conclusion." },
            ],
            steps: [
              { reasoning: "Introduction states the thesis clearly.", working: "thesis", marks: 1, markCode: "AO2" },
              { reasoning: "Each main point is supported by evidence.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Opposing views are acknowledged and refuted.", working: "counterarguments", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion restates the position strongly.", working: "conclusion", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Thesis→points+evidence→counterarguments→conclusion.",
            commonErrors: ["Points without evidence — claims need support."],
          },
        },
        {
          id: "cie-ol-el-persu-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should an argument include counterarguments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It wastes space" },
              { id: "b", text: "It shows fairness and strengthens your position" },
              { id: "c", text: "It is legally required" },
              { id: "d", text: "It confuses the reader" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterarguments", statement: "Addressing opposing views strengthens credibility." },
            ],
            steps: [
              { reasoning: "Counterarguments show balance and let you refute them.", working: "fairness", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** It shows fairness and strengthens your position",
            commonErrors: ["Ignoring them — one-sided arguments are weaker."],
          },
        },
        {
          id: "cie-ol-el-persu-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An argument needs an 80-word introduction, 3 main points of 60 words each, and a 40-word conclusion. (a) What is the total word count? (b) If the word limit is 350, how many spare words remain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 300, unit: "words" },
              { label: "b", answer: 50, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument word planning", statement: "Sum planned sections; check against limit." },
            ],
            steps: [
              { reasoning: "80 plus 3 times 60 plus 40 equals 300 words.", working: "80 + 180 + 40 = 300", marks: 1, markCode: "AO2" },
              { reasoning: "350 minus 300 equals 50 spare words.", working: "350 - 300 = 50", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 300 words; (b) 50 words",
            commonErrors: ["Forgetting to multiply points by 60."],
          },
        },
        {
          id: "cie-ol-el-persu-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply persuasive writing skills.",
          parts: [
            { label: "a", prompt: "Name three persuasive techniques.", marks: 2 },
            { label: "b", prompt: "Explain the effect of a rhetorical question.", marks: 2 },
            { label: "c", prompt: "How should you refute a counterargument?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Persuasion", statement: "Techniques, rhetorical questions, refutation." },
            ],
            steps: [
              { part: "a", reasoning: "Rhetorical Q, emotive, statistics, expert, inclusive, direct address — any three.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Three valid.", working: "three", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Engages reader, implies answer, creates emphasis.", working: "rhetorical Q", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Acknowledge the view, then refute with evidence.", working: "refute", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) techniques (b) engages/implies answer (c) acknowledge+refute",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Dismissing counterarguments without evidence."],
          },
        },
        {
          id: "cie-ol-el-persu-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which conclusion is the strongest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "So that's my argument." },
              { id: "b", text: "I hope you maybe agree." },
              { id: "c", text: "The end." },
              { id: "d", text: "Together, we can build a safer, fairer future — act today." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Strong conclusions", statement: "Restate position, summarise, call to action." },
            ],
            steps: [
              { reasoning: "(a) summarises and calls to action — strong close.", working: "strong close", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Together, we can build a safer, fairer future — act today.",
            commonErrors: ["Choosing (b)/(d) — weak, apologetic endings."],
          },
        },
        {
          id: "cie-ol-el-persu-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An argument needs 5 pieces of evidence; the writer has 3. How many more are needed? (b) Four main points each need 2 pieces of evidence — 8 in total. If the writer has 5, how many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence checking", statement: "Every point needs adequate evidence." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 more needed.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "8 minus 5 equals 3 missing.", working: "8 - 5 = 3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 3",
            commonErrors: ["Unsupported points weaken the whole argument."],
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
