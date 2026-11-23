import type { Lesson } from "../../../types.ts";

export const lesson701: Lesson = {
  id: "edxbtecit-u7-lesson-7-1",
  code: "7-1",
  title: "Data Sources and Preparation",
  goal: "I CAN identify data sources, assess data quality and prepare data for analysis.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "Data sources, quality and preparation"],
  
  vocabulary: [
    { term: "Dataset", definition: "Collection of related data records organised for analysis." },
    { term: "Structured data", definition: "Data organised into rows and columns, such as spreadsheets or tables." },
    { term: "Unstructured data", definition: "Data without fixed format, such as text, images, audio or video." },
    { term: "Big data", definition: "Large, fast-changing, varied datasets often described by volume, velocity and variety." },
    { term: "Data quality", definition: "Fitness of data for its intended use — accurate, complete, consistent and timely." },
    { term: "ETL", definition: "Extract, transform and load process preparing data for analysis." },
  ],
  concepts: [
    {
      id: "edxbtecit-u7-l1-sources",
      title: "Data Sources and Types",
      skill: "Identify structured, unstructured, internal and external data sources.",
      lesson: {
        sections: [
          {
            heading: "Types of data",
            body: "Structured data fits tables, spreadsheets and databases. Semi-structured data uses labels or tags, such as JSON or XML. Unstructured data includes documents, images, audio, video and social posts. Internal data comes from the organisation; external data comes from partners, public sources or purchased datasets.",
          },
          {
            heading: "Big data characteristics",
            body: "Volume is the amount of data; velocity is speed of generation and change; variety is different formats and sources. Veracity describes trustworthiness; value describes usefulness. Big data often needs distributed storage and processing rather than a single spreadsheet.",
          },
          {
            heading: "Choosing sources",
            body: "Analysts must check whether data is relevant, representative, legally obtainable, current and affordable. Combining sources requires matching identifiers and resolving inconsistencies. Poor source selection produces confident but wrong conclusions.",
          },
        ],
        keyFormulas: [
          { name: "Data types", statement: "Structured, semi-structured and unstructured data." },
          { name: "Big data", statement: "Volume, velocity, variety — plus veracity and value." },
          { name: "Source fit", statement: "Relevant, representative, legal, current and affordable." },
        ],
        workedExample: {
          problem: "Classify customer emails, a sales database and product photos for an analytics project.",
          solution: "Sales database is structured; emails are semi-structured/unstructured text; product photos are unstructured image data.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u7-l1-sources-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of unstructured data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spreadsheet rows"
                    },
                    {
                              "id": "b",
                              "text": "Customer review text"
                    },
                    {
                              "id": "c",
                              "text": "SQL table"
                    },
                    {
                              "id": "d",
                              "text": "CSV file"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unstructured data",
                              "statement": "Data without fixed rows/columns, such as free text or media."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Free-text reviews lack fixed structure.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Customer review text"
},
        },
        {
          id: "edxbtecit-u7-l1-sources-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name the three classic characteristics of big data.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Big data 3Vs",
                              "statement": "Volume, velocity and variety describe big data challenges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Volume = large amount of data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Velocity = speed of generation/change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Variety = different formats and sources.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Volume, velocity, variety."
},
        },
        {
          id: "edxbtecit-u7-l1-sources-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why data source selection affects the quality of analysis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Source selection",
                              "statement": "Garbage in, garbage out — source relevance determines result validity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Relevant sources answer the business question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Representative data supports valid conclusions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Current/legal data avoids bias and compliance risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Poor sources produce misleading insights.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Source relevance, representativeness, legality and currency determine valid insights."
},
        },
        {
          id: "edxbtecit-u7-l1-sources-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare internal and external data sources for a retail analytics project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Internal vs external data",
                              "statement": "Internal data shows organisation performance; external data adds market context."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internal examples: sales, stock, customer transactions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Internal data is usually controlled and directly relevant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "External examples: market reports, weather, social trends.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "External data adds context but may be costly or inconsistent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Best analysis combines both carefully.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internal data gives direct performance; external data adds context; combine with care."
},
        },
        {
          id: "edxbtecit-u7-l1-sources-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A city wants to analyse traffic congestion.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two internal and two external data sources.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one challenge for each source type.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Data source planning",
                              "statement": "Sources must match the question and be assessed for quality and access."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internal: traffic sensors, council camera or incident logs.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Internal: public transport ridership data.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "External: weather data, event calendars or navigation app data.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Challenge: sensor coverage gaps or privacy restrictions.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Challenge: external data cost, format or timeliness.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Sources linked to congestion question.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Sensors/transit internal; weather/events external; challenges are coverage/privacy and format/cost."
},
        },
        {
          id: "edxbtecit-u7-l1-sources-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A retailer wants to understand why online sales vary by region.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three relevant data sources and classify each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two quality checks before analysis.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "State one ethical/legal issue in collecting this data.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Analytics source design",
                              "statement": "Relevant, quality-checked and lawful sources produce trustworthy regional insights."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sales transaction database = structured internal data.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Website analytics = semi-structured/behavioural data.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Regional demographics or weather = external data.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Sources linked to regional sales question.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Check completeness: missing regions/orders.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Check consistency: currency, product codes, time zones.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Check accuracy/representativeness against known totals.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Document cleaning decisions for auditability.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Privacy/GDPR or consent issue for customer data.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Data must be lawful, minimised and protected.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Relevant structured/external sources; quality checks for completeness/consistency; GDPR/privacy compliance."
},
        },
      ],
    },
    {
      id: "edxbtecit-u7-l1-preparation",
      title: "Data Quality and Preparation",
      skill: "Clean, transform and prepare data for reliable analysis.",
      lesson: {
        sections: [
          {
            heading: "Data quality dimensions",
            body: "Accuracy means values are correct. Completeness means required fields are present. Consistency means the same entity is represented the same way. Timeliness means data is current enough. Validity means values obey allowed formats or ranges. Uniqueness prevents duplicate records.",
          },
          {
            heading: "Cleaning tasks",
            body: "Remove duplicates, correct invalid entries, standardise formats, handle missing values and resolve inconsistencies. Missing values may be removed, estimated or flagged, depending on why they are missing. Outliers should be investigated before deletion because they may be genuine.",
          },
          {
            heading: "ETL and transformation",
            body: "ETL extracts data from sources, transforms it into a consistent format and loads it into an analysis-ready store. Transformations include filtering, aggregation, joining, encoding categories and normalising ranges. Documentation records what was changed and why.",
          },
        ],
        keyFormulas: [
          { name: "Data quality", statement: "Accurate, complete, consistent, timely, valid, unique." },
          { name: "Missing data", statement: "Remove, estimate or flag — choose based on cause and impact." },
          { name: "ETL", statement: "Extract → transform → load into analysis-ready data." },
        ],
        workedExample: {
          problem: "A sales file has duplicate order IDs and prices with currency symbols. Outline cleaning steps.",
          solution: "Remove duplicate rows by order ID, strip currency symbols, convert prices to numbers and validate ranges before analysis.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u7-l1-preparation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of inconsistent data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same customer stored as 'Ali', 'ALI' and 'A. Ali'"
                    },
                    {
                              "id": "b",
                              "text": "A field named price"
                    },
                    {
                              "id": "c",
                              "text": "A table with 100 rows"
                    },
                    {
                              "id": "d",
                              "text": "A date in 2024"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Consistency",
                              "statement": "Same entity should have the same representation throughout data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different spellings for one customer are inconsistent.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Same customer stored differently"
},
        },
        {
          id: "edxbtecit-u7-l1-preparation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A dataset has values 10, missing, 20, 30 and 25. If the mean should be 20, find the missing value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "missing value",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Mean",
                              "statement": "Mean = sum of values divided by number of values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Five values with mean 20 require total 100.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Known sum = 10+20+30+25 = 85.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Missing value = 100-85 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "15"
},
        },
        {
          id: "edxbtecit-u7-l1-preparation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain three common data cleaning tasks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Data cleaning",
                              "statement": "Cleaning improves accuracy, completeness and consistency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Remove duplicates and invalid records.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Standardise formats such as dates, currencies and names.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Handle missing values by removal, estimation or flagging.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tasks described with purpose.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Deduplicate, standardise formats, handle missing values."
},
        },
        {
          id: "edxbtecit-u7-l1-preparation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how missing data should be handled in two different situations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Missing data",
                              "statement": "The correct treatment depends on why data is missing and its impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If missing at random and small, removal may be acceptable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If systematic, removal can bias results.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Estimation/imputation may preserve sample size but adds assumptions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Flagging preserves transparency for analysts/users.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Decision must be documented and justified.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Remove/estimate/flag depending on cause, bias and transparency."
},
        },
        {
          id: "edxbtecit-u7-l1-preparation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Prepare a messy dataset for analysis.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two checks for data completeness.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two checks for data consistency and validity.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Data validation",
                              "statement": "Validation checks whether data is complete, consistent, valid and fit for use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check required fields are not null.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Check expected record counts per period/entity.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Identify patterns behind missing values.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Check formats such as dates, emails and numeric ranges.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Check duplicate keys and conflicting values.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Consistency ensures same entity has same representation.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Completeness via nulls/counts; consistency/validity via formats, ranges and duplicates."
},
        },
        {
          id: "edxbtecit-u7-l1-preparation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An ETL pipeline prepares website data for a dashboard.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what extract, transform and load each do.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Give three transformations needed for messy clickstream data.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why the pipeline should be documented.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "ETL preparation",
                              "statement": "ETL turns raw source data into consistent analysis-ready data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Extract pulls data from sources.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Transform cleans, standardises and combines data.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Load stores results in analysis-ready tables.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "ETL produces consistent dashboard input.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Parse timestamps and standardise time zones.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Remove bots/duplicates and invalid events.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Aggregate raw events into sessions or daily totals.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Transformations improve quality and reduce size.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Documentation explains rules and supports debugging/audit.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "It ensures repeatability when sources change.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Extract/transform/load; timestamp parsing, deduplication, aggregation; documentation for repeatability."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u7-l1-notes",
      title: "Data sources and preparation — notes",
      summary: "Choose relevant structured/unstructured sources; clean for accuracy, completeness, consistency and validity using ETL.",
      sections: [
        { heading: "Sources", body: "Internal data shows performance; external data adds context; big data adds volume, velocity and variety." },
        { heading: "Quality", body: "Data must be accurate, complete, consistent, timely, valid and unique." },
        { heading: "ETL", body: "Extract, transform and load prepares raw data for dashboards and analysis." },
      ],
    },
  ],
};
