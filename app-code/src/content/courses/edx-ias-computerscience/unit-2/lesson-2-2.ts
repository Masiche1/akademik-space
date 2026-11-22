import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "eiascs-u2-lesson-2-2",
  code: "2-2",
  title: "Variables, Data Types and Operators",
  goal: "I CAN use variables, data types and operators in programming.",
  standards: ["Edexcel IAS Computer Science 9CP01 Unit 2 — Algorithms and Programming"],
  vocabulary: [
    { term: "Variable", definition: "Named storage location for data." },
    { term: "Data type", definition: "Type of data — integer, string, Boolean, real." },
    { term: "Assignment", definition: "Storing value in variable — = operator." },
    { term: "Arithmetic operator", definition: "Math operations — +, -, *, /." },
    { term: "Comparison operator", definition: "Compare values — =, <>, <, >, <=, >=." },
    { term: "Logical operator", definition: "Combine conditions — AND, OR, NOT." },
  ],
  concepts: [
    {
      id: "eiascs-u2-variables",
      title: "Variables and Data Types",
      skill: "Use variables and understand data types.",
      lesson: {
        sections: [
          { heading: "Variables", body: "**Variable**: named storage — `score = 85`. **Naming**: letters, numbers, underscore — can't start with number. **Assignment**: `=` stores value — `x = x + 1` increments.\n\n**Constant**: value doesn't change — `PI = 3.14159`. **Scope**: where variable accessible — local vs global." },
          { heading: "Data types", body: "**Integer**: whole numbers — 42, -7. **Real**: decimals — 3.14, -0.5. **String**: text — 'hello', '123'. **Boolean**: true/false — `isValid = true`. **Char**: single character — 'A'.\n\n**Type matters**: `5 + '3'` error or '53' — depends on language. Convert types when needed." },
        ],
        keyFormulas: [],
        workedExample: { problem: "Store name 'Alice' and age 25. Variables?", solution: "name = 'Alice'; age = 25." },
      },
      questions: [
        {
          id: "eiascs-u2-var-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is a variable?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fixed value" }, { id: "b", text: "Named storage location" },
            { id: "c", text: "Data type" }, { id: "d", text: "Operator" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Variable", statement: "Named storage." }],
            steps: [{ reasoning: "Variable = named storage.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Named storage", commonErrors: ["Constant confused."] },
        },
        {
          id: "eiascs-u2-var-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two data types and examples.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Data types", statement: "Integer, string, Boolean." }],
            steps: [
              { reasoning: "Integer — whole numbers (42).", marks: 1, markCode: "AO2" },
              { reasoning: "String — text ('hello').", marks: 1, markCode: "AO2" },
              { reasoning: "Boolean — true/false.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Integer, string, Boolean, real.", commonErrors: ["Only one.", "Wrong type."] },
        },
        {
          id: "eiascs-u2-var-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why data types matter.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Type importance", statement: "Operations valid." }],
            steps: [
              { reasoning: "Determines valid operations — can't divide string.", marks: 1, markCode: "AO2" },
              { reasoning: "Memory allocation — size depends on type.", marks: 1, markCode: "AO2" },
              { reasoning: "Type checking — catches errors early.", marks: 1, markCode: "AO2" },
              { reasoning: "Conversion — change types when needed.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Operations+memory+checking.", commonErrors: ["No importance.", "One reason."] },
        },
        {
          id: "eiascs-u2-var-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Program: x = 10; y = 3; z = x / y.",
          parts: [
            { label: "a", prompt: "Identify data types.", marks: 4 },
            { label: "b", prompt: "Calculate z value.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Variables in practice", statement: "Types + operations." }],
            steps: [
              { reasoning: "(a) x = integer (10), y = integer (3).", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) z = real/integer depending on division.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) z = 3.33 (real) or 3 (integer division).", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Depends on language — / gives decimal, DIV gives integer.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) integer+real (b) 3.33 or 3", commonErrors: ["Wrong types.", "Wrong value."] },
        },
      ],
    },
    {
      id: "eiascs-u2-operators",
      title: "Operators and Expressions",
      skill: "Use arithmetic, comparison and logical operators.",
      lesson: {
        sections: [
          { heading: "Operator types", body: "**Arithmetic**: +, -, *, /, MOD (remainder), ^ (power). **Comparison**: = (equal), <> (not equal), <, >, <=, >=. **Logical**: AND (both true), OR (either true), NOT (negate).\n\n**Precedence**: order of operations — brackets first, then ^, then * / MOD, then + -, then comparisons, then logical. Example: `2 + 3 * 4 = 14` (not 20)." },
          { heading: "Expressions and conditions", body: "**Expression**: produces value — `x + 5`, `age >= 18`. **Boolean expression**: true/false — `score > 50 AND grade = 'A'`. **Nested conditions**: complex logic — IF A AND B THEN...\n\n**Short-circuit evaluation**: AND stops if first false; OR stops if first true — efficiency." },
        ],
        keyFormulas: [],
        workedExample: { problem: "10 MOD 3 = ?", solution: "1 (remainder)." },
      },
      questions: [
        {
          id: "eiascs-u2-ops-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What does MOD operator do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Divide" }, { id: "b", text: "Find remainder" },
            { id: "c", text: "Multiply" }, { id: "d", text: "Compare" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "MOD", statement: "Remainder." }],
            steps: [{ reasoning: "MOD = remainder.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Remainder", commonErrors: ["Division confused."] },
        },
        {
          id: "eiascs-u2-ops-q2", difficulty: "core", totalMarks: 3,
          stem: "Evaluate: 2 + 3 * 4.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Operator precedence", statement: "Order matters." }],
            steps: [
              { reasoning: "Multiply first: 3 * 4 = 12.", marks: 1, markCode: "AO2" },
              { reasoning: "Then add: 2 + 12 = 14.", marks: 1, markCode: "AO2" },
              { reasoning: "Not (2+3)*4 = 20 — precedence matters.", marks: 1, markCode: "AO2" }],
            finalAnswer: "14.", commonErrors: ["20 — wrong order."] },
        },
        {
          id: "eiascs-u2-ops-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain AND vs OR operators.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "AND vs OR", statement: "Both vs either." }],
            steps: [
              { reasoning: "AND: both conditions must be true.", marks: 1, markCode: "AO2" },
              { reasoning: "OR: at least one condition true.", marks: 1, markCode: "AO2" },
              { reasoning: "Example: age>=18 AND hasID → can enter.", marks: 1, markCode: "AO2" },
              { reasoning: "Example: cash OR card → can pay.", marks: 1, markCode: "AO2" }],
            finalAnswer: "AND=both, OR=either.", commonErrors: ["Same.", "No example."] },
        },
        {
          id: "eiascs-u2-ops-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Condition: pass if score >= 50 AND attendance >= 80%.",
          parts: [
            { label: "a", prompt: "Write Boolean expression.", marks: 4 },
            { label: "b", prompt: "Evaluate for score=60, attendance=75%.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Boolean logic", statement: "AND conditions." }],
            steps: [
              { reasoning: "(a) score >= 50 AND attendance >= 80.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) Both must be true.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) 60>=50 true, 75>=80 false → false AND → false.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Result: fail — attendance too low.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) score>=50 AND attendance>=80 (b) false — fail", commonErrors: ["OR used.", "Wrong result."] },
        },
      ],
    },
    {
      id: "eiascs-u2-control",
      title: "Control Structures",
      skill: "Use IF/ELSE, loops and nested structures in programming.",
      lesson: {
        sections: [
          { heading: "IF/ELSE", body: "**IF condition THEN action**: single branch. **IF/ELSE**: two branches — condition true/false. **ELSE IF**: multiple conditions — check in order.\n\n**Nested IF**: IF inside IF — complex conditions. **Indentation**: shows structure — important for readability." },
          { heading: "Loops", body: "**WHILE**: repeat while condition true — check before each iteration. **UNTIL**: repeat until condition true — check after. **FOR**: repeat fixed times — `FOR i = 1 TO 10`. **Infinite loop**: condition never met — bug.\n\n**Loop variables**: counter — `i = i + 1`. **Accumulator**: sum total — `total = total + value`." },
        ],
        keyFormulas: [],
        workedExample: { problem: "Repeat until user enters 'quit'. Loop type?", solution: "UNTIL or WHILE." },
      },
      questions: [
        {
          id: "eiascs-u2-ctrl-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What does IF/ELSE do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Repeats always" }, { id: "b", text: "Two branches based on condition" },
            { id: "c", text: "Loops forever" }, { id: "d", text: "Stores data" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "IF/ELSE", statement: "Two branches." }],
            steps: [{ reasoning: "IF/ELSE = condition branches.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Two branches", commonErrors: ["Loop confused."] },
        },
        {
          id: "eiascs-u2-ctrl-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two types of loops.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Loop types", statement: "WHILE, UNTIL, FOR." }],
            steps: [
              { reasoning: "WHILE — repeat while condition true.", marks: 1, markCode: "AO2" },
              { reasoning: "UNTIL — repeat until condition met.", marks: 1, markCode: "AO2" },
              { reasoning: "FOR — repeat fixed number of times.", marks: 1, markCode: "AO2" }],
            finalAnswer: "WHILE, UNTIL, FOR.", commonErrors: ["Only one.", "Wrong type."] },
        },
        {
          id: "eiascs-u2-ctrl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain difference between WHILE and UNTIL loops.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "WHILE vs UNTIL", statement: "Check timing." }],
            steps: [
              { reasoning: "WHILE: check condition before each iteration.", marks: 1, markCode: "AO2" },
              { reasoning: "UNTIL: check condition after each iteration.", marks: 1, markCode: "AO2" },
              { reasoning: "WHILE may run 0 times; UNTIL runs at least once.", marks: 1, markCode: "AO2" },
              { reasoning: "Choose based on whether first iteration needed.", marks: 1, markCode: "AO3" }],
            finalAnswer: "WHILE=before, UNTIL=after.", commonErrors: ["Same.", "No difference."] },
        },
        {
          id: "eiascs-u2-ctrl-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Write pseudocode to sum numbers 1 to 10.",
          parts: [
            { label: "a", prompt: "Write algorithm.", marks: 4 },
            { label: "b", prompt: "Identify loop type.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Loop programming", statement: "Accumulator + loop." }],
            steps: [
              { reasoning: "(a) total = 0; FOR i = 1 TO 10 total = total + i; OUTPUT total.", marks: 3, markCode: "AO2", part: "a" },
              { reasoning: "(a) Correct logic — accumulator pattern.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(b) FOR loop — fixed iterations.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Could also use WHILE i <= 10.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) FOR loop+accumulator (b) FOR or WHILE", commonErrors: ["No accumulator.", "Wrong loop."] },
        },
      ],
    },
  ],
};
