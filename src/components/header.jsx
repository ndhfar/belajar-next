import { User } from "./user";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="text-2xl">Logo</div>
      <User />
    </div>
  );
};
