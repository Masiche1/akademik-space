import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "aihl-u3-lesson-3-1",
  code: "3-1",
  title: "Vectors and Motion",
  goal: "I CAN use position vectors and vector equations of lines to describe straight-line motion, and find when and where moving objects meet or are closest.",
  standards: ["AHL 3.10", "AHL 3.11", "AHL 3.12"],
  vocabulary: [
    {
      term: "Position vector",
      definition:
        "The vector $\\overrightarrow{OP}$ from the origin $O$ to a point $P$; its components are the coordinates of $P$.",
    },
    {
      term: "Magnitude",
      definition:
        "The length of a vector: $|\\boldsymbol v|=\\sqrt{v_1^2+v_2^2+v_3^2}$.",
    },
    {
      term: "Unit vector",
      definition:
        "A vector of magnitude 1. The unit vector in the direction of $\\boldsymbol v$ is $\\dfrac{\\boldsymbol v}{|\\boldsymbol v|}$.",
    },
    {
      term: "Direction vector",
      definition:
        "A vector $\\boldsymbol d$ parallel to a line; any non-zero multiple is also a direction vector.",
    },
    {
      term: "Vector equation of a line",
      definition:
        "$\\boldsymbol r=\\boldsymbol a+t\\boldsymbol d$, where $\\boldsymbol a$ is the position vector of a point on the line and $t$ is a real parameter.",
    },
    {
      term: "Closest approach",
      definition:
        "The smallest distance between two moving objects, found by minimising the distance between their positions over time.",
    },
  ],
  concepts: [
    {
      id: "aihl-u3-vectors-lines",
      title: "Vectors, position vectors and the vector equation of a line",
      skill:
        "Find magnitudes, unit vectors and vector equations of lines through given points.",
      lesson: {
        sections: [
          {
            heading: "Vectors between points",
            body: "For points $A$ and $B$ the vector from $A$ to $B$ is $\\overrightarrow{AB}=\\boldsymbol b-\\boldsymbol a$: end minus start. Its magnitude is the distance between the points. Dividing a vector by its magnitude gives the unit vector in that direction, which is useful for describing a direction of travel.",
          },
          {
            heading: "The vector equation of a line",
            body: "A line through $A$ with direction $\\boldsymbol d$ is $\\boldsymbol r=\\boldsymbol a+t\\boldsymbol d$. Each value of $t$ gives one point. To test whether a point lies on the line, equate the components and check that one value of $t$ satisfies all of them. To find where a line meets a coordinate plane, set the relevant coordinate to zero, for example $z=0$ for the $xy$-plane.",
          },
        ],
        keyFormulas: [
          {
            name: "Vector between points",
            statement: "$\\overrightarrow{AB}=\\boldsymbol b-\\boldsymbol a$",
          },
          {
            name: "Magnitude",
            statement: "$|\\boldsymbol v|=\\sqrt{v_1^2+v_2^2+v_3^2}$",
          },
          {
            name: "Line",
            statement: "$\\boldsymbol r=\\boldsymbol a+t\\boldsymbol d$",
          },
        ],
        workedExample: {
          problem:
            "Find a vector equation of the line through $A(1,2,3)$ and $B(3,2,7)$.",
          solution:
            "$\\overrightarrow{AB}=\\begin{pmatrix} 2 \\\\ 0 \\\\ 4 \\end{pmatrix}$. Using $A$ as the point, $\\boldsymbol r=\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ 0 \\\\ 4 \\end{pmatrix}$. Any multiple of the direction, such as $\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$, is equally valid.",
        },
      },
      questions: [
        {
          id: "aihl-u3-vectors-lines-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the magnitude of the vector $\\begin{pmatrix} 3 \\\\ 4 \\\\ 12 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$19$" },
              { id: "b", text: "$13$" },
              { id: "c", text: "$\\sqrt{19}$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnitude",
                statement: "$|\\boldsymbol v|=\\sqrt{v_1^2+v_2^2+v_3^2}$",
              },
            ],
            steps: [
              {
                reasoning: "Sum the squares of the components.",
                working: "9+16+144=169",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the square root.",
                working: "\\sqrt{169}=13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $13$",
            commonErrors: [
              "Adding the components to get 19.",
              "Forgetting the square root.",
            ],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The line $L$ has vector equation $\\boldsymbol r=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$. The point $(7,p,9)$ lies on $L$. Find $p$.",
          response: { type: "numeric", parts: [{ label: "$p$", answer: -1 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Point on a line",
                statement:
                  "A point lies on the line when one value of $t$ satisfies every component equation.",
              },
            ],
            steps: [
              {
                reasoning: "Use the $x$-component to find $t$.",
                working: "1+2t=7\\Rightarrow t=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check with the $z$-component: $3t=9$ is consistent.",
                working: "3(3)=9",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Substitute $t=3$ into the $y$-component.",
                working: "p=2-3=-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$p=-1$",
            commonErrors: [
              "Using $t=7$ or forgetting that the direction vector is multiplied by $t$.",
            ],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A line passes through $A(1,-2,4)$ and $B(5,4,-2)$. The line meets the $xy$-plane at the point $P$. Find the coordinates of $P$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 3.67, tolerance: 0.005 },
              { label: "$y$", answer: 2 },
              { label: "$z$", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Line through two points",
                statement:
                  "$\\boldsymbol r=\\boldsymbol a+t(\\boldsymbol b-\\boldsymbol a)$",
              },
              {
                kind: "property",
                name: "The $xy$-plane",
                statement: "Every point on the $xy$-plane has $z=0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The direction vector is $\\boldsymbol b-\\boldsymbol a$.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 4 \\\\ 6 \\\\ -6 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write the line: $z=4-6t$, and set $z=0$.",
                working: "4-6t=0\\Rightarrow t=\\tfrac23",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into $x=1+4t$.",
                working: "x=1+\\tfrac83=\\tfrac{11}{3}\\approx3.67",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute into $y=-2+6t$.",
                working: "y=-2+4=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P\\approx(3.67,\\,2,\\,0)$",
            commonErrors: [
              "Setting $x=0$ instead of $z=0$.",
              "Using $\\boldsymbol a+\\boldsymbol b$ as the direction.",
            ],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A drone flies in a straight line from $P(10,20,30)$ to $Q(40,60,30)$, where coordinates are in metres and the $z$-axis points upward.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the vector $\\overrightarrow{PQ}$ and the distance $PQ$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write down a vector equation of the line through $P$ and $Q$, using the direction vector $\\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find the unit vector in the direction of travel.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The drone flies at a constant speed of $5\\ \\text{m s}^{-1}$. Show that its position after $t$ seconds is $\\begin{pmatrix} 10+3t \\\\ 20+4t \\\\ 30 \\end{pmatrix}$, and find the time taken to reach $Q$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) distance $PQ$ (m)", answer: 50 },
              { label: "(c) first component of unit vector", answer: 0.6 },
              { label: "(c) second component of unit vector", answer: 0.8 },
              { label: "(d) time to reach $Q$ (s)", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector between points",
                statement:
                  "$\\overrightarrow{PQ}=\\boldsymbol q-\\boldsymbol p$",
              },
              {
                kind: "definition",
                name: "Unit vector",
                statement:
                  "$\\hat{\\boldsymbol d}=\\boldsymbol d/|\\boldsymbol d|$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "End minus start.",
                working:
                  "\\overrightarrow{PQ}=\\begin{pmatrix} 30 \\\\ 40 \\\\ 0 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Magnitude.",
                working: "\\sqrt{900+1600}=\\sqrt{2500}=50",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Use $P$ as the known point.",
                working:
                  "\\boldsymbol r=\\begin{pmatrix} 10 \\\\ 20 \\\\ 30 \\end{pmatrix}+\\lambda\\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The magnitude of $(3,4,0)$ is 5.",
                working:
                  "\\hat{\\boldsymbol d}=\\tfrac15\\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Divide.",
                working: "\\begin{pmatrix} 0.6 \\\\ 0.8 \\\\ 0 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Velocity is speed times unit vector: $5\\times(0.6,0.8,0)=(3,4,0)$, so position is $P+t\\boldsymbol v$ (AG).",
                working:
                  "\\boldsymbol r=\\begin{pmatrix} 10+3t \\\\ 20+4t \\\\ 30 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Time is distance over speed.",
                working: "t=\\frac{50}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Check: at $t=10$ the position is $(40,60,30)=Q$.",
                working: "t=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\begin{pmatrix} 30 \\\\ 40 \\\\ 0 \\end{pmatrix}$, 50 m. (b) $\\boldsymbol r=(10,20,30)+\\lambda(3,4,0)$. (c) $(0.6,0.8,0)$. (d) 10 s.",
            commonErrors: [
              "Computing $\\boldsymbol p-\\boldsymbol q$, which reverses the direction.",
            ],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the magnitude of the vector $\\begin{pmatrix} 1 \\ -4 \\ 8 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$\\sqrt{81}$" },
              { id: "d", text: "$81$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnitude",
                statement: "$|\\boldsymbol v|=\\sqrt{v_1^2+v_2^2+v_3^2}$",
              },
            ],
            steps: [
              {
                reasoning: "Sum the squares of the components.",
                working: "1+16+64=81",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the square root.",
                working: "\\sqrt{81}=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $9$",
            commonErrors: ["Forgetting the square root and answering 81."],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the vector $\\overrightarrow{AB}$ where $A(2,1,5)$ and $B(5,7,-1)$.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 3 \\ 6 \\ -6 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 3 \\ -6 \\ -6 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 3 \\ 6 \\ 6 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} -3 \\ -6 \\ 6 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector between points",
                statement:
                  "$\\overrightarrow{AB}=\\boldsymbol b-\\boldsymbol a$",
              },
            ],
            steps: [
              {
                reasoning: "Use end minus start.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 5-2 \\\\ 7-1 \\\\ -1-5 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate each component.",
                working: "\\begin{pmatrix} 3 \\\\ 6 \\\\ -6 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** $\\begin{pmatrix} 3 \\ 6 \\ -6 \\end{pmatrix}$",
            commonErrors: [
              "Computing $\\boldsymbol a-\\boldsymbol b$, which reverses the direction.",
            ],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The line $L$ has vector equation $\\boldsymbol r=\\begin{pmatrix} 2 \\ 0 \\ -1 \\end{pmatrix}+t\\begin{pmatrix} 1 \\ 1 \\ -2 \\end{pmatrix}$. Which of these points lies on $L$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5,3,-7)$" },
              { id: "b", text: "$(3,1,-3)$" },
              { id: "c", text: "$(4,2,-5)$" },
              { id: "d", text: "$(2,0,-3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Point on a line",
                statement:
                  "A point lies on the line when one value of $t$ satisfies every component equation.",
              },
            ],
            steps: [
              {
                reasoning: "The components are $x=2+t$, $y=t$, $z=-1-2t$.",
                working: "x=2+t,\\;y=t,\\;z=-1-2t",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For $(5,3,-7)$: $t=3$ from $x$ or $y$, and $-1-2(3)=-7$ is consistent. The others fail one component.",
                working: "t=3\\Rightarrow(5,3,-7)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $(5,3,-7)$",
            commonErrors: ["Checking only one component before deciding."],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The line has vector equation $\\boldsymbol r=\\begin{pmatrix} 1 \\ 2 \\ 3 \\end{pmatrix}+t\\begin{pmatrix} 2 \\ -1 \\ 4 \\end{pmatrix}$. Which of the following is NOT a direction vector of this line?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 4 \\ -2 \\ 8 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} -2 \\ 1 \\ -4 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 1 \\ -0.5 \\ 2 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} 2 \\ 1 \\ 4 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Direction vectors",
                statement:
                  "Any non-zero multiple of a direction vector is also a direction vector of the line.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Direction vectors are the vectors $k\\begin{pmatrix} 2 \\ -1 \\ 4 \\end{pmatrix}$ for $k\\ne0$.",
                working: "k\\begin{pmatrix} 2 \\\\ -1 \\\\ 4 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Options (a), (b), (c) are multiples with $k=2$, $k=-1$, $k=0.5$; (d) has the wrong sign in the second component.",
                working:
                  "\\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix}\\ne k\\begin{pmatrix} 2 \\\\ -1 \\\\ 4 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)**",
            commonErrors: ["Checking only the first and third components."],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the unit vector in the direction of $\\begin{pmatrix} 3 \\ 0 \\ 4 \\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "First component", answer: 0.6 },
              { label: "Second component", answer: 0 },
              { label: "Third component", answer: 0.8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unit vector",
                statement:
                  "$\\hat{\\boldsymbol v}=\\boldsymbol v/|\\boldsymbol v|$",
              },
            ],
            steps: [
              {
                reasoning: "The magnitude is $\\sqrt{9+16}=5$.",
                working: "|\\boldsymbol v|=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide each component by 5.",
                working:
                  "\\tfrac15\\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}=\\begin{pmatrix} 0.6 \\\\ 0 \\\\ 0.8 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\begin{pmatrix} 0.6 \\ 0 \\ 0.8 \\end{pmatrix}$",
            commonErrors: ["Dividing only one component by the magnitude."],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the distance between the points $A(0,1,2)$ and $B(2,5,6)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance between points",
                statement:
                  "$AB=|\\overrightarrow{AB}|=|\\boldsymbol b-\\boldsymbol a|$",
              },
            ],
            steps: [
              {
                reasoning: "Subtract the position vectors.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 2 \\\\ 4 \\\\ 4 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sum the squares of the components.",
                working: "4+16+16=36",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the square root.",
                working: "\\sqrt{36}=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$",
            commonErrors: [
              "Forgetting to square the components before adding.",
            ],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The line $\\boldsymbol r=\\begin{pmatrix} 1 \\ -2 \\ 4 \\end{pmatrix}+t\\begin{pmatrix} 2 \\ 1 \\ -3 \\end{pmatrix}$ meets the $xy$-plane at the point $P$. Find the coordinates of $P$, giving $x$ and $y$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 3.67, tolerance: 0.005 },
              { label: "$y$", answer: -0.67, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "The $xy$-plane",
                statement: "Every point on the $xy$-plane has $z=0$.",
              },
              {
                kind: "formula",
                name: "Line",
                statement: "$\\boldsymbol r=\\boldsymbol a+t\\boldsymbol d$",
              },
            ],
            steps: [
              {
                reasoning: "Set the $z$-component to zero: $z=4-3t$.",
                working: "4-3t=0\\Rightarrow t=\\tfrac43",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into $x=1+2t$.",
                working: "x=1+\\tfrac83=\\tfrac{11}{3}\\approx3.67",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute into $y=-2+t$.",
                working: "y=-2+\\tfrac43=-\\tfrac23\\approx-0.67",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P\\approx(3.67,\\,-0.67,\\,0)$",
            commonErrors: ["Setting $x=0$ instead of $z=0$."],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A line passes through $A(1,2,-1)$ and $B(4,5,2)$.",
          parts: [
            {
              label: "a",
              prompt: "Find the vector $\\overrightarrow{AB}$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Write down a vector equation of the line.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Show that the point $C(7,8,5)$ lies on the line.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find $|\\overrightarrow{AB}|$, to 3 significant figures.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(d) $|\\overrightarrow{AB}|$",
                answer: 5.2,
                tolerance: 0.005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Line through two points",
                statement:
                  "$\\boldsymbol r=\\boldsymbol a+t(\\boldsymbol b-\\boldsymbol a)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "End minus start.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 3 \\\\ 3 \\\\ 3 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Use $A$ as the known point and the direction vector.",
                working:
                  "\\boldsymbol r=\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}+t\\begin{pmatrix} 3 \\\\ 3 \\\\ 3 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Any non-zero multiple of the direction is acceptable.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Set the components equal: $1+3t=7$, $2+3t=8$, $-1+3t=5$.",
                working: "t=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "All three give $t=2$, so $C$ lies on the line.",
                working: "1+3(2)=7,\\;2+3(2)=8,\\;-1+3(2)=5",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Magnitude of $(3,3,3)$.",
                working: "\\sqrt{27}=3\\sqrt3\\approx5.20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $(3,3,3)$. (b) $\\boldsymbol r=(1,2,-1)+t(3,3,3)$. (c) shown, $t=2$. (d) $5.20$.",
            commonErrors: [
              "Forgetting to check all three components in part (c).",
            ],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The lines $L_1: \\boldsymbol r=\\begin{pmatrix} 1 \\ 1 \\ 0 \\end{pmatrix}+t\\begin{pmatrix} 1 \\ 0 \\ 1 \\end{pmatrix}$ and $L_2: \\boldsymbol r=\\begin{pmatrix} 2 \\ 1 \\ -1 \\end{pmatrix}+s\\begin{pmatrix} 0 \\ 1 \\ 2 \\end{pmatrix}$ intersect. Find the coordinates of the point of intersection.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 2 },
              { label: "$y$", answer: 1 },
              { label: "$z$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intersection of lines",
                statement:
                  "At an intersection point the two position vectors are equal, giving one equation per component.",
              },
            ],
            steps: [
              {
                reasoning: "Equate the $x$-components: $1+t=2$.",
                working: "t=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equate the $y$-components: $1=s$.",
                working: "s=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check the $z$-components: $t=1$ and $-1+2s=-1+2=1$. Both give 1, so the lines do intersect.",
                working: "z=1",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Substitute into either line.",
                working: "(2,\\,1,\\,1)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(2,\\,1,\\,1)$",
            commonErrors: ["Using the same parameter $t$ for both lines."],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The line $\\boldsymbol r=\\begin{pmatrix} 4 \\ -1 \\ 3 \\end{pmatrix}+t\\begin{pmatrix} 1 \\ 2 \\ -1 \\end{pmatrix}$ passes through points with parameter $t$. Find the value of $t$ at which the point on the line is closest to $P(2,1,-2)$, and the distance from $P$ to that point, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "value of $t$", answer: 1.17, tolerance: 0.005 },
              { label: "distance", answer: 4.98, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Closest point",
                statement:
                  "Minimise $d^2=|\\boldsymbol r(t)-\\boldsymbol p|^2$, a quadratic in $t$, at its vertex.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Write the vector from $P$ to a general point on the line.",
                working:
                  "\\boldsymbol r(t)-\\boldsymbol p=\\begin{pmatrix} t+2 \\\\ 2t-2 \\\\ 5-t \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Square and add the components.",
                working: "d^2=(t+2)^2+(2t-2)^2+(5-t)^2=6t^2-14t+33",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The vertex of the quadratic is at $t=\\frac{14}{12}$.",
                working: "t=\\tfrac76\\approx1.17",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate $d^2=\\frac{149}{6}$ and take the root.",
                working: "d=\\sqrt{\\tfrac{149}{6}}\\approx4.98",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx1.17$, distance $\\approx4.98$",
            commonErrors: [
              "Minimising $d$ instead of $d^2$ without using a GDC.",
            ],
          },
        },
        {
          id: "aihl-u3-vectors-lines-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "A line passes through $A(2,1,4)$ and $B(8,3,-2)$, where coordinates are in metres.",
          parts: [
            {
              label: "a",
              prompt: "Find a vector equation of the line.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find the point where the line meets the $xy$-plane.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find the point where the line meets the $yz$-plane.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find the distance $AB$, to 3 significant figures.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Line through two points",
                statement:
                  "$\\boldsymbol r=\\boldsymbol a+t(\\boldsymbol b-\\boldsymbol a)$",
              },
              {
                kind: "property",
                name: "Coordinate planes",
                statement:
                  "The $xy$-plane has $z=0$; the $yz$-plane has $x=0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The direction vector is $\\boldsymbol b-\\boldsymbol a$.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 6 \\\\ 2 \\\\ -6 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Any non-zero multiple of the direction is acceptable.",
                working:
                  "\\boldsymbol r=\\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix}+t\\begin{pmatrix} 3 \\\\ 1 \\\\ -3 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Set $z=0$: $4-3t=0$.",
                working: "t=\\tfrac43",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Substitute into $x$ and $y$.",
                working:
                  "x=2+3\\left(\\tfrac43\\right)=6,\\;y=1+\\tfrac43=\\tfrac73",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the point.",
                working: "(6,\\,\\tfrac73,\\,0)\\approx(6,\\,2.33,\\,0)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Set $x=0$: $2+3t=0$.",
                working: "t=-\\tfrac23",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Substitute into $y$ and $z$.",
                working:
                  "y=1-\\tfrac23=\\tfrac13,\\;z=4-3\\left(-\\tfrac23\\right)=6\\Rightarrow(0,\\,\\tfrac13,\\,6)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The distance is the magnitude of $\\overrightarrow{AB}$.",
                working: "\\sqrt{36+4+36}=\\sqrt{76}=2\\sqrt{19}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "\\approx8.72\\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\boldsymbol r=(2,1,4)+t(3,1,-3)$. (b) $(6,\\,2.33,\\,0)$. (c) $(0,\\,0.333,\\,6)$. (d) $8.72$ m.",
            commonErrors: [
              "Using the unsimplified direction $(6,2,-6)$ inconsistently between parts.",
            ],
            examinerNote:
              "FT is awarded in (b) and (c) from an incorrect equation in (a) if used correctly.",
          },
        },
        {
          id: "aihl-u3-vectors-lines-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A line passes through $A(1,0,2)$ and $B(3,2,4)$.",
          parts: [
            {
              label: "a",
              prompt: "Find a vector equation of the line.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find the point where the line meets the plane $z=2x+1$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Determine whether the point $C(4,3,6)$ lies on the line.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Line through two points",
                statement:
                  "$\\boldsymbol r=\\boldsymbol a+t(\\boldsymbol b-\\boldsymbol a)$",
              },
              {
                kind: "principle",
                name: "Point on a line",
                statement:
                  "A point lies on the line when one value of $t$ satisfies every component equation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The direction vector is $\\overrightarrow{AB}$.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Write the equation using the simplified direction $(1,1,1)$.",
                working:
                  "\\boldsymbol r=\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Substitute the parametric form into the plane equation: $z=2+t$ and $x=1+t$.",
                working: "2+t=2(1+t)+1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Solve for $t$ and find the point.",
                working: "t=-1\\Rightarrow(0,\\,-1,\\,1)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Set the components equal: $1+t=4$, $t=3$, $2+t=6$.",
                working: "t=3,\\;t=3,\\;t=4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The $z$-component requires $t=4$ while the others require $t=3$, so the point does not lie on the line.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $\\boldsymbol r=(1,0,2)+t(1,1,1)$. (b) $(0,-1,1)$. (c) No, the components give inconsistent values of $t$.",
            commonErrors: [
              "Checking only two of the three components in part (c).",
            ],
          },
        },
      ],
    },
    {
      id: "aihl-u3-kinematics",
      title: "Kinematics with vectors and closest approach",
      skill:
        "Model motion with $\\boldsymbol r=\\boldsymbol r_0+t\\boldsymbol v$, find speed, collisions and the minimum distance between moving objects.",
      lesson: {
        sections: [
          {
            heading: "Motion at constant velocity",
            body: "An object at constant velocity $\\boldsymbol v$ has position $\\boldsymbol r=\\boldsymbol r_0+t\\boldsymbol v$. Its speed is $|\\boldsymbol v|$. Two objects collide only if their position vectors are equal at the same time $t$: solve the component equations and check that every component gives the same $t$. The paths can cross without a collision if the objects reach the crossing point at different times.",
          },
          {
            heading: "Closest approach",
            body: "The vector from object $A$ to object $B$ is $\\boldsymbol r_B-\\boldsymbol r_A$, and the distance is its magnitude. Minimising $d^2$ gives the same time as minimising $d$ and avoids a square root. Write $d^2$ as a quadratic in $t$, then use its vertex or the GDC. Always check the time is within the period of motion, usually $t\\ge0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Position",
            statement: "$\\boldsymbol r(t)=\\boldsymbol r_0+t\\boldsymbol v$",
          },
          {
            name: "Speed",
            statement: "$|\\boldsymbol v|=\\sqrt{v_1^2+v_2^2+v_3^2}$",
          },
          {
            name: "Distance apart",
            statement: "$d(t)=|\\boldsymbol r_B(t)-\\boldsymbol r_A(t)|$",
          },
        ],
        workedExample: {
          problem:
            "A ship has position $\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}+t\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ km, $t$ in hours. Find its speed and its position after 2 hours.",
          solution:
            "Speed $=\\sqrt{9+16}=5$ km per hour. At $t=2$: $\\begin{pmatrix} 2+6 \\\\ 5-8 \\end{pmatrix}=\\begin{pmatrix} 8 \\\\ -3 \\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "aihl-u3-kinematics-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A ship moves with constant velocity $\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$ km per hour. What is its speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$ km per hour" },
              { id: "b", text: "$48$ km per hour" },
              { id: "c", text: "$10$ km per hour" },
              { id: "d", text: "$2$ km per hour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speed",
                statement: "Speed is the magnitude of the velocity vector.",
              },
            ],
            steps: [
              {
                reasoning: "Take the magnitude.",
                working: "\\sqrt{36+64}=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $10$ km per hour",
            commonErrors: ["Adding the components to get 14."],
          },
        },
        {
          id: "aihl-u3-kinematics-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A boat has position $\\boldsymbol r=\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}+t\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ km, where $t$ is the time in hours. Find the position of the boat when $t=2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$ (km)", answer: 8 },
              { label: "$y$ (km)", answer: -3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Position",
                statement:
                  "$\\boldsymbol r(t)=\\boldsymbol r_0+t\\boldsymbol v$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $t=2$.",
                working:
                  "\\boldsymbol r=\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}+2\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the $x$-coordinate.",
                working: "x=2+6=8",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Compute the $y$-coordinate.",
                working: "y=5-8=-3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(8,\\,-3)$",
            commonErrors: [
              "Adding $t$ rather than multiplying the velocity by $t$.",
            ],
          },
        },
        {
          id: "aihl-u3-kinematics-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two boats move on a lake. Boat $A$ has position $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$ and boat $B$ has position $\\begin{pmatrix} 10 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix}$, in kilometres, with $t$ in hours. Find the time at which the boats are closest and the minimum distance between them, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "time (hours)", answer: 2 },
              {
                label: "minimum distance (km)",
                answer: 4.47,
                tolerance: 0.005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance between objects",
                statement:
                  "$d=|\\boldsymbol r_B-\\boldsymbol r_A|$; minimise $d^2$ for the same time.",
              },
            ],
            steps: [
              {
                reasoning: "Find the vector from $A$ to $B$.",
                working:
                  "\\boldsymbol r_B-\\boldsymbol r_A=\\begin{pmatrix} 10-4t \\\\ 2t \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Square the distance.",
                working: "d^2=(10-4t)^2+4t^2=20t^2-80t+100",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The vertex of the quadratic is at $t=\\frac{80}{40}$.",
                working: "t=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $d^2=80-160+100=20$ and take the root.",
                working: "d=\\sqrt{20}\\approx4.47",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t=2$ hours, $d\\approx4.47$ km",
            commonErrors: [
              "Subtracting the position vectors with the wrong signs.",
              "Reporting $d^2=20$ as the distance.",
            ],
          },
        },
        {
          id: "aihl-u3-kinematics-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "Two drones fly at constant velocity, with coordinates in metres and $t$ in seconds. Drone $A$ has position $\\begin{pmatrix} 0 \\\\ 0 \\\\ 20 \\end{pmatrix}+t\\begin{pmatrix} 3 \\\\ 2 \\\\ -2 \\end{pmatrix}$. Drone $B$ has position $\\begin{pmatrix} 20 \\\\ 16 \\\\ k \\end{pmatrix}+t\\begin{pmatrix} -2 \\\\ -2 \\\\ 3 \\end{pmatrix}$, where $k$ is a constant.",
          parts: [
            {
              label: "a",
              prompt: "Find the speed of drone $A$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "For $k=0$, show that the drones collide, and find the time and position of the collision.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "For $k=5$, show that the square of the distance between the drones is $d^2=66t^2-478t+881$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Hence find the time of closest approach and the minimum distance, each to 3 significant figures.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Safety rules require the drones to stay at least 5 m apart. State, with a reason, whether this rule is satisfied for $k=5$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) speed of $A$ (m per s)",
                answer: 4.12,
                tolerance: 0.005,
              },
              { label: "(b) time of collision (s)", answer: 4 },
              {
                label: "(d) time of closest approach (s)",
                answer: 3.62,
                tolerance: 0.005,
              },
              {
                label: "(d) minimum distance (m)",
                answer: 3.94,
                tolerance: 0.005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision",
                statement:
                  "Objects collide when their position vectors are equal at the same value of $t$.",
              },
              {
                kind: "principle",
                name: "Closest approach",
                statement:
                  "Write $d^2$ as a quadratic in $t$ and minimise it at the vertex $t=-\\frac{b}{2a}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Speed is the magnitude of the velocity.",
                working: "\\sqrt{3^2+2^2+(-2)^2}=\\sqrt{17}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "4.12",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Equate components: $3t=20-2t$ gives $t=4$ and $2t=16-2t$ gives $t=4$.",
                working: "t=4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Check the $z$-component with $t=4$: $20-8=12$ and $0+12=12$. All three agree, so they collide.",
                working: "20-2(4)=12=3(4)",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Substitute into $A$'s position.",
                working: "(12,\\,8,\\,12)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Subtract the positions with $k=5$.",
                working:
                  "\\boldsymbol r_B-\\boldsymbol r_A=\\begin{pmatrix} 20-5t \\\\ 16-4t \\\\ 5t-15 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Square and add the components.",
                working: "d^2=(20-5t)^2+(16-4t)^2+(5t-15)^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Expand: $400-200t+25t^2+256-128t+16t^2+25t^2-150t+225$ and collect (AG).",
                working: "d^2=66t^2-478t+881",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "The vertex is at $t=\\frac{478}{132}$.",
                working: "t=3.62",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Evaluate $d^2=15.53$ at this time and take the root.",
                working: "d=3.94",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Compare the minimum distance with 5 m.",
                working: "3.94<5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "The drones come within 5 m of each other, so the rule is not satisfied.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 4.12 m per s. (b) collide at $t=4$ s at $(12,8,12)$. (c) shown. (d) $t=3.62$ s, $d=3.94$ m. (e) not satisfied since $3.94<5$.",
            commonErrors: [
              "Only checking two of the three components for a collision.",
              "Using different parameters for the two drones.",
            ],
            examinerNote:
              "FT is awarded in (d) and (e) from an incorrect quadratic in (c) if it is used correctly.",
          },
        },
        {
          id: "aihl-u3-kinematics-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A drone moves with constant velocity $\\begin{pmatrix} 3 \\\\ -4 \\\\ 0 \\end{pmatrix}$ metres per second. What is its speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$ m s$^{-1}$" },
              { id: "b", text: "$5$ m s$^{-1}$" },
              { id: "c", text: "$25$ m s$^{-1}$" },
              { id: "d", text: "$\\sqrt{7}$ m s$^{-1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speed",
                statement: "Speed is the magnitude of the velocity vector.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the squares of the components.",
                working: "9+16+0=25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the square root.",
                working: "\\sqrt{25}=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $5$ m s$^{-1}$",
            commonErrors: [
              "Adding the components to get 7.",
              "Forgetting the square root and answering 25.",
            ],
          },
        },
        {
          id: "aihl-u3-kinematics-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A robot moves with position $\\boldsymbol r=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$ metres, where $t$ is in seconds. Find its position when $t=3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix} 7 \\\\ -1 \\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix} 7 \\\\ -2 \\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix} 6 \\\\ -1 \\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Position",
                statement:
                  "$\\boldsymbol r(t)=\\boldsymbol r_0+t\\boldsymbol v$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $t=3$.",
                working:
                  "\\boldsymbol r=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}+3\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate each component.",
                working:
                  "\\begin{pmatrix} 1+6 \\\\ 2-3 \\end{pmatrix}=\\begin{pmatrix} 7 \\\\ -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix} 7 \\\\ -1 \\end{pmatrix}$",
            commonErrors: [
              "Adding $t$ instead of multiplying the velocity by $t$.",
            ],
          },
        },
        {
          id: "aihl-u3-kinematics-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two cars travel along straight roads, with positions in kilometres and $t$ in hours. Car $A$ has position $\\boldsymbol r_A=\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$. Car $B$ has position $\\boldsymbol r_B=\\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}+t\\begin{pmatrix} -1 \\\\ 0 \\end{pmatrix}$. Find the time at which the cars collide and the position of the collision.",
          response: {
            type: "numeric",
            parts: [
              { label: "time (hours)", answer: 2 },
              { label: "$x$ (km)", answer: 4 },
              { label: "$y$ (km)", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision",
                statement:
                  "Objects collide when their position vectors are equal at the same value of $t$.",
              },
            ],
            steps: [
              {
                reasoning: "Equate the $y$-components: $y_A=t$ and $y_B=2$.",
                working: "t=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check the $x$-components at $t=2$: $x_A=4$ and $x_B=6-2=4$. Consistent, so they collide.",
                working: "2t=6-t\\Rightarrow 3t=6\\Rightarrow t=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $t=2$ into either position.",
                working: "(4,\\,2)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "They collide at $t=2$ hours at the point $(4,\\,2)$.",
            commonErrors: [
              "Checking only one component before concluding a collision.",
              "Using different parameters for the two cars.",
            ],
          },
        },
        {
          id: "aihl-u3-kinematics-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two boats move with positions in kilometres and $t$ in hours. Boat $A$: $\\boldsymbol r_A=\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$. Boat $B$: $\\boldsymbol r_B=\\begin{pmatrix} 10 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}$. Find the distance between the boats when $t=2$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance (km)", answer: 2.83, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance between objects",
                statement: "$d=|\\boldsymbol r_B-\\boldsymbol r_A|$",
              },
            ],
            steps: [
              {
                reasoning: "Find both positions at $t=2$.",
                working: "\\boldsymbol r_A=(8,6),\\;\\boldsymbol r_B=(10,4)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract to get the vector between them.",
                working:
                  "\\begin{pmatrix} 10-8 \\\\ 4-6 \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Take the magnitude.",
                working: "\\sqrt{4+4}=\\sqrt8\\approx2.83",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$d\\approx2.83$ km",
            commonErrors: [
              "Subtracting the velocities instead of the positions.",
            ],
          },
        },
        {
          id: "aihl-u3-kinematics-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A runner moves along a straight path with position $\\boldsymbol r_A=\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ metres and a cyclist moves with position $\\boldsymbol r_B=\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ -1 \\end{pmatrix}$ metres, where $t$ is in seconds and $t\\ge0$. Find the time of closest approach and the minimum distance between them, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "time (s)", answer: 3.5 },
              {
                label: "minimum distance (m)",
                answer: 0.707,
                tolerance: 0.005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance between objects",
                statement:
                  "$d^2=|\\boldsymbol r_B-\\boldsymbol r_A|^2$ is a quadratic in $t$; minimise it at the vertex.",
              },
            ],
            steps: [
              {
                reasoning: "Find the vector from the runner to the cyclist.",
                working:
                  "\\boldsymbol r_B-\\boldsymbol r_A=\\begin{pmatrix} 3-t \\\\ 4-t \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Square the distance and expand.",
                working: "d^2=(3-t)^2+(4-t)^2=2t^2-14t+25",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The vertex of the quadratic is at $t=\\frac{14}{4}$.",
                working: "t=3.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $d^2=0.5$ and take the root.",
                working: "d=\\sqrt{0.5}\\approx0.707",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t=3.5$ s, $d_{\\min}\\approx0.707$ m",
            commonErrors: ["Reporting $d^2=0.5$ as the distance."],
          },
        },
        {
          id: "aihl-u3-kinematics-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two ships move at constant velocity, with positions in kilometres and $t$ in hours. Ship $A$: $\\boldsymbol r_A=\\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}$. Ship $B$: $\\boldsymbol r_B=\\begin{pmatrix} 10 \\\\ 4 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix}$. Find the time of closest approach and the minimum distance between the ships, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "time (hours)", answer: 0.923, tolerance: 0.005 },
              { label: "minimum distance (km)", answer: 10.2, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance between objects",
                statement:
                  "$d^2=|\\boldsymbol r_B-\\boldsymbol r_A|^2$; minimise the quadratic at its vertex.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find the vector from $A$ to $B$; the $x$-components cancel.",
                working:
                  "\\boldsymbol r_B-\\boldsymbol r_A=\\begin{pmatrix} 10 \\\\ 4-3t \\\\ -2t \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Square and expand.",
                working: "d^2=100+(4-3t)^2+4t^2=13t^2-24t+116",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The vertex is at $t=\\frac{24}{26}$.",
                working: "t=\\tfrac{12}{13}\\approx0.923",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $d^2\\approx104.9$ and take the root.",
                working: "d\\approx10.2\\text{ km}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx0.923$ hours, $d_{\\min}\\approx10.2$ km",
            commonErrors: ["Using different parameters for the two ships."],
          },
        },
        {
          id: "aihl-u3-kinematics-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A drone moves with position $\\boldsymbol r=\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$ metres, where $t$ is in seconds and $t\\ge0$.",
          parts: [
            { label: "a", prompt: "Find the speed of the drone.", marks: 2 },
            {
              label: "b",
              prompt: "Find the position of the drone when $t=4$.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Find the time at which the drone is closest to the point $P(9,0)$, and the minimum distance from $P$, to 3 significant figures.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Speed",
                statement:
                  "Speed is the magnitude of the velocity vector $\\boldsymbol v$ in $\\boldsymbol r=\\boldsymbol r_0+t\\boldsymbol v$.",
              },
              {
                kind: "principle",
                name: "Closest approach",
                statement:
                  "Minimise $d^2=|\\boldsymbol r(t)-\\boldsymbol p|^2$, a quadratic in $t$, at its vertex.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The velocity is the coefficient of $t$.",
                working:
                  "\\boldsymbol v=\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Speed is the magnitude of $\\boldsymbol v$.",
                working: "\\sqrt{4+1}=\\sqrt5\\approx2.24\\text{ m s}^{-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $t=4$.",
                working:
                  "\\begin{pmatrix} 1+8 \\\\ 3-4 \\end{pmatrix}=\\begin{pmatrix} 9 \\\\ -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Find the vector from $P$ to the drone.",
                working:
                  "\\boldsymbol r-P=\\begin{pmatrix} 2t-8 \\\\ 3-t \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Square the distance and expand.",
                working: "d^2=(2t-8)^2+(3-t)^2=5t^2-38t+73",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "The vertex is at $t=\\frac{38}{10}$.",
                working: "t=3.8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Evaluate $d^2=0.8$ and take the root.",
                working: "d=\\sqrt{0.8}\\approx0.894\\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\sqrt5\\approx2.24$ m s$^{-1}$. (b) $(9,-1)$. (c) $t=3.8$ s, $d_{\\min}\\approx0.894$ m.",
            commonErrors: [
              "Minimising $d$ instead of $d^2$ without a GDC.",
              "Using the position vector of $P$ with the wrong sign.",
            ],
          },
        },
        {
          id: "aihl-u3-kinematics-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A cyclist moves along a straight path with position $\\boldsymbol r=\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}+t\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ metres, where $t$ is in seconds.",
          parts: [
            {
              label: "a",
              prompt: "Show that the cyclist's speed is $5$ m s$^{-1}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find the cyclist's position when $t=3$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the point where the cyclist's path crosses the $x$-axis.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the distance travelled by the cyclist in the first 3 seconds.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Speed",
                statement: "Speed is the magnitude of the velocity vector.",
              },
              {
                kind: "property",
                name: "The $x$-axis",
                statement: "Every point on the $x$-axis has $y=0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The velocity is $\\boldsymbol v=(3,-4)$.",
                working: "\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Its magnitude is $\\sqrt{9+16}=5$ (AG).",
                working: "\\sqrt{9+16}=5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $t=3$ into the position.",
                working:
                  "\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}+3\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "(11,\\,-7)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Set the $y$-component to zero: $y=5-4t$.",
                working: "5-4t=0\\Rightarrow t=1.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Substitute into $x=2+3t$.",
                working: "x=2+3.75=5.75\\Rightarrow(5.75,\\,0)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Distance travelled is speed times time.",
                working: "5\\times3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "15\\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $(11,-7)$. (c) $(5.75,0)$. (d) $15$ m.",
            commonErrors: ["Setting $x=0$ instead of $y=0$ in part (c)."],
          },
        },
        {
          id: "aihl-u3-kinematics-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves with position $\\boldsymbol r=\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}+t\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$. At what value of $t$ does the particle cross the $x$-axis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$t=\\frac{1}{3}$" },
              { id: "b", text: "$t=-\\frac{1}{3}$" },
              { id: "c", text: "$t=3$" },
              { id: "d", text: "$t=\\frac{1}{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "The $x$-axis",
                statement: "Every point on the $x$-axis has $y=0$.",
              },
            ],
            steps: [
              {
                reasoning: "Set the $y$-component to zero: $y=-1+3t$.",
                working: "-1+3t=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "t=\\tfrac13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $t=\\frac{1}{3}$",
            commonErrors: ["Setting $x=0$ instead of $y=0$."],
          },
        },
        {
          id: "aihl-u3-kinematics-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Object $A$ has position $\\boldsymbol r_A=\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}$ and object $B$ has position $\\boldsymbol r_B=\\begin{pmatrix} 4 \\\\ 1 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} -1 \\\\ 2 \\\\ 2 \\end{pmatrix}$. Which expression gives the vector from $A$ to $B$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 3-3t \\\\ -1+2t \\\\ -3+t \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 3+3t \\\\ -1-2t \\\\ -3-t \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 3-3t \\\\ 1+2t \\\\ -3+t \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} 3-3t \\\\ -1+2t \\\\ 3+t \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector between objects",
                statement: "$\\boldsymbol r_B-\\boldsymbol r_A$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract the position vectors, constant parts and $t$ parts separately.",
                working:
                  "\\begin{pmatrix} 4-1 \\\\ 1-2 \\\\ 0-3 \\end{pmatrix}+t\\begin{pmatrix} -1-2 \\\\ 2-0 \\\\ 2-1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working:
                  "\\begin{pmatrix} 3-3t \\\\ -1+2t \\\\ -3+t \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** $\\begin{pmatrix} 3-3t \\\\ -1+2t \\\\ -3+t \\end{pmatrix}$",
            commonErrors: [
              "Reversing the subtraction to get $\\boldsymbol r_A-\\boldsymbol r_B$.",
            ],
          },
        },
        {
          id: "aihl-u3-kinematics-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two objects move with $\\boldsymbol r_A=\\boldsymbol a+t\\boldsymbol u$ and $\\boldsymbol r_B=\\boldsymbol b+t\\boldsymbol v$. Which condition is necessary and sufficient for the objects to collide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The paths of the two objects intersect." },
              {
                id: "b",
                text: "$\\boldsymbol r_A=\\boldsymbol r_B$ for the same value of $t$.",
              },
              { id: "c", text: "$\\boldsymbol u=\\boldsymbol v$." },
              { id: "d", text: "The distance between them is constant." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision",
                statement:
                  "A collision requires the position vectors to be equal at the same time $t$; crossing paths are not enough.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Equal positions at the same time means the same point at the same instant.",
                working:
                  "\\boldsymbol a+t\\boldsymbol u=\\boldsymbol b+t\\boldsymbol v",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Intersecting paths only means the lines cross; the objects could arrive at different times.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Confusing intersecting paths with a collision."],
          },
        },
        {
          id: "aihl-u3-kinematics-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The square of the distance between two moving objects is $d^2=4t^2-24t+40$ for $t\\ge0$. What is the minimum distance between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Closest approach",
                statement:
                  "Minimise $d^2$, a quadratic in $t$, at its vertex $t=-\\frac{b}{2a}$.",
              },
            ],
            steps: [
              {
                reasoning: "The vertex is at $t=\\frac{24}{8}=3$.",
                working: "t=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimum $d^2=4(9)-24(3)+40=4$, so $d=\\sqrt4=2$.",
                working: "d_{\\min}=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Reporting $d^2=4$ as the distance."],
          },
        },
      ],
    },
  ],
};
