import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  const percentage = 70;

  return (
    <div className="flex-2 shadow-3xl p-[10px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-sm uppercase text-gray-600">
          Total Revenue
        </h2>
        <MoreVertOutlinedIcon />
      </div>
      <div className="p-[20px] flex flex-col items-center justify-center gap-3.5">
        <div style={{ width: 100, height: 100 }}>
          {/* <ProgressProvider /> */}
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
          />
          {/* <ProgressProvider /> */}
        </div>
        <p className="font-semibold text-gray-600">Total sales made today</p>
        <p className="text-3xl">420 €</p>
        <p className="text-center text-sm text-gray-400">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="text-center">
            <div className="text-sm">Target</div>
            {/* negative ? color red : green */}
            <div className="flex items-center mt-[10px] text-sm text-red-500">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm">Last Week</div>
            <div className="flex items-center mt-[10px] text-sm text-green-500">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm">Last Month</div>
            <div className="flex items-center mt-[10px] text-sm text-green-500">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
