import type { Lesson } from "../../../types.ts";

export const lesson354: Lesson = {
  id: "cieihis-u3-lesson-3-4",
  code: "3-4",
  title: "The Holocaust and Genocide",
  goal: "I CAN explain the Holocaust, its causes and consequences.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Holocaust"],

  vocabulary: [
    { term: "Holocaust", definition: "Nazi genocide of Jews 1941-1945." },
    { term: "Final Solution", definition: "Nazi plan to exterminate Jews." },
    {
      term: "Concentration camp",
      definition: "Nazi prison/extermination facility.",
    },
    { term: "Auschwitz", definition: "Largest Nazi death camp." },
    {
      term: "Nuremberg Trials",
      definition: "Post-WWII trials of Nazi leaders.",
    },
    { term: "Genocide", definition: "Deliberate destruction of a group." },
  ],
  concepts: [
    {
      id: "cieihis-u3-s4-holo",
      title: "The Holocaust",
      skill: "Understand Holocaust causes and consequences.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "Nazi racial ideology — Jews seen as inferior threat. Propaganda dehumanised Jews. 1935 Nuremberg Laws stripped citizenship. Kristallnacht 1938 pogrom. WWII provided cover for genocide.",
          },
          {
            heading: "Implementation",
            body: "1941: Final Solution ordered. Einsatzgruppen mobile killing squads. Concentration/extermination camps: Auschwitz, Treblinka, Sobibor. Gas chambers, forced labour, medical experiments. ~6 million Jews murdered.",
          },
          {
            heading: "Consequences",
            body: "Nuremberg Trials established accountability. 'Never again' principle. Genocide Convention 1948. Holocaust education as warning against hatred.",
          },
        ],
        keyFormulas: [
          { name: "Holocaust", statement: "1941-1945 genocide" },
          { name: "Final Solution", statement: "extermination plan" },
          { name: "6 million", statement: "Jewish victims" },
        ],
        workedExample: {
          problem: "How did Nazi ideology enable the Holocaust?",
          solution:
            "Racial antisemitism + propaganda + state power → systematic dehumanisation and genocide.",
        },
      },
      questions: [
        {
          id: "cieihis-u3-ho-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Holocaust?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of war",
              },
              {
                id: "b",
                text: "A trade agreement",
              },
              {
                id: "c",
                text: "A peace treaty",
              },
              {
                id: "d",
                text: "Nazi genocide of Jews 1941-1945",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Holocaust",
                statement: "Jewish genocide.",
              },
            ],
            steps: [
              {
                reasoning: "Holocaust = Nazi genocide of Jews.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Nazi genocide of Jews",
          },
        },
        {
          id: "cieihs-u3-ho-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Final Solution?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Final Solution",
                statement: "Extermination plan.",
              },
            ],
            steps: [
              {
                reasoning: "Nazi plan to exterminate Jews.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Implemented through camps and killing squads.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Extermination plan",
          },
        },
        {
          id: "cieihs-u3-ho-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What caused the Holocaust?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Holocaust causes",
                statement: "Antisemitism, ideology.",
              },
            ],
            steps: [
              {
                reasoning: "Nazi racial ideology — Jews seen as inferior.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Propaganda dehumanised Jews.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State power enabled genocide.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Antisemitism + propaganda + state power",
          },
        },
        {
          id: "cieihs-u3-ho-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Holocaust, Final Solution, concentration camp, Auschwitz, Nuremberg Trials, genocide. (b) What was Holocaust? (c) What was Final Solution? (d) What caused Holocaust? (e) How many Jews were killed? (f) What were concentration camps? (g) What were Nuremberg Trials? (h) Evaluate whether Holocaust could have been prevented.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Holocaust",
                statement: "Causes, consequences.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Jewish genocide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Extermination plan.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Antisemitism, propaganda, state power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) ~6 million.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Prison/extermination facilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Post-WWII Nazi trials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Holocaust causes and consequences.",
          },
        },
        {
          id: "cieihis-u3-ho-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Kristallnacht?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The 1938 pogrom in which synagogues and Jewish businesses were attacked",
              },
              {
                id: "b",
                text: "A Nazi economic reform programme",
              },
              {
                id: "c",
                text: "The 1941 order for the Final Solution",
              },
              {
                id: "d",
                text: "The 1945 trials of Nazi leaders",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kristallnacht",
                statement: "1938 pogrom.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Kristallnacht (Night of Broken Glass) was the November 1938 pogrom attacking synagogues and Jewish property.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** The 1938 pogrom in which synagogues and Jewish businesses were attacked",
          },
        },
        {
          id: "cieihis-u3-ho-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Genocide Convention adopted by the United Nations?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1948,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Genocide Convention",
                statement: "1948.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Genocide Convention was adopted by the UN in 1948 in response to the Holocaust.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1948",
          },
        },
        {
          id: "cieihis-u3-ho-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What were the Nuremberg Laws of 1935?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nuremberg Laws",
                statement: "1935 anti-Jewish laws.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nazi laws stripping German Jews of citizenship and banning marriage or relations with non-Jews.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They legally defined and excluded Jews, laying the groundwork for persecution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1935 laws stripping Jewish citizenship",
          },
        },
        {
          id: "cieihis-u3-ho-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What were the Einsatzgruppen during the Holocaust?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "German factory workers forced into labour",
              },
              {
                id: "b",
                text: "Nazi propaganda ministers",
              },
              {
                id: "c",
                text: "Mobile Nazi killing squads that murdered Jews in occupied territories",
              },
              {
                id: "d",
                text: "Allied liberation forces",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Einsatzgruppen",
                statement: "Mobile killing squads.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Einsatzgruppen were mobile Nazi units that carried out mass shootings of Jews in occupied territories.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Mobile Nazi killing squads that murdered Jews in occupied territories",
          },
        },
        {
          id: "cieihis-u3-ho-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year were the Nuremberg Laws passed? (b) In which year did Kristallnacht occur?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1935,
              },
              {
                label: "b",
                answer: 1938,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Pre-war persecution",
                statement: "1935-38.",
              },
            ],
            steps: [
              {
                reasoning: "The Nuremberg Laws were passed in 1935.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Kristallnacht occurred in 1938.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1935, b) 1938",
          },
        },
        {
          id: "cieihis-u3-ho-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many Jews were murdered during the Holocaust?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "About 6 million",
              },
              {
                id: "b",
                text: "About 20 million",
              },
              {
                id: "c",
                text: "About 12 million",
              },
              {
                id: "d",
                text: "About 1 million",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Holocaust scale",
                statement: "~6 million Jews.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Approximately six million Jews were murdered in the Holocaust between 1941 and 1945.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** About 6 million",
          },
        },
        {
          id: "cieihis-u3-ho-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Nazi propaganda contributed to the Holocaust.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Propaganda role",
                statement: "Dehumanisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nazi propaganda portrayed Jews as an inferior racial threat, preparing public opinion for persecution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dehumanising imagery and language made it easier for ordinary Germans to accept discrimination and genocide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Propaganda combined with state control turned antisemitism into systematic state-sponsored murder.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Propaganda dehumanised Jews, enabling genocide",
          },
        },
        {
          id: "cieihis-u3-ho-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains how the Holocaust was carried out on such a massive scale?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It was carried out only by a small group of fanatics without state support",
              },
              {
                id: "b",
                text: "Nazi racial ideology combined with state bureaucracy, camps and killing squads",
              },
              {
                id: "c",
                text: "It was a spontaneous outbreak of violence",
              },
              {
                id: "d",
                text: "It was an accident of war",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Holocaust implementation",
                statement: "State-organised genocide.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Holocaust was implemented through Nazi ideology, state organisation, extermination camps and mobile killing squads.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Nazi racial ideology combined with state bureaucracy, camps and killing squads",
          },
        },
        {
          id: "cieihis-u3-ho-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year was the Final Solution ordered? (b) In which year did the Second World War end?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1941,
              },
              {
                label: "b",
                answer: 1945,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Holocaust timeline",
                statement: "1941-45.",
              },
            ],
            steps: [
              {
                reasoning: "The Final Solution was ordered in 1941.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The Second World War ended in 1945.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1941, b) 1945",
          },
        },
        {
          id: "cieihis-u3-ho-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess whether the Holocaust could have been prevented.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Assessment",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis: earlier international action — against Nazi persecution from 1933 or during Kristallnacht in 1938 — might have prevented or limited the genocide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: the Nuremberg Laws, Kristallnacht and concentration camps showed escalating persecution years before mass murder; refugee admission could have saved lives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: the Holocaust required the total collapse of European states in war; the scale and secrecy of Nazi planning made prevention very difficult.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing missed opportunities against the structural difficulty of stopping a determined state.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Prevention was possible but very difficult",
          },
        },
        {
          id: "cieihis-u3-ho-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What were the Nuremberg Trials?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Trials of Nazi leaders for war crimes after WWII",
              },
              {
                id: "b",
                text: "The laws banning Jewish citizenship",
              },
              {
                id: "c",
                text: "Military tribunals during the war",
              },
              {
                id: "d",
                text: "Nazi propaganda rallies in 1935",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nuremberg Trials",
                statement: "Post-WWII Nazi trials.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Nuremberg Trials were post-WWII trials held to prosecute Nazi leaders for war crimes and crimes against humanity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Trials of Nazi leaders for war crimes after WWII",
          },
        },
        {
          id: "cieihis-u3-ho-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the significance of the Genocide Convention of 1948.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Genocide Convention",
                statement: "Post-Holocaust law.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It defined genocide as a crime under international law for the first time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It committed signatory states to prevent and punish genocide, establishing 'never again' as an international principle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It was a direct response to the Holocaust, creating lasting legal and moral frameworks against mass atrocity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "First international law against genocide",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u3-ho-notes",
      title: "Holocaust — notes",
      summary:
        "1941-1945 Nazi genocide of ~6 million Jews. Final Solution, concentration camps, Nuremberg Trials.",
      sections: [
        {
          heading: "Key idea",
          body: "State-sponsored genocide enabled by propaganda, ideology, bureaucracy.",
        },
        {
          heading: "Consequences",
          body: "Nuremberg Trials, Genocide Convention, 'Never again' principle.",
        },
      ],
    },
  ],
};
