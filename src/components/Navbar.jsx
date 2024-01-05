function Navbar() {
  function getInitials(name) {
    const words = name.split(" ");

    const initials = words.map((word) => word.charAt(0));

    return initials.join("");
  }
  const item = localStorage.getItem("currentUser");
  const currentUser = item === "Guest" ? "Guest" : JSON.parse(item);

  return (
    <div
      className="h-[70px] flex items-center text-sm shadow-3xl bg-gray-50 select-none
    "
    >
      <div className="w-full p-[20px] flex items-center justify-end">
        <div className="flex gap-3">
          <div className="flex items-center gap-3">
            <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-sky-300">
              <div
                className={`${
                  currentUser === "Guest" ? "text-xs" : "text-xl"
                } z-10 h-[48px] w-[48px] rounded-full bg-sky-300 border-white border-2 text-white flex items-center justify-center `}
              >
                {currentUser === "Guest"
                  ? "Guest"
                  : getInitials(currentUser.displayName)}
              </div>
            </div>
            {currentUser !== "Guest" && (
              <div className="flex flex-col">
                <span className="font-medium">{currentUser.displayName}</span>
                <span className="text-xs text-gray-500">
                  {currentUser.email}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
