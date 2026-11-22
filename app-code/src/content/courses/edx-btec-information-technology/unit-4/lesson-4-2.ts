import type { Lesson } from "../../../types.ts";

export const lesson402: Lesson = {
  id: "edxbtecit-u4-lesson-4-2",
  code: "4-2",
  title: "SQL Queries",
  goal: "I CAN write SQL queries — SELECT, INSERT, UPDATE, DELETE — to retrieve and manipulate data.",
  standards: [
    "BTEC L3 National Information Technology — Unit 4: Relational Database Development",
  ],
  vocabulary: [
    {
      term: "SQL",
      definition:
        "Structured Query Language — standard language for managing relational databases.",
    },
    {
      term: "SELECT",
      definition: "Query retrieving data — the most common SQL command.",
    },
    {
      term: "WHERE",
      definition:
        "Clause filtering which records are selected/updated/deleted.",
    },
    {
      term: "JOIN",
      definition: "Combining data from multiple tables based on related keys.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u4-l2-select",
      title: "SELECT Queries",
      skill:
        "Write SELECT queries to retrieve data with filtering, sorting and aggregation.",
      lesson: {
        sections: [
          {
            heading: "Basic SELECT",
            body: "`SELECT column1, column2 FROM table;` retrieves specific columns. `SELECT *` returns all columns. **WHERE** filters rows: `WHERE age > 18 AND city = 'London'`. **ORDER BY** sorts: `ORDER BY name ASC/DESC`. **LIMIT** restricts rows returned.\n\n**Comparison operators**: =, <>, >, <, >=, <=. **Logical operators**: AND, OR, NOT. **Pattern matching**: LIKE with % (any chars) and _ (single char) — `WHERE name LIKE 'A%'` finds names starting with A.",
          },
          {
            heading: "Aggregation and functions",
            body: "**Aggregate functions**: COUNT (number of rows), SUM (total), AVG (average), MIN, MAX. **GROUP BY** groups rows for aggregation: `SELECT city, COUNT(*) FROM customers GROUP BY city`. **HAVING** filters grouped results (WHERE can't filter aggregates).\n\n**DISTINCT** removes duplicates: `SELECT DISTINCT city`. **Aliases** rename columns/tables: `SELECT name AS student_name`. Joins combine tables: `FROM orders JOIN customers ON orders.customer_id = customers.id`.",
          },
        ],
        keyFormulas: [
          {
            name: "SELECT syntax",
            statement:
              "SELECT cols FROM table WHERE cond ORDER BY col LIMIT n;",
          },
          {
            name: "Aggregates",
            statement: "COUNT, SUM, AVG, MIN, MAX with GROUP BY.",
          },
        ],
        workedExample: {
          problem: "Find all students older than 18, sorted by name.",
          solution:
            "SELECT name, age FROM students WHERE age > 18 ORDER BY name ASC;",
        },
      },
      questions: [
        {
          id: "edxbtecit-u4-l2-select-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which clause filters which rows are returned?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "WHERE" },
              { id: "b", text: "SELECT" },
              { id: "c", text: "ORDER BY" },
              { id: "d", text: "GROUP BY" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WHERE clause",
                statement: "Filters which rows are selected.",
              },
            ],
            steps: [
              { reasoning: "WHERE filters rows.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** WHERE",
            commonErrors: ["Confusing with SELECT."],
          },
        },
        {
          id: "edxbtecit-u4-l2-select-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what GROUP BY does in SQL.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GROUP BY",
                statement: "Groups rows with same values for aggregation.",
              },
            ],
            steps: [
              {
                reasoning: "Groups rows by specified column.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allows aggregate functions per group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: count per category.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GROUP BY groups rows with same values — enabling per-group aggregation like COUNT, SUM.",
            commonErrors: ["No grouping purpose.", "Confused with ORDER BY."],
          },
        },
        {
          id: "edxbtecit-u4-l2-select-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a query to find the average age of students in each city.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Aggregate + GROUP BY",
                statement: "SELECT city, AVG(age) FROM students GROUP BY city;",
              },
            ],
            steps: [
              { reasoning: "SELECT city, AVG(age).", marks: 1, markCode: "M" },
              { reasoning: "FROM students table.", marks: 1, markCode: "M" },
              { reasoning: "GROUP BY city.", marks: 1, markCode: "M" },
              { reasoning: "Correct syntax overall.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SELECT city, AVG(age) FROM students GROUP BY city;",
            commonErrors: ["Missing GROUP BY.", "Wrong aggregate."],
          },
        },
        {
          id: "edxbtecit-u4-l2-select-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "You have Orders and Customers tables needing combined data.",
          parts: [
            {
              label: "a",
              prompt: "Write a query joining the tables on customer_id.",
              marks: 3,
            },
            { label: "b", prompt: "Explain what the JOIN does.", marks: 2 },
            {
              label: "c",
              prompt: "Add a WHERE filter for orders over £100.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JOIN",
                statement: "Combines related tables on matching keys.",
              },
            ],
            steps: [
              {
                reasoning: "Correct JOIN syntax with ON clause.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Appropriate columns selected.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Correct table names.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "JOIN combines matching rows.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Result: order + customer data together.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "WHERE total > 100 added.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Correct column/operator.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Full query syntactically correct.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) JOIN...ON customer_id (b) combines matching rows (c) WHERE total > 100",
            commonErrors: ["Missing ON clause.", "Wrong join condition."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u4-l2-manipulate",
      title: "INSERT, UPDATE and DELETE",
      skill: "Write SQL commands to insert, update and delete data safely.",
      lesson: {
        sections: [
          {
            heading: "Data manipulation",
            body: "**INSERT**: adds new records — `INSERT INTO table (col1, col2) VALUES ('val1', 'val2');`. **UPDATE**: modifies existing records — `UPDATE table SET col = 'value' WHERE condition;` — always use WHERE to avoid updating all rows. **DELETE**: removes records — `DELETE FROM table WHERE condition;` — also always use WHERE.\n\n**Transactions**: group multiple operations — `BEGIN`, `COMMIT` (save), `ROLLBACK` (undo). If any operation fails, rollback prevents partial updates. Essential for data integrity.",
          },
          {
            heading: "Safety and best practices",
            body: "**Always use WHERE** with UPDATE/DELETE — without it, all rows affected. **Test queries** on sample data first. **Backup before bulk operations**. **Use transactions** for multi-step changes. **Validate input** to prevent SQL injection — never concatenate user input directly into queries.\n\n**SQL injection**: attackers enter malicious SQL via input fields — `' OR '1'='1` bypasses login. Prevention: parameterised queries, input validation, least privilege database accounts.",
          },
        ],
        keyFormulas: [
          {
            name: "UPDATE safety",
            statement: "Always WHERE — otherwise all rows updated.",
          },
          {
            name: "Transaction",
            statement: "BEGIN → operations → COMMIT or ROLLBACK.",
          },
        ],
        workedExample: {
          problem: "Update all students' city to 'London' — is this safe?",
          solution:
            "UPDATE students SET city = 'London'; — no WHERE means ALL rows updated. Add WHERE if only some students should change.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u4-l2-manipulate-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens if UPDATE has no WHERE clause?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only first row updates" },
              { id: "b", text: "Error occurs" },
              { id: "c", text: "All rows are updated" },
              { id: "d", text: "Nothing happens" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UPDATE without WHERE",
                statement: "Updates ALL rows in table.",
              },
            ],
            steps: [
              {
                reasoning: "No WHERE = all rows affected.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** All rows updated",
            commonErrors: ["Thinking WHERE optional."],
          },
        },
        {
          id: "edxbtecit-u4-l2-manipulate-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the purpose of database transactions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transactions",
                statement: "Group operations — all succeed or all rollback.",
              },
            ],
            steps: [
              {
                reasoning: "Groups multiple operations together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "COMMIT saves all; ROLLBACK undoes all.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prevents partial/inconsistent updates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Transactions group operations — all succeed together or all rollback, preventing inconsistent data.",
            commonErrors: ["No atomicity.", "Vague purpose."],
          },
        },
        {
          id: "edxbtecit-u4-l2-manipulate-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how SQL injection works and how to prevent it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SQL injection",
                statement:
                  "Malicious SQL via user input — prevented by parameterised queries and validation.",
              },
            ],
            steps: [
              {
                reasoning: "Attackers enter SQL code in input fields.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Concatenated queries execute malicious code.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prevention: parameterised queries + validation.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "SQL injection exploits unsanitised input — prevented by parameterised queries, input validation and least privilege.",
            commonErrors: ["Only definition.", "No prevention."],
          },
        },
        {
          id: "edxbtecit-u4-l2-manipulate-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "You need to update customer emails and delete inactive accounts.",
          parts: [
            {
              label: "a",
              prompt: "Write the UPDATE query for emails.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the DELETE query for inactive accounts.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain three safety precautions before running these.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Safe data manipulation",
                statement:
                  "Always use WHERE, backup first, test on sample data.",
              },
            ],
            steps: [
              {
                reasoning: "Correct UPDATE syntax with SET and WHERE.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Appropriate condition used.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Correct DELETE syntax with WHERE.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Appropriate condition for inactive.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Precaution 1: backup database.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Precaution 2: test on sample data.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Precaution 3: use transaction.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Precaution 4: verify WHERE conditions.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) UPDATE...SET...WHERE (b) DELETE...WHERE (c) backup+test+transaction+verify",
            commonErrors: ["Missing WHERE.", "No safety measures."],
          },
        },
      ],
    },
  ],
};
