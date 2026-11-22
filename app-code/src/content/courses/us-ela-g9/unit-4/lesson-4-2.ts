import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const PRESENT: TextExtract = {
  title: "Presentation Excerpt: Social Media and Democracy",
  author: "Written for Akademik Space",
  text: "Jamal stood at the front of the room, hands resting on the lectern. Behind him, a single slide showed a world map with connection lines pulsing between continents.\n\n'Three billion people use social media daily,' he began. 'That's 40% of humanity — more than have ever voted in any election. The question isn't whether social media influences politics. It already does. The question is whether we can shape that influence before it shapes us.'\n\nHe clicked to the next slide — a graph showing declining trust in institutions alongside rising social media use. 'Correlation, I know. But look at the mechanism: algorithmic feeds amplify emotional content because it drives engagement. Anger spreads faster than nuance. That's not a bug — it's the business model.'\n\nA hand went up. 'But aren't you just blaming technology? People choose what to believe.'\n\n'Choice requires options,' Jamal replied. 'When 90% of what you see is algorithmically selected, your choices are curated before you make them. I'm not saying ban it — I'm saying we need media literacy education, algorithm transparency, and maybe antitrust scrutiny. Democracy has survived worse. It hasn't survived unchecked information monopolies.'",
};

const MEDIA: TextExtract = {
  title: "Digital Presentation Skills",
  author: "Written for Akademik Space",
  text: "Effective digital presentations combine verbal and visual channels. Slides should support, not replace, the speaker — one idea per slide, minimal text, strong visuals. The presenter should maintain eye contact with the audience, not read from slides. Pacing matters: pause after key points, vary vocal tone, use gestures purposefully. Technology should enhance the message, not distract from it.",
};

