import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "oleh-u2-lesson-2-2",
  code: "2-2",
  title: "International Organisations and Global Issues",
  goal: "I CAN describe international organisations and global issues like climate change and human rights.",
  standards: ["2130: International organisations"],
  vocabulary: [
    {
      term: "UN",
      definition: "United Nations — founded 1945 for peace and cooperation.",
    },
    {
      term: "NATO",
      definition: "North Atlantic Treaty Organization — military alliance.",
    },
    {
      term: "EU",
      definition: "European Union — political and economic union.",
    },
    { term: "WHO", definition: "World Health Organization — health agency." },
    {
      term: "Climate change",
      definition: "Long-term change in global temperatures.",
    },
    {
      term: "Human rights",
      definition: "Fundamental rights all humans are entitled to.",
    },
  ],
  concepts: [
    {
      id: "oleh-u2-organisations",
      title: "International organisations",
      skill: "Describe UN, NATO, EU and other global bodies.",
      lesson: {
        sections: [
          {
            heading: "United Nations",
            body: "Founded 1945 — maintains peace, develops friendly relations, promotes human rights. Main bodies: General Assembly (all members), Security Council (5 permanent members with veto), Secretariat (Secretary-General).",
          },
          {
            heading: "NATO and EU",
            body: "NATO: military alliance — collective defence (attack one = attack all). EU: political/economic union — single market, common currency (euro), free movement. Both expanded after Cold War.",
          },
          {
            heading: "Specialised agencies",
            body: "WHO: health (COVID-19 response). UNESCO: education/culture. UNICEF: children's welfare. WTO: trade rules. IMF/World Bank: economic development. All coordinate global responses.",
          },
        ],
        keyFormulas: [
          {
            name: "Organisations",
            statement:
              "UN=peace; NATO=defence; EU=economic; WHO/UNICEF=specialised.",
          },
        ],
        workedExample: {
          problem:
            "How does the UN Security Council differ from General Assembly?",
          solution:
            "Security Council: 15 members, 5 permanent with veto — powerful decisions. General Assembly: all 193 members — recommendations only.",
        },
      },
      questions: [
        {
          id: "oleh-u2-io-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is NATO?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Military alliance for collective defence" },
              { id: "b", text: "Economic union" },
              { id: "c", text: "Trade organisation" },
              { id: "d", text: "Health agency" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NATO",
                statement: "Military alliance.",
              },
            ],
            steps: [
              {
                reasoning: "NATO = military alliance.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Military alliance",
            commonErrors: ["Confusing with EU."],
          },
        },
        {
          id: "oleh-u2-io-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the five permanent members of the Security Council?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "P5",
                statement: "USA, Russia, China, UK, France.",
              },
            ],
            steps: [
              { reasoning: "Any three correct.", marks: 1, markCode: "AO1" },
              { reasoning: "All five.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "USA, Russia, China, UK, France.",
            commonErrors: ["Including Germany/Japan."],
          },
        },
        {
          id: "oleh-u2-io-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare UN General Assembly and Security Council.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UN bodies",
                statement: "All members vs 15 members+veto.",
              },
            ],
            steps: [
              {
                reasoning: "GA: all 193 members, recommendations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "SC: 15 members, 5 permanent veto.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Different powers.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "GA=all members+recommendations; SC=15+veto+decisions.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "oleh-u2-io-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "International organisations.",
          parts: [
            { label: "a", prompt: "Define NATO.", marks: 1 },
            { label: "b", prompt: "Define EU.", marks: 2 },
            { label: "c", prompt: "P5 members?", marks: 2 },
            { label: "d", prompt: "UN vs Security Council?", marks: 2 },
            { label: "e", prompt: "Name a specialised agency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organisations",
                statement: "Definitions+comparison+agencies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Military alliance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Political/economic union.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Single market/euro.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "USA/Russia/China/UK/France.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "All five.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "GA vs SC differences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Powers differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "WHO/UNICEF/UNESCO/WTO.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "e", reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) NATO (b) EU (c) P5 (d) UN vs SC (e) agency",
          },
        },
      ],
    },
    {
      id: "oleh-u2-global-issues",
      title: "Global issues: climate change and human rights",
      skill: "Describe climate change and human rights as global issues.",
      lesson: {
        sections: [
          {
            heading: "Climate change",
            body: "Global warming: greenhouse gases trap heat → rising temperatures. Effects: sea level rise, extreme weather, ecosystem disruption. Agreements: Kyoto Protocol (1997), Paris Agreement (2015) — limit warming to 1.5-2°C.",
          },
          {
            heading: "Human rights",
            body: "Universal Declaration of Human Rights (1948): life, liberty, security, education, etc. Violations: slavery, torture, discrimination, child labour. International Criminal Court prosecutes war crimes/crimes against humanity.",
          },
          {
            heading: "Other global issues",
            body: "Poverty: 700m+ live in extreme poverty. Inequality: growing gap rich/poor. Disease: HIV/AIDS, malaria, COVID-19. Refugees: 100m+ displaced by conflict/climate.",
          },
        ],
        keyFormulas: [
          {
            name: "Global issues",
            statement:
              "Climate=warming+agreements; Rights=declaration+violations+ICC.",
          },
        ],
        workedExample: {
          problem: "What is the Paris Agreement?",
          solution:
            "2015 international agreement to limit global warming to 1.5-2°C above pre-industrial levels.",
        },
      },
      questions: [
        {
          id: "oleh-u2-gi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes climate change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greenhouse gases trapping heat" },
              { id: "b", text: "Natural cycles only" },
              { id: "c", text: "Volcanic eruptions" },
              { id: "d", text: "Solar flares" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate change",
                statement: "Greenhouse gases trap heat.",
              },
            ],
            steps: [
              { reasoning: "Greenhouse effect.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Greenhouse gases",
            commonErrors: ["Saying it's purely natural."],
          },
        },
        {
          id: "oleh-u2-gi-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Universal Declaration of Human Rights?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UDHR",
                statement: "1948 declaration of fundamental rights.",
              },
            ],
            steps: [
              { reasoning: "Fundamental rights.", marks: 1, markCode: "AO1" },
              { reasoning: "1948.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1948 declaration of fundamental human rights.",
            commonErrors: ["Saying it's a treaty."],
          },
        },
        {
          id: "oleh-u2-gi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two effects of climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate effects",
                statement:
                  "Sea level rise, extreme weather, ecosystem disruption.",
              },
            ],
            steps: [
              { reasoning: "Sea level rise.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Extreme weather events.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ecosystem/species loss.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sea level rise+extreme weather+ecosystem disruption.",
            commonErrors: ["Only one effect."],
          },
        },
        {
          id: "oleh-u2-gi-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Global issues.",
          parts: [
            { label: "a", prompt: "Climate change cause?", marks: 1 },
            { label: "b", prompt: "Two effects?", marks: 2 },
            { label: "c", prompt: "UDHR?", marks: 2 },
            { label: "d", prompt: "Paris Agreement?", marks: 2 },
            { label: "e", prompt: "Name another global issue.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global issues",
                statement: "Climate+rights+agreements+other.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greenhouse gases.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two effects.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "1948 declaration.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Fundamental rights.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "2015 agreement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Limit warming 1.5-2°C.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Poverty/inequality/disease/refugees.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "e", reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "(a) greenhouse (b) effects (c) UDHR (d) Paris (e) other issue",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u2-2-2-notes",
      title: "International organisations — notes",
      summary: "UN, NATO, EU, climate change and human rights.",
      sections: [
        {
          heading: "Organisations",
          body: "UN=peace; NATO=defence; EU=economic; WHO/UNICEF=specialised. P5=USA/Russia/China/UK/France.",
        },
        {
          heading: "Global issues",
          body: "Climate=greenhouse+Paris Agreement; rights=UDHR+ICC; poverty/disease/refugees.",
        },
      ],
    },
  ],
};
