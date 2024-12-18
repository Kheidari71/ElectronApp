import WindowActionBtn from "./WindowActionBtn";

const Header = () => {
  const handleMinimize = () => {
    window.electronAPI.minimize();
  };

  const handleClose = () => {
    window.electronAPI.close();
  };
  return (
    <header className="h-14 bg-gray-200 flex items-center px-4 justify-between">
      <img src="/logo.jpg" className="h-full" />
      <div id="title-bar" className="h-8  text-white flex items-center justify-between px-2 select-none">
        <WindowActionBtn onClick={handleMinimize} content="__" />
        <WindowActionBtn onClick={handleClose} content="X" />
      </div>
    </header>
  );
};

export default Header;
