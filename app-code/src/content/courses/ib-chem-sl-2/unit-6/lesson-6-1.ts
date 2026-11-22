import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "chemsl-u6-lesson-6-1",
  code: "6-1",
  title: "Chemical Equilibrium",
  goal: "I CAN explain dynamic equilibrium and Le Chatelier's principle, write expressions for the equilibrium constant Kc, and use Kc to describe the position of equilibrium.",
  standards: ["Paper 1", "Paper 2", "Topic 7.1", "Topic 7.2"],
  vocabulary: [
    { term: "Reversible reaction", definition: "A reaction that can proceed in both directions, written with the equilibrium arrow $\\rightleftharpoons$." },
    { term: "Dynamic equilibrium", definition: "The state in a closed system where the forward and reverse reaction rates are equal, so concentrations remain constant while reactions continue." },
    { term: "Le Chatelier's principle", definition: "If a system at equilibrium is disturbed by a change in concentration, pressure or temperature, the equilibrium shifts in the direction that opposes the change." },
    { term: "Equilibrium constant ($K_c$)", definition: "The ratio of the equilibrium concentrations of products to reactants, each raised to the power of its coefficient in the balanced equation." },
    { term: "Homogeneous equilibrium", definition: "An equilibrium in which all reactants and products are in the same phase (e.g. all gases or all in solution)." },
    { term: "Closed system", definition: "A system that can exchange energy but not matter with its surroundings — a requirement for equilibrium to be established." },
  ],
  concepts: [
    {
      id: "chemsl-u6-equilibrium",
      title: "Dynamic equilibrium and Le Chatelier's principle",
      skill: "Explain dynamic equilibrium, apply Le Chatelier's principle to changes in concentration, pressure and temperature, and describe industrial conditions.",
      lesson: {
        sections: [
          {
            heading: "Dynamic equilibrium",
            body: "Many reactions are **reversible** and written with $\\rightleftharpoons$. In a **closed system** they reach **dynamic equilibrium**: the forward and reverse reactions continue at equal rates, so the concentrations of reactants and products stay constant — but they are not zero and the reaction has not stopped. Equilibrium requires a closed system; if products escape (as in an open vessel), the reaction simply goes to completion.",
          },
          {
            heading: "Le Chatelier's principle",
            body: "A disturbance shifts the equilibrium to oppose it. **Increase the concentration** of a reactant: equilibrium shifts right (towards products). **Increase pressure** (or decrease volume): shifts towards the side with fewer moles of gas. **Increase temperature**: shifts in the endothermic direction — for an exothermic reaction this means shifting left, reducing yield but increasing rate. A **catalyst** speeds both directions equally and does not change the equilibrium position.",
          },
          {
            heading: "Industrial applications",
            body: "The **Haber process** ($\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$, $\\Delta H = -92$ kJ mol$^{-1}$) uses high pressure ($\\approx 200$ atm, favouring fewer gas moles), a moderate temperature ($\\approx 450$ °C, a compromise between rate and yield for an exothermic reaction) and an iron catalyst (speeds attainment of equilibrium). Removing $\\mathrm{NH}_3$ as it forms also shifts equilibrium right, increasing yield.",
          },
        ],
        keyFormulas: [
          { name: "Dynamic equilibrium", statement: "$\\text{rate}_{\\text{forward}} = \\text{rate}_{\\text{reverse}}$; concentrations constant" },
          { name: "Le Chatelier — concentration", statement: "Increasing a reactant shifts equilibrium towards products" },
          { name: "Le Chatelier — temperature", statement: "Heating shifts equilibrium in the endothermic direction" },
        ],
        workedExample: {
          problem: "For $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$ ($\\Delta H = -92$ kJ mol$^{-1}$), predict the effect on the equilibrium position of (a) increasing the pressure and (b) increasing the temperature.",
          solution: "(a) Pressure increase shifts towards fewer gas moles: $4 \\rightarrow 2$, so equilibrium shifts right towards $\\mathrm{NH}_3$. (b) The reaction is exothermic, so increasing temperature shifts equilibrium in the endothermic direction — left, decomposing $\\mathrm{NH}_3$ and decreasing yield.",
        },
      },
      questions: [
        {
          id: "chemsl-u6-equilibrium-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly describes dynamic equilibrium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the products are present" },
              { id: "b", text: "The forward reaction is faster than the reverse reaction" },
              { id: "c", text: "The forward and reverse reaction rates are equal, so concentrations remain constant while reactions continue" },
              { id: "d", text: "All reactions have stopped and concentrations are zero" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Equal forward and reverse rates; constant concentrations; reactions continue." },
            ],
            steps: [
              { reasoning: "Equilibrium is dynamic — the rates are equal but nonzero.", working: "k_f[\\text{reactants}] = k_r[\\text{products}]", marks: 1, markCode: "M" },
              { reasoning: "Options (b), (c) and (d) contradict the definition.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Forward and reverse rates equal; concentrations constant",
            commonErrors: ["Thinking equilibrium means the reaction has stopped."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$, what is the effect on the equilibrium position of increasing the pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shifts right, because the reaction is exothermic" },
              { id: "b", text: "No change, because all species are gases" },
              { id: "c", text: "Shifts right towards $\\mathrm{NH}_3$, because $4$ moles of gas become $2$ moles" },
              { id: "d", text: "Shifts left towards the reactants" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier — pressure", statement: "Higher pressure shifts equilibrium towards fewer moles of gas." },
            ],
            steps: [
              { reasoning: "Count gas moles on each side: reactants $1 + 3 = 4$, products $2$.", working: "4 \\text{ mol gas} \\rightarrow 2 \\text{ mol gas}", marks: 1, markCode: "M" },
              { reasoning: "Higher pressure is opposed by shifting towards fewer gas moles — the products.", working: "\\text{shift right}", marks: 1, markCode: "M" },
              { reasoning: "Option (d) gives the wrong reason — the shift is due to gas moles, not enthalpy.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Shifts right towards $\\mathrm{NH}_3$ (fewer gas moles)",
            commonErrors: ["Ignoring the mole ratio and treating it as $1:1$."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For the exothermic reaction $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$, which statement about the effects of temperature and a catalyst is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature and catalyst both have no effect on an equilibrium mixture" },
              { id: "b", text: "Raising the temperature decreases the yield of $\\mathrm{NH}_3$ but increases the rate; a catalyst increases the rate without changing the yield" },
              { id: "c", text: "Raising the temperature increases both the yield and the rate; a catalyst increases the yield" },
              { id: "d", text: "Raising the temperature decreases the rate; a catalyst shifts equilibrium right" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier — temperature", statement: "For an exothermic reaction, heating shifts equilibrium left (endothermic direction), reducing yield." },
              { kind: "definition", name: "Catalyst", statement: "Lowers $E_a$ for both directions; does not change equilibrium position or yield." },
            ],
            steps: [
              { reasoning: "The reaction is exothermic, so raising T shifts equilibrium towards the reactants — less $\\mathrm{NH}_3$ at equilibrium.", working: "T \\uparrow \\Rightarrow \\text{shift left (endothermic)}", marks: 1, markCode: "M" },
              { reasoning: "Higher T still increases the rate because more particles have $E \\geq E_a$ — rate and yield move in opposite directions.", working: "\\text{rate} \\uparrow,\\ \\text{yield} \\downarrow", marks: 1, markCode: "M" },
              { reasoning: "A catalyst speeds both directions equally, so it does not change the equilibrium position or yield.", working: "\\text{catalyst: yield unchanged}", marks: 1, markCode: "R" },
              { reasoning: "Only option (a) is fully correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Higher T decreases yield but increases rate; catalyst increases rate without changing yield",
            commonErrors: ["Thinking higher temperature always increases yield for exothermic reactions."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The Haber process uses the reaction $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$ ($\\Delta H = -92$ kJ mol$^{-1}$).",
          parts: [
            { label: "a", prompt: "Explain what is meant by dynamic equilibrium in this reaction.", marks: 2 },
            { label: "b", prompt: "State two conditions used industrially and justify each briefly.", marks: 2 },
            { label: "c", prompt: "Explain why the temperature used is a compromise between rate and yield.", marks: 2 },
            { label: "d", prompt: "Describe how removing ammonia as it forms increases the yield.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Equal forward and reverse rates in a closed system; concentrations constant." },
              { kind: "principle", name: "Le Chatelier", statement: "Disturbances shift equilibrium to oppose the change." },
            ],
            steps: [
              { part: "a", reasoning: "In a closed system the forward and reverse reactions continue at equal rates.", working: "\\text{rate}_{\\text{f}} = \\text{rate}_{\\text{r}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The concentrations of $\\mathrm{N}_2$, $\\mathrm{H}_2$ and $\\mathrm{NH}_3$ therefore remain constant even though reactions continue.", working: "[\\text{species}] \\text{ constant}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Any two of: high pressure ($\\approx 200$ atm) favours fewer gas moles; moderate temperature ($\\approx 450$ °C) balances rate and yield; iron catalyst speeds attainment of equilibrium without changing yield.", working: "\\text{P high, T moderate, Fe catalyst}", marks: 2, markCode: "R" },
              { part: "c", reasoning: "The reaction is exothermic, so a low temperature would give a higher equilibrium yield.", working: "\\text{exo} \\Rightarrow \\text{low T favours yield}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But a low temperature makes the rate too slow; $450$ °C gives an acceptable rate while retaining reasonable yield.", working: "\\text{compromise}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Removing $\\mathrm{NH}_3$ lowers its concentration.", working: "[\\mathrm{NH}_3] \\downarrow", marks: 1, markCode: "M" },
              { part: "d", reasoning: "By Le Chatelier the equilibrium shifts right to replace the removed product, increasing the overall yield.", working: "\\text{shift right}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) equal forward and reverse rates; constant concentrations (b) e.g. high pressure (fewer gas moles) and moderate temperature (rate–yield compromise) (c) exothermic reaction: low T gives yield but slow rate (d) removing $\\mathrm{NH}_3$ shifts equilibrium right",
            commonErrors: ["Claiming the catalyst increases yield."],
            examinerNote: "Award R1 for each correct feature of dynamic equilibrium in (a); R1 for each valid condition with justification in (b); M1 for the exothermic/low-T argument and R1 for the compromise in (c); M1 for the concentration argument and R1 for the shift direction in (d).",
          },
        },
        {
          id: "chemsl-u6-equilibrium-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For $\\mathrm{CO} + 2\\mathrm{H}_2 \\rightleftharpoons \\mathrm{CH}_3\\mathrm{OH}$, which change shifts the equilibrium towards the products at constant temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the temperature" },
              { id: "b", text: "Decreasing the pressure" },
              { id: "c", text: "Increasing the concentration of CO" },
              { id: "d", text: "Adding a catalyst" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier's principle", statement: "A system at equilibrium shifts in the direction that opposes an imposed change." },
            ],
            steps: [
              { reasoning: "Increasing [CO] adds a reactant; the equilibrium shifts right to consume it.", working: "[\\mathrm{CO}]\\uparrow \\Rightarrow \\text{shift right}", marks: 1, markCode: "M" },
              { reasoning: "Lower pressure shifts left (3 gas moles become 1), heating shifts left for this exothermic synthesis, and a catalyst does not move the position.", working: "\\text{P}\\downarrow,\\ \\text{T}\\uparrow,\\ \\text{catalyst} \\Rightarrow \\text{no shift right}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Increasing the concentration of CO",
            commonErrors: ["Thinking a catalyst shifts the equilibrium position."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The reaction $\\mathrm{N}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{NO}$ is endothermic ($\\Delta H = +180$ kJ mol$^{-1}$). What is the effect on the equilibrium position of increasing the temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is no change in position, only the rate increases" },
              { id: "b", text: "The equilibrium shifts left towards the reactants" },
              { id: "c", text: "The equilibrium shifts right towards NO" },
              { id: "d", text: "The equilibrium shifts right but $K_c$ decreases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier — temperature", statement: "Heating shifts an equilibrium in the endothermic direction." },
            ],
            steps: [
              { reasoning: "The forward reaction is endothermic, so raising the temperature favours the endothermic direction — the products.", working: "\\text{T}\\uparrow \\Rightarrow \\text{shift right (endothermic)}", marks: 1, markCode: "M" },
              { reasoning: "Option (d) is wrong because an endothermic reaction has $K_c$ increase with temperature; (b) and (c) contradict Le Chatelier.", working: "\\text{K}_c \\text{ increases with T}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** The equilibrium shifts right towards NO",
            commonErrors: ["Applying the exothermic rule (shift left) to an endothermic reaction."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For $2\\mathrm{SO}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{SO}_3$, where all species are gases, increasing the pressure at constant temperature shifts the equilibrium in which direction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Right, towards $\\mathrm{SO}_3$, because $3$ moles of gas become $2$ moles" },
              { id: "b", text: "Right, because the reaction is exothermic" },
              { id: "c", text: "There is no change because pressure does not affect equilibria" },
              { id: "d", text: "Left, towards $\\mathrm{SO}_2$ and $\\mathrm{O}_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier — pressure", statement: "Higher pressure shifts equilibrium towards the side with fewer moles of gas." },
            ],
            steps: [
              { reasoning: "Gas moles: reactants $2 + 1 = 3$, products $2$. Higher pressure is opposed by reducing the number of gas moles.", working: "3 \\text{ mol gas} \\rightarrow 2 \\text{ mol gas}", marks: 1, markCode: "M" },
              { reasoning: "The shift is therefore right towards $\\mathrm{SO}_3$; option (d) gives the wrong reason.", working: "\\text{shift right}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Right, towards $\\mathrm{SO}_3$ (fewer gas moles)",
            commonErrors: ["Saying pressure has no effect on gas equilibria."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In the Haber process, why is a temperature of about $450$ °C used rather than a lower temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A lower temperature would shift the equilibrium towards the reactants, so a higher temperature is needed" },
              { id: "b", text: "Higher temperatures are needed to reach equilibrium; the yield is unaffected by temperature" },
              { id: "c", text: "A lower temperature would increase the yield (exothermic reaction) but make the rate too slow; $450$ °C is a compromise between rate and yield" },
              { id: "d", text: "The iron catalyst only functions above $450$ °C" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate–yield compromise", statement: "For an exothermic equilibrium, low T favours yield but low rate; industrial T balances both." },
            ],
            steps: [
              { reasoning: "The synthesis of $\\mathrm{NH}_3$ is exothermic, so a lower temperature would increase the equilibrium yield.", working: "\\Delta H < 0 \\Rightarrow \\text{low T favours yield}", marks: 1, markCode: "M" },
              { reasoning: "But a low temperature makes the forward rate too slow for industrial production.", working: "\\text{low T} \\Rightarrow \\text{slow rate}", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) states both sides of the compromise correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Yield–rate compromise",
            commonErrors: ["Claiming a lower temperature always improves an industrial process."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Which combination of conditions gives the greatest equilibrium yield of $\\mathrm{NH}_3$ in the Haber process?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low pressure, high temperature and no catalyst" },
              { id: "b", text: "Low pressure, low temperature and no catalyst" },
              { id: "c", text: "High pressure, high temperature and an iron catalyst" },
              { id: "d", text: "High pressure, low temperature and an iron catalyst" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier applied to Haber", statement: "High pressure (fewer gas moles) and low temperature (exothermic) both favour $\\mathrm{NH}_3$; catalyst speeds attainment." },
            ],
            steps: [
              { reasoning: "High pressure favours the side with fewer gas moles ($4 \\rightarrow 2$), i.e. $\\mathrm{NH}_3$.", working: "\\text{P}\\uparrow \\Rightarrow \\text{shift right}", marks: 1, markCode: "M" },
              { reasoning: "Low temperature favours the exothermic direction — more $\\mathrm{NH}_3$ at equilibrium.", working: "\\text{T}\\downarrow \\Rightarrow \\text{shift right}", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) combines both favourable conditions; the catalyst does not change yield but is used industrially.", working: "\\text{a is the only correct combination}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** High pressure, low temperature and an iron catalyst",
            commonErrors: ["Choosing high temperature because it increases the rate, forgetting it lowers the equilibrium yield."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a $2.0$ dm$^3$ vessel at equilibrium for $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$ there are $0.40$ mol of $\\mathrm{NH}_3$. Calculate the equilibrium concentration of $\\mathrm{NH}_3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$[\\mathrm{NH}_3]$ (mol dm$^{-3}$)", answer: 0.2, tolerance: 0.005, unit: "mol dm$^{-3}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concentration", statement: "$c = \\dfrac{n}{V}$." },
            ],
            steps: [
              { reasoning: "Concentration equals amount divided by volume.", working: "[\\mathrm{NH}_3] = \\frac{n}{V} = \\frac{0.40}{2.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "[\\mathrm{NH}_3] = 0.20", marks: 1, markCode: "A" },
              { reasoning: "The answer must be quoted with units of mol dm$^{-3}$.", working: "\\text{unit: mol dm}^{-3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$[\\mathrm{NH}_3] = 0.20$ mol dm$^{-3}$",
            commonErrors: ["Multiplying by volume instead of dividing."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "For $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$, a mixture initially contains $2.0$ mol $\\mathrm{N}_2$ and $6.0$ mol $\\mathrm{H}_2$. At equilibrium $1.0$ mol of $\\mathrm{NH}_3$ has formed. Calculate the amount, in mol, of $\\mathrm{H}_2$ remaining.",
          response: {
            type: "numeric",
            parts: [
              { label: "Amount of $\\mathrm{H}_2$ remaining (mol)", answer: 4.5, tolerance: 0.005, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stoichiometry", statement: "Use the balanced mole ratio from the equation." },
            ],
            steps: [
              { reasoning: "The equation shows $3$ mol $\\mathrm{H}_2$ are consumed for every $2$ mol $\\mathrm{NH}_3$ formed.", working: "\\frac{3}{2} = 1.5", marks: 1, markCode: "M" },
              { reasoning: "For $1.0$ mol $\\mathrm{NH}_3$ formed, $1.5$ mol $\\mathrm{H}_2$ is consumed.", working: "1.5 \\times 1.0 = 1.5\\ \\text{mol}", marks: 1, markCode: "M" },
              { reasoning: "Subtract from the initial amount.", working: "6.0 - 1.5 = 4.5", marks: 1, markCode: "A" },
              { reasoning: "Answer is an amount in mol, not a concentration.", working: "4.5\\ \\text{mol}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$4.5$ mol $\\mathrm{H}_2$ remaining",
            commonErrors: ["Using a $1:1$ mole ratio instead of $3:2$."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Pure $\\mathrm{N}_2\\mathrm{O}_4$ decomposes according to $\\mathrm{N}_2\\mathrm{O}_4 \\rightleftharpoons 2\\mathrm{NO}_2$. Starting with $1.0$ mol of $\\mathrm{N}_2\\mathrm{O}_4$, at equilibrium $0.60$ mol of $\\mathrm{N}_2\\mathrm{O}_4$ remains. (a) Calculate the amount of $\\mathrm{NO}_2$ formed. (b) Calculate the total amount of gas at equilibrium.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{NO}_2$ formed (mol)", answer: 0.8, tolerance: 0.005, unit: "mol" },
              { label: "(b) Total gas at equilibrium (mol)", answer: 1.4, tolerance: 0.005, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stoichiometry", statement: "Each mole of $\\mathrm{N}_2\\mathrm{O}_4$ that decomposes produces $2$ mol $\\mathrm{NO}_2$." },
            ],
            steps: [
              { reasoning: "Amount of $\\mathrm{N}_2\\mathrm{O}_4$ decomposed is $1.0 - 0.60 = 0.40$ mol.", working: "1.0 - 0.60 = 0.40", marks: 1, markCode: "M" },
              { reasoning: "Each mole decomposed gives $2$ mol $\\mathrm{NO}_2$, so $0.80$ mol $\\mathrm{NO}_2$ is formed.", working: "2 \\times 0.40 = 0.80", marks: 1, markCode: "M" },
              { reasoning: "State the amount of $\\mathrm{NO}_2$.", working: "0.80\\ \\text{mol}", marks: 1, markCode: "A" },
              { reasoning: "Total gas = remaining $\\mathrm{N}_2\\mathrm{O}_4$ + formed $\\mathrm{NO}_2$.", working: "0.60 + 0.80 = 1.40", marks: 1, markCode: "M" },
              { reasoning: "State the total with units.", working: "1.40\\ \\text{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.80$ mol $\\mathrm{NO}_2$ (b) $1.40$ mol total gas",
            commonErrors: ["Forgetting the $2:1$ ratio and writing $0.40$ mol $\\mathrm{NO}_2$."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "For $2\\mathrm{SO}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{SO}_3$, a mixture initially contains $2.0$ mol $\\mathrm{SO}_2$ and $1.0$ mol $\\mathrm{O}_2$ with no $\\mathrm{SO}_3$. At equilibrium $0.40$ mol of $\\mathrm{SO}_3$ is present. (a) Calculate the amount of $\\mathrm{SO}_2$ remaining. (b) Calculate the amount of $\\mathrm{O}_2$ remaining.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{SO}_2$ remaining (mol)", answer: 1.6, tolerance: 0.005, unit: "mol" },
              { label: "(b) $\\mathrm{O}_2$ remaining (mol)", answer: 0.8, tolerance: 0.005, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stoichiometry", statement: "The mole ratio $\\mathrm{SO}_2 : \\mathrm{SO}_3 = 1:1$ and $\\mathrm{O}_2 : \\mathrm{SO}_3 = 1:2$." },
            ],
            steps: [
              { reasoning: "Each mole of $\\mathrm{SO}_3$ formed consumes one mole of $\\mathrm{SO}_2$, so $0.40$ mol $\\mathrm{SO}_2$ is consumed.", working: "\\mathrm{SO}_2 \\text{ consumed} = 0.40", marks: 1, markCode: "M" },
              { reasoning: "Each mole of $\\mathrm{SO}_3$ consumes half a mole of $\\mathrm{O}_2$, so $0.20$ mol $\\mathrm{O}_2$ is consumed.", working: "\\mathrm{O}_2 \\text{ consumed} = 0.20", marks: 1, markCode: "M" },
              { reasoning: "Remaining $\\mathrm{SO}_2 = 2.0 - 0.40$.", working: "2.0 - 0.40 = 1.60", marks: 1, markCode: "A" },
              { reasoning: "Remaining $\\mathrm{O}_2 = 1.0 - 0.20$.", working: "1.0 - 0.20 = 0.80", marks: 1, markCode: "A" },
              { reasoning: "Both answers are amounts in mol.", working: "1.60\\ \\text{and}\\ 0.80\\ \\text{mol}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $1.60$ mol $\\mathrm{SO}_2$ (b) $0.80$ mol $\\mathrm{O}_2$",
            commonErrors: ["Using a $2:1$ ratio for $\\mathrm{SO}_2$ instead of $1:1$."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q14",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "In the Haber process, $1.0$ mol of $\\mathrm{N}_2$ and $3.0$ mol of $\\mathrm{H}_2$ react completely to form $\\mathrm{NH}_3$ ($M_r = 17$). Calculate the mass of $\\mathrm{NH}_3$ produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass of $\\mathrm{NH}_3$ (g)", answer: 34, tolerance: 0.05, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stoichiometry", statement: "$1$ mol $\\mathrm{N}_2$ produces $2$ mol $\\mathrm{NH}_3$." },
            ],
            steps: [
              { reasoning: "Complete reaction gives $2.0$ mol $\\mathrm{NH}_3$.", working: "n(\\mathrm{NH}_3) = 2.0\\ \\text{mol}", marks: 1, markCode: "M" },
              { reasoning: "Mass equals moles times molar mass.", working: "m = 2.0 \\times 17 = 34\\ \\text{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$34$ g $\\mathrm{NH}_3$",
            commonErrors: ["Using $M_r = 17$ per mole of $\\mathrm{N}_2$ instead of per mole of $\\mathrm{NH}_3$."],
          },
        },
        {
          id: "chemsl-u6-equilibrium-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "The Contact process uses the equilibrium $2\\mathrm{SO}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{SO}_3$.",
          parts: [
            { label: "a", prompt: "Define dynamic equilibrium.", marks: 2 },
            { label: "b", prompt: "State two conditions used industrially and justify each briefly.", marks: 2 },
            { label: "c", prompt: "Explain the effect of increasing the temperature on the yield and on the rate of the forward reaction.", marks: 2 },
            { label: "d", prompt: "Explain the effect of increasing the pressure on the position of equilibrium.", marks: 2 },
            { label: "e", prompt: "State the role of the $\\mathrm{V}_2\\mathrm{O}_5$ catalyst in the process.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Equal forward and reverse rates in a closed system; concentrations constant." },
              { kind: "principle", name: "Le Chatelier's principle", statement: "Disturbances shift equilibrium to oppose the change." },
            ],
            steps: [
              { part: "a", reasoning: "In a closed system the forward and reverse reactions continue at equal rates.", working: "\\text{rate}_{\\text{f}} = \\text{rate}_{\\text{r}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Concentrations of all species therefore remain constant while reactions continue.", working: "[\\text{species}] \\text{ constant}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Any two of: moderate temperature ($\\approx 450$ °C) balances rate and yield for the exothermic reaction; high pressure favours fewer gas moles; excess air supplies $\\mathrm{O}_2$ and removes $\\mathrm{SO}_3$.", working: "\\text{T moderate, P high, air excess}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "The reaction is exothermic, so heating shifts equilibrium left — yield decreases.", working: "\\text{T}\\uparrow \\Rightarrow \\text{yield}\\downarrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Heating still increases the forward rate because more particles exceed $E_a$.", working: "\\text{rate}\\uparrow", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Gas moles fall from $3$ to $2$, so higher pressure shifts equilibrium right towards $\\mathrm{SO}_3$.", working: "3 \\rightarrow 2 \\text{ mol gas};\\ \\text{P}\\uparrow \\Rightarrow \\text{right}", marks: 2, markCode: "M" },
              { part: "e", reasoning: "The catalyst lowers the activation energy, speeding attainment of equilibrium without changing the yield.", working: "\\text{catalyst: faster, yield unchanged}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) equal forward/reverse rates, constant concentrations (b) e.g. moderate T (rate–yield compromise) and high pressure (fewer gas moles) (c) yield falls, rate rises (d) shifts right towards $\\mathrm{SO}_3$ (e) speeds attainment of equilibrium without changing yield",
            commonErrors: ["Claiming the catalyst increases the yield."],
            examinerNote: "Award B1 for each correct feature of dynamic equilibrium in (a); A1 for each valid justified condition in (b); M1 for yield direction and B1 for rate in (c); M1 for the mole argument and A1 for the direction in (d); B1 for the catalyst statement in (e).",
          },
        },
        {
          id: "chemsl-u6-equilibrium-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Consider the equilibrium $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$ with $\\Delta H = -92$ kJ mol$^{-1}$.",
          parts: [
            { label: "a", prompt: "State the effect on the position of equilibrium of increasing the concentration of $\\mathrm{H}_2$.", marks: 2 },
            { label: "b", prompt: "Explain, with reference to gas moles, the effect of increasing the pressure.", marks: 2 },
            { label: "c", prompt: "Explain the effects of increasing the temperature on the equilibrium yield and on the rate.", marks: 2 },
            { label: "d", prompt: "State the effect of adding an iron catalyst on the position of equilibrium and on the rate.", marks: 2 },
            { label: "e", prompt: "Explain how removing $\\mathrm{NH}_3$ from the reaction vessel increases the overall yield.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier's principle", statement: "Disturbances shift equilibrium to oppose the change." },
            ],
            steps: [
              { part: "a", reasoning: "Adding $\\mathrm{H}_2$ increases a reactant concentration, so equilibrium shifts right to consume it.", working: "[\\mathrm{H}_2]\\uparrow \\Rightarrow \\text{shift right}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The position moves towards the products ($\\mathrm{NH}_3$).", working: "\\text{towards products}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Gas moles decrease from $4$ to $2$, so higher pressure favours the side with fewer gas moles.", working: "4 \\rightarrow 2 \\text{ mol gas}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The equilibrium shifts right, increasing $\\mathrm{NH}_3$ yield.", working: "\\text{shift right}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The reaction is exothermic, so heating shifts equilibrium left — yield decreases.", working: "\\text{T}\\uparrow \\Rightarrow \\text{yield}\\downarrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Heating increases the rate because more particles have energy $\\geq E_a$.", working: "\\text{rate}\\uparrow", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A catalyst lowers $E_a$ for both directions equally, so the equilibrium position is unchanged.", working: "\\text{position unchanged}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The rate of attainment of equilibrium increases.", working: "\\text{rate}\\uparrow", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Removing $\\mathrm{NH}_3$ lowers its concentration.", working: "[\\mathrm{NH}_3]\\downarrow", marks: 1, markCode: "M" },
              { part: "e", reasoning: "By Le Chatelier the equilibrium shifts right to replace the product, increasing overall yield.", working: "\\text{shift right}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) shifts right towards products (b) fewer gas moles — shifts right (c) yield decreases, rate increases (d) position unchanged, rate increases (e) removing product shifts equilibrium right",
            commonErrors: ["Claiming a catalyst changes the equilibrium position.", "Saying high temperature increases yield for an exothermic reaction."],
            examinerNote: "Award M1 for the correct shift/argument and B1 for the correct consequence in each part.",
          },
        },
      ],
    },
    {
      id: "chemsl-u6-kc",
      title: "The equilibrium constant Kc",
      skill: "Write the expression for Kc and use equilibrium concentrations to calculate Kc and describe the position of equilibrium.",
      lesson: {
        sections: [
          {
            heading: "Writing the Kc expression",
            body: "For a homogeneous equilibrium $a\\mathrm{A} + b\\mathrm{B} \\rightleftharpoons c\\mathrm{C} + d\\mathrm{D}$, the equilibrium constant is $K_c = \\frac{[\\mathrm{C}]^c [\\mathrm{D}]^d}{[\\mathrm{A}]^a [\\mathrm{B}]^b}$, where $[\\,]$ denotes equilibrium concentration in mol dm$^{-3}$. Products go on top, reactants on the bottom, each raised to its coefficient. For $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$, $K_c = \\frac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}$.",
          },
          {
            heading: "Interpreting Kc",
            body: "A large $K_c$ means products are favoured at equilibrium; a small $K_c$ means reactants are favoured. $K_c$ has no units when the total number of moles of gas (or solute particles) is the same on both sides of the equation; otherwise it carries units. Crucially, $K_c$ changes **only with temperature** — it is unaffected by changes in concentration, pressure or the addition of a catalyst.",
          },
          {
            heading: "Using Kc quantitatively",
            body: "Given equilibrium concentrations, substitute into the expression. For example, if $[\\mathrm{H}_2] = [\\mathrm{I}_2] = 0.10$ mol dm$^{-3}$ and $[\\mathrm{HI}] = 0.20$ mol dm$^{-3}$, then $K_c = \\frac{0.20^2}{0.10 \\times 0.10} = \\frac{0.04}{0.01} = 4.0$. The same $K_c$ can be used to find an unknown equilibrium concentration, since $K_c$ is constant at a given temperature.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium constant", statement: "$K_c = \\dfrac{[\\text{products}]^{\\text{coefficients}}}{[\\text{reactants}]^{\\text{coefficients}}}$" },
          { name: "Example", statement: "$K_c(\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}) = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}$" },
          { name: "Dependence", statement: "$K_c$ depends only on temperature, not on concentration, pressure or catalyst" },
        ],
        workedExample: {
          problem: "For $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$ at equilibrium $[\\mathrm{H}_2] = 0.10$ mol dm$^{-3}$, $[\\mathrm{I}_2] = 0.10$ mol dm$^{-3}$ and $[\\mathrm{HI}] = 0.20$ mol dm$^{-3}$. Calculate $K_c$.",
          solution: "$K_c = \\frac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]} = \\frac{0.20^2}{0.10 \\times 0.10} = \\frac{0.040}{0.010} = 4.0$ (no units, since $2$ moles of gas on each side).",
        },
      },
      questions: [
        {
          id: "chemsl-u6-kc-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the equilibrium $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$, which is the correct expression for $K_c$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$K_c = \\dfrac{[\\mathrm{H}_2][\\mathrm{I}_2]}{[\\mathrm{HI}]^2}$" },
              { id: "b", text: "$K_c = [\\mathrm{HI}]^2 - [\\mathrm{H}_2][\\mathrm{I}_2]$" },
              { id: "c", text: "$K_c = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}$" },
              { id: "d", text: "$K_c = \\dfrac{[\\mathrm{HI}]}{[\\mathrm{H}_2][\\mathrm{I}_2]}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equilibrium constant", statement: "Products over reactants, each concentration raised to its coefficient." },
            ],
            steps: [
              { reasoning: "HI is the product (numerator) with coefficient $2$; $\\mathrm{H}_2$ and $\\mathrm{I}_2$ are reactants (denominator) each with coefficient $1$.", working: "K_c = \\frac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) inverts the ratio; option (c) misses the squared coefficient.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** $K_c = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}$",
            commonErrors: ["Putting reactants on top.", "Forgetting to square $[\\mathrm{HI}]$."],
          },
        },
        {
          id: "chemsl-u6-kc-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$, the equilibrium concentrations are $[\\mathrm{H}_2] = 0.10$ mol dm$^{-3}$, $[\\mathrm{I}_2] = 0.10$ mol dm$^{-3}$ and $[\\mathrm{HI}] = 0.20$ mol dm$^{-3}$. Calculate $K_c$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.0$" },
              { id: "b", text: "$0.25$" },
              { id: "c", text: "$4.0$" },
              { id: "d", text: "$40$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\frac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}$." },
            ],
            steps: [
              { reasoning: "Substitute the equilibrium concentrations into the expression.", working: "K_c = \\frac{0.20^2}{0.10 \\times 0.10} = \\frac{0.040}{0.010}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "K_c = 4.0", marks: 1, markCode: "A" },
              { reasoning: "Option (b) is the reciprocal; option (c) forgets to square $[\\mathrm{HI}]$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** $K_c = 4.0$",
            commonErrors: ["Forgetting to square the product concentration.", "Inverting the expression."],
          },
        },
        {
          id: "chemsl-u6-kc-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$ at a certain temperature, $K_c = 4.0$. At equilibrium $[\\mathrm{H}_2] = 0.10$ mol dm$^{-3}$ and $[\\mathrm{I}_2] = 0.10$ mol dm$^{-3}$. What is $[\\mathrm{HI}]$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.10$ mol dm$^{-3}$" },
              { id: "b", text: "$0.40$ mol dm$^{-3}$" },
              { id: "c", text: "$0.02$ mol dm$^{-3}$" },
              { id: "d", text: "$0.20$ mol dm$^{-3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\frac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]} = 4.0$." },
            ],
            steps: [
              { reasoning: "Substitute the known concentrations and solve for $[\\mathrm{HI}]^2$.", working: "4.0 = \\frac{[\\mathrm{HI}]^2}{0.10 \\times 0.10} \\Rightarrow [\\mathrm{HI}]^2 = 0.040", marks: 1, markCode: "M" },
              { reasoning: "Take the square root (concentration must be positive).", working: "[\\mathrm{HI}] = \\sqrt{0.040} = 0.20", marks: 1, markCode: "M" },
              { reasoning: "Option (b) results from forgetting the square root; option (d) from a decimal slip.", marks: 1, markCode: "R" },
              { reasoning: "State the final concentration with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $[\\mathrm{HI}] = 0.20$ mol dm$^{-3}$",
            commonErrors: ["Forgetting to take the square root."],
          },
        },
        {
          id: "chemsl-u6-kc-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "For the equilibrium $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$, the equilibrium concentrations in a vessel are $[\\mathrm{N}_2] = 0.500$ mol dm$^{-3}$, $[\\mathrm{H}_2] = 1.50$ mol dm$^{-3}$ and $[\\mathrm{NH}_3] = 0.250$ mol dm$^{-3}$.",
          parts: [
            { label: "a", prompt: "Write the expression for $K_c$ for this reaction.", marks: 2 },
            { label: "b", prompt: "Calculate the value of $K_c$.", marks: 2 },
            { label: "c", prompt: "State the effect on $K_c$ of adding a catalyst and of increasing the pressure.", marks: 2 },
            { label: "d", prompt: "Predict the direction in which the equilibrium shifts if $[\\mathrm{NH}_3]$ is suddenly increased, and justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\frac{[\\mathrm{NH}_3]^2}{[\\mathrm{N}_2][\\mathrm{H}_2]^3}$." },
              { kind: "principle", name: "Kc dependence", statement: "$K_c$ changes only with temperature." },
            ],
            steps: [
              { part: "a", reasoning: "Products over reactants, each raised to its coefficient.", working: "K_c = \\frac{[\\mathrm{NH}_3]^2}{[\\mathrm{N}_2][\\mathrm{H}_2]^3}", marks: 2, markCode: "R" },
              { part: "b", reasoning: "Substitute the equilibrium concentrations.", working: "K_c = \\frac{0.250^2}{0.500 \\times 1.50^3} = \\frac{0.0625}{1.6875}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "K_c = 0.0370", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Neither a catalyst nor a pressure change alters $K_c$; only temperature does.", working: "K_c \\text{ unchanged}", marks: 2, markCode: "R" },
              { part: "d", reasoning: "Increasing $[\\mathrm{NH}_3]$ disturbs the equilibrium; by Le Chatelier the system shifts to oppose the change.", working: "[\\mathrm{NH}_3] \\uparrow \\Rightarrow \\text{shift left}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The equilibrium shifts left, converting $\\mathrm{NH}_3$ back into $\\mathrm{N}_2$ and $\\mathrm{H}_2$ until $K_c$ is restored.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $K_c = \\frac{[\\mathrm{NH}_3]^2}{[\\mathrm{N}_2][\\mathrm{H}_2]^3}$ (b) $0.0370$ (c) $K_c$ unchanged by catalyst or pressure; only temperature changes it (d) shifts left to consume the added $\\mathrm{NH}_3$",
            commonErrors: ["Using $[\\mathrm{H}_2]$ instead of $[\\mathrm{H}_2]^3$ in the denominator.","Claiming a catalyst changes $K_c$."],
            examinerNote: "Check: $1.50^3 = 3.375$; $0.500 \\times 3.375 = 1.6875$; $0.250^2 = 0.0625$; $0.0625/1.6875 = 0.0370$. Award R1 for the expression, M1 for substitution and A1 for 0.0370 in (b); R1 for each correct 'no change' statement in (c); M1 for the disturbance argument and R1 for the direction in (d).",
          },
        },
        {
          id: "chemsl-u6-kc-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the equilibrium $\\mathrm{N}_2\\mathrm{O}_4 \\rightleftharpoons 2\\mathrm{NO}_2$, which is the correct expression for $K_c$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$K_c = \\dfrac{[\\mathrm{N}_2\\mathrm{O}_4]}{[\\mathrm{NO}_2]^2}$" },
              { id: "b", text: "$K_c = \\dfrac{[\\mathrm{NO}_2]}{[\\mathrm{N}_2\\mathrm{O}_4]}$" },
              { id: "c", text: "$K_c = \\dfrac{[\\mathrm{NO}_2]^2}{[\\mathrm{N}_2\\mathrm{O}_4]}$" },
              { id: "d", text: "$K_c = [\\mathrm{NO}_2]^2 - [\\mathrm{N}_2\\mathrm{O}_4]$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equilibrium constant", statement: "Products over reactants, each concentration raised to its coefficient." },
            ],
            steps: [
              { reasoning: "$\\mathrm{NO}_2$ is the product with coefficient $2$; $\\mathrm{N}_2\\mathrm{O}_4$ is the reactant with coefficient $1$.", working: "K_c = \\frac{[\\mathrm{NO}_2]^2}{[\\mathrm{N}_2\\mathrm{O}_4]}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) inverts the ratio; option (c) misses the squared coefficient.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $K_c = \\dfrac{[\\mathrm{NO}_2]^2}{[\\mathrm{N}_2\\mathrm{O}_4]}$",
            commonErrors: ["Putting reactants on top of the fraction."],
          },
        },
        {
          id: "chemsl-u6-kc-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "At a fixed temperature, which change does NOT alter the value of $K_c$ for an equilibrium mixture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreasing the volume of the vessel" },
              { id: "b", text: "Increasing the temperature" },
              { id: "c", text: "Adding a catalyst" },
              { id: "d", text: "Increasing the concentration of a reactant" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kc dependence", statement: "$K_c$ changes only with temperature; it is unaffected by concentration, pressure, volume or catalyst." },
            ],
            steps: [
              { reasoning: "$K_c$ is a constant at a given temperature for a particular reaction.", working: "K_c = f(T) \\text{ only}", marks: 1, markCode: "M" },
              { reasoning: "A catalyst speeds both directions equally and does not change $K_c$; temperature does change it.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Adding a catalyst",
            commonErrors: ["Thinking a pressure or concentration change alters $K_c$ itself rather than just the position."],
          },
        },
        {
          id: "chemsl-u6-kc-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $2\\mathrm{SO}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{SO}_3$, the equilibrium concentrations are $[\\mathrm{SO}_2] = 0.20$ mol dm$^{-3}$, $[\\mathrm{O}_2] = 0.10$ mol dm$^{-3}$ and $[\\mathrm{SO}_3] = 0.40$ mol dm$^{-3}$. Calculate $K_c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$K_c$", answer: 40, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\dfrac{[\\mathrm{SO}_3]^2}{[\\mathrm{SO}_2]^2[\\mathrm{O}_2]}$." },
            ],
            steps: [
              { reasoning: "Substitute the equilibrium concentrations, raising each to its coefficient.", working: "K_c = \\frac{0.40^2}{0.20^2 \\times 0.10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate numerator and denominator.", working: "K_c = \\frac{0.16}{0.0040} = 40", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "K_c = 40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$K_c = 40$",
            commonErrors: ["Using $[\\mathrm{SO}_3]$ instead of $[\\mathrm{SO}_3]^2$ in the numerator."],
          },
        },
        {
          id: "chemsl-u6-kc-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$ at a certain temperature $K_c = 4.0$. At equilibrium $[\\mathrm{H}_2] = 0.20$ mol dm$^{-3}$ and $[\\mathrm{I}_2] = 0.20$ mol dm$^{-3}$. Calculate $[\\mathrm{HI}]$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$[\\mathrm{HI}]$ (mol dm$^{-3}$)", answer: 0.4, tolerance: 0.005, unit: "mol dm$^{-3}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]} = 4.0$." },
            ],
            steps: [
              { reasoning: "Substitute known values and solve for $[\\mathrm{HI}]^2$.", working: "4.0 = \\frac{[\\mathrm{HI}]^2}{0.20 \\times 0.20} \\Rightarrow [\\mathrm{HI}]^2 = 0.16", marks: 1, markCode: "M" },
              { reasoning: "Take the positive square root.", working: "[\\mathrm{HI}] = \\sqrt{0.16} = 0.40", marks: 1, markCode: "M" },
              { reasoning: "State the concentration with units.", working: "[\\mathrm{HI}] = 0.40\\ \\text{mol dm}^{-3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$[\\mathrm{HI}] = 0.40$ mol dm$^{-3}$",
            commonErrors: ["Forgetting to take the square root of $0.16$."],
          },
        },
        {
          id: "chemsl-u6-kc-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For which of the following reactions is $K_c$ dimensionless (has no units)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\mathrm{SO}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{SO}_3$ — three moles on the left, two on the right" },
              { id: "b", text: "$\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$ — four moles on the left, two on the right" },
              { id: "c", text: "$\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$ — two moles of gas on each side" },
              { id: "d", text: "$\\mathrm{N}_2\\mathrm{O}_4 \\rightleftharpoons 2\\mathrm{NO}_2$ — one mole on the left, two on the right" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Units of Kc", statement: "$K_c$ has no units only when the total number of moles of gas (or solute particles) is the same on both sides." },
            ],
            steps: [
              { reasoning: "Count gas moles on each side for each reaction.", working: "\\mathrm{H}_2+\\mathrm{I}_2: 2 \\rightleftharpoons 2", marks: 1, markCode: "M" },
              { reasoning: "Only $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$ has equal moles on both sides; the others do not.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$",
            commonErrors: ["Assuming $K_c$ always has units, or never has units."],
          },
        },
        {
          id: "chemsl-u6-kc-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For $2\\mathrm{SO}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{SO}_3$ at a certain temperature $K_c = 2.0$. At equilibrium $[\\mathrm{SO}_3] = 0.40$ mol dm$^{-3}$ and $[\\mathrm{SO}_2] = 0.20$ mol dm$^{-3}$. Calculate $[\\mathrm{O}_2]$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$[\\mathrm{O}_2]$ (mol dm$^{-3}$)", answer: 2.0, tolerance: 0.005, unit: "mol dm$^{-3}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\dfrac{[\\mathrm{SO}_3]^2}{[\\mathrm{SO}_2]^2[\\mathrm{O}_2]} = 2.0$." },
            ],
            steps: [
              { reasoning: "Substitute the known concentrations.", working: "2.0 = \\frac{0.40^2}{0.20^2 \\times [\\mathrm{O}_2]} = \\frac{0.16}{0.04[\\mathrm{O}_2]}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange to solve for $[\\mathrm{O}_2]$.", working: "[\\mathrm{O}_2] = \\frac{0.16}{0.04 \\times 2.0} = 2.0", marks: 1, markCode: "M" },
              { reasoning: "State the concentration with units.", working: "[\\mathrm{O}_2] = 2.0\\ \\text{mol dm}^{-3}", marks: 1, markCode: "A" },
              { reasoning: "The answer is a concentration, not an amount.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$[\\mathrm{O}_2] = 2.0$ mol dm$^{-3}$",
            commonErrors: ["Forgetting to square $[\\mathrm{SO}_2]$ in the denominator."],
          },
        },
        {
          id: "chemsl-u6-kc-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "At equilibrium in a $2.0$ dm$^3$ vessel there is $0.60$ mol of $\\mathrm{HI}$ for the reaction $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$. Calculate $[\\mathrm{HI}]$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$[\\mathrm{HI}]$ (mol dm$^{-3}$)", answer: 0.3, tolerance: 0.005, unit: "mol dm$^{-3}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concentration", statement: "$c = \\dfrac{n}{V}$." },
            ],
            steps: [
              { reasoning: "Divide the amount by the volume.", working: "[\\mathrm{HI}] = \\frac{0.60}{2.0} = 0.30", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "[\\mathrm{HI}] = 0.30\\ \\text{mol dm}^{-3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$[\\mathrm{HI}] = 0.30$ mol dm$^{-3}$",
            commonErrors: ["Multiplying by the volume instead of dividing."],
          },
        },
        {
          id: "chemsl-u6-kc-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3$, the equilibrium concentrations are $[\\mathrm{N}_2] = 0.10$ mol dm$^{-3}$, $[\\mathrm{H}_2] = 0.30$ mol dm$^{-3}$ and $[\\mathrm{NH}_3] = 0.20$ mol dm$^{-3}$. Calculate $K_c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$K_c$", answer: 14.8, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\dfrac{[\\mathrm{NH}_3]^2}{[\\mathrm{N}_2][\\mathrm{H}_2]^3}$." },
            ],
            steps: [
              { reasoning: "Substitute the equilibrium concentrations, cubing $[\\mathrm{H}_2]$.", working: "K_c = \\frac{0.20^2}{0.10 \\times 0.30^3} = \\frac{0.040}{0.0027}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "K_c = 14.8", marks: 1, markCode: "M" },
              { reasoning: "State the value (units may be quoted since moles differ on each side).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$K_c = 14.8$",
            commonErrors: ["Using $[\\mathrm{H}_2]$ instead of $[\\mathrm{H}_2]^3$."],
          },
        },
        {
          id: "chemsl-u6-kc-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "For the equilibrium $2\\mathrm{SO}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{SO}_3$, the equilibrium concentrations in a vessel are $[\\mathrm{SO}_2] = 0.20$ mol dm$^{-3}$, $[\\mathrm{O}_2] = 0.10$ mol dm$^{-3}$ and $[\\mathrm{SO}_3] = 0.40$ mol dm$^{-3}$.",
          parts: [
            { label: "a", prompt: "Write the expression for $K_c$ for this reaction.", marks: 2 },
            { label: "b", prompt: "Calculate the value of $K_c$.", marks: 2 },
            { label: "c", prompt: "State the effect on $K_c$ of adding a catalyst and of increasing the temperature.", marks: 2 },
            { label: "d", prompt: "Predict the direction in which the equilibrium shifts if some $\\mathrm{SO}_3$ is suddenly removed, and justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\dfrac{[\\mathrm{SO}_3]^2}{[\\mathrm{SO}_2]^2[\\mathrm{O}_2]}$." },
              { kind: "principle", name: "Kc dependence", statement: "$K_c$ changes only with temperature." },
            ],
            steps: [
              { part: "a", reasoning: "Products over reactants, each raised to its coefficient.", working: "K_c = \\frac{[\\mathrm{SO}_3]^2}{[\\mathrm{SO}_2]^2[\\mathrm{O}_2]}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Substitute the equilibrium concentrations.", working: "K_c = \\frac{0.40^2}{0.20^2 \\times 0.10} = \\frac{0.16}{0.0040}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "K_c = 40", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A catalyst does not change $K_c$; increasing the temperature does change $K_c$ (for this exothermic reaction, $K_c$ decreases).", working: "\\text{catalyst: no change; T: } K_c \\text{ changes}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Removing $\\mathrm{SO}_3$ lowers its concentration; by Le Chatelier the equilibrium shifts to replace the product.", working: "[\\mathrm{SO}_3] \\downarrow \\Rightarrow \\text{shift right}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The equilibrium shifts right, forming more $\\mathrm{SO}_3$ until $K_c$ is restored.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $K_c = \\frac{[\\mathrm{SO}_3]^2}{[\\mathrm{SO}_2]^2[\\mathrm{O}_2]}$ (b) $40$ (c) catalyst: no change; temperature: $K_c$ changes (decreases for this exothermic reaction) (d) shifts right to replace the removed $\\mathrm{SO}_3$",
            commonErrors: ["Using $[\\mathrm{SO}_2]$ instead of $[\\mathrm{SO}_2]^2$ in the denominator."],
            examinerNote: "Award M1 for the expression and M1 for each correct coefficient in (a); M1 for substitution and A1 for 40 in (b); M1 for each correct statement in (c); M1 for the Le Chatelier argument and A1 for the direction in (d).",
          },
        },
        {
          id: "chemsl-u6-kc-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "For an equilibrium at constant temperature, a very large value of $K_c$ indicates that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the reaction is reversible only at high temperature" },
              { id: "b", text: "the position of equilibrium lies far to the left — reactants are strongly favoured" },
              { id: "c", text: "the position of equilibrium lies far to the right — products are strongly favoured" },
              { id: "d", text: "the reaction rate is very fast" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interpreting Kc", statement: "Large $K_c$ means products are favoured at equilibrium; small $K_c$ means reactants are favoured." },
            ],
            steps: [
              { reasoning: "$K_c$ compares product to reactant concentrations at equilibrium; a large value means products dominate.", working: "K_c \\gg 1 \\Rightarrow \\text{products favoured}", marks: 1, markCode: "M" },
              { reasoning: "$K_c$ says nothing about rate — a large $K_c$ does not imply a fast reaction.", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Products are strongly favoured at equilibrium",
            commonErrors: ["Confusing $K_c$ (position) with rate."],
          },
        },
        {
          id: "chemsl-u6-kc-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $\\mathrm{N}_2\\mathrm{O}_4 \\rightleftharpoons 2\\mathrm{NO}_2$, the equilibrium concentrations are $[\\mathrm{N}_2\\mathrm{O}_4] = 0.10$ mol dm$^{-3}$ and $[\\mathrm{NO}_2] = 0.30$ mol dm$^{-3}$. Calculate $K_c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$K_c$", answer: 0.9, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\dfrac{[\\mathrm{NO}_2]^2}{[\\mathrm{N}_2\\mathrm{O}_4]}$." },
            ],
            steps: [
              { reasoning: "Substitute the equilibrium concentrations.", working: "K_c = \\frac{0.30^2}{0.10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "K_c = \\frac{0.090}{0.10} = 0.90", marks: 1, markCode: "M" },
              { reasoning: "State the value (units may be quoted since moles differ on each side).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$K_c = 0.90$",
            commonErrors: ["Using $[\\mathrm{NO}_2]$ instead of $[\\mathrm{NO}_2]^2$."],
          },
        },
        {
          id: "chemsl-u6-kc-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "For the equilibrium $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightleftharpoons 2\\mathrm{HI}$ at $450$ °C, $K_c = 64.0$.",
          parts: [
            { label: "a", prompt: "Write the expression for $K_c$ for this reaction.", marks: 2 },
            { label: "b", prompt: "State what the value $K_c = 64.0$ tells you about the position of equilibrium.", marks: 2 },
            { label: "c", prompt: "State the effect on $K_c$ of (i) adding a catalyst and (ii) increasing the temperature.", marks: 2 },
            { label: "d", prompt: "Explain why $K_c$ is unchanged when the equilibrium mixture is compressed to half its volume at constant temperature.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equilibrium constant", statement: "$K_c = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}$." },
              { kind: "principle", name: "Kc dependence", statement: "$K_c$ depends only on temperature." },
            ],
            steps: [
              { part: "a", reasoning: "Products over reactants, each raised to its coefficient.", working: "K_c = \\frac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A large $K_c$ means the equilibrium position lies far to the right — products are favoured.", working: "K_c = 64 \\gg 1 \\Rightarrow \\text{products favoured}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "At equilibrium there is much more $\\mathrm{HI}$ than $\\mathrm{H}_2$ or $\\mathrm{I}_2$ present.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A catalyst does not change $K_c$ — it speeds attainment of equilibrium only.", working: "\\text{catalyst: } K_c \\text{ unchanged}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Increasing the temperature does change $K_c$ (for this exothermic reaction it decreases).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compressing the mixture changes the concentrations and shifts the position of equilibrium (here, towards fewer gas moles — the products).", working: "\\text{P} \\uparrow \\Rightarrow \\text{shift right}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The shift exactly compensates so that the ratio $K_c$ returns to the same value — $K_c$ depends only on temperature.", working: "K_c \\text{ unchanged at constant T}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $K_c = \\frac{[\\mathrm{HI}]^2}{[\\mathrm{H}_2][\\mathrm{I}_2]}$ (b) large $K_c$ — products strongly favoured (c) catalyst: no change; temperature: $K_c$ changes (decreases, exothermic) (d) position shifts but the ratio is restored; $K_c$ depends only on temperature",
            commonErrors: ["Claiming compression changes $K_c$.", "Claiming a catalyst changes $K_c$."],
            examinerNote: "Award M1 for the expression and M1 for each correct coefficient in (a); M1 for the 'products favoured' statement and A1 for the concentration interpretation in (b); M1 for each correct statement in (c); M1 for the shift argument and A1 for the 'only temperature' conclusion in (d).",
          },
        },
      ],
    },
  ],
};
