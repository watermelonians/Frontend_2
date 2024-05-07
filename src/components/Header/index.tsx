import Exit from "./Exit";
import DropdownUser from "./DropdownUser";
import DarkModeSwitcher from "./DarkModeSwitcher";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999999 flex w-full rounded-xl bg-[#EDF5FD] bg-gradient-to-r from-[#0B6BCB06] via-[#0B6BCB20] to-[#0B6BCB06] dark:bg-[#050C28]">
      <div className="flex flex-grow items-center justify-between py-4 md:px-6 2xl:px-4">
        {/* User Area aligned to the left */}
        <div className="flex items-center gap-4 2xsm:gap-7">
          {/* User Area */}
          <DropdownUser />
        </div>
        {/* Other items aligned to the right */}
        <ul className="flex items-center gap-2 2xsm:gap-4">
          {/* Switcher Menu Area */}
          <DarkModeSwitcher />
          {/* Exit Menu Area */}
          <Exit />
        </ul>
      </div>
    </header>
  );
};

export default Header;
