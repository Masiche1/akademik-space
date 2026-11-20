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
              { id: "b", text: "A specific skill" },
              { id: "c", text: "Emotional intelligence" },
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
              { id: "a", text: "Rise in average IQ scores over generations" },
              { id: "b", text: "Decline in intelligence" },
              { id: "c", text: "A type of intelligence test" },
              { id: "d", text: "Genetic inheritance of IQ" },
            ],
            correctChoiceId: "a",
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
