import type { Lesson } from "../../../types.ts";

export const lessonp23: Lesson = {
  id: "olphys-u2-lesson-2-3",
  code: "2-3",
  title: "Moments and Turning Effects",
  goal: "I CAN calculate moments and describe the principle of moments and centre of gravity.",
  standards: ["5054 2.3"],
  vocabulary: [
    { term: "Moment", definition: "Turning effect of force: M = F × d (force × perpendicular distance)." },
    { term: "Pivot", definition: "Point about which object turns." },
    { term: "Lever", definition: "Rigid bar pivoted to multiply force." },
    { term: "Principle of moments", definition: "For equilibrium: sum of clockwise moments = sum of anticlockwise." },
    { term: "Centre of gravity", definition: "Point where weight appears to act." },
    { term: "Stability", definition: "Wide base + low CoG = more stable." },
    { term: "Gears", definition: "Wheels with teeth transmitting rotation; gear ratio = teeth ratio." },
    { term: "Hydraulic system", definition: "Pressure transmitted through fluid — Pascal's principle." },
  ],
  concepts: [
    {
      id: "olphys-u2-moments",
      title: "Moments and levers",
      skill: "Calculate moments and apply the principle of moments.",
      lesson: {
        sections: [
          {
            heading: "Moment",
            body: "**M = F × d** where d = perpendicular distance from pivot to force line.\n\nUnit: newton-metre (N m). Larger force or larger distance → larger moment.",
          },
          {
            heading: "Principle of moments",
            body: "For a balanced (equilibrium) object:\n**Σ clockwise moments = Σ anticlockwise moments**\n\nExample: see-saw with 30 N at 2 m left = 60 Nm needs 60 Nm right.",
          },
          {
            heading: "Levers",
            body: "Levers multiply force: effort × effort arm = load × load arm.\n- Longer effort arm → less effort needed\n- Examples: crowbar, wheelbarrow, scissors",
          },
        ],
        keyFormulas: [
          { name: "Moment", statement: "$M = Fd$" },
          { name: "Equilibrium", statement: "$\\sum M_{clockwise} = \\sum M_{anticlockwise}$" },
        ],
        workedExample: {
          problem: "A force of 10 N acts at 0.5 m from pivot. Find moment.",
          solution: "M = Fd = 10 × 0.5 = 5 N m.",
        },
      },
      questions: [
        {
          id: "olphys-u2-moments-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the moment of a force?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Force × time" }, { id: "b", text: "Force × perpendicular distance" }, { id: "c", text: "Mass × velocity" }, { id: "d", text: "Force × mass" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Moment", statement: "M = Fd." }],
            steps: [{ reasoning: "Recall.", working: "M = Fd", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Force × perpendicular distance",
            commonErrors: ["Using parallel distance not perpendicular."],
          },
        },
        {
          id: "olphys-u2-moments-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 20 N force acts at 0.3 m from pivot. Calculate moment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Moment", statement: "M = Fd." }],
            steps: [
              { reasoning: "M = 20 × 0.3.", working: "M = 20 \\times 0.3", marks: 1, markCode: "M" },
              { reasoning: "= 6 N m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 N m",
            commonErrors: ["Unit error — N m not N."],
          },
        },
        {
          id: "olphys-u2-moments-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A see-saw has 40 N at 1.5 m on one side. What force at 2 m on other side balances it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Moments", statement: "Clockwise = anticlockwise." }],
            steps: [
              { reasoning: "Moment left = 40 × 1.5 = 60 Nm.", marks: 1, markCode: "M" },
              { reasoning: "Need 60 Nm right.", marks: 1, markCode: "M" },
              { reasoning: "F = 60/2 = 30 N.", marks: 1, markCode: "A" },
              { reasoning: "Unit N.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "30 N",
            commonErrors: ["Not equating moments."],
          },
        },
        {
          id: "olphys-u2-moments-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the principle of moments and levers.",
          parts: [
            { label: "a", prompt: "Define moment.", marks: 2 },
            { label: "b", prompt: "State principle of moments.", marks: 3 },
            { label: "c", prompt: "Explain how levers multiply force.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Moments", statement: "M=Fd; balanced when moments equal." }],
            steps: [
              { part: "a", reasoning: "F × perpendicular distance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CW = ACW moments.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "For equilibrium.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effort arm > load arm.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less effort needed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Examples: crowbar.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) F×d (b) CW=ACW (c) longer effort arm→less force",
            commonErrors: ["In (c) saying 'no effort' — reduced effort."],
          },
        },
      ],
    },
    {
      id: "olphys-u2-centre-gravity",
      title: "Centre of gravity and stability",
      skill: "Describe centre of gravity, stability and hydraulic systems.",
      lesson: {
        sections: [
          {
            heading: "Centre of gravity",
            body: "Point where object's weight appears to act. Regular objects: at geometric centre. Irregular: find by balancing.",
          },
          {
            heading: "Stability",
            body: "Object stable when vertical line through CoG falls **within base**.\n- Wider base → more stable\n- Lower CoG → more stable\n- Racing cars: low CoG prevents tipping",
          },
          {
            heading: "Hydraulic systems",
            body: "Pascal's principle: pressure applied to enclosed fluid transmitted equally. F₁/A₁ = F₂/A₂.\n\nUsed in brakes, lifts, jacks — small force on small piston → large force on large piston.",
          },
        ],
        keyFormulas: [
          { name: "Hydraulic", statement: "$\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$" },
        ],
        workedExample: {
          problem: "A hydraulic jack has small piston area 0.001 m² and large 0.01 m². Force on small = 50 N. Force on large?",
          solution: "P = F/A equal: F₂ = 50 × (0.01/0.001) = 500 N.",
        },
      },
      questions: [
        {
          id: "olphys-u2-centre-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the centre of gravity?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Geometric centre always" }, { id: "b", text: "Point where weight appears to act" }, { id: "c", text: "Middle of object" }, { id: "d", text: "Heaviest point" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "CoG", statement: "Weight acts here." }],
            steps: [{ reasoning: "Recall.", working: "\\text{weight point}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Point where weight appears to act",
            commonErrors: ["Only geometric centre for regular shapes."],
          },
        },
        {
          id: "olphys-u2-centre-gravity-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two factors affecting stability.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Stability", statement: "Base width and CoG height." }],
            steps: [
              { reasoning: "Wide base.", marks: 1, markCode: "M" },
              { reasoning: "Low CoG.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Width of base (wider = more stable) and height of centre of gravity (lower = more stable).",
            commonErrors: ["Only giving one factor."],
          },
        },
        {
          id: "olphys-u2-centre-gravity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a wide-based object is more stable.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Stability", statement: "Vertical through CoG stays in base." }],
            steps: [
              { reasoning: "Wide base = larger angle before tipping.", marks: 1, markCode: "M" },
              { reasoning: "CoG line stays within base longer.", marks: 1, markCode: "M" },
              { reasoning: "More force needed to tip.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A wider base means the vertical line through the centre of gravity must move further before it falls outside the base — more force/tilt needed to tip the object.",
            commonErrors: ["Saying 'heavier is stable' — it's base/CoG."],
          },
        },
        {
          id: "olphys-u2-centre-gravity-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain centre of gravity, stability and hydraulic systems.",
          parts: [
            { label: "a", prompt: "Define CoG.", marks: 2 },
            { label: "b", prompt: "Explain stability factors.", marks: 3 },
            { label: "c", prompt: "Explain hydraulic principle.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "CoG/stability/hydraulics", statement: "CoG=weight point; stability=base+CoG; Pascal F/A equal." }],
            steps: [
              { part: "a", reasoning: "Weight acts here.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Wide base stable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Low CoG stable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pressure transmitted equally.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "F₁/A₁=F₂/A₂.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Small force→large force.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Applications.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) weight point (b) base+CoG (c) Pascal equal pressure",
            commonErrors: ["In (c) wrong formula direction."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u2-moments-cog-notes",
      title: "Moments, centre of gravity and hydraulics — revision notes",
      summary: "M=Fd, principle of moments, CoG, stability, Pascal's principle.",
      sections: [
        {
          heading: "Key facts",
          body: "Moment=Fd (perpendicular distance). Equilibrium: CW=ACW. CoG=weight point. Stable: wide base+low CoG. Hydraulic: F/A equal.",
        },
        {
          heading: "Exam technique",
          body: "- Use perpendicular distance for moments.\n- Lever: effort arm × effort = load arm × load.\n- Hydraulic: larger area→larger force.",
        },
      ],
    },
  ],
};
