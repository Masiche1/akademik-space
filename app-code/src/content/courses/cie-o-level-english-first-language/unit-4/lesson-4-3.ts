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
              { id: "a", text: "Text's length" },
              { id: "b", text: "Publication date" },
              { id: "c", text: "Why text was written" },
              { id: "d", text: "Author's name" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cie-ol-fl-na-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Tone' in non-fiction writing refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Page layout" },
              { id: "b", text: "Sentence length" },
              { id: "c", text: "Spelling" },
              { id: "d", text: "The writer's attitude" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "Writer's attitude — formal, serious, humorous." },
            ],
            steps: [
              { reasoning: "Tone = attitude.", working: "attitude", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The writer's attitude",
            commonErrors: ["Confusing tone with mood."],
          },
        },
        {
          id: "cie-ol-fl-na-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does 'tone' differ from 'mood' in a text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone vs mood", statement: "Tone=writer's attitude; mood=reader's feeling." },
            ],
            steps: [
              { reasoning: "Tone vs mood distinction.", working: "distinction", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tone=writer's attitude; mood=reader's feeling.",
            commonErrors: ["Using terms interchangeably."],
          },
        },
        {
          id: "cie-ol-fl-na-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Objective' writing differs from 'subjective' in that it...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uses opinions" },
              { id: "b", text: "Is informal" },
              { id: "c", text: "Presents facts without personal feeling" },
              { id: "d", text: "Is always long" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Objective", statement: "Facts without personal bias." },
            ],
            steps: [
              { reasoning: "Objective = unbiased.", working: "unbiased", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Presents facts without personal feeling",
            commonErrors: ["Objective as boring."],
          },
        },
        {
          id: "cie-ol-fl-na-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do rhetorical questions persuade readers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rhetorical question", statement: "Engages reader, implies obvious answer." },
            ],
            steps: [
              { reasoning: "Engages+implies answer.", working: "engages", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Engages reader and implies an obvious answer.",
            commonErrors: ["Rhetorical question as genuine query."],
          },
        },
        {
          id: "cie-ol-fl-na-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the persuasive techniques in a typical editorial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Persuasive techniques", statement: "Emotion, evidence, rhetoric, repetition." },
            ],
            steps: [
              { reasoning: "Emotional appeals engage.", working: "emotion", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence lends authority.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Rhetorical devices persuade.", working: "rhetoric", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotion+evidence+rhetoric=persuasion.",
            commonErrors: ["Technique spotting without effect."],
          },
        },
        {
          id: "cie-ol-fl-na-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Statistics in non-fiction writing primarily serve as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence to support claims" },
              { id: "b", text: "Filler" },
              { id: "c", text: "Decoration" },
              { id: "d", text: "Humour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Statistics", statement: "Provide evidence." },
            ],
            steps: [
              { reasoning: "Stats = evidence.", working: "evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Evidence to support claims",
            commonErrors: ["Stats as decoration."],
          },
        },
        {
          id: "cie-ol-fl-na-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does text structure (e.g. chronological) serve purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Structure", statement: "Organises information for clarity/effect." },
            ],
            steps: [
              { reasoning: "Structure organises.", working: "organises", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Organises information for clarity or persuasive effect.",
            commonErrors: ["Structure as arbitrary."],
          },
        },
        {
          id: "cie-ol-fl-na-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'appeal to authority' uses...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Humour" },
              { id: "b", text: "Only statistics" },
              { id: "c", text: "Expert opinion to persuade" },
              { id: "d", text: "Personal stories" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Appeal to authority", statement: "Expert opinion persuades." },
            ],
            steps: [
              { reasoning: "Authority persuades.", working: "authority", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Expert opinion to persuade",
            commonErrors: ["Authority as irrelevant."],
          },
        },
        {
          id: "cie-ol-fl-na-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does imagery function in persuasive non-fiction writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Imagery", statement: "Creates vivid emotional response supporting argument." },
            ],
            steps: [
              { reasoning: "Imagery creates vividness.", working: "vivid", marks: 1, markCode: "AO2" },
              { reasoning: "Evokes emotion supporting argument.", working: "emotion", marks: 1, markCode: "AO2" },
              { reasoning: "Makes abstract ideas concrete.", working: "concrete", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Vivid+emotion+concrete=supports persuasion.",
            commonErrors: ["Imagery as decoration only."],
          },
        },
        {
          id: "cie-ol-fl-na-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Register in writing should match...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Audience and purpose" },
              { id: "b", text: "Only length" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Spelling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Formality matching audience/purpose." },
            ],
            steps: [
              { reasoning: "Register matches.", working: "matches", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Audience and purpose",
            commonErrors: ["Register as fixed."],
          },
        },
        {
          id: "cie-ol-fl-na-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why evaluate both content AND style in non-fiction analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Content + style", statement: "What is said and how it is said both matter." },
            ],
            steps: [
              { reasoning: "Both matter.", working: "both", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "What is said and how it is said both matter.",
            commonErrors: ["Content only — miss style."],
          },
        },
        {
          id: "cie-ol-fl-na-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Non-fiction analysis — extended.",
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
              { id: "a", text: "Giving examples" },
              { id: "b", text: "Attacking person not argument" },
              { id: "c", text: "Citing experts" },
              { id: "d", text: "Using statistics" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-fl-arg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'claim' in an argument is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A statistic" },
              { id: "b", text: "A fallacy" },
              { id: "c", text: "A piece of evidence" },
              { id: "d", text: "The main assertion being argued" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Claim", statement: "Main assertion being argued." },
            ],
            steps: [
              { reasoning: "Claim = assertion.", working: "assertion", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The main assertion being argued",
            commonErrors: ["Claim as evidence."],
          },
        },
        {
          id: "cie-ol-fl-arg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'false dilemma' fallacy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "False dilemma", statement: "Presenting only two options when more exist." },
            ],
            steps: [
              { reasoning: "Only two options offered.", working: "two", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Presenting only two options when more exist.",
            commonErrors: ["Thinking it's a real choice."],
          },
        },
        {
          id: "cie-ol-fl-arg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Anecdotal evidence is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A personal story used as proof" },
              { id: "b", text: "Statistical data" },
              { id: "c", text: "A fallacy name" },
              { id: "d", text: "Expert testimony" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Anecdotal evidence", statement: "Personal story — limited reliability." },
            ],
            steps: [
              { reasoning: "Anecdote = story.", working: "story", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A personal story used as proof",
            commonErrors: ["Anecdote as strong evidence."],
          },
        },
        {
          id: "cie-ol-fl-arg-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does 'appeal to emotion' weaken an argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Appeal to emotion", statement: "Substitutes feeling for reasoning." },
            ],
            steps: [
              { reasoning: "Feeling replaces reasoning.", working: "feeling", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Substitutes emotional reaction for logical reasoning.",
            commonErrors: ["Emotion as valid proof."],
          },
        },
        {
          id: "cie-ol-fl-arg-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the underlying assumptions of an argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Assumptions", statement: "Unstated beliefs the argument depends on." },
            ],
            steps: [
              { reasoning: "Identify unstated beliefs.", working: "unstated", marks: 1, markCode: "AO2" },
              { reasoning: "Test if assumptions hold.", working: "test", marks: 1, markCode: "AO2" },
              { reasoning: "Weak assumptions weaken argument.", working: "weak", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Unstated beliefs+testing=assumption analysis.",
            commonErrors: ["Only surface claims."],
          },
        },
        {
          id: "cie-ol-fl-arg-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Everyone agrees that...' without evidence is an example of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Logic" },
              { id: "b", text: "Appeal to consensus" },
              { id: "c", text: "Statistics" },
              { id: "d", text: "Strong evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Appeal to consensus", statement: "'Everyone agrees' isn't evidence." },
            ],
            steps: [
              { reasoning: "Consensus ≠ evidence.", working: "consensus", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Appeal to consensus",
            commonErrors: ["Accepting popularity as proof."],
          },
        },
        {
          id: "cie-ol-fl-arg-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do you distinguish correlation from causation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Correlation vs causation", statement: "Two things occurring together ≠ one causing other." },
            ],
            steps: [
              { reasoning: "Together ≠ cause.", working: "cause", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Two things occurring together doesn't prove one causes the other.",
            commonErrors: ["Correlation as proof of cause."],
          },
        },
        {
          id: "cie-ol-fl-arg-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expert testimony is strongest when the expert is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unknown" },
              { id: "b", text: "Famous only" },
              { id: "c", text: "Qualified and relevant to the claim" },
              { id: "d", text: "Biased" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expert testimony", statement: "Qualified + relevant = strong." },
            ],
            steps: [
              { reasoning: "Qualified+relevant.", working: "qualified", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Qualified and relevant to the claim",
            commonErrors: ["Fame as qualification."],
          },
        },
        {
          id: "cie-ol-fl-arg-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How would you identify a 'slippery slope' argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Slippery slope", statement: "Claims small step leads inevitably to extreme." },
            ],
            steps: [
              { reasoning: "Small step → extreme claim.", working: "extreme", marks: 1, markCode: "AO2" },
              { reasoning: "No evidence for chain.", working: "chain", marks: 1, markCode: "AO2" },
              { reasoning: "Each step needs justification.", working: "justification", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Small step→extreme+no evidence=slippery slope.",
            commonErrors: ["Accepting chain without proof."],
          },
        },
        {
          id: "cie-ol-fl-arg-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Reasoning' in an argument connects...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "The claim to the evidence" },
              { id: "c", text: "Only emotions" },
              { id: "d", text: "Statistics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reasoning", statement: "Links claim to evidence." },
            ],
            steps: [
              { reasoning: "Reasoning = link.", working: "link", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The claim to the evidence",
            commonErrors: ["Evidence without reasoning."],
          },
        },
        {
          id: "cie-ol-fl-arg-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'sufficient' evidence important in an argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sufficiency", statement: "Enough evidence to support the claim." },
            ],
            steps: [
              { reasoning: "Enough to support.", working: "enough", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Enough evidence is needed to adequately support the claim.",
            commonErrors: ["One example = proof."],
          },
        },
        {
          id: "cie-ol-fl-arg-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Argument analysis — extended.",
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
              { id: "a", text: "First paragraph" },
              { id: "b", text: "Main argument" },
              { id: "c", text: "Evidence quote" },
              { id: "d", text: "Summary" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-fl-nfe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should an introduction to a non-fiction essay include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A full summary of the text" },
              { id: "b", text: "A list of all techniques used" },
              { id: "c", text: "The essay's conclusion" },
              { id: "d", text: "Context and a clear thesis statement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Introduction", statement: "Context+thesis orient the reader and state the argument." },
            ],
            steps: [
              { reasoning: "Intro gives context then thesis.", working: "context+thesis", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Context and a clear thesis statement",
            commonErrors: ["Choosing (b) — summary belongs in the body at most."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is most analytical rather than summary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I liked the story." },
              { id: "b", text: "First the man walked home. Then he slept." },
              { id: "c", text: "The writer's short sentences quicken the pace, mirroring the character's panic." },
              { id: "d", text: "The story is about a man." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysis vs summary", statement: "Analysis explains how and why, not what happens." },
            ],
            steps: [
              { reasoning: "(a) links technique to effect.", working: "technique+effect", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** The writer's short sentences quicken the pace, mirroring the character's panic.",
            commonErrors: ["Choosing (c) — it states content without analysis."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main function of a topic sentence in an analytical essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It summarises the whole text" },
              { id: "b", text: "It repeats the introduction" },
              { id: "c", text: "It provides a long quotation" },
              { id: "d", text: "It states the paragraph's analytical focus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic sentence", statement: "States the paragraph's point or analytical focus." },
            ],
            steps: [
              { reasoning: "Topic sentence = paragraph's focus.", working: "focus", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** It states the paragraph's analytical focus",
            commonErrors: ["Confusing topic sentence with summary."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How can a writer integrate a quotation so it supports rather than interrupts an argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence integration", statement: "Brief quote+introduction+significance+link=integrated evidence." },
            ],
            steps: [
              { reasoning: "Introduce the quotation with a signal phrase.", working: "signal", marks: 1, markCode: "AO2" },
              { reasoning: "Keep the quotation brief and relevant.", working: "brief", marks: 1, markCode: "AO2" },
              { reasoning: "Explain significance and link to the argument.", working: "link", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduce+brief quote+explain significance+link to argument.",
            commonErrors: ["Dropping quotations without explanation."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a writer might evaluate the effectiveness of a persuasive text in an essay conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Judge how well techniques serve purpose; support with evidence." },
            ],
            steps: [
              { reasoning: "Restate the text's purpose and audience.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Judge how well techniques serve that purpose.", working: "effectiveness", marks: 1, markCode: "AO2" },
              { reasoning: "Support the judgement with specific evidence.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Clear overall assessment.", working: "assessment", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Purpose+technique judgement+evidence+overall assessment.",
            commonErrors: ["Repeating the introduction without judging effectiveness."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best thesis statement for an essay on an advertisement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I saw an advert on TV." },
              { id: "b", text: "The advert persuades through emotive language and direct address aimed at young parents." },
              { id: "c", text: "This essay will discuss advertising." },
              { id: "d", text: "Adverts are everywhere." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "A specific, arguable claim about the text." },
            ],
            steps: [
              { reasoning: "(a) is specific and arguable.", working: "arguable", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The advert persuades through emotive language and direct address aimed at young parents.",
            commonErrors: ["Choosing a statement that is not arguable."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'analytical focus' mean in a non-fiction essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listing every technique in the text" },
              { id: "b", text: "Explaining how and why techniques create effects" },
              { id: "c", text: "Using long quotations" },
              { id: "d", text: "Retelling the text in order" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analytical focus", statement: "How/why techniques work, not what happens." },
            ],
            steps: [
              { reasoning: "Focus = how and why, not what.", working: "how/why", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** Explaining how and why techniques create effects",
            commonErrors: ["Confusing listing techniques with analysing them."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two ways to avoid mere summary in a body paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Avoiding summary", statement: "Analyse technique+effect+purpose instead of retelling." },
            ],
            steps: [
              { reasoning: "Ask how/why, not what.", working: "how/why", marks: 1, markCode: "AO2" },
              { reasoning: "Link details to purpose and audience.", working: "purpose", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Analyse how/why and link to purpose — do not retell.",
            commonErrors: ["Quoting without explaining effect."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can a writer achieve a balanced judgement in an essay conclusion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced judgement", statement: "Acknowledge strengths and weaknesses, then weigh them." },
            ],
            steps: [
              { reasoning: "Acknowledge effective elements.", working: "strengths", marks: 1, markCode: "AO2" },
              { reasoning: "Acknowledge less effective elements.", working: "weaknesses", marks: 1, markCode: "AO2" },
              { reasoning: "Weigh them into an overall assessment.", working: "weigh", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Strengths+weaknesses+weighed overall assessment.",
            commonErrors: ["Giving a one-sided verdict."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Planning a non-fiction essay on a charity poster.",
          parts: [
            { label: "a", prompt: "Define 'thesis'.", marks: 1 },
            { label: "b", prompt: "Give two pieces of evidence to analyse.", marks: 2 },
            { label: "c", prompt: "Explain how to analyse one technique.", marks: 3 },
            { label: "d", prompt: "Draft an opening sentence containing a thesis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay planning", statement: "Thesis+evidence+technique analysis+introduction." },
            ],
            steps: [
              { part: "a", reasoning: "Main argument of the essay.", working: "thesis", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "First piece of evidence.", working: "evidence", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Second piece of evidence.", working: "evidence", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Name the technique.", working: "technique", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Explain its effect.", working: "effect", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Link to purpose or audience.", working: "link", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Context plus arguable claim.", working: "intro", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Grammatically controlled.", working: "control", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) main argument (b) two evidence points (c) technique+effect+link (d) context+thesis",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid points.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Technique analysed.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Named only.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Context+claim.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No thesis.", part: "d" },
            ],
            commonErrors: ["Listing evidence without analysing it."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Non-fiction essay skills.",
          parts: [
            { label: "a", prompt: "State two elements of an effective introduction.", marks: 2 },
            { label: "b", prompt: "Explain how to link paragraphs coherently.", marks: 2 },
            { label: "c", prompt: "How do you evaluate the quality of evidence?", marks: 3 },
            { label: "d", prompt: "Write a one-sentence conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay skills", statement: "Introduction+links+evidence+conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Context plus a clear thesis.", working: "intro", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Both elements identified.", working: "both", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Use connectives and refer back to earlier points.", working: "links", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear explanation of coherence.", working: "coherent", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Ask if evidence is relevant to the claim.", working: "relevant", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Ask if the source is reliable.", working: "reliable", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Criteria clearly applied.", working: "criteria", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "A concluding sentence assessing the text.", working: "conclusion", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Controlled and concise.", working: "control", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) context+thesis (b) connectives+back-reference (c) relevant+reliable+applied (d) assessment sentence",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Both elements.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Linking explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Criteria applied.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Conclusion given.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Criteria listed without being applied."],
          },
        },
        {
          id: "cie-ol-fl-nfe-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how considering the writer's purpose and audience shapes the analysis in a non-fiction essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose and audience", statement: "Purpose+audience determine which techniques matter and how to judge them." },
            ],
            steps: [
              { reasoning: "Purpose explains why techniques were chosen.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Audience explains the register and appeal used.", working: "audience", marks: 1, markCode: "AO2" },
              { reasoning: "Judgements of effectiveness depend on both.", working: "judgement", marks: 1, markCode: "AO2" },
              { reasoning: "Clear discussion.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Purpose+audience shape which techniques matter and how effectiveness is judged.",
            commonErrors: ["Analysing techniques without linking to purpose."],
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
