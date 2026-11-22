import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ee-u3-lesson-3-3",
  code: "3-3",
  title: "The Reflection and Progress Form (RPF) and Assessment",
  goal: "I CAN complete the RPF reflective statement and viva voce and understand the EE assessment criteria A-E.",
  standards: ["EE", "RPF", "Assessment", "Reflection"],
  vocabulary: [
    {
      term: "RPF",
      definition:
        "Reflection and Progress Form — one 500-word reflective statement plus a viva voce, required for first assessment 2027.",
    },
    {
      term: "Viva voce",
      definition:
        "A short oral discussion with the supervisor about the essay and the reflection.",
    },
    {
      term: "Assessment criteria",
      definition:
        "The rubric used to mark the EE under the 2027 guide: criteria A-E totalling 30 marks.",
    },
    {
      term: "Criterion E — Reflection",
      definition:
        "The criterion (4 marks) that assesses the quality of reflection shown in the RPF.",
    },
    {
      term: "Supervisor",
      definition: "Teacher guiding the EE through meetings and the viva voce.",
    },
    {
      term: "Word count",
      definition:
        "Maximum 4000 words for the essay body, excluding abstract, contents, references.",
    },
  ],
  concepts: [
    {
      id: "ee-u3-rpf",
      title: "The RPF reflection statement and viva",
      skill:
        "Complete the 500-word RPF reflective statement and prepare for the viva voce.",
      lesson: {
        sections: [
          {
            heading: "What the RPF is",
            body: "For first assessment 2027, the **Reflection and Progress Form (RPF)** consists of **one 500-word reflective statement** written by the student, plus a **viva voce** — a short discussion with your supervisor. It documents your research journey: how you developed the question, what challenges you faced, how your thinking changed, and what you learned about research and academic work. It is submitted with the essay and marked under Criterion E.",
          },
          {
            heading: "What to reflect on",
            body: "The statement should address: how your research question developed; challenges encountered and how you addressed them; how your understanding or approach changed; and what you learned about research and academic work. Be honest and specific — generic statements score poorly.",
          },
          {
            heading: "The viva voce",
            body: "The viva is a brief oral discussion with your supervisor about the essay and your reflection. Prepare by re-reading your research question, reflective statement and key arguments. Expect questions about your sources, reasoning and what you would do differently. It confirms the work genuinely represents your own thinking.",
          },
        ],
        keyFormulas: [
          {
            name: "RPF structure",
            statement:
              "1 reflective statement (500 words) + viva voce with supervisor",
          },
          {
            name: "Reflection quality",
            statement: "Specific, honest, shows learning and development",
          },
        ],
        workedExample: {
          problem:
            "Your research question changed significantly. How to reflect on this?",
          solution:
            "Document why it changed: what you learned, what sources revealed, how your understanding deepened. This shows intellectual growth — exactly what reflection is meant to capture. Do not hide the change; explain it.",
        },
      },
      questions: [
        {
          id: "ee-u3-l33c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For first assessment 2027, the RPF consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A bibliography" },
              { id: "b", text: "A presentation" },
              { id: "c", text: "One 500-word statement and a viva voce" },
              { id: "d", text: "Three separate essays" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "RPF structure",
                statement:
                  "RPF = one 500-word reflective statement + viva voce.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 2027 RPF is a single 500-word statement plus an oral viva.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** One 500-word statement and a viva voce",
            commonErrors: [
              "Outdated knowledge of the old RPPF with three reflections.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what makes a strong RPF reflective statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection quality",
                statement:
                  "Strong reflection is specific, honest and shows learning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific: describes actual challenges and decisions, not generic statements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Honest: acknowledges difficulties and changes in approach.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shows learning: explains how understanding or skills developed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strong reflection is specific, honest and demonstrates learning and development.",
            commonErrors: [
              "Writing generic reflections that could apply to any essay.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of the viva voce in the EE process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva voce",
                statement:
                  "The viva verifies authentic engagement and supports the reflection assessment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: the viva confirms the work is genuinely the student's own.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For: it allows discussion of reasoning and reflection not evident in writing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: it is brief and may not capture the full depth of thinking.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: brief but meaningful check on authenticity — preparation matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The viva verifies authenticity and engagement; it is short but consequential.",
            commonErrors: [
              "Treating the viva as optional or merely administrative.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of the RPF in EE assessment.",
          parts: [
            { label: "a", prompt: "Explain what the RPF documents.", marks: 2 },
            {
              label: "b",
              prompt: "Describe what makes a strong reflection.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate how reflection contributes to assessment.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "RPF assessment",
                statement:
                  "The RPF documents the research journey and feeds Criterion E.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Documents research process: question development, challenges, learning.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "One 500-word statement plus viva voce.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Specific: actual challenges and decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Honest: acknowledges difficulties and changes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Shows learning: explains development of understanding.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reflection feeds Criterion E (4 marks) of the 30-mark total.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "It demonstrates engagement and the human process behind the essay.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: genuine reflection is a distinct, markable achievement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Research journey documentation. (b) Specific, honest, shows learning. (c) Feeds Criterion E, marks process.",
            commonErrors: [
              "Writing reflections as summaries rather than genuine reflection.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The RPF reflective statement for first assessment 2027 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "250 words" },
              { id: "b", text: "500 words" },
              { id: "c", text: "2000 words" },
              { id: "d", text: "1000 words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "RPF structure",
                statement:
                  "The RPF is one 500-word reflective statement plus a viva voce.",
              },
            ],
            steps: [
              {
                reasoning: "The reflective statement is limited to 500 words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 500 words",
            commonErrors: [
              "Outdated knowledge of the old multi-reflection RPPF.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The viva voce is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An online quiz" },
              { id: "b", text: "A peer review session" },
              { id: "c", text: "A written examination" },
              { id: "d", text: "An oral discussion with your supervisor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Viva voce",
                statement:
                  "The viva is a short oral discussion with the supervisor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The viva voce is an oral discussion, not a written test.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** An oral discussion with your supervisor",
            commonErrors: ["Confusing the viva with a formal examination."],
          },
        },
        {
          id: "ee-u3-l33c1q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Name four aspects of the research journey the RPF should address.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "RPF reflection",
                statement:
                  "The RPF documents question development, challenges, changed understanding and learning.",
              },
            ],
            steps: [
              {
                reasoning: "How the research question developed over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Challenges encountered and how they were addressed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "How understanding or approach changed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "What was learned about research and academic work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Question development, challenges faced, changes in understanding, and learning about research.",
            commonErrors: ["Writing the statement as a summary of findings."],
          },
        },
        {
          id: "ee-u3-l33c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reflection stating only 'I learned to manage my time better' is weak because it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too honest" },
              { id: "b", text: "Generic and not specific to the research" },
              { id: "c", text: "Written in the wrong tense" },
              { id: "d", text: "Too long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection quality",
                statement:
                  "Strong reflection is specific, honest and shows learning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Generic claims could apply to any essay and show no engagement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Generic and not specific to the research",
            commonErrors: [
              "Writing reflections that could apply to any topic.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "If your research question changed during the EE, the RPF should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Explain why it changed and what you learned" },
              { id: "b", text: "Repeat the original question verbatim" },
              { id: "c", text: "Ignore it entirely" },
              { id: "d", text: "Hide the change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection quality",
                statement:
                  "Documenting how the question evolved shows intellectual growth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Explaining the change demonstrates learning — the point of reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Explain why it changed and what you learned",
            commonErrors: [
              "Hiding changes in direction that actually show growth.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which best describes the relationship between the essay and the RPF?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The RPF documents the learning process behind the essay",
              },
              { id: "b", text: "They are completely unrelated" },
              { id: "c", text: "The RPF summarises the essay's findings" },
              { id: "d", text: "The RPF replaces the essay" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "RPF reflection",
                statement:
                  "The RPF reflects on the process and growth, not the findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The RPF documents the research journey, not the results.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The RPF documents the learning process behind the essay",
            commonErrors: ["Writing the RPF as an essay summary."],
          },
        },
        {
          id: "ee-u3-l33c1q11",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how the RPF differs from the essay's conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "RPF reflection",
                statement:
                  "The conclusion answers the RQ; the RPF reflects on the process of getting there.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The conclusion answers the research question using the essay's findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The RPF reflects on the research journey — challenges, changes, learning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They serve different purposes: product versus process.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The RPF is not a summary of findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: they are distinct components assessed differently.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The conclusion answers the RQ with findings; the RPF reflects on the learning process behind them.",
            commonErrors: [
              "Duplicating essay content in the reflective statement.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q12",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine what makes reflection convincing to markers.",
          parts: [
            {
              label: "a",
              prompt:
                "Evaluate the value of admitting mistakes in the reflection.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why specific examples beat general claims.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Judge whether reflection can be over-polished into sounding insincere.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection quality",
                statement:
                  "Convincing reflection is honest, specific and shows genuine development.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Admitting mistakes demonstrates honesty and integrity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It shows problem-solving rather than a flawless fantasy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Judgement: honest accounts of setbacks are more convincing than polished narratives.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Specific events are verifiable and prove genuine engagement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "General claims could apply to anyone and suggest invention.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: detail is the currency of convincing reflection.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Yes — over-rehearsed language can sound performed rather than reflective.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: authenticity matters more than stylistic polish.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Admitting mistakes shows honesty. (b) Specific examples prove engagement. (c) Over-polish can sound insincere.",
            commonErrors: [
              "Writing a flawless narrative that avoids all difficulty.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that the RPF is just paperwork with no academic value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "RPF assessment",
                statement:
                  "The RPF is marked under Criterion E and develops genuine research reflection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Against: Criterion E awards 4 marks for reflection quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: reflection develops metacognitive skills about research.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The viva verifies that the work reflects genuine engagement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Genuine reflection evidences the learning the EE aims to produce.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: the RPF is integral to assessment, not paperwork.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The RPF carries real marks and develops research skills — it is integral, not paperwork.",
            commonErrors: ["Treating Criterion E as an afterthought."],
          },
        },
        {
          id: "ee-u3-l33c1q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why keeping notes throughout the research process helps when writing the RPF.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection quality",
                statement:
                  "Process notes preserve specific, accurate detail needed for convincing reflection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Notes record specific events, challenges and decisions as they happen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They preserve accurate detail within the tight 500-word limit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They show how understanding developed over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: preparation beats trying to recall everything at the end.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Process notes capture specific events and development, enabling accurate, detailed reflection within 500 words.",
            commonErrors: [
              "Trying to reconstruct the process from memory at the deadline.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Examine Criterion E — Reflection.",
          parts: [
            {
              label: "a",
              prompt: "Explain what Criterion E assesses and its mark weight.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Describe how the RPF statement and viva together evidence reflection.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate strategies for securing full marks in Criterion E.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion E — Reflection",
                statement:
                  "Criterion E (4 marks) assesses the quality of reflection in the RPF and viva.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It assesses reflection shown in the 500-word statement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It also assesses reflection evidenced in the viva voce.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Quality means specific, honest and developmentally aware.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "It carries 4 of the 30 total marks.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The written statement shows depth of reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The viva confirms authenticity and spontaneous understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Together they evidence the learning journey behind the essay.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Keep process notes to write specifically and honestly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Include setbacks and changes — they demonstrate growth.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: full marks are achievable with genuine, prepared reflection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Quality of reflection in statement and viva, 4 marks. (b) Writing shows depth, viva shows authenticity. (c) Notes, honesty and preparation secure marks.",
            commonErrors: [
              "Writing generic reflection that could apply to any essay.",
            ],
          },
        },
        {
          id: "ee-u3-l33c1q16",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Briefly explain the purpose of the viva voce.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva voce",
                statement:
                  "The viva verifies authentic engagement and supports reflection assessment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It is an oral check of the student's understanding of the essay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It confirms the work genuinely represents the student's own thinking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It allows discussion of the essay and the reflection statement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: it is a safeguard on authenticity, not a formality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The viva voce orally verifies that the essay and reflection genuinely represent the student's own work.",
            commonErrors: [
              "Treating the viva as optional or merely administrative.",
            ],
          },
        },
      ],
    },
    {
      id: "ee-u3-assessment-criteria",
      title: "EE assessment criteria A-E",
      skill:
        "Understand the five assessment criteria A-E used to mark the Extended Essay for first assessment 2027.",
      lesson: {
        sections: [
          {
            heading: "The five criteria",
            body: "The EE is marked on five criteria totalling 30 marks: **A — A framework for the essay (6 marks)** covering research question, introduction and conclusion; **B — Knowledge and understanding (6)** for depth of research and argument; **C — Analysis and line of argument (6)** for rigor of analysis; **D — Discussion and evaluation (8)** for balance and critical judgement; **E — Reflection (4)** for the quality shown in the RPF statement and viva voce.",
          },
          {
            heading: "Criterion A: framework",
            body: "This assesses whether your research question is focused and arguable and whether the essay's structure delivers what it promises. A vague or overly broad question undermines the whole essay — fix it early. A precise, well-formed question enables high achievement across other criteria.",
          },
          {
            heading: "Maximising your grade",
            body: "Address all five criteria deliberately: formulate a strong research question early (A); conduct thorough research (B); analyse rather than describe (C); engage counterarguments and evaluate (D — the largest criterion at 8 marks); and write a specific, honest reflective statement (E). The essay and RPF together demonstrate your research capability — both matter.",
          },
        ],
        keyFormulas: [
          {
            name: "Criteria A-E",
            statement:
              "A Framework 6 + B Knowledge 6 + C Analysis 6 + D Discussion 8 + E Reflection 4 = 30",
          },
          {
            name: "Grade strategy",
            statement:
              "Address all five criteria deliberately; D carries the most marks",
          },
        ],
        workedExample: {
          problem:
            "Your essay is well-written but your research question is vague. What happens?",
          solution:
            "Criterion A (Framework) scores low and the weak question also limits B — you cannot research what you did not ask. Always prioritise a focused, arguable research question before writing begins.",
        },
      },
      questions: [
        {
          id: "ee-u3-l33c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Under the 2027 guide, the EE is assessed on how many criteria?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Five" },
              { id: "b", text: "Four" },
              { id: "c", text: "Three" },
              { id: "d", text: "Two" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "EE criteria",
                statement:
                  "EE assessed on five criteria A-E for first assessment 2027.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criteria A-E: Framework, Knowledge, Analysis, Discussion, Reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (d) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Five",
            commonErrors: [
              "Outdated knowledge of the old four-criteria system.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the five EE assessment criteria A-E.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "EE criteria",
                statement:
                  "A Framework, B Knowledge, C Analysis, D Discussion, E Reflection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A (Framework): research question, introduction, conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "B (Knowledge) and C (Analysis): depth of research and rigour of argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "D (Discussion, 8 marks) and E (Reflection, 4): evaluation and quality of reflection in the RPF.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A Framework, B Knowledge, C Analysis, D Discussion & evaluation, E Reflection — 30 marks.",
            commonErrors: [
              "Focusing only on writing quality and ignoring framework and reflection.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that a weak research question can be compensated by excellent writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Framework criterion",
                statement:
                  "Criterion A caps overall achievement — a weak question undermines the whole essay.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Against: each criterion is marked separately; strong writing helps presentation within A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For: a weak question limits B — you cannot research what you did not ask.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Criterion A itself would score low regardless of prose quality.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: excellent writing cannot compensate for a fundamentally weak question.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Excellent writing cannot compensate for a weak research question — the framework criterion caps achievement.",
            commonErrors: [
              "Believing writing skill alone determines the grade.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to maximise achievement across EE criteria A-E.",
          parts: [
            {
              label: "a",
              prompt: "Name the five assessment criteria.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how to excel in each criterion.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the relationship between the essay and the RPF in assessment.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EE assessment",
                statement:
                  "All five criteria contribute; the essay and RPF work together.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A Framework, B Knowledge, C Analysis, D Discussion, E Reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All five named.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A/B: formulate a focused, arguable question and research it thoroughly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "C/D: analyse rather than describe; engage counterarguments and evaluate.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "E: write a specific, honest 500-word reflective statement.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The essay demonstrates research capability; the RPF shows the process.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Criterion E links them — reflection marks the journey behind the essay.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: neglecting either component limits overall achievement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Five criteria A-E. (b) Strong RQ, deep research, analysis, evaluation, honest reflection. (c) Essay and RPF work together.",
            commonErrors: [
              "Focusing only on essay writing and neglecting the RPF.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Criterion D — Discussion and evaluation carries how many marks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "8" },
              { id: "c", text: "4" },
              { id: "d", text: "6" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criteria A-E",
                statement: "A6 + B6 + C6 + D8 + E4 = 30 marks; D is largest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion D carries 8 marks — the largest single criterion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 8",
            commonErrors: ["Misremembering criterion mark allocations."],
          },
        },
        {
          id: "ee-u3-l33c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Criterion E assesses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Essay structure and word count" },
              { id: "b", text: "Only the essay's introduction" },
              { id: "c", text: "Citation formatting accuracy" },
              {
                id: "d",
                text: "Quality of reflection shown in the RPF and viva",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criterion E — Reflection",
                statement:
                  "Criterion E marks the quality of reflection in the RPF statement and viva.",
              },
            ],
            steps: [
              {
                reasoning: "Criterion E is the reflection criterion (4 marks).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Quality of reflection shown in the RPF and viva",
            commonErrors: [
              "Thinking Criterion E assesses the essay text itself.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "List criteria A-E with a one-line description of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criteria A-E",
                statement:
                  "A Framework, B Knowledge, C Analysis, D Discussion, E Reflection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A (Framework): research question, introduction and conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "B (Knowledge): depth and quality of research and understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "C (Analysis): rigor of analysis and coherence of argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "D (Discussion, 8) and E (Reflection, 4): evaluation and reflection in RPF.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A Framework, B Knowledge, C Analysis, D Discussion & evaluation, E Reflection — 30 marks.",
            commonErrors: ["Confusing the criteria or omitting E."],
          },
        },
        {
          id: "ee-u3-l33c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which criterion carries the most marks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A — Framework" },
              { id: "b", text: "D — Discussion and evaluation" },
              { id: "c", text: "C — Analysis" },
              { id: "d", text: "E — Reflection" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criteria A-E",
                statement:
                  "D carries 8 of the 30 marks — the largest criterion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion D has 8 marks versus 6, 6, 6 and 4 for the others.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** D — Discussion and evaluation",
            commonErrors: ["Assuming all criteria carry equal marks."],
          },
        },
        {
          id: "ee-u3-l33c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A vague, overly broad research question most directly damages:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the viva voce" },
              { id: "b", text: "Only Criterion E" },
              { id: "c", text: "Criterion A and, downstream, Criterion B" },
              { id: "d", text: "Nothing if the writing is strong" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Framework criterion",
                statement:
                  "A weak question undermines A directly and limits B's research scope.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion A assesses the question itself; B depends on what can be researched.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Criterion A and, downstream, Criterion B",
            commonErrors: [
              "Believing strong writing compensates for a weak question.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Criterion C — Analysis and line of argument primarily rewards:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spelling and grammar accuracy" },
              { id: "b", text: "The number of sources consulted" },
              { id: "c", text: "The length of the essay" },
              {
                id: "d",
                text: "Rigor of analysis and a coherent, sustained argument",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion C — Analysis",
                statement:
                  "Criterion C rewards analytical depth and a coherent line of argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C assesses how rigorously the essay analyses and argues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Rigor of analysis and a coherent, sustained argument",
            commonErrors: ["Confusing Criterion C with surface presentation."],
          },
        },
        {
          id: "ee-u3-l33c2q11",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain what examiners look for under Criterion D.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion D — Discussion",
                statement:
                  "D (8 marks) rewards balance, counterarguments and critical evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Engagement with alternative viewpoints and perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Counterarguments addressed rather than ignored.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence weighed and critically evaluated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acknowledgement of limitations and strengths of the argument.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: D rewards balanced, evaluative argument — the largest criterion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Examiners look for multiple perspectives, addressed counterarguments, weighed evidence and critical judgement.",
            commonErrors: [
              "Presenting only supporting evidence without evaluation.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q12",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine strategic approaches to the EE assessment criteria.",
          parts: [
            {
              label: "a",
              prompt:
                "Evaluate allocating effort in proportion to mark weighting.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the interdependence of the five criteria.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Judge whether the criteria can be addressed independently.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EE assessment",
                statement:
                  "Criteria are separately marked but interdependent through essay quality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "D's 8 marks justify extra planning for counterarguments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "But A and B are foundations — neglecting them caps everything.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Judgement: proportional effort is sensible but foundations come first.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "A weak framework (A) limits what B can research.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Shallow knowledge (B) caps analysis (C) and evaluation (D).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "The criteria form a chain, not isolated boxes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Each criterion is marked separately, so coverage can be checked.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: they are assessed independently but earned through one coherent essay.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Weight guides effort but foundations first. (b) Criteria interdependent. (c) Assessed separately, earned coherently.",
            commonErrors: ["Over-investing in D while neglecting A and B."],
          },
        },
        {
          id: "ee-u3-l33c2q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that marks can be 'hunted' by mechanically inserting counterarguments and reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EE assessment",
                statement:
                  "Criteria are explicit, but marks emerge from genuine quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: criteria are published, so deliberate targeting is possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: mechanical insertions read as padding and score worse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examiners reward genuine engagement, not box-ticking.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "A checklist helps coverage but cannot manufacture depth.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Judgement: use criteria as a map, not a formula.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Criterion-hunting fails; genuine analysis, evaluation and reflection earn the marks.",
            commonErrors: [
              "Adding token counterarguments without real engagement.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the research question should be formulated and fixed early.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Framework criterion",
                statement:
                  "The research question underpins every other criterion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion A directly assesses the quality of the question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Criteria B, C and D all depend on what the question asks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A vague question cannot be retrofitted into a strong essay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: fixing a strong RQ early is the highest-leverage decision.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The research question frames A and determines the scope of B, C and D — fix it before writing.",
            commonErrors: [
              "Starting research before finalising a focused question.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Examine a scenario: a well-written, well-researched essay that never engages opposing viewpoints.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify which criterion suffers most and how many marks are at stake.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Describe two strategies to recover marks under that criterion.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the essay could still achieve a high grade overall.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion D — Discussion",
                statement:
                  "Ignoring opposing viewpoints directly undermines Criterion D.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Criterion D — Discussion and evaluation — suffers most.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It carries 8 of the 30 marks, the largest allocation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "No counterarguments or evaluation means a low band for D.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Up to 8 marks are effectively at risk.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Add a paragraph weighing alternative interpretations of the evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evaluate limitations and strengths of your own argument explicitly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Engage at least one credible opposing source.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Possible if other criteria are strong, but D caps the ceiling.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Ignoring the largest criterion signals incomplete scholarship.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: recovery is feasible but requires genuine evaluative writing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Criterion D, up to 8 marks at risk. (b) Weigh perspectives, evaluate limitations. (c) High grade possible but capped without D.",
            commonErrors: [
              "Assuming polished prose compensates for absent evaluation.",
            ],
          },
        },
        {
          id: "ee-u3-l33c2q16",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Show that criteria A-E total 30 marks and explain why this matters for planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criteria A-E",
                statement: "A6 + B6 + C6 + D8 + E4 = 30 marks.",
              },
            ],
            steps: [
              {
                reasoning: "6 + 6 + 6 + 8 + 4 = 30 marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each criterion is marked independently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Knowing the weights shows where effort pays most (D = 8).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: the totals are a planning tool, not just trivia.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Criteria A-E total 30 marks (6+6+6+8+4); the weighting guides where effort should focus.",
            commonErrors: ["Misremembering the pre-2027 criteria totals."],
          },
        },
      ],
    },
  ],
};
