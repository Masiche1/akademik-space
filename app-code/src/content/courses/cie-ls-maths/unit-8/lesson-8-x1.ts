import type { Lesson } from "../../../types.ts";

export const exam81: Lesson = {
  id: "cilm-u8-exam1",
  code: "8-X1",
  title: "Exam Practice 1: Statistics and Probability",
  goal: "I CAN answer statistics and probability exam-style questions under timed conditions.",
  standards: ["0862: Statistics and Probability"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u8-exam1-concept",
      title: "Statistics and Probability — exam practice",
      skill: "Apply statistics and probability techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on statistics and probability. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u8-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A car travels at a steady 50 km/h for 3 hours. Work out the distance travelled.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":150}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$d=st$"}],"steps":[{"reasoning":"Distance = speed x time.","working":"50\\times3","marks":1,"markCode":"A"}],"finalAnswer":"150 km"},
        },
        {
          id: "cilm-u8-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A card is chosen at random from a standard pack of 52 playing cards. Work out the probability of choosing a face card. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.23076923076923078,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P=\\frac{\\text{favourable}}{\\text{total}}$"}],"steps":[{"reasoning":"12 favourable cards out of 52.","working":"12/52","marks":1,"markCode":"A"}],"finalAnswer":"12/52"},
        },
        {
          id: "cilm-u8-x1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The following numbers are the scores in a game: 4, 4, 6, 24, 24, 27. Work out the median score.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":15}]},
          markscheme: {"principles":[{"kind":"definition","name":"Median","statement":"Median = middle value of ordered data (average of two middle values if even count)."}],"steps":[{"reasoning":"Average the two middle values.","working":"4,4,6,24,24,27","marks":1,"markCode":"A"}],"finalAnswer":"15"},
        },
      ],
    },
  ],
};
