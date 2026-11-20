import type { Lesson } from "../../../types.ts";

export const lesson29: Lesson = {
  id: "cipe-u2-lesson-2-9",
  code: "2-9",
  title: "Stage 6 — Imaginative and Discussion Writing",
  goal: "I CAN write imaginative stories and balanced discussion texts.",
  standards: ["Cambridge Primary English 0058 Stage 6: writing",
  "Cambridge Primary English 0058 framework substrands: 6Wc, 6SLg, 6SLr"],
  stage: 6,
  vocabulary: [
    { term: "Imaginative writing", definition: "Creating stories and descriptions from your imagination." },
    { term: "Discussion text", definition: "Writing that explores a topic from different viewpoints." },
    { term: "Balanced argument", definition: "Presenting both sides of an issue fairly." },
    { term: "Show, don't tell", definition: "Using detail and action instead of stating facts." },
    { term: "Conclusion", definition: "Final paragraph that sums up or gives your view." },
  ],
  concepts: [
    {
      id: "cipe-u2-s9-imaginative-discussion",
      title: "Imaginative writing and discussion",
      skill: "Craft imaginative narratives and balanced discussion texts at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Imaginative writing",
            body: "Build story worlds with vivid description — use the five senses, show character through action and speech, and control pace (slow for tension, fast for excitement). Plan first: characters, setting, problem, solution. Show don't tell — 'Her hands shook' beats 'She was nervous'.",
          },
          {
            heading: "Discussion writing",
            body: "A discussion text explores an issue fairly: introduce the topic, present arguments for and against, acknowledge counter-arguments, and conclude with a balanced judgement or your own reasoned view. Use connectives like 'however', 'on the other hand', 'therefore'.",
          },
        ],
        keyFormulas: [
          { name: "Story plan", statement: "Characters → setting → problem → solution" },
          { name: "Discussion", statement: "Topic → for/against → counter-arguments → conclusion" },
        ],
        workedExample: {
          problem: "Turn 'The boy was scared' into showing, not telling.",
          solution: "'The boy's knees knocked together as he peered into the dark hallway.'",
        },
      },
      questions: [
        {
          id: "cipe-u2-id-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'show, don't tell' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Write shorter sentences" }, { id: "b", text: "Use action and detail instead of stating emotions" }, { id: "c", text: "Only write dialogue" }, { id: "d", text: "Describe everything" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Show don't tell", statement: "Action/detail conveys feeling." }],
            steps: [{ reasoning: "Showing uses description instead of naming the emotion.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Use detail/action, not direct statements",
          },
        },
        {
          id: "cipe-u2-id-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should a discussion text include to be balanced?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Balanced argument", statement: "Both viewpoints presented fairly." }],
            steps: [
              { reasoning: "Arguments for AND against the issue.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Arguments for and against",
          },
        },
        {
          id: "cipe-u2-id-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the better opening for a story? 'It was a dark night.' or 'Rain lashed the windows as Mara counted her heartbeats.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Vivid openings", statement: "Sensory detail engages the reader." }],
            steps: [
              { reasoning: "Second uses imagery (rain, heartbeats) and character.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates mood and tension.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer identifies the stronger opening.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Rain lashed the windows…' — vivid and engaging",
          },
        },
        {
          id: "cipe-u2-id-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a balanced concluding sentence for a discussion on 'Should homework be abolished?'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced conclusion", statement: "Summarise both sides and give reasoned view." }],
            steps: [
              { reasoning: "Acknowledges both sides.", marks: 1, markCode: "AO2" },
              { reasoning: "Gives a reasoned judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal, balanced tone.", marks: 1, markCode: "AO2" },
              { reasoning: "Coherent sentence.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'While homework can consolidate learning, a balanced approach with less repetitive tasks would serve students better.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-id-notes",
      title: "Imaginative and discussion writing — revision notes",
      summary: "Stories: plan, show don't tell, sensory detail; discussions: both sides + conclusion.",
      sections: [
        { heading: "Imaginative", body: "Plan characters/problem/solution; use senses and action; control pace." },
        { heading: "Discussion", body: "For + against + counter-arguments + balanced conclusion." },
      ],
    },
  ],
};
