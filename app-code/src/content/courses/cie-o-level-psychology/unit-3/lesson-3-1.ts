import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olep-u3-lesson-3-1",
  code: "3-1",
  title: "Nature vs Nurture",
  goal: "I CAN explain the nature-nurture debate and describe Piaget's stages of development.",
  standards: ["2219: Developmental psychology"],
  vocabulary: [
    {
      term: "Nature",
      definition: "Influence of genes/heredity on development.",
    },
    {
      term: "Nurture",
      definition: "Influence of environment/experience on development.",
    },
    {
      term: "Schema",
      definition: "Mental framework for understanding the world.",
    },
    {
      term: "Assimilation",
      definition: "Fitting new information into existing schema.",
    },
    {
      term: "Accommodation",
      definition: "Changing schema to fit new information.",
    },
    {
      term: "Conservation",
      definition:
        "Understanding quantity stays same despite appearance change.",
    },
  ],
  concepts: [
    {
      id: "olep-u3-nature-nurture",
      title: "Nature vs nurture",
      skill: "Explain the debate and evidence for both sides.",
      lesson: {
        sections: [
          {
            heading: "The debate",
            body: "Nature: behaviour shaped by genes — twin studies show identical twins more similar than fraternal. Nurture: behaviour shaped by environment — feral children lack language, adoption studies show environment matters. Modern view: interaction — genes set potential, environment shapes expression.",
          },
          {
            heading: "Evidence for nature",
            body: "Twin studies: identical twins raised apart still share traits (IQ, personality). Genetic disorders inherited (Huntington's). Temperament partly inherited. Adoption studies: children resemble biological parents.",
          },
          {
            heading: "Evidence for nurture",
            body: "Feral children (isolated from humans) never develop full language. Environment shapes attachment, language, values. Enrichment studies — early stimulation improves development. Culture shapes behaviour patterns.",
          },
        ],
        keyFormulas: [
          {
            name: "Nature-nurture",
            statement:
              "Genes set potential; environment shapes expression — interactionist view.",
          },
        ],
        workedExample: {
          problem: "What do twin studies show about nature vs nurture?",
          solution:
            "Identical twins (same genes) raised apart share more traits than fraternal twins — supports genetic influence, but differences show nurture matters too.",
        },
      },
      questions: [
        {
          id: "olep-u3-nn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'nurture' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environmental influence" },
              { id: "b", text: "Genetic influence" },
              { id: "c", text: "Inborn traits" },
              { id: "d", text: "Brain structure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nurture",
                statement: "Environmental influence.",
              },
            ],
            steps: [
              {
                reasoning: "Nurture = environment.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Environmental influence",
            commonErrors: ["Confusing with nature."],
          },
        },
        {
          id: "olep-u3-nn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name one piece of evidence for nature and one for nurture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence",
                statement: "Twin studies vs feral children.",
              },
            ],
            steps: [
              {
                reasoning: "Nature: twin/genetic evidence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Nurture: environmental evidence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Nature: identical twins share traits. Nurture: feral children lack language; environment shapes development.",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "olep-u3-nn-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the interactionist view of nature-nurture?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interactionism",
                statement: "Genes + environment interact.",
              },
            ],
            steps: [
              { reasoning: "Genes set potential.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Environment shapes expression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both needed for development.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Genes provide potential, environment determines how it develops — both interact to shape behaviour.",
            commonErrors: ["Choosing one side only."],
          },
        },
        {
          id: "olep-u3-nn-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Nature vs nurture.",
          parts: [
            { label: "a", prompt: "Define both?", marks: 2 },
            { label: "b", prompt: "Evidence for nature?", marks: 2 },
            { label: "c", prompt: "Evidence for nurture?", marks: 3 },
            { label: "d", prompt: "Interactionist view?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature-nurture",
                statement: "Definitions+evidence+interaction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Nature=genes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Nurture=environment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Twin studies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Genetic disorders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Feral children.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Environment shapes behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Culture effects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Genes set potential.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Environment shapes it.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) definitions (b) nature (c) nurture (d) interaction",
          },
        },
      ],
    },
    {
      id: "olep-u3-piaget",
      title: "Piaget's Stages of Development",
      skill: "Describe Piaget's four stages and key concepts.",
      lesson: {
        sections: [
          {
            heading: "Key concepts",
            body: "Children actively construct knowledge through interaction with environment. Schema = mental framework. Assimilation = fit new info into existing schema; accommodation = change schema for new info. Development occurs in fixed stages when ready.",
          },
          {
            heading: "The four stages",
            body: "Sensorimotor (0–2): object permanence — know objects exist when hidden. Preoperational (2–7): symbolic thought, egocentrism, lack conservation. Concrete operational (7–11): logical thinking about concrete objects, conservation achieved. Formal operational (11+): abstract/hypothetical reasoning.",
          },
          {
            heading: "Criticisms",
            body: "Stages may not be as fixed/age-specific as Piaget claimed — children show abilities earlier. Cultural bias — tests assume Western norms. Underestimates social factors (Vygotsky's ZPD alternative).",
          },
        ],
        keyFormulas: [
          {
            name: "Piaget",
            statement:
              "Sensorimotor→Preoperational→Concrete→Formal; assimilation/accommodation; conservation at 7.",
          },
        ],
        workedExample: {
          problem: "What is object permanence?",
          solution:
            "Understanding that objects continue to exist when out of sight — achieved in sensorimotor stage (~8 months).",
        },
      },
      questions: [
        {
          id: "olep-u3-pg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At which stage does conservation develop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Concrete operational" },
              { id: "b", text: "Sensorimotor" },
              { id: "c", text: "Preoperational" },
              { id: "d", text: "Formal operational" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conservation",
                statement: "Achieved ~age 7, concrete operational.",
              },
            ],
            steps: [
              { reasoning: "Concrete operational.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Concrete operational",
            commonErrors: ["Confusing stages."],
          },
        },
        {
          id: "olep-u3-pg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish assimilation from accommodation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Assimilation/accommodation",
                statement: "Fit into schema vs change schema.",
              },
            ],
            steps: [
              {
                reasoning: "Assimilation = fit new info.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Accommodation = change schema.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Assimilation fits new info into existing schema; accommodation changes schema to fit new info.",
            commonErrors: ["Swapping them."],
          },
        },
        {
          id: "olep-u3-pg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe two features of the preoperational stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Preoperational",
                statement: "Symbolic thought+egocentrism+no conservation.",
              },
            ],
            steps: [
              {
                reasoning: "Symbolic thought/language.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Egocentrism.", marks: 1, markCode: "AO1" },
              { reasoning: "No conservation.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear description.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Symbolic thought and language develop; egocentrism (can't see others' views); no conservation yet.",
            commonErrors: ["Listing wrong stage features."],
          },
        },
        {
          id: "olep-u3-pg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Piaget's theory.",
          parts: [
            { label: "a", prompt: "Key concepts?", marks: 2 },
            { label: "b", prompt: "Four stages?", marks: 4 },
            { label: "c", prompt: "Conservation?", marks: 1 },
            { label: "d", prompt: "Criticisms?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget",
                statement: "Concepts+stages+conservation+criticisms.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Schema/assimilation/accommodation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Active construction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Sensorimotor 0-2.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Preoperational 2-7.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Concrete 7-11.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Formal 11+.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Quantity unchanged despite appearance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Stages not fixed/cultural bias.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Underestimates social factors.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) concepts (b) stages (c) conservation (d) criticisms",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u3-3-1-notes",
      title: "Nature-nurture and Piaget — notes",
      summary: "Nature-nurture debate; Piaget's stages, schema, conservation.",
      sections: [
        {
          heading: "Debate",
          body: "Genes vs environment; twin/feral studies; interactionist view.",
        },
        {
          heading: "Piaget",
          body: "Schema/assimilation/accommodation; sensorimotor→preoperational→concrete→formal; conservation at 7.",
        },
      ],
    },
  ],
};
