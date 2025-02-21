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

const DashboardContainer = styled.div`
  color: #0f0;
  padding: 20px;
  background: rgba(10, 10, 10, 0.9);
  border: 1px solid #0f0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  margin-bottom: 10px;
`;

interface CommitData {
  date: string;
  count: number;
}

interface LanguageData {
  name: string;
  value: number;
}

const Dashboard: React.FC = () => {
  const [commitData, setCommitData] = useState<CommitData[]>([]);
  const [languageData, setLanguageData] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);

  // Example endpoints using the VisionScript repo.
  const commitsApi = "https://api.github.com/repos/sjpope/VisionScript/commits?per_page=100";
  const languagesApi = "https://api.github.com/repos/sjpope/VisionScript/languages";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch commit history
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

        // Fetch language statistics
        const languagesResponse = await fetch(languagesApi);
        const languagesJson = await languagesResponse.json();
        const langArray: LanguageData[] = Object.keys(languagesJson).map((lang) => ({
          name: lang,
          value: languagesJson[lang]
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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#af00fe', '#fe0088'];

  return (
    <DashboardContainer>
      <SectionTitle>GitHub Dashboard</SectionTitle>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <div style={{ width: "100%", height: 300, marginBottom: "20px" }}>
            <h3>Recent Commits</h3>
            <ResponsiveContainer>
              <LineChart data={commitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#0f0" />
                <YAxis stroke="#0f0" />
                <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none', color: '#0f0' }} />
                <Legend wrapperStyle={{ color: '#0f0' }} />
                <Line type="monotone" dataKey="count" stroke="#00C49F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ width: "100%", height: 300 }}>
            <h3>Languages Breakdown</h3>
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
                <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none', color: '#0f0' }} />
                <Legend wrapperStyle={{ color: '#0f0' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
