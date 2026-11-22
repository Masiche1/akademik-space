import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const INFORMATIVE: TextExtract = {
  title: "Sample Informative Excerpt",
  author: "Written for Akademik Space",
  text: "The James Webb Space Telescope represents a fundamental shift in how astronomers study the universe. Unlike its predecessor, the Hubble Space Telescope, which primarily observes visible and ultraviolet light, Webb is optimized for infrared wavelengths. This difference is not merely technical — it determines what the telescope can see.\n\nInfrared light penetrates cosmic dust clouds that block visible light. When Webb observes a stellar nursery — a region where new stars form — Hubble sees only the outer edges where dust is thin. Webb sees through the dust to the protostars forming inside, revealing the earliest stages of star formation previously hidden.\n\nWebb's location amplifies these advantages. Positioned at the second Lagrange point (L2), approximately 1.5 million kilometers from Earth, the telescope orbits the Sun in sync with Earth. This position keeps it far from Earth's heat and light pollution, allowing its instruments to detect the faint infrared signatures of distant galaxies formed shortly after the Big Bang.\n\nThe telescope's design reflects its scientific goals. Its primary mirror — 6.5 meters across, nearly three times Hubble's — collects more light, enabling detection of fainter objects. Its sunshield, the size of a tennis court, keeps the telescope cold enough (-223°C) for infrared instruments to function. These engineering choices serve the mission: to see farther back in time and deeper into cosmic dust than any previous observatory.",
};

const NARRATIVE: TextExtract = {
  title: "Narrative Excerpt: 'The Last Ferry'",
  author: "Written for Akademik Space",
  text: "Mara checked the schedule one more time. The last ferry left at 9:47. It was 9:31. She had sixteen minutes.\n\nThe terminal was empty except for an old man reading a newspaper and a woman tapping her foot. Mara's suitcase wheels squealed as she dragged it across the concrete floor. The ferry announcement crackled over the speakers: 'Passengers for the 9:47 departure to Harbor Point, please proceed to Gate 3.'\n\nGate 3 was forty yards away. Sixteen minutes was enough — if the lines weren't insane. They weren't. The gate agent scanned her ticket, stamped her boarding pass, and waved her through in eleven seconds. Mara almost laughed. All that anxiety for eleven seconds.\n\nShe found her seat by the window. The ferry was already moving, pulling away from the dock with a low rumble. Mara watched the terminal shrink into the distance, the lights of the city growing smaller. Somewhere behind her, the old man with the newspaper was still waiting for a ferry that wouldn't come again until morning.\n\nMara felt the weight lift — not physically, but something else. The decision she'd been avoiding for three months, made in sixteen minutes. The ferry cut through dark water, and Mara realized she wasn't running from anything anymore. She was just going somewhere new.",
};

