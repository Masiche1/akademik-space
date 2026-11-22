import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const PRESENT: TextExtract = {
  title: "Presentation Analysis: School Start Time PSA",
  author: "Written for Akademik Space",
  text: "Slide 1: 'YOUR BRAIN ISN'T LAZY — IT'S ON THE WRONG TIME ZONE.'\nSlide 2: Graphic showing teen melatonin release curve peaking at 11 p.m. vs adult at 9 p.m.\nSlide 3: 'Seattle schools changed start times to 8:45. Results after 1 year: attendance up 4%, grades up, car crashes down 8% among teen drivers.'\nSlide 4: 'But wait — later start means later dismissal. Sports conflicts? Homework time? Bus costs?'\nSlide 5: 'The research is clear: later start helps. The logistics are solvable. Our teens deserve sleep.'",
};

export const lesson42: Lesson = {
  id: "ela10-u4-lesson-4-2",
  code: "4-2",
  title: "Analyzing Presentations and Visual Arguments",
  goal: "I CAN analyze how presentations use visuals, structure, and rhetoric to persuade audiences.",
  standards: ["SL.9-10.2", "SL.9-10.3", "SL.9-10.4", "SL.9-10.5"],
  vocabulary: [
    { term: "Visual rhetoric", definition: "How images and design persuade." },
    {
      term: "Data visualization",
      definition: "Presenting data graphically for impact.",
    },
    {
      term: "Call to action",
      definition: "Request for audience to do something.",
    },
    {
      term: "Audience adaptation",
      definition: "Tailoring message to specific listeners.",
    },
    {
      term: "Persuasive structure",
      definition: "Organization designed to convince.",
    },
    {
      term: "Evidence slide",
      definition: "Slide presenting data or research.",
    },
  ],
  concepts: [
    {
      id: "ela10-u4-visual",
      title: "Visual rhetoric analysis",
      skill:
        "Analyze how visual elements — graphics, text, layout — create persuasive effects.",
      lesson: {
        sections: [
          {
            heading: "Visual choices that persuade",
            body: "Slide 1's 'YOUR BRAIN ISN'T LAZY' uses **direct address** (YOUR) + **reframe** (isn't lazy → wrong time zone) — challenges assumption while validating experience. Slide 2's melatonin curve **visualizes** invisible biology — makes abstract science concrete. Slide 3 stacks statistics for cumulative impact. Slide 4 acknowledges counterarguments — builds credibility. Each visual choice serves persuasion strategy.",
          },
          {
            heading: "Layout and emphasis",
            body: "Text size, color, placement matter: large bold text = key message; graphs = data authority; 'But wait' transition = acknowledging doubt before resolving it. The PSA uses **problem → evidence → objection → resolution** structure — classic persuasive arc. Visuals aren't decoration — they're argument.",
          },
        ],
        keyFormulas: [
          {
            name: "Direct address + reframe",
            statement: "Challenge assumption, validate experience.",
          },
          {
            name: "Visualize the invisible",
            statement: "Make abstract concrete.",
          },
          { name: "Acknowledge objections", statement: "Builds credibility." },
        ],
        workedExample: {
          problem: "How does Slide 1's text persuade?",
          solution:
            "'YOUR BRAIN ISN'T LAZY — IT'S ON THE WRONG TIME ZONE' uses direct address (YOUR), reframe (isn't lazy → wrong timezone), and validation — teens feel seen, not blamed.",
        },
      },
      questions: [
        {
          id: "ela10-u4-visual-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENT,
          stem: "What persuasive technique does 'YOUR BRAIN ISN'T LAZY' use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expert testimony" },
              { id: "b", text: "Direct address + reframe" },
              { id: "c", text: "Emotional story" },
              { id: "d", text: "Statistics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Direct address",
                statement: "Speaking to audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'YOUR' addresses audience directly; 'ISN'T LAZY → WRONG TIME ZONE' reframes assumption.",
                evidence: "technique",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Direct address + reframe.",
            commonErrors: ["Missing the reframe strategy."],
          },
        },
        {
          id: "ela10-u4-visual-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENT,
          stem: "Why does Slide 4 ('But wait — sports conflicts?') strengthen the presentation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Objection handling",
                statement: "Acknowledge doubts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledges real concerns — sports, homework, bus costs — shows presenter understands audience.",
                evidence: "concerns",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'But wait' transition signals objection coming — prepares audience for counterargument.",
                evidence: "transition",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Builds credibility — honest about complexity rather than one-sided claim.",
                evidence: "credibility",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Slide 4 strengthens by acknowledging real concerns (sports, homework, costs) — shows presenter understands audience objections, builds credibility through honesty, prepares for resolution.",
            commonErrors: [
              "Thinking acknowledging objections weakens argument.",
            ],
          },
        },
        {
          id: "ela10-u4-visual-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Analyze the presentation's overall persuasive structure — how do slides build argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasive structure",
                statement: "How slides build.",
              },
              {
                kind: "skill",
                name: "Visual argument",
                statement: "Form serves persuasion.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Slide 1: hook + reframe — grabs attention, challenges assumption.",
                evidence: "hook",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Slides 2-3: evidence — biology (melatonin) + outcomes (Seattle data).",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Slide 4: objection — acknowledges logistics concerns.",
                evidence: "objection",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Slide 5: resolution + call to action — 'research is clear... deserve sleep.'",
                evidence: "resolution",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Structure follows persuasive arc: hook/reframe (Slide 1) → evidence (Slides 2-3: biology + outcomes) → objection (Slide 4: logistics) → resolution + call to action (Slide 5). Each slide builds on previous — classic problem-evidence-objection-resolution pattern.",
            commonErrors: ["Describing slides without analyzing structure."],
          },
        },
        {
          id: "ela10-u4-visual-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENT,
          parts: [
            { label: "a", prompt: "What is 'visual rhetoric'?", marks: 2 },
            { label: "b", prompt: "Give an example from the PSA.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Visual rhetoric",
                statement: "Images persuade.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "How images, graphics, and design choices persuade audiences.",
                evidence: "visual rhetoric",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Melatonin curve graph (Slide 2) visualizes invisible biology — makes abstract science concrete.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) How images/design persuade. (b) Melatonin curve graph visualizes invisible biology.",
            commonErrors: ["Thinking visuals are just decoration."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-delivery",
      title: "Delivery and Audience Adaptation",
      skill:
        "Analyze how delivery techniques and audience awareness affect presentation effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Delivery techniques",
            body: "Effective delivery: **eye contact** (connects with audience), **vocal variety** (pace, volume, emphasis), **gestures** (reinforce points), **pauses** (let ideas land). Filler words ('um,' 'like') undermine credibility. Pacing: don't rush through evidence slides, pause after key statistics. The PSA's 'But wait' pause before Slide 4 creates anticipation — delivery and content work together.",
          },
          {
            heading: "Audience adaptation",
            body: "Same topic, different audiences: **students** need relatable examples ('you've felt this Monday morning'); **parents** need practical concerns ('homework time, bus schedules'); **policymakers** need cost-benefit ('Seattle saved money on transportation'). The PSA adapts by acknowledging objections (Slide 4) — speaks to skeptics in audience. Know your audience's values, concerns, and knowledge level.",
          },
        ],
        keyFormulas: [
          {
            name: "Delivery = credibility",
            statement: "Eye contact, pace, pauses.",
          },
          {
            name: "Audience adaptation",
            statement: "Tailor to values/concerns.",
          },
          { name: "Objection acknowledgment", statement: "Speak to skeptics." },
        ],
        workedExample: {
          problem: "How would you adapt the PSA for parents vs students?",
          solution:
            "Parents: emphasize logistics solutions, cost savings, homework support. Students: emphasize personal experience ('you've felt this'), peer testimonials, social media framing.",
        },
      },
      questions: [
        {
          id: "ela10-u4-delivery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENT,
          stem: "Which delivery technique builds credibility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filler words" },
              {
                id: "b",
                text: "Eye contact + vocal variety + purposeful pauses",
              },
              { id: "c", text: "Fast pace" },
              { id: "d", text: "Reading slides verbatim" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Delivery techniques",
                statement: "Credibility builders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Eye contact, vocal variety, pauses build connection and credibility.",
                evidence: "delivery",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Eye contact + vocal variety + purposeful pauses.",
            commonErrors: ["Thinking speed = confidence."],
          },
        },
        {
          id: "ela10-u4-delivery-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENT,
          stem: "How would you adapt the school start time presentation for parents vs students?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Tailor to audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Parents: emphasize logistics solutions, cost savings, homework/sports support.",
                evidence: "parents",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Students: emphasize personal experience ('you've felt this Monday'), peer examples, social framing.",
                evidence: "students",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Same evidence, different framing — audience values determine emphasis.",
                evidence: "framing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Parents: logistics solutions, cost savings, homework/sports support. Students: personal experience ('you've felt this'), peer examples, social framing. Same evidence, different emphasis.",
            commonErrors: ["Same presentation for all audiences."],
          },
        },
        {
          id: "ela10-u4-delivery-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Analyze how the 'But wait' pause before Slide 4 functions — delivery and content working together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delivery-content integration",
                statement: "How they work together.",
              },
              {
                kind: "skill",
                name: "Rhetorical timing",
                statement: "Pause creates effect.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "'But wait' signals objection coming — creates anticipation in audience.",
                evidence: "anticipation",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Pause before Slide 4 lets audience anticipate counterargument — builds suspense.",
                evidence: "pause",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Delivery (pause) + content (objection slide) = coordinated persuasive strategy.",
                evidence: "coordination",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'But wait' pause creates anticipation — audience braces for objection. Delivery (strategic pause) and content (objection slide) work together: pause builds suspense, slide delivers counterargument, resolution follows. Coordinated persuasion.",
            commonErrors: ["Analyzing content or delivery separately."],
          },
        },
        {
          id: "ela10-u4-delivery-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENT,
          parts: [
            {
              label: "a",
              prompt: "Why is filler words ('um,' 'like') problematic?",
              marks: 2,
            },
            { label: "b", prompt: "How do you reduce them?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delivery quality",
                statement: "Filler words.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Undermines credibility — suggests unpreparedness or nervousness.",
                evidence: "problem",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Practice, pause instead of filler, record yourself to identify patterns.",
                evidence: "reduce",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Undermines credibility — suggests unpreparedness. (b) Practice, pause instead of filler, record yourself.",
            commonErrors: ["Not noticing own filler words."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-evaluate",
      title: "Evaluating Presentation Effectiveness",
      skill:
        "Assess presentations on evidence quality, logical structure, delivery, and audience adaptation.",
      lesson: {
        sections: [
          {
            heading: "Evaluation criteria",
            body: "Rate presentations on: **evidence quality** (credible sources? specific data?), **logical structure** (clear argument? objection handling?), **delivery** (confidence? pacing? eye contact?), **audience adaptation** (appropriate level? relevant examples?), **visual design** (supportive? clear?). The PSA scores high on all — strong evidence, logical structure, objection acknowledgment, audience-aware framing.",
          },
          {
            heading: "Constructive feedback",
            body: "Effective feedback is specific and actionable: 'The melatonin graph was powerful — but Slide 4's objections could use one more statistic to strengthen credibility' vs 'It was good.' Specific feedback helps presenters improve; vague feedback doesn't. As evaluator, identify what worked and why, plus one concrete improvement.",
          },
        ],
        keyFormulas: [
          {
            name: "Five criteria",
            statement: "Evidence, structure, delivery, adaptation, visuals.",
          },
          {
            name: "Specific feedback",
            statement: "What worked + why + improvement.",
          },
          { name: "Actionable > vague", statement: "Concrete suggestions." },
        ],
        workedExample: {
          problem: "Evaluate the PSA presentation.",
          solution:
            "Strengths: strong evidence (AAP, Seattle), logical structure (problem-evidence-objection-resolution), objection acknowledgment. Improvement: Slide 4 could add cost-benefit data for logistics concerns.",
        },
      },
      questions: [
        {
          id: "ela10-u4-evaluate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENT,
          stem: "What are the key evaluation criteria for presentations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only length" },
              { id: "b", text: "Only delivery" },
              { id: "c", text: "Only evidence" },
              {
                id: "d",
                text: "Evidence, structure, delivery, adaptation, visuals",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation criteria",
                statement: "Multiple dimensions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Five criteria: evidence quality, structure, delivery, adaptation, visuals.",
                evidence: "criteria",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Evidence, structure, delivery, adaptation, visuals.",
            commonErrors: ["Only evaluating one dimension."],
          },
        },
        {
          id: "ela10-u4-evaluate-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENT,
          stem: "Write specific feedback for the PSA presentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Feedback writing",
                statement: "Specific + actionable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: 'The melatonin graph made invisible biology visible — powerful visual evidence.'",
                evidence: "strength",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Improvement: 'Slide 4's logistics objections could use one more statistic (e.g., Seattle's transportation cost savings).'",
                evidence: "improvement",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Why: specific feedback helps presenter understand what worked and what to enhance.",
                evidence: "why",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Strengths: melatonin graph made invisible biology visible; objection slide built credibility. Improvement: Slide 4's logistics concerns could use transportation cost data — Seattle reportedly saved money on buses.'",
            commonErrors: ["Vague 'it was good' feedback."],
          },
        },
        {
          id: "ela10-u4-evaluate-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Evaluate the PSA's effectiveness for a school board audience — strengths and limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience-specific evaluation",
                statement: "School board context.",
              },
              {
                kind: "skill",
                name: "Critical assessment",
                statement: "Strengths + limitations.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Strengths for board: evidence-based (AAP, Seattle), acknowledges logistics, clear call to action.",
                evidence: "strengths",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Limitations: lacks budget analysis, implementation timeline, stakeholder buy-in plan.",
                evidence: "limitations",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Overall: persuasive for awareness, but board needs practical implementation details.",
                evidence: "overall",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "For school board: strengths are evidence-based argument, objection acknowledgment, clear advocacy. Limitations: missing budget analysis, implementation timeline, stakeholder engagement plan. Effective for persuading board to consider policy, but would need practical details for actual adoption vote.",
            commonErrors: ["Evaluating without audience context."],
          },
        },
        {
          id: "ela10-u4-evaluate-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENT,
          parts: [
            {
              label: "a",
              prompt: "What makes feedback 'actionable'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example of non-actionable feedback.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Feedback quality",
                statement: "Actionable vs vague.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Specific + explains why + suggests concrete improvement.",
                evidence: "actionable",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Non-actionable: 'It was good' or 'Needs work' — no specifics.",
                evidence: "non-actionable",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Specific + why + concrete improvement. (b) 'It was good' — no specifics.",
            commonErrors: ["Giving vague feedback."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-integrated2",
      title: "Integrated Presentation Practice",
      skill:
        "Create and deliver presentations integrating research, visuals, and audience adaptation.",
      lesson: {
        sections: [
          {
            heading: "Presentation creation process",
            body: "Steps: **research** (gather evidence), **outline** (structure argument), **design** (visuals support points), **practice** (rehearse delivery), **present** (deliver with confidence), **reflect** (what worked?). Each stage builds quality — skipping research means weak evidence; skipping practice means poor delivery.",
          },
          {
            heading: "Peer evaluation cycle",
            body: "Present → peers evaluate using criteria → presenter reflects → revise → re-present. This cycle builds skills faster than solo practice. Evaluators learn critical analysis; presenters learn from feedback. The PSA example shows effective peer evaluation — specific strengths identified, concrete improvement suggested.",
          },
        ],
        keyFormulas: [
          {
            name: "Complete process",
            statement:
              "Research → outline → design → practice → present → reflect.",
          },
          {
            name: "Peer evaluation",
            statement: "Presenters learn, evaluators analyze.",
          },
          { name: "Iterative improvement", statement: "Cycle builds skills." },
        ],
        workedExample: {
          problem: "Plan a presentation on a research topic.",
          solution:
            "Research evidence → outline (hook, evidence, objection, resolution) → design visuals → practice delivery → present → get peer feedback → revise.",
        },
      },
      questions: [
        {
          id: "ela10-u4-integrated2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENT,
          stem: "What's the correct presentation creation order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Practice → research → outline" },
              { id: "b", text: "Design → research → present" },
              { id: "c", text: "Present → research → design" },
              {
                id: "d",
                text: "Research → outline → design → practice → present",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Presentation process",
                statement: "Logical order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Research first (evidence), then outline, design, practice, present.",
                evidence: "process",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Research → outline → design → practice → present.",
            commonErrors: ["Designing before researching."],
          },
        },
        {
          id: "ela10-u4-integrated2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENT,
          stem: "List three benefits of peer evaluation for presentations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Peer evaluation",
                statement: "Benefits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Presenters get specific feedback — improve faster than solo.",
                evidence: "feedback",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evaluators practice critical analysis — learn what makes presentations effective.",
                evidence: "evaluator",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both learn audience perspective — see how others receive message.",
                evidence: "audience",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Presenters get specific feedback (improve faster), evaluators practice critical analysis (learn effectiveness), both see audience perspective.'",
            commonErrors: ["Thinking peer eval is just criticism."],
          },
        },
        {
          id: "ela10-u4-integrated2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Design a peer evaluation rubric for the school start time PSA with four criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rubric design",
                statement: "Evaluation criteria.",
              },
              {
                kind: "skill",
                name: "Comprehensive assessment",
                statement: "Multiple dimensions.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Evidence quality: credible sources? specific data? (2 pts)",
                evidence: "evidence",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: clear argument? objection handling? (2 pts)",
                evidence: "structure",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "Delivery: confidence? pacing? eye contact? (2 pts)",
                evidence: "delivery",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Visuals: supportive? clear? audience-appropriate? (2 pts)",
                evidence: "visuals",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example rubric: Evidence Quality (2pts — credible sources, specific data) / Structure (2pts — clear argument, objection handling) / Delivery (2pts — confidence, pacing, eye contact) / Visuals (2pts — supportive, clear, appropriate). Total 8 points.",
            commonErrors: ["Only one criterion — need comprehensive."],
          },
        },
        {
          id: "ela10-u4-integrated2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENT,
          parts: [
            {
              label: "a",
              prompt: "Why is the presentation process iterative?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What does 'reflect' mean in the process?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Iterative process",
                statement: "Improvement cycle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Feedback → revision → re-presentation builds skills faster than one-shot.",
                evidence: "iterative",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Reflect = evaluate what worked, what didn't, what to change next time.",
                evidence: "reflect",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Feedback→revision→re-present builds skills faster. (b) Reflect = evaluate what worked/didn't, what to change.",
            commonErrors: ["One-shot presentations — no improvement cycle."],
          },
        },
      ],
    },
  ],
};
