import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "asoc-u1-lesson-1-1",
  code: "1-1",
  title: "The Sociological Imagination and Theory",
  goal: "I CAN explain the sociological imagination and evaluate major sociological theories.",
  standards: ["9699: The sociological perspective"],
  vocabulary: [
    {
      term: "Sociological imagination",
      definition:
        "Seeing personal troubles as public issues — linking biography to history and social structure.",
    },
    {
      term: "Social structure",
      definition: "Patterned relationships and institutions shaping behaviour.",
    },
    {
      term: "Functionalism",
      definition:
        "Theory viewing society as integrated system of interdependent parts working toward consensus.",
    },
    {
      term: "Marxism",
      definition:
        "Theory viewing society shaped by class conflict over economic resources.",
    },
    {
      term: "Feminism",
      definition: "Theory focusing on gender inequality and patriarchy.",
    },
    {
      term: "Interactionism",
      definition:
        "Theory focusing on how individuals create meaning through everyday interactions.",
    },
  ],
  concepts: [
    {
      id: "asoc-u1-soc-imagination",
      title: "Sociology and the sociological imagination",
      skill:
        "Explain what sociology studies and how the sociological imagination works.",
      lesson: {
        sections: [
          {
            heading: "What is sociology?",
            body: "Sociology is the systematic, scientific study of human society, social relationships and institutions. It examines patterns of behaviour rather than individual psychology alone — asking why societies differ and how social forces shape us.",
          },
          {
            heading: "Sociological imagination",
            body: "C. Wright Mills' concept: connect 'personal troubles' (e.g. unemployment) to 'public issues' (e.g. economic structure). The sociologist asks not just 'why did this person lose their job?' but 'what social forces cause unemployment?'",
          },
          {
            heading: "Sociology vs common sense",
            body: "Common sense relies on assumption and anecdote; sociology uses evidence, theory and systematic methods. Common sense can be wrong — e.g. assuming crime is rising when statistics show it falling.",
          },
        ],
        keyFormulas: [
          {
            name: "Sociological imagination",
            statement: "Personal troubles ↔ public issues",
          },
        ],
        workedExample: {
          problem:
            "A student fails an exam. Apply the sociological imagination.",
          solution:
            "Beyond 'the student didn't revise', consider: school funding, family background, exam pressure culture, educational inequality.",
        },
      },
      questions: [
        {
          id: "asoc-u1-si-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is sociology?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The study of history" },
              {
                id: "b",
                text: "The systematic study of human society and social relationships",
              },
              { id: "c", text: "The study of individual psychology" },
              { id: "d", text: "The study of economics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sociology",
                statement: "Systematic study of society.",
              },
            ],
            steps: [
              {
                reasoning: "Sociology studies society, not individuals.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Systematic study of society",
            commonErrors: ["Confusing with psychology."],
          },
        },
        {
          id: "asoc-u1-si-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the sociological imagination?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sociological imagination",
                statement: "Link personal troubles to public issues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Connects individual experience to social structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Personal troubles vs public issues.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Linking personal troubles to public issues.",
            commonErrors: ["Defining as personal reflection only."],
          },
        },
        {
          id: "asoc-u1-si-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sociology differs from common sense.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociology vs common sense",
                statement: "Evidence-based vs assumption-based.",
              },
            ],
            steps: [
              {
                reasoning: "Sociology uses systematic methods and evidence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Common sense relies on assumption/anecdote.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sociology can challenge common sense.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Sociology is evidence-based; common sense is assumption-based.",
            commonErrors: ["Saying they're the same."],
          },
        },
        {
          id: "asoc-u1-si-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The sociological perspective.",
          parts: [
            { label: "a", prompt: "Define sociology.", marks: 1 },
            {
              label: "b",
              prompt: "Define sociological imagination.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does sociology differ from common sense?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Apply sociological imagination to unemployment.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociological perspective",
                statement: "Definition+imagination+comparison+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Systematic study of society.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Links personal to public.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Troubles vs issues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Evidence vs assumption.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Systematic methods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Can challenge common sense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Personal experience linked.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Social forces identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Clear application.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) study of society (b) troubles↔issues (c) evidence vs assumption (d) unemployment example",
          },
        },
        {
          id: "asoc-u1-si-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who coined the term 'sociological imagination'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Émile Durkheim" },
              { id: "b", text: "Max Weber" },
              { id: "c", text: "C. Wright Mills" },
              { id: "d", text: "Karl Marx" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sociological imagination",
                statement: "C. Wright Mills' concept.",
              },
            ],
            steps: [
              {
                reasoning: "Mills coined the term.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** C. Wright Mills",
            commonErrors: ["Confusing with other theorists."],
          },
        },
        {
          id: "asoc-u1-si-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best example of a 'public issue'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An individual choosing to smoke" },
              {
                id: "b",
                text: "An economic recession causing mass unemployment",
              },
              { id: "c", text: "A student failing a single exam" },
              { id: "d", text: "One person losing their job" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Public issue",
                statement: "Large-scale social problem affecting many.",
              },
            ],
            steps: [
              {
                reasoning: "Public issues are structural and widespread.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Economic recession causing mass unemployment",
            commonErrors: ["Choosing an individual trouble."],
          },
        },
        {
          id: "asoc-u1-si-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 250 sociology students, 40% said they first encountered sociology before age 18. How many students is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "40% of 250 = 0.4 x 250.",
              },
            ],
            steps: [
              {
                reasoning: "Convert percentage to decimal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply by sample size.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "100",
            commonErrors: ["Calculating 40% of a wrong total."],
          },
        },
        {
          id: "asoc-u1-si-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways in which sociology differs from common sense.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociology vs common sense",
                statement: "Evidence-based vs assumption-based.",
              },
            ],
            steps: [
              {
                reasoning: "Uses systematic methods and evidence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Can challenge taken-for-granted beliefs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Systematic evidence vs assumption.",
            commonErrors: ["Repeating the same point twice."],
          },
        },
        {
          id: "asoc-u1-si-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Apply the sociological imagination to the problem of student debt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociological imagination",
                statement: "Personal troubles linked to public issues.",
              },
            ],
            steps: [
              {
                reasoning: "Personal trouble identified (individual debt).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Public issues linked (tuition policy, wages).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social forces named (economy, education system).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear application, not just definition.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Individual debt linked to tuition policy and economic structure.",
            commonErrors: ["Describing debt without social context."],
          },
        },
        {
          id: "asoc-u1-si-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the best example of applying the sociological imagination?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Linking rising homelessness to housing policy and economic change",
              },
              {
                id: "b",
                text: "Blaming poverty on individual laziness",
              },
              {
                id: "c",
                text: "Believing crime statistics prove morality is declining",
              },
              { id: "d", text: "Attributing exam failure solely to effort" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociological imagination",
                statement: "Troubles linked to public issues.",
              },
            ],
            steps: [
              {
                reasoning: "Only (b) links personal experience to structure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Linking homelessness to housing policy and economic change",
            commonErrors: ["Choosing an individual-blame answer."],
          },
        },
        {
          id: "asoc-u1-si-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A study finds that 60 out of 300 working-class respondents experienced unemployment, compared with 30 out of 300 middle-class respondents. (a) Calculate the unemployment rate for each group. (b) What does the difference suggest?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate calculation",
                statement: "(unemployed / total) x 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Working class: 60/300 x 100.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Middle class: 30/300 x 100.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Gap suggests class-linked structural disadvantage.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 20% and 10% (b) class-linked unemployment gap",
            commonErrors: ["Swapping the two percentages."],
          },
        },
        {
          id: "asoc-u1-si-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that sociology is 'just common sense with statistics'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociology vs common sense",
                statement: "Systematic vs taken-for-granted.",
              },
            ],
            steps: [
              {
                reasoning: "Common sense is assumption/anecdote-based.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sociology uses theory and systematic methods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sociology can show common sense is wrong.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balanced judgement on the claim.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Rejected — sociology is evidence-based and can challenge common sense.",
            commonErrors: ["Agreeing without evaluation."],
          },
        },
        {
          id: "asoc-u1-si-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does Mills mean by 'personal troubles'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large-scale social problems" },
              {
                id: "b",
                text: "Problems experienced by individuals that may reflect public issues",
              },
              { id: "c", text: "Personal hobbies and interests" },
              { id: "d", text: "Issues affecting entire nations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personal troubles",
                statement: "Individual problems with public roots.",
              },
            ],
            steps: [
              {
                reasoning: "Troubles are individual but socially rooted.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Individual problems with public roots",
            commonErrors: ["Confusing troubles with issues."],
          },
        },
        {
          id: "asoc-u1-si-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss how sociology can challenge common-sense assumptions about crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociology and crime",
                statement: "Evidence vs assumption about crime.",
              },
            ],
            steps: [
              {
                reasoning: "Common sense assumes crime = individual moral failure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sociology links crime to social structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: poverty, labelling, strain theory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Statistics may contradict common sense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Theories explain crime beyond individual blame.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear, developed discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Sociology links crime to social causes, challenging moral-blame assumptions.",
            commonErrors: ["Listing theories without application."],
          },
        },
        {
          id: "asoc-u1-si-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sociology lecture has 80 students; three-eighths are from working-class backgrounds. How many students is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction calculation",
                statement: "3/8 of 80 = 0.375 x 80.",
              },
            ],
            steps: [
              {
                reasoning: "Convert fraction to decimal or divide.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply by 80.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Using 3/8 of a wrong total."],
          },
        },
        {
          id: "asoc-u1-si-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The sociological perspective.",
          parts: [
            { label: "a", prompt: "Define sociology.", marks: 1 },
            {
              label: "b",
              prompt: "Define the sociological imagination.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Distinguish 'personal troubles' from 'public issues'.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain one way sociology differs from common sense.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Apply the sociological imagination to a named social issue.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociological perspective",
                statement: "Definitions+distinction+comparison+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Systematic study of society.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Links personal to public.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Mills' concept.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Troubles=individual; issues=structural.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear contrast drawn.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evidence vs assumption.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Can challenge common sense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Personal trouble identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Public issues linked.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear application.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) study of society (b) troubles-issues link (c) individual vs structural (d) evidence vs assumption (e) applied example",
          },
        },
      ],
    },
    {
      id: "asoc-u1-theories",
      title: "Major sociological theories",
      skill: "Compare functionalism, Marxism, feminism and interactionism.",
      lesson: {
        sections: [
          {
            heading: "Functionalism",
            body: "Society is an integrated system where parts (family, education, religion) work together for consensus and stability. Social change is gradual. Key thinkers: Durkheim, Parsons. Criticised for ignoring conflict and power.",
          },
          {
            heading: "Marxism",
            body: "Society is shaped by class conflict over economic resources. Capitalism exploits workers (proletariat) for profit of owners (bourgeoisie). Predicts revolution and classless society. Key thinker: Marx. Criticised for economic determinism.",
          },
          {
            heading: "Feminism and interactionism",
            body: "Feminism: society is patriarchal — men dominate institutions and women are oppressed. Interactionism: society is created through everyday interactions and shared meanings — focus on micro-level. Symbolic interactionism studies how people interpret symbols.",
          },
        ],
        keyFormulas: [
          {
            name: "Theories",
            statement:
              "Functionalism=consensus; Marxism=class conflict; Feminism=gender; Interactionism=micro.",
          },
        ],
        workedExample: {
          problem: "How would a Marxist explain educational inequality?",
          solution:
            "Education reproduces class inequality — middle-class values dominate curriculum, working-class students disadvantaged.",
        },
      },
      questions: [
        {
          id: "asoc-u1-th-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which theory views society as an integrated system working toward consensus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Feminism" },
              { id: "b", text: "Functionalism" },
              { id: "c", text: "Marxism" },
              { id: "d", text: "Interactionism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functionalism",
                statement: "Integrated system, consensus.",
              },
            ],
            steps: [
              {
                reasoning: "Functionalism = consensus.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Functionalism",
            commonErrors: ["Confusing with Marxism."],
          },
        },
        {
          id: "asoc-u1-th-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the central focus of Marxism?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marxism",
                statement: "Class conflict over economic resources.",
              },
            ],
            steps: [
              {
                reasoning: "Class conflict is central.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Economic resources/capitalism.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Class conflict over economic resources.",
            commonErrors: ["Saying it's about gender."],
          },
        },
        {
          id: "asoc-u1-th-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare functionalism and Marxism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalism vs Marxism",
                statement: "Consensus vs conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Functionalism: consensus, stability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Marxism: conflict, exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different views of social change.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Functionalism=consensus; Marxism=class conflict.",
            commonErrors: ["Only describing one theory."],
          },
        },
        {
          id: "asoc-u1-th-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Sociological theories.",
          parts: [
            { label: "a", prompt: "Define functionalism.", marks: 1 },
            { label: "b", prompt: "Define Marxism.", marks: 2 },
            { label: "c", prompt: "Define feminism.", marks: 1 },
            { label: "d", prompt: "Define interactionism.", marks: 1 },
            {
              label: "e",
              prompt: "Compare functionalism and Marxism on social change.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theories",
                statement: "Definitions+comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Integrated system/consensus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Class conflict.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Economic exploitation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Gender inequality/patriarchy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Micro-level interactions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Functionalism: gradual change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Marxism: revolutionary change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Different views.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Evidence/examples.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear comparison.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) consensus (b) conflict (c) patriarchy (d) micro (e) gradual vs revolutionary",
          },
        },
        {
          id: "asoc-u1-th-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which theory focuses on gender inequality and patriarchy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interactionism" },
              { id: "b", text: "Functionalism" },
              { id: "c", text: "Feminism" },
              { id: "d", text: "Marxism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feminism",
                statement: "Gender inequality and patriarchy.",
              },
            ],
            steps: [
              {
                reasoning: "Feminism focuses on gender/patriarchy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Feminism",
            commonErrors: ["Confusing with Marxism."],
          },
        },
        {
          id: "asoc-u1-th-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which theory focuses on how individuals create meaning through everyday interactions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marxism" },
              { id: "b", text: "Functionalism" },
              { id: "c", text: "Interactionism" },
              { id: "d", text: "Feminism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interactionism",
                statement: "Meaning created through interactions.",
              },
            ],
            steps: [
              {
                reasoning: "Interactionism = micro-level meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Interactionism",
            commonErrors: ["Confusing with macro theories."],
          },
        },
        {
          id: "asoc-u1-th-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define Marxism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marxism",
                statement: "Class conflict over economic resources.",
              },
            ],
            steps: [
              {
                reasoning: "Society shaped by class conflict.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Economic resources/capitalism central.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Society shaped by class conflict over economic resources.",
            commonErrors: ["Defining as gender-focused."],
          },
        },
        {
          id: "asoc-u1-th-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one criticism of functionalism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalism criticism",
                statement: "Ignores conflict and power.",
              },
            ],
            steps: [
              {
                reasoning: "Ignores conflict/exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Downplays inequality/power.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Functionalism ignores conflict and power.",
            commonErrors: ["Criticising Marxism instead."],
          },
        },
        {
          id: "asoc-u1-th-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 200 students, 25% chose functionalism as their favourite theory. How many students is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "25% of 200 = 0.25 x 200.",
              },
            ],
            steps: [
              {
                reasoning: "Convert percentage to decimal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply by sample size.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "50",
            commonErrors: ["Calculating 25% of a wrong total."],
          },
        },
        {
          id: "asoc-u1-th-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare feminism and interactionism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feminism vs interactionism",
                statement: "Gender/patriarchy vs micro-level meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Feminism: patriarchy, gender inequality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Interactionism: everyday interactions, meanings.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Macro vs micro focus.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Feminism=gender/patriarchy; interactionism=micro-level meaning.",
            commonErrors: ["Only describing one theory."],
          },
        },
        {
          id: "asoc-u1-th-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which view would a Marxist most likely support?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Meaning is created in everyday interactions",
              },
              { id: "b", text: "Class conflict shapes society" },
              { id: "c", text: "Society is based on consensus" },
              { id: "d", text: "Gender determines all behaviour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist view",
                statement: "Class conflict central.",
              },
            ],
            steps: [
              {
                reasoning: "Marxism emphasises class conflict.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Class conflict shapes society",
            commonErrors: ["Choosing a consensus view."],
          },
        },
        {
          id: "asoc-u1-th-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the strongest criticism of functionalism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too focused on economics" },
              { id: "b", text: "It rejects all social structure" },
              { id: "c", text: "It ignores conflict and power" },
              { id: "d", text: "It focuses too much on individuals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalism criticism",
                statement: "Consensus view ignores conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Functionalism downplays conflict/power.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** It ignores conflict and power",
            commonErrors: ["Choosing a criticism of Marxism."],
          },
        },
        {
          id: "asoc-u1-th-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A researcher classifies 400 respondents: 240 support functionalist views and 160 support Marxist views. (a) What percentage support Marxist views? (b) By how many percentage points do functionalist views exceed Marxist views?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage calculation",
                statement: "160/400 x 100 = 40%; 60% - 40% = 20 points.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Marxist: 160/400 x 100.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Functionalist 60% minus 40%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 40% (b) 20 percentage points",
            commonErrors: ["Subtracting raw counts instead of percentages."],
          },
        },
        {
          id: "asoc-u1-th-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss how functionalism and Marxism would explain crime differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theories and crime",
                statement: "Consensus vs conflict explanations of crime.",
              },
            ],
            steps: [
              {
                reasoning: "Functionalist: crime as dysfunction/deviance from shared norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Marxist: crime linked to class inequality/exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Functionalist may see crime as inevitable/social control failure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Marxist sees crime as response to capitalist structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear theoretical contrast drawn.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Developed, coherent discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Functionalists see crime as deviance from consensus; Marxists link it to class inequality.",
            commonErrors: ["Describing crime without theory."],
          },
        },
        {
          id: "asoc-u1-th-q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Sociological theories.",
          parts: [
            { label: "a", prompt: "Define interactionism.", marks: 1 },
            { label: "b", prompt: "Define feminism.", marks: 1 },
            {
              label: "c",
              prompt: "Compare functionalism and Marxism in their view of society.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain one criticism of Marxism.",
              marks: 3,
            },
            {
              label: "e",
              prompt: "Apply one theory to a named social issue.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theories",
                statement: "Definitions+comparison+criticism+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Micro-level meaning/interaction.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Patriarchy/gender inequality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Consensus vs conflict view.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear contrast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Economic determinism criticised.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Ignores non-economic factors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Developed point.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "e",
                reasoning: "Theory applied to issue.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Logical link explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear application.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) micro meaning (b) patriarchy (c) consensus vs conflict (d) economic determinism (e) applied example",
          },
        },
        {
          id: "asoc-u1-th-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a class of 60 students, two-fifths chose interactionism as their favourite theory. How many students is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction calculation",
                statement: "2/5 of 60 = 0.4 x 60.",
              },
            ],
            steps: [
              {
                reasoning: "Convert fraction to decimal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply by class size.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "24",
            commonErrors: ["Using the wrong fraction."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u1-1-1-notes",
      title: "Sociological perspective — notes",
      summary:
        "Sociology studies society; sociological imagination links personal to public; theories explain society differently.",
      sections: [
        {
          heading: "Sociological imagination",
          body: "Personal troubles ↔ public issues — link individual experience to social structure.",
        },
        {
          heading: "Theories",
          body: "Functionalism=consensus; Marxism=class conflict; Feminism=gender; Interactionism=micro-level.",
        },
      ],
    },
  ],
};
