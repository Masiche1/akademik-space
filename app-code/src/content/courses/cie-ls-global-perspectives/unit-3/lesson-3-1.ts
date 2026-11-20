import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cilgp-u3-lesson-3-1",
  code: "3-1",
  title: "Stage 7 Checkpoint — Research and Analysis",
  goal: "I CAN research a global issue and analyse evidence at Stage 7 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 Checkpoint Stage 7: research, analysis",
  ],
  stage: 7,
  vocabulary: [
    {
      term: "Research question",
      definition: "A focused, arguable question guiding investigation.",
    },
    {
      term: "Corroboration",
      definition: "Checking claims against multiple sources.",
    },
    {
      term: "Perspective",
      definition: "A particular viewpoint shaped by experience or culture.",
    },
    { term: "Evidence", definition: "Information supporting a claim." },
    { term: "Bias", definition: "Slanted presentation favouring one view." },
  ],
  concepts: [
    {
      id: "cilgp-u3-s7-research",
      title: "Stage 7 research checkpoint",
      skill: "Formulate questions and gather reliable evidence.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint approach",
            body: "Stage 7 checkpoints test whether you can turn a broad topic into a research question, choose reliable sources and spot bias. Answers should name the skill and give an example.",
          },
        ],
        keyFormulas: [
          {
            name: "Good question",
            statement: "specific + arguable + investigable",
          },
          {
            name: "Reliable source",
            statement: "reputable + recent + corroborated",
          },
        ],
        workedExample: {
          problem: "Improve the question 'Is plastic bad?'",
          solution:
            "'What are the main environmental impacts of single-use plastics, and which alternatives show evidence of lower impact?'",
        },
      },
      questions: [
        {
          id: "cilgp-u3-s7-r-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the strongest research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is climate change real?" },
              {
                id: "b",
                text: "How does climate change affect food production in South Asia?",
              },
              { id: "c", text: "Tell me about climate change." },
              { id: "d", text: "Why is climate change interesting?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research question",
                statement: "Specific, arguable and investigable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option B is focused, arguable and can be investigated with evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "How does climate change affect food production in South Asia?",
          },
        },
        {
          id: "cilgp-u3-s7-r-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what corroboration means and why it matters when researching a global issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Corroboration",
                statement: "Verifying claims across multiple sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Corroboration means checking a claim against two or more independent sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It reduces the risk of relying on biased or incorrect information.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Checking claims across sources; protects against bias and error",
          },
        },
        {
          id: "cilgp-u3-s7-r-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student finds a social media post claiming '90% of ocean plastic comes from just 10 rivers'. How should they treat this claim during research? Give three steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Source evaluation",
                statement: "Social media is a lead, not evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Treat it as an unverified lead, not evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trace the claim to its original source (the study behind it).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Corroborate with reputable sources such as UN or peer-reviewed studies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Treat as unverified lead; trace to original study; corroborate with reputable sources",
          },
        },
        {
          id: "cilgp-u3-s7-r-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare two sources on the same global issue: an NGO campaign report and a government statistics publication. State one strength and one weakness of each for your research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Source evaluation",
                statement: "Every source has perspective and purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NGO report: strength — detailed case evidence and on-the-ground insight; weakness — may have an advocacy agenda.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Government publication: strength — official statistics and wide coverage; weakness — may omit politically sensitive findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both need corroboration against neutral sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Balanced evaluation naming strengths and weaknesses for each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "NGO: rich cases but advocacy bias; government: official data but possible political framing — corroborate both",
          },
        },
      ],
    },
    {
      id: "cilgp-u3-s7-analysis",
      title: "Stage 7 analysis checkpoint",
      skill: "Analyse evidence and recognise different perspectives.",
      lesson: {
        sections: [
          {
            heading: "Analysis",
            body: "Analysis means breaking evidence into parts: what it says, how reliable it is, and what perspective produced it. Stage 7 answers name the evidence, state what it shows and link it to the issue.",
          },
        ],
        keyFormulas: [
          {
            name: "Analysis chain",
            statement: "evidence → what it shows → link to issue",
          },
        ],
        workedExample: {
          problem:
            "Evidence: 'Harvests in the region fell 30% during the drought.' What does it show?",
          solution:
            "Drought reduces agricultural output — links climate stress to food security.",
        },
      },
      questions: [
        {
          id: "cilgp-u3-s7-a-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a perspective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A proven fact" },
              {
                id: "b",
                text: "A particular viewpoint shaped by experience or culture",
              },
              { id: "c", text: "A type of source" },
              { id: "d", text: "A research question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perspective",
                statement: "Viewpoint shaped by background and experience.",
              },
            ],
            steps: [
              {
                reasoning: "Perspectives are viewpoints, not facts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A viewpoint shaped by experience or culture",
          },
        },
        {
          id: "cilgp-u3-s7-a-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A farmer and a city consumer may view water scarcity differently. Explain why, using the idea of perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perspective",
                statement: "Position shapes what matters most.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The farmer depends on water for crops — scarcity threatens livelihood directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The consumer experiences it as higher prices or shortages — same issue, different impact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Different experiences shape different views of the same issue",
          },
        },
        {
          id: "cilgp-u3-s7-a-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evidence: 'Only 12% of e-waste is formally recycled worldwide.' Analyse what this shows about the e-waste issue in three steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis",
                statement: "Evidence → meaning → link.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The statistic shows most e-waste is not formally recycled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This suggests informal disposal or hoarding is common.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Links to environmental harm and the need for better recycling systems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Most e-waste escapes formal recycling — informal disposal is widespread, harming the environment",
          },
        },
        {
          id: "cilgp-u3-s7-a-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two sources disagree on whether a dam project helped a community. Source A is the dam company; Source B is a resettled villager. Analyse how their perspectives might shape their accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perspective analysis",
                statement: "Position and interest shape accounts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Source A profits from the project — likely emphasises benefits and downplays costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Source B lost land/home — likely emphasises displacement and broken promises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both are partial; neither is neutral.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A balanced analysis weighs both perspectives against independent evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Company stresses benefits, villager stresses losses — both partial; weigh against independent evidence",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u3-stage7-research-notes",
      title: "Stage 7 GP checkpoint — revision notes",
      summary:
        "Research questions, source reliability, corroboration, perspective, evidence analysis.",
      sections: [
        {
          heading: "Key skills",
          body: "Frame specific questions; treat social media as leads; corroborate claims; explain how position shapes perspective.",
        },
        {
          heading: "Exam tips",
          body: "Always link evidence to the issue in one sentence; name the source type when evaluating reliability.",
        },
      ],
    },
  ],
};
