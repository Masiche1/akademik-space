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
              { id: "b", text: "To grade handwriting" },
              { id: "c", text: "To re-mark the written paper" },
              {
                id: "d",
                text: "To question the candidate about their research process and findings",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "ciegp-u3-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of a GP project presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion → findings → question → method" },
              {
                id: "b",
                text: "Question → method → findings → evaluation → recommendation",
              },
              { id: "c", text: "Method → question → recommendation → findings" },
              { id: "d", text: "Findings → question → evaluation → method" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation flow",
                statement: "Question→method→findings→evaluation→recommendation.",
              },
            ],
            steps: [
              {
                reasoning: "The standard presentation arc.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Question→method→findings→evaluation→recommendation",
          },
        },
        {
          id: "ciegp-u3-pr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'signposting' in a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical signs on a wall" },
              {
                id: "b",
                text: "Verbal cues that guide listeners through the argument",
              },
              { id: "c", text: "Reading slides aloud" },
              { id: "d", text: "Street directions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Signposting",
                statement: "Verbal cues guiding listeners.",
              },
            ],
            steps: [
              {
                reasoning: "Signposting guides the audience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Verbal cues guiding listeners",
          },
        },
        {
          id: "ciegp-u3-pr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the examiner most likely to probe in the viva voce?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Your methodology, bias and limitations",
              },
              { id: "b", text: "The weather" },
              { id: "c", text: "Memorised statistics" },
              { id: "d", text: "Your handwriting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Viva focus",
                statement: "Method, bias, limitations.",
              },
            ],
            steps: [
              {
                reasoning: "Examiners probe research rigour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Methodology, bias and limitations",
          },
        },
        {
          id: "ciegp-u3-pr-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 10-minute presentation devotes 4 minutes to findings. What percentage is findings?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Section/total as percentage.",
              },
            ],
            steps: [
              {
                reasoning: "4/10 x 100 = 40%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40%",
          },
        },
        {
          id: "ciegp-u3-pr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student practises a presentation 5 times at an average of 8 minutes, but the slot is 10 minutes. What percentage of the slot does the average practice use?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 80 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Practice timing",
                statement: "Practice/slot as percentage.",
              },
            ],
            steps: [
              {
                reasoning: "8/10 x 100 = 80%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80%",
          },
        },
        {
          id: "ciegp-u3-pr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do minimal visual aids tend to work better in GP presentations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Visual aids",
                statement: "Simple aids support, not replace, speech.",
              },
            ],
            steps: [
              {
                reasoning: "Complex slides distract from the argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One idea per slide stays readable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Keeps focus on spoken evidence and signposting.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Avoids distraction; supports clear delivery",
          },
        },
        {
          id: "ciegp-u3-pr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the rule 'an honest limitation beats a shaky defence' for the viva.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Viva honesty",
                statement: "Concede limitations gracefully.",
              },
            ],
            steps: [
              {
                reasoning: "Examiners value self-awareness and rigour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bluffing collapses under probing questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Specific honest limits show mature research.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Honesty scores; bluffing loses marks",
          },
        },
        {
          id: "ciegp-u3-pr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the best answer to 'What would you do differently?' in a viva?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attack the examiner" },
              {
                id: "b",
                text: "A specific, realistic methodological improvement",
              },
              { id: "c", text: "'Nothing'" },
              { id: "d", text: "Change the whole topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Viva reflection",
                statement: "Specific improvements show learning.",
              },
            ],
            steps: [
              {
                reasoning: "Specific improvement demonstrates reflection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific methodological improvement",
          },
        },
        {
          id: "ciegp-u3-pr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A viva lasts 15 minutes and the candidate speaks for 60% of it. How many minutes does the candidate speak?",
          response: {
            type: "numeric",
            parts: [{ label: "Speaking minutes", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Viva timing",
                statement: "Percentage of total.",
              },
            ],
            steps: [
              {
                reasoning: "0.60 x 15 = 9 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9 minutes",
          },
        },
        {
          id: "ciegp-u3-pr-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why can admitting a limitation actually raise marks in a GP viva?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It demonstrates rigour, self-awareness and honest evaluation",
              },
              { id: "b", text: "It avoids all questions" },
              { id: "c", text: "It ends the viva early" },
              { id: "d", text: "Examiners reward failure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Honest limitations",
                statement: "Rigour rewarded over perfection.",
              },
            ],
            steps: [
              {
                reasoning: "Self-awareness signals research maturity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Demonstrates rigour and self-awareness",
          },
        },
        {
          id: "ciegp-u3-pr-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write model viva answers for: (a) 'Why did you choose these sources?' (b) 'What is your biggest limitation?' (c) 'Would you repeat the project?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Viva answers",
                statement: "Specific, honest, reflective.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Names credibility, corroboration, bias checks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) One specific, honest limitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Yes with stated improvements, or reasoned no.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All answers calm, specific and honest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific, honest, reflective answers to all three",
          },
        },
        {
          id: "ciegp-u3-pr-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A viva rubric allocates: method 30%, findings 30%, evaluation 25%, reflection 15%. For a 40-mark viva, how many marks is evaluation?",
          response: {
            type: "numeric",
            parts: [{ label: "Evaluation marks", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rubric weighting",
                statement: "Percentage of total marks.",
              },
            ],
            steps: [
              {
                reasoning: "0.25 x 40 = 10 marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10 marks",
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
