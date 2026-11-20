import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cie-ol-el-lesson-2-2",
  code: "2-2",
  title: "Prose analysis and narrative techniques",
  goal: "I CAN analyse prose texts for narrative voice, characterisation and structure.",
  standards: ["1123 Reading: prose"],
  vocabulary: [
    { term: "Narrative voice", definition: "Who is telling the story — first, second, third person." },
    { term: "Characterisation", definition: "How author creates character — direct/indirect." },
    { term: "Point of view", definition: "Perspective from which story is told." },
    { term: "Foreshadowing", definition: "Hints about future events." },
    { term: "Flashback", definition: "Scene set in past time." },
    { term: "Denouement", definition: "Final resolution of story." },
  ],
  concepts: [
    {
      id: "cie-ol-el-prose",
      title: "Prose analysis",
      skill: "Analyse narrative voice, characterisation and story structure.",
      lesson: {
        sections: [
          {
            heading: "Point of view",
            body: "- **First person**: 'I' — narrator is character\n- **Second person**: 'you' — reader addressed\n- **Third person**: 'he/she/they' — outside narrator",
          },
          {
            heading: "Characterisation",
            body: "- **Direct**: author tells traits ('she was kind')\n- **Indirect**: shown through actions/dialogue/thoughts",
          },
          {
            heading: "Story structure",
            body: "Exposition→rising action→climax→falling action→denouement. Foreshadowing hints at future; flashback reveals past.",
          },
        ],
        keyFormulas: [
          { name: "Prose analysis", statement: "POV: 1st/2nd/3rd person; characterisation: direct/indirect; structure: exposition→climax→resolution." },
        ],
        workedExample: {
          problem: "How to analyse a novel extract?",
          solution: "Identify POV, character traits (direct/indirect), plot position, techniques used — support with quotes.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-prose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'first person' narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrator uses 'I'" },
              { id: "b", text: "Narrator uses 'you'" },
              { id: "c", text: "Narrator uses 'he/she'" },
              { id: "d", text: "No narrator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "First person", statement: "Narrator uses 'I' — character telling story." },
            ],
            steps: [
              { reasoning: "First person = 'I'.", working: "I", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Narrator uses 'I'",
            commonErrors: ["Choosing (c) — that's third person."],
          },
        },
        {
          id: "cie-ol-el-prose-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of characterisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Characterisation", statement: "Direct (told) and indirect (shown)." },
            ],
            steps: [
              { reasoning: "Direct and indirect.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Direct (author tells) and indirect (shown through actions/dialogue).",
            commonErrors: ["Only one — need both."],
          },
        },
        {
          id: "cie-ol-el-prose-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between direct and indirect characterisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Characterisation", statement: "Direct=told by author; indirect=shown through actions/dialogue/thoughts." },
            ],
            steps: [
              { reasoning: "Direct: 'she was kind' — author states trait.", working: "direct", marks: 1, markCode: "AO2" },
              { reasoning: "Indirect: shown through what character does/says/thinks.", working: "indirect", marks: 1, markCode: "AO2" },
              { reasoning: "Indirect requires reader inference — more engaging.", working: "inference", marks: 1, markCode: "AO2" },
              { reasoning: "Difference clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Direct=told; indirect=shown through actions/dialogue/thoughts.",
            commonErrors: ["Confusing the two — key distinction."],
          },
        },
        {
          id: "cie-ol-el-prose-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse prose narrative techniques.",
          parts: [
            { label: "a", prompt: "Name three points of view.", marks: 2 },
            { label: "b", prompt: "Explain direct vs indirect characterisation.", marks: 3 },
            { label: "c", prompt: "What is foreshadowing?", marks: 2 },
            { label: "d", prompt: "Describe story structure.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Prose analysis", statement: "POV, characterisation, foreshadowing, structure." },
            ],
            steps: [
              { part: "a", reasoning: "First, second, third person.", working: "POV", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All three.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Direct=told; indirect=shown through actions/dialogue.", working: "characterisation", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Hints about future events — creates anticipation.", working: "foreshadowing", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Exposition→rising action→climax→falling action→denouement.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Complete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) POV types (b) direct/indirect (c) foreshadowing=future hints (d) exposition→denouement",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three POVs.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear distinction.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Confusing direct/indirect — key distinction."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-narrative-analysis",
      title: "Narrative analysis skills",
      skill: "Analyse how narrative techniques create effects.",
      lesson: {
        sections: [
          {
            heading: "Narrative techniques",
            body: "- **Foreshadowing**: hints at future\n- **Flashback**: reveals past\n- **Suspense**: tension/anticipation\n- **Irony**: contrast between expectation and reality",
          },
          {
            heading: "Effects",
            body: "Each technique creates specific effect — foreshadowing builds anticipation; flashback adds depth; suspense keeps reader engaged; irony creates contrast.",
          },
          {
            heading: "Analysis approach",
            body: "Identify technique → explain what it does → describe effect on reader → connect to meaning/theme.",
          },
        ],
        keyFormulas: [
          { name: "Narrative analysis", statement: "Technique→what it does→effect on reader→connection to meaning." },
        ],
        workedExample: {
          problem: "How does suspense work in a story?",
          solution: "Uncertainty creates tension — reader wonders what happens next — keeps them reading.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-narr-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'suspense' in narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tension and anticipation" },
              { id: "b", text: "Happy ending" },
              { id: "c", text: "Sad ending" },
              { id: "d", text: "Comic relief" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Suspense", statement: "Tension and anticipation about what happens next." },
            ],
            steps: [
              { reasoning: "Suspense = tension/anticipation.", working: "tension", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Tension and anticipation",
            commonErrors: ["Choosing (b)/(c) — it's about tension, not outcome."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two narrative techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Foreshadowing, flashback, suspense, irony." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Foreshadowing, flashback, suspense, irony (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how foreshadowing creates effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Foreshadowing", statement: "Hints at future events — builds anticipation, creates tension." },
            ],
            steps: [
              { reasoning: "Hints suggest future events — reader anticipates.", working: "anticipation", marks: 1, markCode: "AO2" },
              { reasoning: "Creates tension — reader wonders when/how it will happen.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Makes ending more satisfying — foreshadowed events pay off.", working: "satisfying", marks: 1, markCode: "AO2" },
              { reasoning: "Effects explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Builds anticipation and tension; makes ending more satisfying.",
            commonErrors: ["Thinking it's just prediction — creates emotional effect."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse narrative techniques.",
          parts: [
            { label: "a", prompt: "Name four narrative techniques.", marks: 2 },
            { label: "b", prompt: "Explain suspense effect.", marks: 2 },
            { label: "c", prompt: "How to analyse irony?", marks: 2 },
            { label: "d", prompt: "How do techniques connect to meaning?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative analysis", statement: "Techniques create effects that connect to meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Foreshadowing, flashback, suspense, irony.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All four.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Creates tension/anticipation — keeps reader engaged.", working: "suspense", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Contrast expectation vs reality — identify what's expected vs what happens.", working: "irony", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Techniques create effects → effects contribute to theme/meaning.", working: "connection", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear link.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4 techniques (b) suspense=tension (c) irony=contrast (d) techniques→meaning",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Four techniques.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear connection.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Listing techniques without connecting to meaning."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-nonfiction",
      title: "Non-fiction text analysis",
      skill: "Analyse non-fiction texts for structure and purpose.",
      lesson: {
        sections: [
          {
            heading: "Non-fiction types",
            body: "- **Newspaper article**: headline, byline, lead, body\n- **Editorial**: opinion piece\n- **Report**: factual account\n- **Biography**: life story\n- **Autobiography**: self-written life story",
          },
          {
            heading: "Structure",
            body: "Most non-fiction has clear structure: introduction→body→conclusion. May use subheadings, bullet points, statistics.",
          },
          {
            heading: "Language features",
            body: "Formal register, technical vocabulary, statistics, expert quotes, logical argument — signals purpose and audience.",
          },
        ],
        keyFormulas: [
          { name: "Non-fiction", statement: "Types: article/editorial/report/biography; structure: intro→body→conclusion; formal language." },
        ],
        workedExample: {
          problem: "How to analyse a newspaper article?",
          solution: "Check headline (engaging?), lead (main point?), body (evidence?), language (formal, quotes?), purpose (inform/persuade?).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-nonfiction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an editorial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opinion piece in newspaper" },
              { id: "b", text: "Factual report" },
              { id: "c", text: "Story" },
              { id: "d", text: "Poem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Editorial", statement: "Opinion piece in newspaper." },
            ],
            steps: [
              { reasoning: "Editorial = opinion.", working: "opinion", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Opinion piece in newspaper",
            commonErrors: ["Choosing (b) — that's a report."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two non-fiction types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Types", statement: "Article, editorial, report, biography, autobiography." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Article, editorial, report, biography, autobiography (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of a newspaper article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article structure", statement: "Headline→byline→lead→body→conclusion." },
            ],
            steps: [
              { reasoning: "Headline: engaging, summarises story.", working: "headline", marks: 1, markCode: "AO2" },
              { reasoning: "Lead: first paragraph — main point, who/what/when/where.", working: "lead", marks: 1, markCode: "AO2" },
              { reasoning: "Body: details, quotes, evidence; conclusion: summary/final point.", working: "body", marks: 1, markCode: "AO2" },
              { reasoning: "Structure complete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Headline→byline→lead→body→conclusion.",
            commonErrors: ["Missing lead — key element."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse non-fiction texts.",
          parts: [
            { label: "a", prompt: "Name three non-fiction types.", marks: 2 },
            { label: "b", prompt: "Describe article structure.", marks: 3 },
            { label: "c", prompt: "What language features signal non-fiction?", marks: 2 },
            { label: "d", prompt: "How to analyse purpose?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Non-fiction analysis", statement: "Types, structure, language features, purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Article, editorial, report, biography, autobiography.", working: "types", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Three+ valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Headline→byline→lead→body→conclusion.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal register, statistics, quotes, logical argument.", working: "features", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Inform (facts), persuade (opinions), entertain (stories) — check language/register.", working: "purpose", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) types (b) structure (c) formal/statistics/quotes (d) inform/persuade/entertain",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three+ types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Confusing editorial (opinion) with report (factual)."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-prose-notes",
      title: "Prose and non-fiction — revision notes",
      summary: "Narrative analysis, prose techniques, non-fiction types.",
      sections: [
        {
          heading: "Prose",
          body: "POV: 1st/2nd/3rd person; characterisation: direct/indirect; techniques: foreshadowing, flashback, suspense, irony.",
        },
        {
          heading: "Non-fiction",
          body: "Types: article, editorial, report, biography. Structure: headline→lead→body→conclusion. Language: formal, statistics, quotes.",
        },
      ],
    },
  ],
};
