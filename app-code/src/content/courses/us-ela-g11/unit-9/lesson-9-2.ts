import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const PERSONAL: TextExtract = {
  title: "Personal Essay Excerpt: 'The Weight of Silence'",
  author: "Written for Akademik Space",
  text: "My grandmother spoke six languages, but she never spoke to me in any of them. She spoke to me in English — simple, careful English — as if my ears were fragile things that might break under the weight of her native tongue.\n\nI didn't understand this then. I was twelve, and I thought silence was just silence — the space between words where nothing happened. It took me years to learn that my grandmother's silence was not absence. It was presence. She was there in the kitchen, humming in a language I couldn't name, teaching me to make bread by touch alone. The silence was full.\n\nNow, at twenty-eight, I find myself doing the same thing to my own daughter. I speak to her in careful English, afraid that my heritage — the words my grandmother couldn't share — will overwhelm her young mind. I am repeating the pattern I once resented.\n\nThe essay I never wrote about my grandmother would have been about language. But it wasn't really about language. It was about love expressed through restraint — the kind that doesn't announce itself, that waits for the moment when the child is ready to receive what was always there.",
};

const REFLECTIVE: TextExtract = {
  title: "Reflective Writing: The Process",
  author: "Written for Akademik Space",
  text: "Reflective writing moves beyond description to insight — 'what happened?' becomes 'what did I learn?' Effective reflection: **specific experience** (not vague), **honest emotion** (not performative), **insight** (not just retelling), **growth** (how changed).\n\nWeak reflection: 'I learned a lot from the project.'\nStrong reflection: 'I learned that leadership isn't about having answers — it's about creating space for others to find theirs. When I stopped dominating discussions, the team's ideas improved dramatically.'\n\nThe second example: specific (project leadership), honest (admitting domination), insightful (leadership redefined), growth (changed approach). Reflection isn't navel-gazing — it's structured thinking about experience.",
};

