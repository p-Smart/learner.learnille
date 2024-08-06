import { VStack, HStack, Text, Select, Progress, Box } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function ConsultationRating() {
  return (
    <VStack bg="white" p="10px" rounded="md" w="100%">
      <HStack
        w="100%"
        pb="10px"
        justifyContent="space-between"
        borderBottom="1px solid #E9EAF0"
      >
        <Text as="h3" fontSize="14px" fontWeight="600">
          Overall Course Rating
        </Text>
        <Select
          placeholder="Today"
          variant="unstyled"
          w="80px"
        >
          <option>Last Week</option>
          <option>This Month</option>
        </Select>
      </HStack>
      <HStack alignItems="flex-end" w="100%">
        <VStack
          width="40%"
          h="120px"
          justifyContent="center"
          alignItems="center"
          bg="#FFF2E5"
        >
          <Text fontSize="25px" fontWeight="600" as="h1">
            4.6
          </Text>

          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={4.6}
            size={20}
            activeColor="#FD8E1F"
          />

          <Text as="h4" fontSize="12px" fontWeight="400">
            Overall Rating
          </Text>
        </VStack>
        <ResponsiveContainer width="60%" height={100}>
          <AreaChart width={200} height={200} data={data}>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#FD8E1F"
              fill="#FFF2E5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </HStack>
      <HStack spacing={0} justifyContent="space-between" w="100%">
        <HStack mr="3px">
          <ReactStars count={5} value={5} size={18} activeColor="#FD8E1F" />
          <Text as="span" fontSize="14px">
            5 Star
          </Text>
        </HStack>
        <HStack justifyContent="flex-end" w="60%">
          <Progress colorScheme="gold" h="11px" value={50} width="100%" />
          <Text as="span" fontSize="13px" fontWeight="500">
            56%
          </Text>
        </HStack>
      </HStack>
      <HStack spacing={0} justifyContent="space-between" w="100%">
        <HStack mr="3px">
          <ReactStars count={5} value={4} size={18} activeColor="#FD8E1F" />
          <Text as="span" fontSize="14px">
            4 Star
          </Text>
        </HStack>
        <HStack justifyContent="flex-end" w="60%">
          <Progress colorScheme="gold" h="11px" value={60} width="100%" />
          <Text as="span" fontSize="13px" fontWeight="500">
            60%
          </Text>
        </HStack>
      </HStack>
      <HStack spacing={0} justifyContent="space-between" w="100%">
        <HStack mr="3px">
          <ReactStars count={5} value={3} size={18} activeColor="#FD8E1F" />
          <Text as="span" fontSize="14px">
            3 Star
          </Text>
        </HStack>
        <HStack justifyContent="flex-end" w="60%">
          <Progress colorScheme="gold" h="11px" value={35} width="100%" />
          <Text as="span" fontSize="13px" fontWeight="500">
            35%
          </Text>
        </HStack>
      </HStack>
      <HStack spacing={0} justifyContent="space-between" w="100%">
        <HStack mr="3px">
          <ReactStars count={5} value={2} size={18} activeColor="#FD8E1F" />
          <Text as="span" fontSize="14px">
            2 Star
          </Text>
        </HStack>
        <HStack justifyContent="flex-end" w="60%">
          <Progress colorScheme="gold" h="11px" value={25} width="100%" />
          <Text as="span" fontSize="13px" fontWeight="500">
            25%
          </Text>
        </HStack>
      </HStack>
      <HStack spacing={0} justifyContent="space-between" w="100%">
        <HStack mr="3px">
          <ReactStars count={5} value={1} size={20} activeColor="#FD8E1F" />
          <Text as="span" fontSize="14px">
            1 Star
          </Text>
        </HStack>
        <HStack justifyContent="flex-end" w="60%">
          <Progress colorScheme="#FD8E1F" h="11px" value={1} width="100%" />
          <Text as="span" fontSize="13px" fontWeight="500">
            10%
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
}

export default ConsultationRating;
