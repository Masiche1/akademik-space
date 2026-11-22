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
              { id: "a", text: "Battle for Stalingrad" },
              { id: "b", text: "Allied invasion of Normandy" },
              { id: "c", text: "German invasion of the USSR" },
              { id: "d", text: "Battle of Britain" },
            ],
            correctChoiceId: "c",
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
        {
          id: "oleh-u3-we-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did Operation Barbarossa begin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "June 1941" },
              { id: "b", text: "June 1944" },
              { id: "c", text: "September 1939" },
              { id: "d", text: "April 1945" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Barbarossa",
                statement: "Invasion of USSR June 1941.",
              },
            ],
            steps: [
              {
                reasoning: "Barbarossa began June 1941.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** June 1941",
            commonErrors: ["Confusing with other 1941 events."],
          },
        },
        {
          id: "oleh-u3-we-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was VE Day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Battle of Britain victory" },
              { id: "b", text: "D-Day invasion" },
              { id: "c", text: "Victory in Europe Day — Germany surrendered 8 May 1945" },
              { id: "d", text: "Japanese surrender" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "VE Day",
                statement: "Germany surrendered 8 May 1945.",
              },
            ],
            steps: [
              {
                reasoning: "VE Day = end of war in Europe.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Victory in Europe Day — Germany surrendered 8 May 1945",
            commonErrors: ["Confusing with VJ Day."],
          },
        },
        {
          id: "oleh-u3-we-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the Battle of Stalingrad end with Soviet victory?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1943 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stalingrad",
                statement: "Soviet victory February 1943.",
              },
            ],
            steps: [
              {
                reasoning: "Soviets won Stalingrad Feb 1943.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1943",
          },
        },
        {
          id: "oleh-u3-we-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Battle of El Alamein?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "El Alamein",
                statement: "Oct 1942 — stopped Axis in North Africa.",
              },
            ],
            steps: [
              {
                reasoning: "Allied victory in North Africa.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Stopped Axis advance; turning point.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "October 1942 Allied victory that stopped the Axis advance in North Africa.",
            commonErrors: ["Confusing with European battles."],
          },
        },
        {
          id: "oleh-u3-we-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was D-Day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Allied invasion of Normandy, 6 June 1944" },
              { id: "b", text: "Fall of Berlin" },
              { id: "c", text: "Pearl Harbor attack" },
              { id: "d", text: "Battle of Stalingrad" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "D-Day",
                statement: "Normandy invasion 6 June 1944.",
              },
            ],
            steps: [
              {
                reasoning: "D-Day opened Western Front.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Allied invasion of Normandy, 6 June 1944",
            commonErrors: ["Confusing with other landings."],
          },
        },
        {
          id: "oleh-u3-we-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two reasons Germany's advance in the USSR stalled.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eastern Front",
                statement: "Winter+Soviet resistance+overextension.",
              },
            ],
            steps: [
              {
                reasoning: "Russian winter halted advance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Soviet resistance and vast distances.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Overextended supply lines.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Winter, Soviet resistance, vast distances and overextended supply lines stalled Germany.",
            commonErrors: ["Only one reason."],
          },
        },
        {
          id: "oleh-u3-we-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did Berlin fall to the Soviets?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1945 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fall of Berlin",
                statement: "April-May 1945.",
              },
            ],
            steps: [
              { reasoning: "Berlin fell 1945.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1945",
          },
        },
        {
          id: "oleh-u3-we-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was Blitzkrieg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Allied air campaign" },
              { id: "b", text: "Soviet defensive tactic" },
              { id: "c", text: "'Lightning war' — fast combined-arms German tactic" },
              { id: "d", text: "Naval blockade strategy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blitzkrieg",
                statement: "Lightning war tactic.",
              },
            ],
            steps: [
              {
                reasoning: "Blitzkrieg = lightning war.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 'Lightning war' — fast combined-arms German tactic",
            commonErrors: ["Confusing with other tactics."],
          },
        },
        {
          id: "oleh-u3-we-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "When did Germany conquer France?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "June 1944" },
              { id: "b", text: "September 1939" },
              { id: "c", text: "May 1945" },
              { id: "d", text: "June 1940" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fall of France",
                statement: "France fell June 1940.",
              },
            ],
            steps: [
              {
                reasoning: "France conquered June 1940.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** June 1940",
            commonErrors: ["Confusing with D-Day."],
          },
        },
        {
          id: "oleh-u3-we-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "European war 1940–45.",
          parts: [
            { label: "a", prompt: "Early German victories?", marks: 2 },
            { label: "b", prompt: "Eastern Front?", marks: 2 },
            { label: "c", prompt: "Allied victory?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "European war",
                statement: "Victories→Stalingrad→D-Day→victory.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "France falls June 1940; Battle of Britain fails.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Blitzkrieg successes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Barbarossa June 1941.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Stalingrad 1943 turning point.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "D-Day June 1944.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Berlin falls; VE Day May 1945.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) victories (b) Eastern Front (c) victory",
          },
        },
        {
          id: "oleh-u3-we-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Battle of Britain fought?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1940 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Battle of Britain",
                statement: "July-October 1940.",
              },
            ],
            steps: [
              { reasoning: "Battle of Britain 1940.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1940",
          },
        },
        {
          id: "oleh-u3-we-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the European war from 1940 to 1945.",
          parts: [
            { label: "a", prompt: "Fall of France and Battle of Britain?", marks: 2 },
            { label: "b", prompt: "Operation Barbarossa?", marks: 2 },
            { label: "c", prompt: "Stalingrad?", marks: 3 },
            { label: "d", prompt: "Allied victory?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "European war",
                statement: "France→Barbarossa→Stalingrad→victory.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Blitzkrieg; France fell June 1940.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "RAF won Battle of Britain; no invasion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Invasion of USSR June 1941.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reached Moscow outskirts; winter halted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "First major German land defeat.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Massive casualties; Sixth Army destroyed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Shifted initiative to USSR.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "D-Day June 1944 opened Western Front.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Berlin falls; VE Day May 1945.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) France/Britain (b) Barbarossa (c) Stalingrad (d) victory",
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
              { id: "a", text: "Invasion of Poland" },
              { id: "b", text: "Attack on Pearl Harbor" },
              { id: "c", text: "D-Day" },
              { id: "d", text: "Battle of Britain" },
            ],
            correctChoiceId: "b",
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
        {
          id: "oleh-u3-wp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Battle of Midway?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Battle for Berlin" },
              { id: "b", text: "Allied invasion of France" },
              { id: "c", text: "Siege of Stalingrad" },
              { id: "d", text: "June 1942 US naval victory that turned the Pacific war" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Midway",
                statement: "June 1942 turning point in Pacific.",
              },
            ],
            steps: [
              {
                reasoning: "Midway = US naval victory 1942.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** June 1942 US naval victory that turned the Pacific war",
            commonErrors: ["Confusing with other battles."],
          },
        },
        {
          id: "oleh-u3-wp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "On which cities were the atomic bombs dropped in August 1945?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tokyo and Osaka" },
              { id: "b", text: "Hiroshima and Nagasaki" },
              { id: "c", text: "Berlin and Moscow" },
              { id: "d", text: "Kyoto and Hiroshima only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atomic bombs",
                statement: "Hiroshima and Nagasaki, Aug 1945.",
              },
            ],
            steps: [
              {
                reasoning: "Bombs dropped on Hiroshima/Nagasaki.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Hiroshima and Nagasaki",
            commonErrors: ["Wrong cities."],
          },
        },
        {
          id: "oleh-u3-wp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Japan surrender, ending WWII?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1945 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Japan surrender",
                statement: "August 1945.",
              },
            ],
            steps: [
              { reasoning: "Japan surrendered Aug 1945.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1945",
          },
        },
        {
          id: "oleh-u3-wp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the 'Final Solution'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Final Solution",
                statement: "Nazi plan for systematic extermination.",
              },
            ],
            steps: [
              {
                reasoning: "Systematic Nazi extermination plan.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Targeted Jews and other groups in camps.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Nazi plan for the systematic extermination of Jews and other targeted groups.",
            commonErrors: ["Vague 'killing' answer."],
          },
        },
        {
          id: "oleh-u3-wp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which battle turned the tide of the Pacific war in favour of the USA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Okinawa" },
              { id: "b", text: "Pearl Harbor" },
              { id: "c", text: "Iwo Jima" },
              { id: "d", text: "Midway" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Midway",
                statement: "Turning point June 1942.",
              },
            ],
            steps: [
              {
                reasoning: "Midway was the turning point.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Midway",
            commonErrors: ["Confusing with later battles."],
          },
        },
        {
          id: "oleh-u3-wp-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two long-term consequences of WWII.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WWII consequences",
                statement: "UN+Cold War+atomic age+decolonisation.",
              },
            ],
            steps: [
              {
                reasoning: "UN created 1945; USA/USSR superpowers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Europe divided — Cold War began.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Atomic age began — arms race.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "UN created, Cold War began, atomic age started, decolonisation accelerated.",
            commonErrors: ["Only one consequence."],
          },
        },
        {
          id: "oleh-u3-wp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many people (in millions) died in WWII?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 65, tolerance: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WWII deaths",
                statement: "50-80 million dead.",
              },
            ],
            steps: [
              {
                reasoning: "50-80 million dead, mostly civilians.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "50-80",
          },
        },
        {
          id: "oleh-u3-wp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organisation replaced the League of Nations after WWII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Warsaw Pact" },
              { id: "b", text: "The EU" },
              { id: "c", text: "The United Nations" },
              { id: "d", text: "NATO" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UN",
                statement: "Created 1945 after WWII.",
              },
            ],
            steps: [
              {
                reasoning: "UN replaced League.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The United Nations",
            commonErrors: ["Confusing with military alliances."],
          },
        },
        {
          id: "oleh-u3-wp-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which two countries emerged as superpowers after WWII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Britain and France" },
              { id: "b", text: "USA and USSR" },
              { id: "c", text: "Germany and Japan" },
              { id: "d", text: "China and India" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Superpowers",
                statement: "USA and USSR dominated after 1945.",
              },
            ],
            steps: [
              {
                reasoning: "USA and USSR became superpowers.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** USA and USSR",
            commonErrors: ["Choosing old European powers."],
          },
        },
        {
          id: "oleh-u3-wp-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "WWII consequences.",
          parts: [
            { label: "a", prompt: "Pacific war outcome?", marks: 2 },
            { label: "b", prompt: "Holocaust scale?", marks: 2 },
            { label: "c", prompt: "New world order?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consequences",
                statement: "Pacific+Holocaust+order.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Midway turned war; atom bombs ended it.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Japan surrendered Aug 1945.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Six million Jews murdered.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "~11 million total victims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "UN created; superpowers; Cold War.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Atomic age began.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Pacific (b) Holocaust (c) new order",
          },
        },
        {
          id: "oleh-u3-wp-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the United Nations founded?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1945 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UN",
                statement: "Founded 1945.",
              },
            ],
            steps: [
              { reasoning: "UN founded 1945.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1945",
          },
        },
        {
          id: "oleh-u3-wp-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate the consequences of World War II.",
          parts: [
            { label: "a", prompt: "Human cost?", marks: 2 },
            { label: "b", prompt: "New international order?", marks: 2 },
            { label: "c", prompt: "Atomic age?", marks: 2 },
            { label: "d", prompt: "Long-term significance?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consequences",
                statement: "Cost+order+atomic age+significance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "50-80 million dead; cities destroyed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Europe devastated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "UN created; USA/USSR superpowers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Cold War divided Europe.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Atomic bombs used Aug 1945.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Arms race/nuclear deterrence began.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Decolonisation accelerated.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "'Never again' — Nuremberg trials.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Shaped modern world.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) human cost (b) new order (c) atomic age (d) significance",
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
