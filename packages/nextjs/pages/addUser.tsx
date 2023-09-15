import { FolderIcon, InboxArrowDownIcon, InboxIcon } from "@heroicons/react/20/solid";
import { ethers } from "ethers";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Barcode from "react-barcode";
import { useAccount } from "wagmi";
import { AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [role, setRole] = React.useState("");

  const { writeAsync } = useScaffoldContractWrite("SupplyChain", "addParty", [
    {
      role: parseInt(role, 10),
      id_: address,
      name: name,
      email: email,
    },
  ]);

  const { data: usersList, isLoading: isUserLoading } = useScaffoldContractRead(
    "SupplyChain",
    "getMyUsersList",
    [connectedAddress],
    {
      watch: true,
    },
  );
  console.log("⚡️ ~ file: addUser.tsx:25 ~ isUserLoading:", isUserLoading);
  console.log("⚡️ ~ file: addUser.tsx:25 ~ usersList:", usersList);

  return (
    <>
      <Head>
        <title>Supply-chain Luxury Goods</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-14 mx-3">
        <div className="w-full bg-base-100 rounded-3xl shadow-xl border-2 ">
          <h1 className="text-center mb-8 text-primary">
            <span className="block text-2xl mb-2 text-primary">Add User</span>
            <span className="block text-4xl mx-1 font-bold">Product all products</span>
          </h1>
          {
            !isUserLoading?<div className="mx-14 h-[332px] overflow-x-scroll">
            {usersList?.map(l => (
                <div className="my-2 space-y-2" key={l?._id}>  
                    <div className=" capitalize text-[20px]">{l?.name}</div>
                    <div className="flex items-center h-fit">
                      <InboxIcon className="md:w-6 md:h-6 w-8 h-8 mr-2" />
                      <div className="break-words overflow-hidden"> {l?.email}</div>
                     
                    </div>
                    <div className="flex items-center">
                      <FolderIcon className="md:w-6 md:h-6 w-8 h-8 mr-2" />
                      <div className="break-words overflow-hidden">{l?.id_}</div>

                    </div>                  
                 </div>
            ))}
            </div>:<div className='flex md:h-full h-32 mt-12 mx-4 justify-center'><progress className="progress my-3 text-primary w-56 "></progress></div>
          }
        </div>
        <div className="w-full bg-base-100 rounded-3xl shadow-xl border-2 ">
          <p className="block text-primary text-3xl mb-2 font-semibold text-center">Add User</p>
          <div className="flex flex-col px-4 pb-8">
            {/* INPUT WRAPPER */}
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Name</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  onChange={e => setName(e.target.value)}
                  type="text"
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            {/* INPUT WRAPPER */}
            {/* INPUT WRAPPER */}
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Email</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  onChange={e => setEmail(e.target.value)}
                  type="text"
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            {/* INPUT WRAPPER */}
            {/* INPUT WRAPPER */}
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Address</p>
              <AddressInput onChange={e => setAddress(e)} />
            </div>
            {/* INPUT WRAPPER */}
            {/* Radio BUTTON */}

            <p className="font-semibold text-xl ml-1 break-words my-1">Choose role</p>
            <select
              className="select select-bordered w-full max-w-xs border-base-300 focus:border-none"
              onChange={e => setRole(e.target.value)}
            >
              <option disabled selected>
                Select role
              </option>
              <option value={1}>Supplier</option>
              <option value={2}>Vendor</option>
              <option value={3}>Customer</option>
            </select>
            <button className="btn btn-primary btn-md self-center mt-6" onClick={async () => await writeAsync()}>
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
