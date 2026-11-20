import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "oleh-u3-lesson-3-3",
  code: "3-3",
  title: "World War II 1939–45",
  goal: "I CAN describe the major campaigns and events of WWII and its consequences.",
  standards: ["2130/2147: The twentieth century — WWII"],
  vocabulary: [
    {
      term: "Blitzkrieg",
      definition: "'Lightning war' — fast combined-arms German tactic.",
    },
    {
      term: "Operation Barbarossa",
      definition: "German invasion of USSR, June 1941.",
    },
    { term: "D-Day", definition: "Allied invasion of Normandy, 6 June 1944." },
    {
      term: "Holocaust",
      definition: "Nazi genocide of six million Jews and others.",
    },
    {
      term: "Pearl Harbor",
      definition: "Japanese attack on US fleet, 7 December 1941.",
    },
    {
      term: "Atomic bombs",
      definition: "Hiroshima/Nagasaki bombs, August 1945.",
    },
  ],
  concepts: [
    {
      id: "oleh-u3-wwii-europe",
      title: "The European war",
      skill: "Describe major European campaigns from 1940 to 1945.",
      lesson: {
        sections: [
          {
            heading: "Early victories and Barbarossa",
            body: "Germany conquered France June 1940 (Blitzkrieg). Battle of Britain (July–Oct 1940) — Luftwaffe failed to win air superiority. Operation Barbarossa June 1941 — invaded USSR, reached Moscow outskirts but winter and Soviet resistance halted advance. Stalingrad (1942–43) turning point on Eastern Front.",
          },
          {
            heading: "Allied counterattack and end",
            body: "D-Day Normandy June 1944 opened Western Front. Soviets advanced from east — Berlin fell April 1945. Germany surrendered 8 May 1945 (VE Day). Concentration camps liberated — Holocaust exposed.",
          },
          {
            heading: "Key turning points",
            body: "Stalingrad (Feb 1943) — Germany's first major defeat, huge casualties. El Alamein (Oct 1942) — Allies stopped Axis in North Africa. Midway (June 1942) — US naval victory vs Japan. Combined, these shifted the war.",
          },
        ],
        keyFormulas: [
          {
            name: "WWII Europe",
            statement:
              "France falls→Barbarossa→Stalingrad turns→D-Day→Berlin falls→VE Day.",
          },
        ],
        workedExample: {
          problem: "Why was Stalingrad a turning point?",
          solution:
            "First major German defeat on land — massive casualties, destroyed Sixth Army, shifted initiative to Soviets permanently.",
        },
      },
      questions: [
        {
          id: "oleh-u3-we-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Operation Barbarossa?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "German invasion of the USSR" },
              { id: "b", text: "Allied invasion of Normandy" },
              { id: "c", text: "Battle for Stalingrad" },
              { id: "d", text: "Battle of Britain" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Barbarossa",
                statement: "June 1941 invasion of USSR.",
              },
            ],
            steps: [
              { reasoning: "Invasion of USSR.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** German invasion of the USSR",
            commonErrors: ["Confusing with D-Day."],
          },
        },
        {
          id: "oleh-u3-we-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why did the Battle of Britain matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Battle of Britain",
                statement: "Prevented German invasion of UK.",
              },
            ],
            steps: [
              {
                reasoning: "Luftwaffe failed to gain air superiority.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Germany couldn't invade UK.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "RAF victory prevented German invasion — Britain stayed in the war as base for later campaigns.",
            commonErrors: ["Saying Britain invaded Germany."],
          },
        },
        {
          id: "oleh-u3-we-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Stalingrad was a turning point in WWII.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stalingrad",
                statement: "First major German defeat; Soviet initiative.",
              },
            ],
            steps: [
              {
                reasoning: "First major German land defeat.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Massive casualties/army destroyed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shifted initiative to USSR.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Germany's first major land defeat — destroyed Sixth Army, shifted war initiative permanently to Soviets.",
            commonErrors: ["Vague 'important battle' answer."],
          },
        },
        {
          id: "oleh-u3-we-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "European war 1940–45.",
          parts: [
            { label: "a", prompt: "Fall of France?", marks: 2 },
            { label: "b", prompt: "Battle of Britain?", marks: 2 },
            { label: "c", prompt: "Barbarossa and Eastern Front?", marks: 3 },
            { label: "d", prompt: "Allied victory?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "European war",
                statement: "France→Britain→East→victory.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Blitzkrieg June 1940.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "France fell.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Air battle 1940.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "RAF won; no invasion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Barbarossa June 1941.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Stalingrad turning point.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Soviet advance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "D-Day June 1944.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Berlin falls/VE Day.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) France (b) Britain (c) East (d) victory",
          },
        },
      ],
    },
    {
      id: "oleh-u3-wwii-global",
      title: "The Global War and Holocaust",
      skill:
        "Describe the Pacific war, the Holocaust and the war's consequences.",
      lesson: {
        sections: [
          {
            heading: "Pacific war",
            body: "Japan invaded Manchuria 1931, China 1937. Pearl Harbor Dec 1941 brought USA into war. Battles: Midway June 1942 (turning point), island-hopping campaign, Iwo Jima/Okinawa. Atomic bombs on Hiroshima/Nagasaki Aug 1945 — Japan surrendered.",
          },
          {
            heading: "Holocaust",
            body: "Nazi genocide — six million Jews murdered in concentration/extermination camps (Auschwitz, Treblinka, etc.), plus Roma, disabled, political opponents, others — ~11 million total. 'Final Solution' systematic extermination. Liberated camps revealed atrocities — basis for Nuremberg trials and 'never again'.",
          },
          {
            heading: "Consequences",
            body: "~50-80 million dead, cities destroyed, Europe divided (Cold War begins), USA/USSR superpowers, UN created 1945, decolonisation accelerated, atomic age began — arms race and deterrence.",
          },
        ],
        keyFormulas: [
          {
            name: "WWII global",
            statement:
              "Pearl Harbor→Midway→island hopping→atom bombs; Holocaust; UN created.",
          },
        ],
        workedExample: {
          problem: "Why did the USA enter WWII?",
          solution:
            "Japan's surprise attack on Pearl Harbor December 1941 destroyed fleet and brought America into the war against Axis powers.",
        },
      },
      questions: [
        {
          id: "oleh-u3-wp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What event brought the USA into WWII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attack on Pearl Harbor" },
              { id: "b", text: "Invasion of Poland" },
              { id: "c", text: "Battle of Britain" },
              { id: "d", text: "D-Day" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pearl Harbor",
                statement: "Dec 1941 — USA enters war.",
              },
            ],
            steps: [
              {
                reasoning: "Pearl Harbor Dec 1941.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Attack on Pearl Harbor",
            commonErrors: ["Confusing with European events."],
          },
        },
        {
          id: "oleh-u3-wp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Holocaust?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Holocaust",
                statement: "Nazi genocide of ~11 million.",
              },
            ],
            steps: [
              {
                reasoning: "Systematic Nazi genocide.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Six million Jews + others.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Nazi systematic genocide — six million Jews and ~5 million others murdered in camps.",
            commonErrors: ["Underestimating scale."],
          },
        },
        {
          id: "oleh-u3-wp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How did the atomic bombs affect the end of WWII?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Atomic bombs",
                statement: "Hiroshima/Nagasaki → Japan surrenders.",
              },
            ],
            steps: [
              {
                reasoning: "Aug 1945 bombs on Japan.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Devastating casualties/destruction.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Japan surrendered, avoiding invasion.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Atomic bombs destroyed Hiroshima/Nagasaki — Japan surrendered, avoiding costly invasion.",
            commonErrors: ["Saying Germany surrendered."],
          },
        },
        {
          id: "oleh-u3-wp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "WWII consequences.",
          parts: [
            { label: "a", prompt: "Pacific war turning point?", marks: 2 },
            { label: "b", prompt: "Holocaust scale?", marks: 2 },
            { label: "c", prompt: "End of war?", marks: 2 },
            { label: "d", prompt: "Long-term consequences?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consequences",
                statement: "Pacific+Holocaust+end+aftermath.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Midway June 1942.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "US naval victory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Six million Jews.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "~11 million total.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "VE Day May 1945.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Japan surrenders Aug 1945.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "UN created.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cold War/decolonisation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Atomic age.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Midway (b) Holocaust (c) end (d) consequences",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u3-3-3-notes",
      title: "WWII — notes",
      summary: "European campaigns, Pacific war, Holocaust, consequences.",
      sections: [
        {
          heading: "Europe",
          body: "France falls; Battle of Britain; Barbarossa; Stalingrad turns; D-Day; Berlin falls.",
        },
        {
          heading: "Global",
          body: "Pearl Harbor→Midway→atom bombs; Holocaust; UN created; Cold War follows.",
        },
      ],
    },
  ],
};
