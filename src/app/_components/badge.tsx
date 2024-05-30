import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

interface BadgeProps {
  option: "success" | "error" | "default"
}

const Badge = ({ option }: BadgeProps) => {
  return (
    <div className={`flex items-center border ${option === "success" || option === "default" ? "border-[#24D861] shadow-[0px_1px_8px_0px_#24D861CC]" : "border-[#DE3449]  shadow-[0px_1px_8px_0px_#DE3449]"} border-solid  rounded-md  pr-1`}>
      {
        option === "success" || option === "default" ? (
          <>
            <ArrowUpRight size={14} className="text-[#24D861]" />  <span className="text-[#24D861] text-xs font-semibold">2.13%</span>
          </>
        ) : (
          <>
            <ArrowDownLeft size={14} className="text-[#DE3449]" />  <span className="text-[#DE3449] text-xs font-semibold">2.13%</span>
          </>
        )
      }
    </div>
  );
}

export default Badge;