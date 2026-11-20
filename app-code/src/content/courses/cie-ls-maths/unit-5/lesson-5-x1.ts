import type { Lesson } from "../../../types.ts";

export const exam51: Lesson = {
  id: "cilm-u5-exam1",
  code: "5-X1",
  title: "Exam Practice 1: Angles, Shapes and Symmetry",
  goal: "I CAN answer angles, shapes and symmetry exam-style questions under timed conditions.",
  standards: ["0862: Angles, Shapes and Symmetry"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u5-exam1-concept",
      title: "Angles, Shapes and Symmetry — exam practice",
      skill: "Apply angles, shapes and symmetry techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on angles, shapes and symmetry. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u5-x1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels at a steady 60 km/h for 3 hours. Work out the distance travelled.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":180}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$d=st$"}],"steps":[{"reasoning":"Distance = speed x time.","working":"60\\times3","marks":1,"markCode":"A"}],"finalAnswer":"180 km"},
        },
        {
          id: "cilm-u5-x1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair 4-sided dice is rolled once. Work out the probability of rolling a number greater than 2. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.5,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P=\\frac{\\text{favourable}}{\\text{total}}$"}],"steps":[{"reasoning":"Count outcomes $>2$: 2 of 4.","working":"2/4","marks":1,"markCode":"A"}],"finalAnswer":"2/4"},
        },
        {
          id: "cilm-u5-x1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The following numbers are the scores in a game: 10, 10, 12, 19, 22, 22, 28. Work out the mode.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":10}]},
          markscheme: {"principles":[{"kind":"definition","name":"Mode","statement":"Mode = most frequent value."}],"steps":[{"reasoning":"Find the most frequent value.","working":"frequency","marks":1,"markCode":"A"}],"finalAnswer":"10"},
        },
      ],
    },
  ],
};
