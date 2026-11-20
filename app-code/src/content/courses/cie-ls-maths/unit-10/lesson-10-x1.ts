import type { Lesson } from "../../../types.ts";

export const exam101: Lesson = {
  id: "cilm-u10-exam1",
  code: "10-X1",
  title: "Exam Practice 1: Checkpoint Practice",
  goal: "I CAN answer checkpoint practice exam-style questions under timed conditions.",
  standards: ["0862: Checkpoint Practice"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u10-exam1-concept",
      title: "Checkpoint Practice — exam practice",
      skill: "Apply checkpoint practice techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on checkpoint practice. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u10-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A train travels 300 km at an average speed of 75 km/h. Work out the time taken, in hours.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":4}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$t=d/s$"}],"steps":[{"reasoning":"Time = distance / speed.","working":"300/75","marks":1,"markCode":"A"}],"finalAnswer":"4 hours"},
        },
        {
          id: "cilm-u10-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A bag contains 19 counters: 18 are red and 1 are blue. One counter is picked at random. Work out the probability that it is blue. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.05263157894736842,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P(\\text{event})=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$"}],"steps":[{"reasoning":"Probability = favourable / total, then simplify.","working":"1/19","marks":1,"markCode":"A"}],"finalAnswer":"1/19"},
        },
        {
          id: "cilm-u10-x1-q3",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The following numbers are the scores in a game: 2, 3, 6, 7, 14, 15, 19.\n\n(a) Work out the mean score.\n(b) Work out the range.",
          response: {"type":"numeric","parts":[{"label":"(a)","answer":9.428571428571429},{"label":"(b)","answer":17}]},
          markscheme: {"principles":[{"kind":"definition","name":"Averages","statement":"Mean = sum/count; range = max - min; median = middle value."}],"steps":[{"reasoning":"Add all values and divide by the count.","working":"66/7","marks":1,"markCode":"A"},{"reasoning":"Subtract the smallest from the largest.","working":"19-2","marks":1,"markCode":"A"}],"finalAnswer":"(a) 9.429 (b) 17"},
        },
      ],
    },
  ],
};
