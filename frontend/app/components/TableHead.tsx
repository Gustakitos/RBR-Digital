import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Spacer, Th } from "@chakra-ui/react";
import { EmployeeModel, SortConfig } from "../types/types";

interface TableHeadProps {
  sortKey: keyof EmployeeModel;
  label: string;
  handleSort: (key: keyof EmployeeModel) => void
  sortConfig: SortConfig
}

export default function TableHead({
  sortKey,
  label,
  handleSort,
  sortConfig,
}: TableHeadProps) {
  return (
    <Th cursor="pointer" onClick={() => handleSort(sortKey)}>
      <Flex flexDirection={"row"}>
        {label}
        <Spacer />
        {sortConfig.direction === "asc" ? (
          <TriangleUpIcon />
        ) : (
          <TriangleDownIcon />
        )}
      </Flex>
    </Th>
  );
}
