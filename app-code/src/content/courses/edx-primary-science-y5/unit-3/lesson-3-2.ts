import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "edps5-u3-lesson-3-2",
  code: "3-2",
  title: "Forces and Simple Machines",
  goal: "I CAN describe forces and simple machines like levers and pulleys.",
  standards: ["Year 5 Science: Forces and machines"],
  vocabulary: [
    { term: "Lever", definition: "Rigid bar pivoting on a fulcrum." },
    { term: "Fulcrum", definition: "Pivot point of a lever." },
    { term: "Pulley", definition: "Wheel with rope changing force direction." },
    { term: "Load/effort", definition: "Weight moved / force applied." },
  ],
  concepts: [
    {
      id: "edps5-u3-forces",
      title: "Forces in action",
      skill: "Describe gravity, friction and air resistance effects.",
      lesson: {
        sections: [
          {
            heading: "Forces",
            body: "**Gravity** pulls towards Earth. **Friction** opposes sliding — rougher = more. **Air resistance** slows objects through air; streamlined shapes reduce it. **Magnetic force** attracts/repels.",
          },
          {
            heading: "Balanced/unbalanced",
            body: "**Balanced forces** = no movement (equal opposite). **Unbalanced** = acceleration in force direction. Net force determines acceleration.",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "Pulls towards Earth" },
          { name: "Friction", statement: "Opposes motion" },
          { name: "Air resistance", statement: "Slows through air" },
        ],
        workedExample: {
          problem: "Why do parachutes slow descent?",
          solution:
            "Large surface area creates air resistance opposing gravity.",
        },
      },
      questions: [
        {
          id: "edps5-u3-fo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What force pulls objects towards Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air resistance" },
              { id: "b", text: "Gravity" },
              { id: "c", text: "Magnetism" },
              { id: "d", text: "Friction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gravity", statement: "Pulls down." },
            ],
            steps: [{ reasoning: "Gravity pulls.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Gravity",
            commonErrors: ["Wrong force."],
          },
        },
        {
          id: "edps5-u3-fo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens when forces on an object are balanced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stops" },
              { id: "b", text: "It stays still or moves at constant speed" },
              { id: "c", text: "It floats" },
              { id: "d", text: "It accelerates" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balanced forces",
                statement: "No acceleration.",
              },
            ],
            steps: [
              { reasoning: "Recall rule.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: constant motion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** It stays still or moves at constant speed",
            commonErrors: ["Wrong outcome."],
          },
        },
        {
          id: "edps5-u3-fo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a lever makes lifting easier.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lever",
                statement: "Fulcrum position reduces needed force.",
              },
            ],
            steps: [
              { reasoning: "Lever identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lever pivots on fulcrum — longer effort arm means less force needed to lift heavy load",
            commonErrors: ["No fulcrum link."],
          },
        },
        {
          id: "edps5-u3-fo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a ball thrown in air eventually falls down.",
          parts: [
            { label: "a", prompt: "Forces acting", marks: 1 },
            { label: "b", prompt: "Gravity role", marks: 1 },
            { label: "c", prompt: "Air resistance role", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Forces",
                statement: "Gravity pulls down; air resistance slows.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Forces listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Gravity explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Air resistance explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Gravity pulls ball down; air resistance opposes motion slowing it — net downward force makes it fall",
            commonErrors: ["Incomplete forces."],
          },
        },
      ],
    },
    {
      id: "edps5-u3-machines",
      title: "Simple machines",
      skill: "Describe levers, pulleys and their uses.",
      lesson: {
        sections: [
          {
            heading: "Levers",
            body: "**Lever** = rigid bar + **fulcrum** (pivot). **Load** = weight moved; **effort** = force applied. Class 1: fulcrum between load+effort (seesaw). Class 2: load between fulcrum+effort (wheelbarrow). Class 3: effort between fulcrum+load (tweezers).",
          },
          {
            heading: "Pulleys",
            body: "**Pulley** = wheel with rope — changes force direction. **Fixed pulley** changes direction; **movable pulley** halves force needed; **block and tackle** combines multiple pulleys for big loads.",
          },
        ],
        keyFormulas: [
          { name: "Fulcrum", statement: "Pivot point" },
          { name: "Class 1 lever", statement: "Fulcrum middle" },
          { name: "Pulley", statement: "Changes force direction" },
        ],
        workedExample: {
          problem: "Is a wheelbarrow a class 1 or 2 lever?",
          solution:
            "Class 2 — load between fulcrum (wheel) and effort (handles).",
        },
      },
      questions: [
        {
          id: "edps5-u3-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a fulcrum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The pivot point of a lever" },
              { id: "b", text: "The load" },
              { id: "c", text: "The effort" },
              { id: "d", text: "The bar" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fulcrum",
                statement: "Pivot point.",
              },
            ],
            steps: [{ reasoning: "Fulcrum = pivot.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The pivot point of a lever",
            commonErrors: ["Wrong part."],
          },
        },
        {
          id: "edps5-u3-sm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a pulley do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Creates electricity" },
              { id: "b", text: "Creates friction" },
              { id: "c", text: "Stores energy" },
              { id: "d", text: "Changes force direction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pulley",
                statement: "Changes direction.",
              },
            ],
            steps: [
              { reasoning: "Recall function.", marks: 1, markCode: "M" },
              { reasoning: "Answer: direction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Changes force direction",
            commonErrors: ["Wrong function."],
          },
        },
        {
          id: "edps5-u3-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the three classes of levers and give an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lever classes",
                statement: "1=fulcrum middle; 2=load middle; 3=effort middle.",
              },
            ],
            steps: [
              { reasoning: "Class 1+example.", marks: 1, markCode: "A" },
              { reasoning: "Class 2+example.", marks: 1, markCode: "A" },
              { reasoning: "Class 3+example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Class 1: seesaw; Class 2: wheelbarrow; Class 3: tweezers",
            commonErrors: ["Incomplete."],
          },
        },
        {
          id: "edps5-u3-sm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a block and tackle makes lifting heavy loads easier.",
          parts: [
            { label: "a", prompt: "What it is", marks: 1 },
            { label: "b", prompt: "Force sharing", marks: 1 },
            { label: "c", prompt: "Mechanical advantage", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Block and tackle",
                statement: "Multiple pulleys share load.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Described.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Force shared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Advantage explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Multiple pulleys share the load across several ropes, reducing force needed to lift heavy objects",
            commonErrors: ["No sharing link."],
          },
        },
      ],
    },
  ],
};
