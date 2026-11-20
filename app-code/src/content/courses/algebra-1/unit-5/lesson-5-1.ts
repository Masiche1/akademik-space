import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "alg1-u5-5-1",
  code: "5-1",
  title: "Describing Data Distributions",
  goal: "I CAN summarize, display, and compare distributions using measures of center, spread, shape, and outlier rules.",
  standards: ["HSS-ID.A.1", "HSS-ID.A.2", "HSS-ID.A.3"],
  vocabulary: [
    { term: "Mean", definition: "The sum of all data values divided by the number of values; it is sensitive to extreme values." },
    { term: "Median", definition: "The middle value in an ordered data set, or the mean of the two middle values when there is an even number of values." },
    { term: "Interquartile range (IQR)", definition: "The difference between the third quartile and first quartile, measuring the spread of the middle half of the data." },
    { term: "Standard deviation", definition: "A measure of the typical distance of data values from the mean, in the original units." },
    { term: "Outlier", definition: "A value unusually far from the rest; the 1.5 IQR rule flags values below Q1 − 1.5(IQR) or above Q3 + 1.5(IQR)." },
    { term: "Five-number summary", definition: "The minimum, first quartile, median, third quartile, and maximum (or non-outlier whisker endpoints in a modified box plot)." },
  ],
  concepts: [
    {
      id: "alg1-u5-center-spread",
      title: "Measures of center and spread",
      skill: "Calculate and interpret mean, median, range, IQR, and population or sample standard deviation from data sets.",
      lesson: {
        sections: [
          {
            heading: "Choose a measure of center",
            body: "The **mean** uses every value: add the data and divide by the number of values. The **median** is the middle value after sorting; with an even number of values, average the two middle values. The mean is useful for fairly balanced data, while the median is more resistant to an unusually high or low value.",
          },
          {
            heading: "Measure spread",
            body: "The **range** is maximum minus minimum. To find the **IQR**, order the data, find $Q_1$ as the median of the lower half and $Q_3$ as the median of the upper half, then calculate $Q_3-Q_1$. When the data count is odd, leave the overall median out of both halves. The IQR describes the middle half of the data.",
          },
          {
            heading: "Standard deviation",
            body: "Standard deviation describes a typical distance from the mean. For a population, square each deviation from the mean, average those squares, and take the square root. For a sample, divide the sum of squared deviations by $n-1$ instead of $n$. Always identify which version is used; round only at the end.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x}=\\frac{\\sum x_i}{n}$" },
          { name: "Range and IQR", statement: "$\\text{range}=x_{\\max}-x_{\\min}$; $\\text{IQR}=Q_3-Q_1$" },
          { name: "Population standard deviation", statement: "$\\sigma=\\sqrt{\\frac{\\sum (x_i-\\mu)^2}{N}}$" },
          { name: "Sample standard deviation", statement: "$s=\\sqrt{\\frac{\\sum (x_i-\\bar{x})^2}{n-1}}$" },
        ],
        workedExample: {
          problem: "For the data set $2, 4, 6, 8, 10$, find the mean, median, range, IQR, and population standard deviation.",
          solution: "The mean is $(2+4+6+8+10)/5=6$ and the median is $6$. The range is $10-2=8$. The lower half is $2,4$, so $Q_1=3$; the upper half is $8,10$, so $Q_3=9$ and the IQR is $9-3=6$. For the population standard deviation, the squared deviations from 6 sum to $16+4+0+4+16=40$. Thus $\\sigma=\\sqrt{40/5}=\\sqrt{8}\\approx2.83$.",
        },
      },
      questions: [
        {
          id: "alg1-u5-center-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student's five quiz scores are $3, 5, 5, 7, 10$. What is the mean score?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$30$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic mean", statement: "The mean is the sum of all values divided by the number of values." },
            ],
            steps: [
              { reasoning: "Add all five scores and divide by five; the mean uses each observation once.", working: "\\frac{3+5+5+7+10}{5}=\\frac{30}{5}=6", marks: 2, markCode: "M" },
            ],
            finalAnswer: "**(b)** The mean is $6$.",
            commonErrors: ["Choosing 5, the median, instead of the mean.", "Reporting the sum 30 without dividing by 5."],
          },
        },
        {
          id: "alg1-u5-center-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the ordered data set $2, 4, 6, 8, 10, 12, 14$, find the median and range.",
          response: { type: "numeric", parts: [{ label: "Median", answer: 8 }, { label: "Range", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "For an odd number of ordered values, the median is the single middle value." },
              { kind: "formula", name: "Range", statement: "Range equals maximum minus minimum." },
            ],
            steps: [
              { reasoning: "There are seven values, so the fourth value is the middle one.", working: "\\text{Median}=8", marks: 1, markCode: "M" },
              { reasoning: "Subtract the minimum from the maximum to measure the full spread.", working: "14-2=12", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Median $8$; range $12$.",
            commonErrors: ["Counting to the wrong middle position.", "Adding the endpoints instead of subtracting."],
          },
        },
        {
          id: "alg1-u5-center-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The data are $1, 3, 5, 7, 9$. Treat these values as the entire population. Find the population standard deviation, rounding to the nearest hundredth.",
          response: { type: "numeric", parts: [{ label: "Population standard deviation", answer: 2.83, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Population standard deviation", statement: "For a population, $\\sigma=\\sqrt{\\sum(x_i-\\mu)^2/N}$." },
            ],
            steps: [
              { reasoning: "Find the population mean so each value's deviation is measured from the center.", working: "\\mu=\\frac{1+3+5+7+9}{5}=5", marks: 1, markCode: "M" },
              { reasoning: "Square deviations to prevent positive and negative distances from canceling.", working: "(1-5)^2+(3-5)^2+(5-5)^2+(7-5)^2+(9-5)^2=40", marks: 1, markCode: "M" },
              { reasoning: "Divide by the population size, not $n-1$, because the data are the whole population.", working: "\\sigma=\\sqrt{\\frac{40}{5}}=\\sqrt{8}\\approx2.83", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$\\sigma\\approx2.83$ points.",
            commonErrors: ["Using $n-1$ for a population standard deviation.", "Forgetting to take the square root of the variance."],
          },
        },
        {
          id: "alg1-u5-center-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A coach records the number of minutes eight students spent practicing: $2, 4, 6, 6, 8, 10, 12, 14$. Use the median-of-halves convention for quartiles.",
          parts: [
            { label: "a", prompt: "Find the mean and median.", marks: 2 },
            { label: "b", prompt: "Find $Q_1$, $Q_3$, and the IQR.", marks: 3 },
            { label: "c", prompt: "Find the range.", marks: 1 },
            { label: "d", prompt: "Compare the mean and median. What does their relationship suggest about the center of these practice times?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean and median", statement: "The mean is total divided by count; for an even count, the median is the mean of the two middle values." },
              { kind: "formula", name: "Quartiles and IQR", statement: "Using the median-of-halves convention, $Q_1$ and $Q_3$ are the medians of the lower and upper halves; $\\text{IQR}=Q_3-Q_1$." },
              { kind: "formula", name: "Range", statement: "Range equals maximum minus minimum." },
            ],
            steps: [
              { part: "a", reasoning: "The mean uses all eight values, while the median averages the two central values.", working: "\\bar{x}=\\frac{62}{8}=7.75;\\quad \\text{median}=\\frac{6+8}{2}=7", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Split into the lower four and upper four values, then take each half's median.", working: "Q_1=\\frac{4+6}{2}=5;\\quad Q_3=\\frac{10+12}{2}=11;\\quad \\text{IQR}=11-5=6", marks: 3, markCode: "M" },
              { part: "c", reasoning: "Subtract the smallest practice time from the largest.", working: "14-2=12", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The mean is only 0.75 minute above the median, so the measures are close and indicate a fairly balanced center, with a slight pull toward the larger values.", working: "7.75>7", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) Mean $7.75$ minutes; median $7$ minutes. (b) $Q_1=5$, $Q_3=11$, IQR $6$ minutes. (c) Range $12$ minutes. (d) The mean is slightly greater than, and close to, the median, suggesting a fairly balanced center with a slight pull toward larger times.",
            commonErrors: ["Using the overall median as part of both halves when finding quartiles.", "Calculating the IQR as $Q_1-Q_3$."],
          },
        },
      ],
    },
    {
      id: "alg1-u5-boxplots-outliers",
      title: "Box plots, outliers, and distribution comparisons",
      skill: "Build and interpret box plots, apply the 1.5 IQR outlier rule, and compare center, spread, and shape.",
      lesson: {
        sections: [
          {
            heading: "Read a box plot",
            body: "A box plot displays the five-number summary: minimum, $Q_1$, median, $Q_3$, and maximum. The box runs from $Q_1$ to $Q_3$, with a line at the median; its length is the IQR. In a modified box plot, whiskers reach the smallest and largest non-outlier values, while outliers are plotted separately.",
          },
          {
            heading: "Flag possible outliers",
            body: "Calculate the lower fence $Q_1-1.5(\\text{IQR})$ and upper fence $Q_3+1.5(\\text{IQR})$. Values below the lower fence or above the upper fence are flagged as outliers. A value exactly on a fence is not outside it. This rule identifies unusual values; it does not prove an observation is an error.",
          },
          {
            heading: "Compare distributions fairly",
            body: "Compare distributions using **shape, center, spread, and unusual features**, in that order when useful. Use medians and IQRs when outliers or skew make the mean and standard deviation less representative. A longer upper tail or a high outlier can pull the mean above the median, indicating right skew. State comparisons in context, not just as isolated numbers.",
          },
        ],
        keyFormulas: [
          { name: "Interquartile range", statement: "$\\text{IQR}=Q_3-Q_1$" },
          { name: "Outlier fences", statement: "$L=Q_1-1.5(\\text{IQR})$ and $U=Q_3+1.5(\\text{IQR})$" },
        ],
        workedExample: {
          problem: "For $3,4,5,6,7,8,9,10,11,30$, find the quartiles and identify any outlier by the 1.5 IQR rule.",
          solution: "The lower half is $3,4,5,6,7$, so $Q_1=5$; the upper half is $8,9,10,11,30$, so $Q_3=10$. Thus IQR $=5$. The fences are $5-1.5(5)=-2.5$ and $10+1.5(5)=17.5$. Since $30>17.5$, 30 is an outlier; the other values lie within the fences.",
        },
      },
      questions: [
        {
          id: "alg1-u5-box-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For the ordered data $2, 3, 4, 5, 6, 7, 8, 20$, use the median-of-halves convention. Which value is flagged by the 1.5 IQR rule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$20$" },
              { id: "d", text: "No values are flagged." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "1.5 IQR rule", statement: "A value greater than $Q_3+1.5(\\text{IQR})$ or less than $Q_1-1.5(\\text{IQR})$ is flagged as an outlier." },
            ],
            steps: [
              { reasoning: "The lower and upper halves give $Q_1=3.5$ and $Q_3=7.5$, so the IQR is 4 and the upper fence is 13.5.", working: "Q_1=3.5,\\quad Q_3=7.5,\\quad U=7.5+1.5(4)=13.5", marks: 1, markCode: "M" },
              { reasoning: "Only 20 is greater than the upper fence; 20 is therefore flagged.", working: "20>13.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $20$ is flagged as an outlier.",
            commonErrors: ["Comparing a value to $1.5$ instead of to the calculated fence."],
          },
        },
        {
          id: "alg1-u5-box-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the data $1, 3, 4, 6, 8, 9, 10, 12$, use the median-of-halves convention. Find $Q_1$, the median, and $Q_3$ for its box plot.",
          response: { type: "numeric", parts: [{ label: "$Q_1$", answer: 3.5 }, { label: "Median", answer: 7 }, { label: "$Q_3$", answer: 9.5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quartiles", statement: "With an even number of ordered data values, split into equal lower and upper halves; the median of each half gives $Q_1$ and $Q_3$." },
            ],
            steps: [
              { reasoning: "The overall median averages the fourth and fifth values.", working: "\\text{Median}=\\frac{6+8}{2}=7", marks: 1, markCode: "M" },
              { reasoning: "The lower half is $1,3,4,6$; average its middle pair.", working: "Q_1=\\frac{3+4}{2}=3.5", marks: 1, markCode: "A" },
              { reasoning: "The upper half is $8,9,10,12$; average its middle pair.", working: "Q_3=\\frac{9+10}{2}=9.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q_1=3.5$, median $7$, and $Q_3=9.5$.",
            commonErrors: ["Using the minimum and maximum as the quartiles."],
          },
        },
        {
          id: "alg1-u5-box-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Class A's reading times have median 32 minutes and IQR 6 minutes. Class B's reading times have median 28 minutes and IQR 10 minutes. Which class typically reads longer, and which class has greater variability in the middle half? Explain using the statistics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median as center", statement: "The median is a measure of the distribution's center." },
              { kind: "definition", name: "IQR as spread", statement: "The IQR measures the spread of the middle half of a distribution." },
            ],
            steps: [
              { reasoning: "Compare medians to answer which class typically has longer reading times.", working: "32>28", marks: 2, markCode: "A" },
              { reasoning: "Compare IQRs to identify greater middle-half variability.", working: "10>6", marks: 1, markCode: "A" },
              { reasoning: "Translate the comparisons back to the context and avoid claiming that every student follows the pattern.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Class A typically reads longer because its median is 32 minutes versus 28 minutes. Class B has greater variability in the middle half because its IQR is 10 minutes versus 6 minutes.",
            commonErrors: ["Treating a larger median as greater variability.", "Concluding that every Class A student reads longer than every Class B student."],
          },
        },
        {
          id: "alg1-u5-box-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A community garden records weekly harvest weights (in pounds) for ten plots: $4, 5, 6, 7, 8, 8, 9, 10, 11, 25$. Use the median-of-halves convention and the 1.5 IQR rule.",
          parts: [
            { label: "a", prompt: "Find the median of the harvest weights.", marks: 1 },
            { label: "b", prompt: "Find $Q_1$, $Q_3$, and the IQR.", marks: 2 },
            { label: "c", prompt: "Calculate both outlier fences and identify any outlier.", marks: 3 },
            { label: "d", prompt: "Give the five-number summary for a modified box plot and describe what the outlier suggests about the distribution's shape.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median and quartiles", statement: "The median is the middle pair's average for an even-sized set; quartiles are the medians of the lower and upper halves." },
              { kind: "formula", name: "Outlier fences", statement: "$L=Q_1-1.5(\\text{IQR})$ and $U=Q_3+1.5(\\text{IQR})$." },
              { kind: "definition", name: "Modified box plot", statement: "Whiskers extend to the smallest and largest non-outlier values; outliers are plotted separately." },
            ],
            steps: [
              { part: "a", reasoning: "Average the fifth and sixth ordered observations.", working: "\\text{Median}=\\frac{8+8}{2}=8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The lower five values have median 6 and the upper five have median 10.", working: "Q_1=6,\\quad Q_3=10,\\quad \\text{IQR}=10-6=4", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Substitute the quartiles and IQR into both fence formulas.", working: "L=6-1.5(4)=0;\\quad U=10+1.5(4)=16", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Only 25 is outside the interval from 0 to 16, so it is flagged.", working: "25>16", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the minimum non-outlier and maximum non-outlier for the whiskers, retain the quartiles and median, and interpret the long upper tail.", working: "(4, 6, 8, 10, 11);\\quad 25\\text{ is plotted separately}", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) Median $8$ lb. (b) $Q_1=6$, $Q_3=10$, IQR $4$ lb. (c) Fences are 0 lb and 16 lb; 25 lb is an outlier. (d) Modified five-number summary: $(4,6,8,10,11)$, with 25 plotted separately. The unusually high value suggests a right tail/right skew.",
            commonErrors: ["Using 25 as the upper whisker endpoint even though it is flagged as an outlier.", "Calling the outlier an error without checking its source."],
          },
        },
      ],
    },
  ],
};
