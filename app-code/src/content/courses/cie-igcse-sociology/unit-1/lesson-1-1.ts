import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cieisoc-u1-lesson-1-1",
  code: "1-1",
  title: "What is sociology?",
  goal: "I CAN explain what sociology studies and describe the sociological imagination.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 1: Sociology and sociological methods",
  ],
  vocabulary: [
    {
      term: "Sociology",
      definition:
        "The systematic study of human society, social relationships and social institutions.",
    },
    {
      term: "Social institution",
      definition:
        "An organised pattern of beliefs and behaviours meeting a basic social need — family, education, religion, economy.",
    },
    {
      term: "Sociological imagination",
      definition:
        "Seeing personal problems as reflections of wider public issues (C. Wright Mills).",
    },
    {
      term: "Social structure",
      definition:
        "The organised patterns of relationships that shape individual behaviour.",
    },
    {
      term: "Socialisation",
      definition:
        "The lifelong process of learning the norms and values of one's society.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u1-what",
      title: "The sociological perspective",
      skill:
        "Explain sociology's subject matter and the sociological imagination.",
      lesson: {
        sections: [
          {
            heading: "What sociology studies",
            body: "Sociology examines society at the **macro** level — institutions, classes, cultures — and the **micro** level — everyday interactions. It asks why societies are organised as they are, how social forces shape individual behaviour, and how social change happens. Unlike psychology (which focuses on the individual mind), sociology looks at patterns across groups.",
          },
          {
            heading: "The sociological imagination",
            body: "C. Wright Mills argued that personal troubles (unemployment, divorce) are often connected to public issues (economic recession, changing gender roles). The **sociological imagination** means seeing 'private' problems as socially produced — asking not just 'why did this person fail?' but 'what social structures produce this outcome?'",
          },
          {
            heading: "Sociology vs common sense",
            body: "Sociology tests assumptions with evidence. Common sense says 'birds of a feather flock together' — sociology investigates WHY people with similar backgrounds form bonds, using systematic research rather than anecdote.",
          },
        ],
        keyFormulas: [
          {
            name: "Macro vs micro",
            statement: "Institutions & structures ↔ everyday interactions",
          },
          {
            name: "Imagination test",
            statement: "Personal trouble → public issue → social structure",
          },
        ],
        workedExample: {
          problem:
            "A student fails an exam. Give a psychological and a sociological explanation.",
          solution:
            "Psychological: low motivation or poor study skills. Sociological: underfunded school, lack of private tutoring, pressure from part-time work — social structures shaping the outcome.",
        },
      },
      questions: [
        {
          id: "cieisoc-u1-what-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sociology is best defined as the study of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Human society and social relationships" },
              { id: "b", text: "Individual mental processes" },
              { id: "c", text: "Biological evolution" },
              { id: "d", text: "Political manifestos" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sociology",
                statement:
                  "Systematic study of human society and social relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sociology studies society — institutions, groups and relationships — not the individual mind (psychology) or biology.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Human society and social relationships.",
            commonErrors: ["Confusing sociology with psychology."],
          },
        },
        {
          id: "cieisoc-u1-what-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what C. Wright Mills meant by the 'sociological imagination'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sociological imagination",
                statement:
                  "Linking personal troubles to public issues and social structures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It means seeing individual problems (unemployment, divorce) as connected to wider social forces.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: unemployment is not just personal failure — it reflects economic structure and labour market conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It shifts analysis from 'what is wrong with this person?' to 'what social arrangements produce this outcome?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Seeing personal troubles as expressions of public issues shaped by social structure.",
            commonErrors: [
              "Describing it as 'imagining being someone else' — it is about social analysis, not empathy.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between the macro and micro levels of sociological analysis, with one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Levels of analysis",
                statement:
                  "Macro = large-scale structures; micro = everyday interaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Macro level: studies large-scale structures — class systems, institutions like education or religion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: how the class system affects life chances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Micro level: studies everyday face-to-face interaction — conversations, classroom behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Macro = institutions and structures (e.g. class); micro = everyday interactions (e.g. classroom talk).",
            commonErrors: ["Reversing the levels or giving no examples."],
          },
        },
        {
          id: "cieisoc-u1-what-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine why sociology is described as a 'science of society' rather than just common sense.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two ways sociology differs from common-sense explanations.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate whether sociology can ever be truly objective.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sociology vs common sense",
                statement:
                  "Systematic evidence and theory-testing vs anecdote and assumption.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Common sense relies on anecdote and tradition; sociology tests claims with systematic evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Sociology develops theories (e.g. functionalism, Marxism) that explain patterns, not just describe them.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It often challenges common sense — e.g. showing crime may be socially constructed, not just individual deviance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For: sociology uses replicable methods, peer review and empirical data like other sciences.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Against: researchers' values inevitably shape topic choice and interpretation; complete objectivity is impossible.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: sociology is scientific in method but interpretive in nature — 'science' in a broader sense.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Evidence-based, theoretical, challenges assumptions. (b) Scientific methods but values shape interpretation.",
            commonErrors: [
              "Claiming sociology is 'just opinions' without acknowledging its systematic methods.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a micro-level sociological question?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Why do crime rates differ between social classes?",
              },
              {
                id: "b",
                text: "Why is religion more influential in some societies than others?",
              },
              {
                id: "c",
                text: "How do individuals interpret gestures in everyday conversation?",
              },
              { id: "d", text: "How is the education system organised?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Micro level",
                statement:
                  "Study of everyday face-to-face interaction between individuals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Micro-level questions concern face-to-face interaction; crime rates by class, education systems and religion are macro-level topics.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) How do individuals interpret gestures in everyday conversation.",
            commonErrors: [
              "Choosing a question about institutions or class — those are macro-level.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Using an example, explain how the sociological imagination connects a personal trouble to a public issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sociological imagination",
                statement:
                  "Seeing personal troubles as expressions of wider public issues and social structures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify a personal trouble, e.g. an individual losing their job or a marriage breaking down.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Link it to a public issue — economic recession, labour market change, shifting gender roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclude that the 'private' problem is produced by wider social structures, not just individual failure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. unemployment is a personal trouble produced by economic structures and labour-market conditions.",
            commonErrors: [
              "Giving a personal example without connecting it to a wider social structure.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between sociology and psychology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Sociology vs psychology",
                statement:
                  "Sociology studies society and social patterns; psychology studies the individual mind.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sociology studies society — institutions, groups, classes and relationships between them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Psychology studies the individual mind — thoughts, emotions, behaviour of a single person.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consequence: sociology asks why groups differ (e.g. class and crime), psychology asks why a person acts as they do.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sociology studies social patterns across society; psychology studies individual mental processes.",
            commonErrors: [
              "Treating the two subjects as identical or saying psychology studies 'society'.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by 'social structure' and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social structure",
                statement:
                  "The organised patterns of relationships and institutions that shape individual behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social structure = the persistent patterns of relationships — institutions, classes, norms — that exist beyond any one individual.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: the class system, the education system, or the family as an institution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These structures constrain and enable what individuals can do — e.g. class shapes life chances.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The organised patterns of social relationships that shape behaviour — e.g. the class system.",
            commonErrors: [
              "Defining structure as 'buildings' or 'physical things' rather than social patterns.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The term 'sociological imagination' was coined by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Émile Durkheim" },
              { id: "b", text: "C. Wright Mills" },
              { id: "c", text: "Max Weber" },
              { id: "d", text: "Karl Marx" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sociological imagination",
                statement:
                  "C. Wright Mills' concept linking personal troubles to public issues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C. Wright Mills coined 'sociological imagination' in The Sociological Imagination (1959).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) C. Wright Mills.",
            commonErrors: [
              "Confusing Mills with other founding sociologists such as Durkheim or Marx.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why sociology is considered a social science.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociology as a science",
                statement:
                  "Sociology studies human society systematically, using evidence and theory like other sciences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It is a 'social' science because its subject matter is human society rather than the physical or biological world.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Like other sciences it uses systematic methods, empirical evidence and testable theories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike natural sciences it studies humans who interpret meanings — so it is scientific but interpretive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sociology is a social science: it studies society systematically with evidence and theory, though its subject matter is human meaning.",
            commonErrors: [
              "Claiming sociology is not a science at all, or that it is identical to physics.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what sociology studies that subjects such as history or psychology do not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Sociology's focus",
                statement:
                  "Sociology studies present social patterns, institutions and relationships between groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "History studies the past; sociology studies how society is organised in the present (and how it changes).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Psychology studies the individual mind; sociology studies patterns across groups — class, institutions, culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sociology uniquely links individual behaviour to wider social structures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sociology studies present-day social patterns, institutions and group relationships — not just past events or individual minds.",
            commonErrors: [
              "Saying sociology studies 'everything' without identifying its distinctive focus.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how sociology examines both large-scale structures and everyday life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Macro and micro",
                statement:
                  "Macro = institutions and structures; micro = everyday interaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At the macro level sociology studies large-scale structures — class systems, institutions like education and religion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At the micro level it studies everyday face-to-face interaction — conversations, classroom behaviour, family routines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combining both shows how large structures shape daily behaviour — e.g. class affects classroom interaction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sociology studies macro structures (class, institutions) and micro interactions (everyday behaviour), showing how they connect.",
            commonErrors: [
              "Describing only one level of analysis.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the claim that sociology is simply 'common sense' with a scientific label.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two ways in which sociology goes beyond common-sense explanations.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate whether sociology's claims can be tested like those of the natural sciences.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sociology vs common sense",
                statement:
                  "Systematic evidence and theory-testing vs anecdote and assumption.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sociology tests claims with systematic evidence — surveys, observations — rather than anecdote.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It builds and tests theories (e.g. functionalism, Marxism) that explain patterns, not just describe them.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It often challenges common sense — e.g. showing crime may be socially constructed rather than simply individual deviance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For: sociological claims can be tested with replicable methods and empirical data, like other sciences.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Against: human behaviour is influenced by meanings and values, so findings are less certain than in physics or chemistry.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: sociology is more systematic than common sense but less certain than the natural sciences — a social science in its own right.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Evidence-based, theoretical, challenges assumptions. (b) Testable like science but less certain due to human meaning.",
            commonErrors: [
              "Agreeing or disagreeing absolutely without weighing evidence on both sides.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the macro and micro approaches to sociological study.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the macro approach to studying society, with an example.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate when a micro approach might be more useful than a macro approach.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Macro vs micro",
                statement:
                  "Macro studies large-scale structures; micro studies everyday interaction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Macro approach studies large-scale structures — class systems, institutions like education, religion, the economy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It looks for patterns affecting whole populations — e.g. how class predicts educational attainment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Example: studying how the class system shapes life chances across society.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Micro is more useful for understanding how individuals interpret and negotiate everyday situations — e.g. classroom interaction.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "It reveals meanings and agency that macro statistics can miss.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: macro explains broad patterns, micro explains lived experience — the best sociology often combines both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Macro studies institutions and class patterns. (b) Micro is better for meanings and interaction; combining both is strongest.",
            commonErrors: [
              "Treating the two approaches as rivals rather than complementary.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the statement 'Sociology explains society, not individuals.'",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what sociologists mean by social patterns and structures.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate whether individual choices matter in sociological explanation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure and agency",
                statement:
                  "Sociology studies both social patterns and the individuals who act within them.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Social patterns = regularities across groups — e.g. crime rates differing by class or gender.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Social structures = institutions and relationships that shape behaviour — family, education, economy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Sociology explains why patterns exist rather than why one person did something.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Individuals do matter — agency means people make choices within structural constraints.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "But those choices are shaped by socialisation, class and institutions — so individuals cannot be understood apart from society.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: sociology explains society through patterns and structures, while still recognising individuals act within them.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Patterns and structures explain group outcomes. (b) Individual choices matter but are socially constrained — both are needed.",
            commonErrors: [
              "Claiming sociology ignores individuals entirely.",
            ],
          },
        },
        {
          id: "cieisoc-u1-what-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of public issues that shape private lives, and explain the link in each case.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personal troubles, public issues",
                statement:
                  "Private experiences are often produced by wider social forces.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example 1: unemployment — linked to economic recession and labour-market structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example 2: educational underachievement — linked to school funding, class background and cultural capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In both cases the 'private' problem reflects public structures — the core of the sociological imagination.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. unemployment (economic structure) and underachievement (class and schooling) — private troubles produced by public issues.",
            commonErrors: [
              "Listing personal troubles without linking them to wider social forces.",
            ],
          },
        },
      ],
    },
  ],
};
