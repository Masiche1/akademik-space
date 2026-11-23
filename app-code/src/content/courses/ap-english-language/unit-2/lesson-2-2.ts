import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apel-u2-lesson-2-2",
  code: "2-2",
  title: "Synthesis Writing",
  goal: "I CAN integrate multiple sources into a coherent argument.",
  standards: ["AP Lang 5.x"],
  vocabulary: [
    { term: "Synthesis", definition: "Combining ideas from multiple sources into your own argument." },
    { term: "Source integration", definition: "Introducing, quoting, paraphrasing, and citing sources." },
    { term: "Attribution", definition: "Crediting source ideas — required for academic integrity." },
    { term: "Source tension", definition: "Sources that agree, complicate, or contradict each other." },
    { term: "Vox populi / straw man / either-or", definition: "Rhetorical moves sources may use — recognize and respond." },
    { term: "Synthesis thesis", definition: "Your own position built FROM sources, not a summary of them." },
  ],
  concepts: [
    {
      id: "apel-u2-synthesis-writing",
      title: "Synthesis",
      skill: "Weave sources into an original argument with proper attribution.",
      lesson: {
        sections: [
          {
            heading: "Source integration",
            body: "Introduce sources by name and credibility ('According to Dr. Chen's longitudinal study...'), quote precisely when wording matters, paraphrase when exact language doesn't. Every source idea needs attribution — synthesis without citation is plagiarism.",
          },
          {
            heading: "Building your own argument",
            body: "A synthesis thesis is YOUR position informed by sources — not 'Source A says X, Source B says Y'. Group sources by their relationship to your claim: supporting, complicating, contradicting. Address tensions directly — acknowledging complexity strengthens credibility.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis pattern", statement: "Your claim → source support → source complication → your resolution" },
          { name: "Integration", statement: "Introduce → quote/paraphrase → explain significance" },
        ],
        workedExample: {
          problem: "Source 1: 'Remote work increases productivity 13%.' Source 2: 'Remote workers report higher isolation.' Write a synthesis thesis on remote work.",
          solution: "'While remote work demonstrably boosts productivity metrics, its isolation costs suggest hybrid models — not fully remote or fully office — best serve both output and wellbeing.'",
        },
      },
      questions: [
        {
          id: "apel-u2-synthesis-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In synthesis, sources should ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "be summarized one by one"
                    },
                    {
                              "id": "b",
                              "text": "support and complicate YOUR argument"
                    },
                    {
                              "id": "c",
                              "text": "replace your own voice"
                    },
                    {
                              "id": "d",
                              "text": "be ignored if they disagree"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Your argument built from multiple sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sources serve YOUR thesis — you orchestrate them, not the reverse.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Writing a source-by-source summary instead of synthesis."
          ]
},
        },
        {
          id: "apel-u2-synthesis-writing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two sources contradict each other on a key point. The best response is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignore both"
                    },
                    {
                              "id": "b",
                              "text": "choose one and dismiss the other"
                    },
                    {
                              "id": "c",
                              "text": "acknowledge the tension and explain how it informs your position"
                    },
                    {
                              "id": "d",
                              "text": "average their claims"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Source tension",
                              "statement": "Contradictions reveal complexity — engage them."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acknowledging tension demonstrates sophistication; your thesis can account for both.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(c)",
          "commonErrors": [
                    "Pretending sources agree or arbitrarily picking one."
          ]
},
        },
        {
          id: "apel-u2-synthesis-writing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one sentence that integrates this source into an argument about screen time: Source: 'The average teen spends 7+ hours daily on screens (Pew Research, 2023).'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Source integration",
                              "statement": "Introduce + cite + connect to claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Model: 'Pew Research's finding that teens average over seven daily screen hours (2023) suggests the problem isn't occasional use but structural saturation of daily life.'",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Integration includes attribution, exact data, and connection to argument — not just the quote.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Introduce source + data + connect to argument, e.g., 'Pew's 7-hour finding suggests structural saturation'",
          "commonErrors": [
                    "Quoting without attribution or context."
          ]
},
        },
        {
          id: "apel-u2-synthesis-writing-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between summarizing sources and synthesizing them, and why synthesis earns higher scores.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Summary",
                              "statement": "Reports what sources say."
                    },
                    {
                              "kind": "context",
                              "name": "Synthesis",
                              "statement": "Builds YOUR argument using sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summary reports each source's content sequentially — descriptive, not analytical.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Synthesis organizes sources around YOUR claim — selecting, arranging, and commenting on how they support or complicate your position.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Synthesis demonstrates higher-order thinking: evaluation, organization, original argument — exactly what the exam rewards.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Synthesis = your argument using sources; summary = reporting sources",
          "commonErrors": [
                    "Thinking longer summaries score better — synthesis quality matters, not length."
          ]
},
        },
      ],
    },
  ],
};
