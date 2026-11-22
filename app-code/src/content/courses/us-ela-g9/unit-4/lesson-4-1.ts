import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const DEBATE: TextExtract = {
  title: "Seminar Excerpt: Should the School Day Start Later?",
  author: "Written for Akademik Space",
  text: "The seminar table was quiet for a moment after Mr. Osei read the resolution aloud. 'This house believes the school day should begin no earlier than 8:30.'\n\nPriya spoke first. 'The American Academy of Pediatrics recommends it. Teen sleep cycles shift during puberty — a 7:25 start fights biology, not laziness.'\n\n'Correlation isn't causation,' said Devon. 'Seattle saw gains, but Minneapolis saw grades dip. One district's results don't prove a universal fix.'\n\nAmara leaned forward. 'But Devon, you're citing one counterexample against a body of research. The question isn't whether every district improves — it's whether the average student benefits.'\n\n'Fair,' Devon conceded. 'But implementation matters. Bus contracts, athletic schedules, working parents — the policy fails if logistics collapse.'\n\nMr. Osei tapped the table. 'Notice what just happened — Devon revised his position from 'it won't work' to 'it depends on implementation.' That's the seminar working.'",
};

const DISCUSS: TextExtract = {
  title: "Group Discussion: Is Homework Effective?",
  author: "Written for Akademik Space",
  text: "For homework, the research is genuinely mixed. Meta-analyses show a positive correlation with achievement in secondary school — but the effect size is small, roughly equivalent to moving from the 50th to the 55th percentile. At elementary level, the correlation is near zero.\n\nThe quality of homework matters more than quantity. Practice that consolidates new learning helps; busywork that repeats mastered material does not. Feedback timing is crucial — homework returned a week later has little corrective value.",
};

