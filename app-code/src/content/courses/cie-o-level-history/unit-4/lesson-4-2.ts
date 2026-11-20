import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "oleh-u4-lesson-4-2",
  code: "4-2",
  title: "Trench Warfare and the War at Sea",
  goal: "I CAN describe life in the trenches and the naval war, and explain why the war became a stalemate.",
  standards: ["2130/2147: Depth study — The First World War 1914–18"],
  vocabulary: [
    {
      term: "Trench warfare",
      definition: "Static fighting in dug-out trenches.",
    },
    {
      term: "No man's land",
      definition: "Barren ground between opposing trenches.",
    },
    {
      term: "Shell shock",
      definition: "Psychological trauma from artillery bombardment.",
    },
    {
      term: "Trench foot",
      definition: "Fungal infection from wet conditions in trenches.",
    },
    {
      term: "U-boat",
      definition: "German submarine used in unrestricted submarine warfare.",
    },
    {
      term: "Blockade",
      definition: "Naval strategy cutting off enemy supplies.",
    },
  ],
  concepts: [
    {
      id: "oleh-u4-trenches",
      title: "Life in the Trenches",
      skill:
        "Describe conditions and experiences of soldiers on the Western Front.",
      lesson: {
        sections: [
          {
            heading: "Trench system",
            body: "Opposing armies dug parallel trenches from North Sea to Switzerland. Front line, support and reserve trenches connected by communication trenches. 'No man's land' between — often 50–250 m of mud, barbed wire, shell holes. Machine guns and artillery made crossing suicidal.",
          },
          {
            heading: "Daily life and dangers",
            body: "Soldiers lived in mud, rats, disease, lice. Trench foot, trench fever, dysentery. Artillery bombardments (e.g. Somme first day ~57,000 British casualties). Gas attacks (chlorine, mustard). Shell shock — psychological trauma. Officers used 'over the top' attacks to break stalemate.",
          },
          {
            heading: "Major battles",
            body: "Verdun 1916 — 'meat grinder', ~700,000 casualties. Somme 1916 — first day 57,000 British casualties, ~1 million total. Passchendaele 1917 — mud and rain, ~500,000 casualties. Jutland 1916 — largest naval battle, inconclusive but German fleet stayed in port.",
          },
        ],
        keyFormulas: [
          {
            name: "Trenches",
            statement:
              "Static lines; mud/disease/gas/shell shock; Verdun+Somme+Passchendaele huge casualties.",
          },
        ],
        workedExample: {
          problem: "Why couldn't either side break the trench stalemate?",
          solution:
            "Defensive advantages (machine guns, barbed wire, artillery) overwhelmed attacking infantry — 'over the top' attacks caused massive casualties with little gain.",
        },
      },
      questions: [
        {
          id: "oleh-u4-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was 'no man's land'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ground between opposing trenches" },
              { id: "b", text: "A neutral country" },
              { id: "c", text: "A supply route" },
              { id: "d", text: "A propaganda term" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "No man's land",
                statement: "Barren ground between trenches.",
              },
            ],
            steps: [
              { reasoning: "Between trenches.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Ground between opposing trenches",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "oleh-u4-tr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two conditions soldiers suffered in the trenches.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trench conditions",
                statement: "Mud, disease, gas, shell shock.",
              },
            ],
            steps: [
              { reasoning: "Any two conditions.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Mud/wet conditions, disease (trench foot, dysentery), gas attacks, shell shock, rats/lice.",
            commonErrors: ["Only one condition."],
          },
        },
        {
          id: "oleh-u4-tr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why was the Battle of the Somme so costly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Somme",
                statement: "First day 57,000 British casualties.",
              },
            ],
            steps: [
              {
                reasoning: "Massive first-day casualties.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Attacking into machine guns.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "~1 million total casualties.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "First-day British casualties ~57,000; total ~1 million — attack ran into prepared German defences.",
            commonErrors: ["Vague 'many died'."],
          },
        },
        {
          id: "oleh-u4-tr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trench warfare.",
          parts: [
            { label: "a", prompt: "Trench system?", marks: 2 },
            { label: "b", prompt: "Conditions?", marks: 3 },
            { label: "c", prompt: "Somme/Verdun?", marks: 2 },
            { label: "d", prompt: "Why stalemate?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trenches",
                statement: "System+conditions+battles+stalemate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Parallel trench lines.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "No man's land between.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Any three conditions.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Somme/Verdun casualties.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Figures/scale.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Defence dominated offence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Machine guns/artillery.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) system (b) conditions (c) battles (d) stalemate",
          },
        },
      ],
    },
    {
      id: "oleh-u4-sea",
      title: "War at Sea and New Weapons",
      skill: "Describe naval warfare, U-boats and technological developments.",
      lesson: {
        sections: [
          {
            heading: "Naval war",
            body: "British blockade cut Germany off from imports — contributed to German hardship. German U-boats (unrestricted submarine warfare) sank merchant ships — Lusitania 1915 killed 128 Americans, turning opinion against Germany. Jutland 1916 — largest battleship clash, inconclusive; Germany kept fleet in port after.",
          },
          {
            heading: "New weapons",
            body: "Machine guns (Maxim) — defensive killing power. Poison gas — chlorine 1915, mustard gas later. Tanks — first used Somme 1916, limited effectiveness early. Aircraft — reconnaissance then fighter/bomber roles; Zeppelins raided Britain. Submarines revolutionised naval warfare.",
          },
          {
            heading: "War economy",
            body: "Total war — governments controlled economies, rationing, women in factories ('munitionettes'). Propaganda boosted morale. Scientific mobilisation — research into weapons, medicine, communications.",
          },
        ],
        keyFormulas: [
          {
            name: "Sea/tech",
            statement:
              "Blockade+U-boats+Jutland; machine guns/gas/tanks/aircraft; total war economy.",
          },
        ],
        workedExample: {
          problem: "Why was unrestricted submarine warfare controversial?",
          solution:
            "U-boats sank neutral/merchant ships without warning — Lusitania killed Americans, nearly bringing USA into war earlier than 1917.",
        },
      },
      questions: [
        {
          id: "oleh-u4-sw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What were U-boats?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "German submarines" },
              { id: "b", text: "British battleships" },
              { id: "c", text: "French aircraft" },
              { id: "d", text: "Russian destroyers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "U-boat",
                statement: "German submarine.",
              },
            ],
            steps: [
              { reasoning: "German submarines.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** German submarines",
            commonErrors: ["Confusing with surface ships."],
          },
        },
        {
          id: "oleh-u4-sw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two new weapons used in WWI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "New weapons",
                statement: "Gas, tanks, aircraft, machine guns.",
              },
            ],
            steps: [
              { reasoning: "Any two weapons.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Poison gas, tanks, aircraft, machine guns, submarines.",
            commonErrors: ["Naming old weapons."],
          },
        },
        {
          id: "oleh-u4-sw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why was the naval war important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Naval war",
                statement:
                  "Blockade starved Germany; U-boats threatened supplies.",
              },
            ],
            steps: [
              {
                reasoning: "Blockade cut German imports.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "U-boats threatened Allied shipping.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Lusitania nearly brought USA in.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Blockade starved Germany; U-boats threatened supplies — naval war decided who could sustain the war.",
            commonErrors: ["Only describing battles."],
          },
        },
        {
          id: "oleh-u4-sw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Sea war and technology.",
          parts: [
            { label: "a", prompt: "Blockade?", marks: 2 },
            { label: "b", prompt: "U-boat warfare?", marks: 2 },
            { label: "c", prompt: "New weapons?", marks: 3 },
            { label: "d", prompt: "Jutland?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sea/tech",
                statement: "Blockade+U-boats+weapons+Jutland.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cut German imports.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Starvation/hardship.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Unrestricted submarine warfare.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Lusitania/USA threat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any three weapons.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Impact noted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Largest naval battle.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Inconclusive/Germany stayed in port.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) blockade (b) U-boats (c) weapons (d) Jutland",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u4-4-2-notes",
      title: "Trenches and sea — notes",
      summary: "Trench conditions, Somme/Verdun, naval war, new weapons.",
      sections: [
        {
          heading: "Trenches",
          body: "Static lines; mud/disease/gas; Somme 57,000 first-day; Verdun ~700,000; stalemate.",
        },
        {
          heading: "Sea/tech",
          body: "Blockade+U-boats+Jutland; gas/tanks/aircraft; total war economy.",
        },
      ],
    },
  ],
};
