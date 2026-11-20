module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson821",
    lesson: {
      id: "ciealsoc-u2-lesson-2-1", code: "2-1",
      title: "Family Diversity and Theoretical Perspectives",
      goal: "I CAN explain family diversity and compare sociological perspectives.",
      standards: ["Cambridge A Level Sociology 9696", "Paper 2: families"],
      vocabulary: [
        { term: "Functionalism", definition: "Society as integrated system; family maintains stability." },
        { term: "Marxism", definition: "Capitalism shapes family to serve economic system." },
        { term: "Feminism", definition: "Family as site of patriarchy and women's oppression." },
        { term: "Postmodernism", definition: "Family diversity reflects individual choice." },
        { term: "New Right", definition: "Traditional nuclear family as moral foundation." },
        { term: "Symmetrical family", definition: "Family where roles are shared equally." },
      ],
      concept: {
        id: "ciealsoc-u2-s1-persp", title: "Family perspectives",
        skill: "Compare sociological views on family.",
        sections: [
          { heading: "Functionalism", body: "Murdock: universal functions — reproduction, socialisation, economic cooperation, sexual regulation. Parsons: nuclear family 'fits' industrial society. Critique: ignores dysfunction, diversity." },
          { heading: "Marxism & feminism", body: "Marxist: family reproduces labour power, maintains capitalism. Feminist: family perpetuates patriarchy — unpaid domestic labour, male dominance. Liberal: reform possible; radical: patriarchy systemic." },
          { heading: "Postmodern & New Right", body: "Postmodern: family diversity = individualisation, choice. New Right: traditional nuclear family prevents social problems — criticises lone parents, cohabitation." },
        ],
        keyFormulas: [
          { name: "Functionalism", statement: "family maintains stability" },
          { name: "Feminism", statement: "patriarchy" },
          { name: "Postmodern", statement: "individual choice" },
        ],
        workedExample: {
          problem: "Compare functionalist vs feminist view of family.",
          solution: "Functionalist: family benefits society. Feminist: family oppresses women through patriarchy.",
        },
        questions: [
          {
            id: "ciealsoc-u2-pers-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the functionalist view of family?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Family maintains social stability" }, { id: "b", text: "Family oppresses women" }, { id: "c", text: "Family serves capitalism" }, { id: "d", text: "Family reflects choice" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Functionalism", statement: "Stability." }],
              steps: [{ reasoning: "Functionalism = family maintains stability.", marks: 1, markCode: "M" }],
              finalAnswer: "Social stability",
            },
          },
          {
            id: "ciealsoc-u2-pers-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the feminist view of family?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Feminism", statement: "Patriarchy." }],
              steps: [
                { reasoning: "Family as site of patriarchy.", marks: 1, markCode: "M" },
                { reasoning: "Women exploited through unpaid domestic labour.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Patriarchy site",
            },
          },
          {
            id: "ciealsoc-u2-pers-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the New Right view of family?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "New Right", statement: "Traditional family." }],
              steps: [
                { reasoning: "Traditional nuclear family as moral foundation.", marks: 1, markCode: "M" },
                { reasoning: "Criticises lone parents, cohabitation, divorce.", marks: 1, markCode: "M" },
                { reasoning: "Links family breakdown to social problems.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Traditional nuclear family",
            },
          },
          {
            id: "ciealsoc-u2-pers-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define functionalism, Marxism, feminism, postmodernism, New Right, symmetrical family. (b) What is functionalism? (c) What is feminism? (d) What is postmodernism? (e) What is New Right? (f) What is symmetrical family? (g) How does Marxism view family? (h) Compare functionalist vs feminist perspectives.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Perspectives", statement: "Comparison." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Stability.", marks: 1, markCode: "M" },
                { reasoning: "(c) Patriarchy.", marks: 1, markCode: "M" },
                { reasoning: "(d) Individual choice.", marks: 1, markCode: "M" },
                { reasoning: "(e) Traditional family.", marks: 1, markCode: "M" },
                { reasoning: "(f) Shared roles.", marks: 1, markCode: "M" },
                { reasoning: "(g) Labour reproduction.", marks: 1, markCode: "M" },
                { reasoning: "(h) Stability vs oppression.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Family perspectives comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealsoc-u2-pers-notes", title: "Family perspectives — notes",
      summary: "Functionalist=stability; feminist=patriarchy; postmodern=choice.",
      sections: [
        { heading: "Key idea", body: "Different theories see family as beneficial, oppressive, or chosen." },
        { heading: "Symmetrical", body: "Claim that roles are now shared equally — debated." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson822",
    lesson: {
      id: "ciealsoc-u2-lesson-2-2", code: "2-2",
      title: "Education: Functions and Inequality",
      goal: "I CAN explain education's functions and social inequality.",
      standards: ["Cambridge A Level Sociology 9696", "Paper 2: education"],
      vocabulary: [
        { term: "Hidden curriculum", definition: "Unwritten rules and values taught in school." },
        { term: "Cultural capital", definition: "Knowledge, skills, attitudes valued by society." },
        { term: "Streaming", definition: "Grouping students by ability." },
        { term: "Meritocracy", definition: "System where success based on ability/effort." },
        { term: "Social reproduction", definition: "Education reproduces existing inequalities." },
        { term: "Labelling theory", definition: "Teachers' labels affect student achievement." },
      ],
      concept: {
        id: "ciealsoc-u2-s2-educ", title: "Education",
        skill: "Explain education functions and inequality.",
        sections: [
          { heading: "Functions", body: "Functionalist: education socialises, allocates roles, creates meritocracy. Hidden curriculum teaches punctuality, obedience, competition." },
          { heading: "Inequality", body: "Marxist: education reproduces class — middle-class cultural capital valued. Labelling: teachers label working-class students negatively → self-fulfilling prophecy. Streaming disadvantages lower sets." },
          { heading: "Changes", body: "Comprehensive schools replace grammar schools. Marketisation: league tables, parental choice. Debates over selection and inequality." },
        ],
        keyFormulas: [
          { name: "Hidden curriculum", statement: "unwritten rules" },
          { name: "Cultural capital", statement: "valued knowledge" },
          { name: "Labelling", statement: "self-fulfilling" },
        ],
        workedExample: {
          problem: "Why do working-class students underachieve?",
          solution: "Cultural capital mismatch + teacher labelling + material deprivation + hidden curriculum favouring middle-class values.",
        },
        questions: [
          {
            id: "ciealsoc-u2-edu-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the hidden curriculum?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Unwritten rules taught in school" }, { id: "b", text: "Official syllabus" }, { id: "c", text: "A type of exam" }, { id: "d", text: "A school policy" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Hidden curriculum", statement: "Unwritten rules." }],
              steps: [{ reasoning: "Hidden curriculum = unwritten rules.", marks: 1, markCode: "M" }],
              finalAnswer: "Unwritten rules",
            },
          },
          {
            id: "ciealsoc-u2-edu-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is cultural capital?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cultural capital", statement: "Valued knowledge." }],
              steps: [
                { reasoning: "Knowledge, skills, attitudes valued by society.", marks: 1, markCode: "M" },
                { reasoning: "Middle-class values dominate education.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Valued knowledge/skills",
            },
          },
          {
            id: "ciealsoc-u2-edu-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the labelling theory in education?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Labelling", statement: "Self-fulfilling." }],
              steps: [
                { reasoning: "Teachers label students based on class/background.", marks: 1, markCode: "M" },
                { reasoning: "Labels become self-fulfilling prophecies.", marks: 1, markCode: "M" },
                { reasoning: "Working-class students often negatively labelled.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Labels → self-fulfilling prophecy",
            },
          },
          {
            id: "ciealsoc-u2-edu-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define hidden curriculum, cultural capital, streaming, meritocracy, social reproduction, labelling theory. (b) What is hidden curriculum? (c) What is cultural capital? (d) What is labelling theory? (e) What is social reproduction? (f) What is meritocracy? (g) How does education create inequality? (h) Evaluate whether education is meritocratic.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Education", statement: "Inequality." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Unwritten rules.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valued knowledge.", marks: 1, markCode: "M" },
                { reasoning: "(d) Self-fulfilling labels.", marks: 1, markCode: "M" },
                { reasoning: "(e) Reproduces inequality.", marks: 1, markCode: "M" },
                { reasoning: "(f) Ability-based success.", marks: 1, markCode: "M" },
                { reasoning: "(g) Capital, labelling, streaming.", marks: 1, markCode: "M" },
                { reasoning: "(h) Not meritocratic — class advantage persists.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Education inequality analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealsoc-u2-edu-notes", title: "Education — notes",
      summary: "Hidden curriculum, cultural capital, labelling → inequality reproduction.",
      sections: [
        { heading: "Key idea", body: "Education claims meritocracy but reproduces class inequality." },
        { heading: "Labelling", body: "Teacher expectations become self-fulfilling prophecies." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson823",
    lesson: {
      id: "ciealsoc-u2-lesson-2-3", code: "2-3",
      title: "Crime and Deviance: Definitions and Theories",
      goal: "I CAN define crime and deviance and explain key theories.",
      standards: ["Cambridge A Level Sociology 9696", "Paper 2: crime"],
      vocabulary: [
        { term: "Crime", definition: "Behaviour violating criminal law." },
        { term: "Deviance", definition: "Behaviour violating social norms." },
        { term: "Social constructionism", definition: "Crime/deviance defined by society." },
        { term: "Moral panic", definition: "Exaggerated public fear of threat." },
        { term: "Strain theory", definition: "Crime results from gap between goals and means." },
        { term: "Labelling theory", definition: "Crime created by social reaction." },
      ],
      concept: {
        id: "ciealsoc-u2-s3-crime", title: "Crime and deviance",
        skill: "Explain crime theories.",
        sections: [
          { heading: "Definitions", body: "Crime: breaks law. Deviance: violates norms (may not be illegal). Social constructionism: definitions vary by time/place — smoking, homosexuality once criminal." },
          { heading: "Theories", body: "Functionalist (Durkheim): crime inevitable, boundary maintenance. Strain (Merton): goals/means gap → innovation (crime). Labelling: society creates deviance by reaction. Marxist: crime serves ruling class." },
          { heading: "Moral panic", body: "Cohen: media amplifies fear, creates folk devils — mods and rockers, asylum seekers." },
        ],
        keyFormulas: [
          { name: "Crime", statement: "breaks law" },
          { name: "Deviance", statement: "violates norms" },
          { name: "Strain", statement: "goals- means gap" },
        ],
        workedExample: {
          problem: "Why is crime inevitable in society?",
          solution: "Durkheim: crime marks moral boundaries — some deviance always exists, society needs it to define norms.",
        },
        questions: [
          {
            id: "ciealsoc-u2-cri-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the difference between crime and deviance?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Crime breaks law; deviance violates norms" }, { id: "b", text: "Same thing" }, { id: "c", text: "Crime is minor" }, { id: "d", text: "Deviance is illegal" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Crime/deviance", statement: "Law vs norms." }],
              steps: [{ reasoning: "Crime=law; deviance=norms.", marks: 1, markCode: "M" }],
              finalAnswer: "Law vs norms",
            },
          },
          {
            id: "ciealsoc-u2-cri-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is strain theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Strain", statement: "Goals-means gap." }],
              steps: [
                { reasoning: "Crime from gap between cultural goals and legitimate means.", marks: 1, markCode: "M" },
                { reasoning: "Merton: innovation = accept goals, reject means (crime).", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Goals-means gap",
            },
          },
          {
            id: "ciealsoc-u2-cri-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a moral panic?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Moral panic", statement: "Exaggerated fear." }],
              steps: [
                { reasoning: "Exaggerated public fear of threat.", marks: 1, markCode: "M" },
                { reasoning: "Media creates 'folk devils'.", marks: 1, markCode: "M" },
                { reasoning: "Cohen: mods and rockers example.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Exaggerated public fear",
            },
          },
          {
            id: "ciealsoc-u2-cri-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define crime, deviance, social constructionism, moral panic, strain theory, labelling theory. (b) What is crime? (c) What is deviance? (d) What is strain theory? (e) What is labelling theory? (f) What is moral panic? (g) What is social constructionism? (h) Compare functionalist vs Marxist views of crime.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Crime", statement: "Theories." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Breaks law.", marks: 1, markCode: "M" },
                { reasoning: "(c) Violates norms.", marks: 1, markCode: "M" },
                { reasoning: "(d) Goals-means gap.", marks: 1, markCode: "M" },
                { reasoning: "(e) Social reaction creates deviance.", marks: 1, markCode: "M" },
                { reasoning: "(f) Exaggerated fear.", marks: 1, markCode: "M" },
                { reasoning: "(g) Definitions vary.", marks: 1, markCode: "M" },
                { reasoning: "(h) Functionalist: inevitable; Marxist: serves ruling class.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Crime theories analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealsoc-u2-cri-notes", title: "Crime — notes",
      summary: "Crime=law; deviance=norms. Strain, labelling, moral panic theories.",
      sections: [
        { heading: "Key idea", body: "Crime is socially constructed — definitions vary by context." },
        { heading: "Theories", body: "Functionalist, strain, labelling, Marxist — different explanations." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson824",
    lesson: {
      id: "ciealsoc-u2-lesson-2-4", code: "2-4",
      title: "Globalisation and Development",
      goal: "I CAN explain globalisation and its effects on development.",
      standards: ["Cambridge A Level Sociology 9696", "Paper 3: global development"],
      vocabulary: [
        { term: "Globalisation", definition: "Increasing interconnectedness of world." },
        { term: "Modernisation theory", definition: "Development through Western-style progress." },
        { term: "Dependency theory", definition: "Poor countries dependent on rich." },
        { term: "World systems theory", definition: "Core, semi-periphery, periphery." },
        { term: "Neoliberalism", definition: "Free market, minimal state intervention." },
        { term: "Multinational corporation", definition: "Company operating in multiple countries." },
      ],
      concept: {
        id: "ciealsoc-u2-s4-global", title: "Globalisation",
        skill: "Explain globalisation and development theories.",
        sections: [
          { heading: "Globalisation", body: "Economic: trade, MNCs, capital flows. Cultural: media, consumerism. Political: global governance. Social: migration, inequality." },
          { heading: "Development theories", body: "Modernisation: poor countries develop like West did. Dependency: rich exploit poor. World systems: core exploits periphery. All debated." },
          { heading: "Effects", body: "Positive: growth, technology transfer. Negative: inequality, cultural imperialism, environmental damage." },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "interconnectedness" },
          { name: "Modernisation", statement: "Western progress" },
          { name: "Dependency", statement: "rich exploit poor" },
        ],
        workedExample: {
          problem: "Why are some countries poor?",
          solution: "Modernisation: lack of development. Dependency: exploited by rich countries. World systems: structural inequality.",
        },
        questions: [
          {
            id: "ciealsoc-u2-glob-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is globalisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Increasing interconnectedness of world" }, { id: "b", text: "Economic growth" }, { id: "c", text: "Cultural change" }, { id: "d", text: "Political union" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Globalisation", statement: "Interconnectedness." }],
              steps: [{ reasoning: "Globalisation = interconnectedness.", marks: 1, markCode: "M" }],
              finalAnswer: "Interconnectedness",
            },
          },
          {
            id: "ciealsoc-u2-glob-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is dependency theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Dependency", statement: "Exploitation." }],
              steps: [
                { reasoning: "Poor countries dependent on rich.", marks: 1, markCode: "M" },
                { reasoning: "Exploitation maintains underdevelopment.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Rich exploit poor",
            },
          },
          {
            id: "ciealsoc-u2-glob-q3", difficulty: "core", totalMarks: 3,
            stem: "What is modernisation theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Modernisation", statement: "Western progress." }],
              steps: [
                { reasoning: "Poor countries develop like West did.", marks: 1, markCode: "M" },
                { reasoning: "Through industrialisation, democracy, free markets.", marks: 1, markCode: "M" },
                { reasoning: "Criticised for ignoring exploitation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Western-style development",
            },
          },
          {
            id: "ciealsoc-u2-glob-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define globalisation, modernisation theory, dependency theory, world systems theory, neoliberalism, MNC. (b) What is globalisation? (c) What is modernisation? (d) What is dependency? (e) What is world systems? (f) What is neoliberalism? (g) What are MNCs? (h) Evaluate whether globalisation benefits all countries equally.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Globalisation", statement: "Development." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Interconnectedness.", marks: 1, markCode: "M" },
                { reasoning: "(c) Western progress.", marks: 1, markCode: "M" },
                { reasoning: "(d) Exploitation.", marks: 1, markCode: "M" },
                { reasoning: "(e) Core-periphery.", marks: 1, markCode: "M" },
                { reasoning: "(f) Free markets.", marks: 1, markCode: "M" },
                { reasoning: "(g) Multinational companies.", marks: 1, markCode: "M" },
                { reasoning: "(h) Unequal benefits — rich gain more.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Globalisation analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealsoc-u2-glob-notes", title: "Globalisation — notes",
      summary: "Interconnectedness. Modernisation vs dependency vs world systems.",
      sections: [
        { heading: "Key idea", body: "Globalisation creates both opportunities and inequality." },
        { heading: "Theories", body: "Modernisation (progress), dependency (exploitation), world systems (structure)." },
      ],
    },
  },
];
