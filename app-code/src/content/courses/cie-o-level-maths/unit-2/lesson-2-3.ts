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
            { id: "a", text: "40" },
            { id: "b", text: "45" },
            { id: "c", text: "13" },
            { id: "d", text: "3" },
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
        {
          id: "olm-u2-s3-su-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Given $v=u+at$, find $v$ when $u=5$, $a=2$, $t=3$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" },
            { id: "b", text: "11" },
            { id: "c", text: "30" },
            { id: "d", text: "16" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Replace variables with values." }], steps: [{ reasoning: "$v=5+2\\times3=5+6=11$.", marks: 1, markCode: "A" }], finalAnswer: "11" },
        },
        {
          id: "olm-u2-s3-su-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Using $s=\\frac{d}{t}$, find $s$ when $d=90$ km and $t=1.5$ h.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Divide distance by time." }], steps: [
            { reasoning: "$s=\\frac{90}{1.5}=60$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 60 km/h.", marks: 1, markCode: "A" },
          ], finalAnswer: "60 km/h" },
        },
        {
          id: "olm-u2-s3-su-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Given $A=\\pi r^2$, find $A$ when $r=3$. Leave your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Square the radius, multiply by $\\pi$." }], steps: [
            { reasoning: "$A=\\pi\\times3^2=9\\pi$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $9\\pi$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$9\\pi$" },
        },
        {
          id: "olm-u2-s3-su-q8", difficulty: "core", totalMarks: 1,
          stem: "Given $F=\\frac95C+32$, find $F$ when $C=100$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "100" },
            { id: "b", text: "212" },
            { id: "c", text: "68" },
            { id: "d", text: "132" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Multiply before adding." }], steps: [{ reasoning: "$F=\\frac95(100)+32=180+32=212$.", marks: 1, markCode: "A" }], finalAnswer: "212" },
        },
        {
          id: "olm-u2-s3-su-q9", difficulty: "core", totalMarks: 3,
          stem: "Given $P=2(l+w)$, find $P$ when $l=7.5$ and $w=4.2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 23.4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Add inside brackets, then multiply by 2." }], steps: [
            { reasoning: "$l+w=7.5+4.2=11.7$.", marks: 1, markCode: "M" },
            { reasoning: "$P=2\\times11.7=23.4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 23.4.", marks: 1, markCode: "A" },
          ], finalAnswer: "23.4" },
        },
        {
          id: "olm-u2-s3-su-q10", difficulty: "core", totalMarks: 3,
          stem: "Given $v=u+at$, find $v$ when $u=-4$, $a=3$, $t=6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Handle the negative carefully." }], steps: [
            { reasoning: "$v=-4+3\\times6=-4+18$.", marks: 1, markCode: "M" },
            { reasoning: "$=14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $v=14$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$v=14$" },
        },
        {
          id: "olm-u2-s3-su-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Simple interest is given by $I=\\frac{PRT}{100}$. Find $I$ when $P=5000$, $R=4.5$, $T=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 450 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Multiply numerator then divide by 100." }], steps: [
            { reasoning: "$I=\\frac{5000\\times4.5\\times2}{100}$.", marks: 1, markCode: "M" },
            { reasoning: "Numerator: $5000\\times4.5=22500$; $22500\\times2=45000$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{45000}{100}=450$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 450.", marks: 1, markCode: "A" },
          ], finalAnswer: "450" },
        },
        {
          id: "olm-u2-s3-su-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Given $s=ut+\\frac12at^2$, find $s$ when $u=10$, $a=-2$, $t=4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Compute each term separately." }], steps: [
            { reasoning: "$ut=10\\times4=40$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac12at^2=\\frac12(-2)(16)=-16$.", marks: 1, markCode: "M" },
            { reasoning: "$s=40-16=24$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $s=24$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$s=24$" },
        },
        {
          id: "olm-u2-s3-su-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Density $=\\frac{\\text{mass}}{\\text{volume}}$. A block has mass 250 g and volume 50 cm³. Its density is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5 g/cm³" },
            { id: "b", text: "12500 g/cm³" },
            { id: "c", text: "200 g/cm³" },
            { id: "d", text: "0.2 g/cm³" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Divide mass by volume." }], steps: [{ reasoning: "$\\frac{250}{50}=5$ g/cm³.", marks: 1, markCode: "A" }], finalAnswer: "5 g/cm³" },
        },
        {
          id: "olm-u2-s3-su-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Given $A=\\frac12bh$, find $A$ when $b=10$ cm and $h=6$ cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Half of base times height." }], steps: [
            { reasoning: "$A=\\frac12\\times10\\times6=30$.", marks: 1, markCode: "M" },
            { reasoning: "Units: cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $30$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$30$ cm²" },
        },
        {
          id: "olm-u2-s3-su-q15", difficulty: "core", totalMarks: 3,
          stem: "Given $C=2\\pi r$, find $C$ when $r=7$. Leave your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Circumference $=2\\pi r$." }], steps: [
            { reasoning: "$C=2\\pi\\times7=14\\pi$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $14\\pi$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$14\\pi$" },
        },
        {
          id: "olm-u2-s3-su-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Given $s=ut+\\frac12at^2$, find $u$ when $s=100$, $a=2$, $t=5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitute then solve", statement: "Form an equation in $u$." }], steps: [
            { reasoning: "$100=5u+\\frac12(2)(25)=5u+25$.", marks: 1, markCode: "M" },
            { reasoning: "$5u=75$ → $u=15$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $15(5)+25=75+25=100$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $u=15$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$u=15$" },
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
            { id: "a", text: "$x=y-2$" },
            { id: "b", text: "$x=\\frac{y}{3}+2$" },
            { id: "c", text: "$x=\\frac{y-2}{3}$" },
            { id: "d", text: "$x=\\frac{y+2}{3}$" },
          ], correctChoiceId: "c" },
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
        {
          id: "olm-u2-s3-ch-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Make $x$ the subject of $y=2x-1$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=2y+1$" },
            { id: "b", text: "$x=\\frac{y}{2}+1$" },
            { id: "c", text: "$x=\\frac{y-1}{2}$" },
            { id: "d", text: "$x=\\frac{y+1}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Inverse operations in reverse order." }], steps: [{ reasoning: "$y+1=2x$ → $x=\\frac{y+1}{2}$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\frac{y+1}{2}$" },
        },
        {
          id: "olm-u2-s3-ch-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Make $x$ the subject of $y=ax+b$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=\\frac{y-b}{a}$" },
            { id: "b", text: "$x=\\frac{y+b}{a}$" },
            { id: "c", text: "$x=\\frac{y}{a}-b$" },
            { id: "d", text: "$x=a(y-b)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Subtract then divide." }], steps: [{ reasoning: "$y-b=ax$ → $x=\\frac{y-b}{a}$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\frac{y-b}{a}$" },
        },
        {
          id: "olm-u2-s3-ch-q7", difficulty: "foundation", totalMarks: 3,
          stem: "Make $x$ the subject of $y=4x+8$, and hence find $x$ when $y=36$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange then substitute", statement: "Isolate $x$ first." }], steps: [
            { reasoning: "$y-8=4x$ → $x=\\frac{y-8}{4}$.", marks: 1, markCode: "M" },
            { reasoning: "Substitute $y=36$: $x=\\frac{36-8}{4}=\\frac{28}{4}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=7$" },
        },
        {
          id: "olm-u2-s3-ch-q8", difficulty: "core", totalMarks: 1,
          stem: "Make $a$ the subject of $v=u+at$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$a=\\frac{v+u}{t}$" },
            { id: "b", text: "$a=\\frac{v-u}{t}$" },
            { id: "c", text: "$a=v-ut$" },
            { id: "d", text: "$a=\\frac{u-v}{t}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Isolate $a$." }], steps: [{ reasoning: "$v-u=at$ → $a=\\frac{v-u}{t}$.", marks: 1, markCode: "A" }], finalAnswer: "$a=\\frac{v-u}{t}$" },
        },
        {
          id: "olm-u2-s3-ch-q9", difficulty: "core", totalMarks: 3,
          stem: "Make $r$ the subject of $A=\\pi r^2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange with root", statement: "Divide by $\\pi$ then square root." }], steps: [
            { reasoning: "$\\frac{A}{\\pi}=r^2$.", marks: 1, markCode: "M" },
            { reasoning: "$r=\\sqrt{\\frac{A}{\\pi}}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$r=\\sqrt{\\frac{A}{\\pi}}$" },
        },
        {
          id: "olm-u2-s3-ch-q10", difficulty: "core", totalMarks: 3,
          stem: "Make $h$ the subject of $V=\\pi r^2 h$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Divide by $\\pi r^2$." }], steps: [
            { reasoning: "$V=\\pi r^2 h$.", marks: 1, markCode: "M" },
            { reasoning: "$h=\\frac{V}{\\pi r^2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$h=\\frac{V}{\\pi r^2}$" },
        },
        {
          id: "olm-u2-s3-ch-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Make $x$ the subject of $y=\\frac{x+2}{x-1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange fraction", statement: "Cross-multiply then collect $x$." }], steps: [
            { reasoning: "$y(x-1)=x+2$ → $xy-y=x+2$.", marks: 1, markCode: "M" },
            { reasoning: "Collect $x$ terms: $xy-x=y+2$ → $x(y-1)=y+2$ → $x=\\frac{y+2}{y-1}$, $y\\neq1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\frac{y+2}{y-1}$.", marks: 1, markCode: "M" },
            { reasoning: "Verify by substituting back. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac{y+2}{y-1}$" },
        },
        {
          id: "olm-u2-s3-ch-q12", difficulty: "challenge", totalMarks: 4,
          stem: "If $x=\\frac{y-z}{y+z}$, find the value of $x$ when $y=5$ and $z=3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute", statement: "Replace variables with values." }], steps: [
            { reasoning: "$x=\\frac{5-3}{5+3}=\\frac{2}{8}$.", marks: 1, markCode: "M" },
            { reasoning: "$=0.25$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{2}{8}=\\frac14$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.25.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=0.25$" },
        },
        {
          id: "olm-u2-s3-ch-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Make $b$ the subject of $a=\\frac{b-c}{d}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$b=ad-c$" },
            { id: "b", text: "$b=\\frac{a+c}{d}$" },
            { id: "c", text: "$b=ad+c$" },
            { id: "d", text: "$b=a+d-c$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Multiply by $d$ then add $c$." }], steps: [{ reasoning: "$ad=b-c$ → $b=ad+c$.", marks: 1, markCode: "A" }], finalAnswer: "$b=ad+c$" },
        },
        {
          id: "olm-u2-s3-ch-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Given $y=mx+c$, find $x$ when $y=10$, $m=2$, $c=4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange then substitute", statement: "Isolate $x$ first." }], steps: [
            { reasoning: "$y-c=mx$ → $x=\\frac{y-c}{m}$.", marks: 1, markCode: "M" },
            { reasoning: "$x=\\frac{10-4}{2}=\\frac{6}{2}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u2-s3-ch-q15", difficulty: "core", totalMarks: 3,
          stem: "Make $x$ the subject of $3y=4x-2z$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Collect $x$ terms then divide." }], steps: [
            { reasoning: "$3y+2z=4x$.", marks: 1, markCode: "M" },
            { reasoning: "$x=\\frac{3y+2z}{4}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac{3y+2z}{4}$" },
        },
        {
          id: "olm-u2-s3-ch-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Make $x$ the subject of $y=\\frac{ax+b}{cx-d}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange fraction", statement: "Cross-multiply then collect $x$." }], steps: [
            { reasoning: "$y(cx-d)=ax+b$ → $cxy-dy=ax+b$.", marks: 1, markCode: "M" },
            { reasoning: "Collect $x$ terms: $cxy-ax=dy+b$ → $x(cy-a)=dy+b$ → $x=\\frac{dy+b}{cy-a}$, $cy\\neq a$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\frac{dy+b}{cy-a}$.", marks: 1, markCode: "M" },
            { reasoning: "Verify by substituting back. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac{dy+b}{cy-a}$" },
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
