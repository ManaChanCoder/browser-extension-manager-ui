import { useState } from "react";

// data
import { dataList } from "../data";

// components
import SwitchBtn from "./SwitchBtn";

// store
import { themeStorage } from "../store/themeStore";

type TStatus = {
  id: number;
  title: string;
  status: boolean;
};

type TUpdatedDatas = {
  id: number;
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
};

const List = () => {
  const datas = dataList();
  const isDark: boolean = themeStorage((state) => state.isDark);
  const [statusBtn, setStatusBtn] = useState<TStatus[]>([
    {
      id: 1,
      title: "All",
      status: true,
    },
    {
      id: 2,
      title: "Active",
      status: false,
    },
    {
      id: 3,
      title: "Inactive",
      status: false,
    },
  ]);
  const [updatedDatas, setUpdatedDatas] = useState<TUpdatedDatas[]>(datas);

  const handleStatus = (id: number) => {
    const updatedStatus = statusBtn.map((value) => {
      return value.id === id
        ? { ...value, status: true }
        : { ...value, status: false };
    });
    setStatusBtn(updatedStatus);
  };

  const statusActive = (id: number) => {
    const update = updatedDatas.map((value) => {
      return value.id === id ? { ...value, isActive: !value.isActive } : value;
    });
    setUpdatedDatas(update);
  };

  const handleRemove = (id: number) => {
    const update = updatedDatas.filter((value) => {
      return value.id !== id;
    });
    setUpdatedDatas(update);
  };

  const activeStatusBtn = statusBtn.find((value) => value.status)?.title;

  const filteredCategory = updatedDatas.filter((item) => {
    if (activeStatusBtn === "All") return true;
    else if (activeStatusBtn === "Active") return item.isActive === true;
    else if (activeStatusBtn === "Inactive") return item.isActive === false;
    return true;
  });

  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="fs-2 fw-semibold">Extensions List</span>
        <div className="d-flex gap-2">
          {statusBtn.map((value) => (
            <button
              key={value.id}
              onClick={() => handleStatus(value.id)}
              className={`border-1 rounded-4 px-3 py-1 ${
                value.status ? "active-btn" : ""
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>
      </div>
      <div className="list-grid-container">
        {filteredCategory.map((value, index) => (
          <div
            key={index}
            className={`p-3 rounded-4 d-flex flex-column h-100 gap-5 ${
              isDark ? "bg-white" : "dark-mode-card"
            }`}
          >
            <div className="d-flex gap-2">
              <img src={value.logo} alt="" />
              <div className="">
                <span className="d-block fs-7 fw-bold">{value.name}</span>
                <span className="d-block fs-7">{value.description}</span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <button
                onClick={() => handleRemove(value.id)}
                className={`outline-none border-1 bg-transparent rounded-4 px-3 py-1 ${
                  isDark ? "text-black" : "text-white"
                }`}
              >
                Remove
              </button>

              <SwitchBtn
                isActive={value.isActive}
                onToggle={() => statusActive(value.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
