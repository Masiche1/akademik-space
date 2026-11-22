import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const DISCUSSION: TextExtract = {
  title: "Seminar Discussion: Should School Start Later?",
  author: "Written for Akademik Space",
  text: "Facilitator: Today we're discussing whether high schools should start later. Maya, you researched sleep research — what did you find?\n\nMaya: The American Academy of Pediatrics recommends start times of 8:30 a.m. or later for teens, citing that adolescent circadian rhythms shift later — teens literally can't fall asleep before 11 p.m.\n\nJordan: But schools would have to end later too, which conflicts with sports and jobs. My cousin's school tried it and bus schedules became a nightmare.\n\nPriya: That's a logistics problem, not a reason against it. districts like Seattle changed start times and saw improved attendance and grades within a year.\n\nJordan: Improved grades? For whom? My cousin says the kids who benefited already had involved parents. The kids who struggle most didn't see much change.\n\nMaya: That's actually an important point — sleep might not fix underlying inequity. Maybe we need both later start AND better support systems.",
};

export const lesson41: Lesson = {
  id: "ela10-u4-lesson-4-1",
  code: "4-1",
  title: "Collaborative Discussion: Building on Ideas",
  goal: "I CAN contribute to academic discussions by building on others' ideas, asking probing questions, and citing evidence.",
  standards: [
    "SL.9-10.1",
    "SL.9-10.1a",
    "SL.9-10.1b",
    "SL.9-10.1c",
    "SL.9-10.1d",
  ],
  vocabulary: [
    {
      term: "Building on ideas",
      definition: "Extending or refining another's contribution.",
    },
    {
      term: "Probing question",
      definition: "Question that asks for deeper explanation or evidence.",
    },
    { term: "Textual evidence", definition: "Support from texts or research." },
    {
      term: "Turn-taking",
      definition: "Fair distribution of speaking opportunities.",
    },
    {
      term: "Consensus",
      definition: "General agreement reached through discussion.",
    },
    {
      term: "Synthesis",
      definition: "Combining multiple viewpoints into new understanding.",
    },
  ],
  concepts: [
    {
      id: "ela10-u4-build",
      title: "Building on others' ideas",
      skill:
        "Extend and refine classmates' contributions rather than just adding new points.",
      lesson: {
        sections: [
          {
            heading: "How to build effectively",
            body: "Building means connecting to what was just said: 'Maya mentioned circadian rhythms — that connects to Jordan's point about sports, because later start times could actually help athletes too, since sleep deprivation hurts performance.' This is stronger than 'I agree' or launching an unrelated point. You acknowledge, extend, and sometimes complicate the previous idea.",
          },
          {
            heading: "Complicating ideas respectfully",
            body: "The strongest discussions complicate, not just agree: 'Priya's Seattle example shows grades improved — but Jordan's cousin raises a real equity question. Maybe the gains were concentrated among students with resources. That's worth investigating before we conclude later start times help everyone.' You preserve the good point while adding necessary complexity.",
          },
        ],
        keyFormulas: [
          {
            name: "Acknowledge → extend → complicate",
            statement: "Building sequence.",
          },
          {
            name: "Connect explicitly",
            statement: "'That connects to...' 'Building on...'",
          },
          {
            name: "Equity check",
            statement: "Ask who benefits and who doesn't.",
          },
        ],
        workedExample: {
          problem: "How would you build on Maya's circadian rhythm point?",
          solution:
            "'Maya's circadian rhythm research connects to Jordan's scheduling concern — if teen biology shifts later, early sports practices may be equally problematic. Sleep research could argue for later practices too.'",
        },
      },
      questions: [
        {
          id: "ela10-u4-build-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DISCUSSION,
          stem: "What does 'building on ideas' mean in discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extending or refining another's contribution" },
              { id: "b", text: "Agreeing with everything said" },
              { id: "c", text: "Changing the topic" },
              { id: "d", text: "Talking louder" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Building on ideas",
                statement: "Extend/refine.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Building = connecting to and extending prior contributions, not just agreeing.",
                evidence: "building",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Extending or refining another's contribution.",
            commonErrors: ["Confusing with simple agreement."],
          },
        },
        {
          id: "ela10-u4-build-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DISCUSSION,
          stem: "Write a response that builds on Priya's Seattle example while addressing Jordan's equity concern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Building + complicating",
                statement: "Extend and add complexity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledge Priya's point: Seattle showed measurable gains.",
                evidence: "Seattle",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect to Jordan's concern: gains may be unevenly distributed.",
                evidence: "equity",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Extend: 'The policy question becomes whether later start helps everyone or mainly those with existing advantages.'",
                evidence: "extend",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Priya's Seattle data is compelling — measurable gains within a year. But Jordan's cousin raises the key question: did those gains reach the students who struggle most? The policy may need to be paired with targeted support, not just a schedule change.'",
            commonErrors: ["Ignoring one speaker's point."],
          },
        },
        {
          id: "ela10-u4-build-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSSION,
          stem: "Analyze how Maya's final comment demonstrates effective discussion skills.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion analysis",
                statement: "How skills work.",
              },
              {
                kind: "skill",
                name: "Synthesis",
                statement: "Combining viewpoints.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Maya validates Jordan's point: 'That's actually an important point' — acknowledges contribution.",
                evidence: "validate",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Adds nuance: 'sleep might not fix underlying inequity' — complicates earlier consensus.",
                evidence: "nuance",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Proposes synthesis: 'Maybe we need both later start AND better support' — combines positions.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Maya's final comment demonstrates advanced discussion: validates Jordan's equity concern, adds nuance (sleep doesn't fix inequity), and synthesizes positions ('both later start AND better support'). She builds rather than debates — moves discussion toward integrated solution.",
            commonErrors: ["Describing what she said without analyzing skill."],
          },
        },
        {
          id: "ela10-u4-build-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DISCUSSION,
          parts: [
            {
              label: "a",
              prompt: "Why is 'I agree' weak discussion contribution?",
              marks: 2,
            },
            { label: "b", prompt: "What makes it stronger?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion quality",
                statement: "Depth vs surface.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'I agree' adds nothing — doesn't extend, complicate, or provide new evidence.",
                evidence: "weak",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Stronger: 'I agree, and building on that...' — adds evidence, example, or complication.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'I agree' adds nothing — no extension or complication. (b) 'I agree, and building on that...' with new evidence or complexity.",
            commonErrors: ["Thinking agreement = participation."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-probing",
      title: "Probing Questions and Evidence",
      skill:
        "Ask questions that deepen discussion and require evidence-based responses.",
      lesson: {
        sections: [
          {
            heading: "Types of probing questions",
            body: "**Clarification**: 'When you say equity, do you mean resource equity or outcome equity?' **Evidence**: 'What data supports that claim about grades?' **Implication**: 'If later start helps athletes too, does that change the cost-benefit?' **Counterexample**: 'Are there districts where later start didn't help?' Good questions move discussion forward — they expose assumptions, demand evidence, or explore implications.",
          },
          {
            heading: "Responding to questions",
            body: "When asked a probing question, don't get defensive — treat it as invitation to clarify: 'Good question — when I said equity, I meant both resource and outcome equity. The Seattle data shows outcome gains, but we don't know if resource gaps narrowed.' Honest acknowledgment of uncertainty strengthens credibility more than bluffing.",
          },
        ],
        keyFormulas: [
          {
            name: "Four question types",
            statement: "Clarification, evidence, implication, counterexample.",
          },
          {
            name: "Questions move discussion",
            statement: "Expose assumptions, demand evidence.",
          },
          {
            name: "Honest uncertainty",
            statement: "'We don't know yet' is valid.",
          },
        ],
        workedExample: {
          problem: "Write a probing question about the equity concern.",
          solution:
            "'Jordan, when you say the struggling kids didn't benefit — do you have data on which students, or is that from your cousin's observation?' — asks for evidence behind claim.",
        },
      },
      questions: [
        {
          id: "ela10-u4-probing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DISCUSSION,
          stem: "Which is a probing question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I disagree" },
              { id: "b", text: "What data supports that claim about grades?" },
              { id: "c", text: "That's interesting" },
              { id: "d", text: "Moving on" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probing question",
                statement: "Demands evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'What data supports that claim?' asks for evidence — classic probing question.",
                evidence: "probing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. What data supports that claim about grades?",
            commonErrors: ["Confusing agreement/disagreement with probing."],
          },
        },
        {
          id: "ela10-u4-probing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DISCUSSION,
          stem: "Write a probing question that challenges the Seattle example's generalizability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question construction",
                statement: "Challenge assumptions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Target generalizability: 'Seattle is one district — do we have data from districts with different demographics?'",
                evidence: "generalizability",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Or counterexample: 'Have there been districts where later start didn't improve outcomes?'",
                evidence: "counterexample",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Question exposes assumption that one example proves policy works universally.",
                evidence: "expose",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Seattle is one district — do we have data from districts with different demographics, or cases where later start didn't help?'",
            commonErrors: ["Question that's just disagreement in disguise."],
          },
        },
        {
          id: "ela10-u4-probing-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSSION,
          stem: "Analyze how Jordan's anecdote about his cousin functions in the discussion — strength and limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence evaluation",
                statement: "Anecdote vs data.",
              },
              {
                kind: "skill",
                name: "Discussion analysis",
                statement: "How contributions function.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Strength: anecdote humanizes issue — bus schedules, real implementation challenges.",
                evidence: "strength",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Limitation: single case, cousin's observation — not systematic evidence.",
                evidence: "limitation",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Function: raises equity question that data alone might miss — valuable but needs verification.",
                evidence: "function",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Jordan's anecdote has dual function: humanizes logistics challenges (bus schedules) and raises equity concern, but is limited as evidence — single case, cousin's observation, not systematic data. Its value is prompting questions, not proving claims; stronger if followed by 'we should check if data supports that.'",
            commonErrors: [
              "Dismissing anecdote entirely or accepting uncritically.",
            ],
          },
        },
        {
          id: "ela10-u4-probing-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DISCUSSION,
          parts: [
            {
              label: "a",
              prompt: "Name two types of probing questions.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example of each from the discussion.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question types",
                statement: "Different purposes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Evidence question + implication question (or clarification/counterexample).",
                evidence: "types",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'What data supports that?' Implication: 'Does that change the cost-benefit?'",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Evidence + implication questions. (b) Evidence: 'What data supports that claim?' Implication: 'Does that change the cost-benefit?'",
            commonErrors: ["Only naming one type."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-citation",
      title: "Textual Evidence in Discussion",
      skill:
        "Support discussion contributions with accurate references to texts and research.",
      lesson: {
        sections: [
          {
            heading: "Citing in discussion",
            body: "Unlike essays, discussions cite conversationally: 'The AAP report says teens can't fall asleep before 11 — that's from Maya's research.' Or 'In the article we read, the superintendent said...' Precision matters: distinguish what the text says from your interpretation. 'The study found correlation' vs 'the study proves causation' — get it right or undermine credibility.",
          },
          {
            heading: "When you don't know",
            body: "If asked about something you haven't read: 'I haven't seen that study — can someone summarize the methodology?' This is better than bluffing. Discussion rewards intellectual honesty. If you misremember: 'I think the study said X — Maya, can you verify?' Correction in discussion is normal and healthy.",
          },
        ],
        keyFormulas: [
          {
            name: "Conversational citation",
            statement: "'The article said...' 'Maya's research shows...'",
          },
          { name: "Text vs interpretation", statement: "Distinguish clearly." },
          { name: "Admit gaps", statement: "'I haven't read that' is fine." },
        ],
        workedExample: {
          problem: "How would you cite the sleep research in discussion?",
          solution:
            "'According to the AAP policy statement Maya mentioned, adolescent circadian rhythms shift later — teens biologically can't fall asleep before 11 p.m. That directly supports the later start argument.'",
        },
      },
      questions: [
        {
          id: "ela10-u4-citation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DISCUSSION,
          stem: "How should you cite evidence in discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wait until essay" },
              { id: "b", text: "Formal footnotes" },
              { id: "c", text: "Conversational reference to source" },
              { id: "d", text: "No citation needed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discussion citation",
                statement: "Conversational reference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discussion uses conversational citation — 'the article said,' 'Maya's research shows.'",
                evidence: "citation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Conversational reference to source.",
            commonErrors: ["Using essay-style citations in discussion."],
          },
        },
        {
          id: "ela10-u4-citation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DISCUSSION,
          stem: "Rewrite 'Studies show later start helps' with proper attribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proper attribution",
                statement: "Name source + finding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Name source: 'The Seattle school district study' or 'AAP research.'",
                evidence: "source",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Specify finding: 'attendance and grades improved within a year.'",
                evidence: "finding",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect: 'That supports Priya's point about measurable gains.'",
                evidence: "connect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The Seattle district study Priya mentioned found attendance and grades improved within a year of later start times — that's concrete evidence of measurable gains.'",
            commonErrors: ["Vague 'studies show' in discussion too."],
          },
        },
        {
          id: "ela10-u4-citation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSSION,
          stem: "Analyze the difference between Jordan's 'improved grades' claim and Maya's circadian research — why does attribution matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Attribution analysis",
                statement: "Why source matters.",
              },
              {
                kind: "skill",
                name: "Evidence hierarchy",
                statement: "Research vs anecdote.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Maya cites AAP policy + circadian biology — peer-reviewed, authoritative.",
                evidence: "AAP",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Jordan cites cousin's observation — anecdote, single case, potential bias.",
                evidence: "cousin",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Attribution matters: listeners weigh evidence by source credibility — research vs anecdote carry different weight.",
                evidence: "credibility",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Maya's AAP citation is peer-reviewed biology; Jordan's cousin anecdote is single-case observation. Attribution matters because listeners calibrate belief to source credibility — the discussion works because both evidence types are visible and can be weighed.",
            commonErrors: ["Treating all evidence as equal."],
          },
        },
        {
          id: "ela10-u4-citation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DISCUSSION,
          parts: [
            {
              label: "a",
              prompt: "What should you do when you don't know a source?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Why is that better than bluffing?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Intellectual honesty",
                statement: "Admit gaps.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'I haven't read that study — can someone summarize?' or 'I think it said X — can you verify?'",
                evidence: "admit",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Honesty builds trust; bluffing risks spreading misinformation and losing credibility.",
                evidence: "why",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'I haven't read that — can someone summarize?' (b) Honesty builds trust; bluffing spreads misinformation and loses credibility.",
            commonErrors: ["Bluffing to seem prepared."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-facilitation",
      title: "Discussion Roles and Facilitation",
      skill:
        "Understand discussion roles — facilitator, participant, skeptic — and contribute appropriately to each.",
      lesson: {
        sections: [
          {
            heading: "Discussion roles",
            body: "**Facilitator**: keeps discussion on track, ensures everyone speaks, synthesizes at end. **Participant**: contributes evidence and analysis. **Skeptic/critical friend**: asks probing questions, challenges assumptions respectfully. **Synthesizer**: connects ideas across speakers. Most students rotate roles — flexibility matters more than fixed identity.",
          },
          {
            heading: "Reading the room",
            body: "Good discussants adjust: if someone dominates, invite others ('Jordan, you've been quiet — what's your take?'); if discussion stalls, ask probing question; if conflict rises, acknowledge emotion then redirect to evidence ('I hear frustration — let's look at what the data actually shows'). Flexibility and emotional awareness are discussion skills too.",
          },
        ],
        keyFormulas: [
          {
            name: "Roles are fluid",
            statement: "Facilitator, participant, skeptic, synthesizer.",
          },
          { name: "Read the room", statement: "Adjust to group dynamics." },
          {
            name: "De-escalate then redirect",
            statement: "Acknowledge emotion, return to evidence.",
          },
        ],
        workedExample: {
          problem: "How would you handle a dominated discussion?",
          solution:
            "'We've heard from Maya and Priya — Jordan, what's your perspective on the equity question?' Invite quieter voices; balance airtime.",
        },
      },
      questions: [
        {
          id: "ela10-u4-facilitation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DISCUSSION,
          stem: "What is the facilitator's role?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Keep discussion on track and ensure participation",
              },
              { id: "b", text: "Take notes only" },
              { id: "c", text: "Give the most opinions" },
              { id: "d", text: "Win the argument" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Facilitator",
                statement: "Keeps discussion productive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Facilitator manages process — on-topic, balanced participation, synthesis.",
                evidence: "facilitator",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Keep discussion on track and ensure participation.",
            commonErrors: ["Thinking facilitator just talks most."],
          },
        },
        {
          id: "ela10-u4-facilitation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DISCUSSION,
          stem: "How would you respond if two students started arguing emotionally?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "De-escalation",
                statement: "Redirect conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledge emotion: 'I hear this is frustrating — the equity question matters.'",
                evidence: "acknowledge",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Redirect to evidence: 'Let's look at what the Seattle data and AAP research actually show.'",
                evidence: "redirect",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reframe: 'Both of you care about struggling students — the question is what works for them.'",
                evidence: "reframe",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'I hear frustration — the equity question clearly matters to everyone here. Let's ground this in evidence: what did the Seattle data show, and where are the gaps? Both positions want to help struggling students — let's figure out which approach does that.'",
            commonErrors: ["Ignoring emotion or escalating."],
          },
        },
        {
          id: "ela10-u4-facilitation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSSION,
          stem: "Evaluate the facilitator's opening move — why does starting with Maya's research set up productive discussion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Facilitation analysis",
                statement: "How moves shape discussion.",
              },
              {
                kind: "skill",
                name: "Discussion design",
                statement: "Evidence-first approach.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Starting with research establishes evidence baseline — discussion grounded in data.",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Giving Maya first turn models expected contribution style — evidence-based.",
                evidence: "model",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Creates framework: other speakers respond to evidence, not just opinions.",
                evidence: "framework",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Facilitator opens with Maya's research to establish evidence baseline — frames discussion as evidence-driven rather than opinion-driven. Models contribution style, gives others something concrete to respond to, and implicitly sets expectation that claims need support.",
            commonErrors: [
              "Thinking facilitation is just calling on speakers.",
            ],
          },
        },
        {
          id: "ela10-u4-facilitation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DISCUSSION,
          parts: [
            {
              label: "a",
              prompt: "Name two discussion roles besides facilitator.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What does a 'skeptic' contribute?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion roles",
                statement: "Different functions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Participant, skeptic, synthesizer — any two.",
                evidence: "roles",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Skeptic asks probing questions, challenges assumptions — prevents groupthink.",
                evidence: "skeptic",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Participant, skeptic, synthesizer — any two. (b) Skeptic asks probing questions, challenges assumptions — prevents groupthink.",
            commonErrors: ["Thinking skeptic = negative person."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-eval",
      title: "Evaluating Discussion Quality",
      skill:
        "Assess whether a discussion was productive — evidence use, participation balance, idea development.",
      lesson: {
        sections: [
          {
            heading: "Quality indicators",
            body: "Productive discussion shows: **evidence use** (claims supported), **balanced participation** (multiple voices), **idea development** (points build on each other), **complexity** (nuance emerges), **synthesis** (new understanding). The sleep discussion scores well: research cited, equity complication raised, synthesis proposed ('both later start AND support').",
          },
          {
            heading: "Common failures",
            body: "Unproductive patterns: **serial monologues** (people talk past each other), **evidence-free opinions** ('I just think...'), **dominance** (one voice), **false consensus** (agreeing without examining), **topic drift**. Recognizing these helps you fix them in real time — ask for evidence, invite quiet voices, redirect drift.",
          },
        ],
        keyFormulas: [
          {
            name: "Five quality indicators",
            statement: "Evidence, balance, development, complexity, synthesis.",
          },
          {
            name: "Failure patterns",
            statement:
              "Monologues, no evidence, dominance, false consensus, drift.",
          },
          {
            name: "Fix in real time",
            statement: "Ask for evidence, invite voices.",
          },
        ],
        workedExample: {
          problem: "Evaluate the sleep discussion's quality.",
          solution:
            "Strong: evidence used (AAP, Seattle data), balanced (Maya, Jordan, Priya all contributed), complexity emerged (equity question), synthesis proposed. Weakness: anecdote evidence needs verification.",
        },
      },
      questions: [
        {
          id: "ela10-u4-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DISCUSSION,
          stem: "What indicates a productive discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One person talks most" },
              { id: "b", text: "Everyone agrees" },
              { id: "c", text: "No disagreements" },
              {
                id: "d",
                text: "Evidence used, multiple voices, ideas develop",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Productive discussion",
                statement: "Quality indicators.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence use + balanced participation + idea development = productive.",
                evidence: "productive",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Evidence used, multiple voices, ideas develop.",
            commonErrors: ["Thinking agreement = productive."],
          },
        },
        {
          id: "ela10-u4-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DISCUSSION,
          stem: "Identify one strength and one weakness of the sleep discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion evaluation",
                statement: "Strengths + weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: evidence used (AAP research, Seattle data), equity complication raised.",
                evidence: "strength",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness: Jordan's cousin anecdote needs verification — single case evidence.",
                evidence: "weakness",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Overall: productive — complexity emerged, synthesis proposed.",
                evidence: "overall",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Strength: evidence-based with equity complication. Weakness: anecdotal evidence (cousin's observation) needs verification. Overall productive — synthesis emerged.",
            commonErrors: ["Only identifying strengths or only weaknesses."],
          },
        },
        {
          id: "ela10-u4-eval-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSSION,
          stem: "Evaluate whether the discussion reached genuine consensus or false consensus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Consensus evaluation",
                statement: "Genuine vs false.",
              },
              {
                kind: "skill",
                name: "Discussion analysis",
                statement: "How agreement emerged.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Genuine elements: Maya's synthesis acknowledges unresolved tension ('sleep might not fix inequity').",
                evidence: "genuine",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "No full consensus claimed — 'maybe we need both' is proposal, not agreement.",
                evidence: "no consensus",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Not false consensus: disagreement (Jordan's concerns) was preserved, not suppressed.",
                evidence: "not false",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Discussion avoided false consensus — Maya's 'maybe we need both' is proposal acknowledging unresolved tension, not claimed agreement. Jordan's equity concern was preserved, not suppressed. Genuine productive disagreement remained visible.",
            commonErrors: ["Assuming agreement = consensus."],
          },
        },
        {
          id: "ela10-u4-eval-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DISCUSSION,
          parts: [
            { label: "a", prompt: "What's 'false consensus'?", marks: 2 },
            {
              label: "b",
              prompt: "How did this discussion avoid it?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "False consensus",
                statement: "Agreement without examination.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Agreement that suppresses disagreement — people agree without examining or genuinely holding position.",
                evidence: "false",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Jordan's equity concern preserved; Maya's synthesis acknowledges tension rather than claiming resolution.",
                evidence: "avoided",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Agreement suppressing disagreement. (b) Jordan's concern preserved; Maya's synthesis acknowledges tension, not resolution.",
            commonErrors: ["Not recognizing subtle false consensus."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-present",
      title: "Presentations and Digital Media",
      skill:
        "Deliver effective presentations and analyze digital media messages.",
      lesson: {
        sections: [
          {
            heading: "Effective presentations",
            body: "Structure: **hook** (question, statistic, story), **context** (why this matters), **content** (main points with evidence), **conclusion** (key takeaway + call to action). Delivery: eye contact, varied pace, vocal emphasis, purposeful gestures. Visuals support, not replace — don't read slides verbatim. Practice: record yourself, watch for filler words ('um,' 'like'), check timing.",
          },
          {
            heading: "Analyzing digital media",
            body: "Digital presentations combine text, image, audio, video. Analyze: what's the message? who's the audience? what's the purpose (inform, persuade, entertain)? what techniques are used (statistics, testimonials, emotional appeals)? A TikTok about school start times might use trending audio + quick cuts + text overlays — different persuasive strategy than a formal slide deck.",
          },
        ],
        keyFormulas: [
          {
            name: "Hook-context-content-conclusion",
            statement: "Presentation structure.",
          },
          { name: "Visuals support", statement: "Don't read slides." },
          {
            name: "Analyze digital media",
            statement: "Message, audience, purpose, techniques.",
          },
        ],
        workedExample: {
          problem:
            "How would you structure a presentation on later school start times?",
          solution:
            "Hook: 'Teens literally can't fall asleep before 11 — biology, not laziness.' Context: sleep research + current start times. Content: AAP recommendation, Seattle data, equity concerns. Conclusion: 'Later start is necessary but not sufficient — pair with support systems.'",
        },
      },
      questions: [
        {
          id: "ela10-u4-present-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DISCUSSION,
          stem: "What's the correct presentation structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Content → hook → conclusion" },
              { id: "b", text: "Conclusion → content → hook" },
              { id: "c", text: "Hook → context → content → conclusion" },
              { id: "d", text: "Random order" },
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
                  "Hook grabs attention, context frames, content delivers, conclusion summarizes.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Hook → context → content → conclusion.",
            commonErrors: ["Starting with content — no hook."],
          },
        },
        {
          id: "ela10-u4-present-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DISCUSSION,
          stem: "Write a hook for a presentation on later school start times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Hook writing",
                statement: "Grab attention.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option 1: surprising statistic — 'Teens can't fall asleep before 11 — it's biology, not laziness.'",
                evidence: "statistic",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Option 2: provocative question — 'What if school started when your brain was actually awake?'",
                evidence: "question",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Option 3: story — 'My cousin's school tried later start — here's what happened.'",
                evidence: "story",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Teens literally cannot fall asleep before 11 p.m. — it's biology, not laziness. Yet most schools start at 7:30. Today we'll explore why that mismatch matters.'",
            commonErrors: ["Boring hook like 'Today I'll talk about...'"],
          },
        },
        {
          id: "ela10-u4-present-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSSION,
          stem: "Analyze how a TikTok about school start times might differ from a formal presentation — techniques and effectiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media analysis",
                statement: "Different platforms.",
              },
              {
                kind: "skill",
                name: "Technique comparison",
                statement: "Formal vs digital.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "TikTok: trending audio, quick cuts, text overlays, emotional hook — optimized for attention.",
                evidence: "TikTok",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Formal: structured argument, evidence citation, logical flow — optimized for persuasion.",
                evidence: "formal",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effectiveness depends on audience/purpose — TikTok reaches teens, formal reaches policymakers.",
                evidence: "effectiveness",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "TikTok uses attention-optimized techniques (trending audio, quick cuts, emotional hooks) to reach teens; formal presentation uses structured argument and evidence for policymakers. Different platforms, different persuasive strategies — effectiveness depends on audience and purpose.",
            commonErrors: ["Thinking one format is universally better."],
          },
        },
        {
          id: "ela10-u4-present-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DISCUSSION,
          parts: [
            {
              label: "a",
              prompt: "What should visuals do in a presentation?",
              marks: 2,
            },
            { label: "b", prompt: "What shouldn't they do?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual design",
                statement: "Support vs replace.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Support — reinforce key points, show data visually, aid understanding.",
                evidence: "support",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "NOT replace — don't read slides verbatim or make audience read instead of listen.",
                evidence: "not",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Support — reinforce points, show data visually. (b) NOT replace — don't read slides or make audience read.",
            commonErrors: [
              "Slides as script — audience reads instead of listens.",
            ],
          },
        },
      ],
    },
    {
      id: "ela10-u4-integrated",
      title: "Integrated Speaking and Listening",
      skill:
        "Combine discussion, presentation, and media analysis skills in integrated practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "SL strand combines: **listening** (comprehend others' arguments), **speaking** (present your own), **collaboration** (build together), **media analysis** (evaluate digital messages). A seminar might include: listen to research presentation → discuss findings → present your analysis → evaluate classmates' digital media. Each skill reinforces others — listening well makes speaking better; presenting clarifies thinking.",
          },
          {
            heading: "Practice strategy",
            body: "Prepare: read topic, research evidence, plan contribution. During: listen actively, build on others, ask questions, synthesize. After: reflect — what worked? what would you do differently? Record presentations — watch for filler words, pace, eye contact. Practice makes these skills automatic.",
          },
        ],
        keyFormulas: [
          {
            name: "SL integration",
            statement: "Listen + speak + collaborate + analyze.",
          },
          {
            name: "Skills reinforce",
            statement: "Listening improves speaking.",
          },
          { name: "Prepare-practice-reflect", statement: "Complete cycle." },
        ],
        workedExample: {
          problem: "How would you prepare for a seminar discussion?",
          solution:
            "Read topic + research evidence → plan 2-3 contributions → listen actively → build on others → ask probing questions → synthesize at end → reflect after.",
        },
      },
      questions: [
        {
          id: "ela10-u4-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DISCUSSION,
          stem: "What does the SL strand integrate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Listening, speaking, collaboration, media analysis",
              },
              { id: "b", text: "Only discussions" },
              { id: "c", text: "Only presentations" },
              { id: "d", text: "Only speaking" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SL strand",
                statement: "Integrated skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SL = listening + speaking + collaboration + media analysis.",
                evidence: "SL",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Listening, speaking, collaboration, media analysis.",
            commonErrors: ["Thinking SL is just speaking."],
          },
        },
        {
          id: "ela10-u4-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DISCUSSION,
          stem: "List three steps for preparing a seminar contribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Preparation",
                statement: "Complete cycle.",
              },
            ],
            steps: [
              {
                reasoning: "Research evidence — read topic, find sources.",
                evidence: "research",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Plan contributions — 2-3 points with evidence.",
                evidence: "plan",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Prepare questions — probing questions to ask others.",
                evidence: "questions",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Research evidence, plan 2-3 contributions with evidence, prepare probing questions.'",
            commonErrors: ["Only preparing points — need questions too."],
          },
        },
        {
          id: "ela10-u4-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DISCUSSION,
          stem: "Design a mini-seminar plan for the sleep discussion topic including roles and timing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Seminar design",
                statement: "Structured planning.",
              },
              {
                kind: "skill",
                name: "Role assignment",
                statement: "Different functions.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Opening: facilitator frames question + ground rules (5 min).",
                evidence: "opening",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Research presentation: Maya shares AAP findings (5 min).",
                evidence: "research",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Discussion: participants build, skeptic probes, synthesizer connects (15 min).",
                evidence: "discussion",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Closing: facilitator synthesizes key points + next steps (5 min).",
                evidence: "closing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example plan: 5 min facilitator opens (question + ground rules) → 5 min Maya presents AAP research → 15 min discussion (participants build, skeptic probes equity, synthesizer connects) → 5 min facilitator synthesizes + next steps. Total 30 min.",
            commonErrors: ["No structure — leads to chaos."],
          },
        },
        {
          id: "ela10-u4-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DISCUSSION,
          parts: [
            {
              label: "a",
              prompt: "Why do listening and speaking reinforce each other?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Skill reinforcement",
                statement: "How they connect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Listening well makes speaking better — you respond to actual points, not assumptions.",
                evidence: "reinforce",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: hearing Jordan's equity concern lets Maya synthesize 'both later start AND support' — couldn't do that without listening.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Listening well makes speaking better — respond to actual points. (b) Hearing Jordan's equity concern lets Maya synthesize — couldn't without listening.",
            commonErrors: ["Thinking they're separate skills."],
          },
        },
      ],
    },
  ],
};