export const lesson42: Lesson = {
  id: "ela9-u4-lesson-4-2",
  code: "4-2",
  title: "Presentations and Digital Media",
  goal: "I CAN deliver effective presentations that integrate verbal and visual communication to persuade and inform.",
  standards: ["SL.9-10.4", "SL.9-10.5", "SL.9-10.6"],
  vocabulary: [
    {
      term: "Multimodal presentation",
      definition:
        "Combining verbal, visual, and sometimes digital elements to communicate.",
    },
    {
      term: "Slide design",
      definition:
        "Visual organization of presentation content for clarity and impact.",
    },
    {
      term: "Audience engagement",
      definition:
        "Techniques to maintain audience attention and participation.",
    },
    {
      term: "Visual rhetoric",
      definition: "Persuasion through images, design, and layout.",
    },
    {
      term: "Pacing",
      definition: "Rhythm and timing of presentation delivery.",
    },
    {
      term: "Call to action",
      definition: "Request for audience to do something after presentation.",
    },
  ],
  concepts: [
    {
      id: "ela9-u4-present",
      title: "Presentation structure and delivery",
      skill:
        "Structure presentations with clear opening, evidence-based body, and compelling conclusion.",
      lesson: {
        sections: [
          {
            heading: "Presentation architecture",
            body: "Jamal's presentation follows strong structure: **hook** ('3 billion people — more than have voted'), **problem** ('influence already exists'), **evidence** (graph, mechanism explanation), **nuance** ('correlation, I know'), **solutions** ('media literacy, transparency, antitrust'), **call to action** ('democracy hasn't survived unchecked monopolies'). Each section builds on previous — hook creates urgency, evidence establishes credibility, solutions offer hope.",
          },
          {
            heading: "Handling audience questions",
            body: "Jamal's response to 'aren't you blaming technology?' is exemplary: he **acknowledges the point** ('people choose what to believe'), then **reframes** ('choice requires options'), then **extends** ('algorithmic curation limits choice'). He doesn't dismiss — he incorporates the objection into his argument. Strong presenters treat questions as opportunities to deepen, not threats to defend.",
          },
        ],
        keyFormulas: [
          {
            name: "Hook → problem → evidence → solutions → CTA",
            statement: "Presentation structure.",
          },
          {
            name: "Acknowledge → reframe → extend",
            statement: "Handling objections.",
          },
          {
            name: "Evidence + mechanism",
            statement: "Data plus explanation of WHY.",
          },
        ],
        workedExample: {
          problem: "How did Jamal handle the audience's objection?",
          solution:
            "Acknowledged ('people choose'), reframed ('choice requires options'), extended ('algorithmic curation limits choice') — incorporated objection into argument.",
        },
      },
      questions: [
        {
          id: "ela9-u4-present-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENT,
          stem: "What is Jamal's presentation structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random topics" },
              {
                id: "b",
                text: "Hook → problem → evidence → solutions → call to action",
              },
              { id: "c", text: "Problem → solution → conclusion" },
              { id: "d", text: "Introduction → body → conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Presentation structure",
                statement: "Clear organizational pattern.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Jamal uses hook (3 billion), problem (influence exists), evidence (graph), solutions (policy), CTA (democracy warning).",
                evidence: "presentation structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Hook → problem → evidence → solutions → call to action.",
            commonErrors: ["Missing the hook and CTA elements."],
          },
        },
        {
          id: "ela9-u4-present-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENT,
          stem: "Explain how Jamal handled the audience's objection about blaming technology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Objection handling",
                statement: "Acknowledge → reframe → extend.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledged: 'people choose what to believe' — validated the concern.",
                evidence: "aren't you just blaming technology",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reframed: 'choice requires options' — shifted from blame to constraint.",
                evidence: "Choice requires options",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Extended: 'algorithmic curation limits choice' — incorporated objection into argument.",
                evidence: "your choices are curated",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Acknowledged objection, reframed as choice constraint, extended to algorithmic curation — incorporated rather than dismissed.",
            commonErrors: ["Dismissing the objection — Jamal engaged it."],
          },
        },
        {
          id: "ela9-u4-present-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Analyze Jamal's use of evidence and mechanism to build his argument about social media and democracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence analysis",
                statement: "How data supports claims.",
              },
              {
                kind: "skill",
                name: "Mechanism explanation",
                statement: "Why it works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Evidence: graph showing declining trust + rising social media use — correlation acknowledged.",
                evidence: "declining trust in institutions",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mechanism: 'algorithmic feeds amplify emotional content' — explains WHY engagement drives content selection.",
                evidence: "algorithmic feeds amplify emotional content",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Nuance: 'correlation, I know' — honest about limits, strengthens credibility.",
                evidence: "Correlation, I know",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Jamal uses correlation data (declining trust + rising social media), explains mechanism (algorithmic amplification of emotional content), and acknowledges limits ('correlation, I know') — evidence + mechanism + honesty = strong argument.",
            commonErrors: ["Citing data without explaining mechanism."],
          },
        },
        {
          id: "ela9-u4-present-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            {
              label: "a",
              prompt: "What makes slide design effective?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Why should slides support, not replace, the speaker?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual design",
                statement: "Slides enhance message.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "One idea per slide, minimal text, strong visuals — clarity and impact.",
                evidence: "slide design",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Slides support verbal message — if text-heavy, audience reads instead of listens.",
                evidence: "support, not replace",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) One idea per slide, minimal text, strong visuals. (b) Slides support — text-heavy slides make audience read instead of listen.",
            commonErrors: ["Putting all text on slides — defeats purpose."],
          },
        },
      ],
    },
    {
      id: "ela9-u4-visual",
      title: "Visual rhetoric and media analysis",
      skill:
        "Analyze how visual elements in presentations and media create persuasive effects.",
      lesson: {
        sections: [
          {
            heading: "Visual persuasion techniques",
            body: "Jamal's world map with 'connection lines pulsing between continents' uses **visual metaphor** — connections = global influence. The declining-trust graph uses **data visualization** — makes correlation visible. Color, size, and placement all carry meaning: pulsing lines suggest activity/urgency; graph position suggests trend. Visual rhetoric doesn't just illustrate — it argues. The map makes 'global' tangible; the graph makes 'decline' undeniable.",
          },
          {
            heading: "Analyzing visual arguments",
            body: "Ask: What is the image claiming? How does it make you feel? What does it omit? Jamal's pulsing map creates urgency — 'this is happening now, everywhere.' The graph creates concern — 'trust is declining.' Both visuals support his argument but also frame it: he could have shown rising trust instead (different story). Visual choices are argumentative choices — they select and emphasize.",
          },
        ],
        keyFormulas: [
          {
            name: "Visual = argument",
            statement: "Images persuade, not just illustrate.",
          },
          {
            name: "Color/size/placement",
            statement: "Design choices carry meaning.",
          },
          {
            name: "What it omits",
            statement: "Visuals select and exclude — ask what's missing.",
          },
        ],
        workedExample: {
          problem: "How does Jamal's pulsing world map support his argument?",
          solution:
            "Visual metaphor — pulsing connections make global influence tangible and urgent. Supports claim that social media influence is worldwide and active.",
        },
      },
      questions: [
        {
          id: "ela9-u4-visual-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENT,
          stem: "What visual technique does Jamal use in his world map?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photograph" },
              { id: "b", text: "Data visualization" },
              { id: "c", text: "Visual metaphor" },
              { id: "d", text: "Chart" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Visual metaphor",
                statement: "Image represents idea.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pulsing connection lines metaphorically represent global influence/connectivity.",
                evidence: "connection lines pulsing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Visual metaphor.",
            commonErrors: ["Choosing (a) — map isn't data chart."],
          },
        },
        {
          id: "ela9-u4-visual-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENT,
          stem: "Explain how Jamal's graph supports his argument about social media and trust.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data visualization",
                statement: "Graphs make trends visible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Graph shows declining trust alongside rising social media use — visual correlation.",
                evidence:
                  "declining trust in institutions alongside rising social media use",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Makes abstract trend concrete — audience sees the pattern, not just hears it.",
                evidence: "graph showing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Supports argument but Jamal acknowledges 'correlation, I know' — honest about limits.",
                evidence: "Correlation, I know",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Graph visualizes correlation between declining trust and rising social media — makes trend concrete. Jamal acknowledges correlation ≠ causation, strengthening credibility.",
            commonErrors: [
              "Thinking graph proves causation — Jamal correctly notes it doesn't.",
            ],
          },
        },
        {
          id: "ela9-u4-visual-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Analyze how Jamal's visual choices (map + graph) work together to support his argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual argument analysis",
                statement: "How images persuade.",
              },
              {
                kind: "skill",
                name: "Multi-visual synthesis",
                statement: "How visuals work together.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Map: visual metaphor for global scale — 'this is everywhere, happening now.'",
                evidence: "connection lines pulsing",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Graph: data visualization for trend — 'trust is declining as usage rises.'",
                evidence: "declining trust",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Together: scale (map) + trend (graph) = comprehensive visual argument — breadth and depth.",
                evidence: "work together",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Map provides visual metaphor for global scale/urgency; graph provides data visualization for trust decline trend. Together they create comprehensive visual argument — breadth (global reach) and depth (statistical trend).",
            commonErrors: [
              "Analyzing visuals separately — need to show how they complement.",
            ],
          },
        },
        {
          id: "ela9-u4-visual-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENT,
          parts: [
            {
              label: "a",
              prompt: "What does 'visual rhetoric' mean?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How could Jamal's graph be misleading?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual literacy",
                statement: "Images persuade and can mislead.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Persuasion through images, design, layout — not just words.",
                evidence: "visual rhetoric",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Graph could imply causation when only correlation shown — or cherry-pick time range.",
                evidence: "could be misleading",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Persuasion through images/design/layout. (b) Could imply causation from correlation, or cherry-pick time range to exaggerate trend.",
            commonErrors: ["Assuming graphs are neutral — they can mislead."],
          },
        },
      ],
    },
    {
      id: "ela9-u4-delivery",
      title: "Delivery techniques and audience adaptation",
      skill:
        "Use vocal variety, pacing, gestures, and audience awareness to deliver effective presentations.",
      lesson: {
        sections: [
          {
            heading: "Verbal and nonverbal delivery",
            body: "Jamal 'stood at the front, hands resting on the lectern' — open posture. His opening line is a **statistic hook** — grabs attention immediately. He **pauses** after key points ('The question isn't whether... it's whether...'). He **varies tone** — measured for data, emphatic for 'not a bug — it's the business model.' Delivery isn't just words — it's how you say them. Vocal variety, pauses, and gestures all carry meaning.",
          },
          {
            heading: "Audience adaptation",
            body: "Jamal adjusts to his audience: uses 'we' and 'us' ('before it shapes us'), acknowledges their likely objection ('aren't you just blaming technology?'), offers solutions not just problems. He reads the room — when a hand goes up, he answers directly without defensiveness. Effective presenters know their audience: what they know, what they care about, what they'll resist. Adapt content and delivery accordingly.",
          },
        ],
        keyFormulas: [
          {
            name: "Vocal variety",
            statement: "Pause, vary tone, emphasize key words.",
          },
          {
            name: "Nonverbal communication",
            statement: "Posture, gestures, eye contact matter.",
          },
          {
            name: "Audience adaptation",
            statement: "Know what they know, care about, resist.",
          },
        ],
        workedExample: {
          problem: "How did Jamal adapt to his audience's likely objection?",
          solution:
            "He anticipated 'blaming technology' objection and prepared response — acknowledged, reframed, extended. Shows audience awareness.",
        },
      },
      questions: [
        {
          id: "ela9-u4-delivery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENT,
          stem: "What delivery technique did Jamal use in his opening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistic hook" },
              { id: "b", text: "Reading from notes" },
              { id: "c", text: "Joke" },
              { id: "d", text: "Question to audience" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Statistic hook",
                statement: "Grab attention with data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'3 billion people use social media daily' — shocking statistic opens presentation.",
                evidence: "3 billion people",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Statistic hook.",
            commonErrors: ["Missing that statistic creates immediate impact."],
          },
        },
        {
          id: "ela9-u4-delivery-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENT,
          stem: "Identify two vocal delivery techniques Jamal used and their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Vocal delivery",
                statement: "How you say it matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pauses after key points — 'The question isn't... it's...' — creates emphasis.",
                evidence: "pauses",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tone variation — measured for data, emphatic for 'not a bug — it's the business model.'",
                evidence: "varies tone",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: pauses create anticipation; tone variation maintains engagement.",
                evidence: "vocal variety",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Pauses after key points (emphasis/anticipation) and tone variation (measured vs emphatic) — maintain engagement and highlight important ideas.",
            commonErrors: ["Describing delivery without explaining effect."],
          },
        },
        {
          id: "ela9-u4-delivery-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENT,
          stem: "Analyze how Jamal adapted his presentation to his audience's likely concerns and knowledge level.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Know your audience.",
              },
              {
                kind: "skill",
                name: "Anticipatory response",
                statement: "Prepare for objections.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Uses inclusive language — 'we,' 'us' — creates shared identity with audience.",
                evidence: "before it shapes us",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Anticipates objection — 'aren't you just blaming technology?' — prepared response ready.",
                evidence: "aren't you just blaming",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Offers solutions not just problems — 'media literacy, transparency, antitrust' — constructive tone.",
                evidence: "solutions",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Jamal uses inclusive language ('we,' 'us'), anticipates the 'blaming technology' objection with prepared response, and offers solutions (media literacy, transparency, antitrust) — adapts to audience concerns and knowledge level.",
            commonErrors: [
              "Describing adaptation without explaining audience awareness.",
            ],
          },
        },
        {
          id: "ela9-u4-delivery-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            {
              label: "a",
              prompt: "Name three nonverbal delivery elements.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does eye contact affect presentation?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nonverbal communication",
                statement: "Body language matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Posture, gestures, eye contact, facial expressions, movement.",
                evidence: "nonverbal",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Builds connection, shows confidence, engages audience — don't read slides.",
                evidence: "eye contact",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Posture, gestures, eye contact, facial expressions, movement. (b) Builds connection, shows confidence, engages audience.",
            commonErrors: ["Focusing only on words — nonverbal matters."],
          },
        },
      ],
    },
  ],
};
