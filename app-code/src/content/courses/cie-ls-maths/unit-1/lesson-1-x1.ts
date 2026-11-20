import type { Lesson } from "../../../types.ts";

export const exam11: Lesson = {
  id: "cilm-u1-exam1",
  code: "1-X1",
  title: "Exam Practice 1: Number Foundations",
  goal: "I CAN answer number foundations exam-style questions under timed conditions.",
  standards: ["0862: Number Foundations"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u1-exam1-concept",
      title: "Number Foundations — exam practice",
      skill: "Apply number foundations techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on number foundations. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u1-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A car travels at a steady 50 km/h for 4 hours. Work out the distance travelled.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":200}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$d=st$"}],"steps":[{"reasoning":"Distance = speed x time.","working":"50\\times4","marks":1,"markCode":"A"}],"finalAnswer":"200 km"},
        },
        {
          id: "cilm-u1-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A card is chosen at random from a standard pack of 52 playing cards. Work out the probability of choosing a face card. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.23076923076923078,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P=\\frac{\\text{favourable}}{\\text{total}}$"}],"steps":[{"reasoning":"12 favourable cards out of 52.","working":"12/52","marks":1,"markCode":"A"}],"finalAnswer":"12/52"},
        },
        {
          id: "cilm-u1-x1-q3",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The following numbers are the scores in a game: 3, 13, 20, 21, 21, 26, 30.\n\n(a) Work out the mean score.\n(b) Work out the range.",
          response: {"type":"numeric","parts":[{"label":"(a)","answer":19.142857142857142},{"label":"(b)","answer":27}]},
          markscheme: {"principles":[{"kind":"definition","name":"Averages","statement":"Mean = sum/count; range = max - min; median = middle value."}],"steps":[{"reasoning":"Add all values and divide by the count.","working":"134/7","marks":1,"markCode":"A"},{"reasoning":"Subtract the smallest from the largest.","working":"30-3","marks":1,"markCode":"A"}],"finalAnswer":"(a) 19.14 (b) 27"},
        },
      ],
    },
  ],
};
