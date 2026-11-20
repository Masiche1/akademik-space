module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson351",
    lesson: {
      id: "cieihis-u3-lesson-3-1", code: "3-1",
      title: "Apartheid in South Africa",
      goal: "I CAN explain apartheid system and resistance movements.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: Apartheid"],
      vocabulary: [
        { term: "Apartheid", definition: "System of racial segregation in South Africa 1948-1994." },
        { term: "ANC", definition: "African National Congress — liberation movement." },
        { term: "Nelson Mandela", definition: "Anti-apartheid leader, first black president." },
        { term: "Sharpeville Massacre", definition: "1960 killing of peaceful protesters." },
        { term: "Bantu Education Act", definition: "1953 law enforcing segregated education." },
        { term: "Truth and Reconciliation Commission", definition: "Post-apartheid justice body." },
      ],
      concept: {
        id: "cieihis-u3-s1-apart", title: "Apartheid",
        skill: "Understand apartheid system and resistance.",
        sections: [
          { heading: "Apartheid system", body: "1948: National Party introduced apartheid — racial segregation laws. Population Registration Act classified races. Group Areas Act forced residential segregation. Pass laws controlled movement. Bantu Education enforced inferior schooling." },
          { heading: "Resistance", body: "ANC led resistance — initially peaceful, later armed struggle after Sharpeville 1960. Mandela imprisoned 1964-1990. International sanctions increased pressure. 1990: Mandela released. 1994: first democratic elections — Mandela president." },
        ],
        keyFormulas: [
          { name: "Apartheid", statement: "1948-1994 segregation" },
          { name: "ANC", statement: "liberation movement" },
          { name: "1994", statement: "first democratic elections" },
        ],
        workedExample: {
          problem: "How did international pressure contribute to ending apartheid?",
          solution: "Sanctions, divestment, cultural boycotts isolated South Africa economically and politically.",
        },
        questions: [
          {
            id: "cieihis-u3-ap-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was apartheid?",
            response: { type: "mcq", choices: [
              { id: "a", text: "System of racial segregation in South Africa 1948-1994" }, { id: "b", text: "A type of government" }, { id: "c", text: "A peace treaty" }, { id: "d", text: "A trade agreement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Apartheid", statement: "Racial segregation." }],
              steps: [{ reasoning: "Apartheid = racial segregation system.", marks: 1, markCode: "M" }],
              finalAnswer: "Racial segregation system",
            },
          },
          {
            id: "cieihis-u3-ap-q2", difficulty: "foundation", totalMarks: 2,
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
            id: "cieihis-u3-ap-q3", difficulty: "core", totalMarks: 3,
            stem: "What was the Sharpeville Massacre?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sharpeville", statement: "1960 protest killing." }],
              steps: [
                { reasoning: "1960 killing of peaceful protesters.", marks: 1, markCode: "M" },
                { reasoning: "Led to ANC turning to armed struggle.", marks: 1, markCode: "M" },
                { reasoning: "International condemnation increased.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "1960 protest killing",
            },
          },
          {
            id: "cieihis-u3-ap-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define apartheid, ANC, Nelson Mandela, Sharpeville Massacre, Bantu Education Act, Truth and Reconciliation Commission. (b) What was apartheid? (c) Who was Mandela? (d) What was Sharpeville? (e) When did apartheid end? (f) What was ANC? (g) How did international pressure help? (h) Evaluate success of anti-apartheid movement.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Apartheid", statement: "System, resistance." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Racial segregation system.", marks: 1, markCode: "M" },
                { reasoning: "(c) Anti-apartheid leader.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1960 protest killing.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1994.", marks: 1, markCode: "M" },
                { reasoning: "(f) Liberation movement.", marks: 1, markCode: "M" },
                { reasoning: "(g) Sanctions, divestment, boycotts.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation — ended but inequality remains.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Apartheid system and resistance.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u3-ap-notes", title: "Apartheid — notes",
      summary: "1948-1994 racial segregation. ANC resistance, Mandela leadership, international sanctions → 1994 democracy.",
      sections: [
        { heading: "Key idea", body: "Apartheid enforced racial hierarchy through legal discrimination." },
        { heading: "End", body: "Mandela released 1990, first democratic elections 1994." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson352",
    lesson: {
      id: "cieihis-u3-lesson-3-2", code: "3-2",
      title: "Historical Skills: Source Analysis",
      goal: "I CAN analyse historical sources for reliability, bias and usefulness.",
      standards: ["Cambridge IGCSE History 0470", "Paper 2: source analysis"],
      vocabulary: [
        { term: "Primary source", definition: "Source created at the time of events." },
        { term: "Secondary source", definition: "Source created after events." },
        { term: "Reliability", definition: "Trustworthiness/accuracy of source." },
        { term: "Bias", definition: "Prejudice affecting source perspective." },
        { term: "Usefulness", definition: "Value of source for answering question." },
        { term: "Corroboration", definition: "Cross-checking sources for accuracy." },
      ],
      concept: {
        id: "cieihis-u3-s2-source", title: "Source analysis",
        skill: "Analyse historical sources critically.",
        sections: [
          { heading: "Source evaluation", body: "Who created it? When? Why? What's the purpose? Is it primary or secondary? What's the content? Who is the intended audience?" },
          { heading: "Reliability vs usefulness", body: "Reliable = accurate/trustworthy. Useful = relevant to question. A source can be reliable but not useful, or useful but biased/unreliable." },
        ],
        keyFormulas: [
          { name: "Primary", statement: "created at the time" },
          { name: "Secondary", statement: "created after" },
          { name: "Reliability", statement: "trustworthiness" },
        ],
        workedExample: {
          problem: "A government report praising its own policies. How would you evaluate it?",
          solution: "Likely biased — government has interest in positive portrayal. Useful for understanding official perspective but not neutral facts.",
        },
        questions: [
          {
            id: "cieihis-u3-src-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a primary source?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Source created at the time of events" }, { id: "b", text: "Source created after events" }, { id: "c", text: "A type of map" }, { id: "d", text: "A modern textbook" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary source", statement: "Contemporary source." }],
              steps: [{ reasoning: "Primary = created at time of events.", marks: 1, markCode: "M" }],
              finalAnswer: "Contemporary source",
            },
          },
          {
            id: "cieihis-u3-src-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between reliability and usefulness?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reliability vs usefulness", statement: "Trust vs relevance." }],
              steps: [
                { reasoning: "Reliable = accurate/trustworthy.", marks: 1, markCode: "M" },
                { reasoning: "Useful = relevant to question.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Trust vs relevance",
            },
          },
          {
            id: "cieihis-u3-src-q3", difficulty: "core", totalMarks: 3,
            stem: "How do you evaluate a historical source?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Source evaluation", statement: "Critical analysis." }],
              steps: [
                { reasoning: "Who created it? When? Why?", marks: 1, markCode: "M" },
                { reasoning: "What's the purpose? Audience?", marks: 1, markCode: "M" },
                { reasoning: "Reliability, bias, usefulness.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Who/when/why/purpose analysis",
            },
          },
          {
            id: "cieihs-u3-src-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define primary source, secondary source, reliability, bias, usefulness, corroboration. (b) What is a primary source? (c) What is a secondary source? (d) What is reliability? (e) What is bias? (f) How do you evaluate sources? (g) What is corroboration? (h) Evaluate a government report praising its own policies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Source analysis", statement: "Critical evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Contemporary source.", marks: 1, markCode: "M" },
                { reasoning: "(c) Post-event source.", marks: 1, markCode: "M" },
                { reasoning: "(d) Trustworthiness.", marks: 1, markCode: "M" },
                { reasoning: "(e) Prejudice affecting perspective.", marks: 1, markCode: "M" },
                { reasoning: "(f) Who/when/why/purpose.", marks: 1, markCode: "M" },
                { reasoning: "(g) Cross-checking sources.", marks: 1, markCode: "M" },
                { reasoning: "(h) Biased but useful for official view.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Source analysis skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u3-src-notes", title: "Source analysis — notes",
      summary: "Primary=contemporary; secondary=later. Evaluate who/when/why/purpose. Reliability≠usefulness.",
      sections: [
        { heading: "Key idea", body: "Critical source analysis reveals perspective, bias and limitations." },
        { heading: "Corroboration", body: "Cross-check multiple sources to verify accuracy." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson353",
    lesson: {
      id: "cieihis-u3-lesson-3-3", code: "3-3",
      title: "Historical Skills: Interpretation and Enquiry",
      goal: "I CAN construct historical arguments and evaluate interpretations.",
      standards: ["Cambridge IGCSE History 0470", "Paper 3: interpretation"],
      vocabulary: [
        { term: "Historical enquiry", definition: "Investigation of historical questions." },
        { term: "Interpretation", definition: "Historical viewpoint/analysis." },
        { term: "Argument", definition: "Reasoned position supported by evidence." },
        { term: "Evidence", definition: "Facts supporting argument." },
        { term: "Historiography", definition: "Study of how history is written." },
        { term: "Significance", definition: "Historical importance of events/figures." },
      ],
      concept: {
        id: "cieihis-u3-s3-interp", title: "Interpretation and enquiry",
        skill: "Construct and evaluate historical arguments.",
        sections: [
          { heading: "Historical enquiry", body: "Formulate questions, gather evidence, analyse sources, construct arguments, evaluate interpretations. History is interpretation, not just facts." },
          { heading: "Argument construction", body: "Thesis statement → evidence → analysis → conclusion. Consider multiple perspectives. Acknowledge limitations. Evaluate significance." },
        ],
        keyFormulas: [
          { name: "Enquiry", statement: "question→evidence→argument" },
          { name: "Interpretation", statement: "historical viewpoint" },
        ],
        workedExample: {
          problem: "Was the Cold War inevitable? Construct an argument.",
          solution: "Thesis: partly inevitable due to ideological differences. Evidence: post-WWII power vacuum, incompatible systems. Counter: could have been managed differently. Conclusion: structural factors made conflict likely but not certain.",
        },
        questions: [
          {
            id: "cieihis-u3-in-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is historical enquiry?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Investigation of historical questions" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map" }, { id: "d", text: "A textbook" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Enquiry", statement: "Historical investigation." }],
              steps: [{ reasoning: "Enquiry = investigating historical questions.", marks: 1, markCode: "M" }],
              finalAnswer: "Historical investigation",
            },
          },
          {
            id: "cieihis-u3-in-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an interpretation in history?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Interpretation", statement: "Historical viewpoint." }],
              steps: [
                { reasoning: "Historical viewpoint/analysis.", marks: 1, markCode: "M" },
                { reasoning: "Different historians interpret events differently.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Historical viewpoint",
            },
          },
          {
            id: "cieihis-u3-in-q3", difficulty: "core", totalMarks: 3,
            stem: "How do you construct a historical argument?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Argument construction", statement: "Evidence-based reasoning." }],
              steps: [
                { reasoning: "Thesis statement → evidence → analysis → conclusion.", marks: 1, markCode: "M" },
                { reasoning: "Consider multiple perspectives.", marks: 1, markCode: "M" },
                { reasoning: "Acknowledge limitations.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Thesis→evidence→conclusion",
            },
          },
          {
            id: "cieihs-u3-in-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define historical enquiry, interpretation, argument, evidence, historiography, significance. (b) What is historical enquiry? (c) What is interpretation? (d) How construct argument? (e) What is historiography? (f) What is significance? (g) Why do historians disagree? (h) Construct an argument: 'The Cold War was inevitable.'",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Interpretation", statement: "Argument, enquiry." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Historical investigation.", marks: 1, markCode: "M" },
                { reasoning: "(c) Historical viewpoint.", marks: 1, markCode: "M" },
                { reasoning: "(d) Thesis→evidence→conclusion.", marks: 1, markCode: "M" },
                { reasoning: "(e) Study of historical writing.", marks: 1, markCode: "M" },
                { reasoning: "(f) Historical importance.", marks: 1, markCode: "M" },
                { reasoning: "(g) Different evidence/perspectives.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid argument with evidence.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Historical interpretation skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u3-in-notes", title: "Interpretation — notes",
      summary: "History=interpretation not just facts. Enquiry: question→evidence→argument. Historians disagree.",
      sections: [
        { heading: "Key idea", body: "Good historical arguments consider evidence, perspectives, limitations." },
        { heading: "Significance", body: "Evaluate historical importance — impact, scale, lasting effects." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson354",
    lesson: {
      id: "cieihis-u3-lesson-3-4", code: "3-4",
      title: "The Holocaust and Genocide",
      goal: "I CAN explain the Holocaust, its causes and consequences.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: Holocaust"],
      vocabulary: [
        { term: "Holocaust", definition: "Nazi genocide of Jews 1941-1945." },
        { term: "Final Solution", definition: "Nazi plan to exterminate Jews." },
        { term: "Concentration camp", definition: "Nazi prison/extermination facility." },
        { term: "Auschwitz", definition: "Largest Nazi death camp." },
        { term: "Nuremberg Trials", definition: "Post-WWII trials of Nazi leaders." },
        { term: "Genocide", definition: "Deliberate destruction of a group." },
      ],
      concept: {
        id: "cieihis-u3-s4-holo", title: "The Holocaust",
        skill: "Understand Holocaust causes and consequences.",
        sections: [
          { heading: "Causes", body: "Nazi racial ideology — Jews seen as inferior threat. Propaganda dehumanised Jews. 1935 Nuremberg Laws stripped citizenship. Kristallnacht 1938 pogrom. WWII provided cover for genocide." },
          { heading: "Implementation", body: "1941: Final Solution ordered. Einsatzgruppen mobile killing squads. Concentration/extermination camps: Auschwitz, Treblinka, Sobibor. Gas chambers, forced labour, medical experiments. ~6 million Jews murdered." },
          { heading: "Consequences", body: "Nuremberg Trials established accountability. 'Never again' principle. Genocide Convention 1948. Holocaust education as warning against hatred." },
        ],
        keyFormulas: [
          { name: "Holocaust", statement: "1941-1945 genocide" },
          { name: "Final Solution", statement: "extermination plan" },
          { name: "6 million", statement: "Jewish victims" },
        ],
        workedExample: {
          problem: "How did Nazi ideology enable the Holocaust?",
          solution: "Racial antisemitism + propaganda + state power → systematic dehumanisation and genocide.",
        },
        questions: [
          {
            id: "cieihis-u3-ho-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the Holocaust?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Nazi genocide of Jews 1941-1945" }, { id: "b", text: "A type of war" }, { id: "c", text: "A peace treaty" }, { id: "d", text: "A trade agreement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Holocaust", statement: "Jewish genocide." }],
              steps: [{ reasoning: "Holocaust = Nazi genocide of Jews.", marks: 1, markCode: "M" }],
              finalAnswer: "Nazi genocide of Jews",
            },
          },
          {
            id: "cieihs-u3-ho-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the Final Solution?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Final Solution", statement: "Extermination plan." }],
              steps: [
                { reasoning: "Nazi plan to exterminate Jews.", marks: 1, markCode: "M" },
                { reasoning: "Implemented through camps and killing squads.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Extermination plan",
            },
          },
          {
            id: "cieihs-u3-ho-q3", difficulty: "core", totalMarks: 3,
            stem: "What caused the Holocaust?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Holocaust causes", statement: "Antisemitism, ideology." }],
              steps: [
                { reasoning: "Nazi racial ideology — Jews seen as inferior.", marks: 1, markCode: "M" },
                { reasoning: "Propaganda dehumanised Jews.", marks: 1, markCode: "M" },
                { reasoning: "State power enabled genocide.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Antisemitism + propaganda + state power",
            },
          },
          {
            id: "cieihs-u3-ho-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Holocaust, Final Solution, concentration camp, Auschwitz, Nuremberg Trials, genocide. (b) What was Holocaust? (c) What was Final Solution? (d) What caused Holocaust? (e) How many Jews were killed? (f) What were concentration camps? (g) What were Nuremberg Trials? (h) Evaluate whether Holocaust could have been prevented.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Holocaust", statement: "Causes, consequences." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Jewish genocide.", marks: 1, markCode: "M" },
                { reasoning: "(c) Extermination plan.", marks: 1, markCode: "M" },
                { reasoning: "(d) Antisemitism, propaganda, state power.", marks: 1, markCode: "M" },
                { reasoning: "(e) ~6 million.", marks: 1, markCode: "M" },
                { reasoning: "(f) Prison/extermination facilities.", marks: 1, markCode: "M" },
                { reasoning: "(g) Post-WWII Nazi trials.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Holocaust causes and consequences.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u3-ho-notes", title: "Holocaust — notes",
      summary: "1941-1945 Nazi genocide of ~6 million Jews. Final Solution, concentration camps, Nuremberg Trials.",
      sections: [
        { heading: "Key idea", body: "State-sponsored genocide enabled by propaganda, ideology, bureaucracy." },
        { heading: "Consequences", body: "Nuremberg Trials, Genocide Convention, 'Never again' principle." },
      ],
    },
  },
];
