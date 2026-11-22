import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const STRUCTURETEXT: TextExtract = {
  title: "The Water Cycle Explained",
  author: "Written for Akademik Space",
  text: "The water cycle is a continuous process that moves water through Earth's systems. First, the sun heats water in oceans, lakes, and rivers, causing it to evaporate into water vapor. This vapor rises into the atmosphere, where it cools and condenses into clouds. When the clouds become heavy enough, precipitation occurs — rain, snow, sleet, or hail falls back to Earth's surface.\n\nSome of this water flows into rivers and streams, eventually returning to oceans. Some soaks into the ground, becoming groundwater or being absorbed by plants. Plants release water vapor through transpiration, adding more moisture to the atmosphere. The cycle then repeats continuously.\n\nHuman activities can disrupt the water cycle. Deforestation reduces transpiration; urbanization increases runoff and reduces infiltration; climate change alters evaporation rates and precipitation patterns. Understanding these disruptions helps scientists predict water availability and manage resources sustainably.",
};

export const lesson53: Lesson = {
  id: "ela8-u5-lesson-5-3",
  code: "5-3",
  title: "Text Structure and Comparing Informational Texts",
  goal: "I CAN analyze text structures and compare how different texts address the same topic.",
  standards: ["RI.8.5", "RI.8.9"],
  vocabulary: [
    {
      term: "Text structure",
      definition:
        "How information is organized — chronological, cause-effect, compare-contrast.",
    },
    {
      term: "Chronological",
      definition: "Information arranged in time order.",
    },
    {
      term: "Cause-effect",
      definition: "Shows how one thing leads to another.",
    },
    {
      term: "Compare-contrast",
      definition: "Shows similarities and differences between things.",
    },
    {
      term: "Problem-solution",
      definition: "Identifies a problem and offers solutions.",
    },
    {
      term: "Sequence words",
      definition: "First, then, next, finally — signal chronological order.",
    },
  ],
  concepts: [
    {
      id: "ela8-u5-structure",
      title: "Analyzing text structure",
      skill:
        "Identify how informational texts are organized and how structure supports meaning.",
      lesson: {
        sections: [
          {
            heading: "Structure types",
            body: "**Chronological**: events in time order — 'First... then... finally'. **Cause-effect**: one thing leads to another — 'evaporation causes clouds'. **Compare-contrast**: similarities and differences — 'both... but...'. **Problem-solution**: identifies problem and offers fixes — 'disruption... understanding helps'. The water cycle uses chronological + cause-effect: stages in order, each causing the next.",
          },
          {
            heading: "Structure and meaning",
            body: "Structure isn't just organization — it shapes understanding. Chronological structure makes processes easy to follow; cause-effect shows relationships; compare-contrast highlights differences. The water cycle's chronological structure mirrors the actual process — readers understand because the text structure matches the natural order.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure types",
            statement:
              "Chronological, cause-effect, compare-contrast, problem-solution.",
          },
          {
            name: "Sequence signals",
            statement: "First, then, next, finally — chronological markers.",
          },
          {
            name: "Structure-meaning link",
            statement: "Organization mirrors or clarifies content.",
          },
        ],
        workedExample: {
          problem: "What structure does the water cycle passage use?",
          solution:
            "Chronological + cause-effect — stages in order (evaporation → condensation → precipitation → return), each causing the next. Sequence words ('First', 'then') signal the order.",
        },
      },
      questions: [
        {
          id: "ela8-u5-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STRUCTURETEXT,
          stem: "What text structure does the water cycle passage primarily use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chronological/cause-effect" },
              { id: "b", text: "Problem-solution" },
              { id: "c", text: "Description only" },
              { id: "d", text: "Compare-contrast" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chronological structure",
                statement: "Time order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'First... then...' + stages in order — chronological and cause-effect.",
                evidence: "First, the sun heats water",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Chronological/cause-effect — stages in order, each causing next.",
            commonErrors: ["Choosing (a) — no comparison between things."],
          },
        },
        {
          id: "ela8-u5-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STRUCTURETEXT,
          stem: "Identify two sequence words in the passage and explain what they signal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequence signals",
                statement: "Words indicate order.",
              },
            ],
            steps: [
              {
                reasoning: "'First' — signals beginning of process.",
                evidence: "First, the sun heats water",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "'then' — signals next step in sequence.",
                evidence: "The cycle then repeats",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both indicate chronological order — the process happens in sequence.",
                evidence: "continues to move water",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'First' and 'then' — signal chronological order, showing the process happens in sequence.",
            commonErrors: ["Choosing 'because' — that's cause, not sequence."],
          },
        },
        {
          id: "ela8-u5-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STRUCTURETEXT,
          stem: "Explain how the passage's structure mirrors the water cycle process itself. Why is this effective?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure-content match",
                statement: "Organization mirrors process.",
              },
              {
                kind: "skill",
                name: "Effectiveness analysis",
                statement: "Why structure matters.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Text presents stages in actual order: evaporation → condensation → precipitation → return.",
                evidence: "First, the sun heats water",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure mirrors process — readers follow the cycle as it happens in nature.",
                evidence: "The cycle then repeats continuously",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effective because chronological order matches how the process actually occurs — easy to understand.",
                evidence: "continuous process",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Cause-effect structure shows how each stage leads to the next — clarifies relationships.",
                evidence: "causing it to evaporate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The text's chronological structure mirrors the actual water cycle — stages in order (evaporation → condensation → precipitation → return). This is effective because readers follow the process as it occurs in nature, and cause-effect links show how stages connect.",
            commonErrors: [
              "Describing structure without explaining why it works.",
            ],
          },
        },
        {
          id: "ela8-u5-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STRUCTURETEXT,
          parts: [
            {
              label: "a",
              prompt: "Name the structure used in paragraph 3.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain how it differs from paragraphs 1-2.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure comparison",
                statement: "Different sections may use different structures.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Problem-solution — 'disrupt the water cycle... understanding helps'.",
                evidence: "Human activities can disrupt the water cycle",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Paragraphs 1-2 use chronological/cause-effect; paragraph 3 shifts to problem-solution — shows how humans affect the cycle and how understanding helps.",
                evidence: "helps scientists predict water availability",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Problem-solution. (b) Paragraphs 1-2 describe the natural cycle chronologically; paragraph 3 shifts to problem-solution showing human disruption and solutions.",
            commonErrors: [
              "Saying all paragraphs use same structure — they differ.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u5-structure2",
      title: "Comparing informational texts",
      skill:
        "Compare how different texts address the same topic with different structures and perspectives.",
      lesson: {
        sections: [
          {
            heading: "Same topic, different texts",
            body: "Two texts on water might use different structures: one chronological (how the cycle works), one problem-solution (water scarcity solutions), one compare-contrast (surface vs groundwater). Comparing reveals how structure serves purpose — a science text explains process; a policy text argues for action.",
          },
          {
            heading: "Perspective and emphasis",
            body: "Texts also differ in **emphasis**: one might focus on environmental impacts, another on human uses, another on economic costs. Same facts, different framing — 'water is essential for life' vs 'water scarcity costs billions'. Comparing texts reveals what each author chose to emphasize and why.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure serves purpose",
            statement: "Different structures for different goals.",
          },
          {
            name: "Emphasis varies",
            statement: "Same facts, different framing.",
          },
          {
            name: "Compare texts",
            statement: "Structure + emphasis + perspective reveal differences.",
          },
        ],
        workedExample: {
          problem:
            "How might two water texts differ in structure and emphasis?",
          solution:
            "Text A (science): chronological water cycle explanation — emphasizes process. Text B (policy): problem-solution on scarcity — emphasizes action. Same topic, different structure and emphasis serve different purposes.",
        },
      },
      questions: [
        {
          id: "ela8-u5-structure2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STRUCTURETEXT,
          stem: "What does 'compare texts' mean in informational reading?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Analyze how they differ in structure, emphasis, and perspective",
              },
              { id: "b", text: "Read them quickly" },
              { id: "c", text: "Summarize each separately" },
              { id: "d", text: "Choose the better one" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Text comparison",
                statement: "Analyze differences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comparing texts means analyzing how they differ — structure, emphasis, perspective.",
                evidence: "Comparing Informational Texts",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Analyze differences in structure, emphasis, perspective.",
            commonErrors: ["Choosing (d) — summary isn't comparison."],
          },
        },
        {
          id: "ela8-u5-structure2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STRUCTURETEXT,
          stem: "How might a second text on water scarcity differ from this water cycle text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Text comparison",
                statement: "Different purposes → different structures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Water cycle text: chronological process explanation — teaches how cycle works.",
                evidence: "continuous process that moves water",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Scarcity text: problem-solution — identifies problem and offers fixes.",
                evidence: "Human activities can disrupt",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Different purposes: education vs advocacy — different structures serve different goals.",
                evidence: "manage resources sustainably",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Water cycle text explains process chronologically; scarcity text would use problem-solution — different purposes need different structures.",
            commonErrors: [
              "Saying they'd be identical — purpose determines structure.",
            ],
          },
        },
        {
          id: "ela8-u5-structure2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STRUCTURETEXT,
          stem: "Analyze how the passage's emphasis on human disruption differs from a purely scientific water cycle explanation. What does this emphasis reveal about the author's purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Emphasis analysis",
                statement: "What authors choose to highlight.",
              },
              {
                kind: "skill",
                name: "Purpose inference",
                statement: "Emphasis reveals intent.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Emphasis: paragraph 3 focuses on human disruption — 'Human activities can disrupt the water cycle.'",
                evidence: "Human activities can disrupt the water cycle",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Purely scientific text would stop at cycle mechanics — this adds human impact.",
                evidence: "Deforestation reduces transpiration",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Purpose: environmental awareness — author wants readers to understand human responsibility.",
                evidence: "helps scientists predict water availability",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The emphasis shifts from 'how it works' to 'how we affect it' — advocacy, not just education.",
                evidence: "manage resources sustainably",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The passage emphasizes human disruption (deforestation, urbanization, climate change) rather than just cycle mechanics — revealing the author's purpose is environmental awareness and responsibility, not just scientific education.",
            commonErrors: [
              "Saying it's 'just science' — the human focus shows advocacy purpose.",
            ],
          },
        },
        {
          id: "ela8-u5-structure2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STRUCTURETEXT,
          parts: [
            {
              label: "a",
              prompt:
                "Name one way this text could be restructured for a different audience.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the new structure would serve that audience.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience-structure match",
                statement: "Structure serves audience needs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "For policy makers: problem-solution structure focusing on water scarcity solutions.",
                evidence: "manage resources sustainably",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Problem-solution serves policy audience — they need actionable solutions, not just process explanation.",
                evidence: "helps scientists predict",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Problem-solution for policy makers. (b) Serves their need for actionable solutions rather than process explanation.",
            commonErrors: ["Restructuring without considering audience needs."],
          },
        },
      ],
    },
  ],
};
