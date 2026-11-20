module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson341",
    lesson: {
      id: "cieihis-u2-lesson-2-1", code: "2-1",
      title: "Vietnam War: Origins and Early Conflict",
      goal: "I CAN explain the causes and early stages of the Vietnam War.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam War"],
      vocabulary: [
        { term: "Vietnam War", definition: "Conflict in Vietnam 1955-1975 between North and South." },
        { term: "Viet Cong", definition: "South Vietnamese communist guerrilla forces." },
        { term: "Ho Chi Minh", definition: "Leader of North Vietnam and Viet Minh." },
        { term: "Dien Bien Phu", definition: "1954 battle where French defeated by Viet Minh." },
        { term: "Geneva Accords", definition: "1954 agreement dividing Vietnam at 17th parallel." },
        { term: "Domino theory", definition: "US belief that communism would spread if one country fell." },
      ],
      concept: {
        id: "cieihis-u2-s1-vn", title: "Vietnam War origins",
        skill: "Understand Vietnam conflict causes.",
        sections: [
          { heading: "Colonial background", body: "France colonised Vietnam. Viet Minh led by Ho Chi Minh fought for independence. 1954 Dien Bien Phu victory → Geneva Accords divided Vietnam at 17th parallel." },
          { heading: "US involvement", body: "US feared domino effect — if South Vietnam fell to communism, neighbouring countries would follow. Supported South Vietnam against North Vietnamese/Viet Cong." },
        ],
        keyFormulas: [
          { name: "Vietnam War", statement: "1955-1975" },
          { name: "Geneva Accords", statement: "17th parallel divide" },
          { name: "Domino theory", statement: "communism spread fear" },
        ],
        workedExample: {
          problem: "Why did the US get involved in Vietnam?",
          solution: "Cold War containment + domino theory fear + support for South Vietnam against communism.",
        },
        questions: [
          {
            id: "cieihis-u2-vn-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the Vietnam War?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Conflict in Vietnam 1955-1975" }, { id: "b", text: "A trade war" }, { id: "c", text: "A peace treaty" }, { id: "d", text: "A natural disaster" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Vietnam War", statement: "1955-1975 conflict." }],
              steps: [{ reasoning: "Vietnam War = North vs South conflict.", marks: 1, markCode: "M" }],
              finalAnswer: "1955-1975 conflict",
            },
          },
          {
            id: "cieihis-u2-vn-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the domino theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Domino theory", statement: "Communism spread fear." }],
              steps: [
                { reasoning: "US belief that if one country fell to communism, neighbours would follow.", marks: 1, markCode: "M" },
                { reasoning: "Justified US intervention in Vietnam.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Communism spread fear",
            },
          },
          {
            id: "cieihis-u2-vn-q3", difficulty: "core", totalMarks: 3,
            stem: "What were the Geneva Accords?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Geneva Accords", statement: "1954 Vietnam division." }],
              steps: [
                { reasoning: "1954 agreement dividing Vietnam at 17th parallel.", marks: 1, markCode: "M" },
                { reasoning: "North = communist, South = non-communist.", marks: 1, markCode: "M" },
                { reasoning: "Intended temporary but became permanent.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "1954 Vietnam division",
            },
          },
          {
            id: "cieihis-u2-vn-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Vietnam War, Viet Cong, Ho Chi Minh, Dien Bien Phu, Geneva Accords, domino theory. (b) What was the Vietnam War? (c) What was the domino theory? (d) What were Geneva Accords? (e) Who was Ho Chi Minh? (f) What was Dien Bien Phu? (g) Why did US get involved? (h) Explain how colonial history led to Vietnam War.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Vietnam origins", statement: "Causes, background." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 1955-1975 conflict.", marks: 1, markCode: "M" },
                { reasoning: "(c) Communism spread fear.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1954 division.", marks: 1, markCode: "M" },
                { reasoning: "(e) North Vietnam leader.", marks: 1, markCode: "M" },
                { reasoning: "(f) 1954 French defeat.", marks: 1, markCode: "M" },
                { reasoning: "(g) Containment + domino theory.", marks: 1, markCode: "M" },
                { reasoning: "(h) Colonial → independence struggle → division → conflict.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Vietnam War origins.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u2-vn-notes", title: "Vietnam origins — notes",
      summary: "French colonialism→Viet Minh→Geneva division→US intervention. Domino theory drove US involvement.",
      sections: [
        { heading: "Key idea", body: "Cold War ideology + colonial legacy created Vietnam conflict." },
        { heading: "Geneva", body: "1954 division at 17th parallel — temporary became permanent." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson342",
    lesson: {
      id: "cieihis-u2-lesson-2-2", code: "2-2",
      title: "Vietnam War: Escalation and US Strategy",
      goal: "I CAN explain US escalation, military strategy and key battles.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam escalation"],
      vocabulary: [
        { term: "Escalation", definition: "Increasing military involvement." },
        { term: "Gulf of Tonkin", definition: "1964 incident used to justify US escalation." },
        { term: "Ho Chi Minh Trail", definition: "Supply route through Laos/Cambodia." },
        { term: "Tet Offensive", definition: "1968 communist offensive." },
        { term: "Search and destroy", definition: "US military strategy." },
        { term: "Body count", definition: "US measure of success." },
      ],
      concept: {
        id: "cieihis-u2-s2-esc", title: "Vietnam escalation",
        skill: "Understand US military strategy and escalation.",
        sections: [
          { heading: "Escalation", body: "1964 Gulf of Tonkin incident → US Congress authorised military action. Troops increased from advisors to 500,000+. B-52 bombings, Agent Orange, napalm." },
          { heading: "Military challenges", body: "Viet Cong guerrilla tactics — hit-and-run, tunnels, civilian support. US conventional warfare struggled. Ho Chi Minh Trail supplied North Vietnamese." },
          { heading: "Tet Offensive", body: "1968: massive communist offensive on South Vietnamese cities. Military defeat for communists but psychological victory — proved US couldn't win." },
        ],
        keyFormulas: [
          { name: "Escalation", statement: "increasing involvement" },
          { name: "Gulf of Tonkin", statement: "1964 justification" },
          { name: "Tet Offensive", statement: "1968 turning point" },
        ],
        workedExample: {
          problem: "Why did the US struggle militarily in Vietnam?",
          solution: "Guerrilla warfare + difficult terrain + lack of local support + political constraints → conventional tactics failed.",
        },
        questions: [
          {
            id: "cieihis-u2-es-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the Gulf of Tonkin incident?",
            response: { type: "mcq", choices: [
              { id: "a", text: "1964 incident used to justify US escalation" }, { id: "b", text: "A peace treaty" }, { id: "c", text: "A trade agreement" }, { id: "d", text: "A natural disaster" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Gulf of Tonkin", statement: "1964 escalation justification." }],
              steps: [{ reasoning: "1964 incident led to US military escalation.", marks: 1, markCode: "M" }],
              finalAnswer: "1964 escalation justification",
            },
          },
          {
            id: "cieihis-u2-es-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the Tet Offensive?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Tet Offensive", statement: "1968 communist offensive." }],
              steps: [
                { reasoning: "1968 massive communist attack on South Vietnamese cities.", marks: 1, markCode: "M" },
                { reasoning: "Military defeat but psychological victory for communists.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "1968 communist offensive",
            },
          },
          {
            id: "cieihis-u2-es-q3", difficulty: "core", totalMarks: 3,
            stem: "Why did US struggle militarily in Vietnam?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Military challenges", statement: "Guerrilla warfare." }],
              steps: [
                { reasoning: "Viet Cong guerrilla tactics.", marks: 1, markCode: "M" },
                { reasoning: "Difficult terrain + lack of local support.", marks: 1, markCode: "M" },
                { reasoning: "Conventional tactics failed.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Guerrilla tactics + terrain",
            },
          },
          {
            id: "cieihis-u2-es-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define escalation, Gulf of Tonkin, Ho Chi Minh Trail, Tet Offensive, search and destroy, body count. (b) What was Gulf of Tonkin? (c) What was Tet Offensive? (d) What was Ho Chi Minh Trail? (e) Why did US escalate? (f) Why did US struggle militarily? (g) What was Agent Orange? (h) Evaluate whether US could have won Vietnam War.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Vietnam escalation", statement: "Strategy, battles." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 1964 incident.", marks: 1, markCode: "M" },
                { reasoning: "(c) 1968 offensive.", marks: 1, markCode: "M" },
                { reasoning: "(d) Supply route through Laos/Cambodia.", marks: 1, markCode: "M" },
                { reasoning: "(e) Containment + Gulf of Tonkin.", marks: 1, markCode: "M" },
                { reasoning: "(f) Guerrilla tactics + terrain.", marks: 1, markCode: "M" },
                { reasoning: "(g) Chemical defoliant.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Vietnam War escalation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u2-es-notes", title: "Vietnam escalation — notes",
      summary: "Gulf of Tonkin→escalation→500K troops. Viet Cong guerrilla tactics frustrated US conventional warfare.",
      sections: [
        { heading: "Key idea", body: "US military superiority couldn't overcome guerrilla tactics and political constraints." },
        { heading: "Tet Offensive", body: "1968 turning point — proved US couldn't win militarily." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson343",
    lesson: {
      id: "cieihis-u2-lesson-2-3", code: "2-3",
      title: "Vietnam War: Opposition and Withdrawal",
      goal: "I CAN explain domestic opposition, media influence and US withdrawal.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam opposition"],
      vocabulary: [
        { term: "Anti-war movement", definition: "Protests against Vietnam War." },
        { term: "My Lai massacre", definition: "1968 US massacre of Vietnamese civilians." },
        { term: "Vietnam syndrome", definition: "US reluctance to intervene militarily." },
        { term: "Paris Peace Accords", definition: "1973 agreement ending US involvement." },
        { term: "Fall of Saigon", definition: "1975 communist victory in South Vietnam." },
        { term: "Draft", definition: "Compulsory military service." },
      ],
      concept: {
        id: "cieihis-u2-s3-opp", title: "Vietnam opposition",
        skill: "Understand anti-war movement and withdrawal.",
        sections: [
          { heading: "Domestic opposition", body: "Growing protests, draft resistance, media coverage of atrocities (My Lai). Public support collapsed. Student movements, celebrities, civil rights leaders opposed war." },
          { heading: "Withdrawal", body: "1973 Paris Peace Accords — US withdrew. 1975 Saigon fell to North Vietnamese. Vietnam unified under communism. US suffered 'Vietnam syndrome' — reluctance for future interventions." },
        ],
        keyFormulas: [
          { name: "Anti-war", statement: "protests against war" },
          { name: "Paris Accords", statement: "1973 withdrawal" },
          { name: "Fall of Saigon", statement: "1975 communist victory" },
        ],
        workedExample: {
          problem: "Why did public opinion turn against Vietnam War?",
          solution: "Media coverage of atrocities + high casualties + draft inequity + moral concerns → growing opposition.",
        },
        questions: [
          {
            id: "cieihis-u2-op-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the anti-war movement?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Protests against Vietnam War" }, { id: "b", text: "A military strategy" }, { id: "c", text: "A peace treaty" }, { id: "d", text: "A type of weapon" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Anti-war movement", statement: "War protests." }],
              steps: [{ reasoning: "Anti-war = protests against Vietnam War.", marks: 1, markCode: "M" }],
              finalAnswer: "War protests",
            },
          },
          {
            id: "cieihis-u2-op-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the My Lai massacre?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "My Lai", statement: "1968 civilian massacre." }],
              steps: [
                { reasoning: "1968 US massacre of Vietnamese civilians.", marks: 1, markCode: "M" },
                { reasoning: "Fuelled anti-war sentiment.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "1968 civilian massacre",
            },
          },
          {
            id: "cieihis-u2-op-q3", difficulty: "core", totalMarks: 3,
            stem: "What was the Paris Peace Accords?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Paris Accords", statement: "1973 withdrawal." }],
              steps: [
                { reasoning: "1973 agreement ending US involvement.", marks: 1, markCode: "M" },
                { reasoning: "US troops withdrew; South Vietnam left to fight.", marks: 1, markCode: "M" },
                { reasoning: "North Vietnam continued fighting.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "1973 US withdrawal",
            },
          },
          {
            id: "cieihis-u2-op-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define anti-war movement, My Lai massacre, Vietnam syndrome, Paris Peace Accords, fall of Saigon, draft. (b) What was anti-war movement? (c) What was My Lai? (d) What was Paris Peace Accords? (e) When did Saigon fall? (f) What was Vietnam syndrome? (g) Why did public opinion turn against war? (h) Evaluate whether Vietnam War was a US defeat.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Vietnam opposition", statement: "Protests, withdrawal." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) War protests.", marks: 1, markCode: "M" },
                { reasoning: "(c) 1968 civilian massacre.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1973 US withdrawal.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1975.", marks: 1, markCode: "M" },
                { reasoning: "(f) US military reluctance.", marks: 1, markCode: "M" },
                { reasoning: "(g) Media, casualties, draft, morality.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation — military/political defeat.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Vietnam opposition and withdrawal.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u2-op-notes", title: "Vietnam opposition — notes",
      summary: "Anti-war protests + media coverage + My Lai → public opinion collapse → withdrawal → Saigon falls.",
      sections: [
        { heading: "Key idea", body: "Domestic opposition forced US withdrawal despite military superiority." },
        { heading: "Vietnam syndrome", body: "US reluctance to intervene militarily after Vietnam failure." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson344",
    lesson: {
      id: "cieihis-u2-lesson-2-4", code: "2-4",
      title: "Decolonisation and Independence Movements",
      goal: "I CAN explain decolonisation and independence movements in Africa and Asia.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: decolonisation"],
      vocabulary: [
        { term: "Decolonisation", definition: "Process of colonies gaining independence." },
        { term: "Nationalism", definition: "Desire for self-determination." },
        { term: "Colonialism", definition: "Control of one country by another." },
        { term: "Imperialism", definition: "Extending power through colonisation." },
        { term: "Neocolonialism", definition: "Economic control after political independence." },
        { term: "Bandung Conference", definition: "1955 meeting of Asian/African nations." },
      ],
      concept: {
        id: "cieihis-u2-s4-decol", title: "Decolonisation",
        skill: "Understand independence movements.",
        sections: [
          { heading: "Causes", body: "WWII weakened European powers. Nationalist movements gained strength. Cold War pressure. UN support for self-determination. Economic exploitation resentment." },
          { heading: "Key examples", body: "India 1947 (Gandhi's non-violence), Ghana 1957 (Nkrumah), Algeria 1962 (war of independence), Vietnam 1954/1975. Most African countries independent by 1960s-70s." },
          { heading: "Challenges", body: "Neocolonialism — economic dependence continues. Artificial borders create ethnic conflicts. Poverty, corruption, lack of infrastructure." },
        ],
        keyFormulas: [
          { name: "Decolonisation", statement: "independence process" },
          { name: "India", statement: "1947 independence" },
          { name: "Ghana", statement: "1957 first sub-Saharan" },
        ],
        workedExample: {
          problem: "Why did decolonisation accelerate after WWII?",
          solution: "European powers weakened + nationalist movements strengthened + Cold War pressure + UN support.",
        },
        questions: [
          {
            id: "cieihis-u2-dc-q1", difficulty: "foundation", totalMarks: 1,
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
            id: "cieihis-u2-dc-q2", difficulty: "foundation", totalMarks: 2,
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
            id: "cieihis-u2-dc-q3", difficulty: "core", totalMarks: 3,
            stem: "What caused decolonisation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Decolonisation causes", statement: "Independence drivers." }],
              steps: [
                { reasoning: "WWII weakened European powers.", marks: 1, markCode: "M" },
                { reasoning: "Nationalist movements strengthened.", marks: 1, markCode: "M" },
                { reasoning: "Cold War + UN support.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "WWII weakness + nationalism",
            },
          },
          {
            id: "cieihis-u2-dc-q4", difficulty: "core", totalMarks: 8,
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
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Decolonisation and independence.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u2-dc-notes", title: "Decolonisation — notes",
      summary: "WWII weakened Europe + nationalism → independence wave. Challenges: neocolonialism, borders, poverty.",
      sections: [
        { heading: "Key idea", body: "Political independence achieved but economic dependence often continued." },
        { heading: "Examples", body: "India 1947, Ghana 1957, Algeria 1962, most Africa by 1960s-70s." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson345",
    lesson: {
      id: "cieihis-u2-lesson-2-5", code: "2-5",
      title: "The Middle East Conflict",
      goal: "I CAN explain the Arab-Israeli conflict and its causes.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: Middle East"],
      vocabulary: [
        { term: "Israel", definition: "Jewish state established 1948." },
        { term: "Palestine", definition: "Arab homeland/territory." },
        { term: "Zionism", definition: "Movement for Jewish homeland." },
        { term: "Six-Day War", definition: "1967 Israel-Arab conflict." },
        { term: "Oslo Accords", definition: "1993 peace agreement." },
        { term: "Intifada", definition: "Palestinian uprising." },
      ],
      concept: {
        id: "cieihis-u2-s5-me", title: "Middle East conflict",
        skill: "Understand Arab-Israeli conflict.",
        sections: [
          { heading: "Origins", body: "Zionism movement for Jewish homeland. 1948 Israel declared → Arab-Israeli war. Palestinians displaced — refugee crisis. UN partition plan." },
          { heading: "Key conflicts", body: "1967 Six-Day War: Israel captured West Bank, Gaza, Golan Heights, Sinai. 1973 Yom Kippur War. Oslo Accords 1993 — limited autonomy. Intifadas — Palestinian uprisings." },
          { heading: "Ongoing issues", body: "Settlements, refugees, Jerusalem status, security, water resources, regional powers." },
        ],
        keyFormulas: [
          { name: "Israel", statement: "1948 Jewish state" },
          { name: "Six-Day War", statement: "1967" },
          { name: "Oslo", statement: "1993 peace" },
        ],
        workedExample: {
          problem: "Why is the Middle East conflict so difficult to resolve?",
          solution: "Competing claims to land, historical grievances, religious significance, regional politics, security concerns.",
        },
        questions: [
          {
            id: "cieihis-u2-me-q1", difficulty: "foundation", totalMarks: 1,
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
            id: "cieihis-u2-me-q2", difficulty: "foundation", totalMarks: 2,
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
            id: "cieihis-u2-me-q3", difficulty: "core", totalMarks: 3,
            stem: "What is Zionism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Zionism", statement: "Jewish homeland movement." }],
              steps: [
                { reasoning: "Movement for Jewish homeland in Palestine.", marks: 1, markCode: "M" },
                { reasoning: "Led to Israel's establishment 1948.", marks: 1, markCode: "M" },
                { reasoning: "Created conflict with Arabs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Jewish homeland movement",
            },
          },
          {
            id: "cieihis-u2-me-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Israel, Palestine, Zionism, Six-Day War, Oslo Accords, intifada. (b) When was Israel established? (c) What was Six-Day War? (d) What is Zionism? (e) What were Oslo Accords? (f) What is intifada? (g) What are key issues in conflict? (h) Evaluate prospects for peace.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Middle East", statement: "Conflict, causes." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 1948.", marks: 1, markCode: "M" },
                { reasoning: "(c) 1967 war.", marks: 1, markCode: "M" },
                { reasoning: "(d) Jewish homeland movement.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1993 peace agreement.", marks: 1, markCode: "M" },
                { reasoning: "(f) Palestinian uprising.", marks: 1, markCode: "M" },
                { reasoning: "(g) Settlements, refugees, Jerusalem.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Middle East conflict.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u2-me-notes", title: "Middle East — notes",
      summary: "Zionism→Israel 1948→Arab-Israeli wars. Six-Day War 1967, Oslo 1993. Complex ongoing conflict.",
      sections: [
        { heading: "Key idea", body: "Competing national/religious claims create intractable conflict." },
        { heading: "Key events", body: "1948 Israel, 1967 Six-Day, 1993 Oslo, intifadas." },
      ],
    },
  },
  {
    file: "lesson-2-6.ts", exportName: "lesson346",
    lesson: {
      id: "cieihis-u2-lesson-2-6", code: "2-6",
      title: "Civil Rights Movement in the USA",
      goal: "I CAN explain the Civil Rights Movement and key figures.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: Civil Rights"],
      vocabulary: [
        { term: "Civil Rights Movement", definition: "Movement for racial equality in USA." },
        { term: "Segregation", definition: "Racial separation in public facilities." },
        { term: "Martin Luther King Jr", definition: "Civil rights leader advocating non-violence." },
        { term: "Malcolm X", definition: "Civil rights leader advocating self-defence." },
        { term: "Civil Rights Act", definition: "1964 law banning discrimination." },
        { term: "Voting Rights Act", definition: "1965 law ensuring voting rights." },
      ],
      concept: {
        id: "cieihis-u2-s6-cr", title: "Civil Rights Movement",
        skill: "Understand US civil rights struggle.",
        sections: [
          { heading: "Background", body: "Jim Crow laws enforced segregation. African Americans faced discrimination in housing, education, employment, voting. NAACP and other organisations campaigned for change." },
          { heading: "Key events", body: "1954 Brown v Board (school desegregation). 1955 Montgomery Bus Boycott (Rosa Parks). 1963 March on Washington (MLK 'I Have a Dream'). 1964 Civil Rights Act. 1965 Voting Rights Act." },
          { heading: "Key figures", body: "MLK: non-violent resistance, integration. Malcolm X: Black Power, self-defence. Rosa Parks: bus boycott catalyst. Thurgood Marshall: legal strategy." },
        ],
        keyFormulas: [
          { name: "Civil Rights", statement: "racial equality movement" },
          { name: "MLK", statement: "non-violence leader" },
          { name: "1964", statement: "Civil Rights Act" },
        ],
        workedExample: {
          problem: "Why was the Montgomery Bus Boycott significant?",
          solution: "Showed power of non-violent protest — economic pressure forced desegregation of buses.",
        },
        questions: [
          {
            id: "cieihis-u2-cr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the Civil Rights Movement?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Movement for racial equality in USA" }, { id: "b", text: "A military conflict" }, { id: "c", text: "A trade union" }, { id: "d", text: "A political party" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Civil Rights", statement: "Racial equality movement." }],
              steps: [{ reasoning: "Civil Rights = racial equality struggle.", marks: 1, markCode: "M" }],
              finalAnswer: "Racial equality movement",
            },
          },
          {
            id: "cieihis-u2-cr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Who was Martin Luther King Jr?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "MLK", statement: "Non-violence leader." }],
              steps: [
                { reasoning: "Civil rights leader advocating non-violence.", marks: 1, markCode: "M" },
                { reasoning: "Famous for 'I Have a Dream' speech 1963.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Non-violence civil rights leader",
            },
          },
          {
            id: "cieihis-u2-cr-q3", difficulty: "core", totalMarks: 3,
            stem: "What was the Montgomery Bus Boycott?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Bus boycott", statement: "1955 protest." }],
              steps: [
                { reasoning: "1955 protest after Rosa Parks arrest.", marks: 1, markCode: "M" },
                { reasoning: "African Americans boycotted segregated buses.", marks: 1, markCode: "M" },
                { reasoning: "Led to desegregation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "1955 bus desegregation protest",
            },
          },
          {
            id: "cieihis-u2-cr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Civil Rights Movement, segregation, MLK, Malcolm X, Civil Rights Act, Voting Rights Act. (b) What was Civil Rights Movement? (c) Who was MLK? (d) What was Montgomery Bus Boycott? (e) What was Civil Rights Act? (f) What was Voting Rights Act? (g) What were Jim Crow laws? (h) Evaluate success of Civil Rights Movement.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Civil Rights", statement: "Movement, figures." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Racial equality movement.", marks: 1, markCode: "M" },
                { reasoning: "(c) Non-violence leader.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1955 bus protest.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1964 anti-discrimination law.", marks: 1, markCode: "M" },
                { reasoning: "(f) 1965 voting rights law.", marks: 1, markCode: "M" },
                { reasoning: "(g) Segregation laws.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation — progress but inequality remains.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Civil Rights Movement.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u2-cr-notes", title: "Civil Rights — notes",
      summary: "Jim Crow segregation→non-violent protests→1964/1965 Acts. MLK vs Malcolm X strategies.",
      sections: [
        { heading: "Key idea", body: "Non-violent resistance + legal strategy achieved major civil rights victories." },
        { heading: "Key events", body: "Brown 1954, Montgomery 1955, March on Washington 1963, Acts 1964/1965." },
      ],
    },
  },
];
