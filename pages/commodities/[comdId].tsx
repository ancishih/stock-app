import { useRouter } from "next/router";
import React from "react";
import Layout from "@/components/Layout";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";

export default function Commodity() {
  const router = useRouter();

  return (
    <>
      <Link
        href="/"
        role="button"
        className="flex flex-col items-center justify-center w-12 h-12 text-3xl bg-white rounded-md text-grey-900"
      >
        <AiOutlineArrowLeft />
      </Link>
      <div className="w-full h-40 bg-white rounded-md"></div>
    </>
  );
}

Commodity.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
