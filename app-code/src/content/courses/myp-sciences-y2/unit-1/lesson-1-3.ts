import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "myps2-u1-lesson-1-3",
  code: "1-3",
  title: "Acids and Alkalis",
  goal: "I CAN use the pH scale and indicators to classify solutions, write word equations for neutralisation, and plan a fair test to compare antacids.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Key concept: Relationships",
    "Related concept: Interaction",
  ],
  vocabulary: [
    { term: "Acid", definition: "A substance that dissolves in water to give a solution with a pH below 7." },
    { term: "Alkali", definition: "A soluble base: a substance that dissolves in water to give a solution with a pH above 7." },
    { term: "Indicator", definition: "A substance that changes colour depending on whether it is in an acid or an alkali." },
    { term: "pH scale", definition: "A scale from 0 to 14 that shows how acidic or alkaline a solution is. pH 7 is neutral." },
    { term: "Neutralisation", definition: "The reaction of an acid with a base or alkali to form a salt and water." },
    { term: "Salt", definition: "A compound formed when the hydrogen of an acid is replaced by a metal, for example sodium chloride." },
    { term: "Antacid", definition: "A substance, such as a tablet, that neutralises excess stomach acid." },
  ],
  concepts: [
    {
      id: "myps2-u1-ph-indicators",
      title: "The pH scale and indicators",
      skill: "Use the pH scale and indicators such as litmus and universal indicator to classify acids, alkalis and neutral solutions, and compare strong and weak.",
      lesson: {
        sections: [
          {
            heading: "The pH scale",
            body: "The **pH scale** runs from 0 to 14.\n\n- pH less than 7: **acidic** (the lower the number, the more acidic)\n- pH exactly 7: **neutral** (pure water)\n- pH greater than 7: **alkaline** (the higher the number, the more alkaline)\n\nExamples: stomach acid pH 1-2, lemon juice pH 2, pure water pH 7, baking soda solution pH 9, soap pH 10, bleach pH 12-13.",
          },
          {
            heading: "Indicators",
            body: "An **indicator** changes colour in acids and alkalis.\n\n- **Litmus**: red in acid, blue in alkali, purple in neutral solutions. It only tells you acid or alkali.\n- **Universal indicator** is a mixture of dyes with a range of colours: red (pH 1-2), orange and yellow (pH 3-6), green (pH 7), blue (pH 8-11) and purple (pH 12-14). It gives an approximate pH value. A pH meter gives a more precise reading.",
          },
          {
            heading: "Strong and weak, concentrated and dilute",
            body: "A **strong** acid has a very low pH, such as hydrochloric acid at pH 1. A **weak** acid, such as ethanoic acid in vinegar, has a higher pH, around 3, at the same concentration. Strong and weak describe how far an acid breaks up in water. This is not the same as **concentrated** and **dilute**, which describe how much acid is dissolved in the water.\n\nEach step of 1 on the pH scale is a tenfold change in acidity, so pH 3 is ten times more acidic than pH 4.",
          },
        ],
        keyFormulas: [
          { name: "Acid", statement: "pH below 7" },
          { name: "Neutral", statement: "pH = 7" },
          { name: "Alkali", statement: "pH above 7" },
          { name: "Litmus", statement: "Red in acid, blue in alkali" },
        ],
        workedExample: {
          problem: "Universal indicator turns blue in a cleaning solution. State the likely pH range and whether the solution is acidic, neutral or alkaline.",
          solution: "Blue corresponds to pH 8 to 11, which is above 7, so the cleaning solution is alkaline.",
        },
      },
      questions: [
        {
          id: "myps2-u1-ph-indicators-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution has a pH of 3. What colour does blue litmus paper turn in this solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red" },
              { id: "b", text: "Purple" },
              { id: "c", text: "Blue (no change)" },
              { id: "d", text: "Green" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Litmus", statement: "Litmus is red in acid and blue in alkali." },
            ],
            steps: [
              { reasoning: "pH 3 is below 7, so the solution is acidic and blue litmus turns red.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Red",
            commonErrors: ["Choosing green, which is the colour of universal indicator at pH 7, not litmus."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The table shows the pH of four household liquids.\n\n| Liquid | pH |\n| --- | --- |\n| Lemon juice | 2 |\n| Milk | 7 |\n| Soap solution | 10 |\n| Bleach | 13 |\n\nName the liquid that is most alkaline and state which liquid is neutral.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "pH below 7 is acidic, pH 7 is neutral and pH above 7 is alkaline; the higher the pH above 7, the more alkaline." },
            ],
            steps: [
              { reasoning: "Bleach has the highest pH (13), so it is the most alkaline.", marks: 1, markCode: "B" },
              { reasoning: "Milk has pH 7, so it is neutral.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Bleach is most alkaline; milk is neutral.",
            commonErrors: ["Choosing lemon juice because it has the lowest pH; that is the most acidic.", "Choosing soap solution as the strongest alkali."],
            examinerNote: "B1 bleach. B1 milk.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solution P has a pH of 1 and solution Q has a pH of 4. A student says: \"Solution P is just a bit more acidic than Q, because 1 is only a little less than 4.\"\n\nExplain why the student is wrong, and name an indicator that would show both are acidic but could also distinguish P from Q.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "pH scale", statement: "Each unit of pH is a tenfold change in acidity; the lower the pH, the more acidic." },
              { kind: "property", name: "Universal indicator", statement: "Universal indicator gives different colours across the pH scale." },
            ],
            steps: [
              { reasoning: "P is more acidic than Q because its pH is lower.", marks: 1, markCode: "B" },
              { reasoning: "Each pH unit is a tenfold change, so P is 10 x 10 x 10 = 1000 times more acidic than Q, not just slightly more.", working: "10^{4-1} = 10^3 = 1000", marks: 1, markCode: "R" },
              { reasoning: "Universal indicator is suitable.", marks: 1, markCode: "B" },
              { reasoning: "It would be red for P (pH 1) and orange or yellow for Q (pH 4); litmus would be red in both and cannot tell them apart.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The pH scale is not linear: each unit is a tenfold change, so P is 1000 times more acidic than Q. Universal indicator would be red for P and orange or yellow for Q.",
            commonErrors: ["Treating the pH scale as a simple linear scale.", "Suggesting litmus, which only shows acid or alkali."],
            examinerNote: "B1 P more acidic. R1 tenfold per unit / 1000 times. B1 universal indicator / pH meter. R1 different colours for P and Q oe.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student tests four solutions with litmus paper and universal indicator.\n\n| Solution | Red litmus | Blue litmus | Universal indicator colour |\n| --- | --- | --- | --- |\n| W | stays red | turns red | red |\n| X | stays red | stays blue | green |\n| Y | turns blue | stays blue | blue |\n| Z | stays red | turns red | yellow |\n\nSolutions W and Z are both acids.",
          parts: [
            { label: "a", prompt: "Identify which solution is neutral and which is an alkali.", marks: 2 },
            { label: "b", prompt: "Suggest a pH for solution Y and for solution X.", marks: 2 },
            { label: "c", prompt: "W and Z are both acids with the same concentration. Suggest which is the weak acid and explain your answer using the data.", marks: 2 },
            { label: "d", prompt: "A farmer finds her soil has a pH of 5 and wants to grow a crop that prefers a pH close to 7. Explain what this tells her about the soil, and why testing with universal indicator is better than with litmus paper.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Indicators", statement: "Litmus: red in acid, blue in alkali. Universal indicator: red (1-2), orange/yellow (3-6), green (7), blue (8-11), purple (12-14)." },
              { kind: "principle", name: "Strong and weak acids", statement: "At the same concentration, a weak acid has a higher pH than a strong acid." },
            ],
            steps: [
              { part: "a", reasoning: "X is neutral: it does not change litmus and universal indicator is green (pH 7).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Y is the alkali: it turns red litmus blue and universal indicator is blue.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Y is blue on universal indicator, so any pH from 8 to 11 (e.g. 9).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "X is green, so pH 7.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Z is the weak acid.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Z is yellow (pH about 3-6), so its pH is higher than W (red, pH 1-2); at the same concentration a weak acid has a higher pH.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The soil is acidic, because pH 5 is below 7.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Litmus only shows acid or alkali, but universal indicator (or a pH meter) gives an approximate pH value, so the farmer can tell how acidic the soil is and how much treatment is needed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) X neutral, Y alkali (b) Y pH 8-11, X pH 7 (c) Z is the weak acid because its pH is higher (d) The soil is acidic; universal indicator gives a pH value but litmus does not.",
            commonErrors: ["In (a) naming Y as neutral because it does not turn blue litmus red.", "In (c) naming W as weak because it is red.", "In (d) giving the soil as alkaline since 5 is 'in the middle'."],
            examinerNote: "(b) Accept any pH from 8 to 11 for Y. (c) Allow ecf only if the explanation uses colour and pH.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the pH of pure water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "7" },
              { id: "c", text: "14" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Neutral solutions", statement: "pH 7 is neutral; pure water has pH 7." },
            ],
            steps: [
              { reasoning: "Pure water is neutral on the pH scale.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 7",
            commonErrors: ["Thinking the middle of the scale is 0."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these solutions is the MOST acidic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "pH 4" },
              { id: "b", text: "pH 1" },
              { id: "c", text: "pH 7" },
              { id: "d", text: "pH 11" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "pH below 7 is acidic and the lower the number, the more acidic." },
            ],
            steps: [
              { reasoning: "pH 1 is below 7 and is the lowest number, so it is the most acidic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** pH 1",
            commonErrors: ["Choosing pH 11 because a bigger number seems 'more'."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What colour does blue litmus paper turn in an alkaline solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yellow" },
              { id: "b", text: "Blue (no change)" },
              { id: "c", text: "Green" },
              { id: "d", text: "Red" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Litmus", statement: "Litmus is blue in alkali and red in acid." },
            ],
            steps: [
              { reasoning: "Blue litmus stays blue in an alkali; it only turns red in an acid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Blue (no change)",
            commonErrors: ["Thinking litmus always changes colour; blue litmus stays blue in alkali."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solution A has a pH of 3 and solution B has a pH of 5. Each step of 1 on the pH scale is a tenfold change in acidity.\n\nCalculate how many times more acidic solution A is than solution B.",
          response: {
            type: "numeric",
            parts: [{ label: "Times more acidic", answer: 100, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "pH scale", statement: "Each unit of pH is a tenfold change in acidity; multiply by 10 for each unit of difference." },
            ],
            steps: [
              { reasoning: "Difference in pH = $5 - 3 = 2$ units; each unit is tenfold, so multiply $10 \\times 10$.", working: "10^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 100\\text{ times}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 times more acidic",
            commonErrors: ["Subtracting to get 2 times more acidic (treating the scale as linear).", "Giving 10 times."],
            examinerNote: "M1 for $10^2$ or two tens multiplied. A1 for 100.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Universal indicator turns green in a sample of rainwater.\n\nState the pH of the rainwater and classify it as acidic, neutral or alkaline.",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 7, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Universal indicator", statement: "Universal indicator is green at pH 7 (neutral), red at pH 1-2, orange/yellow at pH 3-6, blue at pH 8-11 and purple at pH 12-14." },
            ],
            steps: [
              { reasoning: "Green corresponds to pH 7, so the rainwater is neutral.", working: "pH = 7", marks: 1, markCode: "B" },
              { reasoning: "pH 7 is neither acidic nor alkaline; it is neutral.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "pH 7; neutral",
            commonErrors: ["Classifying green as acidic because the number is in the middle."],
            examinerNote: "B1 for pH 7. B1 for neutral.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A cleaning solution turns universal indicator purple.\n\nSuggest the pH range of the solution and state whether it is acidic, neutral or alkaline.",
          response: {
            type: "numeric",
            parts: [{ label: "pH (lowest value of range)", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Universal indicator", statement: "Purple corresponds to pH 12-14, which is strongly alkaline." },
            ],
            steps: [
              { reasoning: "Purple is the colour for the highest pH values, 12 to 14.", working: "pH\\ 12\\text{-}14", marks: 1, markCode: "B" },
              { reasoning: "pH above 7 means the solution is alkaline.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "pH 12-14; alkaline",
            commonErrors: ["Suggesting pH 1-2 (red) because purple 'looks strong'."],
            examinerNote: "B1 for range 12-14 (accept any pH from 12 to 14). B1 for alkaline.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two acids are tested at the same concentration. Acid V has pH 1 and acid W has pH 3.\n\nExplain, using the pH scale, why V is a strong acid and W is a weak acid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strong and weak acids", statement: "At the same concentration, a strong acid has a lower pH (closer to 0) than a weak acid." },
            ],
            steps: [
              { reasoning: "At the same concentration, the strong acid has broken up more in water, giving a lower pH.", marks: 1, markCode: "B" },
              { reasoning: "V has pH 1 (lower) and W has pH 3 (higher); lower pH at the same concentration means stronger acid, and the difference is two tenfold steps.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "V is stronger because its pH (1) is lower than W's (3) at the same concentration; each pH unit is a tenfold difference.",
            commonErrors: ["Saying strong means concentrated; they are different ideas."],
            examinerNote: "B1 lower pH = stronger at same concentration. R1 links to tenfold scale / both are acids.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims: \"A concentrated weak acid is stronger than a dilute strong acid.\"\n\nExplain why this claim is confused, and describe how you would compare the strength of two acids fairly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strong, weak, concentrated, dilute", statement: "Strong/weak describes how far an acid ionises in water; concentrated/dilute describes how much acid is dissolved. They are independent." },
            ],
            steps: [
              { reasoning: "The claim mixes up strength with concentration: 'strong' and 'weak' describe the type of acid, not how much is present.", marks: 1, markCode: "B" },
              { reasoning: "A concentrated weak acid has lots of acid particles but they break up only a little; a dilute strong acid has few particles but they break up almost completely.", marks: 1, markCode: "R" },
              { reasoning: "To compare strength fairly, use the same concentration of each acid and measure the pH (or rate of reaction with a metal/carbonate).", marks: 1, markCode: "B" },
              { reasoning: "The acid with the lower pH at the same concentration is the stronger one.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim confuses strength with concentration. Compare acids at the same concentration and compare pH: lower pH means stronger.",
            commonErrors: ["Agreeing that concentrated = strong."],
            examinerNote: "B1 identifies the confusion. R1 explains difference. B1 fair comparison method. R1 lower pH = stronger. Allow oe.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Litmus paper is cheaper and quicker to use than universal indicator. Explain why a farmer testing soil pH should still choose universal indicator or a pH meter rather than litmus paper.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Indicators", statement: "Litmus only distinguishes acid from alkali; universal indicator and pH meters give approximate or precise pH values." },
            ],
            steps: [
              { reasoning: "Litmus gives only two results: acid or alkali (red or blue).", marks: 1, markCode: "B" },
              { reasoning: "It cannot tell pH 5 from pH 6, both acidic, so the farmer cannot tell how acidic the soil is.", marks: 1, markCode: "R" },
              { reasoning: "Universal indicator gives a colour for each pH range, and a pH meter gives a numerical value.", marks: 1, markCode: "B" },
              { reasoning: "The farmer needs to know how much lime to add, so a pH value (or at least a range) is needed to judge the degree of acidity.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Litmus only shows acid or alkali, not how acidic. Universal indicator or a pH meter gives a pH value or range, so the farmer can judge how much treatment the soil needs.",
            commonErrors: ["Saying litmus is inaccurate without explaining it gives only two categories."],
            examinerNote: "B1 litmus = acid/alkali only. R1 cannot distinguish degrees. B1 UI/pH meter gives value. R1 needed for deciding treatment. Allow oe.",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution turns red litmus paper blue. What can you conclude about the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is acidic" },
              { id: "b", text: "It is a salt solution only" },
              { id: "c", text: "It is neutral" },
              { id: "d", text: "It is alkaline" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Litmus", statement: "Litmus turns blue in alkali and red in acid." },
            ],
            steps: [
              { reasoning: "Red litmus turning blue is the test for an alkali.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** It is alkaline",
            commonErrors: ["Confusing which litmus changes colour in which solution."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is a WEAK acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrochloric acid at pH 1" },
              { id: "b", text: "Sulfuric acid at pH 1" },
              { id: "c", text: "A pH 13 bleach solution" },
              { id: "d", text: "Ethanoic acid in vinegar at pH 3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strong and weak acids", statement: "Weak acids have a higher pH than strong acids at the same concentration; ethanoic acid (vinegar) is a weak acid." },
            ],
            steps: [
              { reasoning: "Ethanoic acid in vinegar has a higher pH and is a weak acid; the pH 1 acids are strong and bleach is alkaline, not acidic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Ethanoic acid in vinegar at pH 3",
            commonErrors: ["Choosing a strong acid because pH 1 seems 'more acid'."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-ph-indicators-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student tests four solutions, J, K, L and M, with red litmus, blue litmus and universal indicator.\n\n| Solution | Red litmus | Blue litmus | Universal indicator colour |\n| --- | --- | --- | --- |\n| J | stays red | turns red | red |\n| K | stays red | stays blue | yellow |\n| L | turns blue | stays blue | purple |\n| M | stays red | stays blue | green |\n\nSolutions J and K are both acidic.",
          parts: [
            { label: "a", prompt: "Identify which solution is neutral and which is the most alkaline.", marks: 2 },
            { label: "b", prompt: "Suggest a pH value for solution L and explain how you chose it.", marks: 2 },
            { label: "c", prompt: "J and K are both acids at the same concentration. Suggest which is the stronger acid and justify your answer.", marks: 2 },
            { label: "d", prompt: "A swimming pool should have a pH near 7.2. Suggest why a pool tested with litmus alone would not be safe to swim in, even if the litmus result looked 'normal'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Indicators", statement: "Litmus: red in acid, blue in alkali. Universal indicator: red (1-2), orange/yellow (3-6), green (7), blue (8-11), purple (12-14)." },
              { kind: "principle", name: "pH scale", statement: "Lower pH = more acidic; each unit is a tenfold change." },
            ],
            steps: [
              { part: "a", reasoning: "M is neutral: litmus unchanged and universal indicator is green (pH 7).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "L is the most alkaline: purple corresponds to pH 12-14, the highest range.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Purple on universal indicator means pH 12-14.", working: "pH\\ 12\\text{-}14", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Purple is the colour for the most alkaline range of the scale.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "J is the stronger acid.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "J is red on universal indicator (pH 1-2) while K is yellow (pH 3-6); at the same concentration the acid with the lower pH is the stronger one.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Litmus only says acid or alkali, so it cannot detect that the pool is too acidic or too alkaline within those categories.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Water at pH 5 and pH 2 would both turn litmus red; only universal indicator or a pH meter reveals how far from pH 7.2 the pool is, which matters for safety and comfort.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) M neutral, L most alkaline (b) L: pH 12-14, purple = most alkaline range (c) J is the stronger acid because its pH (red, pH 1-2) is lower than K's (yellow, pH 3-6) at the same concentration (d) Litmus cannot show how acidic/alkaline the water is, so a pool far from pH 7.2 could look 'normal'.",
            commonErrors: ["In (c) choosing K because yellow 'looks stronger'.", "In (d) saying litmus gives no result at all."],
            examinerNote: "(b) Accept any pH 12-14. (c) Orange corresponds to roughly pH 3-4 and yellow to roughly 4-6; lower pH = stronger acid. (d) Allow oe for 'only two categories'.",
          },
        },
      ],
    },
    {
      id: "myps2-u1-neutralisation",
      title: "Neutralisation and salts",
      skill: "Write word equations for neutralisation, name salts, explain everyday uses and design a fair test to compare antacids.",
      lesson: {
        sections: [
          {
            heading: "Neutralisation",
            body: "When an acid reacts with an alkali or other base, they cancel each other out. This is **neutralisation**. The products are a **salt** and water. Neutralisation is exothermic.\n\n$$\\text{acid} + \\text{alkali} \\rightarrow \\text{salt} + \\text{water}$$\n\nThe name of the salt comes from the acid and the base:\n- hydrochloric acid makes **chlorides**\n- sulfuric acid makes **sulfates**\n- nitric acid makes **nitrates**\n\nThe first part of the salt's name comes from the metal in the base. For example, $\\text{hydrochloric acid} + \\text{sodium hydroxide} \\rightarrow \\text{sodium chloride} + \\text{water}$.",
          },
          {
            heading: "Everyday uses",
            body: "- **Indigestion**: stomach acid (hydrochloric acid) causes pain if there is too much. **Antacid** tablets contain bases such as magnesium hydroxide or calcium carbonate, which neutralise the extra acid.\n- **Soil treatment**: farmers add lime (calcium hydroxide or calcium oxide) to acidic soil to raise its pH.\n- **Insect stings**: a bee sting is acidic and can be treated with a mild alkali; a wasp sting is alkaline and can be treated with vinegar.\n\nA good antacid raises the pH to about 7 but not far above it, because too much alkali is also harmful.",
          },
          {
            heading: "Investigating antacids",
            body: "To compare antacids, add a fixed mass of each antacid to the same volume of the same acid containing universal indicator, and measure the volume of acid that is neutralised (or the final pH). The **independent variable** is the type of antacid. The **dependent variable** is the volume of acid neutralised (or the pH). **Control variables** include the mass of antacid, volume and concentration of acid, temperature and time. Repeating the test and calculating a mean improves reliability.",
          },
        ],
        keyFormulas: [
          { name: "Neutralisation", statement: "$\\text{acid} + \\text{alkali} \\rightarrow \\text{salt} + \\text{water}$" },
          { name: "Salt names", statement: "Hydrochloric acid gives chlorides; sulfuric acid gives sulfates; nitric acid gives nitrates" },
        ],
        workedExample: {
          problem: "Write a word equation for the reaction of sulfuric acid with potassium hydroxide.",
          solution: "This is neutralisation, so the products are a salt and water. The acid is sulfuric, so the salt is a sulfate; the metal is potassium. $\\text{sulfuric acid} + \\text{potassium hydroxide} \\rightarrow \\text{potassium sulfate} + \\text{water}$.",
        },
      },
      questions: [
        {
          id: "myps2-u1-neutralisation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products when an acid reacts with an alkali?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only water" },
              { id: "b", text: "A salt and water" },
              { id: "c", text: "A salt and carbon dioxide" },
              { id: "d", text: "A salt and hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutralisation", statement: "$\\text{acid} + \\text{alkali} \\rightarrow \\text{salt} + \\text{water}$" },
            ],
            steps: [
              { reasoning: "Neutralisation of an acid by an alkali always makes a salt and water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A salt and water",
            commonErrors: ["Choosing hydrogen, which forms when a metal reacts with an acid.", "Choosing carbon dioxide, which forms when a carbonate reacts with an acid."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-neutralisation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Hydrochloric acid reacts with sodium hydroxide solution.\n\nWrite the word equation for the reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutralisation", statement: "$\\text{acid} + \\text{alkali} \\rightarrow \\text{salt} + \\text{water}$; hydrochloric acid makes chlorides." },
            ],
            steps: [
              { reasoning: "Both reactants on the left of the arrow: hydrochloric acid and sodium hydroxide.", marks: 1, markCode: "B" },
              { reasoning: "Products: the salt from hydrochloric acid and sodium is sodium chloride, plus water.", working: "\\text{hydrochloric acid} + \\text{sodium hydroxide} \\rightarrow \\text{sodium chloride} + \\text{water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "hydrochloric acid + sodium hydroxide -> sodium chloride + water",
            commonErrors: ["Writing 'sodium chlorine' or 'sodium chlorate' for the salt.", "Leaving out water."],
            examinerNote: "B1 both reactants. B1 sodium chloride and water. Allow products in either order.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A person has indigestion after a large meal. Stomach acid is hydrochloric acid. They take a tablet containing magnesium hydroxide.\n\nExplain how the tablet relieves the pain and write the word equation for the reaction. Explain why the tablet should not contain a large excess of the alkali.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutralisation", statement: "$\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}$" },
            ],
            steps: [
              { reasoning: "The magnesium hydroxide neutralises the excess hydrochloric acid in the stomach, raising the pH.", marks: 1, markCode: "B" },
              { reasoning: "Write the word equation with a chloride salt.", working: "\\text{hydrochloric acid} + \\text{magnesium hydroxide} \\rightarrow \\text{magnesium chloride} + \\text{water}", marks: 2, markCode: "B" },
              { reasoning: "Too much alkali would make the stomach contents too alkaline (pH well above 7), which is also harmful and would stop the stomach working properly.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The tablet neutralises excess stomach acid. hydrochloric acid + magnesium hydroxide -> magnesium chloride + water. Too much would make the stomach alkaline, which is harmful.",
            commonErrors: ["Writing magnesium chloride as the only product.", "Saying the tablet 'removes' the acid without a reaction."],
            examinerNote: "B1 neutralises acid. B2 for the equation: B1 for correct reactants, B1 for magnesium chloride and water. R1 too much alkali harmful / pH too high oe.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student plans an investigation to find out which of three antacid brands (A, B and C) neutralises the most stomach acid. She crushes 1.0 g of each antacid and adds it to 50 cm$^3$ of dilute hydrochloric acid containing universal indicator. She then adds more acid in 5 cm$^3$ portions until the indicator no longer stays green. For each 1.0 g sample she records the total volume of acid that was neutralised:\n\n| Antacid | Volume of acid neutralised (cm$^3$) |\n| --- | --- |\n| A | 45 |\n| B | 60 |\n| C | 30 |",
          parts: [
            { label: "a", prompt: "State the independent variable and the dependent variable.", marks: 2 },
            { label: "b", prompt: "Give **two** variables that she must control to make this a fair test.", marks: 2 },
            { label: "c", prompt: "Write a hypothesis for the investigation with a scientific reason.", marks: 2 },
            { label: "d", prompt: "Use the data to determine which antacid is the most effective, and calculate how many times more acid antacid B neutralises than antacid C.", marks: 2 },
            { label: "e", prompt: "Suggest one improvement to the method to make the conclusion more reliable.", marks: 1 },
            { label: "f", prompt: "Antacid A is cheaper than B. Suggest one factor, other than cost or neutralising power, that a patient should consider when choosing an antacid.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Change only one variable (independent), measure one variable (dependent) and keep all others constant (control variables)." },
              { kind: "definition", name: "Neutralisation", statement: "An antacid neutralises stomach acid; the more acid it neutralises per gram, the more effective it is." },
            ],
            steps: [
              { part: "a", reasoning: "Independent variable: the type (brand) of antacid.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Dependent variable: the volume of acid neutralised.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "One control: the mass of antacid (1.0 g) or the same size of particles (crushed).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A second control: the volume and concentration of acid, temperature, or the same indicator.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A testable prediction, for example that the antacid with the most base per gram will neutralise the most acid.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A scientific reason: a base reacts with and neutralises acid, so more base means more acid neutralised.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "B neutralises the most acid (60 cm3), so it is most effective.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Ratio of volumes.", working: "\\frac{60}{30} = 2\\text{ times}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Repeat each test at least three times and calculate a mean, or use smaller portions of acid for a more precise end point.", marks: 1, markCode: "B" },
              { part: "f", reasoning: "Any valid factor, for example side effects, other ingredients (allergies), taste, or how long the effect lasts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Independent: type of antacid; dependent: volume of acid neutralised (b) Mass of antacid and volume or concentration of acid (c) The antacid with more base will neutralise more acid, because bases react with acid (d) B is the most effective; 2 times as much acid as C (e) Repeat and take a mean (f) Side effects, ingredients or duration.",
            commonErrors: ["In (a) swapping the variables.", "In (d) dividing 30 by 60 to give 0.5.", "In (b) giving the type of antacid as a control variable."],
            examinerNote: "(b) Allow any two different valid control variables. (c) Hypothesis must be testable and include a reason. (d) A1 for 2 or 'twice'. Ignore the unit.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a metal reacts with an acid, what are the products?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A salt and carbon dioxide" },
              { id: "b", text: "A salt and hydrogen" },
              { id: "c", text: "A salt and water" },
              { id: "d", text: "Only hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Metal + acid", statement: "A metal reacting with an acid produces a salt and hydrogen gas." },
            ],
            steps: [
              { reasoning: "Metals displace hydrogen from acids, giving a salt and hydrogen; water is the product of neutralisation with an alkali.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A salt and hydrogen",
            commonErrors: ["Choosing salt and water, which is the neutralisation product."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-neutralisation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sulfuric acid reacts with sodium hydroxide solution. Which salt is formed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium sulfate" },
              { id: "b", text: "Sodium chloride" },
              { id: "c", text: "Sodium nitrate" },
              { id: "d", text: "Sodium hydroxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Salt names", statement: "Sulfuric acid makes sulfates; the first part of the salt name comes from the metal in the base." },
            ],
            steps: [
              { reasoning: "Sulfuric acid gives a sulfate and sodium gives the first part, so the salt is sodium sulfate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sodium sulfate",
            commonErrors: ["Choosing sodium chloride (from hydrochloric acid)."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-neutralisation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which acid would produce a nitrate salt in a neutralisation reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanoic acid" },
              { id: "b", text: "Sulfuric acid" },
              { id: "c", text: "Nitric acid" },
              { id: "d", text: "Hydrochloric acid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Salt names", statement: "Nitric acid makes nitrates; hydrochloric acid makes chlorides and sulfuric acid makes sulfates." },
            ],
            steps: [
              { reasoning: "Only nitric acid gives nitrate salts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Nitric acid",
            commonErrors: ["Confusing nitrate with chloride."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-neutralisation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three antacid brands are tested against the same acid. Brand P neutralises 30 cm$^3$, brand Q neutralises 60 cm$^3$ and brand R neutralises 15 cm$^3$ of acid per gram.\n\nCalculate how many times more acid brand Q neutralises than brand P, and than brand R.",
          response: {
            type: "numeric",
            parts: [
              { label: "Q compared with P", answer: 2, tolerance: 0 },
              { label: "Q compared with R", answer: 4, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing effectiveness", statement: "The antacid that neutralises the most acid per gram is the most effective; compare volumes by division." },
            ],
            steps: [
              { reasoning: "Q vs P: divide the volumes.", working: "60 \\div 30 = 2", marks: 1, markCode: "M" },
              { reasoning: "Q vs R: divide the volumes.", working: "60 \\div 15 = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Q neutralises 2 times as much acid as P and 4 times as much as R",
            commonErrors: ["Dividing P by Q to give 0.5.", "Comparing Q with the wrong brand."],
            examinerNote: "M1 for 60/30. A1 for 60/15 = 4.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 1.0 g tablet of antacid A neutralises 50 cm$^3$ of acid. A 2.0 g tablet of the same antacid is used.\n\nCalculate the volume of acid the 2.0 g tablet will neutralise, assuming it works the same way.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume of acid", answer: 100, tolerance: 0, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Antacid effectiveness", statement: "Doubling the mass of antacid doubles the volume of acid it can neutralise." },
            ],
            steps: [
              { reasoning: "Double the mass means double the acid neutralised.", working: "50 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 100\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 cm$^3$",
            commonErrors: ["Subtracting to give 25 cm3.", "Giving 50 (unchanged)."],
            examinerNote: "M1 for 50 x 2 oe. A1 for 100.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student repeats an antacid test three times and records the volumes of acid neutralised: 48 cm$^3$, 52 cm$^3$ and 50 cm$^3$.\n\nCalculate the mean volume of acid neutralised.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean volume", answer: 50, tolerance: 0, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "mean = sum of readings / number of readings" },
            ],
            steps: [
              { reasoning: "Add the three readings and divide by 3.", working: "\\frac{48 + 52 + 50}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 50\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 cm$^3$",
            commonErrors: ["Averaging only two readings.", "Dividing by the wrong number."],
            examinerNote: "M1 for (48+52+50)/3 oe. A1 for 50.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a neutralisation test, an antacid sample neutralises 180 cm$^3$ of acid out of a total of 200 cm$^3$ available.\n\nCalculate the percentage of the available acid that was neutralised.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage neutralised", answer: 90, tolerance: 0.01, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\frac{\\text{part}}{\\text{whole}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Divide the neutralised volume by the total volume.", working: "\\frac{180}{200}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 100.", working: "0.9 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 90\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90%",
            commonErrors: ["Dividing 200 by 180.", "Giving 0.9 without multiplying by 100."],
            examinerNote: "M1 for 180/200. M1 for x100. A1 for 90%.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the word equation for the reaction of nitric acid with potassium hydroxide solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutralisation", statement: "$\\text{acid} + \\text{alkali} \\rightarrow \\text{salt} + \\text{water}$; nitric acid makes nitrates." },
            ],
            steps: [
              { reasoning: "Both reactants on the left: nitric acid and potassium hydroxide.", marks: 1, markCode: "B" },
              { reasoning: "Products: potassium nitrate (nitrate from nitric acid, potassium from the base) and water.", working: "\\text{nitric acid} + \\text{potassium hydroxide} \\rightarrow \\text{potassium nitrate} + \\text{water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "nitric acid + potassium hydroxide -> potassium nitrate + water",
            commonErrors: ["Writing 'potassium nitrogen' or 'potassium nitric' for the salt.", "Leaving out water."],
            examinerNote: "B1 both reactants. B1 potassium nitrate and water. Allow products in either order.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A child is stung by a bee and later by a wasp. A first-aid guide says a bee sting can be treated with a mild alkali such as bicarbonate of soda, while a wasp sting is treated with vinegar (a weak acid).\n\nExplain the science behind both treatments, including what kind of sting each insect causes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neutralisation in first aid", statement: "Treat a sting with the opposite type: an acidic sting is treated with an alkali and an alkaline sting with an acid, to neutralise it." },
            ],
            steps: [
              { reasoning: "A bee sting injects acidic venom.", marks: 1, markCode: "B" },
              { reasoning: "Bicarbonate of soda is alkaline, so it neutralises the acid in the sting, forming a salt and water and reducing the pain.", marks: 1, markCode: "R" },
              { reasoning: "A wasp sting injects alkaline venom, so vinegar (ethanoic acid) is used to neutralise it.", marks: 1, markCode: "B" },
              { reasoning: "In both cases neutralisation reduces the harmful effect; using the opposite pH type cancels the venom's acidity/alkalinity.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Bee venom is acidic, so an alkali (bicarbonate) neutralises it. Wasp venom is alkaline, so an acid (vinegar) neutralises it. Neutralisation reduces the sting's effect.",
            commonErrors: ["Swapping the two treatments.", "Saying the treatments 'kill' the venom without neutralisation."],
            examinerNote: "B1 bee acidic. R1 alkali neutralises. B1 wasp alkaline + vinegar. R1 opposite pH cancels effect. Allow oe.",
          },
        },
        {
          id: "myps2-u1-neutralisation-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an investigation comparing antacids, which variable is the INDEPENDENT variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The temperature of the acid" },
              { id: "b", text: "The volume of acid neutralised" },
              { id: "c", text: "The type of antacid" },
              { id: "d", text: "The mass of antacid used" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "The independent variable is the one deliberately changed; the dependent variable is measured." },
            ],
            steps: [
              { reasoning: "The student changes the brand of antacid; everything else is controlled.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The type of antacid",
            commonErrors: ["Choosing the measured quantity (volume of acid) as independent."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-neutralisation-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A farmer adds calcium hydroxide (lime) to acidic soil. Why does this help crops grow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The lime adds extra water to the soil" },
              { id: "b", text: "The lime makes the soil more acidic" },
              { id: "c", text: "The lime kills all the microbes in the soil" },
              { id: "d", text: "The lime neutralises the acid in the soil, raising the pH" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Soil treatment", statement: "Lime is a base that neutralises acidic soil, raising its pH towards neutral." },
            ],
            steps: [
              { reasoning: "Calcium hydroxide is alkaline and neutralises the soil acid, raising the pH to a level crops prefer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The lime neutralises the acid in the soil, raising the pH",
            commonErrors: ["Thinking lime adds acidity."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-neutralisation-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A farmer finds his soil has pH 5.2 and the crop he wants to grow prefers pH 6.5-7.0. He adds calcium hydroxide (lime) to the soil.",
          parts: [
            { label: "a", prompt: "Explain why the soil is unsuitable for this crop and what adding lime does to the pH.", marks: 2 },
            { label: "b", prompt: "Write a word equation for the reaction of hydrochloric acid (representing the soil acid) with calcium hydroxide.", marks: 2 },
            { label: "c", prompt: "Explain why too much lime could harm the crop.", marks: 2 },
            { label: "d", prompt: "Suggest one other method, besides adding lime, that could make the soil suitable for the crop, and give a limitation of your suggestion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neutralisation", statement: "Acid + base -> salt + water; adding a base to acid raises the pH." },
            ],
            steps: [
              { part: "a", reasoning: "pH 5.2 is acidic (below 7), while the crop prefers near-neutral pH 6.5-7.0.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Calcium hydroxide is a base that neutralises the acid, raising the soil pH.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Both reactants correct: hydrochloric acid and calcium hydroxide.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Products: calcium chloride and water.", working: "\\text{hydrochloric acid} + \\text{calcium hydroxide} \\rightarrow \\text{calcium chloride} + \\text{water}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Too much lime would make the soil alkaline (pH well above 7), which is also unsuitable for the crop.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "An excess of base can damage roots and reduce nutrient availability, just as too much acid does.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Any valid alternative: grow a crop that tolerates acidic soil, add organic matter/compost that neutralises acid, or use a different pH-tolerant variety.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A limitation: compost acts slowly, acid-tolerant crops may give lower yields, or the method may need repeating.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Soil is acidic; lime neutralises it and raises pH (b) HCl + Ca(OH)2 -> CaCl2 + water (c) Excess lime makes soil too alkaline (d) Alternative with limitation.",
            commonErrors: ["In (b) writing 'calcium chlorine' or forgetting water.", "In (d) suggesting 'add more acid' as a fix."],
            examinerNote: "(b) Allow products in either order. (d) Any reasonable alternative with a stated limitation.",
          },
        },
      ],
    },
  ],
};
