import type { Lesson } from "../../../types.ts";

const argumentExtract = {
  title: "Should School Phones Be Banned?",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Every break time in our school now looks the same: thirty students in a corridor, thirty faces lit from below by screens. Nobody talks. Nobody looks up. The head teacher says phones are 'a distraction', but the problem is not the phones — it is what we have stopped doing while holding them.\n\nSupporters of a ban say phones damage concentration and sleep. There is evidence for this: studies show students who sleep with phones in their rooms get less rest. But banning phones treats the symptom. The real question is why so many of us choose a screen over the person sitting next to us.\n\nI am not saying phones are harmless. I am saying a ban would make us feel virtuous without making us smarter. We need rules about when phones are used — but we also need to remember how to talk to each other again. That is the harder lesson, and no policy can teach it for us.",
};

const biographyExtract = {
  title: "The Woman Who Mapped the Wind",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "In 1884, a young woman named Sophia Snow walked into the US Weather Bureau in Washington and asked for a job. Her qualifications were unusual: she had spent years recording wind and cloud patterns in her notebook, drawn by hand, because she had no instruments worth the name.\n\nThe Bureau hired her as a 'computer' — the job title then given to people, mostly women, who performed calculations. Sophia spent her days reducing observations to numbers and her evenings drawing the weather maps that ships' captains would use to avoid storms. Her maps were so accurate that captains began requesting them by name.\n\nSophia never married, never travelled far from Washington, and never owned a telescope. Yet her wind maps saved lives for thirty years. When she died in 1927, the shipping journals called her 'the woman who read the sky' — a title she would probably have found rather silly. She had simply noticed things other people walked past.",
};

