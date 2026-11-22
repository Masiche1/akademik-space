import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "eias-soc-u5-lesson-5-2",
  code: "5-2",
  title: "Qualitative Methods",
  goal: "I CAN describe and evaluate observations, interviews and case studies.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 5 — Research Methods"],
  vocabulary: [
    {
      term: "Participant observation",
      definition: "Researcher joins group being studied.",
    },
    {
      term: "Non-participant observation",
      definition: "Researcher observes without joining.",
    },
    {
      term: "Structured interview",
      definition: "Standardised questions — comparable.",
    },
    {
      term: "Unstructured interview",
      definition: "Flexible questions — rich detail.",
    },
    { term: "Case study", definition: "In-depth study of one case/group." },
    {
      term: "Ethnography",
      definition: "Immersion in culture/group for extended period.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u5-observation",
      title: "Observation and Interviews",
      skill: "Describe and evaluate observational and interview methods.",
      lesson: {
        sections: [
          {
            heading: "Observation methods",
            body: "**Participant observation**: researcher joins group — deep understanding, insider view. Problems: going native, bias, ethics. **Non-participant**: observes without joining — less bias but less insight. **Covert vs overt**: hidden vs known observation — ethics vs natural behaviour.\n\n**Interviews**: structured (standardised — comparable, but rigid), unstructured (flexible — rich, but hard to compare), semi-structured (balance). Problems: interviewer bias, social desirability, interpretation.",
          },
          {
            heading: "Ethnography and case studies",
            body: "**Ethnography**: immersive study — months/years in field, thick description. **Case study**: one group/individual — depth, context — but not generalisable.\n\n**Evaluation**: qualitative methods capture meanings, agency, context — but subjective, hard to generalise, time-consuming.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Researcher lives with gang for 6 months, observes daily life. Method?",
          solution: "Participant observation/ethnography.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-obs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is participant observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watching from outside" },
              { id: "b", text: "Interview" },
              { id: "c", text: "Questionnaire" },
              { id: "d", text: "Researcher joins group being studied" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Participant observation",
                statement: "Join group.",
              },
            ],
            steps: [
              {
                reasoning: "Participant = joins group.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Joins group",
            commonErrors: ["Non-participant confused."],
          },
        },
        {
          id: "eias-soc-u5-obs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of interview.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interview types",
                statement: "Structured + unstructured.",
              },
            ],
            steps: [
              {
                reasoning: "Structured — standardised questions, comparable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unstructured — flexible, rich detail.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Semi-structured — balance of both.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Structured, unstructured, semi-structured.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eias-soc-u5-obs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one advantage and one limitation of participant observation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PO eval",
                statement: "Depth vs bias.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: deep understanding — insider view.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advantage: natural behaviour — not artificial.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limitation: going native — lose objectivity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limitation: ethics — deception, harm.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Depth+natural vs native+ethics.",
            commonErrors: ["Only advantage.", "Only limitation."],
          },
        },
        {
          id: "eias-soc-u5-obs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Researcher wants to study homeless community.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two qualitative methods.",
              marks: 4,
            },
            { label: "b", prompt: "Identify ethical issues.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerable group research",
                statement: "Methods + ethics.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Participant observation — join daily life.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Unstructured interviews — flexible, sensitive.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Vulnerability — homeless may be harmed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Consent — ensure understanding, right to withdraw.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) PO+interviews (b) vulnerability+consent",
            commonErrors: ["Wrong methods.", "No ethics."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u5-secondary",
      title: "Secondary Methods",
      skill: "Evaluate use of existing data and documents.",
      lesson: {
        sections: [
          {
            heading: "Official statistics",
            body: "**Census**: complete population count — comprehensive but infrequent, may be inaccurate. **Government stats**: crime, health, education — large scale, comparable over time. **Problems**: political manipulation, definition changes, underreporting.\n\n**Documents**: historical records, media, personal documents — rich context, meanings. **Problems**: interpretation, authenticity, selection bias.",
          },
          {
            heading: "Existing data",
            body: "**Secondary analysis**: re-use datasets — efficient, large scale. **Problems**: may not fit research question, data quality unknown, ethical issues. **Content analysis**: systematic analysis of media/texts — counts themes, patterns.\n\n**Evaluation**: secondary methods efficient, non-reactive — but researcher didn't collect data, may not fit purpose.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Researcher analyses newspaper articles about crime. Method?",
          solution: "Content analysis.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-sec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is secondary data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Experimental data" },
              { id: "b", text: "Existing data collected by others" },
              { id: "c", text: "New data collected" },
              { id: "d", text: "Primary data" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary data",
                statement: "Existing data.",
              },
            ],
            steps: [
              {
                reasoning: "Secondary = existing data.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Existing data",
            commonErrors: ["Primary confused."],
          },
        },
        {
          id: "eias-soc-u5-sec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of secondary data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary types",
                statement: "Stats + documents.",
              },
            ],
            steps: [
              {
                reasoning: "Official statistics — census, government data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Documents — historical records, media, personal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Existing datasets — re-use of previous research.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Stats, documents, datasets.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eias-soc-u5-sec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one advantage and one limitation of official statistics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stats eval",
                statement: "Large vs biased.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: large scale — comprehensive coverage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advantage: comparable over time — trends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Limitation: political manipulation — targets distort.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limitation: underreporting — dark figure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Large+comparable vs manipulated+underreported.",
            commonErrors: ["Only advantage.", "Only limitation."],
          },
        },
        {
          id: "eias-soc-u5-sec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Researcher uses census data to study inequality.",
          parts: [
            { label: "a", prompt: "Identify advantages.", marks: 4 },
            { label: "b", prompt: "Identify limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Census eval",
                statement: "Coverage vs accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Complete coverage — whole population.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Standardised — comparable over time.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) May be inaccurate — people misreport.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Infrequent — only every 10 years.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) coverage+standardised (b) inaccurate+infrequent",
            commonErrors: ["Perfect data.", "Only advantages."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u5-synthesis",
      title: "Synthesising Research",
      skill: "Combine methods and evaluate overall research quality.",
      lesson: {
        sections: [
          {
            heading: "Mixed methods",
            body: "**Triangulation**: combining methods — quantitative + qualitative. **Benefits**: compensates weaknesses, validates findings, comprehensive. **Problems**: complex, time-consuming, may contradict.\n\n**Sequential**: one method then another — build on findings. **Concurrent**: both simultaneously — compare results.",
          },
          {
            heading: "Research quality",
            body: "**Reliability**: consistent — test-retest, inter-rater. **Validity**: measures what claims — internal + external. **Objectivity**: minimise bias — reflexivity, peer review. **Ethics**: guidelines followed.\n\n**Evaluation**: good research is rigorous, transparent, ethical — but perfect research impossible.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Survey + interviews used together. Approach?",
          solution: "Mixed methods/triangulation.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-synth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is triangulation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quantitative only" },
              { id: "b", text: "Combining methods to validate" },
              { id: "c", text: "One method only" },
              { id: "d", text: "Qualitative only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangulation",
                statement: "Method combination.",
              },
            ],
            steps: [
              {
                reasoning: "Triangulation = combine methods.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Combine methods",
            commonErrors: ["One method confused."],
          },
        },
        {
          id: "eias-soc-u5-synth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of mixed methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed methods",
                statement: "Complement + validate.",
              },
            ],
            steps: [
              {
                reasoning: "Compensates weaknesses — quant + qual balance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Validates findings — cross-check results.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comprehensive — breadth + depth.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Compensate, validate, comprehensive.",
            commonErrors: ["One method.", "Only one benefit."],
          },
        },
        {
          id: "eias-soc-u5-synth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain reflexivity in research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflexivity",
                statement: "Researcher awareness.",
              },
            ],
            steps: [
              {
                reasoning: "Researcher awareness of own influence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Acknowledges bias — how researcher affects study.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Transparent — reports own position, assumptions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Improves validity — honest about limitations.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Awareness of researcher influence.",
            commonErrors: ["No awareness.", "Objective only."],
          },
        },
        {
          id: "eias-soc-u5-synth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate a study using only quantitative methods for complex social phenomenon.",
          parts: [
            { label: "a", prompt: "Identify two limitations.", marks: 4 },
            { label: "b", prompt: "Suggest improvement.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method eval",
                statement: "Limits + improvement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Misses meanings — complex phenomena need depth.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Oversimplifies — reduces to numbers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Add qualitative — interviews for meanings.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Mixed methods — comprehensive understanding.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) shallow+oversimplify (b) add qualitative",
            commonErrors: ["Perfect method.", "No improvement."],
          },
        },
      ],
    },
  ],
};
