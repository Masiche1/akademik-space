import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cile-u5-lesson-5-3",
  code: "5-3",
  title: "Expository writing: cohesion and paragraphing",
  goal: "I CAN organise ideas into coherent paragraphs using cohesive devices, signposting and logical flow.",
  standards: ["0861 Writing: cohesion and organisation"],
  vocabulary: [
    { term: "Cohesion", definition: "The way ideas connect within and between sentences and paragraphs." },
    { term: "Cohesive device", definition: "Words or phrases that link ideas — pronouns, connectives, repetition, synonyms." },
    { term: "Signposting", definition: "Language that guides the reader — 'first', 'in contrast', 'as a result'." },
    { term: "Topic sentence", definition: "The sentence stating a paragraph's main idea." },
    { term: "Logical flow", definition: "The order in which ideas develop — cause-effect, problem-solution, chronological." },
    { term: "Transition", definition: "The move from one idea or paragraph to the next." },
  ],
  concepts: [
    {
      id: "cile-u5-cohesion",
      title: "Cohesion and paragraphing",
      skill: "Use cohesive devices and paragraph structure to create logical, readable text.",
      lesson: {
        sections: [
          {
            heading: "Cohesive devices",
            body: "- **Connectives**: 'however', 'therefore', 'for example' — signal relationships.\n- **Pronouns**: 'it', 'they', 'this' — avoid repetition.\n- **Repetition/synonyms**: repeat key terms or use synonyms for variety.\n- **Reference**: 'the former', 'the latter' — link back to earlier ideas.",
          },
          {
            heading: "Paragraph structure",
            body: "- **Topic sentence**: states the paragraph's main idea.\n- **Supporting sentences**: evidence, explanation, examples.\n- **Linking sentence**: connects to the next paragraph.\n\nOne paragraph = one idea. If a paragraph has two ideas, split it.",
          },
          {
            heading: "Signposting and flow",
            body: "- **Signposts**: 'In addition', 'On the other hand', 'As a result' — tell the reader where the argument is going.\n- **Logical flow**: cause-effect, problem-solution, chronological — choose the order that makes sense.\n- **Transitions**: the last sentence of a paragraph should connect to the first of the next.",
          },
        ],
        keyFormulas: [
          { name: "Cohesion toolkit", statement: "Connectives + pronouns + repetition + signposting = text that flows logically." },
        ],
        workedExample: {
          problem: "Two disconnected sentences: 'Solar power is clean. It is expensive.' Improve cohesion.",
          solution: "'Solar power is clean; however, it remains expensive.' The connective 'however' signals contrast — the relationship is now explicit.",
        },
      },
      questions: [
        {
          id: "cile-u5-coh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word best connects two contrasting ideas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because" },
              { id: "b", text: "However" },
              { id: "c", text: "First" },
              { id: "d", text: "For example" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contrastive connective", statement: "'However' signals contrast between ideas." },
            ],
            steps: [
              { reasoning: "'However' marks opposition or contrast.", working: "\\text{'however'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** However",
            commonErrors: ["Choosing 'because' — that signals cause, not contrast."],
          },
        },
        {
          id: "cile-u5-coh-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a topic sentence important in a paragraph?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "It states the paragraph's main idea, guiding the reader." },
            ],
            steps: [
              { reasoning: "It tells the reader what the paragraph is about before details begin.", working: "\\text{guide}", marks: 1, markCode: "AO2" },
              { reasoning: "It keeps the paragraph focused — all sentences support it.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The topic sentence states the paragraph's main idea upfront, guiding the reader and keeping all supporting sentences focused on one point.",
            commonErrors: ["Saying 'it is the first sentence' — position matters less than function."],
          },
        },
        {
          id: "cile-u5-coh-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student's paragraph reads: 'Solar power is clean. Solar power is expensive. Solar power is intermittent. Solar power is growing.' Improve the cohesion by varying sentence structure and adding connectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cohesion", statement: "Vary structure, use connectives, avoid repetitive subject-first sentences." },
            ],
            steps: [
              { reasoning: "Problem: repetitive 'Solar power is...' — monotonous.", working: "\\text{repetitive}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: vary structure — 'Although clean, solar power remains expensive; moreover, it is intermittent. Despite this, adoption is growing.'", working: "\\text{varied}", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives signal relationships: contrast ('although'), addition ('moreover'), concession ('despite').", working: "\\text{connectives}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: flows logically, easier to read.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Although clean, solar power remains expensive and intermittent; despite this, adoption continues to grow.' — varied structure and connectives create logical flow.",
            commonErrors: ["Just adding 'and' between sentences — cohesion requires varied connectives and structure."],
          },
        },
        {
          id: "cile-u5-coh-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are organising a multi-paragraph explanation of a topic.",
          parts: [
            { label: "a", prompt: "Write a topic sentence for one paragraph.", marks: 2 },
            { label: "b", prompt: "Write two sentences that support it with cohesive devices.", marks: 3 },
            { label: "c", prompt: "Write a linking sentence to the next paragraph.", marks: 2 },
            { label: "d", prompt: "Explain how your paragraphing guides the reader.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paragraph cohesion", statement: "Topic sentence + supporting detail + linking sentence = coherent paragraph." },
            ],
            steps: [
              { part: "a", reasoning: "Topic sentence states one clear idea.", working: "\\text{topic}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Sentence is focused and specific.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Two supporting sentences with evidence/explanation.", working: "\\text{support}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Cohesive devices used (connectives, pronouns).", working: "\\text{cohesion}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear and accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Linking sentence connects to next idea.", working: "\\text{link}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Transition is logical.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Explanation of how paragraphing guides reader.", working: "\\text{guidance}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate and clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) clear topic sentence (b) cohesive supporting sentences (c) logical linking sentence (d) paragraphing explained",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear topic sentence.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Cohesive, supportive sentences.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Logical transition.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Guidance explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (b) adding facts without cohesive devices — cohesion is about connection, not just content."],
          },
        },
      ],
    },
    {
      id: "cile-u5-logical-flow",
      title: "Logical organisation",
      skill: "Organise ideas using logical patterns — cause-effect, problem-solution, chronological — for clarity.",
      lesson: {
        sections: [
          {
            heading: "Logical patterns",
            body: "- **Cause-effect**: why something happens → what it causes. 'Because X, therefore Y.'\n- **Problem-solution**: identify problem → propose solution → evaluate.\n- **Chronological**: steps in time order.\n- **Compare-contrast**: similarities and differences side by side.\n- **General-specific**: broad idea → supporting details.",
          },
          {
            heading: "Choosing the right pattern",
            body: "The pattern should match the content:\n\n- Explaining a process → chronological.\n- Arguing a point → problem-solution or cause-effect.\n- Comparing options → compare-contrast.\n- Teaching a concept → general-specific.",
          },
          {
            heading: "Signalling the pattern",
            body: "Tell the reader which pattern you are using:\n\n- 'First... then... finally' signals chronological.\n- 'The problem is... one solution...' signals problem-solution.\n- 'On one hand... on the other' signals contrast.\n\nClear signposting prevents confusion.",
          },
        ],
        keyFormulas: [
          { name: "Logical flow", statement: "Choose the pattern that matches the content, then signal it clearly with connectives and structure." },
        ],
        workedExample: {
          problem: "Organise: 'Schools should start later. Teenagers need sleep. Sleep improves learning. Some schools already do this.'",
          solution: "Problem-solution: 'The problem is early start times conflict with adolescent sleep needs. Schools that start later report better outcomes. Therefore, schools should delay start times.' — problem → evidence → conclusion.",
        },
      },
      questions: [
        {
          id: "cile-u5-flow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pattern fits 'how to make bread' best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem-solution" },
              { id: "b", text: "Chronological" },
              { id: "c", text: "Compare-contrast" },
              { id: "d", text: "Cause-effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological", statement: "Processes are explained in time order." },
            ],
            steps: [
              { reasoning: "Making bread is a sequence of steps in time.", working: "\\text{steps}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Chronological",
            commonErrors: ["Choosing cause-effect — the recipe is sequential, not causal."],
          },
        },
        {
          id: "cile-u5-flow-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why 'problem-solution' is an effective structure for persuasive writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Problem-solution", statement: "It mirrors how readers think — identify the problem, then want the solution." },
            ],
            steps: [
              { reasoning: "It establishes a need before offering the answer — builds logical momentum.", working: "\\text{need → answer}", marks: 1, markCode: "AO2" },
              { reasoning: "Readers are more persuaded when they see the problem is real.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Problem-solution mirrors natural reasoning — establishing the problem first makes readers receptive to the solution, building logical persuasion.",
            commonErrors: ["Saying 'it is easier to write' — the effectiveness is psychological, not practical."],
          },
        },
        {
          id: "cile-u5-flow-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes an argument with no clear logical pattern — ideas jump randomly. Explain how signposting would fix this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Signposting", statement: "Connectives and structural cues tell readers the logical relationship between ideas." },
            ],
            steps: [
              { reasoning: "Problem: random order — reader cannot follow the logic.", working: "\\text{random}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: choose a pattern (problem-solution, cause-effect) and signal it.", working: "\\text{pattern+signal}", marks: 1, markCode: "AO2" },
              { reasoning: "Use connectives: 'therefore', 'however', 'as a result' to mark relationships.", working: "\\text{connectives}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: reader can follow the argument's logic easily.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Signposting — choosing a logical pattern and marking it with connectives ('therefore', 'however') — lets readers follow the argument's reasoning instead of guessing at random jumps.",
            commonErrors: ["Adding transitions without choosing an underlying pattern — signposts need a logical structure to signal."],
          },
        },
        {
          id: "cile-u5-flow-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are organising a written explanation or argument on a topic of your choice.",
          parts: [
            { label: "a", prompt: "Identify the logical pattern that best fits your content.", marks: 2 },
            { label: "b", prompt: "Justify why this pattern suits the content.", marks: 2 },
            { label: "c", prompt: "Write three signposting phrases you would use.", marks: 2 },
            { label: "d", prompt: "Explain how the pattern guides the reader's understanding.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Logical organisation", statement: "Pattern must match content; signposting must be explicit." },
            ],
            steps: [
              { part: "a", reasoning: "Pattern identified clearly.", working: "\\text{pattern}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Pattern is appropriate.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Justification links pattern to content type.", working: "\\text{justification}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Reasoning is sound.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Three appropriate signposting phrases.", working: "\\text{signposts}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Phrases match the pattern.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "How pattern guides understanding explained.", working: "\\text{guidance}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Reader experience addressed.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) appropriate pattern (b) justified choice (c) three signposts (d) reader guidance explained",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate pattern.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Sound justification.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate signposts.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Reader guidance explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (c) listing connectives without matching them to the chosen pattern."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u5-cohesion-flow-notes",
      title: "Cohesion and logical flow — revision notes",
      summary: "Cohesive devices, paragraph structure, signposting and logical patterns.",
      sections: [
        {
          heading: "Cohesion",
          body: "Connectives, pronouns, repetition, reference. Topic sentence + support + link = coherent paragraph. One idea per paragraph.",
        },
        {
          heading: "Logical flow",
          body: "Cause-effect, problem-solution, chronological, compare-contrast, general-specific. Choose pattern matching content; signal it with connectives.",
        },
        {
          heading: "Writing checklist",
          body: "Does every paragraph have one idea? Are connectives used correctly? Is the logical pattern clear and signposted?",
        },
      ],
    },
  ],
};
