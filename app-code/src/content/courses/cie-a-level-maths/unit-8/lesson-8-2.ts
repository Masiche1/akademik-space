import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cial-m-u8-lesson-8-2",
  code: "8-2",
  title: "Implicit Differentiation",
  goal: "I CAN differentiate equations where y is not isolated.",
  standards: ["Cambridge A Level Mathematics 9709: differentiation"],
  vocabulary: [
    { term: "Implicit equation", definition: "Equation in x and y where y is not the subject." },
    { term: "Chain rule", definition: "$\\frac{dy}{dx}$ of a composite function." },
    { term: "Tangent", definition: "Line touching a curve at a point; gradient $= \\frac{dy}{dx}$." },
  ],
  concepts: [
    {
      id: "cial-m-u8-implicit",
      title: "Implicit differentiation",
      skill: "Differentiate implicit equations and find tangents and normals.",
      lesson: {
        sections: [
          {
            heading: "The method",
            body: "Differentiate term by term with respect to $x$. Whenever $y$ appears, its derivative contributes $\\frac{dy}{dx}$ — e.g. $\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}$ by the chain rule. Products like $xy$ need the product rule: $\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}$. Rearrange to make $\\frac{dy}{dx}$ the subject.",
          },
          {
            heading: "Tangents and normals",
            body: "At a point $(x_1,y_1)$, substitute into $\\frac{dy}{dx}$ to get the tangent gradient $m_T$. Normal gradient $m_N = -\\frac{1}{m_T}$. Tangent: $y - y_1 = m_T(x - x_1)$.",
          },
        ],
        keyFormulas: [
          { name: "d/dx(yⁿ)", statement: "$n y^{n-1}\\frac{dy}{dx}$" },
          { name: "d/dx(xy)", statement: "$y + x\\frac{dy}{dx}$" },
          { name: "Normal", statement: "$m_N = -1/m_T$" },
        ],
        workedExample: {
          problem: "Find $\\frac{dy}{dx}$ for $x^2 + y^2 = 25$.",
          solution: "$2x + 2y\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{x}{y}$.",
        },
      },
      questions: [
        {
          id: "cial-m-u8-im-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}(y^3)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3y^2\\frac{dy}{dx}$" }, { id: "b", text: "$3y^2$" }, { id: "c", text: "$y^3\\frac{dy}{dx}$" }, { id: "d", text: "$3x^2\\frac{dy}{dx}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Chain rule", statement: "Inner derivative $\\frac{dy}{dx}$." }],
            steps: [{ reasoning: "$\\frac{d}{dx}(y^3) = 3y^2\\frac{dy}{dx}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$3y^2\\frac{dy}{dx}$",
          },
        },
        {
          id: "cial-m-u8-im-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y^2 = x^3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit diff", statement: "Differentiate each term." }],
            steps: [
              { reasoning: "$2y\\frac{dy}{dx} = 3x^2$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{dy}{dx} = \\frac{3x^2}{2y}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3x^2}{2y}$",
          },
        },
        {
          id: "cial-m-u8-im-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find $\\frac{dy}{dx}$ for $x^2 + xy + y^2 = 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Product rule", statement: "$\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}$." }],
            steps: [
              { reasoning: "$2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Group: $(x + 2y)\\frac{dy}{dx} = -(2x + y)$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{dy}{dx} = -\\frac{2x+y}{x+2y}$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{2x+y}{x+2y}$",
          },
        },
        {
          id: "cial-m-u8-im-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "For $x^2 + y^2 = 25$, find the equation of the tangent at (3, 4).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit tangent", statement: "Differentiate, substitute point, use $y-y_1=m(x-x_1)$." }],
            steps: [
              { reasoning: "$\\frac{dy}{dx} = -\\frac{x}{y}$.", marks: 1, markCode: "M" },
              { reasoning: "At (3,4): $m_T = -\\frac{3}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$y - 4 = -\\frac{3}{4}(x - 3)$.", marks: 1, markCode: "M" },
              { reasoning: "$4y - 16 = -3x + 9 \\Rightarrow 3x + 4y = 25$.", marks: 1, markCode: "M" },
              { reasoning: "Equation correct.", marks: 1, markCode: "M" },
              { reasoning: "Final answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x + 4y = 25$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u8-implicit-notes",
      title: "Implicit differentiation — revision notes",
      summary: "d/dx(yⁿ) = nyⁿ⁻¹ dy/dx; product rule for xy.",
      sections: [
        { heading: "Method", body: "Every y-term gains $\\frac{dy}{dx}$ via chain rule; xy needs product rule. Rearrange for $\\frac{dy}{dx}$." },
        { heading: "Tangents", body: "Substitute the point for gradient; normal gradient = −1/m." },
      ],
    },
  ],
};
