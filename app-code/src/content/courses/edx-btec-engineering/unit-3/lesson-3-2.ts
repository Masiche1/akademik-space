import type { Lesson } from "../../../types.ts";

export const lesson302: Lesson = {
  id: "edxbteceng-u3-lesson-3-2",
  code: "3-2",
  title: "2D Engineering Drawings",
  goal: "I CAN interpret and create orthographic projections with dimensions, tolerances and standard annotations.",
  standards: ["BTEC L3 National Engineering — Unit 3: Engineering Design"],
  vocabulary: [
    {
      term: "Orthographic projection",
      definition:
        "A 2D representation of a 3D object using multiple views (front, plan, side) projected at right angles.",
    },
    {
      term: "First-angle / third-angle projection",
      definition:
        "Conventions for view placement: first-angle (European) places the view on the opposite side of the object; third-angle (US) places it on the same side.",
    },
    {
      term: "Tolerance",
      definition:
        "The permitted variation in a dimension, e.g. $20.00 \\pm 0.05\\ \\text{mm}$, defining the acceptable upper and lower limits.",
    },
    {
      term: "Datum",
      definition:
        "A reference surface, line or point from which dimensions and tolerances are measured.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u3-2-ortho",
      title: "Orthographic Projection",
      skill: "Read and produce multi-view orthographic drawings.",
      lesson: {
        sections: [
          {
            heading: "Views and projection",
            body: "Orthographic drawing shows front, top (plan) and side views as 2D projections. Third-angle projection (US convention): right-side view placed to the right of front view, top view above. First-angle (ISO/European): views on opposite sides — the symbol on the drawing tells you which convention applies.\n\nHidden details use dashed lines. Centre lines (chain thin) mark symmetry axes. Sections (hatching) reveal internal features. Every view must be aligned with the front view.",
          },
          {
            heading: "Line types and conventions",
            body: "Line hierarchy: thick continuous for visible edges; thin continuous for dimension lines, leaders, centre marks; dashed for hidden edges; chain thin for centre lines; phantom for adjacent parts. Consistent line weight is essential for readability.\n\nDimensions never cross dimension lines; place them outside the outline with extension lines; avoid ambiguity by dimensioning to a single datum where possible.",
          },
        ],
        keyFormulas: [
          {
            name: "View alignment",
            statement:
              "Front view central; plan above (or below); side to right (third-angle)",
          },
          {
            name: "Hidden detail",
            statement: "Dashed thin line for edges not visible in that view",
          },
        ],
        workedExample: {
          problem:
            "A block 60 × 40 × 20 mm has a 20 mm diameter hole through the top face. Describe the three views.",
          solution:
            "Front: rectangle 60×20 (width×height). Plan: rectangle 60×40 with circle dia 20. Side: rectangle 40×20 with hidden/dashed circle if hole axis is vertical — hole appears in plan as a circle and in side view depending on orientation.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u3-2-ortho-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In third-angle projection, the right-side view is placed:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "above the front view",
              },
              {
                id: "b",
                text: "to the left of the front view",
              },
              {
                id: "c",
                text: "to the right of the front view",
              },
              {
                id: "d",
                text: "below the front view",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Third-angle: view placed on same side",
                statement:
                  "Third-angle: view placed on same side as viewing direction",
              },
            ],
            steps: [
              {
                reasoning: "Right-side view goes right of front",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Right of front",
            commonErrors: ["Confusing first and third angle"],
            examinerNote: "Check the projection symbol on the drawing.",
          },
        },
        {
          id: "edxbteceng-u3-2-ortho-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Hidden edges on an engineering drawing are shown as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "thin dashed lines",
              },
              {
                id: "b",
                text: "thick continuous lines",
              },
              {
                id: "c",
                text: "chain thin centre lines",
              },
              {
                id: "d",
                text: "thick dashed lines",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden detail = thin dashed line",
                statement: "Hidden detail = thin dashed line",
              },
            ],
            steps: [
              {
                reasoning: "Standard line-type convention",
                marks: 3,
                markCode: "A",
              },
            ],
            finalAnswer: "Thin dashed",
            commonErrors: ["Using centre lines for hidden edges"],
            examinerNote: "Line types are a core drawing skill.",
          },
        },
        {
          id: "edxbteceng-u3-2-ortho-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a section view differs from an external view and when you would use it.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Section = imaginary cut plane revealing",
                statement:
                  "Section = imaginary cut plane revealing internals; hatching denotes cut material",
              },
            ],
            steps: [
              {
                reasoning: "Correct section definition",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains when needed (internal features)",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Hatching/material convention mentioned",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Clear engineering reasoning",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Cutaway view for internal features",
            commonErrors: [
              "Confusing section with detail view",
              "No purpose given",
            ],
            examinerNote: "Section reveals what hidden lines cannot.",
          },
        },
        {
          id: "edxbteceng-u3-2-ortho-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A stepped shaft: large diameter $40\\ \\text{mm}$ for first $30\\ \\text{mm}$, then $25\\ \\text{mm}$ for next $50\\ \\text{mm}$, total length $80\\ \\text{mm}$, with a $10\\ \\text{mm}$ diameter axial hole through the centre.",
          parts: [
            {
              label: "a",
              prompt: "Describe the front view and what dimensions it needs.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe the end view.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State how the axial hole appears in each view.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-view drawing: each view shows true",
                statement:
                  "Multi-view drawing: each view shows true shape in two directions; hidden features dashed; sections reveal holes",
              },
            ],
            steps: [
              {
                reasoning: "Correct stepped profile described",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Dimensions 30/50/80 and 40/25 stated",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "View correctly oriented",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "End view = concentric circles",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Diameters 40 and 25 identified",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Hole as circle dia 10 in end view",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Hidden lines or section in longitudinal view",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Correct convention applied",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) stepped profile (b) concentric circles (c) hole conventions",
            commonErrors: [
              "Describing views in wrong planes",
              "Missing hidden-line convention",
            ],
            examinerNote: "Spatial visualisation is being tested.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u3-2-tolerancing",
      title: "Dimensions, Tolerances and GD&T",
      skill:
        "Apply dimensional tolerancing and geometric tolerancing to engineering drawings.",
      lesson: {
        sections: [
          {
            heading: "Dimensional tolerancing",
            body: "A dimension like $20.00 \\pm 0.05\\ \\text{mm}$ defines limits $19.95$–$20.05$ mm. Bilateral tolerance (±) is common; unilateral ($+0.1/-0.0$) used when one limit matters (e.g. shaft must not exceed). Fits between mating parts are specified as clearance, transition or interference fits.\n\nTolerance stack-up: when several dimensions chain, errors accumulate. Design so critical fits are dimensioned directly from a datum rather than chained, or use geometric tolerancing (GD&T) to control relationships independently.",
          },
          {
            heading: "GD&T basics",
            body: "Geometric Dimensioning and Tolerancing controls form, orientation, location and runout using feature control frames: a symbol, tolerance value and datum references. E.g. a position tolerance $\\phi 0.1\\ \\text{mm}$ to datums A-B-C means the feature axis must lie within a $\\phi 0.1$ cylinder.\n\nGD&T is unambiguous where ± dimensions cannot express requirements like 'parallel within 0.05' or 'flat within 0.02'. Standards: ASME Y14.5 and ISO 1101.",
          },
        ],
        keyFormulas: [
          {
            name: "Tolerance limits",
            statement: "$L \\pm t$: limits $= L - t$ to $L + t$",
          },
          {
            name: "Stack-up",
            statement: "Worst-case stack $= \\sum |t_i|$",
          },
          {
            name: "Position tolerance",
            statement: "$\\phi t$ zone around true position",
          },
        ],
        workedExample: {
          problem:
            "A pin is specified $10.00 \\pm 0.02\\ \\text{mm}$. What are the limits, and what is the total tolerance band?",
          solution: "Limits $9.98$–$10.02$ mm; total band $= 0.04$ mm.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u3-2-tolerancing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "$20.00 \\pm 0.05\\ \\text{mm}$ gives limits of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "19.95 to 20.00 mm",
              },
              {
                id: "b",
                text: "19.90 to 20.10 mm",
              },
              {
                id: "c",
                text: "19.95 to 20.05 mm",
              },
              {
                id: "d",
                text: "20.00 to 20.05 mm",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bilateral tolerance adds/subtracts the value",
                statement: "Bilateral tolerance adds/subtracts the value",
              },
            ],
            steps: [
              {
                reasoning: "$20 \\pm 0.05 = [19.95, 20.05]$",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "19.95–20.05 mm",
            commonErrors: ["Doubling the tolerance", "One-sided limits"],
            examinerNote: "Total band = 2t.",
          },
        },
        {
          id: "edxbteceng-u3-2-tolerancing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Three stacked plates each have thickness tolerance $\\pm 0.1\\ \\text{mm}$ about a $5.00\\ \\text{mm}$ nominal. Calculate the worst-case total thickness and its tolerance band.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Worst-case stack-up sums absolute tolerances",
                statement: "Worst-case stack-up sums absolute tolerances",
              },
            ],
            steps: [
              {
                reasoning: "Nominal total $= 3 \\times 5 = 15$ mm",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tolerance $= 3 \\times 0.1 = 0.3$ mm",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$15.00 \\pm 0.30$ mm (limits 14.70–15.30)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15 \\pm 0.3$ mm",
            commonErrors: [
              "Averaging tolerances (statistical) when worst-case asked",
              "Doubling errors",
            ],
            examinerNote: "Worst-case ≠ statistical stack-up.",
          },
        },
        {
          id: "edxbteceng-u3-2-tolerancing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one situation where GD&T is preferable to a simple ± tolerance.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GD&T controls form/orientation/location independ",
                statement:
                  "GD&T controls form/orientation/location independent of size",
              },
            ],
            steps: [
              {
                reasoning: "Correct GD&T purpose",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid example (parallelism/position/flatness)",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Explains why ± insufficient",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Mentions datum/bonus tolerance",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "GD&T controls geometric relationships ± cannot",
            commonErrors: ["Vague 'it's more precise'", "No concrete example"],
            examinerNote: "Bonus tolerance and datums are differentiators.",
          },
        },
        {
          id: "edxbteceng-u3-2-tolerancing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A housing has a bore specified $\\phi 25.00 \\pm 0.05\\ \\text{mm}$ and a shaft $\\phi 25.00 \\pm 0.04\\ \\text{mm}$. The design intent is a clearance fit.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the maximum possible clearance and maximum possible interference.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "State whether the design guarantees a clearance fit.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Suggest a specification change to guarantee clearance.",
              marks: 2,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Clearance = hole min − shaft",
                statement:
                  "Clearance = hole min − shaft max; interference = shaft min − hole max",
              },
            ],
            steps: [
              {
                reasoning: "Hole limits $24.95$–$25.05$; shaft $24.96$–$25.04$",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Max clearance $0.09$ mm",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Worst case: shaft $25.04$ in hole $24.95$ → interference $0.09$",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$-0.09$ mm i.e. 0.09 interference",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "No guarantee — overlap possible",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Clear statement",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Unilateral tolerance proposal",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Ensures hole min > shaft max",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) ±0.09 mm possible (b) not guaranteed (c) unilateral tolerances",
            commonErrors: [
              "Assuming nominal equality = clearance",
              "Wrong limit selection",
            ],
            examinerNote: "Fits analysis is a classic exam topic.",
          },
        },
      ],
    },
  ],
};
