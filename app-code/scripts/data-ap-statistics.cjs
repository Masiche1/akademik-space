// AP Statistics — data analysis, probability, inference. Spec for scripts/gen-us-elementary.cjs.
const P = (kind, name, statement) => [kind, name, statement];
const S = (reasoning, marks, markCode = "A", working) => ({ reasoning, marks, markCode, ...(working ? { working } : {}) });
const mcq = (difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const num = (difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const op = (difficulty, totalMarks, stem, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const lesson = (slug, title, goal, standards, vocab, concept) => ({ slug, title, goal, standards, vocab, concept });

const apStats = {
  id: "ap-statistics",
  exportName: "apStatistics",
  prefix: "apst",
  title: "AP Statistics",
  shortTitle: "AP Stats",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description:
    "Exploring data, probability and sampling distributions, and statistical inference — confidence intervals and significance tests in exam-style questions.",
  ap: { exam: "statistics" },
  units: [
    {
      id: "apst-u1",
      title: "Exploring Data",
      description: "Summarize distributions with statistics and graphs, compare groups, and interpret associations.",
      lessons: [
        lesson("descriptive-stats", "Descriptive Statistics and Graphs", "I CAN compute and interpret measures of center, spread, and shape.", ["STAT-1"],
          [["Mean", "The arithmetic average: $\\bar{x} = \\frac{\\sum x}{n}$."], ["Median", "The middle value when data are ordered — resistant to outliers."], ["Mode", "The most frequent value."], ["Standard deviation", "$s = \\sqrt{\\frac{\\sum(x - \\bar{x})^2}{n-1}}$ — typical distance from the mean."], ["Five-number summary", "Minimum, Q1, median, Q3, maximum — basis of boxplots."]],
          {
            title: "Describing distributions",
            skill: "Compute center, spread, and shape measures and choose appropriate graphs.",
            sections: [
              ["Center and spread", "The **mean** is the balancing point but is sensitive to outliers; the **median** is the middle value and resistant. **Standard deviation** measures typical deviation from the mean. A distribution's **shape** — symmetric, skewed left/right, unimodal/bimodal — determines which statistics best describe it."],
              ["Choosing displays", "Histograms show shape of quantitative data; boxplots compare groups and expose outliers via the $1.5 \\times IQR$ rule; scatterplots show association between two variables. Always note center, spread, shape, and outliers (SOCS) when describing data."],
            ],
            formulas: [
              ["Mean", "$\\bar{x} = \\frac{\\sum x_i}{n}$"],
              ["Standard deviation", "$s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$"],
              ["Outlier rule", "Outside $[Q_1 - 1.5\\,IQR,\\; Q_3 + 1.5\\,IQR]$"],
            ],
            worked: {
              problem: "Data: $2, 4, 4, 7, 9$. Find mean and median.",
              solution: "Mean $= \\frac{2+4+4+7+9}{5} = \\frac{26}{5} = 5.2$. Ordered data's middle value is $4$ — median $= 4$.",
            },
            questions: [
              mcq("foundation", 1, "Which measure of center is resistant to outliers?", [["a", "Mean"], ["b", "Median"], ["c", "Mode"], ["d", "Range"]], "b",
                [P("concept", "Resistance", "Median depends only on position, not extreme values.")],
                [S("The median ignores how extreme outliers are; the mean is pulled toward them.", 1, "B")], "Median", ["Thinking all averages respond equally to outliers."]),
              mcq("core", 1, "Data: $3, 5, 5, 8, 12$. What is the median?", [["a", "$5$"], ["b", "$5.5$"], ["c", "$6.6$"], ["d", "$8$"]], "a",
                [P("definition", "Median", "Middle value of ordered data.")],
                [S("Ordered: $3,5,5,8,12$ — the third value is $5$.", 1, "M")], "$5$", ["Averaging the two middle values when $n$ is odd."]),
              num("core", 2, "For data $4, 6, 8, 10$, compute the mean. Enter the value.", [{ label: "Mean", answer: 7 }],
                [P("method", "Mean formula", "$\\bar{x} = \\frac{4+6+8+10}{4}$.")],
                [S("$\\bar{x} = \\frac{28}{4} = 7$.", 1, "M"), S("Mean $= 7$.", 1, "B")], "$7$", ["Dividing by $n-1$ (that's for standard deviation)."]),
              op("challenge", 3, "A dataset has Q1 $= 10$, median $= 14$, Q3 $= 22$. (a) Compute the IQR. (b) State the outlier boundaries. (c) Is $35$ an outlier? Explain.",
                [P("method", "IQR", "$IQR = Q_3 - Q_1$."), P("theorem", "Outlier rule", "$1.5 \\times IQR$ fences.")],
                [S("(a) $IQR = 22 - 10 = 12$.", 1, "M"), S("(b) Fences: $10 - 18 = -8$ and $22 + 18 = 40$; acceptable range $[-8, 40]$.", 1, "M"), S("(c) $35 < 40$, so $35$ is NOT an outlier — it lies inside the upper fence.", 1, "B")], "$IQR=12$, fences $-8$ to $40$, $35$ not an outlier", ["Comparing $35$ to Q3 instead of the upper fence."]),
            ],
          }),
        lesson("comparing-groups", "Comparing Distributions", "I CAN compare groups and interpret associations between variables.", ["STAT-2"],
          [["Back-to-back stem plot", "Displays two distributions sharing a central axis for direct comparison."], ["Side-by-side boxplot", "Compares medians, spreads, and outliers across groups at a glance."], ["Association", "A relationship between two quantitative variables, seen in scatterplots."], ["Positive association", "Both variables increase together."], ["Lurking variable", "An unmeasured variable that may explain an observed association."]],
          {
            title: "Comparing groups",
            skill: "Compare distributions and reason about association vs causation.",
            sections: [
              ["Comparative displays", "Back-to-back stem plots and side-by-side boxplots put two groups on the same scale so you compare shape, center, and spread directly. Compare medians for skewed data, means for roughly symmetric data."],
              ["Association and causation", "Scatterplots reveal association — positive, negative, or none. But **association does not imply causation**: a lurking variable (like ice cream sales and drowning both rising in summer) can drive the relationship. Only well-designed experiments support causal claims."],
            ],
            formulas: [
              ["IQR comparison", "Compare spread via IQR, not range, when outliers present"],
              ["Causation rule", "Association $\\ne$ causation without a controlled experiment"],
            ],
            worked: {
              problem: "Group A median $= 20$, IQR $= 5$; Group B median $= 28$, IQR $= 12$. Compare.",
              solution: "Group B has a higher typical value (median $28 > 20$) but is more variable (IQR $12 > 5$). Center and spread tell different stories.",
            },
            questions: [
              mcq("foundation", 1, "A scatterplot shows points rising from lower-left to upper-right. The association is ___.", [["a", "negative"], ["b", "positive"], ["c", "none"], ["d", "causal"]], "b",
                [P("concept", "Association direction", "Both variables increase together.")],
                [S("Upward trend = positive association.", 1, "M")], "Positive", ["Saying 'causal' — association alone never proves causation."]),
              mcq("core", 1, "Ice cream sales and drowning deaths are positively associated. The best explanation is ___.", [["a", "Ice cream causes drowning"], ["b", "A lurking variable — hot weather"], ["c", "No relationship exists"], ["d", "Random chance only"]], "b",
                [P("concept", "Lurking variable", "A third variable drives both.")],
                [S("Hot weather increases both ice cream sales and swimming (hence drowning) — classic lurking variable.", 1, "M")], "(b) Lurking variable", ["Claiming causation from observational association."]),
              num("core", 2, "Group A: median $15$, IQR $4$. Group B: median $15$, IQR $9$. Which group is more variable? Answer 1 for A, 2 for B.", [{ label: "Group", answer: 2 }],
                [P("concept", "IQR as spread", "Larger IQR = more spread.")],
                [S("IQR $9 > 4$, so Group B is more variable despite equal medians.", 1, "M"), S("Answer: Group B.", 1, "B")], "Group B", ["Comparing medians instead of IQRs for variability."]),
              op("challenge", 3, "Two classes take the same test. Class A: mean $78$, SD $4$. Class B: mean $80$, SD $10$. Compare the distributions and explain which class had more consistent scores.",
                [P("concept", "SD as consistency", "Smaller SD = more consistent.")],
                [S("Class B has a slightly higher mean ($80 > 78$) but much larger spread.", 1, "M"), S("Class A's SD of $4$ vs B's $10$ means A's scores cluster tightly — more consistent.", 1, "M"), S("Higher average does not mean more consistent; spread matters separately.", 1, "R")], "B higher mean; A more consistent", ["Equating higher mean with better overall performance."]),
            ],
          }),
        lesson("bivariate-data", "Bivariate Data and Associations", "I CAN describe relationships between two quantitative variables.", ["STAT-3"],
          [["Bivariate data", "Observations on two variables measured on the same individuals."], ["Scatterplot", "Graph of paired $(x, y)$ values showing form, direction, strength, clusters, outliers."], ["Linear association", "Points roughly following a straight-line pattern."], ["Residual", "Observed $y$ minus predicted $\\hat{y}$ — vertical distance from the line."], ["Influential point", "A point whose removal would markedly change the association."]],
          {
            title: "Bivariate data",
            skill: "Describe scatterplot patterns and identify unusual points.",
            sections: [
              ["Reading scatterplots", "Describe **form** (linear, curved, clusters), **direction** (positive/negative), **strength** (how tightly points follow the pattern), and note **outliers** and clusters. A strong linear association has points close to a line; weak association scatters widely."],
              ["Residuals", "For a linear model $\\hat{y} = a + bx$, the residual $e = y - \\hat{y}$ measures prediction error. Large residuals flag points the line predicts poorly — candidates for outliers or influential points that bend the fit."],
            ],
            formulas: [
              ["Residual", "$e = y - \\hat{y}$"],
              ["Linear model", "$\\hat{y} = a + bx$"],
            ],
            worked: {
              problem: "Line $\\hat{y} = 2x + 1$; observed point $(3, 9)$. Find the residual.",
              solution: "$\\hat{y} = 2(3) + 1 = 7$; residual $= 9 - 7 = 2$ — the point sits $2$ units above the line.",
            },
            questions: [
              mcq("foundation", 1, "In a scatterplot, points clustered tightly around a line indicate ___.", [["a", "weak association"], ["b", "strong association"], ["c", "no association"], ["d", "nonlinear form"]], "b",
                [P("concept", "Strength", "Tight clustering = strong.")],
                [S("Points close to the pattern line mean a strong association.", 1, "M")], "Strong association", ["Confusing tightness with direction."]),
              mcq("core", 1, "For $\\hat{y} = 3x - 2$ and observed $y = 10$ at $x = 4$, the residual is ___.", [["a", "$-4$"], ["b", "$4$"], ["c", "$22$"], ["d", "$0$"]], "d",
                [P("method", "Residual", "$\\hat{y} = 3(4) - 2 = 10$; residual $= y - \\hat{y} = 10 - 10$.")],
                [S("$\\hat{y} = 10$, observed $10$, so residual $= 0$ — the point lies on the line.", 1, "M")], "$0$", ["Arithmetic error computing $\\hat{y}$."]),
              num("core", 2, "Line $\\hat{y} = x + 5$; at $x = 3$ observed $y = 12$. Enter the residual.", [{ label: "Residual", answer: 4 }],
                [P("method", "Residual", "$\\hat{y} = 3 + 5 = 8$; $e = 12 - 8$.")],
                [S("Residual $= 12 - 8 = 4$ — observed value is $4$ above prediction.", 1, "M"), S("$e = 4$.", 1, "B")], "$4$", ["Reversing subtraction order ($\\hat{y} - y$)."]),
              op("challenge", 3, "A scatterplot of study hours vs test scores shows a strong positive linear association. (a) Interpret the direction. (b) Can you conclude more studying causes higher scores? Explain.",
                [P("concept", "Association", "Both increase together."), P("concept", "Causation", "Needs experiment.")],
                [S("(a) Positive association: more study hours correspond to higher scores.", 1, "M"), S("(b) Not necessarily — observational data could have a lurking variable (motivation, prior knowledge). Only a randomized experiment establishes causation.", 1, "M"), S("Clear association-vs-causation distinction.", 1, "R")], "Positive association; causation not established", ["Claiming causation from the scatterplot alone."]),
            ],
          }),
      ],
    },
    {
      id: "apst-u2",
      title: "Probability and Sampling Distributions",
      description: "Probability rules, random variables, expected value, and sampling distributions of proportions and means.",
      lessons: [
        lesson("probability-rules", "Probability Rules", "I CAN apply addition and multiplication rules and compute expected value.", ["PROB-1"],
          [["Sample space", "The set of all possible outcomes."], ["Event", "A subset of the sample space."], ["Addition rule", "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."], ["Multiplication rule", "$P(A \\cap B) = P(A)P(B|A)$ — chain rule for sequential events."], ["Expected value", "$E[X] = \\sum x_i P(x_i)$ — long-run average."]],
          {
            title: "Probability rules",
            skill: "Combine probabilities correctly and compute expectations.",
            sections: [
              ["Addition rule", "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ — subtract the overlap once to avoid double-counting. For **mutually exclusive** events, $P(A \\cap B) = 0$ and the rule simplifies to $P(A) + P(B)$."],
              ["Expected value", "For a discrete random variable, $E[X] = \\sum x_i \\cdot P(x_i)$ — the weighted average outcome. A game is worth playing in the long run only if $E[X] > 0$ (after costs)."],
            ],
            formulas: [
              ["Addition rule", "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$"],
              ["Expected value", "$E[X] = \\sum x_i P(x_i)$"],
            ],
            worked: {
              problem: "Die roll pays $\\$5$ on even, loses $\\$2$ on odd. Expected value?",
              solution: "$E = 3 \\times \\frac{3}{6}(5) + 3 \\times \\frac{3}{6}(-2) = 2.5 - 1 = \\$1.50$ per roll — positive expectation.",
            },
            questions: [
              mcq("foundation", 1, "Events $A$ and $B$ are mutually exclusive. Then $P(A \\cap B) = $." , [["a", "$P(A)P(B)$"], ["b", "$0$"], ["c", "$P(A) + P(B)$"], ["d", "$1$"]], "b",
                [P("definition", "Mutually exclusive", "Cannot both occur — no overlap.")],
                [S("Mutually exclusive means the intersection is empty: probability $0$.", 1, "M")], "$0$", ["Multiplying probabilities for exclusive events."]),
              mcq("core", 1, "$P(A) = 0.4$, $P(B) = 0.3$, $P(A \\cap B) = 0.1$. Find $P(A \\cup B)$.", [["a", "$0.7$"], ["b", "$0.6$"], ["c", "$0.8$"], ["d", "$0.12$"]], "b",
                [P("method", "Addition rule", "$0.4 + 0.3 - 0.1$.")],
                [S("$P(A \\cup B) = 0.4 + 0.3 - 0.1 = 0.6$.", 1, "M")], "$0.6$", ["Forgetting to subtract the overlap."]),
              num("core", 2, "A game pays $\\$10$ with probability $0.2$ and $\\$0$ otherwise. Expected winnings? Enter the value in dollars.", [{ label: "$E[X]$", answer: 2 }],
                [P("method", "Expected value", "$E = 10(0.2) + 0(0.8)$.")],
                [S("$E[X] = 10 \\times 0.2 = \\$2$ per play.", 1, "M"), S("$E = \\$2$.", 1, "B")], "$2$", ["Using probability $0.8$ instead of $0.2$ for the payout."]),
              op("challenge", 3, "A bag has 4 red and 6 blue marbles. You draw two without replacement. (a) Find $P(\\text{both red})$. (b) Find $P(\\text{at least one red})$.",
                [P("method", "Multiplication rule", "Sequential without replacement."), P("concept", "Complement", "At least one = $1 - P(\\text{none})$.")],
                [S("(a) $P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15} \\approx 0.133$.", 1, "M"), S("(b) $P(\\text{no red}) = \\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$, so $P(\\text{at least one}) = 1 - \\frac{1}{3} = \\frac{2}{3}$.", 1, "M"), S("Both probabilities correct.", 1, "B")], "(a) $\\frac{2}{15}$; (b) $\\frac{2}{3}$", ["Using replacement probabilities or adding instead of complementing."]),
            ],
          }),
        lesson("random-variables", "Random Variables and Distributions", "I CAN construct probability distributions and compute mean and SD of a random variable.", ["PROB-2"],
          [["Random variable", "A numerical description of a random outcome, e.g., number of heads."], ["Probability distribution", "Table of values $x_i$ with probabilities $P(x_i)$ summing to $1$."], ["Mean of RV", "$\\mu = E[X] = \\sum x_i P(x_i)$ — center of the distribution."], ["Variance", "$\\sigma^2 = \\text{Var}(X) = \\sum (x_i - \\mu)^2 P(x_i)$."], ["SD of RV", "$\\sigma = \\sqrt{\\text{Var}(X)}$ — spread of the distribution."]],
          {
            title: "Random variables",
            skill: "Build distributions and compute their center and spread.",
            sections: [
              ["Distributions", "A discrete random variable $X$ takes values $x_1, \\ldots, x_k$ with probabilities $p_i$ where $\\sum p_i = 1$. The mean $\\mu = \\sum x_i p_i$ is the expected value; variance $\\sigma^2 = \\sum (x_i - \\mu)^2 p_i$ measures spread, and $\\sigma$ is its square root."],
              ["Binomial setting", "Fixed $n$ trials, two outcomes, constant success probability $p$, independence. Then $X \\sim B(n, p)$ with $\\mu = np$ and $\\sigma = \\sqrt{np(1-p)}$ — memorizing these makes binomial problems fast."],
            ],
            formulas: [
              ["Mean", "$\\mu = \\sum x_i p_i$"],
              ["Variance", "$\\sigma^2 = \\sum (x_i - \\mu)^2 p_i$"],
              ["Binomial", "$\\mu = np$, $\\sigma = \\sqrt{np(1-p)}$"],
            ],
            worked: {
              problem: "Coin flip: $X = 1$ (heads, $p=0.5$) pays $\\$3$; $X=0$ pays $\\$0$. Two flips. Distribution and mean?",
              solution: "$X$ = number of heads $\\in \\{0,1,2\\}$ with probs $0.25, 0.5, 0.25$. $E = 0(0.25) + 1(0.5) + 2(0.25) = 1$ head expected; payout mean $= 3 \\times 1 = \\$3$.",
            },
            questions: [
              mcq("foundation", 1, "For a valid probability distribution, the probabilities must ___.", [["a", "each be less than $0.5$"], ["b", "sum to $1$"], ["c", "be equal"], ["d", "sum to $0.5$"]], "b",
                [P("definition", "Distribution", "Probabilities cover all outcomes exactly once.")],
                [S("$\\sum p_i = 1$ is required — total probability is certain.", 1, "M")], "Sum to $1$", ["Thinking probabilities are independent values."]),
              mcq("core", 1, "A binomial variable has $n = 20$, $p = 0.3$. Its mean is ___.", [["a", "$6$"], ["b", "$0.3$"], ["c", "$14$"], ["d", "$20$"]], "a",
                [P("method", "Binomial mean", "$\\mu = np = 20 \\times 0.3$.")],
                [S("$\\mu = 6$ successes expected.", 1, "M")], "$6$", ["Using $n(1-p)$ or forgetting to multiply."]),
              num("core", 2, "Random variable: $P(X=1)=0.4$, $P(X=2)=0.6$. Compute $E[X]$. Enter the value.", [{ label: "$E[X]$", answer: 1.6 }],
                [P("method", "Expected value", "$E = 1(0.4) + 2(0.6)$.")],
                [S("$E[X] = 0.4 + 1.2 = 1.6$.", 1, "M"), S("$E[X] = 1.6$.", 1, "B")], "$1.6$", ["Multiplying probabilities instead of weighting values."]),
              op("challenge", 3, "A game: roll a die, win $\\$4$ on 5 or 6, lose $\\$1$ otherwise. (a) Build the distribution of net winnings. (b) Compute $E[X]$ and state whether the game is favorable.",
                [P("method", "Distribution", "$P(\\text{win}) = \\frac{2}{6} = \\frac{1}{3}$, $P(\\text{lose}) = \\frac{2}{3}$."), P("concept", "Fair game", "$E[X] = 0$ break-even.")],
                [S("(a) $X = 4$ w.p. $\\frac{1}{3}$, $X = -1$ w.p. $\\frac{2}{3}$.", 1, "M"), S("(b) $E[X] = 4(\\frac{1}{3}) + (-1)(\\frac{2}{3}) = \\frac{4}{3} - \\frac{2}{3} = \\frac{2}{3} \\approx \\$0.67$ per roll — positive, favorable.", 1, "M"), S("Game is favorable since $E[X] > 0$.", 1, "B")], "$E[X] \\approx \\$0.67$ — favorable", ["Using $\\frac{1}{6}$ per face instead of combined $\\frac{2}{6}$."]),
            ],
          }),
        lesson("sampling-distributions", "Sampling Distributions", "I CAN describe the sampling distribution of a sample proportion and mean.", ["STAT-4"],
          [["Parameter", "A fixed number describing the population, e.g., $p$ or $\\mu$."], ["Statistic", "A number computed from a sample, e.g., $\\hat{p}$ or $\\bar{x}$ — varies sample to sample."], ["Sampling distribution", "The distribution of a statistic over all possible samples."], ["Standard error", "SD of a sampling distribution — measures statistic-to-statistic variability."], ["CLT", "Central Limit Theorem: sample means are approximately Normal for large $n$, regardless of population shape."]],
          {
            title: "Sampling distributions",
            skill: "Describe how statistics vary across samples.",
            sections: [
              ["Sample proportion", "For a random sample of size $n$ from a population with proportion $p$, $\\hat{p}$ has mean $p$, SD $\\sqrt{\\frac{p(1-p)}{n}}$, and is approximately Normal when $np \\ge 10$ and $n(1-p) \\ge 10$."],
              ["Sample mean", "By the **Central Limit Theorem**, $\\bar{x}$ is approximately Normal with mean $\\mu$ and SD $\\frac{\\sigma}{\\sqrt{n}}$ for large $n$ — even if the population isn't Normal. This powers all inference about means."],
            ],
            formulas: [
              ["Proportion SE", "$\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$"],
              ["Mean SE", "$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$"],
            ],
            worked: {
              problem: "$p = 0.5$, $n = 100$. SD of $\\hat{p}$?",
              solution: "$\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.5 \\times 0.5}{100}} = \\sqrt{0.0025} = 0.05$.",
            },
            questions: [
              mcq("foundation", 1, "The sampling distribution of $\\hat{p}$ is centered at ___.", [["a", "$\\hat{p}$"], ["b", "$p$"], ["c", "$0.5$"], ["d", "$n$"]], "b",
                [P("concept", "Unbiased statistic", "$\\hat{p}$ averages to the population $p$.")],
                [S("Over all samples, $\\hat{p}$ centers on the true population proportion $p$.", 1, "M")], "$p$", ["Confusing the statistic with its parameter."]),
              mcq("core", 1, "Population $\\sigma = 12$, sample size $n = 36$. SD of $\\bar{x}$?", [["a", "$12$"], ["b", "$2$"], ["c", "$\\frac{1}{3}$"], ["d", "$432$"]], "b",
                [P("method", "Standard error", "$\\frac{\\sigma}{\\sqrt{n}} = \\frac{12}{6}$.")],
                [S("$\\sigma_{\\bar{x}} = \\frac{12}{\\sqrt{36}} = \\frac{12}{6} = 2$.", 1, "M")], "$2$", ["Dividing by $n$ instead of $\\sqrt{n}$."]),
              num("core", 2, "$p = 0.4$, $n = 50$. Compute the standard error of $\\hat{p}$. Round to 3 decimals.", [{ label: "SE", answer: 0.0693, tolerance: 0.001 }],
                [P("method", "SE formula", "$\\sqrt{\\frac{0.4 \\times 0.6}{50}}$.")],
                [S("$\\sqrt{\\frac{0.24}{50}} = \\sqrt{0.0048} \\approx 0.0693$.", 1, "M"), S("SE $\\approx 0.069$.", 1, "B")], "$0.069$", ["Using $p(1-p) = 0.16$ instead of $0.24$."]),
              op("challenge", 3, "A population has $\\mu = 100$, $\\sigma = 15$. For samples of $n = 25$: (a) mean of $\\bar{x}$, (b) SD of $\\bar{x}$, (c) approximate shape of the sampling distribution.",
                [P("theorem", "CLT", "$\\bar{x} \\approx N(\\mu, \\sigma/\\sqrt{n})$ for large $n$.")],
                [S("(a) Mean of $\\bar{x} = \\mu = 100$.", 1, "M"), S("(b) SD $= \\frac{15}{\\sqrt{25}} = \\frac{15}{5} = 3$.", 1, "M"), S("(c) Approximately Normal by the CLT since $n = 25$ is large.", 1, "B")], "$\\bar{x} \\approx N(100, 3)$", ["Using $\\sigma$ instead of $\\sigma/\\sqrt{n}$ for the SD."]),
            ],
          }),
      ],
    },
    {
      id: "apst-u3",
      title: "Statistical Inference",
      description: "Confidence intervals and significance tests for proportions and means.",
      lessons: [
        lesson("confidence-intervals", "Confidence Intervals", "I CAN construct and interpret confidence intervals for proportions and means.", ["INF-1"],
          [["Confidence interval", "A range of plausible values for a parameter, e.g., $\\hat{p} \\pm z^* SE$."] , ["Confidence level", "The long-run success rate of the method, e.g., $95\\%$."], ["Margin of error", "Half-width of the interval: $z^* \\times SE$."], ["Interpretation", "We are $95\\%$ confident the interval captures the parameter — NOT that the parameter has a $95\\%$ chance of being in it."], ["Conditions", "Random sample, large enough $n$ ($np \\ge 10$, $n(1-p) \\ge 10$ for proportions)."]],
          {
            title: "Confidence intervals",
            skill: "Build and interpret intervals for proportions and means.",
            sections: [
              ["Interval structure", "A $95\\%$ CI for $p$ is $\\hat{p} \\pm 1.96\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$. The margin of error shrinks as $\\sqrt{n}$ grows — quadrupling $n$ halves the error. For means, use $\\bar{x} \\pm z^* \\frac{s}{\\sqrt{n}}$ when $\\sigma$ is unknown (or $t^*$ for small samples)."],
              ["Interpretation", "Say: \"We are $95\\%$ confident the interval from $a$ to $b$ captures the true proportion/mean.\" Never say the parameter is \"$95\\%$ likely\" to be in a fixed interval — the parameter is fixed; the interval is what varies across samples."],
            ],
            formulas: [
              ["Proportion CI", "$\\hat{p} \\pm z^*\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$"],
              ["Mean CI", "$\\bar{x} \\pm z^*\\frac{s}{\\sqrt{n}}$ ($\\sigma$ unknown, large $n$)"],
            ],
            worked: {
              problem: "$\\hat{p} = 0.6$, $n = 400$. $95\\%$ CI?",
              solution: "$SE = \\sqrt{\\frac{0.6 \\times 0.4}{400}} = \\sqrt{0.0006} \\approx 0.0245$. CI: $0.6 \\pm 1.96(0.0245) = 0.6 \\pm 0.048$, i.e., $(0.552, 0.648)$.",
            },
            questions: [
              mcq("foundation", 1, "A $95\\%$ CI for $p$ is $(0.45, 0.55)$. The correct interpretation is ___.", [["a", "$p$ has a $95\\%$ chance of being between $0.45$ and $0.55$"], ["b", "We are $95\\%$ confident the interval captures $p$"], ["c", "$95\\%$ of samples give this interval"], ["d", "The margin of error is $0.55$"]], "b",
                [P("concept", "CI interpretation", "Confidence is in the method, not the parameter.")],
                [S("The parameter is fixed; $95\\%$ of intervals from repeated sampling would capture it.", 1, "M")], "(b)", ["The classic misinterpretation — parameter probability vs method confidence."]),
              mcq("core", 1, "To halve the margin of error of a proportion CI, the sample size must ___.", [["a", "double"], ["b", "quadruple"], ["c", "stay the same"], ["d", "halve"]], "b",
                [P("method", "MOE scaling", "MOE $\\propto \\frac{1}{\\sqrt{n}}$; need $\\sqrt{n}$ to double.")],
                [S("Halving MOE requires $\\sqrt{n}$ to double, i.e., $n \\times 4$.", 1, "M")], "Quadruple", ["Thinking MOE is inversely proportional to $n$."]),
              num("core", 2, "$\\hat{p} = 0.5$, $n = 100$. Compute the margin of error for a $95\\%$ CI ($z^* = 1.96$). Round to 3 decimals.", [{ label: "MOE", answer: 0.098, tolerance: 0.001 }],
                [P("method", "MOE", "$1.96 \\times \\sqrt{\\frac{0.25}{100}}$.")],
                [S("$SE = \\sqrt{0.0025} = 0.05$; MOE $= 1.96 \\times 0.05 = 0.098$.", 1, "M"), S("MOE $\\approx 0.098$.", 1, "B")], "$0.098$", ["Using $z^* = 2$ sloppily or forgetting the square root."]),
              op("challenge", 3, "A poll of $n = 500$ voters finds $\\hat{p} = 0.52$ supporting a measure. (a) Construct the $95\\%$ CI. (b) Does it suggest majority support? Explain.",
                [P("method", "CI", "$SE = \\sqrt{\\frac{0.52 \\times 0.48}{500}}$.")],
                [S("(a) $SE \\approx \\sqrt{0.000499} \\approx 0.0223$; CI $= 0.52 \\pm 1.96(0.0223) = 0.52 \\pm 0.044$, i.e., $(0.476, 0.564)$.", 1, "M"), S("(b) The interval includes values below $0.5$ — it does NOT provide convincing evidence of majority support at $95\\%$ confidence.", 1, "M"), S("Correct interval and cautious interpretation.", 1, "B")], "CI $(0.476, 0.564)$ — inconclusive on majority", ["Claiming majority support because $\\hat{p} > 0.5$ without checking the interval."]),
            ],
          }),
        lesson("significance-tests", "Significance Tests", "I CAN carry out a significance test and interpret p-values.", ["INF-2"],
          [["Null hypothesis", "$H_0$: the statement of no effect, e.g., $p = p_0$."], ["Alternative hypothesis", "$H_a$: what we suspect, e.g., $p > p_0$, $p < p_0$, or $p \\ne p_0$."], ["Test statistic", "Standardized result: $z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$."], ["P-value", "Probability of a result at least as extreme as observed, assuming $H_0$ is true."], ["Significance level", "$\\alpha$ (usually $0.05$): reject $H_0$ if p-value $< \\alpha$."]],
          {
            title: "Significance tests",
            skill: "Perform one- and two-proportion z-tests and interpret results.",
            sections: [
              ["Test structure", "State $H_0$ and $H_a$, check conditions, compute the test statistic using the **null** proportion $p_0$ in the SE, find the p-value, and compare to $\\alpha$. Reject $H_0$ only when the p-value is small enough — never \"accept\" $H_0$, only fail to reject it."],
              ["P-value meaning", "The p-value answers: \"If $H_0$ were true, how surprising is our data?\" A p-value of $0.03$ means results this extreme would occur $3\\%$ of the time by chance alone under $H_0$ — evidence against $H_0$ at the $5\\%$ level."],
            ],
            formulas: [
              ["z-test statistic", "$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$"],
              ["Decision rule", "Reject $H_0$ if p-value $< \\alpha$"],
            ],
            worked: {
              problem: "$H_0: p = 0.5$ vs $H_a: p > 0.5$; $\\hat{p} = 0.56$, $n = 400$. Test at $\\alpha = 0.05$.",
              solution: "$z = \\frac{0.56 - 0.5}{\\sqrt{0.25/400}} = \\frac{0.06}{0.025} = 2.4$. P-value $= P(Z > 2.4) \\approx 0.0082 < 0.05$ — reject $H_0$; significant evidence $p > 0.5$.",
            },
            questions: [
              mcq("foundation", 1, "The p-value is the probability of ___.", [["a", "$H_0$ being true"], ["b", "data at least as extreme as observed, given $H_0$"], ["c", "making a Type I error"], ["d", "$H_a$ being true"]], "b",
                [P("definition", "P-value", "Surprise level under the null.")],
                [S("P-value conditions on $H_0$ being true and measures extremeness of the data.", 1, "M")], "(b)", ["Thinking p-value is the probability $H_0$ is true."]),
              mcq("core", 1, "If p-value $= 0.03$ and $\\alpha = 0.05$, the decision is ___.", [["a", "Fail to reject $H_0$"], ["b", "Reject $H_0$"], ["c", "Accept $H_a$ with certainty"], ["d", "Retest with larger $\\alpha$"]], "b",
                [P("rule", "Decision", "p-value $< \\alpha$ means reject.")],
                [S("$0.03 < 0.05$, so we reject $H_0$ — statistically significant at the $5\\%$ level.", 1, "M")], "Reject $H_0$", ["Saying \"accept $H_a$\" — we only reject or fail to reject."]),
              num("core", 2, "$H_0: p = 0.5$ vs $H_a: p < 0.5$; $\\hat{p} = 0.44$, $n = 500$. Compute the z-statistic. Round to 2 decimals.", [{ label: "$z$", answer: -2.68, tolerance: 0.05 }],
                [P("method", "z-test", "$z = \\frac{0.44 - 0.5}{\\sqrt{0.25/500}} = \\frac{-0.06}{0.0224}$.")],
                [S("$z \\approx -2.68$ — about $2.7$ SDs below the null.", 1, "M"), S("$z = -2.68$.", 1, "B")], "$-2.68$", ["Using $\\hat{p}$ in the SE instead of $p_0$."]),
              op("challenge", 3, "A drug trial: $n = 200$ patients, $38$ recover vs expected $30$ under standard care ($p_0 = 0.15$). Test $H_0: p = 0.15$ vs $H_a: p > 0.15$ at $\\alpha = 0.05$. State conclusions.",
                [P("method", "z-test", "$\\hat{p} = 0.19$; $z = \\frac{0.19 - 0.15}{\\sqrt{0.15 \\times 0.85/200}}$.")],
                [S("$SE = \\sqrt{0.0006375} \\approx 0.0252$; $z = \\frac{0.04}{0.0252} \\approx 1.59$; p-value $\\approx 0.056$.", 1, "M"), S("P-value $0.056 > 0.05$ — fail to reject $H_0$ at the $5\\%$ level.", 1, "M"), S("Conclusion: insufficient evidence the drug beats standard care, though result is marginal.", 1, "R")], "Fail to reject $H_0$ (p $\\approx 0.056$)", ["Rounding the p-value down to $0.05$ and rejecting prematurely."]),
            ],
          }),
        lesson("errors-types", "Errors, Power, and Comparing Distributions", "I CAN distinguish Type I/II errors and explain power and bias.", ["INF-3"],
          [["Type I error", "Rejecting $H_0$ when it is true — false positive; probability $= \\alpha$."], ["Type II error", "Failing to reject $H_0$ when $H_a$ is true — false negative; probability $= \\beta$."], ["Power", "$1 - \\beta$ — probability of correctly rejecting a false $H_0$."], ["Bias", "Systematic error in sampling that distorts results, e.g., voluntary response bias."], ["Random sampling", "Every individual has a known, nonzero chance of selection — basis of inference."]],
          {
            title: "Errors and inference conditions",
            skill: "Identify error types and evaluate study design.",
            sections: [
              ["Error trade-off", "Type I ($\\alpha$) is controlled by the significance level; Type II ($\\beta$) shrinks as sample size grows. **Power** $= 1 - \\beta$ increases with larger $n$ and larger true effects. You cannot make both error rates arbitrarily small — there's always a trade-off."],
              ["Bias and design", "Inference requires **random sampling** and honest response. Convenience samples, voluntary response, and leading questions introduce bias that no sample size fixes. A well-designed experiment controls confounding through randomization."],
            ],
            formulas: [
              ["Power", "$\\text{Power} = 1 - \\beta = P(\\text{reject } H_0 \\mid H_a \\text{ true})$"],
              ["Error rates", "$\\alpha = P(\\text{Type I})$, $\\beta = P(\\text{Type II})$"],
            ],
            worked: {
              problem: "A test has $\\alpha = 0.05$ and $\\beta = 0.20$. What is its power?",
              solution: "Power $= 1 - \\beta = 1 - 0.20 = 0.80$ — an $80\\%$ chance of detecting a real effect.",
            },
            questions: [
              mcq("foundation", 1, "Rejecting a true null hypothesis is a ___.", [["a", "Type II error"], ["b", "Type I error"], ["c", "correct decision"], ["d", "power"]], "b",
                [P("definition", "Type I error", "False rejection of $H_0$.")],
                [S("Type I = rejecting $H_0$ when it's actually true; its probability is $\\alpha$.", 1, "M")], "Type I error", ["Swapping Type I and Type II."]),
              mcq("core", 1, "Increasing sample size generally ___.", [["a", "increases both error rates"], ["b", "decreases $\\beta$ and increases power"], ["c", "increases $\\alpha$"], ["d", "has no effect on errors"]], "b",
                [P("concept", "Power", "Larger $n$ shrinks standard errors, detecting smaller effects.")],
                [S("More data reduces Type II error and raises power; $\\alpha$ stays fixed by choice.", 1, "M")], "(b)", ["Thinking bigger samples raise the false-positive rate."]),
              num("core", 2, "A test has $\\beta = 0.15$. What is its power? Enter the value.", [{ label: "Power", answer: 0.85 }],
                [P("method", "Power", "$1 - \\beta$.")],
                [S("Power $= 1 - 0.15 = 0.85$.", 1, "M"), S("$0.85$.", 1, "B")], "$0.85$", ["Reporting $\\beta$ instead of power."]),
              op("challenge", 3, "A website asks visitors 'Don't you agree our product is the best?' and reports $90\\%$ approval. Identify the bias and explain why the result is unreliable.",
                [P("concept", "Response bias", "Leading question pushes yes answers."), P("concept", "Voluntary response", "Only motivated visitors respond.")],
                [S("The question is leading — it pressures agreement, inflating approval.", 1, "M"), S("Voluntary response bias: only people with strong opinions (likely fans) bother answering.", 1, "M"), S("Result is unreliable; a random sample with neutral wording is needed.", 1, "R")], "Leading question + voluntary response bias", ["Accepting the $90\\%$ at face value."]),
            ],
          }),
      ],
    },
  ],
};

module.exports = { courses: [apStats] };
