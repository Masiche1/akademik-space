// Specs for all Pearson Edexcel International Primary courses (Years 1-6).
const { packsFor } = require("./packs-primary.cjs");

const FRAMEWORK = "Pearson Edexcel International Primary Curriculum";

const VOCAB = {
  maths: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Inverse operation", definition: "The operation that undoes another, e.g. subtraction undoes addition." },
    { term: "Mean", definition: "The average: sum of all values divided by how many there are." },
    { term: "Perimeter", definition: "The total distance around the edge of a shape." },
  ],
  english: [
    { term: "Noun", definition: "A naming word: person, place, thing or idea." },
    { term: "Verb", definition: "A doing or being word." },
    { term: "Adjective", definition: "A describing word that tells us more about a noun." },
    { term: "Punctuation", definition: "Marks such as full stops, commas and apostrophes that help us read accurately." },
  ],
  science: [
    { term: "Fair test", definition: "An investigation where only one variable is changed." },
    { term: "Independent variable", definition: "The thing you deliberately change in an investigation." },
    { term: "Dependent variable", definition: "The thing you measure or observe as a result." },
    { term: "Conclusion", definition: "What the results show, linked back to the question." },
  ],
  computing: [
    { term: "Algorithm", definition: "A step-by-step set of instructions to solve a problem." },
    { term: "Data", definition: "Information in a form a computer can process." },
    { term: "Hardware", definition: "The physical parts of a computer system." },
    { term: "Software", definition: "The programs that run on a computer." },
  ],
  geography: [
    { term: "Map", definition: "A representation of an area showing features and positions." },
    { term: "Compass", definition: "A tool that shows direction." },
    { term: "Settlement", definition: "A place where people live, from a hamlet to a city." },
    { term: "Weather", definition: "The day-to-day conditions of the atmosphere." },
  ],
  history: [
    { term: "Timeline", definition: "A way of showing events in the order they happened." },
    { term: "Primary source", definition: "Evidence created at the time being studied." },
    { term: "Chronology", definition: "The arrangement of events in time order." },
    { term: "Enquiry", definition: "Asking and answering questions about the past using evidence." },
  ],
};

function subjOf(course) {
  const mm = /edx-primary-([a-z]+?)(?:-y\d+)?$/.exec(course);
  return mm ? mm[1] : "maths";
}

function makeSpec(course, seed) {
  const subj = subjOf(course);
  return {
    course,
    targetPerCourse: 300,
    packs: packsFor(course),
    questionsPerLesson: 10,
    seed,
    standardsFor: (u) => [`${FRAMEWORK}: ${u.title}`],
    vocabulary: () => VOCAB[subj] || VOCAB.maths,
    sections: (u) => [{
      heading: "Practice technique",
      body: `These questions practise ${u.title.toLowerCase()} in the style of the ${FRAMEWORK}. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.`,
    }],
    keyFormulas: (u) => [{ name: "Key ideas", statement: `Apply the main methods and facts for ${u.title.toLowerCase()}.` }],
  };
}

const COURSES = [
  "edx-primary-maths-y1", "edx-primary-maths-y2", "edx-primary-maths-y3",
  "edx-primary-maths-y4", "edx-primary-maths-y5", "edx-primary-maths-y6",
  "edx-primary-english-y1", "edx-primary-english-y2", "edx-primary-english-y3",
  "edx-primary-english-y4", "edx-primary-english-y5", "edx-primary-english-y6",
  "edx-primary-science-y1", "edx-primary-science-y2", "edx-primary-science-y3",
  "edx-primary-science-y4", "edx-primary-science-y5", "edx-primary-science-y6",
  "edx-primary-computing", "edx-primary-geography", "edx-primary-history",
];

module.exports = Object.fromEntries(COURSES.map((c, i) => [c, makeSpec(c, 9200 + i * 137)]));
