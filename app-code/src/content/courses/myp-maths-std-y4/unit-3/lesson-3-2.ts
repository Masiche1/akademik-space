import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypms4-u3-lesson-3-2",
  code: "3-2",
  title: "Trigonometry",
  goal: "I CAN use sine and cosine rules to find missing sides and angles in non-right-angled triangles, and apply trigonometry to bearings and real problems.",
  standards: [
    "MYP Maths: Geometry and trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Sine rule", definition: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$ — used when you know a side and its opposite angle plus one more value." },
    { term: "Cosine rule", definition: "$a^2=b^2+c^2-2bc\\cos A$ — used to find a side or angle." },
    { term: "Included angle", definition: "The angle between two given sides of a triangle." },
    { term: "Bearing", definition: "A direction measured clockwise from north, written like $060°$ or $135°$." },
    { term: "Ambiguous case", definition: "When the sine rule can give two possible angles for a triangle." },
  ],
  concepts: [
    {
      id: "mypms4-u3-trig-rules",
      title: "Sine and cosine rules",
      skill: "Choose and apply the sine or cosine rule to find missing sides and angles.",
      lesson: {
        sections: [
          {
            heading: "Choosing the rule",
            body: "Use the **sine rule** when you know: a side and its opposite angle plus another side or angle. Use the **cosine rule** when you know: two sides and the included angle (to find the third side), or all three sides (to find an angle).",
          },
          {
            heading: "Sine rule",
            body: "$$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$$\n\nFor example, if $A=40°$, $a=7$ cm, $B=60°$, $b=\\frac{7\\sin60°}{\\sin40°}\\approx9.4$ cm.",
          },
          {
            heading: "Cosine rule",
            body: "$$a^2=b^2+c^2-2bc\\cos A$$\n\nTo find an angle, rearrange: $\\cos A=\\frac{b^2+c^2-a^2}{2bc}$. Example: sides 5, 7, 8 — $\\cos A=\\frac{49+64-25}{2\\times7\\times8}=\\frac{88}{112}=0.786$, so $A=38.2°$.",
          },
        ],
        keyFormulas: [
          { name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" },
          { name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$" },
          { name: "Cosine rule (angle)", statement: "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$" },
        ],
        workedExample: {
          problem: "In triangle $ABC$, $b=8$ cm, $c=5$ cm and $A=60°$. Find side $a$.",
          solution: "$a^2=64+25-2(8)(5)\\cos60°=89-80(0.5)=49$, so $a=7$ cm.",
        },
      },
      questions: [
        {
          id: "mypms4-u3-trig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In triangle $ABC$, $a=10$, $A=30°$, $b=8$. Which rule should you use to find $B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sine rule" },
              { id: "b", text: "Cosine rule" },
              { id: "c", text: "Pythagoras" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rule selection", statement: "Sine rule needs a side–angle pair; here $a$ and $A$ are a pair." },
            ],
            steps: [
              { reasoning: "We know side $a$, angle $A$, and side $b$ — a side-angle-side combination solvable by sine rule.", working: "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sine rule",
            commonErrors: ["Choosing cosine rule when sine rule is simpler."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u3-trig-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In triangle $ABC$, $b=6$, $c=4$, $A=60°$. Find side $a$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{28}$" },
              { id: "b", text: "$\\sqrt{52}$" },
              { id: "c", text: "6" },
              { id: "d", text: "$\\sqrt{76}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$." },
            ],
            steps: [
              { reasoning: "$a^2=36+16-48\\cos60°=52-24=28$.", working: "a^2=28", marks: 1, markCode: "M" },
              { reasoning: "$a=\\sqrt{28}\\approx5.3$.", working: "a=\\sqrt{28}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=\\sqrt{28}\\approx5.29$ cm",
            commonErrors: ["Forgetting $\\cos60°=0.5$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In triangle $ABC$, $a=5$, $b=8$, $A=30°$. Find the acute angle $B$ (to 1 decimal place).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$53.1°$" },
              { id: "b", text: "$36.9°$" },
              { id: "c", text: "$126.9°$" },
              { id: "d", text: "$63.4°$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine rule", statement: "$\\frac{b}{\\sin B}=\\frac{a}{\\sin A}$." },
            ],
            steps: [
              { reasoning: "$\\sin B=\\frac{b\\sin A}{a}=\\frac{8\\sin30°}{5}=\\frac{8\\times0.5}{5}=0.8$.", working: "\\sin B=0.8", marks: 1, markCode: "M" },
              { reasoning: "$B=\\sin^{-1}(0.8)=53.1°$ (the acute solution; $126.9°$ is the obtuse alternative).", working: "B=53.1°", marks: 1, markCode: "M" },
              { reasoning: "State the acute angle.", working: "B\\approx53.1°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$B\\approx53.1°$",
            commonErrors: ["Choosing the obtuse solution $126.9°$ when an acute angle is requested."],
            examinerNote: "M1 M1 A1. Accept 53.1°; note ambiguous case gives 126.9° as alternative.",
          },
        },
        {
          id: "mypms4-u3-trig-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ship sails 12 km from port $P$ on a bearing of $040°$ to point $Q$, then 9 km on a bearing of $130°$ to point $R$.",
          parts: [
            { label: "a", prompt: "Describe the angle $QPR$ between the two legs of the journey.", marks: 2 },
            { label: "b", prompt: "Calculate the distance $PR$ (straight-line distance from $P$ to $R$).", marks: 3 },
            { label: "c", prompt: "Calculate the bearing of $R$ from $P$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bearings", statement: "Bearings measured clockwise from north; angle between bearings 040° and 130° is $130-40=90°$." },
            ],
            steps: [
              { part: "a", reasoning: "The change in bearing is $130-40=90°$.", working: "\\angle QPR=90°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The legs are perpendicular.", working: "\\text{perpendicular}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Right-angled triangle: $PR=\\sqrt{12^2+9^2}=\\sqrt{144+81}=\\sqrt{225}=15$ km.", working: "PR=15\\text{ km}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply Pythagoras.", working: "\\sqrt{225}=15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the distance.", working: "15\\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Resolve each leg into north and east components. For $PQ$ (bearing 040°, 12 km): north $=12\\cos40°=9.19$ km, east $=12\\sin40°=7.71$ km.", working: "N=9.19,\\ E=7.71", marks: 1, markCode: "M" },
              { part: "c", reasoning: "For $QR$ (bearing 130°, 9 km): north $=9\\cos130°=-5.79$ km, east $=9\\sin130°=6.89$ km. Total: north $=3.40$ km, east $=14.60$ km.", working: "N=3.40,\\ E=14.60", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Bearing of $PR$ from north: $\\tan^{-1}\\left(\\frac{\\text{east}}{\\text{north}}\\right)=\\tan^{-1}\\left(\\frac{14.60}{3.40}\\right)\\approx76.9°$, i.e. bearing $\\approx077°$.", working: "077°", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $90°$ — legs perpendicular (b) 15 km (c) bearing $\\approx077°$",
            commonErrors: ["Assuming bearing of $R$ equals bearing of $QR$ leg."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 R1 for (c).",
          },
        },
        {
          id: "mypms4-u3-trig-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In triangle $ABC$, you know side $a$, angle $A$, and side $b$. Which rule should you use to find angle $B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sine rule" },
              { id: "b", text: "Cosine rule" },
              { id: "c", text: "Pythagoras" },
              { id: "d", text: "Area formula" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rule selection", statement: "A side–angle pair ($a$ and $A$) plus another side means the sine rule applies." },
            ],
            steps: [
              { reasoning: "We have side $a$ with opposite angle $A$, plus side $b$ — sine rule gives $\\frac{b}{\\sin B}=\\frac{a}{\\sin A}$.", working: "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sine rule",
            commonErrors: ["Choosing cosine rule when a side-angle pair is given."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u3-trig-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In triangle $ABC$, $b=3$, $c=4$ and $A=60°$. Find $a^2$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a^2$", answer: 13 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$." },
            ],
            steps: [
              { reasoning: "$a^2=9+16-24\\cos60°=25-12$.", working: "a^2=25-12", marks: 1, markCode: "M" },
              { reasoning: "$a^2=13$.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a^2=13$",
            commonErrors: ["Forgetting $\\cos60°=0.5$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which set of information requires the cosine rule to find the third side?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One side and two angles" },
              { id: "b", text: "Two sides and the included angle" },
              { id: "c", text: "Two angles and one side" },
              { id: "d", text: "One side and one angle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rule selection", statement: "Cosine rule for SAS (two sides + included angle) or SSS." },
            ],
            steps: [
              { reasoning: "Two sides with the included angle is the SAS case for the cosine rule.", working: "SAS", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "\\text{two sides + included angle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Two sides and the included angle",
            commonErrors: ["Confusing with sine rule conditions."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In triangle $ABC$, $A=30°$, $a=5$ and $b=10$. Find angle $B$.",
          response: {
            type: "numeric",
            parts: [{ label: "$B$", answer: 90, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine rule", statement: "$\\frac{b}{\\sin B}=\\frac{a}{\\sin A}$." },
            ],
            steps: [
              { reasoning: "$\\sin B=\\frac{b\\sin A}{a}=\\frac{10\\sin30°}{5}=\\frac{10\\times0.5}{5}=1$.", working: "\\sin B=1", marks: 1, markCode: "M" },
              { reasoning: "$B=\\sin^{-1}(1)=90°$ (unique since $\\sin B=1$).", working: "B=90°", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "90°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$B=90°$",
            commonErrors: ["Not noticing $\\sin B=1$ gives a unique right angle."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "To find an angle using the cosine rule, which information do you need?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two sides and the included angle" },
              { id: "b", text: "All three sides" },
              { id: "c", text: "One side and two angles" },
              { id: "d", text: "Two angles only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule (angle)", statement: "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$ requires all three sides." },
            ],
            steps: [
              { reasoning: "Finding an angle via cosine rule needs all three sides.", working: "SSS", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "\\text{all three sides}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** All three sides",
            commonErrors: ["Thinking two sides suffice for an angle."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In triangle $ABC$, $b=5$, $c=5$ and $A=60°$. Find side $a$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a$", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$." },
            ],
            steps: [
              { reasoning: "$a^2=25+25-50\\cos60°=50-25=25$.", working: "a^2=25", marks: 1, markCode: "M" },
              { reasoning: "$a=\\sqrt{25}=5$.", working: "a=5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=5$",
            commonErrors: ["Forgetting $\\cos60°=0.5$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In triangle $ABC$, $a=10$, $A=30°$ and $B=90°$. Find side $b$.",
          response: {
            type: "numeric",
            parts: [{ label: "$b$", answer: 20 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine rule", statement: "$\\frac{b}{\\sin B}=\\frac{a}{\\sin A}$." },
            ],
            steps: [
              { reasoning: "$b=\\frac{a\\sin B}{\\sin A}=\\frac{10\\sin90°}{\\sin30°}=\\frac{10}{0.5}$.", working: "b=\\frac{10}{0.5}", marks: 1, markCode: "M" },
              { reasoning: "$b=20$.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b=20$",
            commonErrors: ["Using $\\sin30°=0.5$ in the wrong place."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle has sides 7, 8 and 9. Find the angle opposite the side of length 9, to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 73.4, tolerance: 0.1, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule (angle)", statement: "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$ with $a=9$, $b=7$, $c=8$." },
            ],
            steps: [
              { reasoning: "$\\cos A=\\frac{49+64-81}{2\\times7\\times8}=\\frac{32}{112}\\approx0.2857$.", working: "\\cos A=0.2857", marks: 1, markCode: "M" },
              { reasoning: "$A=\\cos^{-1}(0.2857)\\approx73.4°$.", working: "73.4°", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "73.4°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A\\approx73.4°$",
            commonErrors: ["Pairing the sides incorrectly in the formula."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A hiker walks 5 km from point $P$ on a bearing of $060°$ to point $Q$, then 5 km on a bearing of $150°$ to point $R$.",
          parts: [
            { label: "a", prompt: "Find the angle $QPR$ between the two legs of the journey.", marks: 2 },
            { label: "b", prompt: "Calculate the straight-line distance $PR$.", marks: 2 },
            { label: "c", prompt: "Calculate the bearing of $R$ from $P$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bearings", statement: "Bearings measured clockwise from north; the angle between them is $150-60=90°$." },
            ],
            steps: [
              { part: "a", reasoning: "Change in bearing: $150-60=90°$.", working: "90°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The legs are perpendicular.", working: "\\text{perpendicular}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pythagoras: $PR=\\sqrt{5^2+5^2}=\\sqrt{50}=5\\sqrt{2}\\approx7.07$ km.", working: "5\\sqrt{2}\\approx7.07\\text{ km}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the distance.", working: "7.07\\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Components: $PQ$ north $=5\\cos60°=2.5$, east $=5\\sin60°=4.33$; $QR$ north $=5\\cos150°=-4.33$, east $=5\\sin150°=2.5$. Total: north $=-1.83$, east $=6.83$.", working: "N=-1.83,\\ E=6.83", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Bearing $=\\tan^{-1}\\left(\\frac{\\text{east}}{\\text{north}}\\right)$ adjusted for quadrant $\\approx105°$.", working: "105°", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $90°$ (b) $5\\sqrt{2}\\approx7.07$ km (c) bearing $\\approx105°$",
            commonErrors: ["Assuming the return bearing equals the bearing of the second leg."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 R1 for (c).",
          },
        },
        {
          id: "mypms4-u3-trig-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In triangle $ABC$, $a=9$, $A=40°$ and $b=12$. Find the acute angle $B$ (to 1 decimal place).",
          response: {
            type: "numeric",
            parts: [{ label: "$B$", answer: 59.0, tolerance: 0.1, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine rule", statement: "$\\sin B=\\frac{b\\sin A}{a}$." },
            ],
            steps: [
              { reasoning: "$\\sin B=\\frac{12\\sin40°}{9}=\\frac{12\\times0.6428}{9}\\approx0.857$.", working: "\\sin B=0.857", marks: 1, markCode: "M" },
              { reasoning: "$B=\\sin^{-1}(0.857)\\approx59.0°$ (acute; $121.0°$ is the obtuse alternative).", working: "59.0°", marks: 1, markCode: "M" },
              { reasoning: "State the acute angle.", working: "59.0°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$B\\approx59.0°$",
            commonErrors: ["Choosing the obtuse solution $121.0°$ when an acute angle is requested."],
            examinerNote: "M1 M1 A1. Accept 59.0°; note ambiguous case gives 121.0° as alternative.",
          },
        },
        {
          id: "mypms4-u3-trig-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when to use the sine rule and when to use the cosine rule, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rule selection", statement: "Sine rule: side–angle pair + one more; cosine rule: two sides + included angle or three sides." },
            ],
            steps: [
              { reasoning: "Use the sine rule when you know a side and its opposite angle plus another side or angle, e.g. $a$, $A$ and $b$.", working: "\\text{sine rule case}", marks: 1, markCode: "M" },
              { reasoning: "Use the cosine rule when you know two sides and the included angle, e.g. $b$, $c$ and $A$ to find $a$.", working: "\\text{cosine rule case}", marks: 1, markCode: "M" },
              { reasoning: "Also cosine rule when all three sides are known (to find an angle).", working: "\\text{SSS case}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sine rule for side–angle pair data; cosine rule for SAS or SSS data.",
            commonErrors: ["Swapping the conditions."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-trig-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A triangle has sides of length 3, 4 and 5. What type of angle is opposite the side of length 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acute" },
              { id: "b", text: "Right angle" },
              { id: "c", text: "Obtuse" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Cosine rule", statement: "$\\cos A=\\frac{9+16-25}{2\\times3\\times4}=\\frac{0}{24}=0$, so $A=90°$." },
            ],
            steps: [
              { reasoning: "Apply cosine rule: $\\cos A=\\frac{3^2+4^2-5^2}{2\\times3\\times4}=\\frac{0}{24}=0$.", working: "\\cos A=0", marks: 1, markCode: "M" },
              { reasoning: "$A=\\cos^{-1}(0)=90°$.", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "The angle is a right angle (3-4-5 triangle).", working: "\\text{right angle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Right angle",
            commonErrors: ["Not recognising the Pythagorean triple."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
