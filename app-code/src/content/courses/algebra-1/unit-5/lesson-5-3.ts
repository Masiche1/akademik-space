import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "alg1-u5-5-3",
  code: "5-3",
  title: "Scatter Plots and Linear Models",
  goal: "I CAN interpret scatter plots and linear models, use correlation and residuals to assess fit, and distinguish association from causation.",
  standards: ["HSS-ID.B.6", "HSS-ID.C.7", "HSS-ID.C.8", "HSS-ID.C.9"],
  vocabulary: [
    { term: "Scatter plot", definition: "A graph of paired quantitative data in which each point represents one observed pair." },
    { term: "Line of best fit", definition: "A line that models a linear trend in paired data, typically chosen to make residuals collectively small." },
    { term: "Slope", definition: "The predicted change in the response variable for a one-unit increase in the explanatory variable, in context." },
    { term: "Correlation coefficient", definition: "A number from $-1$ to $1$ describing the direction and strength of a linear association between two quantitative variables." },
    { term: "Residual", definition: "Observed response minus predicted response: $y-\\hat{y}$." },
    { term: "Extrapolation", definition: "Using a model to predict for explanatory-variable values outside the range of the observed data." },
    { term: "Correlation versus causation", definition: "A strong association alone does not prove that changing one variable causes a change in the other." },
  ],
  concepts: [
    {
      id: "alg1-u5-linear-models",
      title: "Lines of best fit and interpretation",
      skill: "Use a linear model to make predictions and interpret slope and intercept in the context and units of the data.",
      lesson: {
        sections: [
          {
            heading: "Model a linear trend",
            body: "A scatter plot shows paired numerical data, with the explanatory variable $x$ on the horizontal axis and response variable $y$ on the vertical axis. When points follow an approximately straight trend, a line of best fit summarizes the pattern. A model has the form $\\hat{y}=mx+b$, where $\\hat{y}$ is a predicted response.",
          },
          {
            heading: "Interpret slope and intercept",
            body: "The slope $m$ is the predicted change in $y$ for each one-unit increase in $x$. Include units and context. The intercept $b$ is the predicted $y$ when $x=0$; interpret it only if zero is meaningful and supported by the context. To predict, substitute the given $x$ into the model. Predictions outside the observed $x$-range are extrapolations and may be unreliable.",
          },
          {
            heading: "Association is not a cause",
            body: "A linear model describes an association in the data; it does not by itself establish cause and effect. Other variables, selection effects, or coincidence may explain a pattern. Stronger causal claims require an appropriate experimental design, such as random assignment, and careful control of alternative explanations.",
          },
        ],
        keyFormulas: [
          { name: "Linear model", statement: "$\\hat{y}=mx+b$" },
          { name: "Slope from two points", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
        ],
        workedExample: {
          problem: "A fitted model predicts a plant's height $h$ centimeters from weeks $w$: $\\hat{h}=2.5w+8$. Interpret its slope and intercept, then predict height after 6 weeks.",
          solution: "The slope means predicted height increases by 2.5 cm per week. The intercept predicts an initial height of 8 cm at week 0. At 6 weeks, $\\hat{h}=2.5(6)+8=23$ cm.",
        },
      },
      questions: [
        {
          id: "alg1-u5-model-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A line of best fit for study time $x$ (hours) and quiz score $y$ (points) is $\\hat{y}=6x+52$. What does the slope 6 mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The quiz score increases by 52 points for each additional hour." },
              { id: "b", text: "Each additional hour of study is associated with a predicted increase of 6 quiz points." },
              { id: "c", text: "The predicted score is 6 points when study time is 0 hours." },
              { id: "d", text: "Every student who studies one more hour will gain exactly 6 points." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Slope in context", statement: "In a linear model, slope is the predicted change in response per one-unit increase in the explanatory variable." },
            ],
            steps: [
              { reasoning: "The coefficient of $x$ is 6, with units of score points per study hour; describe it as a model prediction, not a guaranteed individual effect.", working: "\\frac{\\text{predicted score points}}{\\text{study hour}}=6", marks: 2, markCode: "R" },
            ],
            finalAnswer: "**(b)** Each additional hour of study is associated with a predicted increase of 6 quiz points.",
            commonErrors: ["Interpreting the intercept 52 as the slope.", "Treating a model's predicted average change as a guaranteed change for each student."],
          },
        },
        {
          id: "alg1-u5-model-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A model predicts the distance $d$ (miles) traveled after $t$ hours: $\\hat{d}=48t+12$. Find the model's predicted distance after 3 hours and interpret the intercept.",
          response: { type: "numeric", parts: [{ label: "Predicted distance (miles)", answer: 156 }, { label: "Intercept", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear prediction", statement: "Substitute the explanatory-variable value into $\\hat{y}=mx+b$." },
              { kind: "definition", name: "Intercept", statement: "The intercept is the model's predicted response when the explanatory variable equals zero." },
            ],
            steps: [
              { reasoning: "Substitute 3 hours into the model to get the prediction.", working: "\\hat{d}=48(3)+12=156", marks: 2, markCode: "M" },
              { reasoning: "At $t=0$, the model predicts 12 miles; the context determines whether that initial amount is meaningful.", working: "\\hat{d}(0)=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "After 3 hours, predicted distance is 156 miles. The intercept predicts 12 miles at time 0.",
            commonErrors: ["Multiplying the intercept by time as well as the slope."],
          },
        },
        {
          id: "alg1-u5-model-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A line of best fit for weekly practice hours $x$ and performance score $y$ is $\\hat{y}=3.2x+61$. The observed practice hours ranged from 2 to 8. Predict the score for 6 hours and for 12 hours. Identify which prediction is an extrapolation and explain why it needs caution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear prediction", statement: "Use $\\hat{y}=3.2x+61$ by substituting the explanatory-variable value." },
              { kind: "definition", name: "Extrapolation", statement: "A prediction beyond the observed explanatory-variable range is extrapolation and may not follow the established pattern." },
            ],
            steps: [
              { reasoning: "Substitute 6, which lies within the observed range.", working: "\\hat{y}=3.2(6)+61=80.2", marks: 1, markCode: "M" },
              { reasoning: "Substitute 12 to find its model prediction.", working: "\\hat{y}=3.2(12)+61=99.4", marks: 1, markCode: "M" },
              { reasoning: "Twelve hours exceeds the observed maximum of 8, while 6 is within the range.", working: "12>8", marks: 1, markCode: "A" },
              { reasoning: "Beyond the observed data, the linear trend may change, so the 12-hour prediction is less reliable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Predictions: $80.2$ at 6 hours and $99.4$ at 12 hours. The 12-hour prediction is extrapolation because the data only cover 2 to 8 hours, so it should be treated cautiously.",
            commonErrors: ["Calling the prediction at 6 hours extrapolation.", "Assuming the linear trend must continue beyond the observed range."],
          },
        },
        {
          id: "alg1-u5-model-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A group of students records the number of hours they studied and their test scores. A fitted line is $\\hat{y}=4x+58$, where $x$ is study hours and $y$ is score points. The observed study times ranged from 1 to 7 hours.",
          parts: [
            { label: "a", prompt: "Interpret the slope in context, including units.", marks: 2 },
            { label: "b", prompt: "Interpret the intercept in context.", marks: 2 },
            { label: "c", prompt: "Use the model to predict the score for a student who studied 5 hours.", marks: 2 },
            { label: "d", prompt: "A student studied 9 hours. Find the model prediction and explain one reason to be cautious about it.", marks: 2 },
            { label: "e", prompt: "Does this model alone prove that studying more causes higher scores? Explain.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Slope", statement: "The slope is the predicted response change for a one-unit increase in the explanatory variable." },
              { kind: "definition", name: "Intercept", statement: "The intercept is the predicted response when the explanatory variable is zero." },
              { kind: "formula", name: "Linear prediction", statement: "Substitute $x$ into $\\hat{y}=4x+58$." },
              { kind: "definition", name: "Extrapolation and causation", statement: "Predictions outside observed values are extrapolations; association alone does not prove causation." },
            ],
            steps: [
              { part: "a", reasoning: "Identify the slope coefficient and express its units as score points per study hour.", working: "4\\text{ score points per hour}", marks: 2, markCode: "R" },
              { part: "b", reasoning: "Set $x=0$ to interpret the intercept as a model prediction at zero study hours.", working: "\\hat{y}(0)=58\\text{ points}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Substitute the observed-range study time into the model.", working: "\\hat{y}=4(5)+58=78\\text{ points}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Calculate the model value, then recognize that 9 hours is beyond the data maximum of 7.", working: "\\hat{y}=4(9)+58=94\\text{ points};\\quad 9>7", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explain that the trend may not continue beyond observed study times, making the prediction uncertain.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "A fitted association does not rule out other factors; the model alone does not establish a causal effect.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) The model predicts 4 more score points per additional study hour. (b) It predicts 58 points at 0 study hours. (c) 78 points. (d) 94 points; this is an extrapolation beyond the observed 1–7 hour range and may be unreliable. (e) No; the model shows association, not proof of causation.",
            commonErrors: ["Treating the slope as a guaranteed gain for every student.", "Interpreting the intercept as a predicted score at one hour.", "Failing to note that 9 hours is outside the observed range."],
          },
        },
      ],
    },
    {
      id: "alg1-u5-correlation-residuals",
      title: "Correlation and residuals",
      skill: "Interpret correlation coefficients, calculate and interpret residuals, and evaluate linear fit without inferring causation.",
      lesson: {
        sections: [
          {
            heading: "Read the correlation coefficient",
            body: "The correlation coefficient $r$ ranges from $-1$ to $1$. Its sign gives the direction of the **linear** association: positive means larger $x$ tends to go with larger $y$, and negative means larger $x$ tends to go with smaller $y$. Values closer to $1$ or $-1$ indicate a stronger linear pattern; values near 0 indicate a weak linear pattern. Correlation is sensitive to outliers and does not describe curved relationships well.",
          },
          {
            heading: "Calculate and interpret residuals",
            body: "For one observation, the residual is observed response minus predicted response: $e=y-\\hat{y}$. A positive residual means the observed point lies above the model line; a negative residual means it lies below. Residuals close to zero indicate accurate predictions for those observations. A systematic curve or pattern in residuals suggests a linear model may not fit well.",
          },
          {
            heading: "Avoid causal conclusions",
            body: "A high magnitude of $r$ is evidence of a strong linear association in the sample, not evidence that one variable causes the other. Consider lurking variables and how the data were collected. A randomized experiment can support causal conclusions more strongly than observational data, though study design and context still matter.",
          },
        ],
        keyFormulas: [
          { name: "Correlation coefficient", statement: "$-1\\le r\\le1$" },
          { name: "Residual", statement: "$e=y-\\hat{y}$" },
        ],
        workedExample: {
          problem: "For $\\hat{y}=2x+5$, an observation has $x=4$ and observed $y=14$. Find and interpret the residual.",
          solution: "The model predicts $\\hat{y}=2(4)+5=13$. Thus $e=14-13=1$. The residual is positive, so the observed value is one unit above the model's prediction.",
        },
      },
      questions: [
        {
          id: "alg1-u5-correlation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A study reports a correlation coefficient of $r=-0.92$ between outdoor temperature and home heating use. Which description is most accurate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A weak positive linear association." },
              { id: "b", text: "No linear association because $r$ is negative." },
              { id: "c", text: "A strong positive linear association that proves temperature causes heating use." },
              { id: "d", text: "A strong negative linear association; this alone does not prove causation." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation coefficient", statement: "The sign of $r$ indicates linear direction and its distance from 0 indicates linear strength." },
              { kind: "principle", name: "Association is not causation", statement: "Correlation alone does not establish causation." },
            ],
            steps: [
              { reasoning: "The negative sign gives a negative direction, and $|-0.92|$ is close to 1, indicating strong linear association.", working: "r=-0.92", marks: 1, markCode: "A" },
              { reasoning: "Correlation describes association and does not by itself prove a causal relationship.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** The data show a strong negative linear association; the correlation alone does not prove causation.",
            commonErrors: ["Treating a negative $r$ as a weak relationship.", "Interpreting correlation as proof of cause."],
          },
        },
        {
          id: "alg1-u5-correlation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A model predicts a student's score from study hours using $\\hat{y}=5x+60$. A student studied 4 hours and scored 83. Find the predicted score and the residual, and state whether the observed score was above or below the model prediction.",
          response: { type: "numeric", parts: [{ label: "Predicted score", answer: 80 }, { label: "Residual", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear prediction", statement: "Substitute the explanatory-variable value into the fitted model." },
              { kind: "formula", name: "Residual", statement: "Residual equals observed response minus predicted response: $e=y-\\hat{y}$." },
            ],
            steps: [
              { reasoning: "Substitute 4 hours into the model to find the predicted score.", working: "\\hat{y}=5(4)+60=80", marks: 1, markCode: "M" },
              { reasoning: "Subtract prediction from the observed score; residuals are not prediction minus observation.", working: "e=83-80=3", marks: 1, markCode: "M" },
              { reasoning: "A positive residual means the observed point lies above the model line.", working: "3>0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Predicted score $80$; residual $3$ points; the observed score is above the model prediction.",
            commonErrors: ["Reversing residual order and obtaining $-3$.", "Saying the point is below the model for a positive residual."],
          },
        },
        {
          id: "alg1-u5-correlation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scatter plot of daily screen time and sleep duration has correlation $r=-0.78$. The residuals from a fitted line are $-2, 1, 0, 3, -1$ hours. Interpret the correlation and find the mean residual. What does the mean residual alone tell you about the model's fit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation", statement: "The sign describes linear direction and magnitude describes strength of a linear association." },
              { kind: "formula", name: "Mean residual", statement: "The mean residual is the sum of residuals divided by their number." },
            ],
            steps: [
              { reasoning: "The negative sign and magnitude 0.78 indicate a moderately strong to strong negative linear association.", working: "r=-0.78", marks: 1, markCode: "R" },
              { reasoning: "Add residuals with their signs; positive and negative residuals can cancel.", working: "-2+1+0+3-1=1", marks: 1, markCode: "M" },
              { reasoning: "Divide the residual total by five observations.", working: "\\bar{e}=\\frac{1}{5}=0.2\\text{ hours}", marks: 1, markCode: "A" },
              { reasoning: "A small mean residual indicates little average signed bias, but cancellation can hide large individual errors or a pattern; inspect residual size and shape too.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "There is a moderately strong to strong negative linear association. The mean residual is $0.2$ hours. This small average signed residual does not, by itself, demonstrate that individual predictions are accurate or that residuals have no pattern.",
            commonErrors: ["Averaging absolute values when asked for the mean residual.", "Assuming a mean near zero guarantees a good model fit."],
          },
        },
        {
          id: "alg1-u5-correlation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A school examines the relationship between practice problems completed ($x$) and a math quiz score ($y$). The observed pairs are $(1, 53), (2, 53), (3, 55), (4, 59), (5, 60), (6, 62), (7, 64)$. A line of best fit is $\\hat{y}=2x+50$. The correlation calculated from these seven pairs is approximately $r=0.91$. One student in the data completed 4 problems and scored 59. For these pairs, the sum of cross-products of deviations is 52, and the sums of squared deviations are 28 for $x$ and 116 for $y$, giving $r=52/\\sqrt{28(116)}\\approx0.91$.",
          parts: [
            { label: "a", prompt: "Find the model's predicted score for a student who completed 4 problems.", marks: 2 },
            { label: "b", prompt: "Calculate the residual for the observed student and interpret its sign.", marks: 2 },
            { label: "c", prompt: "Interpret the correlation coefficient in context.", marks: 2 },
            { label: "d", prompt: "Does the correlation of approximately $0.91$ prove that completing more practice problems causes higher scores? Explain.", marks: 2 },
            { label: "e", prompt: "State one feature of a residual plot that would suggest the linear model is not appropriate.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear prediction", statement: "Substitute $x$ in $\\hat{y}=2x+50$." },
              { kind: "formula", name: "Residual", statement: "$e=y-\\hat{y}$, observed minus predicted." },
              { kind: "definition", name: "Correlation coefficient", statement: "A positive coefficient near 1 indicates a strong positive linear association." },
              { kind: "principle", name: "Residual pattern", statement: "A systematic pattern in residuals suggests a linear model may not capture the relationship." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute 4 completed problems into the fitted line.", working: "\\hat{y}=2(4)+50=58", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Residual is observed minus predicted, so subtract the predicted 58 from the observed score 59.", working: "e=59-58=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A positive residual means the observed score is one point above the prediction.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Interpret positive direction and strong magnitude in terms of the two measured variables.", working: "r=0.91", marks: 2, markCode: "R" },
              { part: "d", reasoning: "The observational relationship may be influenced by prior knowledge, time spent studying, or other factors; correlation alone does not establish causation.", marks: 2, markCode: "R" },
              { part: "e", reasoning: "A curved pattern, funnel shape, or other systematic structure rather than random scatter would indicate the linear model may not be appropriate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Predicted score $58$. (b) Residual $1$ point; the observed score is one point above prediction. (c) The sample shows a strong positive linear association between problems completed and quiz score ($r\\approx0.91$). (d) No; correlation alone does not prove that practice caused higher scores. (e) A systematic curved pattern in residuals would suggest that a linear model is unsuitable.",
            commonErrors: ["Calculating the residual as prediction minus observed value.", "Claiming $r=0.91$ proves that practice causes higher scores.", "Treating any residual plot variation as evidence against a linear model rather than looking for a pattern."],
          },
        },
      ],
    },
  ],
};
