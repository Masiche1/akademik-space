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
              { id: "a", text: "A neutral country" },
              { id: "b", text: "A supply route" },
              { id: "c", text: "Ground between opposing trenches" },
              { id: "d", text: "A propaganda term" },
            ],
            correctChoiceId: "c",
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
        {
          id: "oleh-u4-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the purpose of communication trenches?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To carry supplies by sea" },
              { id: "b", text: "To launch naval attacks" },
              { id: "c", text: "To mark the border with Switzerland" },
              { id: "d", text: "To connect front-line and reserve trenches" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trench system",
                statement: "Communication trenches linked trench lines.",
              },
            ],
            steps: [
              { reasoning: "They connected front, support and reserve trenches.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** To connect front-line and reserve trenches",
            commonErrors: ["Thinking they were fighting trenches."],
          },
        },
        {
          id: "oleh-u4-tr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which poison gas was first used on a large scale on the Western Front?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Chlorine" },
              { id: "d", text: "Helium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Gas warfare",
                statement: "Chlorine gas was used from 1915.",
              },
            ],
            steps: [
              { reasoning: "Chlorine was introduced in 1915.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Chlorine",
            commonErrors: ["Naming mustard gas as the first gas."],
          },
        },
        {
          id: "oleh-u4-tr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was shell shock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of artillery shell" },
              { id: "b", text: "A gas mask" },
              { id: "c", text: "A foot infection from wet trenches" },
              { id: "d", text: "Psychological trauma caused by bombardment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shell shock",
                statement: "Psychological trauma from artillery bombardment.",
              },
            ],
            steps: [
              { reasoning: "It was a mental, not physical, trench injury.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Psychological trauma caused by bombardment",
            commonErrors: ["Confusing it with trench foot."],
          },
        },
        {
          id: "oleh-u4-tr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which battle saw about 57,000 British casualties on its first day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Battle of Verdun" },
              { id: "b", text: "The Battle of the Somme" },
              { id: "c", text: "The Battle of Jutland" },
              { id: "d", text: "The Battle of Passchendaele" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Battle of the Somme",
                statement: "The first day produced about 57,000 British casualties.",
              },
            ],
            steps: [
              { reasoning: "1 July 1916 was the Somme's first day.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The Battle of the Somme",
            commonErrors: ["Confusing Somme with Verdun."],
          },
        },
        {
          id: "oleh-u4-tr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why were 'over the top' attacks so dangerous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Allies refused to fire artillery" },
              { id: "b", text: "Trenches collapsed before fighting began" },
              { id: "c", text: "Infantry crossed wire and mud under machine-gun fire" },
              { id: "d", text: "Soldiers attacked by sea" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trench stalemate",
                statement: "Defence dominated offence in no man's land.",
              },
            ],
            steps: [
              { reasoning: "Defences made crossing extremely costly.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Infantry crossed wire and mud under machine-gun fire",
            commonErrors: ["Blaming only poor training."],
          },
        },
        {
          id: "oleh-u4-tr-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which 1916 battle was known as the 'meat grinder'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marne" },
              { id: "b", text: "Tannenberg" },
              { id: "c", text: "Jutland" },
              { id: "d", text: "Verdun" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Battle of Verdun",
                statement: "Verdun became a symbol of attrition.",
              },
            ],
            steps: [
              { reasoning: "Verdun's huge casualties earned the nickname.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Verdun",
            commonErrors: ["Choosing the Somme instead."],
          },
        },
        {
          id: "oleh-u4-tr-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Battle of the Somme begin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1916 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Battle of the Somme",
                statement: "The battle began in 1916.",
              },
            ],
            steps: [{ reasoning: "The Somme offensive began on 1 July 1916.", marks: 1, markCode: "AO1" }],
            finalAnswer: "1916",
          },
        },
        {
          id: "oleh-u4-tr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many British casualties occurred on the first day of the Somme?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 57000, tolerance: 1000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Battle of the Somme",
                statement: "About 57,000 British casualties on day one.",
              },
            ],
            steps: [{ reasoning: "The accepted figure is about 57,000.", marks: 1, markCode: "AO1" }],
            finalAnswer: "57000",
          },
        },
        {
          id: "oleh-u4-tr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many total casualties were suffered at Verdun?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 700000, tolerance: 50000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Battle of Verdun",
                statement: "Casualty estimates are around 700,000.",
              },
            ],
            steps: [{ reasoning: "Verdun caused roughly 700,000 casualties.", marks: 1, markCode: "AO1" }],
            finalAnswer: "700000",
          },
        },
        {
          id: "oleh-u4-tr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Battle of Passchendaele fought?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1917 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Passchendaele",
                statement: "The battle took place in 1917.",
              },
            ],
            steps: [{ reasoning: "Passchendaele occurred during 1917.", marks: 1, markCode: "AO1" }],
            finalAnswer: "1917",
          },
        },
        {
          id: "oleh-u4-tr-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Approximately how many days did the Battle of the Somme last?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 141, tolerance: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Battle of the Somme",
                statement: "The offensive ran from July to November 1916.",
              },
            ],
            steps: [{ reasoning: "July 1 to November 18 is about 141 days.", marks: 1, markCode: "AO1" }],
            finalAnswer: "141",
          },
        },
        {
          id: "oleh-u4-tr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why trench warfare produced a stalemate on the Western Front.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trench stalemate",
                statement: "Defensive technology outweighed offensive tactics.",
              },
            ],
            steps: [
              {
                reasoning: "Machine guns and artillery dominated no man's land.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Barbed wire and mud slowed attackers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Defenders had shelter and prepared positions.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation of stalemate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Defensive weapons, wire and prepared trenches made attacks suicidal, so neither side could break through.",
            commonErrors: ["Only listing trench conditions."],
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
              { id: "a", text: "British battleships" },
              { id: "b", text: "German submarines" },
              { id: "c", text: "Russian destroyers" },
              { id: "d", text: "French aircraft" },
            ],
            correctChoiceId: "b",
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
        {
          id: "oleh-u4-sw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Lusitania?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A British passenger liner sunk by a German U-boat",
              },
              { id: "b", text: "A German battleship" },
              { id: "c", text: "A French passenger ferry" },
              { id: "d", text: "A British submarine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Lusitania",
                statement: "Passenger liner sunk by U-boat in 1915.",
              },
            ],
            steps: [
              {
                reasoning: "Liner sunk by a U-boat.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A British passenger liner sunk by a German U-boat",
            commonErrors: ["Thinking it was a warship."],
          },
        },
        {
          id: "oleh-u4-sw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Lusitania sunk?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1915 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Lusitania",
                statement: "Sunk in 1915.",
              },
            ],
            steps: [{ reasoning: "Lusitania sunk 1915.", marks: 1, markCode: "AO1" }],
            finalAnswer: "1915",
          },
        },
        {
          id: "oleh-u4-sw-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many Americans died when the Lusitania was sunk?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 128, tolerance: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Lusitania",
                statement: "128 Americans among the dead.",
              },
            ],
            steps: [{ reasoning: "About 128 Americans killed.", marks: 1, markCode: "AO1" }],
            finalAnswer: "128",
          },
        },
        {
          id: "oleh-u4-sw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year were tanks first used in battle?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1916 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Tanks",
                statement: "First used at the Somme in 1916.",
              },
            ],
            steps: [
              { reasoning: "Tanks first used 1916.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1916",
          },
        },
        {
          id: "oleh-u4-sw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the USA enter the First World War?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1917 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "USA entry",
                statement: "USA entered the war in 1917.",
              },
            ],
            steps: [
              { reasoning: "USA entered 1917.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1917",
          },
        },
        {
          id: "oleh-u4-sw-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the result of the Battle of Jutland?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A German victory that ended the blockade" },
              { id: "b", text: "The first use of poison gas at sea" },
              {
                id: "c",
                text: "Inconclusive — the German fleet stayed in port afterwards",
              },
              { id: "d", text: "A clear British victory that destroyed the German fleet" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Battle of Jutland",
                statement: "Largest naval battle; inconclusive result.",
              },
            ],
            steps: [
              {
                reasoning: "Jutland was inconclusive.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Inconclusive — the German fleet stayed in port afterwards",
            commonErrors: ["Calling it a decisive victory for either side."],
          },
        },
        {
          id: "oleh-u4-sw-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the main effect of the British blockade of Germany?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It cut German imports and contributed to wartime hardship",
              },
              { id: "b", text: "It brought the USA into the war" },
              { id: "c", text: "It forced Germany to surrender immediately" },
              { id: "d", text: "It destroyed the German navy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Naval blockade",
                statement: "Blockade starved Germany of imports.",
              },
            ],
            steps: [
              {
                reasoning: "Cut imports caused hardship.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** It cut German imports and contributed to wartime hardship",
            commonErrors: ["Saying the blockade ended the war at once."],
          },
        },
        {
          id: "oleh-u4-sw-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Zeppelins were used by Germany mainly to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spy on enemy submarines" },
              { id: "b", text: "Mine the North Sea" },
              { id: "c", text: "Transport troops across the Channel" },
              { id: "d", text: "Raid Britain with bombs from the air" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Zeppelins",
                statement: "Airships used to bomb Britain.",
              },
            ],
            steps: [
              {
                reasoning: "Zeppelins raided Britain.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Raid Britain with bombs from the air",
            commonErrors: ["Confusing them with submarines."],
          },
        },
        {
          id: "oleh-u4-sw-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why was unrestricted submarine warfare controversial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It required Germany to declare war on neutrals" },
              { id: "b", text: "It was banned by the Treaty of Versailles" },
              {
                id: "c",
                text: "U-boats sank merchant and neutral ships without warning",
              },
              { id: "d", text: "It only targeted warships" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "U-boat controversy",
                statement: "Sinking neutral ships without warning nearly brought USA in.",
              },
            ],
            steps: [
              {
                reasoning: "Neutral ships sunk without warning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** U-boats sank merchant and neutral ships without warning",
            commonErrors: ["Thinking it targeted only military vessels."],
          },
        },
        {
          id: "oleh-u4-sw-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "What did 'total war' mean for civilians and the home front in WWI?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Total war",
                statement: "Economy controlled; women in factories; propaganda.",
              },
            ],
            steps: [
              {
                reasoning: "Governments controlled economies/rationing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Women entered factories ('munitionettes').",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Propaganda and scientific mobilisation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Total war meant government control of the economy, rationing, women working in factories and propaganda to boost morale.",
            commonErrors: ["Only describing soldiers at the front."],
          },
        },
        {
          id: "oleh-u4-sw-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the war at sea helped decide the outcome of the war.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Naval war impact",
                statement: "Blockade starved Germany; U-boats threatened supplies.",
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
            ],
            finalAnswer:
              "The blockade starved Germany of supplies while U-boats threatened Allied shipping — the side that could sustain supplies won.",
            commonErrors: ["Only describing Jutland."],
          },
        },
        {
          id: "oleh-u4-sw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how new weapons and technology changed warfare in the First World War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "New technology",
                statement: "Machine guns/gas/tanks/aircraft/submarines changed the war.",
              },
            ],
            steps: [
              {
                reasoning: "Machine guns favoured defence and stalemate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Poison gas added terror weapon.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Tanks and aircraft appeared though limited early.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Submarines revolutionised naval warfare.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Machine guns entrenched the stalemate, gas added a terror weapon, tanks and aircraft offered new but limited means of attack, and submarines transformed naval warfare.",
            commonErrors: ["Claiming technology ended the war quickly."],
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
