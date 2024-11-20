import { useState, createContext, useContext } from "react";

// 1. Dropdown Context 정의
const DropdownContext = createContext(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within a Dropdown.");
  }
  return context;
};

// 2. Dropdown 컴포넌트 정의
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

// 3. Dropdown.Toggle 컴포넌트 정의
const DropdownToggle = ({ children }) => {
  const { toggle } = useDropdown();

  return (
    <button
      onClick={toggle}
      style={{ cursor: "pointer", padding: "0.5rem 1rem" }}
    >
      {children}
    </button>
  );
};
DropdownToggle.displayName = "Dropdown.Toggle";

// 4. Dropdown.Menu 컴포넌트 정의
const DropdownMenu = ({ children }) => {
  const { isOpen } = useDropdown();

  return isOpen ? (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "0.5rem",
        zIndex: 1000,
        minWidth: "150px",
      }}
    >
      {children}
    </div>
  ) : null;
};
DropdownMenu.displayName = "Dropdown.Menu";

// 5. Dropdown.Item 컴포넌트 정의
const DropdownItem = ({ children, onClick }) => (
  <div
    onClick={onClick}
    style={{
      padding: "0.5rem",
      cursor: "pointer",
      borderBottom: "1px solid #eee",
    }}
  >
    {children}
  </div>
);
DropdownItem.displayName = "Dropdown.Item";

// Dropdown 컴포넌트에 서브 컴포넌트 연결
Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