export const lesson22: Lesson = {
  id: "cile-u2-lesson-2-2",
  code: "2-2",
  title: "Sentence structure and style",
  goal: "I CAN analyse how sentence length, variety, openings and rhetorical devices shape meaning and style.",
  standards: ["0861 Reading: sentence-level analysis"],
  vocabulary: [
    { term: "Sentence variety", definition: "Mixing short and long sentences to control pace and emphasis." },
    { term: "Rhetorical question", definition: "A question asked for effect, not expecting an answer." },
    { term: "Emotive language", definition: "Words chosen to provoke feeling rather than simply inform." },
    { term: "Rule of three", definition: "Grouping items in threes for rhythm and emphasis ('we came, we saw, we conquered')." },
    { term: "Repetition", definition: "Repeating a word or phrase for emphasis or rhythm." },
    { term: "Pace", definition: "The speed at which a text seems to move, controlled by sentence length." },
  ],
  concepts: [
    {
      id: "cile-u2-sentence-structure",
      title: "Sentence structure and pace",
      skill: "Analyse how sentence length, openings and structure control pace, emphasis and reader response.",
      lesson: {
        sections: [
          {
            heading: "Sentence length and pace",
            body: "- **Short sentences**: punchy, urgent, dramatic — 'The storm hit.'\n- **Long sentences**: flowing, descriptive, cumulative — build detail before the payoff.\n- Writers control pace deliberately: a long build-up followed by a short sentence creates impact.",
          },
          {
            heading: "Openings and endings",
            body: "- **Opening sentences** establish voice and hook: a question, a command, a shocking fact.\n- **Final sentences** deliver the point or twist the knife: 'That is the harder lesson, and no policy can teach it for us.'",
          },
          {
            heading: "Rhetorical devices at sentence level",
            body: "- **Rhetorical question**: 'why so many of us choose a screen over the person sitting next to us' — involves the reader.\n- **Rule of three**: lists in threes feel complete and memorable.\n- **Repetition**: 'We need rules... we also need...' — reinforces the argument.",
          },
        ],
        keyFormulas: [
          { name: "Structure → effect", statement: "Identify the structural choice, describe its rhythm, then state the effect on pace, emphasis or reader response." },
        ],
        workedExample: {
          problem: "'Banning phones treats the symptom.' Why is this short sentence effective after longer ones?",
          solution: "The short sentence lands like a verdict after the longer explanation. It is emphatic and memorable — the brevity itself signals a blunt truth.",
        },
      },
      questions: [
        {
          id: "cile-u2-sent-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "What is the effect of the short sentence 'Banning phones treats the symptom'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It confuses the reader" },
              { id: "b", text: "It creates emphasis and finality" },
              { id: "c", text: "It introduces a new topic slowly" },
              { id: "d", text: "It summarises the whole text" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Short sentence emphasis", statement: "Short sentences after longer ones land with force." },
            ],
            steps: [
              { reasoning: "The bluntness of the short sentence gives it verdict-like force.", working: "\\text{verdict-like}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** It creates emphasis and finality",
            commonErrors: ["Choosing (a) — the sentence is clear, not confusing."],
          },
        },
        {
          id: "cile-u2-sent-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: argumentExtract,
          stem: "Identify one rhetorical device in 'The real question is why so many of us choose a screen over the person sitting next to us.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical question", statement: "A question asked for effect, drawing the reader into the argument." },
            ],
            steps: [
              { reasoning: "The sentence poses a 'why' question that is not meant to be answered literally.", working: "\\text{'why' question}", marks: 1, markCode: "AO2" },
              { reasoning: "It challenges the reader to examine their own behaviour.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical question — it forces the reader to confront their own screen habits rather than passively receive information.",
            commonErrors: ["Calling it a factual question or failing to explain its persuasive function."],
          },
        },
        {
          id: "cile-u2-sent-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: argumentExtract,
          stem: "Analyse how sentence variety controls the pace and emphasis of the argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety", statement: "Mixing long and short sentences controls pace; short sentences emphasise." },
            ],
            steps: [
              { reasoning: "Evidence: long sentences build ideas ('The head teacher says phones are...').", working: "\\text{long build-up}", marks: 1, markCode: "AO2" },
              { reasoning: "Short sentences punctuate key points ('Banning phones treats the symptom').", working: "\\text{short verdict}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: pace slows for explanation, accelerates for conclusions — creates rhythm.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: variety keeps the argument engaging and makes points memorable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The alternation of long explanatory sentences and short verdicts controls pace — slow for reasoning, fast for conclusions — creating rhythm and making key points land with emphasis.",
            commonErrors: ["Describing sentence length without linking it to pace or emphasis."],
          },
        },
        {
          id: "cile-u2-sent-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: argumentExtract,
          stem: "The extract is a short argument against banning school phones.",
          parts: [
            { label: "a", prompt: "Quote the opening sentence and explain its effect on the reader.", marks: 2 },
            { label: "b", prompt: "Identify two rhetorical devices used in the middle paragraphs.", marks: 2 },
            { label: "c", prompt: "Explain the effect of the final sentence's length and wording.", marks: 2 },
            { label: "d", prompt: "How does the writer's sentence-level style support the argument's purpose?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Style serves purpose", statement: "Sentence choices must be linked to persuasive purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Opening: 'Every break time in our school now looks the same: thirty students... thirty faces lit from below by screens.'", working: "\\text{thirty/thirty}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Effect: vivid, slightly alarming image hooks the reader immediately.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Device 1: rhetorical question ('why so many of us choose...').", working: "\\text{rhetorical question}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Device 2: rule of three / repetition ('We need rules... we also need...').", working: "\\text{repetition}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Final sentence is long and conclusive — a challenge, not a summary.", working: "\\text{long, conclusive}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "'no policy can teach it for us' places responsibility on the reader — persuasive push.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Style mirrors argument: image hooks, questions involve, verdicts emphasise, challenge concludes.", working: "\\text{style mirrors argument}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The style itself performs persuasion — it does not just state a view.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion linking technique to purpose.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) the 'thirty/thirty' image shocks and hooks (b) rhetorical question; repetition/'we need' (c) long conclusive challenge places responsibility on the reader (d) style performs persuasion — hooks, involves, emphasises, concludes",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Quotation plus accurate effect.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two devices correctly identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Final sentence's effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Style-purpose link argued convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial link.", part: "d" },
            ],
            commonErrors: ["In (d) listing techniques without connecting them to persuasion."],
          },
        },
      ],
    },
    {
      id: "cile-u2-word-choice",
      title: "Word choice and connotation",
      skill: "Analyse how a writer's word choices carry connotation and reveal attitude.",
      lesson: {
        sections: [
          {
            heading: "Denotation vs connotation",
            body: "- **Denotation**: the dictionary meaning — 'slim' and 'skinny' both mean thin.\n- **Connotation**: the feelings and associations a word carries — 'slim' is positive, 'skinny' is negative.\n- Writers choose words for their connotations to shape the reader's attitude.",
          },
          {
            heading: "Field of associated words",
            body: "Words cluster around themes: a writer describing a storm might choose 'howled', 'screeched', 'ferocious' — all carrying menace. Replacing neutral words with loaded ones reveals the writer's stance.",
          },
          {
            heading: "Analysing word choice",
            body: "1. Quote the word or phrase.\n2. Give its denotation (literal meaning).\n3. Identify its connotation (feelings/associations).\n4. State how it shapes the reader's view of the subject.",
          },
        ],
        keyFormulas: [
          { name: "Word → connotation → attitude", statement: "The connotation of a word reveals the writer's attitude towards what it describes." },
        ],
        workedExample: {
          problem: "Biography extract: 'the woman who read the sky'. Connotation of 'read'?",
          solution: "Denotation: interpreted. Connotation: skill, patience, almost intimacy — she understood the sky the way a scholar reads a text. It dignifies her informal skill.",
        },
      },
      questions: [
        {
          id: "cile-u2-word-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "In 'thirty faces lit from below by screens', what feeling does 'lit from below' create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Warmth and comfort" },
              { id: "b", text: "Something slightly sinister or unnatural" },
              { id: "c", text: "Professional efficiency" },
              { id: "d", text: "Boredom" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "Under-lighting is associated with horror and the unnatural — it makes the scene feel unsettling." },
            ],
            steps: [
              { reasoning: "Faces lit from below is a classic unsettling image.", working: "\\text{under-lighting}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Something slightly sinister or unnatural",
            commonErrors: ["Choosing (a) — under-lighting suggests the opposite of warmth."],
          },
        },
        {
          id: "cile-u2-word-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: biographyExtract,
          stem: "Explain the connotation of calling Sophia a 'computer' in the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Historical term", statement: "'Computer' originally meant a person who computed; the word now means a machine." },
            ],
            steps: [
              { reasoning: "Denotation: her job title at the Weather Bureau.", working: "\\text{job title}", marks: 1, markCode: "AO2" },
              { reasoning: "Connotation/irony: today 'computer' means a machine — her skilled human work is now done by devices, making her achievement quietly poignant.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It was her actual job title, but today the word means a machine — the irony dignifies her human skill and hints that her work is now done by computers.",
            commonErrors: ["Saying 'computer' is an insult — it was a legitimate title."],
          },
        },
        {
          id: "cile-u2-word-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: argumentExtract,
          stem: "Analyse how the writer's word choices in the final paragraph reveal their attitude to the phone ban.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "Words like 'virtue', 'symptom', 'harder lesson' carry judgement." },
            ],
            steps: [
              { reasoning: "'feel virtuous' — implies the ban offers empty moral comfort, not real change.", working: "\\text{'virtue' = empty comfort}", marks: 1, markCode: "AO2" },
              { reasoning: "'treats the symptom' — medical metaphor frames the ban as superficial.", working: "\\text{'symptom' = superficial}", marks: 1, markCode: "AO2" },
              { reasoning: "'the harder lesson' — implies real change requires effort the ban avoids.", working: "\\text{'harder lesson'}", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: the writer sees the ban as well-meaning but inadequate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Virtuous', 'symptom' and 'harder lesson' frame the ban as feel-good but superficial — the writer respects the intention but doubts the solution.",
            commonErrors: ["Listing words without explaining their connotative effect."],
          },
        },
        {
          id: "cile-u2-word-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: biographyExtract,
          stem: "The biography uses carefully chosen words to shape our view of Sophia.",
          parts: [
            { label: "a", prompt: "Quote two words or phrases with positive connotations.", marks: 2 },
            { label: "b", prompt: "Explain how 'saved lives' shapes our view of her work.", marks: 2 },
            { label: "c", prompt: "What is the effect of 'a title she would probably have found rather silly'?", marks: 2 },
            { label: "d", prompt: "How do the word choices create a tone that is admiring but not sentimental?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation and tone", statement: "Positive words build admiration; ironic or deflating phrases keep it honest." },
            ],
            steps: [
              { part: "a", reasoning: "Positive phrases: 'saved lives', 'read the sky', 'by name'.", working: "\\text{'saved lives'}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate quotations.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'Saved lives' elevates her maps from data to moral achievement.", working: "\\text{moral achievement}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It makes her skill consequential, not merely technical.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It deflates the heroic title — she was modest, not self-important.", working: "\\text{modest}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Keeps the admiration honest by showing she would reject praise.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Admiring words ('saved lives', 'read the sky') build respect.", working: "\\text{admiring}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Deflating details ('rather silly', 'never owned a telescope') prevent sentimentality.", working: "\\text{deflating}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Balance creates a believable, respectful portrait.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'saved lives', 'read the sky', 'by name' (b) elevates her maps to moral achievement (c) deflates the title, showing modesty (d) admiration balanced by deflating detail = honest respect",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate quotations of positive language.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "'Saved lives' effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Effect explained with modesty link.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Tone analysed convincingly through word choice.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial analysis.", part: "d" },
            ],
            commonErrors: ["In (d) describing tone without referencing specific word choices."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u2-style-notes",
      title: "Sentence style and word choice — revision notes",
      summary: "Sentence variety, rhetorical devices, connotation and how they serve purpose.",
      sections: [
        {
          heading: "Sentence level",
          body: "Short sentences = emphasis. Long sentences = flow. Openings hook; endings land the point. Rhetorical questions involve the reader; repetition reinforces.",
        },
        {
          heading: "Word level",
          body: "Denotation = dictionary meaning. Connotation = feelings/associations. Writers choose words for connotation to reveal attitude — always analyse the feeling, not just the meaning.",
        },
        {
          heading: "Exam technique",
          body: "Quote → name technique → explain effect → link to purpose/tone. Never just identify; always analyse.",
        },
      ],
    },
  ],
};