export const lesson92: Lesson = {
  id: "ela11-u9-lesson-9-2",
  code: "9-2",
  title: "Personal Essays and Reflective Writing",
  goal: "I CAN write personal essays that transform experience into insight and reflective pieces that demonstrate growth.",
  standards: [
    "W.11-12.3",
    "W.11-12.3a",
    "W.11-12.3b",
    "W.11-12.3c",
    "W.11-12.3d",
    "W.11-12.3e",
    "W.11-12.10",
    "RL.11-12.1",
    "RL.11-12.2",
  ],
  vocabulary: [
    {
      term: "Personal essay",
      definition: "Reflective essay drawing on personal experience.",
    },
    {
      term: "Reflection",
      definition: "Thinking about experience to gain insight.",
    },
    { term: "Insight", definition: "Deep understanding beyond surface." },
    { term: "Growth", definition: "Change through experience." },
    { term: "Voice", definition: "Distinctive personal style." },
    {
      term: "Universal theme",
      definition: "Theme resonating beyond personal.",
    },
  ],
  concepts: [
    {
      id: "ela11-u9-personal",
      title: "Personal essay craft",
      skill:
        "Write personal essays that transform experience into universal insight.",
      lesson: {
        sections: [
          {
            heading: "Personal essay elements",
            body: "Effective personal essay: **specific experience** (not vague), **sensory detail** (make reader feel), **honest emotion** (vulnerable, not performative), **insight** (what learned), **universal theme** (resonates beyond personal). The grandmother essay: specific (six languages, careful English) → detail (humming, bread by touch) → emotion (resentment→understanding) → insight (love through restraint) → universal (parent-child communication).",
          },
          {
            heading: "Voice and authenticity",
            body: "Personal essay requires authentic voice — not formal academic tone but genuine personal perspective. The grandmother essay uses intimate voice: 'I didn't understand this then,' 'I am repeating the pattern I once resented.' Vulnerability creates connection — reader sees real person, not performed persona. Authenticity doesn't mean unpolished — it means honest.",
          },
        ],
        keyFormulas: [
          {
            name: "Elements",
            statement: "Specific + sensory + honest + insight + universal.",
          },
          { name: "Voice", statement: "Authentic, intimate, vulnerable." },
          { name: "Universal theme", statement: "Resonates beyond personal." },
        ],
        workedExample: {
          problem: "How does the grandmother essay achieve universal theme?",
          solution:
            "Personal experience (grandmother's silence) → universal insight (love through restraint) — resonates beyond specific situation.",
        },
      },
      questions: [
        {
          id: "ela11-u9-personal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PERSONAL,
          stem: "What's the main difference between personal essay and academic essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Academic is emotional" },
              {
                id: "c",
                text: "Personal = experience/insight; academic = research/argument",
              },
              { id: "d", text: "Personal is shorter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personal vs academic",
                statement: "Different purposes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personal draws on experience/insight; academic uses research/argument.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Personal = experience/insight; academic = research/argument.",
            commonErrors: ["Confusing the types."],
          },
        },
        {
          id: "ela11-u9-personal-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PERSONAL,
          stem: "How does the grandmother essay achieve universal theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Universal theme",
                statement: "Resonance beyond personal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personal: grandmother's silence, careful English — specific experience.",
                evidence: "personal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Universal: 'love expressed through restraint' — resonates beyond situation.",
                evidence: "universal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: reader sees own experience in grandmother's — connection.",
                evidence: "connection",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Personal experience (grandmother) → universal insight (love through restraint) — resonates beyond specific.",
            commonErrors: ["Staying too personal."],
          },
        },
        {
          id: "ela11-u9-personal-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PERSONAL,
          stem: "Analyze how the grandmother essay uses voice and vulnerability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice analysis",
                statement: "Authentic style.",
              },
              {
                kind: "skill",
                name: "Vulnerability",
                statement: "Honest emotion.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Voice: intimate ('I didn't understand this then') — personal perspective.",
                evidence: "voice",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Vulnerability: admits resentment ('pattern I once resented') — honest emotion.",
                evidence: "vulnerability",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: creates connection — reader sees real person, not performed persona.",
                evidence: "connection",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Voice and vulnerability create connection: intimate voice ('I didn't understand'), honest emotion (admits resentment) — reader sees real person. Authenticity makes essay compelling.",
            commonErrors: ["Not recognizing voice/vulnerability."],
          },
        },
        {
          id: "ela11-u9-personal-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PERSONAL,
          parts: [
            {
              label: "a",
              prompt: "What are the five elements of personal essay?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which does the grandmother essay demonstrate?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personal essay elements",
                statement: "Five components.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Specific experience, sensory detail, honest emotion, insight, universal theme.",
                evidence: "elements",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "All five demonstrated — specific (six languages), sensory (humming), honest (resentment), insight (restraint), universal (love).",
                evidence: "demonstrates",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) Five elements. (b) All demonstrated.",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-reflective",
      title: "Reflective Writing and Growth",
      skill:
        "Write reflective pieces that move beyond description to insight and demonstrate growth.",
      lesson: {
        sections: [
          {
            heading: "Reflection vs description",
            body: "Description reports what happened: 'I led the project.' Reflection analyzes what it meant: 'I learned leadership isn't about answers — it's about creating space for others.' The reflective excerpt contrasts weak ('I learned a lot') vs strong ('leadership isn't about having answers... creating space'). Strong reflection: specific experience, honest emotion, insight, growth.",
          },
          {
            heading: "Growth narrative",
            body: "Reflective writing should show change: **before** (old understanding), **experience** (what happened), **after** (new understanding). 'I used to think leadership meant having answers. After leading the project, I realized it means creating space for others to find theirs.' Growth narrative demonstrates learning — not just reporting but transforming.",
          },
        ],
        keyFormulas: [
          {
            name: "Reflection vs description",
            statement: "What happened vs what it meant.",
          },
          {
            name: "Four elements",
            statement: "Specific, honest, insight, growth.",
          },
          {
            name: "Growth narrative",
            statement: "Before → experience → after.",
          },
        ],
        workedExample: {
          problem: "How does strong reflection differ from weak?",
          solution:
            "Weak: 'I learned a lot.' Strong: 'Leadership isn't about answers — it's about creating space.'",
        },
      },
      questions: [
        {
          id: "ela11-u9-reflective-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REFLECTIVE,
          stem: "What's the difference between description and reflection?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Description = what; reflection = what it meant",
              },
              { id: "b", text: "Reflection is shorter" },
              { id: "c", text: "No difference" },
              { id: "d", text: "Description is better" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Description vs reflection",
                statement: "What vs meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Description reports events; reflection analyzes meaning/insight.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Description = what; reflection = what it meant.",
            commonErrors: ["Confusing the types."],
          },
        },
        {
          id: "ela11-u9-reflective-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REFLECTIVE,
          stem: "What makes reflection 'strong'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Strong reflection",
                statement: "Four elements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific: 'leadership isn't about having answers' — concrete.",
                evidence: "specific",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Honest: 'I stopped dominating discussions' — admits fault.",
                evidence: "honest",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Insight + growth: 'creating space for others' — new understanding.",
                evidence: "insight",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Specific + honest + insight + growth — structured thinking about experience.",
            commonErrors: ["Vague reflection."],
          },
        },
        {
          id: "ela11-u9-reflective-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REFLECTIVE,
          stem: "Analyze how growth narrative demonstrates learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Growth narrative",
                statement: "Before → experience → after.",
              },
              {
                kind: "skill",
                name: "Learning demonstration",
                statement: "How change shows.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Before: 'leadership meant having answers' — old understanding.",
                evidence: "before",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Experience: 'stopped dominating discussions' — what happened.",
                evidence: "experience",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "After: 'creating space for others' — new understanding demonstrates growth.",
                evidence: "after",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Growth narrative shows learning: before (old understanding) → experience (what happened) → after (new understanding). Change demonstrates transformation, not just reporting.",
            commonErrors: ["Not showing change."],
          },
        },
        {
          id: "ela11-u9-reflective-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REFLECTIVE,
          parts: [
            {
              label: "a",
              prompt: "What are the four elements of strong reflection?",
              marks: 2,
            },
            { label: "b", prompt: "What is 'growth narrative'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection elements",
                statement: "Four components.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Specific, honest, insight, growth.",
                evidence: "elements",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Before → experience → after structure showing change.",
                evidence: "growth",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Specific, honest, insight, growth. (b) Before → experience → after.",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-style",
      title: "Advanced Style and Voice",
      skill:
        "Analyze and develop sophisticated style — voice, tone, syntax, word choice.",
      lesson: {
        sections: [
          {
            heading: "Style elements",
            body: "Advanced style combines: **voice** (distinctive personality), **tone** (attitude toward subject), **syntax** (sentence variety), **diction** (precise word choice), **rhythm** (cadence). The grandmother essay demonstrates style: intimate voice, reflective tone, varied syntax ('It took me years to learn' vs 'The silence was full'), precise diction ('fragile things,' 'presence').",
          },
          {
            heading: "Style vs content",
            body: "Content = what you say; style = how you say it. Same content, different style: 'I learned about leadership' (plain) vs 'I learned that leadership isn't about having answers — it's about creating space' (styled). Style elevates content — makes it memorable, persuasive, beautiful. Advanced writers control style deliberately.",
          },
        ],
        keyFormulas: [
          {
            name: "Style elements",
            statement: "Voice + tone + syntax + diction + rhythm.",
          },
          { name: "Content vs style", statement: "What vs how." },
          { name: "Style elevates", statement: "Makes content memorable." },
        ],
        workedExample: {
          problem: "How does the grandmother essay demonstrate advanced style?",
          solution:
            "Voice (intimate), tone (reflective), syntax (varied), diction ('fragile,' 'presence'), rhythm (cadence).",
        },
      },
      questions: [
        {
          id: "ela11-u9-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PERSONAL,
          stem: "What's the difference between content and style?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Content is style" },
              { id: "b", text: "No difference" },
              { id: "c", text: "Style is content" },
              { id: "d", text: "Content = what; style = how" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Content vs style",
                statement: "What vs how.",
              },
            ],
            steps: [
              {
                reasoning: "Content = what you say; style = how you say it.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Content = what; style = how.",
            commonErrors: ["Confusing the terms."],
          },
        },
        {
          id: "ela11-u9-style-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PERSONAL,
          stem: "Identify three style elements in the grandmother essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Style analysis",
                statement: "Elements identification.",
              },
            ],
            steps: [
              {
                reasoning: "Voice: intimate ('I didn't understand this then').",
                evidence: "voice",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Diction: 'fragile things,' 'presence' — precise word choice.",
                evidence: "diction",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Syntax: varied ('It took me years' vs 'The silence was full') — rhythm.",
                evidence: "syntax",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Voice (intimate), diction ('fragile,' 'presence'), syntax (varied).",
            commonErrors: ["Missing style elements."],
          },
        },
        {
          id: "ela11-u9-style-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PERSONAL,
          stem: "Analyze how style elevates the grandmother essay's content.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Style analysis",
                statement: "How style works.",
              },
              {
                kind: "skill",
                name: "Effect evaluation",
                statement: "Why style matters.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Voice: intimate perspective creates connection — reader sees real person.",
                evidence: "voice",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Diction: 'fragile things,' 'presence' — precise words elevate meaning.",
                evidence: "diction",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: style makes content memorable — 'love through restraint' resonates.",
                evidence: "effect",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Style elevates content: intimate voice creates connection, precise diction ('fragile,' 'presence') elevates meaning, combined effect makes 'love through restraint' memorable and resonant.",
            commonErrors: ["Separating style from content."],
          },
        },
        {
          id: "ela11-u9-style-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PERSONAL,
          parts: [
            {
              label: "a",
              prompt: "What are the five elements of advanced style?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which does the essay demonstrate?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Style elements",
                statement: "Five components.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Voice, tone, syntax, diction, rhythm.",
                evidence: "elements",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "All five demonstrated — voice (intimate), tone (reflective), syntax (varied), diction (precise), rhythm (cadence).",
                evidence: "demonstrates",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) Five elements. (b) All demonstrated.",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-integrated-r2",
      title: "Integrated Writing Practice",
      skill:
        "Integrate personal essay, reflection, and style in comprehensive writing practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Personal and reflective writing requires: **personal essay** (experience → insight), **reflection** (what it meant), **style** (voice, tone, syntax, diction). These work together: experience provides content, reflection provides meaning, style provides polish. Exam questions often require writing or analyzing personal essays.",
          },
          {
            heading: "Exam application",
            body: "Comprehensive analysis: identify experience → analyze reflection → evaluate style → assess effectiveness. Each skill alone is partial; together reveal writing quality.",
          },
        ],
        keyFormulas: [
          {
            name: "Three skills",
            statement: "Personal essay + reflection + style.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine writing skills." },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze a personal essay?",
          solution: "Experience → reflection → style → effectiveness.",
        },
      },
      questions: [
        {
          id: "ela11-u9-integrated-q1-r2",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PERSONAL,
          stem: "What three skills are needed for comprehensive personal writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only experience" },
              { id: "b", text: "Only spelling" },
              { id: "c", text: "Only grammar" },
              { id: "d", text: "Personal essay + reflection + style" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive personal writing",
                statement: "Three skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personal essay + reflection + style = comprehensive.",
                evidence: "three skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Personal essay + reflection + style.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u9-integrated-q2-r2",
          difficulty: "core",
          totalMarks: 3,
          extract: PERSONAL,
          stem: "Apply two writing skills to the grandmother essay.",
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
                  "Experience: grandmother's silence, careful English — specific.",
                evidence: "experience",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: 'love expressed through restraint' — insight.",
                evidence: "reflection",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Style: intimate voice, precise diction — polish.",
                evidence: "style",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Experience (specific), reflection (insight), style (polish).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u9-integrated-q3-r2",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PERSONAL,
          stem: "Write an analysis paragraph on how the grandmother essay achieves effectiveness.",
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
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Experience: specific (six languages, careful English) — concrete.",
                evidence: "experience",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: 'love through restraint' — universal insight.",
                evidence: "reflection",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Style: intimate voice, precise diction — polish elevates content.",
                evidence: "style",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The essay achieves effectiveness through experience (specific), reflection (universal insight), and style (intimate voice, precise diction). Elements work together for resonance.'",
            commonErrors: ["Analyzing elements separately."],
          },
        },
        {
          id: "ela11-u9-integrated-q4-r2",
          difficulty: "core",
          totalMarks: 4,
          extract: PERSONAL,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated personal writing stronger?",
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
                  "Each skill alone is partial; together produce compelling essay.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: experience+reflection+style shows comprehensive quality — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together produce quality. (b) Three skills show comprehensiveness.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
