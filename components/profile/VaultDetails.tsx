import React from "react";

const VaultDetails = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Vault Details</h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-500">Vault ID</p>
          <p className="font-bold">#12345</p>
        </div>
        <div>
          <p className="text-gray-500">Vault Size</p>
          <p className="font-bold">Large</p>
        </div>
        <div>
          <p className="text-gray-500">Status</p>
          <p className="font-bold text-green-500">Active</p>
        </div>
      </div>
    </div>
  );
};

export default VaultDetails;
