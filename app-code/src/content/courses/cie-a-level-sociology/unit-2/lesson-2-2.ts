import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "asoc-u2-lesson-2-2",
  code: "2-2",
  title: "Culture, Identity and Deviance",
  goal: "I CAN explain culture, social identity and theories of deviance.",
  standards: ["9699: Socialisation, culture and identity"],
  vocabulary: [
    {
      term: "Culture",
      definition: "Shared beliefs, values, norms and practices of a group.",
    },
    {
      term: "Subculture",
      definition: "Group with distinct values within wider culture.",
    },
    {
      term: "Counterculture",
      definition: "Group opposing mainstream culture.",
    },
    { term: "Deviance", definition: "Behaviour violating social norms." },
    {
      term: "Social control",
      definition: "Mechanisms enforcing conformity — informal and formal.",
    },
    {
      term: "Labelling theory",
      definition:
        "Deviance created by society's reaction/labels, not the act itself.",
    },
  ],
  concepts: [
    {
      id: "asoc-u2-culture-identity",
      title: "Culture and identity",
      skill: "Explain culture, subculture and social identity.",
      lesson: {
        sections: [
          {
            heading: "Culture",
            body: "Shared beliefs, values, norms, symbols, language and practices transmitted across generations. Includes material culture (objects) and non-material culture (ideas). Cultures vary — e.g. individualist vs collectivist.",
          },
          {
            heading: "Subculture and counterculture",
            body: "Subculture: distinct group within culture sharing specific values — e.g. youth culture, religious groups, professional groups. Counterculture: opposes mainstream values — e.g. hippies, punk. Can challenge or coexist.",
          },
          {
            heading: "Social identity",
            body: "Part of self-concept from group membership — gender, class, ethnicity, nationality, religion. Social identity theory: we derive self-esteem from group belonging. Can be multiple and context-dependent.",
          },
        ],
        keyFormulas: [
          {
            name: "Culture",
            statement:
              "Culture>subculture>counterculture; Identity=group membership.",
          },
        ],
        workedExample: {
          problem: "How does youth culture act as subculture?",
          solution:
            "Distinct values, slang, fashion, music — shares some mainstream values but develops own norms.",
        },
      },
      questions: [
        {
          id: "asoc-u2-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a subculture?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Group with distinct values within wider culture",
              },
              { id: "b", text: "Group opposing all culture" },
              { id: "c", text: "Mainstream culture" },
              { id: "d", text: "Religious group only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subculture",
                statement: "Distinct values within culture.",
              },
            ],
            steps: [
              {
                reasoning: "Subculture = within culture.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Distinct values within culture",
            commonErrors: ["Confusing with counterculture."],
          },
        },
        {
          id: "asoc-u2-ci-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is social identity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social identity",
                statement: "Self-concept from group membership.",
              },
            ],
            steps: [
              {
                reasoning: "From group membership.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gender/class/ethnicity etc.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Self-concept derived from group membership.",
            commonErrors: ["Confusing with personality."],
          },
        },
        {
          id: "asoc-u2-ci-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare subculture and counterculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sub vs counter",
                statement: "Within culture vs opposing culture.",
              },
            ],
            steps: [
              {
                reasoning: "Subculture: distinct within culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Counterculture: opposes mainstream.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different relationship to mainstream.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Subculture=within; counterculture=opposes.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u2-ci-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Culture and identity.",
          parts: [
            { label: "a", prompt: "Define culture.", marks: 1 },
            { label: "b", prompt: "Define subculture.", marks: 1 },
            { label: "c", prompt: "Define counterculture.", marks: 1 },
            { label: "d", prompt: "Define social identity.", marks: 2 },
            {
              label: "e",
              prompt: "How does youth culture act as subculture?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Culture",
                statement: "Definitions+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Shared beliefs/values.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Distinct within culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Opposes mainstream.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Group membership.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Self-concept.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Distinct values identified.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Shares some mainstream.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Develops own norms.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) shared beliefs (b) within culture (c) opposes (d) group membership (e) youth subculture",
          },
        },
      ],
    },
    {
      id: "asoc-u2-deviance",
      title: "Deviance and social control",
      skill:
        "Explain deviance and evaluate theories of deviance and social control.",
      lesson: {
        sections: [
          {
            heading: "Deviance",
            body: "Behaviour violating social norms — not necessarily criminal (norms vary by culture/context). Deviance is relative: what's deviant in one culture isn't in another. Social control maintains conformity.",
          },
          {
            heading: "Functionalist view",
            body: "Durkheim: deviance is normal and necessary — clarifies boundaries, strengthens group solidarity, can lead to social change. Merton's strain theory: deviance results when society's goals (success) can't be achieved through legitimate means.",
          },
          {
            heading: "Labelling theory",
            body: "Becker: deviance is created by society's reaction — being labelled 'deviant' leads to secondary deviance (acting out the label). Powerful groups label less powerful — criminalising poverty. Self-fulfilling prophecy.",
          },
        ],
        keyFormulas: [
          {
            name: "Deviance",
            statement:
              "Functionalist=necessary; Strain=blocked goals; Labelling=created by reaction.",
          },
        ],
        workedExample: {
          problem: "How does labelling theory explain persistent crime?",
          solution:
            "Labelled 'criminal' → internalises identity → secondary deviance → harder to reintegrate → more crime.",
        },
      },
      questions: [
        {
          id: "asoc-u2-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is deviance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Behaviour violating social norms" },
              { id: "b", text: "Criminal behaviour only" },
              { id: "c", text: "Mental illness" },
              { id: "d", text: "Economic inequality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviance",
                statement: "Violates social norms.",
              },
            ],
            steps: [
              {
                reasoning: "Deviance = norm violation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Violates social norms",
            commonErrors: ["Confusing with crime."],
          },
        },
        {
          id: "asoc-u2-dv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does labelling theory say about deviance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Labelling theory",
                statement: "Deviance created by society's reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Labels create deviant identity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Deviance created by society's reaction/labels.",
            commonErrors: ["Saying deviance is biological."],
          },
        },
        {
          id: "asoc-u2-dv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare functionalist and labelling views of deviance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist vs labelling",
                statement: "Necessary vs created by reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Functionalist: deviance necessary for society.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Labelling: deviance created by labels.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different explanations.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Functionalist=necessary; labelling=created by reaction.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u2-dv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Deviance and social control.",
          parts: [
            { label: "a", prompt: "Define deviance.", marks: 1 },
            { label: "b", prompt: "Functionalist view?", marks: 2 },
            { label: "c", prompt: "Labelling theory?", marks: 2 },
            { label: "d", prompt: "Strain theory?", marks: 2 },
            {
              label: "e",
              prompt: "How does social control maintain order?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviance",
                statement: "Definitions+theories+social control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Violates norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Necessary for society.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Clarifies boundaries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Labels create deviance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Self-fulfilling.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Blocked goals→deviance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Legitimate means unavailable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Informal/formal mechanisms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Enforces conformity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) deviance (b) functionalist (c) labelling (d) strain (e) social control",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u2-2-2-notes",
      title: "Culture, identity and deviance — notes",
      summary:
        "Culture types, social identity, deviance theories and social control.",
      sections: [
        {
          heading: "Culture",
          body: "Culture>subculture>counterculture. Identity=group membership.",
        },
        {
          heading: "Deviance",
          body: "Functionalist=necessary; strain=blocked goals; labelling=created by reaction. Social control=enforces conformity.",
        },
      ],
    },
  ],
};
