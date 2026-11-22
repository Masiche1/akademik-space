import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "edps6-u3-lesson-3-2",
  code: "3-2",
  title: "Forces, Machines and Electricity",
  goal: "I CAN describe forces, simple machines and electric circuits.",
  standards: ["Year 6 Science: Forces, machines and electricity"],
  vocabulary: [
    { term: "Lever/pulley", definition: "Simple machines reducing effort." },
    { term: "Series/parallel", definition: "Circuit configurations." },
    { term: "Conductor/insulator", definition: "Conducts/blocks electricity." },
    { term: "Resistance", definition: "Opposes current flow." },
  ],
  concepts: [
    {
      id: "edps6-u3-machines",
      title: "Simple machines",
      skill: "Describe levers, pulleys and mechanical advantage.",
      lesson: {
        sections: [
          {
            heading: "Simple machines",
            body: "**Lever**: bar + fulcrum — class 1 (fulcrum middle: seesaw), class 2 (load middle: wheelbarrow), class 3 (effort middle: tweezers). **Pulley**: wheel + rope changes force direction; block and tackle shares load. **Inclined plane**: ramp reduces effort. **Wheel and axle**: wheel turns axle.",
          },
          {
            heading: "Mechanical advantage",
            body: "Machines trade **force for distance** — less effort needed but over longer distance. Ideal machines: effort × distance = load × distance (energy conserved).",
          },
        ],
        keyFormulas: [
          { name: "Class 1 lever", statement: "Fulcrum middle" },
          { name: "Class 2", statement: "Load middle" },
          { name: "Class 3", statement: "Effort middle" },
        ],
        workedExample: {
          problem: "Is a wheelbarrow class 1 or 2?",
          solution:
            "Class 2 — load between fulcrum (wheel) and effort (handles).",
        },
      },
      questions: [
        {
          id: "edps6-u3-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a fulcrum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The pivot point" },
              { id: "b", text: "The bar" },
              { id: "c", text: "The load" },
              { id: "d", text: "The effort" },
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
            finalAnswer: "**(b)** The pivot point",
            commonErrors: ["Wrong part."],
          },
        },
        {
          id: "edps6-u3-sm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which lever class is a wheelbarrow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Class 3" },
              { id: "b", text: "Class 1" },
              { id: "c", text: "Class 2" },
              { id: "d", text: "Not a lever" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lever classes",
                statement: "Wheelbarrow = class 2.",
              },
            ],
            steps: [
              { reasoning: "Identify class.", marks: 1, markCode: "M" },
              { reasoning: "Answer: class 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Class 2",
            commonErrors: ["Wrong class."],
          },
        },
        {
          id: "edps6-u3-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a pulley makes lifting easier.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pulley",
                statement: "Changes force direction/reduces effort.",
              },
            ],
            steps: [
              { reasoning: "Function described.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Pulley wheel with rope changes force direction; block and tackle shares load across pulleys reducing effort",
            commonErrors: ["Incomplete."],
          },
        },
        {
          id: "edps6-u3-sm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why using a ramp makes lifting easier despite covering more distance.",
          parts: [
            { label: "a", prompt: "Force vs distance", marks: 1 },
            { label: "b", prompt: "Trade-off", marks: 1 },
            { label: "c", prompt: "Energy conservation", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inclined plane",
                statement: "Less force over longer distance.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Trade-off.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Explained.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Energy conserved.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Ramp reduces force needed by spreading work over longer distance; same energy used but easier",
            commonErrors: ["No trade-off."],
          },
        },
      ],
    },
    {
      id: "edps6-u3-electricity",
      title: "Electric circuits",
      skill: "Describe series and parallel circuits and conductors.",
      lesson: {
        sections: [
          {
            heading: "Series vs parallel",
            body: "**Series**: one path — all components share current; one break = all off. **Parallel**: multiple paths — each component gets full voltage; one break doesn't affect others. Homes use parallel for independent appliances.",
          },
          {
            heading: "Conductors/insulators",
            body: "**Conductors** allow current (metals, graphite, body); **insulators** block (plastic, rubber, glass). **Resistance** opposes current — thicker wires/shorter = less resistance. Safety: insulation prevents shocks.",
          },
        ],
        keyFormulas: [
          { name: "Series", statement: "One path" },
          { name: "Parallel", statement: "Multiple paths" },
          { name: "Resistance", statement: "Opposes current" },
        ],
        workedExample: {
          problem: "Why are house circuits parallel?",
          solution:
            "So appliances work independently — one switch doesn't turn off others.",
        },
      },
      questions: [
        {
          id: "edps6-u3-el-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a parallel circuit, what happens if one bulb breaks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Others stay on" },
              { id: "b", text: "All go out" },
              { id: "c", text: "All dim" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel",
                statement: "Independent paths.",
              },
            ],
            steps: [{ reasoning: "Recall property.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Others stay on",
            commonErrors: ["Series behaviour."],
          },
        },
        {
          id: "edps6-u3-el-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a conductor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastic" },
              { id: "b", text: "Rubber" },
              { id: "c", text: "Copper" },
              { id: "d", text: "Glass" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conductors",
                statement: "Metals conduct.",
              },
            ],
            steps: [
              { reasoning: "Identify conductor.", marks: 1, markCode: "M" },
              { reasoning: "Answer: copper.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Copper",
            commonErrors: ["Insulator chosen."],
          },
        },
        {
          id: "edps6-u3-el-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare series and parallel circuits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circuits",
                statement: "Series=one path; parallel=multiple.",
              },
            ],
            steps: [
              { reasoning: "Series described.", marks: 1, markCode: "A" },
              { reasoning: "Parallel described.", marks: 1, markCode: "A" },
              { reasoning: "Difference clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Series: one path, shared current, all off if break; parallel: multiple paths, independent, one break doesn't affect others",
            commonErrors: ["Incomplete comparison."],
          },
        },
        {
          id: "edps6-u3-el-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why electrical wires are thick copper covered in plastic.",
          parts: [
            { label: "a", prompt: "Copper choice", marks: 1 },
            { label: "b", prompt: "Thickness", marks: 1 },
            { label: "c", prompt: "Plastic coating", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wiring",
                statement:
                  "Copper conducts; thick=less resistance; plastic insulates.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Copper conducts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Thickness explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Plastic insulates.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Copper conducts well; thick wire has less resistance; plastic coating insulates to prevent shocks",
            commonErrors: ["Incomplete reasoning."],
          },
        },
      ],
    },
  ],
};
