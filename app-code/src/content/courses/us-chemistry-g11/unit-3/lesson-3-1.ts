import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "chem11-u3-lesson-3-1",
  code: "3-1",
  title: "Acids and Bases",
  goal: "I CAN distinguish Arrhenius and Bronsted-Lowry acids and bases, classify strong and weak electrolytes, and calculate pH and hydrogen ion concentration.",
  standards: ["HS-PS1-2", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Arrhenius acid", definition: "A substance that produces H+ ions when dissolved in water." },
    { term: "Arrhenius base", definition: "A substance that produces OH- ions when dissolved in water." },
    { term: "Bronsted-Lowry acid", definition: "A proton (H+) donor." },
    { term: "Bronsted-Lowry base", definition: "A proton (H+) acceptor." },
    { term: "Conjugate pair", definition: "An acid and the base formed when it loses a proton, or a base and the acid formed when it gains one." },
    { term: "pH", definition: "A measure of acidity: $\\text{pH} = -\\log_{10}[\\text{H}^+]$; pH 7 is neutral at 25°C." },
    { term: "Strong vs weak acid", definition: "Strong acids ionize completely in water; weak acids ionize only partially." },
    { term: "Kw", definition: "The ion product of water: $[\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$ at 25°C." },
  ],
  concepts: [
    {
      id: "chem11-u3-acid-base-theories",
      title: "Acid-base theories and strength",
      skill: "Distinguish Arrhenius and Bronsted-Lowry definitions, identify conjugate pairs, and classify acids and bases as strong or weak.",
      lesson: {
        sections: [
          {
            heading: "Two ways to define acids and bases",
            body: "**Arrhenius** (limited to water):\n- Acid: produces $\\text{H}^+$ in water\n- Base: produces $\\text{OH}^-$ in water\n\n**Bronsted-Lowry** (more general):\n- Acid: a **proton donor**\n- Base: a **proton acceptor**\n\nEvery Bronsted-Lowry acid-base reaction transfers a proton from acid to base. The acid left after losing a proton is its **conjugate base**; the base after gaining a proton is its **conjugate acid**. Stronger acids have weaker conjugate bases.",
          },
          {
            heading: "Strong vs weak",
            body: "- **Strong acids** ionize completely: HCl, HBr, HI, $\\text{HNO}_3$, $\\text{H}_2\\text{SO}_4$ (first proton), $\\text{HClO}_4$.\n- **Weak acids** ionize partially, establishing equilibrium: acetic acid ($\\text{CH}_3\\text{COOH}$), citric acid, carbonic acid.\n- **Strong bases**: Group 1 hydroxides (NaOH, KOH) and heavy Group 2 hydroxides (Ca(OH)2, Ba(OH)2).\n- **Weak bases**: ammonia ($\\text{NH}_3$), amines.\n\nStrength depends on the position of equilibrium, not on concentration: a dilute strong acid is still fully ionized.",
          },
          {
            heading: "Neutralization",
            body: "Acid + base $\\rightarrow$ salt + water. In Bronsted-Lowry terms, the proton transfers from acid to base. For example $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$. The net ionic equation is $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$ for strong acid-strong base reactions.",
          },
        ],
        keyFormulas: [
          { name: "Bronsted-Lowry", statement: "Acid = proton donor; Base = proton acceptor" },
          { name: "Conjugate pair", statement: "HA $\\rightleftharpoons$ H+ + A- ; HA is acid, A- is conjugate base" },
        ],
        workedExample: {
          problem: "Identify the acid, base, conjugate acid and conjugate base in: $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$.",
          solution: "$\\text{H}_2\\text{O}$ donates a proton to $\\text{NH}_3$, so water is the acid and ammonia is the base. After donating, water becomes $\\text{OH}^-$ (its conjugate base); after accepting, ammonia becomes $\\text{NH}_4^+$ (its conjugate acid).",
        },
      },
      questions: [
        {
          id: "chem11-u3-acid-base-theories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the Bronsted-Lowry sense, which species is a base?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{HCl}$" },
              { id: "b", text: "$\\text{NH}_3$" },
              { id: "c", text: "$\\text{H}_2\\text{SO}_4$" },
              { id: "d", text: "$\\text{HNO}_3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Bronsted-Lowry base", statement: "A base is a proton acceptor; NH3 accepts H+ to become NH4+." }],
            steps: [{ reasoning: "Ammonia accepts a proton, so it is a Bronsted-Lowry base; the others donate protons.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $\\text{NH}_3$",
            commonErrors: ["Choosing a strong acid because it 'reacts' with bases; acids donate protons."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u3-acid-base-theories-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the reaction $\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+$:\n\n(a) Identify the acid and base on the left.\n(b) Identify the conjugate base of the acid.\n(c) Identify the conjugate acid of the base.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate pairs", statement: "The species left after proton transfer are conjugates: acid loses H+ to become its conjugate base; base gains H+ to become its conjugate acid." },
            ],
            steps: [
              { reasoning: "Acetic acid donates a proton: it is the acid. Water accepts the proton: it is the base.", marks: 1, markCode: "B" },
              { reasoning: "After losing H+, acetic acid becomes $\\text{CH}_3\\text{COO}^-$: its conjugate base.", marks: 1, markCode: "B" },
              { reasoning: "After gaining H+, water becomes $\\text{H}_3\\text{O}^+$: its conjugate acid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) acid = CH3COOH, base = H2O (b) conjugate base = CH3COO- (c) conjugate acid = H3O+.",
            commonErrors: ["Swapping conjugate acid and base.", "Forgetting water becomes H3O+ not H+."],
            examinerNote: "B1 each.",
          },
        },
        {
          id: "chem11-u3-acid-base-theories-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify each as strong or weak acid/base and explain why strength does not depend on concentration:\n\n(a) HCl\n(b) CH3COOH (acetic acid)\n(c) NaOH\n(d) NH3",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Strong vs weak", statement: "Strong acids/bases ionize completely; weak ones ionize partially and establish equilibrium." },
            ],
            steps: [
              { reasoning: "HCl is a strong acid: ionizes completely in water.", marks: 1, markCode: "B" },
              { reasoning: "CH3COOH is a weak acid: ionizes only partially, establishing equilibrium.", marks: 1, markCode: "B" },
              { reasoning: "NaOH is a strong base: Group 1 hydroxide, fully dissociates.", marks: 1, markCode: "B" },
              { reasoning: "Strength is about the position of the ionization equilibrium, not concentration; a 0.001 M HCl solution is still fully ionized.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) strong acid (b) weak acid (c) strong base (d) weak base. Strength is an equilibrium property, independent of concentration.",
            commonErrors: ["Calling dilute acid 'weak'.", "Confusing strong (fully ionized) with concentrated."],
            examinerNote: "B3 classifications, R1 strength-concentration distinction.",
          },
        },
        {
          id: "chem11-u3-acid-base-theories-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Consider four substances: hydrochloric acid (HCl), acetic acid (CH3COOH), sodium hydroxide (NaOH) and ammonia (NH3).",
          parts: [
            { label: "a", prompt: "Classify each as strong or weak acid or base.", marks: 2 },
            { label: "b", prompt: "For each acid-base pair that could react, write the net ionic equation for neutralization.", marks: 3 },
            { label: "c", prompt: "Explain why the reaction between HCl and NaOH goes essentially to completion while the reaction between CH3COOH and NH3 does not.", marks: 3 },
            { label: "d", prompt: "State which substance would have the highest pH in water and which the lowest.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Strong vs weak", statement: "Strong electrolytes ionize completely; weak ones partially." },
              { kind: "formula", name: "Net ionic", statement: "Strong acid + strong base: $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$" },
              { kind: "principle", name: "Equilibrium position", statement: "Reactions between strong electrolytes go to completion; weak-weak reactions establish equilibrium." },
            ],
            steps: [
              { reasoning: "HCl strong acid, CH3COOH weak acid, NaOH strong base, NH3 weak base.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "HCl + NaOH: $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$ (net ionic).", marks: 1, markCode: "B", part: "b" },
              { reasoning: "CH3COOH + NH3: $\\text{CH}_3\\text{COOH} + \\text{NH}_3 \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{NH}_4^+$.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "HCl + NH3: $\\text{H}^+ + \\text{NH}_3 \\rightarrow \\text{NH}_4^+$ (or molecular form accepted).", marks: 1, markCode: "B", part: "b" },
              { reasoning: "HCl and NaOH are both strong, so the neutralization $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$ has a huge equilibrium constant and goes essentially to completion.", marks: 2, markCode: "R", part: "c" },
              { reasoning: "CH3COOH and NH3 are both weak, so their reaction is reversible and establishes an equilibrium mixture rather than completing.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Highest pH: NaOH (strong base). Lowest pH: HCl (strong acid).", marks: 2, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) HCl strong acid, CH3COOH weak acid, NaOH strong base, NH3 weak base (b) net ionic equations written (c) strong-strong goes to completion; weak-weak reaches equilibrium (d) highest pH NaOH, lowest pH HCl.",
            commonErrors: ["Writing molecular equations instead of net ionic for strong electrolytes.", "Assuming all neutralizations go to completion."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem11-u3-ph-water",
      title: "pH and the autoionization of water",
      skill: "Calculate pH, pOH and ion concentrations using pH = -log[H+], pOH = -log[OH-], and Kw = [H+][OH-] = 10^-14.",
      lesson: {
        sections: [
          {
            heading: "The pH scale",
            body: "Water autoionizes slightly: $\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-$. At 25°C, $[\\text{H}^+][\\text{OH}^-] = K_w = 1.0 \\times 10^{-14}$, and in pure water $[\\text{H}^+] = [\\text{OH}^-] = 1.0 \\times 10^{-7}\\ \\text{mol dm}^{-3}$ (pH 7, neutral).\n\npH is defined as:\n\n$$\\text{pH} = -\\log_{10}[\\text{H}^+]$$\n\nSimilarly $\\text{pOH} = -\\log_{10}[\\text{OH}^-]$, and $\\text{pH} + \\text{pOH} = 14$ at 25°C.",
          },
          {
            heading: "Reading the scale",
            body: "- pH < 7: acidic ($[\\text{H}^+] > [\\text{OH}^-]$)\n- pH = 7: neutral\n- pH > 7: basic ($[\\text{OH}^-] > [\\text{H}^+]$)\n\nEach pH unit is a factor of 10 in $[\\text{H}^+]$: pH 3 is ten times more acidic than pH 4. The scale typically runs 0-14 but can extend beyond for very concentrated solutions.",
          },
          {
            heading: "Calculations",
            body: "To find pH from $[\\text{H}^+]$: take $-\\log_{10}$ of the concentration. To find $[\\text{H}^+]$ from pH: compute $10^{-\\text{pH}}$. To find $[\\text{OH}^-]$ when you know $[\\text{H}^+]$: use $[\\text{OH}^-] = K_w/[\\text{H}^+]$.",
          },
        ],
        keyFormulas: [
          { name: "pH", statement: "$\\text{pH} = -\\log_{10}[\\text{H}^+]$" },
          { name: "pOH", statement: "$\\text{pOH} = -\\log_{10}[\\text{OH}^-]$; $\\text{pH} + \\text{pOH} = 14$ at 25°C" },
          { name: "Kw", statement: "$[\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$" },
        ],
        workedExample: {
          problem: "A solution has $[\\text{H}^+] = 2.5 \\times 10^{-4}\\ \\text{mol dm}^{-3}$. Calculate its pH and $[\\text{OH}^-]$.",
          solution: "$\\text{pH} = -\\log_{10}(2.5 \\times 10^{-4}) = -(\\log 2.5 - 4) = -(0.398 - 4) = 3.60$. Then $[\\text{OH}^-] = 1.0 \\times 10^{-14}/2.5 \\times 10^{-4} = 4.0 \\times 10^{-11}\\ \\text{mol dm}^{-3}$.",
        },
      },
      questions: [
        {
          id: "chem11-u3-ph-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the pH of a solution with $[\\text{H}^+] = 1.0 \\times 10^{-3}\\ \\text{mol dm}^{-3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$11$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$-3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "pH", statement: "$\\text{pH} = -\\log_{10}[\\text{H}^+]$" }],
            steps: [{ reasoning: "$\\text{pH} = -\\log_{10}(10^{-3}) = 3$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Forgetting the negative sign, giving -3.", "Confusing pH with pOH."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem11-u3-ph-water-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A solution has pH = 9.0 at 25°C.\n\n(a) Calculate $[\\text{H}^+]$.\n(b) Calculate $[\\text{OH}^-]$.\n(c) State whether the solution is acidic or basic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH inverse", statement: "$[\\text{H}^+] = 10^{-\\text{pH}}$" },
              { kind: "formula", name: "Kw", statement: "$[\\text{OH}^-] = 10^{-14}/[\\text{H}^+]$" },
            ],
            steps: [
              { reasoning: "$[\\text{H}^+] = 10^{-9} = 1.0 \\times 10^{-9}\\ \\text{mol dm}^{-3}$.", marks: 1, markCode: "M" },
              { reasoning: "$[\\text{OH}^-] = 10^{-14}/10^{-9} = 10^{-5} = 1.0 \\times 10^{-5}\\ \\text{mol dm}^{-3}$.", marks: 1, markCode: "M" },
              { reasoning: "pH > 7, so the solution is basic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $1.0 \\times 10^{-9}\\ \\text{mol dm}^{-3}$ (b) $1.0 \\times 10^{-5}\\ \\text{mol dm}^{-3}$ (c) basic.",
            commonErrors: ["Giving $[\\text{H}^+] = 10^9$ instead of $10^{-9}$.", "Confusing pOH with pH."],
            examinerNote: "M1 each concentration, B1 classification.",
          },
        },
        {
          id: "chem11-u3-ph-water-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student measures the pH of three solutions: lemon juice (pH 2.3), pure water (pH 7.0), and ammonia solution (pH 11.6).\n\n(a) Calculate $[\\text{H}^+]$ for each.\n(b) Explain why lemon juice is 'more acidic' than water in terms of $[\\text{H}^+]$.\n(c) Calculate how many times more $[\\text{H}^+]$ lemon juice has than water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH inverse", statement: "$[\\text{H}^+] = 10^{-\\text{pH}}$" },
              { kind: "principle", name: "pH scale", statement: "Each pH unit is a factor of 10 in $[\\text{H}^+]$." },
            ],
            steps: [
              { reasoning: "Lemon: $10^{-2.3} \\approx 5.0 \\times 10^{-3}$; water: $10^{-7}$; ammonia: $10^{-11.6} \\approx 2.5 \\times 10^{-12}$.", marks: 2, markCode: "M" },
              { reasoning: "Lemon juice has much higher $[\\text{H}^+]$ than water, so it is more acidic.", marks: 1, markCode: "B" },
              { reasoning: "Ratio: $5.0 \\times 10^{-3}/10^{-7} = 5.0 \\times 10^4 \\approx 50{,}000$ times more $[\\text{H}^+]$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lemon $\\approx 5 \\times 10^{-3}$, water $10^{-7}$, ammonia $\\approx 2.5 \\times 10^{-12}$ (b) higher [H+] = more acidic (c) about 50,000 times more [H+].",
            commonErrors: ["Subtraction instead of ratio for 'how many times'.", "Using pH difference as a linear factor."],
            examinerNote: "M2 concentrations, B1 explanation, A1 ratio.",
          },
        },
        {
          id: "chem11-u3-ph-water-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A chemist prepares solutions of HCl and NaOH at 25°C.",
          parts: [
            { label: "a", prompt: "A solution has $[\\text{H}^+] = 0.010\\ \\text{mol dm}^{-3}$. Calculate its pH.", marks: 2 },
            { label: "b", prompt: "Calculate the pH of a $0.0010\\ \\text{mol dm}^{-3}$ NaOH solution.", marks: 3 },
            { label: "c", prompt: "Explain why the pH of pure water changes slightly with temperature.", marks: 3 },
            { label: "d", prompt: "If 25.0 cm³ of 0.10 mol/dm³ HCl is mixed with 25.0 cm³ of 0.10 mol/dm³ NaOH, calculate the pH of the resulting solution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH", statement: "$\\text{pH} = -\\log_{10}[\\text{H}^+]$" },
              { kind: "formula", name: "Kw", statement: "$[\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$ at 25°C" },
              { kind: "principle", name: "Neutralization", statement: "Equal moles of strong acid and strong base give a neutral salt solution." },
            ],
            steps: [
              { reasoning: "$\\text{pH} = -\\log_{10}(0.010) = -\\log_{10}(10^{-2}) = 2.0$.", working: "-\\log(0.010)=2.0", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$0.0010\\ \\text{M NaOH}$ gives $[\\text{OH}^-] = 0.0010$, so $\\text{pOH} = 3.0$ and $\\text{pH} = 14 - 3 = 11.0$.", working: "pOH=3, pH=11", marks: 3, markCode: "M", part: "b" },
              { reasoning: "Kw increases with temperature, so $[\\text{H}^+] = [\\text{OH}^-]$ rises above $10^{-7}$, making neutral pH slightly below 7.", marks: 2, markCode: "R", part: "c" },
              { reasoning: "Water's autoionization is endothermic, so Kw grows with T.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Equal volumes and equal concentrations mean equal moles of $\\text{H}^+$ and $\\text{OH}^-$; they neutralize exactly.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "The resulting NaCl solution is neutral: $\\text{pH} = 7.0$ (at 25°C).", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) pH = 2.0 (b) pH = 11.0 (c) Kw rises with T, neutral pH drops below 7 (d) pH = 7.0.",
            commonErrors: ["Forgetting pOH + pH = 14 for bases.", "Thinking mixing equal volumes always gives pH 7; equal moles are needed."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
