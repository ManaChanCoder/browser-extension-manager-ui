import { useState } from "react";

type TOnToggle = {
  isActive: boolean;
  onToggle: () => void;
};

const SwitchBtn = ({ onToggle, isActive }: TOnToggle) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <button
      onClick={() => {
        setToggle(!toggle);
        onToggle();
      }}
      className={`toggle-btn ${isActive ? "toggled" : ""}`}
    >
      <div className="thumb"></div>
    </button>
  );
};

export default SwitchBtn;
