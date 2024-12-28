import React from "react";

const ActivityLogs = () => {
  const logs = [
    { date: "Dec 20, 2024", action: "Deposited 10kg Gold" },
    { date: "Dec 15, 2024", action: "Withdrawn 5kg Jewelry" },
    { date: "Dec 10, 2024", action: "Deposited $500,000 Cash" },
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Activity Logs</h2>
      <ul className="space-y-2">
        {logs.map((log, index) => (
          <li key={index} className="flex justify-between">
            <span>{log.date}</span>
            <span>{log.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLogs;
