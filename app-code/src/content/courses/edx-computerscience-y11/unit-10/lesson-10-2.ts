import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ecs11-u10-lesson-10-2",
  code: "10-2",
  title: "Querying Databases with SQL",
  goal: "I CAN write basic SQL queries to select, filter, sort and summarise database data.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Databases", "4CP1: SQL — SELECT, WHERE, ORDER BY, aggregates, joins"],
  
  vocabulary: [
    { term: "SQL", definition: "Structured Query Language — the standard language for querying relational databases." },
    { term: "Query", definition: "A request for data from a database, returning a result set." },
    { term: "SELECT", definition: "SQL keyword listing the fields to be returned." },
    { term: "WHERE", definition: "Clause filtering which rows are returned." },
    { term: "ORDER BY", definition: "Clause sorting results by a field, ASC or DESC." },
    { term: "Aggregate function", definition: "Function summarising many rows, e.g. COUNT, SUM, AVG, MIN, MAX." },
    { term: "GROUP BY", definition: "Clause collecting rows into groups so aggregates run per group." },
  ],
  concepts: [
    {
      id: "ecs11-u10-sql-basics",
      title: "SELECT, WHERE and ordering",
      skill: "Write basic SQL queries at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "The SELECT statement",
            body: "SQL is the standard language for relational databases. The basic form is SELECT field1, field2 FROM TableName; using SELECT * returns all fields.\n\nThe WHERE clause filters rows using operators =, <>, <, >, <=, >=, LIKE (with % matching any sequence of characters) and IS NULL. Conditions combine with AND (both must be true) and OR (either may be true). ORDER BY field ASC or DESC sorts the result set. Queries only read data — they do not change the table.",
          },
          {
            heading: "Writing correct queries",
            body: "Always name the correct table in FROM and use exact field names. String values go in single quotes, e.g. WHERE Genre = 'Horror'. LIKE 'A%' finds values starting with A; LIKE '%son' finds values ending in 'son'. Combine filters carefully: AND has higher priority than OR, so use brackets when unsure.",
          },
        ],
        keyFormulas: [
          { name: "SELECT", statement: "SELECT fields FROM table WHERE condition ORDER BY field" },
          { name: "LIKE", statement: "% matches any sequence of characters" },
          { name: "Logical operators", statement: "AND = both true; OR = either true" },
        ],
        workedExample: {
          problem: "Write SQL to list the names of students in Form '11B' sorted by name.",
          solution: "SELECT Name FROM Students WHERE Form = '11B' ORDER BY Name ASC;",
        },
      },
      questions: [
        {
          id: "ecs11-u10-sqb-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which SQL keyword filters which rows are returned?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "SELECT"
                    },
                    {
                              "id": "b",
                              "text": "FROM"
                    },
                    {
                              "id": "c",
                              "text": "WHERE"
                    },
                    {
                              "id": "d",
                              "text": "ORDER BY"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "WHERE",
                              "statement": "Row filter clause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WHERE filters rows; SELECT chooses fields; ORDER BY sorts.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "WHERE"
},
        },
        {
          id: "ecs11-u10-sqb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the SQL to select all fields from a table called Products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "SELECT *",
                              "statement": "All fields from a table."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SELECT * returns every field.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "FROM Products names the table.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "SELECT * FROM Products;"
},
        },
        {
          id: "ecs11-u10-sqb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write SQL to list the titles of books in a Library table where the genre is 'Sci-Fi'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "SELECT with WHERE",
                              "statement": "Filter rows by condition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SELECT Title FROM Library chooses the right fields and table.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "WHERE Genre = 'Sci-Fi' filters to the required rows, string in single quotes.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Full statement: SELECT Title FROM Library WHERE Genre = 'Sci-Fi';",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "SELECT Title FROM Library WHERE Genre = 'Sci-Fi';"
},
        },
        {
          id: "ecs11-u10-sqb-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between AND and OR in a WHERE clause, with an example for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND / OR",
                              "statement": "Boolean row filters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AND requires both conditions to be true for a row to be returned.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "OR requires at least one condition to be true.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "AND example: WHERE Price > 5 AND Stock > 0 returns only in-stock items over 5.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "OR example: WHERE Genre = 'Horror' OR Genre = 'Thriller' returns either genre.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "AND = both true; OR = either true."
},
        },
        {
          id: "ecs11-u10-sqb-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An Orders table has fields OrderID, Customer, Total.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write SQL to list orders with Total over 100, highest first.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write SQL to list customers whose name begins with 'J'.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Filtering and sorting",
                              "statement": "WHERE + ORDER BY."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) SELECT OrderID, Customer, Total FROM Orders.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) WHERE Total > 100 filters correctly.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) ORDER BY Total DESC puts the highest first.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) SELECT Customer FROM Orders.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) WHERE Customer LIKE 'J%' matches names starting with J.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) ... WHERE Total > 100 ORDER BY Total DESC (b) ... WHERE Customer LIKE 'J%'"
},
        },
        {
          id: "ecs11-u10-sqb-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A Movies table has fields Title, Year, Genre, Rating.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write SQL to list all movies from 2020 onwards in the Horror genre.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what SELECT * FROM Movies WHERE Rating > 4 ORDER BY Year DESC returns.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "The table is very large. Suggest two ways to make the query in part (a) more efficient or the results more useful.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Complex queries",
                              "statement": "Combined clauses and optimisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) SELECT Title, Year, Genre FROM Movies.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) WHERE Year >= 2020 AND Genre = 'Horror' combines both conditions.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) AND applies to both conditions correctly (no OR ambiguity).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) SELECT * returns all fields for every qualifying row.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Only movies with Rating > 4 are returned.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Results are sorted newest year first due to ORDER BY Year DESC.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Select only the needed fields instead of * to reduce data transferred.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Add indexes on Year and Genre so the DBMS finds rows faster.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Add a secondary sort or LIMIT to control output size.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Ensure data types and values are consistent so filters behave predictably.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) SELECT ... WHERE Year >= 2020 AND Genre = 'Horror' (b) filtered, newest-first all fields (c) indexes, narrow fields"
},
        },
      ],
    },
    {
      id: "ecs11-u10-sql-aggregate",
      title: "Aggregates, grouping and joins",
      skill: "Use aggregate functions, GROUP BY and joins to analyse database data.",
      lesson: {
        sections: [
          {
            heading: "Aggregate functions and GROUP BY",
            body: "Aggregate functions summarise many rows into one value: COUNT counts rows, SUM adds numeric values, AVG gives the mean, MIN and MAX return extremes. COUNT(*) counts all rows; COUNT(field) counts non-null values.\n\nGROUP BY field collects rows sharing a value so aggregates run per group: SELECT Genre, COUNT(*) FROM Movies GROUP BY Genre. HAVING filters the groups themselves, e.g. HAVING COUNT(*) > 5 — it works like WHERE but for grouped results.",
          },
          {
            heading: "Joins",
            body: "A join combines rows from two tables using a shared key. INNER JOIN returns only rows with a match in both tables: SELECT ... FROM A INNER JOIN B ON A.key = B.key. LEFT JOIN keeps every row from the left table plus matches from the right, showing NULL where there is no match.\n\nJoins let you query related data without copying it — the key benefit of relational design.",
          },
        ],
        keyFormulas: [
          { name: "COUNT", statement: "COUNT(*) = number of rows; COUNT(field) = non-null values" },
          { name: "GROUP BY", statement: "SELECT field, COUNT(*) FROM table GROUP BY field" },
          { name: "JOIN", statement: "FROM A INNER JOIN B ON A.fk = B.pk" },
        ],
        workedExample: {
          problem: "Write SQL to show each genre and the number of movies in it.",
          solution: "SELECT Genre, COUNT(*) AS Total FROM Movies GROUP BY Genre;",
        },
      },
      questions: [
        {
          id: "ecs11-u10-sqa-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which SQL function returns the number of rows?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "SUM"
                    },
                    {
                              "id": "b",
                              "text": "COUNT"
                    },
                    {
                              "id": "c",
                              "text": "AVG"
                    },
                    {
                              "id": "d",
                              "text": "MAX"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "COUNT",
                              "statement": "Counts rows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "COUNT returns the number of rows; SUM adds, AVG averages, MAX finds the largest.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "COUNT"
},
        },
        {
          id: "ecs11-u10-sqa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the GROUP BY clause do in SQL?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GROUP BY",
                              "statement": "Groups rows for aggregation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It groups rows that share the same value in the named field.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Aggregate functions are then calculated once per group rather than for the whole table.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Groups rows so aggregates run per group."
},
        },
        {
          id: "ecs11-u10-sqa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write SQL to find the average rating of all movies in a Movies table with a Rating field.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "AVG",
                              "statement": "Mean of a numeric field."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AVG(Rating) computes the mean rating.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "FROM Movies names the table.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Full statement: SELECT AVG(Rating) FROM Movies;",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "SELECT AVG(Rating) FROM Movies;"
},
        },
        {
          id: "ecs11-u10-sqa-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between INNER JOIN and LEFT JOIN.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Join types",
                              "statement": "Matching rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "INNER JOIN returns only rows that have a match in both tables.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "LEFT JOIN keeps every row from the left table even without a match.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Unmatched rows from the right table appear as NULL in a LEFT JOIN.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: INNER JOIN shows only students who are enrolled; LEFT JOIN shows all students including those with no enrolment.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "INNER = matches only; LEFT = all left rows + matches."
},
        },
        {
          id: "ecs11-u10-sqa-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A Movies table has fields Title and Rating.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write SQL to find the highest-rated movie's title and rating.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write SQL showing each genre with its movie count, but only for genres with more than 5 movies.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sorting and grouping",
                              "statement": "ORDER BY + GROUP BY/HAVING."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) SELECT Title, Rating FROM Movies ORDER BY Rating DESC and take the first row (or LIMIT 1).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) DESC ensures the highest rating is first.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) SELECT Genre, COUNT(*) FROM Movies.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) GROUP BY Genre computes a count per genre.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) HAVING COUNT(*) > 5 filters the groups after aggregation.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) ORDER BY Rating DESC LIMIT 1 (b) GROUP BY Genre HAVING COUNT(*) > 5"
},
        },
        {
          id: "ecs11-u10-sqa-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school database has Students(StudentID, Name) and Enrolments(StudentID, Module).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write SQL listing each student's name with their module using a join.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why StudentID appears in both tables.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "The school wants the number of students enrolled per module. Describe the query and one limitation.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Joins and aggregation",
                              "statement": "Combine and summarise related tables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) SELECT Name, Module FROM Students INNER JOIN Enrolments ON Students.StudentID = Enrolments.StudentID.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) INNER JOIN with the correct ON condition linking the keys.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) StudentID is the primary key in Students.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It is the foreign key in Enrolments linking each enrolment to a student.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) This avoids duplicating student details in every enrolment record.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) SELECT Module, COUNT(*) FROM Enrolments GROUP BY Module.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) HAVING COUNT(*) > n can filter to popular modules.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Limitation: it only counts enrolment records — modules with zero students do not appear, and a student in two modules counts twice for the school total.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) join on StudentID (b) PK/FK link avoids duplication (c) GROUP BY Module with HAVING; zero-enrolment modules hidden"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u10-sql-notes",
      title: "SQL — notes",
      summary: "SELECT filters fields, WHERE filters rows, ORDER BY sorts; aggregates summarise, GROUP BY groups, joins combine tables.",
      sections: [
        { heading: "Key idea", body: "SQL reads data without changing it — SELECT chooses fields, WHERE chooses rows." },
        { heading: "Aggregates", body: "COUNT, SUM, AVG, MIN, MAX summarise; GROUP BY applies them per group; HAVING filters groups." },
        { heading: "Joins", body: "INNER JOIN = matches only; LEFT JOIN = all left rows plus matches." },
      ],
    },
  ],
};
