import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ecs10-u9-lesson-9-2",
  code: "9-2",
  title: "Character Encoding and Text Files",
  goal: "I CAN explain ASCII and Unicode, interpret character codes, and calculate text file sizes.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data representation"],
  
  vocabulary: [
    { term: "ASCII", definition: "American Standard Code for Information Interchange — a 7-bit code mapping 128 characters to numbers." },
    { term: "Extended ASCII", definition: "An 8-bit extension of ASCII providing 256 character codes." },
    { term: "Unicode", definition: "A universal character encoding covering characters from all writing systems and symbols." },
    { term: "UTF-8", definition: "A variable-length Unicode encoding using 1-4 bytes per character." },
    { term: "Delimiter", definition: "A character such as a comma, tab or space separating fields in a text file." },
    { term: "CSV", definition: "Comma-Separated Values — a plain-text format with one record per line and commas between fields." },
  ],
  concepts: [
    {
      id: "ecs10-u9-character-codes",
      title: "ASCII and Unicode",
      skill: "Explain character encoding schemes and use character codes to represent text as numbers.",
      lesson: {
        sections: [
          {
            heading: "ASCII",
            body: "**ASCII** (American Standard Code for Information Interchange) assigns a unique number to each character using 7 bits, giving 128 codes: control characters, digits, uppercase letters, lowercase letters and punctuation. The pattern is predictable — uppercase 'A' = 65, 'B' = 66, so 'Z' = 90; lowercase 'a' = 97 through 'z' = 122. Because every character becomes a number, text can be stored and transmitted as binary.",
          },
          {
            heading: "Extended ASCII and Unicode",
            body: "**Extended ASCII** uses 8 bits for 256 codes, adding accented and extra symbols — but still cannot cover all world languages. **Unicode** was created to encode every character in every writing system plus symbols and emoji. **UTF-8** is the common Unicode form: it uses a variable number of bytes per character (1 byte for basic Latin, up to 4 for rare symbols), so English text stays compact while all languages are supported.",
          },
        ],
        keyFormulas: [
          { name: "ASCII", statement: "7 bits → 128 codes; A=65, a=97." },
          { name: "Extended ASCII", statement: "8 bits → 256 codes." },
          { name: "UTF-8", statement: "variable length: 1-4 bytes per character." },
        ],
        workedExample: {
          problem: "What binary code does ASCII give for the character 'A' (code 65)?",
          solution: "65 = 64 + 1 = 1000001₂, stored in 7 bits as 1000001.",
        },
      },
      questions: [
        {
          id: "ecs10-u9-character-codes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does ASCII stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Automatic Standard Code for Information Interchange"
                    },
                    {
                              "id": "b",
                              "text": "American Standard Code for Information Interchange"
                    },
                    {
                              "id": "c",
                              "text": "Advanced System for Computerised Information"
                    },
                    {
                              "id": "d",
                              "text": "Alphabetical Standard Character Index"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ASCII",
                              "statement": "American Standard Code for Information Interchange."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ASCII = American Standard Code for Information Interchange — the standard 7-bit character code.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) American Standard Code for Information Interchange",
          "commonErrors": [
                    "Choosing 'Automatic' — the standard stands for American."
          ]
},
        },
        {
          id: "ecs10-u9-character-codes-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "In ASCII, 'A' has the code 65 and 'B' has 66. What is the code for 'C'?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 67
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ASCII ordering",
                              "statement": "Uppercase letters are consecutive codes from 65."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uppercase letters follow consecutive codes: A=65, B=66.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "So C = 66 + 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "C = 67.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "67",
          "commonErrors": [
                    "Using lowercase codes — 'a' starts at 97, not 65."
          ]
},
        },
        {
          id: "ecs10-u9-character-codes-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the Unicode standard was developed, and how it differs from ASCII.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "ASCII vs Unicode",
                              "statement": "128 English codes vs universal coverage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ASCII only has 128 codes — enough for basic English but not other languages or symbols.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Unicode was developed to represent every character in every writing system.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It also covers emoji, mathematical symbols and historic scripts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Unlike fixed-length ASCII, Unicode encodings like UTF-8 use variable bytes per character.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "ASCII too limited; Unicode covers all languages/symbols with variable-length encoding.",
          "commonErrors": [
                    "Saying Unicode replaced ASCII entirely — Unicode is a superset that includes ASCII's characters."
          ]
},
        },
        {
          id: "ecs10-u9-character-codes-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A programmer is working with ASCII character codes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "The ASCII code for 'H' is 72. Write 72 as an 8-bit binary number.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two limitations of the ASCII standard.",
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
                              "name": "Character code conversion",
                              "statement": "Denary code → binary, padded to byte width."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "72 = 64 + 8 = 1001000₂.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pad to 8 bits: 01001000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Answer: 01001000₂.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only 128 characters — cannot represent most world languages.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "No emoji or many symbols; extended ASCII adds only 128 more codes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Different extended-ASCII variants are incompatible across systems.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) 01001000₂ (b) limited character set, no emoji, incompatible extensions.",
          "commonErrors": [
                    "Writing 1001000 without padding — character storage uses whole bytes."
          ]
},
        },
        {
          id: "ecs10-u9-character-codes-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A website stores user profiles containing names, comments and emoji reactions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how UTF-8 encodes characters and why this is efficient.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why emoji and non-Latin names cannot be stored correctly using plain ASCII.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "UTF-8",
                              "statement": "Variable-length Unicode: 1-4 bytes per character."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "UTF-8 uses 1 byte for common Latin characters, up to 4 bytes for rare ones.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Frequent characters stay small, so typical English text is compact.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Rare characters still get unique codes without wasting space on common ones.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "ASCII has only 128 codes — emoji and scripts like Chinese have no codes at all.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Attempting to store them produces '?' or corrupted characters.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Names in other scripts would be unreadable or rejected.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only Unicode-based encoding can represent all these characters correctly.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) 1-4 bytes, compact for common chars (b) ASCII lacks codes → '?' / corruption; need Unicode.",
          "commonErrors": [
                    "Assuming ASCII can be 'extended' to cover everything — only Unicode does."
          ]
},
        },
        {
          id: "ecs10-u9-character-codes-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An international school wants to store student names in English, Arabic and Chinese on its database server.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define ASCII and Unicode, stating the number of codes each can represent.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the problem the school would face if it stored names using ASCII.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the school's decision to use UTF-8 encoded Unicode for all names.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Character encoding choice",
                              "statement": "ASCII: 128 codes, English only; Unicode: universal."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "ASCII: 7-bit code, 128 characters, basic English set.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "ASCII includes digits, uppercase, lowercase, punctuation and control codes.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Unicode: encodes all writing systems, symbols and emoji.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "UTF-8 uses 1-4 bytes per character depending on the symbol.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Arabic and Chinese characters have no ASCII codes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Names would be stored as '?' or mojibake — unusable records.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Some names might collide or be rejected by validation routines.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "UTF-8 handles every script correctly — names display as intended.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "English names still use only 1 byte per character, so storage stays efficient.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "One encoding for all data avoids conversion errors — clearly the right choice.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) ASCII 128 codes / Unicode universal, UTF-8 variable bytes (b) names become '?' or corrupt (c) UTF-8 correct and efficient.",
          "commonErrors": [
                    "Thinking Unicode always uses more space — UTF-8 is compact for common characters."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u9-text-files",
      title: "Text files, delimiters and file size",
      skill: "Explain how plain-text data files are structured and calculate their sizes.",
      lesson: {
        sections: [
          {
            heading: "Plain text storage",
            body: "A **plain text file** stores only character codes — no formatting. Each character occupies one code (8 bits in extended ASCII, 1 byte in UTF-8 for Latin text). Because there is no structure built in, fields must be separated by a **delimiter**: commonly a comma (CSV), tab or space. Each line typically holds one record.",
          },
          {
            heading: "Delimited vs fixed-width",
            body: "**Delimited** files separate fields with a delimiter character — flexible field lengths but fields containing the delimiter cause errors. **Fixed-width** files pad every field to the same length — no delimiter needed but wastes space on short values. Either way, **file size = total characters × bits per character ÷ 8** gives bytes (ignoring line-ending and formatting overhead).",
          },
        ],
        keyFormulas: [
          { name: "Text file size", statement: "total characters × bits per character ÷ 8 = bytes." },
          { name: "CSV", statement: "one record per line; fields separated by commas." },
        ],
        workedExample: {
          problem: "A CSV file has 50 records, each 20 characters long, stored with 8 bits per character. Find the size in bytes.",
          solution: "50 × 20 = 1000 characters × 8 bits = 8000 bits ÷ 8 = 1000 bytes.",
        },
      },
      questions: [
        {
          id: "ecs10-u9-text-files-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the role of a delimiter in a plain text data file?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It encrypts the file contents"
                    },
                    {
                              "id": "b",
                              "text": "It separates fields within a record"
                    },
                    {
                              "id": "c",
                              "text": "It compresses repeated characters"
                    },
                    {
                              "id": "d",
                              "text": "It marks the end of the file"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Delimiter",
                              "statement": "Character separating fields in text data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A delimiter (comma, tab, space) marks where one field ends and the next begins.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Separates fields",
          "commonErrors": [
                    "Confusing delimiters with line breaks — those separate records."
          ]
},
        },
        {
          id: "ecs10-u9-text-files-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A text file contains 300 characters, each stored using 8 bits. What is the file size in bytes?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 300
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Text file size",
                              "statement": "chars × bits ÷ 8 = bytes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "300 × 8 = 2400 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "2400 ÷ 8 = 300.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "With 8 bits per character, bytes equal character count: 300 bytes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "300 bytes",
          "commonErrors": [
                    "Multiplying by 8 twice — bits already divide back to bytes here."
          ]
},
        },
        {
          id: "ecs10-u9-text-files-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why delimiters are needed in plain text data files, and give one problem they can cause.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Delimited data",
                              "statement": "Delimiter marks field boundaries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plain text has no built-in structure — delimiters mark where fields begin and end.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Without them a program cannot tell where one field stops and the next starts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Problem: if a field's own data contains the delimiter (e.g. a comma in a name), parsing breaks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Solutions include choosing a different delimiter, escaping, or quoting the field.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Delimiters separate fields; data containing the delimiter character breaks parsing.",
          "commonErrors": [
                    "Saying delimiters compress data — they only mark boundaries."
          ]
},
        },
        {
          id: "ecs10-u9-text-files-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A CSV file stores exam results as records like 'Ali,85'. Each record is 6 characters including the comma.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the total number of characters in a file containing 100 records.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the file size in bytes, assuming 8 bits per character.",
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
                              "name": "Record counting",
                              "statement": "records × chars per record = total characters."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "100 records × 6 characters per record.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "100 × 6 = 600.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Total = 600 characters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "8 bits per character → 600 × 8 = 4800 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "4800 ÷ 8 = 600.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "File size = 600 bytes (line-ending characters would add a little more).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) 600 characters (b) 600 bytes",
          "commonErrors": [
                    "Forgetting the comma counts as a stored character."
          ]
},
        },
        {
          id: "ecs10-u9-text-files-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A library catalogue text file contains 500 records, each averaging 15 characters.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the difference between delimited and fixed-width text files.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the file size in bytes, assuming 8 bits per character.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Delimited vs fixed-width",
                              "statement": "Delimiter-separated vs padded equal-length fields."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Delimited files separate fields with a delimiter character like a comma.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Fixed-width files pad every field to the same length instead.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Delimited is flexible but breaks if data contains the delimiter; fixed-width wastes space.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Total characters = 500 × 15 = 7500.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bits = 7500 × 8 = 60,000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bytes = 60,000 ÷ 8 = 7500.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "File size ≈ 7500 bytes ≈ 7.3 kB.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) delimiter-separated vs padded fields (b) ≈ 7500 bytes",
          "commonErrors": [
                    "With 8 bits per character, bytes equal characters — but show the working anyway."
          ]
},
        },
        {
          id: "ecs10-u9-text-files-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school club wants to store its 2000 members' details in a plain text file.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest three fields to store for each member and state the delimiter you would use, justifying your choice.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Calculate the file size if each record averages 25 characters stored with 8 bits per character.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether a plain text file or a database table is more appropriate for this data.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Data file design",
                              "statement": "Fields + delimiter; size = chars × 8 ÷ 8 bytes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fields e.g. member ID, name, year group, membership status.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Delimiter: comma (CSV) or tab — separates fields clearly on one line.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "One record per line keeps records distinct.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Justification: CSV is simple, readable and supported by spreadsheets and programs.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "2000 × 25 = 50,000 characters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "50,000 × 8 = 400,000 bits ÷ 8 = 50,000 bytes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Size ≈ 50,000 bytes ≈ 48.8 kB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Text file: simple, portable, human-readable — fine for a small static list.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Database: better for searching, updating and validating 2000 records regularly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Conclusion: if data changes often or needs queries, use a database; text file suffices for a simple export.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) fields + comma delimiter + one record/line (b) ≈ 50,000 bytes (c) database better if updated/queried.",
          "commonErrors": [
                    "Choosing a delimiter that appears inside the data itself, e.g. commas inside names."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u9-character-encoding-notes",
      title: "Character encoding and text files — notes",
      summary: "ASCII = 128 codes; Unicode/UTF-8 = universal; delimiters structure plain text; size = chars × 8 ÷ 8.",
      sections: [
        { heading: "ASCII vs Unicode", body: "ASCII: 7 bits, 128 chars, English only (A=65, a=97). Unicode covers all scripts; UTF-8 uses 1-4 bytes per character." },
        { heading: "Text file structure", body: "One record per line; fields separated by a delimiter (comma/tab). Delimited = flexible, fixed-width = padded fields." },
        { heading: "Size", body: "bytes = characters × bits per character ÷ 8. With 8 bits per character, bytes = characters." },
      ],
    },
  ],
};
