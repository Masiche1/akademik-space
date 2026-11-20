import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cie-ol-el-lesson-2-3",
  code: "2-3",
  title: "Media and visual texts",
  goal: "I CAN analyse media texts including advertisements and visual communications.",
  standards: ["1123 Reading: media"],
  vocabulary: [
    { term: "Media", definition: "Channels of communication — newspapers, TV, internet." },
    { term: "Advertisement", definition: "Promotional text designed to persuade purchase." },
    { term: "Headline", definition: "Main title of article or advertisement." },
    { term: "Slogan", definition: "Catchy phrase representing product/idea." },
    { term: "Target audience", definition: "Specific group the media targets." },
    { term: "Call to action", definition: "Instruction prompting reader response." },
  ],
  concepts: [
    {
      id: "cie-ol-el-media",
      title: "Media text analysis",
      skill: "Analyse advertisements, articles and media communications.",
      lesson: {
        sections: [
          {
            heading: "Advertisement structure",
            body: "Headline → visual/image → body text → slogan → call to action. Each element persuades.",
          },
          {
            heading: "Persuasive techniques in media",
            body: "Emotive language, expert endorsements, statistics, repetition, colour/imagery (visual), celebrity association.",
          },
          {
            heading: "Target audience",
            body: "Advertisements target specific groups — children (bright colours, cartoons), adults (professional), teens (trendy).",
          },
        ],
        keyFormulas: [
          { name: "Media analysis", statement: "Advertisement: headline→visual→body→slogan→CTA; persuasive techniques; target audience." },
        ],
        workedExample: {
          problem: "How to analyse a product advertisement?",
          solution: "Check headline (grabs attention?), imagery (attractive?), language (persuasive?), target audience (who?), CTA (what action?).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'call to action' in advertising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Instruction prompting response" },
              { id: "b", text: "Product name" },
              { id: "c", text: "Company logo" },
              { id: "d", text: "Price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Call to action", statement: "Instruction prompting reader to act." },
            ],
            steps: [
              { reasoning: "CTA = prompt to act.", working: "act", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Instruction prompting response",
            commonErrors: ["Choosing (b) — that's product name."],
          },
        },
        {
          id: "cie-ol-el-media-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques in advertising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Emotive language, expert endorsements, statistics, repetition." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotive language, expert endorsements, statistics, repetition (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-media-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does an advertisement target its audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Target audience", statement: "Colour, imagery, language, appeals — matched to audience." },
            ],
            steps: [
              { reasoning: "Colours and imagery appeal to specific groups (bright for children).", working: "visuals", marks: 1, markCode: "AO2" },
              { reasoning: "Language/tone matches audience (formal vs trendy).", working: "language", marks: 1, markCode: "AO2" },
              { reasoning: "References, celebrities, values match target group.", working: "references", marks: 1, markCode: "AO2" },
              { reasoning: "Targeting explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Visuals, language, references matched to target audience.",
            commonErrors: ["Thinking all ads target everyone — they target specific groups."],
          },
        },
        {
          id: "cie-ol-el-media-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse media texts.",
          parts: [
            { label: "a", prompt: "Describe advertisement structure.", marks: 2 },
            { label: "b", prompt: "Name persuasive techniques.", marks: 3 },
            { label: "c", prompt: "How to identify target audience?", marks: 2 },
            { label: "d", prompt: "What is a slogan?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media analysis", statement: "Structure, techniques, audience, slogan." },
            ],
            steps: [
              { part: "a", reasoning: "Headline→visual→body→slogan→CTA.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Emotive, expert, statistics, repetition, celebrity.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Check colours, language, references — match to group.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Catchy phrase representing product/idea — memorable.", working: "slogan", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) techniques (c) audience matching (d) catchy phrase",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ techniques.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Missing call to action — key element."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-media-effects",
      title: "Media effects and influence",
      skill: "Evaluate how media influences audiences.",
      lesson: {
        sections: [
          {
            heading: "Media influence",
            body: "Media shapes opinions, values, consumer choices. Can inform, persuade, or manipulate audiences.",
          },
          {
            heading: "Bias and objectivity",
            body: "All media has perspective — check for bias, omissions, loaded language. Objectivity is rare.",
          },
          {
            heading: "Critical analysis",
            body: "Ask: Who created this? Why? Who benefits? What's omitted? Who is the audience? What techniques used?",
          },
        ],
        keyFormulas: [
          { name: "Media influence", statement: "Media shapes opinions; bias exists; critical questions reveal influence." },
        ],
        workedExample: {
          problem: "How to evaluate a news article for bias?",
          solution: "Check language (loaded?), sources (balanced?), omissions (what's missing?), headline (sensational?), context (full story?).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-meff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'bias' in media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One-sided perspective" },
              { id: "b", text: "Complete truth" },
              { id: "c", text: "No opinion" },
              { id: "d", text: "Factual report" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bias", statement: "One-sided perspective — favouring one view." },
            ],
            steps: [
              { reasoning: "Bias = one-sided.", working: "one-sided", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** One-sided perspective",
            commonErrors: ["Choosing (c) — media always has perspective."],
          },
        },
        {
          id: "cie-ol-el-meff-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two critical questions for media analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Critical questions", statement: "Who created? Why? Who benefits? What's omitted?" },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "questions", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Who created? Why? Who benefits? What's omitted? Who is audience?",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-meff-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how media can manipulate audiences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Manipulation", statement: "Emotive language, selective facts, repetition, expert endorsements — shape views." },
            ],
            steps: [
              { reasoning: "Emotive language appeals to feelings, not logic.", working: "emotive", marks: 1, markCode: "AO2" },
              { reasoning: "Selective facts/omissions create misleading picture.", working: "selective", marks: 1, markCode: "AO2" },
              { reasoning: "Repetition and endorsements create false credibility.", working: "repetition", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotive language, selective facts, repetition, endorsements — shape views.",
            commonErrors: ["Thinking media is neutral — always has agenda."],
          },
        },
        {
          id: "cie-ol-el-meff-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate media influence.",
          parts: [
            { label: "a", prompt: "Define bias in media.", marks: 1 },
            { label: "b", prompt: "Name critical questions.", marks: 3 },
            { label: "c", prompt: "How does media manipulate?", marks: 3 },
            { label: "d", prompt: "How to be critical consumer?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media influence", statement: "Bias, critical questions, manipulation, critical consumption." },
            ],
            steps: [
              { part: "a", reasoning: "One-sided perspective favouring one view.", working: "bias", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Who created? Why? Who benefits? What's omitted? Audience?", working: "questions", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Emotive language, selective facts, repetition, endorsements.", working: "manipulation", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check sources, multiple perspectives, question assumptions, verify facts.", working: "critical", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) one-sided (b) critical questions (c) manipulation techniques (d) check/verify",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ questions.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple techniques.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Accepting media at face value — must be critical."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-exam-skills",
      title: "Exam skills and revision",
      skill: "Apply exam techniques for reading and writing papers.",
      lesson: {
        sections: [
          {
            heading: "Reading paper strategy",
            body: "Read all questions first → allocate time → answer easier first → evidence-based answers → review at end.",
          },
          {
            heading: "Writing paper strategy",
            body: "Plan before writing → structure paragraphs → use varied sentences → check word count → proofread.",
          },
          {
            heading: "Common mistakes",
            body: "Ignoring word limits, not answering question set, poor paragraphing, grammar errors, no proofreading.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Reading: plan/allocate/evidence. Writing: plan/structure/proofread." },
        ],
        workedExample: {
          problem: "How to allocate exam time?",
          solution: "Total time ÷ total marks × marks per section. Leave 10% for review.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-exam2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before starting the reading paper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read all questions" },
              { id: "b", text: "Start writing" },
              { id: "c", text: "Guess" },
              { id: "d", text: "Skip" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam strategy", statement: "Read all questions first — plan approach." },
            ],
            steps: [
              { reasoning: "Read questions first.", working: "read", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read all questions",
            commonErrors: ["Starting immediately — no plan."],
          },
        },
        {
          id: "cie-ol-el-exam2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two writing exam techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Plan, structure, varied sentences, proofread." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Plan, structure, varied sentences, proofread (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-exam2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to allocate time in exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Allocate by marks, easy first, review at end." },
            ],
            steps: [
              { reasoning: "Calculate time per mark — allocate proportionally.", working: "allocate", marks: 1, markCode: "AO2" },
              { reasoning: "Answer easier questions first.", working: "easy", marks: 1, markCode: "AO2" },
              { reasoning: "Leave time for review.", working: "review", marks: 1, markCode: "AO2" },
              { reasoning: "Strategy clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Allocate by marks, easy first, review at end.",
            commonErrors: ["No time plan — runs out."],
          },
        },
        {
          id: "cie-ol-el-exam2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare for O Level English exam.",
          parts: [
            { label: "a", prompt: "How to approach reading paper?", marks: 2 },
            { label: "b", prompt: "How to approach writing paper?", marks: 3 },
            { label: "c", prompt: "What are common mistakes?", marks: 2 },
            { label: "d", prompt: "How to check work?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam prep", statement: "Reading: plan/allocate; writing: plan/structure/proofread." },
            ],
            steps: [
              { part: "a", reasoning: "Read questions, allocate time, answer with evidence.", working: "reading", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Plan, structure, write, check word count, proofread.", working: "writing", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word limits, wrong question, poor paragraphing, grammar errors.", working: "mistakes", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check units, complete all questions, proofread for errors.", working: "check", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) plan/allocate (b) plan/structure/proofread (c) mistakes (d) check units/all questions",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete process.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple mistakes.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["No proofreading — errors remain."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit2-notes",
      title: "Unit 2 — revision notes",
      summary: "Poetry, prose, media analysis and exam skills.",
      sections: [
        {
          heading: "Text analysis",
          body: "Poetry: stanza/verse, imagery, tone, techniques. Prose: POV, characterisation, foreshadowing. Media: advertisements, bias, critical questions.",
        },
      ],
    },
  ],
};
