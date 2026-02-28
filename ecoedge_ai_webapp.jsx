import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Droplets, Leaf, AlertTriangle, Trophy, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const energyData = [
  { name: "Mon", energy: 120 },
  { name: "Tue", energy: 150 },
  { name: "Wed", energy: 170 },
  { name: "Thu", energy: 140 },
  { name: "Fri", energy: 180 },
  { name: "Sat", energy: 160 },
  { name: "Sun", energy: 130 },
];

export default function EcoEdgeDashboard() {
  const [carbonScore] = useState(72);
  const [waterUsage] = useState(5400);
  const [energyUsage] = useState(18200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-green-700"
      >
        EcoEdge AI – Smart Campus Sustainability Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Zap className="text-yellow-500" />
              <h2 className="text-xl font-semibold">Energy Usage</h2>
            </div>
            <p className="text-2xl mt-4">{energyUsage} kWh</p>
            <p className="text-sm text-gray-500">Weekly Consumption</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Droplets className="text-blue-500" />
              <h2 className="text-xl font-semibold">Water Usage</h2>
            </div>
            <p className="text-2xl mt-4">{waterUsage} Liters</p>
            <p className="text-sm text-gray-500">Weekly Consumption</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Leaf className="text-green-600" />
              <h2 className="text-xl font-semibold">Carbon Score</h2>
            </div>
            <p className="text-2xl mt-4">{carbonScore}/100</p>
            <p className="text-sm text-gray-500">Sustainability Index</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 /> Energy Trend
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={energyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="energy" stroke="#16a34a" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle /> Alerts & Nudges
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>⚠ Hostel A is using 18% more electricity than average.</li>
              <li>💧 Abnormal water usage detected at midnight.</li>
              <li>🌡 Reduce AC temperature by 1°C to save 5% energy.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Trophy /> Sustainability Leaderboard
            </h2>
            <ul className="space-y-2">
              <li>🥇 Hostel C – Score 88</li>
              <li>🥈 Hostel A – Score 76</li>
              <li>🥉 Hostel B – Score 70</li>
            </ul>
            <Button className="mt-4 rounded-2xl">View Detailed Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
