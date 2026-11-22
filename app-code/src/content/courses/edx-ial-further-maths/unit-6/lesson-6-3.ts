import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edialfm-u6-lesson-6-3",
  code: "6-3",
  title: "Moments of Inertia and Equilibrium of Strings",
  goal: "I CAN use moments of inertia for rotational motion and analyse equilibrium problems involving strings, springs and pulleys.",
  standards: ["WME03 M3", "Rotation and equilibrium"],
  vocabulary: [
    { term: "Moment of inertia", definition: "$I=\\sum mr^2$ for particles; continuous bodies use integration or standard results." },
    { term: "Angular acceleration", definition: "$\\alpha=\\frac{d\\omega}{dt}$; torque $\\tau=I\\alpha$." },
    { term: "Pulley system", definition: "Strings over pulleys transmit tension; massless frictionless pulleys have equal tension on both sides." },
    { term: "Limiting equilibrium", definition: "Equilibrium on the point of slipping; friction at its maximum $\\mu R$." },
  ],
  concepts: [
    {
      id: "edialfm-u6-inertia",
      title: "Moments of inertia and rotation",
      skill: "Apply $\\tau=I\\alpha$ and energy methods to rotating bodies.",
      lesson: {
        sections: [
          {
            heading: "Moment of inertia",
            body: "For a point mass $I=mr^2$ about an axis. For a hoop $I=MR^2$, solid disc $I=\\frac12MR^2$, rod about centre $\\frac13ML^2$. Parallel axis theorem: $I=I_{cm}+Md^2$.",
          },
          {
            heading: "Rotational dynamics",
            body: "Torque $\\tau=Fr\\sin\\theta$; $\\tau=I\\alpha$; kinetic energy of rotation $=\\frac12I\\omega^2$. For a mass on a string unwinding, relate $v=r\\omega$.",
          },
          {
            heading: "Rolling and falling",
            body: "A disc rolling without slipping has both translational KE $\\frac12Mv^2$ and rotational KE $\\frac12I\\omega^2$ with $\\omega=v/R$.",
          },
        ],
        keyFormulas: [
          { name: "Torque equation", statement: "$\\tau=I\\alpha$" },
          { name: "Rotational KE", statement: "$E=\\frac12I\\omega^2$" },
          { name: "Parallel axis", statement: "$I=I_{cm}+Md^2$" },
        ],
        workedExample: {
          problem: "A disc of mass $M$, radius $R$, $I=\\frac12MR^2$ rolls down an incline. Find acceleration.",
          solution: "$Mg\\sin\\theta-f=Ma$, $fR=I\\alpha=\\frac12MR^2\\cdot\\frac{a}{R}=\\frac12MRa$. Solve: $a=\\frac{2g\\sin\\theta}{3}$.",
        },
      },
      questions: [
        {
          id: "edialfm-mi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The moment of inertia of a point mass $m$ at distance $r$ from an axis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$mr$" },
              { id: "b", text: "$\\frac12mr^2$" },
              { id: "c", text: "$m/r$" },
              { id: "d", text: "$mr^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Moment of inertia", statement: "$I=mr^2$." }],
            steps: [{ reasoning: "Definition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $mr^2$",
          },
        },
        {
          id: "edialfm-mi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A solid disc ($I=\\frac12MR^2$) rolls without slipping down an incline. Express $\\omega$ in terms of $v$ and $R$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rolling", statement: "No slip: $v=R\\omega$." }],
            steps: [
              { reasoning: "Rolling constraint $v=R\\omega$.", working: "v=Rw", marks: 1, markCode: "M" },
              { reasoning: "$\\omega=\\frac{v}{R}$.", working: "w=v/R", marks: 1, markCode: "M" },
              { reasoning: "State relation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\omega=\\frac{v}{R}$",
            commonErrors: ["Confusing $v$ and $\\omega$."],
          },
        },
        {
          id: "edialfm-mi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pulley of mass $M$, radius $R$, moment of inertia $\\frac12MR^2$ has a light inextensible string over it with masses $m_1>m_2$ hanging. Find angular acceleration $\\alpha$ in terms of $m_1,m_2,M,g$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pulley dynamics", statement: "Tensions differ; net torque $=(T_1-T_2)R=I\\alpha$." },
            ],
            steps: [
              { reasoning: "$m_1g-T_1=m_1a$, $T_2-m_2g=m_2a$, $a=R\\alpha$.", working: "equations", marks: 1, markCode: "M" },
              { reasoning: "$(T_1-T_2)R=\\frac12MR^2\\alpha=\\frac12MRa\\Rightarrow T_1-T_2=\\frac12Ma$.", working: "torque", marks: 1, markCode: "M" },
              { reasoning: "Subtract: $(m_1-m_2)g-(T_1-T_2)=(m_1+m_2)a\\Rightarrow(m_1-m_2)g-\\frac12Ma=(m_1+m_2)a$.", working: "combine", marks: 1, markCode: "M" },
              { reasoning: "$a=\\frac{(m_1-m_2)g}{m_1+m_2+\\frac{M}{2}}$, so $\\alpha=\\frac{a}{R}=\\frac{2(m_1-m_2)g}{R(2m_1+2m_2+M)}$.", working: "alpha", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\alpha=\\frac{2(m_1-m_2)g}{R(2m_1+2m_2+M)}$",
            commonErrors: ["Ignoring pulley inertia; tension equality."],
          },
        },
        {
          id: "edialfm-mi-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A rod of mass $M$ and length $L$ rotates about a perpendicular axis through its centre with angular velocity $\\omega$.",
          parts: [
            { label: "a", prompt: "State the moment of inertia of a uniform rod about its centre.", marks: 2 },
            { label: "b", prompt: "Use the parallel axis theorem to find $I$ about one end.", marks: 3 },
            { label: "c", prompt: "Find the rotational kinetic energy.", marks: 2 },
            { label: "d", prompt: "A torque $\\tau$ is applied; find angular acceleration about the end.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment of inertia", statement: "Rod centre $\\frac13ML^2$; end $\\frac13ML^2$ via parallel axis." },
              { kind: "formula", name: "Parallel axis", statement: "$I=I_{cm}+Md^2$." },
            ],
            steps: [
              { part: "a", reasoning: "$I_{cm}=\\frac{1}{12}ML^2$ for a uniform rod about centre.", working: "ML^2/12", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State value.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Distance centre to end $=\\frac{L}{2}$; $I_{end}=\\frac{ML^2}{12}+M\\left(\\frac{L}{2}\\right)^2=\\frac{ML^2}{12}+\\frac{ML^2}{4}=\\frac{ML^2}{3}$.", working: "ML^2/3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State end inertia.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify via direct integration acceptable.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$E=\\frac12I_{cm}\\omega^2=\\frac{ML^2\\omega^2}{24}$ about centre.", working: "E", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State KE.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\tau=I_{end}\\alpha\\Rightarrow\\alpha=\\frac{\\tau}{ML^2/3}=\\frac{3\\tau}{ML^2}$.", working: "alpha", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State $\\alpha$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{ML^2}{12}$ (b) $\\frac{ML^2}{3}$ (c) $\\frac{ML^2\\omega^2}{24}$ (d) $\\alpha=\\frac{3\\tau}{ML^2}$",
            commonErrors: ["Parallel axis distance; KE factor."],
          },
        },
      ],
    },
    {
      id: "edialfm-u6-strings",
      title: "Equilibrium of Strings, Springs and Pulleys",
      skill: "Analyse static equilibrium problems with strings over pulleys, springs and friction.",
      lesson: {
        sections: [
          {
            heading: "Tension and pulley rules",
            body: "A light inextensible string has the same tension throughout. Over a smooth pulley, tension is continuous. For a pulley with friction or mass, tensions differ. Each body in equilibrium: net force zero and net moment zero.",
          },
          {
            heading: "Inclined planes with friction",
            body: "On a rough incline angle $\\theta$: component of weight down plane $mg\\sin\\theta$, friction $\\le\\mu mg\\cos\\theta$. Limiting equilibrium when friction is at max and motion is impending.",
          },
          {
            heading: "Springs in equilibrium",
            body: "Spring tension $T=\\frac{\\lambda x}{l}$; combine with weight/normal forces in equilibrium equations. Two springs in series/parallel have effective moduli rules.",
          },
        ],
        keyFormulas: [
          { name: "Friction limit", statement: "$F\\le\\mu R$; limiting when equal" },
          { name: "Spring tension", statement: "$T=\\frac{\\lambda x}{l}$" },
        ],
        workedExample: {
          problem: "A $5$ kg box on a rough horizontal table ($\\mu=0.3$) is pulled by a horizontal string. Find the minimum tension to move it ($g=9.8$).",
          solution: "Limiting friction: $T=\\mu mg=0.3\\times5\\times9.8=14.7$ N.",
        },
      },
      questions: [
        {
          id: "edialfm-str-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A light inextensible string passing over a smooth pulley has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same tension on both sides" },
              { id: "b", text: "Zero tension" },
              { id: "c", text: "Variable tension" },
              { id: "d", text: "Different tensions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "String", statement: "Tension uniform in light inextensible string." }],
            steps: [{ reasoning: "Standard.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** same tension",
          },
        },
        {
          id: "edialfm-str-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $3$ kg mass hangs from a spring of natural length $0.4$ m, modulus $30$ N. Find the extension in equilibrium ($g=9.8$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equilibrium", statement: "$T=mg$; $T=\\frac{\\lambda x}{l}$." }],
            steps: [
              { reasoning: "$\\frac{30x}{0.4}=3\\times9.8\\Rightarrow75x=29.4\\Rightarrow x=0.392$ m.", working: "0.392", marks: 1, markCode: "M" },
              { reasoning: "State extension.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=0.392$ m",
            commonErrors: ["Modulus formula errors."],
          },
        },
        {
          id: "edialfm-str-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A block of mass $m$ rests on a rough horizontal table ($\\mu$) pulled by a string at angle $\\theta$ above horizontal. Find the minimum tension to move it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Limiting friction", statement: "Vertical: $R+T\\sin\\theta=mg$; horizontal: $T\\cos\\theta=\\mu R$." }],
            steps: [
              { reasoning: "$R=mg-T\\sin\\theta$; limiting: $T\\cos\\theta=\\mu(mg-T\\sin\\theta)$.", working: "equations", marks: 1, markCode: "M" },
              { reasoning: "$T(\\cos\\theta+\\mu\\sin\\theta)=\\mu mg\\Rightarrow T=\\frac{\\mu mg}{\\cos\\theta+\\mu\\sin\\theta}$.", working: "T=", marks: 1, markCode: "M" },
              { reasoning: "State minimum tension.", marks: 1, markCode: "A" },
              { reasoning: "Check $\\theta=0$: $T=\\mu mg$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$T_{\\min}=\\frac{\\mu mg}{\\cos\\theta+\\mu\\sin\\theta}$",
            commonErrors: ["Sign of $T\\sin\\theta$ in $R$."],
          },
        },
        {
          id: "edialfm-str-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two masses $m_1$ and $m_2$ hang vertically over a smooth pulley, connected by a light inextensible string.",
          parts: [
            { label: "a", prompt: "If released from rest with $m_1>m_2$, find acceleration $a$.", marks: 3 },
            { label: "b", prompt: "Find tension $T$.", marks: 3 },
            { label: "c", prompt: "Find the velocity after time $t$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Atwood machine", statement: "Newton's second law each mass; tension equal." },
            ],
            steps: [
              { part: "a", reasoning: "$m_1g-T=m_1a$; $T-m_2g=m_2a$; add: $(m_1-m_2)g=(m_1+m_2)a$.", working: "a=", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$a=\\frac{(m_1-m_2)g}{m_1+m_2}$.", working: "a", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State acceleration.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$T=m_2g+m_2a=m_2g\\left(1+\\frac{m_1-m_2}{m_1+m_2}\\right)=\\frac{2m_1m_2g}{m_1+m_2}$.", working: "T=", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State tension.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify with $m_1$ equation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$v=at=\\frac{(m_1-m_2)gt}{m_1+m_2}$.", working: "v=", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State velocity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Distance $s=\\frac12at^2$ if needed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $a=\\frac{(m_1-m_2)g}{m_1+m_2}$ (b) $T=\\frac{2m_1m_2g}{m_1+m_2}$ (c) $v=\\frac{(m_1-m_2)gt}{m_1+m_2}$",
            commonErrors: ["Sign errors; tension equality."],
          },
        },
      ],
    },
  ],
};
