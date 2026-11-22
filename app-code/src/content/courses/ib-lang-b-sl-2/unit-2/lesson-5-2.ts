import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "langb-u5-lesson-5-2",
  code: "5-2",
  title: "Argumentative and Discursive Writing",
  goal: "I CAN write argumentative and discursive essays that present a position, support it with reasons and acknowledge alternative views.",
  standards: [
    "Writing",
    "Argumentation",
    "Discursive writing",
    "Language B SL",
  ],
  vocabulary: [
    {
      term: "Argumentative essay",
      definition:
        "A text that takes a clear position and defends it with reasons and evidence.",
    },
    {
      term: "Discursive essay",
      definition:
        "A text that explores a topic from multiple angles without necessarily taking a side.",
    },
    {
      term: "Thesis",
      definition: "The central claim or position the essay argues for.",
    },
    {
      term: "Supporting reason",
      definition:
        "A point that backs the thesis, developed with explanation or example.",
    },
    {
      term: "Counter-argument",
      definition:
        "The opposing view, acknowledged and answered to strengthen the essay.",
    },
    {
      term: "Concession",
      definition:
        "Admitting a point has some truth before countering it — 'Although X, Y still holds.'",
    },
  ],
  concepts: [
    {
      id: "langb-u5-argumentative",
      title: "Writing argumentative essays",
      skill:
        "Construct a clear thesis, support it with developed reasons, and answer the counter-argument.",
      lesson: {
        sections: [
          {
            heading: "The argumentative structure",
            body: "An **argumentative essay** takes a position and defends it. Structure: **introduction** (hook + thesis), **body paragraphs** (one reason each, developed with explanation or example), **counter-argument paragraph** (acknowledge opposition, then answer it), **conclusion** (restated position + final thought). The counter-argument paragraph is what separates a strong essay from a one-sided rant.",
          },
          {
            heading: "Developing reasons",
            body: "Each supporting reason needs development: state the reason, explain WHY it supports the thesis, give an example or evidence. 'Uniforms are good because they save money' is weak — develop it: 'Uniforms reduce daily clothing costs for families, which matters for lower-income households.' Depth beats list length. Three well-developed reasons beat six shallow ones.",
          },
          {
            heading: "Concession and rebuttal",
            body: "A **concession** admits the other side has a point: 'Although uniforms can limit self-expression...' Then **rebut**: '...the social benefits outweigh this concern.' This technique makes your argument stronger — it shows you've considered alternatives rather than ignored them. In Language B, acknowledging complexity is rewarded under task fulfilment and language.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument skeleton",
            statement:
              "Thesis -> reason 1 -> reason 2 -> counter-argument+rebuttal -> conclusion",
          },
          {
            name: "Reason development",
            statement:
              "Reason -> why it matters -> example/evidence = developed point",
          },
        ],
        workedExample: {
          problem:
            "Argue 'School uniforms should be compulsory'. Build the structure.",
          solution:
            "Thesis: uniforms benefit students. P1: reduce inequality. P2: promote focus/identity. Counter: limits expression — rebutted by allowing accessories/personal style within rules. Conclusion: benefits outweigh costs.",
        },
      },
      questions: [
        {
          id: "langb-u5-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What distinguishes an argumentative essay from a discursive essay?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Argumentative essays take a clear position; discursive essays explore multiple views",
              },
              {
                id: "b",
                text: "Argumentative essays cannot mention opposing views",
              },
              { id: "c", text: "Discursive essays use more evidence" },
              { id: "d", text: "Argumentative essays are always longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argumentative vs discursive",
                statement:
                  "Argumentative = position defended; discursive = multiple perspectives explored.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The key difference is whether a position is defended or views explored.",
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
              "**(a)** Argumentative essays take a clear position; discursive essays explore multiple views",
            commonErrors: [
              "Thinking argumentative means ignoring other views — it means answering them.",
            ],
          },
        },
        {
          id: "langb-u5-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the four main parts of an argumentative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Argumentative structure",
                statement:
                  "Introduction, body reasons, counter-argument, conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Introduction: hook + thesis statement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Body: one paragraph per supporting reason, developed with explanation/example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: acknowledge opposition then rebut; conclusion restates position.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Introduction, body reasons, counter-argument, conclusion.",
            commonErrors: [
              "Omitting the counter-argument — makes the essay one-sided.",
            ],
          },
        },
        {
          id: "langb-u5-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why developing a reason is stronger than just listing it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reason development",
                statement:
                  "Reason + why + example = convincing argument; bare reason = assertion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A bare reason ('uniforms save money') is an unsupported claim.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Development explains the mechanism — how does it save money, for whom?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example/evidence makes it concrete and convincing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examiners reward depth of argument over quantity of points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Developed reasons explain mechanism and give evidence — bare reasons are just assertions.",
            commonErrors: [
              "Listing reasons without explaining how they support the thesis.",
            ],
          },
        },
        {
          id: "langb-u5-q12",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write an argumentative essay plan on 'Homework should be abolished'.",
          parts: [
            { label: "a", prompt: "Write a thesis statement.", marks: 2 },
            { label: "b", prompt: "List two supporting reasons.", marks: 2 },
            {
              label: "c",
              prompt:
                "Describe the counter-argument you would acknowledge and how you would rebut it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argumentative planning",
                statement:
                  "Thesis + developed reasons + acknowledged counter-argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Clear position, e.g. 'Homework does more harm than good and should be reduced.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Arguable thesis, not just a topic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Two distinct reasons, e.g. stress/mental health + lost family time.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Both reasons support the thesis and can be developed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Counter-argument acknowledged: homework reinforces learning.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Rebuttal answers it: quality over quantity, or alternatives like reading.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Concession + rebuttal structure makes argument stronger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Clear thesis. (b) Two reasons. (c) Counter acknowledged ('reinforces learning') + rebutted ('quality over quantity').",
            commonErrors: [
              "Ignoring the counter-argument entirely, weakening the essay.",
            ],
          },
        },
        {
          id: "langb-u5-q49",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What must an argumentative essay do that a discursive essay need not?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid mentioning opposing views" },
              { id: "b", text: "Be longer" },
              { id: "c", text: "Defend one clear position" },
              { id: "d", text: "Use more formal vocabulary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argumentative writing",
                statement:
                  "An argumentative essay takes and defends a position.",
              },
            ],
            steps: [
              {
                reasoning: "Defending a position is the defining feature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Defend one clear position",
            commonErrors: [
              "Thinking an argumentative essay cannot acknowledge other views.",
            ],
          },
        },
        {
          id: "langb-u5-q50",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where does the counter-argument usually appear in an argumentative essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In its own paragraph before the conclusion" },
              { id: "b", text: "It never appears" },
              { id: "c", text: "Only in the conclusion" },
              { id: "d", text: "Only in the introduction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Counter-argument placement",
                statement:
                  "The opposing view gets its own paragraph before the conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A dedicated paragraph lets you acknowledge then rebut properly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** In its own paragraph before the conclusion",
            commonErrors: [
              "Burying the counter-argument inside a supporting paragraph.",
            ],
          },
        },
        {
          id: "langb-u5-q51",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which sentence is an effective concession?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uniforms exist in many schools." },
              { id: "b", text: "Some people like uniforms and some do not." },
              {
                id: "c",
                text: "Although uniforms limit expression, their benefits outweigh the cost.",
              },
              { id: "d", text: "Uniforms are bad and everyone knows it." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Concession",
                statement:
                  "Admit partial truth ('although...') then pivot back to your position.",
              },
            ],
            steps: [
              {
                reasoning: "A concession admits the other side's point first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It then pivots back to the writer's position.",
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
              "**(c)** Although uniforms limit expression, their benefits outweigh the cost.",
            commonErrors: ["Conceding without returning to your position."],
          },
        },
        {
          id: "langb-u5-q52",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a rebuttal do in an argumentative essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lists more examples" },
              { id: "b", text: "Answers or weakens the counter-argument" },
              { id: "c", text: "Repeats the thesis" },
              { id: "d", text: "Introduces a new topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rebuttal",
                statement:
                  "A rebuttal directly answers the acknowledged counter-argument.",
              },
            ],
            steps: [
              {
                reasoning: "Concession admits the point; rebuttal answers it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Answers or weakens the counter-argument",
            commonErrors: [
              "Acknowledging the counter-argument without rebutting it.",
            ],
          },
        },
        {
          id: "langb-u5-q53",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is a one-sided argumentative essay weaker than one that answers the counter-argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examiners forbid mentioning other views" },
              { id: "b", text: "It uses less formal language" },
              { id: "c", text: "It is always shorter" },
              {
                id: "d",
                text: "It ignores complexity and cannot convince a sceptical reader",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Counter-argument function",
                statement:
                  "Answering opposition shows the argument survives scrutiny.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Readers who hold the opposing view remain unconvinced.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Acknowledging complexity demonstrates critical engagement.",
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
              "**(d)** It ignores complexity and cannot convince a sceptical reader",
            commonErrors: [
              "Believing ignoring opposition makes an argument stronger.",
            ],
          },
        },
        {
          id: "langb-u5-q54",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the strongest developed supporting reason?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Homework reinforces learning because repeated practice helps students retain material.",
              },
              { id: "b", text: "Homework is good." },
              { id: "c", text: "Many people have opinions about homework." },
              { id: "d", text: "Homework is a thing students do." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reason development",
                statement:
                  "Reason + mechanism = developed point; bare claim = assertion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (b) explains WHY the reason supports the thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The others are assertions or irrelevant statements.",
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
              "**(a)** Homework reinforces learning because repeated practice helps students retain material.",
            commonErrors: [
              "Choosing the longest sentence rather than the most developed reasoning.",
            ],
          },
        },
        {
          id: "langb-u5-q55",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'thesis', 'supporting reason' and 'counter-argument'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argumentative terms",
                statement:
                  "Thesis = position; reason = supporting point; counter-argument = opposing view.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis: the central position the essay defends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting reason: a point that backs the thesis, developed with explanation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: the opposing view, acknowledged then answered.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis = position; reason = developed support; counter-argument = opposing view answered.",
            commonErrors: [
              "Defining counter-argument as a reason that supports your side.",
            ],
          },
        },
        {
          id: "langb-u5-q56",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how to develop a single supporting reason into a full paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph development",
                statement:
                  "Topic sentence -> why it matters -> example/evidence -> link forward.",
              },
            ],
            steps: [
              {
                reasoning: "Open with a topic sentence stating the reason.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explain the mechanism — how does it support the thesis?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Give an example or evidence to make it concrete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Close with a link to the next point or the thesis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Topic sentence -> explanation of mechanism -> example/evidence -> linking close.",
            commonErrors: ["Stopping at the bare reason without development."],
          },
        },
        {
          id: "langb-u5-q57",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the concession-and-rebuttal technique with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Concession and rebuttal",
                statement:
                  "Admit partial truth, then answer it — strengthens credibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Concession: 'Although X has some truth...' admits the opposing point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rebuttal: '...however, Y still holds' answers it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: 'Although phones can distract, they also give students instant access to research.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The technique shows you engaged with alternatives — rewarded in assessment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Concede partially, then rebut — e.g. 'Although X, Y still holds because...'.",
            commonErrors: ["Conceding so fully that your position collapses."],
          },
        },
        {
          id: "langb-u5-q58",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate and improve this draft: 'School uniforms are good. They are nice. Students wear them.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument development",
                statement:
                  "Replace assertions with developed reasons tied to a thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem: bare assertions, no thesis, no development, repetitive structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fix: state a thesis, e.g. 'Uniforms benefit students by reducing inequality.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Develop each reason: explain the mechanism and give an example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add a concession and rebuttal for the opposing view.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Result: an argument with position, depth and balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Add thesis + developed reasons + counter-argument — replace assertions with reasoning.",
            commonErrors: [
              "Adding more bare sentences instead of developing ideas.",
            ],
          },
        },
        {
          id: "langb-u5-q59",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan an argumentative essay on 'Students should have a say in school rules'.",
          parts: [
            { label: "a", prompt: "Write a thesis statement.", marks: 2 },
            {
              label: "b",
              prompt: "List two supporting reasons that can be developed.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe the counter-argument you would acknowledge and how you would rebut it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argumentative planning",
                statement:
                  "Thesis + developed reasons + acknowledged counter-argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Clear position, e.g. 'Students should contribute to rule-making because it builds responsibility.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Arguable thesis, not just a topic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Two distinct reasons, e.g. develops responsibility + increases compliance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Both reasons support the thesis and can be developed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Counter-argument acknowledged: students lack maturity to decide.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Rebuttal: participation is supervised and educational, not full control.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Concession + rebuttal structure makes the argument stronger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Clear thesis. (b) Two reasons. (c) Counter acknowledged ('immaturity') + rebutted ('supervised participation').",
            commonErrors: [
              "Ignoring the counter-argument entirely, weakening the essay.",
            ],
          },
        },
        {
          id: "langb-u5-q60",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why three well-developed reasons beat six shallow ones in an argumentative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Depth over breadth",
                statement:
                  "Examiners reward developed argument and language range over point count.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A shallow reason is an unsupported claim — easy to dismiss.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Development shows mechanism and evidence, convincing the reader.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Six shallow points also risk repetition and drift.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Focused development uses time better and lifts both argument and language marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Developed reasons convince; shallow lists are assertions that dilute focus.",
            commonErrors: [
              "Equating number of points with quality of argument.",
            ],
          },
        },
      ],
    },
    {
      id: "langb-u5-discursive",
      title: "Discursive and balanced writing",
      skill:
        "Write discursive texts that present multiple perspectives fairly before reaching a considered view.",
      lesson: {
        sections: [
          {
            heading: "Discursive vs argumentative",
            body: "A **discursive essay** explores a topic from several angles — it does not necessarily take a side. The structure resembles an argument but balanced: **introduction** (topic + why it matters), **body** (perspective A, perspective B, possibly C — each fairly presented), **conclusion** (a considered view, which may be balanced or lightly weighted). The difference: you present views, not just yours.",
          },
          {
            heading: "Presenting views fairly",
            body: "Each perspective needs fair treatment — state it accurately, develop its reasoning, don't caricature it. Use attribution: 'Supporters argue that...', 'Critics counter that...'. Then synthesise: 'While both views have merit, the evidence suggests...' or 'On balance, X appears more convincing because...' Discursive writing rewards fairness and breadth.",
          },
          {
            heading: "Reaching a conclusion",
            body: "A discursive conclusion can be neutral ('both sides have valid points') or weighted ('the evidence leans towards X'). Either is acceptable if earned by the analysis. Avoid dodging — 'there are good points on both sides' alone is weak. A considered view, even a cautious one, shows engagement. The conclusion should emerge from the discussion, not be imposed on it.",
          },
        ],
        keyFormulas: [
          {
            name: "Discursive structure",
            statement:
              "Topic -> perspective A -> perspective B -> synthesised conclusion",
          },
          {
            name: "Fair presentation",
            statement:
              "Attribute views accurately; don't caricature the side you disagree with",
          },
        ],
        workedExample: {
          problem:
            "Write a discursive essay on 'Should homework exist?'. Outline it.",
          solution:
            "Intro: homework debated. P1: benefits (reinforcement, practice). P2: drawbacks (stress, lost time). P3: middle ground (quality over quantity). Conclusion: homework has a role if well-designed.",
        },
      },
      questions: [
        {
          id: "langb-u5-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How does a discursive essay differ from an argumentative essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Discursive essays are always shorter" },
              { id: "b", text: "Discursive essays cannot have a conclusion" },
              {
                id: "c",
                text: "Argumentative essays use more formal language",
              },
              {
                id: "d",
                text: "Discursive essays explore multiple views; argumentative essays defend one position",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discursive writing",
                statement:
                  "Explores multiple perspectives fairly before a considered conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discursive = multi-perspective exploration; argumentative = single-position defence.",
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
              "**(d)** Discursive essays explore multiple views; argumentative essays defend one position",
            commonErrors: [
              "Forcing a discursive essay into an argumentative shape.",
            ],
          },
        },
        {
          id: "langb-u5-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three techniques for presenting an opposing view fairly in a discursive essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fair presentation",
                statement:
                  "Attribute accurately, state the strongest version, avoid caricature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Attribute clearly: 'Supporters argue...', 'Critics claim...'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State the strongest version of the view, not a weak version you can easily defeat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Avoid loaded or dismissive language when describing the opposing view.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear attribution, strongest version, neutral language.",
            commonErrors: [
              "Straw-manning the opposing view to make your conclusion easier.",
            ],
          },
        },
        {
          id: "langb-u5-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a discursive essay needs a conclusion even though it doesn't argue one side.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Discursive conclusion",
                statement:
                  "The conclusion synthesises perspectives into a considered view — engagement, not dodging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The conclusion shows you engaged with all views and reached a judgement.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "It can be neutral or weighted — either shows critical thinking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without it, the essay is just a list of views with no synthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A considered conclusion demonstrates the essay's purpose was fulfilled.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conclusion synthesises views into a considered judgement — proves engagement and fulfils the task.",
            commonErrors: [
              "Ending with 'both sides have points' — that's dodging, not concluding.",
            ],
          },
        },
        {
          id: "langb-u5-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a discursive essay plan on 'Is homework a good use of students' time?'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write an introduction that frames the topic without taking a side.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "List two perspectives you would present fairly.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe the conclusion you would reach and why it fits a discursive essay.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discursive planning",
                statement:
                  "Neutral frame + fair perspectives + synthesised conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Introduction presents the topic and its debate without a position, e.g. 'Homework is one of education's most debated practices.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Framing is neutral — no thesis taking a side.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Two perspectives: pro-homework (reinforcement) and anti-homework (stress/time).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both views can be developed fairly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Conclusion synthesises, e.g. 'Homework has value when purposeful — quality over quantity.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Conclusion emerges from the discussion, not imposed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Weighted but balanced view fits discursive form.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Neutral framing. (b) Pro + anti perspectives. (c) Synthesised conclusion ('quality over quantity').",
            commonErrors: [
              "Turning a discursive plan into an argumentative one with a strong thesis.",
            ],
          },
        },
        {
          id: "langb-u5-q61",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What defines a discursive essay?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It explores a topic from multiple perspectives",
              },
              { id: "b", text: "It lists facts without comment" },
              { id: "c", text: "It defends one position forcefully" },
              { id: "d", text: "It narrates a personal story" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discursive writing",
                statement: "Discursive essays explore several views fairly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multi-perspective exploration is the defining feature.",
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
              "**(a)** It explores a topic from multiple perspectives",
            commonErrors: [
              "Confusing discursive exploration with argumentative defence.",
            ],
          },
        },
        {
          id: "langb-u5-q62",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which phrase attributes a view fairly in a discursive essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Obviously everyone agrees that..." },
              { id: "b", text: "It goes without saying that..." },
              { id: "c", text: "Supporters argue that..." },
              { id: "d", text: "The truth is that..." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Attribution",
                statement:
                  "'Supporters argue', 'critics claim' attribute views without endorsing them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Attribution phrases present views as reported, not asserted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Supporters argue that...",
            commonErrors: ["Using phrases that assert a view as obvious fact."],
          },
        },
        {
          id: "langb-u5-q63",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which conclusion best fits a discursive essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We will never know the answer." },
              {
                id: "b",
                text: "On balance, the evidence leans towards X because...",
              },
              { id: "c", text: "In conclusion, X is obviously correct." },
              { id: "d", text: "Both sides have some good points." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discursive conclusion",
                statement:
                  "A considered, earned view — neutral or weighted — synthesises the perspectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) dodges; (c) imposes an unearned verdict; (d) abandons judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) synthesises the discussion into a weighted view.",
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
              "**(b)** On balance, the evidence leans towards X because...",
            commonErrors: [
              "Ending with a vague 'both sides have points' — that is dodging, not concluding.",
            ],
          },
        },
        {
          id: "langb-u5-q64",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'straw-manning' in discursive writing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Presenting a weak, distorted version of the opposing view to defeat it easily",
              },
              { id: "b", text: "Using a formal tone throughout" },
              {
                id: "c",
                text: "Presenting the strongest version of an opposing view",
              },
              { id: "d", text: "Citing evidence for every claim" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fair presentation",
                statement:
                  "Fair discursive writing presents the strongest version of each view.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Straw-manning distorts the opposing view to make it easy to attack.",
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
              "**(a)** Presenting a weak, distorted version of the opposing view to defeat it easily",
            commonErrors: [
              "Weakening the opposing view so your conclusion seems obvious.",
            ],
          },
        },
        {
          id: "langb-u5-q65",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which sentence best synthesises two perspectives in a discursive essay?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "While both views have merit, the evidence suggests View A is stronger.",
              },
              { id: "b", text: "It depends on who you ask." },
              { id: "c", text: "View A is right and View B is wrong." },
              { id: "d", text: "View B is completely absurd." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis",
                statement:
                  "A discursive conclusion weighs perspectives before reaching a considered view.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis acknowledges both views, then weighs them.",
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
              "**(a)** While both views have merit, the evidence suggests View A is stronger.",
            commonErrors: [
              "Dismissing one perspective instead of synthesising both.",
            ],
          },
        },
        {
          id: "langb-u5-q66",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which structural difference distinguishes a discursive essay from an argumentative one?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Discursive essays present several perspectives fairly before a considered conclusion",
              },
              { id: "b", text: "Discursive essays have no introduction" },
              { id: "c", text: "Discursive essays are always opinion pieces" },
              { id: "d", text: "Discursive essays must be longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discursive structure",
                statement:
                  "Topic -> perspective A -> perspective B -> synthesised conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The body fairly presents multiple views rather than defending one.",
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
              "**(a)** Discursive essays present several perspectives fairly before a considered conclusion",
            commonErrors: [
              "Forcing a discursive plan into an argumentative shape.",
            ],
          },
        },
        {
          id: "langb-u5-q67",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define a discursive essay and state its typical structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discursive essay",
                statement:
                  "Explores a topic from multiple angles toward a considered view.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Definition: explores several perspectives without necessarily taking one side.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structure: neutral introduction, perspective paragraphs, synthesised conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion may be neutral or weighted but must be earned by the analysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Discursive = multi-perspective exploration; structure = intro -> perspectives -> synthesised conclusion.",
            commonErrors: [
              "Writing a discursive essay with a strong one-sided thesis.",
            ],
          },
        },
        {
          id: "langb-u5-q68",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to present a perspective fairly in a discursive essay, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fair presentation",
                statement:
                  "Attribute accurately, state the strongest version, avoid caricature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Attribute clearly: 'Supporters argue...', 'Critics claim...'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State the strongest version of the view, not a weak one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use neutral language — no loaded or dismissive words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: 'Critics argue that homework causes stress and reduces family time.'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Attribute, state strongest version, neutral tone — e.g. 'Critics argue that...'.",
            commonErrors: ["Straw-manning the view you disagree with."],
          },
        },
        {
          id: "langb-u5-q69",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a discursive conclusion differs from an argumentative one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Discursive vs argumentative conclusion",
                statement:
                  "Discursive synthesises perspectives; argumentative restates the defended position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Argumentative conclusion restates and reinforces the thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Discursive conclusion weighs the perspectives presented.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It may be neutral or weighted — both are acceptable if earned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It must emerge from the discussion rather than be imposed on it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Discursive conclusion synthesises views into a considered judgement; argumentative restates the position.",
            commonErrors: [
              "Forcing an argumentative-style verdict onto a discursive essay.",
            ],
          },
        },
        {
          id: "langb-u5-q70",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why a discursive essay should not force a strong thesis, and what it needs instead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Discursive purpose",
                statement:
                  "The task is exploration and synthesis, not defence of one side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A strong thesis would collapse the essay into an argumentative one.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The task requires fair treatment of multiple perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Instead of a thesis, the essay needs a neutral framing of the debate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "And a conclusion that emerges from weighing the perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fulfilling the actual task type is what examiners reward.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Discursive needs neutral framing + fair perspectives + synthesised conclusion, not a thesis.",
            commonErrors: [
              "Writing a thesis in a discursive introduction — this fails task fulfilment.",
            ],
          },
        },
        {
          id: "langb-u5-q71",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan a discursive essay on 'Should cities ban cars from their centres?'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write an introduction that frames the topic without taking a side.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "List two perspectives you would present fairly.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe the conclusion you would reach and why it fits a discursive essay.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discursive planning",
                statement:
                  "Neutral frame + fair perspectives + synthesised conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Introduction presents the debate without a position, e.g. 'The question of car-free city centres divides opinion.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Framing is neutral — no thesis taking a side.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Two perspectives: pro-ban (cleaner air, safer streets) and anti-ban (accessibility, business).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both views can be developed fairly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Conclusion synthesises, e.g. 'A partial ban in peak hours balances both concerns.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Conclusion emerges from the discussion, not imposed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Weighted but balanced view fits discursive form.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Neutral framing. (b) Pro + anti perspectives. (c) Synthesised conclusion ('partial ban balances concerns').",
            commonErrors: [
              "Turning a discursive plan into an argumentative one with a strong thesis.",
            ],
          },
        },
        {
          id: "langb-u5-q72",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite this biased sentence into a fair discursive presentation: 'Uniforms are obviously bad because they kill creativity.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Neutral revision",
                statement: "Attribute the view and remove loaded language.",
              },
            ],
            steps: [
              {
                reasoning: "Identify loaded words: 'obviously', 'kill'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add attribution: 'Critics argue that...' or 'Some believe that...'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rewrite neutrally, e.g. 'Critics argue that uniforms may restrict students' self-expression.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Result presents the view fairly without asserting it as fact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "E.g. 'Critics argue that uniforms may restrict students' self-expression.'",
            commonErrors: [
              "Keeping the evaluative tone while adding attribution.",
            ],
          },
        },
      ],
    },
  ],
};
