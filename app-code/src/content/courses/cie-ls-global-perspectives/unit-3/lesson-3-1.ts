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
              { id: "a", text: "Why is climate change interesting?" },
              { id: "b", text: "Is climate change real?" },
              { id: "c", text: "Tell me about climate change." },
              {
                id: "d",
                text: "How does climate change affect food production in South Asia?",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "cilgp-u3-s7-r-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the strongest research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is plastic bad?" },
              {
                id: "b",
                text: "How do microplastics enter the food chain in one coastal region?",
              },
              { id: "c", text: "Why is plastic interesting?" },
              { id: "d", text: "Tell me about oceans." },
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
              "How do microplastics enter the food chain in one coastal region?",
          },
        },
        {
          id: "cilgp-u3-s7-r-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A class survey collects 120 responses. If 60% of students support a new recycling scheme, how many students support it?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 72, unit: "students" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage of total",
                statement: "Part = percentage x whole.",
              },
            ],
            steps: [
              {
                reasoning: "60% of 120 = 0.6 x 120.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.6 x 120 = 72 students.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72 students",
          },
        },
        {
          id: "cilgp-u3-s7-r-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain why 'Is homework good?' is a weak research question and how to improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question framing",
                statement: "Specific + arguable + investigable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It is vague and yes/no — 'good' is undefined and cannot be measured directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improved example: 'How does homework frequency affect student wellbeing and attainment?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vague yes/no; improve to a specific, arguable question",
          },
        },
        {
          id: "cilgp-u3-s7-r-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is bias in a source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Slanted presentation favouring one view",
              },
              { id: "b", text: "A type of primary source" },
              { id: "c", text: "A research question" },
              { id: "d", text: "A neutral summary of facts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Slanted presentation favouring one view.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bias favours one viewpoint, often hiding alternatives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Slanted presentation favouring one view",
          },
        },
        {
          id: "cilgp-u3-s7-r-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A researcher gathers 6 websites and 4 journal articles as sources. How many sources are gathered in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Total sources",
                statement: "Add all source types.",
              },
            ],
            steps: [
              {
                reasoning: "6 + 4 = 10 sources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cilgp-u3-s7-r-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A blog post makes a strong claim about a health issue but names no author, gives no sources and has many adverts. How should a researcher treat it? Give three points.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Source evaluation",
                statement: "Anonymous, unsourced claims are unreliable.",
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
                  "Note red flags: no author, no sources, possible commercial motive (adverts).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Find the original study or reputable source behind the claim and corroborate it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unverified lead; check red flags; trace and corroborate the claim",
          },
        },
        {
          id: "cilgp-u3-s7-r-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does a source's publication date matter when researching a fast-changing issue like social media use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is required by law" },
              { id: "b", text: "Older sources are always more trustworthy" },
              { id: "c", text: "Dates prove the author is an expert" },
              {
                id: "d",
                text: "Old data may no longer reflect current reality",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source currency",
                statement: "Fast-changing issues need recent data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Technology and behaviour change quickly; old statistics may be outdated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Old data may be outdated",
          },
        },
        {
          id: "cilgp-u3-s7-r-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A claim is checked against 5 sources. 2 sources contradict it and 3 support it. How many sources do NOT support the claim?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Non-supporting sources",
                statement: "Total minus supporters.",
              },
            ],
            steps: [
              {
                reasoning: "5 - 3 = 2 sources do not support it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilgp-u3-s7-r-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare a university research study and a news report as sources for 'effects of social media on teenagers'. State one strength of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Source comparison",
                statement: "Academic rigour vs accessibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "University study: peer-reviewed methods, data and replicable findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "News report: accessible summary, recent examples, wider context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Best practice: use the study for evidence, the report for context — corroborate both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Study = rigour; report = accessibility — corroborate both",
          },
        },
        {
          id: "cilgp-u3-s7-r-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does corroboration mean in research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing a long report" },
              { id: "b", text: "Using only the first source found" },
              {
                id: "c",
                text: "Checking a claim against multiple independent sources",
              },
              { id: "d", text: "Guessing the answer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Multi-source verification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Corroboration verifies claims across independent sources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Checking claims across multiple sources",
          },
        },
        {
          id: "cilgp-u3-s7-r-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 8 key claims in a report, 4 have been corroborated by a second source. What percentage of claims are corroborated?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "Corroborated / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "4 / 8 = 0.5 = 50%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 50%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "50%",
          },
        },
        {
          id: "cilgp-u3-s7-r-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan research on 'should schools ban single-use plastics?': (a) improve the vague question 'Is plastic bad?', (b) name two reliable source types, (c) describe one bias check, (d) describe one corroboration step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research planning",
                statement: "Question, sources, bias, corroboration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Specific arguable question, e.g. 'How effective are school plastic bans at reducing waste?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Two reputable sources, e.g. environmental studies, school policy documents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid bias check, e.g. compare industry-funded vs independent studies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid corroboration, e.g. verify each key claim in two independent sources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Improved question, sources, bias check and corroboration plan",
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
              {
                id: "a",
                text: "A particular viewpoint shaped by experience or culture",
              },
              { id: "b", text: "A type of source" },
              { id: "c", text: "A research question" },
              { id: "d", text: "A proven fact" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cilgp-u3-s7-a-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evidence in analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A research question" },
              { id: "b", text: "A conclusion you personally prefer" },
              { id: "c", text: "Information that supports a claim" },
              { id: "d", text: "A personal opinion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence",
                statement: "Information supporting a claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence is factual information used to support claims.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Information that supports a claim",
          },
        },
        {
          id: "cilgp-u3-s7-a-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Source A contains 3 facts and Source B contains 2 facts. How many facts do the two sources contain in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Total count",
                statement: "Add counts from both sources.",
              },
            ],
            steps: [
              {
                reasoning: "3 + 2 = 5 facts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cilgp-u3-s7-a-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what 'link to issue' means in the analysis chain evidence -> what it shows -> link to issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis chain",
                statement: "Evidence must connect to the research question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It means explaining how the evidence relates to the specific issue being studied.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without the link, facts are just facts — they do not answer the research question.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Connecting what evidence shows back to the research question",
          },
        },
        {
          id: "cilgp-u3-s7-a-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement is an inference rather than evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The survey had 60 responses.'" },
              { id: "b", text: "'The survey was conducted in May.'" },
              {
                id: "c",
                text: "'The high response rate suggests strong community interest.'",
              },
              { id: "d", text: "'Responses were anonymous.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inference",
                statement: "Conclusion drawn from evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Suggests strong interest' is a conclusion drawn from the data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "'The high response rate suggests strong community interest.'",
          },
        },
        {
          id: "cilgp-u3-s7-a-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An analysis covers 3 stakeholder groups, and each stakeholder has 2 distinct perspectives examined. How many perspective points are analysed in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Combinations",
                statement: "Stakeholders x perspectives each.",
              },
            ],
            steps: [
              {
                reasoning: "3 x 2 = 6 perspective points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 6.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cilgp-u3-s7-a-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evidence: '80% of city bus users are students.' Analyse what this shows using the chain: what it says -> what it shows -> link to the issue of public transport.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis",
                statement: "Evidence -> meaning -> link.",
              },
            ],
            steps: [
              {
                reasoning: "What it says: most bus users are students.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "What it shows: public transport is heavily relied on by young people, likely because they cannot drive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Link: transport policy affects students' access to education and opportunities — equity matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Buses serve students — transport policy has equity implications",
          },
        },
        {
          id: "cilgp-u3-s7-a-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an assumption in an argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of evidence" },
              { id: "b", text: "A voting method" },
              {
                id: "c",
                text: "An unstated belief underlying the argument",
              },
              { id: "d", text: "A proven fact" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Assumption",
                statement: "Unstated belief underlying an argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assumptions are taken for granted, not stated or proven.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "An unstated belief underlying the argument",
          },
        },
        {
          id: "cilgp-u3-s7-a-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A report contains 10 data points. An analyst examines 4 of them in detail. How many data points remain unexamined?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "data points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Remaining items",
                statement: "Total minus examined.",
              },
            ],
            steps: [
              {
                reasoning: "10 - 4 = 6 data points remain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 6.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cilgp-u3-s7-a-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Analyse two perspectives on 'should zoos exist?': give one argument from an animal-welfare perspective and one from a conservation perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective analysis",
                statement: "Different values, different views.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Animal welfare: captivity restricts natural behaviour and causes suffering.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conservation: zoos protect endangered species and fund breeding programmes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both are partial — a balanced analysis weighs welfare against conservation benefit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Welfare argues captivity harms; conservation argues protection — weigh both",
          },
        },
        {
          id: "cilgp-u3-s7-a-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What makes an analysis 'balanced'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It agrees with the first source" },
              {
                id: "b",
                text: "It fairly considers multiple perspectives and acknowledges uncertainty",
              },
              { id: "c", text: "It only uses strong evidence" },
              { id: "d", text: "It is very long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced analysis",
                statement: "Fairness and uncertainty.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Balance means weighing all perspectives fairly, not favouring one.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fairly weighs multiple perspectives and acknowledges uncertainty",
          },
        },
        {
          id: "cilgp-u3-s7-a-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A survey of 120 students finds that 60% walk to school. How many students walk to school?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 72, unit: "students" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage of total",
                statement: "Part = percentage x whole.",
              },
            ],
            steps: [
              {
                reasoning: "60% of 120 = 0.6 x 120 = 72.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 72 students.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72 students",
          },
        },
        {
          id: "cilgp-u3-s7-a-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the evidence 'only 12% of e-waste is formally recycled worldwide', complete the analysis chain: (a) state what the evidence says, (b) what it shows, (c) link it to the e-waste issue, (d) name one perspective that might dispute the conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis",
                statement: "Evidence -> meaning -> link -> perspective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) The statistic: only 12% of e-waste enters formal recycling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Shows most e-waste is informally disposed or hoarded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Links to environmental harm and weak recycling infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid disputing perspective, e.g. informal recycling in developing countries recovers value effectively.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evidence -> informal disposal -> environmental harm; disputed by informal-recycling view",
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
