import React from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/Table";
import dayjs from "@/utils/dayjs";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
type FutureData = {
  change: number;
  changesPercentage: number;
  price: number;
  previousClose: number;
  symbol: string;
  timestamp: number;
  name: string;
};

export default function Commodities() {
  const [data, set_data] = React.useState<FutureData[]>([]);

  const get_date = async () => {
    const response = await axios.get<FutureData[]>(
      `https://financialmodelingprep.com/api/v3/quote/ZGUSD,HGUSD,BZUSD,NGUSD,LHUSX,CUSX,YMUSD,ESUSD,ZTUSD,ZNUSD?apikey=${process.env.NEXT_STOCK_APIKEY}`
    );
    // console.log(response.data);
    if (response.status === 200) {
      set_data(response.data);
    }
  };

  React.useEffect(() => {
    get_date();
    // setInterval(() => {
    // }, 2000);
  }, []);

  const columns = React.useMemo<ColumnDef<FutureData>[]>(
    () => [
      {
        accessorKey: "name",
      },
      {
        accessorKey: "price",
      },
      {
        accessorKey: "change",
      },
      {
        header: "percent",
        accessorKey: "changesPercentage",
      },
      {
        accessorKey: "timestamp",
        accessorFn: (row) => (
          <>
            {dayjs(new Date(row.timestamp * 1000)).format(
              "YYYY-MM-DD HH:mm:ss"
            )}
          </>
        ),
        cell: (info) => info.getValue(),
      },
      {
        id: "button",
        header: () => <span></span>,
        accessorFn: (row) => (
          <div className="flex flex-row gap-2">
            <Link
              role="button"
              className=""
              href={`/commodities/${row.symbol}`}
            >
              view
            </Link>
          </div>
        ),
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  return (
    <>
      <h2 className="p-4 text-4xl bg-white rounded-lg text-grey-900">
        Real time commodities price
      </h2>
      <div className="p-4 bg-white rounded-lg">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

Commodities.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
