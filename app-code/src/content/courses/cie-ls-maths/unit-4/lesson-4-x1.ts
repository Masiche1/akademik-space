import type { Lesson } from "../../../types.ts";

export const exam41: Lesson = {
  id: "cilm-u4-exam1",
  code: "4-X1",
  title: "Exam Practice 1: Graphs and Algebra Applications",
  goal: "I CAN answer graphs and algebra applications exam-style questions under timed conditions.",
  standards: ["0862: Graphs and Algebra Applications"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u4-exam1-concept",
      title: "Graphs and Algebra Applications — exam practice",
      skill: "Apply graphs and algebra applications techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on graphs and algebra applications. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u4-x1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A train travels 300 km at an average speed of 60 km/h. Work out the time taken, in hours.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":5}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$t=d/s$"}],"steps":[{"reasoning":"Time = distance / speed.","working":"300/60","marks":1,"markCode":"A"}],"finalAnswer":"5 hours"},
        },
        {
          id: "cilm-u4-x1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair 6-sided dice is rolled once. Work out the probability of rolling a number greater than 2. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.6666666666666666,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P=\\frac{\\text{favourable}}{\\text{total}}$"}],"steps":[{"reasoning":"Count outcomes $>2$: 4 of 6.","working":"4/6","marks":1,"markCode":"A"}],"finalAnswer":"4/6"},
        },
        {
          id: "cilm-u4-x1-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The following numbers are the scores in a game: 2, 7, 10, 12, 17, 18, 20.\n\n(a) Work out the mean score.\n(b) Work out the range.",
          response: {"type":"numeric","parts":[{"label":"(a)","answer":12.285714285714286},{"label":"(b)","answer":18}]},
          markscheme: {"principles":[{"kind":"definition","name":"Averages","statement":"Mean = sum/count; range = max - min; median = middle value."}],"steps":[{"reasoning":"Add all values and divide by the count.","working":"86/7","marks":1,"markCode":"A"},{"reasoning":"Subtract the smallest from the largest.","working":"20-2","marks":1,"markCode":"A"}],"finalAnswer":"(a) 12.29 (b) 18"},
        },
      ],
    },
  ],
};
