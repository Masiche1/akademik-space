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
              { id: "a", text: "Genetic influence" },
              { id: "b", text: "Brain structure" },
              { id: "c", text: "Environmental influence" },
              { id: "d", text: "Inborn traits" },
            ],
            correctChoiceId: "c",
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
        {
          id: "olep-u3-nn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the nature-nurture debate, 'nature' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "genetic and biological influences" },
              { id: "b", text: "cultural norms only" },
              { id: "c", text: "environmental and experiential influences" },
              { id: "d", text: "random chance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nature",
                statement: "Genes/biology.",
              },
            ],
            steps: [
              {
                reasoning: "Nature = inherited biology.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Genetic and biological influences",
            commonErrors: ["Confusing with nurture."],
          },
        },
        {
          id: "olep-u3-nn-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the nature-nurture debate, 'nurture' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "environmental and experiential influences" },
              { id: "b", text: "genetic inheritance" },
              { id: "c", text: "instinctive behaviour" },
              { id: "d", text: "hormonal changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nurture",
                statement: "Environment/experience.",
              },
            ],
            steps: [
              {
                reasoning: "Nurture = environment.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Environmental and experiential influences",
            commonErrors: ["Confusing with nature."],
          },
        },
        {
          id: "olep-u3-nn-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Feral children who were isolated from humans and never developed full language provide evidence for...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "nature — genes alone determine development" },
              { id: "b", text: "nurture — environment is needed for normal development" },
              { id: "c", text: "critical period for vision only" },
              { id: "d", text: "neither side" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feral children",
                statement: "Evidence for nurture.",
              },
            ],
            steps: [
              {
                reasoning: "Isolation → no language = environment matters.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Nurture",
            commonErrors: ["Saying it supports nature."],
          },
        },
        {
          id: "olep-u3-nn-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identical twins raised apart still sharing traits such as IQ and personality is evidence for...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "neither nature nor nurture" },
              { id: "b", text: "nurture — shared upbringing" },
              { id: "c", text: "coincidence only" },
              { id: "d", text: "nature — genetic influence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin studies",
                statement: "Evidence for nature.",
              },
            ],
            steps: [
              {
                reasoning: "Same genes, different environments → similarity = genes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Nature",
            commonErrors: ["Saying nurture."],
          },
        },
        {
          id: "olep-u3-nn-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The modern interactionist view of the nature-nurture debate holds that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "genes set potential and the environment shapes how it is expressed" },
              { id: "b", text: "only environment matters" },
              { id: "c", text: "only genes matter" },
              { id: "d", text: "the two are completely unrelated" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interactionism",
                statement: "Genes + environment interact.",
              },
            ],
            steps: [
              {
                reasoning: "Modern view accepts both influences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Genes set range; environment shapes expression.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Genes set potential; environment shapes expression",
            commonErrors: ["Choosing an extreme position."],
          },
        },
        {
          id: "olep-u3-nn-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a twin study, identical twins showed $85\\%$ similarity in a trait while fraternal twins showed $45\\%$. Calculate the percentage-point difference.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Difference",
                statement: "identical similarity - fraternal similarity.",
              },
            ],
            steps: [
              {
                reasoning: "85 - 45 = 40 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gap suggests genetic influence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40 percentage points",
          },
        },
        {
          id: "olep-u3-nn-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An adoption study followed $48$ adoptees; $36$ closely resembled their biological parents in personality. What percentage resembled their biological parents?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(resembling / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "36 / 48 = 0.75.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 75%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "olep-u3-nn-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a twin study of $100$ pairs, the trait appeared in both twins of $60$ identical pairs and both twins of $30$ fraternal pairs. Calculate the difference in concordance rate between identical and fraternal twins, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Concordance difference",
                statement: "identical rate - fraternal rate.",
              },
            ],
            steps: [
              {
                reasoning: "60% - 30% = 30 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 30 percentage points.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "30 percentage points",
          },
        },
        {
          id: "olep-u3-nn-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A behaviour-genetic study estimates the heritability of a trait at $0.6$. Express this as a percentage and state what it means.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Heritability",
                statement: "heritability x 100 = genetic contribution %.",
              },
            ],
            steps: [
              {
                reasoning: "0.6 x 100 = 60%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Means 60% of variation is genetic.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 60%.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "olep-u3-nn-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'nature' in the context of psychological development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nature",
                statement: "Genetic/biological influence.",
              },
            ],
            steps: [
              {
                reasoning: "Influence of genes and biology.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Inherited traits/temperament.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Genetic and biological influences on behaviour.",
            commonErrors: ["Confusing with nurture."],
          },
        },
        {
          id: "olep-u3-nn-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how evidence from feral children or adoption studies supports the nurture side of the debate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nurture evidence",
                statement: "Feral children/adoption studies show environment matters.",
              },
            ],
            steps: [
              {
                reasoning: "Feral children lack language without human contact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows environment needed for development.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Adoption studies: environment shapes attachment/values.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Conclusion: nurture significant.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Feral children never develop full language and adoptees resemble rearing families — showing environment shapes development.",
            commonErrors: ["Citing only twin studies."],
          },
        },
        {
          id: "olep-u3-nn-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Nature vs nurture.",
          parts: [
            { label: "a", prompt: "Define nature.", marks: 1 },
            { label: "b", prompt: "Define nurture.", marks: 1 },
            { label: "c", prompt: "Two pieces of nature evidence?", marks: 2 },
            { label: "d", prompt: "Two pieces of nurture evidence?", marks: 2 },
            { label: "e", prompt: "Explain the interactionist view.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature/nurture",
                statement: "Definitions+evidence+interaction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Genes/biology.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Environment/experience.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Any two: twin studies, genetic disorders, temperament.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Any two: feral children, adoption, enrichment, culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Genes set potential range.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Environment shapes expression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Both interact — neither alone.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) nature (b) nurture (c) nature evidence (d) nurture evidence (e) interaction",
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
              { id: "a", text: "Sensorimotor" },
              { id: "b", text: "Concrete operational" },
              { id: "c", text: "Preoperational" },
              { id: "d", text: "Formal operational" },
            ],
            correctChoiceId: "b",
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
        {
          id: "olep-u3-pg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Piaget's theory, a schema is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a stage of development" },
              { id: "b", text: "a mental framework for organising knowledge" },
              { id: "c", text: "a type of memory store" },
              { id: "d", text: "a reward system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Schema",
                statement: "Mental framework for knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Schema = mental framework.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Mental framework for organising knowledge",
            commonErrors: ["Confusing with a stage."],
          },
        },
        {
          id: "olep-u3-pg-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Assimilation in Piaget's theory means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "copying another person's behaviour" },
              { id: "b", text: "forgetting old information" },
              { id: "c", text: "fitting new information into an existing schema" },
              { id: "d", text: "changing an existing schema to fit new information" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Assimilation",
                statement: "Fit new info into existing schema.",
              },
            ],
            steps: [
              {
                reasoning: "Assimilation = fit into schema.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Fit new info into existing schema",
            commonErrors: ["Confusing with accommodation."],
          },
        },
        {
          id: "olep-u3-pg-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Accommodation in Piaget's theory means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "watching and imitating a model" },
              { id: "b", text: "repeating a behaviour for reward" },
              { id: "c", text: "fitting new information into an existing schema" },
              { id: "d", text: "changing an existing schema to accommodate new information" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accommodation",
                statement: "Change schema for new info.",
              },
            ],
            steps: [
              {
                reasoning: "Accommodation = change schema.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Change schema for new information",
            commonErrors: ["Confusing with assimilation."],
          },
        },
        {
          id: "olep-u3-pg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Object permanence — knowing objects still exist when out of sight — is typically achieved in which stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Preoperational" },
              { id: "b", text: "Sensorimotor" },
              { id: "c", text: "Formal operational" },
              { id: "d", text: "Concrete operational" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Object permanence",
                statement: "Achieved in sensorimotor stage.",
              },
            ],
            steps: [
              {
                reasoning: "Object permanence develops 0-2 years.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sensorimotor",
            commonErrors: ["Confusing with later stages."],
          },
        },
        {
          id: "olep-u3-pg-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Conservation — understanding that quantity stays the same despite changes in appearance — is typically achieved around which age and stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Age 4, preoperational stage" },
              { id: "b", text: "Age 2, sensorimotor stage" },
              { id: "c", text: "Age 12, formal operational stage" },
              { id: "d", text: "Age 7, concrete operational stage" },
            ],
            correctChoiceId: "d",
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
              {
                reasoning: "Conservation fails in preoperational stage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Achieved in concrete operational ~age 7.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Age 7, concrete operational",
            commonErrors: ["Saying it is present in preoperational stage."],
          },
        },
        {
          id: "olep-u3-pg-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A child is $8$ years old. Piaget's concrete operational stage begins at about age $7$. How many years into the concrete operational stage is this child?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Years into stage",
                statement: "age - stage onset age.",
              },
            ],
            steps: [
              {
                reasoning: "8 - 7 = 1 year.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 1 year.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "olep-u3-pg-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Egocentrism is typical of the preoperational stage, which Piaget placed between ages $2$ and $7$. Calculate the age span of this stage in years.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Age span",
                statement: "upper age - lower age.",
              },
            ],
            steps: [
              {
                reasoning: "7 - 2 = 5 years.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 5 years.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "olep-u3-pg-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a conservation test, $16$ out of $20$ children aged $8$ correctly judged that quantity was unchanged. Calculate the percentage showing conservation.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(correct / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "16 / 20 = 0.8.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 80%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "80%",
          },
        },
        {
          id: "olep-u3-pg-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Piaget's formal operational stage begins at about age $11$. A participant is $13$ years old. Calculate how many years beyond the stage onset this participant is, and name the type of reasoning characteristic of this stage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Years beyond onset",
                statement: "age - onset age.",
              },
            ],
            steps: [
              {
                reasoning: "13 - 11 = 2 years.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Formal operational = abstract/hypothetical reasoning.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 2 years.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "olep-u3-pg-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define schema in Piaget's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Schema",
                statement: "Mental framework for knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Mental framework/organised knowledge structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Used to interpret new experiences.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "A mental framework for organising and interpreting knowledge.",
            commonErrors: ["Confusing with a memory store."],
          },
        },
        {
          id: "olep-u3-pg-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between assimilation and accommodation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Assimilation/accommodation",
                statement: "Fit into schema vs change schema.",
              },
            ],
            steps: [
              {
                reasoning: "Assimilation: fit new info into existing schema.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Accommodation: change schema to fit new info.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both are ways of adapting to new experiences.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear contrast.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Assimilation=fit new info into schema; accommodation=change schema for new info.",
            commonErrors: ["Reversing the two terms."],
          },
        },
        {
          id: "olep-u3-pg-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Piaget's theory of cognitive development.",
          parts: [
            { label: "a", prompt: "Define schema.", marks: 1 },
            { label: "b", prompt: "Assimilation vs accommodation?", marks: 2 },
            { label: "c", prompt: "Name the four stages.", marks: 2 },
            { label: "d", prompt: "One feature of the preoperational stage?", marks: 2 },
            { label: "e", prompt: "One criticism of Piaget?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piaget",
                statement: "Schema+processes+stages+criticism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mental framework.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Assimilation=fit into schema.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Accommodation=change schema.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Sensorimotor+preoperational.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Concrete+formal operational.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Egocentrism/symbolic thought/no conservation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Any one named correctly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Stages not fixed ages/cultural bias/underestimates social factors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Criticism elaborated.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) schema (b) assimilation/accommodation (c) stages (d) preoperational (e) criticism",
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
