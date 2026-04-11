// import { Button } from "@/components/ui/button"

// export function ButtonOutline({ level }: { level: string }) {
//   return <Button className="bg-transparent text-white rounded-none hover:bg-transparent hover:text-white font-normal drop-shadow-xl" variant="outline">{level}</Button>
// }

import { Button } from "@/components/ui/button";

interface ButtonOutlineProps {
  level: string;
  onClick?: () => void; // 👈 add this
}

export function ButtonOutline({ level, onClick }: ButtonOutlineProps) {
  return (
    <Button
      onClick={onClick} // 👈 apply it here
      className="bg-transparent text-white rounded-none hover:bg-transparent hover:text-white font-normal drop-shadow-xl"
      variant="outline"
    >
      {level}
    </Button>
  );
}
