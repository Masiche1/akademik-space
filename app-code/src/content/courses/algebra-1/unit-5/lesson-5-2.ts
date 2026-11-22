import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "alg1-u5-5-2",
  code: "5-2",
  title: "Two-Way Tables",
  goal: "I CAN calculate joint, marginal, and conditional relative frequencies and use them to describe possible associations between categorical variables.",
  standards: ["HSS-ID.B.5"],
  vocabulary: [
    { term: "Two-way frequency table", definition: "A table that organizes counts for two categorical variables, including their intersections and totals." },
    { term: "Joint frequency", definition: "A count in the body of a two-way table for observations in both specified categories." },
    { term: "Marginal frequency", definition: "A row or column total showing the count in one category regardless of the other variable." },
    { term: "Relative frequency", definition: "A frequency divided by the total count for the reference group being considered." },
    { term: "Conditional relative frequency", definition: "A relative frequency calculated within a specified subgroup, using that subgroup's total as the denominator." },
    { term: "Association", definition: "A relationship between categorical variables indicated when conditional distributions differ across groups." },
  ],
  concepts: [
    {
      id: "alg1-u5-two-way-frequencies",
      title: "Joint and marginal relative frequencies",
      skill: "Read two-way tables and calculate joint and marginal relative frequencies using the correct total as the denominator.",
      lesson: {
        sections: [
          {
            heading: "Read the table's cells and totals",
            body: "A two-way table groups observations by two categorical variables. A cell in the body is a **joint frequency**: it counts observations that meet both category conditions. A row or column total is a **marginal frequency**: it counts observations in one category without regard to the other variable. The grand total is the number of observations in the full data set.",
          },
          {
            heading: "Turn counts into relative frequencies",
            body: "A **joint relative frequency** is a cell count divided by the grand total. A **marginal relative frequency** is a row or column total divided by the grand total. Relative frequencies can be written as decimals, fractions, or percentages. Check that all joint relative frequencies add to 1 (or 100%), and that the marginal relative frequencies also total 1 in each variable's set of categories.",
          },
        ],
        keyFormulas: [
          { name: "Joint relative frequency", statement: "$\\frac{\\text{cell count}}{\\text{grand total}}$" },
          { name: "Marginal relative frequency", statement: "$\\frac{\\text{row or column total}}{\\text{grand total}}$" },
        ],
        workedExample: {
          problem: "In a group of 40 students, 8 are ninth graders who chose art club. Find the joint relative frequency for ninth grade and art club.",
          solution: "The cell count is 8 and the full-group total is 40, so the joint relative frequency is $8/40=0.20=20\\%$. The denominator is the grand total because this is not restricted to a row or column subgroup.",
        },
      },
      questions: [
        {
          id: "alg1-u5-joint-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A school survey includes 50 students. Twelve are ninth graders who ride the bus. What is the joint relative frequency of being a ninth grader and riding the bus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50\\%$" },
              { id: "b", text: "$38\\%$" },
              { id: "c", text: "$24\\%$" },
              { id: "d", text: "$12\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Joint relative frequency", statement: "Divide the joint cell count by the grand total." },
            ],
            steps: [
              { reasoning: "The joint count is 12; use all 50 students as the denominator because the requested frequency is joint, not conditional.", working: "\\frac{12}{50}=0.24=24\\%", marks: 2, markCode: "M" },
            ],
            finalAnswer: "**(c)** The joint relative frequency is $24\\%$.",
            commonErrors: ["Using 12 as the denominator, which would not produce a relative frequency."],
          },
        },
        {
          id: "alg1-u5-joint-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A survey of 80 students records whether they play a school sport. Forty-eight play a sport, 32 do not, and 20 of the students who play a sport are in ninth grade. Find (1) the marginal relative frequency who play a sport and (2) the joint relative frequency who are ninth graders and play a sport.",
          response: { type: "numeric", parts: [{ label: "Marginal relative frequency", answer: 0.6, tolerance: 0.001 }, { label: "Joint relative frequency", answer: 0.25, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Marginal relative frequency", statement: "Divide the category total by the grand total." },
              { kind: "definition", name: "Joint relative frequency", statement: "Divide the cell count for both categories by the grand total." },
            ],
            steps: [
              { reasoning: "The sport marginal count is 48, so compare it with all 80 students.", working: "\\frac{48}{80}=0.60", marks: 1, markCode: "M" },
              { reasoning: "The ninth-grade sport-playing cell count is 20; use the grand total again for a joint relative frequency.", working: "\\frac{20}{80}=0.25", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(1) $0.60$ (60%) play a sport. (2) $0.25$ (25%) are ninth graders who play a sport.",
            commonErrors: ["Dividing 20 by 48 for part (2); that would be conditional on playing a sport."],
          },
        },
        {
          id: "alg1-u5-joint-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The table summarizes 100 students by whether they have a library card and whether they borrowed a book this month. Find the joint relative frequency of having a card and borrowing a book, then find the marginal relative frequency of having a card. Give each as a percent.\\n\\n| | Borrowed | Did not borrow | Total |\\n|---|---:|---:|---:|\\n| Has card | 30 | 20 | 50 |\\n| No card | 10 | 40 | 50 |\\n| Total | 40 | 60 | 100 |",
          response: { type: "numeric", parts: [{ label: "Joint relative frequency (%)", answer: 30 }, { label: "Marginal relative frequency (%)", answer: 50 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Joint relative frequency", statement: "Divide the cell for both categories by the grand total." },
              { kind: "definition", name: "Marginal relative frequency", statement: "Divide the marginal total for the category by the grand total." },
            ],
            steps: [
              { reasoning: "The joint event uses the cell where 'has card' and 'borrowed' intersect, and the full survey is the reference group.", working: "\\frac{30}{100}\\times100\\%=30\\%", marks: 2, markCode: "M" },
              { reasoning: "The marginal count for having a card is 50, regardless of borrowing status.", working: "\\frac{50}{100}\\times100\\%=50\\%", marks: 2, markCode: "M" },
            ],
            finalAnswer: "Joint relative frequency: $30\\%$. Marginal relative frequency for having a card: $50\\%$.",
            commonErrors: ["Using the row total as the denominator for a joint relative frequency."],
          },
        },
        {
          id: "alg1-u5-joint-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school club survey records the preferred meeting day of 60 students. The table shows the counts.\\n\\n| Grade | Monday | Wednesday | Friday | Total |\\n|---|---:|---:|---:|---:|\\n| Grade 9 | 8 | 10 | 6 | 24 |\\n| Grade 10 | 7 | 9 | 8 | 24 |\\n| Grade 11 | 4 | 3 | 5 | 12 |\\n| Total | 19 | 22 | 19 | 60 |",
          parts: [
            { label: "a", prompt: "Find the joint relative frequency of being in Grade 10 and preferring Wednesday.", marks: 2 },
            { label: "b", prompt: "Find the marginal relative frequency of students preferring Monday.", marks: 2 },
            { label: "c", prompt: "What percent of the surveyed students are in Grade 11?", marks: 2 },
            { label: "d", prompt: "Explain why the denominators for parts (a) and (b) are the same, even though the counts come from different parts of the table.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Joint relative frequency", statement: "A joint cell count is divided by the grand total." },
              { kind: "definition", name: "Marginal relative frequency", statement: "A row or column total is divided by the grand total." },
            ],
            steps: [
              { part: "a", reasoning: "The joint cell has 9 students; use the full group of 60.", working: "\\frac{9}{60}=0.15=15\\%", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Monday is a marginal category with total 19; the full surveyed group remains the reference group.", working: "\\frac{19}{60}\\approx0.3167\\approx31.7\\%", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Grade 11 is a row marginal total of 12 out of 60.", working: "\\frac{12}{60}=0.20=20\\%", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Both quantities are relative to the entire survey: the joint cell is one intersection, while Monday is a marginal total. Neither asks for a frequency within a subgroup.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $15\\%$. (b) About $31.7\\%$. (c) $20\\%$. (d) Both use 60 because each is a relative frequency for the full survey, not a conditional frequency within a row or column.",
            commonErrors: ["Using 24 as the denominator in part (a), which would give a conditional frequency for Grade 10.", "Rounding $19/60$ too early."],
          },
        },
      ],
    },
    {
      id: "alg1-u5-conditional-association",
      title: "Conditional relative frequencies and association",
      skill: "Calculate conditional relative frequencies within a group and compare conditional distributions to assess association.",
      lesson: {
        sections: [
          {
            heading: "Condition on the stated group",
            body: "A **conditional relative frequency** asks what fraction of a specified subgroup falls in a category. The subgroup defines the denominator. For example, to find the fraction of bus riders who are ninth graders, divide the ninth-grade bus-rider count by the total number of bus riders—not by the whole survey and not by the ninth-grade total.",
          },
          {
            heading: "Compare conditional rates",
            body: "To investigate whether two categorical variables may be associated, compare the same conditional proportion across groups. If the proportions are substantially different, the data suggest an association. If they are similar, there is little evidence of association in the sample. An observed association does not establish that one variable causes the other.",
          },
        ],
        keyFormulas: [
          { name: "Conditional relative frequency", statement: "$\\frac{\\text{count meeting both conditions}}{\\text{count in the stated condition group}}$" },
          { name: "Association check", statement: "Compare the same conditional relative frequency across the relevant groups." },
        ],
        workedExample: {
          problem: "In a survey, 18 of 30 bus riders and 12 of 40 walkers participate in a school club. Compare club participation rates by travel group.",
          solution: "Among bus riders, the participation rate is $18/30=0.60=60\\%$. Among walkers, it is $12/40=0.30=30\\%$. These conditional rates differ by 30 percentage points, so the sample suggests an association between travel group and club participation. It does not show that travel method causes participation.",
        },
      },
      questions: [
        {
          id: "alg1-u5-conditional-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey, 15 of 25 students who ride a bike to school are in Grade 10. What is the conditional relative frequency of being in Grade 10 among bike riders?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40\\%$" },
              { id: "b", text: "$25\\%$" },
              { id: "c", text: "$60\\%$" },
              { id: "d", text: "$15\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conditional relative frequency", statement: "The denominator is the total number in the stated condition group." },
            ],
            steps: [
              { reasoning: "The condition is being a bike rider, so divide the Grade 10 bike riders by all 25 bike riders.", working: "\\frac{15}{25}=0.60=60\\%", marks: 2, markCode: "M" },
            ],
            finalAnswer: "**(c)** $60\\%$ of bike riders are in Grade 10.",
            commonErrors: ["Using a whole-survey total that is not given, rather than the stated group of 25."],
          },
        },
        {
          id: "alg1-u5-conditional-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A survey of 80 students shows that 30 of 50 students who bring lunch buy a drink at school; 18 of 30 students who do not bring lunch buy a drink. Find the conditional relative frequency of buying a drink for each lunch group. Give answers as percentages.",
          response: { type: "numeric", parts: [{ label: "Bring lunch (%)", answer: 60 }, { label: "Do not bring lunch (%)", answer: 60 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conditional relative frequency", statement: "Within each group, divide the category count by that group's total." },
            ],
            steps: [
              { reasoning: "For students who bring lunch, 50 is the subgroup total.", working: "\\frac{30}{50}=0.60=60\\%", marks: 1, markCode: "M" },
              { reasoning: "For students who do not bring lunch, use that group's separate total of 30.", working: "\\frac{18}{30}=0.60=60\\%", marks: 2, markCode: "M" },
            ],
            finalAnswer: "Bring lunch: $60\\%$. Do not bring lunch: $60\\%$.",
            commonErrors: ["Using the grand total 80 in either conditional calculation."],
          },
        },
        {
          id: "alg1-u5-conditional-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school survey records whether students completed a review sheet and whether they passed a quiz. Of 40 students who completed the sheet, 34 passed. Of 40 students who did not complete it, 24 passed. Find both conditional pass rates, then state whether the sample suggests an association between completing the sheet and passing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conditional relative frequency", statement: "Divide the count of interest by the total in the specified group." },
              { kind: "principle", name: "Association from conditional rates", statement: "Different conditional distributions across groups suggest an association, but do not prove causation." },
            ],
            steps: [
              { reasoning: "Compute the pass rate within the sheet-completer group.", working: "\\frac{34}{40}=0.85=85\\%", marks: 1, markCode: "M" },
              { reasoning: "Compute the pass rate within the non-completer group.", working: "\\frac{24}{40}=0.60=60\\%", marks: 1, markCode: "M" },
              { reasoning: "Compare like conditional rates; an absolute difference of 25 percentage points is substantial in this sample.", working: "85\\%-60\\%=25\\text{ percentage points}", marks: 1, markCode: "A" },
              { reasoning: "State an association without claiming the review sheet caused passing.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The pass rates are $85\\%$ for students who completed the sheet and $60\\%$ for those who did not. The difference suggests an association in this sample, but does not establish causation.",
            commonErrors: ["Calling a 25 percentage-point difference a 25% increase without specifying the comparison.", "Claiming the review sheet caused the higher pass rate."],
          },
        },
        {
          id: "alg1-u5-conditional-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A library asks 100 students whether they use a study app and whether they completed a weekly reading goal. The survey results are shown.\\n\\n| | Goal completed | Goal not completed | Total |\\n|---|---:|---:|---:|\\n| Uses study app | 36 | 24 | 60 |\\n| Does not use app | 16 | 24 | 40 |\\n| Total | 52 | 48 | 100 |",
          parts: [
            { label: "a", prompt: "Find the conditional relative frequency of completing the goal among students who use the app.", marks: 2 },
            { label: "b", prompt: "Find the conditional relative frequency of completing the goal among students who do not use the app.", marks: 2 },
            { label: "c", prompt: "Compare the two conditional frequencies and state whether the data suggest an association.", marks: 2 },
            { label: "d", prompt: "Explain why the survey does not prove that using the app causes students to complete the goal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conditional relative frequency", statement: "Divide each joint count by the marginal total of the condition group." },
              { kind: "principle", name: "Association is not causation", statement: "An observational association alone does not establish that one variable causes the other." },
            ],
            steps: [
              { part: "a", reasoning: "Use the total of app users as the denominator for the conditional rate among app users.", working: "\\frac{36}{60}=0.60=60\\%", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Use the total of non-users as the denominator for this different condition group.", working: "\\frac{16}{40}=0.40=40\\%", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Compare the completion rates; a 20 percentage-point difference suggests an association in these surveyed students.", working: "60\\%-40\\%=20\\text{ percentage points}", marks: 2, markCode: "R" },
              { part: "d", reasoning: "The survey observes existing behavior and does not control other factors or randomly assign app use; differences could be explained by other variables.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $60\\%$. (b) $40\\%$. (c) App users' completion rate is 20 percentage points higher, suggesting an association. (d) This observational survey cannot establish causation; other factors may explain the difference.",
            commonErrors: ["Using 100 as the denominator in the conditional frequencies.", "Concluding the app causes completion from the observed association."],
          },
        },
      ],
    },
  ],
};
