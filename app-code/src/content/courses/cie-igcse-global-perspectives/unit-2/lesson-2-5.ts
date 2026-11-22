import type { Lesson } from "../../../types.ts";

export const lesson115: Lesson = {
  id: "ciegp-u2-lesson-2-5",
  code: "2-5",
  title: "Full Research Project Synthesis",
  goal: "I CAN complete a full GP research project integrating all skills.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: full project",
    "0457: synthesis",
  ],

  vocabulary: [
    {
      term: "Research project",
      definition: "Complete investigation of global issue.",
    },
    {
      term: "Synthesis",
      definition: "Combining findings into coherent whole.",
    },
    {
      term: "Recommendation",
      definition: "Suggested action based on findings.",
    },
    { term: "Reflection", definition: "Learning gained from process." },
    { term: "Limitations", definition: "Acknowledged weaknesses in research." },
    { term: "Stakeholder", definition: "Person/group affected by issue." },
  ],
  concepts: [
    {
      id: "ciegp-u2-s5-synth",
      title: "Project synthesis",
      skill: "Integrate all GP skills in a complete project at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "The full cycle",
            body: "Select issue → formulate question → research → analyse evidence/perspectives → evaluate solutions → develop recommendations → reflect → present findings. Each skill builds on others.",
          },
          {
            heading: "Quality markers",
            body: "Strong projects: clear research question, reliable corroborated sources, balanced analysis, evidence-based evaluation, clear recommendations, honest reflection on limitations.",
          },
        ],
        keyFormulas: [
          {
            name: "GP cycle",
            statement:
              "select→research→analyse→evaluate→recommend→reflect→present",
          },
          {
            name: "Quality",
            statement: "clear question + reliable sources + balanced analysis",
          },
        ],
        workedExample: {
          problem:
            "Design a complete GP project on 'Should cities ban cars from centres?'",
          solution:
            "Research: air quality data, traffic studies, resident surveys. Analyse: residents, businesses, commuters perspectives. Evaluate: congestion charges vs bans vs public transport. Recommend: combined approach. Reflect on learning.",
        },
      },
      questions: [
        {
          id: "ciegp-u2-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the main stages of a GP research project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Select→research→analyse→evaluate→recommend→reflect→present",
              },
              {
                id: "b",
                text: "Ask→answer→explain→evaluate",
              },
              {
                id: "c",
                text: "Plan→do→check→act",
              },
              {
                id: "d",
                text: "Read→write→test→submit",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GP project stages",
                statement: "Full research cycle.",
              },
            ],
            steps: [
              {
                reasoning: "The complete GP research process.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Full research cycle",
          },
        },
        {
          id: "ciegp-u2-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does synthesis mean in project work?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combining into whole.",
              },
            ],
            steps: [
              {
                reasoning: "Combining findings into coherent conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More than summarising — integrates insights.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Integrating findings into whole",
          },
        },
        {
          id: "ciegp-u2-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a strong GP project? List three quality markers.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Project quality",
                statement: "Question, sources, balance.",
              },
            ],
            steps: [
              {
                reasoning: "Clear research question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reliable/corroborated sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced analysis + honest reflection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Question + sources + balance",
          },
        },
        {
          id: "ciegp-u2-sy-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Describe the full GP project cycle. (b) What is synthesis vs summary? (c) What are quality markers? (d) Why acknowledge limitations? (e) How do skills integrate? (f) What is a good research question? (g) How do you ensure source reliability? (h) Design a complete project plan for 'Should homework be abolished?'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project synthesis",
                statement: "Full GP integration.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Full cycle described.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Synthesis=integrated vs summary=condensed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Three quality markers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Shows rigour, honesty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Each builds on previous.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Specific, arguable, investigable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Credentials, dates, corroboration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid complete project plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Integrated GP project skills.",
          },
        },
        {
          id: "ciegp-u2-sy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the GP project cycle, what follows evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selecting the issue" },
              { id: "b", text: "Writing the title" },
              { id: "c", text: "Developing recommendations" },
              { id: "d", text: "Conducting interviews" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GP cycle",
                statement: "select→research→analyse→evaluate→recommend→reflect→present",
              },
            ],
            steps: [
              {
                reasoning: "Recommendations follow evaluation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Developing recommendations",
          },
        },
        {
          id: "ciegp-u2-sy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'reflection' mean in a GP project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mirroring data in a table" },
              {
                id: "b",
                text: "Learning gained from the research process",
              },
              { id: "c", text: "Repeating the survey" },
              { id: "d", text: "Reading sources twice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement: "Learning from process.",
              },
            ],
            steps: [
              {
                reasoning: "Reflection = learning about process.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Learning gained from the process",
          },
        },
        {
          id: "ciegp-u2-sy-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a strong project corroborate sources?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source reliability",
                statement: "Multiple sources verify claims.",
              },
            ],
            steps: [
              {
                reasoning: "Single sources may be biased or wrong.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Corroboration increases confidence in findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Verification across sources increases reliability",
          },
        },
        {
          id: "ciegp-u2-sy-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A project has 4 phases, each taking 2 weeks. What is the total duration in weeks?",
          response: {
            type: "numeric",
            parts: [{ label: "Weeks", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Project planning",
                statement: "Phases x duration.",
              },
            ],
            steps: [
              {
                reasoning: "4 x 2 = 8 weeks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8 weeks",
          },
        },
        {
          id: "ciegp-u2-sy-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student collects 20 sources; 12 are peer-reviewed academic papers. What percentage are peer-reviewed?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage (%)", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source mix",
                statement: "Part/whole as percentage.",
              },
            ],
            steps: [
              {
                reasoning: "12/20 x 100 = 60%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "ciegp-u2-sy-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish a recommendation from a conclusion in a GP project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recommendation vs conclusion",
                statement: "What should be done vs what was found.",
              },
            ],
            steps: [
              {
                reasoning: "Conclusion summarises findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recommendation proposes action for stakeholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recommendations must be actionable and evidence-based.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Conclusion = findings; recommendation = proposed action",
          },
        },
        {
          id: "ciegp-u2-sy-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is honest reflection on limitations a quality marker of a strong GP project?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection and rigour",
                statement: "Honesty signals research maturity.",
              },
            ],
            steps: [
              {
                reasoning: "Shows awareness of method weaknesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Demonstrates critical thinking, not perfection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helps readers judge reliability of findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Demonstrates rigour, self-awareness and critical thinking",
          },
        },
        {
          id: "ciegp-u2-sy-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best research question for a GP project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To what extent do school uniforms reduce inequality among students?",
              },
              { id: "b", text: "What is a school uniform?" },
              { id: "c", text: "Are uniforms nice?" },
              { id: "d", text: "How many schools have uniforms?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research question",
                statement: "Specific, arguable, investigable.",
              },
            ],
            steps: [
              {
                reasoning: "Option A is evaluable and arguable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The inequality question",
          },
        },
        {
          id: "ciegp-u2-sy-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A project timeline is: research 3 weeks, analysis 2 weeks, writing 3 weeks. What is the total duration, and what percentage is spent writing?",
          response: {
            type: "numeric",
            parts: [
              { label: "Total weeks", answer: 8 },
              { label: "Writing percentage", answer: 37.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timeline",
                statement: "Phase sums and proportions.",
              },
            ],
            steps: [
              {
                reasoning: "3 + 2 + 3 = 8 weeks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "3/8 x 100 = 37.5% writing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8 weeks; 37.5% writing",
          },
        },
        {
          id: "ciegp-u2-sy-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might well-evidenced recommendations still fail to be adopted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence always fails" },
              { id: "b", text: "Only governments can act" },
              { id: "c", text: "Recommendations are optional" },
              {
                id: "d",
                text: "They may not be actionable, affordable, or have stakeholder buy-in",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Implementation",
                statement: "Feasibility and buy-in matter.",
              },
            ],
            steps: [
              {
                reasoning: "Adoption needs feasibility and support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Feasibility and stakeholder buy-in",
          },
        },
        {
          id: "ciegp-u2-sy-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline a complete project plan for 'Should fast fashion be regulated?' covering every stage of the GP cycle.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project plan",
                statement: "Full cycle coverage.",
              },
            ],
            steps: [
              {
                reasoning: "Frame RQ with stakeholders and tension.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Research plan: surveys, NGO reports, case studies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analysis: environmental vs economic perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluation, recommendations and reflection included.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete cycle: question→research→analysis→evaluation→recommendation→reflection→presentation",
          },
        },
        {
          id: "ciegp-u2-sy-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A stakeholder map lists 30 actors: 18 gain and 12 lose from a policy. What percentage lose?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage losing", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stakeholder mapping",
                statement: "Group share of total.",
              },
            ],
            steps: [
              {
                reasoning: "12/30 x 100 = 40%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40%",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u2-sy-notes",
      title: "Project synthesis — notes",
      summary:
        "Full cycle: select→research→analyse→evaluate→recommend→reflect→present. Quality = clear question + reliable sources + balance.",
      sections: [
        {
          heading: "Key idea",
          body: "GP is about applying skills to real issues, not just learning theory.",
        },
        {
          heading: "Quality",
          body: "Clear question + reliable sources + balanced analysis + honest reflection.",
        },
      ],
    },
  ],
};
