module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson621",
    lesson: {
      id: "ciealhis-u2-lesson-2-1", code: "2-1",
      title: "Decolonisation and Independence Movements",
      goal: "I CAN explain decolonisation processes and key independence movements.",
      standards: ["Cambridge A Level History 9489", "Paper 2: decolonisation"],
      vocabulary: [
        { term: "Decolonisation", definition: "Process of colonies gaining independence." },
        { term: "Nationalism", definition: "Desire for self-determination." },
        { term: "Colonialism", definition: "Control of one country by another." },
        { term: "Imperialism", definition: "Extending power through colonisation." },
        { term: "Neocolonialism", definition: "Economic control after political independence." },
        { term: "Bandung Conference", definition: "1955 meeting of Asian/African nations." },
      ],
      concept: {
        id: "ciealhis-u2-s1-decol", title: "Decolonisation",
        skill: "Analyse independence movements.",
        sections: [
          { heading: "Causes", body: "WWII weakened European powers. Nationalist movements strengthened. Cold War pressure. UN support for self-determination. Economic exploitation resentment." },
          { heading: "Key examples", body: "India 1947 (Gandhi's non-violence), Ghana 1957 (Nkrumah), Algeria 1962 (war), Vietnam 1954/1975. Most African countries independent by 1960s-70s." },
          { heading: "Challenges", body: "Neocolonialism — economic dependence continues. Artificial borders create ethnic conflicts. Poverty, corruption, lack of infrastructure." },
        ],
        keyFormulas: [
          { name: "Decolonisation", statement: "independence process" },
          { name: "India", statement: "1947" },
          { name: "Ghana", statement: "1957" },
        ],
        workedExample: {
          problem: "Why did decolonisation accelerate after WWII?",
          solution: "European powers weakened + nationalist movements strengthened + Cold War pressure + UN support.",
        },
        questions: [
          {
            id: "ciealhis-u2-dc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is decolonisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Process of colonies gaining independence" }, { id: "b", text: "A type of war" }, { id: "c", text: "A trade agreement" }, { id: "d", text: "A natural disaster" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Decolonisation", statement: "Independence process." }],
              steps: [{ reasoning: "Decolonisation = colonies gaining independence.", marks: 1, markCode: "M" }],
              finalAnswer: "Independence process",
            },
          },
          {
            id: "ciealhis-u2-dc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is neocolonialism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Neocolonialism", statement: "Economic control." }],
              steps: [
                { reasoning: "Economic control after political independence.", marks: 1, markCode: "M" },
                { reasoning: "Former colonies dependent on former rulers.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Economic control after independence",
            },
          },
          {
            id: "ciealhis-u2-dc-q3", difficulty: "core", totalMarks: 3,
            stem: "What caused decolonisation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Decolonisation causes", statement: "Drivers." }],
              steps: [
                { reasoning: "WWII weakened European powers.", marks: 1, markCode: "M" },
                { reasoning: "Nationalist movements strengthened.", marks: 1, markCode: "M" },
                { reasoning: "Cold War + UN support.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "WWII weakness + nationalism",
            },
          },
          {
            id: "ciealhis-u2-dc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define decolonisation, nationalism, colonialism, imperialism, neocolonialism, Bandung Conference. (b) What is decolonisation? (c) What is neocolonialism? (d) What caused decolonisation? (e) When did India gain independence? (f) When did Ghana gain independence? (g) What challenges do post-colonial states face? (h) Evaluate whether decolonisation was successful.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Decolonisation", statement: "Causes, examples." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Independence process.", marks: 1, markCode: "M" },
                { reasoning: "(c) Economic control.", marks: 1, markCode: "M" },
                { reasoning: "(d) WWII weakness + nationalism.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1947.", marks: 1, markCode: "M" },
                { reasoning: "(f) 1957.", marks: 1, markCode: "M" },
                { reasoning: "(g) Neocolonialism, borders, poverty.", marks: 1, markCode: "M" },
                { reasoning: "(h) Political success, economic mixed.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Decolonisation analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u2-dc-notes", title: "Decolonisation — notes",
      summary: "WWII weakened Europe + nationalism → independence wave. Challenges persist.",
      sections: [
        { heading: "Key idea", body: "Political independence achieved but economic dependence often continued." },
        { heading: "Examples", body: "India 1947, Ghana 1957, Algeria 1962, most Africa by 1960s-70s." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson622",
    lesson: {
      id: "ciealhis-u2-lesson-2-2", code: "2-2",
      title: "Apartheid and Anti-Apartheid Movement",
      goal: "I CAN explain apartheid system, resistance and its end.",
      standards: ["Cambridge A Level History 9489", "Paper 2: Apartheid"],
      vocabulary: [
        { term: "Apartheid", definition: "System of racial segregation 1948-1994." },
        { term: "ANC", definition: "African National Congress — liberation movement." },
        { term: "Nelson Mandela", definition: "Anti-apartheid leader, first black president." },
        { term: "Sharpeville Massacre", definition: "1960 killing of peaceful protesters." },
        { term: "Bantu Education Act", definition: "1953 law enforcing segregated education." },
        { term: "Truth and Reconciliation Commission", definition: "Post-apartheid justice body." },
      ],
      concept: {
        id: "ciealhis-u2-s2-apart", title: "Apartheid",
        skill: "Understand apartheid system and resistance.",
        sections: [
          { heading: "Apartheid system", body: "1948: National Party introduced apartheid — racial segregation. Population Registration Act classified races. Group Areas Act forced residential segregation. Pass laws controlled movement." },
          { heading: "Resistance", body: "ANC led resistance — initially peaceful, later armed struggle after Sharpeville 1960. Mandela imprisoned 1964-1990. International sanctions increased pressure. 1994: first democratic elections." },
        ],
        keyFormulas: [
          { name: "Apartheid", statement: "1948-1994" },
          { name: "ANC", statement: "liberation movement" },
          { name: "1994", statement: "democratic elections" },
        ],
        workedExample: {
          problem: "How did international pressure contribute to ending apartheid?",
          solution: "Sanctions, divestment, cultural boycotts isolated South Africa economically and politically.",
        },
        questions: [
          {
            id: "ciealhis-u2-ap-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was apartheid?",
            response: { type: "mcq", choices: [
              { id: "a", text: "System of racial segregation 1948-1994" }, { id: "b", text: "A type of government" }, { id: "c", text: "A peace treaty" }, { id: "d", text: "A trade agreement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Apartheid", statement: "Racial segregation." }],
              steps: [{ reasoning: "Apartheid = racial segregation system.", marks: 1, markCode: "M" }],
              finalAnswer: "Racial segregation system",
            },
          },
          {
            id: "ciealhis-u2-ap-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Who was Nelson Mandela?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Mandela", statement: "Anti-apartheid leader." }],
              steps: [
                { reasoning: "Anti-apartheid leader, first black president.", marks: 1, markCode: "M" },
                { reasoning: "Imprisoned 27 years, released 1990.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Anti-apartheid leader",
            },
          },
          {
            id: "ciealhis-u2-ap-q3", difficulty: "core", totalMarks: 3,
            stem: "What was the Sharpeville Massacre?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sharpeville", statement: "1960 protest." }],
              steps: [
                { reasoning: "1960 killing of peaceful protesters.", marks: 1, markCode: "M" },
                { reasoning: "Led to ANC turning to armed struggle.", marks: 1, markCode: "M" },
                { reasoning: "International condemnation increased.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "1960 protest killing",
            },
          },
          {
            id: "ciealhis-u2-ap-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define apartheid, ANC, Mandela, Sharpeville, Bantu Education Act, Truth Commission. (b) What was apartheid? (c) Who was Mandela? (d) What was Sharpeville? (e) When did apartheid end? (f) What was ANC? (g) How did international pressure help? (h) Evaluate success of anti-apartheid movement.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Apartheid", statement: "System, resistance." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Racial segregation.", marks: 1, markCode: "M" },
                { reasoning: "(c) Anti-apartheid leader.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1960 protest.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1994.", marks: 1, markCode: "M" },
                { reasoning: "(f) Liberation movement.", marks: 1, markCode: "M" },
                { reasoning: "(g) Sanctions, boycotts.", marks: 1, markCode: "M" },
                { reasoning: "(h) Ended but inequality remains.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Apartheid analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u2-ap-notes", title: "Apartheid — notes",
      summary: "1948-1994 racial segregation. ANC resistance, Mandela, international sanctions → 1994.",
      sections: [
        { heading: "Key idea", body: "Apartheid enforced racial hierarchy through legal discrimination." },
        { heading: "End", body: "Mandela released 1990, democratic elections 1994." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson623",
    lesson: {
      id: "ciealhis-u2-lesson-2-3", code: "2-3",
      title: "Middle East Conflicts",
      goal: "I CAN explain Arab-Israeli conflict, causes and key events.",
      standards: ["Cambridge A Level History 9489", "Paper 2: Middle East"],
      vocabulary: [
        { term: "Israel", definition: "Jewish state established 1948." },
        { term: "Palestine", definition: "Arab homeland/territory." },
        { term: "Zionism", definition: "Movement for Jewish homeland." },
        { term: "Six-Day War", definition: "1967 Israel-Arab conflict." },
        { term: "Oslo Accords", definition: "1993 peace agreement." },
        { term: "Intifada", definition: "Palestinian uprising." },
      ],
      concept: {
        id: "ciealhis-u2-s3-me", title: "Middle East",
        skill: "Analyse Arab-Israeli conflict.",
        sections: [
          { heading: "Origins", body: "Zionism movement for Jewish homeland. 1948 Israel declared → Arab-Israeli war. Palestinians displaced — refugee crisis. UN partition plan." },
          { heading: "Key conflicts", body: "1967 Six-Day War: Israel captured West Bank, Gaza, Golan, Sinai. 1973 Yom Kippur War. Oslo Accords 1993. Intifadas — Palestinian uprisings." },
          { heading: "Ongoing issues", body: "Settlements, refugees, Jerusalem status, security, water, regional powers." },
        ],
        keyFormulas: [
          { name: "Israel", statement: "1948" },
          { name: "Six-Day War", statement: "1967" },
          { name: "Oslo", statement: "1993" },
        ],
        workedExample: {
          problem: "Why is Middle East conflict difficult to resolve?",
          solution: "Competing claims to land, historical grievances, religious significance, regional politics, security concerns.",
        },
        questions: [
          {
            id: "ciealhis-u2-me-q1", difficulty: "foundation", totalMarks: 1,
            stem: "When was Israel established?",
            response: { type: "mcq", choices: [
              { id: "a", text: "1948" }, { id: "b", text: "1967" }, { id: "c", text: "1993" }, { id: "d", text: "1918" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Israel", statement: "1948 establishment." }],
              steps: [{ reasoning: "Israel declared 1948.", marks: 1, markCode: "M" }],
              finalAnswer: "1948",
            },
          },
          {
            id: "ciealhis-u2-me-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the Six-Day War?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Six-Day War", statement: "1967 conflict." }],
              steps: [
                { reasoning: "1967 Israel-Arab war.", marks: 1, markCode: "M" },
                { reasoning: "Israel captured West Bank, Gaza, Golan, Sinai.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "1967 Israel-Arab war",
            },
          },
          {
            id: "ciealhis-u2-me-q3", difficulty: "core", totalMarks: 3,
            stem: "What is Zionism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Zionism", statement: "Jewish homeland." }],
              steps: [
                { reasoning: "Movement for Jewish homeland in Palestine.", marks: 1, markCode: "M" },
                { reasoning: "Led to Israel's establishment 1948.", marks: 1, markCode: "M" },
                { reasoning: "Created conflict with Arabs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Jewish homeland movement",
            },
          },
          {
            id: "ciealhis-u2-me-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Israel, Palestine, Zionism, Six-Day War, Oslo Accords, intifada. (b) When was Israel established? (c) What was Six-Day War? (d) What is Zionism? (e) What were Oslo Accords? (f) What is intifada? (g) What are key issues? (h) Evaluate prospects for peace.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Middle East", statement: "Conflict." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 1948.", marks: 1, markCode: "M" },
                { reasoning: "(c) 1967 war.", marks: 1, markCode: "M" },
                { reasoning: "(d) Jewish homeland.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1993 peace.", marks: 1, markCode: "M" },
                { reasoning: "(f) Palestinian uprising.", marks: 1, markCode: "M" },
                { reasoning: "(g) Settlements, refugees, Jerusalem.", marks: 1, markCode: "M" },
                { reasoning: "(h) Complex, unlikely soon.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Middle East conflict.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u2-me-notes", title: "Middle East — notes",
      summary: "Zionism→Israel 1948→wars. Six-Day 1967, Oslo 1993. Complex ongoing conflict.",
      sections: [
        { heading: "Key idea", body: "Competing national/religious claims create intractable conflict." },
        { heading: "Key events", body: "1948 Israel, 1967 Six-Day, 1993 Oslo, intifadas." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson624",
    lesson: {
      id: "ciealhis-u2-lesson-2-4", code: "2-4",
      title: "African Independence and Post-Colonial Africa",
      goal: "I CAN explain African independence movements and post-colonial challenges.",
      standards: ["Cambridge A Level History 9489", "Paper 2: Africa"],
      vocabulary: [
        { term: "Pan-Africanism", definition: "Movement for African unity." },
        { term: "OAU", definition: "Organisation of African Unity." },
        { term: "Apartheid", definition: "Racial segregation in South Africa." },
        { term: "Biafra", definition: "Secessionist state in Nigeria." },
        { term: "Rwanda genocide", definition: "1994 mass killing of Tutsis." },
        { term: "AU", definition: "African Union — successor to OAU." },
      ],
      concept: {
        id: "ciealhis-u2-s4-africa", title: "Post-colonial Africa",
        skill: "Analyse African independence and challenges.",
        sections: [
          { heading: "Independence wave", body: "1950s-60s: most African countries gained independence. Leaders: Nkrumah (Ghana), Nyerere (Tanzania), Kenyatta (Kenya). Pan-Africanism promoted unity." },
          { heading: "Post-colonial challenges", body: "Artificial borders → ethnic conflicts. Economic dependence on former colonial powers. Corruption, coups, weak institutions. Apartheid in South Africa until 1994." },
          { heading: "Contemporary issues", body: "Rwanda genocide 1994. Resource conflicts (blood diamonds, oil). AIDS pandemic. African Union promoting development." },
        ],
        keyFormulas: [
          { name: "Pan-Africanism", statement: "African unity" },
          { name: "OAU", statement: "1963-2002" },
          { name: "Rwanda", statement: "1994 genocide" },
        ],
        workedExample: {
          problem: "Why have some African countries struggled after independence?",
          solution: "Artificial borders created ethnic tensions, economic dependence on former colonial powers, weak institutions, corruption.",
        },
        questions: [
          {
            id: "ciealhis-u2-af-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was Pan-Africanism?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Movement for African unity" }, { id: "b", text: "A type of government" }, { id: "c", text: "A trade agreement" }, { id: "d", text: "A colonial system" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Pan-Africanism", statement: "African unity." }],
              steps: [{ reasoning: "Pan-Africanism = African unity movement.", marks: 1, markCode: "M" }],
              finalAnswer: "African unity movement",
            },
          },
          {
            id: "ciealhis-u2-af-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the OAU?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "OAU", statement: "African unity org." }],
              steps: [
                { reasoning: "Organisation of African Unity.", marks: 1, markCode: "M" },
                { reasoning: "Founded 1963, replaced by AU 2002.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "African unity organization",
            },
          },
          {
            id: "ciealhis-u2-af-q3", difficulty: "core", totalMarks: 3,
            stem: "What were the challenges facing post-colonial Africa?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Post-colonial", statement: "Challenges." }],
              steps: [
                { reasoning: "Artificial borders → ethnic conflicts.", marks: 1, markCode: "M" },
                { reasoning: "Economic dependence on former powers.", marks: 1, markCode: "M" },
                { reasoning: "Corruption, coups, weak institutions.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Borders, dependence, corruption",
            },
          },
          {
            id: "ciealhis-u2-af-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Pan-Africanism, OAU, Apartheid, Biafra, Rwanda genocide, AU. (b) What was Pan-Africanism? (c) What was OAU? (d) What challenges faced post-colonial Africa? (e) What was Rwanda genocide? (f) What was Biafra? (g) What is AU? (h) Evaluate whether African independence movements achieved their goals.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Post-colonial Africa", statement: "Challenges." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) African unity.", marks: 1, markCode: "M" },
                { reasoning: "(c) 1963-2002 org.", marks: 1, markCode: "M" },
                { reasoning: "(d) Borders, dependence, corruption.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1994 mass killing.", marks: 1, markCode: "M" },
                { reasoning: "(f) Nigerian secessionist state.", marks: 1, markCode: "M" },
                { reasoning: "(g) AU successor.", marks: 1, markCode: "M" },
                { reasoning: "(h) Political success, economic mixed.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Post-colonial Africa analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u2-af-notes", title: "Post-colonial Africa — notes",
      summary: "Independence wave 1950s-60s. Challenges: borders, dependence, corruption.",
      sections: [
        { heading: "Key idea", body: "Independence achieved but development remains challenging." },
        { heading: "Contemporary", body: "Rwanda genocide, resource conflicts, AIDS pandemic." },
      ],
    },
  },
];
