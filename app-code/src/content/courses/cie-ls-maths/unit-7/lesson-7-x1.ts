import type { Lesson } from "../../../types.ts";

export const exam71: Lesson = {
  id: "cilm-u7-exam1",
  code: "7-X1",
  title: "Exam Practice 1: Transformations",
  goal: "I CAN answer transformations exam-style questions under timed conditions.",
  standards: ["0862: Transformations"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u7-exam1-concept",
      title: "Transformations — exam practice",
      skill: "Apply transformations techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on transformations. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u7-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cyclist covers 240 km in 3 hours. Work out the average speed in km/h.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":80}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$s=d/t$"}],"steps":[{"reasoning":"Speed = distance / time.","working":"240/3","marks":1,"markCode":"A"}],"finalAnswer":"80 km/h"},
        },
        {
          id: "cilm-u7-x1-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A card is chosen at random from a standard pack of 52 playing cards. Work out the probability of choosing a king. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.07692307692307693,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P=\\frac{\\text{favourable}}{\\text{total}}$"}],"steps":[{"reasoning":"4 favourable cards out of 52.","working":"4/52","marks":1,"markCode":"A"}],"finalAnswer":"4/52"},
        },
        {
          id: "cilm-u7-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The following numbers are the scores in a game: 6, 13, 24, 25, 27, 29. Work out the median score.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":24.5}]},
          markscheme: {"principles":[{"kind":"definition","name":"Median","statement":"Median = middle value of ordered data (average of two middle values if even count)."}],"steps":[{"reasoning":"Average the two middle values.","working":"6,13,24,25,27,29","marks":1,"markCode":"A"}],"finalAnswer":"24.5"},
        },
      ],
    },
  ],
};
