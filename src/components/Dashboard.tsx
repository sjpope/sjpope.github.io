import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/variants";

const DashboardContainer = styled(motion.div)`
  color: #0f0;
  padding: 20px;
  background: rgba(10, 10, 10, 0.9);
  border: 1px solid #0f0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Dashboard: React.FC = () => {
  // existing code to fetch commits, languages, etc.
  // ...
  return (
    <DashboardContainer variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {/* Render your charts here */}
      {/* e.g. <LineChart>, <PieChart>, etc. */}
      {/* ... */}
    </DashboardContainer>
  );
};

export default Dashboard;
