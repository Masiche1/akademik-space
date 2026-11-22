import type { Lesson } from "../../../types.ts";

export const lesson29: Lesson = {
  id: "cipe-u2-lesson-2-9",
  code: "2-9",
  title: "Stage 6 — Imaginative and Discussion Writing",
  goal: "I CAN write imaginative stories and balanced discussion texts.",
  standards: ["Cambridge Primary English 0058 Stage 6: writing",
  "Cambridge Primary English 0058 framework substrands: 6Wc, 6SLg, 6SLr"],
  stage: 6,
  vocabulary: [
    { term: "Imaginative writing", definition: "Creating stories and descriptions from your imagination." },
    { term: "Discussion text", definition: "Writing that explores a topic from different viewpoints." },
    { term: "Balanced argument", definition: "Presenting both sides of an issue fairly." },
    { term: "Show, don't tell", definition: "Using detail and action instead of stating facts." },
    { term: "Conclusion", definition: "Final paragraph that sums up or gives your view." },
  ],
  concepts: [
    {
      id: "cipe-u2-s9-imaginative-discussion",
      title: "Imaginative writing and discussion",
      skill: "Craft imaginative narratives and balanced discussion texts at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Imaginative writing",
            body: "Build story worlds with vivid description — use the five senses, show character through action and speech, and control pace (slow for tension, fast for excitement). Plan first: characters, setting, problem, solution. Show don't tell — 'Her hands shook' beats 'She was nervous'.",
          },
          {
            heading: "Discussion writing",
            body: "A discussion text explores an issue fairly: introduce the topic, present arguments for and against, acknowledge counter-arguments, and conclude with a balanced judgement or your own reasoned view. Use connectives like 'however', 'on the other hand', 'therefore'.",
          },
        ],
        keyFormulas: [
          { name: "Story plan", statement: "Characters → setting → problem → solution" },
          { name: "Discussion", statement: "Topic → for/against → counter-arguments → conclusion" },
        ],
        workedExample: {
          problem: "Turn 'The boy was scared' into showing, not telling.",
          solution: "'The boy's knees knocked together as he peered into the dark hallway.'",
        },
      },
      questions: [
        {
          id: "cipe-u2-id-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'show, don't tell' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Write shorter sentences" },
            { id: "b", text: "Only write dialogue" },
            { id: "c", text: "Describe everything" },
            { id: "d", text: "Use action and detail instead of stating emotions" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Show don't tell", statement: "Action/detail conveys feeling." }],
            steps: [{ reasoning: "Showing uses description instead of naming the emotion.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Use detail/action, not direct statements",
          },
        },
        {
          id: "cipe-u2-id-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should a discussion text include to be balanced?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Balanced argument", statement: "Both viewpoints presented fairly." }],
            steps: [
              { reasoning: "Arguments for AND against the issue.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Arguments for and against",
          },
        },
        {
          id: "cipe-u2-id-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the better opening for a story? 'It was a dark night.' or 'Rain lashed the windows as Mara counted her heartbeats.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Vivid openings", statement: "Sensory detail engages the reader." }],
            steps: [
              { reasoning: "Second uses imagery (rain, heartbeats) and character.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates mood and tension.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer identifies the stronger opening.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Rain lashed the windows…' — vivid and engaging",
          },
        },
        {
          id: "cipe-u2-id-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a balanced concluding sentence for a discussion on 'Should homework be abolished?'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced conclusion", statement: "Summarise both sides and give reasoned view." }],
            steps: [
              { reasoning: "Acknowledges both sides.", marks: 1, markCode: "AO2" },
              { reasoning: "Gives a reasoned judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal, balanced tone.", marks: 1, markCode: "AO2" },
              { reasoning: "Coherent sentence.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'While homework can consolidate learning, a balanced approach with less repetitive tasks would serve students better.'",
          },
        },
        {
          id: "cipe-u2-id-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What four things should you plan before writing a story?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Characters, setting, problem, solution" },
            { id: "b", text: "Spelling, grammar, punctuation, tense" },
            { id: "c", text: "Colour, size, shape, weight" },
            { id: "d", text: "Title, cover, pages, price" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story planning", statement: "Plan characters, setting, problem, solution." }],
            steps: [{ reasoning: "A story plan covers characters, setting, problem and solution.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Characters, setting, problem, solution",
          },
        },
        {
          id: "cipe-u2-id-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To make a discussion text 'balanced', you must present…",
          response: { type: "mcq", choices: [
            { id: "a", text: "arguments for and against the issue" },
            { id: "b", text: "a story" },
            { id: "c", text: "only your own view" },
            { id: "d", text: "only facts" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Balanced argument", statement: "Both viewpoints presented fairly." }],
            steps: [{ reasoning: "Balance means covering both sides.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Arguments for and against",
          },
        },
        {
          id: "cipe-u2-id-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many senses can imaginative writers use to build description? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Five senses", statement: "Sight, sound, smell, taste, touch." }],
            steps: [
              { reasoning: "Five senses.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u2-id-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many words are in the sentence 'Her hands shook with fear'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "Her-hands-shook-with-fear = 5 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u2-id-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence SHOWS a character's nervousness rather than telling it?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She was nervous." },
            { id: "b", text: "Nervous is a feeling." },
            { id: "c", text: "She felt scared." },
            { id: "d", text: "Her hands trembled and she kept checking the door." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Action and detail convey emotion." }],
            steps: [{ reasoning: "Trembling hands and checking the door show nervousness through action.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Her hands trembled and she kept checking the door.",
          },
        },
        {
          id: "cipe-u2-id-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Turn 'telling' into 'showing': rewrite 'The boy was angry' using action or detail.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Use action/detail instead of naming emotion." }],
            steps: [
              { reasoning: "An action or detail is used (e.g. fists clenched, voice raised).", marks: 1, markCode: "AO2" },
              { reasoning: "The emotion is implied, not stated.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The boy clenched his fists and stamped his foot.'",
          },
        },
        {
          id: "cipe-u2-id-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which connective best introduces a counter-argument in a discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "so" },
            { id: "b", text: "and" },
            { id: "c", text: "however" },
            { id: "d", text: "because" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Connectives", statement: "however signals contrast." }],
            steps: [{ reasoning: "'however' introduces a different viewpoint.", marks: 1, markCode: "AO2" }],
            finalAnswer: "however",
          },
        },
        {
          id: "cipe-u2-id-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one 'against' argument for the discussion topic 'Should school start later?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Counter-argument", statement: "Present the opposing view fairly." }],
            steps: [
              { reasoning: "The sentence gives a reason against later starts.", marks: 1, markCode: "AO2" },
              { reasoning: "It is fair and reasoned, not just 'it is bad'.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'On the other hand, a later start would mean school finishes too late for after-school activities.'",
          },
        },
        {
          id: "cipe-u2-id-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many connectives are in this sentence: 'We should save water because droughts are common and it is cheap.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Connectives", statement: "Words that join ideas." }],
            steps: [
              { reasoning: "'because' and 'and' are connectives = 2.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u2-id-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do writers control the pace of a story (slow vs fast sentences)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To confuse the reader" },
            { id: "b", text: "To make the story longer" },
            { id: "c", text: "To create tension or excitement at the right moments" },
            { id: "d", text: "It does not matter" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace", statement: "Sentence rhythm controls tension." }],
            steps: [{ reasoning: "Slow sentences build tension; fast ones create excitement.", marks: 1, markCode: "AO2" }],
            finalAnswer: "To create tension or excitement at the right moments",
          },
        },
        {
          id: "cipe-u2-id-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a short story: give the main character, the setting, the problem and the solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story planning", statement: "Characters → setting → problem → solution." }],
            steps: [
              { reasoning: "A main character is named or described.", marks: 1, markCode: "AO3" },
              { reasoning: "The setting (where/when) is given.", marks: 1, markCode: "AO3" },
              { reasoning: "A problem or challenge is planned.", marks: 1, markCode: "AO3" },
              { reasoning: "A solution or resolution is planned.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. Character: a girl; Setting: a lighthouse; Problem: storm cuts the power; Solution: she lights the lamp by hand",
          },
        },
        {
          id: "cipe-u2-id-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a balanced paragraph (3-4 sentences) discussing 'Should children have phones at school?' covering both sides.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discussion writing", statement: "For and against, connectives, balanced view." }],
            steps: [
              { reasoning: "Topic introduced clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "At least one 'for' argument given.", marks: 1, markCode: "AO2" },
              { reasoning: "At least one 'against' argument given.", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives link the viewpoints.", marks: 1, markCode: "AO2" },
              { reasoning: "Accurate punctuation and spelling.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Phones can help children contact parents in an emergency. However, they can also distract from learning. A balanced approach would allow phones for emergencies only.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-id-notes",
      title: "Imaginative and discussion writing — revision notes",
      summary: "Stories: plan, show don't tell, sensory detail; discussions: both sides + conclusion.",
      sections: [
        { heading: "Imaginative", body: "Plan characters/problem/solution; use senses and action; control pace." },
        { heading: "Discussion", body: "For + against + counter-arguments + balanced conclusion." },
      ],
    },
  ],
};
