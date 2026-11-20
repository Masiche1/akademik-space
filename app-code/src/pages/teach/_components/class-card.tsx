import { Link } from "react-router-dom";
import { BookOpen, Users } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge.tsx";
import { classPath, type PortalClass } from "../_lib/teach.ts";

export default function ClassCard({ cls, index, showTeacher }: { cls: PortalClass; index: number; showTeacher: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index, 8) * 0.04, duration: 0.25, ease: "easeOut" }}>
      <Link to={classPath(cls._id)}
        className="group flex h-full min-w-0 flex-col gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-chart-1/60 cursor-pointer">
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="truncate font-serif text-lg font-semibold group-hover:text-chart-1">{cls.name}</p>
            {cls.isMine && showTeacher && <Badge variant="secondary">Mine</Badge>}
          </div>
          {showTeacher && <p className="truncate text-sm text-muted-foreground">{cls.teacherName}</p>}
        </div>
        <div className="mt-auto flex gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Users className="size-4" /> {cls.studentCount} {cls.studentCount === 1 ? "student" : "students"}</span>
          <span className="flex items-center gap-1.5"><BookOpen className="size-4" /> {cls.courseCount} {cls.courseCount === 1 ? "course" : "courses"}</span>
        </div>
      </Link>
    </motion.div>
  );
}
