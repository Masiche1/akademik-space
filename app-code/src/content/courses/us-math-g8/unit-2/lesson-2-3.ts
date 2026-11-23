import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m8-u2-lesson-2-3",
  code: "2-3",
  title: "Systems and Bivariate Data",
  goal: "I CAN solve systems of two linear equations in several ways, and describe association in scatter plots and two-way tables.",
  standards: ["8.EE.C.8", "8.SP.A.1", "8.SP.A.2", "8.SP.A.3", "8.SP.A.4"],
  vocabulary: [
    {
      term: "System of linear equations",
      definition:
        "Two or more linear equations with the same variables. A solution makes every equation true.",
    },
    {
      term: "Substitution",
      definition:
        "A method of solving a system by solving one equation for a variable and replacing that variable in the other equation.",
    },
    {
      term: "Elimination",
      definition:
        "A method of solving a system by adding or subtracting the equations (after multiplying if needed) so that one variable cancels.",
    },
    {
      term: "Scatter plot",
      definition:
        "A graph of ordered pairs showing the relationship between two numerical variables.",
    },
    {
      term: "Line of best fit",
      definition:
        "A straight line drawn or calculated to model the trend in a scatter plot, used to make predictions.",
    },
    {
      term: "Two-way table",
      definition:
        "A table that shows the frequencies of two categorical variables, with rows for one and columns for the other.",
    },
    {
      term: "Outlier",
      definition:
        "A data point that lies far away from the overall pattern of the other points.",
    },
  ],
  concepts: [
    {
      id: "m8-u2-linear-systems",
      title: "Systems of two linear equations",
      skill:
        "Solve systems by graphing, substitution and elimination, and use them to solve applied problems.",
      lesson: {
        sections: [
          {
            heading: "What a solution means",
            body: "The solution of a system is the ordered pair $(x,y)$ that satisfies both equations. On a graph it is the point where the two lines **intersect**. Lines can meet at one point (one solution), be parallel (no solution), or be the same line (infinitely many solutions). Parallel lines have the same slope but different $y$-intercepts.",
          },
          {
            heading: "Substitution",
            body: "Use substitution when one equation already has a variable by itself, or can easily be solved for one. For $y=2x+1$ and $y=-x+7$, set the right sides equal: $2x+1=-x+7$, so $3x=6$ and $x=2$. Then $y=2(2)+1=5$. Always check the solution in **both** equations.",
          },
          {
            heading: "Elimination",
            body: "If the equations are in the form $ax+by=c$, add or subtract them to cancel a variable. For $x+y=10$ and $x-y=4$: adding gives $2x=14$, so $x=7$, and $y=3$. When no variable cancels, first multiply one or both equations by a number to make the coefficients opposites or equal.",
          },
        ],
        keyFormulas: [
          {
            name: "Substitution",
            statement:
              "Solve one equation for a variable, then replace it in the other",
          },
          {
            name: "Elimination",
            statement: "Add or subtract equations to cancel a variable",
          },
        ],
        workedExample: {
          problem: "Solve $2x+3y=12$ and $4x-y=10$.",
          solution:
            "From the second equation $y=4x-10$. Substitute: $2x+3(4x-10)=12$, so $14x-30=12$, $14x=42$, $x=3$. Then $y=4(3)-10=2$. Check: $2(3)+3(2)=12$ and $4(3)-2=10$. The solution is $(3,2)$.",
        },
      },
      questions: [
        {
          id: "m8-u2-linear-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution of the system $y=2x+1$ and $y=-x+7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5,2)$" },
              { id: "b", text: "$(1,3)$" },
              { id: "c", text: "$(2,5)$" },
              { id: "d", text: "$(3,7)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solution of a system",
                statement:
                  "A solution is an ordered pair that satisfies both equations at the same time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set the expressions for $y$ equal: $2x+1=-x+7$, so $3x=6$ and $x=2$. Then $y=2(2)+1=5$.",
                working: "(2,5)",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** $(2,5)$",
            commonErrors: [
              "Reversing the coordinates and choosing $(5,2)$.",
              "Choosing $(1,3)$, which satisfies only the first equation.",
            ],
          },
        },
        {
          id: "m8-u2-linear-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve the system $x+y=10$ and $x-y=4$. Enter the value of $x$ and the value of $y$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 7 },
              { label: "$y$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elimination",
                statement:
                  "Adding equations with opposite coefficients of a variable eliminates it.",
              },
            ],
            steps: [
              {
                reasoning: "Add the equations; the $y$ terms cancel.",
                working: "2x=14 \\Rightarrow x=7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Substitute $x=7$ into $x+y=10$. Check in the other equation: $7-3=4$.",
                working: "y=10-7=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=7$, $y=3$",
            commonErrors: [
              "Subtracting instead of adding and failing to cancel a variable.",
              "Finding $x$ only and stopping.",
            ],
          },
        },
        {
          id: "m8-u2-linear-systems-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve the system $2x+3y=12$ and $4x-y=10$. Enter the value of $x$ and the value of $y$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 3 },
              { label: "$y$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substitution",
                statement:
                  "Solve one equation for a variable and substitute into the other equation.",
              },
            ],
            steps: [
              {
                reasoning: "Solve the second equation for $y$.",
                working: "y=4x-10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Substitute into the first equation and solve for $x$.",
                working: "2x+3(4x-10)=12 \\Rightarrow 14x=42 \\Rightarrow x=3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Find $y$. Check: $2(3)+3(2)=12$ and $4(3)-2=10$.",
                working: "y=4(3)-10=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(3,2)$",
            commonErrors: [
              "Forgetting to multiply $-10$ by $3$ when distributing, giving $2x+12x-10=12$.",
              "Solving for $x$ but not finding $y$.",
            ],
            examinerNote:
              "Accept elimination: multiply the second equation by $3$ and add to the first.",
          },
        },
        {
          id: "m8-u2-linear-systems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A theater sold $120$ tickets for one show. Adult tickets cost $\\$8$ each and child tickets cost $\\$5$ each. The total ticket revenue was $\\$795$. Let $a$ be the number of adult tickets and $c$ the number of child tickets.",
          parts: [
            {
              label: "a",
              prompt:
                "Write a system of two equations in $a$ and $c$ for this situation.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Solve the system to find the number of adult tickets sold.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Find the number of child tickets sold and check that your answers give the revenue of $\\$795$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A second system is $y=2x+3$ and $y=2x-1$. How many solutions does it have? Explain using the graphs of the lines.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Adult tickets", answer: 65 },
              { label: "(c) Child tickets", answer: 55 },
              { label: "(d) Number of solutions", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modeling with a system",
                statement:
                  "Each fact in the story gives one equation: one for the total number of tickets, one for the total revenue.",
              },
              {
                kind: "principle",
                name: "Substitution",
                statement:
                  "Solve one equation for a variable and replace it in the other.",
              },
              {
                kind: "property",
                name: "Parallel lines",
                statement:
                  "Lines with equal slopes and different $y$-intercepts never intersect, so the system has no solution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The tickets total $120$.",
                working: "a+c=120",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "The revenue is $\\$8$ per adult ticket plus $\\$5$ per child ticket.",
                working: "8a+5c=795",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Solve the first equation for $c$ and substitute into the second.",
                working: "c=120-a,\\quad 8a+5(120-a)=795",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Expand and collect terms.",
                working: "8a+600-5a=795 \\Rightarrow 3a=195",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Divide by $3$.",
                working: "a=65",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute into $c=120-a$.",
                working: "c=120-65=55",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Check the revenue.",
                working: "8(65)+5(55)=520+275=795",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Both lines have slope $2$ but different $y$-intercepts ($3$ and $-1$), so they are parallel.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Parallel lines never meet, so there is no solution. Algebraically, $2x+3=2x-1$ gives $3=-1$, which is false.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $a+c=120$, $8a+5c=795$ (b) $65$ adult tickets (c) $55$ child tickets; $520+275=795$ (d) no solution because the lines are parallel.",
            commonErrors: [
              "Writing $8a+5c=120$ and $a+c=795$ (mixing up totals).",
              "Substituting $c=120-a$ without parentheses, giving $8a+5-a\\times120$.",
            ],
            examinerNote:
              "Accept elimination in (b): multiply $a+c=120$ by $5$ and subtract from the second equation.",
          },
        },
      ],
    },
    {
      id: "m8-u2-bivariate-data",
      title: "Scatter plots, best-fit lines and two-way tables",
      skill:
        "Describe association in scatter plots, use lines of best fit to make predictions, and read relative frequencies from two-way tables.",
      lesson: {
        sections: [
          {
            heading: "Describing a scatter plot",
            body: "Look for the **pattern** of the points. **Positive association**: as $x$ increases, $y$ tends to increase. **Negative association**: as $x$ increases, $y$ tends to decrease. **No association**: no clear trend. Also describe whether the pattern is **linear** or **nonlinear**, how tightly the points cluster, and any **outliers** far from the pattern.",
          },
          {
            heading: "Lines of best fit",
            body: "A line of best fit follows the trend, with about as many points above as below. Its equation $y=mx+b$ is used to predict. The slope $m$ is the predicted change in $y$ for each increase of $1$ in $x$, and $b$ is the predicted $y$ when $x=0$ (which only makes sense if $x=0$ is meaningful). A prediction far outside the data is unreliable. A **residual** is the actual $y$ minus the predicted $y$.",
          },
          {
            heading: "Two-way tables",
            body: "A two-way table shows how two categorical variables relate. Find **relative frequencies** by dividing by a row or column total. To see whether there is an association, compare the percentages across groups: if the percentages of one group with a feature differ a lot from another group's, there is an association.",
          },
        ],
        keyFormulas: [
          {
            name: "Prediction",
            statement: "$\\hat{y}=mx+b$ for a line of best fit",
          },
          {
            name: "Relative frequency",
            statement:
              "$\\frac{\\text{count in category}}{\\text{group total}}$",
          },
        ],
        workedExample: {
          problem:
            "A line of best fit is $y=6x+52$ where $x$ is hours studied and $y$ is the test score. Predict the score for $2$ hours and interpret the slope.",
          solution:
            "$y=6(2)+52=64$. The slope $6$ means that each extra hour of study is associated with an increase of about $6$ points in the test score.",
        },
      },
      questions: [
        {
          id: "m8-u2-bivariate-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scatter plot shows the age of used cars ($x$) and their selling prices ($y$). The points slope downward from left to right and cluster closely around a straight line. Which statement describes the association?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative nonlinear association" },
              { id: "b", text: "Negative linear association" },
              { id: "c", text: "Positive linear association" },
              { id: "d", text: "No association" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Association",
                statement:
                  "Negative association means $y$ tends to decrease as $x$ increases; linear means the pattern follows a straight line.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The prices fall as the age rises (negative), and the points follow a line (linear).",
                working: "\\text{negative linear}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Negative linear association",
            commonErrors: [
              "Confusing the direction and choosing positive.",
              "Saying there is no association because the points are not exactly on a line.",
            ],
          },
        },
        {
          id: "m8-u2-bivariate-data-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The line of best fit for a scatter plot of hours of practice ($x$) and number of free throws made out of $50$ ($y$) is $y=2.5x+10$. Use the line to predict the number of free throws made after $8$ hours of practice.",
          response: {
            type: "numeric",
            parts: [{ label: "Predicted free throws", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Using a line of best fit",
                statement:
                  "Substitute the $x$-value into $y=mx+b$ to predict $y$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $x=8$.",
                working: "y=2.5(8)+10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "20+10=30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30$ free throws",
            commonErrors: [
              "Forgetting to add the intercept $10$, giving $20$.",
              "Substituting $8$ for $y$ instead of $x$.",
            ],
          },
        },
        {
          id: "m8-u2-bivariate-data-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A survey asked $60$ students whether they own a pet. The results are shown below.\n\n| | Has a pet | No pet | Total |\n|---|---|---|---|\n| 7th grade | $18$ | $12$ | $30$ |\n| 8th grade | $12$ | $18$ | $30$ |\n| Total | $30$ | $30$ | $60$ |\n\nWhat percent of the 8th graders who were surveyed have a pet?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Percent of 8th graders with a pet",
                answer: 40,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative frequency",
                statement:
                  "Divide the count in the category by the total of the group being asked about.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The group is the 8th graders, so the denominator is the 8th grade row total, $30$.",
                working: "\\frac{12}{30}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a decimal.",
                working: "0.4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Write as a percent.",
                working: "40\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$40\\%$",
            commonErrors: [
              "Dividing by the grand total: $\\frac{12}{60}=20\\%$.",
              "Dividing by the column total of pet owners: $\\frac{12}{30}$ of all pet owners, which is a different question with the same number here.",
            ],
            examinerNote:
              "Compare with 7th grade: $\\frac{18}{30}=60\\%$, which suggests an association between grade and owning a pet.",
          },
        },
        {
          id: "m8-u2-bivariate-data-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A teacher records the hours $x$ that students studied for a test and their scores $y$. The scatter plot shows a positive linear association, with one student far below the pattern. The teacher draws the line of best fit $y=6x+52$.",
          parts: [
            {
              label: "a",
              prompt:
                "Interpret the slope of the line in the context of the data.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Predict the score of a student who studies for $4.5$ hours.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Interpret the $y$-intercept in context.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A student who studied for $3$ hours scored $75$. Find the residual (actual score minus predicted score).",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "The teacher wants to predict the score for $20$ hours of studying. Explain why this prediction is not reliable, and what the outlier tells you.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Points per extra hour", answer: 6 },
              { label: "(b) Predicted score", answer: 79 },
              { label: "(c) Score predicted for 0 hours", answer: 52 },
              { label: "(d) Residual", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope in context",
                statement:
                  "The slope is the predicted change in $y$ for each increase of $1$ in $x$.",
              },
              {
                kind: "definition",
                name: "Intercept in context",
                statement:
                  "The $y$-intercept is the predicted $y$-value when $x=0$.",
              },
              {
                kind: "principle",
                name: "Extrapolation",
                statement:
                  "Predictions far outside the range of the data are unreliable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The slope is $6$ points for each extra hour.",
                working: "m=6",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "State the meaning in context: each extra hour of study is associated with about $6$ more points on the test.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Substitute $x=4.5$.",
                working: "y=6(4.5)+52=27+52",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "79",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The intercept is the predicted score when $x=0$.",
                working: "b=52",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "In context: a student who did not study at all is predicted to score about $52$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Predicted score for $3$ hours.",
                working: "6(3)+52=70",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Residual is actual minus predicted.",
                working: "75-70=5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "$20$ hours is far outside the range of the data; the line would predict $6(20)+52=172$, which is more than any test can score, so the model does not hold there.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "The outlier is a student whose score is much lower than the pattern predicts, so something other than study time affected that score.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $6$ points per extra hour of study (b) $79$ (c) a student who studied $0$ hours is predicted to score $52$ (d) $5$ (e) extrapolating gives an impossible score of $172$; the outlier scored far below the trend.",
            commonErrors: [
              "Saying the slope means the score is $6$ rather than a change of $6$ per hour.",
              "Computing the residual as predicted minus actual, giving $-5$.",
            ],
            examinerNote:
              "In (e) accept any valid reason that mentions extrapolation beyond the data and a maximum possible score.",
          },
        },
      ],
    },
  ],
};
