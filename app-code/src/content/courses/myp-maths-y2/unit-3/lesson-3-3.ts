import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypm2-u3-lesson-3-3",
  code: "3-3",
  title: "Data Handling and Probability",
  goal: "I CAN estimate the mean from grouped data, compare distributions and describe correlation, and find probabilities using sample spaces, mutually exclusive events, two-way tables and Venn diagrams.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
    "MYP Maths: Statistics and probability",
  ],
  vocabulary: [
    { term: "Class interval", definition: "A range of values used to group data, for example $10 < t \\le 20$." },
    { term: "Modal class", definition: "The class interval with the highest frequency." },
    { term: "Correlation", definition: "The type of relationship shown by a scatter graph: positive (both increase), negative (one increases as the other decreases) or none." },
    { term: "Sample space", definition: "The list or table of all possible outcomes of an experiment." },
    { term: "Mutually exclusive events", definition: "Events that cannot happen at the same time. For these, $P(A \\text{ or } B)=P(A)+P(B)$." },
    { term: "Expected outcomes", definition: "The number of times an event is expected to happen: probability multiplied by the number of trials." },
    { term: "Intersection and union", definition: "$A\\cap B$ is the set of items in both $A$ and $B$. $A\\cup B$ is the set of items in $A$ or $B$ or both." },
  ],
  concepts: [
    {
      id: "mypm2-u3-grouped-data",
      title: "Grouped data, comparing distributions and scatter graphs",
      skill: "Estimate the mean from a grouped frequency table, find the modal class, compare two distributions and describe correlation.",
      lesson: {
        sections: [
          {
            heading: "Grouped frequency tables",
            body: "When data is grouped, the exact values are lost, so the mean can only be **estimated**. Use the midpoint of each class as its value. Multiply each midpoint by its frequency, add these up, and divide by the total frequency. The **modal class** is the class with the highest frequency.",
          },
          {
            heading: "Comparing distributions",
            body: "To compare two sets of data, make one comment about an average (the mean or median) and one about the spread (the range). For example: \"Class A has a higher mean, so they scored higher on average. Class A has a smaller range, so the scores are more consistent.\" Always write your comparison in the context of the question.",
          },
          {
            heading: "Scatter graphs and correlation",
            body: "A scatter graph plots pairs of values. If the points rise from bottom left to top right there is **positive correlation**. If they fall, there is **negative correlation**. If there is no pattern there is **no correlation**. The closer the points are to a straight line, the stronger the correlation. Correlation does not prove that one thing causes the other.",
          },
        ],
        keyFormulas: [
          { name: "Estimated mean", statement: "$\\dfrac{\\sum(\\text{midpoint}\\times\\text{frequency})}{\\sum\\text{frequency}}$" },
          { name: "Midpoint of a class", statement: "$\\dfrac{\\text{lower bound}+\\text{upper bound}}{2}$" },
        ],
        workedExample: {
          problem: "Heights: $0 < h \\le 10$ has frequency 2 and $10 < h \\le 20$ has frequency 3. Estimate the mean.",
          solution: "Midpoints are $5$ and $15$. $\\sum fx=2\\times5+3\\times15=10+45=55$. Total frequency $=5$. Estimated mean $=55\\div5=11$.",
        },
      },
      questions: [
        {
          id: "mypm2-u3-grouped-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The heights of 20 plants are grouped: $150 \\le h < 160$ has frequency 4, $160 \\le h < 170$ has frequency 9, and $170 \\le h < 180$ has frequency 7. What is the modal class?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$170 \\le h < 180$" },
              { id: "b", text: "$160 \\le h < 170$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$150 \\le h < 160$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Modal class", statement: "The modal class is the class interval with the highest frequency." },
            ],
            steps: [
              { reasoning: "The highest frequency is 9, which belongs to the class $160 \\le h < 170$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $160 \\le h < 170$",
            commonErrors: ["Giving the frequency 9 instead of the class interval (answer d).", "Choosing the class with the greatest values."],
          },
        },
        {
          id: "mypm2-u3-grouped-data-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Twenty students sat a quiz. Marks $0 < x \\le 10$: frequency 4. Marks $10 < x \\le 20$: frequency 6. Marks $20 < x \\le 30$: frequency 10. Estimate the mean mark.",
          response: { type: "numeric", parts: [{ label: "Estimated mean", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$, using class midpoints for $x$." },
            ],
            steps: [
              { reasoning: "Multiply each midpoint (5, 15, 25) by its frequency and add.", working: "4\\times5+6\\times15+10\\times25=20+90+250=360", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total frequency of 20.", working: "360\\div20=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Dividing by the number of classes (3) instead of the total frequency.", "Using the upper class boundaries instead of the midpoints."],
          },
        },
        {
          id: "mypm2-u3-grouped-data-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The times taken by 20 runners, in minutes, are grouped: $10 \\le t < 20$ has frequency 3, $20 \\le t < 30$ has frequency 5, $30 \\le t < 40$ has frequency 8, and $40 \\le t < 50$ has frequency 4. Work out an estimate of the mean time, in minutes.",
          response: { type: "numeric", parts: [{ label: "Estimated mean", answer: 31.5, unit: "minutes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$, using class midpoints for $x$." },
            ],
            steps: [
              { reasoning: "Find the midpoints: 15, 25, 35 and 45.", working: "\\frac{10+20}{2}=15,\\ 25,\\ 35,\\ 45", marks: 1, markCode: "B" },
              { reasoning: "Multiply by the frequencies and add.", working: "45+125+280+180=630", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total frequency of 20.", working: "630\\div20=31.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$31.5$ minutes",
            commonErrors: ["Using the class widths (10) or lower bounds as the values.", "Dividing by 4 or by the sum of the midpoints."],
          },
        },
        {
          id: "mypm2-u3-grouped-data-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Mia compares the times taken to complete a puzzle, in minutes, by two groups of 20 students. Group A: $0 < t \\le 10$ has frequency 2, $10 < t \\le 20$ has frequency 6, $20 < t \\le 30$ has frequency 8, and $30 < t \\le 40$ has frequency 4. The shortest time in Group A was 3 minutes and the longest was 38 minutes. Group B has a mean time of 25 minutes and a range of 12 minutes. Mia also draws a scatter graph of hours spent practising each week against puzzle time for 15 students. The points fall from the top left to the bottom right, close to a straight line.",
          parts: [
            { label: "a", prompt: "Work out an estimate of the mean time for Group A.", marks: 2 },
            { label: "b", prompt: "Work out the range of times for Group A.", marks: 1 },
            { label: "c", prompt: "Compare the two groups, using an average and the range.", marks: 2 },
            { label: "d", prompt: "Describe the correlation shown on the scatter graph, say what it means in context, and explain why Mia should be careful about predicting for 40 hours of practice.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Estimated mean of Group A", answer: 22, unit: "minutes" },
              { label: "(b) Range of Group A", answer: 35, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$, using class midpoints." },
              { kind: "definition", name: "Range", statement: "Range $=$ largest value $-$ smallest value." },
              { kind: "principle", name: "Comparing data", statement: "Compare an average and a measure of spread, in context." },
              { kind: "definition", name: "Correlation", statement: "Points falling from top left to bottom right show negative correlation." },
            ],
            steps: [
              { part: "a", reasoning: "Midpoints are 5, 15, 25 and 35. Multiply by frequencies and add.", working: "2\\times5+6\\times15+8\\times25+4\\times35=10+90+200+140=440", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by 20.", working: "440\\div20=22", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the shortest time from the longest.", working: "38-3=35", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Compare the averages: Group A has a lower mean time (22 against 25), so Group A was quicker on average.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Compare the spreads: Group B has a smaller range (12 against 35), so Group B's times were more consistent.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The correlation is negative: more practice goes with a shorter time.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "In context, students who practise more tend to finish the puzzle faster.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "40 hours is far outside the data, and the line cannot keep going forever (times cannot be negative), so the prediction is unreliable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $22$ minutes (b) $35$ minutes (c) Group A quicker on average (mean 22 against 25) but Group B more consistent (range 12 against 35) (d) negative correlation; more practice tends to give shorter times; 40 hours is outside the data range",
            commonErrors: ["Using the class boundaries instead of the largest and smallest values to find the range.", "Comparing without referring to the context.", "Saying the graph shows that practice causes quicker times with no caution."],
            examinerNote: "In (c) accept any correct comparison that uses one average and one spread, in context.",
          },
        },
        {
          id: "mypm2-u3-grouped-data-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A frequency table groups the masses of 30 parcels: $0 < m \\le 2$ has frequency 5, $2 < m \\le 4$ has frequency 11, $4 < m \\le 6$ has frequency 9, and $6 < m \\le 8$ has frequency 5. What is the modal class?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6 < m \\le 8$" },
              { id: "b", text: "$2 < m \\le 4$" },
              { id: "c", text: "$0 < m \\le 2$" },
              { id: "d", text: "$4 < m \\le 6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Modal class", statement: "The modal class is the class interval with the highest frequency." },
            ],
            steps: [
              { reasoning: "The highest frequency is 11, in the class $2 < m \\le 4$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2 < m \\le 4$",
            commonErrors: ["Choosing the class with the greatest upper bound."],
          },
        },
        {
          id: "mypm2-u3-grouped-data-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The ages of 10 people are grouped: $10 < a \\le 20$ has frequency 2 and $20 < a \\le 30$ has frequency 8. Estimate the mean age.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$26$" },
              { id: "c", text: "$23$" },
              { id: "d", text: "$25$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$ using midpoints 15 and 25." },
            ],
            steps: [
              { reasoning: "$\\sum fx=2\\times15+8\\times25=30+200=230$; divide by the total frequency 10.", working: "230\\div10=23", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $23$",
            commonErrors: ["Using 15 as the midpoint of the second class."],
          },
        },
        {
          id: "mypm2-u3-grouped-data-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The lengths of 24 pencils, in cm, are grouped: $5 < l \\le 10$ has frequency 4, $10 < l \\le 15$ has frequency 8, $15 < l \\le 20$ has frequency 10, and $20 < l \\le 25$ has frequency 2. Which value is closest to the estimated mean length?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12.5\\ \\text{cm}$" },
              { id: "b", text: "$10\\ \\text{cm}$" },
              { id: "c", text: "$14.6\\ \\text{cm}$" },
              { id: "d", text: "$17.5\\ \\text{cm}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$ using midpoints." },
            ],
            steps: [
              { reasoning: "Midpoints 7.5, 12.5, 17.5, 22.5; $\\sum fx=350$, mean $=350\\div24\\approx14.6$.", working: "350\\div24\\approx14.6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $14.6\\ \\text{cm}$",
            commonErrors: ["Dividing by 4 classes instead of 24 pencils.", "Using the upper bounds instead of midpoints."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm2-u3-grouped-data-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A scatter graph plots the number of hours of revision against test score for 20 students. The points rise steadily from bottom left to top right. Describe the correlation and what it suggests.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive correlation — more revision is associated with higher scores" },
              { id: "b", text: "Negative correlation — more revision means lower scores" },
              { id: "c", text: "Perfect correlation — revision causes every score increase" },
              { id: "d", text: "No correlation — revision has no effect on scores" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation", statement: "Points rising from bottom left to top right show positive correlation." },
            ],
            steps: [
              { reasoning: "The points rise, so the correlation is positive; more revision is associated with higher scores, though correlation alone does not prove cause.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Positive correlation — more revision is associated with higher scores",
            commonErrors: ["Choosing (d): correlation does not prove cause."],
          },
        },
        {
          id: "mypm2-u3-grouped-data-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the mean of grouped data can only be an estimate, not the exact mean.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Grouped data", statement: "Grouping replaces exact values with class intervals, so individual values are lost." },
            ],
            steps: [
              { reasoning: "The exact data values are not recorded; we only know which class interval each value lies in.", marks: 1, markCode: "R" },
              { reasoning: "Using the midpoint assumes every value in a class equals the midpoint, which is only an approximation, so the mean is an estimate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Exact values are lost when data is grouped; midpoints are only approximations, so the mean is estimated.",
            commonErrors: ["Saying grouping makes the data inaccurate rather than approximate."],
            examinerNote: "Both the 'values lost' and the 'midpoint assumption' ideas are needed.",
          },
        },
        {
          id: "mypm2-u3-grouped-data-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two scatter graphs are drawn: graph P shows points scattered randomly with no pattern; graph Q shows points close to a downward-sloping line. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Graph P shows negative correlation and graph Q shows no correlation" },
              { id: "b", text: "Both graphs show negative correlation" },
              { id: "c", text: "Graph P shows no correlation and graph Q shows negative correlation" },
              { id: "d", text: "Graph Q shows positive correlation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation", statement: "A downward trend is negative correlation; scattered points with no trend show no correlation." },
            ],
            steps: [
              { reasoning: "Random scatter means no correlation; a downward line means negative correlation.", working: "P: none; Q: negative", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Graph P shows no correlation and graph Q shows negative correlation",
            commonErrors: ["Reading 'downward' as positive because values are increasing."],
          },
        },
        {
          id: "mypm2-u3-grouped-data-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The reaction times of 16 students, in seconds, are grouped: $0.2 < t \\le 0.4$ has frequency 3, $0.4 < t \\le 0.6$ has frequency 5, $0.6 < t \\le 0.8$ has frequency 6, and $0.8 < t \\le 1.0$ has frequency 2. Estimate the mean reaction time.",
          response: { type: "numeric", parts: [{ label: "Estimated mean", answer: 0.59, tolerance: 0.01, unit: "seconds" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$ using midpoints." },
            ],
            steps: [
              { reasoning: "Midpoints are 0.3, 0.5, 0.7 and 0.9.", working: "\\frac{0.2+0.4}{2}=0.3,\\ 0.5,\\ 0.7,\\ 0.9", marks: 1, markCode: "B" },
              { reasoning: "$\\sum fx=3\\times0.3+5\\times0.5+6\\times0.7+2\\times0.9=0.9+2.5+4.2+1.8=9.4$.", working: "9.4", marks: 1, markCode: "M" },
              { reasoning: "Divide by 16.", working: "9.4\\div16=0.5875\\approx0.59", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About $0.59$ seconds",
            commonErrors: ["Using 0.2, 0.4, 0.6, 0.8 as the values instead of midpoints."],
            examinerNote: "Accept 0.5875 or 0.59.",
          },
        },
        {
          id: "mypm2-u3-grouped-data-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two groups of students sat the same test. Group X: estimated mean 62, range 30. Group Y: estimated mean 58, range 18. Write a two-part comparison of the groups, using an average and a measure of spread, in context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing distributions", statement: "Compare an average (mean or median) and a spread (range)." },
            ],
            steps: [
              { reasoning: "Average comparison: Group X has the higher mean (62 against 58), so Group X scored higher on average.", marks: 1, markCode: "R" },
              { reasoning: "Spread comparison: Group Y has the smaller range (18 against 30), so Group Y's scores were more consistent.", marks: 1, markCode: "R" },
              { reasoning: "Both comments refer to the context (test scores) and use an average plus a spread.", marks: 1, markCode: "A" },
              { reasoning: "The two comments do not contradict each other: higher average does not mean more consistent.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Group X scored higher on average (mean 62 vs 58), but Group Y's scores were more consistent (range 18 vs 30).",
            commonErrors: ["Only comparing the means, or comparing without context."],
            examinerNote: "Need one average comment and one spread comment, in context.",
          },
        },
        {
          id: "mypm2-u3-grouped-data-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scatter graph shows a strong positive correlation between hours of sleep and concentration score. Explain two reasons why the school should not conclude that more sleep causes better concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation and causation", statement: "Correlation shows an association; it does not prove that one variable causes the other." },
            ],
            steps: [
              { reasoning: "Correlation is an association between two variables; it does not by itself establish a cause-and-effect link.", marks: 1, markCode: "R" },
              { reasoning: "A third variable could explain both, for example students who sleep more may also have better routines or healthier diets.", marks: 1, markCode: "R" },
              { reasoning: "The relationship might even run the other way: better concentration could help students sleep better.", marks: 1, markCode: "R" },
              { reasoning: "Only a controlled experiment could test whether changing sleep directly changes concentration.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Correlation is not causation; a third factor could explain both variables, the direction of cause is unclear, and only an experiment could confirm it.",
            commonErrors: ["Saying correlation proves cause."],
            examinerNote: "Need two distinct reasons, e.g. third variable and reverse causation.",
          },
        },
        {
          id: "mypm2-u3-grouped-data-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The daily rainfall, in mm, at two weather stations over 30 days is grouped. Station A: $0 < r \\le 5$ has frequency 6, $5 < r \\le 10$ has frequency 9, $10 < r \\le 15$ has frequency 10, $15 < r \\le 20$ has frequency 5. The driest day at A was 1 mm and the wettest was 19 mm. Station B has a mean of 9 mm and a range of 14 mm.",
          parts: [
            { label: "a", prompt: "Work out an estimate of the mean rainfall at station A.", marks: 2 },
            { label: "b", prompt: "Work out the range of rainfall at station A.", marks: 1 },
            { label: "c", prompt: "Compare the two stations using an average and the range, in context.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Estimated mean at A", answer: 9.83, tolerance: 0.1, unit: "mm" },
              { label: "(b) Range at A", answer: 18, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$ using midpoints." },
              { kind: "definition", name: "Range", statement: "Range $=$ largest $-$ smallest." },
            ],
            steps: [
              { part: "a", reasoning: "Midpoints 2.5, 7.5, 12.5, 17.5; $\\sum fx=6\\times2.5+9\\times7.5+10\\times12.5+5\\times17.5$.", working: "15+67.5+125+87.5=295", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by 30.", working: "295\\div30=9.83\\approx9.8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the driest from the wettest.", working: "19-1=18", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Average: means are nearly equal (9.8 against 9), so the average daily rainfall is similar.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Spread: station A has a larger range (18 against 14), so A's rainfall varied more.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Both comments are in context (rainfall at the weather stations).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) about $9.8$ mm (b) $18$ mm (c) similar average rainfall, but station A's rainfall was more variable",
            commonErrors: ["Using the class widths instead of largest-minus-smallest for the range."],
            examinerNote: "In (c) accept any correct average-plus-spread comparison in context.",
          },
        },
        {
          id: "mypm2-u3-grouped-data-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The times taken by 40 students to run 100 m, in seconds, are grouped: $10 < t \\le 12$ has frequency 5, $12 < t \\le 14$ has frequency 11, $14 < t \\le 16$ has frequency 14, $16 < t \\le 18$ has frequency 7, and $18 < t \\le 20$ has frequency 3.",
          parts: [
            { label: "a", prompt: "Work out an estimate of the mean time.", marks: 2 },
            { label: "b", prompt: "State the modal class.", marks: 1 },
            { label: "c", prompt: "Estimate how many students ran faster than 14 seconds.", marks: 1 },
            { label: "d", prompt: "Explain why the estimated mean is not the exact mean.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Estimated mean", answer: 14.6, tolerance: 0.01, unit: "seconds" },
              { label: "(c) Students faster than 14 s", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$ using midpoints." },
              { kind: "definition", name: "Modal class", statement: "The class with the highest frequency." },
            ],
            steps: [
              { part: "a", reasoning: "Midpoints 11, 13, 15, 17, 19; $\\sum fx=5\\times11+11\\times13+14\\times15+7\\times17+3\\times19$.", working: "55+143+210+119+57=584", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by 40.", working: "584\\div40=14.6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Highest frequency is 14, in class $14 < t \\le 16$.", working: "14 < t \\le 16", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Faster than 14 s means $t \\le 14$: frequencies 5 + 11.", working: "5+11=16", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Exact times are lost in grouping; midpoints are assumed for every value in each class.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "So the calculated mean is an estimate of the true mean.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $14.6$ seconds (b) $14 < t \\le 16$ (c) 16 students (d) exact values are replaced by midpoints, so the mean is estimated",
            commonErrors: ["In (c) counting only the first class or adding all classes."],
            examinerNote: "In (a) accept 14.6.",
          },
        },
        {
          id: "mypm2-u3-grouped-data-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two groups of 25 students each completed a puzzle. Group P times, in minutes: $0 < t \\le 5$ has frequency 3, $5 < t \\le 10$ has frequency 8, $10 < t \\le 15$ has frequency 9, $15 < t \\le 20$ has frequency 5. Group Q has a mean of 12 minutes and a range of 11 minutes. For Group P, the shortest time was 2 minutes and the longest was 19 minutes. A scatter graph of 'number of attempts' against 'time taken' for 20 students shows points falling from top left to bottom right.",
          parts: [
            { label: "a", prompt: "Work out an estimate of the mean time for Group P.", marks: 2 },
            { label: "b", prompt: "Work out the range of times for Group P.", marks: 1 },
            { label: "c", prompt: "Compare Group P and Group Q using an average and a spread, in context.", marks: 2 },
            { label: "d", prompt: "Describe the correlation on the scatter graph, explain what it means in context, and give one reason why it does not prove that more attempts cause quicker times.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Estimated mean of P", answer: 10.7, tolerance: 0.1, unit: "minutes" },
              { label: "(b) Range of P", answer: 17, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Estimated mean", statement: "Mean $\\approx\\sum fx\\div\\sum f$ using midpoints." },
              { kind: "definition", name: "Range", statement: "Range $=$ largest $-$ smallest." },
              { kind: "definition", name: "Correlation", statement: "A downward trend is negative correlation." },
            ],
            steps: [
              { part: "a", reasoning: "Midpoints 2.5, 7.5, 12.5, 17.5; $\\sum fx=3\\times2.5+8\\times7.5+9\\times12.5+5\\times17.5$.", working: "7.5+60+112.5+87.5=267.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by 25.", working: "267.5\\div25=10.7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract shortest from longest.", working: "19-2=17", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Average: Group Q has a higher mean (12 against 10.7), so Q took longer on average.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Spread: Group Q has a smaller range (11 against 17), so Q's times were more consistent.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Negative correlation: more attempts go with shorter times.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "In context, students who try more times tend to finish faster.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Correlation is not causation — a third factor (e.g. ability or motivation) could explain both, or the faster students simply had more attempts.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $10.7$ minutes (b) $17$ minutes (c) Group Q slower on average but more consistent (d) negative correlation; more attempts tend to mean quicker times; correlation does not prove cause",
            commonErrors: ["Comparing the groups without using the context of puzzle times."],
            examinerNote: "In (d) the last R mark needs a valid reason correlation is not causation.",
          },
        },
      ],
    },
    {
      id: "mypm2-u3-probability-sets",
      title: "Sample spaces, mutually exclusive events, two-way tables and Venn diagrams",
      skill: "Find probabilities using sample spaces, the rule for events not happening, mutually exclusive events, expected outcomes, two-way tables and Venn diagrams.",
      lesson: {
        sections: [
          {
            heading: "Sample spaces and complements",
            body: "A **sample space diagram** lists every outcome of two events. Two fair dice give $6\\times6=36$ equally likely outcomes. Then $P(\\text{event})=\\frac{\\text{outcomes in the event}}{\\text{total outcomes}}$. The probability that an event does **not** happen is $P(\\text{not }A)=1-P(A)$, because the probabilities of all outcomes add up to 1.",
          },
          {
            heading: "Mutually exclusive events and expected outcomes",
            body: "Events that cannot happen together are **mutually exclusive**, for example a single counter being red or blue. For these, $P(A\\text{ or }B)=P(A)+P(B)$. The expected number of times an event happens in $n$ trials is $n\\times P(\\text{event})$. This is an average, not a guarantee.",
          },
          {
            heading: "Two-way tables and Venn diagrams",
            body: "A two-way table sorts people by two features, such as year group and travel method, and the rows and columns add up to totals. In a Venn diagram, fill in the overlap $A\\cap B$ first, then subtract it from each set total to find the \"only\" regions. The number in at least one set is $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$, and the rest are outside both sets.",
          },
        ],
        keyFormulas: [
          { name: "Complement", statement: "$P(\\text{not }A)=1-P(A)$" },
          { name: "Mutually exclusive events", statement: "$P(A\\text{ or }B)=P(A)+P(B)$" },
          { name: "Expected outcomes", statement: "$n\\times P(\\text{event})$" },
          { name: "Union of two sets", statement: "$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$" },
        ],
        workedExample: {
          problem: "Two fair dice are rolled. Find the probability that the total is 5.",
          solution: "The outcomes giving a total of 5 are $(1,4),(2,3),(3,2),(4,1)$, which is 4 outcomes out of 36. $P=\\frac{4}{36}=\\frac19$.",
        },
      },
      questions: [
        {
          id: "mypm2-u3-probability-sets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The probability that it rains tomorrow is $0.35$. What is the probability that it does not rain tomorrow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.65$" },
              { id: "b", text: "$1.35$" },
              { id: "c", text: "$0.35$" },
              { id: "d", text: "$0.55$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Complement rule", statement: "$P(\\text{not }A)=1-P(A)$." },
            ],
            steps: [
              { reasoning: "Subtract the probability of rain from 1.", working: "1-0.35=0.65", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $0.65$",
            commonErrors: ["Giving the same probability (answer a).", "Subtracting from the wrong total or adding to 1 (answer d)."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two fair dice are rolled and the scores are added. Work out the probability that the total is 7. Give your answer as a decimal correct to 3 decimal places.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.167, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equally likely outcomes", statement: "$P=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$. Two dice give 36 outcomes." },
            ],
            steps: [
              { reasoning: "From the sample space the total 7 comes from (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 outcomes out of 36.", working: "\\frac{6}{36}", marks: 1, markCode: "M" },
              { reasoning: "Simplify and write as a decimal.", working: "\\frac16=0.167", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac16\\approx0.167$",
            commonErrors: ["Using 12 as the number of outcomes.", "Counting only 3 outcomes and forgetting the reversed pairs."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a class of 40 students, 22 play football, 15 play tennis and 8 play both sports. Work out how many students play neither sport.",
          response: { type: "numeric", parts: [{ label: "Students playing neither", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union of two sets", statement: "$n(F\\cup T)=n(F)+n(T)-n(F\\cap T)$." },
            ],
            steps: [
              { reasoning: "Students who play at least one sport. Subtract the overlap so that students playing both are not counted twice.", working: "22+15-8=29", marks: 1, markCode: "M" },
              { reasoning: "Subtract from the class total.", working: "40-29", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$ students",
            commonErrors: ["Adding $22+15=37$ and getting 3, double counting the 8.", "Using 14 and 7 (the \"only\" regions) as the total."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bag contains red, blue and green counters. A counter is taken at random, its colour recorded, and it is put back. The probability of red is $0.3$ and the probability of blue is $0.45$. Separately, in a year group of 60 students, $F$ is the set of students who study French and $S$ is the set who study Spanish. $n(F)=28$, $n(S)=24$ and $n(F\\cap S)=10$.",
          parts: [
            { label: "a", prompt: "Work out the probability of taking a green counter.", marks: 1 },
            { label: "b", prompt: "Work out the probability of taking a red or a blue counter. Explain why you can add the probabilities.", marks: 1 },
            { label: "c", prompt: "A counter is taken 200 times. Work out the expected number of red counters.", marks: 2 },
            { label: "d", prompt: "Work out $n(F\\cup S)$, the number of students who study at least one of the languages.", marks: 2 },
            { label: "e", prompt: "A student is chosen at random from the year group. Work out the probability that the student studies neither language.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(green)", answer: 0.25 },
              { label: "(b) P(red or blue)", answer: 0.75 },
              { label: "(c) Expected red counters", answer: 60 },
              { label: "(d) n(F union S)", answer: 42 },
              { label: "(e) P(neither)", answer: 0.3, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Probabilities sum to 1", statement: "The probabilities of all the outcomes add up to 1." },
              { kind: "property", name: "Mutually exclusive events", statement: "$P(A\\text{ or }B)=P(A)+P(B)$ when $A$ and $B$ cannot both happen." },
              { kind: "formula", name: "Expected outcomes", statement: "Expected number $=n\\times P(\\text{event})$." },
              { kind: "formula", name: "Union of two sets", statement: "$n(F\\cup S)=n(F)+n(S)-n(F\\cap S)$." },
            ],
            steps: [
              { part: "a", reasoning: "The three colours cover all outcomes, so the probabilities add up to 1.", working: "1-0.3-0.45=0.25", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A counter cannot be both red and blue, so the events are mutually exclusive and the probabilities can be added.", working: "0.3+0.45=0.75", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Multiply the number of trials by the probability of red.", working: "200\\times0.3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "60", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add the sets and subtract the overlap, which has been counted twice.", working: "28+24-10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "42", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The number who study neither is the year group total minus those studying at least one: $60-42=18$.", working: "60-42=18", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Write as a probability.", working: "\\frac{18}{60}=0.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.25$ (b) $0.75$, mutually exclusive (c) $60$ (d) $42$ (e) $\\frac{18}{60}=0.3$",
            commonErrors: ["Multiplying the probabilities in (b).", "Adding 28 and 24 to get 52 in (d) without subtracting the overlap.", "Using 42 instead of 18 as the number studying neither."],
            examinerNote: "In (b) the reason (mutually exclusive, or a counter cannot be two colours) is needed for the mark.",
          },
        },
        {
          id: "mypm2-u3-probability-sets-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The probability of picking a red card from a deck is $\\frac{1}{4}$. What is the probability of not picking a red card?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac34$" },
              { id: "b", text: "$\\frac12$" },
              { id: "c", text: "$\\frac14$" },
              { id: "d", text: "$\\frac54$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Complement rule", statement: "$P(\\text{not }A)=1-P(A)$." },
            ],
            steps: [
              { reasoning: "Subtract from 1.", working: "1-\\frac14=\\frac34", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac34$",
            commonErrors: ["Giving $\\frac14$ (the same probability)."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two fair coins are tossed. Work out the probability of getting exactly one head. Give your answer as a fraction in its simplest form.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.5, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sample space", statement: "Two coins give 4 equally likely outcomes: HH, HT, TH, TT." },
            ],
            steps: [
              { reasoning: "Exactly one head comes from HT and TH: 2 outcomes out of 4.", working: "\\frac24", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac12=0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac12$",
            commonErrors: ["Counting only HT, forgetting TH."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner has 8 equal sectors: 3 are red, 2 are blue and 3 are green. Work out the probability of spinning red or blue.",
          response: { type: "numeric", parts: [{ label: "P(red or blue)", answer: 0.625, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Mutually exclusive events", statement: "$P(A\\text{ or }B)=P(A)+P(B)$ for events that cannot both happen." },
            ],
            steps: [
              { reasoning: "Red and blue are mutually exclusive: $\\frac38+\\frac28=\\frac58$.", working: "\\frac38+\\frac28=\\frac58", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "\\frac58=0.625", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac58=0.625$",
            commonErrors: ["Multiplying the probabilities instead of adding."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The probability that a basketball player scores a free throw is $0.7$. She takes 50 free throws. What is the expected number of successful throws?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.7$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$50$" },
              { id: "d", text: "$35$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected outcomes", statement: "Expected number $=n\\times P(\\text{event})$." },
            ],
            steps: [
              { reasoning: "Multiply trials by probability: $50\\times0.7=35$.", working: "50\\times0.7=35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $35$ successful throws",
            commonErrors: ["Dividing instead of multiplying.", "Answering with the probability itself (answer c)."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u3-probability-sets-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a class of 30 students, 18 play hockey, 12 play cricket and 5 play both. What is $n(H\\cap C)$, the number who play both sports?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$25$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intersection", statement: "$H\\cap C$ is the set of students who play both sports." },
            ],
            steps: [
              { reasoning: "The overlap is given directly as 5 students.", working: "n(H\\cap C)=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Computing $18+12-30=0$ or adding the sets wrongly."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why $P(A\\text{ or }B)=P(A)+P(B)$ works for mutually exclusive events, but not in general.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mutually exclusive", statement: "Events that cannot happen at the same time." },
            ],
            steps: [
              { reasoning: "If $A$ and $B$ cannot both happen, no outcome is counted twice, so the probabilities simply add.", marks: 1, markCode: "R" },
              { reasoning: "If the events can overlap, outcomes in both $A$ and $B$ would be counted twice; you must subtract $P(A\\cap B)$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Adding works when there is no overlap; otherwise the shared outcomes are counted twice and must be subtracted.",
            commonErrors: ["Saying the rule always works."],
            examinerNote: "Need both the 'no double counting' idea and the 'overlap must be subtracted' idea.",
          },
        },
        {
          id: "mypm2-u3-probability-sets-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bag contains 5 red, 3 blue and 2 green counters. One counter is taken at random. Work out the probability that it is not green.",
          response: { type: "numeric", parts: [{ label: "P(not green)", answer: 0.8, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Complement rule", statement: "$P(\\text{not }A)=1-P(A)$." },
            ],
            steps: [
              { reasoning: "Total counters $=10$; $P(\\text{green})=\\frac{2}{10}=0.2$.", working: "\\frac{2}{10}", marks: 1, markCode: "M" },
              { reasoning: "Subtract from 1.", working: "1-0.2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate (equivalently $\\frac{8}{10}$).", working: "0.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.8$ (or $\\frac45$)",
            commonErrors: ["Giving $\\frac{2}{10}$ instead of the complement."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two events $A$ and $B$ are NOT mutually exclusive, with $P(A)=0.4$, $P(B)=0.5$ and $P(A\\cap B)=0.2$. What is $P(A\\text{ or }B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.7$" },
              { id: "b", text: "$0.1$" },
              { id: "c", text: "$0.9$" },
              { id: "d", text: "$1.1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." },
            ],
            steps: [
              { reasoning: "Add and subtract the overlap: $0.4+0.5-0.2=0.7$.", working: "0.4+0.5-0.2=0.7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0.7$",
            commonErrors: ["Adding without subtracting the intersection, giving 0.9 (a)."],
          },
        },
        {
          id: "mypm2-u3-probability-sets-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A number is chosen at random from 1 to 20. Work out the probability that the number is a multiple of 3 or a multiple of 5.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.45, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counting outcomes", statement: "Count multiples of 3, multiples of 5, and multiples of both (15)." },
            ],
            steps: [
              { reasoning: "Multiples of 3: 3,6,9,12,15,18 (6). Multiples of 5: 5,10,15,20 (4). Multiples of both (15): 15 only (1).", working: "6+4-1=9", marks: 1, markCode: "M" },
              { reasoning: "Total favourable outcomes $=9$ out of 20.", working: "\\frac{9}{20}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "0.45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{9}{20}=0.45$",
            commonErrors: ["Counting 15 twice, giving 10 favourable outcomes."],
            examinerNote: "Accept the fraction 9/20 or decimal 0.45.",
          },
        },
        {
          id: "mypm2-u3-probability-sets-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a survey of 50 people, 30 like tea, 25 like coffee and 15 like both. Explain how you would find the number who like neither drink, and work out the probability that a randomly chosen person likes neither.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union of two sets", statement: "$n(T\\cup C)=n(T)+n(C)-n(T\\cap C)$." },
              { kind: "property", name: "Complement", statement: "The number outside both sets is the total minus the union." },
            ],
            steps: [
              { reasoning: "Find those who like at least one: $30+25-15=40$.", working: "30+25-15=40", marks: 1, markCode: "M" },
              { reasoning: "Subtract from the total: $50-40=10$ like neither.", working: "50-40=10", marks: 1, markCode: "M" },
              { reasoning: "Write as a probability: $\\frac{10}{50}=\\frac15=0.2$.", working: "0.2", marks: 1, markCode: "A" },
              { reasoning: "The subtraction of the overlap is needed because the 15 who like both were counted twice in $30+25$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$10$ people like neither; probability $=0.2$",
            commonErrors: ["Adding 30 and 25 to get 55, then $50-55$ nonsense."],
            examinerNote: "The R mark needs the double-counting explanation.",
          },
        },
        {
          id: "mypm2-u3-probability-sets-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bag has 4 red, 5 blue and 1 green counter. A counter is drawn and replaced, then a second counter is drawn. Two events are considered for a single draw: $R$ = red, $B$ = blue.",
          parts: [
            { label: "a", prompt: "Work out $P(R)$ and $P(B)$ for one draw.", marks: 2 },
            { label: "b", prompt: "Work out the probability of drawing red or blue in one draw, and explain why you can add the probabilities.", marks: 2 },
            { label: "c", prompt: "Work out the probability that two draws are both blue.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(R)", answer: 0.4, tolerance: 0.001 },
              { label: "(a) P(B)", answer: 0.5, tolerance: 0.001 },
              { label: "(b) P(red or blue)", answer: 0.9, tolerance: 0.001 },
              { label: "(c) P(two blues)", answer: 0.25, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equally likely outcomes", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}$; there are 10 counters." },
              { kind: "property", name: "Mutually exclusive events", statement: "A counter cannot be both red and blue." },
            ],
            steps: [
              { part: "a", reasoning: "$P(R)=\\frac{4}{10}=0.4$ and $P(B)=\\frac{5}{10}=0.5$.", working: "0.4\\text{ and }0.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both probabilities.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Red and blue are mutually exclusive, so add: $0.4+0.5=0.9$.", working: "0.9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain: a single counter cannot be two colours at once, so there is no overlap.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The counter is replaced, so the draws are independent: $P(\\text{blue then blue})=0.5\\times0.5$.", working: "0.5\\times0.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P(R)=0.4$, $P(B)=0.5$ (b) $0.9$, mutually exclusive (c) $0.25$",
            commonErrors: ["In (c) using $\\frac{5}{9}\\times\\frac{4}{9}$ as if the counter were not replaced."],
            examinerNote: "In (b) the reason is required for the mark.",
          },
        },
        {
          id: "mypm2-u3-probability-sets-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a group of 80 students, 45 study biology, 38 study chemistry and 20 study both. A student is chosen at random.",
          parts: [
            { label: "a", prompt: "Work out $n(B\\cup C)$, the number studying at least one of the subjects.", marks: 2 },
            { label: "b", prompt: "Work out the number studying neither subject.", marks: 2 },
            { label: "c", prompt: "Work out the probability that the student studies biology only.", marks: 2 },
            { label: "d", prompt: "Work out the probability that the student studies neither subject.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) n(B union C)", answer: 63 },
              { label: "(b) Students studying neither", answer: 17 },
              { label: "(c) P(biology only)", answer: 0.3125, tolerance: 0.001 },
              { label: "(d) P(neither)", answer: 0.2125, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union of two sets", statement: "$n(B\\cup C)=n(B)+n(C)-n(B\\cap C)$." },
              { kind: "property", name: "Complement", statement: "$P(\\text{neither})=1-P(\\text{at least one})$." },
            ],
            steps: [
              { part: "a", reasoning: "Add and subtract the overlap: $45+38-20$.", working: "45+38-20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "63", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the union from the group total.", working: "80-63", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "17", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Biology only $=45-20=25$; probability $=\\frac{25}{80}$.", working: "\\frac{25}{80}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.3125", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$P(\\text{neither})=\\frac{17}{80}$ or $1-\\frac{63}{80}$." , working: "\\frac{17}{80}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "0.2125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $63$ (b) $17$ (c) $0.3125$ (d) $0.2125$",
            commonErrors: ["In (c) using 45 instead of $45-20=25$ for biology only.", "In (d) forgetting to subtract the overlap."],
            examinerNote: "In (c) accept the fraction $\\frac{25}{80}$.",
          },
        },
      ],
    },
  ],
};
