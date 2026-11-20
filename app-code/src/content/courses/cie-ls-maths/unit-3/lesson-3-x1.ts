import type { Lesson } from "../../../types.ts";

export const exam31: Lesson = {
  id: "cilm-u3-exam1",
  code: "3-X1",
  title: "Exam Practice 1: Algebra Foundations",
  goal: "I CAN answer algebra foundations exam-style questions under timed conditions.",
  standards: ["0862: Algebra Foundations"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u3-exam1-concept",
      title: "Algebra Foundations — exam practice",
      skill: "Apply algebra foundations techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on algebra foundations. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u3-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A car travels at a steady 50 km/h for 4 hours. Work out the distance travelled.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":200}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$d=st$"}],"steps":[{"reasoning":"Distance = speed x time.","working":"50\\times4","marks":1,"markCode":"A"}],"finalAnswer":"200 km"},
        },
        {
          id: "cilm-u3-x1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag contains 9 counters: 8 are red and 1 are blue. One counter is picked at random. Work out the probability that it is blue. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.1111111111111111,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P(\\text{event})=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$"}],"steps":[{"reasoning":"Probability = favourable / total, then simplify.","working":"1/9","marks":1,"markCode":"A"}],"finalAnswer":"1/9"},
        },
        {
          id: "cilm-u3-x1-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "The following numbers are the scores in a game: 6, 7, 14, 15, 18, 22, 25. Work out the median score.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":15}]},
          markscheme: {"principles":[{"kind":"definition","name":"Median","statement":"Median = middle value of ordered data (average of two middle values if even count)."}],"steps":[{"reasoning":"Take the middle value.","working":"6,7,14,15,18,22,25","marks":1,"markCode":"A"}],"finalAnswer":"15"},
        },
      ],
    },
  ],
};
