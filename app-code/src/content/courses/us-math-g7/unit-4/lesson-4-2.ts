import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "m7-u4-lesson-4-2",
  code: "4-2",
  title: "Capstone: Data and Probability in Real Life",
  goal: "I CAN interpret real-world data using statistics and make decisions using probability.",
  standards: ["7.SP.C.5", "7.SP.C.6", "7.SP.C.7", "7.SP.C.8"],
  vocabulary: [
    { term: "Mean", definition: "The average: sum of values divided by number of values." },
    { term: "Median", definition: "The middle value when data is ordered; resistant to outliers." },
    { term: "Mode", definition: "The most frequent value in a data set." },
    { term: "Range", definition: "The difference between the greatest and least values." },
    { term: "Outlier", definition: "A value far from the rest of the data that may distort the mean." },
    { term: "Probability", definition: "The likelihood of an event, from 0 (impossible) to 1 (certain)." },
    { term: "Sample space", definition: "All possible outcomes of an experiment." },
    { term: "Experimental probability", definition: "The ratio of times an event occurs to total trials." },
  ],
  concepts: [
    {
      id: "m7-u4-statistics",
      title: "Choosing the right statistic",
      skill: "Select appropriate measures of center and spread for real data sets.",
      lesson: {
        sections: [
          {
            heading: "Mean vs median",
            body: "The **mean** uses all values but is pulled by outliers. The **median** is the middle value and resists outliers. For salaries, median is often more representative — one billionaire doesn't reflect typical pay.",
          },
          {
            heading: "Spread matters",
            body: "Two classes can have the same mean score but very different spreads. A small range means consistent performance; a large range means high variability. Always report center AND spread.",
          },
          {
            heading: "Outliers",
            body: "Outliers can be errors (typo, measurement mistake) or real (a star athlete in a class). Investigate before removing — sometimes they're the most interesting data point.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\frac{\\text{sum}}{\\text{count}}$" },
          { name: "Median", statement: "Middle value of ordered data" },
        ],
        workedExample: {
          problem: "Scores: 70, 72, 75, 78, 80, 82, 95. Mean vs median?",
          solution: "Mean = $552/7 \\approx 78.9$; median = $78$. The 95 pulls mean up slightly.",
        },
      },
      questions: [
        {
          id: "m7-u4-statistics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When is the median a better choice than the mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always" },
              { id: "b", text: "When data has outliers or is skewed" },
              { id: "c", text: "When data is symmetric" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Median", statement: "Resistant to outliers; better for skewed data." }],
            steps: [{ reasoning: "Median isn't affected by extreme values, making it better for skewed data.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** When data has outliers/skewed",
            commonErrors: ["Thinking mean is always better."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m7-u4-statistics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of: 4, 7, 9, 10, 15, 15, 20.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 11.43, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Mean", statement: "Sum divided by count." }],
            steps: [
              { reasoning: "Sum = $4+7+9+10+15+15+20 = 80$.", marks: 1, markCode: "M" },
              { reasoning: "$80/7 \\approx 11.43$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 11.43$",
            commonErrors: ["Arithmetic errors in sum."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m7-u4-statistics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two basketball players average 15 points/game. Player A scores 12, 14, 16, 18. Player B scores 5, 10, 15, 30. Who is more consistent and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Consistency", statement: "Smaller spread = more consistent." },
              { kind: "principle", name: "Range", statement: "Max - min shows variability." },
            ],
            steps: [
              { reasoning: "Player A range: $18 - 12 = 6$ points.", marks: 1, markCode: "M" },
              { reasoning: "Player B range: $30 - 5 = 25$ points.", marks: 1, markCode: "M" },
              { reasoning: "A's smaller range means more consistent performance.", marks: 1, markCode: "R" },
              { reasoning: "B has higher ceiling but unreliable — big swings game to game.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Player A — smaller range (6 vs 25) means consistency.",
            commonErrors: ["Choosing based on highest single game."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "m7-u4-statistics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A survey asks 50 students their favorite subject. Results: Math 12, Science 15, English 10, History 8, Other 5.",
          parts: [
            { label: "a", prompt: "What is the mode?", marks: 1 },
            { label: "b", prompt: "What percent chose Science?", marks: 2 },
            { label: "c", prompt: "If 'Other' responses were excluded, what is the new mode?", marks: 2 },
            { label: "d", prompt: "Is this data categorical or numerical? Explain.", marks: 2 },
            { label: "e", prompt: "What additional data would help understand preferences better?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mode", statement: "Most frequent category." },
              { kind: "principle", name: "Data type", statement: "Categories vs numbers." },
            ],
            steps: [
              { reasoning: "Mode = Science (15, highest count).", marks: 1, markCode: "B", part: "a" },
              { reasoning: "$15/50 \\times 100 = 30\\%$.", working: "15/50*100", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Excluding Other doesn't change counts — Science still highest at 15.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Mode still Science.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Categorical — subjects are categories, not numbers.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Though we counted them, the variable itself is categorical.", marks: 1, markCode: "A", part: "d" },
              { reasoning: "Additional data: why they chose it, second choice, teacher quality ratings, gender/grade breakdowns.", marks: 2, markCode: "R", part: "e" },
              { reasoning: "Or: compare to actual enrollment, track changes over time.", marks: 1, markCode: "A", part: "e" },
            ],
            finalAnswer: "(a) Science (b) 30% (c) still Science (d) categorical (e) reasons, second choice, demographics.",
            commonErrors: ["Thinking counts make data numerical."],
            examinerNote: "1+2+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "m7-u4-probability",
      title: "Probability for decision-making",
      skill: "Use probability to evaluate chances and make informed decisions.",
      lesson: {
        sections: [
          {
            heading: "Theoretical vs experimental",
            body: "**Theoretical probability** = favorable outcomes / total outcomes (what should happen). **Experimental probability** = times occurred / times tried (what did happen). They converge with many trials but may differ in small samples.",
          },
          {
            heading: "Compound events",
            body: "Two coins: probability of two heads = $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. For independent events, multiply probabilities. List the sample space to be sure: HH, HT, TH, TT — 4 equally likely outcomes.",
          },
          {
            heading: "Probability in decisions",
            body: "Insurance uses probability of events to set prices. Weather forecasts give probability of rain. Understanding probability helps weigh risks: a 1% chance of failure in 100 trials means ~63% chance of at least one failure.",
          },
        ],
        keyFormulas: [
          { name: "Probability", statement: "$P = \\frac{\\text{favorable}}{\\text{total}}$" },
          { name: "Independent events", statement: "$P(A \\text{ and } B) = P(A) \\times P(B)$" },
        ],
        workedExample: {
          problem: "Roll a die twice. Probability of two 6s?",
          solution: "$\\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$.",
        },
      },
      questions: [
        {
          id: "m7-u4-probability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the probability of rolling a 5 on a fair die?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{6}$" },
              { id: "b", text: "$\\frac{1}{5}$" },
              { id: "c", text: "$\\frac{5}{6}$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "Favorable outcomes / total outcomes." }],
            steps: [{ reasoning: "One favorable (the 5) out of six faces: $\\frac{1}{6}$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 1/6",
            commonErrors: ["Counting wrong denominator."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "m7-u4-probability-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Flip a coin 3 times. What is the probability of all heads?",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.125, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Independent events", statement: "Multiply probabilities for 'and' events." }],
            steps: [
              { reasoning: "$\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{8} = 0.125$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.125$ or $\\frac{1}{8}$",
            commonErrors: ["Adding instead of multiplying probabilities."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m7-u4-probability-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A game costs $\\$5$ to play. You win $\\$20$ with probability $\\frac{1}{10}$, otherwise win nothing. Is this a good bet over many plays? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expected value", statement: "Average outcome = probability $\\times$ payoff." },
              { kind: "principle", name: "Law of large numbers", statement: "Long-run averages approach expected values." },
            ],
            steps: [
              { reasoning: "Expected winnings: $\\frac{1}{10} \\times 20 = \\text{\\$}2$ per play.", marks: 1, markCode: "M" },
              { reasoning: "Cost is $\\$5$ per play — expected value is $\\$2 - \\$5 = -\\$3$ (loss).", marks: 1, markCode: "M" },
              { reasoning: "Over many plays, you'll lose on average $\\$3$ per game.", marks: 1, markCode: "R" },
              { reasoning: "Bad bet — negative expected value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — expected loss of $3 per play.",
            commonErrors: ["Thinking winning $20 sometimes makes it worth it."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "m7-u4-probability-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A weather app says '70% chance of rain' for Saturday. You plan an outdoor event.",
          parts: [
            { label: "a", prompt: "What does 70% probability mean?", marks: 2 },
            { label: "b", prompt: "If it doesn't rain, does that mean the forecast was wrong?", marks: 3 },
            { label: "c", prompt: "What other information would help you decide?", marks: 2 },
            { label: "d", prompt: "Calculate the probability it rains on both Saturday and Sunday if each day is independent at 70%.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Probability meaning", statement: "Likelihood over many similar situations." },
              { kind: "principle", name: "Independence", statement: "Joint probability = product for independent events." },
            ],
            steps: [
              { reasoning: "70% means: in 100 similar forecasts, rain occurred ~70 times.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "It's a probability, not a guarantee — 30% chance of no rain exists.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "No — probability doesn't guarantee outcome; 30% chance of no rain is real.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Forecast could be 'wrong' in outcome but not in probability estimate.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Also: forecast could be calibrated well even if this instance differs.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Useful info: rain timing, intensity, alternative dates, cost of postponing.", marks: 2, markCode: "R", part: "c" },
              { reasoning: "$0.7 \\times 0.7 = 0.49$ or $49\\%$.", working: "0.7*0.7", marks: 2, markCode: "M", part: "d" },
              { reasoning: "Answer: $49\\%$.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 70/100 similar cases rain (b) no, probability not guarantee (c) timing/intensity/costs (d) 49%.",
            commonErrors: ["Treating probability as certainty; adding instead of multiplying."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "m7-u4-synthesis",
      title: "Synthesis: Multi-Concept Problems",
      skill: "Combine proportional reasoning, statistics, and probability to solve complex real-world problems.",
      lesson: {
        sections: [
          {
            heading: "Integrating skills",
            body: "Real problems rarely use one concept. A business decision might need: percent calculations (pricing), statistics (market data), and probability (risk assessment). Identify which skills apply, then combine them systematically.",
          },
          {
            heading: "Problem-solving strategy",
            body: "1. Read carefully — what is actually being asked?\n2. Identify relevant math concepts\n3. Estimate the answer first\n4. Work through calculations\n5. Check units and reasonableness",
          },
          {
            heading: "Common multi-step patterns",
            body: "- Price + tax + discount (percents)\n- Average + outlier analysis (statistics)\n- Odds + expected value (probability)\n- Scale + measurement (proportions)",
          },
        ],
        keyFormulas: [
          { name: "Strategy", statement: "Read → identify → estimate → solve → check" },
          { name: "Integration", statement: "Combine multiple math concepts in sequence" },
        ],
        workedExample: {
          problem: "A store offers 20% off, then 10% tax. Is the final price higher or lower than original for a $50 item?",
          solution: "$50 \\times 0.8 \\times 1.1 = 44$ — lower than $50$ despite tax.",
        },
      },
      questions: [
        {
          id: "m7-u4-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in solving a complex math problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Read carefully and identify what's asked" },
              { id: "c", text: "Guess the answer" },
              { id: "d", text: "Draw a picture" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Problem solving", statement: "Understanding precedes calculation." }],
            steps: [{ reasoning: "Read and understand before attempting calculations.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Read carefully first",
            commonErrors: ["Jumping to calculation without understanding."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m7-u4-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A recipe makes 12 cookies using 2 cups flour. You need 30 cookies and only have 5 cups flour. Do you have enough?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Proportion", statement: "Scale recipe by ratio." }],
            steps: [
              { reasoning: "Flour per cookie: $2/12 = 1/6$ cup.", marks: 1, markCode: "M" },
              { reasoning: "For 30 cookies: $30 \\times 1/6 = 5$ cups needed.", marks: 1, markCode: "M" },
              { reasoning: "You have exactly 5 cups — just enough.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes, exactly 5 cups needed — you have enough.",
            commonErrors: ["Rounding incorrectly; not checking exact requirement."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "m7-u4-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Class A test scores: 60, 65, 70, 75, 80, 85, 90. Class B: 70, 72, 74, 76, 78, 80, 82. Which class performed better overall? Justify with statistics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mean", statement: "Average performance." },
              { kind: "principle", name: "Spread", statement: "Consistency matters too." },
            ],
            steps: [
              { reasoning: "Class A mean: $525/7 = 75$; Class B mean: $532/7 \\approx 76$.", marks: 1, markCode: "M" },
              { reasoning: "Class B has slightly higher mean.", marks: 1, markCode: "B" },
              { reasoning: "But A's range is $90-60 = 30$; B's is $82-70 = 12$ — B more consistent.", marks: 1, markCode: "R" },
              { reasoning: "B performs better: higher mean AND more consistent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Class B — higher mean (76 vs 75) and more consistent (range 12 vs 30).",
            commonErrors: ["Only looking at highest score or mean."],
            examinerNote: "M1, B1, R1, A1.",
          },
        },
        {
          id: "m7-u4-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You run a lemonade stand. Cups cost $\\$0.25$ each, lemons cost $\\$0.10$ per cup of lemonade, and you sell each cup for $\\$2$. You expect to sell 100 cups on Saturday and 150 on Sunday.",
          parts: [
            { label: "a", prompt: "Calculate total revenue for both days.", marks: 2 },
            { label: "b", prompt: "Calculate total cost for cups and lemons.", marks: 3 },
            { label: "c", prompt: "What is the profit?", marks: 2 },
            { label: "d", prompt: "If there's a 20% chance of rain each day, what is the probability of rain on both days?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Revenue", statement: "Price $\\times$ quantity." },
              { kind: "principle", name: "Independent events", statement: "Multiply probabilities." },
            ],
            steps: [
              { reasoning: "Revenue: $(100 + 150) \\times 2 = \\text{\\$}500$.", working: "250*2", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Cups: $250 \\times 0.25 = \\text{\\$}62.50$; lemons: $250 \\times 0.10 = \\text{\\$}25$.", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Total cost: $62.50 + 25 = \\text{\\$}87.50$.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Profit: $500 - 87.50 = \\text{\\$}412.50$.", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Rain both days: $0.2 \\times 0.2 = 0.04$ or $4\\%$.", working: "0.2*0.2", marks: 2, markCode: "M", part: "d" },
              { reasoning: "Answer: $4\\%$.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) $500 (b) $87.50 (c) $412.50 (d) 4%.",
            commonErrors: ["Forgetting to multiply probabilities; mixing cost types."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
