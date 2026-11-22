import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "eias-soc-u1-lesson-1-2",
  code: "1-2",
  title: "Socialisation Theories",
  goal: "I CAN compare functionalist, Marxist and interactionist views of socialisation.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 1 — Socialisation"],
  vocabulary: [
    {
      term: "Functionalism",
      definition: "Society as system of parts working together for stability.",
    },
    {
      term: "Consensus theory",
      definition: "Society held together by shared values.",
    },
    {
      term: "Marxism",
      definition:
        "Society divided by class — socialisation reproduces inequality.",
    },
    {
      term: "Interactionism",
      definition: "Society created through everyday interactions and meanings.",
    },
    {
      term: "Social facts",
      definition: "External forces constraining behaviour — Durkheim.",
    },
    {
      term: "Looking-glass self",
      definition: "Self-image from others' reactions — Cooley.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u1-functionalist",
      title: "Functionalist and Marxist Views",
      skill: "Explain consensus and conflict perspectives on socialisation.",
      lesson: {
        sections: [
          {
            heading: "Functionalist view",
            body: "**Durkheim**: social facts — external forces shaping behaviour. **Parsons**: family primary agent — socialises children into value consensus. School teaches universalistic values — meritocracy. **Social solidarity**: shared norms bind society.\n\n**Evaluation**: assumes consensus — ignores conflict; may justify status quo; neglects power inequalities.",
          },
          {
            heading: "Marxist view",
            body: "**Althusser**: school as ideological state apparatus — reproduces ruling-class ideology. **Bowles & Gintis**: hidden curriculum — obedience, punctuality prepare workers for capitalism. **Cultural reproduction**: working-class children learn submission, middle-class learn leadership.\n\n**Evaluation**: explains inequality; but too deterministic — ignores resistance; students not passive.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "School teaches obedience to prepare workers for jobs. Theory?",
          solution: "Marxist — hidden curriculum.",
        },
      },
      questions: [
        {
          id: "eias-soc-u1-func-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is functionalism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individual actions" },
              { id: "b", text: "Society as system for stability" },
              { id: "c", text: "Class conflict" },
              { id: "d", text: "Symbolic meaning" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functionalism",
                statement: "System + stability.",
              },
            ],
            steps: [
              {
                reasoning: "Functionalism = society as system.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** System+stability",
            commonErrors: ["Marxist confused."],
          },
        },
        {
          id: "eias-soc-u1-func-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two functionalist views on socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist socialisation",
                statement: "Consensus + stability.",
              },
            ],
            steps: [
              {
                reasoning: "Family primary agent — value consensus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "School teaches universalistic values — meritocracy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social solidarity — shared norms bind society.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Family consensus, school meritocracy, solidarity.",
            commonErrors: ["Marxist.", "Only one."],
          },
        },
        {
          id: "eias-soc-u1-func-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the Marxist view of school socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist school",
                statement: "Reproduce inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "School as ideological state apparatus — ruling-class ideology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hidden curriculum — obedience prepares workers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Cultural reproduction — class inequality maintained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Working-class → submission; middle-class → leadership.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "ISA + hidden curriculum → reproduce class.",
            commonErrors: ["Functionalist.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u1-func-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two students from different classes get different treatment at school.",
          parts: [
            {
              label: "a",
              prompt: "Explain using functionalist view.",
              marks: 4,
            },
            { label: "b", prompt: "Explain using Marxist view.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Class perspectives",
                statement: "Consensus vs conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Functionalist: meritocracy — treatment reflects ability/effort.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Universalistic values — fair competition.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Marxist: hidden curriculum favours middle-class — reproduces inequality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Teacher expectations — working-class labelled less able.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) meritocracy (b) reproduce inequality",
            commonErrors: ["Same view.", "No theory."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u1-interactionist",
      title: "Interactionist View",
      skill:
        "Explain how interactionism sees socialisation as negotiated meaning.",
      lesson: {
        sections: [
          {
            heading: "Interactionist perspective",
            body: "**Mead**: self develops through interaction — 'I' (spontaneous) vs 'me' (socialised). **Symbols**: language, gestures — shared meanings enable interaction. **Role-taking**: imagine others' perspectives — develop self.\n\n**Goffman**: dramaturgy — life as theatre, we perform roles. Front stage (public) vs back stage (private). Impressions managed — socialisation teaches appropriate performances.",
          },
          {
            heading: "Labels and self-fulfilling prophecy",
            body: "**Labelling theory**: teachers label students — 'bright' or 'thick' — labels become self-fulfilling. Student internalises label → behaves accordingly → label confirmed.\n\n**Evaluation**: interactionism shows agency — people not passive; but may neglect structural forces (class, power).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Teacher calls student 'bright' — student works harder, confirms label. Concept?",
          solution: "Self-fulfilling prophecy.",
        },
      },
      questions: [
        {
          id: "eias-soc-u1-inter-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is interactionism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structural forces" },
              { id: "b", text: "Class conflict" },
              { id: "c", text: "Biological determinism" },
              { id: "d", text: "Society through everyday interactions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interactionism",
                statement: "Interactions + meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Interactionism = micro-level interactions.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Interactions",
            commonErrors: ["Functionalist confused."],
          },
        },
        {
          id: "eias-soc-u1-inter-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two interactionist concepts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interactionist concepts",
                statement: "Self, labels, roles.",
              },
            ],
            steps: [
              {
                reasoning: "Looking-glass self — self from others' views.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Role-taking — imagine others' perspectives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Labelling — labels → self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Looking-glass, role-taking, labelling.",
            commonErrors: ["Only one.", "Wrong concept."],
          },
        },
        {
          id: "eias-soc-u1-inter-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the self-fulfilling prophecy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SFP",
                statement: "Label → behaviour → confirmation.",
              },
            ],
            steps: [
              {
                reasoning: "Label applied — teacher calls student 'thick'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Student internalises — believes label.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Behaviour changes — acts according to label.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Label confirmed — prophecy fulfilled.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Label→internalise→behave→confirm.",
            commonErrors: ["No cycle.", "One step."],
          },
        },
        {
          id: "eias-soc-u1-inter-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student labelled 'troublemaker' by teacher.",
          parts: [
            { label: "a", prompt: "Explain using labelling theory.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two ways to break the cycle.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling application",
                statement: "Cycle + intervention.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Label applied — teacher expects trouble.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Student internalises — acts as 'troublemaker'.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Teacher awareness — avoid labels, positive expectations.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Student support — counselling, positive reinforcement.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) label→behaviour (b) awareness+support",
            commonErrors: ["No theory.", "No solution."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u1-lifelong",
      title: "Socialisation Across the Lifespan",
      skill: "Explain how socialisation continues through life stages.",
      lesson: {
        sections: [
          {
            heading: "Lifespan socialisation",
            body: "**Childhood**: family primary — language, values, identity. **Adolescence**: peers dominant — identity experimentation, subcultures. **Adulthood**: work, marriage, parenthood — new roles. **Old age**: retirement — identity adjustment, grandparent role.\n\n**Resocialisation**: total institutions (prisons, monasteries) — complete re-socialisation into new identity.",
          },
          {
            heading: "Modern socialisation",
            body: "**Choice biography** (Giddens): modern identity more chosen — career, lifestyle. **Risk society**: individual must manage own biography — more choices, more risks. **Fragmented identity**: multiple roles — work, family, online.\n\n**Evaluation**: socialisation lifelong but modern society offers more agency — identity less fixed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "New employee must learn workplace norms. Process?",
          solution: "Secondary socialisation.",
        },
      },
      questions: [
        {
          id: "eias-soc-u1-life-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Is socialisation only childhood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only adulthood" },
              { id: "b", text: "Only adolescence" },
              { id: "c", text: "No, lifelong process" },
              { id: "d", text: "Yes, only childhood" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lifelong",
                statement: "All life stages.",
              },
            ],
            steps: [
              {
                reasoning: "Socialisation = lifelong.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Lifelong",
            commonErrors: ["Childhood only."],
          },
        },
        {
          id: "eias-soc-u1-life-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two stages of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lifespan stages",
                statement: "Childhood→old age.",
              },
            ],
            steps: [
              {
                reasoning: "Childhood — family primary, language/values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Adolescence — peers dominant, identity exploration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Adulthood/old age — work, roles, retirement.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Childhood, adolescence, adulthood, old age.",
            commonErrors: ["Only one.", "Wrong stage."],
          },
        },
        {
          id: "eias-soc-u1-life-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain resocialisation in total institutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resocialisation",
                statement: "New identity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total institutions — prisons, monasteries, military.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Complete re-socialisation — new norms, values, identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Old identity stripped — 'mortification of self'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "New role internalised — inmate, monk, soldier.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Total institutions → complete re-socialisation.",
            commonErrors: ["Normal socialisation.", "No institution."],
          },
        },
        {
          id: "eias-soc-u1-life-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Person joins religious order, completely changes lifestyle.",
          parts: [
            { label: "a", prompt: "Explain using resocialisation.", marks: 4 },
            { label: "b", prompt: "Evaluate permanence of change.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resocialisation eval",
                statement: "Change + limits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Total institution — monastery controls all aspects.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Complete re-socialisation — new identity, values.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Often temporary — leaving restores old identity.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Some permanent — deep commitment changes self.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) total institution (b) may be temporary",
            commonErrors: ["No theory.", "Permanent only."],
          },
        },
      ],
    },
  ],
};
