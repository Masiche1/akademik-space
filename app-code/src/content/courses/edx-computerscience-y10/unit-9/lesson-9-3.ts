import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ecs10-u9-lesson-9-3",
  code: "9-3",
  title: "Compression and Storage Calculations",
  goal: "I CAN distinguish lossy and lossless compression and calculate storage needs for real files.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data representation"],
  
  vocabulary: [
    { term: "Compression", definition: "Reducing the size of a file by encoding data more efficiently." },
    { term: "Lossy compression", definition: "Compression that permanently discards some data, reducing quality but greatly shrinking files." },
    { term: "Lossless compression", definition: "Compression that allows the original file to be fully restored." },
    { term: "Run-length encoding", definition: "A lossless method storing repeated values as a count plus the value." },
    { term: "File size calculation", definition: "Working out storage needed from resolution, colour depth or sample parameters." },
  ],
  concepts: [
    {
      id: "ecs10-u9-compression",
      title: "Data compression",
      skill: "Distinguish lossy and lossless compression and apply simple compression techniques.",
      lesson: {
        sections: [
          {
            heading: "Why compress?",
            body: "Uncompressed files are large — a single photo can be several megabytes and a song several megabytes of audio. **Compression** reduces file size so data stores in less space and transmits faster over networks. The trade-off is always between **size** and **quality/fidelity**: squeeze harder and either quality drops or reconstruction takes longer.",
          },
          {
            heading: "Lossy vs lossless",
            body: "**Lossy** compression permanently removes data the algorithm judges unimportant — JPEG photos and MP3 audio are lossy. Files shrink dramatically, but repeated saving degrades quality ('generation loss'). **Lossless** compression finds redundancy without discarding anything — PNG images, ZIP archives, text files — so the original can be perfectly restored. **Run-length encoding** is a simple lossless method: 'AAAAABBB' becomes '5A3B'.",
          },
        ],
        keyFormulas: [
          { name: "Lossy", statement: "discards data permanently — smaller files, lower quality." },
          { name: "Lossless", statement: "removes redundancy only — original fully restorable." },
          { name: "Run-length encoding", statement: "store (count, value) pairs for repeated runs." },
        ],
        workedExample: {
          problem: "Encode the string WWWWWAAABBB using run-length encoding.",
          solution: "5 W's, 3 A's, 3 B's → '5W3A3B' — 6 characters instead of 11.",
        },
      },
      questions: [
        {
          id: "ecs10-u9-compression-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement about lossy compression is correct?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The original file can always be perfectly restored"
                    },
                    {
                              "id": "b",
                              "text": "Some data is permanently discarded to reduce size"
                    },
                    {
                              "id": "c",
                              "text": "It is only used for text files"
                    },
                    {
                              "id": "d",
                              "text": "It makes files larger but faster to send"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lossy compression",
                              "statement": "Permanently discards data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lossy compression throws away 'unimportant' data, so the original cannot be fully recovered.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Data permanently discarded",
          "commonErrors": [
                    "Confusing lossy with lossless — only lossless restores perfectly."
          ]
},
        },
        {
          id: "ecs10-u9-compression-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A file of 800 kB is compressed to 200 kB. What percentage reduction in size was achieved?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 75
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Compression percentage",
                              "statement": "(original − compressed) ÷ original × 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reduction = 800 − 200 = 600 kB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "600 ÷ 800 = 0.75.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "0.75 × 100 = 75% reduction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "75%",
          "commonErrors": [
                    "Dividing by the compressed size instead of the original."
          ]
},
        },
        {
          id: "ecs10-u9-compression-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain lossy compression with an example, and state when it is an acceptable choice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lossy compression",
                              "statement": "Removes data judged unimportant; quality drops."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lossy compression permanently discards data the algorithm deems imperceptible.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: JPEG removes fine image detail; MP3 removes sounds masked by louder ones.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Acceptable when some quality loss is tolerable, e.g. web photos or streamed music.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Not acceptable for documents, code or medical images where exact data matters.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Discards 'unimportant' data (JPEG/MP3); OK when quality loss is acceptable.",
          "commonErrors": [
                    "Claiming lossy files can be restored to the original — they cannot."
          ]
},
        },
        {
          id: "ecs10-u9-compression-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A photographer must choose how to compress thousands of images for an online gallery.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Distinguish between lossy and lossless compression, giving an example of each.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why compression is needed before uploading the images.",
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
                              "name": "Lossy vs lossless",
                              "statement": "Permanent loss vs full restoration."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Lossy discards data permanently — smaller files, lower quality (JPEG).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lossless removes only redundancy — original fully restored (PNG, ZIP).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Example given for each: JPEG photo vs PNG logo/screenshot.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Uncompressed photos are several MB each — thousands would need huge storage/bandwidth.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Smaller files upload faster and cost less to store and transmit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Compression trades a little quality for major size savings — usually worthwhile online.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) lossy=JPEG, lossless=PNG/ZIP (b) smaller files save storage and upload time.",
          "commonErrors": [
                    "Thinking compression is only about storage — it also speeds up transmission."
          ]
},
        },
        {
          id: "ecs10-u9-compression-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A text file contains the string 'AAAAABBBCCAAAA'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how run-length encoding compresses this string.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write the run-length encoded form and state how many characters it saves.",
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
                              "name": "Run-length encoding",
                              "statement": "Store count + value for each run."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Count consecutive identical characters.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each run is stored as (count, character) instead of repeating the character.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lossless — the original string can be rebuilt exactly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Runs: 5 A's, 3 B's, 2 C's, 4 A's.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Encoded: '5A3B2C4A' (or 5A3B2C4A).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Encoded length = 8 characters; original = 15 characters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Saves 15 − 8 = 7 characters (~47%).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) count + value per run (b) '5A3B2C4A' — saves 7 characters.",
          "commonErrors": [
                    "Merging the two A-runs — they are separated by B and C so must stay distinct."
          ]
},
        },
        {
          id: "ecs10-u9-compression-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company stores 10,000 photos and 500 software installers on a server.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define lossy and lossless compression.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Recommend a compression type for the photos and for the installers, justifying each choice.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the effect of each choice on quality and storage.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Compression types",
                              "statement": "Lossy = permanent loss; lossless = full restore."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Lossy: permanently discards 'unimportant' data for maximum size reduction.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Quality is reduced and the original cannot be restored.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lossless: removes redundancy only; original restored perfectly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Compression ratio is typically lower than lossy but no data is lost.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Photos: lossy (JPEG) — slight quality loss acceptable for archive viewing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Installers: lossless (ZIP) — a single flipped bit corrupts the program.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Justification ties each choice to the consequence of data loss.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lossy photos: much smaller files, minor quality loss, risk of generation loss on re-save.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lossless installers: moderate savings but guaranteed identical restoration.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overall: biggest storage win from photos where quality tolerance is highest.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) lossy=discard/lossless=restore (b) photos→JPEG lossy, installers→ZIP lossless (c) size vs fidelity trade-off.",
          "commonErrors": [
                    "Using lossy compression on installers — any corruption breaks the software."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u9-storage-calcs",
      title: "Calculating storage needs",
      skill: "Calculate file sizes for images, sound and text and estimate total storage requirements.",
      lesson: {
        sections: [
          {
            heading: "File size formulas",
            body: "**Image**: size = width × height × colour depth ÷ 8 bytes. **Sound**: size = sample rate × bit depth × duration × channels ÷ 8 bytes. **Text**: size = characters × bits per character ÷ 8 bytes. Colour depth is bits per pixel (1-bit = 2 colours, 8-bit = 256, 24-bit ≈ 16.7 million); sample rate is samples per second (e.g. 44.1 kHz).",
          },
          {
            heading: "Estimating real storage",
            body: "Real questions combine formulas with units and capacity: work out one file's size, multiply by the number of files, convert to a convenient unit (1024-based), then compare with device capacity. **Compression** reduces the result — apply an estimated ratio if the question gives one. Always state assumptions, since 'average file size' is an estimate.",
          },
        ],
        keyFormulas: [
          { name: "Image size", statement: "(width × height × colour depth) ÷ 8 bytes." },
          { name: "Sound size", statement: "(sample rate × bit depth × duration × channels) ÷ 8 bytes." },
          { name: "Text size", statement: "(characters × bits per character) ÷ 8 bytes." },
        ],
        workedExample: {
          problem: "Calculate the size of a 1024×768 image with 24-bit colour depth.",
          solution: "1024 × 768 × 24 ÷ 8 = 2,359,296 bytes = 2304 kB = 2.25 MB.",
        },
      },
      questions: [
        {
          id: "ecs10-u9-storage-calcs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which formula gives the file size of an uncompressed image in bytes?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "width × height × colour depth ÷ 8"
                    },
                    {
                              "id": "b",
                              "text": "width × height × 8"
                    },
                    {
                              "id": "c",
                              "text": "width × height ÷ colour depth"
                    },
                    {
                              "id": "d",
                              "text": "colour depth × 8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Image file size",
                              "statement": "pixels × bits per pixel ÷ 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total bits = width × height × colour depth; bytes = bits ÷ 8.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) width × height × colour depth ÷ 8",
          "commonErrors": [
                    "Forgetting ÷8 — the formula counts bits, not bytes."
          ]
},
        },
        {
          id: "ecs10-u9-storage-calcs-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A 512×512 pixel image uses 8-bit colour depth. What is its size in kB (1 kB = 1024 bytes)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 256,
                              "unit": "kB"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Image size calculation",
                              "statement": "w × h × depth ÷ 8 = bytes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "512 × 512 × 8 = 2,097,152 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "÷ 8 = 262,144 bytes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "262,144 ÷ 1024 = 256 kB.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "256 kB",
          "commonErrors": [
                    "Stopping at bytes or forgetting the ÷8 bit-to-byte conversion."
          ]
},
        },
        {
          id: "ecs10-u9-storage-calcs-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain four factors that affect the file size of a digital photograph.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Factors in file size",
                              "statement": "Resolution, colour depth, format, compression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resolution (width × height) — more pixels means more data.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Colour depth — more bits per pixel means more colours but larger files.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Image format — PNG vs JPEG store data differently.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compression — lossy JPEG shrinks files at some quality cost.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Resolution, colour depth, format and compression level.",
          "commonErrors": [
                    "Listing only resolution — colour depth and compression matter as much."
          ]
},
        },
        {
          id: "ecs10-u9-storage-calcs-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A 640×480 pixel image is stored with 16-bit colour depth.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the file size in bytes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Convert your answer to kilobytes.",
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
                              "name": "Image size calculation",
                              "statement": "w × h × depth ÷ 8 = bytes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "640 × 480 = 307,200 pixels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "307,200 × 16 = 4,915,200 bits ÷ 8.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Size = 614,400 bytes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "614,400 ÷ 1024.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "= 600 exactly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Size = 600 kB.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 614,400 bytes (b) 600 kB",
          "commonErrors": [
                    "Multiplying by 16 but forgetting to divide by 8 for bytes."
          ]
},
        },
        {
          id: "ecs10-u9-storage-calcs-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A school camera produces uncompressed 1024×768 images with 24-bit colour depth. It takes 50 photos per day.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the size of one photo in MB (1 MB = 1024 kB = 1,048,576 bytes).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the total storage needed for one day of photos.",
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
                              "name": "Multi-step storage estimate",
                              "statement": "per-file size × count, then convert units."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "1024 × 768 × 24 ÷ 8 = 2,359,296 bytes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "2,359,296 ÷ 1,048,576 = 2.25 MB per photo.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "(Equivalent: 2304 kB.)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "50 × 2.25 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "= 112.5 MB per day.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Check: 50 × 2304 kB = 115,200 kB ÷ 1024 = 112.5 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "One day needs ≈ 112.5 MB of storage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 2.25 MB (b) 112.5 MB per day",
          "commonErrors": [
                    "Using 1 MB = 1,000,000 bytes inconsistently — the question defines 1 MB = 1,048,576 bytes."
          ]
},
        },
        {
          id: "ecs10-u9-storage-calcs-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company must back up 500 photos (each 2.25 MB) and 200 video files (each 700 MB) to a 1 TB drive.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the total size of the photos and videos in MB.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Convert the total to GB and state whether it fits on the 1 TB drive.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate two factors the company should consider before relying on this estimate.",
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
                              "name": "Storage estimation",
                              "statement": "Sum file sizes, convert, compare to capacity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Photos: 500 × 2.25 = 1125 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Videos: 200 × 700 = 140,000 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Total = 141,125 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Working shown for both multiplications and the sum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "141,125 ÷ 1024 ≈ 137.8 GB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "1 TB = 1024 GB, so 137.8 GB « 1024 GB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Yes — the data fits with large headroom.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "File sizes are averages — real videos may be much larger.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The drive's formatted capacity and file-system overhead reduce usable space.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Future growth and keeping free space mean the estimate should include a safety margin.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) 141,125 MB (b) ≈ 137.8 GB — fits easily (c) averages may underestimate; overhead and growth.",
          "commonErrors": [
                    "Comparing MB directly to TB without converting to the same unit."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u9-compression-notes",
      title: "Compression and storage calculations — notes",
      summary: "Lossy discards data, lossless restores fully; image/sound/text size formulas; estimate then compare capacity.",
      sections: [
        { heading: "Compression", body: "Lossy (JPEG/MP3) = smaller, quality lost permanently. Lossless (PNG/ZIP) = full restore. RLE stores count+value runs." },
        { heading: "Size formulas", body: "Image: w × h × depth ÷ 8. Sound: rate × depth × time × channels ÷ 8. Text: chars × bits ÷ 8." },
        { heading: "Estimates", body: "One file size × count → convert units (1024) → compare with capacity → round down, allow headroom." },
      ],
    },
  ],
};
