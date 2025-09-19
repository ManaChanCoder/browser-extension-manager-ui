// icons
import DevLens from "./assets/logo-devlens.svg";
import StyleSpy from "./assets/logo-style-spy.svg";
import SpeedBoost from "./assets/logo-speed-boost.svg";
import JsonWizard from "./assets/logo-json-wizard.svg";
import TabMaster from "./assets/logo-tab-master-pro.svg";
import ViewPortBuddy from "./assets/logo-viewport-buddy.svg";
import MarkupNotes from "./assets/logo-markup-notes.svg";
import GridGuides from "./assets/logo-grid-guides.svg";
import PalletePicker from "./assets/logo-palette-picker.svg";
import LinkChecker from "./assets/logo-link-checker.svg";
import DomSnapshot from "./assets/logo-dom-snapshot.svg";
import ConsolerPlus from "./assets/logo-console-plus.svg";

type TData = {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export const dataList = () => {
  const datas: TData[] = [
    {
      id: 1,
      logo: DevLens,
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    {
      id: 2,
      logo: StyleSpy,
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
    },
    {
      id: 3,
      logo: SpeedBoost,
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
    },
    {
      id: 4,
      logo: JsonWizard,
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true,
    },
    {
      id: 5,
      logo: TabMaster,
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: true,
    },
    {
      id: 6,
      logo: ViewPortBuddy,
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: false,
    },
    {
      id: 7,
      logo: MarkupNotes,
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true,
    },
    {
      id: 8,
      logo: GridGuides,
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
    },
    {
      id: 9,
      logo: PalletePicker,
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
    },
    {
      id: 10,
      logo: LinkChecker,
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
    },
    {
      id: 11,
      logo: DomSnapshot,
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    {
      id: 12,
      logo: ConsolerPlus,
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      isActive: true,
    },
  ];
  return datas;
};
