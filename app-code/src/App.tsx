import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AppLayout from "./components/app-layout.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import CoursePage from "./pages/courses/page.tsx";
import PracticePage from "./pages/practice/page.tsx";
import ProgressPage from "./pages/progress/page.tsx";
import CurriculumPage from "./pages/curricula/page.tsx";
import SignInPage from "./pages/sign-in/page.tsx";
import AccountPage from "./pages/account/page.tsx";
import TeachPage from "./pages/teach/page.tsx";
import ClassPage from "./pages/teach/classes/page.tsx";
import LearnerPage from "./pages/teach/learners/page.tsx";
import NewSetPage from "./pages/teach/sets/new/page.tsx";
import SetResultsPage from "./pages/teach/sets/page.tsx";
import SetPage from "./pages/sets/page.tsx";
import ClassReportsPage from "./pages/teach/reports/page.tsx";
import TermReportPage from "./pages/teach/term-reports/page.tsx";
import AdminPage from "./pages/admin/page.tsx";
import AdminUserPage from "./pages/admin/users/page.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/courses/:courseId" element={<CoursePage />} />
            <Route path="/practice/:questionId" element={<PracticePage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/curricula/myp" element={<Navigate to="/curricula/ib" replace />} />
            <Route path="/curricula/:slug" element={<CurriculumPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/teach" element={<TeachPage />} />
            <Route path="/teach/classes/:classId" element={<ClassPage />} />
            <Route path="/teach/:orgId/learners/:userId" element={<LearnerPage />} />
            <Route path="/teach/classes/:classId/sets/new" element={<NewSetPage />} />
            <Route path="/teach/classes/:classId/reports" element={<ClassReportsPage />} />
            <Route path="/teach/term-reports/:reportId" element={<TermReportPage />} />
            <Route path="/teach/sets/:assignmentId" element={<SetResultsPage />} />
            <Route path="/sets/:assignmentId" element={<SetPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/users/:userId" element={<AdminUserPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