export const lesson41: Lesson = {
  id: "ela9-u4-lesson-4-1",
  code: "4-1",
  title: "Collaborative Discussion and Building on Ideas",
  goal: "I CAN contribute substantively to academic discussions by building on others' ideas, challenging with evidence, and tracking multiple perspectives.",
  standards: [
    "SL.9-10.1",
    "SL.9-10.1a",
    "SL.9-10.1b",
    "SL.9-10.1c",
    "SL.9-10.1d",
  ],
  vocabulary: [
    {
      term: "Seminar",
      definition:
        "Structured small-group discussion where participants analyze texts and ideas.",
    },
    {
      term: "Building on ideas",
      definition:
        "Extending or refining a classmate's point rather than just adding a separate one.",
    },
    {
      term: "Rebuttal",
      definition:
        "A response that challenges a claim with reasoning or evidence.",
    },
    {
      term: "Concession",
      definition:
        "Acknowledging the strength of an opposing point before responding to it.",
    },
    {
      term: "Synthesis",
      definition:
        "Combining multiple viewpoints into a more complete understanding.",
    },
    {
      term: "Steel-manning",
      definition:
        "Representing an opponent's argument in its strongest form before rebutting.",
    },
  ],
  concepts: [
    {
      id: "ela9-u4-build",
      title: "Building on ideas and tracking perspectives",
      skill:
        "Extend classmates' contributions and track multiple positions in a discussion.",
      lesson: {
        sections: [
          {
            heading: "From parallel to cumulative discussion",
            body: "Weak discussions produce parallel monologues — each person states an opinion without engaging others. Strong discussions are **cumulative**: Amara's 'you're citing one counterexample against a body of research' directly engages Devon's Minneapolis point and reframes the standard of evidence. She builds ON his idea — she doesn't ignore it, she answers it. Track positions as they evolve: Devon moved from 'it won't work' to 'it depends on implementation' — that's real discussion.",
          },
          {
            heading: "Evidence standards in discussion",
            body: "Grade 9 discussions require evidence-aware reasoning. Priya cites the AAP recommendation; Devon counters with Minneapolis data; Amara distinguishes between universal proof and average benefit. Notice the escalation: each speaker raises the evidentiary bar. A strong participant asks 'what would change your mind?' and notices when someone's position shifts — Devon's concession is the discussion's most important moment.",
          },
        ],
        keyFormulas: [
          {
            name: "Cumulative > parallel",
            statement: "Engage with others' points, don't just add your own.",
          },
          {
            name: "Evidence-aware reasoning",
            statement: "Cite sources; distinguish correlation from causation.",
          },
          {
            name: "Track position shifts",
            statement:
              "Note when participants revise — that's discussion working.",
          },
        ],
        workedExample: {
          problem:
            "How did Amara build on Devon's Minneapolis point rather than ignore it?",
          solution:
            "She acknowledged his evidence ('you're citing one counterexample') then reframed the standard: the policy question is average benefit, not universal improvement. She engaged his exact point.",
        },
      },
      questions: [
        {
          id: "ela9-u4-build-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DEBATE,
          stem: "What made Amara's response to Devon 'cumulative' rather than parallel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She agreed with him" },
              { id: "b", text: "She spoke after him" },
              {
                id: "c",
                text: "She directly engaged his Minneapolis evidence",
              },
              { id: "d", text: "She changed the topic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cumulative discussion",
                statement: "Building on others' ideas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Amara addressed Devon's specific counterexample and reframed the standard — direct engagement.",
                evidence: "you're citing one counterexample",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. She directly engaged his Minneapolis evidence.",
            commonErrors: [
              "Thinking speaking after = building on; it requires engagement.",
            ],
          },
        },
        {
          id: "ela9-u4-build-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DEBATE,
          stem: "Explain how Devon's position shifted during the discussion and why that matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Position tracking",
                statement: "Notice when views evolve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Initial: 'it won't work' / counterexample-based rejection.",
                evidence: "Minneapolis saw grades dip",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Final: 'it depends on implementation' — logistics, not principle, became the issue.",
                evidence: "the policy fails if logistics collapse",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Shift shows evidence changed his mind — discussion produced refinement, not just repetition.",
                evidence: "That's the seminar working",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Devon moved from 'won't work' to 'depends on implementation' — evidence refined his position, showing the discussion worked.",
            commonErrors: ["Missing that his concession is the key event."],
          },
        },
        {
          id: "ela9-u4-build-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DEBATE,
          stem: "Write a response to Devon's final point ('implementation matters') that builds on it while advancing the pro-8:30 position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Building + advancing",
                statement: "Engage then extend.",
              },
              {
                kind: "skill",
                name: "Evidence use",
                statement: "Support with reasoning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Acknowledge his point: implementation is a real constraint — districts must phase changes.",
                evidence: "implementation matters",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Extend: Seattle/Minnesota show logistics are solvable — adjusted bus contracts over 1-2 years.",
                evidence: "Bus contracts, athletic schedules",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Advance: concede logistics then argue benefits exceed manageable costs — reframes rather than dismisses.",
                evidence: "advance the pro-8:30 position",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'You're right that implementation is the real test — but Seattle and Minneapolis both managed bus and activity schedules within two years. The question isn't whether logistics are easy, it's whether the health and achievement gains justify a solvable problem.'",
            commonErrors: ["Dismissing his point instead of building on it."],
          },
        },
        {
          id: "ela9-u4-build-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DEBATE,
          parts: [
            { label: "a", prompt: "What is a 'steel-man' rebuttal?", marks: 2 },
            {
              label: "b",
              prompt: "Give an example from the discussion.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steel-manning",
                statement: "Strongest form of opponent's argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Representing opponent's argument in its strongest form before rebutting.",
                evidence: "steel-man",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Amara engaged Devon's Minneapolis evidence directly rather than straw-manning his position.",
                evidence: "one counterexample",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Representing opponent's argument in strongest form before rebutting. (b) Amara engaged Devon's actual Minneapolis evidence, not a weaker version.",
            commonErrors: ["Confusing with straw-manning — opposite approach."],
          },
        },
      ],
    },
    {
      id: "ela9-u4-reasoning",
      title: "Evidence standards and reasoning in discussion",
      skill:
        "Evaluate the quality of evidence and reasoning used in academic discussions.",
      lesson: {
        sections: [
          {
            heading: "Evaluating evidence quality",
            body: "Not all evidence is equal: **peer-reviewed research** > **news reports** > **anecdotes** > **unsourced claims**. In the homework discussion, 'meta-analyses show positive correlation but small effect size' is stronger than 'my friend says homework helps.' Ask: Is the source credible? Is the claim quantified? Does it address the exact question? Devon's Minneapolis example is real data but limited — Amara correctly noted it's one counterexample, not a pattern.",
          },
          {
            heading: "Reasoning fallacies to avoid",
            body: "Watch for: **hasty generalization** (one district → all districts), **false dichotomy** ('either later starts or chaos'), **appeal to authority** without evidence, **ad hominem** (attacking person not argument). Devon avoided hasty generalization by citing a specific counterexample; Amara avoided false dichotomy by reframing the question. Strong discussants name these fallacies when they appear.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence hierarchy",
            statement: "Peer-reviewed > news > anecdote > unsourced.",
          },
          {
            name: "Ask about source",
            statement:
              "Who says this? Is it quantified? Does it answer the question?",
          },
          {
            name: "Name fallacies",
            statement: "Hasty generalization, false dichotomy, ad hominem.",
          },
        ],
        workedExample: {
          problem:
            "Why is 'meta-analyses show small positive effect' stronger evidence than 'my friend says homework helps'?",
          solution:
            "Meta-analyses aggregate many studies with quantified effect sizes — systematic evidence. Anecdote is single unverified experience — weak evidence.",
        },
      },
      questions: [
        {
          id: "ela9-u4-reasoning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DISCUSS,
          stem: "Which is the strongest evidence in the homework discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teacher's opinion" },
              { id: "b", text: "Meta-analysis with effect size" },
              { id: "c", text: "Common sense" },
              { id: "d", text: "Anecdote about a friend" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence hierarchy",
                statement: "Systematic research strongest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Meta-analyses aggregate studies with quantified effects — systematic evidence.",
                evidence: "Meta-analyses show a positive correlation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Meta-analysis with effect size.",
            commonErrors: ["Choosing (c) — opinion isn't evidence."],
          },
        },
        {
          id: "ela9-u4-reasoning-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DISCUSS,
          stem: "Explain why 'one district's results don't prove a universal fix' is a valid reasoning move.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Avoiding hasty generalization",
                statement: "Single case ≠ universal rule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Devon cites Minneapolis (one district) as counterexample — valid data but limited scope.",
                evidence: "Minneapolis saw grades dip",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The claim 'one district's results don't prove universal fix' identifies hasty generalization risk.",
                evidence: "one district's results",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Valid because policy questions need average effects across many contexts, not single cases.",
                evidence: "universal fix",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Valid because it avoids hasty generalization — one district's result can't establish universal policy; need average effects across contexts.",
            commonErrors: [
              "Dismissing single counterexample — it's valid but limited evidence.",
            ],
          },
        },
        {
          id: "ela9-u4-reasoning-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSS,
          stem: "Evaluate the quality of the homework research evidence. What's strong? What's missing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence evaluation",
                statement: "Assess quality systematically.",
              },
              {
                kind: "skill",
                name: "Gap identification",
                statement: "What's missing?",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Strong: meta-analyses cited, effect size quantified (50th→55th percentile), distinction by level.",
                evidence: "Meta-analyses show a positive correlation",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Missing: specific studies named, feedback timing evidence cited but not sourced, no discussion of homework types.",
                evidence: "effect size is small",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Overall: better than anecdote but could be stronger with named studies and more granular analysis.",
                evidence: "quality of homework matters",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Strong: meta-analyses, quantified effect size, level distinctions. Missing: named studies, sourced feedback-timing claims, homework-type breakdown. Overall credible but could cite specific research.",
            commonErrors: [
              "Accepting 'meta-analyses' without questioning which ones.",
            ],
          },
        },
        {
          id: "ela9-u4-reasoning-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DEBATE,
          parts: [
            {
              label: "a",
              prompt: "Name two reasoning fallacies to avoid in discussion.",
              marks: 2,
            },
            { label: "b", prompt: "Which did Devon avoid and how?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fallacy identification",
                statement: "Recognize reasoning errors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Hasty generalization (one case → universal) and false dichotomy (either/or).",
                evidence: "fallacies",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Devon avoided hasty generalization by citing specific counterexample, not claiming all districts fail.",
                evidence: "one district's results",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Hasty generalization, false dichotomy. (b) Devon avoided hasty generalization — cited one counterexample, didn't claim universal failure.",
            commonErrors: ["Naming fallacies without examples."],
          },
        },
      ],
    },
    {
      id: "ela9-u4-participation",
      title: "Discussion roles and participation",
      skill:
        "Take on productive roles in discussions: facilitator, evidence-keeper, synthesizer, questioner.",
      lesson: {
        sections: [
          {
            heading: "Productive discussion roles",
            body: "Discussions need different contributions: **facilitator** keeps everyone engaged ('Devon, you haven't responded to Amara's point'); **evidence-keeper** tracks sources ('we have AAP, Seattle, Minneapolis — anything else?'); **synthesizer** combines views ('so the disagreement is really about implementation, not principle'); **questioner** probes assumptions ('what would change your mind?'). Strong seminars rotate roles — no one dominates, all perspectives surface.",
          },
          {
            heading: "When to speak and when to listen",
            body: "Timing matters: speak when you have evidence or a genuine question; listen when others are building on your point; intervene when discussion stalls or goes off-track; stay silent when you'd just repeat. The best contribution is often a question that advances thinking: 'If Minneapolis dipped, what happened differently there?' — surfaces new evidence need rather than asserting opinion.",
          },
        ],
        keyFormulas: [
          {
            name: "Roles serve discussion",
            statement: "Facilitator, evidence-keeper, synthesizer, questioner.",
          },
          {
            name: "Speak with purpose",
            statement: "Evidence or genuine question — not just to talk.",
          },
          {
            name: "Questions advance",
            statement: "Good questions surface new thinking.",
          },
        ],
        workedExample: {
          problem: "What role did Mr. Osei play at the end of the seminar?",
          solution:
            "Facilitator/synthesizer — he named Devon's position shift and explained why it mattered, modeling how to track discussion progress.",
        },
      },
      questions: [
        {
          id: "ela9-u4-participation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DEBATE,
          stem: "What role did Mr. Osei play at the end of the seminar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Timekeeper" },
              { id: "b", text: "Facilitator/synthesizer" },
              { id: "c", text: "Devil's advocate" },
              { id: "d", text: "Note-taker" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Facilitator role",
                statement: "Guides and synthesizes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "He named Devon's position shift and explained its significance — synthesis/facilitation.",
                evidence: "That's the seminar working",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Facilitator/synthesizer.",
            commonErrors: [
              "Thinking teacher just manages time — he added analytical value.",
            ],
          },
        },
        {
          id: "ela9-u4-participation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DEBATE,
          stem: "Name three productive discussion roles and give an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion roles",
                statement: "Different contributions needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Facilitator: keeps discussion on track — 'Let's return to the implementation question.'",
                evidence: "facilitator",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence-keeper: tracks sources — 'We have AAP, Seattle, Minneapolis data.'",
                evidence: "evidence-keeper",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Questioner: probes assumptions — 'What would change your mind?'",
                evidence: "questioner",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: Facilitator ('let's stay on implementation'), evidence-keeper ('we have AAP + Seattle data'), questioner ('what evidence would change your position?').",
            commonErrors: ["Naming roles without examples."],
          },
        },
        {
          id: "ela9-u4-participation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSS,
          stem: "Design a 10-minute seminar segment on homework effectiveness. Assign roles and plan the flow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Seminar planning",
                statement: "Structure productive discussion.",
              },
              {
                kind: "skill",
                name: "Role assignment",
                statement: "Distribute contributions.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Opening (2 min): facilitator frames question — 'Does homework improve learning, or is it busywork?'",
                evidence: "design seminar",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence phase (5 min): evidence-keeper shares meta-analysis data; participants respond with own experiences.",
                evidence: "evidence phase",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis (3 min): synthesizer combines — 'evidence supports quality over quantity'; questioner probes — 'what counts as quality?'",
                evidence: "synthesis phase",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example plan: 0-2min facilitator frames question → 2-7min evidence-keeper shares meta-analysis data, participants respond → 7-10min synthesizer combines views, questioner probes assumptions. Roles ensure all perspectives surface.",
            commonErrors: ["Unstructured discussion — needs roles and phases."],
          },
        },
        {
          id: "ela9-u4-participation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DEBATE,
          parts: [
            {
              label: "a",
              prompt: "When should you stay silent in a discussion?",
              marks: 2,
            },
            { label: "b", prompt: "When should you intervene?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Participation timing",
                statement: "Strategic speaking.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "When you'd just repeat, when others are building on your point, when discussion is flowing well.",
                evidence: "stay silent",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "When discussion stalls, goes off-track, or someone hasn't been heard.",
                evidence: "intervene",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) When repeating, when others building on your point, when flowing well. (b) When stalled, off-track, or someone unheard.",
            commonErrors: ["Thinking silence = not participating."],
          },
        },
      ],
    },
  ],
};
