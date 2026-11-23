import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "ecs11-u12-lesson-12-2",
  code: "12-2",
  title: "Database Design and Normalisation",
  goal: "I CAN identify entities, attributes, keys and relationships, and apply normalisation to remove redundancy.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Database design", "Entity-relationship modelling and normal forms"],
  
  vocabulary: [
    { term: "Entity", definition: "A real-world object or concept about which data is stored, e.g. Student." },
    { term: "Attribute", definition: "A property of an entity, e.g. Forename." },
    { term: "Relationship", definition: "An association between two entities, e.g. Student studies Course." },
    { term: "Candidate key", definition: "Any field or combination of fields that could uniquely identify a record." },
    { term: "Normalisation", definition: "The process of restructuring tables to remove redundancy and anomalies." },
    { term: "Functional dependency", definition: "When one attribute's value determines another's within a table." },
  ],
  concepts: [
    {
      id: "ecs11-u12-design",
      title: "Entities, Attributes and Relationships",
      skill: "Model data as entities with attributes and identify relationship types.",
      lesson: {
        sections: [
          {
            heading: "From requirements to tables",
            body: "Database design starts by identifying **entities** (nouns in the requirements) and their **attributes**. Each entity becomes a table. Attributes that describe the entity go in that table; attributes describing something else belong to another entity.\n\n**Relationships** connect entities: one-to-one, one-to-many, many-to-many. Many-to-many relationships (a student takes many courses; a course has many students) need a **link table** holding the two foreign keys.",
          },
          {
            heading: "Choosing keys",
            body: "A **candidate key** is any attribute (or combination) that uniquely identifies a record. The chosen **primary key** should be stable, short and meaningless — surrogate keys like auto-increment IDs are common because natural keys (names, emails) can change or repeat.\n\nComposite keys combine several fields when no single field is unique, e.g. (StudentID, CourseCode) in an Enrolments table.",
          },
        ],
        keyFormulas: [
          { name: "Entity", statement: "noun → table; attribute → field" },
          { name: "Many-to-many", statement: "resolved with a link table" },
          { name: "Surrogate key", statement: "artificial unique ID, e.g. auto-increment" },
        ],
        workedExample: {
          problem: "Students take many Courses and Courses have many Students. How should this be modelled?",
          solution: "Create Students and Courses tables plus an Enrolments link table containing StudentID and CourseCode as foreign keys, plus attributes such as Grade.",
        },
      },
      questions: [
        {
          id: "ecs11-u12-design-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an entity in database design?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single field value"
                    },
                    {
                              "id": "b",
                              "text": "A real-world object about which data is stored"
                    },
                    {
                              "id": "c",
                              "text": "A type of SQL command"
                    },
                    {
                              "id": "d",
                              "text": "A duplicate record"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Entity",
                              "statement": "A real-world object or concept about which data is stored."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Entities become tables; attributes become fields.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A real-world object about which data is stored",
          "commonErrors": [
                    "Confusing entity with attribute."
          ]
},
        },
        {
          id: "ecs11-u12-design-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define attribute, relationship and link table.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Design terms",
                              "statement": "Attribute=property, relationship=association, link table resolves many-to-many."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Attribute is a property of an entity.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Relationship is an association between entities.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Link table holds foreign keys to resolve many-to-many.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Attribute=entity property; relationship=entity association; link table resolves M:N.",
          "commonErrors": [
                    "Missing the purpose of a link table."
          ]
},
        },
        {
          id: "ecs11-u12-design-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a surrogate key (auto-increment ID) is often better than using an email address as the primary key for a Users table.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Key stability",
                              "statement": "Keys should be unique, stable and compact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Email addresses can change when a user changes provider.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Two people could share or be assigned the same email over time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "An ID never changes, keeping relationships intact.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Short IDs are faster to index and join than long strings.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Surrogate IDs are stable, guaranteed unique and efficient; emails can change or repeat.",
          "commonErrors": [
                    "Saying emails are never unique."
          ]
},
        },
        {
          id: "ecs11-u12-design-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A recipe website stores RecipeID, RecipeName, IngredientName and IngredientQuantity in one table. Explain two problems with this design.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Design flaws",
                              "statement": "Mixed entities cause repetition and update anomalies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recipes with several ingredients repeat the recipe name many times.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Redundancy wastes space and risks inconsistent copies.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Renaming a recipe requires updating every ingredient row.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Deleting the last ingredient row could lose the recipe itself.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Ingredients and recipes are separate entities needing separate tables.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Redundant recipe data and update/deletion anomalies; split into Recipes and Ingredients tables.",
          "commonErrors": [
                    "Only identifying one problem."
          ]
},
        },
        {
          id: "ecs11-u12-design-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An Orders table stores OrderID, CustomerName, CustomerPhone, ProductName, Quantity.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the entities that should be separate tables.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest keys for each table and the relationships.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Entity separation",
                              "statement": "Each entity type gets its own table linked by keys."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Customers (name, phone) is one entity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Products is a second entity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Orders is a third entity linking them.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "CustomerID primary key in Customers; ProductID in Products.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "OrderID primary key in Orders with foreign keys to both.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "One customer → many orders; one product → many orders.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Customers, Products, Orders (b) surrogate keys plus foreign keys; one-to-many relationships",
          "commonErrors": [
                    "Keeping customer details inside Orders."
          ]
},
        },
        {
          id: "ecs11-u12-design-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design a database for a school library.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List the entities and three attributes for each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Identify primary keys, foreign keys and relationship types.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why Members and Books should not be combined into one table.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Conceptual design",
                              "statement": "Entities, attributes, keys and relationships model the real world."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Members(MemberID, Name, JoinDate).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Books(BookID, Title, Author).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Loans(LoanID, MemberID, BookID, DueDate).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "At least three sensible attributes per entity.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "MemberID, BookID, LoanID as primary keys.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "MemberID and BookID foreign keys in Loans.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "One-to-many: member→loans, book→loans.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Members and books are different entities with different attributes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Combining them repeats member data on every book row.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "The Loans table links them without duplication.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Members, Books, Loans with attributes (b) surrogate keys + foreign keys, one-to-many (c) separate entities avoid redundancy",
          "commonErrors": [
                    "No link table for loans."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u12-normalisation",
      title: "Normalisation",
      skill: "Apply first, second and third normal form to remove redundancy and anomalies.",
      lesson: {
        sections: [
          {
            heading: "Why normalise",
            body: "Unnormalised tables repeat data, causing three **anomalies**: **update** (changing one copy but not others), **insert** (cannot add data without unrelated data) and **delete** (losing data when removing unrelated rows).\n\n**Normalisation** restructures tables into smaller, well-defined relations to remove redundancy while preserving all information.",
          },
          {
            heading: "The normal forms",
            body: "**1NF**: every field holds a single atomic value — no lists in a cell (e.g. store 'Maths,English' as separate rows). **2NF**: 1NF plus every non-key attribute depends on the whole primary key — removes partial dependencies in composite keys. **3NF**: 2NF plus no non-key attribute depends on another non-key attribute — removes transitive dependencies.\n\nExample: in Orders(OrderID, CustomerID, CustomerName), CustomerName depends on CustomerID, not OrderID — move it to a Customers table for 3NF.",
          },
        ],
        keyFormulas: [
          { name: "1NF", statement: "atomic values only — no repeating groups" },
          { name: "2NF", statement: "no partial dependency on part of a composite key" },
          { name: "3NF", statement: "no transitive dependency between non-key attributes" },
        ],
        workedExample: {
          problem: "Orders(OrderID, ProductID, ProductName, Quantity) has ProductName repeated for every order of the same product. Which normal form is violated and how is it fixed?",
          solution: "3NF is violated: ProductName depends on ProductID, not the whole key. Move ProductName to a Products(ProductID, ProductName) table and keep only ProductID in Orders.",
        },
      },
      questions: [
        {
          id: "ecs11-u12-normalisation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What problem does normalisation solve?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Slow network connections"
                    },
                    {
                              "id": "b",
                              "text": "Data redundancy and anomalies"
                    },
                    {
                              "id": "c",
                              "text": "Missing SQL commands"
                    },
                    {
                              "id": "d",
                              "text": "Hardware failures"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Normalisation",
                              "statement": "Restructures tables to remove redundancy and anomalies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Normalisation targets redundant data causing update/insert/delete anomalies.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Data redundancy and anomalies",
          "commonErrors": [
                    "Thinking normalisation speeds up queries."
          ]
},
        },
        {
          id: "ecs11-u12-normalisation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the three normal forms 1NF, 2NF and 3NF in one sentence each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Normal forms",
                              "statement": "Atomic values; whole-key dependency; no non-key dependencies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1NF: each field holds a single atomic value.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "2NF: non-key attributes depend on the whole primary key.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "3NF: no non-key attribute depends on another non-key attribute.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "1NF atomic values; 2NF whole-key dependency; 3NF no transitive dependency.",
          "commonErrors": [
                    "Swapping 2NF and 3NF rules."
          ]
},
        },
        {
          id: "ecs11-u12-normalisation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A Students table has a field 'Subjects' containing 'Maths, English, Science' in one cell. Which normal form does this violate and how would you fix it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "1NF",
                              "statement": "Each field must hold a single atomic value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Violates 1NF — multiple values in one field.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Split into separate rows: one row per subject per student.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Use a composite key (StudentID, Subject) or a link table.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each field now holds one atomic value.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "1NF violation; one row per subject with composite or link-table key.",
          "commonErrors": [
                    "Creating three separate subject fields instead of rows."
          ]
},
        },
        {
          id: "ecs11-u12-normalisation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Table: Enrolments(StudentID, CourseCode, CourseName, LecturerName). StudentID+CourseCode is the key.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Transitive dependency",
                              "statement": "CourseName and LecturerName depend on CourseCode, not the key."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CourseName depends on CourseCode — a non-key attribute.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "LecturerName depends on CourseCode too (transitive).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Violates 3NF (and arguably 2NF structure for the table).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Move course details to a Courses(CourseCode, CourseName, LecturerName) table.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Keep only StudentID, CourseCode in Enrolments.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "3NF violation; split course attributes into a Courses table.",
          "commonErrors": [
                    "Saying the key should be changed instead of splitting tables."
          ]
},
        },
        {
          id: "ecs11-u12-normalisation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Projects(ProjectID, ProjectName, ManagerID, ManagerName, Budget).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the dependency problem in this table.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Show how to restructure it to 3NF.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "3NF",
                              "statement": "Non-key attributes must not depend on other non-key attributes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "ManagerName depends on ManagerID, not ProjectID.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "This is a transitive dependency violating 3NF.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Renaming a manager repeats/risks inconsistent copies.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Create Managers(ManagerID, ManagerName) table.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep ProjectID, ProjectName, ManagerID, Budget in Projects.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "ManagerID becomes a foreign key linking to Managers.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) ManagerName transitively depends on ManagerID (b) separate Managers table with foreign key",
          "commonErrors": [
                    "Leaving ManagerName in Projects."
          ]
},
        },
        {
          id: "ecs11-u12-normalisation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Unnormalised table ClubMembers(MemberNo, MemberName, MemberPhone, Sport1, Sport2, CoachName).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify all normal form violations.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Restructure into 3NF tables with keys.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain one update anomaly the original design allows.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Normalisation process",
                              "statement": "Atomic values, whole-key dependency, remove transitive dependencies."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sport1/Sport2 are repeating groups — violates 1NF.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "A member with one sport wastes a column; three sports impossible.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "CoachName depends on sport/coach, not MemberNo — transitive.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Multiple violations mean table is unnormalised.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Members(MemberNo, MemberName, MemberPhone).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sports(SportID, SportName, CoachName).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "MemberSports(MemberNo, SportID) link table.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Foreign keys connect members to their sports.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Changing a coach name must be edited in every member row.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Missing some copies leaves inconsistent data.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) 1NF repeating groups + 3NF transitive dependency (b) Members, Sports, MemberSports (c) inconsistent coach-name updates",
          "commonErrors": [
                    "Not separating coach data into its own table."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u12-l2-notes",
      title: "Database design and normalisation — notes",
      summary: "Entities→tables, attributes→fields, relationships→keys. Normalise to 1NF (atomic), 2NF (whole key), 3NF (no transitive dependencies) to kill redundancy and anomalies.",
      sections: [
        { heading: "Key idea", body: "Good design stores each fact once; normalisation enforces this mechanically." },
        { heading: "Anomalies", body: "Update, insert and delete anomalies all stem from redundant data." },
      ],
    },
  ],
};
