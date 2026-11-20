import type { Lesson } from "../../../types.ts";

export const exam91: Lesson = {
  id: "cilm-u9-exam1",
  code: "9-X1",
  title: "Exam Practice 1: Problem Solving and Review",
  goal: "I CAN answer problem solving and review exam-style questions under timed conditions.",
  standards: ["0862: Problem Solving and Review"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u9-exam1-concept",
      title: "Problem Solving and Review — exam practice",
      skill: "Apply problem solving and review techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on problem solving and review. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u9-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A train travels 300 km at an average speed of 50 km/h. Work out the time taken, in hours.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":6}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$t=d/s$"}],"steps":[{"reasoning":"Time = distance / speed.","working":"300/50","marks":1,"markCode":"A"}],"finalAnswer":"6 hours"},
        },
        {
          id: "cilm-u9-x1-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bag contains 19 counters: 18 are red and 1 are blue. One counter is picked at random. Work out the probability that it is blue. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.05263157894736842,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P(\\text{event})=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$"}],"steps":[{"reasoning":"Probability = favourable / total, then simplify.","working":"1/19","marks":1,"markCode":"A"}],"finalAnswer":"1/19"},
        },
        {
          id: "cilm-u9-x1-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The following numbers are the scores in a game: 2, 6, 8, 14, 15, 20, 29.\n\n(a) Work out the mean score.\n(b) Work out the range.",
          response: {"type":"numeric","parts":[{"label":"(a)","answer":13.428571428571429},{"label":"(b)","answer":27}]},
          markscheme: {"principles":[{"kind":"definition","name":"Averages","statement":"Mean = sum/count; range = max - min; median = middle value."}],"steps":[{"reasoning":"Add all values and divide by the count.","working":"94/7","marks":1,"markCode":"A"},{"reasoning":"Subtract the smallest from the largest.","working":"29-2","marks":1,"markCode":"A"}],"finalAnswer":"(a) 13.43 (b) 27"},
        },
      ],
    },
  ],
};
