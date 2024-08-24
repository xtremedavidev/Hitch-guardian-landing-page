import { cn } from "@/utils";
import { FC } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface RoundedBtnWithIconProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  btnText: string;
  iconColor?: string;
}

export const RoundedBtnWithRightIcon: FC<RoundedBtnWithIconProps> = ({
  btnText,
  className,
  iconColor = "#D2D4D7",
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        `flex shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#22262F] px-[16.5px] py-[11.5px] font-medium text-[#D2D4D7]`,
        className,
      )}
    >
      <span>{btnText}</span>
      <MdKeyboardArrowRight size={17} color={iconColor} />
    </button>
  );
};
