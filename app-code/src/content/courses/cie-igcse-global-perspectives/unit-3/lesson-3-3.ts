import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ciegp-u3-lesson-3-3",
  code: "3-3",
  title: "Project Presentation and Viva Technique",
  goal: "I CAN present research findings and defend them under questioning for IGCSE GP.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Research project: presentation, viva",
  ],
  vocabulary: [
    {
      term: "Viva",
      definition: "Oral questioning session defending the project.",
    },
    {
      term: "Presentation",
      definition: "Structured delivery of findings to an audience.",
    },
    {
      term: "Signposting",
      definition: "Verbal cues guiding listeners through the argument.",
    },
    {
      term: "Limitation",
      definition: "A boundary on what the research can claim.",
    },
    {
      term: "Recommendation",
      definition: "Actionable conclusion drawn from findings.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u3-s3-presentation",
      title: "Project presentation and viva",
      skill: "Present findings clearly and answer challenging questions.",
      lesson: {
        sections: [
          {
            heading: "Presentation",
            body: "IGCSE GP projects end in a presentation and viva voce. Structure: question → method → key findings → evaluation → recommendations. Signpost each section ('My research question was...'). Keep visual aids minimal and readable.",
          },
          {
            heading: "Viva technique",
            body: "Examiners probe methodology, bias and limitations. Prepare answers for: Why these sources? What are the limitations? What would you do differently? Never bluff — admitting a limitation honestly scores better than a shaky defence.",
          },
        ],
        keyFormulas: [
          {
            name: "Presentation flow",
            statement:
              "question → method → findings → evaluation → recommendation",
          },
          { name: "Viva rule", statement: "honest limitation > shaky defence" },
        ],
        workedExample: {
          problem:
            "Examiner asks: 'What is the biggest limitation of your project?' Model answer.",
          solution:
            "'I relied heavily on English-language sources, which may miss perspectives from non-English-speaking communities affected by the issue.'",
        },
      },
      questions: [
        {
          id: "ciegp-u3-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of the viva voce in IGCSE GP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To test memorised facts" },
              {
                id: "b",
                text: "To question the candidate about their research process and findings",
              },
              { id: "c", text: "To grade handwriting" },
              { id: "d", text: "To re-mark the written paper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Viva",
                statement: "Oral defence of the project.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The viva probes understanding of method, evidence and limitations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "To question the candidate about their research",
          },
        },
        {
          id: "ciegp-u3-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two features of an effective GP project presentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation",
                statement: "Structured, signposted, evidence-led.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clear structure following question→method→findings→evaluation→recommendation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Verbal signposting and minimal, legible visual aids.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear structure and signposting; evidence-led with readable visuals",
          },
        },
        {
          id: "ciegp-u3-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An examiner asks: 'How did you ensure your sources were reliable?' Outline a strong answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Methodology defence",
                statement: "Name concrete reliability steps.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Used reputable organisations and cross-checked claims across sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Checked publication dates and author credentials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Excluded or flagged biased sources such as campaign material.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reputable sources + corroboration + date/credential checks + bias filtering",
          },
        },
        {
          id: "ciegp-u3-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In the viva, an examiner challenges your conclusion: 'Your evidence doesn't support your recommendation.' Describe how you should respond, including what NOT to do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Viva defence",
                statement: "Stay calm, re-link evidence, concede gracefully.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Do NOT bluff or attack the examiner — this loses marks immediately.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Re-state which specific findings support the recommendation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acknowledge the gap: 'You're right that evidence is limited in area X — this is why my recommendation is cautious.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calm, evidence-linked response that concedes honestly where needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stay calm; re-link specific evidence; concede limitations honestly; never bluff",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u3-pres-notes",
      title: "Project presentation — revision notes",
      summary:
        "Presentation flow, signposting, viva technique, honest limitations.",
      sections: [
        {
          heading: "Key skills",
          body: "Follow question→method→findings→evaluation→recommendation; prepare for methodology and limitation questions.",
        },
        {
          heading: "Exam tips",
          body: "Practice answering 'What are your limitations?' out loud — honest, specific answers outperform defensive ones.",
        },
      ],
    },
  ],
};
