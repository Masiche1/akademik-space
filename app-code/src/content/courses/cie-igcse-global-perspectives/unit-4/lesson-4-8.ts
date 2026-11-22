import type { Lesson } from "../../../types.ts";

export const lesson48: Lesson = {
  id: "ciegp-u4-lesson-4-8",
  code: "4-8",
  title: "Communication, Presentation and Viva Skills",
  goal: "I CAN communicate research findings clearly and handle viva questions for IGCSE GP.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: communication",
  ],
  vocabulary: [
    {
      term: "Viva",
      definition: "Oral examination questioning research and findings.",
    },
    {
      term: "Signposting",
      definition: "Verbal cues guiding listeners through arguments.",
    },
    {
      term: "Audience awareness",
      definition:
        "Tailoring communication to listeners' knowledge and interests.",
    },
    {
      term: "Visual aid",
      definition: "Slides, charts or posters supporting oral presentation.",
    },
    {
      term: "Concise answer",
      definition: "Direct response without unnecessary padding.",
    },
    {
      term: "Evidence citation",
      definition: "Referencing sources to support claims.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l8-c1-present",
      title: "Effective presentation",
      skill: "Structure and deliver clear presentations on global issues.",
      lesson: {
        sections: [
          {
            heading: "Presentation structure",
            body: "A strong presentation: **hook** (why this issue matters), **context** (background), **analysis** (your argument with evidence), **evaluation** (weighing perspectives), **conclusion** (balanced judgement). Signpost clearly: 'First…', 'On the other hand…', 'In conclusion…'. Keep visual aids simple — one idea per slide.",
          },
          {
            heading: "Delivery skills",
            body: "Speak clearly, at measured pace, with eye contact. Don't read slides verbatim. Anticipate questions: know your methodology, limitations and counter-arguments. Practice handling 'what if…' questions. Time management: rehearse to fit the slot.",
          },
        ],
        keyFormulas: [
          {
            name: "Presentation arc",
            statement: "Hook → context → analysis → evaluation → conclusion",
          },
          { name: "Signposting", statement: "Verbal cues guiding listeners" },
        ],
        workedExample: {
          problem:
            "Improve a presentation that reads every slide word-for-word.",
          solution:
            "Use slides as prompts only; speak naturally, emphasise key points verbally, maintain eye contact — slides support, not replace, the speaker.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l8c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'signposting' in a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical signs" },
              {
                id: "b",
                text: "Verbal cues guiding listeners through the argument structure",
              },
              { id: "c", text: "Road signs" },
              { id: "d", text: "Slide transitions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Signposting",
                statement: "Verbal structural cues.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Verbal cues guiding structure",
            commonErrors: ["Confusing with visual aids."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'viva'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Viva",
                statement: "Oral examination of research and findings.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "An oral questioning session where examiners probe your research question, methodology, findings and conclusions.",
            commonErrors: ["Confusing with presentation."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three tips for effective slide design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Slide design",
                statement: "Simple, visual, one idea per slide.",
              },
            ],
            steps: [
              { reasoning: "Three valid tips.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. one key idea per slide; use charts/images not walls of text; large readable fonts — slides support speech, not replace it.",
            commonErrors: ["Listing without explanation."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student plans to present 20 slides of text in a 10-minute talk. Critique and improve.",
          parts: [
            { label: "a", prompt: "Problems with the plan", marks: 2 },
            { label: "b", prompt: "Suggested improvements", marks: 2 },
            { label: "c", prompt: "Timing advice", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Presentation critique",
                statement: "Too many slides, text-heavy, no structure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "20 slides in 10 min = rushed; text walls unreadable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "No room for analysis/evaluation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "e.g. 6-8 slides, key visuals, bullet points only.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Add signposting and conclusion slide.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "~1 min/slide; rehearse with timer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Leave time for questions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) too many slides, text-heavy, rushed (b) fewer slides, visuals, bullets, structure (c) ~1min/slide, rehearse, buffer for questions",
            commonErrors: ["Only criticising slide count."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is reading slides verbatim ineffective?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Delivery",
                statement: "Slides support; speaker must engage.",
              },
            ],
            steps: [
              {
                reasoning: "Monotone/robotic delivery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Audience reads faster than you speak.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It bores audiences, prevents eye contact and engagement, and the audience can read faster than you speak — use slides as prompts instead.",
            commonErrors: ["Only noting it's boring."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "What should you prepare for a viva?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva preparation",
                statement:
                  "Know RQ, methods, findings, limitations, counter-arguments.",
              },
            ],
            steps: [
              { reasoning: "Core content areas.", marks: 1, markCode: "M" },
              { reasoning: "Anticipated questions.", marks: 1, markCode: "M" },
              {
                reasoning: "Honest about limitations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Know your research question, methodology choices, key findings, limitations and the strongest counter-arguments — practice answering 'why did you…?' questions.",
            commonErrors: ["Only memorising the presentation."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'audience awareness'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Tailoring communication to listeners' knowledge and interests",
              },
              { id: "b", text: "Speaking loudly" },
              { id: "c", text: "Ignoring the audience" },
              { id: "d", text: "Using big words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Audience awareness",
                statement: "Tailor to listeners.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Tailoring to listeners",
            commonErrors: ["Confusing with public speaking generally."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "How should you answer 'What are the limitations of your research?' in a viva?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva answer",
                statement: "Honest, specific, shows rigour.",
              },
            ],
            steps: [
              {
                reasoning: "Names specific limitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains impact on findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows awareness of implications.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Suggests improvement.", marks: 1, markCode: "R" },
              { reasoning: "Confident delivery.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Name a specific limitation (e.g. small sample), explain how it affects confidence in findings, and note what you'd do differently — honesty demonstrates rigour.",
            commonErrors: ["Claiming no limitations or being vague."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is citing evidence important in presentations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence citation",
                statement: "Builds credibility, allows verification.",
              },
            ],
            steps: [
              { reasoning: "Credibility mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Verification enabled.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Citing sources shows claims are evidence-based, builds credibility, and lets the audience verify — uncited claims look like opinion.",
            commonErrors: ["Only noting 'it's required'."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a good opening 'hook' for a presentation on a global issue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hooks",
                statement: "Surprising fact, question, or human story.",
              },
            ],
            steps: [
              { reasoning: "Valid hook type.", marks: 1, markCode: "M" },
              { reasoning: "Why it works.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. a striking statistic ('1 in 9 people go hungry'), a provocative question, or a brief human story — it grabs attention and signals relevance.",
            commonErrors: ["Starting with 'My name is…' or agenda."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct arc for a GP presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion → context → hook → analysis" },
              {
                id: "b",
                text: "Hook → context → analysis → evaluation → conclusion",
              },
              { id: "c", text: "Analysis → hook → conclusion → context" },
              { id: "d", text: "Context → conclusion → hook → evaluation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation arc",
                statement: "Hook→context→analysis→evaluation→conclusion.",
              },
            ],
            steps: [
              { reasoning: "The standard presentation structure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Hook→context→analysis→evaluation→conclusion",
            commonErrors: ["Putting the conclusion first."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should presenters avoid reading slides verbatim?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Delivery",
                statement: "Slides support speech; they are not the speech.",
              },
            ],
            steps: [
              {
                reasoning: "Audience cannot read and listen simultaneously.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verbatim reading kills engagement and wastes the visual channel.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Audiences can't process reading and listening at once; slides should support, not replace, spoken argument.",
            commonErrors: ["Thinking more text on slides helps."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 12-minute presentation spends 6 minutes on analysis. What percentage is analysis?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Section/total x 100.",
              },
            ],
            steps: [
              { reasoning: "6/12 x 100 = 50%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Misallocating time across sections."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A presenter uses 20 slides; 8 contain more than one idea. What percentage follow the one-idea rule?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage compliant", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Slide audit",
                statement: "Compliant/total x 100.",
              },
            ],
            steps: [
              { reasoning: "12/20 x 100 = 60%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60%",
            commonErrors: ["Counting violations instead of compliant slides."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does rehearsing to fit the time slot matter in a GP presentation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time management",
                statement: "Rehearsal ensures complete coverage.",
              },
            ],
            steps: [
              {
                reasoning: "Running over risks cutting off evaluation/judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Running under wastes available argument space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Practice improves pace, signposting and confidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rehearsal guarantees all sections — especially the judgement — are delivered within the slot.",
            commonErrors: ["Practising content without timing."],
          },
        },
        {
          id: "ciegp-q-u4l8c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an opening hook and two signposting phrases for a 5-minute presentation on plastic pollution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Opening design",
                statement: "Hook + signposting structure.",
              },
            ],
            steps: [
              {
                reasoning: "Hook: striking statistic or image (e.g. '8 million tonnes enter oceans yearly').",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Signpost 1: transitions into analysis ('First, consider who produces the plastic').",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Signpost 2: transitions into evaluation ('On the other hand, bans have costs').",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hook is relevant, not gimmicky; fits 5-min scope.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Statistic hook + clear transition phrases guiding listeners through analysis and evaluation.",
            commonErrors: ["Generic hook unrelated to the issue."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l8-c2-issues",
      title: "Remaining global issues: environment, urbanisation, security",
      skill:
        "Analyse environmental degradation, urban challenges and security issues.",
      lesson: {
        sections: [
          {
            heading: "Environmental degradation",
            body: "Beyond climate: **deforestation**, **biodiversity loss**, **plastic pollution**, **soil degradation**. Drivers: consumption, industrial agriculture, weak regulation. Externalities: pollution costs borne by third parties. Solutions: protected areas, circular economy, regulation — but enforcement and equity issues arise (who pays?).",
          },
          {
            heading: "Urbanisation and security",
            body: "Urbanisation brings opportunities (jobs, services) and challenges (slums, congestion, inequality). **Informal settlements** house ~1 billion people with poor services. Security issues: terrorism, organised crime, cybercrime — globalised threats requiring international cooperation, but balancing security vs civil liberties is contested.",
          },
        ],
        keyFormulas: [
          {
            name: "Externality",
            statement: "Cost borne by third parties outside transaction",
          },
          {
            name: "Informal settlement",
            statement: "Urban housing without legal tenure/services",
          },
          {
            name: "Circular economy",
            statement: "Design out waste, keep resources in use",
          },
        ],
        workedExample: {
          problem: "Why is plastic pollution a global issue, not just local?",
          solution:
            "Plastics persist for centuries, travel via oceans to all countries, harm marine life globally — costs are borne by everyone while profits stay with producers (externality).",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l8c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'biodiversity loss'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Losing money" },
              {
                id: "b",
                text: "Decline in variety of life forms and ecosystems",
              },
              { id: "c", text: "Forest fires only" },
              { id: "d", text: "Animal extinction only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biodiversity loss",
                statement: "Decline in species/ecosystem variety.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Decline in life variety",
            commonErrors: ["Narrowing to extinction only."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an 'informal settlement'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal settlement",
                statement: "Urban housing without legal tenure or services.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Urban housing built without legal permission or services — e.g. slums and shantytowns lacking water, sanitation, secure tenure.",
            commonErrors: ["Confusing with homelessness only."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two drivers of deforestation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deforestation drivers",
                statement:
                  "Agriculture, logging, infrastructure, weak governance.",
              },
            ],
            steps: [
              { reasoning: "Two valid drivers.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. commercial agriculture (soy, palm oil) clearing land; illegal logging enabled by weak governance — both driven by global demand.",
            commonErrors: ["Only local causes."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'Urbanisation is inevitable and mostly beneficial.'",
          parts: [
            { label: "a", prompt: "Benefits of urbanisation", marks: 2 },
            { label: "b", prompt: "Costs/challenges", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urbanisation",
                statement: "Opportunities vs inequality/service strain.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e.g. jobs, services, innovation density.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evidence cited.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "e.g. slums, congestion, inequality, pollution.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evidence cited.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Beneficial if managed; harmful if unplanned.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Urbanisation concentrates opportunity but without planning produces slums and inequality — beneficial only with investment in services and affordable housing.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is plastic pollution a 'global' rather than local issue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plastic pollution",
                statement: "Persists, travels globally, costs externalised.",
              },
            ],
            steps: [
              {
                reasoning: "Persistence/travel mechanism.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Externality noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Plastics persist for centuries, travel via oceans worldwide, and harm marine life globally — producers profit while costs are borne by everyone (externality).",
            commonErrors: ["Only citing local litter."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two challenges of rapid urbanisation in poor countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urbanisation challenges",
                statement: "Service strain, informal housing, inequality.",
              },
            ],
            steps: [
              { reasoning: "Two valid challenges.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. housing demand outstrips supply → slums; services (water, sanitation, transport) can't keep pace with population growth.",
            commonErrors: ["Generic 'crowding' without specifics."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'cybercrime' as a global security issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Local fraud only" },
              { id: "b", text: "Only hacking" },
              {
                id: "c",
                text: "Crime committed via computers/networks, crossing borders easily",
              },
              { id: "d", text: "Physical theft" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cybercrime",
                statement: "Transnational digital crime.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Crime via digital networks",
            commonErrors: ["Narrowing to hacking."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the tension between security measures and civil liberties in counter-terrorism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Security vs liberty",
                statement: "Surveillance powers vs privacy/rights.",
              },
            ],
            steps: [
              {
                reasoning: "Security argument: prevent attacks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Liberty argument: surveillance abuses, chilling effects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Proportionality/judicial oversight needed.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Surveillance can prevent attacks but risks privacy abuse and normalising intrusion — proportionality, oversight and sunset clauses balance security with liberties.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'circular economy'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circular economy",
                statement: "Design out waste; keep resources in use.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Contrast with linear economy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "An economic model designing out waste — products are reused, repaired, remanufactured or recycled rather than discarded, contrasting with the 'take-make-waste' linear model.",
            commonErrors: ["Confusing with recycling only."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might conservation displace local communities?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation displacement",
                statement: "Protected areas exclude people who depend on land.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Equity issue noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Creating protected areas can evict communities that depend on the land for farming/hunting — conservation without community participation can harm the poor.",
            commonErrors: ["Assuming conservation always benefits all."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'externality' in environmental issues?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of subsidy" },
              {
                id: "b",
                text: "A cost or benefit borne by third parties outside the transaction",
              },
              { id: "c", text: "A tax on pollution" },
              { id: "d", text: "An international treaty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Externality",
                statement: "Cost/benefit on third parties.",
              },
            ],
            steps: [
              { reasoning: "Externality = spillover cost/benefit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cost/benefit on third parties",
            commonErrors: ["Confusing with a market price."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Roughly how many people live in informal settlements worldwide, and why does this matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Informal settlements",
                statement: "~1 billion people with poor services.",
              },
            ],
            steps: [
              {
                reasoning: "States ~1 billion figure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Scale shows urban poverty is a major global issue needing services/infrastructure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "About 1 billion — signalling massive unmet need for housing, water and sanitation.",
            commonErrors: ["Describing without scale or significance."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deforestation removes 10 million hectares per year and protected areas cover 3 million hectares. What percentage of the loss is offset by protected area?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Environmental data",
                statement: "Protected/loss x 100.",
              },
            ],
            steps: [
              { reasoning: "3/10 x 100 = 30%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
            commonErrors: ["Comparing wrong quantities."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cybercrime is estimated to cost $6 trillion annually against a world GDP of about $100 trillion. What percentage is this?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage of GDP", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cost share",
                statement: "Cost/GDP x 100.",
              },
            ],
            steps: [
              { reasoning: "6/100 x 100 = 6%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6%",
            commonErrors: ["Misreading trillions as billions."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a 'circular economy' is and give an example relevant to global waste issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circular economy",
                statement: "Design out waste; keep resources in use.",
              },
            ],
            steps: [
              {
                reasoning: "Defines: reuse/recycle/repair rather than dispose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. phone refurbishment or plastic recycling loops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces extraction and waste externalities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "An economic model designing out waste by keeping materials in use — e.g. refurbished electronics or closed-loop plastics.",
            commonErrors: ["Equating with simple recycling only."],
          },
        },
        {
          id: "ciegp-q-u4l8c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the tension between national security measures and civil liberties in responding to global threats like terrorism or cybercrime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Security vs liberty",
                statement: "Safety gains vs rights costs.",
              },
            ],
            steps: [
              {
                reasoning: "For security: surveillance/interception can prevent attacks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: mass surveillance chills freedoms and can be abused.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complicating: threats are globalised; cooperation needs trust.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: proportionate, legally bounded measures balance both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Security measures can prevent harm but risk eroding civil liberties; proportionate, legally bounded approaches best balance the tension.",
            commonErrors: ["One-sided security or liberty argument."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l8-c3-synthesis",
      title: "Synthesis across global issues",
      skill: "Connect multiple global issues and evaluate interlinkages.",
      lesson: {
        sections: [
          {
            heading: "Issues interconnect",
            body: "Global issues rarely exist in isolation: **climate change worsens food insecurity and migration**; **inequality fuels conflict**; **corruption diverts climate finance**; **pandemics exposed health inequality**. Strong GP answers recognise these interlinkages rather than treating issues as separate boxes.",
          },
          {
            heading: "Systems thinking",
            body: "Analyse issues as systems: identify feedback loops, unintended consequences, and leverage points. E.g. a policy to boost food production may increase water stress and emissions — solving one problem can worsen another. Evaluating requires considering second-order effects.",
          },
        ],
        keyFormulas: [
          {
            name: "Interlinkage",
            statement: "Issues interact; solving one may affect others",
          },
          {
            name: "Feedback loop",
            statement: "Effects that reinforce or dampen initial change",
          },
          {
            name: "Second-order effect",
            statement: "Unintended consequence of a policy",
          },
        ],
        workedExample: {
          problem: "How do climate change and migration interconnect?",
          solution:
            "Climate disasters (drought, sea-level rise) destroy livelihoods → push migration; but migration can relieve pressure on origin areas while straining host services — effects flow both ways.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l8c3-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is 'systems thinking' important in global issue analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It reveals interconnections and unintended consequences",
              },
              { id: "b", text: "It replaces evidence" },
              { id: "c", text: "It avoids complexity" },
              { id: "d", text: "It simplifies issues" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Systems thinking",
                statement: "Interconnections, feedback, consequences.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Reveals interconnections",
            commonErrors: ["Thinking it simplifies."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give an example of two interlinked global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Issue interlinkage",
                statement: "Issues interact causally.",
              },
            ],
            steps: [
              { reasoning: "Valid pair identified.", marks: 1, markCode: "M" },
              { reasoning: "Link explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. climate change and migration — droughts destroy livelihoods, driving displacement; or inequality and conflict — grievance fuels violence.",
            commonErrors: ["Listing without explaining link."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how solving one global issue might worsen another.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second-order effects",
                statement: "Policies have unintended consequences.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Concrete example.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. boosting food production via fertilisers may increase water pollution and emissions — solutions create new problems requiring evaluation.",
            commonErrors: ["Assuming solutions are cost-free."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse how climate change, food security and migration interconnect.",
          parts: [
            { label: "a", prompt: "Climate → food security link", marks: 2 },
            { label: "b", prompt: "Food security → migration link", marks: 2 },
            {
              label: "c",
              prompt: "Migration → back to origin/climate link",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Issue interlinkage",
                statement: "Causal chains across issues.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e.g. drought/heat reduce yields → food insecurity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Mechanism clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. food insecurity → livelihood loss → migration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Mechanism clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "e.g. migration relieves origin pressure but strains hosts; remittances can help.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Two-way effects noted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Climate change reduces yields → food insecurity → livelihood loss → migration; migration relieves origin pressure but strains hosts — feedback loops connect all three.",
            commonErrors: ["One-directional analysis."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'feedback loop' in issue analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feedback loop",
                statement: "Effects that reinforce or dampen initial change.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A process where effects feed back to amplify (positive) or dampen (negative) the initial change — e.g. poverty → poor health → lower productivity → deeper poverty.",
            commonErrors: ["Confusing with simple cause-effect."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of how inequality contributes to other global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality linkages",
                statement:
                  "Grievance → conflict; unequal access → health/education gaps.",
              },
            ],
            steps: [
              { reasoning: "Two valid links.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. inequality fuels grievance → conflict/instability; unequal access to education/health → human capital gaps → slower development.",
            commonErrors: ["Only one link or no mechanism."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'holistic' analysis mean for global issues?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using only statistics" },
              { id: "b", text: "Ignoring details" },
              { id: "c", text: "Studying one issue deeply" },
              {
                id: "d",
                text: "Considering interconnections and multiple perspectives together",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Holistic",
                statement: "Whole-system view.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Interconnections + perspectives",
            commonErrors: ["Confusing with superficial."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate: 'Global issues should be tackled one at a time for clarity.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sequential vs integrated",
                statement: "Focus aids clarity but misses interlinkages.",
              },
            ],
            steps: [
              {
                reasoning: "Sequential argument: manageable, clear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Integrated argument: interlinkages mean isolated solutions fail.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compromise: prioritise but acknowledge links.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sequential focus aids clarity but ignores interlinkages — isolated 'solutions' can worsen other problems; better to prioritise while acknowledging connections.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a policy succeed in one country but fail in another?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context dependence",
                statement: "Institutions, culture, resources differ.",
              },
            ],
            steps: [
              { reasoning: "Context factors named.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. a policy needing strong institutions fails where governance is weak — context (institutions, culture, resources) determines transferability.",
            commonErrors: ["Assuming policies are universal."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'leverage point' in systems thinking?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leverage point",
                statement: "Point where small change yields large effect.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A place in a system where intervention produces disproportionate impact — e.g. girls' education affects health, income and next generation simultaneously.",
            commonErrors: ["Confusing with any intervention point."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a valid example of global issues interconnecting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade only affects economics" },
              {
                id: "b",
                text: "Climate change worsens food insecurity and drives migration",
              },
              { id: "c", text: "Issues never affect each other" },
              { id: "d", text: "Health is separate from everything" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interlinkage",
                statement: "Issues interact across domains.",
              },
            ],
            steps: [
              { reasoning: "Climate→food→migration is a documented chain.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Climate → food insecurity → migration",
            commonErrors: ["Treating issues as isolated boxes."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'feedback loop' in systems thinking?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feedback loop",
                statement: "Effects that reinforce or dampen initial change.",
              },
            ],
            steps: [
              {
                reasoning: "Defines loop: output feeds back as input.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. poverty → poor health → lower earnings → deeper poverty.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A chain where effects circle back to reinforce or dampen the original change — e.g. poverty worsening health which deepens poverty.",
            commonErrors: ["Confusing with one-off cause-effect."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A food policy improves food security by +10 points but worsens water stress by -4 and emissions by -3. What is the net effect?",
          response: {
            type: "numeric",
            parts: [{ label: "Net effect", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Net impact",
                statement: "Sum of cross-issue effects.",
              },
            ],
            steps: [
              { reasoning: "10 - 4 - 3 = +3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "+3",
            commonErrors: ["Ignoring negative cross-impacts."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a system map, 3 issues are each linked to 2 other issues. How many distinct links are shown?",
          response: {
            type: "numeric",
            parts: [{ label: "Links", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "System mapping",
                statement: "Issues x links each.",
              },
            ],
            steps: [
              { reasoning: "3 x 2 = 6 links.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
            commonErrors: ["Counting issues instead of links."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should strong GP answers treat global issues as interconnected systems rather than separate topics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Systems thinking",
                statement: "Solutions create second-order effects.",
              },
            ],
            steps: [
              {
                reasoning: "Real issues interact — solving one can worsen another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. boosting food production raises water stress/emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interconnected analysis reveals unintended consequences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Issues interact and solutions have second-order effects; systems analysis prevents solving one problem by worsening another.",
            commonErrors: ["Listing interlinkages without analysing effects."],
          },
        },
        {
          id: "ciegp-q-u4l8c3-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse pandemic response as an interconnected system: identify at least two feedback loops and one leverage point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System analysis",
                statement: "Feedback loops + leverage points.",
              },
            ],
            steps: [
              {
                reasoning: "Loop 1 e.g. outbreak → lockdowns → economic harm → weaker health systems → worse outbreak.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Loop 2 e.g. vaccine inequity → variants emerge → renewed outbreaks everywhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Leverage point: e.g. global vaccine coordination or early surveillance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows how loops connect health, economy and governance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interconnected loops (health-economy, equity-variants) with leverage points like global vaccine coordination.",
            commonErrors: ["Describing pandemic facts without system structure."],
          },
        },
      ],
    },
  ],
};
