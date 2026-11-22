import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "langb-u5-lesson-5-1",
  code: "5-1",
  title: "Essay Planning and Cohesion",
  goal: "I CAN plan an extended essay and use cohesive devices to link ideas across paragraphs.",
  standards: ["Writing", "Essay structure", "Cohesion", "Language B SL"],
  vocabulary: [
    {
      term: "Cohesion",
      definition:
        "The grammatical and lexical linking that makes a text flow as a unified whole.",
    },
    {
      term: "Coherence",
      definition:
        "The logical organisation of ideas so the text makes sense as a whole.",
    },
    {
      term: "Connective",
      definition:
        "A word or phrase linking ideas: 'however', 'furthermore', 'as a result'.",
    },
    {
      term: "Paragraph linker",
      definition:
        "A connective at the start of a paragraph connecting it to the previous one.",
    },
    {
      term: "Essay plan",
      definition:
        "A brief outline of thesis, points and paragraph structure written before drafting.",
    },
    {
      term: "Referencing",
      definition:
        "Pointing back to earlier ideas using pronouns or synonyms to avoid repetition.",
    },
  ],
  concepts: [
    {
      id: "langb-u5-essay-planning",
      title: "Planning extended essays",
      skill:
        "Develop a thesis, select and order supporting points, and allocate paragraphs before writing.",
      lesson: {
        sections: [
          {
            heading: "Planning is writing",
            body: "An extended essay needs more than a topic — it needs a **thesis** (your position) and a **plan** (how you'll prove it). Spend real planning time: decide your position, brainstorm supporting points, then select the 3–4 strongest and order them logically. The plan is your safety net — when you write, you execute rather than invent.",
          },
          {
            heading: "From brainstorm to structure",
            body: "Start with a mind-map or list of everything relevant. Then group related ideas — each group becomes a paragraph. Order groups for maximum impact: strongest point often first or last. Each paragraph gets: topic sentence (its point), supporting details, and a link forward. This structure is what examiners call 'organisation'.",
          },
          {
            heading: "Time management in planning",
            body: "For a 45-minute writing task, budget ~7 minutes planning, ~30 minutes writing, ~8 minutes checking. Under time pressure, write a compressed plan — thesis + three points — rather than a detailed one. A clear plan prevents the two biggest essay killers: repetition (same point twice) and drift (losing the thread of the argument).",
          },
        ],
        keyFormulas: [
          {
            name: "Planning budget",
            statement:
              "Thesis + 3-4 ordered points + paragraph allocation before writing",
          },
          {
            name: "Time split",
            statement: "Plan ~15%, write ~65%, check ~20% of the total time",
          },
        ],
        workedExample: {
          problem: "Plan an essay on 'Is technology good for education?'",
          solution:
            "Thesis: technology helps when used well but can distract. P1: benefits (access to information). P2: drawbacks (distraction). P3: balanced view (rules needed). Conclusion: technology is a tool, not a solution.",
        },
      },
      questions: [
        {
          id: "langb-u5-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should an essay plan include before writing begins?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — just start writing" },
              { id: "b", text: "A list of every vocabulary word" },
              { id: "c", text: "Every sentence written out in full" },
              {
                id: "d",
                text: "A thesis, supporting points and paragraph structure",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay planning",
                statement:
                  "Plan = thesis + selected points + paragraph allocation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A plan fixes the argument's structure before drafting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** A thesis, supporting points and paragraph structure",
            commonErrors: ["Skipping planning and losing the essay's thread."],
          },
        },
        {
          id: "langb-u5-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to turn a brainstormed list of ideas into an essay structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Idea organisation",
                statement:
                  "Group related ideas; each group becomes a paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "Brainstorm everything relevant without judging.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Group related ideas — each cluster becomes one paragraph's point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Order groups for impact and assign each a topic sentence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Brainstorm -> group into themes -> each group = one paragraph.",
            commonErrors: [
              "Using every brainstormed idea — select only the strongest 3-4.",
            ],
          },
        },
        {
          id: "langb-u5-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a clear thesis statement is essential to an extended essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Thesis function",
                statement:
                  "The thesis controls scope, direction and evaluation of the whole essay.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The thesis declares your position — the essay must prove it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It controls scope: points that don't serve the thesis are cut.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It gives the reader a map — they know what to expect.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Examiners assess whether the essay fulfils its task — a clear thesis makes that visible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis controls scope, direction and task fulfilment — without it the essay drifts.",
            commonErrors: [
              "Writing a thesis that's just a topic, not a position.",
            ],
          },
        },
        {
          id: "langb-u5-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan an extended essay on 'The advantages and disadvantages of living in a big city'.",
          parts: [
            {
              label: "a",
              prompt: "Write a thesis statement that takes a position.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "List three supporting points in logical order.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain how your plan prevents repetition and drift.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structured planning",
                statement:
                  "Position + ordered distinct points = no repetition or drift.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis takes a position, e.g. 'Cities offer opportunity but at a cost to wellbeing.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Position is arguable, not just a topic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Three distinct ordered points, e.g. opportunities -> costs -> balanced conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each point is different and serves the thesis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Plan assigns one point per paragraph — no paragraph repeats another.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Order gives logical progression instead of random ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Writing follows the plan rather than improvising — prevents drift.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Positional thesis. (b) Three distinct ordered points. (c) One point per paragraph prevents repetition; order prevents drift.",
            commonErrors: ["Points that overlap or wander off the thesis."],
          },
        },
        {
          id: "langb-u5-q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of writing an essay plan before drafting?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To fix the thesis, select points and structure paragraphs before writing",
              },
              { id: "b", text: "To avoid checking the essay later" },
              { id: "c", text: "To memorise vocabulary" },
              { id: "d", text: "To make the essay longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay planning",
                statement:
                  "The plan fixes thesis, points and structure before drafting.",
              },
            ],
            steps: [
              {
                reasoning: "Planning removes decisions from the writing phase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** To fix the thesis, select points and structure paragraphs before writing",
            commonErrors: ["Treating the plan as optional decoration."],
          },
        },
        {
          id: "langb-u5-q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where should the strongest supporting point usually appear in an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Often first or last for maximum impact" },
              { id: "b", text: "In the exact middle to balance the essay" },
              { id: "c", text: "It makes no difference" },
              { id: "d", text: "Only in the conclusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Placement of strongest point",
                statement:
                  "First or last position gives a point maximum rhetorical impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First impressions and final impressions carry weight.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Often first or last for maximum impact",
            commonErrors: [
              "Burying the strongest point in the middle of the essay.",
            ],
          },
        },
        {
          id: "langb-u5-q27",
          difficulty: "core",
          totalMarks: 3,
          stem: "You have only ten minutes for planning a timed essay. What should you write?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of every brainstormed idea" },
              { id: "b", text: "A compressed plan: thesis plus three points" },
              { id: "c", text: "A detailed outline of every sentence" },
              { id: "d", text: "Nothing — start writing immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time-pressured planning",
                statement: "Compressed plans prevent drift when time is short.",
              },
            ],
            steps: [
              {
                reasoning: "Under pressure, brevity beats detail.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A thesis plus three points gives enough structure to write from.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A compressed plan: thesis plus three points",
            commonErrors: [
              "Spending all planning time on detail and leaving no time to write.",
            ],
          },
        },
        {
          id: "langb-u5-q28",
          difficulty: "core",
          totalMarks: 3,
          stem: "A brainstorm produces twelve ideas. How many should normally become body paragraph points?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All twelve, to show thoroughness" },
              { id: "b", text: "Only the single best one" },
              { id: "c", text: "As many as fit without any selection" },
              { id: "d", text: "The three or four strongest" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Point selection",
                statement:
                  "Select only the strongest 3-4 points; weak points dilute the argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selection is what turns a brainstorm into an essay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Three or four developed points beat a long list of shallow ones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** The three or four strongest",
            commonErrors: [
              "Trying to include every idea — this causes repetition and drift.",
            ],
          },
        },
        {
          id: "langb-u5-q35",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the best first step when planning under exam time pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write the introduction" },
              { id: "b", text: "Fix a clear thesis" },
              { id: "c", text: "Count the words you need" },
              { id: "d", text: "List impressive vocabulary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Planning priority",
                statement:
                  "The thesis comes first — everything else serves it.",
              },
            ],
            steps: [
              {
                reasoning: "Without a position, no amount of detail helps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Points and structure follow from the thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Fix a clear thesis",
            commonErrors: ["Planning details before deciding the position."],
          },
        },
        {
          id: "langb-u5-q36",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the role of a topic sentence in a planned essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It repeats the thesis word for word" },
              { id: "b", text: "It lists all the examples for the paragraph" },
              {
                id: "c",
                text: "It states the paragraph's point and links it to the thesis",
              },
              { id: "d", text: "It signals that the essay is ending" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Topic sentence",
                statement:
                  "Each paragraph's point is stated in its topic sentence, tied to the thesis.",
              },
            ],
            steps: [
              {
                reasoning: "The topic sentence controls the paragraph's scope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Linking it to the thesis keeps the essay unified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** It states the paragraph's point and links it to the thesis",
            commonErrors: [
              "Writing topic sentences that introduce a point unrelated to the thesis.",
            ],
          },
        },
        {
          id: "langb-u5-q29",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'thesis' and 'essay plan', and state how they relate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thesis and plan",
                statement:
                  "Thesis = position argued; plan = structure proving it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis: the central position or claim the essay defends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Essay plan: an outline of points and paragraph structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The plan organises the evidence that proves the thesis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis = the position; plan = the ordered structure that proves it.",
            commonErrors: [
              "Confusing the thesis (a position) with the topic (a subject).",
            ],
          },
        },
        {
          id: "langb-u5-q30",
          difficulty: "core",
          totalMarks: 4,
          stem: "Outline the steps for turning a brainstormed list into an essay structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Idea organisation",
                statement:
                  "Brainstorm -> group -> select -> order -> topic sentences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Brainstorm everything relevant without judging ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Group related ideas into themes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Select the strongest three or four groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Order the groups logically and assign each a topic sentence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Brainstorm -> group into themes -> select strongest -> order -> topic sentences.",
            commonErrors: [
              "Skipping the selection step and keeping every idea.",
            ],
          },
        },
        {
          id: "langb-u5-q31",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why using every brainstormed idea weakens an essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Selection and focus",
                statement:
                  "Inclusion of weak or irrelevant points dilutes the argument.",
              },
            ],
            steps: [
              {
                reasoning: "Weak points dilute the strength of good ones.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Off-topic ideas cause drift away from the thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Too many points force repetition to fill space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examiners reward focus — a tight argument scores higher than an exhaustive one.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Every included idea must serve the thesis; weak or extra points dilute focus and cause drift.",
            commonErrors: [
              "Believing more points always means a better essay.",
            ],
          },
        },
        {
          id: "langb-u5-q32",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the two 'essay killers' that planning prevents, and how a plan prevents them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Planning function",
                statement:
                  "Plan prevents repetition and drift by fixing one point per paragraph.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Repetition: the same point appearing in two paragraphs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drift: losing the thread of the argument mid-essay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A plan assigns each point to one paragraph, so nothing is repeated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A planned order gives logical progression instead of improvisation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Writing then executes the plan rather than inventing structure on the fly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Repetition and drift; a plan prevents them via one point per paragraph and logical ordering.",
            commonErrors: [
              "Describing the killers without explaining how planning addresses them.",
            ],
          },
        },
        {
          id: "langb-u5-q33",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan an extended essay on 'Should mobile phones be banned in schools?'.",
          parts: [
            {
              label: "a",
              prompt: "Write a thesis statement that takes a position.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "List three supporting points in logical order.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain how your plan prevents repetition and drift.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structured planning",
                statement:
                  "Position + ordered distinct points = no repetition or drift.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis takes a position, e.g. 'Phones should be restricted, not banned, during lessons.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Position is arguable, not just a topic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Three distinct ordered points, e.g. distraction -> educational uses -> balanced policy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each point is different and serves the thesis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Plan assigns one point per paragraph — no paragraph repeats another.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Order gives logical progression instead of random ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Writing follows the plan rather than improvising — prevents drift.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Positional thesis. (b) Three distinct ordered points. (c) One point per paragraph prevents repetition; order prevents drift.",
            commonErrors: ["Points that overlap or wander off the thesis."],
          },
        },
        {
          id: "langb-u5-q34",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes a plan that is just a list of five topics with no thesis or order. Evaluate this plan and explain what is missing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Plan evaluation",
                statement:
                  "A topic list is not a plan — position and order are essential.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Topics are subjects, not arguments — nothing defends a position.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "No thesis means no direction; the essay cannot fulfil its task.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No order means no logical flow for the reader.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fix: add a thesis, select the strongest topics as points, and order them.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Missing thesis, selection and order — a topic list is not a plan.",
            commonErrors: ["Accepting a topic list as a valid plan."],
          },
        },
      ],
    },
    {
      id: "langb-u5-cohesion",
      title: "Cohesion across paragraphs",
      skill:
        "Link paragraphs and sentences using connectives, referencing and consistent terminology.",
      lesson: {
        sections: [
          {
            heading: "Cohesion vs coherence",
            body: "**Cohesion** is the surface glue — connectives, pronouns, repeated keywords that link sentences visibly. **Coherence** is the deeper logic — ideas that actually connect and build. Good writing needs both: a text can be grammatically linked (cohesive) but logically confused (incoherent), or logical but choppy. Language B rewards both.",
          },
          {
            heading: "Connectives at paragraph level",
            body: "Paragraph openers do heavy lifting: 'However' signals contrast with the previous paragraph; 'Furthermore' adds support; 'As a result' shows consequence; 'On the other hand' introduces balance; 'In conclusion' signals ending. These signposts guide the reader through your argument. Vary them — repeating 'also' or 'and' makes writing mechanical.",
          },
          {
            heading: "Referencing without repetition",
            body: "Repeating the same noun ('the city... the city... the city') is clumsy. Use **referencing**: pronouns ('it', 'this'), synonyms ('the metropolis'), or partial repetition ('urban life'). But keep a consistent key term for your main subject — total synonym variation can confuse. The goal: linked but varied language.",
          },
        ],
        keyFormulas: [
          {
            name: "Paragraph linkers",
            statement:
              "However (contrast) / Furthermore (addition) / As a result (consequence) / In conclusion (end)",
          },
          {
            name: "Cohesion tools",
            statement:
              "Connectives + pronouns + synonyms + consistent key terms",
          },
        ],
        workedExample: {
          problem:
            "Link these paragraphs: P1 argues for uniforms. P2 argues they limit expression.",
          solution:
            "Open P2 with 'However, critics argue that uniforms limit self-expression.' — contrast linker signals the shift.",
        },
      },
      questions: [
        {
          id: "langb-u5-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which connective signals a contrast between paragraphs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Furthermore" },
              { id: "b", text: "However" },
              { id: "c", text: "In addition" },
              { id: "d", text: "For example" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Contrast connectives",
                statement:
                  "'However', 'on the other hand', 'nevertheless' signal opposition.",
              },
            ],
            steps: [
              {
                reasoning: "'However' is the standard contrast linker.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** However",
            commonErrors: [
              "Using 'furthermore' (addition) for contrast — it adds, doesn't oppose.",
            ],
          },
        },
        {
          id: "langb-u5-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three ways to link ideas without repeating the same noun.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Referencing",
                statement:
                  "Pronouns, synonyms and partial repetition link ideas cohesively.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pronouns: 'it', 'this', 'they' refer back to earlier nouns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Synonyms: 'the city' -> 'the metropolis', 'urban areas'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Partial repetition: repeat a key word but vary the surrounding phrase.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pronouns, synonyms, partial repetition of key terms.",
            commonErrors: [
              "Over-using pronouns until reference becomes unclear.",
            ],
          },
        },
        {
          id: "langb-u5-q7",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between cohesion and coherence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion vs coherence",
                statement:
                  "Cohesion = surface linking; coherence = logical sense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cohesion is grammatical/lexical linking — connectives, pronouns, repetition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Coherence is logical organisation — ideas that actually connect and build.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A text can be cohesive but incoherent (linked words, confused ideas) or coherent but choppy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Both are needed for quality writing — assessed under different criteria.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cohesion = surface glue; coherence = logical sense. Both required for good writing.",
            commonErrors: [
              "Thinking connectives alone make writing good — logic must support them.",
            ],
          },
        },
        {
          id: "langb-u5-q8",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Improve the cohesion of this paragraph sequence:",
          extract: {
            title: "Two unlinked paragraphs",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "P1: 'Social media connects people across distances. It also spreads misinformation quickly.'\n\nP2: 'Some experts worry about its effects on mental health.'",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Rewrite P2's opening to link it to P1 using a connective.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Replace one repeated or vague reference in P1 with a pronoun or synonym.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain how your changes improve cohesion.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cohesive revision",
                statement:
                  "Connective at paragraph start + pronoun/synonym reference = linked text.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "E.g. 'Furthermore, some experts worry...' or 'However, some experts...' — connective signals relation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Connective used appropriately for the logical relationship.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "E.g. 'It also spreads' -> 'It spreads' or refer to 'social media' as 'the platforms'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Reference is clear and reduces clumsiness.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Connective explicitly signals how P2 relates to P1.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Pronoun/synonym avoids repetition while maintaining clarity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reader can follow the argument's flow without re-reading.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Add connective opener to P2. (b) Vary reference in P1. (c) Connective signals relationship; varied reference improves flow.",
            commonErrors: [
              "Adding connectives mechanically without matching the actual logical relationship.",
            ],
          },
        },
        {
          id: "langb-u5-q37",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which connective signals addition between ideas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Furthermore" },
              { id: "b", text: "In conclusion" },
              { id: "c", text: "However" },
              { id: "d", text: "As a result" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Addition connectives",
                statement:
                  "'Furthermore', 'in addition', 'moreover' signal added support.",
              },
            ],
            steps: [
              {
                reasoning: "'Furthermore' adds a supporting point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Furthermore",
            commonErrors: [
              "Confusing addition ('furthermore') with consequence ('as a result').",
            ],
          },
        },
        {
          id: "langb-u5-q38",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which connective signals that one idea is the consequence of another?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In addition" },
              { id: "b", text: "On the other hand" },
              { id: "c", text: "For example" },
              { id: "d", text: "As a result" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Consequence connectives",
                statement:
                  "'As a result', 'therefore', 'consequently' signal cause-effect.",
              },
            ],
            steps: [
              {
                reasoning: "'As a result' links a cause to its effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** As a result",
            commonErrors: [
              "Using 'for example' (illustration) where a consequence is needed.",
            ],
          },
        },
        {
          id: "langb-u5-q39",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which revision best reduces repetition in: 'The city is expensive. The city is crowded.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The city is expensive and crowded." },
              {
                id: "b",
                text: "The city is expensive. Additionally the city is crowded.",
              },
              { id: "c", text: "Expensive city. Crowded city." },
              {
                id: "d",
                text: "The metropolis is expensive. The metropolis is crowded.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Referencing",
                statement:
                  "Combining ideas with a pronoun or shared subject reduces clumsy repetition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Merging the sentences removes the repeated subject entirely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (c) still repeats the noun, just with a synonym.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** The city is expensive and crowded.",
            commonErrors: [
              "Swapping one repeated noun for a repeated synonym — still clumsy.",
            ],
          },
        },
        {
          id: "langb-u5-q40",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which device links a sentence back to an earlier idea without repeating the noun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A direct quotation" },
              { id: "b", text: "An exclamation mark" },
              { id: "c", text: "A pronoun or synonym reference" },
              { id: "d", text: "A longer sentence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cohesive reference",
                statement:
                  "Pronouns and synonyms point back to earlier nouns cohesively.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pronouns ('it', 'this') and synonyms ('the metropolis') link back.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The other options do not create reference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A pronoun or synonym reference",
            commonErrors: [
              "Repeating the full noun instead of using reference.",
            ],
          },
        },
        {
          id: "langb-u5-q41",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A text is full of connectives, pronouns and synonyms, but its ideas contradict each other. What does this show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect writing" },
              { id: "b", text: "Good cohesion but weak coherence" },
              { id: "c", text: "Poor cohesion" },
              { id: "d", text: "Good coherence but no cohesion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion vs coherence",
                statement:
                  "Surface linking can be strong while logical sense is weak.",
              },
            ],
            steps: [
              {
                reasoning: "Connectives and reference = cohesion present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contradictory ideas = coherence missing.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Good cohesion but weak coherence",
            commonErrors: [
              "Assuming grammatical linking guarantees logical sense.",
            ],
          },
        },
        {
          id: "langb-u5-q42",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which is the best opener for a paragraph that contrasts with the previous one?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "For instance," },
              { id: "b", text: "Nevertheless," },
              { id: "c", text: "Similarly," },
              { id: "d", text: "Furthermore," },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Contrast linkers",
                statement:
                  "'Nevertheless', 'however', 'on the other hand' signal opposition.",
              },
            ],
            steps: [
              {
                reasoning: "'Nevertheless' explicitly concedes then contrasts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The other options signal addition or similarity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Nevertheless,",
            commonErrors: [
              "Choosing an addition linker where a contrast is needed.",
            ],
          },
        },
        {
          id: "langb-u5-q43",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three paragraph-level connectives and the relationship each signals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Paragraph linkers",
                statement:
                  "Connectives signal contrast, addition, consequence or conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Contrast: 'However' or 'On the other hand'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Addition or consequence: 'Furthermore' or 'As a result'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conclusion: 'In conclusion' or 'To sum up'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "However (contrast), Furthermore (addition), As a result (consequence), In conclusion (end).",
            commonErrors: [
              "Listing connectives without naming the relationship each signals.",
            ],
          },
        },
        {
          id: "langb-u5-q44",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how referencing improves cohesion, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Referencing",
                statement:
                  "Pronouns and synonyms link ideas while avoiding noun repetition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Repetition of the same noun sounds clumsy and mechanical.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Pronouns like 'it' or 'they' point back clearly to earlier nouns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Synonyms like 'the metropolis' vary language while staying clear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: 'The city is expensive. It is also crowded.' — 'it' refers back to 'the city'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Referencing links ideas with pronouns/synonyms, e.g. 'it' replacing a repeated noun.",
            commonErrors: [
              "Using pronouns so often the referent becomes unclear.",
            ],
          },
        },
        {
          id: "langb-u5-q45",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite to improve cohesion: 'Homework helps students learn. Homework helps students practise.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cohesive revision",
                statement:
                  "Combine sentences and vary reference to remove repetition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify the repeated subject 'homework' and repeated verb structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Merge into one sentence, e.g. 'Homework helps students learn and practise.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alternative: use a pronoun, e.g. 'Homework helps students learn; it also lets them practise.'",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Result is shorter, varied and clearly linked.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "E.g. 'Homework helps students learn and practise.' or 'Homework helps students learn; it also lets them practise.'",
            commonErrors: [
              "Changing words but keeping the repetitive structure.",
            ],
          },
        },
        {
          id: "langb-u5-q46",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why varying connectives matters and what happens when a writer repeats 'also' in every paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Connective variety",
                statement:
                  "Connectives must match the actual logical relationship; repetition makes writing mechanical.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different relationships need different connectives — contrast, addition, consequence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Using 'also' everywhere signals only addition, even when the relationship is contrast or consequence.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Mechanical repetition makes writing feel mechanical and reduces the range mark.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The reader loses the signposts that guide them through the argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Varying connectives accurately improves both cohesion and language range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Connectives must match the relationship; repeating one makes writing mechanical and misleads the reader.",
            commonErrors: [
              "Adding connectives without checking they fit the logic.",
            ],
          },
        },
        {
          id: "langb-u5-q47",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Improve the cohesion of this paragraph sequence:",
          extract: {
            title: "Two unlinked paragraphs",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "P1: 'Exercise improves physical health. Exercise also reduces stress.'\n\nP2: 'Many people still avoid the gym.'",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Rewrite P2's opening to link it to P1 using a connective.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Replace one repeated reference in P1 with a pronoun or synonym.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain how your changes improve cohesion.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cohesive revision",
                statement:
                  "Connective at paragraph start + pronoun/synonym reference = linked text.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "E.g. 'However, many people still avoid the gym.' — connective signals contrast.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Connective used appropriately for the logical relationship.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "E.g. second 'Exercise' -> 'It also reduces stress.' or 'physical activity'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Reference is clear and reduces clumsiness.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Connective explicitly signals how P2 relates to P1.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Pronoun/synonym avoids repetition while maintaining clarity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reader can follow the argument's flow without re-reading.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Add contrast connective to P2. (b) Vary the repeated 'exercise' in P1. (c) Connective signals relationship; varied reference improves flow.",
            commonErrors: [
              "Adding connectives mechanically without matching the actual logical relationship.",
            ],
          },
        },
        {
          id: "langb-u5-q48",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how consistent key terminology helps cohesion without becoming repetitive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Terminology control",
                statement:
                  "Keep a stable key term for the main subject; vary the rest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A stable key term anchors the reader — total synonym variation confuses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Vary surrounding nouns and use pronouns for smooth reference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Occasional synonyms add range without losing clarity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "The balance produces linked but varied language.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Keep one clear key term, vary the rest with pronouns and synonyms — linked but not repetitive.",
            commonErrors: [
              "Replacing every mention of the main subject with different synonyms.",
            ],
          },
        },
      ],
    },
  ],
};
