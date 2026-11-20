import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ee-u3-lesson-3-4",
  code: "3-4",
  title: "The Reflection and Progress Form and Assessment Criteria",
  goal: "I CAN prepare the Reflection and Progress Form statement and viva voce, and maximise marks under assessment criteria A-E.",
  standards: ["Extended Essay", "Assessment", "RPF", "Viva Voce"],
  vocabulary: [
    {
      term: "Reflection and Progress Form (RPF)",
      definition:
        "The EE reflection component for first assessment 2027: a single 500-word reflective statement plus a viva voce.",
    },
    {
      term: "Viva voce",
      definition:
        "An oral discussion with the supervisor about the essay and the reflective statement.",
    },
    {
      term: "Criterion A — Framework",
      definition:
        "Assessment of how effectively the essay is framed: research question, introduction, conclusion (6 marks).",
    },
    {
      term: "Criterion B — Knowledge and understanding",
      definition:
        "Depth and quality of research, analysis and argument (6 marks).",
    },
    {
      term: "Criterion C — Analysis and line of argument",
      definition:
        "How rigorously the essay analyses and sustains its argument (6 marks).",
    },
    {
      term: "Criterion D — Discussion and evaluation",
      definition:
        "Balance of perspectives, counterarguments and critical evaluation (8 marks).",
    },
    {
      term: "Criterion E — Reflection",
      definition:
        "Quality of reflection shown in the RPF statement and viva (4 marks).",
    },
  ],
  concepts: [
    {
      id: "ee-u3-rpf-viva",
      title: "The RPF and viva voce",
      skill:
        "Write an effective 500-word reflective statement and prepare for the viva voce discussion.",
      lesson: {
        sections: [
          {
            heading: "What the RPF requires",
            body: "For first assessment 2027, the old multi-session reflection paperwork is replaced by the **Reflection and Progress Form (RPF)**: **one 500-word reflective statement** written by the student. It should reflect on the research journey — how the research question developed, challenges faced and overcome, how understanding changed, and what was learned about research and academic work. It is submitted with the essay and marked under **Criterion E (Reflection, 4 marks)**.",
          },
          {
            heading: "Writing a strong reflective statement",
            body: "Effective reflection is **specific and honest**: name actual obstacles (dead-end sources, a shifted question, a methodological problem) and explain how you responded. Avoid generic claims like 'I learned to manage my time.' Show development: what you thought at the start versus what you understand now. Reflection is not a summary of the essay — it is an account of the learning process behind it.",
          },
          {
            heading: "Preparing for the viva voce",
            body: "The **viva voce** is a short oral discussion with your supervisor about the essay and your reflection. Prepare by re-reading your research question, your reflective statement and key arguments so you can discuss them fluently. Expect questions about your sources, your reasoning and what you would do differently. It assesses whether the essay and reflection genuinely represent your own work.",
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
            statement:
              "Specific, honest, shows change in understanding — not a summary",
          },
          {
            name: "Viva preparation",
            statement: "Know your RQ, your reflection and your arguments cold",
          },
        ],
        workedExample: {
          problem:
            "Is the reflective statement just a summary of the essay's findings?",
          solution:
            "No. The statement should focus on the process: how the question evolved, what went wrong, how your thinking changed. A summary of findings belongs in the essay's conclusion; the RPF documents the learning journey that produced them.",
        },
      },
      questions: [
        {
          id: "ee-u3-l34c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For first assessment 2027, the Reflection and Progress Form consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three separate written reflections" },
              { id: "b", text: "One 500-word statement plus a viva voce" },
              { id: "c", text: "A presentation to classmates" },
              { id: "d", text: "A bibliography and word count" },
            ],
            correctChoiceId: "b",
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
                  "The 2027 guide replaced multiple reflections with a single 500-word statement and oral viva.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** One 500-word statement plus a viva voce",
            commonErrors: [
              "Outdated knowledge of the old RPPF with three reflections.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q2",
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
                  "Strong reflection is specific, honest and demonstrates changed understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific: describes real challenges and decisions in the research process, not generic statements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Honest: acknowledges difficulties, dead ends and changes of direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shows development: explains how thinking or skills changed from start to finish.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Specific, honest reflection that shows how understanding and skills developed.",
            commonErrors: [
              "Writing a summary of the essay or generic time-management claims.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of the viva voce in EE assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva voce",
                statement:
                  "The viva verifies the student's authentic engagement and understanding behind the essay.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: it confirms the work is genuinely the student's own — authorship matters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For: it allows discussion of the reflection statement and reasoning not evident in writing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: it is brief and may not represent the full depth of the student's thinking.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: a short but meaningful check on authenticity and engagement — preparation matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The viva verifies authenticity and engagement; brief but consequential — prepare thoroughly.",
            commonErrors: ["Treating the viva as optional or informal."],
          },
        },
        {
          id: "ee-u3-l34c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to prepare for the RPF and viva voce.",
          parts: [
            {
              label: "a",
              prompt: "Describe what the reflective statement should cover.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain three strategies for writing an effective 500-word reflection.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate how well-prepared you can be for the viva voce.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "RPF preparation",
                statement:
                  "Reflection documents the learning journey; the viva tests authentic understanding.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Question development, challenges encountered, changes in understanding, learning about research.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Not a summary of findings — an account of the process and growth.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Keep notes throughout the process so specific events are recorded accurately.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Write specifically: name sources, problems and decisions rather than generalities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Draft early and revise within the 500-word limit for clarity and honesty.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Preparation can be thorough: re-read the essay, reflection and key arguments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Anticipate questions about sources, reasoning and alternative approaches.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: a student who wrote the essay can prepare well; authenticity is the real test.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Process and growth, not findings. (b) Note-taking, specificity, early drafting. (c) Thorough prep possible; authenticity matters.",
            commonErrors: [
              "Writing the reflection as an essay summary or leaving it until the deadline.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 500-word reflective statement should focus primarily on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising the essay's findings" },
              {
                id: "b",
                text: "The learning process and development behind the research",
              },
              { id: "c", text: "Listing all sources consulted" },
              { id: "d", text: "Rewriting the essay's introduction" },
            ],
            correctChoiceId: "b",
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
                  "Reflection documents the learning journey behind the essay.",
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
              "**(b)** The learning process and development behind the research",
            commonErrors: ["Writing the statement as an essay summary."],
          },
        },
        {
          id: "ee-u3-l34c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "During the viva voce you will typically discuss:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only your final grade" },
              {
                id: "b",
                text: "Your essay, sources, reasoning and reflection with your supervisor",
              },
              { id: "c", text: "Other students' essays" },
              { id: "d", text: "Nothing — it is a silent formality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva voce",
                statement:
                  "The viva discusses the essay and reflection to verify genuine engagement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The viva covers the essay, sources, reasoning and reflection.",
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
              "**(b)** Your essay, sources, reasoning and reflection with your supervisor",
            commonErrors: ["Underestimating what the viva covers."],
          },
        },
        {
          id: "ee-u3-l34c1q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "List four qualities of an effective reflective statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection quality",
                statement:
                  "Effective reflection is specific, honest, shows change and focuses on process.",
              },
            ],
            steps: [
              {
                reasoning: "Specific: names real challenges and decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Honest: acknowledges difficulties and dead ends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shows change: explains how understanding developed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Focuses on the process, not a summary of findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Specific, honest, shows development, and focuses on process rather than findings.",
            commonErrors: ["Writing generic reflections or essay summaries."],
          },
        },
        {
          id: "ee-u3-l34c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement would score poorly as RPF reflection?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "I misidentified a key source and had to rebuild my argument",
              },
              { id: "b", text: "I learned to manage my time better" },
              {
                id: "c",
                text: "My question narrowed after reading Smith's study",
              },
              {
                id: "d",
                text: "I struggled with the data and sought my supervisor's help",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection quality",
                statement:
                  "Generic claims without research-specific detail score poorly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Time management' is generic and could apply to any task.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** I learned to manage my time better",
            commonErrors: [
              "Confusing honesty with specificity — generic honesty still scores low.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The best preparation for the viva voce is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorise the essay verbatim" },
              {
                id: "b",
                text: "Re-read your research question, reflective statement and key arguments",
              },
              { id: "c", text: "Bring written notes to read aloud" },
              { id: "d", text: "Skip it — it is informal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva preparation",
                statement: "Know your RQ, reflection and arguments cold.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fluent command of your own work is what the viva tests.",
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
              "**(b)** Re-read your research question, reflective statement and key arguments",
            commonErrors: [
              "Preparing scripts instead of genuine understanding.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Reflection differs from summary because reflection:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeats the findings in order" },
              {
                id: "b",
                text: "Accounts for the learning process, challenges and growth",
              },
              { id: "c", text: "Is always shorter" },
              { id: "d", text: "Lists the sources used" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection quality",
                statement:
                  "Reflection is an account of learning, not a report of results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reflection evaluates the process and development behind the work.",
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
              "**(b)** Accounts for the learning process, challenges and growth",
            commonErrors: ["Confusing reflection with a narrative summary."],
          },
        },
        {
          id: "ee-u3-l34c1q11",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain the difference between reflection and summary in the RPF context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection quality",
                statement:
                  "Reflection evaluates meaning and development; summary recounts events.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Summary recounts what happened — findings, steps, events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reflection evaluates what the experience meant and what was learned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Summary is product-focused; reflection is process-focused.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reflection shows change in understanding over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: the RPF requires the latter, not the former.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Summary recounts events and findings; reflection evaluates the learning, challenges and growth behind them.",
            commonErrors: [
              "Writing the RPF as a chronological summary of the project.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q12",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine authenticity in reflection and the viva voce.",
          parts: [
            {
              label: "a",
              prompt:
                "Evaluate the value of honestly admitting research mistakes.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain what supervisors listen for in the viva.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Judge whether the viva can be over-prepared into seeming rehearsed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva voce",
                statement:
                  "The viva tests whether the work genuinely represents the student's own thinking.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Honest admission demonstrates integrity and self-awareness.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "It shows how problems were diagnosed and solved.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Judgement: markers reward honesty over a flawless facade.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Supervisors listen for fluent grasp of the RQ and arguments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "They check whether reflection claims match the actual process.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "They probe for genuine ownership of the ideas.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Yes — scripted answers can sound rehearsed and raise doubts.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Judgement: prepare thoroughly but speak naturally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Honest mistakes show integrity. (b) Supervisors check fluency, consistency and ownership. (c) Over-rehearsal can backfire.",
            commonErrors: [
              "Memorising answers rather than understanding the work.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that the viva voce is merely a formality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva voce",
                statement:
                  "The viva verifies authentic engagement and feeds Criterion E.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Against: it confirms the work is genuinely the student's own.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: it contributes evidence for Criterion E (4 marks).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is brief but consequential for authenticity assessment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unprepared students struggle to discuss their own work.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: the viva is a real assessment, not a formality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The viva is a genuine assessment of authenticity and understanding — not a formality.",
            commonErrors: ["Treating the viva as optional or informal."],
          },
        },
        {
          id: "ee-u3-l34c1q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why specificity matters in only 500 words of reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection quality",
                statement:
                  "With only 500 words, every sentence must carry specific, verifiable detail.",
              },
            ],
            steps: [
              {
                reasoning: "The tight limit means every word must count.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Specific events prove genuine engagement with the research.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vague claims waste the limited space available.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: density of detail is what distinguishes strong reflection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "In 500 words, specificity is essential — concrete detail proves engagement and uses the limit efficiently.",
            commonErrors: [
              "Spending words on generalities that could apply anywhere.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Examine Criterion E — Reflection in depth.",
          parts: [
            {
              label: "a",
              prompt: "Explain what Criterion E rewards and its mark weight.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Describe how the written statement and oral viva complement each other.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate how a student could maximise Criterion E marks.",
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
                  "Criterion E (4 marks) rewards genuine, specific reflection across statement and viva.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It rewards quality of reflection in the 500-word statement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It also rewards reflection evidenced in the viva voce.",
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
                reasoning:
                  "The statement provides depth and detail of reflection.",
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
                  "Maintain process notes to write specifically and honestly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Rehearse the viva so reflection claims match your actual account.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: E marks are achievable for any genuinely reflective student.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Specific honest reflection in statement and viva, 4 marks. (b) Writing shows depth, viva shows authenticity. (c) Notes, honesty and rehearsal secure marks.",
            commonErrors: [
              "Treating Criterion E as separate from the essay rather than its complement.",
            ],
          },
        },
        {
          id: "ee-u3-l34c1q16",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Briefly describe what typically happens at the viva voce.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viva voce",
                statement:
                  "A short oral discussion with the supervisor about the essay and reflection.",
              },
            ],
            steps: [
              {
                reasoning: "A short meeting with the supervisor takes place.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The essay and reflective statement are discussed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Questions may cover sources, reasoning and alternative approaches.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: its purpose is confirming the work is authentically the student's own.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A brief oral discussion with the supervisor covering the essay, reflection, sources and reasoning.",
            commonErrors: [
              "Expecting a formal examination rather than a discussion.",
            ],
          },
        },
      ],
    },
    {
      id: "ee-u3-criteria-ae",
      title: "Assessment criteria A–E",
      skill:
        "Understand what examiners reward under each of the five EE criteria (30 marks) and how to maximise achievement.",
      lesson: {
        sections: [
          {
            heading: "The five criteria and mark totals",
            body: "For first assessment 2027 the EE is marked on **five criteria totalling 30 marks**: **A — A framework for the essay (6)**, covering research question, introduction and conclusion; **B — Knowledge and understanding (6)**, depth and quality of research and argument; **C — Analysis and line of argument (6)**, rigor of analysis and coherence; **D — Discussion and evaluation (8)**, the largest criterion — balance, counterarguments and critical judgement; **E — Reflection (4)**, shown in the RPF statement and viva voce.",
          },
          {
            heading: "What each criterion rewards",
            body: "**Criterion A** rewards a focused, arguable research question and an essay that delivers what it promises. **Criterion B** rewards command of relevant literature and sources. **Criterion C** rewards analytical depth — going beyond description to explain and justify. **Criterion D** rewards engaging with alternative viewpoints and evaluating strengths and limitations. **Criterion E** rewards genuine, specific reflection on the research process.",
          },
          {
            heading: "Maximising marks strategically",
            body: "Criterion D carries the most marks (8), so essay plans should deliberately include counterarguments and evaluation. A weak research question undermines A and B simultaneously — fix it early. Reflection (E) is cheap marks if approached honestly: specific process notes translate directly into the statement. Check every criterion explicitly before submission.",
          },
        ],
        keyFormulas: [
          {
            name: "Criteria totals",
            statement: "A:6 + B:6 + C:6 + D:8 + E:4 = 30 marks",
          },
          {
            name: "Highest-value criterion",
            statement:
              "D (Discussion and evaluation) carries 8 marks — prioritise counterargument and judgement",
          },
          {
            name: "Strategy",
            statement:
              "Strong RQ supports A and B; specific reflection secures E; evaluation secures D",
          },
        ],
        workedExample: {
          problem:
            "An essay is well-researched and clearly written but never discusses opposing viewpoints. Which criterion suffers most?",
          solution:
            "Criterion D — Discussion and evaluation (8 marks) would score low, costing more marks than any other single criterion. Adding a paragraph engaging counterarguments and weighing evidence would recover significant marks.",
        },
      },
      questions: [
        {
          id: "ee-u3-l34c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many marks is the Extended Essay assessed out of under criteria A-E?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "24" },
              { id: "c", text: "30" },
              { id: "d", text: "36" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "EE mark total",
                statement: "Criteria A-E total 30 marks: 6+6+6+8+4.",
              },
            ],
            steps: [
              { reasoning: "6+6+6+8+4 = 30 marks.", marks: 1, markCode: "M" },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 30",
            commonErrors: [
              "Using outdated criteria totals from the pre-2027 guide.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the five EE assessment criteria A-E.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criteria A-E",
                statement:
                  "A Framework 6, B Knowledge 6, C Analysis 6, D Discussion 8, E Reflection 4.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A (Framework, 6): research question, introduction and conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "B (Knowledge, 6) and C (Analysis, 6): depth of research and rigour of argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "D (Discussion, 8) and E (Reflection, 4): evaluation of perspectives and quality of reflection in the RPF.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A Framework, B Knowledge, C Analysis, D Discussion & evaluation, E Reflection — 30 marks total.",
            commonErrors: [
              "Omitting criterion E or misremembering mark totals.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that Criterion D matters more than the others because it carries the most marks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion weighting",
                statement:
                  "D carries 8 of 30 marks but all criteria are marked and contribute independently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: D offers the most marks and is often the weakest area in student essays — high return on effort.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For: neglecting D caps the total even if other criteria score well.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: criteria are interdependent — a weak framework (A) or shallow knowledge (B) undermines D's evaluation too.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: D deserves priority in planning but cannot compensate for weakness elsewhere — balance all five.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "D is the biggest single opportunity but not a substitute for strength across all criteria.",
            commonErrors: [
              "Chasing criterion D while neglecting the foundational A and B.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine strategies for maximising marks across criteria A-E.",
          parts: [
            {
              label: "a",
              prompt: "Name the five criteria with their mark allocations.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain one strategy for excelling under each of criteria A, C and E.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether marks should be 'hunted' criterion by criterion or achieved through a coherent essay.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EE strategy",
                statement:
                  "A coherent essay that genuinely analyses, discusses and evaluates earns marks across criteria simultaneously.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A Framework 6, B Knowledge 6, C Analysis 6, D Discussion 8, E Reflection 4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All five correctly named with allocations.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A: formulate a precise, arguable research question before writing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "C: analyse rather than describe — explain mechanisms and justify claims.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "E: keep process notes during research to write a specific, honest 500-word statement.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Criteria can be addressed deliberately — e.g. adding counterarguments targets D.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But marks emerge from genuine quality: padding or mechanical criterion-hunting reads poorly and scores worse.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: know the criteria to ensure coverage, but let one coherent essay earn marks naturally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) A6 B6 C6 D8 E4. (b) Precise RQ, analysis over description, process notes for E. (c) Use criteria as a checklist, not a formula.",
            commonErrors: [
              "Writing to 'tick boxes' for each criterion rather than producing a coherent essay.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Extended Essay is assessed out of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 marks" },
              { id: "b", text: "30 marks" },
              { id: "c", text: "36 marks" },
              { id: "d", text: "40 marks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "EE mark total",
                statement: "Criteria A-E total 30 marks: 6+6+6+8+4.",
              },
            ],
            steps: [
              { reasoning: "6+6+6+8+4 = 30 marks.", marks: 1, markCode: "M" },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 30 marks",
            commonErrors: [
              "Using outdated criteria totals from earlier guides.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Criterion A — A framework for the essay covers:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only citation accuracy" },
              {
                id: "b",
                text: "The research question, introduction and conclusion",
              },
              { id: "c", text: "Only the viva voce" },
              { id: "d", text: "Word count compliance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criterion A — Framework",
                statement:
                  "Criterion A assesses the research question, introduction and conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion A is the framework criterion covering framing elements.",
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
              "**(b)** The research question, introduction and conclusion",
            commonErrors: ["Confusing Criterion A with content criteria B-D."],
          },
        },
        {
          id: "ee-u3-l34c2q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Name the five criteria with their mark allocations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criteria A-E",
                statement: "A6 + B6 + C6 + D8 + E4 = 30.",
              },
            ],
            steps: [
              {
                reasoning: "A Framework 6, B Knowledge and understanding 6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "C Analysis and line of argument 6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "D Discussion and evaluation 8 — the largest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E Reflection 4 — total 30 marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A Framework 6, B Knowledge 6, C Analysis 6, D Discussion 8, E Reflection 4 = 30.",
            commonErrors: ["Misallocating marks between criteria."],
          },
        },
        {
          id: "ee-u3-l34c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Criterion D assesses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The quality of the research question" },
              { id: "b", text: "Depth of knowledge and sources" },
              { id: "c", text: "Discussion and evaluation of perspectives" },
              { id: "d", text: "Quality of reflection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criterion D — Discussion",
                statement:
                  "D assesses balance, counterarguments and critical evaluation (8 marks).",
              },
            ],
            steps: [
              {
                reasoning: "Criterion D is Discussion and evaluation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Discussion and evaluation of perspectives",
            commonErrors: ["Confusing D with the reflection criterion E."],
          },
        },
        {
          id: "ee-u3-l34c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Criterion E marks are evidenced through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The essay's citations" },
              { id: "b", text: "The RPF reflective statement and viva voce" },
              { id: "c", text: "The essay's abstract" },
              { id: "d", text: "The word count" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Criterion E — Reflection",
                statement:
                  "Criterion E is marked on the RPF statement and viva.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion E assesses reflection, shown in the RPF and viva.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The RPF reflective statement and viva voce",
            commonErrors: [
              "Thinking Criterion E is assessed from the essay text.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Criterion B — Knowledge and understanding rewards:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elegant prose alone" },
              {
                id: "b",
                text: "Command of relevant research, sources and argument",
              },
              { id: "c", text: "Speed of writing" },
              { id: "d", text: "Essay length" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion B — Knowledge",
                statement:
                  "B rewards depth and quality of research and understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "B assesses command of the relevant literature and sources.",
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
              "**(b)** Command of relevant research, sources and argument",
            commonErrors: ["Confusing Criterion B with writing style."],
          },
        },
        {
          id: "ee-u3-l34c2q11",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain what Criterion C — Analysis and line of argument rewards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion C — Analysis",
                statement:
                  "C rewards analytical depth and a coherent, sustained argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Going beyond description to explain mechanisms and significance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A coherent line of argument sustained across the essay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Claims that are justified with evidence and reasoning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analytical rigour rather than assertion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: C rewards the quality of reasoning itself.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Criterion C rewards analytical depth, justified claims and a coherent sustained argument.",
            commonErrors: ["Describing evidence without analysing it."],
          },
        },
        {
          id: "ee-u3-l34c2q12",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the weighting of the five EE criteria.",
          parts: [
            {
              label: "a",
              prompt:
                "Evaluate whether Criterion D's 8 marks justify special planning attention.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how a strong research question supports criteria A and B.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Judge whether marks should be chased criterion-by-criterion.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion weighting",
                statement:
                  "D carries 8 of 30 marks but all criteria contribute independently.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "D offers the largest single mark allocation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It is often the weakest area, so planning counterarguments pays off.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Judgement: priority is justified, but not at the expense of foundations.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A clear, arguable question is what Criterion A assesses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "B's research depth depends on what the question makes researchable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "A weak question undermines both simultaneously.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Criteria can be used as a coverage checklist.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: one coherent essay earns marks better than mechanical targeting.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) D deserves priority as largest criterion. (b) Strong RQ underpins A and B. (c) Checklist yes, formula no.",
            commonErrors: [
              "Chasing D while neglecting the foundational criteria.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that polishing prose is the best strategy for maximising marks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EE assessment",
                statement:
                  "Criteria reward substance — analysis, evaluation and reflection — over surface polish.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: clear presentation supports readability within criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: criteria A-E assess substance, not style alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Elegant prose cannot compensate for shallow analysis or absent evaluation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Marks come from research depth, argument rigour and critical judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: content first, polish second.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Polished prose helps presentation but cannot substitute for analytical depth and evaluative substance.",
            commonErrors: [
              "Prioritising style over the substance criteria reward.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two examples of evidence that would strengthen Criterion B — Knowledge and understanding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion B — Knowledge",
                statement:
                  "B rewards command of relevant literature and sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Engagement with key scholars and debates in the field.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use of appropriate primary and secondary sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Accurate command of the field's terminology and context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: breadth plus depth of knowledge distinguishes high achievement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Engagement with relevant scholarship and accurate use of appropriate sources strengthens Criterion B.",
            commonErrors: ["Relying on a narrow or outdated source base."],
          },
        },
        {
          id: "ee-u3-l34c2q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Examine strategic planning for criteria A-E.",
          parts: [
            {
              label: "a",
              prompt:
                "Map each criterion to the part of the EE process that earns it.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Explain why Criterion D deserves deliberate planning priority.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the coherent-essay versus checklist approaches.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EE strategy",
                statement:
                  "Criteria map onto research, writing and reflection stages of the process.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A is earned at the framing stage: RQ, intro, conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "B is earned during research: depth of sources and understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "C and D are earned in writing: analysis and evaluation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "E is earned through the RPF statement and viva.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "D carries the most marks at 8 of 30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Counterarguments and evaluation must be built into the plan, not bolted on.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: planning for D early yields the biggest return.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "A checklist ensures every criterion is addressed.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But mechanical coverage produces a disjointed essay.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: plan with the criteria, write as one coherent essay.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) A=framing, B=research, C/D=writing, E=RPF/viva. (b) D's weight and need for planning justify priority. (c) Use criteria as map, essay as coherent whole.",
            commonErrors: [
              "Planning criterion-by-criterion instead of holistically.",
            ],
          },
        },
        {
          id: "ee-u3-l34c2q16",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain why students should check every criterion explicitly before submission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EE assessment",
                statement:
                  "Each criterion is marked independently, so gaps in any one cost marks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criteria are assessed separately, so neglecting one loses its marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Easy-to-neglect areas like D and E often carry the most risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A checklist reveals gaps before submission.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: explicit checking is final quality control on 30 marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Checking each criterion ensures no mark-bearing area is neglected before submission.",
            commonErrors: [
              "Assuming a strong essay automatically covers all criteria.",
            ],
          },
        },
      ],
    },
  ],
};
