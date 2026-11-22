import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edm9-u4-lesson-4-1",
  code: "4-1",
  title: "Grouped Data",
  goal: "I CAN estimate the mean and find the modal class from grouped data, and draw and interpret frequency polygons.",
  standards: ["Y9 Statistics and Probability"],
  vocabulary: [
    { term: "Grouped frequency table", definition: "A table showing how many data values fall into each class interval." },
    { term: "Class interval", definition: "A range of values, such as $10<x\\le20$, used to group continuous data." },
    { term: "Midpoint", definition: "The value halfway between the ends of a class interval, used to represent every value in the class." },
    { term: "Modal class", definition: "The class interval with the highest frequency." },
    { term: "Estimated mean", definition: "An approximation of the mean of grouped data, found using class midpoints: $\\frac{\\sum fx}{\\sum f}$." },
    { term: "Frequency polygon", definition: "A graph made by plotting frequencies against class midpoints and joining the points with straight lines." },
  ],
  concepts: [
    {
      id: "edm9-u4-grouped-mean",
      title: "Estimated mean and modal class",
      skill: "Estimate the mean from a grouped frequency table and identify the modal class.",
      lesson: {
        sections: [
          {
            heading: "Why we can only estimate",
            body: "In a grouped frequency table the individual values are lost: we only know that a value lies somewhere in a class. To estimate the mean we pretend every value in a class equals the **midpoint** of the class. The midpoint of $10<x\\le20$ is $\\frac{10+20}{2}=15$.",
          },
          {
            heading: "Estimating the mean",
            body: "Add a column for the midpoint $x$ and another for $f\\times x$. Then estimated mean $=\\frac{\\sum fx}{\\sum f}$, where $\\sum fx$ is the total of the $f\\times x$ column and $\\sum f$ is the total frequency. Always divide by the total frequency, not by the number of classes.",
          },
          {
            heading: "Modal class and bounds",
            body: "The **modal class** is the class with the greatest frequency (for classes of equal width). Because the real values are unknown, the true mean could be anywhere between the answer found using all lower class boundaries and the answer using all upper class boundaries. This is why the mean from grouped data is only an estimate.",
          },
        ],
        keyFormulas: [
          { name: "Estimated mean", statement: "$\\dfrac{\\sum fx}{\\sum f}$ where $x$ is the class midpoint" },
          { name: "Midpoint", statement: "$\\dfrac{\\text{lower}+\\text{upper}}{2}$" },
        ],
        workedExample: {
          problem: "Time spent on homework: $0<t\\le10$: 4 students; $10<t\\le20$: 6 students; $20<t\\le30$: 10 students. Estimate the mean.",
          solution: "Midpoints are 5, 15 and 25. $\\sum fx=4\\times5+6\\times15+10\\times25=20+90+250=360$. $\\sum f=20$. Estimated mean $=360\\div20=18$ minutes.",
        },
      },
      questions: [
        {
          id: "edm9-u4-grouped-mean-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a grouped frequency table, one class is $10<x\\le20$. What midpoint should be used to estimate the mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "15" },
              { id: "c", text: "20" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Midpoint", statement: "Midpoint $=\\frac{\\text{lower}+\\text{upper}}{2}$." },
            ],
            steps: [
              { reasoning: "Add the class boundaries and halve.", working: "\\frac{10+20}{2}=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 15",
            commonErrors: ["Using an end of the class instead of the midpoint.", "Using the class width, 10, or half of it, 5."],
          },
        },
        {
          id: "edm9-u4-grouped-mean-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The table shows the time, $t$ minutes, that 20 students spent on homework.\n\n- $0<t\\le10$: frequency 4\n- $10<t\\le20$: frequency 6\n- $20<t\\le30$: frequency 10\n\nWork out an estimate for the mean time, in minutes.",
          response: { type: "numeric", parts: [{ label: "Estimated mean", answer: 18, unit: "minutes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "$\\frac{\\sum fx}{\\sum f}$ using class midpoints." },
            ],
            steps: [
              { reasoning: "Multiply each frequency by its class midpoint (5, 15, 25).", working: "4\\times5+6\\times15+10\\times25=20+90+250=360", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total frequency.", working: "360\\div20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18 minutes",
            commonErrors: ["Dividing by 3 (the number of classes).", "Using class boundaries instead of midpoints."],
            examinerNote: "M1 for at least 3 correct products; M1 (dep) for dividing by 20; A1 cao.",
          },
        },
        {
          id: "edm9-u4-grouped-mean-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The table shows the heights, $h$ cm, of 20 plants.\n\n- $150<h\\le160$: frequency 3\n- $160<h\\le170$: frequency 9\n- $170<h\\le180$: frequency 6\n- $180<h\\le190$: frequency 2\n\nWork out an estimate for the mean height. Give your answer in cm.",
          response: { type: "numeric", parts: [{ label: "Estimated mean", answer: 168.5, tolerance: 0.05, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "$\\frac{\\sum fx}{\\sum f}$ using class midpoints." },
            ],
            steps: [
              { reasoning: "Find the midpoints: 155, 165, 175, 185.", working: "x=155,\\,165,\\,175,\\,185", marks: 1, markCode: "B" },
              { reasoning: "Multiply each midpoint by its frequency.", working: "465+1485+1050+370", marks: 1, markCode: "M" },
              { reasoning: "Add to find $\\sum fx$ and divide by $\\sum f=20$.", working: "3370\\div20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "168.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "168.5 cm",
            commonErrors: ["Dividing by 4 instead of 20.", "Using the class with the highest frequency (modal class) as the mean."],
            examinerNote: "Products: 3×155=465, 9×165=1485, 6×175=1050, 2×185=370.",
          },
        },
        {
          id: "edm9-u4-grouped-mean-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The table shows the waiting times, $t$ minutes, of 50 patients at a clinic.\n\n- $0<t\\le5$: frequency 4\n- $5<t\\le10$: frequency 14\n- $10<t\\le15$: frequency 20\n- $15<t\\le20$: frequency 8\n- $20<t\\le25$: frequency 4",
          parts: [
            { label: "a", prompt: "Write down the modal class.", marks: 1 },
            { label: "b", prompt: "Write down the midpoint of the class $15<t\\le20$.", marks: 1 },
            { label: "c", prompt: "Work out an estimate for the mean waiting time, in minutes. Give your answer to 1 decimal place.", marks: 3 },
            { label: "d", prompt: "The manager says, 'The mean waiting time is definitely less than 12 minutes.' By working out the lowest and highest possible means, decide whether the manager is correct.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) midpoint", answer: 17.5 },
              { label: "(c) estimated mean (minutes)", answer: 11.9, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Modal class", statement: "The class with the highest frequency." },
              { kind: "formula", name: "Estimated mean", statement: "$\\frac{\\sum fx}{\\sum f}$ using midpoints." },
              { kind: "principle", name: "Bounds", statement: "Using lower boundaries gives the lowest possible mean and upper boundaries the highest." },
            ],
            steps: [
              { part: "a", reasoning: "The highest frequency is 20.", working: "10<t\\le15", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Halfway between 15 and 20.", working: "\\frac{15+20}{2}=17.5", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Multiply frequencies by midpoints 2.5, 7.5, 12.5, 17.5, 22.5.", working: "10+105+250+140+90=595", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by the total frequency of 50.", working: "595\\div50", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "11.9", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use all lower boundaries (0, 5, 10, 15, 20) for the lowest mean.", working: "(0+70+200+120+80)\\div50=470\\div50=9.4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Use all upper boundaries (5, 10, 15, 20, 25) for the highest mean.", working: "(20+140+300+160+100)\\div50=720\\div50=14.4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The true mean could be anywhere from 9.4 to 14.4, which includes values above 12, so the manager cannot be sure.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $10<t\\le15$. (b) 17.5. (c) 11.9 minutes. (d) The mean lies between 9.4 and 14.4 minutes, so the manager is not necessarily correct.",
            commonErrors: ["In (c), dividing by 5.", "In (d), saying the manager is correct because the estimate is 11.9."],
            examinerNote: "(d) allow ft from the bounds calculations.",
          },
        },
      ],
    },
    {
      id: "edm9-u4-frequency-polygons",
      title: "Frequency polygons and interpreting grouped data",
      skill: "Draw and read frequency polygons and answer questions about grouped data.",
      lesson: {
        sections: [
          {
            heading: "Drawing a frequency polygon",
            body: "Plot the frequency of each class against the **midpoint** of the class, then join the points with straight lines. Do not plot at the class boundaries. A polygon is useful for comparing two sets of data on the same axes.",
          },
          {
            heading: "Reading a polygon",
            body: "Each plotted point gives a class midpoint (x-coordinate) and a frequency (y-coordinate). Add the frequencies to find the total number of values. The highest point shows the modal class. You cannot read off individual values, only how many fall in each class.",
          },
          {
            heading: "Comparing distributions",
            body: "To compare two groups, compare an average (the estimated mean or modal class) and the spread (how widely the data is distributed). Write the comparison in context, for example 'the parcels at depot A are heavier on average'.",
          },
        ],
        keyFormulas: [
          { name: "Point on a frequency polygon", statement: "$(\\text{midpoint},\\ \\text{frequency})$" },
        ],
        workedExample: {
          problem: "The class $20<x\\le30$ has frequency 13. What point is plotted on the frequency polygon?",
          solution: "The midpoint is $\\frac{20+30}{2}=25$, so the point is $(25, 13)$.",
        },
      },
      questions: [
        {
          id: "edm9-u4-frequency-polygons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When drawing a frequency polygon from a grouped frequency table, where on the horizontal axis is each point plotted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the midpoint of each class" },
              { id: "b", text: "At the class width" },
              { id: "c", text: "At the lower end of each class" },
              { id: "d", text: "At the upper end of each class" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Frequency polygon", statement: "Points are plotted at (class midpoint, frequency)." },
            ],
            steps: [
              { reasoning: "The midpoint represents all the values in the class, so points are plotted there.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** At the midpoint of each class",
            commonErrors: ["Plotting at the upper boundary, which is used for cumulative frequency graphs, not polygons."],
          },
        },
        {
          id: "edm9-u4-frequency-polygons-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A grouped frequency table has the class $20<x\\le30$ with frequency 13. A frequency polygon is drawn for the data.\n\nWork out the coordinates of the point plotted for this class.",
          response: {
            type: "numeric",
            parts: [
              { label: "x-coordinate", answer: 25 },
              { label: "y-coordinate", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Frequency polygon", statement: "Points are plotted at (class midpoint, frequency)." },
            ],
            steps: [
              { reasoning: "Find the midpoint of the class.", working: "\\frac{20+30}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the x-coordinate.", working: "25", marks: 1, markCode: "A" },
              { reasoning: "The y-coordinate is the frequency.", working: "13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(25, 13)",
            commonErrors: ["Writing (30, 13) using the upper boundary.", "Writing (13, 25) with the coordinates reversed."],
          },
        },
        {
          id: "edm9-u4-frequency-polygons-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A frequency polygon for the ages of people at a club passes through these points: $(5,3)$, $(15,9)$, $(25,14)$, $(35,6)$ and $(45,3)$. The classes have width 10 and start at 0.\n\nWork out (i) the total number of people at the club and (ii) the percentage of people in the class $20<x\\le30$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) total people", answer: 35 },
              { label: "(ii) percentage in $20<x\\le30$", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Frequency polygon", statement: "The y-coordinates are the class frequencies." },
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage}=\\frac{\\text{part}}{\\text{total}}\\times100$" },
            ],
            steps: [
              { reasoning: "Add the frequencies (the y-coordinates).", working: "3+9+14+6+3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "35", marks: 1, markCode: "A" },
              { reasoning: "The point with midpoint 25 has frequency 14. Write as a percentage of the total.", working: "\\frac{14}{35}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) 35 people. (ii) 40%",
            commonErrors: ["Adding the midpoints instead of the frequencies.", "Using 14 out of 100."],
          },
        },
        {
          id: "edm9-u4-frequency-polygons-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Depot A sends 40 parcels. The table shows the masses, $m$ kg, of the parcels.\n\n- $0<m\\le2$: frequency 5\n- $2<m\\le4$: frequency 11\n- $4<m\\le6$: frequency 14\n- $6<m\\le8$: frequency 7\n- $8<m\\le10$: frequency 3\n\nA frequency polygon is drawn for this data. Depot B has an estimated mean parcel mass of 4.1 kg.",
          parts: [
            { label: "a", prompt: "Write down the x-coordinate of the point plotted for the class $4<m\\le6$.", marks: 1 },
            { label: "b", prompt: "Work out how many parcels have a mass greater than 6 kg.", marks: 2 },
            { label: "c", prompt: "Work out the percentage of parcels with a mass of 4 kg or less.", marks: 2 },
            { label: "d", prompt: "Work out an estimate for the mean mass of the parcels at depot A. Hence compare the typical parcel mass at depot A with that at depot B.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x-coordinate", answer: 5 },
              { label: "(b) parcels over 6 kg", answer: 10 },
              { label: "(c) percentage (%)", answer: 40 },
              { label: "(d) estimated mean (kg)", answer: 4.6, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Frequency polygon", statement: "Points are plotted at (class midpoint, frequency)." },
              { kind: "formula", name: "Estimated mean", statement: "$\\frac{\\sum fx}{\\sum f}$ using midpoints." },
            ],
            steps: [
              { part: "a", reasoning: "Midpoint of 4 and 6.", working: "5", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the frequencies of the last two classes.", working: "7+3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Parcels of 4 kg or less are in the first two classes: 5 + 11 = 16. Divide by 40.", working: "\\frac{16}{40}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "40", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply frequencies by midpoints 1, 3, 5, 7, 9 and divide by 40.", working: "(5+33+70+49+27)\\div40=184\\div40", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "4.6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compare in context: 4.6 kg is greater than 4.1 kg, so parcels at depot A are heavier on average.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 5. (b) 10 parcels. (c) 40%. (d) 4.6 kg; parcels at depot A are heavier on average than at depot B.",
            commonErrors: ["In (c), including the class $4<m\\le6$.", "In (d), comparing without referring to the context."],
            examinerNote: "(d) the comparison must be in context and use both means.",
          },
        },
      ],
    },
  ],
};
