import React from "react";
import { Table } from "antd";
import { useCrypto } from "../context/crypto-context";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price,$",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.amount - b.amount,
  },
];

const AssetsTable = () => {
  const { assets } = useCrypto();
  const data = assets.map((el) => ({
    key: el.id,
    name: el.name,
    price: el.price,
    amount: el.amount,
  }));

  return <Table pagination={false} columns={columns} dataSource={data} />;
};

export default AssetsTable;
