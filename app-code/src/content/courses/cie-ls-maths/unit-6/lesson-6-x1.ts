import type { Lesson } from "../../../types.ts";

export const exam61: Lesson = {
  id: "cilm-u6-exam1",
  code: "6-X1",
  title: "Exam Practice 1: Measure: Area, Volume and Units",
  goal: "I CAN answer measure: area, volume and units exam-style questions under timed conditions.",
  standards: ["0862: Measure: Area, Volume and Units"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u6-exam1-concept",
      title: "Measure: Area, Volume and Units — exam practice",
      skill: "Apply measure: area, volume and units techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on measure: area, volume and units. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u6-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A train travels 120 km at an average speed of 60 km/h. Work out the time taken, in hours.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":2}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$t=d/s$"}],"steps":[{"reasoning":"Time = distance / speed.","working":"120/60","marks":1,"markCode":"A"}],"finalAnswer":"2 hours"},
        },
        {
          id: "cilm-u6-x1-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A card is chosen at random from a standard pack of 52 playing cards. Work out the probability of choosing a face card. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.23076923076923078,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P=\\frac{\\text{favourable}}{\\text{total}}$"}],"steps":[{"reasoning":"12 favourable cards out of 52.","working":"12/52","marks":1,"markCode":"A"}],"finalAnswer":"12/52"},
        },
        {
          id: "cilm-u6-x1-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The following numbers are the scores in a game: 19, 23, 24, 26, 30.\n\n(a) Work out the mean score.\n(b) Work out the range.",
          response: {"type":"numeric","parts":[{"label":"(a)","answer":24.4},{"label":"(b)","answer":11}]},
          markscheme: {"principles":[{"kind":"definition","name":"Averages","statement":"Mean = sum/count; range = max - min; median = middle value."}],"steps":[{"reasoning":"Add all values and divide by the count.","working":"122/5","marks":1,"markCode":"A"},{"reasoning":"Subtract the smallest from the largest.","working":"30-19","marks":1,"markCode":"A"}],"finalAnswer":"(a) 24.4 (b) 11"},
        },
      ],
    },
  ],
};
