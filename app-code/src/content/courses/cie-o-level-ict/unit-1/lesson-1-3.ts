import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olict-u1-lesson-1-3",
  code: "1-3",
  title: "ICT Systems in Context",
  goal: "I CAN describe how ICT systems are used in different organisations and sectors.",
  standards: ["7014 1.3"],
  vocabulary: [
    { term: "ICT system", definition: "Integrated hardware, software, data, people and procedures." },
    { term: "CAD/CAM", definition: "Computer-Aided Design/Manufacturing — design and production using computers." },
    { term: "E-commerce", definition: "Buying and selling goods/services online." },
    { term: "MIS", definition: "Management Information System — provides managers with data for decisions." },
    { term: "Point of Sale (POS)", definition: "System recording sales transactions at checkout." },
    { term: "Electronic patient record", definition: "Digital storage of patient medical data." },
  ],
  concepts: [
    {
      id: "olict-u1-business",
      title: "ICT in business and commerce",
      skill: "Describe ICT uses in retail, manufacturing and management.",
      lesson: {
        sections: [
          { heading: "Retail", body: "- **Point of Sale (POS)**: barcode scanning, automatic stock updates, sales reports.\n- **E-commerce**: online shops, electronic payments, customer databases.\n- **Loyalty systems**: track purchases for targeted offers." },
          { heading: "Manufacturing", body: "- **CAD**: design products on screen before building.\n- **CAM**: machines controlled by computers to cut/assemble parts.\n- **Stock control**: sensors track raw materials and finished goods." },
          { heading: "Management", body: "**MIS** (Management Information System) gathers data — sales figures, stock levels — and produces reports helping managers make decisions." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does a supermarket's ICT system reduce waste?",
          solution: "POS scans update stock in real time; low-stock alerts trigger reordering; sales data predicts demand — less over-ordering.",
        },
      },
      questions: [
        {
          id: "olict-u1-bc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "POS stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Point of Sale" },
            { id: "b", text: "Point of Service" },
            { id: "c", text: "Print of Screen" },
            { id: "d", text: "Process of Sale" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "POS", statement: "Point of Sale system." }], steps: [{ reasoning: "POS = Point of Sale.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Point of Sale" },
        },
        {
          id: "olict-u1-bc-q2", difficulty: "core", totalMarks: 2,
          stem: "What is an MIS?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "MIS", statement: "Data for management decisions." }], steps: [
            { reasoning: "Gathers organisational data.", marks: 1, markCode: "M" },
            { reasoning: "Produces reports for managers.", marks: 1, markCode: "A" },
          ], finalAnswer: "Management Information System — collects data and produces reports for management decisions." },
        },
        {
          id: "olict-u1-bc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two ways CAD/CAM benefits a manufacturing company.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "CAD/CAM", statement: "Design and production automation." }], steps: [
            { reasoning: "CAD: design/test virtually before production.", marks: 1, markCode: "M" },
            { reasoning: "CAM: precise automated production.", marks: 1, markCode: "M" },
            { reasoning: "Less waste/errors, faster production.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "CAD allows virtual design/testing; CAM gives precise automated production — less waste, faster." },
        },
        {
          id: "olict-u1-bc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "ICT in organisations review.",
          parts: [
            { label: "a", prompt: "What does POS do in a shop?", marks: 2 },
            { label: "b", prompt: "Define MIS.", marks: 2 },
            { label: "c", prompt: "Distinguish CAD from CAM.", marks: 2 },
            { label: "d", prompt: "Give one ICT use in healthcare.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "ICT in business", statement: "POS, MIS, CAD/CAM, sector uses." },
          ], steps: [
            { part: "a", reasoning: "Records sales + updates stock.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct description.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Data system for management.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "CAD: design.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "CAM: manufacture.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Electronic patient records.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Benefit explained.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid use.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sales+stock (b) mgmt info system (c) design vs manufacture (d) patient records" },
        },
        {
          id: "olict-u1-bc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "CAD stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Computer-Aided Design" },
            { id: "b", text: "Central Accounting Database" },
            { id: "c", text: "Controlled Access Device" },
            { id: "d", text: "Computer-Automated Data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "CAD", statement: "Computer-Aided Design." }], steps: [{ reasoning: "CAD = Computer-Aided Design.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Computer-Aided Design" },
        },
        {
          id: "olict-u1-bc-q6", difficulty: "core", totalMarks: 1,
          stem: "Which ICT system records sales at the checkout and updates stock automatically?",
          response: { type: "mcq", choices: [
            { id: "a", text: "CAD" },
            { id: "b", text: "EPR" },
            { id: "c", text: "Point of Sale (POS)" },
            { id: "d", text: "VLE" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "POS", statement: "Sales + stock updates." }], steps: [{ reasoning: "POS records sales and updates stock.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Point of Sale (POS)" },
        },
        {
          id: "olict-u1-bc-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A shop sells 45 items per hour for 8 hours. How many items are sold in total?",
          response: { type: "numeric", parts: [{ label: "items", answer: 360 }] },
          markscheme: { principles: [{ kind: "principle", name: "Sales volume", statement: "Rate × time." }], steps: [
            { reasoning: "45 × 8.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 360 items.", marks: 1, markCode: "A" },
          ], finalAnswer: "360 items" },
        },
        {
          id: "olict-u1-bc-q8", difficulty: "core", totalMarks: 1,
          stem: "Buying and selling goods and services over the internet is called…",
          response: { type: "mcq", choices: [
            { id: "a", text: "E-commerce" },
            { id: "b", text: "Teleworking" },
            { id: "c", text: "Spamming" },
            { id: "d", text: "E-government" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "E-commerce", statement: "Online buying and selling." }], steps: [{ reasoning: "E-commerce = online trade.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** E-commerce" },
        },
        {
          id: "olict-u1-bc-q9", difficulty: "core", totalMarks: 2,
          stem: "A store has 3 tills, each processing 250 transactions per day. How many transactions are processed per day in total?",
          response: { type: "numeric", parts: [{ label: "transactions", answer: 750 }] },
          markscheme: { principles: [{ kind: "principle", name: "Transaction volume", statement: "Rate × tills." }], steps: [
            { reasoning: "250 × 3.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 750 transactions.", marks: 1, markCode: "A" },
          ], finalAnswer: "750 transactions" },
        },
        {
          id: "olict-u1-bc-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two benefits of a loyalty system for a supermarket.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Loyalty systems", statement: "Track purchases for offers." }], steps: [
            { reasoning: "Tracks customer purchases.", marks: 1, markCode: "M" },
            { reasoning: "Enables targeted offers/discounts.", marks: 1, markCode: "M" },
            { reasoning: "Encourages repeat custom.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Tracks purchases to send targeted offers, encouraging customers to return and spend more." },
        },
        {
          id: "olict-u1-bc-q11", difficulty: "foundation", totalMarks: 1,
          stem: "An MIS helps managers mainly by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Controlling machines" },
            { id: "b", text: "Producing reports from organisational data" },
            { id: "c", text: "Printing receipts" },
            { id: "d", text: "Scanning barcodes" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "MIS", statement: "Data → reports for decisions." }], steps: [{ reasoning: "MIS produces reports for managers.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Producing reports from organisational data" },
        },
        {
          id: "olict-u1-bc-q12", difficulty: "core", totalMarks: 2,
          stem: "Distinguish between CAD and CAM.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "CAD/CAM", statement: "Design vs manufacture." }], steps: [
            { reasoning: "CAD = designing products on screen.", marks: 1, markCode: "M" },
            { reasoning: "CAM = computers controlling manufacturing machines.", marks: 1, markCode: "A" },
          ], finalAnswer: "CAD designs products virtually; CAM uses computers to control the machines that manufacture them." },
        },
        {
          id: "olict-u1-bc-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A factory produces 1200 units per day and rejects 5% as faulty. How many good units are produced per day?",
          response: { type: "numeric", parts: [{ label: "units", answer: 1140 }] },
          markscheme: { principles: [{ kind: "principle", name: "Quality control", statement: "Reject rate reduces output." }], steps: [
            { reasoning: "Faulty = 5% of 1200 = 60.", marks: 1, markCode: "M" },
            { reasoning: "Good = 1200 − 60.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 1140 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "1140 units" },
        },
        {
          id: "olict-u1-bc-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is a manufacturing use of ICT?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Online tax returns" },
            { id: "b", text: "Virtual learning environments" },
            { id: "c", text: "CAM-controlled cutting machines" },
            { id: "d", text: "Electronic patient records" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "CAM", statement: "Computer-controlled production." }], steps: [{ reasoning: "CAM controls manufacturing machines.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** CAM-controlled cutting machines" },
        },
        {
          id: "olict-u1-bc-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a Point of Sale system helps a shop reduce stock waste.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "POS", statement: "Real-time stock updates." }], steps: [
            { reasoning: "Every sale updates stock automatically.", marks: 1, markCode: "M" },
            { reasoning: "Low-stock alerts trigger reordering.", marks: 1, markCode: "M" },
            { reasoning: "Sales data predicts demand.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "POS updates stock in real time, alerts staff to reorder and uses sales data to avoid over-ordering." },
        },
        {
          id: "olict-u1-bc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "ICT in business — extended review.",
          parts: [
            { label: "a", prompt: "What does a POS system do?", marks: 2 },
            { label: "b", prompt: "Define MIS.", marks: 2 },
            { label: "c", prompt: "Distinguish CAD from CAM.", marks: 2 },
            { label: "d", prompt: "Give one benefit of e-commerce for a business.", marks: 1 },
            { label: "e", prompt: "Give two benefits of a loyalty system.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "ICT in business", statement: "POS, MIS, CAD/CAM, e-commerce, loyalty." },
          ], steps: [
            { part: "a", reasoning: "Records sales + updates stock.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct description.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Data system for management.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "CAD: design.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "CAM: manufacture.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Reach wider market / sell online.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Tracks purchases.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Targeted offers encourage repeat custom.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sales+stock (b) mgmt info system (c) design vs manufacture (d) wider market (e) tracking+offers" },
        },
      ],
    },
    {
      id: "olict-u1-public",
      title: "ICT in public services",
      skill: "Describe ICT uses in healthcare, education and government.",
      lesson: {
        sections: [
          { heading: "Healthcare", body: "- **Electronic patient records**: instant access to medical history, test results, prescriptions.\n- **Imaging systems**: store X-rays/scans digitally.\n- **Appointment systems**: online booking reduces waiting times." },
          { heading: "Education", body: "- **Virtual learning environments**: course materials, assignments, grades online.\n- **Attendance systems**: biometric scanners register students.\n- **Library systems**: catalogue search and stock management." },
          { heading: "Government", body: "- **E-government**: online tax returns, licence applications, benefit claims — 24/7 access, less paperwork.\n- **Census data**: databases for planning services." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How do electronic patient records improve hospital care?",
          solution: "Doctors access full history instantly, avoiding duplicate tests; results shared across departments; safer prescribing with allergy alerts.",
        },
      },
      questions: [
        {
          id: "olict-u1-pb-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Electronic patient records store…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hospital bills only" },
            { id: "b", text: "Staff schedules" },
            { id: "c", text: "Medical history and test results digitally" },
            { id: "d", text: "Only prescriptions" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "EPR", statement: "Digital medical records." }], steps: [{ reasoning: "EPR = medical data.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Medical data" },
        },
        {
          id: "olict-u1-pb-q2", difficulty: "core", totalMarks: 2,
          stem: "Give two benefits of e-government.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "E-government", statement: "Online public services." }], steps: [
            { reasoning: "24/7 access, less paperwork.", marks: 1, markCode: "M" },
            { reasoning: "Faster processing/fewer queues.", marks: 1, markCode: "A" },
          ], finalAnswer: "Services available anytime online; faster processing with less paperwork." },
        },
        {
          id: "olict-u1-pb-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how ICT improves learning in schools.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "EdTech", statement: "VLEs and digital resources." }], steps: [
            { reasoning: "Access to online resources/materials.", marks: 1, markCode: "M" },
            { reasoning: "Easier submission/feedback.", marks: 1, markCode: "M" },
            { reasoning: "Supports different learning styles.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Online materials, instant feedback, flexible access — supports varied learning styles." },
        },
        {
          id: "olict-u1-pb-q4", difficulty: "challenge", totalMarks: 9,
          stem: "ICT in public services review.",
          parts: [
            { label: "a", prompt: "Name one ICT use in healthcare.", marks: 1 },
            { label: "b", prompt: "Name one ICT use in education.", marks: 1 },
            { label: "c", prompt: "Name one ICT use in government.", marks: 1 },
            { label: "d", prompt: "Give two benefits of electronic patient records.", marks: 3 },
            { label: "e", prompt: "What is a VLE?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Public ICT", statement: "Health, education, government uses." },
          ], steps: [
            { part: "a", reasoning: "EPR/imaging/appointments.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "VLE/attendance/library.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "E-government/census.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Instant access to history.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Avoids duplicate tests.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Safer care overall.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Online learning platform.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Holds materials/assignments/grades.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct definition.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) EPR (b) VLE (c) e-gov (d) instant access+no dup tests (e) online learning platform" },
        },
        {
          id: "olict-u1-pb-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A Virtual Learning Environment (VLE) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A barcode scanner" },
            { id: "b", text: "A hospital database" },
            { id: "c", text: "An online platform for course materials, assignments and grades" },
            { id: "d", text: "A type of printer" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "VLE", statement: "Online learning platform." }], steps: [{ reasoning: "VLE holds materials, assignments, grades.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Online learning platform" },
        },
        {
          id: "olict-u1-pb-q6", difficulty: "core", totalMarks: 1,
          stem: "Biometric scanners in a school are mainly used for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Printing reports" },
            { id: "b", text: "Recording attendance" },
            { id: "c", text: "Grading exams" },
            { id: "d", text: "Storing library books" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Attendance systems", statement: "Biometrics register students." }], steps: [{ reasoning: "Biometric scanners register attendance.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Recording attendance" },
        },
        {
          id: "olict-u1-pb-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A hospital has 6 wards, each with 40 beds. How many beds does the hospital have in total?",
          response: { type: "numeric", parts: [{ label: "beds", answer: 240 }] },
          markscheme: { principles: [{ kind: "principle", name: "Capacity calculation", statement: "Wards × beds." }], steps: [
            { reasoning: "6 × 40.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 240 beds.", marks: 1, markCode: "A" },
          ], finalAnswer: "240 beds" },
        },
        {
          id: "olict-u1-pb-q8", difficulty: "core", totalMarks: 2,
          stem: "Give one benefit of an online appointment booking system for a clinic.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Appointment systems", statement: "Online booking." }], steps: [
            { reasoning: "Patients book anytime without phoning.", marks: 1, markCode: "M" },
            { reasoning: "Reduces waiting times/queues.", marks: 1, markCode: "A" },
          ], finalAnswer: "Patients can book anytime, reducing phone calls and waiting times." },
        },
        {
          id: "olict-u1-pb-q9", difficulty: "core", totalMarks: 3,
          stem: "A school has 850 students and on one day 92% attend. How many students attend?",
          response: { type: "numeric", parts: [{ label: "students", answer: 782 }] },
          markscheme: { principles: [{ kind: "principle", name: "Percentage calculation", statement: "Percentage of total." }], steps: [
            { reasoning: "92% of 850 = 0.92 × 850.", marks: 1, markCode: "M" },
            { reasoning: "0.92 × 850 = 782.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 782 students.", marks: 1, markCode: "A" },
          ], finalAnswer: "782 students" },
        },
        {
          id: "olict-u1-pb-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two benefits of citizens submitting benefit claims online.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "E-government", statement: "Online public services." }], steps: [
            { reasoning: "Available 24/7 without visiting an office.", marks: 1, markCode: "M" },
            { reasoning: "Less paperwork and faster processing.", marks: 1, markCode: "M" },
            { reasoning: "Reduces queues for citizens and staff.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Citizens can claim anytime online; less paperwork, faster processing and shorter queues." },
        },
        {
          id: "olict-u1-pb-q11", difficulty: "foundation", totalMarks: 1,
          stem: "E-government allows citizens to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Store medical records" },
            { id: "b", text: "Apply for licences and pay taxes online" },
            { id: "c", text: "Only vote online" },
            { id: "d", text: "Design products" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "E-government", statement: "Online public services." }], steps: [{ reasoning: "E-government = online services like taxes/licences.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Apply for licences and pay taxes online" },
        },
        {
          id: "olict-u1-pb-q12", difficulty: "core", totalMarks: 1,
          stem: "Which of these is an ICT use in education?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Library catalogue and stock management system" },
            { id: "b", text: "CAM machine" },
            { id: "c", text: "Loyalty card system" },
            { id: "d", text: "Point of Sale system" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "EdTech", statement: "Library systems in schools." }], steps: [{ reasoning: "Library catalogue system is used in education.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Library catalogue and stock management system" },
        },
        {
          id: "olict-u1-pb-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A town has 1 200 000 residents and 40% use e-government services. How many residents use e-government services?",
          response: { type: "numeric", parts: [{ label: "residents", answer: 480000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Percentage calculation", statement: "Percentage of total." }], steps: [
            { reasoning: "40% of 1 200 000 = 0.4 × 1 200 000.", marks: 1, markCode: "M" },
            { reasoning: "= 480 000.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 480 000 residents.", marks: 1, markCode: "A" },
          ], finalAnswer: "480 000 residents" },
        },
        {
          id: "olict-u1-pb-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is NOT a public sector ICT use?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Online tax returns" },
            { id: "b", text: "Point of Sale system" },
            { id: "c", text: "Electronic patient records" },
            { id: "d", text: "Virtual learning environment" },
          ], correctChoiceIb: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Public sector ICT", statement: "Health, education, government." }], steps: [{ reasoning: "POS is a retail/business system.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Point of Sale system" },
        },
        {
          id: "olict-u1-pb-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how ICT can improve efficiency in a hospital.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Hospital ICT", statement: "Records, imaging, appointments." }], steps: [
            { reasoning: "Instant access to patient history.", marks: 1, markCode: "M" },
            { reasoning: "Avoids duplicate tests.", marks: 1, markCode: "M" },
            { reasoning: "Online booking reduces waiting times.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Digital records give instant history access, avoiding repeat tests; online appointments cut waiting times." },
        },
        {
          id: "olict-u1-pb-q16", difficulty: "challenge", totalMarks: 9,
          stem: "ICT in public services — scenario review.",
          parts: [
            { label: "a", prompt: "A council lets residents pay council tax online. Give two benefits.", marks: 2 },
            { label: "b", prompt: "Name one ICT use in healthcare.", marks: 1 },
            { label: "c", prompt: "Name one ICT use in education.", marks: 1 },
            { label: "d", prompt: "Give two benefits of a VLE for students.", marks: 3 },
            { label: "e", prompt: "How do biometric attendance systems help a school?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Public ICT", statement: "Health, education, government uses." },
          ], steps: [
            { part: "a", reasoning: "24/7 access without visiting office.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Faster payment/fewer queues.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "EPR/imaging/appointments.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "VLE/attendance/library.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Access materials anytime.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Submit work and receive feedback online.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Track grades/progress.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Fast automatic registration.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Accurate records, hard to fake.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) anytime+faster (b) EPR (c) VLE (d) access+submit+grades (e) fast+accurate attendance" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u1-1-3-notes", title: "ICT in context — notes", summary: "Business, manufacturing and public sector ICT uses.",
      sections: [
        { heading: "Business", body: "POS, e-commerce, MIS, CAD/CAM automate sales, production and decisions." },
        { heading: "Public", body: "Health: patient records. Education: VLEs. Government: e-services." },
      ] },
  ],
};
