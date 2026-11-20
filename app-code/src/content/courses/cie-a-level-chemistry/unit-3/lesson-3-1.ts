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
              { id: "a", text: "Decreases" },
              { id: "b", text: "Increases" },
              { id: "c", text: "Stays constant" },
              { id: "d", text: "First increases then decreases" },
            ],
            correctChoiceId: "a",
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
          totalMarks: 4,
          stem: "Why is the first ionisation energy of Al lower than that of Mg, despite Al having more protons?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subshell energy",
                statement:
                  "$3p$ electron is higher energy/easier to remove than paired $3s^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$Mg$: $3s^2$ — paired electrons, stable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Al$: $3s^23p^1$ — $3p$ electron higher energy, less tightly held.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3p$ is further from nucleus / higher subshell energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So $IE(Al) < IE(Mg)$ — dip in the trend.",
                marks: 1,
                markCode: "B",
              },
            ],
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
              { id: "a", text: "Increases" },
              { id: "b", text: "Decreases" },
              { id: "c", text: "Stays the same" },
              { id: "d", text: "First increases then decreases" },
            ],
            correctChoiceId: "a",
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
          totalMarks: 2,
          stem: "Why is $Cl$ more likely to form $Cl^-$ than $Na$ is to form $Na^-$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-metal behaviour",
                statement:
                  "Non-metals gain electrons to complete shells; metals lose them.",
              },
            ],
            steps: [
              {
                reasoning: "$Cl$ is non-metal — gains 1 electron for stable $[Ar]$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Na$ is metal — loses electron to form $Na^+$, not $Na^-$.",
                marks: 1,
                markCode: "A",
              },
            ],
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
