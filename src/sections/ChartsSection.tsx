// src/sections/ChartsSection.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
  CartesianGrid,
} from "recharts";

const ChartsContainer = styled(motion.section)`
  min-height: 100vh;
  padding: 40px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  align-items: center;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  color: #0f0;
  text-shadow: 0 0 6px #0f0;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

interface CommitData {
  date: string;
  count: number;
}

interface LanguageData {
  name: string;
  value: number;
}

const ChartsSection: React.FC = () => {
  const [commitData, setCommitData] = useState<CommitData[]>([]);
  const [languageData, setLanguageData] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);

  // Example: We fetch data from a single repo (VisionScript).
  const commitsApi = "https://api.github.com/repos/sjpope/VisionScript/commits?per_page=100";
  const languagesApi = "https://api.github.com/repos/sjpope/VisionScript/languages";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch commits
        const commitsResponse = await fetch(commitsApi);
        const commitsJson = await commitsResponse.json();
        const commitCounts: { [date: string]: number } = {};

        commitsJson.forEach((commit: any) => {
          const date = commit.commit.author.date.split("T")[0];
          commitCounts[date] = (commitCounts[date] || 0) + 1;
        });

        const commitArray: CommitData[] = Object.keys(commitCounts)
          .map((date) => ({ date, count: commitCounts[date] }))
          .sort((a, b) => (a.date > b.date ? 1 : -1));

        setCommitData(commitArray);

        // Fetch language stats
        const languagesResponse = await fetch(languagesApi);
        const languagesJson = await languagesResponse.json();
        const langArray: LanguageData[] = Object.keys(languagesJson).map((lang) => ({
          name: lang,
          value: languagesJson[lang],
        }));

        setLanguageData(langArray);
      } catch (error) {
        console.error("Error fetching GitHub data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#af00fe", "#fe0088"];

  return (
    <ChartsContainer
      id="charts"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <SectionTitle>GitHub Dashboard</SectionTitle>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <div style={{ width: "80%", height: 300, marginBottom: "20px" }}>
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Recent Commits</h3>
            <ResponsiveContainer>
              <LineChart data={commitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip contentStyle={{ backgroundColor: "#222", border: "none", color: "#fff" }} />
                <Legend wrapperStyle={{ color: "#fff" }} />
                <Line type="monotone" dataKey="count" stroke="#00C49F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ width: "80%", height: 300 }}>
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Languages Breakdown</h3>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={languageData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {languageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#222", border: "none", color: "#fff" }} />
                <Legend wrapperStyle={{ color: "#fff" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </ChartsContainer>
  );
};

export default ChartsSection;
