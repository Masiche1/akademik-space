import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mll5-u3-lesson-3-2",
  code: "3-2",
  title: "Structure and Cohesion in Extended Writing",
  goal: "I CAN structure extended texts with clear organization, sophisticated paragraphing and seamless cohesion.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
  ],
  vocabulary: [
    { term: "Cohesion", definition: "How ideas connect within and between sentences/paragraphs." },
    { term: "Coherence", definition: "How ideas connect logically across the whole text." },
    { term: "Topic sentence", definition: "First sentence of paragraph stating its main idea." },
    { term: "Transition", definition: "Words/phrases linking ideas — however, furthermore, consequently." },
    { term: "Parallelism", definition: "Using similar grammatical structure for rhythm and emphasis." },
    { term: "Signposting", definition: "Explicit markers of structure — 'first', 'second', 'in conclusion'." },
  ],
  concepts: [
    {
      id: "mll5-u3-structure-cohesion",
      title: "Building coherent extended texts",
      skill: "Organize extended texts with clear structure and seamless cohesion.",
      lesson: {
        sections: [
          {
            heading: "Structure beyond paragraphs",
            body: "Extended texts need **macro-structure**: introduction (thesis/context), body (development), conclusion (synthesis). Each section has a **micro-structure**: topic sentences, supporting evidence, transitions. Both levels must work together.",
          },
          {
            heading: "Cohesion devices",
            body: "**Cohesion** = surface connections. Use: **pronoun reference** ('this', 'it'), **repetition** of key terms, **synonyms** (vary vocabulary), **transitions** (however, therefore), **parallel structure**. These create flow — reader doesn't stumble.",
          },
          {
            heading: "Signposting and coherence",
            body: "**Signposting** = telling reader where you are ('Firstly', 'On the other hand', 'In conclusion'). Helps navigation. **Coherence** = deeper logical connection — does each idea follow from the last? Does the whole build toward conclusion? Structure serves meaning.",
          },
        ],
        keyFormulas: [
          { name: "Extended structure", statement: "Macro (intro/body/conclusion) + Micro (topic/support/transition) = coherent text." },
        ],
        workedExample: {
          problem: "Essay jumps from 'climate change is serious' to 'I like pizza'. What's wrong?",
          solution: "No cohesion — unrelated idea breaks coherence; need transition/connection or remove irrelevant point.",
        },
      },
      questions: [
        {
          id: "mll5-u3-structure-cohesion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between cohesion and coherence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Cohesion = surface connections; coherence = logical flow" },
              { id: "c", text: "Cohesion is for poems" },
              { id: "d", text: "Coherence is for essays" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cohesion vs coherence", statement: "Cohesion = surface links; coherence = logical flow." }],
            steps: [{ reasoning: "Criterion B (Organizing): cohesion = surface, coherence = logical — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Cohesion = surface connections; coherence = logical flow",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Paragraphs",
            author: "Written for Akademik Space",
            text: "Paragraph A: 'Exercise is beneficial. It improves health. People should exercise.\n\nParagraph B: 'Regular exercise offers numerous health benefits. Physically, it strengthens the cardiovascular system and builds muscle. Moreover, it reduces stress and improves mood.'",
          },
          stem: "Compare cohesion — how does Paragraph B connect ideas better?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cohesion devices", statement: "Topic sentences, specific support, transitions = cohesive paragraph." }],
            steps: [
              { reasoning: "Criterion B (Organizing): B has clear topic sentence ('numerous health benefits'), specific support (cardiovascular, muscle), transition ('Moreover').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): A is vague ('beneficial', 'health') — no specific support, no transitions — ideas feel disconnected.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "B cohesive via topic sentence + specifics + transition; A vague and disconnected.",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Essay Structure",
            author: "Written for Akademik Space",
            text: "Introduction: 'This essay will discuss social media.'\n\nBody 1: 'Social media connects people.'\n\nBody 2: 'Social media can be addictive.'\n\nBody 3: 'My friend uses Instagram a lot.'\n\nConclusion: 'In conclusion, social media has pros and cons.'",
          },
          stem: "Analyse the structure — what's missing for coherence?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Structural coherence", statement: "Each section must develop thesis; irrelevant examples break flow." }],
            steps: [
              { reasoning: "Criterion B (Organizing): intro is vague ('will discuss') — no thesis or argument.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): body 3 ('my friend') is anecdotal, doesn't develop argument — breaks coherence.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): conclusion is generic ('pros and cons') — doesn't synthesize or answer 'so what?'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Missing thesis, development, synthesis — structure exists but lacks coherent argument.",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a topic sentence for a paragraph about the benefits of technology in education.", marks: 1 },
            { label: "b", prompt: "List two cohesion devices you would use within the paragraph.", marks: 1 },
            { label: "c", prompt: "Write a transition sentence linking this paragraph to one about technology's drawbacks.", marks: 1 },
            { label: "d", prompt: "Explain how signposting helps the reader.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cohesive writing", statement: "Topic + cohesion + transition + signposting = coherent text." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): clear topic sentence about educational benefits.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): two devices — e.g. pronoun reference, repetition of key term, transition word.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): transition — e.g. 'However, technology also presents challenges...'", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): signposting tells reader where they are — aids navigation and comprehension.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): creates expectation and structure — reader knows what's coming.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Topic + cohesion devices + transition + signposting = coherent extended writing.",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between cohesion and coherence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Cohesion = surface connections between sentences; coherence = logical flow of ideas across the text" },
              { id: "c", text: "Cohesion is only for poems" },
              { id: "d", text: "Coherence is only for essays" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cohesion vs coherence", statement: "Cohesion = surface links; coherence = logical flow." }],
            steps: [{ reasoning: "Criterion B (Organizing): cohesion = surface, coherence = logical — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Cohesion = surface connections; coherence = logical flow",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Paragraph",
            author: "Written for Akademik Space",
            text: "Exercise improves health. Furthermore, it reduces stress. Therefore, people should exercise regularly.",
          },
          stem: "How many transition words appear in this paragraph?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Transitions", statement: "Transition words link ideas." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'Furthermore' + 'Therefore' — 2 transitions.", marks: 1, markCode: "B" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Sentences",
            author: "Written for Akademik Space",
            text: "'She wanted to leave. However, she stayed.'",
          },
          stem: "What does 'However' do here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It adds more of the same idea" },
              { id: "b", text: "It signals contrast — staying contradicts wanting to leave" },
              { id: "c", text: "It is decorative" },
              { id: "d", text: "It marks a conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Transitions", statement: "Contrastive transitions signal opposing ideas." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'However' signals contrast — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** It signals contrast — staying contradicts wanting to leave",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Paragraph",
            author: "Written for Akademik Space",
            text: "'Many people use social media. It can be addictive. Students check phones constantly.'",
          },
          stem: "What cohesion problem does this paragraph have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is perfectly cohesive" },
              { id: "b", text: "No transitions or linking phrases — sentences are abrupt and the connection between social media and students is unclear" },
              { id: "c", text: "It is too long" },
              { id: "d", text: "It has too many examples" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Cohesion", statement: "Transitions and links create flow." }],
            steps: [{ reasoning: "Criterion B (Organizing): no transitions — ideas abrupt — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** No transitions or linking phrases — sentences abrupt",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 'signposting' in extended writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing on actual signs" },
              { id: "b", text: "Explicit markers of structure — 'firstly', 'on the other hand', 'in conclusion' — that guide the reader" },
              { id: "c", text: "A type of paragraph" },
              { id: "d", text: "Pointing at words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Signposting", statement: "Explicit structural markers guide the reader." }],
            steps: [{ reasoning: "Criterion B (Organizing): signposting = structural markers — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Explicit markers of structure that guide the reader",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Essay",
            author: "Written for Akademik Space",
            text: "Para 1: 'Technology has transformed education.'\n\nPara 2: 'However, access remains unequal.'\n\nPara 3: 'In conclusion, we must bridge this gap.'",
          },
          stem: "How many paragraphs contain a clear topic sentence or structural marker?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Topic sentences", statement: "Each paragraph needs a clear main idea." }],
            steps: [{ reasoning: "Criterion B (Organizing): each paragraph opens with a main idea/marker — 3.", marks: 1, markCode: "B" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Essay",
            author: "Written for Akademik Space",
            text: "'Social media affects teenagers. My dog is cute. Teenagers spend hours online. Therefore, social media is bad.'",
          },
          stem: "Diagnose the coherence problems in this mini-essay.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coherence", statement: "Every idea must connect logically to the argument." }],
            steps: [
              { reasoning: "Criterion B (Organizing): 'My dog is cute' — completely irrelevant, breaks coherence.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): 'Therefore, social media is bad' — conclusion doesn't follow from evidence; 'bad' is unsupported judgement.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): missing development — claims stated but no evidence or reasoning connects them.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Irrelevant dog sentence, unsupported conclusion, no evidence linking claims — coherence broken.",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The last sentence of a paragraph" },
              { id: "b", text: "The first sentence stating the paragraph's main idea" },
              { id: "c", text: "A heading" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Topic sentence", statement: "First sentence stating the paragraph's main idea." }],
            steps: [{ reasoning: "Criterion B (Organizing): topic sentence = main idea opener — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The first sentence stating the paragraph's main idea",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a topic sentence about the benefits of reading.", marks: 1 },
            { label: "b", prompt: "Write two supporting sentences that develop it cohesively.", marks: 2 },
            { label: "c", prompt: "Write a concluding sentence for the paragraph.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Paragraph structure", statement: "Topic + support + conclusion = cohesive paragraph." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): clear topic sentence on reading benefits.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): supporting sentences add specific evidence/examples linked to topic.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): cohesion devices used (pronouns, transitions, repetition of key term).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): concluding sentence synthesizes — e.g. 'These benefits make reading a lifelong skill.'", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): conclusion ties back to topic sentence — completes paragraph arc.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Topic sentence + cohesive support + synthesizing conclusion = well-structured paragraph.",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Paragraph",
            author: "Written for Akademik Space",
            text: "First, consider the evidence. Second, examine the counterargument. Finally, weigh both sides.",
          },
          stem: "How many signposting words appear in this paragraph?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Signposting", statement: "Sequencing markers guide the reader." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'First', 'Second', 'Finally' — 3 signposts.", marks: 1, markCode: "B" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between macro-structure and micro-structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same" },
              { id: "b", text: "Macro = whole-text organization (intro/body/conclusion); micro = paragraph-level structure (topic/support/transition)" },
              { id: "c", text: "Macro is for poems" },
              { id: "d", text: "Micro is only spelling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Macro vs micro structure", statement: "Whole-text vs paragraph-level organization." }],
            steps: [{ reasoning: "Criterion B (Organizing): macro = whole text, micro = paragraph — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Macro = whole-text organization; micro = paragraph-level structure",
          },
        },
        {
          id: "mll5-u3-structure-cohesion-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the cohesion device in: 'Exercise is beneficial. It improves health.'", marks: 1 },
            { label: "b", prompt: "Explain how pronoun reference creates cohesion.", marks: 2 },
            { label: "c", prompt: "Rewrite using a different cohesion device (e.g. repetition or transition).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cohesion devices", statement: "Pronouns, repetition and transitions link ideas." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): pronoun reference — 'It' refers back to 'Exercise'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): 'It' avoids repeating 'exercise' — links sentences smoothly without redundancy.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): reader must track the referent — cohesion depends on clear antecedent.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): alternative — e.g. 'Exercise is beneficial. This activity improves health.' or 'Exercise is beneficial; moreover, it improves health.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): repetition ('this activity') or transition ('moreover') achieves cohesion differently.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Pronoun reference ('It'). (b) Avoids repetition, links sentences. (c) e.g. 'Exercise is beneficial; moreover, it improves health.'",
          },
        },
      ],
    },
    {
      id: "mll5-u3-advanced-structure",
      title: "Advanced structural techniques",
      skill: "Use sophisticated structural techniques — flashbacks, circular narratives, non-linear structure — to create complex texts.",
      lesson: {
        sections: [
          {
            heading: "Non-linear structures",
            body: "**Flashbacks** jump to past events; **flashforwards** to future. **Circular structure** ends where it began (but changed). **In medias res** starts mid-action. These create complexity — reader must piece together timeline.",
          },
          {
            heading: "Structural effects",
            body: "Non-linear structure creates **suspense** (what happens next?), **revelation** (pieces fall into place), **emphasis** (endings gain power through contrast). But it requires **skill** — confusing timelines frustrate readers.",
          },
          {
            heading: "When to use them",
            body: "Use advanced structures when they serve **purpose**: flashback for backstory, circular for thematic resonance, non-linear for mystery. Don't use for novelty — every structural choice must enhance meaning.",
          },
        ],
        keyFormulas: [
          { name: "Advanced structure", statement: "Non-linear + Purpose = Complexity. Confusion ≠ sophistication." },
        ],
        workedExample: {
          problem: "Story starts with character at funeral, then flashes back to how they met. Why?",
          solution: "In medias res + flashback — creates mystery (who died?), then explains relationship — structure serves emotional impact.",
        },
      },
      questions: [
        {
          id: "mll5-u3-advanced-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'in medias res'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ending a story" },
              { id: "b", text: "Starting in the middle of the action" },
              { id: "c", text: "A type of rhyme" },
              { id: "d", text: "A character name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "In medias res", statement: "Starting in the middle of action." }],
            steps: [{ reasoning: "Criterion B (Organizing): in medias res = middle of action — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Starting in the middle of the action",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Structure",
            author: "Written for Akademik Space",
            text: "The story begins with the protagonist in prison. Then it flashes back to how they got there. Finally, it returns to prison, where they escape.",
          },
          stem: "Identify the structural technique and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Flashback structure", statement: "Non-linear structure creates mystery and revelation." }],
            steps: [
              { reasoning: "Criterion B (Organizing): flashback — starts in prison, goes back to cause, returns to present.", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): effect — creates mystery (why in prison?), then explains (flashback), then resolves (escape) — structure builds suspense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flashback — creates mystery, explains cause, resolves — non-linear structure for suspense.",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Endings",
            author: "Written for Akademik Space",
            text: "Linear version: 'She left home. She traveled. She arrived. She was happy.'\n\nCircular version: 'She left home. She traveled. She arrived. She was home.'",
          },
          stem: "Compare these endings — how does circular structure change meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular structure", statement: "Ending where you began creates thematic resonance." }],
            steps: [
              { reasoning: "Criterion B (Organizing): linear = straightforward journey ending 'happy'; circular returns to 'home' — different place or same?", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): circular adds ambiguity — 'home' could mean physical place, emotional state, or acceptance — deeper meaning.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): structure itself creates meaning — 'she was home' echoes beginning, suggesting journey changed her understanding of home.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Circular adds ambiguity — 'home' redefined; structure creates thematic depth vs linear's straightforward 'happy'.",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the structural technique: story ends exactly where it began.", marks: 1 },
            { label: "b", prompt: "Explain one effect this structure can create.", marks: 2 },
            { label: "c", prompt: "Suggest a story where circular structure would NOT work and explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular structure", statement: "Circular = thematic resonance; not always appropriate." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): circular structure.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): effect — thematic resonance, suggests change within sameness, cyclical patterns.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): ending where began emphasizes journey/inner change while external situation repeats.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion B (Organizing): story needing resolution — e.g. mystery needing solution, journey needing destination — circular would frustrate.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion A (Analysing): explains why structure must serve purpose — not all stories suit circular form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Circular. (b) Thematic resonance/change within sameness. (c) e.g. mystery needing resolution — structure must serve purpose.",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a flashback?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ending the story early" },
              { id: "b", text: "Interrupting the present to show earlier events" },
              { id: "c", text: "A type of camera" },
              { id: "d", text: "A repeated word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Flashback", statement: "Jump to earlier events within the narrative." }],
            steps: [{ reasoning: "Criterion B (Organizing): flashback = earlier events — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Interrupting the present to show earlier events",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Structure",
            author: "Written for Akademik Space",
            text: "The story opens at the trial, flashes back to the crime, jumps forward to the verdict, then returns to the defendant's cell.",
          },
          stem: "How many non-linear structural techniques appear in this description?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Non-linear structure", statement: "Flashbacks, flashforwards and jumps disrupt chronology." }],
            steps: [{ reasoning: "Criterion B (Organizing): flashback (crime), flashforward (verdict), return (cell) — 3 non-linear moves.", marks: 1, markCode: "B" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'circular structure'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A story with no ending" },
              { id: "b", text: "A narrative that ends where it began, but changed" },
              { id: "c", text: "A story told backwards" },
              { id: "d", text: "A poem about circles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Circular structure", statement: "Ending where the story began, but transformed." }],
            steps: [{ reasoning: "Criterion B (Organizing): circular = ends where began, changed — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** A narrative that ends where it began, but changed",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Opening",
            author: "Written for Akademik Space",
            text: "'The bullet was already in the wall when she woke. Three days earlier, none of this had happened.'",
          },
          stem: "Which structural technique opens this story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chronological order" },
              { id: "b", text: "In medias res — starting mid-action, then flashing back" },
              { id: "c", text: "Circular structure" },
              { id: "d", text: "A list" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "In medias res", statement: "Starting mid-action creates immediate tension." }],
            steps: [{ reasoning: "Criterion B (Organizing): opens with consequence ('bullet in wall'), then 'three days earlier' = in medias res + flashback — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** In medias res — starting mid-action, then flashing back",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When should a writer use non-linear structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always — it is always better" },
              { id: "b", text: "When it serves a purpose — mystery, revelation, thematic resonance — not for novelty alone" },
              { id: "c", text: "Never — linear is always best" },
              { id: "d", text: "Only in poems" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Structural purpose", statement: "Advanced structure must enhance meaning, not confuse." }],
            steps: [{ reasoning: "Criterion B (Organizing): use when purposeful — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** When it serves a purpose — mystery, revelation, thematic resonance",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Timeline",
            author: "Written for Akademik Space",
            text: "Present: she testifies. Flashback 1: the argument. Flashback 2: the first meeting. Present: the verdict.",
          },
          stem: "How many time periods are represented in this structure?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Timeline", statement: "Present and past frames create non-linear structure." }],
            steps: [{ reasoning: "Criterion B (Organizing): present (testifies/verdict) + past (argument/meeting) — 2 time periods.", marks: 1, markCode: "B" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Narrative",
            author: "Written for Akademik Space",
            text: "'She signed the papers. Later — or was it earlier? — she remembered signing them the first time. Now she signed again, and the pen felt heavier than memory.'",
          },
          stem: "Analyse the non-linear structure — what effect does the uncertain timeline create?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Non-linear ambiguity", statement: "Uncertain chronology creates psychological complexity." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Later — or was it earlier?' — deliberate uncertainty about sequence mirrors her confused mental state.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): repeated signing suggests memory loops — trauma or obsession; structure enacts her psychology.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'heavier than memory' — the pen's weight exceeds recollection; non-linearity deepens the emotional impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Uncertain timeline mirrors psychological confusion — structure enacts memory loops and trauma.",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is chronological order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Telling events out of order" },
              { id: "b", text: "Telling events in the order they happened" },
              { id: "c", text: "Starting with the ending" },
              { id: "d", text: "A type of rhyme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Chronological order", statement: "Events in the order they occurred." }],
            steps: [{ reasoning: "Criterion B (Organizing): chronological = time order — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Telling events in the order they happened",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the structural technique: a story ends on the same image it began with, but everything has changed.", marks: 1 },
            { label: "b", prompt: "Explain one effect this structure creates.", marks: 2 },
            { label: "c", prompt: "Suggest a story where circular structure would be inappropriate and explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular structure", statement: "Circular = thematic resonance; not always appropriate." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): circular structure — ends where began, transformed.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): effect — suggests cyclical patterns, inner change within sameness, thematic resonance.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the unchanged image highlights how the character's perception changed — structure carries meaning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion B (Organizing): e.g. a detective story needing a clear solution — circular ending would frustrate resolution.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion A (Analysing): structure must serve purpose — genres needing closure don't suit circular form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Circular. (b) Cyclical patterns, inner change, thematic resonance. (c) e.g. detective story needing resolution.",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Text",
            author: "Written for Akademik Space",
            text: "The novel uses a flashback in chapter 2, a flashforward in chapter 5, and a circular ending.",
          },
          stem: "How many advanced structural techniques are named?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Structural techniques", statement: "Flashback, flashforward, circular = advanced structures." }],
            steps: [{ reasoning: "Criterion B (Organizing): flashback + flashforward + circular ending — 3 techniques.", marks: 1, markCode: "B" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Two Stories",
            author: "Written for Akademik Space",
            text: "Story A: chronological, clear timeline, easy to follow.\n\nStory B: jumps between three timelines with no signposts — readers are confused about what's happening.",
          },
          stem: "Which story uses non-linear structure effectively?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Story A — linear is always better" },
              { id: "b", text: "Neither — A is linear, B is confusing without purpose; effective non-linearity needs clarity" },
              { id: "c", text: "Story B — confusing is always sophisticated" },
              { id: "d", text: "Both equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Structural clarity", statement: "Confusion ≠ sophistication; non-linear needs purpose and clarity." }],
            steps: [{ reasoning: "Criterion B (Organizing): A linear, B confusing without signposts — neither shows effective non-linear craft — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Neither — A is linear, B is confusing without purpose",
          },
        },
        {
          id: "mll5-u3-advanced-structure-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the structural technique: 'The story ends with the same door closing that it opened with.'", marks: 1 },
            { label: "b", prompt: "Explain one effect this structure can create.", marks: 2 },
            { label: "c", prompt: "Suggest a genre where this structure would NOT work and explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular structure", statement: "Circular = thematic resonance; not always appropriate." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): circular structure — ends where began.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): effect — suggests cyclical patterns, change within sameness, thematic closure.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the repeated image gains new meaning through what happened between — structure carries theme.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion B (Organizing): e.g. a mystery needing a clear solution — circular ending would frustrate closure.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion A (Analysing): structure must serve purpose — genres needing resolution don't suit circular form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Circular. (b) Cyclical change, thematic closure. (c) e.g. mystery needing resolution — structure must serve purpose.",
          },
        },
      ],
    },
  ],
};
