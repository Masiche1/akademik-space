import type { Lesson } from "../../../types.ts";

export const lesson403: Lesson = {
  id: "edxbtecit-u4-lesson-4-3",
  code: "4-3",
  title: "Database Design, Testing and Deployment",
  goal: "I CAN design, test and deploy a relational database for a given scenario.",
  standards: [
    "BTEC L3 National Information Technology — Unit 4: Relational Database Development",
  ],
  vocabulary: [
    {
      term: "ERD",
      definition:
        "Entity-Relationship Diagram — visual representation of database structure and relationships.",
    },
    {
      term: "DBMS",
      definition:
        "Database Management System — software managing database storage, access and security (e.g. MySQL, PostgreSQL).",
    },
    {
      term: "Migration",
      definition: "Moving database schema/data between systems or versions.",
    },
    {
      term: "Backup and recovery",
      definition:
        "Copies of database for restoration after failure or data loss.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u4-l3-design",
      title: "Database Design Process",
      skill:
        "Design databases from requirements — identify entities, relationships and constraints.",
      lesson: {
        sections: [
          {
            heading: "Design process",
            body: "Database design follows requirements analysis: identify **entities** (things to store — customers, orders, products), their **attributes** (fields), and **relationships** (how entities connect). Create **ERD** (Entity-Relationship Diagram) showing entities, attributes, and relationship types (1:1, 1:M, M:M).\n\nApply **normalisation** to eliminate redundancy — typically to 3NF. Define **primary keys** (unique identifiers), **foreign keys** (relationships), and **constraints** (data rules). Consider **indexes** for frequently queried fields. Document the design for implementation and maintenance.",
          },
          {
            heading: "Implementation considerations",
            body: "Choose appropriate **data types**: INT for numbers, VARCHAR for text, DATE for dates, BOOLEAN for true/false. **Naming conventions**: consistent, descriptive — snake_case or camelCase. **Default values** and **constraints** ensure data quality.\n\n**User access**: create roles with appropriate permissions — read-only vs read-write. **Audit logging**: track who changed what and when. **Documentation**: data dictionary describing tables, fields, relationships — essential for maintenance and handover.",
          },
        ],
        keyFormulas: [
          {
            name: "Design steps",
            statement:
              "Requirements → entities → relationships → ERD → normalise → implement.",
          },
          {
            name: "Data types",
            statement: "INT, VARCHAR, DATE, BOOLEAN — match to data.",
          },
        ],
        workedExample: {
          problem: "Design a database for a bookshop.",
          solution:
            "Entities: Books, Authors, Customers, Orders. Relationships: Author-Book (1:M), Customer-Order (1:M), Order-Book (M:M via OrderItems). Normalise to 3NF.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u4-l3-design-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does an ERD show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Entities and relationships" },
              { id: "b", text: "Database queries" },
              { id: "c", text: "User passwords" },
              { id: "d", text: "Network topology" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ERD",
                statement:
                  "Visual diagram of entities, attributes and relationships.",
              },
            ],
            steps: [
              {
                reasoning: "ERD = entities + relationships.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Entities and relationships",
            commonErrors: ["Confusing with queries."],
          },
        },
        {
          id: "edxbtecit-u4-l3-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why appropriate data types matter in database design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data types",
                statement:
                  "Correct types ensure data quality, storage efficiency and query performance.",
              },
            ],
            steps: [
              {
                reasoning: "Ensures data validity/format.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Optimises storage space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables correct operations/comparisons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Correct data types ensure validity, save storage and enable proper operations — wrong types cause errors and waste.",
            commonErrors: ["Only storage view.", "No quality benefit."],
          },
        },
        {
          id: "edxbtecit-u4-l3-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the importance of a data dictionary in database management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data dictionary",
                statement:
                  "Documentation enabling maintenance, understanding and handover.",
              },
            ],
            steps: [
              {
                reasoning: "Documents tables/fields/relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Essential for maintenance/troubleshooting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables knowledge transfer/new developers.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Data dictionary documents structure — essential for maintenance, troubleshooting and knowledge transfer when staff change.",
            commonErrors: [
              "Only documentation view.",
              "No maintenance benefit.",
            ],
          },
        },
        {
          id: "edxbtecit-u4-l3-design-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a database for a university tracking students, courses and enrolments.",
          parts: [
            {
              label: "a",
              prompt: "Identify three entities and their key fields.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe the relationships between them.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest one normalisation improvement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Database design",
                statement:
                  "Separate entities, link via keys, normalise to eliminate redundancy.",
              },
            ],
            steps: [
              {
                reasoning: "Entity 1: Students (StudentID, Name).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Entity 2: Courses (CourseID, Title).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Entity 3: Enrolments (EnrolmentID).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Student-Enrolment: 1:M.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Course-Enrolment: 1:M.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Student-Course: M:M via Enrolments.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Normalisation: separate repeated data.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Result: no redundancy/integrity.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) Students/Courses/Enrolments (b) 1:M + M:M via junction (c) normalise to 3NF",
            commonErrors: ["Single table.", "No junction table."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u4-l3-testing",
      title: "Testing and Deployment",
      skill: "Test database functionality and deploy to production safely.",
      lesson: {
        sections: [
          {
            heading: "Testing databases",
            body: "**Unit testing**: test individual queries/components — does each SELECT return expected results? **Integration testing**: test components working together — do joins work correctly? **Performance testing**: measure query speed with large datasets — identify slow queries needing indexes.\n\n**Data validation**: test constraints work — NOT NULL rejects nulls, CHECK enforces ranges, foreign keys prevent orphans. **Backup testing**: verify backups actually restore — untested backups may be useless. **User acceptance testing**: real users verify database meets requirements.",
          },
          {
            heading: "Deployment and maintenance",
            body: "**Deployment**: create database structure, load initial data, configure users/permissions, set up backups. **Migration**: moving from development to production — schema changes, data transfer, downtime planning.\n\n**Maintenance**: regular backups (automated + tested), index maintenance, query optimisation, monitoring performance, applying security updates. **Disaster recovery**: documented procedures for restoring from backups — RPO (how much data loss acceptable) and RTO (how quickly must restore).",
          },
        ],
        keyFormulas: [
          {
            name: "Testing types",
            statement: "Unit, integration, performance, validation, UAT.",
          },
          {
            name: "RPO/RTO",
            statement:
              "Recovery Point/Time Objectives — backup and restore targets.",
          },
        ],
        workedExample: {
          problem: "Why test backups?",
          solution:
            "Untested backups may be corrupt or incomplete — regular restore testing ensures recovery actually works when needed.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u4-l3-testing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which test verifies queries return expected results?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Backup test" },
              { id: "b", text: "Load test" },
              { id: "c", text: "Unit test" },
              { id: "d", text: "Performance test" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unit testing",
                statement: "Tests individual components in isolation.",
              },
            ],
            steps: [
              {
                reasoning: "Unit test = individual components.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Unit test",
            commonErrors: ["Confusing test types."],
          },
        },
        {
          id: "edxbtecit-u4-l3-testing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why backup testing is essential.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Backup testing",
                statement:
                  "Untested backups may be corrupt — testing ensures recovery works.",
              },
            ],
            steps: [
              {
                reasoning: "Backups can be corrupt/incomplete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Testing verifies restore works.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Critical when actually needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Backup testing verifies backups actually restore — untested backups may fail when needed most.",
            commonErrors: [
              "Backup = always works view.",
              "No testing purpose.",
            ],
          },
        },
        {
          id: "edxbtecit-u4-l3-testing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of indexes for database performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indexes",
                statement:
                  "Speed up queries on indexed fields but add storage/write overhead.",
              },
            ],
            steps: [
              {
                reasoning: "Speed up searches on indexed columns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost: extra storage + slower writes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only index frequently queried fields.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Indexes dramatically speed queries on indexed fields but cost storage and slow writes — use selectively on frequent search fields.",
            commonErrors: ["Index everything view.", "No trade-offs."],
          },
        },
        {
          id: "edxbtecit-u4-l3-testing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A database deployment is planned for next week.",
          parts: [
            {
              label: "a",
              prompt: "Identify three pre-deployment tests needed.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two deployment-day activities.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain the importance of a rollback plan.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deployment planning",
                statement:
                  "Test thoroughly, deploy carefully, plan for rollback.",
              },
            ],
            steps: [
              {
                reasoning: "Test 1: functionality/queries work.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Test 2: performance under load.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Test 3: backup/restore verified.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Deploy 1: create structure/load data.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Deploy 2: configure users/permissions.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Deploy 3: verify system works.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Rollback: restore previous version if fails.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Rollback: minimise downtime/data loss.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) function+performance+backup tests (b) create+configure+verify (c) rollback plan",
            commonErrors: ["No testing.", "No rollback."],
          },
        },
      ],
    },
  ],
};
