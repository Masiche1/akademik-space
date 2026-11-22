import type { Lesson } from "../../../types.ts";

export const lesson412: Lesson = {
  id: "cial-c-u4-lesson-4-2",
  code: "4-2",
  title: "Electrochemistry and redox",
  goal: "I CAN assign oxidation states, balance redox equations and calculate cell potentials.",
  standards: ["9701 4.2: electrochemistry"],
  vocabulary: [
    {
      term: "Oxidation",
      definition: "Loss of electrons; increase in oxidation state.",
    },
    {
      term: "Reduction",
      definition: "Gain of electrons; decrease in oxidation state.",
    },
    {
      term: "Oxidation state",
      definition:
        "Apparent charge on an atom if bonds were ionic; rules for assigning it.",
    },
    {
      term: "Standard electrode potential",
      definition: "$E^\\circ$ — voltage of a half-cell vs standard hydrogen electrode.",
    },
    {
      term: "Cell potential",
      definition: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$.",
    },
    {
      term: "Faraday constant",
      definition: "$F = 96485$ C mol$^{-1}$ — charge per mole of electrons.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u4-redox",
      title: "Redox and oxidation states",
      skill: "Assign oxidation states and balance redox half-equations.",
      lesson: {
        sections: [
          {
            heading: "Oxidation states",
            body: "Rules: element = 0; $H=+1$ (except metal hydrides $-1$); $O=-2$ (except peroxides $-1$); halogens $-1$ in compounds with metals; sum = overall charge. $MnO_4^-$: Mn is $+7$. Transition metals show variable states.",
          },
          {
            heading: "Half-equations",
            body: "Write oxidation and reduction separately, balance atoms then charge with $e^-$. In acid add $H^+$ and $H_2O$; in alkali add $OH^-$ and $H_2O$. Combine so electrons cancel.",
          },
          {
            heading: "Oxidising/reducing agents",
            body: "Oxidising agent is reduced (gains electrons, OS decreases). Reducing agent is oxidised. $KMnO_4$ and $K_2Cr_2O_7$ are common oxidising agents in titrations.",
          },
        ],
        keyFormulas: [
          {
            name: "OS rules",
            statement: "Element 0, H +1, O -2, sum = charge.",
          },
          {
            name: "Half-equation",
            statement: "Balance atoms, then charge with $e^-$.",
          },
        ],
        workedExample: {
          problem: "Find the oxidation state of Mn in $MnO_4^-$.",
          solution:
            "$x + 4(-2) = -1 \\Rightarrow x - 8 = -1 \\Rightarrow x = +7$.",
        },
      },
      questions: [
        {
          id: "cial-c-u4-rd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the oxidation state of sulfur in $H_2SO_4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$+4$" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "$+6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Oxidation state rules",
                statement: "Sum of OS = overall charge; H=+1, O=-2.",
              },
            ],
            steps: [
              {
                reasoning: "$2(+1)+x+4(-2)=0 \\Rightarrow x=+6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+6$",
          },
        },
        {
          id: "cial-c-u4-rd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Balance the half-equation for $Fe^{2+} \\to Fe^{3+}$ in acidic solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Half-equation balancing",
                statement: "Balance atoms, then charge with electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Atoms already balanced: $Fe^{2+} \\to Fe^{3+}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Charge: left $+2$, right $+3$ — add $e^-$ to right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Fe^{2+} \\to Fe^{3+} + e^-$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Fe^{2+} \\to Fe^{3+} + e^-$",
          },
        },
        {
          id: "cial-c-u4-rd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify the oxidising agent, reducing agent, species oxidised and species reduced in: $Zn + Cu^{2+} \\to Zn^{2+} + Cu$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Redox roles",
                statement:
                  "Oxidising agent reduced; reducing agent oxidised.",
              },
            ],
            steps: [
              {
                reasoning: "$Zn$: 0 $\\to +2$ — oxidised, reducing agent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Cu^{2+}$: $+2 \\to 0$ — reduced, oxidising agent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Species oxidised: Zn; species reduced: $Cu^{2+}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All four identifications correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Zn red, Cu2+ ox; Zn oxidised, Cu2+ reduced",
          },
        },
        {
          id: "cial-c-u4-rd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Redox and oxidation states.",
          parts: [
            {
              label: "a",
              prompt: "State the oxidation state of Mn in $MnO_4^-$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Balance $Zn \\to Zn^{2+}$ as a half-equation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "In $MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$, what is Mn reduced to?",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Explain why $KMnO_4$ is a good oxidising agent in acidic solution.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Redox",
                statement:
                  "OS rules; $MnO_4^-$ $Mn=+7$ reduced to $+2$ in acid.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x + 4(-2) = -1$.",
                working: "x-8=-1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$x = +7$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$Zn \\to Zn^{2+} + 2e^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Charge balanced correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Mn is reduced from $+7$ to $+2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$Mn$ is in $+7$ — highest common OS.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Can gain electrons to reach lower states ($+2$ in acid).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Gains electrons $=$ oxidising agent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Purple $MnO_4^-$ decolourises — visual endpoint in titrations.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) +7 (b) Zn→Zn2++2e- (c) +2 (d) Mn+7 gains e-",
          },
        },
        {
          id: "cial-c-u4-rd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the oxidation state of sulfur in $SO_4^{2-}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$+2$" },
              { id: "b", text: "$-2$" },
              { id: "c", text: "$+6$" },
              { id: "d", text: "$+4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Oxidation state rules",
                statement: "Sum of OS = overall charge; O = -2.",
              },
            ],
            steps: [
              {
                reasoning: "$x + 4(-2) = -2 \\Rightarrow x = +6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+6$",
          },
        },
        {
          id: "cial-c-u4-rd-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the reaction $Mg + 2HCl \\to MgCl_2 + H_2$, which species is oxidised?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither — no redox occurs" },
              { id: "b", text: "$Cl^-$" },
              { id: "c", text: "$H^+$" },
              { id: "d", text: "Mg" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oxidation",
                statement: "Loss of electrons; OS increases.",
              },
            ],
            steps: [
              {
                reasoning: "Mg: 0 $\\to +2$ — loses electrons, oxidised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mg",
          },
        },
        {
          id: "cial-c-u4-rd-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the oxidation state of chromium in $Cr_2O_7^{2-}$.",
          response: {
            type: "numeric",
            parts: [{ label: "OS", answer: 6, unit: "" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Oxidation state rules",
                statement: "Sum of OS = overall charge.",
              },
            ],
            steps: [
              {
                reasoning: "$2x + 7(-2) = -2 \\Rightarrow 2x = 12$.",
                working: "2x-14=-2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = +6$ per Cr atom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct oxidation state.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+6$",
          },
        },
        {
          id: "cial-c-u4-rd-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Balance the half-equation for the oxidation of iodide ions to iodine, $I^- \\to I_2$, in acidic solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Half-equation balancing",
                statement: "Balance atoms, then charge with electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Balance I atoms: $2I^- \\to I_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Charge: left $-2$, right $0$ — add $2e^-$ to right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2I^- \\to I_2 + 2e^-$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2I^- \\to I_2 + 2e^-$",
          },
        },
        {
          id: "cial-c-u4-rd-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about oxidising agents is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are oxidised" },
              { id: "b", text: "They increase the oxidation state of other species" },
              { id: "c", text: "They always contain oxygen" },
              { id: "d", text: "They are themselves reduced" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oxidising agent",
                statement: "Gains electrons, is reduced.",
              },
            ],
            steps: [
              {
                reasoning: "Oxidising agent accepts electrons — it is reduced.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "They are themselves reduced",
          },
        },
        {
          id: "cial-c-u4-rd-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the oxidation state of nitrogen in $NO_3^-$.",
          response: {
            type: "numeric",
            parts: [{ label: "OS", answer: 5, unit: "" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Oxidation state rules",
                statement: "Sum of OS = overall charge; O = -2.",
              },
            ],
            steps: [
              {
                reasoning: "$x + 3(-2) = -1 \\Rightarrow x = +5$.",
                working: "x-6=-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Show the algebra clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$N = +5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+5$",
          },
        },
        {
          id: "cial-c-u4-rd-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Redox titrations.",
          parts: [
            {
              label: "a",
              prompt: "State what is meant by an oxidising agent.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "In acidic solution, $MnO_4^-$ is reduced to $Mn^{2+}$. Write the balanced half-equation.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Give the oxidation state change of Mn in this reduction.",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Why does the purple colour of $MnO_4^-$ make it useful in titrations?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Redox",
                statement: "Oxidising agent gains electrons, is reduced.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Species that gains electrons / causes oxidation of another.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "It is itself reduced (OS decreases).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Atoms and O balanced with $H_2O$: $MnO_4^- + 8H^+ \\to Mn^{2+} + 4H_2O$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Charge balanced by adding $5e^-$ to left.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Mn: $+7 \\to +2$, gain of 5 electrons.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Intense purple colour visible against colourless solution.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Endpoint shown by sudden disappearance of purple colour.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "No separate indicator needed.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) gains e-, reduced (b) MnO4-+8H++5e-→Mn2++4H2O (c) +7→+2 (d) purple colour endpoint",
          },
        },
        {
          id: "cial-c-u4-rd-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the oxidation state of hydrogen in NaH?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$+1$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$+2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Oxidation state rules",
                statement: "H = -1 in metal hydrides.",
              },
            ],
            steps: [
              {
                reasoning: "NaH is a metal hydride: $+1 + x = 0 \\Rightarrow x = -1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-1$",
          },
        },
        {
          id: "cial-c-u4-rd-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "By combining half-equations, derive the full ionic equation for the reaction of zinc with acid: $Zn + 2H^+ \\to Zn^{2+} + H_2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Half-equation balancing",
                statement: "Oxidation and reduction combine; electrons cancel.",
              },
            ],
            steps: [
              {
                reasoning: "Oxidation: $Zn \\to Zn^{2+} + 2e^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduction: $2H^+ + 2e^- \\to H_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrons cancel when equations are added.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Zn + 2H^+ \\to Zn^{2+} + H_2$ — atoms and charge balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Zn + 2H^+ \\to Zn^{2+} + H_2$",
          },
        },
        {
          id: "cial-c-u4-rd-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the oxidation state of phosphorus in $H_3PO_4$.",
          response: {
            type: "numeric",
            parts: [{ label: "OS", answer: 5, unit: "" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Oxidation state rules",
                statement: "Sum of OS = overall charge; H = +1, O = -2.",
              },
            ],
            steps: [
              {
                reasoning: "$3(+1) + x + 4(-2) = 0 \\Rightarrow x = +5$.",
                working: "3+x-8=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Show correct use of rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P = +5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+5$",
          },
        },
        {
          id: "cial-c-u4-rd-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the reaction $Cl_2 + 2KI \\to 2KCl + I_2$, which species is reduced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "$I^-$" },
              { id: "c", text: "$K^+$" },
              { id: "d", text: "$Cl_2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reduction",
                statement: "Gain of electrons; OS decreases.",
              },
            ],
            steps: [
              {
                reasoning: "Cl: 0 $\\to -1$ — gains electrons, reduced.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Cl_2$",
          },
        },
        {
          id: "cial-c-u4-rd-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Redox equations.",
          parts: [
            {
              label: "a",
              prompt: "State the oxidation state of Mn in $MnO_4^-$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Balance the reduction half-equation $MnO_4^- \\to Mn^{2+}$ in acidic solution.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Write the oxidation half-equation for $Fe^{2+} \\to Fe^{3+}$.",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Combine the half-equations to give the full ionic equation for $MnO_4^-$ oxidising $Fe^{2+}$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Half-equation balancing",
                statement: "Atoms then charge; electrons must cancel.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x + 4(-2) = -1 \\Rightarrow x = +7$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct OS stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$ — atoms balanced.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Charge balanced with $5e^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct half-equation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$Fe^{2+} \\to Fe^{3+} + e^-$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Multiply Fe equation by 5 to cancel electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Add: $MnO_4^- + 8H^+ + 5Fe^{2+} \\to Mn^{2+} + 4H_2O + 5Fe^{3+}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Atoms and charge balance verified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) +7 (b) MnO4-+8H++5e-→Mn2++4H2O (c) Fe2+→Fe3++e- (d) MnO4-+8H++5Fe2+→Mn2++5Fe3++4H2O",
          },
        },
      ],
    },
    {
      id: "cial-c-u4-electrochem",
      title: "Electrochemical cells",
      skill: "Calculate cell potentials and relate them to spontaneity.",
      lesson: {
        sections: [
          {
            heading: "Half-cells and $E^\\circ$",
            body: "Each electrode has a standard potential measured vs SHE ($E^\\circ=0$). More positive $E^\\circ$ = stronger oxidising agent. Electrons flow from negative electrode (anode, oxidation) to positive (cathode, reduction).",
          },
          {
            heading: "Cell potential",
            body: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$. If $E^\\circ_{cell}>0$ the cell reaction is spontaneous. $\\Delta G^\\circ = -nFE^\\circ$ links to Gibbs energy.",
          },
          {
            heading: "Electrolysis vs cells",
            body: "Voltaic cell: spontaneous, chemical $\\to$ electrical energy. Electrolysis: electrical $\\to$ chemical, non-spontaneous driven by external supply. In electrolysis, cations reduced at cathode, anions oxidised at anode.",
          },
        ],
        keyFormulas: [
          {
            name: "Cell potential",
            statement: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$",
          },
          {
            name: "Gibbs",
            statement: "$\\Delta G^\\circ = -nFE^\\circ$",
          },
        ],
        workedExample: {
          problem:
            "Given $E^\\circ(Cu^{2+}/Cu)=+0.34$ V and $E^\\circ(Zn^{2+}/Zn)=-0.76$ V, calculate $E^\\circ_{cell}$ for the Daniell cell.",
          solution:
            "Cu is cathode (reduction), Zn is anode: $E^\\circ_{cell}=0.34-(-0.76)=+1.10$ V. Positive $\\to$ spontaneous.",
        },
      },
      questions: [
        {
          id: "cial-c-u4-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a voltaic cell, which electrode is the anode?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive electrode where reduction occurs" },
              { id: "b", text: "Negative electrode where oxidation occurs" },
              { id: "c", text: "The cathode" },
              { id: "d", text: "Either, depending on conditions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anode",
                statement: "Oxidation occurs at anode (negative in voltaic cell).",
              },
            ],
            steps: [
              {
                reasoning: "Anode = oxidation = negative electrode in voltaic cell.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Negative, oxidation",
          },
        },
        {
          id: "cial-c-u4-ec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given $E^\\circ(Cu^{2+}/Cu)=+0.34$ V and $E^\\circ(Mg^{2+}/Mg)=-2.37$ V, calculate $E^\\circ_{cell}$ for the Mg/Cu cell.",
          response: {
            type: "numeric",
            parts: [{ label: "Ecell", answer: 2.71, unit: "V" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cell potential",
                statement: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$.",
              },
            ],
            steps: [
              {
                reasoning: "Cu has higher $E^\\circ$ $\\to$ cathode; Mg anode.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E^\\circ_{cell}=0.34-(-2.37)$.",
                working: "0.34-(-2.37)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=+2.71$ V.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+2.71$ V",
          },
        },
        {
          id: "cial-c-u4-ec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "If $E^\\circ_{cell}$ is positive, what does that tell you about the reaction? What is the relationship with $\\Delta G^\\circ$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Spontaneity",
                statement: "$E^\\circ_{cell}>0 \\Rightarrow \\Delta G^\\circ<0$ — spontaneous.",
              },
            ],
            steps: [
              {
                reasoning: "Positive $E^\\circ_{cell}$ means cell reaction is spontaneous.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta G^\\circ = -nFE^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive $E^\\circ \\to$ negative $\\Delta G^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Negative $\\Delta G^\\circ$ = thermodynamically favourable.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "E>0 = spontaneous, ΔG<0",
          },
        },
        {
          id: "cial-c-u4-ec-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Electrochemistry.",
          parts: [
            {
              label: "a",
              prompt: "Define standard electrode potential.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Given $E^\\circ(Cu^{2+}/Cu)=+0.34$ and $E^\\circ(Ag^+/Ag)=+0.80$, which is the stronger oxidising agent and why?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Calculate $E^\\circ_{cell}$ for a Cu/Ag cell.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "State what happens at each electrode in the Cu/Ag cell.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Electrode potentials",
                statement: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$; higher $E^\\circ$ = stronger oxidant.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Voltage of half-cell vs standard hydrogen electrode under standard conditions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "SHE defined as $E^\\circ=0$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$Ag^+/Ag$ has higher $E^\\circ$ ($+0.80$ vs $+0.34$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Higher $E^\\circ$ = stronger oxidising agent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$Ag^+$ is the stronger oxidant.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Ag cathode, Cu anode: $E^\\circ_{cell}=0.80-0.34$.",
                working: "0.80-0.34",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$=+0.46$ V.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Cathode (Ag): $Ag^+ + e^- \\to Ag$ reduction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Anode (Cu): $Cu \\to Cu^{2+} + 2e^-$ oxidation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) vs SHE (b) Ag+ stronger (c) +0.46V (d) Ag+ reduced, Cu oxidised",
          },
        },
        {
          id: "cial-c-u4-ec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a voltaic cell, which electrode is the cathode?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The anode" },
              { id: "b", text: "The electrode with lower $E^\\circ$" },
              { id: "c", text: "Positive electrode where reduction occurs" },
              { id: "d", text: "Negative electrode where oxidation occurs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cathode",
                statement: "Reduction occurs at cathode (positive in voltaic cell).",
              },
            ],
            steps: [
              {
                reasoning: "Cathode = reduction = positive electrode in a voltaic cell.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Positive, reduction",
          },
        },
        {
          id: "cial-c-u4-ec-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given $E^\\circ(Cu^{2+}/Cu)=+0.34$ V and $E^\\circ(Fe^{2+}/Fe)=-0.44$ V, calculate $E^\\circ_{cell}$ for the Fe/Cu cell.",
          response: {
            type: "numeric",
            parts: [{ label: "Ecell", answer: 0.78, unit: "V" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cell potential",
                statement: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$.",
              },
            ],
            steps: [
              {
                reasoning: "Cu has higher $E^\\circ$ $\\to$ cathode; Fe anode.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E^\\circ_{cell}=0.34-(-0.44)$.",
                working: "0.34-(-0.44)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=+0.78$ V.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+0.78$ V",
          },
        },
        {
          id: "cial-c-u4-ec-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the stronger oxidising agent: $Ag^+$ ($E^\\circ=+0.80$ V) or $Cu^{2+}$ ($E^\\circ=+0.34$ V)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot be determined" },
              { id: "b", text: "$Ag^+$" },
              { id: "c", text: "$Cu^{2+}$" },
              { id: "d", text: "They are equal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electrode potentials",
                statement: "Higher $E^\\circ$ = stronger oxidising agent.",
              },
            ],
            steps: [
              {
                reasoning: "$+0.80 > +0.34$, so $Ag^+$ is the stronger oxidant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Ag^+$",
          },
        },
        {
          id: "cial-c-u4-ec-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "For a cell with $E^\\circ_{cell}=+1.10$ V transferring $2$ mol of electrons, calculate $\\Delta G^\\circ$ ($F=96485$ C mol$^{-1}$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs energy",
                statement: "$\\Delta G^\\circ = -nFE^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute: $\\Delta G^\\circ = -2 \\times 96485 \\times 1.10$.",
                working: "-2 \\times 96485 \\times 1.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -212267$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to kJ: $-212$ kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Negative $\\Delta G^\\circ$ confirms spontaneous cell.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$-212$ kJ",
          },
        },
        {
          id: "cial-c-u4-ec-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $E^\\circ(Zn^{2+}/Zn)=-0.76$ V and $E^\\circ(Ag^+/Ag)=+0.80$ V, calculate $E^\\circ_{cell}$ for the Zn/Ag cell.",
          response: {
            type: "numeric",
            parts: [{ label: "Ecell", answer: 1.56, unit: "V" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cell potential",
                statement: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$.",
              },
            ],
            steps: [
              {
                reasoning: "Ag cathode, Zn anode: $E^\\circ_{cell}=0.80-(-0.76)$.",
                working: "0.80-(-0.76)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=+1.56$ V.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive value — cell is spontaneous.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+1.56$ V",
          },
        },
        {
          id: "cial-c-u4-ec-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the standard electrode potential of the standard hydrogen electrode (SHE)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$+0.76$ V" },
              { id: "b", text: "$0$ V by definition" },
              { id: "c", text: "$-0.76$ V" },
              { id: "d", text: "It varies with temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SHE",
                statement: "$E^\\circ_{SHE} = 0$ V — reference electrode.",
              },
            ],
            steps: [
              {
                reasoning: "SHE is defined as zero for all temperatures at standard conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0$ V",
          },
        },
        {
          id: "cial-c-u4-ec-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Zn/Ag cell.",
          parts: [
            {
              label: "a",
              prompt: "Identify the cathode and anode, giving a reason.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate $E^\\circ_{cell}$ using $E^\\circ(Zn^{2+}/Zn)=-0.76$ and $E^\\circ(Ag^+/Ag)=+0.80$ V.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State whether the cell reaction is spontaneous and why.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Write the half-equations at each electrode.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cell potential",
                statement: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$; positive = spontaneous.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Ag is cathode (higher $E^\\circ$, reduction).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Zn is anode (lower $E^\\circ$, oxidation).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$E^\\circ_{cell} = 0.80 - (-0.76)$.",
                working: "0.80-(-0.76)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= +1.56$ V.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Spontaneous — $E^\\circ_{cell} > 0$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Equivalently $\\Delta G^\\circ = -nFE^\\circ < 0$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Cathode: $Ag^+ + e^- \\to Ag$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Anode: $Zn \\to Zn^{2+} + 2e^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Electrons flow Zn $\\to$ Ag through external circuit.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Ag cathode, Zn anode (b) +1.56 V (c) spontaneous (d) Ag+ +e-→Ag; Zn→Zn2++2e-",
          },
        },
        {
          id: "cial-c-u4-ec-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about electrolysis is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It drives a non-spontaneous reaction using an external power supply" },
              { id: "b", text: "Cations are oxidised at the cathode" },
              { id: "c", text: "It produces electrical energy spontaneously" },
              { id: "d", text: "It only occurs in voltaic cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electrolysis",
                statement: "Electrical energy drives non-spontaneous chemical change.",
              },
            ],
            steps: [
              {
                reasoning: "Electrolysis = non-spontaneous, driven by applied voltage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Non-spontaneous, external supply",
          },
        },
        {
          id: "cial-c-u4-ec-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the charge carried by $0.10$ mol of electrons ($F = 96485$ C mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [{ label: "Q", answer: 9649, unit: "C" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Faraday constant",
                statement: "$Q = nF$.",
              },
            ],
            steps: [
              {
                reasoning: "$Q = 0.10 \\times 96485$.",
                working: "0.10 \\times 96485",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 9648.5$ C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\approx 9649$ C (or $9.65 \\times 10^3$ C).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$9.65 \\times 10^3$ C",
          },
        },
        {
          id: "cial-c-u4-ec-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Zinc metal is placed in a solution containing $Cu^{2+}$ ions. Explain what happens using electrode potentials ($E^\\circ(Zn^{2+}/Zn)=-0.76$ V, $E^\\circ(Cu^{2+}/Cu)=+0.34$ V).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cell potential",
                statement: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$; positive = spontaneous.",
              },
            ],
            steps: [
              {
                reasoning: "Zn has lower $E^\\circ$ so is oxidised; $Cu^{2+}$ reduced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E^\\circ_{cell} = 0.34 - (-0.76) = +1.10$ V.",
                working: "0.34-(-0.76)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive $E^\\circ$ — reaction spontaneous.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Zn dissolves; blue $Cu^{2+}$ colour fades as Cu metal deposits.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Zn + Cu2+ → Zn2+ + Cu; E=+1.10V spontaneous",
          },
        },
        {
          id: "cial-c-u4-ec-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A cell has $E^\\circ_{cell} = -0.50$ V. What does this mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cell reaction is spontaneous" },
              { id: "b", text: "$\\Delta G^\\circ = 0$" },
              { id: "c", text: "The electrodes are identical" },
              { id: "d", text: "The cell reaction is non-spontaneous as written" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spontaneity",
                statement: "$E^\\circ_{cell}<0 \\Rightarrow$ non-spontaneous; reversing gives positive $E^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "Negative $E^\\circ_{cell}$ means the reaction as written is not spontaneous.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Non-spontaneous as written",
          },
        },
        {
          id: "cial-c-u4-ec-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Electrochemical cells.",
          parts: [
            {
              label: "a",
              prompt: "Define standard electrode potential.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Given $E^\\circ(Mg^{2+}/Mg)=-2.37$, $E^\\circ(Cu^{2+}/Cu)=+0.34$ and $E^\\circ(Ag^+/Ag)=+0.80$ V, identify which metal is the strongest reducing agent.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate $E^\\circ_{cell}$ for an Mg/Cu cell.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "State the relationship between $E^\\circ_{cell}$, $n$, $F$ and $\\Delta G^\\circ$ and what its sign tells you.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Electrode potentials",
                statement: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$; $\\Delta G^\\circ=-nFE^\\circ$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Voltage of a half-cell measured vs SHE under standard conditions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "SHE defined as $E^\\circ = 0$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Most negative $E^\\circ$ = strongest reducing agent: Mg ($-2.37$ V).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Mg identified correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$E^\\circ_{cell} = 0.34 - (-2.37) = +2.71$ V.",
                working: "0.34-(-2.37)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct value with units.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$\\Delta G^\\circ = -nFE^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Positive $E^\\circ_{cell}$ gives negative $\\Delta G^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Negative $\\Delta G^\\circ$ = spontaneous.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) vs SHE (b) Mg (c) +2.71 V (d) ΔG=-nFE, E>0 spontaneous",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u4-redox-electrochem-notes",
      title: "Electrochemistry and redox — revision notes",
      summary:
        "Oxidation states, half-equations, cell potentials and spontaneity.",
      sections: [
        {
          heading: "Redox",
          body: "OS rules: element 0, H +1, O -2, sum = charge. Oxidation = loss of electrons (OS up); reduction = gain (OS down). Balance half-equations: atoms first, then charge with $e^-$. $MnO_4^- \\to Mn^{2+}$ in acid is a key oxidising half-equation.",
        },
        {
          heading: "Cells",
          body: "$E^\\circ_{cell}=E^\\circ_{cathode}-E^\\circ_{anode}$. Positive $E^\\circ$ = spontaneous, $\\Delta G^\\circ=-nFE^\\circ<0$. Higher $E^\\circ$ = stronger oxidising agent. In electrolysis, non-spontaneous reactions are driven by applied voltage.",
        },
        {
          heading: "Exam checklist",
          body: "For OS, set up the sum equation explicitly. For cells, identify cathode/anode by comparing $E^\\circ$ values first — never subtract in the wrong order.",
        },
      ],
    },
  ],
};
