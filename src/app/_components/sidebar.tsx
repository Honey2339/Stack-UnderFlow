import {
  DiHtml53DEffects,
  DiOpera,
  DiAsterisk,
  DiScala,
  DiApple,
  DiTerminalBadge,
} from "react-icons/di";

export default function Sidebar() {
  return (
    <div className="mt-20 pl-[370px] text-sm">
      <div className="flex flex-col space-y-2">
        <div className="flex cursor-pointer items-center space-x-1 rounded px-2 py-1 transition hover:bg-slate-200">
          <DiHtml53DEffects size={22} />
          <h3>Home</h3>
        </div>
        <div className="flex cursor-pointer items-center space-x-1 rounded px-2 py-1 transition hover:bg-slate-200">
          <DiOpera size={22} />
          <h3>Questions</h3>
        </div>
        <div className="flex cursor-pointer items-center space-x-1 rounded px-2 py-1 transition hover:bg-slate-200">
          <DiAsterisk size={22} />
          <h3>Tags</h3>
        </div>
        <br />
        <div className="flex cursor-pointer items-center space-x-1 rounded px-2 py-1 transition hover:bg-slate-200">
          <DiScala size={22} />
          <h3>Saves</h3>
        </div>
        <div className="flex cursor-pointer items-center space-x-1 rounded px-2 py-1 transition hover:bg-slate-200">
          <DiTerminalBadge size={22} />
          <h3>Users</h3>
        </div>
        <div className="flex cursor-pointer items-center space-x-1 rounded px-2 py-1 transition hover:bg-slate-200">
          <DiApple size={22} />
          <h3>Companies</h3>
        </div>
      </div>
    </div>
  );
}
