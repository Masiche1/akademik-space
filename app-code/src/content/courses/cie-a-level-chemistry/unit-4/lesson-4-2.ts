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
              { id: "a", text: "$+6$" },
              { id: "b", text: "$+4$" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Negative electrode where oxidation occurs" },
              { id: "b", text: "Positive electrode where reduction occurs" },
              { id: "c", text: "The cathode" },
              { id: "d", text: "Either, depending on conditions" },
            ],
            correctChoiceId: "a",
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
