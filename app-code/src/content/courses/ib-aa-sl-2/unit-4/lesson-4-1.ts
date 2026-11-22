import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "aasl-u4-lesson-4-1",
  code: "4-1",
  title: "Data and Regression",
  goal: "I CAN summarise a data set with measures of centre and spread, identify outliers, and model a linear relationship using Pearson's r and regression lines.",
  standards: ["SL 4.1", "SL 4.2", "SL 4.3", "SL 4.4", "SL 4.10"],
  vocabulary: [
    { term: "Stratified sampling", definition: "A sampling method in which the population is divided into groups (strata) and a random sample is taken from each group in proportion to its size." },
    { term: "Interquartile range (IQR)", definition: "The difference $Q_3 - Q_1$ between the upper and lower quartiles; the spread of the middle 50% of the data." },
    { term: "Outlier", definition: "A value more than $1.5\\times \\mathrm{IQR}$ above $Q_3$ or below $Q_1$." },
    { term: "Pearson's product-moment correlation coefficient", definition: "A number $r$ with $-1 \\le r \\le 1$ measuring the strength and direction of a linear relationship between two variables." },
    { term: "Regression line of $y$ on $x$", definition: "The least-squares line $y = ax + b$ used to estimate $y$ from a given $x$; it passes through the mean point $(\\bar{x}, \\bar{y})$." },
    { term: "Interpolation and extrapolation", definition: "Estimating within the range of the data (reliable if $|r|$ is large) or outside it (unreliable)." },
  ],
  concepts: [
    {
      id: "aasl-u4-descriptive",
      title: "Summarising data and outliers",
      skill: "Find quartiles, IQR and outliers, use stratified sampling, and apply linear transformations to the mean and standard deviation.",
      lesson: {
        sections: [
          {
            heading: "Sampling, quartiles and box plots",
            body: "A **simple random sample** gives every member of the population an equal chance of selection. A **stratified sample** takes a random sample from each subgroup in proportion to its size, so the sample mirrors the population. For ordered data the median splits the data in half, $Q_1$ is the median of the lower half and $Q_3$ the median of the upper half (the median itself is excluded when $n$ is odd). The IQR is $Q_3-Q_1$. A box plot shows the minimum, $Q_1$, the median, $Q_3$ and the maximum.",
          },
          {
            heading: "Outliers and linear transformations",
            body: "A value is an outlier if it is greater than $Q_3 + 1.5(Q_3-Q_1)$ or less than $Q_1 - 1.5(Q_3-Q_1)$. If every value $x$ is replaced by $ax+b$, then the mean, median and quartiles transform in the same way ($\\bar{x}\\to a\\bar{x}+b$), but the standard deviation becomes $|a|\\sigma$ and the IQR becomes $|a|\\,\\mathrm{IQR}$. Adding $b$ shifts the data but does not change its spread.",
          },
        ],
        keyFormulas: [
          { name: "Outlier fences", statement: "$Q_3 + 1.5\\,\\mathrm{IQR}$ and $Q_1 - 1.5\\,\\mathrm{IQR}$" },
          { name: "Mean from a frequency table", statement: "$\\bar{x} = \\dfrac{\\sum fx}{n}$, where $n=\\sum f$" },
          { name: "Linear transformation", statement: "$\\bar{y}=a\\bar{x}+b$, $\\ \\sigma_y = |a|\\sigma_x$" },
        ],
        workedExample: {
          problem: "A data set has mean $10$ and standard deviation $4$. Each value is multiplied by $3$ and then $2$ is subtracted. Find the new mean and standard deviation.",
          solution: "New mean $=3(10)-2=28$. The standard deviation ignores the shift and is scaled by $3$: $3\\times4=12$.",
        },
      },
      questions: [
        {
          id: "aasl-u4-descriptive-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A data set has mean $12$ and standard deviation $3$. Each value $x$ is transformed to $y = 2x + 5$. What are the mean and standard deviation of the new data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mean $29$, standard deviation $11$" },
              { id: "b", text: "Mean $29$, standard deviation $36$" },
              { id: "c", text: "Mean $29$, standard deviation $6$" },
              { id: "d", text: "Mean $24$, standard deviation $6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear transformation", statement: "If $y=ax+b$ then $\\bar{y}=a\\bar{x}+b$ and $\\sigma_y=|a|\\sigma_x$." },
            ],
            steps: [
              { reasoning: "The mean is transformed by the same rule as the data.", working: "\\bar{y}=2(12)+5=29", marks: 1, markCode: "A" },
              { reasoning: "The standard deviation is multiplied by $|a|=2$; adding $5$ does not change spread.", working: "\\sigma_y = 2\\times 3 = 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** mean $29$, standard deviation $6$",
            commonErrors: ["Adding the constant to the standard deviation.", "Squaring the multiplier (confusing standard deviation with variance)."],
          },
        },
        {
          id: "aasl-u4-descriptive-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The following data set is already in order: $3,\\ 5,\\ 6,\\ 8,\\ 9,\\ 11,\\ 12,\\ 21$.\n\\nWrite down the lower quartile $Q_1$, the upper quartile $Q_3$, and find the interquartile range.",
          response: {
            type: "numeric",
            parts: [
              { label: "$Q_1$", answer: 5.5 },
              { label: "$Q_3$", answer: 11.5 },
              { label: "Interquartile range", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quartiles", statement: "$Q_1$ is the median of the lower half of the data and $Q_3$ is the median of the upper half." },
              { kind: "formula", name: "Interquartile range", statement: "$\\mathrm{IQR}=Q_3-Q_1$" },
            ],
            steps: [
              { reasoning: "There are $8$ values, so the lower half is $3,5,6,8$ and the upper half is $9,11,12,21$. Take the median of each half.", working: "Q_1=\\frac{5+6}{2}=5.5,\\quad Q_3=\\frac{11+12}{2}=11.5", marks: 2, markCode: "A" },
              { reasoning: "Subtract.", working: "\\mathrm{IQR}=11.5-5.5=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q_1=5.5$, $Q_3=11.5$, $\\mathrm{IQR}=6$",
            commonErrors: ["Taking the quartiles as the 2nd and 6th values instead of the median of each half.", "Giving $Q_3+Q_1$ instead of $Q_3-Q_1$."],
            examinerNote: "Award A1 for each correct quartile and A1 for the IQR (FT from their quartiles). Note that $21$ lies above the upper fence $11.5+1.5(6)=20.5$, so it is an outlier.",
          },
        },
        {
          id: "aasl-u4-descriptive-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The number of times, $x$, that each of $30$ students visited the library in a week is summarised below.\n\n| $x$ | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| Frequency | 4 | 7 | 9 | 6 | 4 |\n\\nUse your graphic display calculator to find the mean and the standard deviation, each to 3 significant figures, and write down the interquartile range.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mean", answer: 2.97, tolerance: 0.005 },
              { label: "Standard deviation", answer: 1.22, tolerance: 0.005 },
              { label: "Interquartile range", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean of a frequency table", statement: "$\\bar{x}=\\dfrac{\\sum fx}{\\sum f}$" },
              { kind: "definition", name: "Standard deviation", statement: "$\\sigma=\\sqrt{\\dfrac{\\sum f(x-\\bar{x})^2}{n}}$ (population standard deviation, as given by the GDC)." },
            ],
            steps: [
              { reasoning: "Enter the values and frequencies in the GDC (one-variable statistics). Check: $\\sum fx = 89$ and $n=30$.", working: "\\bar{x}=\\frac{89}{30}=2.97", marks: 2, markCode: "M" },
              { reasoning: "Read the standard deviation $\\sigma_x$ from the GDC. Check: $\\sum fx^2=309$, so $\\sigma^2=\\frac{309}{30}-\\left(\\frac{89}{30}\\right)^2\\approx1.499$.", working: "\\sigma \\approx 1.22", marks: 1, markCode: "A" },
              { reasoning: "The cumulative frequencies are $4, 11, 20, 26, 30$. The lower quartile is the 8th value and the upper quartile the 23rd value, giving $Q_1=2$ and $Q_3=4$.", working: "\\mathrm{IQR}=4-2=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean $2.97$, standard deviation $1.22$, $\\mathrm{IQR}=2$",
            commonErrors: ["Using the sample standard deviation $s_{n-1}$ (which gives $1.25$).", "Averaging the frequencies instead of using $\\sum fx / \\sum f$."],
            examinerNote: "Award M1 for correct GDC entry or method, A1 for the mean, A1 for the standard deviation and A1 for the IQR.",
          },
        },
        {
          id: "aasl-u4-descriptive-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The times, in minutes, that students take to travel to school are summarised by: minimum $12$, lower quartile $20$, median $26$, upper quartile $34$, maximum $61$.\n\\nThe school has $320$ girls and $180$ boys.",
          parts: [
            { label: "a", prompt: "Write down the interquartile range.", marks: 1 },
            { label: "b", prompt: "Show that the maximum value of $61$ minutes is an outlier.", marks: 2 },
            { label: "c", prompt: "Each time is converted to seconds. Find the interquartile range and the median in seconds.", marks: 2 },
            { label: "d", prompt: "A stratified sample of $50$ students is to be taken from the school. Find the number of girls and the number of boys in the sample, and state one reason a stratified sample is suitable.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Interquartile range (minutes)", answer: 14 },
              { label: "(c) Interquartile range (seconds)", answer: 840 },
              { label: "(c) Median (seconds)", answer: 1560 },
              { label: "(d) Girls in the sample", answer: 32 },
              { label: "(d) Boys in the sample", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Outlier", statement: "A value above $Q_3+1.5\\,\\mathrm{IQR}$ is an outlier." },
              { kind: "property", name: "Linear transformation", statement: "Multiplying all data by $k$ multiplies the median and IQR by $k$." },
              { kind: "principle", name: "Stratified sampling", statement: "The number sampled from each stratum is proportional to the stratum's size in the population." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the quartiles.", working: "\\mathrm{IQR}=34-20=14", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Compute the upper fence.", working: "34+1.5(14)=55", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compare with the maximum. (AG)", working: "61>55 \\Rightarrow \\text{outlier}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Multiply the IQR by $60$ (the shift does not apply here, only scaling).", working: "14\\times60=840", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply the median by $60$.", working: "26\\times60=1560", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each stratum is sampled in proportion to its size, with $500$ students in total.", working: "\\frac{320}{500}\\times50=32,\\quad \\frac{180}{500}\\times50=18", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Boys and girls may differ in travel patterns; a stratified sample guarantees both groups are represented in the correct proportion.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $14$ (b) $34+1.5(14)=55<61$ (c) IQR $840$ s, median $1560$ s (d) $32$ girls and $18$ boys; the sample represents both groups proportionately.",
            commonErrors: ["Comparing the maximum with $Q_3$ rather than $Q_3+1.5\\,\\mathrm{IQR}$.", "Rounding sample sizes so the total is not $50$."],
          },
        },
        {
          id: "aasl-u4-descriptive-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A data set has mean $8$ and standard deviation $2$. Each value $x$ is transformed to $y = -3x + 7$. What are the mean and standard deviation of the new data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mean $-17$, standard deviation $1$" },
              { id: "b", text: "Mean $-17$, standard deviation $6$" },
              { id: "c", text: "Mean $-17$, standard deviation $-6$" },
              { id: "d", text: "Mean $31$, standard deviation $6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear transformation", statement: "If $y=ax+b$ then $\\bar{y}=a\\bar{x}+b$ and $\\sigma_y=|a|\\sigma_x$." },
            ],
            steps: [
              { reasoning: "Apply the same transformation to the mean.", working: "\\bar{y}=-3(8)+7=-17", marks: 1, markCode: "A" },
              { reasoning: "Scale the standard deviation by $|a|=3$; adding $7$ does not change spread and $\\sigma$ cannot be negative.", working: "\\sigma_y=3\\times2=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Mean $-17$, standard deviation $6$",
            commonErrors: ["Applying the transformation to the standard deviation as $-3(2)+7=1$.", "Keeping the sign of $a$ in the standard deviation."],
          },
        },
        {
          id: "aasl-u4-descriptive-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For an ordered data set, $Q_1=12$ and $Q_3=18$. Under the $1.5\\times\\mathrm{IQR}$ rule, which of the following values is an outlier?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$26$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Outlier fences", statement: "The fences are $Q_1-1.5\\,\\mathrm{IQR}$ and $Q_3+1.5\\,\\mathrm{IQR}$." },
            ],
            steps: [
              { reasoning: "Compute the IQR and both fences.", working: "\\mathrm{IQR}=18-12=6,\\quad \\text{fences}=12-9=3 \\text{ and } 18+9=27", marks: 1, markCode: "M" },
              { reasoning: "A value outside the fences is an outlier; only $30>27$ qualifies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $30$ is an outlier",
            commonErrors: ["Comparing the value with $Q_3$ alone instead of the fence."],
          },
        },
        {
          id: "aasl-u4-descriptive-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A school has $320$ girls and $180$ boys. A stratified sample of $25$ students is taken, with the sample size in each group proportional to the group size. How many girls are in the sample?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$13$" },
              { id: "c", text: "$16$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stratified sampling", statement: "Sample each stratum in proportion to its size in the population." },
            ],
            steps: [
              { reasoning: "There are $500$ students in total; girls make up $\\frac{320}{500}$ of the population.", working: "\\frac{320}{500}\\times25=16", marks: 1, markCode: "M" },
              { reasoning: "The remaining $9$ students are boys ($\\frac{180}{500}\\times25=9$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $16$ girls",
            commonErrors: ["Splitting the sample evenly instead of proportionally."],
          },
        },
        {
          id: "aasl-u4-descriptive-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Every value $x$ in a data set is increased by $10$ to form a new data set $y=x+10$. Which summary statistic is unchanged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The standard deviation" },
              { id: "b", text: "The mean" },
              { id: "c", text: "The maximum" },
              { id: "d", text: "The median" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear transformation", statement: "If $y=ax+b$ then $\\sigma_y=|a|\\sigma_x$: adding a constant shifts the data but does not change spread." },
            ],
            steps: [
              { reasoning: "Here $a=1$, so all measures of spread are unchanged while measures of centre increase by $10$.", working: "\\sigma_y=|1|\\sigma_x=\\sigma_x", marks: 1, markCode: "M" },
              { reasoning: "The mean, median and maximum all increase by $10$; the standard deviation stays the same.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The standard deviation",
            commonErrors: ["Thinking the mean and standard deviation change by the same amount."],
          },
        },
        {
          id: "aasl-u4-descriptive-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The following data set is already in order: $2,\\ 4,\\ 5,\\ 7,\\ 9,\\ 10,\\ 12,\\ 14$.\n\\nFind the lower quartile $Q_1$, the upper quartile $Q_3$, and the interquartile range.",
          response: {
            type: "numeric",
            parts: [
              { label: "$Q_1$", answer: 4.5 },
              { label: "$Q_3$", answer: 11 },
              { label: "Interquartile range", answer: 6.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quartiles", statement: "$Q_1$ is the median of the lower half and $Q_3$ the median of the upper half of the ordered data." },
              { kind: "formula", name: "Interquartile range", statement: "$\\mathrm{IQR}=Q_3-Q_1$" },
            ],
            steps: [
              { reasoning: "With $8$ values the lower half is $2,4,5,7$ and the upper half is $9,10,12,14$.", working: "Q_1=\\frac{4+5}{2}=4.5,\\quad Q_3=\\frac{10+12}{2}=11", marks: 2, markCode: "A" },
              { reasoning: "Subtract the quartiles.", working: "\\mathrm{IQR}=11-4.5=6.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q_1=4.5$, $Q_3=11$, $\\mathrm{IQR}=6.5$",
            commonErrors: ["Using the 2nd and 6th ordered values instead of medians of the halves."],
          },
        },
        {
          id: "aasl-u4-descriptive-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A data set has mean $14$, median $13$ and standard deviation $5$. Each value $x$ is transformed to $y=\\frac{x+3}{2}$.\n\\nFind the new mean, the new median and the new standard deviation.",
          response: {
            type: "numeric",
            parts: [
              { label: "New mean", answer: 8.5 },
              { label: "New median", answer: 8 },
              { label: "New standard deviation", answer: 2.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear transformation", statement: "If $y=ax+b$ then $\\bar{y}=a\\bar{x}+b$, median $\\to a\\,\\text{median}+b$ and $\\sigma_y=|a|\\sigma_x$." },
            ],
            steps: [
              { reasoning: "Here $a=\\frac12$ and $b=\\frac32$; apply the rule to the mean.", working: "\\bar{y}=\\frac{14+3}{2}=8.5", marks: 1, markCode: "M" },
              { reasoning: "The median transforms in the same way as the data.", working: "\\text{median}=\\frac{13+3}{2}=8", marks: 1, markCode: "A" },
              { reasoning: "The standard deviation is scaled by $|a|=\\frac12$ only.", working: "\\sigma_y=\\frac12\\times5=2.5", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Mean $8.5$, median $8$, standard deviation $2.5$",
            commonErrors: ["Adding $3$ to the standard deviation.", "Dividing the standard deviation by $5$ instead of by $2$."],
          },
        },
        {
          id: "aasl-u4-descriptive-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For an ordered data set, $Q_1=12$ and $Q_3=20$.\n\\nFind the lower fence and the upper fence used to identify outliers under the $1.5\\times\\mathrm{IQR}$ rule.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lower fence", answer: 0 },
              { label: "Upper fence", answer: 32 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Outlier fences", statement: "Fences are $Q_1-1.5\\,\\mathrm{IQR}$ and $Q_3+1.5\\,\\mathrm{IQR}$." },
            ],
            steps: [
              { reasoning: "Compute the IQR.", working: "\\mathrm{IQR}=20-12=8", marks: 1, markCode: "M" },
              { reasoning: "Find both fences.", working: "12-1.5(8)=0,\\quad 20+1.5(8)=32", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Lower fence $0$, upper fence $32$",
            commonErrors: ["Using $Q_1$ and $Q_3$ themselves as the fences."],
          },
        },
        {
          id: "aasl-u4-descriptive-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The marks, $x$, of $60$ students in a test are summarised by: minimum $20$, lower quartile $35$, median $50$, upper quartile $65$, maximum $115$.",
          parts: [
            { label: "a", prompt: "Write down the interquartile range.", marks: 1 },
            { label: "b", prompt: "Show that the maximum mark of $115$ is an outlier.", marks: 2 },
            { label: "c", prompt: "Each mark is increased by $5$ bonus points. Write down the new lower quartile, median and upper quartile.", marks: 2 },
            { label: "d", prompt: "The $60$ students come from three houses of sizes $160$, $140$ and $100$. A stratified sample of $60$ students is taken in proportion to house size. Find the number of students sampled from each house, and state one reason why a stratified sample is appropriate here.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Outlier", statement: "A value above $Q_3+1.5\\,\\mathrm{IQR}$ is an outlier." },
              { kind: "property", name: "Linear transformation", statement: "Adding a constant shifts the mean, median and quartiles by that constant without changing spread." },
              { kind: "principle", name: "Stratified sampling", statement: "Sample sizes are proportional to stratum sizes." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the quartiles.", working: "\\mathrm{IQR}=65-35=30", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Compute the upper fence.", working: "65+1.5(30)=110", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compare with the maximum (AG).", working: "115>110\\Rightarrow\\text{outlier}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Each quartile and the median increase by $5$.", working: "Q_1=40,\\quad \\text{median}=55,\\quad Q_3=70", marks: 2, markCode: "A" },
              { part: "d", reasoning: "The population has $400$ students; scale each house size by $\\frac{60}{400}=\\frac{3}{20}$.", working: "\\frac{160}{400}\\times60=24,\\quad \\frac{140}{400}\\times60=21,\\quad \\frac{100}{400}\\times60=15", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Each house is guaranteed representation in the correct proportion, so differences between houses cannot distort the sample.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $30$ (b) $65+1.5(30)=110<115$ (c) $40$, $55$, $70$ (d) $24$, $21$, $15$",
            commonErrors: ["Doubling the IQR when adding the bonus.", "Rounding house sample sizes so the total is not $60$."],
          },
        },
        {
          id: "aasl-u4-descriptive-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "The reaction times, in hundredths of a second, of $12$ athletes are recorded in order:\n\n$4,\\ 7,\\ 8,\\ 9,\\ 10,\\ 11,\\ 12,\\ 13,\\ 14,\\ 15,\\ 16,\\ 40$",
          parts: [
            { label: "a", prompt: "Find $Q_1$, $Q_3$ and the interquartile range.", marks: 2 },
            { label: "b", prompt: "Show that $40$ is an outlier.", marks: 2 },
            { label: "c", prompt: "Each time $x$ is transformed to $y=2x-1$. The mean of the original data is $13.25$ and its standard deviation is $8.73$ (3 s.f.). Find the new mean and the new standard deviation.", marks: 3 },
            { label: "d", prompt: "Explain why the median is a more reliable measure of centre for this data set than the mean.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quartiles", statement: "$Q_1$ and $Q_3$ are the medians of the lower and upper halves of the ordered data." },
              { kind: "property", name: "Linear transformation", statement: "If $y=ax+b$ then $\\bar{y}=a\\bar{x}+b$ and $\\sigma_y=|a|\\sigma_x$." },
            ],
            steps: [
              { part: "a", reasoning: "With $12$ values, the lower half is $4,7,8,9,10,11$ and the upper half is $12,13,14,15,16,40$.", working: "Q_1=\\frac{8+9}{2}=8.5,\\quad Q_3=\\frac{14+15}{2}=14.5,\\quad \\mathrm{IQR}=6", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Find the upper fence.", working: "14.5+1.5(6)=23.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compare (AG).", working: "40>23.5\\Rightarrow\\text{outlier}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Apply the transformation to the mean.", working: "\\bar{y}=2(13.25)-1=25.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Scale the standard deviation by $|a|=2$; the shift does not affect spread.", working: "\\sigma_y=2(8.73)=17.5", marks: 2, markCode: "A" },
              { part: "d", reasoning: "The outlier $40$ pulls the mean upwards but does not affect the median, which depends only on the middle values.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The median therefore better represents the typical athlete.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $Q_1=8.5$, $Q_3=14.5$, IQR $6$ (b) $14.5+1.5(6)=23.5<40$ (c) mean $25.5$, $\\sigma=17.5$ (d) the median is resistant to the outlier.",
            commonErrors: ["Computing the standard deviation of $y$ as $2(8.73)-1$.", "Claiming the mean is always the better measure."],
          },
        },
        {
          id: "aasl-u4-descriptive-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The number of goals scored by a hockey team in $20$ matches has the following frequency distribution.\n\n| Goals $x$ | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| Frequency | 3 | 5 | 7 | 5 |\n\\nWhat is the mean number of goals scored?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.85$" },
              { id: "b", text: "$3.00$" },
              { id: "c", text: "$2.70$" },
              { id: "d", text: "$2.50$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean of a frequency table", statement: "$\\bar{x}=\\dfrac{\\sum fx}{\\sum f}$" },
            ],
            steps: [
              { reasoning: "Compute $\\sum fx$ and $\\sum f$.", working: "\\sum fx=1(3)+2(5)+3(7)+4(5)=54,\\quad \\sum f=20", marks: 1, markCode: "M" },
              { reasoning: "Divide.", working: "\\bar{x}=\\frac{54}{20}=2.70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\bar{x}=2.70$",
            commonErrors: ["Averaging $1,2,3,4$ to get $2.5$ without weighting by frequency."],
          },
        },
        {
          id: "aasl-u4-descriptive-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A data set is transformed by each of the following rules. Which transformation leaves the interquartile range unchanged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=3x-1$" },
              { id: "b", text: "$y=\\frac{x}{2}$" },
              { id: "c", text: "$y=2x$" },
              { id: "d", text: "$y=x+4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear transformation", statement: "The IQR is multiplied by $|a|$ under $y=ax+b$; a pure shift ($a=1$) leaves it unchanged." },
            ],
            steps: [
              { reasoning: "Only the multiplier $a$ affects spread; adding a constant does not.", marks: 1, markCode: "M" },
              { reasoning: "For $y=x+4$, $a=1$ so $\\mathrm{IQR}_y=\\mathrm{IQR}_x$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $y=x+4$",
            commonErrors: ["Thinking every transformation changes the IQR."],
          },
        },
        {
          id: "aasl-u4-descriptive-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher wants to survey students about their favourite subject. Which sampling method best ensures that students from each year group are represented in proportion to their numbers in the school?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convenience sampling of students in the canteen" },
              { id: "b", text: "Voluntary response sampling" },
              { id: "c", text: "Simple random sampling from the whole school" },
              { id: "d", text: "Stratified sampling with year group as the strata" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stratified sampling", statement: "The population is divided into groups (strata) and a random sample is taken from each in proportion to its size." },
            ],
            steps: [
              { reasoning: "Proportional representation of subgroups is exactly what stratified sampling guarantees.", marks: 1, markCode: "R" },
              { reasoning: "The other methods do not control representation by year group.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stratified sampling with year group as the strata",
            commonErrors: ["Choosing simple random sampling and assuming it always gives proportional groups."],
          },
        },
      ],
    },
    {
      id: "aasl-u4-regression",
      title: "Correlation and regression",
      skill: "Interpret Pearson's r and use regression lines of y on x and x on y to make estimates.",
      lesson: {
        sections: [
          {
            heading: "Pearson's correlation coefficient",
            body: "The value $r$ satisfies $-1\\le r\\le1$. The sign gives the direction and $|r|$ the strength of the **linear** association: roughly $|r|<0.3$ is weak, $0.3\\le|r|<0.7$ moderate and $|r|\\ge0.7$ strong. A value near $0$ does not rule out a non-linear relationship, and correlation does not prove causation.",
          },
          {
            heading: "Two regression lines",
            body: "The regression line of $y$ on $x$ is $y=ax+b$ with $a=\\dfrac{S_{xy}}{S_{xx}}$ and it passes through $(\\bar{x},\\bar{y})$. Use it to estimate $y$ for a given $x$. To estimate $x$ from a known $y$ you must use the regression line of $x$ on $y$, with gradient $\\dfrac{S_{xy}}{S_{yy}}$ in $x = cy + d$. Estimates inside the data range (interpolation) are more reliable than those outside it (extrapolation), especially when $|r|$ is close to $1$.",
          },
        ],
        keyFormulas: [
          { name: "Gradient of $y$ on $x$", statement: "$a=\\dfrac{S_{xy}}{S_{xx}}$, where $S_{xy}=\\sum(x-\\bar{x})(y-\\bar{y})$" },
          { name: "Gradient of $x$ on $y$", statement: "$c=\\dfrac{S_{xy}}{S_{yy}}$" },
          { name: "Pearson's $r$", statement: "$r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$" },
        ],
        workedExample: {
          problem: "For $(1,2),(2,4),(3,5)$ the regression line of $y$ on $x$ is $y = 1.5x + 0.667$ (3 s.f.). Estimate $y$ when $x=4$ and comment on reliability if the data range is $1\\le x\\le3$.",
          solution: "$y=1.5(4)+0.667=6.667\\approx6.67$. Since $x=4$ is outside the data range this is extrapolation, so the estimate is less reliable.",
        },
      },
      questions: [
        {
          id: "aasl-u4-regression-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a set of bivariate data, Pearson's correlation coefficient is $r=-0.92$. Which statement best describes the relationship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No linear correlation" },
              { id: "b", text: "Weak negative linear correlation" },
              { id: "c", text: "Strong positive linear correlation" },
              { id: "d", text: "Strong negative linear correlation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interpreting $r$", statement: "The sign of $r$ gives the direction and $|r|$ the strength of linear association." },
            ],
            steps: [
              { reasoning: "$r<0$, so as $x$ increases $y$ tends to decrease: negative correlation.", marks: 1, markCode: "A" },
              { reasoning: "$|r|=0.92$ is close to $1$, so the linear relationship is strong.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Strong negative linear correlation",
            commonErrors: ["Treating a negative value of $r$ as indicating a weak relationship."],
          },
        },
        {
          id: "aasl-u4-regression-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The regression line of $y$ on $x$ for a data set is $y = ax + 3$. The mean of the data is $(\\bar{x},\\bar{y})=(4,11)$.\n\\nFind the value of $a$, and hence estimate the value of $y$ when $x=7$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 2 },
              { label: "Estimate of $y$ when $x=7$", answer: 17 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mean point", statement: "The regression line of $y$ on $x$ passes through $(\\bar{x},\\bar{y})$." },
            ],
            steps: [
              { reasoning: "Substitute the mean point into the equation of the line.", working: "11 = 4a + 3", marks: 1, markCode: "M" },
              { reasoning: "Solve for $a$.", working: "a=2", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=7$ into $y=2x+3$.", working: "y=2(7)+3=17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=2$; estimate $y=17$",
            commonErrors: ["Substituting $\\bar{y}$ for $x$ or swapping the means."],
          },
        },
        {
          id: "aasl-u4-regression-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Five pairs of values are recorded: $(1,3),\\ (2,5),\\ (3,4),\\ (4,8),\\ (5,10)$.\n\\nUse your GDC to find Pearson's correlation coefficient $r$ and the equation of the regression line of $y$ on $x$ in the form $y=ax+b$. Hence estimate $y$ when $x=6$. Give all answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$r$", answer: 0.922, tolerance: 0.002 },
              { label: "$a$", answer: 1.7, tolerance: 0.005 },
              { label: "$b$", answer: 0.9, tolerance: 0.005 },
              { label: "Estimate of $y$ when $x=6$", answer: 11.1, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pearson's $r$", statement: "$r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$" },
              { kind: "formula", name: "Regression of $y$ on $x$", statement: "$a=\\dfrac{S_{xy}}{S_{xx}}$ and $b=\\bar{y}-a\\bar{x}$." },
            ],
            steps: [
              { reasoning: "Enter the data into the GDC statistics mode (check: $\\bar{x}=3$, $\\bar{y}=6$, $S_{xy}=17$, $S_{xx}=10$, $S_{yy}=34$).", working: "r=\\frac{17}{\\sqrt{10\\times34}}\\approx0.922", marks: 1, markCode: "A" },
              { reasoning: "Gradient and intercept of the regression line.", working: "a=\\frac{17}{10}=1.7,\\quad b=6-1.7(3)=0.9", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=6$ into the regression equation.", working: "y=1.7(6)+0.9", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "y=11.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r\\approx0.922$; $y=1.7x+0.9$; estimate $y=11.1$",
            commonErrors: ["Using the regression line of $x$ on $y$.", "Rounding $r$ to $0.92$ and then using this rounded value in later calculations."],
            examinerNote: "The estimate at $x=6$ is extrapolation since the data range is $1\\le x\\le5$. Accept answers consistent with the GDC output (FT).",
          },
        },
        {
          id: "aasl-u4-regression-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A teacher records the number of hours $x$ that five students studied for a test and their score $y$ out of $20$:\n\n| $x$ (hours) | 2 | 4 | 6 | 8 | 10 |\n|---|---|---|---|---|---|\n| $y$ (score) | 5 | 9 | 8 | 14 | 19 |\n\\nGive answers to 3 significant figures where not exact.",
          parts: [
            { label: "a", prompt: "Find Pearson's correlation coefficient $r$ and describe the correlation.", marks: 2 },
            { label: "b", prompt: "Find the equation of the regression line of $y$ on $x$, in the form $y=ax+b$.", marks: 2 },
            { label: "c", prompt: "Interpret the value of $a$ in context, and estimate the score of a student who studies for $7$ hours.", marks: 2 },
            { label: "d", prompt: "A student scored $12$. Estimate how many hours the student studied, stating which regression line you use and why.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $r$", answer: 0.945, tolerance: 0.002 },
              { label: "(b) $a$", answer: 1.65, tolerance: 0.005 },
              { label: "(b) $b$", answer: 1.1, tolerance: 0.005 },
              { label: "(c) Estimated score when $x=7$", answer: 12.65, tolerance: 0.06 },
              { label: "(d) Estimated hours when $y=12$", answer: 6.54, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pearson's $r$", statement: "$r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$ with $S_{xx}=40$, $S_{yy}=122$, $S_{xy}=66$ here." },
              { kind: "principle", name: "Choice of regression line", statement: "To estimate $x$ from $y$ use the regression line of $x$ on $y$, not a rearrangement of $y$ on $x$." },
            ],
            steps: [
              { part: "a", reasoning: "Use the GDC (or $\\bar{x}=6$, $\\bar{y}=11$).", working: "r=\\frac{66}{\\sqrt{40\\times122}}\\approx0.945", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Value is close to $1$ and positive.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Gradient is $S_{xy}/S_{xx}$.", working: "a=\\frac{66}{40}=1.65", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the mean point to find $b$.", working: "b=11-1.65(6)=1.1,\\quad y=1.65x+1.1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each extra hour of study is associated with an increase of $1.65$ marks on average.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Substitute $x=7$.", working: "y=1.65(7)+1.1=12.65\\approx12.7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The unknown is $x$ and $y$ is given, so use the regression line of $x$ on $y$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Gradient $\\frac{66}{122}\\approx0.541$ and the line passes through $(11,6)$ so $x = 0.541y+0.0492$.", working: "x=0.5410(12)+0.0492", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "x\\approx6.54", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $r\\approx0.945$, strong positive. (b) $y=1.65x+1.1$. (c) $1.65$ marks per hour; $12.7$. (d) Use $x$ on $y$: about $6.54$ hours.",
            commonErrors: ["Rearranging $y=1.65x+1.1$ to estimate $x$, which would give $6.61$ and is not the least-squares line for $x$.", "Forgetting that the interpretation of the gradient must be in context."],
            examinerNote: "Accept $12.65$ for the estimate in (c) at full marks. In (d) a candidate who rearranges the $y$ on $x$ line should gain only the final mark's FT if the reason is incorrect.",
          },
        },
        {
          id: "aasl-u4-regression-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a set of bivariate data, Pearson's correlation coefficient is $r = 0.18$. Which statement best describes the relationship between the two variables?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strong positive linear correlation" },
              { id: "b", text: "Weak negative linear correlation" },
              { id: "c", text: "Strong negative linear correlation" },
              { id: "d", text: "Weak positive linear correlation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interpreting $r$", statement: "The sign of $r$ gives the direction and $|r|$ gives the strength of the linear association." },
            ],
            steps: [
              { reasoning: "$r>0$, so the variables tend to increase together.", marks: 1, markCode: "A" },
              { reasoning: "$|r|=0.18$ is small, so the linear relationship is weak.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Weak positive linear correlation",
            commonErrors: ["Judging strength from the sign rather than from $|r|$."],
          },
        },
        {
          id: "aasl-u4-regression-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The regression line of $y$ on $x$ has equation $y = 4x + b$. The means of the data are $\\bar{x} = 3$ and $\\bar{y} = 15$.\n\nWhat is the value of $b$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$27$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mean point", statement: "The regression line of $y$ on $x$ passes through $(\\bar{x},\\bar{y})$." },
            ],
            steps: [
              { reasoning: "Substitute the mean point into the equation of the line.", working: "15 = 4(3) + b", marks: 1, markCode: "M" },
              { reasoning: "Solve for $b$.", working: "b = 15 - 12 = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $b = 3$",
            commonErrors: ["Using $\\bar{x}$ in place of $\\bar{y}$, giving $b = 3 - 12 = -9$."],
          },
        },
        {
          id: "aasl-u4-regression-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher has paired data $(x, y)$ and wants to estimate the value of $x$ corresponding to a particular value of $y$. Which line should be used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The line joining the first and last data points" },
              { id: "b", text: "The regression line of $x$ on $y$" },
              { id: "c", text: "The regression line of $y$ on $x$, rearranged to make $x$ the subject" },
              { id: "d", text: "The line through the origin that is closest to the points" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choice of regression line", statement: "To estimate $x$ from a known $y$, use the regression line of $x$ on $y$; rearranging $y$ on $x$ gives a different, incorrect line." },
            ],
            steps: [
              { reasoning: "The unknown is $x$ and the given value is $y$, so the line must model $x$ as a function of $y$.", marks: 1, markCode: "R" },
              { reasoning: "That line is the regression line of $x$ on $y$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The regression line of $x$ on $y$",
            commonErrors: ["Rearranging the $y$ on $x$ line, which is not the least-squares line for $x$."],
          },
        },
        {
          id: "aasl-u4-regression-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The regression line of $y$ on $x$ has equation $y = ax + 2$ and passes through the point $(4, 10)$.\n\nFind the value of $a$, and hence estimate the value of $y$ when $x = 9$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 2 },
              { label: "Estimate of $y$ when $x = 9$", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Equation of the line", statement: "Any point on the regression line satisfies its equation." },
            ],
            steps: [
              { reasoning: "Substitute $(4, 10)$ into $y = ax + 2$.", working: "10 = 4a + 2", marks: 1, markCode: "M" },
              { reasoning: "Solve for $a$.", working: "a = 2", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x = 9$ into $y = 2x + 2$.", working: "y = 2(9) + 2 = 20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = 2$; estimate $y = 20$",
            commonErrors: ["Solving $10 = 4a + 2$ as $a = \\frac{10}{4} + 2$ or similar sign errors."],
          },
        },
        {
          id: "aasl-u4-regression-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The regression line of $y$ on $x$ for a data set is $y = 1.4x - 0.8$. The data were collected for values of $x$ in the range $2 \\le x \\le 9$.\n\nFind the estimated value of $y$ when $x = 5$, and the estimated value of $y$ when $x = 11$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Estimate when $x = 5$", answer: 6.2 },
              { label: "Estimate when $x = 11$", answer: 14.6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Using a regression line", statement: "Substitute the given $x$ into the equation of the regression line of $y$ on $x$." },
            ],
            steps: [
              { reasoning: "Substitute $x = 5$.", working: "y = 1.4(5) - 0.8 = 6.2", marks: 2, markCode: "A" },
              { reasoning: "Substitute $x = 11$; this is extrapolation since $11 > 9$, but the same calculation applies.", working: "y = 1.4(11) - 0.8 = 14.6", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Estimates $6.2$ and $14.6$ (the second is extrapolation and less reliable)",
            commonErrors: ["Using the equation with $x$ and $y$ swapped."],
            examinerNote: "Award full marks for the numerical answers; the reliability comment is not required here.",
          },
        },
        {
          id: "aasl-u4-regression-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Pearson's correlation coefficient for a data set is $r \\approx 0$. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The regression line of $y$ on $x$ is horizontal" },
              { id: "b", text: "There may still be a strong non-linear relationship" },
              { id: "c", text: "The two variables are independent" },
              { id: "d", text: "There is definitely no relationship between the variables" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limitations of $r$", statement: "$r$ measures only linear association; $r \\approx 0$ does not rule out a non-linear relationship." },
            ],
            steps: [
              { reasoning: "$r$ detects only linear patterns, so a curved relationship can give $r \\approx 0$.", marks: 1, markCode: "R" },
              { reasoning: "Independence and a horizontal line are stronger claims that $r \\approx 0$ alone cannot establish.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** There may still be a strong non-linear relationship",
            commonErrors: ["Interpreting $r \\approx 0$ as proof of no relationship at all."],
          },
        },
        {
          id: "aasl-u4-regression-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "For a bivariate data set, $S_{xx} = 10$, $S_{yy} = 25$, $S_{xy} = 12.5$, $\\bar{x} = 4$ and $\\bar{y} = 9$.\n\nFind Pearson's correlation coefficient $r$, and hence find the estimated value of $y$ when $x = 6$ using the regression line of $y$ on $x$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$r$", answer: 0.791, tolerance: 0.001 },
              { label: "Estimate of $y$ when $x = 6$", answer: 11.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pearson's $r$", statement: "$r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$" },
              { kind: "formula", name: "Regression of $y$ on $x$", statement: "$a=\\dfrac{S_{xy}}{S_{xx}}$ and $b=\\bar{y}-a\\bar{x}$." },
            ],
            steps: [
              { reasoning: "Substitute into the formula for $r$.", working: "r=\\frac{12.5}{\\sqrt{10\\times25}}=\\frac{12.5}{\\sqrt{250}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "r \\approx 0.791", marks: 1, markCode: "A" },
              { reasoning: "Find the gradient and intercept, then substitute $x=6$.", working: "a=\\frac{12.5}{10}=1.25,\\quad b=9-1.25(4)=4,\\quad y=1.25(6)+4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "y=11.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r \\approx 0.791$; estimate $y = 11.5$",
            commonErrors: ["Using $S_{yy}$ instead of $S_{xx}$ in the denominator of the gradient."],
          },
        },
        {
          id: "aasl-u4-regression-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A coach records the number of hours $x$ that five athletes trained per week and their score $y$ out of $30$ in a fitness test.\n\n| $x$ (hours) | 3 | 5 | 7 | 9 | 11 |\n|---|---|---|---|---|---|\n| $y$ (score) | 8 | 11 | 15 | 18 | 22 |\n\nGive answers to 3 significant figures where not exact.",
          parts: [
            { label: "a", prompt: "Find Pearson's correlation coefficient $r$ and describe the correlation.", marks: 2 },
            { label: "b", prompt: "Find the equation of the regression line of $y$ on $x$ in the form $y = ax + b$.", marks: 2 },
            { label: "c", prompt: "Interpret the value of $a$ in context, and use the regression line to estimate the score of an athlete who trains for $12$ hours per week.", marks: 2 },
            { label: "d", prompt: "A coach wants to estimate the number of training hours for an athlete who scored $20$. State which regression line must be used, and find the estimate.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pearson's $r$ and regression", statement: "$r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$, $a=\\dfrac{S_{xy}}{S_{xx}}$, $b=\\bar{y}-a\\bar{x}$." },
              { kind: "principle", name: "Choice of regression line", statement: "To estimate $x$ from $y$, use the regression line of $x$ on $y$, with gradient $\\dfrac{S_{xy}}{S_{yy}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Use the GDC (check: $\\bar{x}=7$, $\\bar{y}=14.8$, $S_{xx}=40$, $S_{yy}=122.8$, $S_{xy}=70$).", working: "r=\\frac{70}{\\sqrt{40\\times122.8}}\\approx0.999", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$r$ is close to $1$ and positive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gradient of $y$ on $x$.", working: "a=\\frac{70}{40}=1.75", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the mean point to find the intercept.", working: "b=14.8-1.75(7)=2.55,\\quad y=1.75x+2.55", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each additional hour of training per week is associated with an increase of $1.75$ points on average.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x=12$ (extrapolation, since $12>11$).", working: "y=1.75(12)+2.55=23.6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The unknown is $x$ and $y$ is given, so the regression line of $x$ on $y$ is required.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Gradient $\\frac{70}{122.8}\\approx0.570$ and the line passes through $(14.8,7)$, giving $x = 0.570y - 1.43$.", working: "x=0.5697(20)-1.432", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "x \\approx 9.96", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $r \\approx 0.999$, strong positive (b) $y = 1.75x + 2.55$ (c) $1.75$ points per extra hour; estimate $23.6$ (d) use $x$ on $y$: about $9.96$ hours",
            commonErrors: ["Rearranging $y = 1.75x + 2.55$ to estimate $x$, which does not give the regression line of $x$ on $y$.", "Forgetting to interpret the gradient in context."],
            examinerNote: "Accept $23.55$ for the estimate in (c). In (d), a candidate who rearranges the $y$ on $x$ line should gain at most the final mark by follow-through.",
          },
        },
        {
          id: "aasl-u4-regression-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Paired data $(x, y)$ were collected for values of $x$ in the range $1 \\le x \\le 10$. A student uses the regression line of $y$ on $x$ to estimate $y$ for each of the following values of $x$: $3$, $7$, $9$ and $14$.\n\nFor which value of $x$ is the estimate least reliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 9$" },
              { id: "b", text: "$x = 3$" },
              { id: "c", text: "$x = 7$" },
              { id: "d", text: "$x = 14$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Extrapolation", statement: "Estimates for $x$ outside the range of the data are extrapolations and are less reliable than interpolations." },
            ],
            steps: [
              { reasoning: "Values $3$, $7$ and $9$ lie inside $[1,10]$, so they are interpolations.", marks: 1, markCode: "R" },
              { reasoning: "$14$ lies outside the data range, so the estimate is an extrapolation and least reliable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $x = 14$",
            commonErrors: ["Choosing the value farthest from the mean rather than the one outside the data range."],
          },
        },
        {
          id: "aasl-u4-regression-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "For a bivariate data set, the regression line of $y$ on $x$ is $y = 2.2x - 0.9$ and the regression line of $x$ on $y$ is $x = 0.35y + 1.5$.\n\nUse the appropriate line to estimate $y$ when $x = 6$, and to estimate $x$ when $y = 10$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Estimate of $y$ when $x = 6$", answer: 12.3 },
              { label: "Estimate of $x$ when $y = 10$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choosing the line", statement: "Use $y$ on $x$ to estimate $y$ from $x$, and $x$ on $y$ to estimate $x$ from $y$." },
            ],
            steps: [
              { reasoning: "Substitute into the $y$ on $x$ line.", working: "y = 2.2(6) - 0.9 = 12.3", marks: 2, markCode: "A" },
              { reasoning: "Substitute into the $x$ on $y$ line (not the rearranged $y$ on $x$ line).", working: "x = 0.35(10) + 1.5 = 5.0", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Estimate $y = 12.3$; estimate $x = 5.0$",
            commonErrors: ["Rearranging $y = 2.2x - 0.9$ to find $x$ when $y = 10$, giving $x \\approx 4.95$ instead of $5.0$."],
          },
        },
        {
          id: "aasl-u4-regression-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher finds a strong positive correlation between the number of ice creams sold and the number of people who drown at a beach. Which conclusion is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buying ice cream causes people to drown" },
              { id: "b", text: "Both variables are likely affected by a third variable, such as temperature" },
              { id: "c", text: "Drowning causes people to buy more ice cream" },
              { id: "d", text: "The strong correlation must be a coincidence" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Correlation and causation", statement: "A correlation between two variables does not by itself prove that one causes the other; a third variable may affect both." },
            ],
            steps: [
              { reasoning: "Correlation alone cannot establish causation in either direction.", marks: 1, markCode: "R" },
              { reasoning: "Hot weather plausibly increases both ice cream sales and the number of swimmers, hence both drownings and sales.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Both variables are likely affected by a third variable, such as temperature",
            commonErrors: ["Assuming the variable with the larger values causes the other."],
          },
        },
        {
          id: "aasl-u4-regression-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "The table shows the heights $x$, in cm, of $6$ seedlings after $2$ weeks and their heights $y$ after $6$ weeks.\n\n| $x$ (cm) | 4 | 6 | 8 | 10 | 12 | 14 |\n|---|---|---|---|---|---|---|\n| $y$ (cm) | 9 | 13 | 12 | 17 | 20 | 25 |\n\nGive answers to 3 significant figures where not exact.",
          parts: [
            { label: "a", prompt: "Find Pearson's correlation coefficient $r$ and describe the correlation.", marks: 2 },
            { label: "b", prompt: "Find the equation of the regression line of $y$ on $x$ in the form $y = ax + b$.", marks: 2 },
            { label: "c", prompt: "Interpret the value of $a$ in context, and use the regression line to estimate the height after $6$ weeks of a seedling that was $15$ cm after $2$ weeks. Comment on the reliability of this estimate.", marks: 2 },
            { label: "d", prompt: "A seedling is $28$ cm tall after $6$ weeks. Estimate its height after $2$ weeks, stating which regression line you use.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pearson's $r$ and regression", statement: "$r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$ with $S_{xx}=70$, $S_{yy}=172$, $S_{xy}=106$ here; $a=\\dfrac{S_{xy}}{S_{xx}}$, $b=\\bar{y}-a\\bar{x}$." },
              { kind: "principle", name: "Choice of regression line", statement: "To estimate $x$ from $y$, use the regression line of $x$ on $y$, with gradient $\\dfrac{S_{xy}}{S_{yy}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Use the GDC (check: $\\bar{x}=9$, $\\bar{y}=16$).", working: "r=\\frac{106}{\\sqrt{70\\times172}}\\approx0.966", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$r$ is close to $1$ and positive, so there is a strong positive linear correlation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gradient of $y$ on $x$.", working: "a=\\frac{106}{70}\\approx1.51", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the mean point to find the intercept.", working: "b=16-1.5143(9)\\approx2.37,\\quad y=1.51x+2.37", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each extra centimetre of height after $2$ weeks is associated with an increase of about $1.51$ cm after $6$ weeks, on average.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x=15$; this is extrapolation since $15>14$, so the estimate is less reliable. Value: $y=1.5143(15)+2.371 \\approx 25.1$ cm.", working: "y=1.5143(15)+2.3714\\approx25.1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The unknown is $x$ (height after $2$ weeks) and $y$ is given, so use the regression line of $x$ on $y$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Gradient $\\frac{106}{172}\\approx0.616$ through $(16,9)$ gives $x = 0.616y - 0.861$.", working: "x=0.6163(28)-0.861", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "x \\approx 16.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $r \\approx 0.966$, strong positive (b) $y = 1.51x + 2.37$ (c) about $1.51$ cm per cm; estimate $\\approx 25.1$ cm, but it is extrapolation (d) use $x$ on $y$: about $16.4$ cm",
            commonErrors: ["Rearranging $y = 1.51x + 2.37$ to estimate $x$ instead of using the regression line of $x$ on $y$.", "Claiming the estimate in (c) is reliable despite being outside the data range."],
            examinerNote: "Accept $25.09$ for the estimate in (c). In (d) a candidate who rearranges the $y$ on $x$ line should gain at most the final mark by follow-through.",
          },
        },
      ],
    },
  ],
};
