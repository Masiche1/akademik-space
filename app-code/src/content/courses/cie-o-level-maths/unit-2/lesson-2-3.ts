import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olm-u2-lesson-2-3",
  code: "2-3",
  title: "Formulae and Changing the Subject",
  goal: "I CAN substitute into formulae and rearrange to change the subject.",
  standards: ["4024: algebra"],
  vocabulary: [
    { term: "Subject", definition: "The single variable isolated on one side of a formula." },
    { term: "Substitution", definition: "Replacing variables with given values." },
    { term: "Rearranging", definition: "Algebraic steps to isolate a different variable." },
    { term: "Literal equation", definition: "Equation containing only letters, e.g. $v=u+at$." },
  ],
  concepts: [
    {
      id: "olm-u2-s3-substitute",
      title: "Substituting into formulae",
      skill: "Evaluate formulae at O Level.",
      lesson: {
        sections: [
          { heading: "Substitution", body: "To evaluate a formula, replace each variable with its value and compute using BIDMAS. Write the formula with values substituted first — this shows your working and makes errors easy to spot. For $A=\\pi r^2$ with $r=5$: $A=\\pi\\times25=25\\pi\\approx78.5$. Leave answers exact (with $\\pi$ or surds) unless decimals are requested." },
          { heading: "Common formulas", body: "Memorise the standard ones: speed $=\\frac{\\text{distance}}{\\text{time}}$, density $=\\frac{\\text{mass}}{\\text{volume}}$, $v=u+at$, $A=\\frac12bh$, $C=2\\pi r$, $\\text{simple interest}=\\frac{prt}{100}$. In exams, the formula is often given — the skill is correct substitution and careful arithmetic, especially with negative values and fractions." },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$s=\\frac{d}{t}$" },
          { name: "Density", statement: "$\\rho=\\frac{m}{V}$" },
        ],
        workedExample: { problem: "Use $v=u+at$ to find $v$ when $u=12$, $a=-3$, $t=5$.", solution: "$v=12+(-3)(5)=12-15=-3$. Answer: $v=-3$ (units/s) — negative velocity means moving in the opposite direction." },
      },
      questions: [
        {
          id: "olm-u2-s3-su-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Given $A=lw$, find $A$ when $l=8$, $w=5$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "40" }, { id: "b", text: "13" }, { id: "c", text: "45" }, { id: "d", text: "3" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Replace values." }], steps: [{ reasoning: "$A=8\\times5=40$.", marks: 1, markCode: "A" }], finalAnswer: "40" },
        },
        {
          id: "olm-u2-s3-su-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Use $s=\\frac{d}{t}$ to find $s$ when $d=150$ km, $t=2.5$ h.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Divide." }], steps: [
            { reasoning: "$s=\\frac{150}{2.5}=60$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 60 km/h.", marks: 1, markCode: "A" },
          ], finalAnswer: "60 km/h" },
        },
        {
          id: "olm-u2-s3-su-q3", difficulty: "core", totalMarks: 3,
          stem: "Given $F=\\frac{9}{5}C+32$, convert $C=20$ to Fahrenheit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Careful order." }], steps: [
            { reasoning: "$F=\\frac95(20)+32=36+32=68$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $68°F$.", marks: 1, markCode: "M" },
            { reasoning: "Check: 20°C is room temperature → 68°F plausible ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$68°F$" },
        },
        {
          id: "olm-u2-s3-su-q4", difficulty: "core", totalMarks: 4,
          stem: "Given $A=\\frac12bh$, find $A$ when $b=12$ cm, $h=7.5$ cm, giving units.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Include units." }], steps: [
            { reasoning: "$A=\\frac12\\times12\\times7.5=45$.", marks: 1, markCode: "M" },
            { reasoning: "Units: cm × cm = cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $45$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$45$ cm²" },
        },
      ],
    },
    {
      id: "olm-u2-s3-change",
      title: "Changing the subject",
      skill: "Rearrange formulae at O Level.",
      lesson: {
        sections: [
          { heading: "The goal", body: "Changing the subject means isolating a different variable using inverse operations — the same balancing act as solving equations, but with letters instead of numbers. The variable you want becomes the subject: everything else moves to the other side through inverse operations. Work in reverse order of how the formula would be evaluated." },
          { heading: "Tricky cases", body: "If the target is inside a fraction, multiply through to clear denominators first. If it's multiplied by something, divide. If it appears twice, collect like terms first. For $v=u+at$ making $t$ the subject: $at=v-u$ → $t=\\frac{v-u}{a}$. For $A=\\frac12bh$ making $h$: $h=\\frac{2A}{b}$. Always state the final formula clearly." },
        ],
        keyFormulas: [
          { name: "Inverse ops", statement: "Undo operations in reverse order" },
        ],
        workedExample: { problem: "Make $h$ the subject of $A=\\frac12bh$.", solution: "$2A=bh$ (multiply both sides by 2); $h=\\frac{2A}{b}$ (divide by b)." },
      },
      questions: [
        {
          id: "olm-u2-s3-ch-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Make $x$ the subject of $y=3x+2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=\\frac{y-2}{3}$" }, { id: "b", text: "$x=\\frac{y}{3}+2$" }, { id: "c", text: "$x=y-2$" }, { id: "d", text: "$x=\\frac{y+2}{3}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Inverse ops." }], steps: [{ reasoning: "$y-2=3x$ → $x=\\frac{y-2}{3}$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\frac{y-2}{3}$" },
        },
        {
          id: "olm-u2-s3-ch-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Make $r$ the subject of $C=2\\pi r$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Divide." }], steps: [
            { reasoning: "$r=\\frac{C}{2\\pi}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$r=\\frac{C}{2\\pi}$" },
        },
        {
          id: "olm-u2-s3-ch-q3", difficulty: "core", totalMarks: 3,
          stem: "Make $t$ the subject of $v=u+at$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Isolate t." }], steps: [
            { reasoning: "$v-u=at$ → $t=\\frac{v-u}{a}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u+a\\times\\frac{v-u}{a}=u+v-u=v$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$t=\\frac{v-u}{a}$" },
        },
        {
          id: "olm-u2-s3-ch-q4", difficulty: "core", totalMarks: 4,
          stem: "Make $x$ the subject of $y=\\frac{2x+1}{x-3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange fraction", statement: "Cross-multiply." }], steps: [
            { reasoning: "$y(x-3)=2x+1$ → $xy-3y=2x+1$.", marks: 1, markCode: "M" },
            { reasoning: "Collect x terms: $xy-2x=3y+1$ → $x(y-2)=3y+1$ → $x=\\frac{3y+1}{y-2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\frac{3y+1}{y-2}$, $y\\neq2$.", marks: 1, markCode: "M" },
            { reasoning: "Verify by substituting back. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac{3y+1}{y-2}$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u2-s3-form-notes", title: "Formulae — notes", summary: "Substitution and rearranging.",
      sections: [
        { heading: "Substitute", body: "Replace variables with values, compute with BIDMAS, include units." },
        { heading: "Change subject", body: "Inverse operations in reverse order; clear fractions first; verify by back-substitution." },
      ] },
  ],
};
