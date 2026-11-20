import type { Lesson } from "../../../types.ts";

export const lesson143: Lesson = {
  id: "cie-ol-fl-lesson-4-3",
  code: "4-3",
  title: "Non-fiction analysis and essays",
  goal: "I CAN write analytical essays on non-fiction texts.",
  standards: ["1119 Reading: non-fiction analysis"],
  vocabulary: [
    { term: "Thesis", definition: "Main argument of essay." },
    { term: "Evidence", definition: "Support from text." },
    { term: "Tone", definition: "Writer's attitude." },
    { term: "Purpose", definition: "Why text was written." },
    { term: "Audience", definition: "Intended readers." },
    { term: "Analysis", definition: "Explanation of how/why." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-nonfiction-analysis",
      title: "Analysing non-fiction",
      skill: "Analyse purpose, audience, tone and techniques.",
      lesson: {
        sections: [
          {
            heading: "Purpose and audience",
            body: "Why was text written? To inform, persuade, entertain, reflect? Who is it for? These shape everything.",
          },
          {
            heading: "Tone and register",
            body: "Formal/informal, objective/subjective, serious/humorous. Register matches audience and purpose.",
          },
          {
            heading: "Techniques",
            body: "Rhetorical devices, evidence types, structure, imagery — analyse how they serve purpose.",
          },
        ],
        keyFormulas: [
          { name: "Non-fiction analysis", statement: "Purpose+audience+tone+techniques=analysis." },
        ],
        workedExample: {
          problem: "Editorial uses emotional language and statistics.",
          solution: "Persuasive purpose — emotion+data combine to convince; analyse balance of appeal vs evidence.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-na-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'purpose' in non-fiction analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Why text was written" },
              { id: "b", text: "Text's length" },
              { id: "c", text: "Author's name" },
              { id: "d", text: "Publication date" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Why text was written — inform, persuade, entertain." },
            ],
            steps: [
              { reasoning: "Purpose = why written.", working: "why", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Why text was written",
            commonErrors: ["Choosing (d) — that's metadata."],
          },
        },
        {
          id: "cie-ol-fl-na-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'register' in writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register", statement: "Level of formality — formal/informal." },
            ],
            steps: [
              { reasoning: "Formality level.", working: "formality", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Level of formality — formal/informal.",
            commonErrors: ["Confusing with tone."],
          },
        },
        {
          id: "cie-ol-fl-na-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does audience shape non-fiction writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience", statement: "Determines register, examples, complexity, appeal." },
            ],
            steps: [
              { reasoning: "Audience determines register.", working: "register", marks: 1, markCode: "AO2" },
              { reasoning: "Examples chosen for relevance.", working: "examples", marks: 1, markCode: "AO2" },
              { reasoning: "Complexity matches knowledge level.", working: "complexity", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Register+examples+complexity+appeal=audience-shaped.",
            commonErrors: ["Ignoring audience in analysis."],
          },
        },
        {
          id: "cie-ol-fl-na-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Non-fiction analysis.",
          parts: [
            { label: "a", prompt: "Define purpose.", marks: 1 },
            { label: "b", prompt: "Define register.", marks: 2 },
            { label: "c", prompt: "How audience shapes writing?", marks: 3 },
            { label: "d", prompt: "Techniques to analyse?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Non-fiction", statement: "Purpose, register, audience, techniques." },
            ],
            steps: [
              { part: "a", reasoning: "Why text was written.", working: "purpose", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Level of formality.", working: "register", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Register, examples, complexity, appeal.", working: "audience", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Rhetoric, evidence, structure, imagery.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) why written (b) formality level (c) register+examples+complexity (d) rhetoric+evidence+structure",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Techniques listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Missing audience consideration."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-argument-analysis",
      title: "Argument analysis in non-fiction",
      skill: "Analyse arguments, evidence and reasoning.",
      lesson: {
        sections: [
          {
            heading: "Argument structure",
            body: "Claim + evidence + reasoning. Identify: what's claimed, what evidence supports, what assumptions underlie.",
          },
          {
            heading: "Evidence types",
            body: "Statistics, expert testimony, examples, anecdotes, quotations. Evaluate quality and relevance.",
          },
          {
            heading: "Logical fallacies",
            body: "Ad hominem (attack person), straw man (misrepresent), false dilemma (only two options), appeal to emotion.",
          },
        ],
        keyFormulas: [
          { name: "Argument analysis", statement: "Claim+evidence+reasoning+assumptions=fallbacks." },
        ],
        workedExample: {
          problem: "Argument says 'everyone agrees' without evidence.",
          solution: "Appeal to consensus fallacy — 'everyone agrees' isn't evidence; check if claim is actually supported.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-arg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'ad hominem' fallacy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attacking person not argument" },
              { id: "b", text: "Using statistics" },
              { id: "c", text: "Citing experts" },
              { id: "d", text: "Giving examples" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ad hominem", statement: "Attacking person instead of argument." },
            ],
            steps: [
              { reasoning: "Ad hominem = attack person.", working: "person", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Attacking person not argument",
            commonErrors: ["Choosing (b) — that's valid evidence."],
          },
        },
        {
          id: "cie-ol-fl-arg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'straw man' fallacy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Straw man", statement: "Misrepresenting opponent's argument to attack easily." },
            ],
            steps: [
              { reasoning: "Misrepresent then attack.", working: "misrepresent", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Misrepresenting opponent's argument to attack easily.",
            commonErrors: ["Thinking it's a weak argument."],
          },
        },
        {
          id: "cie-ol-fl-arg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to evaluate evidence quality?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence quality", statement: "Relevance, reliability, sufficiency, source." },
            ],
            steps: [
              { reasoning: "Is evidence relevant to claim?", working: "relevant", marks: 1, markCode: "AO2" },
              { reasoning: "Is source reliable?", working: "reliable", marks: 1, markCode: "AO2" },
              { reasoning: "Is there enough evidence?", working: "sufficient", marks: 1, markCode: "AO2" },
              { reasoning: "Criteria clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Relevant+reliable+sufficient+source quality.",
            commonErrors: ["Accepting any evidence."],
          },
        },
        {
          id: "cie-ol-fl-arg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Argument analysis.",
          parts: [
            { label: "a", prompt: "Define ad hominem.", marks: 1 },
            { label: "b", prompt: "Define straw man.", marks: 2 },
            { label: "c", prompt: "How to evaluate evidence?", marks: 3 },
            { label: "d", prompt: "Name fallacies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Arguments", statement: "Ad hominem, straw man, evidence, fallacies." },
            ],
            steps: [
              { part: "a", reasoning: "Attack person not argument.", working: "ad hominem", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Misrepresent opponent's argument.", working: "straw man", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Relevant, reliable, sufficient, source.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple criteria.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Ad hominem, straw man, false dilemma, appeal to emotion.", working: "fallacies", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) attack person (b) misrepresent (c) relevant+reliable+sufficient (d) ad hominem/straw man/false dilemma",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Criteria clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Fallacies listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Missing logical fallacies."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-nonfiction-essay",
      title: "Writing non-fiction essays",
      skill: "Write analytical essays on non-fiction texts.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "Introduction: context + thesis. Body: analyse purpose, audience, techniques, evidence. Conclusion: overall assessment.",
          },
          {
            heading: "Analytical focus",
            body: "Focus on how/why — techniques serve purpose. Avoid summary — analyse effectiveness.",
          },
          {
            heading: "Evidence integration",
            body: "Quote briefly, explain significance, link to argument. Don't just drop quotes.",
          },
        ],
        keyFormulas: [
          { name: "Non-fiction essay", statement: "Intro+thesis→evidence+analysis→conclusion+assessment." },
        ],
        workedExample: {
          problem: "Write essay on effectiveness of a speech.",
          solution: "Intro: thesis on persuasiveness. Body: rhetoric, evidence, audience appeal. Conclusion: overall effectiveness.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-nfe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'thesis' in non-fiction essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main argument" },
              { id: "b", text: "First paragraph" },
              { id: "c", text: "Evidence quote" },
              { id: "d", text: "Summary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "Main argument/central claim." },
            ],
            steps: [
              { reasoning: "Thesis = main argument.", working: "argument", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main argument",
            commonErrors: ["Choosing (d) — that's summary."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How to integrate evidence in essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence integration", statement: "Quote briefly, explain significance, link to argument." },
            ],
            steps: [
              { reasoning: "Brief quotes + explanation.", working: "brief", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Brief quotes+explain significance+link to argument.",
            commonErrors: ["Long quotes without analysis."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to avoid summary in non-fiction essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysis vs summary", statement: "Analyse how/why — techniques, effectiveness, purpose." },
            ],
            steps: [
              { reasoning: "Ask 'how' and 'why' not 'what'.", working: "how/why", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse techniques and effectiveness.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Link to purpose/audience.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "How/why+techniques+effectiveness+purpose — not summary.",
            commonErrors: ["Retelling text instead of analysing."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Non-fiction essay writing.",
          parts: [
            { label: "a", prompt: "Define thesis.", marks: 1 },
            { label: "b", prompt: "How to integrate evidence?", marks: 2 },
            { label: "c", prompt: "Avoid summary?", marks: 3 },
            { label: "d", prompt: "Essay structure?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay", statement: "Thesis, evidence, analysis, structure." },
            ],
            steps: [
              { part: "a", reasoning: "Main argument.", working: "thesis", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Brief quotes+explain+link.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "How/why+techniques+effectiveness+purpose.", working: "analysis", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Intro+thesis→evidence→conclusion+assessment.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple parts.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) main argument (b) brief+explain+link (c) how/why not what (d) intro-body-conclusion",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Analysis clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Summary instead of analysis."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-nonfiction-notes-2",
      title: "Non-fiction essays — revision notes",
      summary: "Analysis, arguments, essay writing.",
      sections: [
        {
          heading: "Non-fiction essays",
          body: "Analysis: purpose+audience+tone+techniques. Arguments: claim+evidence+reasoning; fallacies (ad hominem, straw man). Essay: thesis→evidence+analysis→conclusion.",
        },
      ],
    },
  ],
};
