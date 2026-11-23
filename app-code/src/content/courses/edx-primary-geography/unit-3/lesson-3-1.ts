import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edxpg-u3-lesson-3-1",
  code: "3-1",
  title: "Continents and Countries",
  goal: "I CAN locate continents and describe different countries.",
  standards: ["Y4-Y6 Geography", "Continents and countries"],
  vocabulary: [
    { term: "Continent", definition: "One of Earth's seven large land areas." },
    {
      term: "Country",
      definition: "A nation with its own government and borders.",
    },
    { term: "Capital", definition: "The main city of a country." },
    {
      term: "Population",
      definition: "The number of people living in a place.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u3-continents",
      title: "The Seven Continents",
      skill: "Identify and locate continents on a world map.",
      lesson: {
        sections: [
          {
            heading: "The seven continents",
            body: "Earth has seven continents: Asia (largest — includes China, India, Japan), Africa (second largest — includes Egypt, Kenya, Nigeria), North America (USA, Canada, Mexico), South America (Brazil, Argentina), Antarctica (south pole — no permanent population), Europe (UK, France, Germany), and Australia/Oceania (Australia, New Zealand, Pacific islands).",
          },
          {
            heading: "Continents vs countries",
            body: "A continent is a huge land area; a country is a smaller area with its own government. Many countries fit inside one continent — Europe has ~44 countries, Asia has ~48. Some countries span parts of two continents — Russia is in both Europe and Asia; Turkey is in Europe and Asia. The UK is a country in Europe.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which continent is Brazil in?",
          solution: "South America.",
        },
      },
      questions: [
        {
          id: "edxpg-u3-cont-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many continents are there?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continents", statement: "Seven." },
            ],
            steps: [{ reasoning: "7 continents.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 7",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edxpg-u3-cont-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which continent is Japan in?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Europe" },
              { id: "b", text: "Asia" },
              { id: "c", text: "Africa" },
              { id: "d", text: "Australia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continents",
                statement: "Japan is in Asia.",
              },
            ],
            steps: [{ reasoning: "Japan = Asia.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Asia",
            commonErrors: ["Wrong continent."],
          },
        },
        {
          id: "edxpg-u3-cont-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the continent and two countries for each: (a) where the Sahara is, (b) where the Amazon is.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continents and features",
                statement: "Sahara = Africa; Amazon = South America.",
              },
            ],
            steps: [
              {
                reasoning: "Sahara — Africa; example countries Egypt, Morocco.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Amazon — South America; Brazil, Peru.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both correctly identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sahara-Africa; Amazon-South America",
            commonErrors: ["Wrong continents."],
          },
        },
        {
          id: "edxpg-u3-cont-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a continent and a country, with two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Continent vs country",
                statement:
                  "Continent = huge land area; country = governed nation.",
              },
            ],
            steps: [
              {
                reasoning: "Continent defined — large landmass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Country defined — own government and borders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples — Asia (continent) vs Japan (country); Europe vs UK.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Continent=landmass; country=nation",
            commonErrors: ["Reversed definitions."],
          },
        },
      ],
    },
    {
      id: "edxpg-u3-countries",
      title: "Comparing Countries",
      skill: "Compare countries by population, size and development.",
      lesson: {
        sections: [
          {
            heading: "Country facts",
            body: "Countries differ hugely: China and India have the largest populations (~1.4 billion each); Russia is the largest by area; Vatican City is the smallest. Countries have different incomes — high-income (UK, USA, Germany) vs low-income (many African nations). Development varies — measured by life expectancy, education, income (HDI).",
          },
          {
            heading: "Development differences",
            body: "More developed countries (MDCs) have higher incomes, better healthcare, education and infrastructure — but may have aging populations and higher costs. Less developed countries (LDCs) may have younger populations, lower incomes, but faster growth. Development is about quality of life, not just wealth — includes health, education, environment.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name the most populous country and the largest by area.",
          solution: "China (population ~1.4bn); Russia (area 17.1m km²).",
        },
      },
      questions: [
        {
          id: "edxpg-u3-ctry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which country has the largest population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "USA" },
              { id: "b", text: "China or India" },
              { id: "c", text: "Russia" },
              { id: "d", text: "UK" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Population",
                statement: "China/India ~1.4bn.",
              },
            ],
            steps: [
              { reasoning: "China/India largest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** China or India",
            commonErrors: ["Wrong country."],
          },
        },
        {
          id: "edxpg-u3-ctry-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'developed country' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A country that is large" },
              { id: "b", text: "A wealthy country with good services" },
              { id: "c", text: "A new country" },
              { id: "d", text: "A country with many people" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Developed",
                statement: "High income, good services.",
              },
            ],
            steps: [
              {
                reasoning: "Developed = wealthy+services.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Wealthy+services",
            commonErrors: ["Confusing size/population with development."],
          },
        },
        {
          id: "edxpg-u3-ctry-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between a more developed and less developed country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Development",
                statement: "Income, health, education differ.",
              },
            ],
            steps: [
              {
                reasoning: "Income difference — higher in MDCs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Healthcare/education — better in MDCs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Infrastructure — better in MDCs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Income + services + infrastructure",
            commonErrors: ["No real differences."],
          },
        },
        {
          id: "edxpg-u3-ctry-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why GDP alone does not measure a country's development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development measures",
                statement: "HDI includes health, education, income.",
              },
            ],
            steps: [
              {
                reasoning: "GDP measures economic output only.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ignores health, education, inequality, environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "HDI gives fuller picture — quality of life.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "GDP=money only; HDI=quality of life",
            commonErrors: ["Thinking GDP = development."],
          },
        },
      ],
    },
    {
      id: "edxpg-u3-oceans",
      title: "Oceans and Seas",
      skill: "Identify the five oceans and their importance.",
      lesson: {
        sections: [
          {
            heading: "The five oceans",
            body: "Earth has five oceans: the Pacific (largest — between Asia/Australia and the Americas), Atlantic (between the Americas and Europe/Africa), Indian (south of Asia, between Africa and Australia), Arctic (around the North Pole — frozen much of the year), and Southern (around Antarctica). Oceans cover ~71% of Earth's surface.",
          },
          {
            heading: "Oceans' importance",
            body: "Oceans are vital: they produce much of Earth's oxygen (phytoplankton), regulate climate (absorb heat and CO2), provide food (fish), transport routes (shipping), and support biodiversity. The ocean floor has mountains, trenches and volcanoes. Plastic pollution and overfishing threaten ocean health.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name the largest ocean.",
          solution: "The Pacific Ocean.",
        },
      },
      questions: [
        {
          id: "edxpg-u3-ocean-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many oceans are there?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "5" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oceans", statement: "Five." },
            ],
            steps: [{ reasoning: "5 oceans.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 5",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edxpg-u3-ocean-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the largest ocean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atlantic" },
              { id: "b", text: "Pacific" },
              { id: "c", text: "Indian" },
              { id: "d", text: "Arctic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oceans",
                statement: "Pacific largest.",
              },
            ],
            steps: [
              { reasoning: "Pacific = largest.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pacific",
            commonErrors: ["Wrong ocean."],
          },
        },
        {
          id: "edxpg-u3-ocean-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways oceans are important to life on Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ocean importance",
                statement: "Oxygen, climate, food, transport.",
              },
            ],
            steps: [
              {
                reasoning: "Produce oxygen / regulate climate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Provide food / transport routes.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Support biodiversity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oxygen+climate+food+transport",
            commonErrors: ["Only one reason."],
          },
        },
        {
          id: "edxpg-u3-ocean-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two threats to ocean health and their causes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ocean threats",
                statement: "Pollution and overfishing.",
              },
            ],
            steps: [
              {
                reasoning: "Plastic pollution — waste dumped in oceans.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Overfishing — taking too many fish.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Effects — harm marine life, disrupt ecosystems.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Plastic+overfishing+effects",
            commonErrors: ["No causes/effects."],
          },
        },
      ],
    },
    {
      id: "edxpg-u3-latlong",
      title: "Latitude and Longitude",
      skill: "Use latitude and longitude to locate places.",
      lesson: {
        sections: [
          {
            heading: "Latitude",
            body: "Latitude measures distance north or south of the equator, in degrees (°). The equator is 0°; the North Pole is 90°N; the South Pole is 90°S. The UK is around 50-60°N. Latitude affects climate — equator is hot, poles are cold.",
          },
          {
            heading: "Longitude",
            body: "Longitude measures distance east or west of the prime meridian (0° through Greenwich, London). Goes up to 180°E and 180°W. The UK is around 0-8°W. Longitude affects time — places east have later sunrises. Together, latitude and longitude give exact coordinates for any place on Earth.",
          },
        ],
        keyFormulas: [
          { name: "Latitude", statement: "0° equator to 90° poles, N/S" },
          { name: "Longitude", statement: "0° Greenwich to 180° E/W" },
        ],
        workedExample: {
          problem: "London is at about 51°N, 0°W. What does this mean?",
          solution: "51° north of equator, on the prime meridian.",
        },
      },
      questions: [
        {
          id: "edxpg-u3-lat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does latitude measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance east/west" },
              { id: "b", text: "Distance north/south of equator" },
              { id: "c", text: "Height above sea level" },
              { id: "d", text: "Distance from poles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Latitude",
                statement: "N/S of equator.",
              },
            ],
            steps: [{ reasoning: "Latitude = N/S.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** N/S of equator",
            commonErrors: ["Confusing with longitude."],
          },
        },
        {
          id: "edxpg-u3-lat-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the prime meridian?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The equator" },
              { id: "b", text: "0° longitude through Greenwich" },
              { id: "c", text: "The North Pole" },
              { id: "d", text: "A type of latitude" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prime meridian",
                statement: "0° longitude at Greenwich.",
              },
            ],
            steps: [
              {
                reasoning: "Prime meridian = 0° longitude.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 0° longitude",
            commonErrors: ["Confusing with equator."],
          },
        },
        {
          id: "edxpg-u3-lat-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how latitude affects climate, using the equator and poles as examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Latitude and climate",
                statement: "Higher latitude = colder.",
              },
            ],
            steps: [
              {
                reasoning: "Equator — direct sunlight, hot.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Poles — slanted sunlight, cold.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "UK at ~55°N — mild temperate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Equator hot, poles cold, UK mild",
            commonErrors: ["No climate link."],
          },
        },
        {
          id: "edxpg-u3-lat-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "New York is at about 40°N, 74°W. The UK is at about 55°N, 2°W. Which is further north and which is further west?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Coordinates",
                statement: "Higher N = further north; higher W = further west.",
              },
            ],
            steps: [
              {
                reasoning: "UK further north — 55°N > 40°N.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "New York further west — 74°W > 2°W.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "UK north; New York west",
            commonErrors: ["Wrong comparison."],
          },
        },
      ],
    },
  ],
};
