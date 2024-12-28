"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardSummary from "@/components/profile/DashboardSummary";
import VaultDetails from "@/components/profile/VaultDetails";
import ActivityLogs from "@/components/profile/ActivityLogs";

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    // Check session validity
    const session = JSON.parse(localStorage.getItem("session") || "{}");

    if (!session.loggedIn || Date.now() > session.expiry) {
      alert("Your session has expired. Please log in again.");
      localStorage.removeItem("session");
      router.push("/"); // Redirect to homepage
    }
  }, [router]);

  // Logout Functionality
  const handleLogout = () => {
    localStorage.removeItem("session");
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/path-to-avatar.jpg" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold">Welcome, John Doe</h1>
            <p className="text-gray-500">Last login: Dec 26, 2024</p>
          </div>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="mt-8">
        <Tabs defaultValue="dashboard">
          <TabsList className="mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="vaults">Vault Details</TabsTrigger>
            <TabsTrigger value="activity">Activity Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardSummary />
          </TabsContent>
          <TabsContent value="vaults">
            <VaultDetails />
          </TabsContent>
          <TabsContent value="activity">
            <ActivityLogs />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
