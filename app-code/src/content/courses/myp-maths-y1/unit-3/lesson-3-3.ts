import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypm1-u3-lesson-3-3",
  code: "3-3",
  title: "Statistics and Probability",
  goal: "I CAN find and choose an average, read charts and pictograms, and use the probability scale, theoretical probability and relative frequency.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
    "MYP Maths: Statistics and probability",
  ],
  vocabulary: [
    { term: "Mean", definition: "The total of all the values divided by the number of values." },
    { term: "Median", definition: "The middle value when the data are put in order. With an even number of values, it is halfway between the two middle values." },
    { term: "Mode", definition: "The value that occurs most often." },
    { term: "Range", definition: "The largest value minus the smallest value, a measure of spread." },
    { term: "Outcome", definition: "One possible result of an experiment, for example rolling a 4 on a die." },
    { term: "Theoretical probability", definition: "The number of favourable outcomes divided by the total number of equally likely outcomes." },
    { term: "Relative frequency", definition: "The number of times an event happens divided by the number of trials. It is an estimate of probability." },
  ],
  concepts: [
    {
      id: "mypm1-u3-averages-charts",
      title: "Averages, range and reading charts",
      skill: "Find the mean, median, mode and range, choose a suitable average and read information from pictograms and bar charts.",
      lesson: {
        sections: [
          {
            heading: "Finding the averages",
            body: "**Mean** = total $\\div$ number of values. **Median**: order the data and take the middle value (if there are two middle values, find the value halfway between them). **Mode**: the most common value. **Range** = largest $-$ smallest. For 2, 3, 3, 5, 12: mean $=25\\div5=5$, median $=3$, mode $=3$, range $=10$.",
          },
          {
            heading: "Choosing an average",
            body: "The mean uses every value, but one very large or very small value (an outlier) can pull it away from the typical value. In that case the median is usually a better choice. The mode is useful for non-numerical data such as the most popular colour.",
          },
          {
            heading: "Pictograms and bar charts",
            body: "In a pictogram, a key tells you how many items one symbol stands for. A half symbol stands for half that number. In a bar chart, read the height of each bar against the scale on the vertical axis. Always check the key and the scale first.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{total of values}}{\\text{number of values}}$" },
          { name: "Range", statement: "$\\text{range}=\\text{largest}-\\text{smallest}$" },
        ],
        workedExample: {
          problem: "Find the mean of 4, 7, 9, 12 and 18.",
          solution: "Total $=4+7+9+12+18=50$. There are 5 values, so mean $=50\\div5=10$.",
        },
      },
      questions: [
        {
          id: "mypm1-u3-averages-charts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the median of 3, 7, 5, 9 and 11?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "The middle value when the data are in order." },
            ],
            steps: [
              { reasoning: "Put the values in order: 3, 5, 7, 9, 11. The middle value is the third one.", working: "7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $7$",
            commonErrors: ["Choosing the middle value of the unordered list, which is 5.", "Choosing the mode or the range because the question does not look like a calculation."],
          },
        },
        {
          id: "mypm1-u3-averages-charts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Five students scored 6, 9, 4, 11 and 10 in a quiz. Work out the mean score.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = total of values $\\div$ number of values." },
            ],
            steps: [
              { reasoning: "Add the scores and divide by 5.", working: "(6+9+4+11+10)\\div5=40\\div5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Dividing by the largest score instead of by 5.", "Giving the median (9) instead of the mean."],
          },
        },
        {
          id: "mypm1-u3-averages-charts-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pictogram shows the number of books borrowed from a library. The key says that one book symbol stands for 4 books. On Monday there are 3 and a half symbols. On Tuesday there are 5 symbols. How many more books were borrowed on Tuesday than on Monday?",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 6, unit: "books" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading a pictogram", statement: "Number of items = number of symbols $\\times$ value of one symbol. A half symbol is half the value." },
            ],
            steps: [
              { reasoning: "Monday: 3.5 symbols, each worth 4.", working: "3.5\\times4=14", marks: 1, markCode: "M" },
              { reasoning: "Tuesday: 5 symbols, each worth 4.", working: "5\\times4=20", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "20-14=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ books",
            commonErrors: ["Treating each symbol as 1 book and giving $1.5$.", "Counting the half symbol as a whole symbol."],
          },
        },
        {
          id: "mypm1-u3-averages-charts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Eight students recorded how many minutes their journey to school takes: 5, 8, 10, 10, 12, 15, 16 and 44.",
          parts: [
            { label: "a", prompt: "Write down the mode and work out the range.", marks: 2 },
            { label: "b", prompt: "Work out the mean journey time, in minutes.", marks: 2 },
            { label: "c", prompt: "Work out the median journey time, in minutes.", marks: 2 },
            { label: "d", prompt: "The school wants to state a typical journey time. Which average should it use, the mean or the median? Give a reason.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Mode", answer: 10, unit: "minutes" },
              { label: "(a) Range", answer: 39, unit: "minutes" },
              { label: "(b) Mean", answer: 15, unit: "minutes" },
              { label: "(c) Median", answer: 11, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mode and range", statement: "The mode is the most common value. Range = largest $-$ smallest." },
              { kind: "formula", name: "Mean", statement: "Mean = total $\\div$ number of values." },
              { kind: "definition", name: "Median", statement: "With an even number of values, the median is halfway between the two middle values." },
            ],
            steps: [
              { part: "a", reasoning: "10 appears twice and every other value once.", working: "\\text{mode}=10", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Largest minus smallest.", working: "44-5=39", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The total of the eight values is 120, divided by 8.", working: "(5+8+10+10+12+15+16+44)\\div8=120\\div8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
              { part: "c", reasoning: "There are 8 values in order, so the median is halfway between the 4th and 5th values (10 and 12).", working: "(10+12)\\div2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "11", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Choose the median.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The value 44 is an outlier much larger than the others. It pulls the mean up to 15, which is higher than five of the eight journey times, so the median of 11 is more typical.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) mode 10, range 39 (b) mean 15 minutes (c) median 11 minutes (d) the median, because the outlier 44 pulls the mean above most of the data",
            commonErrors: ["Taking the median as 10 or 12 instead of halfway between them.", "Choosing the mean because it uses all the data without noticing the outlier."],
            examinerNote: "In (d) the B mark depends on the reason being consistent with the choice; accept the mean only if a valid argument is made, but the outlier argument is expected.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the median of 4, 8, 2, 10 and 6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "The middle value when the data are put in order." },
            ],
            steps: [
              { reasoning: "In order: 2, 4, 6, 8, 10. The middle (third) value is 6.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $6$",
            commonErrors: ["Taking the middle of the unordered list, which is 2.", "Averaging 4 and 6 to get 5."],
            examinerNote: "B1 for 6.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mode of 3, 5, 3, 7, 3 and 9?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mode", statement: "The value that occurs most often." },
            ],
            steps: [
              { reasoning: "3 appears three times; every other value appears once.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $3$",
            commonErrors: ["Choosing the largest value or the first value."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the range of 12, 7, 20, 15 and 9?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$20$" },
              { id: "c", text: "$27$" },
              { id: "d", text: "$13$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Range", statement: "Range = largest value minus smallest value." },
            ],
            steps: [
              { reasoning: "Largest is 20, smallest is 7: $20-7=13$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $13$",
            commonErrors: ["Dividing instead of subtracting."],
            examinerNote: "B1 for 13.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the mean of 5, 8, 11 and 14.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 9.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = total of values $\\div$ number of values." },
            ],
            steps: [
              { reasoning: "Add the values and divide by 4.", working: "(5+8+11+14)\\div4=38\\div4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "9.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9.5$",
            commonErrors: ["Dividing by the largest value instead of by 4."],
            examinerNote: "M1 for 38/4. A1 for 9.5.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the median of 6, 10, 4, 8, 2 and 14.",
          response: { type: "numeric", parts: [{ label: "Median", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "With an even number of values, the median is halfway between the two middle values." },
            ],
            steps: [
              { reasoning: "In order: 2, 4, 6, 8, 10, 14. The two middle values are 6 and 8.", working: "(6+8)\\div2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Choosing 6 or 8 instead of the average of the two."],
            examinerNote: "M1 for (6+8)/2. A1 for 7.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A data set has one very large value that is much bigger than all the others. Which average best represents a typical value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The range" },
              { id: "b", text: "The mode" },
              { id: "c", text: "The mean" },
              { id: "d", text: "The median" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choosing an average", statement: "An outlier pulls the mean away from the typical value; the median is more robust." },
            ],
            steps: [
              { reasoning: "The outlier inflates the total and hence the mean; the median depends only on the middle position, so it is unaffected.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The median",
            commonErrors: ["Choosing the mean because it uses every value."],
            examinerNote: "B1 for median.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Four numbers have a mean of 12. A fifth number, 20, is added to the data set.",
          response: { type: "numeric", parts: [{ label: "New mean", answer: 13.6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = total $\\div$ number of values; find the new total and divide by the new count." },
            ],
            steps: [
              { reasoning: "Find the total of the original four numbers.", working: "12\\times4=48", marks: 1, markCode: "M" },
              { reasoning: "Add the new value and divide by 5.", working: "(48+20)\\div5=68\\div5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "13.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13.6$",
            commonErrors: ["Averaging 12 and 20 to get 16.", "Dividing 68 by 4 instead of 5."],
            examinerNote: "M1 for total 48. M1 for 68/5. A1 for 13.6.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pictogram uses a key where one symbol stands for 6 books. A bar shows 2 and a half symbols. How many books does it represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading a pictogram", statement: "Number of items = number of symbols $\\times$ value of one symbol; a half symbol is half the value." },
            ],
            steps: [
              { reasoning: "$2.5\\times6=15$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $15$",
            commonErrors: ["Treating the half symbol as a whole, giving 18, or counting symbols as books."],
            examinerNote: "B1 for 15.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shop records the daily number of customers: 40, 42, 41, 45, 200.",
          parts: [
            { label: "a", prompt: "Work out the mean number of customers.", marks: 1 },
            { label: "b", prompt: "Work out the median number of customers.", marks: 1 },
            { label: "c", prompt: "Explain which average better represents a typical day and why.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = total $\\div$ number of values." },
              { kind: "principle", name: "Choosing an average", statement: "An outlier pulls the mean away from the typical value; the median is more robust." },
            ],
            steps: [
              { part: "a", reasoning: "Total is 368, divided by 5.", working: "368\\div5=73.6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In order the middle value is 42.", working: "42", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The median (42) is better because 200 is an outlier that inflates the mean to 73.6, which is higher than four of the five daily values.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $73.6$ (b) $42$ (c) the median, because the outlier 200 pulls the mean up",
            commonErrors: ["Choosing the mean without noticing the outlier."],
            examinerNote: "In (c) the reason must refer to the outlier effect on the mean (oe).",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mode of 8, 4, 8, 6, 8 and 2?",
          response: { type: "numeric", parts: [{ label: "Mode", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mode", statement: "The value that occurs most often." },
            ],
            steps: [
              { reasoning: "8 appears three times; every other value appears once.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Choosing the first value or the largest."],
            examinerNote: "B1 for 8.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Five players scored 12, 15, 18, 20 and 25 points in a game.",
          parts: [
            { label: "a", prompt: "Work out the mean score.", marks: 1 },
            { label: "b", prompt: "Work out the median score.", marks: 1 },
            { label: "c", prompt: "Work out the range of the scores.", marks: 1 },
            { label: "d", prompt: "A sixth player scores 19 points. Work out the new mean of all six scores.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Mean", answer: 18 },
              { label: "(b) Median", answer: 18 },
              { label: "(c) Range", answer: 13 },
              { label: "(d) New mean", answer: 18.17, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = total $\\div$ number of values." },
              { kind: "definition", name: "Median and range", statement: "Median is the middle value; range = largest $-$ smallest." },
            ],
            steps: [
              { part: "a", reasoning: "Total $=90$, divided by 5.", working: "90\\div5=18", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In order, the middle value is 18.", working: "18", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Largest minus smallest.", working: "25-12=13", marks: 1, markCode: "B" },
              { part: "d", reasoning: "New total $=90+19=109$, divided by 6.", working: "109\\div6=18.17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 18 (b) 18 (c) 13 (d) $18.17$ (accept $18\\frac{1}{6}$)",
            commonErrors: ["In (d) dividing 109 by 5 instead of 6."],
            examinerNote: "In (d) accept 18.166... or 18.2 depending on rounding; tolerance applies.",
          },
        },
        {
          id: "mypm1-u3-averages-charts-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two classes recorded their test scores. Class A: 60, 62, 64, 66, 68. Class B: 40, 45, 70, 75, 80.",
          parts: [
            { label: "a", prompt: "Work out the mean score for each class.", marks: 2 },
            { label: "b", prompt: "Work out the range for each class.", marks: 1 },
            { label: "c", prompt: "Explain which class has more consistent scores and why.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Mean of Class A", answer: 64 },
              { label: "(a) Mean of Class B", answer: 62 },
              { label: "(b) Range of Class A", answer: 8 },
              { label: "(b) Range of Class B", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = total $\\div$ number of values." },
              { kind: "definition", name: "Range", statement: "Range = largest $-$ smallest; a smaller range means more consistent scores." },
            ],
            steps: [
              { part: "a", reasoning: "Class A total $=320$, mean $=64$; Class B total $=310$, mean $=62$.", working: "320\\div5=64,\\quad 310\\div5=62", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both means.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Class A range $=68-60=8$; Class B range $=80-40=40$.", working: "8\\ \\text{and}\\ 40", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Class A is more consistent because its range (8) is much smaller than Class B's (40), so its scores are closer together.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) A: 64, B: 62 (b) A: 8, B: 40 (c) Class A, smaller range",
            commonErrors: ["Choosing Class B because its mean is similar but missing the range comparison."],
            examinerNote: "In (c) the reason must refer to the range or spread (oe).",
          },
        },
      ],
    },
    {
      id: "mypm1-u3-probability",
      title: "Probability and relative frequency",
      skill: "Use the probability scale, list outcomes, calculate theoretical probability and estimate probability from experimental results.",
      lesson: {
        sections: [
          {
            heading: "The probability scale",
            body: "Probability is measured from 0 to 1. An impossible event has probability 0, a certain event has probability 1, and an event that is equally likely to happen or not has probability $\\frac{1}{2}$. Probabilities can be written as fractions, decimals or percentages, and never lie outside 0 to 1.",
          },
          {
            heading: "Theoretical probability and listing outcomes",
            body: "When all outcomes are equally likely, $P(\\text{event})=\\frac{\\text{number of favourable outcomes}}{\\text{total number of outcomes}}$. For a fair six-sided die, $P(\\text{even})=\\frac{3}{6}=\\frac{1}{2}$. List all outcomes carefully. Tossing two coins gives HH, HT, TH, TT: four outcomes, so $P(\\text{two heads})=\\frac{1}{4}$.",
          },
          {
            heading: "Experimental probability",
            body: "If you cannot work out the probability from equally likely outcomes, do an experiment. The **relative frequency** is $\\frac{\\text{number of times the event happens}}{\\text{number of trials}}$. The more trials you do, the closer the relative frequency usually gets to the true probability. Expected number of times $=$ probability $\\times$ number of trials.",
          },
        ],
        keyFormulas: [
          { name: "Theoretical probability", statement: "$P=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$" },
          { name: "Relative frequency", statement: "$\\dfrac{\\text{times the event happens}}{\\text{number of trials}}$" },
        ],
        workedExample: {
          problem: "A bag has 2 red and 6 blue counters. Find the probability of choosing a red counter.",
          solution: "There are 8 counters, 2 of which are red. $P(\\text{red})=\\frac{2}{8}=\\frac{1}{4}=0.25$.",
        },
      },
      questions: [
        {
          id: "mypm1-u3-probability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair six-sided die is rolled once. What is the probability of rolling a 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5}{6}$" },
              { id: "b", text: "$\\frac{1}{5}$" },
              { id: "c", text: "$\\frac{1}{6}$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$ for equally likely outcomes." },
            ],
            steps: [
              { reasoning: "One favourable outcome (the 5) out of six equally likely outcomes.", working: "\\frac{1}{6}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac{1}{6}$",
            commonErrors: ["Choosing $\\frac{5}{6}$ by using the number on the face as the numerator.", "Dividing by 5 rather than by the 6 faces."],
          },
        },
        {
          id: "mypm1-u3-probability-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag contains 3 red, 5 blue and 2 green counters. One counter is taken at random. Write the probability that it is blue as a decimal.",
          response: { type: "numeric", parts: [{ label: "P(blue)", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$." },
            ],
            steps: [
              { reasoning: "There are $3+5+2=10$ counters in total and 5 are blue.", working: "P(\\text{blue})=\\frac{5}{10}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["Using 5 out of 5 other counters, giving $\\frac{5}{5}$.", "Forgetting to include the blue counters in the total."],
          },
        },
        {
          id: "mypm1-u3-probability-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A drawing pin is thrown 80 times and lands point up 36 times. Use this to estimate the probability that it lands point up, as a decimal. Then work out how many times it is expected to land point up in 500 throws.",
          response: {
            type: "numeric",
            parts: [
              { label: "Relative frequency", answer: 0.45 },
              { label: "Expected in 500 throws", answer: 225 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative frequency", statement: "Relative frequency = times the event happens $\\div$ number of trials." },
              { kind: "formula", name: "Expected number", statement: "Expected number = probability $\\times$ number of trials." },
            ],
            steps: [
              { reasoning: "Divide the number of point-up landings by the number of throws.", working: "36\\div80", marks: 1, markCode: "M" },
              { reasoning: "Evaluate as a decimal.", working: "0.45", marks: 1, markCode: "A" },
              { reasoning: "Multiply the estimated probability by 500.", working: "0.45\\times500=225", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Relative frequency $0.45$; expected $225$ times",
            commonErrors: ["Dividing 80 by 36.", "Multiplying 36 by 500."],
            examinerNote: "Follow through the third mark from an incorrect relative frequency (ft).",
          },
        },
        {
          id: "mypm1-u3-probability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bag contains 12 counters: 5 red, 4 yellow and 3 green. A counter is chosen at random.",
          parts: [
            { label: "a", prompt: "Write the probability that the counter is green as a decimal.", marks: 2 },
            { label: "b", prompt: "Write the probability that the counter is red or yellow as a decimal.", marks: 2 },
            { label: "c", prompt: "Two fair coins are tossed. List all the possible outcomes, then work out the probability of getting exactly one head. Write the probability as a decimal.", marks: 2 },
            { label: "d", prompt: "Sam takes a counter from the bag, records its colour and puts it back. He does this 60 times and gets red 27 times. Work out the relative frequency of red, and explain why it differs from the theoretical probability of red.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(green)", answer: 0.25 },
              { label: "(b) P(red or yellow)", answer: 0.75 },
              { label: "(c) P(exactly one head)", answer: 0.5 },
              { label: "(d) Relative frequency of red", answer: 0.45 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$ for equally likely outcomes." },
              { kind: "principle", name: "Listing outcomes", statement: "Two fair coins have four equally likely outcomes: HH, HT, TH, TT." },
              { kind: "formula", name: "Relative frequency", statement: "Relative frequency = times the event happens $\\div$ number of trials." },
            ],
            steps: [
              { part: "a", reasoning: "3 of the 12 counters are green.", working: "\\frac{3}{12}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify and write as a decimal.", working: "0.25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "There are $5+4=9$ favourable counters.", working: "\\frac{9}{12}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify and write as a decimal.", working: "0.75", marks: 1, markCode: "A" },
              { part: "c", reasoning: "List the four outcomes: HH, HT, TH, TT. Exactly one head occurs in HT and TH.", working: "\\frac{2}{4}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write as a decimal.", working: "0.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide the number of reds by the number of trials.", working: "27\\div60=0.45", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The theoretical probability is $\\frac{5}{12}\\approx0.42$. The experiment is random and only 60 trials were done, so the result differs slightly. More trials would give a relative frequency closer to the theoretical value.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.25$ (b) $0.75$ (c) $0.5$ (outcomes HH, HT, TH, TT) (d) $0.45$; it differs because of random variation in a limited number of trials",
            commonErrors: ["Omitting TH and listing only three outcomes, giving $\\frac{1}{3}$.", "Adding probabilities incorrectly in (b), for example $\\frac{5}{12}+\\frac{4}{12}$ written as $\\frac{9}{24}$."],
            examinerNote: "In (c) both the full list and the probability are needed for the two marks. In (d) the R mark requires a comparison with $\\frac{5}{12}$ or a reference to chance variation.",
          },
        },
        {
          id: "mypm1-u3-probability-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair six-sided die is rolled once. What is the probability of rolling an even number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$\\frac{2}{3}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$ for equally likely outcomes." },
            ],
            steps: [
              { reasoning: "Even numbers are 2, 4, 6: 3 favourable outcomes out of 6, so $\\frac{3}{6}=\\frac{1}{2}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{2}$",
            commonErrors: ["Counting only one even number and giving $\\frac{1}{6}$."],
            examinerNote: "B1 for 1/2.",
          },
        },
        {
          id: "mypm1-u3-probability-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has 4 red and 6 blue counters. One counter is chosen at random. What is the probability it is red?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{6}{10}$" },
              { id: "b", text: "$0.4$" },
              { id: "c", text: "$\\frac{4}{6}$" },
              { id: "d", text: "$0.6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}=\\frac{4}{10}$." },
            ],
            steps: [
              { reasoning: "There are 10 counters, 4 red: $\\frac{4}{10}=0.4$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0.4$",
            commonErrors: ["Using 4 out of 6 (the blue count) as the total."],
            examinerNote: "B1 for 0.4 (2/5 acceptable).",
          },
        },
        {
          id: "mypm1-u3-probability-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the probability of an impossible event?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "It depends on the experiment" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Probability scale", statement: "An impossible event has probability 0; a certain event has probability 1." },
            ],
            steps: [
              { reasoning: "An impossible event can never happen, so its probability is 0.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $0$",
            commonErrors: ["Choosing 1, confusing impossible with certain."],
            examinerNote: "B1 for 0.",
          },
        },
        {
          id: "mypm1-u3-probability-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag contains 3 red, 4 yellow and 5 green counters. One counter is chosen at random. Write the probability that it is NOT green, as a decimal.",
          response: { type: "numeric", parts: [{ label: "P(not green)", answer: 0.583, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$; 'not green' means red or yellow." },
            ],
            steps: [
              { reasoning: "Not green means red or yellow: $3+4=7$ favourable counters out of 12 total.", working: "\\frac{7}{12}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "0.583", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.583$ (or $\\frac{7}{12}$)",
            commonErrors: ["Giving $\\frac{5}{12}$, the probability of green instead."],
            examinerNote: "M1 for 7/12. A1 for the decimal (recurring accepted as 0.58 or 0.583).",
          },
        },
        {
          id: "mypm1-u3-probability-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A coin is tossed 60 times and lands heads 28 times. Use this to estimate the probability of heads, as a decimal.",
          response: { type: "numeric", parts: [{ label: "Relative frequency", answer: 0.467, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative frequency", statement: "Relative frequency = times the event happens $\\div$ number of trials." },
            ],
            steps: [
              { reasoning: "Divide the number of heads by the number of tosses.", working: "28\\div60", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.467", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.467$ (or $\\frac{7}{15}$)",
            commonErrors: ["Dividing 60 by 28."],
            examinerNote: "M1 for 28/60. A1 for the decimal.",
          },
        },
        {
          id: "mypm1-u3-probability-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The probability that it rains tomorrow is $\\frac{1}{4}$. Out of 200 similar days, how many times would you expect it to rain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25$" },
              { id: "b", text: "$50$" },
              { id: "c", text: "$75$" },
              { id: "d", text: "$100$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected number", statement: "Expected number = probability $\\times$ number of trials." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{4}\\times200=50$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $50$",
            commonErrors: ["Dividing 200 by 4 incorrectly or multiplying by 4."],
            examinerNote: "B1 for 50.",
          },
        },
        {
          id: "mypm1-u3-probability-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two fair coins are tossed. Write down the probability of getting at least one head, as a decimal.",
          response: { type: "numeric", parts: [{ label: "P(at least one head)", answer: 0.75 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Listing outcomes", statement: "Two coins have four equally likely outcomes: HH, HT, TH, TT." },
            ],
            steps: [
              { reasoning: "List the outcomes: HH, HT, TH, TT. At least one head occurs in HH, HT, TH — three outcomes.", working: "\\frac{3}{4}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "0.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.75$ (or $\\frac{3}{4}$)",
            commonErrors: ["Counting HT and TH as one outcome and giving $\\frac{1}{2}$."],
            examinerNote: "M1 for the correct count of favourable outcomes. A1 for 0.75.",
          },
        },
        {
          id: "mypm1-u3-probability-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A spinner has 8 equal sections: 3 red, 3 blue, 1 green and 1 yellow. What is the probability of landing on red or blue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{6}{8}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{7}{8}$" },
              { id: "d", text: "$\\frac{3}{8}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "Red or blue is $3+3=6$ favourable sections out of 8." },
            ],
            steps: [
              { reasoning: "Red or blue gives $3+3=6$ favourable outcomes out of 8 equal sections: $\\frac{6}{8}$ (which simplifies to $\\frac{3}{4}$).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{6}{8}$",
            commonErrors: ["Counting only one colour and giving $\\frac{3}{8}$."],
            examinerNote: "B1 for 6/8 or 3/4.",
          },
        },
        {
          id: "mypm1-u3-probability-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A biased coin is tossed 100 times and lands heads 62 times.",
          parts: [
            { label: "a", prompt: "Write down the relative frequency of heads.", marks: 1 },
            { label: "b", prompt: "Explain why this experiment was needed instead of using theoretical probability.", marks: 1 },
            { label: "c", prompt: "Explain what would happen to the relative frequency if the coin were tossed 1000 times.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative frequency", statement: "Relative frequency = times the event happens $\\div$ number of trials." },
              { kind: "principle", name: "Experimental probability", statement: "With more trials, the relative frequency usually gets closer to the true probability." },
            ],
            steps: [
              { part: "a", reasoning: "Divide heads by total tosses.", working: "62\\div100=0.62", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The coin is biased, so the outcomes are not equally likely and theoretical probability ($\\frac{1}{2}$) does not apply.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "With more trials the relative frequency should get closer to the coin's true probability of heads.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.62$ (b) the coin is biased, so outcomes are not equally likely (c) it should approach the true probability",
            commonErrors: ["Saying theoretical probability applies anyway."],
            examinerNote: "In (b) the key point is 'not equally likely' (oe).",
          },
        },
        {
          id: "mypm1-u3-probability-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair spinner has 5 equal sections numbered 1 to 5. What is the probability of landing on a number greater than 3?",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$; numbers greater than 3 are 4 and 5." },
            ],
            steps: [
              { reasoning: "$\\frac{2}{5}=0.4$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.4$ (or $\\frac{2}{5}$)",
            commonErrors: ["Counting 3 as greater than 3."],
            examinerNote: "B1 for 0.4.",
          },
        },
        {
          id: "mypm1-u3-probability-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bag has 8 counters: 5 black and 3 white. A counter is chosen at random, its colour recorded, and it is put back. This is repeated.",
          parts: [
            { label: "a", prompt: "Work out the theoretical probability of choosing a black counter.", marks: 1 },
            { label: "b", prompt: "In 120 trials, black is chosen 71 times. Work out the relative frequency of black.", marks: 1 },
            { label: "c", prompt: "Work out how many times black is expected in 120 trials using the theoretical probability.", marks: 1 },
            { label: "d", prompt: "Explain why the relative frequency differs slightly from the theoretical probability.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Theoretical P(black)", answer: 0.625 },
              { label: "(b) Relative frequency of black", answer: 0.592, tolerance: 0.001 },
              { label: "(c) Expected number of blacks", answer: 75 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P=\\frac{5}{8}=0.625$ for equally likely counters." },
              { kind: "formula", name: "Relative frequency", statement: "Relative frequency = times the event happens $\\div$ number of trials." },
              { kind: "formula", name: "Expected number", statement: "Expected number = probability $\\times$ number of trials." },
            ],
            steps: [
              { part: "a", reasoning: "5 black out of 8 total.", working: "\\frac{5}{8}=0.625", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide 71 by 120.", working: "71\\div120=0.592", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply theoretical probability by trials.", working: "0.625\\times120=75", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The experiment is random and only 120 trials were done, so chance variation makes the relative frequency differ slightly from $\\frac{5}{8}$; more trials would reduce the gap.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.625$ (b) $0.592$ (c) 75 (d) random variation in a limited number of trials",
            commonErrors: ["In (c) multiplying by the relative frequency instead of the theoretical probability."],
            examinerNote: "In (c) the theoretical probability must be used, not the relative frequency.",
          },
        },
        {
          id: "mypm1-u3-probability-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Ravi suspects a die is biased. He rolls it 60 times and records the number of sixes: he gets 14 sixes.",
          parts: [
            { label: "a", prompt: "For a fair die, what is the theoretical probability of rolling a six?", marks: 1 },
            { label: "b", prompt: "Work out the relative frequency of sixes in Ravi's experiment.", marks: 1 },
            { label: "c", prompt: "How many sixes would be expected in 60 rolls of a fair die?", marks: 1 },
            { label: "d", prompt: "Is the die biased? Explain your answer.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Theoretical P(six)", answer: 0.167, tolerance: 0.001 },
              { label: "(b) Relative frequency of sixes", answer: 0.233, tolerance: 0.001 },
              { label: "(c) Expected sixes in 60 rolls", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "For a fair die, $P(\\text{six})=\\frac{1}{6}\\approx0.167$." },
              { kind: "formula", name: "Relative frequency", statement: "Relative frequency = times the event happens $\\div$ number of trials." },
            ],
            steps: [
              { part: "a", reasoning: "One favourable outcome out of six.", working: "\\frac{1}{6}=0.167", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide 14 by 60.", working: "14\\div60=0.233", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply $\\frac{1}{6}$ by 60.", working: "10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The relative frequency $0.233$ is higher than $\\frac{1}{6}$ and 14 sixes is more than the expected 10, suggesting the die may be biased — but 60 rolls is a small sample, so more trials would give more convincing evidence.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{1}{6}\\approx0.167$ (b) $0.233$ (c) 10 (d) possibly biased — 14 sixes exceeds the expected 10, though more trials would confirm",
            commonErrors: ["Saying the die is definitely biased without acknowledging random variation."],
            examinerNote: "In (d) a balanced answer comparing relative frequency with theoretical probability is expected.",
          },
        },
      ],
    },
  ],
};
