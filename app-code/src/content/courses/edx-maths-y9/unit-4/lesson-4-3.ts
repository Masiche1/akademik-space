import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edm9-u4-lesson-4-3",
  code: "4-3",
  title: "Collecting and Interpreting Data",
  goal: "I CAN judge whether a sample is fair, design good questionnaire questions, and interpret and critique statistical diagrams.",
  standards: ["Y9 Statistics and Probability"],
  vocabulary: [
    { term: "Population", definition: "The whole group that a statistical investigation is about." },
    { term: "Sample", definition: "A smaller group selected from the population to represent it." },
    { term: "Random sample", definition: "A sample in which every member of the population has an equal chance of being chosen." },
    { term: "Bias", definition: "A systematic unfairness that makes a sample or question favour some results over others." },
    { term: "Questionnaire", definition: "A set of questions used to collect data from people." },
    { term: "Leading question", definition: "A question worded to push the respondent towards a particular answer." },
    { term: "Misleading diagram", definition: "A chart or graph presented in a way that gives a false impression of the data." },
  ],
  concepts: [
    {
      id: "edm9-u4-sampling-bias",
      title: "Sampling, bias and questionnaires",
      skill: "Identify biased samples and poorly designed questions, and improve them.",
      lesson: {
        sections: [
          {
            heading: "Samples and populations",
            body: "It is often impossible to ask everyone, so we take a **sample** from the **population**. A good sample is large enough and representative: it should reflect the population in age, gender and other relevant features. Taking a sample from only one place or group often introduces **bias**.",
          },
          {
            heading: "Random and stratified sampling",
            body: "In a random sample every member of the population has an equal chance of being picked, for example by drawing names from a hat or using random numbers. In a stratified sample the population is split into groups (strata) and the sample has the same proportions: sample size for a group $=\\frac{\\text{group size}}{\\text{population}}\\times\\text{sample size}$.",
          },
          {
            heading: "Good questionnaire questions",
            body: "A good question is clear, unbiased and has response options that do not overlap and cover every possibility. Avoid leading questions such as 'Do you agree that the park is wonderful?'. A question about quantities should use non-overlapping groups, for example 0-2, 3-5, 6 or more hours, not 0-3, 3-6, 6-9. Say whether the question is open or closed and include a time frame (for example 'in a typical week').",
          },
        ],
        keyFormulas: [
          { name: "Stratified sample", statement: "$\\dfrac{\\text{group size}}{\\text{population size}}\\times\\text{sample size}$" },
        ],
        workedExample: {
          problem: "A school has 600 students, of whom 240 are in Year 9. A stratified sample of 50 students is taken. How many should be from Year 9?",
          solution: "$\\frac{240}{600}\\times50=0.4\\times50=20$ students.",
        },
      },
      questions: [
        {
          id: "edm9-u4-sampling-bias-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A researcher wants to find out how much exercise people in a town do. She asks 30 people leaving a gym. Why is this sample biased?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sample is too large" },
              { id: "b", text: "She asked people outdoors" },
              { id: "c", text: "She asked exactly 30 people" },
              { id: "d", text: "People who go to a gym are likely to exercise more than most people in the town" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Representative sample", statement: "A sample is biased if it does not fairly represent the population." },
            ],
            steps: [
              { reasoning: "Gym users are not typical of the whole town, so the sample favours high exercise levels.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)**",
            commonErrors: ["Thinking a large sample causes bias; a sample can be large and still biased."],
          },
        },
        {
          id: "edm9-u4-sampling-bias-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A questionnaire asks: 'How many hours do you spend on homework each week?' with the response boxes: 0 to 3, 3 to 6, 6 to 9.\n\nThe boxes overlap and do not cover every possible answer. Which set of response boxes fixes both problems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0 to 3, 3 to 6, 6 to 9, 9 to 12 hours" },
              { id: "b", text: "0 to 2, 3 to 5, 6 to 8 hours" },
              { id: "c", text: "less than 3, 3 to less than 6, 6 to less than 9, 9 or more hours" },
              { id: "d", text: "0 to 4, 2 to 6, 4 to 8 hours" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Response boxes", statement: "Response boxes must not overlap and must cover every possible answer." },
            ],
            steps: [
              { reasoning: "The boxes overlap: someone who does exactly 3 hours could tick two boxes.", marks: 1, markCode: "B" },
              { reasoning: "The boxes do not cover everything: no box exists for more than 9 hours.", marks: 1, markCode: "B" },
              { reasoning: "Option 2 removes the overlap and adds a box for 9 or more hours. Option 1 leaves gaps such as 2.5 hours and ignores 9 or more.", working: "2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The boxes overlap at 3 and 6 and miss values above 9; option 2 is the correct fix.",
            commonErrors: ["Choosing option 1, which has gaps for non-whole hours and no box for over 8 hours."],
          },
        },
        {
          id: "edm9-u4-sampling-bias-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school has 800 students: 320 in Year 7, 280 in Year 8 and 200 in Year 9. A stratified sample of 80 students is to be taken.\n\nWork out how many students should be chosen from Year 7, Year 8 and Year 9.",
          response: {
            type: "numeric",
            parts: [
              { label: "Year 7", answer: 32 },
              { label: "Year 8", answer: 28 },
              { label: "Year 9", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stratified sample", statement: "$\\frac{\\text{group size}}{\\text{population}}\\times\\text{sample size}$." },
            ],
            steps: [
              { reasoning: "The sampling fraction is the sample size divided by the population.", working: "80\\div800=0.1", marks: 1, markCode: "M" },
              { reasoning: "Year 7.", working: "320\\times0.1=32", marks: 1, markCode: "A" },
              { reasoning: "Year 8.", working: "280\\times0.1=28", marks: 1, markCode: "A" },
              { reasoning: "Year 9, then check the total is 80.", working: "200\\times0.1=20,\\quad32+28+20=80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Year 7: 32, Year 8: 28, Year 9: 20",
            commonErrors: ["Choosing 80 ÷ 3 students from each year.", "Rounding the fraction early."],
          },
        },
        {
          id: "edm9-u4-sampling-bias-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A council wants to know if residents want a new swimming pool. A councillor stands outside the existing swimming pool on Saturday morning and asks the first 20 people he sees: 'Don't you agree that the town badly needs a new swimming pool?' 17 people say yes. He says, '85% of residents want a new pool.'\n\nThe town has 15 000 residents.",
          parts: [
            { label: "a", prompt: "Write down two reasons why the sample may be biased.", marks: 2 },
            { label: "b", prompt: "Explain what is wrong with the wording of the question and rewrite it so that it is not leading.", marks: 2 },
            { label: "c", prompt: "Confirm that 17 out of 20 is 85%.", marks: 1 },
            { label: "d", prompt: "Suggest a better way to choose the sample, and explain why it is better.", marks: 2 },
            { label: "e", prompt: "Give one reason why the councillor's claim about all 15 000 residents is unreliable even apart from the wording.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Representative sample", statement: "A sample is biased if it does not fairly represent the population." },
              { kind: "principle", name: "Unbiased question", statement: "Questions must be neutral and not suggest an answer." },
              { kind: "principle", name: "Random sampling", statement: "Every member of the population has an equal chance of selection." },
            ],
            steps: [
              { part: "a", reasoning: "The people were at the swimming pool, so they are more likely to support swimming facilities.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Only one time and place was used (Saturday morning), and the sample is small (20); it excludes people who were elsewhere.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The question is leading: it suggests the answer 'yes'.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "A neutral rewrite, for example 'Do you think the town needs a new swimming pool? Yes / No / Don't know'.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide and convert to a percentage.", working: "\\frac{17}{20}\\times100=85", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Choose residents at random from the electoral register or a list of addresses, using random numbers, and ask a larger number.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Every resident then has an equal chance of being chosen, so the sample is more representative.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "A sample of 20 out of 15 000 is far too small to be reliable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Sample taken at the pool; small sample at one time. (b) Leading; rewrite neutrally. (c) 85%. (d) Random sample of residents. (e) 20 is too small a sample.",
            commonErrors: ["Saying the sample is biased only because it is small.", "Rewriting the question in a way that still suggests an answer."],
            examinerNote: "Accept any sensible, context-specific reasons.",
          },
        },
      ],
    },
    {
      id: "edm9-u4-critique-diagrams",
      title: "Interpreting and critiquing diagrams",
      skill: "Read information from statistical diagrams and spot misleading features.",
      lesson: {
        sections: [
          {
            heading: "Reading diagrams accurately",
            body: "Read the title, axis labels, scale and key before looking at the data. In a pie chart, the angle is proportional to the frequency: frequency $=\\frac{\\text{angle}}{360}\\times\\text{total}$. In a bar chart, check where the vertical axis starts and how it is scaled.",
          },
          {
            heading: "Misleading features",
            body: "Diagrams can mislead through: a vertical axis that does not start at zero, uneven scales, truncated axes, 3D effects, unlabelled axes, or bars of different widths. A chart showing percentages with no totals can also hide the number of people involved.",
          },
          {
            heading: "Correlation and causation",
            body: "Correlation means two variables are related, but it does not prove that one **causes** the other. Ice cream sales and sunburn both rise in summer, but ice cream does not cause sunburn. Always state conclusions carefully and in context, using words such as 'suggests' rather than 'proves'.",
          },
        ],
        keyFormulas: [
          { name: "Pie chart angle", statement: "$\\text{angle}=\\dfrac{\\text{frequency}}{\\text{total}}\\times360^\\circ$" },
        ],
        workedExample: {
          problem: "In a pie chart of 90 people, the sector for 'cycling' has angle $80^\\circ$. How many people cycle?",
          solution: "$\\frac{80}{360}\\times90=20$ people.",
        },
      },
      questions: [
        {
          id: "edm9-u4-critique-diagrams-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these features could make a bar chart misleading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bars are labelled" },
              { id: "b", text: "The bars are the same width" },
              { id: "c", text: "The chart has a title" },
              { id: "d", text: "The vertical axis starts at 50 instead of 0" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Misleading graphs", statement: "A truncated axis exaggerates differences between bars." },
            ],
            steps: [
              { reasoning: "If the axis does not start at zero, small differences look much bigger than they are.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)**",
            commonErrors: ["Thinking labels or titles make a chart misleading."],
          },
        },
        {
          id: "edm9-u4-critique-diagrams-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pie chart shows how 120 students travel to school. The sector for 'bus' has an angle of $105^\\circ$.\n\nWork out the number of students who travel by bus.",
          response: { type: "numeric", parts: [{ label: "Students by bus", answer: 35 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pie chart", statement: "$\\text{frequency}=\\frac{\\text{angle}}{360}\\times\\text{total}$." },
            ],
            steps: [
              { reasoning: "Write the sector as a fraction of the whole circle.", working: "\\frac{105}{360}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the total number of students.", working: "\\frac{105}{360}\\times120", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. (Equivalent: each student is $3^\\circ$, and $105\\div3=35$.)", working: "35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35 students",
            commonErrors: ["Dividing 105 by 120 or giving 105 as the answer."],
          },
        },
        {
          id: "edm9-u4-critique-diagrams-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pie chart shows how 72 people chose their favourite fruit. The angles are: apple $100^\\circ$, banana $60^\\circ$, cherry $x^\\circ$ and grape $140^\\circ$.\n\nWork out (i) the value of $x$ and (ii) the number of people who chose cherry.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) x", answer: 60 },
              { label: "(ii) people choosing cherry", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles at a point", statement: "Angles in a full circle add to $360^\\circ$." },
              { kind: "formula", name: "Pie chart", statement: "$\\text{frequency}=\\frac{\\text{angle}}{360}\\times\\text{total}$." },
            ],
            steps: [
              { reasoning: "Subtract the known angles from 360.", working: "360-100-60-140", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "x=60", marks: 1, markCode: "A" },
              { reasoning: "Find the fraction of the total for cherry.", working: "\\frac{60}{360}\\times72", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $x=60$ (ii) 12 people",
            commonErrors: ["Adding to 180 instead of 360."],
          },
        },
        {
          id: "edm9-u4-critique-diagrams-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A newspaper prints a bar chart comparing the sales of two phones. The vertical axis starts at 480 and goes up to 520 in steps of 10. The bar for Phone A reaches 500 and the bar for Phone B reaches 510. The headline says 'Phone B sells twice as many as Phone A'.\n\nA second chart is a scatter graph for 12 towns. It shows a positive correlation between the number of ice creams sold and the number of people who get sunburn.",
          parts: [
            { label: "a", prompt: "Work out the actual percentage by which Phone B's sales exceed Phone A's, to 1 decimal place.", marks: 2 },
            { label: "b", prompt: "Explain why the bar chart is misleading.", marks: 2 },
            { label: "c", prompt: "Compare the heights of the two bars above the axis start of 480. Explain how this makes the difference look larger.", marks: 2 },
            { label: "d", prompt: "A reader says, 'The scatter graph shows that eating ice cream causes sunburn.' Is the reader correct? Give a reason.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "(a) percentage difference (%)", answer: 2, tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{difference}}{\\text{original}}\\times100$." },
              { kind: "principle", name: "Misleading graphs", statement: "A vertical axis that does not start at zero exaggerates differences." },
              { kind: "principle", name: "Correlation and causation", statement: "A relationship between two variables does not prove that one causes the other." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the difference by Phone A's sales.", working: "\\frac{510-500}{500}\\times100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "2.0\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The vertical axis starts at 480, not 0, so the bars do not show the true proportions.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Phone B's sales are only 2% higher, not double.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Above 480 the bars are 20 and 30 units tall, a ratio of 1.5 times, which looks like a 50% difference instead of 2%.", working: "\\frac{30}{20}=1.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "So the visible heights make B look far larger than A.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "No: correlation does not prove causation.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Hot weather is a likely third factor that increases both ice cream sales and sunburn.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 2.0%. (b) Axis starts at 480 so difference looks exaggerated. (c) Visible heights are 20 and 30, so B looks 50% taller. (d) No: correlation is not causation; hot weather affects both.",
            commonErrors: ["In (a), saying the difference is 10%.", "In (d), agreeing that the graph proves a cause."],
            examinerNote: "(d) accept any sensible confounding factor.",
          },
        },
      ],
    },
  ],
};
