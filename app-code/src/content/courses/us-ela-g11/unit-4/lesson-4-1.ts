import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const SL: TextExtract = {
  title: "Discussion Transcript: Should the School Day Start Later?",
  author: "Written for Akademik Space",
  text: "Maya: I think we should start later. The research is clear — teens need more sleep. The AAP recommends 8:30 a.m. We're doing ourselves harm starting at 7:30.\n\nJordan: But what about sports and after-school jobs? If we start later, everything shifts later too. Students won't get home until 6 or 7. That doesn't help anyone.\n\nMaya: Actually, Seattle did it and attendance went up 4%. The logistics are solvable — stagger elementary and high school schedules. Elementary kids naturally wake earlier anyway.\n\nPriya: Can I add something? The issue isn't just sleep — it's mental health. Sleep-deprived teens have higher depression rates. This isn't a luxury, it's a health issue.\n\nJordan: I hear you, but my concern is practical. My sister works evenings to pay for college. If practice ends at 8, she can't do both.\n\nMaya: That's a real concern. Maybe the answer isn't one-size-fits-all — different schools could try different schedules. But we can't ignore the health data.",
};

const PRESENT: TextExtract = {
  title: "Presentation Excerpt: 'The Case for Later School Start Times'",
  author: "Written for Akademik Space",
  text: "[Slide 1: Title slide — 'The Case for Later School Start Times']\n\n[Speaker]: 'Good morning. I'm here to present evidence that our school should adopt a later start time. Not because I want more sleep — though I would appreciate it — but because the research demands it.'\n\n[Slide 2: Statistics — 'AAP Recommendation: 8:30 a.m. | Current Start: 7:45 a.m. | Sleep Deficit: 2+ hours/night']\n\n[Speaker]: 'Look at these numbers. We're starting 45 minutes before the recommended time. That means students are losing two hours of sleep every night. Not occasionally — chronically. The consequences aren't just grogginess.'\n\n[Slide 3: Health impacts — 'Depression rates +40% | Anxiety +30% | Car accidents +20% among teen drivers']\n\n[Speaker]: 'These aren't opinions — they're peer-reviewed findings. Sleep deprivation isn't a minor inconvenience. It's a public health crisis affecting our students' mental health, academic performance, and safety.'\n\n[Slide 4: Counterarguments — 'Sports conflicts | Bus schedules | Working parents']\n\n[Speaker]: 'I know the objections. But Seattle solved this — attendance rose 4%, grades improved, crashes dropped 8%. The obstacles are logistical, not insurmountable. The question is whether we have the will to act on what the science tells us.'",
};

