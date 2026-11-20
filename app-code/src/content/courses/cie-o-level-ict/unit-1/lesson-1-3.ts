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
            { id: "a", text: "Point of Sale" }, { id: "b", text: "Print of Screen" }, { id: "c", text: "Process of Sale" }, { id: "d", text: "Point of Service" },
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
            { id: "a", text: "Medical history and test results digitally" }, { id: "b", text: "Only prescriptions" }, { id: "c", text: "Hospital bills only" }, { id: "d", text: "Staff schedules" },
          ], correctChoiceId: "a" },
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
