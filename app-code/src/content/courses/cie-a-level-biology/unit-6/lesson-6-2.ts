import type { Lesson } from "../../../types.ts";

export const lesson612: Lesson = {
  id: "cial-b-u6-lesson-6-2",
  code: "6-2",
  title: "Blood glucose and temperature regulation",
  goal: "I CAN explain homeostatic control of blood glucose and body temperature.",
  standards: ["9700 Unit 11: homeostasis"],
  vocabulary: [
    {
      term: "Homeostasis",
      definition: "Maintenance of stable internal conditions.",
    },
    {
      term: "Insulin",
      definition:
        "Hormone lowering blood glucose by promoting glycogen storage.",
    },
    {
      term: "Glucagon",
      definition:
        "Hormone raising blood glucose by promoting glycogen breakdown.",
    },
    {
      term: "Glycogen",
      definition: "Storage carbohydrate in liver and muscles.",
    },
    {
      term: "Hypothalamus",
      definition:
        "Brain region detecting temperature and controlling thermoregulation.",
    },
    {
      term: "Vasodilation",
      definition: "Widening of blood vessels increasing heat loss.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u6-glucose",
      title: "Blood glucose regulation",
      skill: "Explain insulin and glucagon control of blood glucose.",
      lesson: {
        sections: [
          {
            heading: "Glucose balance",
            body: "Blood glucose must stay ~4-6 mmol/L. Too high → insulin from pancreas → glucose→glycogen in liver/muscle + cellular uptake. Too low → glucagon → glycogen→glucose.",
          },
          {
            heading: "Insulin and glucagon",
            body: "Insulin (beta cells): lowers glucose — promotes glycogen synthesis and cellular uptake. Glucagon (alpha cells): raises glucose — promotes glycogen breakdown and gluconeogenesis. Opposing hormones = negative feedback.",
          },
          {
            heading: "Diabetes",
            body: "Type 1: autoimmune destruction of insulin-producing cells — needs insulin injections. Type 2: insulin resistance — managed with diet/medication. Both cause hyperglycaemia.",
          },
        ],
        keyFormulas: [
          {
            name: "Glucose",
            statement: "High glucose→insulin→storage; low→glucagon→release.",
          },
        ],
        workedExample: {
          problem: "What happens to blood glucose after a sugary meal?",
          solution:
            "Glucose rises → insulin released → glucose taken up by cells and stored as glycogen → levels return to normal.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-gl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Thyroxine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insulin",
                statement: "Lowers blood glucose.",
              },
            ],
            steps: [
              {
                reasoning: "Insulin = lowers glucose.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Insulin",
            commonErrors: ["Confusing with glucagon."],
          },
        },
        {
          id: "cial-b-u6-gl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does insulin lower blood glucose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insulin action",
                statement:
                  "Promotes cellular glucose uptake and glycogen synthesis.",
              },
            ],
            steps: [
              {
                reasoning: "Increases cellular uptake.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Promotes glycogen storage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Uptake into cells + glycogen storage.",
            commonErrors: ["Saying it destroys glucose."],
          },
        },
        {
          id: "cial-b-u6-gl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare Type 1 and Type 2 diabetes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diabetes",
                statement: "T1: no insulin; T2: insulin resistance.",
              },
            ],
            steps: [
              {
                reasoning: "Type 1 = autoimmune, no insulin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Type 2 = insulin resistance.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both → hyperglycaemia.", marks: 1, markCode: "M" },
              { reasoning: "Treatments differ.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "T1=no insulin (injections); T2=resistance (diet/meds).",
            commonErrors: ["Same cause for both."],
          },
        },
        {
          id: "cial-b-u6-gl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Blood glucose regulation.",
          parts: [
            { label: "a", prompt: "Hormone lowering glucose?", marks: 1 },
            { label: "b", prompt: "How does insulin work?", marks: 2 },
            { label: "c", prompt: "Type 1 vs Type 2 diabetes?", marks: 3 },
            {
              label: "d",
              prompt: "What happens when glucose is low?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glucose",
                statement: "Insulin+glucagon+diabetes+low glucose response.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Insulin.", marks: 1, markCode: "B" },
              {
                part: "b",
                reasoning: "Cellular uptake.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Glycogen storage.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "T1=autoimmune/no insulin.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "T2=resistance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both→hyperglycaemia.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Glucagon released.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Glycogen→glucose.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Glucose restored.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) insulin (b) uptake+storage (c) T1 vs T2 (d) glucagon→release",
          },
        },
      ],
    },
    {
      id: "cial-b-u6-temperature",
      title: "Temperature regulation",
      skill: "Describe thermoregulation mechanisms in humans.",
      lesson: {
        sections: [
          {
            heading: "Thermoregulation",
            body: "Core temperature must stay ~37°C. Hypothalamus acts as thermostat detecting blood temperature and skin receptors.",
          },
          {
            heading: "Cooling mechanisms",
            body: "Too hot → vasodilation (more blood to skin surface) + sweating (evaporative cooling) + reduced metabolic rate. Hair lies flat.",
          },
          {
            heading: "Warming mechanisms",
            body: "Too cold → vasoconstriction (less blood to skin) + shivering (muscle heat) + increased metabolic rate + hair erection (insulation). Brown fat in infants.",
          },
        ],
        keyFormulas: [
          {
            name: "Thermoregulation",
            statement:
              "Hot→vasodilation+sweating; cold→vasoconstriction+shivering.",
          },
        ],
        workedExample: {
          problem: "Why do we shiver when cold?",
          solution:
            "Shivering = rapid muscle contractions generating heat to raise body temperature.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-tp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ controls body temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hypothalamus" },
              { id: "b", text: "Liver" },
              { id: "c", text: "Heart" },
              { id: "d", text: "Kidney" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothalamus",
                statement: "Thermoregulatory centre in brain.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothalamus = thermostat.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Hypothalamus",
            commonErrors: ["Saying liver or kidney."],
          },
        },
        {
          id: "cial-b-u6-tp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does sweating cool the body?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sweating",
                statement:
                  "Evaporative cooling — sweat evaporates taking heat.",
              },
            ],
            steps: [
              { reasoning: "Evaporation takes heat.", marks: 1, markCode: "M" },
              { reasoning: "Cools skin surface.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporative cooling.",
            commonErrors: ["Saying sweat itself cools."],
          },
        },
        {
          id: "cial-b-u6-tp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the body's response to cold.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cold response",
                statement:
                  "Vasoconstriction+shivering+metabolic increase+hair erection.",
              },
            ],
            steps: [
              {
                reasoning: "Vasoconstriction reduces heat loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shivering generates heat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metabolic rate increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hair erection insulates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vasoconstriction+shivering+metabolic increase+insulation.",
            commonErrors: ["Missing multiple mechanisms."],
          },
        },
        {
          id: "cial-b-u6-tp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Temperature regulation.",
          parts: [
            { label: "a", prompt: "Thermoregulatory organ?", marks: 1 },
            { label: "b", prompt: "How does sweating cool?", marks: 2 },
            { label: "c", prompt: "Cold response mechanisms?", marks: 3 },
            { label: "d", prompt: "Hot response mechanisms?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thermoregulation",
                statement: "Hypothalamus+sweating+cold+hot responses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hypothalamus.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Evaporative cooling.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Heat loss.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Vasoconstriction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Shivering+metabolic increase.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Hair erection.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Vasodilation.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Sweating.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Reduced metabolism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) hypothalamus (b) evaporation (c) vasoconstrict+shiver (d) vasodilate+sweat",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u6-homeostasis-notes",
      title: "Homeostasis — revision notes",
      summary: "Blood glucose and temperature regulation mechanisms.",
      sections: [
        {
          heading: "Glucose",
          body: "High→insulin (uptake+glycogen); low→glucagon (glycogen breakdown). T1=autoimmune; T2=resistance.",
        },
        {
          heading: "Temperature",
          body: "Hypothalamus controls. Hot→vasodilation+sweating. Cold→vasoconstriction+shivering+metabolic increase.",
        },
        {
          heading: "Exam checklist",
          body: "Can you compare insulin/glucagon? Explain diabetes types? Describe thermoregulation mechanisms?",
        },
      ],
    },
  ],
};
