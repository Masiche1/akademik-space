import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cielsgp-u4-lesson-4-3",
  code: "4-3",
  title: "Global Perspectives Projects: Research to Action",
  goal: "I CAN plan, execute and evaluate a global perspectives project.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129",
    "Unit 4: applied project skills",
  ],
  vocabulary: [
    {
      term: "Research question",
      definition: "Focused question guiding investigation.",
    },
    {
      term: "Primary source",
      definition: "First-hand data collected by researcher.",
    },
    { term: "Secondary source", definition: "Existing published information." },
    { term: "Stakeholder", definition: "Person/group affected by issue." },
    {
      term: "Action project",
      definition: "Project creating real-world change.",
    },
    {
      term: "Evaluation",
      definition: "Assessing success and lessons learned.",
    },
  ],
  concepts: [
    {
      id: "cielsgp-u4l3-c1-research",
      title: "Planning and conducting research",
      skill: "Formulate research questions and gather reliable evidence.",
      lesson: {
        sections: [
          {
            heading: "Research question and planning",
            body: "Good research question: **specific**, **answerable**, **researchable** — e.g. 'How has plastic pollution affected marine life in [region]?' not 'Is pollution bad?' Plan: identify stakeholders, choose methods (surveys, interviews, observation, document analysis), timeline, resources needed.",
          },
          {
            heading: "Gathering evidence",
            body: "**Primary sources**: interviews, surveys, observations — first-hand but time-consuming, potential bias. **Secondary sources**: books, websites, reports — faster but may be outdated/biased. **Reliability**: check source credibility, cross-reference multiple sources, note publication date, consider author bias.",
          },
        ],
        keyFormulas: [
          { name: "Research question", statement: "Specific + answerable" },
          { name: "Primary source", statement: "First-hand data" },
          { name: "Secondary source", statement: "Existing info" },
        ],
        workedExample: {
          problem:
            "Evaluate a website claiming 'vaccines cause autism' as a source for health research.",
          solution:
            "Unreliable — no scientific evidence, biased source, contradicted by peer-reviewed research; check author credentials, publication venue, cross-reference with trusted sources (WHO, medical journals).",
        },
      },
      questions: [
        {
          id: "cielsgp-q-u4l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A good research question should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impossible to research" },
              { id: "b", text: "Opinion only" },
              { id: "c", text: "Very broad" },
              { id: "d", text: "Specific and answerable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "RQ", statement: "Specific." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Specific+answerable",
            commonErrors: ["Broad."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish 'primary' from 'secondary' sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary vs secondary",
                statement: "First-hand vs existing.",
              },
            ],
            steps: [
              { reasoning: "Primary.", marks: 1, markCode: "M" },
              { reasoning: "Secondary.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Primary: first-hand data collected by researcher (surveys, interviews, experiments). Secondary: existing published info (books, reports, websites) — faster but may be outdated.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two methods for gathering primary data in a project.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Primary methods",
                statement: "Collection techniques.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. surveys (questionnaires to many people — efficient but less depth) and interviews (detailed responses — richer but time-consuming, small sample) — also observation, experiments.",
            commonErrors: ["Only books."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to evaluate the reliability of a source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source reliability",
                statement: "Credibility checks.",
              },
            ],
            steps: [
              { reasoning: "Check 1.", marks: 1, markCode: "M" },
              { reasoning: "Check 2.", marks: 1, markCode: "M" },
              { reasoning: "Check 3.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Check author credentials/expertise, publication venue (peer-reviewed vs blog), cross-reference with other sources, consider date (outdated info), identify potential bias — triangulate multiple sources.",
            commonErrors: ["Trust all sources."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the strengths and limitations of using surveys in global perspectives research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Survey eval",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Efficient, large samples, quantifiable data — but limited depth, response bias, poorly worded questions mislead, non-response bias; good for breadth, combine with interviews for depth.",
            commonErrors: ["Perfect method."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'stakeholder' in global issues?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Affected party.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Person or group affected by an issue — e.g. for pollution: residents, businesses, government, environmental groups; understanding stakeholders essential for balanced analysis.",
            commonErrors: ["Only experts."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'research question' should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too broad" },
              { id: "b", text: "Yes/no only" },
              { id: "c", text: "Impossible" },
              { id: "d", text: "Focused and answerable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "RQ", statement: "Focused." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Focused",
            commonErrors: ["Broad."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why cross-referencing sources is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Cross-ref", statement: "Verification." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. verifies accuracy (different sources may report differently) and reveals bias (single source may be partial/biased) — triangulation strengthens findings.",
            commonErrors: ["One source enough."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'interviews' and 'surveys' as research methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Interview vs survey",
                statement: "Depth vs breadth.",
              },
            ],
            steps: [
              { reasoning: "Interview.", marks: 1, markCode: "M" },
              { reasoning: "Survey.", marks: 1, markCode: "M" },
              { reasoning: "When each.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Interviews: detailed, flexible, rich qualitative data — small sample, time-consuming. Surveys: efficient, large sample, quantifiable — but less depth, fixed questions; choose based on research needs.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the ethical considerations when conducting interviews with vulnerable people.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ethics", statement: "Protection." },
            ],
            steps: [
              { reasoning: "Issues.", marks: 1, markCode: "M" },
              { reasoning: "Safeguards.", marks: 1, markCode: "M" },
              { reasoning: "Balance.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Vulnerable participants may be re-traumatised, feel coerced, have power imbalance — need informed consent, right to withdraw, anonymity, trained interviewers, safeguarding; research value must outweigh potential harm.",
            commonErrors: ["No ethics needed."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of a primary source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A published textbook" },
              { id: "b", text: "An interview conducted by the researcher" },
              { id: "c", text: "An encyclopedia entry" },
              { id: "d", text: "A news article" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Primary source", statement: "First-hand." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Interview",
            commonErrors: ["Published work chosen."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature most suggests a source is unreliable for research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recently published" },
              {
                id: "b",
                text: "Anonymous author, no supporting evidence, contradicts established findings",
              },
              { id: "c", text: "Long and detailed" },
              { id: "d", text: "Written by a named expert" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Unreliable source", statement: "Red flags." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** No credentials or evidence",
            commonErrors: ["Length mistaken for quality."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A researcher conducts 12 interviews and surveys 48 people. How many participants are involved in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Total participants",
                statement: "Add all methods.",
              },
            ],
            steps: [
              { reasoning: "12 + 48 = 60 participants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60",
            commonErrors: ["Counting only one method."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A survey achieved responses from 160 people with a 20% non-response rate. How many people were originally contacted?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Non-response",
                statement: "Responses = 80% of contacted.",
              },
            ],
            steps: [
              {
                reasoning: "160 is 80% of contacted; 160 / 0.8 = 200.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "200",
            commonErrors: [
              "Adding 20% of responses instead of dividing by 80%.",
            ],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways a poorly worded research question could be improved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Improving RQ",
                statement: "Specific + answerable.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Is pollution bad?' improved to 'How has plastic pollution affected marine life in [region]?' — narrowed and measurable; 'Why is the economy bad?' improved to 'How has inflation affected household spending in [country] since 2020?' — specific and answerable.",
            commonErrors: ["No improvement given."],
          },
        },
        {
          id: "cielsgp-q-u4l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate using social media as a source for a global perspectives project.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social media", statement: "Pros+cons." },
            ],
            steps: [
              {
                reasoning: "Advantages: current, accessible, diverse voices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Disadvantages: unverified, biased, echo chambers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence/example of misuse or usefulness.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              {
                reasoning: "Defensible conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Useful for gauging public opinion and finding stakeholders — but highly unreliable alone (misinformation, algorithms, bias); acceptable only as a supplementary source cross-checked against credible sources.",
            commonErrors: ["Fully trusted."],
          },
        },
      ],
    },
    {
      id: "cielsgp-u4l3-c2-action",
      title: "Action projects and evaluation",
      skill: "Plan and evaluate real-world action projects.",
      lesson: {
        sections: [
          {
            heading: "Planning action projects",
            body: "Action projects create real change: awareness campaigns, community clean-ups, fundraising, policy advocacy. Plan: **identify problem** → **research solutions** → **set achievable goals** → **assign roles** → **timeline/resources** → **execute** → **evaluate**. Must be feasible, ethical, genuinely helpful — not just activity for its own sake.",
          },
          {
            heading: "Evaluation",
            body: "Assess success: **did it achieve goals?** **Who benefited?** **What worked/didn't?** **Lessons learned?** Use evidence — feedback forms, before/after data, stakeholder responses. Honest evaluation includes failures and limitations — 'what would we do differently?' Reflection deepens learning.",
          },
        ],
        keyFormulas: [
          { name: "Action project", statement: "Real-world change" },
          { name: "Evaluation", statement: "Success + lessons" },
          { name: "SMART goals", statement: "Specific, measurable" },
        ],
        workedExample: {
          problem: "How would you evaluate a school recycling campaign?",
          solution:
            "Measure recycling rates before/after, count participation, collect feedback from students/staff, assess awareness change via survey — compare results to goals, identify what worked.",
        },
      },
      questions: [
        {
          id: "cielsgp-q-u4l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'action project' aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Take tests" },
              { id: "b", text: "Create real-world change" },
              { id: "c", text: "Only write reports" },
              { id: "d", text: "Make presentations only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Action project",
                statement: "Real change.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Real change",
            commonErrors: ["Just research."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should a good project evaluation include?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Evaluation",
                statement: "Success + lessons.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Components.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Did it achieve goals, who benefited, what worked/didn't, lessons learned — honest assessment including failures; evidence-based using data/feedback.",
            commonErrors: ["Only positives."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of action projects for a global issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Action examples",
                statement: "Real change.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. school recycling programme (reduce waste) and awareness campaign about plastic pollution (education) — also fundraising for charity, community clean-up, petition for policy change.",
            commonErrors: ["Just research."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'SMART goals' are important in project planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SMART", statement: "Goal setting." },
            ],
            steps: [
              { reasoning: "S-M-A-R-T.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Specific, Measurable, Achievable, Relevant, Time-bound — e.g. 'collect 50kg recycling in 2 weeks' vs vague 'help environment'; enables clear planning, progress tracking, evaluation.",
            commonErrors: ["Vague goals."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of fundraising as an action project for global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fundraising eval",
                statement: "Benefits + limits.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Raises money for charities addressing issues — but small scale, one-off, doesn't address root causes; better combined with awareness, advocacy, sustainable solutions; effectiveness depends on transparency and genuine need.",
            commonErrors: ["Perfect solution."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'reflection' in project evaluation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement: "Learning.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Thinking critically about what happened, why, what was learned — honest self-assessment of successes/failures; deepens learning, improves future projects.",
            commonErrors: ["Just description."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A successful action project should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only for marks" },
              { id: "b", text: "Feasible, ethical and genuinely helpful" },
              { id: "c", text: "Impossible" },
              { id: "d", text: "As large as possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Good project",
                statement: "Feasible+ethical.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Feasible+ethical",
            commonErrors: ["Just activity."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why honest evaluation matters in projects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Honest eval", statement: "Learning." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. identifies what worked/failed for future improvement (learning), and builds credibility/trust (honesty valued over pretending success) — honest reflection deepens understanding.",
            commonErrors: ["Only praise."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to measure the success of a community clean-up project.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Measuring success",
                statement: "Data.",
              },
            ],
            steps: [
              { reasoning: "Method 1.", marks: 1, markCode: "M" },
              { reasoning: "Method 2.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Count rubbish bags collected, measure area cleaned, count participants, collect feedback — compare to goals set; assess community response and long-term impact (reduced litter).",
            commonErrors: ["Just feel good."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether school-based action projects can create lasting global change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Project impact",
                statement: "Scale vs influence.",
              },
            ],
            steps: [
              { reasoning: "Direct impact.", marks: 1, markCode: "M" },
              { reasoning: "Indirect influence.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Limited direct impact (small scale) but significant influence — builds awareness, skills, networks, may inspire wider action; 'ripples' effect: participants carry learning into future; best as part of broader movement.",
            commonErrors: ["Too small to matter."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first stage of planning an action project is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assign team roles" },
              { id: "b", text: "Set a timeline" },
              { id: "c", text: "Identify the problem" },
              { id: "d", text: "Evaluate results" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Project stages", statement: "Problem first." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Identify the problem",
            commonErrors: ["Evaluation first."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "'SMART' goals are important in project planning because they are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impossible to achieve" },
              {
                id: "b",
                text: "Specific, Measurable, Achievable, Relevant and Time-bound",
              },
              { id: "c", text: "Only needed for teachers" },
              { id: "d", text: "Simple and quick to write" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "SMART", statement: "Goal quality." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Specific, measurable, achievable, relevant, time-bound",
            commonErrors: ["Vague goals."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A clean-up project aimed to collect 40 bags of rubbish but collected 50. By what percentage did it exceed its target?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage exceeded",
                statement: "Excess over target.",
              },
            ],
            steps: [
              {
                reasoning: "Exceeded by 10 bags; 10/40 x 100 = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Using 50 as denominator gives 20%."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fundraising event aimed to raise $1,200 but raised $900. What percentage of its target did it achieve?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Target achieved",
                statement: "Raised over target.",
              },
            ],
            steps: [
              {
                reasoning: "900/1200 x 100 = 75%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75%",
            commonErrors: ["Reporting the $300 shortfall as the answer."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of evidence that could be used to evaluate an awareness campaign.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Campaign evidence",
                statement: "Measurable data.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. before-and-after surveys measuring knowledge or attitude change, and participation counts (event attendance, petition signatures) — also social media reach and feedback forms.",
            commonErrors: ["No measurable evidence."],
          },
        },
        {
          id: "cielsgp-q-u4l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether student action projects should focus on local or global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Local vs global",
                statement: "Feasibility vs scale.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Local: feasible, visible impact, direct community benefit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Global: awareness and connection to worldwide issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence/examples of each approach.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              {
                reasoning: "Defensible conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Local projects are more feasible with visible short-term impact; global issues raise awareness but are harder to act on directly; the strongest projects link local action to global understanding — local action, global perspective.",
            commonErrors: ["One always better."],
          },
        },
      ],
    },
  ],
};
