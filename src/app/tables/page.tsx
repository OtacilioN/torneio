import { DataTable } from "./data-table";
import { ColumnDef } from "@tanstack/react-table";

export type TeamItem = {
  id: string;
  rank: number;
  final: number;
  team: string;
  [key: string]: number | string;
};

async function getData(): Promise<TeamItem[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      rank: 1,
      final: 100,
      team: "Team A",
      Round1: 100,
      "Tempo 1": 100,
      "Round 2": 100,
      "Tempo 2": 100,
      "Round 3": 100,
      "Tempo 3": 100,
    },
    {
      id: "73428ed52f",
      rank: 2,
      final: 80,
      team: "Team B",
    },
  ];
}

const getColumns = async (
  dinamicFields: { acessorKey: string; header: string }[]
): Promise<ColumnDef<TeamItem>[]> => {
  return [
    {
      accessorKey: "rank",
      header: "Rank",
    },
    {
      accessorKey: "team",
      header: "Team",
    },

    ...dinamicFields,
    {
      accessorKey: "final",
      header: "Final",
    },
  ];
};

export default async function DemoPage() {
  const data = await getData();
  const columnsData = await getColumns([
    { acessorKey: "round1", header: "Round 1" },
    { acessorKey: "Tempo 1", header: "Tempo 1" },
    { acessorKey: "Round 2", header: "Round 2" },
    { acessorKey: "Tempo 2", header: "Tempo 2" },
    { acessorKey: "Round 3", header: "Round 3" },
    { acessorKey: "Tempo 3", header: "Tempo 3" },
  ]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columnsData} data={data} />
    </div>
  );
}
