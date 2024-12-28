import React from "react";

const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Total Value</h2>
        <p className="text-2xl font-bold">$1,250,000</p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Items Stored</h2>
        <p className="text-2xl font-bold">45 Items</p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Last Transaction</h2>
        <p className="text-2xl font-bold">Dec 20, 2024</p>
      </div>
    </div>
  );
};

export default DashboardSummary;
