import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olep-u5-lesson-5-2",
  code: "5-2",
  title: "Intelligence Theories",
  goal: "I CAN describe theories of intelligence and factors affecting IQ.",
  standards: ["2219: Individual differences"],
  vocabulary: [
    {
      term: "Intelligence",
      definition: "Ability to learn, reason and solve problems.",
    },
    {
      term: "IQ",
      definition: "Intelligence quotient — score from standardised test.",
    },
    {
      term: "General intelligence (g)",
      definition: "Spearman's factor underlying all cognitive abilities.",
    },
    {
      term: "Multiple intelligences",
      definition: "Gardner's theory — 8+ independent intelligences.",
    },
    {
      term: "Emotional intelligence",
      definition: "Ability to perceive/manage emotions.",
    },
    {
      term: "Flynn effect",
      definition: "Rise in average IQ scores over generations.",
    },
  ],
  concepts: [
    {
      id: "olep-u5-intelligence",
      title: "Theories of Intelligence",
      skill:
        "Describe Spearman's g, Gardner's multiple intelligences and Sternberg's triarchic theory.",
      lesson: {
        sections: [
          {
            heading: "Spearman's g",
            body: "Charles Spearman — factor analysis showed all cognitive tests correlate → single general intelligence factor 'g' plus specific abilities ('s'). IQ tests measure g. Binet-Simon first test (1905); Wechsler scales (WAIS/WISC) common today.",
          },
          {
            heading: "Gardner's multiple intelligences",
            body: "Howard Gardner — 8+ independent intelligences: linguistic, logical-mathematical, spatial, musical, bodily-kinaesthetic, interpersonal, intrapersonal, naturalistic. Each person has profile of strengths. Criticised — hard to measure, overlaps with talents.",
          },
          {
            heading: "Sternberg's triarchic theory",
            body: "Robert Sternberg — three aspects: analytical (problem-solving, measured by IQ tests), creative (adaptation to novel situations), practical (street smarts, everyday adaptation). Practical intelligence may predict life success better than analytical.",
          },
        ],
        keyFormulas: [
          {
            name: "Intelligence",
            statement:
              "Spearman g; Gardner 8 MI; Sternberg analytical/creative/practical.",
          },
        ],
        workedExample: {
          problem: "How do Gardner's and Spearman's views differ?",
          solution:
            "Spearman: single general factor 'g' underlies all abilities; Gardner: multiple independent intelligences — person may excel in one, not others.",
        },
      },
      questions: [
        {
          id: "olep-u5-it-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Spearman's 'g' factor?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "General intelligence underlying all abilities",
              },
              { id: "b", text: "Emotional intelligence" },
              { id: "c", text: "A specific skill" },
              { id: "d", text: "Creative ability" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "g factor",
                statement: "General intelligence factor.",
              },
            ],
            steps: [
              { reasoning: "General factor.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "**(a)** General intelligence underlying all abilities",
            commonErrors: ["Confusing with specific abilities."],
          },
        },
        {
          id: "olep-u5-it-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two of Gardner's multiple intelligences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiple intelligences",
                statement: "Linguistic, spatial, musical etc.",
              },
            ],
            steps: [
              {
                reasoning: "Any two intelligences.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Linguistic, logical-mathematical, spatial, musical, bodily-kinaesthetic, interpersonal, intrapersonal, naturalistic.",
            commonErrors: ["Only one named."],
          },
        },
        {
          id: "olep-u5-it-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe Sternberg's triarchic theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Triarchic",
                statement: "Analytical+creative+practical.",
              },
            ],
            steps: [
              { reasoning: "Analytical component.", marks: 1, markCode: "AO1" },
              { reasoning: "Creative component.", marks: 1, markCode: "AO1" },
              { reasoning: "Practical component.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear description.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Intelligence has three aspects: analytical (problem-solving), creative (novel adaptation), practical (everyday adaptation/street smarts).",
            commonErrors: ["Only naming one aspect."],
          },
        },
        {
          id: "olep-u5-it-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Intelligence theories.",
          parts: [
            { label: "a", prompt: "Spearman's g?", marks: 2 },
            { label: "b", prompt: "Gardner's MI?", marks: 3 },
            { label: "c", prompt: "Sternberg's triarchic?", marks: 3 },
            { label: "d", prompt: "Comparison?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intelligence",
                statement: "Spearman+Gardner+Sternberg+comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "General factor g.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Underlying all abilities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Multiple independent types.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Examples given.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Profile of strengths.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Analytical/creative/practical.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Three aspects correct.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Single vs multiple factors.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Spearman (b) Gardner (c) Sternberg (d) comparison",
          },
        },
        {
          id: "olep-u5-it-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Spearman's two-factor theory, 's' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "special educational needs" },
              { id: "b", text: "social intelligence" },
              { id: "c", text: "a single general intelligence factor" },
              { id: "d", text: "specific abilities in particular tasks" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "g and s",
                statement: "g = general factor; s = specific abilities.",
              },
            ],
            steps: [{ reasoning: "s = specific abilities.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** specific abilities in particular tasks",
            commonErrors: ["Confusing s with g."],
          },
        },
        {
          id: "olep-u5-it-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is NOT one of Gardner's multiple intelligences?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Musical" },
              { id: "b", text: "Mechanical" },
              { id: "c", text: "Spatial" },
              { id: "d", text: "Bodily-kinaesthetic" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gardner MI",
                statement: "Linguistic, logical-mathematical, spatial, musical, bodily-kinaesthetic, interpersonal, intrapersonal, naturalistic.",
              },
            ],
            steps: [{ reasoning: "Mechanical is not in Gardner's list.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Mechanical",
            commonErrors: ["Assuming every practical skill is a separate MI."],
          },
        },
        {
          id: "olep-u5-it-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many intelligences does Gardner's theory of multiple intelligences originally propose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiple intelligences",
                statement: "Eight intelligences proposed by Gardner.",
              },
            ],
            steps: [{ reasoning: "Eight MI types.", marks: 1, markCode: "AO1" }],
            finalAnswer: "8",
            commonErrors: ["Saying 'many' instead of the number."],
          },
        },
        {
          id: "olep-u5-it-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the number of intelligences in Gardner's theory and the number of aspects in Sternberg's triarchic theory.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theory sizes",
                statement: "Gardner 8; Sternberg 3.",
              },
            ],
            steps: [
              { reasoning: "Gardner proposes eight.", marks: 1, markCode: "AO1" },
              { reasoning: "Sternberg proposes three aspects.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 8 (b) 3",
            commonErrors: ["Swapping the theories."],
          },
        },
        {
          id: "olep-u5-it-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analytical intelligence, in Sternberg's triarchic theory, is best described as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "everyday street smarts and adaptation" },
              { id: "b", text: "coping with novel creative situations" },
              { id: "c", text: "abstract problem-solving measured by IQ tests" },
              { id: "d", text: "musical and spatial talent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analytical intelligence",
                statement: "Problem-solving component of triarchic theory.",
              },
            ],
            steps: [
              { reasoning: "Analytical = problem-solving.", marks: 1, markCode: "AO1" },
              { reasoning: "Measured by IQ tests.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** abstract problem-solving measured by IQ tests",
            commonErrors: ["Confusing with practical intelligence."],
          },
        },
        {
          id: "olep-u5-it-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the number of aspects in Sternberg's triarchic theory and (b) the number of factors in Spearman's two-factor model.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theory sizes",
                statement: "Sternberg 3; Spearman g + s = 2.",
              },
            ],
            steps: [
              { reasoning: "Analytical, creative, practical.", marks: 1, markCode: "AO1" },
              { reasoning: "g and s factors.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 2",
            commonErrors: ["Counting g alone as one factor only."],
          },
        },
        {
          id: "olep-u5-it-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Practical intelligence refers to the ability to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "memorise vocabulary lists" },
              { id: "b", text: "solve abstract problems in tests" },
              { id: "c", text: "produce creative original ideas" },
              { id: "d", text: "adapt to everyday situations ('street smarts')" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Practical intelligence",
                statement: "Everyday adaptation component.",
              },
            ],
            steps: [
              { reasoning: "Practical = everyday adaptation.", marks: 1, markCode: "AO1" },
              { reasoning: "Distinct from analytical/creative.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** adapt to everyday situations ('street smarts')",
            commonErrors: ["Confusing with analytical intelligence."],
          },
        },
        {
          id: "olep-u5-it-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the number of (a) intelligences in Gardner's theory, (b) aspects in Sternberg's triarchic theory, and (c) factors in Spearman's model.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 3 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theory counts",
                statement: "Gardner 8; Sternberg 3; Spearman 2.",
              },
            ],
            steps: [
              { reasoning: "Eight intelligences.", marks: 1, markCode: "AO1" },
              { reasoning: "Three aspects.", marks: 1, markCode: "AO1" },
              { reasoning: "g and s.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 8 (b) 3 (c) 2",
            commonErrors: ["Mixing the theories up."],
          },
        },
        {
          id: "olep-u5-it-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A common criticism of Gardner's theory of multiple intelligences is that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the intelligences are hard to measure and may overlap with ordinary talents" },
              { id: "b", text: "it is based on clear, objective measurement" },
              { id: "c", text: "it denies that intelligence exists" },
              { id: "d", text: "it only applies to children" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MI criticism",
                statement: "Difficult to measure; overlaps with talent.",
              },
            ],
            steps: [
              { reasoning: "MI lacks clear measurement.", marks: 1, markCode: "AO1" },
              { reasoning: "Concepts may just be talents/skills.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** the intelligences are hard to measure and may overlap with ordinary talents",
            commonErrors: ["Confusing MI with Spearman's g."],
          },
        },
        {
          id: "olep-u5-it-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give (a) the year the first intelligence test (Binet-Simon) was developed, (b) the number of Gardner's intelligences, and (c) the number of Sternberg's aspects.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1905 },
              { label: "b", answer: 8 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Historical/theory facts",
                statement: "Binet-Simon 1905; Gardner 8; Sternberg 3.",
              },
            ],
            steps: [
              { reasoning: "First test 1905.", marks: 1, markCode: "AO1" },
              { reasoning: "Eight intelligences.", marks: 1, markCode: "AO1" },
              { reasoning: "Three aspects.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 1905 (b) 8 (c) 3",
            commonErrors: ["Wrong year for Binet-Simon."],
          },
        },
        {
          id: "olep-u5-it-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sternberg argues practical intelligence may predict life success better than analytical intelligence because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "adapting to everyday situations matters more for real life than abstract test problems" },
              { id: "b", text: "analytical intelligence does not exist" },
              { id: "c", text: "IQ tests already measure practical intelligence perfectly" },
              { id: "d", text: "practical intelligence is inherited" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Practical intelligence",
                statement: "Everyday adaptation predicts life outcomes.",
              },
            ],
            steps: [
              { reasoning: "IQ tests measure analytical ability.", marks: 1, markCode: "AO1" },
              { reasoning: "Real-life success needs practical skills.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** adapting to everyday situations matters more for real life than abstract test problems",
            commonErrors: ["Saying IQ tests measure all intelligence."],
          },
        },
        {
          id: "olep-u5-it-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Gardner's theory of multiple intelligences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MI evaluation",
                statement: "Valuable but hard to measure.",
              },
            ],
            steps: [
              {
                reasoning: "Recognises diverse abilities beyond IQ tests.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Eight intelligences with examples.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Criticised: hard to measure, overlaps with talent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weighed judgement on its scientific status.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Gardner's MI theory broadened views of intelligence beyond a single IQ score, but the intelligences are difficult to measure objectively and may overlap with ordinary talents.",
            commonErrors: ["One-sided evaluation."],
          },
        },
      ],
    },
    {
      id: "olep-u5-iq-factors",
      title: "IQ Measurement and Factors",
      skill:
        "Describe IQ tests, Flynn effect and nature-nurture of intelligence.",
      lesson: {
        sections: [
          {
            heading: "IQ tests",
            body: "Binet-Simon (1905) first intelligence test — measured mental age. Wechsler scales (WAIS adult, WISC child) common today — verbal + performance subtests, deviation IQ (mean 100, SD 15). Standardised: same conditions, norms by age. Reliability/validity issues discussed.",
          },
          {
            heading: "Flynn effect",
            body: "IQ scores rose ~3 points per decade throughout 20th century — better nutrition, education, smaller families, more complex environment. Shows environment affects measured intelligence. Recent studies suggest effect slowing/reversing in some countries.",
          },
          {
            heading: "Nature-nurture of IQ",
            body: "Twin studies: identical twins IQ correlation ~0.85, fraternal ~0.60 — suggests strong genetic component. Adoption studies: adopted children's IQ correlates more with biological parents. Environment matters: early stimulation, nutrition, education improve IQ. Interactionist view dominant.",
          },
        ],
        keyFormulas: [
          {
            name: "IQ",
            statement:
              "Binet→Wechsler; Flynn effect ~3pts/decade; heritability ~50%; environment matters.",
          },
        ],
        workedExample: {
          problem: "What does the Flynn effect show about intelligence?",
          solution:
            "IQ scores rose ~3 points/decade — environmental improvements (nutrition, education) raise measured intelligence, showing nurture matters.",
        },
      },
      questions: [
        {
          id: "olep-u5-iq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Flynn effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decline in intelligence" },
              { id: "b", text: "Rise in average IQ scores over generations" },
              { id: "c", text: "A type of intelligence test" },
              { id: "d", text: "Genetic inheritance of IQ" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flynn effect",
                statement: "IQ rise over time.",
              },
            ],
            steps: [
              { reasoning: "IQ scores rise.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Rise in average IQ scores over generations",
            commonErrors: ["Confusing with heritability."],
          },
        },
        {
          id: "olep-u5-iq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does twin study evidence suggest about IQ heritability?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IQ heritability",
                statement: "Identical twins correlate more than fraternal.",
              },
            ],
            steps: [
              {
                reasoning: "Identical twins ~0.85 correlation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Suggests genetic component.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Identical twins' IQ correlates ~0.85 vs fraternal ~0.60 — suggests significant genetic contribution (~50% heritability).",
            commonErrors: ["Claiming 100% genetic."],
          },
        },
        {
          id: "olep-u5-iq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the Flynn effect important for nature-nurture debate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flynn significance",
                statement: "Environment can raise IQ.",
              },
            ],
            steps: [
              {
                reasoning: "IQ rose ~3 points/decade.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Environmental improvements caused it.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows nurture affects measured IQ.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "IQ rose ~3 points/decade due to better nutrition/education — proves environment can significantly raise measured intelligence, supporting nurture side.",
            commonErrors: ["Denying environmental effect."],
          },
        },
        {
          id: "olep-u5-iq-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "IQ measurement and factors.",
          parts: [
            { label: "a", prompt: "IQ tests?", marks: 2 },
            { label: "b", prompt: "Flynn effect?", marks: 2 },
            { label: "c", prompt: "Genetic evidence?", marks: 3 },
            { label: "d", prompt: "Environmental evidence?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IQ",
                statement: "Tests+Flynn+genetics+environment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Binet/Wechsler scales.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Standardised scoring.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "~3 points/decade rise.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Environmental causes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Twin correlations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Adoption studies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "~50% heritability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Early stimulation/nutrition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Education effects.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) tests (b) Flynn (c) genetics (d) environment",
          },
        },
        {
          id: "olep-u5-iq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deviation IQ is calculated by comparing an individual's score to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the highest scorer in the class" },
              { id: "b", text: "a fixed mental age in months" },
              { id: "c", text: "a random sample of adults" },
              { id: "d", text: "the performance of their own age group (mean 100, SD 15)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviation IQ",
                statement: "Score relative to age-group norms.",
              },
            ],
            steps: [{ reasoning: "Wechsler deviation IQ uses norms.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** the performance of their own age group (mean 100, SD 15)",
            commonErrors: ["Confusing with mental age (Binet-Simon)."],
          },
        },
        {
          id: "olep-u5-iq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who developed the first intelligence test, the Binet-Simon scale (1905)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "David Wechsler" },
              { id: "b", text: "Howard Gardner" },
              { id: "c", text: "Charles Spearman" },
              { id: "d", text: "Alfred Binet and Theodore Simon" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binet-Simon",
                statement: "First intelligence test, 1905.",
              },
            ],
            steps: [{ reasoning: "Binet and Simon.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Alfred Binet and Theodore Simon",
            commonErrors: ["Confusing with Wechsler scales."],
          },
        },
        {
          id: "olep-u5-iq-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of a standard deviation IQ scale (as used by the Wechsler tests)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviation IQ",
                statement: "Mean 100, SD 15.",
              },
            ],
            steps: [{ reasoning: "Mean = 100.", marks: 1, markCode: "AO1" }],
            finalAnswer: "100",
            commonErrors: ["Saying 50 or 0."],
          },
        },
        {
          id: "olep-u5-iq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the mean and (b) the standard deviation of the Wechsler deviation IQ scale.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100 },
              { label: "b", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviation IQ",
                statement: "Mean 100, SD 15.",
              },
            ],
            steps: [
              { reasoning: "Mean is 100.", marks: 1, markCode: "AO1" },
              { reasoning: "Standard deviation is 15.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 100 (b) 15",
            commonErrors: ["Swapping mean and SD."],
          },
        },
        {
          id: "olep-u5-iq-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identical (monozygotic) twins' IQ correlation (~0.85) being much higher than fraternal twins' (~0.60) suggests...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a significant genetic contribution to IQ" },
              { id: "b", text: "environment has no effect on IQ" },
              { id: "c", text: "IQ tests are invalid" },
              { id: "d", text: "identical twins share the same environment only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin studies",
                statement: "MZ > DZ concordance implies genetic component.",
              },
            ],
            steps: [
              { reasoning: "MZ twins share all genes.", marks: 1, markCode: "AO1" },
              { reasoning: "Higher correlation implies heritability.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** a significant genetic contribution to IQ",
            commonErrors: ["Ignoring the shared environment of twins."],
          },
        },
        {
          id: "olep-u5-iq-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State (a) the approximate Flynn effect rate in IQ points per decade and (b) the number of environmental factors named as causes (nutrition, education, smaller families, more complex environment).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, tolerance: 1 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flynn effect",
                statement: "~3 points/decade rise; environmental causes.",
              },
            ],
            steps: [
              { reasoning: "About 3 points per decade.", marks: 1, markCode: "AO1" },
              { reasoning: "Four environmental factors listed.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 3 (b) 4",
            commonErrors: ["Wrong rate or counting factors."],
          },
        },
        {
          id: "olep-u5-iq-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Adoption studies show that an adopted child's IQ correlates more strongly with...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "their siblings only" },
              { id: "b", text: "neither set of parents" },
              { id: "c", text: "their adoptive parents" },
              { id: "d", text: "their biological parents" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adoption studies",
                statement: "IQ tracks biological parents → genetic component.",
              },
            ],
            steps: [
              { reasoning: "Adopted children share genes with birth parents.", marks: 1, markCode: "AO1" },
              { reasoning: "Stronger correlation implies genetics.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** their biological parents",
            commonErrors: ["Ignoring shared genes with birth parents."],
          },
        },
        {
          id: "olep-u5-iq-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the approximate IQ correlations for (a) identical twins, (b) fraternal twins, and (c) the Flynn effect rate in points per decade.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.85, tolerance: 0.05 },
              { label: "b", answer: 0.6, tolerance: 0.05 },
              { label: "c", answer: 3, tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IQ evidence",
                statement: "MZ ~0.85; DZ ~0.60; Flynn ~3/decade.",
              },
            ],
            steps: [
              { reasoning: "MZ correlation ~0.85.", marks: 1, markCode: "AO1" },
              { reasoning: "DZ correlation ~0.60.", marks: 1, markCode: "AO1" },
              { reasoning: "Flynn ~3 points/decade.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 0.85 (b) 0.60 (c) 3",
            commonErrors: ["Reversing MZ and DZ correlations."],
          },
        },
        {
          id: "olep-u5-iq-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The Flynn effect supports the nurture side of the nature-nurture debate because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "environmental improvements have raised average measured IQ" },
              { id: "b", text: "genes have become more common" },
              { id: "c", text: "identical twins now score higher" },
              { id: "d", text: "IQ tests have become easier" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flynn effect",
                statement: "Environment can raise measured IQ.",
              },
            ],
            steps: [
              { reasoning: "IQ rose ~3 points/decade.", marks: 1, markCode: "AO1" },
              { reasoning: "Caused by nutrition/education improvements.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** environmental improvements have raised average measured IQ",
            commonErrors: ["Ignoring environmental causes."],
          },
        },
        {
          id: "olep-u5-iq-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give the mean, the standard deviation, and the approximate Flynn effect rate (points per decade) for deviation IQ.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100 },
              { label: "b", answer: 15 },
              { label: "c", answer: 3, tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IQ statistics",
                statement: "Mean 100, SD 15; Flynn ~3/decade.",
              },
            ],
            steps: [
              { reasoning: "Mean = 100.", marks: 1, markCode: "AO1" },
              { reasoning: "SD = 15.", marks: 1, markCode: "AO1" },
              { reasoning: "Flynn ~3 points/decade.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 100 (b) 15 (c) 3",
            commonErrors: ["Confusing Flynn rate with IQ mean."],
          },
        },
        {
          id: "olep-u5-iq-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An estimated heritability of about 50% for IQ means that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "environment has no effect on IQ" },
              { id: "b", text: "half of all people inherit high IQ" },
              { id: "c", text: "IQ is entirely genetic" },
              { id: "d", text: "roughly half the variation in IQ scores is due to genetic differences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heritability",
                statement: "~50% of IQ variance is genetic.",
              },
            ],
            steps: [
              { reasoning: "Heritability = proportion of variance genetic.", marks: 1, markCode: "AO1" },
              { reasoning: "Remaining variance is environmental/interaction.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** roughly half the variation in IQ scores is due to genetic differences",
            commonErrors: ["Interpreting heritability as a fixed individual trait."],
          },
        },
        {
          id: "olep-u5-iq-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the nature-nurture debate in intelligence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature-nurture",
                statement: "Genetics + environment interact (interactionist view).",
              },
            ],
            steps: [
              {
                reasoning: "Genetic evidence: twin correlations, adoption studies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Environmental evidence: Flynn effect, early stimulation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "~50% heritability — both matter.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interactionist conclusion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Both nature and nurture shape IQ: twin/adoption studies show a strong genetic component (~50% heritability), while the Flynn effect and early stimulation show environment raises measured intelligence — the interactionist view is dominant.",
            commonErrors: ["One-sided nature or nurture argument."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u5-5-2-notes",
      title: "Intelligence — notes",
      summary:
        "Spearman g, Gardner MI, Sternberg triarchic; IQ tests, Flynn effect, heritability.",
      sections: [
        {
          heading: "Theories",
          body: "Spearman=g; Gardner=8 MI; Sternberg=analytical/creative/practical.",
        },
        {
          heading: "IQ",
          body: "Binet→Wechsler; Flynn ~3pts/decade; twin studies ~50% heritable; environment matters.",
        },
      ],
    },
  ],
};
