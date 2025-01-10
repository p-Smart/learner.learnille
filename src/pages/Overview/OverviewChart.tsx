import {
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import { HStack, VStack, Text, Select } from "@chakra-ui/react";

const data = [
  { day: "Sun", duration: 7.5 },
  { day: "Mon", duration: 12 },
  { day: "Tue", duration: 7.5 },
  { day: "Wed", duration: 3 },
  { day: "Thu", duration: 7.5 },
  { day: "Fri", duration: 12 },
  { day: "Sat", duration: 7.5 },
];

function OverviewChart() {
  return (
    <VStack rounded="md" bg="white" w="100%">
      <HStack
        w="100%"
        justifyContent="space-between"
        p="20px 10px"
        borderBottom="1px solid #E9EAF0"
      >
        <Text variant="h6">Overview</Text>
        <Select w="fit-content" border="none" color="blackAlpha.800">
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>All time</option>
        </Select>
      </HStack>
      <ResponsiveContainer
        style={{ marginTop: "20px", paddingRight: "20px", fontSize: "12px" }}
        width="100%"
        height={400}
      >
        <AreaChart width={500} height={400} data={data}>
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#564FFD" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#4364F7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="duration"
            stroke="#4364F7"
            strokeWidth={2}
            fill="url(#gradientFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </VStack>
  );
}

export default OverviewChart;
