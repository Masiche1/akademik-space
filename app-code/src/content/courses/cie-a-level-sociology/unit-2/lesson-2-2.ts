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
              { id: "a", text: "Religious group only" },
              { id: "b", text: "Mainstream culture" },
              {
                id: "c",
                text: "Group with distinct values within wider culture",
              },
              { id: "d", text: "Group opposing all culture" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Distinct values within culture",
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
        {
          id: "asoc-u2-ci-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'material culture'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical objects produced by a society" },
              { id: "b", text: "Religious rituals only" },
              { id: "c", text: "Spoken language only" },
              { id: "d", text: "Abstract ideas and beliefs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Material culture",
                statement: "Physical objects of a society.",
              },
            ],
            steps: [
              {
                reasoning: "Material = physical objects.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Physical objects",
            commonErrors: ["Confusing with non-material culture."],
          },
        },
        {
          id: "asoc-u2-ci-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a counterculture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A religious denomination" },
              {
                id: "b",
                text: "A group whose values oppose the mainstream culture",
              },
              { id: "c", text: "A group with distinct values within the culture" },
              { id: "d", text: "The dominant culture of a society" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counterculture",
                statement: "Opposes mainstream values.",
              },
            ],
            steps: [
              {
                reasoning: "Counter = opposes mainstream.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Opposes mainstream",
            commonErrors: ["Confusing with subculture."],
          },
        },
        {
          id: "asoc-u2-ci-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does social identity theory claim?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "We derive self-esteem and self-concept from group membership",
              },
              { id: "b", text: "Identity comes only from genes" },
              { id: "c", text: "Groups have no effect on identity" },
              { id: "d", text: "Identity is fixed at birth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social identity theory",
                statement: "Self-esteem from group belonging.",
              },
            ],
            steps: [
              {
                reasoning: "Identity linked to groups.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Self-esteem from group membership",
            commonErrors: ["Saying identity is purely individual."],
          },
        },
        {
          id: "asoc-u2-ci-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of a subculture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The entire society's culture" },
              { id: "b", text: "Youth culture" },
              { id: "c", text: "A country's legal system" },
              { id: "d", text: "Biological inheritance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subculture example",
                statement: "Youth culture = distinct within culture.",
              },
            ],
            steps: [
              {
                reasoning: "Youth culture is a subculture.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Youth culture",
            commonErrors: ["Naming the whole culture."],
          },
        },
        {
          id: "asoc-u2-ci-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 300 people, 45% identified strongly with their national identity. How many people is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 135 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "45% of 300 = 0.45 x 300 = 135.",
              },
            ],
            steps: [
              { reasoning: "Convert 45% to 0.45.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.45 by 300 to get 135.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "135",
            commonErrors: ["Using 45 instead of 0.45."],
          },
        },
        {
          id: "asoc-u2-ci-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 500 respondents, 20% reported holding multiple overlapping identities (e.g. gender, class and ethnicity). How many respondents is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "20% of 500 = 0.2 x 500 = 100.",
              },
            ],
            steps: [
              { reasoning: "Convert 20% to 0.2.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.2 by 500 to get 100.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "100",
            commonErrors: ["Reporting 0.2 instead of 100."],
          },
        },
        {
          id: "asoc-u2-ci-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A study of subcultural groups divides 240 members equally among 4 groups. How many members are in each group?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal groups",
                statement: "240 / 4 = 60 per group.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total by number of groups.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "240 / 4 = 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Dividing by 3 or 5 instead of 4."],
          },
        },
        {
          id: "asoc-u2-ci-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The share of people identifying mainly with the mainstream culture fell from 70% to 55% among 400 respondents. By how many fewer respondents did it fall?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in respondents",
                statement: "70% of 400 = 280; 55% of 400 = 220; fall = 60.",
              },
            ],
            steps: [
              {
                reasoning: "280 respondents at 70%; 220 at 55%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Decrease = 280 - 220 = 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Answering 15 (percentage points) not respondents."],
          },
        },
        {
          id: "asoc-u2-ci-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 320 respondents, 45% identified strongly with an ethnic subculture. How many respondents is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 144 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "45% of 320 = 0.45 x 320 = 144.",
              },
            ],
            steps: [
              { reasoning: "Convert 45% to 0.45.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.45 by 320 to get 144.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "144",
            commonErrors: ["Using 45 instead of 0.45."],
          },
        },
        {
          id: "asoc-u2-ci-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How does social identity differ from personality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is purely genetic" },
              { id: "b", text: "It cannot change over time" },
              { id: "c", text: "It is identical to personality" },
              {
                id: "d",
                text: "It derives from group membership rather than individual traits",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity vs personality",
                statement: "Group-based vs individual traits.",
              },
            ],
            steps: [
              {
                reasoning: "Identity comes from groups.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** From group membership",
            commonErrors: ["Confusing with personality."],
          },
        },
        {
          id: "asoc-u2-ci-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes a counterculture different from a subculture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no distinct values" },
              { id: "b", text: "It exists within and accepts mainstream values" },
              {
                id: "c",
                text: "It opposes mainstream values rather than coexisting with them",
              },
              { id: "d", text: "It is always larger than the mainstream" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counter vs sub",
                statement: "Opposes vs coexists.",
              },
            ],
            steps: [
              {
                reasoning: "Counterculture opposes mainstream.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Opposes mainstream",
            commonErrors: ["Saying it coexists like a subculture."],
          },
        },
        {
          id: "asoc-u2-ci-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Culture and identity.",
          parts: [
            { label: "a", prompt: "Define culture.", marks: 1 },
            { label: "b", prompt: "Define material culture.", marks: 1 },
            { label: "c", prompt: "Explain social identity.", marks: 2 },
            { label: "d", prompt: "Contrast subculture and counterculture.", marks: 2 },
            {
              label: "e",
              prompt: "Suggest how a youth group could be both a subculture and develop countercultural elements.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Culture/identity",
                statement: "Definitions+identity+contrast+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Shared beliefs/values/practices.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Physical objects.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Self-concept from group membership.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Multiple/context-dependent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Subculture = within culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Counterculture = opposes mainstream.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Shares some mainstream values.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Develops own norms/values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "May oppose mainstream on some issues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear justified answer.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) culture (b) material (c) identity (d) sub vs counter (e) applied example",
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
              { id: "a", text: "Criminal behaviour only" },
              { id: "b", text: "Behaviour violating social norms" },
              { id: "c", text: "Economic inequality" },
              { id: "d", text: "Mental illness" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Violates social norms",
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
        {
          id: "asoc-u2-dv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deviance is behaviour that violates...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religious rules only" },
              { id: "b", text: "Economic rules" },
              { id: "c", text: "Laws only" },
              { id: "d", text: "Social norms" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Social norms",
            commonErrors: ["Saying laws only."],
          },
        },
        {
          id: "asoc-u2-dv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'secondary deviance'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Minor rule-breaking" },
              { id: "b", text: "Deviance in secondary school" },
              {
                id: "c",
                text: "Deviance that results from acting out a deviant label",
              },
              { id: "d", text: "First offence committed by a juvenile" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary deviance",
                statement: "Acting out the deviant label.",
              },
            ],
            steps: [
              {
                reasoning: "Label → behaviour → more deviance.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Acting out the label",
            commonErrors: ["Confusing with primary deviance."],
          },
        },
        {
          id: "asoc-u2-dv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is Merton's strain theory of deviance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deviance is always beneficial" },
              { id: "b", text: "Deviance is genetically inherited" },
              { id: "c", text: "Deviance is created only by labels" },
              {
                id: "d",
                text: "Deviance results when cultural goals cannot be reached through legitimate means",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strain theory",
                statement: "Blocked legitimate means → deviance.",
              },
            ],
            steps: [
              {
                reasoning: "Goal-means gap produces strain.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Blocked legitimate means",
            commonErrors: ["Confusing with labelling theory."],
          },
        },
        {
          id: "asoc-u2-dv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of informal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Arrest by police" },
              { id: "b", text: "Gossip and disapproval from peers" },
              { id: "c", text: "Court sentencing" },
              { id: "d", text: "Imprisonment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal control",
                statement: "Unofficial sanctions like gossip.",
              },
            ],
            steps: [
              {
                reasoning: "Informal = unofficial sanctions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Gossip and disapproval",
            commonErrors: ["Naming a formal sanction."],
          },
        },
        {
          id: "asoc-u2-dv-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An observer records 400 acts of behaviour, of which 15% are judged deviant. How many acts is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "15% of 400 = 0.15 x 400 = 60.",
              },
            ],
            steps: [
              { reasoning: "Convert 15% to 0.15.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.15 by 400 to get 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Using 15 instead of 0.15."],
          },
        },
        {
          id: "asoc-u2-dv-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a study of 250 individuals labelled 'deviant', 30% went on to commit secondary deviance. How many individuals is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 75 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "30% of 250 = 0.3 x 250 = 75.",
              },
            ],
            steps: [
              { reasoning: "Convert 30% to 0.3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.3 by 250 to get 75.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "75",
            commonErrors: ["Reporting 0.3 instead of 75."],
          },
        },
        {
          id: "asoc-u2-dv-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 500 people, 60% reported experiencing informal social control. How many people is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 300 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "60% of 500 = 0.6 x 500 = 300.",
              },
            ],
            steps: [
              { reasoning: "Convert 60% to 0.6.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.6 by 500 to get 300.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "300",
            commonErrors: ["Using 60 instead of 0.6."],
          },
        },
        {
          id: "asoc-u2-dv-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The recorded deviance rate rose from 10% to 18% among 500 observed individuals. By how many more individuals did it rise?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in individuals",
                statement: "18% of 500 = 90; 10% of 500 = 50; rise = 40.",
              },
            ],
            steps: [
              {
                reasoning: "90 individuals at 18%; 50 at 10%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increase = 90 - 50 = 40.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Answering 8 (percentage points) not individuals."],
          },
        },
        {
          id: "asoc-u2-dv-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 160 respondents, 25% said being labelled had changed their behaviour. How many respondents is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "25% of 160 = 0.25 x 160 = 40.",
              },
            ],
            steps: [
              { reasoning: "Convert 25% to 0.25.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.25 by 160 to get 40.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Reporting 0.25 instead of 40."],
          },
        },
        {
          id: "asoc-u2-dv-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is deviance described as 'relative'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always criminal" },
              { id: "b", text: "It never changes over time" },
              {
                id: "c",
                text: "What counts as deviant varies between cultures and contexts",
              },
              { id: "d", text: "It is the same in every culture" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviance relative",
                statement: "Norms vary by culture/context.",
              },
            ],
            steps: [
              {
                reasoning: "Norms differ across settings.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Varies by culture/context",
            commonErrors: ["Claiming deviance is universal."],
          },
        },
        {
          id: "asoc-u2-dv-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does the functionalist view treat deviance?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "As normal and necessary — it clarifies boundaries, builds solidarity and can bring change",
              },
              { id: "b", text: "As purely a product of labels" },
              { id: "c", text: "As unrelated to society" },
              { id: "d", text: "As always harmful and to be eliminated" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist deviance",
                statement: "Deviance is functional for society.",
              },
            ],
            steps: [
              {
                reasoning: "Durkheim: deviance necessary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Necessary for society",
            commonErrors: ["Confusing with labelling view."],
          },
        },
        {
          id: "asoc-u2-dv-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Deviance and social control.",
          parts: [
            { label: "a", prompt: "Define deviance.", marks: 1 },
            { label: "b", prompt: "Explain the functionalist view of deviance.", marks: 2 },
            {
              label: "c",
              prompt: "Explain what is meant by secondary deviance.",
              marks: 2,
            },
            { label: "d", prompt: "Explain Merton's strain theory.", marks: 2 },
            {
              label: "e",
              prompt: "Suggest how informal and formal social control work together.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviance",
                statement: "Definition+functionalist+secondary+strain+control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Violates social norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Necessary — boundaries/solidarity/change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Durkheim's view explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Acting out the deviant label.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Goals blocked by legitimate means.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Strain produces deviance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Informal + formal mechanisms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Together enforce conformity.",
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
              "(a) deviance (b) functionalist (c) secondary (d) strain (e) social control",
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
