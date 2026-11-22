import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "cial-c-u3-lesson-3-1",
  code: "3-1",
  title: "Periodic trends",
  goal: "I CAN explain trends in atomic radius, ionisation energy and electron affinity across periods and down groups.",
  standards: ["9701 3.1: periodicity"],
  vocabulary: [
    {
      term: "Atomic radius",
      definition: "Distance from nucleus to outermost electron shell.",
    },
    {
      term: "Ionisation energy",
      definition:
        "Energy required to remove one mole of electrons from one mole of gaseous atoms/ions.",
    },
    {
      term: "First ionisation energy",
      definition: "Energy to remove the first (outermost) electron.",
    },
    {
      term: "Electron affinity",
      definition:
        "Energy change when one mole of gaseous atoms gains one mole of electrons.",
    },
    {
      term: "Shielding",
      definition: "Inner electrons reducing nuclear attraction on outer electrons.",
    },
    {
      term: "Period",
      definition: "Horizontal row; elements have same number of electron shells.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u3-radius-ie",
      title: "Atomic radius and ionisation energy",
      skill: "Explain periodic trends in size and ionisation energy.",
      lesson: {
        sections: [
          {
            heading: "Atomic radius",
            body: "Across a period: radius decreases — more protons pull the same shell closer. Down a group: radius increases — extra shells added. Transition metals vary less (similar sizes, $d$-block filling).",
          },
          {
            heading: "Ionisation energy",
            body: "Across a period IE increases — greater nuclear charge, same shielding. Down a group IE decreases — more shielding and larger radius. Jump between groups shows shell structure: e.g. $Mg$ ($3s^2$) $>$ $Al$ ($3p^1$) because $3p$ is higher energy.",
          },
          {
            heading: "Factors",
            body: "IE depends on: nuclear charge ($\\uparrow$ IE), atomic radius ($\\uparrow$ radius $\\downarrow$ IE), shielding ($\\uparrow$ shielding $\\downarrow$ IE), subshell ($s>p>d>f$ for same shell — $s$ closer to nucleus).",
          },
        ],
        keyFormulas: [
          {
            name: "Trends",
            statement:
              "Across period: radius $\\downarrow$, IE $\\uparrow$. Down group: radius $\\uparrow$, IE $\\downarrow$.",
          },
          {
            name: "IE factors",
            statement: "Nuclear charge, radius, shielding, subshell energy.",
          },
        ],
        workedExample: {
          problem: "Explain why $Na$ has a lower first ionisation energy than $Mg$.",
          solution:
            "$Na$ is $3s^1$ — losing one electron gives stable $[Ne]$. $Mg$ is $3s^2$ — also stable but smaller and more protons. $Mg$ has higher IE (higher charge density).",
        },
      },
      questions: [
        {
          id: "cial-c-u3-ri-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does atomic radius change across a period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First increases then decreases" },
              { id: "b", text: "Increases" },
              { id: "c", text: "Decreases" },
              { id: "d", text: "Stays constant" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periodicity",
                statement: "More protons, same shells $\\to$ smaller radius.",
              },
            ],
            steps: [
              {
                reasoning: "Atomic radius decreases across a period.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Decreases",
          },
        },
        {
          id: "cial-c-u3-ri-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the first ionisation energy increases from Li to F across Period 2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionisation energy trend",
                statement:
                  "Increasing nuclear charge with similar shielding $\\to$ harder to remove electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Nuclear charge increases across the period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shielding stays similar (same shells).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stronger attraction $\\to$ higher IE.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Higher nuclear charge, similar shielding",
          },
        },
        {
          id: "cial-c-u3-ri-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is the first ionisation energy of Al lower than that of Mg, despite Al having more protons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mg has a partially filled $3p$ subshell" },
              { id: "b", text: "Al has more electron shells than Mg" },
              { id: "c", text: "Al has fewer protons than Mg" },
              { id: "d", text: "The $3p$ electron in Al is higher in energy and easier to remove than the paired $3s$ electrons in Mg" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subshell energy",
                statement:
                  "$3p$ electron is higher energy/easier to remove than paired $3s^2$.",
              },
            ],
            steps: [{ reasoning: "The unpaired $3p^1$ electron is removed before the stable paired $3s^2$ pair.", marks: 1, markCode: "A" }],
            finalAnswer: "$3p^1$ easier to remove than $3s^2$",
            commonErrors: ["Ignoring subshell differences — IE doesn't always rise smoothly."],
          },
        },
        {
          id: "cial-c-u3-ri-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Periodic trends.",
          parts: [
            {
              label: "a",
              prompt: "State how atomic radius changes across a period and down a group.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the decrease in atomic radius across Period 3.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why Na has a lower first IE than Mg.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What factors affect ionisation energy? List three.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periodic trends",
                statement:
                  "Radius: $\\downarrow$ across, $\\uparrow$ down. IE: opposite.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Across: decreases; down: increases.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Both correct directions stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Protons increase across the period.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Same number of shells — no extra shielding.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Stronger pull draws electrons closer.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "$Na$ is $3s^1$ — one outer electron, stable $Na^+$ config.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$Mg$ is $3s^2$ — paired, higher IE.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Nuclear charge, atomic radius, shielding (any three incl. subshell).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Three valid factors listed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) across↓ down↑ (b) more p same shells (c) 3s1 vs 3s2 (d) charge/radius/shielding",
          },
        },
        {
          id: "cial-c-u3-ri-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does atomic radius change down Group 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases" },
              { id: "b", text: "Decreases" },
              { id: "c", text: "Stays constant" },
              { id: "d", text: "Varies randomly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Group trend", statement: "Extra shells increase radius." }],
            steps: [{ reasoning: "Radius increases down a group.", marks: 1, markCode: "A" }],
            finalAnswer: "Increases",
          },
        },
        {
          id: "cial-c-u3-ri-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electron shells does a neutral sodium atom occupy?",
          response: { type: "numeric", parts: [{ label: "shells", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Electron shells", statement: "Na configuration is 2,8,1." }],
            steps: [
              { reasoning: "Na has electrons in shells 1, 2 and 3.", working: "2,8,1", marks: 1, markCode: "M" },
              { reasoning: "Number of shells = 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cial-c-u3-ri-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why first ionisation energy decreases down Group 1.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "IE factors", statement: "Shielding and radius lower IE." }],
            steps: [
              { reasoning: "Atoms get larger down the group.", marks: 1, markCode: "M" },
              { reasoning: "More inner shells shield the outer electron.", marks: 1, markCode: "M" },
              { reasoning: "The outer electron is less strongly attracted, so IE falls.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Larger radius and more shielding.",
          },
        },
        {
          id: "cial-c-u3-ri-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many valence electrons does magnesium have?",
          response: { type: "numeric", parts: [{ label: "valence e", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Valence electrons", statement: "Outer-shell electrons." }],
            steps: [
              { reasoning: "Mg is [Ne]3s2.", working: "3s2", marks: 1, markCode: "M" },
              { reasoning: "Valence electrons = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-c-u3-ri-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which factor most directly increases first ionisation energy across a period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing nuclear charge with similar shielding" },
              { id: "b", text: "Decreasing proton number" },
              { id: "c", text: "Increasing atomic radius" },
              { id: "d", text: "Increasing shielding only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Ionisation energy", statement: "Nuclear charge attracts electrons." }],
            steps: [{ reasoning: "More protons with similar shielding raise IE.", marks: 1, markCode: "A" }],
            finalAnswer: "Increasing nuclear charge",
          },
        },
        {
          id: "cial-c-u3-ri-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is the first ionisation energy of sulfur lower than that of phosphorus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "S has more electron shells than P" },
              { id: "b", text: "P has a stable half-filled $3p^3$ subshell while S has a paired electron in $3p^4$" },
              { id: "c", text: "P forms anions more easily than S" },
              { id: "d", text: "S has more protons than P" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Subshell stability", statement: "Half-filled subshells are stable." }],
            steps: [{ reasoning: "The paired $3p$ electron in S is repelled and removed more easily than P's half-filled stable subshell.", marks: 1, markCode: "A" }],
            finalAnswer: "P has stable half-filled 3p3; S has paired 3p4.",
            commonErrors: ["Ignoring subshell stability and pairing."],
          },
        },
        {
          id: "cial-c-u3-ri-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An element has configuration $[Ar]4s^23d^6$. State its period.",
          response: { type: "numeric", parts: [{ label: "period", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Period", statement: "Highest occupied shell." }],
            steps: [
              { reasoning: "Highest shell is n=4.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Period = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u3-ri-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does sodium have a lower first ionisation energy than magnesium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mg has fewer protons than Na" },
              { id: "b", text: "Na has a single $3s$ electron that leaves a stable noble-gas configuration" },
              { id: "c", text: "Na has more electron shells than Mg" },
              { id: "d", text: "Mg forms anions more easily than Na" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Electron pairing", statement: "3s2 is more stable than 3s1." }],
            steps: [{ reasoning: "Removing Na's single $3s^1$ electron gives a stable noble-gas configuration, while Mg's paired $3s^2$ is held more tightly.", marks: 1, markCode: "A" }],
            finalAnswer: "3s1 loses easily; 3s2 is more stable.",
          },
        },
        {
          id: "cial-c-u3-ri-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is shielding in the context of ionisation energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus attracting electrons" },
              { id: "b", text: "Inner electrons reducing attraction on outer electrons" },
              { id: "c", text: "Electrons moving between shells" },
              { id: "d", text: "Bonding between atoms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Shielding", statement: "Inner electrons screen nuclear charge." }],
            steps: [{ reasoning: "Shielding reduces effective nuclear charge.", marks: 1, markCode: "A" }],
            finalAnswer: "Inner electrons reduce attraction",
          },
        },
        {
          id: "cial-c-u3-ri-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electron shells does calcium occupy?",
          response: { type: "numeric", parts: [{ label: "shells", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Electron shells", statement: "Ca configuration ends 4s2." }],
            steps: [
              { reasoning: "Ca is [Ar]4s2, occupying shells 1-4.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Number of shells = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u3-ri-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does atomic radius decrease across Period 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear charge decreases across the period" },
              { id: "b", text: "Shielding increases strongly across the period" },
              { id: "c", text: "Proton number increases while electrons stay in the same shells" },
              { id: "d", text: "Atoms gain extra electron shells across the period" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Periodic trend", statement: "Protons increase, shells stay same." }],
            steps: [{ reasoning: "More protons with similar shielding pull the electron cloud closer.", marks: 1, markCode: "A" }],
            finalAnswer: "More protons, same shells.",
          },
        },
        {
          id: "cial-c-u3-ri-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Periodic trends problem.",
          parts: [
            { label: "a", prompt: "State how atomic radius changes across a period.", marks: 1 },
            { label: "b", prompt: "Explain the decrease in radius across Period 3.", marks: 2 },
            { label: "c", prompt: "State how first ionisation energy changes across a period.", marks: 1 },
            { label: "d", prompt: "Explain why Al has lower IE than Mg.", marks: 2 },
            { label: "e", prompt: "List two factors affecting ionisation energy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Periodic trends", statement: "Charge, radius, shielding, subshell." }],
            steps: [
              { part: "a", reasoning: "Radius decreases across a period.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Proton number increases while shells stay the same.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Greater attraction reduces radius.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "IE increases across a period.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Al has 3p1, easier to remove than Mg 3s2.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Higher subshell energy lowers IE.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Any two: nuclear charge, radius, shielding, subshell.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Two valid factors listed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) decreases (b) more p same shells (c) increases (d) 3p vs 3s2 (e) 2 factors",
          },
        },
      ],
    },
    {
      id: "cial-c-u3-electron-affinity",
      title: "Electron affinity and metallic character",
      skill: "Explain electron affinity trends and metallic/non-metallic character.",
      lesson: {
        sections: [
          {
            heading: "Electron affinity",
            body: "Energy released when a gaseous atom gains an electron. Generally increases across a period (higher nuclear charge attracts added electron) and decreases down a group (larger atoms, more shielding). Exceptions exist due to stable configurations.",
          },
          {
            heading: "Metallic character",
            body: "Decreases across a period (non-metals gain electrons easily) and increases down a group (metals lose electrons easily). Non-metals: high IE, high EA, form anions, acidic oxides. Metals: low IE, form cations, basic oxides.",
          },
          {
            heading: "Oxide acidity",
            body: "Across a period oxides become more acidic: $Na_2O$ basic, $MgO$ weakly basic, $Al_2O_3$ amphoteric, $SiO_2$ weakly acidic, $P_4O_{10}$ and $SO_3$ acidic. Down groups, oxides become more basic.",
          },
        ],
        keyFormulas: [
          {
            name: "Metallic character",
            statement:
              "$\\downarrow$ across period, $\\uparrow$ down group.",
          },
          {
            name: "Oxide acidity",
            statement:
              "More non-metallic $\\to$ more acidic oxide.",
          },
        ],
        workedExample: {
          problem: "Why is $SO_3$ acidic but $Na_2O$ basic?",
          solution:
            "S is non-metallic — its oxide dissolves to form acid ($H_2SO_4$). Na is metallic — its oxide forms base ($NaOH$).",
        },
      },
      questions: [
        {
          id: "cial-c-u3-ea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does metallic character change down Group 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreases" },
              { id: "b", text: "First increases then decreases" },
              { id: "c", text: "Increases" },
              { id: "d", text: "Stays the same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metallic character",
                statement: "Increases down groups (easier to lose electrons).",
              },
            ],
            steps: [
              {
                reasoning: "Metallic character increases down Group 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Increases",
          },
        },
        {
          id: "cial-c-u3-ea-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is $Cl$ more likely to form $Cl^-$ than $Na$ is to form $Na^-$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Na gains electrons more easily than Cl" },
              { id: "b", text: "Both form anions equally easily" },
              { id: "c", text: "Cl gains one electron to complete its shell, while Na loses an electron to form $Na^+$" },
              { id: "d", text: "Cl has a lower ionisation energy than Na" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-metal behaviour",
                statement:
                  "Non-metals gain electrons to complete shells; metals lose them.",
              },
            ],
            steps: [{ reasoning: "Chlorine completes its outer shell by gaining one electron; sodium achieves stability by losing one.", marks: 1, markCode: "A" }],
            finalAnswer: "Cl gains e- for stable shell; Na loses e-",
          },
        },
        {
          id: "cial-c-u3-ea-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the oxides of elements become more acidic across Period 3 from $Na_2O$ to $SO_3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oxide acidity trend",
                statement:
                  "Increasing non-metallic character $\\to$ more acidic oxides.",
              },
            ],
            steps: [
              {
                reasoning: "Na, Mg are metals — their oxides are basic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Al is amphoteric; Si, P, S are non-metals — acidic oxides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Non-metallic character increases across the period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So oxide acidity increases: $Na_2O$ base $\\to SO_3$ acid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Metallic$\\to$non-metallic = basic$\\to$acidic",
            commonErrors: ["Saying all oxides are acidic or basic — Al2O3 is amphoteric."],
          },
        },
        {
          id: "cial-c-u3-ea-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Periodic trends in metallic character.",
          parts: [
            {
              label: "a",
              prompt: "State how metallic character changes across a period and down a group.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the trend across Period 3.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why do non-metals tend to form anions while metals form cations?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give the trend in oxide acidity across a period.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metallic character",
                statement:
                  "$\\downarrow$ across, $\\uparrow$ down; oxides become more acidic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Across: decreases; down: increases.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Both directions correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Nuclear charge increases across period.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Similar shielding — outer electrons held more tightly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Harder to lose electrons $\\to$ less metallic.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Non-metals gain electrons for stable config; metals lose.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Ions form to achieve noble-gas configuration.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Oxides become more acidic across the period.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "e.g. $Na_2O$ basic, $SO_3$ acidic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) across↓ down↑ (b) charge+shielding (c) gain vs lose e- (d) basic→acidic",
          },
        },
        {
          id: "cial-c-u3-ea-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is electron affinity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy change when a gaseous atom gains an electron" },
              { id: "b", text: "Energy needed to melt a solid" },
              { id: "c", text: "Energy needed to remove an electron" },
              { id: "d", text: "Energy released when atoms bond" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Electron affinity", statement: "Energy change on gaining e-." }],
            steps: [{ reasoning: "Electron affinity concerns electron gain.", marks: 1, markCode: "A" }],
            finalAnswer: "Energy change on gaining an electron",
          },
        },
        {
          id: "cial-c-u3-ea-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many valence electrons does chlorine have?",
          response: { type: "numeric", parts: [{ label: "valence e", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Valence electrons", statement: "Cl is [Ne]3s2 3p5." }],
            steps: [
              { reasoning: "Outer shell has 3s2 + 3p5 = 7 electrons.", working: "2+5=7", marks: 1, markCode: "M" },
              { reasoning: "Valence electrons = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
          },
        },
        {
          id: "cial-c-u3-ea-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does $SO_3$ form an acidic solution in water while $Na_2O$ forms a basic solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Na2O is acidic because sodium is a non-metal" },
              { id: "b", text: "Both oxides are basic" },
              { id: "c", text: "S is non-metallic so its oxide is acidic; Na is metallic so its oxide is basic" },
              { id: "d", text: "Both oxides are acidic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Oxide acidity", statement: "Non-metal oxides acidic; metal oxides basic." }],
            steps: [{ reasoning: "Non-metal oxides dissolve to give acids; metal oxides give alkalis.", marks: 1, markCode: "A" }],
            finalAnswer: "Non-metal oxide acidic; metal oxide basic.",
          },
        },
        {
          id: "cial-c-u3-ea-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons does an oxygen atom gain to form $O^{2-}$?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 2, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Ion formation", statement: "O gains 2 electrons for stable config." }],
            steps: [
              { reasoning: "O has 6 valence electrons and needs 2 more.", working: "6+2=8", marks: 1, markCode: "M" },
              { reasoning: "Electrons gained = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-c-u3-ea-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which oxide is acidic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$SO_3$" },
              { id: "b", text: "$CaO$" },
              { id: "c", text: "$MgO$" },
              { id: "d", text: "$Na_2O$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Oxide acidity", statement: "Non-metal oxides are acidic." }],
            steps: [{ reasoning: "SO3 is an acidic oxide.", marks: 1, markCode: "A" }],
            finalAnswer: "$SO_3$",
          },
        },
        {
          id: "cial-c-u3-ea-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why non-metals tend to form anions while metals form cations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ion formation", statement: "Atoms seek noble-gas configuration." }],
            steps: [
              { reasoning: "Non-metals have high ionisation energy and high electron affinity.", marks: 1, markCode: "M" },
              { reasoning: "Gaining electrons completes their outer shell more easily.", marks: 1, markCode: "M" },
              { reasoning: "Metals have low ionisation energy, so losing electrons is easier.", marks: 1, markCode: "M" },
              { reasoning: "Thus metals form cations and non-metals form anions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Non-metals gain e-; metals lose e-.",
          },
        },
        {
          id: "cial-c-u3-ea-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An element has configuration $[Ne]3s^23p^5$. State its group.",
          response: { type: "numeric", parts: [{ label: "group", answer: 17 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Group", statement: "Group = outer electrons for main group." }],
            steps: [
              { reasoning: "Outer electrons = 2+5 = 7.", working: "2+5=7", marks: 1, markCode: "M" },
              { reasoning: "Group = 17 (or 7A).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17$",
          },
        },
        {
          id: "cial-c-u3-ea-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the oxide acidity of $Al_2O_3$ and $SO_3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Oxide acidity", statement: "Metallic character determines basicity." }],
            steps: [
              { reasoning: "Al is less non-metallic than S.", marks: 1, markCode: "M" },
              { reasoning: "Al2O3 is amphoteric, showing both acidic and basic behaviour.", marks: 1, markCode: "M" },
              { reasoning: "SO3 is clearly acidic because S is non-metallic.", marks: 1, markCode: "M" },
              { reasoning: "So SO3 is more acidic than Al2O3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "SO3 acidic; Al2O3 amphoteric.",
          },
        },
        {
          id: "cial-c-u3-ea-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does metallic character change down Group 2?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreases" },
              { id: "b", text: "Stays constant" },
              { id: "c", text: "Increases" },
              { id: "d", text: "Varies randomly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Metallic character", statement: "Increases down groups." }],
            steps: [{ reasoning: "Lower IE down group increases metallic character.", marks: 1, markCode: "A" }],
            finalAnswer: "Increases",
          },
        },
        {
          id: "cial-c-u3-ea-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons does an $Al^{3+}$ ion have? (Al atomic number 13)",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Ion electrons", statement: "Subtract charge from atomic number." }],
            steps: [
              { reasoning: "Al has 13 electrons; Al3+ loses 3.", working: "13-3", marks: 1, markCode: "M" },
              { reasoning: "Electrons = 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
          },
        },
        {
          id: "cial-c-u3-ea-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is $Al_2O_3$ described as amphoteric?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It reacts with both acids and alkalis" },
              { id: "b", text: "It does not react with water" },
              { id: "c", text: "It is always basic" },
              { id: "d", text: "It is always acidic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Amphoteric", statement: "Shows both acidic and basic behaviour." }],
            steps: [{ reasoning: "Al2O3 reacts with acids to form salts and with alkalis to form aluminate ions.", marks: 1, markCode: "A" }],
            finalAnswer: "Reacts with both acids and alkalis.",
          },
        },
        {
          id: "cial-c-u3-ea-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Metallic character and oxides problem.",
          parts: [
            { label: "a", prompt: "State how metallic character changes across a period.", marks: 1 },
            { label: "b", prompt: "Explain the change across Period 3.", marks: 2 },
            { label: "c", prompt: "State why non-metals form anions and metals form cations.", marks: 2 },
            { label: "d", prompt: "Give the trend in oxide acidity across a period.", marks: 2 },
            { label: "e", prompt: "Classify $MgO$, $Al_2O_3$ and $SO_3$ as basic, amphoteric or acidic.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Periodic trends", statement: "Metallic character controls oxide acidity." }],
            steps: [
              { part: "a", reasoning: "Metallic character decreases across a period.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Nuclear charge increases while shielding stays similar.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Outer electrons are held more tightly, so less metallic.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Non-metals gain electrons; metals lose electrons.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both seek stable electron configurations.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Oxides become more acidic across the period.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Example: Na2O basic to SO3 acidic.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "MgO basic, Al2O3 amphoteric, SO3 acidic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) decreases (b) charge/shielding (c) gain vs lose (d) basic→acidic (e) MgO/Al2O3/SO3",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u3-periodicity-notes",
      title: "Periodic trends — revision notes",
      summary:
        "Atomic radius, ionisation energy, electron affinity and metallic character trends.",
      sections: [
        {
          heading: "Trends",
          body: "Across period: radius $\\downarrow$, IE $\\uparrow$, EA $\\uparrow$, metallic character $\\downarrow$, oxide acidity $\\uparrow$. Down group: radius $\\uparrow$, IE $\\downarrow$, metallic character $\\uparrow$.",
        },
        {
          heading: "Explaining IE",
          body: "IE rises with nuclear charge, falls with radius and shielding. Exceptions: $Mg>Al$ ($3p^1$ vs $3s^2$), $P>N$ (half-filled stability). Ionisation energy is for gaseous atoms — always state conditions.",
        },
        {
          heading: "Exam checklist",
          body: "Link every trend to nuclear charge, radius, shielding and subshell. For oxide acidity use examples: $Na_2O$ basic $\\to Al_2O_3$ amphoteric $\\to SO_3$ acidic.",
        },
      ],
    },
  ],
};
