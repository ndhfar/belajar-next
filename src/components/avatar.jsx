export const Avatar = ({ username }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-indigo-500 w-10 h-10 text-xl font-bold text-white">
      {username.charAt(0)}
    </div>
  );
};
