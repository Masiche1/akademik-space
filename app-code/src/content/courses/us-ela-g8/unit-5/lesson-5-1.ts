import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const INFTEXT: TextExtract = {
  title: "The Benefits of Urban Green Spaces",
  author: "Written for Akademik Space",
  text: "Urban green spaces — parks, community gardens, tree-lined streets — provide measurable benefits to city residents. A 2023 study found that neighborhoods with more green space reported 15% lower rates of anxiety and depression. The presence of trees also reduces urban heat island effects, lowering temperatures by up to 5°F in summer months.\n\nBeyond health benefits, green spaces foster community connections. Community gardens in cities like Detroit and Cleveland have transformed vacant lots into gathering places where residents grow food and build relationships. These spaces also provide habitat for urban wildlife, with studies documenting increased bird and insect diversity in greener neighborhoods.\n\nHowever, access to green space is unequal. Lower-income neighborhoods often have fewer parks and trees than wealthier areas, a disparity that researchers link to historical redlining practices. Cities that invest in green infrastructure in underserved areas report improved public health outcomes and increased property values.",
};

export const lesson51: Lesson = {
  id: "ela8-u5-lesson-5-1",
  code: "5-1",
  title: "Citing Evidence in Informational Texts",
  goal: "I CAN cite specific textual evidence to support analysis of informational texts.",
  standards: ["RI.8.1", "RI.8.2"],
  vocabulary: [
    {
      term: "Central idea",
      definition: "Main point or message of an informational text.",
    },
    {
      term: "Evidence",
      definition: "Specific details from the text that support claims.",
    },
    {
      term: "Citation",
      definition: "Reference to specific text that proves a point.",
    },
    {
      term: "Inference",
      definition: "Conclusion drawn from evidence not explicitly stated.",
    },
    {
      term: "Objective summary",
      definition: "Neutral recounting of main points without opinion.",
    },
    {
      term: "Detail",
      definition:
        "Specific fact, example, or statistic supporting the central idea.",
    },
  ],
  concepts: [
    {
      id: "ela8-u5-evidence",
      title: "Identifying and citing evidence",
      skill:
        "Locate relevant evidence and cite it accurately to support analysis.",
      lesson: {
        sections: [
          {
            heading: "What counts as evidence",
            body: "Evidence in informational texts includes: **statistics** ('15% lower rates of anxiety'), **examples** ('Detroit and Cleveland gardens'), **expert findings** ('researchers link to redlining'), **comparisons** ('wealthier areas have more trees'). Evidence must be **relevant** — it must actually support the claim you're making, not just be from the same text.",
          },
          {
            heading: "Citing accurately",
            body: "When citing evidence, be **specific**: 'A 2023 study found that neighborhoods with more green space reported 15% lower rates of anxiety' is stronger than 'studies show green space helps.' Quote or paraphrase accurately — don't change meaning. Connect evidence to your analysis: 'This statistic supports the claim that green space improves mental health.'",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence types",
            statement: "Statistics, examples, expert findings, comparisons.",
          },
          {
            name: "Relevance",
            statement: "Evidence must support the specific claim.",
          },
          {
            name: "Specific citation",
            statement: "Quote/paraphrase accurately + connect to analysis.",
          },
        ],
        workedExample: {
          problem:
            "Which evidence best supports 'green spaces improve mental health'?",
          solution:
            "'A 2023 study found that neighborhoods with more green space reported 15% lower rates of anxiety and depression' — specific statistic directly linking green space to mental health outcomes.",
        },
      },
      questions: [
        {
          id: "ela8-u5-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFTEXT,
          stem: "What is the central idea of the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cities should ban development" },
              { id: "b", text: "Parks are expensive" },
              {
                id: "c",
                text: "Urban green spaces provide health, community, and environmental benefits",
              },
              { id: "d", text: "Trees are pretty" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Central idea",
                statement: "Main point of text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The passage covers health benefits, community connections, environmental effects, and access disparities — central idea is green spaces' multiple benefits.",
                evidence: "Urban green spaces provide measurable benefits",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Green spaces provide health, community, and environmental benefits.",
            commonErrors: [
              "Choosing (a) — too superficial; misses the benefits argument.",
            ],
          },
        },
        {
          id: "ela8-u5-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFTEXT,
          stem: "Identify two pieces of evidence supporting the claim that green spaces improve mental health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence identification",
                statement: "Find relevant supporting details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence 1: '15% lower rates of anxiety and depression' — direct statistic.",
                evidence: "15% lower rates of anxiety and depression",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 2: 'neighborhoods with more green space reported' — links green space to mental health outcomes.",
                evidence: "A 2023 study found",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both directly support mental health benefits claim.",
                evidence: "measurable benefits to city residents",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evidence: '15% lower rates of anxiety and depression' + 'neighborhoods with more green space' — both directly link green space to mental health.",
            commonErrors: [
              "Choosing evidence about heat reduction — doesn't support mental health claim.",
            ],
          },
        },
        {
          id: "ela8-u5-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFTEXT,
          stem: "Write a paragraph citing evidence to support the claim that green space access is unequal. Include specific textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence-based writing",
                statement: "Support claims with text.",
              },
              {
                kind: "skill",
                name: "Citation accuracy",
                statement: "Quote/paraphrase precisely.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Claim: 'Green space access is unequal across neighborhoods.'",
                evidence: "access to green space is unequal",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'Lower-income neighborhoods often have fewer parks and trees than wealthier areas.'",
                evidence: "fewer parks and trees than wealthier areas",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Additional evidence: 'disparity that researchers link to historical redlining practices.'",
                evidence: "historical redlining practices",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect: 'This evidence shows systematic inequality in green space distribution.'",
                evidence: "improved public health outcomes",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Green space access is unequal across neighborhoods. The text states that lower-income neighborhoods often have fewer parks and trees than wealthier areas, a disparity researchers link to historical redlining practices. This evidence shows systematic inequality in green space distribution.'",
            commonErrors: [
              "Citing evidence that doesn't support the specific claim.",
            ],
          },
        },
        {
          id: "ela8-u5-evidence-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFTEXT,
          parts: [
            {
              label: "a",
              prompt:
                "Quote one statistic from the text about green space benefits.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain what claim this statistic supports.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Citation + connection",
                statement: "Evidence must support claim.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'15% lower rates of anxiety and depression' — specific statistic.",
                evidence: "15% lower rates",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Supports claim that green spaces improve mental health — direct correlation.",
                evidence: "measurable benefits",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) '15% lower rates of anxiety and depression.' (b) Supports claim that green spaces improve mental health.",
            commonErrors: [
              "Quoting without connecting to claim — evidence must support argument.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u5-evidence2",
      title: "Text and media integration",
      skill:
        "Analyze how informational texts integrate multiple media formats and sources.",
      lesson: {
        sections: [
          {
            heading: "Multiple media formats",
            body: "Informational texts often combine: **written text** (main argument), **statistics/data** (charts, graphs), **images** (photos, diagrams), **maps** (geographic data), **videos/audio** (interviews, demonstrations). Each format provides different evidence — a chart shows trends text can't convey; a photo shows what words describe.",
          },
          {
            heading: "Integrating information",
            body: "When text references multiple sources or media, you must **synthesize** — combine information from all formats into coherent understanding. 'The text describes community gardens (text), shows a map of garden locations (map), and cites a study on food security (statistics)' — all three formats contribute to the central idea about green spaces' benefits.",
          },
        ],
        keyFormulas: [
          {
            name: "Media formats",
            statement: "Text, data, images, maps, audio/video.",
          },
          {
            name: "Synthesis",
            statement: "Combine information from all formats.",
          },
          {
            name: "Format functions",
            statement: "Each format provides different evidence types.",
          },
        ],
        workedExample: {
          problem:
            "How do different media formats contribute to understanding green spaces?",
          solution:
            "Text explains benefits and mechanisms; statistics quantify impact ('15% lower anxiety'); images show what gardens look like; maps show distribution patterns. Each format adds different evidence.",
        },
      },
      questions: [
        {
          id: "ela8-u5-evidence2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFTEXT,
          stem: "What is 'synthesis' when reading informational texts?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Combining information from multiple formats/sources",
              },
              { id: "b", text: "Summarizing each source separately" },
              { id: "c", text: "Reading only the text" },
              { id: "d", text: "Skipping images" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combine multiple sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis = integrating information from text, images, data, etc. into unified understanding.",
                evidence: "integrate multiple media formats",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Combining information from multiple formats/sources.",
            commonErrors: ["Choosing (d) — summary isn't synthesis."],
          },
        },
        {
          id: "ela8-u5-evidence2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFTEXT,
          stem: "Name two different types of evidence in the passage and explain what each provides.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence types",
                statement: "Different formats provide different proof.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistics: '15% lower rates of anxiety' — quantifies impact.",
                evidence: "15% lower rates of anxiety and depression",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Examples: 'Detroit and Cleveland gardens' — concrete cases.",
                evidence:
                  "Community gardens in cities like Detroit and Cleveland",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Each provides different evidence — statistics quantify, examples illustrate.",
                evidence: "measurable benefits",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Statistics ('15% lower anxiety') quantify impact; examples ('Detroit/Cleveland gardens') illustrate concrete cases.",
            commonErrors: [
              "Listing types without explaining what each provides.",
            ],
          },
        },
        {
          id: "ela8-u5-evidence2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFTEXT,
          stem: "Explain how the passage integrates text and data to support its argument about green space inequality. Identify specific examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media integration",
                statement: "Multiple formats support argument.",
              },
              {
                kind: "skill",
                name: "Evidence synthesis",
                statement: "Combine text and data.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Text describes inequality: 'Lower-income neighborhoods often have fewer parks and trees.'",
                evidence: "access to green space is unequal",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Data/research links cause: 'researchers link to historical redlining practices.'",
                evidence: "historical redlining practices",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Statistics show impact: '15% lower rates of anxiety' — quantifies benefits of green space.",
                evidence: "15% lower rates",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Integration: text + research + statistics combine to show inequality has real health consequences.",
                evidence: "improved public health outcomes",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The passage integrates text (describing inequality), research findings (redlining link), and statistics (health impacts) to show green space inequality has measurable consequences — multiple formats support the argument.",
            commonErrors: [
              "Analyzing formats separately — must show how they work together.",
            ],
          },
        },
        {
          id: "ela8-u5-evidence2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFTEXT,
          parts: [
            {
              label: "a",
              prompt: "Name two media formats that could enhance this text.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how each would add to understanding.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media enhancement",
                statement: "Choose formats that add value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Map (showing green space distribution) + chart (showing health statistics).",
                evidence: "access to green space is unequal",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Map shows geographic inequality visually; chart quantifies health benefits — both add evidence text alone can't provide.",
                evidence: "fewer parks and trees",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Map and chart. (b) Map shows geographic distribution; chart quantifies statistics — both add visual evidence.",
            commonErrors: [
              "Choosing formats that don't relate — must enhance understanding.",
            ],
          },
        },
      ],
    },
  ],
};
