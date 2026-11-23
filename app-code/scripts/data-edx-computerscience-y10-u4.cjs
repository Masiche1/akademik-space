module.exports = [
  {
    file: "lesson-4-1.ts",
    exportName: "lesson41",
    lesson: {
      id: "ecs10-u4-lesson-4-1",
      code: "4-1",
      title: "Truth Tables and Boolean Operators",
      goal: "I CAN construct truth tables for Boolean operators and evaluate compound expressions.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — computational thinking and programming",
        "4CP1 Boolean logic: operators, truth tables and precedence",
      ],
      vocabulary: [
        { term: "Boolean value", definition: "A value that is either TRUE or FALSE." },
        { term: "Boolean variable", definition: "A named value that can be TRUE or FALSE, such as A or isRaining." },
        { term: "Truth table", definition: "A table listing every possible input combination and the resulting output." },
        { term: "NOT", definition: "Unary operator that reverses a Boolean value: NOT TRUE is FALSE." },
        { term: "AND", definition: "Binary operator that is TRUE only when both inputs are TRUE." },
        { term: "OR", definition: "Binary operator that is TRUE when at least one input is TRUE." },
        { term: "XOR", definition: "Binary operator that is TRUE when the inputs are different." },
      ],
      concepts: [
        {
          id: "ecs10-u4-operators-tables",
          title: "Boolean operators and truth tables",
          skill: "Build truth tables for NOT, AND, OR and XOR and read output rows correctly.",
          sections: [
            {
              heading: "Boolean values",
              body: "A Boolean value is either **TRUE** or **FALSE**. In programming, variables such as `isLoggedIn`, `hasPassed` or `alarmOn` store Boolean values. Conditions in `IF` statements usually produce Boolean results.\n\nA **truth table** lists every possible combination of inputs and the output produced by an operator or expression. For two inputs A and B there are four rows; for three inputs there are eight rows.",
            },
            {
              heading: "Core operators",
              body: "**NOT A** reverses the value. **A AND B** is TRUE only when both A and B are TRUE. **A OR B** is TRUE when at least one input is TRUE. **A XOR B** is TRUE when exactly one input is TRUE, so the inputs must differ.\n\nWhen an expression has several operators, evaluate **parentheses first**, then NOT, then AND, then OR. Always state the convention if a question gives a different order.",
            },
          ],
          keyFormulas: [
            { name: "NOT", statement: "NOT TRUE = FALSE and NOT FALSE = TRUE" },
            { name: "AND", statement: "A AND B is TRUE only when A = TRUE and B = TRUE" },
            { name: "OR", statement: "A OR B is TRUE when A = TRUE or B = TRUE or both are TRUE" },
            { name: "XOR", statement: "A XOR B is TRUE when A and B are different" },
            { name: "Truth-table size", statement: "n Boolean inputs give 2^n rows" },
          ],
          workedExample: {
            problem: "Evaluate NOT A OR (B AND C) when A = FALSE, B = TRUE and C = FALSE.",
            solution: "A AND part first inside parentheses: B AND C = TRUE AND FALSE = FALSE. NOT A = NOT FALSE = TRUE. Final result: TRUE OR FALSE = TRUE.",
          },
          questions: [
            {
              id: "ecs10-u4-operators-tables-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which Boolean operator gives TRUE only when both inputs are TRUE?",
              response: { type: "mcq", choices: [
                { id: "a", text: "OR" },
                { id: "b", text: "AND" },
                { id: "c", text: "NOT" },
                { id: "d", text: "XOR" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "AND", statement: "TRUE only when both inputs are TRUE." }],
                steps: [{ reasoning: "AND requires both inputs to be TRUE; OR needs only one and XOR needs different inputs.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) AND",
                commonErrors: ["Confusing AND with OR because both can produce TRUE."],
              },
            },
            {
              id: "ecs10-u4-operators-tables-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "How many rows are needed in a truth table for the expression A AND B AND C?",
              response: { type: "numeric", parts: [{ label: "rows", answer: 8 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Truth-table size", statement: "n inputs produce 2^n rows." }],
                steps: [
                  { reasoning: "There are three Boolean inputs: A, B and C.", marks: 1, markCode: "M" },
                  { reasoning: "Rows = 2^3 = 8.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "8 rows",
              },
            },
            {
              id: "ecs10-u4-operators-tables-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Evaluate NOT (A AND B) OR C when A = TRUE, B = FALSE and C = TRUE. Show each intermediate result.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Operator precedence", statement: "Parentheses, then NOT, then AND, then OR." }],
                steps: [
                  { reasoning: "Inside the parentheses: A AND B = TRUE AND FALSE = FALSE.", marks: 1, markCode: "M" },
                  { reasoning: "NOT (FALSE) = TRUE.", marks: 1, markCode: "M" },
                  { reasoning: "TRUE OR C, and C = TRUE, so the result is TRUE.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "TRUE",
                commonErrors: ["Evaluating OR before AND or forgetting that parentheses are evaluated first."],
              },
            },
            {
              id: "ecs10-u4-operators-tables-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "Consider the expression A XOR B.",
              parts: [
                { label: "a", prompt: "State what a truth table is used for.", marks: 2 },
                { label: "b", prompt: "Give the output of A XOR B when A = TRUE and B = FALSE.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Truth table", statement: "Lists all input combinations and outputs." }],
                steps: [
                  { part: "a", reasoning: "A truth table shows every possible combination of input values.", marks: 1, markCode: "B" },
                  { part: "a", reasoning: "It records the output produced for each combination, so behaviour can be checked systematically.", marks: 1, markCode: "B" },
                  { part: "b", reasoning: "XOR is TRUE when the inputs are different.", marks: 1, markCode: "B" },
                  { part: "b", reasoning: "TRUE and FALSE are different, so A XOR B = TRUE.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) systematic input-output table (b) TRUE",
              },
            },
            {
              id: "ecs10-u4-operators-tables-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Let A = FALSE, B = TRUE and C = TRUE. Evaluate each expression.",
              parts: [
                { label: "a", prompt: "A OR (NOT B AND C)", marks: 2 },
                { label: "b", prompt: "(A OR B) AND NOT C", marks: 2 },
                { label: "c", prompt: "A XOR B XOR C", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Compound evaluation", statement: "Apply parentheses and operator precedence step by step." }],
                steps: [
                  { part: "a", reasoning: "NOT B = FALSE; FALSE AND C = FALSE; A OR FALSE = FALSE OR FALSE = FALSE.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "A OR B = TRUE; NOT C = FALSE; TRUE AND FALSE = FALSE.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Using left-to-right XOR: A XOR B = TRUE, then TRUE XOR C(TRUE) = FALSE.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "(a) FALSE (b) FALSE (c) FALSE",
                commonErrors: ["Treating XOR as OR; XOR is TRUE only when inputs differ."],
              },
            },
            {
              id: "ecs10-u4-operators-tables-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A school door alarm has three Boolean inputs: doorOpen, motionDetected and systemEnabled. The alarm should sound only when the system is enabled AND the door is closed AND motion is detected.",
              parts: [
                { label: "a", prompt: "Name the three Boolean variables and state what TRUE means for each.", marks: 3 },
                { label: "b", prompt: "Write a Boolean expression for alarmOn.", marks: 3 },
                { label: "c", prompt: "Evaluate alarmOn when systemEnabled = TRUE, doorOpen = FALSE and motionDetected = TRUE.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Boolean modelling", statement: "Real conditions can be represented by Boolean variables and operators." }],
                steps: [
                  { part: "a", reasoning: "doorOpen TRUE means the door is open; motionDetected TRUE means movement is detected; systemEnabled TRUE means the alarm system is active.", marks: 3, markCode: "B" },
                  { part: "b", reasoning: "Alarm requires enabled AND not door open AND motion: alarmOn = systemEnabled AND NOT doorOpen AND motionDetected.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "NOT doorOpen = NOT FALSE = TRUE; TRUE AND TRUE AND TRUE = TRUE, so the alarm sounds.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "alarmOn = systemEnabled AND NOT doorOpen AND motionDetected; evaluated TRUE",
                commonErrors: ["Using doorOpen instead of NOT doorOpen, which would sound the alarm when the door is open rather than closed."],
              },
            },
          ],
        },
        {
          id: "ecs10-u4-expression-eval",
          title: "Precedence and compound expressions",
          skill: "Apply precedence rules and parentheses to evaluate multi-operator Boolean expressions.",
          sections: [
            {
              heading: "Order of evaluation",
              body: "Without parentheses, a standard convention is: **parentheses first**, then **NOT**, then **AND**, then **OR**. Some courses place XOR with OR; in an exam, follow the stated rule or write parentheses to remove ambiguity.\n\nParentheses are the safest way to make an expression unambiguous. For example, `A OR B AND C` can be misread, whereas `A OR (B AND C)` is explicit.",
            },
            {
              heading: "Checking expressions",
              body: "To check an expression, substitute one input combination at a time and record intermediate results. A useful method is to underline or rewrite each operator result before moving to the next operator.\n\nEquivalent expressions can be compared by building truth tables. If two expressions have identical output columns, they are equivalent.",
            },
          ],
          keyFormulas: [
            { name: "Precedence", statement: "parentheses → NOT → AND → OR" },
            { name: "Substitution", statement: "replace each variable with TRUE or FALSE, then evaluate operators" },
            { name: "Equivalence", statement: "two expressions are equivalent when every truth-table row matches" },
          ],
          workedExample: {
            problem: "Evaluate (NOT A OR B) AND C for A = TRUE, B = FALSE, C = TRUE.",
            solution: "NOT A = FALSE. FALSE OR B(FALSE) = FALSE. Then FALSE AND C(TRUE) = FALSE.",
          },
          questions: [
            {
              id: "ecs10-u4-expression-eval-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "In the expression A OR B AND C, which operator should normally be evaluated first?",
              response: { type: "mcq", choices: [
                { id: "a", text: "OR" },
                { id: "b", text: "AND" },
                { id: "c", text: "A OR B first from left to right" },
                { id: "d", text: "C first" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "Precedence", statement: "AND has higher precedence than OR." }],
                steps: [{ reasoning: "Under the usual convention, AND is evaluated before OR.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) AND",
              },
            },
            {
              id: "ecs10-u4-expression-eval-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Evaluate NOT FALSE AND TRUE. Give the final Boolean value.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Substitution", statement: "Evaluate NOT before AND." }],
                steps: [
                  { reasoning: "NOT FALSE = TRUE.", marks: 1, markCode: "M" },
                  { reasoning: "TRUE AND TRUE = TRUE.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "TRUE",
              },
            },
            {
              id: "ecs10-u4-expression-eval-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Evaluate A OR NOT B AND C for A = FALSE, B = TRUE, C = FALSE. Show intermediate values.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Precedence", statement: "NOT, then AND, then OR." }],
                steps: [
                  { reasoning: "NOT B = NOT TRUE = FALSE.", marks: 1, markCode: "M" },
                  { reasoning: "FALSE AND C(FALSE) = FALSE.", marks: 1, markCode: "M" },
                  { reasoning: "A(FALSE) OR FALSE = FALSE.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "FALSE",
                commonErrors: ["Computing A OR NOT B before AND C, which changes the meaning."],
              },
            },
            {
              id: "ecs10-u4-expression-eval-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "Two students evaluate X AND Y OR Z.",
              parts: [
                { label: "a", prompt: "State the standard precedence that removes ambiguity.", marks: 2 },
                { label: "b", prompt: "Rewrite the expression with parentheses to show that precedence.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Explicit precedence", statement: "Parentheses make evaluation order clear." }],
                steps: [
                  { part: "a", reasoning: "AND is evaluated before OR under the usual Boolean precedence convention.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "The equivalent explicit form is (X AND Y) OR Z.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "(X AND Y) OR Z",
              },
            },
            {
              id: "ecs10-u4-expression-eval-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Let P = TRUE, Q = FALSE and R = TRUE. Evaluate each expression.",
              parts: [
                { label: "a", prompt: "NOT (P OR Q) AND R", marks: 2 },
                { label: "b", prompt: "(P XOR Q) OR (Q AND R)", marks: 2 },
                { label: "c", prompt: "P AND NOT (Q OR R)", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Parentheses and precedence", statement: "Evaluate inside brackets before applying outer operators." }],
                steps: [
                  { part: "a", reasoning: "P OR Q = TRUE; NOT TRUE = FALSE; FALSE AND R = FALSE.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "P XOR Q = TRUE; Q AND R = FALSE; TRUE OR FALSE = TRUE.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Q OR R = TRUE; NOT TRUE = FALSE; P AND FALSE = FALSE.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "(a) FALSE (b) TRUE (c) FALSE",
              },
            },
            {
              id: "ecs10-u4-expression-eval-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A factory machine stops when emergencyStop is TRUE OR when (powerOn is FALSE AND guardClosed is FALSE).",
              parts: [
                { label: "a", prompt: "Define variables for emergencyStop, powerOn and guardClosed.", marks: 3 },
                { label: "b", prompt: "Write a Boolean expression for machineStopped.", marks: 3 },
                { label: "c", prompt: "Evaluate machineStopped for emergencyStop = FALSE, powerOn = TRUE and guardClosed = FALSE.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Boolean modelling", statement: "Conditions in control systems can be expressed using Boolean operators." }],
                steps: [
                  { part: "a", reasoning: "emergencyStop TRUE means the emergency stop is pressed; powerOn TRUE means power is available; guardClosed TRUE means the guard is closed.", marks: 3, markCode: "B" },
                  { part: "b", reasoning: "machineStopped = emergencyStop OR (NOT powerOn AND NOT guardClosed).", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "NOT powerOn = FALSE and NOT guardClosed = TRUE, so the second term is FALSE; emergencyStop is FALSE, so machineStopped = FALSE.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "machineStopped = emergencyStop OR (NOT powerOn AND NOT guardClosed); evaluated FALSE",
                commonErrors: ["Writing powerOn AND guardClosed instead of NOT powerOn AND NOT guardClosed."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u4-lesson-4-1-notes",
      title: "Truth tables and Boolean operators — notes",
      summary: "Boolean values are TRUE or FALSE; truth tables list all input combinations and outputs.",
      sections: [
        { heading: "Key operators", body: "NOT reverses a value. AND needs both inputs TRUE. OR needs at least one TRUE. XOR needs different inputs." },
        { heading: "Precedence", body: "Use parentheses first, then NOT, then AND, then OR. Parentheses remove ambiguity." },
        { heading: "Check method", body: "Substitute values one row at a time and record each intermediate result." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts",
    exportName: "lesson42",
    lesson: {
      id: "ecs10-u4-lesson-4-2",
      code: "4-2",
      title: "Logic Gates and Circuits",
      goal: "I CAN interpret logic gates, derive Boolean expressions from circuits and predict circuit outputs.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — computational thinking and programming",
        "4CP1 Boolean logic: logic gates and circuits",
      ],
      vocabulary: [
        { term: "Logic gate", definition: "A physical or symbolic device that performs a Boolean operation on one or two inputs." },
        { term: "NOT gate", definition: "A gate with one input whose output is the opposite Boolean value." },
        { term: "AND gate", definition: "A gate whose output is TRUE only when both inputs are TRUE." },
        { term: "OR gate", definition: "A gate whose output is TRUE when at least one input is TRUE." },
        { term: "XOR gate", definition: "A gate whose output is TRUE when its inputs are different." },
        { term: "Logic circuit", definition: "A network of logic gates connected so outputs become inputs to later gates." },
      ],
      concepts: [
        {
          id: "ecs10-u4-gate-functions",
          title: "Logic gate functions",
          skill: "Identify NOT, AND, OR and XOR gates and predict their outputs from input values.",
          sections: [
            {
              heading: "Gate symbols and functions",
              body: "A **NOT gate** has one input and one output and inverts the signal. An **AND gate** has two inputs and outputs TRUE only when both inputs are TRUE. An **OR gate** outputs TRUE when at least one input is TRUE. An **XOR gate** outputs TRUE when exactly one input is TRUE.\n\nGate symbols are drawn as distinctive shapes, but the function is what matters: match the gate to its truth table before predicting an output.",
            },
            {
              heading: "Inputs and outputs",
              body: "In a circuit, each wire carries a Boolean value. Label every wire or node with a variable such as A, B or X so intermediate results can be tracked. The final output is the value at the last gate.\n\nWhen several gates are present, evaluate from the inputs towards the output, recording each gate result. Do not guess the output before the intermediate values are known.",
            },
          ],
          keyFormulas: [
            { name: "NOT gate", statement: "output = NOT input" },
            { name: "AND gate", statement: "output = input1 AND input2" },
            { name: "OR gate", statement: "output = input1 OR input2" },
            { name: "XOR gate", statement: "output = TRUE when inputs differ" },
          ],
          workedExample: {
            problem: "A circuit has inputs A = TRUE and B = FALSE feeding an XOR gate, then a NOT gate. Find the output.",
            solution: "XOR: TRUE XOR FALSE = TRUE because the inputs differ. NOT TRUE = FALSE. Final output = FALSE.",
          },
          questions: [
            {
              id: "ecs10-u4-gate-functions-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which gate has only one input and reverses its Boolean value?",
              response: { type: "mcq", choices: [
                { id: "a", text: "AND" },
                { id: "b", text: "OR" },
                { id: "c", text: "NOT" },
                { id: "d", text: "XOR" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "NOT gate", statement: "One input; output is the inverse." }],
                steps: [{ reasoning: "NOT is the only one-input inverter; AND, OR and XOR are two-input gates.", marks: 1, markCode: "B" }],
                finalAnswer: "(c) NOT",
              },
            },
            {
              id: "ecs10-u4-gate-functions-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "An AND gate has inputs TRUE and FALSE. State the output.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "AND gate", statement: "Output TRUE only when both inputs are TRUE." }],
                steps: [
                  { reasoning: "AND needs both inputs TRUE.", marks: 1, markCode: "B" },
                  { reasoning: "One input is FALSE, so output = FALSE.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "FALSE",
              },
            },
            {
              id: "ecs10-u4-gate-functions-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Inputs A = TRUE, B = TRUE and C = FALSE feed a circuit: first A OR B, then that result AND C. Find the final output.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Circuit evaluation", statement: "Evaluate each gate from inputs to output." }],
                steps: [
                  { reasoning: "First gate: A OR B = TRUE OR TRUE = TRUE.", marks: 1, markCode: "M" },
                  { reasoning: "Second gate uses TRUE and C = FALSE.", marks: 1, markCode: "M" },
                  { reasoning: "TRUE AND FALSE = FALSE.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "FALSE",
              },
            },
            {
              id: "ecs10-u4-gate-functions-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A NOT gate is followed by an OR gate.",
              parts: [
                { label: "a", prompt: "State the function of each gate.", marks: 2 },
                { label: "b", prompt: "If the NOT gate input is FALSE and the other OR input is FALSE, find the output.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Gate functions", statement: "NOT inverts; OR outputs TRUE if any input is TRUE." }],
                steps: [
                  { part: "a", reasoning: "NOT reverses its input; OR outputs TRUE when at least one input is TRUE.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "NOT FALSE = TRUE; TRUE OR FALSE = TRUE.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "NOT inverts; OR gives TRUE if any input is TRUE; output TRUE",
              },
            },
            {
              id: "ecs10-u4-gate-functions-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A circuit uses inputs P and Q. Gate 1 is P XOR Q. Gate 2 is NOT Gate 1. Gate 3 is Gate 2 OR Q.",
              parts: [
                { label: "a", prompt: "Find Gate 1 when P = TRUE and Q = TRUE.", marks: 2 },
                { label: "b", prompt: "Find Gate 2 for the same inputs.", marks: 2 },
                { label: "c", prompt: "Find the final output at Gate 3.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Sequential gate evaluation", statement: "Use each gate output as the next input." }],
                steps: [
                  { part: "a", reasoning: "P XOR Q with TRUE and TRUE: inputs are the same, so XOR = FALSE.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Gate 2 = NOT FALSE = TRUE.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Gate 3 = TRUE OR Q(TRUE) = TRUE.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Gate1 FALSE, Gate2 TRUE, output TRUE",
              },
            },
            {
              id: "ecs10-u4-gate-functions-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A security light has inputs motion and darkness. It turns on when motion is detected AND it is dark. The light also has an override input that forces the light on when TRUE.",
              parts: [
                { label: "a", prompt: "Choose appropriate gate types for the two conditions and justify each choice.", marks: 3 },
                { label: "b", prompt: "Write a Boolean expression for lightOn.", marks: 3 },
                { label: "c", prompt: "Evaluate lightOn when motion = TRUE, darkness = TRUE and override = FALSE.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Gate selection", statement: "Choose gates whose truth tables match the required condition." }],
                steps: [
                  { part: "a", reasoning: "Use AND for motion AND darkness because both must be TRUE; use OR for override because override alone can turn the light on.", marks: 3, markCode: "B" },
                  { part: "b", reasoning: "lightOn = override OR (motion AND darkness).", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "motion AND darkness = TRUE; override OR TRUE = TRUE, so lightOn = TRUE.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "lightOn = override OR (motion AND darkness); evaluated TRUE",
                commonErrors: ["Using OR between motion and darkness, which would light the lamp in daylight motion or darkness without motion."],
              },
            },
          ],
        },
        {
          id: "ecs10-u4-circuit-expressions",
          title: "Circuits and Boolean expressions",
          skill: "Derive Boolean expressions from logic circuits and design circuits for required expressions.",
          sections: [
            {
              heading: "From circuit to expression",
              body: "Label each gate output with a temporary variable, working from inputs to the final output. Replace each gate by the Boolean operator it performs. For example, an AND gate becomes `AND`, an OR gate becomes `OR` and a NOT gate becomes `NOT`.\n\nIf a gate output feeds more than one later gate, keep the same temporary label so the expression remains consistent.",
            },
            {
              heading: "From expression to circuit",
              body: "Start with the innermost operator or the operator with highest precedence. Draw the corresponding gate, connect the required inputs, then use its output as an input to the next gate. Use NOT gates wherever `NOT` appears.\n\nCheck the circuit by choosing at least two input combinations and comparing the output with the expression evaluated directly.",
            },
          ],
          keyFormulas: [
            { name: "Gate to operator", statement: "AND gate → AND, OR gate → OR, NOT gate → NOT, XOR gate → XOR" },
            { name: "Circuit expression", statement: "label intermediate wires, then substitute gate operators" },
            { name: "Verification", statement: "test at least two input combinations" },
          ],
          workedExample: {
            problem: "A circuit computes (A AND B) OR NOT C. Find the output for A = TRUE, B = FALSE, C = FALSE.",
            solution: "A AND B = TRUE AND FALSE = FALSE. NOT C = NOT FALSE = TRUE. FALSE OR TRUE = TRUE.",
          },
          questions: [
            {
              id: "ecs10-u4-circuit-expressions-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "A circuit contains an AND gate followed by an OR gate. Which Boolean operator is applied first if both gates use the same two inputs independently?",
              response: { type: "mcq", choices: [
                { id: "a", text: "OR" },
                { id: "b", text: "AND" },
                { id: "c", text: "NOT" },
                { id: "d", text: "XOR" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "Precedence", statement: "AND has higher precedence than OR." }],
                steps: [{ reasoning: "In Boolean precedence, AND is evaluated before OR.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) AND",
              },
            },
            {
              id: "ecs10-u4-circuit-expressions-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Write the Boolean expression for a circuit with inputs A and B joined by an OR gate, then NOT applied to the result.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Circuit to expression", statement: "Replace each gate by its operator." }],
                steps: [
                  { reasoning: "OR gate gives A OR B.", marks: 1, markCode: "M" },
                  { reasoning: "NOT gate gives NOT (A OR B).", marks: 1, markCode: "M" },
                ],
                finalAnswer: "NOT (A OR B)",
              },
            },
            {
              id: "ecs10-u4-circuit-expressions-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A circuit computes NOT A AND (B OR C). Evaluate it for A = FALSE, B = FALSE, C = TRUE.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Circuit evaluation", statement: "Evaluate sub-expressions before combining." }],
                steps: [
                  { reasoning: "NOT A = NOT FALSE = TRUE.", marks: 1, markCode: "M" },
                  { reasoning: "B OR C = FALSE OR TRUE = TRUE.", marks: 1, markCode: "M" },
                  { reasoning: "TRUE AND TRUE = TRUE.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "TRUE",
              },
            },
            {
              id: "ecs10-u4-circuit-expressions-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "An expression is (X OR Y) AND NOT Z.",
              parts: [
                { label: "a", prompt: "State which gate should be used for each operator.", marks: 2 },
                { label: "b", prompt: "State the order in which gates should be evaluated conceptually.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Expression to circuit", statement: "Map operators to gates and respect precedence." }],
                steps: [
                  { part: "a", reasoning: "OR uses an OR gate, AND uses an AND gate and NOT uses a NOT gate.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "First evaluate X OR Y and NOT Z, then combine those results with AND.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "OR gate, NOT gate, then AND gate",
              },
            },
            {
              id: "ecs10-u4-circuit-expressions-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A circuit has inputs A and B. Gate 1 computes A AND B. Gate 2 computes A OR B. Gate 3 computes Gate1 XOR Gate2.",
              parts: [
                { label: "a", prompt: "Write the Boolean expression for the circuit.", marks: 2 },
                { label: "b", prompt: "Evaluate the expression for A = TRUE and B = FALSE.", marks: 2 },
                { label: "c", prompt: "State whether the circuit output is TRUE or FALSE and justify it.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Circuit analysis", statement: "Derive expression, substitute values, then interpret result." }],
                steps: [
                  { part: "a", reasoning: "Expression: (A AND B) XOR (A OR B).", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "A AND B = FALSE; A OR B = TRUE; FALSE XOR TRUE = TRUE.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Output is TRUE because XOR is TRUE when its two inputs differ.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "(A AND B) XOR (A OR B); output TRUE",
              },
            },
            {
              id: "ecs10-u4-circuit-expressions-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "Design a circuit for a two-person door entry system. The door opens only when both badges are present AND the door is not already open. An emergency release can open the door regardless.",
              parts: [
                { label: "a", prompt: "Define Boolean variables for badge1, badge2, doorAlreadyOpen and emergencyRelease.", marks: 3 },
                { label: "b", prompt: "Write the Boolean expression for doorOpen.", marks: 3 },
                { label: "c", prompt: "Evaluate doorOpen when badge1 = TRUE, badge2 = TRUE, doorAlreadyOpen = FALSE and emergencyRelease = FALSE.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Control logic design", statement: "Combine required conditions with AND/OR/NOT to model a system." }],
                steps: [
                  { part: "a", reasoning: "badge1/badge2 TRUE means that badge is presented; doorAlreadyOpen TRUE means the door is already open; emergencyRelease TRUE means the emergency release is active.", marks: 3, markCode: "B" },
                  { part: "b", reasoning: "doorOpen = emergencyRelease OR (badge1 AND badge2 AND NOT doorAlreadyOpen).", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "badge1 AND badge2 AND NOT doorAlreadyOpen = TRUE; emergencyRelease OR TRUE = TRUE.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "doorOpen = emergencyRelease OR (badge1 AND badge2 AND NOT doorAlreadyOpen); evaluated TRUE",
                commonErrors: ["Forgetting NOT doorAlreadyOpen, which could keep the door closed when it is already open."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u4-lesson-4-2-notes",
      title: "Logic gates and circuits — notes",
      summary: "Logic gates implement Boolean operators; circuits combine gates so outputs feed later inputs.",
      sections: [
        { heading: "Gate functions", body: "NOT inverts one input. AND needs both TRUE. OR needs any TRUE. XOR needs different inputs." },
        { heading: "Circuit method", body: "Label intermediate wires, replace gates with operators, then evaluate from inputs to output." },
        { heading: "Design check", body: "Build the expression from the required condition, then test at least two input combinations." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts",
    exportName: "lesson43",
    lesson: {
      id: "ecs10-u4-lesson-4-3",
      code: "4-3",
      title: "Boolean Laws and Applications",
      goal: "I CAN simplify Boolean expressions using laws and apply logic to real control systems.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — computational thinking and programming",
        "4CP1 Boolean logic: laws, simplification and applications",
      ],
      vocabulary: [
        { term: "Boolean identity", definition: "A law that keeps an expression unchanged, such as A AND TRUE = A." },
        { term: "Commutative law", definition: "Changing input order does not change the result: A AND B = B AND A." },
        { term: "Associative law", definition: "Grouping does not change the result: (A AND B) AND C = A AND (B AND C)." },
        { term: "Distributive law", definition: "A AND (B OR C) = (A AND B) OR (A AND C)." },
        { term: "De Morgan's laws", definition: "NOT (A AND B) = NOT A OR NOT B and NOT (A OR B) = NOT A AND NOT B." },
        { term: "Equivalent expressions", definition: "Expressions with identical outputs for every input combination." },
      ],
      concepts: [
        {
          id: "ecs10-u4-boolean-laws",
          title: "Boolean laws and simplification",
          skill: "Use Boolean identities, commutative, associative, distributive and De Morgan laws to simplify expressions.",
          sections: [
            {
              heading: "Useful laws",
              body: "Identities include `A AND TRUE = A`, `A OR FALSE = A`, `A AND FALSE = FALSE` and `A OR TRUE = TRUE`. The commutative law allows `A AND B = B AND A`; the associative law allows regrouping. The distributive law expands `A AND (B OR C)` into `(A AND B) OR (A AND C)`.\n\n**De Morgan's laws** are especially useful: `NOT (A AND B) = NOT A OR NOT B` and `NOT (A OR B) = NOT A AND NOT B`. They let a NOT be moved through AND/OR while changing the operator.",
            },
            {
              heading: "Proving equivalence",
              body: "Two expressions are equivalent when their truth tables match for every input combination. A quick check is to test the row that is most likely to differ, but a full truth table is the safe proof for an exam.\n\nSimplification should preserve meaning. Always substitute the original and simplified expressions for the same inputs before claiming they are equivalent.",
            },
          ],
          keyFormulas: [
            { name: "Identities", statement: "A AND TRUE = A; A OR FALSE = A; A AND FALSE = FALSE; A OR TRUE = TRUE" },
            { name: "Commutative", statement: "A AND B = B AND A; A OR B = B OR A" },
            { name: "Distributive", statement: "A AND (B OR C) = (A AND B) OR (A AND C)" },
            { name: "De Morgan", statement: "NOT (A AND B) = NOT A OR NOT B; NOT (A OR B) = NOT A AND NOT B" },
          ],
          workedExample: {
            problem: "Simplify NOT (A OR B) using De Morgan's law.",
            solution: "NOT (A OR B) = NOT A AND NOT B. The OR becomes AND and each input is negated.",
          },
          questions: [
            {
              id: "ecs10-u4-boolean-laws-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which law states that A AND B = B AND A?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Associative law" },
                { id: "b", text: "Commutative law" },
                { id: "c", text: "Distributive law" },
                { id: "d", text: "De Morgan's law" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Commutative law", statement: "Changing input order does not change the result." }],
                steps: [{ reasoning: "Swapping A and B without changing parentheses is the commutative law.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) Commutative law",
              },
            },
            {
              id: "ecs10-u4-boolean-laws-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Simplify A OR FALSE.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "OR identity", statement: "A OR FALSE = A." }],
                steps: [
                  { reasoning: "OR with FALSE leaves the other input unchanged.", marks: 1, markCode: "B" },
                  { reasoning: "Therefore A OR FALSE = A.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "A",
              },
            },
            {
              id: "ecs10-u4-boolean-laws-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Use De Morgan's law to rewrite NOT (A AND B).",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "law", name: "De Morgan", statement: "NOT (A AND B) = NOT A OR NOT B." }],
                steps: [
                  { reasoning: "Move NOT inside the parentheses.", marks: 1, markCode: "M" },
                  { reasoning: "Change AND to OR.", marks: 1, markCode: "M" },
                  { reasoning: "Negate each input: NOT A OR NOT B.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "NOT A OR NOT B",
              },
            },
            {
              id: "ecs10-u4-boolean-laws-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "Consider the expression A AND (B OR C).",
              parts: [
                { label: "a", prompt: "State the distributive law for AND over OR.", marks: 2 },
                { label: "b", prompt: "Rewrite the expression in expanded form.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "law", name: "Distributive law", statement: "A AND (B OR C) = (A AND B) OR (A AND C)." }],
                steps: [
                  { part: "a", reasoning: "Distribute A across the OR: multiply A by each term inside the bracket.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Expanded form: (A AND B) OR (A AND C).", marks: 2, markCode: "M" },
                ],
                finalAnswer: "(A AND B) OR (A AND C)",
              },
            },
            {
              id: "ecs10-u4-boolean-laws-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Simplify or rewrite each expression.",
              parts: [
                { label: "a", prompt: "A AND TRUE", marks: 2 },
                { label: "b", prompt: "NOT (A OR B)", marks: 2 },
                { label: "c", prompt: "A OR (A AND B)", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Boolean simplification", statement: "Use identities and De Morgan laws without changing meaning." }],
                steps: [
                  { part: "a", reasoning: "A AND TRUE = A by the AND identity.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "By De Morgan, NOT (A OR B) = NOT A AND NOT B.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "If A is TRUE the whole expression is TRUE; if A is FALSE both terms are FALSE, so the expression equals A.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "(a) A (b) NOT A AND NOT B (c) A",
              },
            },
            {
              id: "ecs10-u4-boolean-laws-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A student claims that NOT (A AND B) is always equal to NOT A AND NOT B.",
              parts: [
                { label: "a", prompt: "State the correct De Morgan equivalent of NOT (A AND B).", marks: 3 },
                { label: "b", prompt: "Test the student's claim when A = TRUE and B = FALSE.", marks: 3 },
                { label: "c", prompt: "Explain why a truth table is a reliable way to check equivalence.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "law", name: "De Morgan and equivalence", statement: "Negating a compound changes the operator and negates inputs; equivalence requires identical outputs." }],
                steps: [
                  { part: "a", reasoning: "Correct equivalent: NOT A OR NOT B.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "A AND B = FALSE, so NOT(A AND B)=TRUE; NOT A AND NOT B = FALSE AND TRUE = FALSE, so the claim fails.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "A truth table lists every input combination, so if all output rows match the expressions are equivalent for every possible input.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "NOT (A AND B) = NOT A OR NOT B; the student's claim is false; truth tables prove equivalence.",
                commonErrors: ["Changing AND to AND instead of OR when applying De Morgan."],
              },
            },
          ],
        },
        {
          id: "ecs10-u4-logic-applications",
          title: "Logic in control systems",
          skill: "Apply Boolean logic to alarms, access control, safety interlocks and simple control decisions.",
          sections: [
            {
              heading: "Modelling conditions",
              body: "Real systems often combine several conditions. Define each condition as a Boolean variable, then combine variables with AND when all conditions must be true, OR when any condition can trigger the action, and NOT when a condition must be absent.\n\nExamples: a lift door opens when requested AND the lift is stopped; an alarm sounds when smoke is detected OR heat is excessive; a machine is safe only when power is on AND guard is closed AND emergency stop is not pressed.",
            },
            {
              heading: "Safety and override",
              body: "Safety systems usually give overrides or fail-safe states priority. An emergency stop should force a safe output even if the normal condition would otherwise allow operation. When designing logic, identify which conditions are mandatory and which are exceptions.\n\nAlways evaluate the expression for the most dangerous input combination, not only the normal case.",
            },
          ],
          keyFormulas: [
            { name: "AND condition", statement: "all required conditions must be TRUE" },
            { name: "OR condition", statement: "at least one trigger condition must be TRUE" },
            { name: "NOT condition", statement: "a condition must be FALSE for the output to be TRUE" },
            { name: "Fail-safe", statement: "unsafe or unknown states should produce the safe output" },
          ],
          workedExample: {
            problem: "A furnace ignition requires fuelFlow = TRUE, pilotLit = TRUE and emergencyStop = FALSE. Write the expression.",
            solution: "ignite = fuelFlow AND pilotLit AND NOT emergencyStop.",
          },
          questions: [
            {
              id: "ecs10-u4-logic-applications-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "A machine should run only when power is on AND the guard is closed. Which operator joins the conditions?",
              response: { type: "mcq", choices: [
                { id: "a", text: "OR" },
                { id: "b", text: "AND" },
                { id: "c", text: "NOT" },
                { id: "d", text: "XOR" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "AND condition", statement: "All required conditions must be TRUE." }],
                steps: [{ reasoning: "Both power and guard conditions are required, so AND is used.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) AND",
              },
            },
            {
              id: "ecs10-u4-logic-applications-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "An alarm sounds when smokeDetected OR heatTooHigh is TRUE. State the output when smokeDetected = FALSE and heatTooHigh = TRUE.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "OR trigger", statement: "Any TRUE trigger makes the output TRUE." }],
                steps: [
                  { reasoning: "OR requires at least one TRUE input.", marks: 1, markCode: "B" },
                  { reasoning: "heatTooHigh = TRUE, so alarm = TRUE.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "TRUE",
              },
            },
            {
              id: "ecs10-u4-logic-applications-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A door lock opens when badgeValid = TRUE and doorLocked = FALSE. Write the Boolean expression for doorUnlock.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Boolean modelling", statement: "Combine required conditions with the matching operator." }],
                steps: [
                  { reasoning: "Both badgeValid and NOT doorLocked are required.", marks: 1, markCode: "M" },
                  { reasoning: "Use AND because both conditions must be TRUE.", marks: 1, markCode: "M" },
                  { reasoning: "doorUnlock = badgeValid AND NOT doorLocked.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "badgeValid AND NOT doorLocked",
              },
            },
            {
              id: "ecs10-u4-logic-applications-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A greenhouse heater should be on when temperatureLow = TRUE AND windowOpen = FALSE. A manual override can turn it on at any time.",
              parts: [
                { label: "a", prompt: "Write a Boolean expression for heaterOn.", marks: 2 },
                { label: "b", prompt: "Evaluate heaterOn for temperatureLow = TRUE, windowOpen = TRUE and override = FALSE.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Control expression", statement: "Normal condition OR override." }],
                steps: [
                  { part: "a", reasoning: "heaterOn = override OR (temperatureLow AND NOT windowOpen).", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "NOT windowOpen = FALSE; temperatureLow AND FALSE = FALSE; override OR FALSE = FALSE.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "heaterOn = override OR (temperatureLow AND NOT windowOpen); evaluated FALSE",
              },
            },
            {
              id: "ecs10-u4-logic-applications-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A laboratory fridge alarm should sound if temperatureHigh = TRUE OR doorOpenTooLong = TRUE, but never during maintenanceMode = TRUE.",
              parts: [
                { label: "a", prompt: "Write a Boolean expression for alarmOn.", marks: 2 },
                { label: "b", prompt: "Evaluate alarmOn for temperatureHigh = TRUE, doorOpenTooLong = FALSE and maintenanceMode = FALSE.", marks: 2 },
                { label: "c", prompt: "Evaluate alarmOn for temperatureHigh = TRUE, doorOpenTooLong = TRUE and maintenanceMode = TRUE.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Exception handling", statement: "Maintenance mode suppresses the alarm even when trigger conditions are TRUE." }],
                steps: [
                  { part: "a", reasoning: "alarmOn = NOT maintenanceMode AND (temperatureHigh OR doorOpenTooLong).", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Trigger = TRUE OR FALSE = TRUE; NOT maintenanceMode = TRUE; TRUE AND TRUE = TRUE.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Trigger = TRUE; NOT maintenanceMode = FALSE; FALSE AND TRUE = FALSE.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "alarmOn = NOT maintenanceMode AND (temperatureHigh OR doorOpenTooLong); TRUE then FALSE",
              },
            },
            {
              id: "ecs10-u4-logic-applications-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A lift should move only when requested AND the doors are closed AND it is not overloaded. An emergency stop must prevent movement even if all other conditions are TRUE.",
              parts: [
                { label: "a", prompt: "Define Boolean variables for request, doorsClosed, overloaded and emergencyStop.", marks: 3 },
                { label: "b", prompt: "Write a Boolean expression for liftCanMove.", marks: 3 },
                { label: "c", prompt: "Evaluate liftCanMove for request = TRUE, doorsClosed = TRUE, overloaded = FALSE and emergencyStop = TRUE.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Fail-safe control", statement: "Emergency conditions override normal operating conditions." }],
                steps: [
                  { part: "a", reasoning: "request TRUE means a floor has been requested; doorsClosed TRUE means doors are shut; overloaded TRUE means capacity is exceeded; emergencyStop TRUE means emergency stop is active.", marks: 3, markCode: "B" },
                  { part: "b", reasoning: "liftCanMove = NOT emergencyStop AND request AND doorsClosed AND NOT overloaded.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "NOT emergencyStop = FALSE; FALSE AND any other values = FALSE, so liftCanMove = FALSE.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "liftCanMove = NOT emergencyStop AND request AND doorsClosed AND NOT overloaded; evaluated FALSE",
                commonErrors: ["Allowing emergencyStop to be ignored because the other conditions are TRUE."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u4-lesson-4-3-notes",
      title: "Boolean laws and applications — notes",
      summary: "Boolean laws simplify expressions; real control systems combine conditions with AND, OR and NOT.",
      sections: [
        { heading: "Laws", body: "Identities remove redundant terms; commutative and associative laws reorder safely; distributive and De Morgan laws rewrite expressions." },
        { heading: "Modelling", body: "Use AND for required conditions, OR for alternative triggers and NOT for conditions that must be absent." },
        { heading: "Safety", body: "Check emergency and unsafe states; overrides and fail-safe outputs should take priority." },
      ],
    },
  },
];
