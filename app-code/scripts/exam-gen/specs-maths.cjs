// Specs for the four Cambridge maths courses.
const { mathsPack, amPack, corePack, lsPack } = require("./packs-maths.cjs");

const MATHS_TERMS = [
  { term: "Index", definition: "The power to which a base is raised, e.g. the 3 in $2^3$." },
  { term: "Standard form", definition: "$a\\times10^n$ where $1\\le a<10$; used for very large or small numbers." },
  { term: "Pythagoras' theorem", definition: "$a^2+b^2=c^2$ for the sides of a right-angled triangle." },
];

function stdFor(syllabus) {
  return (u) => [`${syllabus}: ${u.title}`];
}

module.exports = {
  "cie-igcse-maths": {
    course: "cie-igcse-maths",
    targetPerCourse: 300,
    packs: [mathsPack],
    questionsPerLesson: 10,
    seed: 7101,
    standardsFor: stdFor("0580"),
    vocabulary: () => MATHS_TERMS,
    sections: (u) => [{
      heading: "Exam technique",
      body: `These questions are styled on Cambridge IGCSE Mathematics (0580) ${u.title.toLowerCase()} questions. Show every step of working — method marks are awarded for correct processes even if the final answer is wrong. Check whether the question asks for an exact value or a decimal.`,
    }],
    keyFormulas: (u) => [{ name: "Key results", statement: "Apply the standard formulae for this topic; write final answers with correct units." }],
  },
  "cie-igcse-maths-core": {
    course: "cie-igcse-maths-core",
    targetPerCourse: 300,
    packs: [corePack],
    questionsPerLesson: 10,
    seed: 7102,
    standardsFor: stdFor("0580 Core"),
    vocabulary: () => MATHS_TERMS,
    sections: (u) => [{
      heading: "Exam technique",
      body: `Core tier questions focus on essential techniques in ${u.title.toLowerCase()}. Non-calculator papers require fluent arithmetic — practise index laws, fractions and percentages without a calculator.`,
    }],
  },
  "cie-igcse-additional-maths": {
    course: "cie-igcse-additional-maths",
    targetPerCourse: 300,
    packs: [amPack],
    questionsPerLesson: 10,
    seed: 7103,
    standardsFor: stdFor("0606"),
    vocabulary: () => [
      { term: "Logarithm", definition: "$\\log_b a = c$ means $b^c = a$." },
      { term: "Derivative", definition: "$\\frac{dy}{dx}$ gives the gradient of the curve $y=f(x)$." },
      { term: "Integral", definition: "The reverse of differentiation; $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$." },
    ],
    sections: (u) => [{
      heading: "Exam technique",
      body: `Additional Mathematics (0606) ${u.title.toLowerCase()} questions reward algebraic precision. State domain restrictions, include $+C$ for indefinite integrals, and give angles in the correct range for trigonometric equations.`,
    }],
  },
  "cie-ls-maths": {
    course: "cie-ls-maths",
    targetPerCourse: 300,
    packs: [lsPack],
    questionsPerLesson: 10,
    seed: 7104,
    standardsFor: stdFor("0862"),
    vocabulary: () => [
      { term: "Place value", definition: "The value of a digit depends on its position in the number." },
      { term: "Perimeter", definition: "The total distance around the edge of a shape." },
      { term: "Mean", definition: "The average: sum of values divided by how many there are." },
    ],
    sections: (u) => [{
      heading: "Checkpoint technique",
      body: `Cambridge Lower Secondary Mathematics checkpoint questions on ${u.title.toLowerCase()}. Write answers clearly, show working in a logical order, and check units on every measurement answer.`,
    }],
  },
};
