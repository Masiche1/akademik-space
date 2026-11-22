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
              { id: "a", text: "No narrator" },
              { id: "b", text: "Narrator uses 'he/she'" },
              { id: "c", text: "Narrator uses 'you'" },
              { id: "d", text: "Narrator uses 'I'" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-el-prose-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Third person narration uses which pronouns?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He, she, they" },
              { id: "b", text: "You" },
              { id: "c", text: "I" },
              { id: "d", text: "No pronouns" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Third person", statement: "Narrator outside story — 'he/she/they'." },
            ],
            steps: [
              { reasoning: "Third person = he/she/they.", working: "he/she/they", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** He, she, they",
            commonErrors: ["Choosing (b) — that's first person."],
          },
        },
        {
          id: "cie-ol-el-prose-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A story has 5 plot stages: exposition, rising action, climax, falling action, denouement. (a) How many stages are there? (b) If the climax is stage 3, how many stages come after it?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story structure", statement: "Five stages of plot." },
            ],
            steps: [
              { reasoning: "5 stages are listed.", working: "5 stages", marks: 1, markCode: "AO1" },
              { reasoning: "Stages 4 and 5 come after climax — 2 stages.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 2",
            commonErrors: ["Counting the climax itself as 'after'."],
          },
        },
        {
          id: "cie-ol-el-prose-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Direct characterisation is when the author does what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "States the character's traits directly" },
              { id: "b", text: "Never reveals character" },
              { id: "c", text: "Shows traits through actions" },
              { id: "d", text: "Uses only dialogue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Direct characterisation", statement: "Author tells traits — 'she was kind'." },
            ],
            steps: [
              { reasoning: "Direct = stated by author.", working: "stated", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** States the character's traits directly",
            commonErrors: ["Choosing (b) — that's indirect."],
          },
        },
        {
          id: "cie-ol-el-prose-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two narrative techniques used in prose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative techniques", statement: "Foreshadowing, flashback, suspense, irony." },
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
          id: "cie-ol-el-prose-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An extract has 3 characters: 2 are described directly and 1 indirectly. (a) How many characters are there? (b) How many are described directly? (c) How many are described indirectly?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Characterisation counting", statement: "Count direct vs indirect descriptions." },
            ],
            steps: [
              { reasoning: "3 characters are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "2 are described directly.", working: "2 direct", marks: 1, markCode: "AO2" },
              { reasoning: "1 is described indirectly.", working: "1 indirect", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 2; (c) 1",
            commonErrors: ["Confusing direct and indirect counts."],
          },
        },
        {
          id: "cie-ol-el-prose-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'flashback' in a story is what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The story's ending" },
              { id: "b", text: "The story's climax" },
              { id: "c", text: "A scene set in an earlier time" },
              { id: "d", text: "A hint about the future" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flashback", statement: "Scene set in past time." },
            ],
            steps: [
              { reasoning: "Flashback = past.", working: "past", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A scene set in an earlier time",
            commonErrors: ["Choosing (b) — that's foreshadowing."],
          },
        },
        {
          id: "cie-ol-el-prose-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how foreshadowing affects the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Foreshadowing", statement: "Builds anticipation, creates tension, makes ending satisfying." },
            ],
            steps: [
              { reasoning: "Hints suggest future events — reader anticipates.", working: "anticipation", marks: 1, markCode: "AO2" },
              { reasoning: "Creates tension — reader wonders when/how it will happen.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Makes the ending more satisfying — foreshadowed events pay off.", working: "payoff", marks: 1, markCode: "AO2" },
              { reasoning: "Effects explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Builds anticipation and tension; makes the ending more satisfying.",
            commonErrors: ["Thinking it's just prediction — it creates emotional effect."],
          },
        },
        {
          id: "cie-ol-el-prose-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point of view lets the reader share one character's inner thoughts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No narrator" },
              { id: "b", text: "Third person omniscient" },
              { id: "c", text: "Second person" },
              { id: "d", text: "First person" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "First person", statement: "Narrator is a character — shares their thoughts." },
            ],
            steps: [
              { reasoning: "First person narrator shares inner thoughts.", working: "first person", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** First person",
            commonErrors: ["Choosing (c) — omniscient knows all but isn't 'I'."],
          },
        },
        {
          id: "cie-ol-el-prose-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Story structure has 5 stages; a student names only 4 of them. (a) How many stages are missing? (b) If there are 3 types of point of view and the student lists all 3, how many POV types are listed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure checking", statement: "Count required vs named elements." },
            ],
            steps: [
              { reasoning: "5 minus 4 equals 1 stage missing.", working: "5 - 4 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "All 3 POV types are listed.", working: "3 POVs", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 3",
            commonErrors: ["Missing a structure stage — check the full list."],
          },
        },
        {
          id: "cie-ol-el-prose-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply prose analysis skills.",
          parts: [
            { label: "a", prompt: "Name the three points of view.", marks: 2 },
            { label: "b", prompt: "Explain direct vs indirect characterisation.", marks: 2 },
            { label: "c", prompt: "List the story structure stages.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Prose analysis", statement: "POV, characterisation, structure." },
            ],
            steps: [
              { part: "a", reasoning: "First, second, third person — all three.", working: "POVs", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All named.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Direct=told; indirect=shown through actions/dialogue.", working: "characterisation", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Exposition→rising action→climax→falling action→denouement.", working: "stages", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Complete.", working: "complete", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) POVs (b) direct/indirect (c) structure stages",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three POVs.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "c" },
            ],
            commonErrors: ["Confusing direct and indirect characterisation."],
          },
        },
        {
          id: "cie-ol-el-prose-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Indirect characterisation reveals a character's traits through what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author stating them" },
              { id: "b", text: "Actions, dialogue and thoughts" },
              { id: "c", text: "The genre" },
              { id: "d", text: "The book's title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Indirect characterisation", statement: "Shown through actions/dialogue/thoughts." },
            ],
            steps: [
              { reasoning: "Indirect = shown, not told.", working: "shown", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Actions, dialogue and thoughts",
            commonErrors: ["Choosing (b) — that's direct."],
          },
        },
        {
          id: "cie-ol-el-prose-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An extract uses 4 narrative techniques; a student identifies only 3 of them. How many are missed? (b) If there are 4 narrative techniques in the syllabus list and all 4 are named, how many are named?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique identification", statement: "Spot all techniques in a text." },
            ],
            steps: [
              { reasoning: "4 minus 3 equals 1 technique missed.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "All 4 techniques are named.", working: "4 named", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 4",
            commonErrors: ["Missing a technique — check carefully."],
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
              { id: "a", text: "Happy ending" },
              { id: "b", text: "Tension and anticipation" },
              { id: "c", text: "Sad ending" },
              { id: "d", text: "Comic relief" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-el-narr-an-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Irony in narrative is what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contrast between expectation and reality" },
              { id: "b", text: "A flashback" },
              { id: "c", text: "End-of-line rhyme" },
              { id: "d", text: "A happy ending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Irony", statement: "Contrast between expectation and reality." },
            ],
            steps: [
              { reasoning: "Irony = expectation vs reality.", working: "contrast", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Contrast between expectation and reality",
            commonErrors: ["Choosing (d) — that's flashback."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A story uses 4 different narrative techniques, and suspense appears in 2 scenes. (a) How many distinct techniques are used? (b) How many times does suspense appear?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique counting", statement: "Count distinct types vs occurrences." },
            ],
            steps: [
              { reasoning: "4 distinct techniques are used.", working: "4 types", marks: 1, markCode: "AO1" },
              { reasoning: "Suspense appears in 2 scenes.", working: "2 scenes", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 4; (b) 2",
            commonErrors: ["Confusing technique types with occurrences."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a flashback do in a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speeds up the plot" },
              { id: "b", text: "Only introduces characters" },
              { id: "c", text: "Reveals past events and adds depth" },
              { id: "d", text: "Ends the story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Flashback", statement: "Reveals past — adds depth and context." },
            ],
            steps: [
              { reasoning: "Flashback reveals the past.", working: "past", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Reveals past events and adds depth",
            commonErrors: ["Thinking it only introduces characters."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two effects that suspense creates in a reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Suspense effects", statement: "Tension, anticipation, engagement." },
            ],
            steps: [
              { reasoning: "Any two valid — tension, anticipation, engagement, curiosity.", working: "effects", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tension, anticipation, engagement, curiosity (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An analysis identifies 5 narrative techniques and 3 reader effects. (a) How many techniques are identified? (b) How many effects are described? (c) If 2 techniques lack an effect link, how many techniques are linked to effects?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysis structure", statement: "Link each technique to its effect." },
            ],
            steps: [
              { reasoning: "5 techniques are identified.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "3 effects are described.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "5 minus 2 equals 3 linked techniques (limited by 3 effects).", working: "3 linked", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5; (b) 3; (c) 3",
            commonErrors: ["Listing techniques without linking effects."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the best structure for analysing a narrative technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give a personal opinion" },
              { id: "b", text: "List the techniques only" },
              { id: "c", text: "Summarise the plot" },
              { id: "d", text: "Technique → what it does → effect → meaning" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysis structure", statement: "Technique→effect→meaning." },
            ],
            steps: [
              { reasoning: "Full analysis links technique to effect and meaning.", working: "chain", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Technique → what it does → effect → meaning",
            commonErrors: ["Choosing (b) — listing alone earns few marks."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to analyse a narrative technique effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique analysis", statement: "Identify→describe→effect→link to theme." },
            ],
            steps: [
              { reasoning: "Identify the technique in the text.", working: "identify", marks: 1, markCode: "AO2" },
              { reasoning: "Describe what it does in the narrative.", working: "describe", marks: 1, markCode: "AO2" },
              { reasoning: "Explain the effect on the reader.", working: "effect", marks: 1, markCode: "AO2" },
              { reasoning: "Link to theme or meaning.", working: "meaning", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Identify→describe→effect on reader→connect to meaning.",
            commonErrors: ["Naming the technique without explaining effect."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which technique creates anticipation about future events?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Denouement" },
              { id: "b", text: "Exposition" },
              { id: "c", text: "Foreshadowing" },
              { id: "d", text: "Resolution" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Foreshadowing", statement: "Hints at future events." },
            ],
            steps: [
              { reasoning: "Foreshadowing = future hints.", working: "future", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Foreshadowing",
            commonErrors: ["Choosing (b)/(d) — those are endings."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The syllabus lists 4 narrative techniques; a student names only 3 of them. (a) How many are missing? (b) An extract contains 2 flashback scenes. How many flashbacks are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique recall", statement: "Know all four techniques." },
            ],
            steps: [
              { reasoning: "4 minus 3 equals 1 missing technique.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "2 flashback scenes are given.", working: "2", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 2",
            commonErrors: ["Forgetting one of the four techniques."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply narrative analysis skills.",
          parts: [
            { label: "a", prompt: "Name three narrative techniques.", marks: 2 },
            { label: "b", prompt: "Explain the effect of suspense.", marks: 2 },
            { label: "c", prompt: "How do techniques connect to meaning?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative analysis", statement: "Techniques, suspense, meaning links." },
            ],
            steps: [
              { part: "a", reasoning: "Foreshadowing, flashback, suspense, irony — any three.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Three valid.", working: "three", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Creates tension and anticipation — keeps reader engaged.", working: "suspense", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Techniques create effects that build theme and meaning.", working: "connection", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear link.", working: "link", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) techniques (b) tension/anticipation (c) techniques→effects→meaning",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear link.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Listing techniques without connecting to meaning."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Suspense keeps the reader engaged by doing what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slowing everything down" },
              { id: "b", text: "Creating uncertainty about what happens next" },
              { id: "c", text: "Giving all the answers early" },
              { id: "d", text: "Listing facts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Suspense", statement: "Uncertainty creates tension." },
            ],
            steps: [
              { reasoning: "Suspense = uncertainty → tension.", working: "uncertainty", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Creating uncertainty about what happens next",
            commonErrors: ["Thinking suspense means slow pacing."],
          },
        },
        {
          id: "cie-ol-el-narr-an-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) Irony appears in 3 of a story's 10 paragraphs. How many paragraphs contain irony? (b) An analysis question is worth 4 marks for technique plus effect; a student gives only the technique name. How many marks are likely lost?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Marks awareness", statement: "Effect earns as many marks as technique." },
            ],
            steps: [
              { reasoning: "3 paragraphs contain irony.", working: "3 paragraphs", marks: 1, markCode: "AO1" },
              { reasoning: "4 minus 2 equals 2 marks lost for missing effect.", working: "4 - 2 = 2", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 2",
            commonErrors: ["Naming technique without effect — loses half the marks."],
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
              { id: "a", text: "Poem" },
              { id: "b", text: "Factual report" },
              { id: "c", text: "Opinion piece in newspaper" },
              { id: "d", text: "Story" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cie-ol-el-nonfiction-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A biography is what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An opinion piece" },
              { id: "b", text: "A report on an event" },
              { id: "c", text: "A poem" },
              { id: "d", text: "The life story of a person" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biography", statement: "Life story written by someone else." },
            ],
            steps: [
              { reasoning: "Biography = life story.", working: "life story", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The life story of a person",
            commonErrors: ["Confusing with autobiography — self-written."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A newspaper article structure has 5 elements: headline, byline, lead, body, conclusion. A student includes 4 of them. (a) How many elements are required? (b) How many has the student included?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article structure", statement: "All elements needed." },
            ],
            steps: [
              { reasoning: "5 elements are required.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "4 are included.", working: "4", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 4",
            commonErrors: ["Missing the byline or lead element."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An editorial differs from a report because an editorial does what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gives only facts" },
              { id: "b", text: "Uses bullet points" },
              { id: "c", text: "Has a byline only" },
              { id: "d", text: "Gives an opinion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Editorial", statement: "Opinion piece in a newspaper." },
            ],
            steps: [
              { reasoning: "Editorial = opinion.", working: "opinion", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Gives an opinion",
            commonErrors: ["Choosing (b) — that's a report."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two non-fiction text types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Non-fiction types", statement: "Article, editorial, report, biography, autobiography." },
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
          id: "cie-ol-el-nonfiction-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A report has 5 parts: title, introduction, findings, conclusion, recommendations. The findings section uses 3 paragraphs. (a) How many parts does the report have? (b) How many paragraphs are in the findings? (c) If the recommendations section is missing, how many parts are incomplete?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report structure", statement: "All sections required." },
            ],
            steps: [
              { reasoning: "5 parts are listed.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "3 findings paragraphs are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "1 part (recommendations) is missing.", working: "1", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5; (b) 3; (c) 1",
            commonErrors: ["Forgetting recommendations is required."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which language feature signals a non-fiction text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhyme" },
              { id: "b", text: "Exclamation marks" },
              { id: "c", text: "Slang" },
              { id: "d", text: "Statistics and formal register" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Non-fiction features", statement: "Formal register, statistics, expert quotes." },
            ],
            steps: [
              { reasoning: "Statistics + formal register = non-fiction signals.", working: "statistics", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Statistics and formal register",
            commonErrors: ["Choosing (c) — slang signals informal fiction."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the purpose of the 'lead' in a newspaper article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article structure", statement: "Lead = first paragraph with main point." },
            ],
            steps: [
              { reasoning: "Lead states the main point immediately.", working: "main point", marks: 1, markCode: "AO2" },
              { reasoning: "It covers who, what, when, where.", working: "5Ws", marks: 1, markCode: "AO2" },
              { reasoning: "It hooks the reader into the story.", working: "hook", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Lead gives the main point — who/what/when/where — hooks reader.",
            commonErrors: ["Thinking lead is just an introduction — it must state the news."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does an autobiography differ from a biography?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same thing" },
              { id: "b", text: "Poem vs prose" },
              { id: "c", text: "Self-written vs written by another person" },
              { id: "d", text: "Fiction vs non-fiction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Autobiography", statement: "Life story written by the person themselves." },
            ],
            steps: [
              { reasoning: "Auto=self; bio=other.", working: "self vs other", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Self-written vs written by another person",
            commonErrors: ["Choosing (d) — they differ in authorship."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An article has 4 core parts; a student writes only 3 of them. How many are missing? (b) A report needs 5 sections; a student writes all 5. How many sections are complete?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure checking", statement: "Count required vs written parts." },
            ],
            steps: [
              { reasoning: "4 minus 3 equals 1 missing part.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "All 5 report sections are written.", working: "5 complete", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 5",
            commonErrors: ["Missing a required section."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply non-fiction analysis skills.",
          parts: [
            { label: "a", prompt: "Name three non-fiction types.", marks: 2 },
            { label: "b", prompt: "Describe the structure of a newspaper article.", marks: 2 },
            { label: "c", prompt: "Name two language features of non-fiction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Non-fiction analysis", statement: "Types, structure, features." },
            ],
            steps: [
              { part: "a", reasoning: "Article, editorial, report, biography, autobiography — any three.", working: "types", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Three valid.", working: "three", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Headline→byline→lead→body→conclusion.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", working: "complete", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal register, statistics, quotes, logical argument — any two.", working: "features", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) types (b) headline→lead→body→conclusion (c) formal/statistics",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
            ],
            commonErrors: ["Confusing editorial (opinion) with report (factual)."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main purpose of most non-fiction is to do what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Entertain only" },
              { id: "b", text: "Inform or persuade the reader" },
              { id: "c", text: "Decorate the page" },
              { id: "d", text: "Confuse the reader" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Non-fiction purpose", statement: "Inform, persuade, or instruct." },
            ],
            steps: [
              { reasoning: "Non-fiction informs or persuades.", working: "inform", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Inform or persuade the reader",
            commonErrors: ["Choosing (b) — that's fiction's main job."],
          },
        },
        {
          id: "cie-ol-el-nonfiction-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An exam asks for 3 non-fiction types; a student lists only 2. How many are missing? (b) An article body has 5 paragraphs. How many paragraphs does the body have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting answers", statement: "Match required vs given." },
            ],
            steps: [
              { reasoning: "3 minus 2 equals 1 missing type.", working: "3 - 2 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "5 body paragraphs are given.", working: "5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 5",
            commonErrors: ["Listing fewer types than required."],
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