export const lesson62: Lesson = {
  id: "ela11-u6-lesson-6-2",
  code: "6-2",
  title: "Informative/Explanatory and Narrative Writing",
  goal: "I CAN write informative essays that explain complex topics and narratives that use craft elements effectively.",
  standards: [
    "W.11-12.2",
    "W.11-12.2a",
    "W.11-12.2b",
    "W.11-12.2c",
    "W.11-12.2d",
    "W.11-12.2e",
    "W.11-12.3",
    "W.11-12.3a",
    "W.11-12.3b",
    "W.11-12.3c",
    "W.11-12.3d",
    "W.11-12.3e",
  ],
  vocabulary: [
    {
      term: "Informative writing",
      definition: "Explains or informs about topic.",
    },
    {
      term: "Explanatory writing",
      definition: "Clarifies how/why something works.",
    },
    { term: "Narrative craft", definition: "Techniques for storytelling." },
    {
      term: "Show don't tell",
      definition: "Demonstrate through action/detail.",
    },
    { term: "Pacing", definition: "Speed and rhythm of narrative." },
    { term: "Reflection", definition: "Character's insight/growth." },
  ],
  concepts: [
    {
      id: "ela11-u6-informative",
      title: "Informative/explanatory writing",
      skill: "Write essays that explain complex topics clearly and precisely.",
      lesson: {
        sections: [
          {
            heading: "Informative structure",
            body: "Effective informative writing: **clear thesis** (what will be explained), **logical organization** (chronological, cause/effect, compare/contrast), **precise language** (technical terms defined), **evidence** (facts, examples, data), **transitions** (connect ideas). The Webb telescope excerpt: thesis (fundamental shift) → explanation (infrared vs visible) → evidence (dust penetration, L2 location) → details (mirror size, sunshield temp).",
          },
          {
            heading: "Explanatory precision",
            body: "Grade 11-12 informative writing requires **technical precision** (define jargon), **causal explanation** (how/why things work), **comparative analysis** (distinguish from alternatives). Webb excerpt: 'optimized for infrared wavelengths' (technical) → 'determines what the telescope can see' (causal) → 'Unlike its predecessor' (comparative). Precision demonstrates mastery.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure",
            statement: "Thesis → organization → evidence → transitions.",
          },
          {
            name: "Precision",
            statement: "Technical terms + causal + comparative.",
          },
          { name: "Evidence types", statement: "Facts, examples, data." },
        ],
        workedExample: {
          problem: "How does the Webb excerpt explain infrared advantage?",
          solution:
            "Technical ('optimized for infrared') → causal ('penetrates cosmic dust') → comparative ('Hubble sees only edges, Webb sees through').",
        },
      },
      questions: [
        {
          id: "ela11-u6-informative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFORMATIVE,
          stem: "What's the difference between informative and explanatory writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informative = what; explanatory = how/why" },
              { id: "b", text: "No difference" },
              { id: "c", text: "Explanatory is shorter" },
              { id: "d", text: "Informative is opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informative vs explanatory",
                statement: "What vs how/why.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informative presents information; explanatory clarifies how/why.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Informative = what; explanatory = how/why.",
            commonErrors: ["Confusing the types."],
          },
        },
        {
          id: "ela11-u6-informative-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFORMATIVE,
          stem: "Analyze how the Webb excerpt uses precision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Explanatory precision",
                statement: "Technical + causal + comparative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Technical: 'optimized for infrared wavelengths' — precise terminology.",
                evidence: "technical",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Causal: 'determines what the telescope can see' — explains mechanism.",
                evidence: "causal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Comparative: 'Unlike its predecessor' — distinguishes from Hubble.",
                evidence: "comparative",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Technical ('infrared wavelengths'), causal ('determines what can see'), comparative ('Unlike predecessor').",
            commonErrors: ["Missing precision techniques."],
          },
        },
        {
          id: "ela11-u6-informative-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFORMATIVE,
          stem: "Analyze how the Webb excerpt organizes complex information clearly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Informative organization",
                statement: "How complexity is managed.",
              },
              {
                kind: "skill",
                name: "Clarity analysis",
                statement: "How reader follows.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Thesis: 'fundamental shift' — establishes scope upfront.",
                evidence: "thesis",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Logical flow: wavelength → dust penetration → location → design — builds understanding.",
                evidence: "flow",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Transitions: 'Unlike,' 'amplifies,' 'reflects' — guide reader through explanation.",
                evidence: "transitions",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Excerpt organizes complexity: thesis establishes scope, logical flow (wavelength→dust→location→design) builds understanding, transitions guide reader. Complex topic made accessible through structure.",
            commonErrors: ["Not recognizing organizational strategy."],
          },
        },
        {
          id: "ela11-u6-informative-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFORMATIVE,
          parts: [
            {
              label: "a",
              prompt: "What are 'transitions' in informative writing?",
              marks: 2,
            },
            { label: "b", prompt: "Give examples from the excerpt.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transitions",
                statement: "Connective words.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Words/phrases connecting ideas — 'unlike,' 'amplifies,' 'reflects.'",
                evidence: "transitions",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Examples: 'Unlike its predecessor,' 'amplifies these advantages,' 'reflects its scientific goals.'",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Connective words. (b) 'Unlike,' 'amplifies,' 'reflects.'",
            commonErrors: ["Missing transitions."],
          },
        },
      ],
    },
    {
      id: "ela11-u6-narrative",
      title: "Narrative Writing and Craft",
      skill:
        "Write narratives using pacing, detail, dialogue, and reflection effectively.",
      lesson: {
        sections: [
          {
            heading: "Narrative elements",
            body: "Effective narrative: **plot** (events with tension), **character** (protagonist with desire), **setting** (time/place that matters), **pacing** (speed varies — tension slows, action speeds), **detail** (specific sensory), **dialogue** (reveals character), **reflection** (insight at end). 'Last Ferry' excerpt: plot (last chance decision) → tension (16 minutes) → resolution (boarding) → reflection ('not running from anything anymore').",
          },
          {
            heading: "Craft techniques",
            body: "Show don't tell: 'the weight lift' vs 'she felt relieved.' Specific detail: 'suitcase wheels squealed' vs 'dragged suitcase.' Pacing: 'Gate 3 was forty yards away. Sixteen minutes was enough' — short sentences create urgency. Dialogue: 'Passengers for the 9:47 departure' — announcement adds realism. Reflection: 'wasn't running from anything anymore' — insight completes arc.",
          },
        ],
        keyFormulas: [
          {
            name: "Elements",
            statement:
              "Plot + character + setting + pacing + detail + dialogue + reflection.",
          },
          { name: "Show don't tell", statement: "Demonstrate, don't state." },
          { name: "Pacing", statement: "Tension slows, action speeds." },
        ],
        workedExample: {
          problem: "How does 'Last Ferry' use pacing?",
          solution:
            "Short sentences ('sixteen minutes was enough') create urgency; longer sentences at reflection slow pace.",
        },
      },
      questions: [
        {
          id: "ela11-u6-narrative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NARRATIVE,
          stem: "What's 'show don't tell' in narrative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State emotions directly" },
              { id: "b", text: "Demonstrate through action/detail" },
              { id: "c", text: "Show only dialogue" },
              { id: "d", text: "Tell everything" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Show don't tell",
                statement: "Demonstrate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Show = demonstrate through action/detail; don't state directly.",
                evidence: "show",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Demonstrate through action/detail.",
            commonErrors: ["Telling instead of showing."],
          },
        },
        {
          id: "ela11-u6-narrative-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NARRATIVE,
          stem: "Analyze how 'Last Ferry' uses pacing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pacing analysis",
                statement: "Speed variation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Urgency: 'sixteen minutes was enough' — short sentence creates tension.",
                evidence: "urgency",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Action: 'scanned her ticket... eleven seconds' — quick pace.",
                evidence: "action",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: 'wasn't running from anything anymore' — slower, reflective.",
                evidence: "reflection",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Short sentences create urgency, quick action pace, slower reflection — pacing varies with tension.",
            commonErrors: ["Not recognizing pacing variation."],
          },
        },
        {
          id: "ela11-u6-narrative-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARRATIVE,
          stem: "Analyze how 'Last Ferry' uses detail and reflection to create meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative craft",
                statement: "Detail + reflection.",
              },
              {
                kind: "skill",
                name: "Meaning creation",
                statement: "How craft serves theme.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Detail: 'suitcase wheels squealed' — sensory specificity creates realism.",
                evidence: "detail",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Contrast: 'old man reading newspaper' — foreshadows Mara's situation.",
                evidence: "contrast",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: 'not running from anything anymore' — insight completes character arc.",
                evidence: "reflection",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Craft creates meaning: specific detail (squealing wheels) builds realism, contrast (old man) foreshadows, reflection ('not running') completes arc — narrative elements work together for thematic depth.",
            commonErrors: ["Analyzing elements separately."],
          },
        },
        {
          id: "ela11-u6-narrative-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: NARRATIVE,
          parts: [
            {
              label: "a",
              prompt: "What is 'reflection' in narrative?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example from the excerpt.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement: "Character insight.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Character's insight/growth at narrative end — what they learn.",
                evidence: "reflection",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'wasn't running from anything anymore' — Mara's realization.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Character's insight/growth. (b) 'Not running from anything anymore.'",
            commonErrors: ["Missing reflection element."],
          },
        },
      ],
    },
    {
      id: "ela11-u6-integrated-r2",
      title: "Integrated Writing Practice",
      skill:
        "Integrate informative and narrative techniques in comprehensive writing analysis.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Different writing types require different skills: **informative** (precision, organization, evidence), **narrative** (pacing, detail, reflection). The Webb excerpt demonstrates informative precision; 'Last Ferry' demonstrates narrative craft. Exam questions often require analyzing how writing choices serve purpose in each type.",
          },
          {
            heading: "Exam application",
            body: "Comprehensive analysis: identify writing type → analyze organizational strategy → evaluate craft elements → assess effectiveness. Each skill alone is partial; together reveal writing quality.",
          },
        ],
        keyFormulas: [
          { name: "Two types", statement: "Informative + narrative." },
          { name: "Different skills", statement: "Precision vs craft." },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze a writing sample?",
          solution:
            "Identify type → analyze structure → evaluate craft → assess effectiveness.",
        },
      },
      questions: [
        {
          id: "ela11-u6-integrated-q1-r2",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFORMATIVE,
          stem: "What's the main difference between informative and narrative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrative is factual" },
              { id: "b", text: "Informative explains; narrative tells story" },
              { id: "c", text: "No difference" },
              { id: "d", text: "Informative has plot" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informative vs narrative",
                statement: "Explain vs tell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informative explains; narrative tells story with craft.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Informative explains; narrative tells story.",
            commonErrors: ["Confusing the types."],
          },
        },
        {
          id: "ela11-u6-integrated-q2-r2",
          difficulty: "core",
          totalMarks: 3,
          extract: NARRATIVE,
          stem: "Apply two writing skills to 'Last Ferry.'",
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
                  "Pacing: short sentences create urgency ('sixteen minutes').",
                evidence: "pacing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Detail: 'suitcase wheels squealed' — sensory specificity.",
                evidence: "detail",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: 'not running from anything anymore' — insight completes arc.",
                evidence: "reflection",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Pacing (urgency), detail (sensory), reflection (insight).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u6-integrated-q3-r2",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFORMATIVE,
          stem: "Write an analysis paragraph on how the Webb excerpt achieves clarity despite complexity.",
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
                name: "Clarity evaluation",
                statement: "How choices serve understanding.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning: "Thesis: 'fundamental shift' — establishes scope.",
                evidence: "thesis",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Precision: technical terms defined, causal explanations — clarity through specificity.",
                evidence: "precision",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: logical flow + transitions — guides reader through complexity.",
                evidence: "structure",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The excerpt achieves clarity through thesis (establishes scope), precision (technical terms defined, causal explanations), and structure (logical flow + transitions). Complex topic made accessible through these choices.'",
            commonErrors: ["Analyzing elements separately."],
          },
        },
        {
          id: "ela11-u6-integrated-q4-r2",
          difficulty: "core",
          totalMarks: 4,
          extract: NARRATIVE,
          parts: [
            {
              label: "a",
              prompt: "Why do different writing types need different skills?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing type differences",
                statement: "Why skills vary.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Different purposes require different techniques — explanation vs storytelling.",
                evidence: "different",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: informative needs precision; narrative needs pacing/craft.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Different purposes need different techniques. (b) Informative needs precision; narrative needs craft.",
            commonErrors: ["Using same skills for all types."],
          },
        },
      ],
    },
  ],
};
