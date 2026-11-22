import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const COMPARE: TextExtract = {
  title: "Two Texts on School Start Times",
  author: "Written for Akademik Space",
  text: "Text A (Health Perspective):\n'Teenagers' circadian rhythms shift during puberty, making early school starts biologically misaligned with their sleep needs. Studies show later start times improve attendance, grades, and mental health. The American Academy of Pediatrics recommends middle and high schools start no earlier than 8:30 AM.'\n\nText B (Practical Perspective):\n'While sleep is important, later start times create significant logistical challenges. Schools must adjust bus schedules, after-school activities, and working parents' arrangements. Many districts report that the costs and coordination required outweigh the benefits, especially when academic improvements are modest.'",
};

const SYNTH: TextExtract = {
  title: "Synthesis Task",
  author: "Written for Akademik Space",
  text: "Write a response that compares how the two texts present different perspectives on school start times. Use evidence from both texts to support your analysis.",
};

export const lesson103: Lesson = {
  id: "ela8-u10-lesson-10-3",
  code: "10-3",
  title: "Comparing and Synthesizing Texts",
  goal: "I CAN compare perspectives across texts and synthesize information into coherent analysis.",
  standards: ["RI.8.9", "RI.8.6", "RI.8.8", "W.8.9"],
  vocabulary: [
    {
      term: "Synthesis",
      definition:
        "Combining information from multiple sources into coherent whole.",
    },
    { term: "Perspective", definition: "Point of view or stance on an issue." },
    { term: "Compare", definition: "Identify similarities between texts." },
    { term: "Contrast", definition: "Identify differences between texts." },
    {
      term: "Integration",
      definition: "Weaving multiple sources into unified response.",
    },
    {
      term: "Balanced analysis",
      definition: "Considering multiple viewpoints fairly.",
    },
  ],
  concepts: [
    {
      id: "ela8-u10-compare",
      title: "Comparing text perspectives",
      skill:
        "Identify similarities and differences between texts on the same topic.",
      lesson: {
        sections: [
          {
            heading: "Compare and contrast",
            body: "**Compare** = similarities: both texts agree sleep matters and school schedules affect students. **Contrast** = differences: Text A emphasizes health benefits (circadian rhythm, AAP recommendation); Text B emphasizes practical challenges (bus schedules, costs, parent coordination). Text A uses medical authority; Text B uses practical/logistical reasoning. Both are valid — they address different aspects of same issue.",
          },
          {
            heading: "Perspective analysis",
            body: "Each text has perspective shaped by audience and purpose. Text A targets health advocates/parents — uses medical authority (AAP), biological explanation (circadian rhythm). Text B targets school administrators — uses practical concerns (costs, logistics). Perspective isn't bias — it's emphasis. Strong analysis recognizes both perspectives are legitimate but incomplete — real solution must balance health benefits with practical constraints.",
          },
        ],
        keyFormulas: [
          {
            name: "Compare = similarities",
            statement: "What both texts agree on.",
          },
          {
            name: "Contrast = differences",
            statement: "What texts emphasize differently.",
          },
          {
            name: "Perspective = emphasis",
            statement: "Different aspects, not necessarily bias.",
          },
          {
            name: "Synthesis = combination",
            statement: "Integrate both perspectives into balanced view.",
          },
        ],
        workedExample: {
          problem: "How do the two texts differ in perspective?",
          solution:
            "Text A: health perspective — emphasizes biological need, medical authority, benefits. Text B: practical perspective — emphasizes logistical challenges, costs, coordination. Both valid; synthesis requires balancing both.",
        },
      },
      questions: [
        {
          id: "ela8-u10-compare-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMPARE,
          stem: "What do both texts agree on about school start times?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bus schedules don't matter" },
              { id: "b", text: "Later starts are always better" },
              { id: "c", text: "Sleep matters and schedules affect students" },
              { id: "d", text: "Schools should start earlier" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparison",
                statement: "Find similarities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both acknowledge sleep importance and schedule impact — that's the agreement.",
                evidence: "sleep is important... schedules affect students",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Sleep matters and schedules affect students.",
            commonErrors: [
              "Choosing (a) — Text B doesn't agree later is always better.",
            ],
          },
        },
        {
          id: "ela8-u10-compare-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMPARE,
          stem: "Identify the key difference between the two texts' perspectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective contrast",
                statement: "Different emphases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text A: health perspective — emphasizes biological need, medical authority, benefits.",
                evidence: "circadian rhythms... American Academy of Pediatrics",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Text B: practical perspective — emphasizes logistical challenges, costs, coordination.",
                evidence: "logistical challenges... costs",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Difference: health benefits vs practical constraints — different aspects of same issue.",
                evidence: "different perspectives",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Text A emphasizes health benefits (biology, AAP); Text B emphasizes practical challenges (costs, logistics). Different aspects of same issue.",
            commonErrors: [
              "Saying one is right and other wrong — both are valid perspectives.",
            ],
          },
        },
        {
          id: "ela8-u10-compare-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMPARE,
          stem: "Write a synthesis that integrates both perspectives on school start times into a balanced analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis",
                statement: "Integrate multiple sources.",
              },
              {
                kind: "skill",
                name: "Balanced analysis",
                statement: "Consider all viewpoints.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Acknowledge Text A: later starts align with teen biology, improve health/grades (AAP recommendation).",
                evidence: "circadian rhythms... AAP",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Acknowledge Text B: practical challenges exist — bus schedules, costs, parent coordination.",
                evidence: "logistical challenges... costs",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: solution must balance health benefits with practical constraints — phased implementation, cost-benefit analysis.",
                evidence: "balanced analysis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Both texts make valid points. Later start times align with adolescent biology and improve health/grades (AAP). However, practical challenges — bus schedules, costs, parent coordination — are real constraints. Effective policy requires balancing health benefits against logistical costs through phased implementation and careful planning.'",
            commonErrors: [
              "Choosing one side — synthesis requires both perspectives.",
            ],
          },
        },
        {
          id: "ela8-u10-compare-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SYNTH,
          parts: [
            { label: "a", prompt: "What is 'synthesis' in writing?", marks: 2 },
            {
              label: "b",
              prompt: "Why is synthesis better than choosing one text?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis definition",
                statement: "Combine sources.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Combining information from multiple sources into coherent whole.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Considers all perspectives — more complete, balanced, sophisticated analysis.",
                evidence: "multiple sources",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Combining multiple sources into coherent whole. (b) More complete/balanced — considers all perspectives.",
            commonErrors: [
              "Thinking synthesis means picking best parts — it's integrating all.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u10-synthesize",
      title: "Synthesis and integration",
      skill:
        "Weave evidence from multiple sources into coherent analytical response.",
      lesson: {
        sections: [
          {
            heading: "Integration techniques",
            body: "**Point-by-point**: discuss Text A's health argument, then Text B's practical concerns, then compare. **Thematic**: organize by theme (benefits, challenges) and show how each text addresses it. **Claim-evidence**: make claim, cite both texts as evidence. Smooth transitions: 'While Text A emphasizes... Text B counters with...' Integration isn't just listing — it's building argument using multiple sources.",
          },
          {
            heading: "Citation in synthesis",
            body: "Attribute ideas clearly: 'According to Text A, circadian rhythms shift...' vs 'Text B argues practical challenges...' This shows you're synthesizing, not just summarizing. Connect sources: 'Text A's health benefits must be weighed against Text B's logistical concerns.' The synthesis reveals what neither text alone shows — the tension between health and practicality.",
          },
        ],
        keyFormulas: [
          {
            name: "Point-by-point vs thematic",
            statement: "Two ways to organize synthesis.",
          },
          {
            name: "Attribute clearly",
            statement: "Show which text says what.",
          },
          {
            name: "Connect sources",
            statement: "Show relationship between perspectives.",
          },
        ],
        workedExample: {
          problem:
            "How would you integrate evidence from both texts in one paragraph?",
          solution:
            "'Text A argues later start times align with adolescent biology (AAP recommendation), while Text B counters that logistical challenges — bus schedules, costs — may outweigh benefits. The tension reveals that effective policy requires balancing health science with practical constraints.'",
        },
      },
      questions: [
        {
          id: "ela8-u10-synthesize-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMPARE,
          stem: "Which is NOT a synthesis technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Claim-evidence" },
              { id: "b", text: "Summarizing each separately" },
              { id: "c", text: "Point-by-point" },
              { id: "d", text: "Thematic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Integration, not summary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Summarizing separately isn't synthesis — it's just two summaries.",
                evidence: "synthesis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Summarizing each separately — not synthesis.",
            commonErrors: ["Confusing summary with synthesis."],
          },
        },
        {
          id: "ela8-u10-synthesize-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMPARE,
          stem: "Write one sentence that synthesizes both texts' perspectives on school start times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis sentence",
                statement: "Integrate both views.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Must include both health (Text A) and practical (Text B) perspectives.",
                evidence: "both perspectives",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'Later start times align with teen biology but require solving logistical challenges.'",
                evidence: "health vs practical",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows tension/balance between competing concerns.",
                evidence: "balancing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Later start times align with adolescent biology (Text A) but require addressing logistical challenges like bus schedules and costs (Text B).'",
            commonErrors: ["Including only one perspective — need both."],
          },
        },
        {
          id: "ela8-u10-synthesize-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTH,
          stem: "Write a complete synthesis paragraph comparing the two texts and presenting a balanced conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complete synthesis",
                statement: "Integrate and conclude.",
              },
              {
                kind: "skill",
                name: "Balanced conclusion",
                statement: "Fair final assessment.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Text A perspective: health benefits — circadian rhythm alignment, AAP recommendation, improved outcomes.",
                evidence: "Text A",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Text B perspective: practical challenges — bus schedules, costs, parent coordination, modest benefits.",
                evidence: "Text B",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balanced conclusion: both valid; solution requires weighing health benefits against practical constraints.",
                evidence: "balanced conclusion",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Text A argues later start times align with adolescent biology and improve health/grades (AAP recommendation). Text B counters that logistical challenges — bus schedules, costs, parent coordination — may outweigh benefits. Both perspectives are valid: health science supports later starts, but practical constraints are real. Effective policy requires balancing these concerns through phased implementation and careful cost-benefit analysis.'",
            commonErrors: [
              "Summarizing without synthesizing — need to show relationship between views.",
            ],
          },
        },
        {
          id: "ela8-u10-synthesize-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMPARE,
          parts: [
            {
              label: "a",
              prompt:
                "What's the difference between summarizing and synthesizing?",
              marks: 2,
            },
            { label: "b", prompt: "Which produces better analysis?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Summary vs synthesis",
                statement: "Integration vs restatement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Summarizing = restating each source; synthesizing = integrating into new understanding.",
                evidence: "summarizing vs synthesizing",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Synthesis — shows relationships, balanced analysis, deeper understanding.",
                evidence: "better analysis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Summary = restate; synthesis = integrate. (b) Synthesis — deeper, balanced analysis.",
            commonErrors: ["Thinking summary = synthesis — different skills."],
          },
        },
      ],
    },
  ],
};
