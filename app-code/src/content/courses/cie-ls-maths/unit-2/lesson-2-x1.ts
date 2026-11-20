import type { Lesson } from "../../../types.ts";

export const exam21: Lesson = {
  id: "cilm-u2-exam1",
  code: "2-X1",
  title: "Exam Practice 1: Ratio, Proportion and Rates",
  goal: "I CAN answer ratio, proportion and rates exam-style questions under timed conditions.",
  standards: ["0862: Ratio, Proportion and Rates"],
  
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
    { term: "Mean", definition: "The average: sum of values divided by how many there are." },
  ],
  concepts: [
    {
      id: "cilm-u2-exam1-concept",
      title: "Ratio, Proportion and Rates — exam practice",
      skill: "Apply ratio, proportion and rates techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint technique",
            body: "Cambridge Lower Secondary Mathematics checkpoint questions on ratio, proportion and rates. Write answers clearly, show working in a logical order, and check units on every measurement answer.",
          },
        ],
        keyFormulas: [

        ],
      },
      questions: [
        {
          id: "cilm-u2-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A cyclist covers 200 km in 4 hours. Work out the average speed in km/h.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":50}]},
          markscheme: {"principles":[{"kind":"formula","name":"Distance-speed-time","statement":"$s=d/t$"}],"steps":[{"reasoning":"Speed = distance / time.","working":"200/4","marks":1,"markCode":"A"}],"finalAnswer":"50 km/h"},
        },
        {
          id: "cilm-u2-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A bag contains 8 counters: 5 are red and 3 are blue. One counter is picked at random. Work out the probability that it is blue. Give your answer as a fraction in its lowest terms.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":0.375,"tolerance":0.0001}]},
          markscheme: {"principles":[{"kind":"definition","name":"Probability","statement":"$P(\\text{event})=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$"}],"steps":[{"reasoning":"Probability = favourable / total, then simplify.","working":"3/8","marks":1,"markCode":"A"}],"finalAnswer":"3/8"},
        },
        {
          id: "cilm-u2-x1-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "The following numbers are the scores in a game: 5, 11, 14, 14, 16, 17, 24. Work out the mode.",
          response: {"type":"numeric","parts":[{"label":"Answer","answer":14}]},
          markscheme: {"principles":[{"kind":"definition","name":"Mode","statement":"Mode = most frequent value."}],"steps":[{"reasoning":"Find the most frequent value.","working":"frequency","marks":1,"markCode":"A"}],"finalAnswer":"14"},
        },
      ],
    },
  ],
};
