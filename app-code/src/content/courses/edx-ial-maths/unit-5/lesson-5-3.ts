import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edial-maths-u5-lesson-5-3",
  code: "5-3",
  title: "Statics and Moments",
  goal: "I CAN resolve forces for equilibrium of a particle and take moments about a point to solve rigid-body problems.",
  standards: ["WME01 M1", "Statics of a particle", "Moments"],
  vocabulary: [
    {
      term: "Equilibrium",
      definition:
        "A state where the resultant force and resultant moment are both zero — the body has no tendency to accelerate or rotate.",
    },
    {
      term: "Resolution of forces",
      definition:
        "Splitting a force into perpendicular components, e.g. $F\\cos\\theta$ and $F\\sin\\theta$.",
    },
    {
      term: "Tension",
      definition:
        "The pulling force in a string, cable or rod; it acts along the string towards the support.",
    },
    {
      term: "Normal reaction",
      definition:
        "The perpendicular contact force exerted by a surface on a body.",
    },
    {
      term: "Moment",
      definition:
        "The turning effect of a force: moment $=$ force $\\times$ perpendicular distance from the pivot ($M=F\\times d$).",
    },
    {
      term: "Centre of mass",
      definition:
        "The point where the whole weight of a body may be considered to act.",
    },
  ],
  concepts: [
    {
      id: "edial-maths-u5-statics",
      title: "Equilibrium of a particle",
      skill:
        "Resolve coplanar forces and apply the conditions for equilibrium to particles suspended by strings or on surfaces.",
      lesson: {
        sections: [
          {
            heading: "Conditions for equilibrium",
            body: "A particle is in equilibrium when the vector sum of forces is zero — equivalently, the sum of horizontal components is zero AND the sum of vertical components is zero. Resolve every force into perpendicular components before summing.",
          },
          {
            heading: "Suspended particles",
            body: "For a particle hung from two strings, draw the three forces: weight $mg$ vertically down, and tensions along each string. Resolve tensions horizontally and vertically; use $\\sum F_x=0$ and $\\sum F_y=0$. If the strings make angles $\\alpha$ and $\\beta$ with the horizontal, the horizontal equation gives $T_1\\cos\\alpha=T_2\\cos\\beta$ and the vertical gives $T_1\\sin\\alpha+T_2\\sin\\beta=mg$.",
          },
          {
            heading: "Particles on rough surfaces",
            body: "On a rough surface include friction $F=\\mu R$ acting up the plane (opposing tendency to slide). The normal reaction balances the component of weight into the plane.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium", statement: "$\\sum F_x=0$ and $\\sum F_y=0$" },
          {
            name: "Resolution",
            statement: "$F\\cos\\theta$ horizontal, $F\\sin\\theta$ vertical",
          },
          { name: "Friction", statement: "$F=\\mu R$" },
        ],
        workedExample: {
          problem:
            "A particle of mass $3$ kg hangs in equilibrium from two strings at $30^\\circ$ and $45^\\circ$ to the horizontal. Find the tensions ($g=9.8$).",
          solution:
            "Vertical: $T_1\\sin30^\\circ+T_2\\sin45^\\circ=29.4$. Horizontal: $T_1\\cos30^\\circ=T_2\\cos45^\\circ$. From horizontal, $T_2=T_1\\frac{\\cos30^\\circ}{\\cos45^\\circ}=T_1\\frac{\\sqrt3/2}{\\sqrt2/2}=T_1\\frac{\\sqrt3}{\\sqrt2}$. Substitute and solve numerically: $T_1\\approx21.5$ N, $T_2\\approx26.3$ N.",
        },
      },
      questions: [
        {
          id: "edial-maths-u5-stat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A particle is in equilibrium under three forces. Two forces are $10$ N east and $10$ N north. What must the third force be?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10\\sqrt2$ N south-west" },
              { id: "b", text: "$10$ N south" },
              { id: "c", text: "$0$ N" },
              { id: "d", text: "$20$ N west" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Equilibrium",
                statement: "The vector sum of forces must be zero.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The third force must cancel the resultant of the first two: $\\sqrt{10^2+10^2}=10\\sqrt2$ N directed north-east, so the third force is $10\\sqrt2$ N south-west.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $10\\sqrt2$ N south-west",
            commonErrors: [
              "Adding the magnitudes instead of using Pythagoras.",
              "Wrong direction — the third force opposes the resultant.",
            ],
          },
        },
        {
          id: "edial-maths-u5-stat-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle of mass $2$ kg hangs in equilibrium from a single string. What is the tension in the string? ($g=9.8$)",
          response: {
            type: "numeric",
            parts: [{ label: "tension", answer: 19.6, unit: "N" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Equilibrium",
                statement: "$\\sum F=0$; the tension balances the weight.",
              },
            ],
            steps: [
              {
                reasoning: "Weight $=mg=2\\times9.8=19.6$ N downward.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "For equilibrium the tension equals the weight.",
                working: "T=19.6\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State the tension.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$T=19.6$ N",
            commonErrors: ["Using $g=10$ when the question says $9.8$."],
          },
        },
        {
          id: "edial-maths-u5-stat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle of mass $4$ kg is held in equilibrium on a rough plane inclined at $30^\\circ$ to the horizontal by a force of $P$ N acting up the plane. The coefficient of friction is $0.2$. Take $g=9.8$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Equilibrium on an incline",
                statement:
                  "$P+F=mg\\sin30^\\circ$ up the plane; $R=mg\\cos30^\\circ$; $F=\\mu R$ down the plane if sliding down is prevented.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resolve the weight: component down the plane $mg\\sin30^\\circ=4\\times9.8\\times0.5=19.6$ N.",
                working: "mg\\sin30^\\circ=19.6\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Normal reaction $R=mg\\cos30^\\circ=4\\times9.8\\times\\frac{\\sqrt3}{2}\\approx33.95$ N.",
                working: "R\\approx33.95\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Friction $F=0.2\\times33.95\\approx6.79$ N acting up the plane (the particle tends to slide down).",
                working: "F\\approx6.79\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equilibrium: $P+F=19.6$, so $P=19.6-6.79=12.81$ N.",
                working: "P\\approx12.8\\text{ N}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P\\approx12.8$ N",
            commonErrors: [
              "Wrong direction for friction — it opposes the tendency to slide down, so it acts up the plane here.",
              "Using $R=mg$ instead of $mg\\cos30^\\circ$.",
            ],
          },
        },
        {
          id: "edial-maths-u5-stat-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle of mass $5$ kg is suspended in equilibrium by two light inextensible strings. One string is horizontal and the other makes an angle of $40^\\circ$ with the horizontal. Take $g=9.8$.",
          parts: [
            {
              label: "a",
              prompt:
                "Draw a force diagram and label the three forces acting on the particle.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Resolve the forces horizontally and vertically.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find the tension in each string.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Equilibrium",
                statement: "$\\sum F_x=0$ and $\\sum F_y=0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Weight $49$ N vertically downward; horizontal tension $T_H$; angled tension $T_A$ at $40^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Label all three forces correctly with directions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Horizontal: $T_H=T_A\\cos40^\\circ$.",
                working: "T_H=T_A\\cos40^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Vertical: $T_A\\sin40^\\circ=49$.",
                working: "T_A\\sin40^\\circ=5\\times9.8=49",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the two equations.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Solve the vertical equation.",
                working:
                  "T_A=\\frac{49}{\\sin40^\\circ}=\\frac{49}{0.6428}\\approx76.2\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Solve the horizontal equation.",
                working:
                  "T_H=76.2\\times\\cos40^\\circ=76.2\\times0.7660\\approx58.4\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State $T_A$.",
                working: "T_A\\approx76.2\\text{ N}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "State $T_H$.",
                working: "T_H\\approx58.4\\text{ N}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Check: resultant of tensions balances weight.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) three forces labelled (b) $T_H=T_A\\cos40^\\circ$, $T_A\\sin40^\\circ=49$ (c) $T_A\\approx76.2$ N, $T_H\\approx58.4$ N",
            commonErrors: [
              "Swapping sine and cosine.",
              "Using $mg=50$ instead of $49$.",
              "Only finding one tension.",
            ],
            examinerNote:
              "Accept $76$ N and $58$ N; exact forms $\\frac{49}{\\sin40^\\circ}$ and $49\\cot40^\\circ$ also score full marks.",
          },
        },
      ],
    },
    {
      id: "edial-maths-u5-moments",
      title: "Moments and rigid bodies",
      skill:
        "Take moments about a point, use centres of mass and solve equilibrium problems for rods and beams.",
      lesson: {
        sections: [
          {
            heading: "Moments",
            body: "The **moment** of a force about a point (the pivot) is $M=F\\times d$, where $d$ is the **perpendicular distance** from the pivot to the line of action of the force. Moments are signed: clockwise positive, anticlockwise negative (choose one convention). A body is in rotational equilibrium when the sum of moments about any point is zero.",
          },
          {
            heading: "Choosing the pivot",
            body: "Take moments about a point where an unknown force acts — that force then has zero moment and drops out of the equation. This is the standard strategy for beam problems with reactions at both ends.",
          },
          {
            heading: "Centres of mass",
            body: "The weight of a uniform rod of length $L$ acts at its midpoint. For a non-uniform rod, the centre of mass may be given or calculated from moments. A ladder or beam problem combines weight moments with reaction forces.",
          },
        ],
        keyFormulas: [
          {
            name: "Moment",
            statement: "$M=F\\times d$ ($d$ = perpendicular distance)",
          },
          {
            name: "Rotational equilibrium",
            statement: "$\\sum M=0$ about any point",
          },
          { name: "Uniform rod", statement: "Weight acts at the midpoint" },
        ],
        workedExample: {
          problem:
            "A uniform rod of length $4$ m and mass $10$ kg is supported horizontally by two vertical forces at its ends. Find the forces if a $50$ N weight is placed $1$ m from the left end.",
          solution:
            "Weight of rod $=98$ N at $2$ m from left. Take moments about left end: $R_R\\times4=98\\times2+50\\times1=246$, so $R_R=61.5$ N. Then $R_L=98+50-61.5=86.5$ N.",
        },
      },
      questions: [
        {
          id: "edial-maths-u5-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A force of $20$ N acts perpendicular to a rod at a point $0.5$ m from a pivot. What is the moment about the pivot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40$ N m" },
              { id: "b", text: "$10$ N m" },
              { id: "c", text: "$0.025$ N m" },
              { id: "d", text: "$10.5$ N m" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moment",
                statement:
                  "$M=F\\times d$ with $d$ the perpendicular distance.",
              },
            ],
            steps: [
              {
                reasoning: "$M=20\\times0.5=10$ N m.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $10$ N m",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "edial-maths-u5-eq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A uniform rod of length $3$ m and mass $6$ kg is supported at both ends. A $20$ N weight is placed $1$ m from the left end. Find the upward force at the right end ($g=9.8$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "right force",
                answer: 36.0667,
                tolerance: 0.01,
                unit: "N",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moment",
                statement:
                  "$M=Fd$; take moments about the left end to eliminate the left reaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rod weight $=6\\times9.8=58.8$ N acting at $1.5$ m; $20$ N weight at $1$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Moments about left end: $R_R\\times3=58.8\\times1.5+20\\times1$.",
                working: "3R_R=88.2+20=108.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "R_R=\\frac{108.2}{3}=36.07\\text{ N}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$R_R\\approx36.1$ N",
            commonErrors: [
              "Using the wrong lever arm for the rod's weight.",
              "Taking moments about the wrong point.",
            ],
          },
        },
        {
          id: "edial-maths-u5-eq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A non-uniform rod of length $5$ m is supported at both ends. Its centre of mass is $2$ m from the left end. The rod weighs $80$ N and a $30$ N load is placed at the right end.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moment",
                statement: "$M=Fd$ about a chosen pivot.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Take moments about the left end to find the right reaction $R_R$.",
                working: "R_R\\times5=80\\times2+30\\times5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "5R_R=160+150=310\\Rightarrow R_R=62\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use vertical equilibrium for the left reaction.",
                working: "R_L+62=80+30=110\\Rightarrow R_L=48\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both reactions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$R_L=48$ N, $R_R=62$ N",
            commonErrors: [
              "Using $2.5$ m for the centre of mass — it is $2$ m from the left, not the midpoint.",
              "Sign errors in moment directions.",
            ],
          },
        },
        {
          id: "edial-maths-u5-eq-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A uniform ladder of length $5$ m and mass $20$ kg rests with its foot on rough horizontal ground and its top against a smooth vertical wall. The ladder makes an angle of $60^\\circ$ with the ground. Take $g=9.8$.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the three forces acting on the ladder and their directions.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Resolve the reaction at the wall into components and state the horizontal reaction at the ground.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Take moments about the foot of the ladder and find the reaction at the wall.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Equilibrium",
                statement:
                  "Forces balance ($\\sum F=0$) and moments balance ($\\sum M=0$).",
              },
              {
                kind: "formula",
                name: "Moment",
                statement:
                  "$M=F\\times d$ with $d$ the perpendicular distance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Weight $196$ N vertically downward at the midpoint; normal reaction at the wall (horizontal, since wall is smooth); reaction at ground with horizontal (friction) and vertical components.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Label the three forces correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The wall is smooth, so its reaction $R_W$ is horizontal only.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "At the ground, friction $F$ acts horizontally and normal reaction $R_G$ vertically.",
                working: "R_G\\text{ vertical},\\ F\\text{ horizontal}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "State that the horizontal ground reaction equals $R_W$ by $\\sum F_x=0$.",
                working: "F=R_W",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Weight acts at the midpoint, $2.5$ m along the ladder; perpendicular distance from foot to weight's line of action is $2.5\\cos60^\\circ=1.25$ m.",
                working: "d=2.5\\cos60^\\circ=1.25\\text{ m}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Moment of weight about foot: $196\\times1.25=245$ N m clockwise.",
                working: "M_{\\text{weight}}=196\\times1.25=245",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Wall reaction $R_W$ is horizontal at height $5\\sin60^\\circ=4.33$ m; its moment about the foot is $R_W\\times4.33$ anticlockwise.",
                working: "d=5\\sin60^\\circ=4.33\\text{ m}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Set moments equal: $R_W\\times4.33=245$.",
                working: "R_W=\\frac{245}{4.33}\\approx56.6\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the wall reaction.",
                working: "R_W\\approx56.6\\text{ N}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) weight down, wall reaction horizontal, ground reaction with friction (b) wall reaction horizontal $R_W$; ground friction $F=R_W$ (c) $R_W\\approx56.6$ N",
            commonErrors: [
              "Using the ladder length instead of the perpendicular distance for the moment arm.",
              "Forgetting the ladder's own weight.",
              "Using $5\\cos60^\\circ$ for the height.",
            ],
            examinerNote:
              "Accept $R_W=\\frac{196\\times1.25}{5\\sin60^\\circ}=\\frac{245}{4.330}=56.6$ N; check $\\tan60^\\circ$ alternative gives same.",
          },
        },
      ],
    },
  ],
};