export const lesson41: Lesson = {
  id: "ela11-u4-lesson-4-1",
  code: "4-1",
  title: "Collaborative Discussion and Building on Ideas",
  goal: "I CAN engage in collaborative discussions — building on others' ideas, asking probing questions, and citing textual evidence.",
  standards: [
    "SL.11-12.1",
    "SL.11-12.1a",
    "SL.11-12.1b",
    "SL.11-12.1c",
    "SL.11-12.1d",
  ],
  vocabulary: [
    {
      term: "Collaborative discussion",
      definition: "Group conversation building shared understanding.",
    },
    {
      term: "Building on ideas",
      definition: "Extending others' contributions.",
    },
    {
      term: "Probing question",
      definition: "Question that seeks deeper explanation.",
    },
    { term: "Textual evidence", definition: "Support from source material." },
    { term: "Counterpoint", definition: "Opposing view in discussion." },
    {
      term: "Synthesis",
      definition: "Combining ideas into new understanding.",
    },
  ],
  concepts: [
    {
      id: "ela11-u4-build",
      title: "Building on others' ideas",
      skill: "Extend and develop classmates' contributions in discussion.",
      lesson: {
        sections: [
          {
            heading: "Building vs responding",
            body: "Building on ideas = extending what someone said, not just agreeing or disagreeing. Maya says 'research is clear' → Priya builds: 'The issue isn't just sleep — it's mental health.' Priya extends Maya's point by adding dimension. Jordan counters with practical concerns — legitimate opposition that should be addressed, not dismissed.",
          },
          {
            heading: "Effective building techniques",
            body: "Techniques: **add dimension** ('not just X but also Y'), **provide example** ('Seattle did it'), **cite evidence** ('peer-reviewed findings'), **connect to broader context** ('public health crisis'). Avoid: **simple agreement** ('I agree'), **repeating** ('What Maya said'), **tangent** (off-topic). Building creates richer discussion than parallel monologues.",
          },
        ],
        keyFormulas: [
          {
            name: "Build = extend",
            statement: "Add dimension, not just agree.",
          },
          {
            name: "Techniques",
            statement: "Add dimension, example, evidence, context.",
          },
          {
            name: "Avoid",
            statement: "Simple agreement, repetition, tangent.",
          },
        ],
        workedExample: {
          problem: "How does Priya build on Maya's point about research?",
          solution:
            "'The issue isn't just sleep — it's mental health' — extends by adding mental health dimension to sleep argument.",
        },
      },
      questions: [
        {
          id: "ela11-u4-build-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SL,
          stem: "What's 'building on ideas' in discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating what was said" },
              { id: "b", text: "Extending others' contributions" },
              { id: "c", text: "Simply agreeing" },
              { id: "d", text: "Changing the topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Building on ideas",
                statement: "Extending contributions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Building = extending others' ideas — adding dimension, not just agreeing.",
                evidence: "building",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Extending others' contributions.",
            commonErrors: ["Confusing with simple agreement."],
          },
        },
        {
          id: "ela11-u4-build-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SL,
          stem: "Identify how Priya builds on Maya's point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Building technique",
                statement: "How extension works.",
              },
            ],
            steps: [
              {
                reasoning: "Maya: 'research is clear — teens need more sleep.'",
                evidence: "Maya",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Priya: 'The issue isn't just sleep — it's mental health' — adds dimension.",
                evidence: "Priya",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: extends sleep argument to mental health — richer discussion.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Priya adds mental health dimension to Maya's sleep argument — extends rather than just agreeing.",
            commonErrors: ["Not recognizing building vs agreeing."],
          },
        },
        {
          id: "ela11-u4-build-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SL,
          stem: "Analyze how the discussion demonstrates effective collaborative discourse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collaborative discourse",
                statement: "How discussion works.",
              },
              {
                kind: "skill",
                name: "Multiple perspectives",
                statement: "Building + countering.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Building: Maya→Priya (sleep→mental health), Maya→Jordan (research→practical concerns).",
                evidence: "building",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Countering: Jordan raises practical concerns — legitimate opposition addressed.",
                evidence: "countering",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: Maya acknowledges Jordan's concern ('real concern') while maintaining position.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Discussion demonstrates effective collaboration: participants build on ideas (Priya extends Maya's sleep→mental health), raise counterpoints (Jordan's practical concerns), and synthesize (Maya acknowledges concern while maintaining position).",
            commonErrors: [
              "Analyzing individual turns without seeing collaboration.",
            ],
          },
        },
        {
          id: "ela11-u4-build-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SL,
          parts: [
            {
              label: "a",
              prompt: "What's a 'counterpoint' in discussion?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example from the transcript.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counterpoint",
                statement: "Opposing view.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Opposing view raised in discussion — legitimate disagreement.",
                evidence: "counterpoint",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: Jordan's 'sports and after-school jobs' concern.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) Opposing view. (b) Jordan's sports/jobs concern.",
            commonErrors: ["Thinking counterpoint = attacking."],
          },
        },
      ],
    },
    {
      id: "ela11-u4-probing",
      title: "Probing Questions and Textual Evidence",
      skill:
        "Pose probing questions that deepen discussion and cite textual evidence to support claims.",
      lesson: {
        sections: [
          {
            heading: "Probing questions",
            body: "Probing questions seek deeper explanation: 'Can you explain why?' 'What evidence supports that?' 'How does that connect to X?' vs closed questions: 'Do you agree?' Effective probing: Maya asks 'But what about sports?' — challenges assumption, seeks justification. Priya's 'Can I add something?' opens space for contribution. Probing questions advance understanding, not just gather opinions.",
          },
          {
            heading: "Textual evidence in discussion",
            body: "Citing evidence strengthens discussion: Maya cites 'AAP recommends 8:30 a.m.' and 'Seattle attendance up 4%' — specific data. Jordan counters with personal example ('my sister works evenings') — experiential evidence. Both types valid but serve different functions: research evidence vs lived experience. Strong discussion integrates both.",
          },
        ],
        keyFormulas: [
          {
            name: "Probing = deeper",
            statement: "Seek explanation, not just opinion.",
          },
          {
            name: "Evidence types",
            statement: "Research data + lived experience.",
          },
          { name: "Integration", statement: "Both strengthen discussion." },
        ],
        workedExample: {
          problem: "How does Maya use evidence in discussion?",
          solution:
            "Cites AAP recommendation + Seattle data — specific research evidence supporting her position.",
        },
      },
      questions: [
        {
          id: "ela11-u4-probing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SL,
          stem: "What's a 'probing question'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhetorical question" },
              { id: "b", text: "Question seeking deeper explanation" },
              { id: "c", text: "Yes/no question" },
              { id: "d", text: "Leading question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probing question",
                statement: "Deeper explanation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Probing seeks deeper explanation — 'why?', 'what evidence?', 'how connected?'",
                evidence: "probing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Question seeking deeper explanation.",
            commonErrors: ["Confusing with closed questions."],
          },
        },
        {
          id: "ela11-u4-probing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SL,
          stem: "How does Maya use evidence to support her position?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence citation",
                statement: "Specific support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cites AAP recommendation: 'AAP recommends 8:30 a.m.' — authoritative source.",
                evidence: "AAP",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Cites Seattle data: 'attendance went up 4%' — empirical evidence.",
                evidence: "Seattle",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both specific, verifiable — strengthens argument vs vague claims.",
                evidence: "specific",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Cites AAP recommendation (authoritative) + Seattle data (empirical) — specific, verifiable evidence.",
            commonErrors: ["Using vague claims without evidence."],
          },
        },
        {
          id: "ela11-u4-probing-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SL,
          stem: "Analyze how the discussion integrates research evidence and lived experience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Research + experience.",
              },
              {
                kind: "skill",
                name: "Discussion quality",
                statement: "How evidence enriches.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Research evidence: Maya cites AAP, Seattle data — quantitative support.",
                evidence: "research",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Lived experience: Jordan cites sister's work schedule — qualitative insight.",
                evidence: "experience",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Integration: both types valid — research shows benefits, experience reveals barriers.",
                evidence: "integration",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Discussion integrates research evidence (AAP, Seattle data — quantitative benefits) and lived experience (Jordan's sister — qualitative barriers). Both valid, complementary — research shows what works, experience reveals implementation challenges.",
            commonErrors: ["Privileging one evidence type over other."],
          },
        },
        {
          id: "ela11-u4-probing-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SL,
          parts: [
            {
              label: "a",
              prompt:
                "What's the difference between closed and probing questions?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example of each from the transcript.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question types",
                statement: "Closed vs probing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Closed = yes/no or factual; probing = seeks deeper explanation.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Closed: 'Do you agree?' Probing: 'But what about sports?' (Maya).",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Closed = yes/no; probing = deeper explanation. (b) Closed: 'Do you agree?' Probing: 'But what about sports?'",
            commonErrors: ["Confusing question types."],
          },
        },
      ],
    },
    {
      id: "ela11-u4-facilitation",
      title: "Discussion Facilitation and Participation",
      skill:
        "Facilitate discussions — ensure equitable participation, manage dominant voices, and synthesize conclusions.",
      lesson: {
        sections: [
          {
            heading: "Facilitation skills",
            body: "Effective facilitators: **invite participation** ('Can I add something?' — Priya), **balance voices** (ensure quieter members speak), **redirect tangents**, **synthesize** (summarize key points). In transcript, Priya's 'Can I add something?' opens space — facilitator-like move. Maya's 'That's a real concern' validates Jordan — acknowledges without conceding.",
          },
          {
            heading: "Managing dominant voices",
            body: "Some participants dominate; others withdraw. Facilitators: 'Let's hear from someone who hasn't spoken,' 'What do others think?' Redirect: 'That's an interesting point — how does it connect to the research?' Balance: ensure all perspectives represented. In transcript, Maya speaks frequently but invites others ('Can I add something?' model). Jordan's practical concerns get acknowledged, not dismissed.",
          },
        ],
        keyFormulas: [
          { name: "Facilitate = enable", statement: "Not dominate, enable." },
          {
            name: "Invite + balance + redirect",
            statement: "Participation management.",
          },
          { name: "Synthesize", statement: "Summarize key points." },
        ],
        workedExample: {
          problem:
            "How does Priya's 'Can I add something?' function as facilitation?",
          solution:
            "Invites contribution — opens space for participation, ensures voice is heard.",
        },
      },
      questions: [
        {
          id: "ela11-u4-facilitation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SL,
          stem: "What's the role of a discussion facilitator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dominate conversation" },
              { id: "b", text: "End discussion quickly" },
              { id: "c", text: "Decide who's right" },
              { id: "d", text: "Enable equitable participation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Facilitation",
                statement: "Enable participation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Facilitator enables equitable participation — not dominate or decide.",
                evidence: "facilitate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Enable equitable participation.",
            commonErrors: ["Thinking facilitator = judge."],
          },
        },
        {
          id: "ela11-u4-facilitation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SL,
          stem: "How does Maya validate Jordan's concern without conceding her position?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Validation technique",
                statement: "Acknowledge + maintain.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Validates: 'That's a real concern' — acknowledges legitimacy.",
                evidence: "validate",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Maintains position: 'But we can't ignore the health data' — doesn't concede.",
                evidence: "maintain",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Suggests compromise: 'different schools could try different schedules' — explores middle ground.",
                evidence: "compromise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Validates ('real concern') + maintains ('can't ignore health data') + suggests compromise (different schedules) — acknowledges without conceding.",
            commonErrors: ["Thinking validation = concession."],
          },
        },
        {
          id: "ela11-u4-facilitation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SL,
          stem: "Analyze how the discussion demonstrates equitable participation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equitable participation",
                statement: "All voices heard.",
              },
              {
                kind: "skill",
                name: "Facilitation analysis",
                statement: "How participation managed.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Priya's 'Can I add something?' — invites contribution, opens space.",
                evidence: "invite",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Jordan's concerns get acknowledged ('real concern') — not dismissed.",
                evidence: "acknowledge",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Maya synthesizes — integrates Jordan's concern while maintaining position.",
                evidence: "synthesize",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Discussion demonstrates equitable participation: Priya invites contribution, Jordan's concerns acknowledged (not dismissed), Maya synthesizes by integrating concern while maintaining position. All voices heard and valued.",
            commonErrors: ["Thinking dominant voices drown out others."],
          },
        },
        {
          id: "ela11-u4-facilitation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SL,
          parts: [
            {
              label: "a",
              prompt: "What's 'synthesizing' in discussion?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example from the transcript.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combining ideas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Combining multiple perspectives into coherent understanding.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: Maya's 'different schools could try different schedules' — integrates concern with solution.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Combining perspectives into understanding. (b) Maya's 'different schedules' suggestion.",
            commonErrors: ["Confusing with summary."],
          },
        },
      ],
    },
    {
      id: "ela11-u4-eval",
      title: "Evaluating Reasoning and Claims",
      skill:
        "Evaluate reasoning quality and claim validity in discussion contributions.",
      lesson: {
        sections: [
          {
            heading: "Evaluating reasoning",
            body: "Strong reasoning: **clear claims** ('research is clear'), **evidence** (AAP, Seattle data), **logic** (biology → health → policy), **acknowledges limits** ('real concern'). Weak reasoning: **unsupported claims** ('everyone knows'), **logical fallacies** ('if you disagree you're wrong'), **ignoring counterarguments**. Evaluate: is claim clear? Is evidence sufficient? Is logic sound? Are limits acknowledged?",
          },
          {
            heading: "Claim evaluation criteria",
            body: "Ask: **Is it arguable?** (not fact) **Is it specific?** (not vague) **Is it supported?** (evidence provided) **Is it relevant?** (connects to discussion) **Is it consistent?** (doesn't contradict earlier points). Maya's claim 'research is clear' is arguable + supported (AAP) + relevant. Jordan's 'sports conflicts' is specific + relevant but less evidence-based.",
          },
        ],
        keyFormulas: [
          {
            name: "Five criteria",
            statement: "Arguable, specific, supported, relevant, consistent.",
          },
          {
            name: "Strong reasoning",
            statement: "Clear + evidence + logic + limits.",
          },
          {
            name: "Weak reasoning",
            statement: "Unsupported + fallacies + ignores.",
          },
        ],
        workedExample: {
          problem:
            "Evaluate Maya's claim 'research is clear — teens need more sleep.'",
          solution:
            "Arguable (not everyone agrees), specific (AAP recommendation), supported (Seattle data), relevant (core issue), consistent (maintains throughout).",
        },
      },
      questions: [
        {
          id: "ela11-u4-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SL,
          stem: "What makes a claim 'arguable'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reasonable people could disagree" },
              { id: "b", text: "It's emotional" },
              { id: "c", text: "It's a fact" },
              { id: "d", text: "It's short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Arguable claim",
                statement: "Debatable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arguable = reasonable people could disagree — not fact, not opinion.",
                evidence: "arguable",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Reasonable people could disagree.",
            commonErrors: ["Confusing with fact."],
          },
        },
        {
          id: "ela11-u4-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SL,
          stem: "Evaluate Maya's claim 'research is clear' using claim criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Claim evaluation",
                statement: "Five criteria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arguable: reasonable people could disagree about policy response.",
                evidence: "arguable",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Specific: AAP recommendation 8:30 a.m. — clear standard.",
                evidence: "specific",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Supported: Seattle data (attendance +4%, crashes -8%) — empirical evidence.",
                evidence: "supported",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Arguable (policy debate), specific (8:30 a.m.), supported (Seattle data) — strong claim.",
            commonErrors: ["Not evaluating against criteria."],
          },
        },
        {
          id: "ela11-u4-eval-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SL,
          stem: "Analyze the quality of reasoning in the discussion — what makes it effective?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reasoning evaluation",
                statement: "Quality assessment.",
              },
              {
                kind: "skill",
                name: "Discussion analysis",
                statement: "How reasoning works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Maya: evidence-based (AAP, Seattle) — strong reasoning.",
                evidence: "Maya",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Jordan: experiential (sister's schedule) — valid but less evidence-based.",
                evidence: "Jordan",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Priya: adds dimension (mental health) — extends reasoning.",
                evidence: "Priya",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Reasoning quality varies: Maya evidence-based (AAP, Seattle), Jordan experiential (sister), Priya dimensional (mental health). Effective discussion integrates different reasoning types — research, experience, extension.",
            commonErrors: ["Thinking all reasoning equally strong."],
          },
        },
        {
          id: "ela11-u4-eval-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SL,
          parts: [
            { label: "a", prompt: "What are 'logical fallacies'?", marks: 2 },
            {
              label: "b",
              prompt: "Give an example that could appear in discussion.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logical fallacy",
                statement: "Flawed reasoning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Errors in reasoning that undermine argument validity.",
                evidence: "fallacy",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'If you disagree you're wrong' — ad hominem/strawman.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Errors in reasoning. (b) 'If you disagree you're wrong' — ad hominem.",
            commonErrors: ["Not recognizing fallacies."],
          },
        },
      ],
    },
    {
      id: "ela11-u4-present",
      title: "Presentation Analysis and Audience Adaptation",
      skill:
        "Analyze presentations for effectiveness and adapt communication to audience.",
      lesson: {
        sections: [
          {
            heading: "Presentation structure",
            body: "Effective presentation: **hook** ('I'm here to present evidence'), **thesis** ('research demands it'), **evidence** (statistics, health impacts), **counterarguments** (acknowledged + addressed), **call to action** ('whether we have the will to act'). Sample presentation follows classic structure — clear, logical, persuasive.",
          },
          {
            heading: "Audience adaptation",
            body: "Speaker adapts to audience: 'Not because I want more sleep — though I would appreciate it' (self-aware humor), 'I know the objections' (acknowledges audience concerns), 'the question is whether we have the will' (appeals to shared values). Effective presenters anticipate audience reactions and address them proactively.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure",
            statement: "Hook → thesis → evidence → counter → action.",
          },
          { name: "Adaptation", statement: "Anticipate audience reactions." },
          { name: "Persuasion", statement: "Logic + emotion + values." },
        ],
        workedExample: {
          problem: "How does the presenter adapt to audience concerns?",
          solution:
            "'I know the objections' — acknowledges audience concerns before addressing them, builds trust.",
        },
      },
      questions: [
        {
          id: "ela11-u4-present-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENT,
          stem: "What's the structure of an effective presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only conclusion" },
              { id: "b", text: "Random information" },
              { id: "c", text: "Hook → thesis → evidence → counter → action" },
              { id: "d", text: "Only evidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Presentation structure",
                statement: "Logical flow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hook → thesis → evidence → counterarguments → call to action.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Hook → thesis → evidence → counter → action.",
            commonErrors: ["Missing structural elements."],
          },
        },
        {
          id: "ela11-u4-present-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENT,
          stem: "How does the presenter acknowledge counterarguments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument handling",
                statement: "Acknowledge + address.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledges: 'I know the objections' — validates audience concerns.",
                evidence: "acknowledge",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Lists: 'Sports conflicts | Bus schedules | Working parents' — specific concerns.",
                evidence: "list",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Addresses: 'Seattle solved this' — provides evidence countering concerns.",
                evidence: "address",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Acknowledges ('I know the objections') → lists specific concerns → addresses with Seattle evidence.",
            commonErrors: ["Ignoring counterarguments."],
          },
        },
        {
          id: "ela11-u4-present-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Analyze how the presentation adapts language and tone to its audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Language + tone.",
              },
              {
                kind: "skill",
                name: "Persuasive technique",
                statement: "How adaptation persuades.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Self-aware humor: 'Not because I want more sleep — though I would appreciate it' — relatable.",
                evidence: "humor",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Acknowledges concerns: 'I know the objections' — validates audience.",
                evidence: "acknowledge",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Appeals to values: 'whether we have the will to act' — shared responsibility.",
                evidence: "values",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Presentation adapts effectively: self-aware humor (relatable), acknowledges concerns (validates), appeals to values (shared responsibility). Language and tone calibrated for audience persuasion.",
            commonErrors: ["Not recognizing adaptation techniques."],
          },
        },
        {
          id: "ela11-u4-present-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENT,
          parts: [
            {
              label: "a",
              prompt: "What's a 'call to action' in presentation?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example from the presentation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Call to action",
                statement: "Closing appeal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Closing appeal urging audience to act/decide.",
                evidence: "CTA",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'whether we have the will to act on what the science tells us.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Closing appeal to act. (b) 'Whether we have the will to act.'",
            commonErrors: ["Missing CTA element."],
          },
        },
      ],
    },
    {
      id: "ela11-u4-integrated",
      title: "Integrated Discussion and Presentation Practice",
      skill:
        "Integrate discussion skills, probing questions, evidence citation, and presentation analysis in comprehensive practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Effective communication requires: **discussion** (building, probing, facilitating), **evidence** (research + experience), **evaluation** (reasoning quality), **presentation** (structure, adaptation). The transcript shows discussion skills; the presentation shows presentation skills. Both require clear communication, evidence support, audience awareness.",
          },
          {
            heading: "Exam application",
            body: "Exam questions often require: 'Analyze how the discussion demonstrates collaborative skills' or 'Evaluate the presentation's effectiveness.' Requires applying multiple skills: identify techniques, analyze function, assess quality.",
          },
        ],
        keyFormulas: [
          {
            name: "Four skills",
            statement: "Discussion + evidence + evaluation + presentation.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          {
            name: "Exam synthesis",
            statement: "Combine communication skills.",
          },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze the discussion?",
          solution:
            "Identify building techniques → evaluate evidence → assess reasoning → synthesize conclusions.",
        },
      },
      questions: [
        {
          id: "ela11-u4-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SL,
          stem: "What four skills are needed for comprehensive communication analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Discussion + evidence + evaluation + presentation",
              },
              { id: "b", text: "Only discussion" },
              { id: "c", text: "Only presentation" },
              { id: "d", text: "Only grammar" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive communication",
                statement: "Four skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discussion + evidence + evaluation + presentation = comprehensive.",
                evidence: "four skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Discussion + evidence + evaluation + presentation.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u4-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SL,
          stem: "Apply two communication skills to the discussion transcript.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Building: Priya extends Maya's sleep→mental health.",
                evidence: "building",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence: Maya cites AAP + Seattle data.",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Facilitation: Priya's 'Can I add something?' invites participation.",
                evidence: "facilitation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Building (Priya extends), evidence (Maya cites), facilitation (Priya invites).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u4-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Write an analysis paragraph evaluating the presentation's effectiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Comprehensive evaluation",
                statement: "How choices serve persuasion.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Structure: hook→thesis→evidence→counter→action — logical flow.",
                evidence: "structure",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: statistics + health impacts + Seattle data — compelling support.",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Adaptation: acknowledges objections, self-aware humor, appeals to values.",
                evidence: "adaptation",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The presentation is effective through structure (logical flow from hook to action), evidence (statistics, health impacts, Seattle data), and adaptation (acknowledges objections, self-aware humor, appeals to values). These elements work together to persuade audience.'",
            commonErrors: ["Analyzing elements separately."],
          },
        },
        {
          id: "ela11-u4-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SL,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-skill?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each skill alone is partial; together reveal how choices serve purpose.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: structure+evidence+adaptation shows presentation effectiveness — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal purpose. (b) Structure+evidence+adaptation shows effectiveness.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
