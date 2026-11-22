import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "edps1-u3-lesson-3-3",
  code: "3-3",
  title: "Keeping Healthy",
  goal: "I CAN describe how to keep my body healthy and clean.",
  standards: ["Year 1 Science: Humans and health"],
  vocabulary: [
    { term: "Hygiene", definition: "Keeping clean to stay healthy." },
    { term: "Germs", definition: "Tiny living things that can make us ill." },
    { term: "Exercise", definition: "Physical activity that keeps us strong." },
    {
      term: "Balanced diet",
      definition: "Eating the right amounts of different foods.",
    },
  ],
  concepts: [
    {
      id: "edps1-u3-health",
      title: "Healthy habits",
      skill: "Describe healthy habits for body and hygiene.",
      lesson: {
        sections: [
          {
            heading: "Staying healthy",
            body: "Healthy habits: **eat** healthy food (fruit, vegetables, protein), **drink** water, **exercise** (play, run, swim), **sleep** enough, **wash hands** before eating and after toilet.",
          },
          {
            heading: "Fighting germs",
            body: "Germs cause illness. We fight them by: washing hands, covering mouth when coughing, cleaning surfaces, not sharing drinks, and seeing a doctor when sick.",
          },
        ],
        keyFormulas: [
          { name: "Healthy habits", statement: "Food, water, exercise, sleep" },
          { name: "Hygiene", statement: "Washing, cleaning" },
          { name: "Germs", statement: "Cause illness" },
        ],
        workedExample: {
          problem: "Why do we wash hands before eating?",
          solution: "To remove germs that could make us ill.",
        },
      },
      questions: [
        {
          id: "edps1-u3-he-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are germs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helpful bacteria" },
              { id: "b", text: "Vitamins" },
              { id: "c", text: "Food" },
              { id: "d", text: "Tiny things that can make us ill" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Germs",
                statement: "Cause illness.",
              },
            ],
            steps: [{ reasoning: "Germs = illness.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Tiny things that can make us ill",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps1-u3-he-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "When should you wash your hands?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only when dirty" },
              { id: "b", text: "Once a week" },
              { id: "c", text: "Before eating and after toilet" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hygiene",
                statement: "Before eating, after toilet.",
              },
            ],
            steps: [
              { reasoning: "Identify times.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: before eating/toilet.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Before eating and after toilet",
            commonErrors: ["Wrong times."],
          },
        },
        {
          id: "edps1-u3-he-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two healthy habits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Healthy habits",
                statement: "Exercise, healthy food, sleep, wash hands.",
              },
            ],
            steps: [
              { reasoning: "Habit 1.", marks: 1, markCode: "A" },
              { reasoning: "Habit 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Exercise; eat healthy food'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u3-he-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how germs spread and two ways to prevent illness.",
          parts: [
            { label: "a", prompt: "How germs spread", marks: 1 },
            { label: "b", prompt: "Prevention 1", marks: 1 },
            { label: "c", prompt: "Prevention 2", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Germ prevention",
                statement:
                  "Spread by touch/coughing; prevent by washing/covering.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Spread method.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Prevention 1.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Prevention 2.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Germs spread by touch and coughing; prevent by washing hands and covering mouth",
            commonErrors: ["Incomplete or wrong."],
          },
        },
      ],
    },
    {
      id: "edps1-u3-simple",
      title: "Simple Machines",
      skill: "Identify simple machines and how they help us.",
      lesson: {
        sections: [
          {
            heading: "What are simple machines?",
            body: "Simple machines make work easier: **lever** (see-saw, scissors), **pulley** (flagpole, crane), **wheel and axle** (bicycle, doorknob), **inclined plane** (ramp, slide), **wedge** (knife, doorstop), **screw** (screwdriver, bolt).",
          },
          {
            heading: "How they help",
            body: "Simple machines change the direction or amount of force needed. A ramp lets us push heavy things up with less effort. A lever multiplies force.",
          },
        ],
        keyFormulas: [
          { name: "Lever", statement: "See-saw, scissors" },
          { name: "Pulley", statement: "Flagpole, crane" },
          { name: "Inclined plane", statement: "Ramp, slide" },
        ],
        workedExample: {
          problem: "Why is a ramp easier than lifting?",
          solution:
            "Ramp spreads the work over distance — less force needed at once.",
        },
      },
      questions: [
        {
          id: "edps1-u3-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a simple machine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A tool that makes work easier" },
              { id: "b", text: "A computer" },
              { id: "c", text: "A toy" },
              { id: "d", text: "A vehicle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Simple machine",
                statement: "Makes work easier.",
              },
            ],
            steps: [
              {
                reasoning: "Simple machine = easier work.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A tool that makes work easier",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps1-u3-sm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a lever?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pulley" },
              { id: "b", text: "See-saw" },
              { id: "c", text: "Ramp" },
              { id: "d", text: "Screw" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Simple machines",
                statement: "See-saw = lever.",
              },
            ],
            steps: [
              { reasoning: "Identify lever.", marks: 1, markCode: "M" },
              { reasoning: "Answer: see-saw.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** See-saw",
            commonErrors: ["Wrong machine."],
          },
        },
        {
          id: "edps1-u3-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two simple machines you use every day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Simple machines",
                statement: "Scissors, door handle, bike, stairs.",
              },
            ],
            steps: [
              { reasoning: "Machine 1.", marks: 1, markCode: "A" },
              { reasoning: "Machine 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Scissors; bicycle wheel'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u3-sm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Match simple machine to example: lever, pulley, inclined plane, wheel and axle.",
          parts: [
            { label: "a", prompt: "Lever", marks: 1 },
            { label: "b", prompt: "Pulley", marks: 1 },
            { label: "c", prompt: "Inclined plane", marks: 1 },
            { label: "d", prompt: "Wheel and axle", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Simple machines",
                statement:
                  "lever=see-saw; pulley=flagpole; plane=ramp; wheel=bike.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "See-saw/scissors.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Flagpole/crane.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Ramp/stairs.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Bicycle/doorknob.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "lever=see-saw, pulley=flagpole, plane=ramp, wheel=bicycle",
            commonErrors: ["Mismatched examples."],
          },
        },
      ],
    },
  ],
};
