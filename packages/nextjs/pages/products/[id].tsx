import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import { AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const data = [
  {
    name: "GigaNigga",
    manufacturerName: "Speed",
    manufacturer: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    manDateEpoch: "1678518417",
    expDateEpoch: "1679518417",
    isInBatch: false,
    batchCount: "0",
    barcodeId: "9017232",
    productMetaDataURI: "https://ip",
  },
];

const pHistory = {
  manufacturer: {
    id_: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    date: "1678518417",
  },
  supplier: {
    id_: "0x09374019730413e0121213dscscs",
    date: "1678518417",
  },
  vendor: {
    id_: "0x09374019730413e0121213dscscs",
    date: "1678518417",
  },
  customers: [
    {
      id_: "0x09374019730413e0121213dscscs",
      date: "1678518417",
    },
  ],
};

const Product = () => {
  const { query } = useRouter();
  const [address, setAddress] = useState("");

  const { writeAsync } = useScaffoldContractWrite("SupplyChain", "sellProduct", [address, query.id, Date.now()]);

  const { data: product } = useScaffoldContractRead("SupplyChain", "getSingleProduct", [query.id]);

  const [productHistory, setProductHistory] = useState(pHistory);

  function getDate(epoch) {
    const datee = new Date(Number(epoch));
    const day = datee.getDate();
    const month = datee.getMonth();
    const year = datee.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // useEffect(() => {
  //   async function getMD() {
  //     const fetchedData = await fetch("https://ipfs.io/ipfs/QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE");
  //     const data = await fetchedData.json();
  //     console.log(data);
  //   }

  //   getMD();
  // }, []);

  return (
    <>
      <Head>
        <title>Product Id</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="w-full ">
        <section className="text-gray-700 body-font overflow-hidden ">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={product && product[0]?.imageURI}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{}</h2>
                <h1 className="text-gray-900 text-3xl title-font  mb-1 font-bold text-primary-content">
                  {product && product[0]?.name}
                </h1>
                <div className="flex mb-4">
                  {/* <span className="flex items-center"> */}
                  {/* <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg> */}
                  {/* <span className="text-gray-600 ml-3">4 Reviews</span> */}
                  {/* </span> */}
                  {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span> */}
                </div>
                {/* <h1 className="font-bold text-xl">Product Information</h1> */}
                <div className="flex flex-col items-start ">
                  <div className="flex justify-evenly font-semibold items-center text-primary-content text-center gap-8 ">
                    <h3>Manufacturer name:</h3>
                    <p className="text-sm text-primary tracking-widest">{product && product[0]?.manufacturerName}</p>
                  </div>
                  <div className="flex justify-evenly font-semibold items-center text-primary-content text-center gap-8">
                    <h3>Manufacturing Date:</h3>
                    <p className="text-sm text-primary tracking-widest">
                      {product && getDate(product[0]?.manDateEpoch.toString())}
                    </p>
                  </div>
                  <div className="flex justify-evenly font-semibold items-center text-primary-content text-center gap-8">
                    <h3>Expiry Date :</h3>
                    <p className="text-sm text-primary tracking-widest">
                      {product && getDate(product[0]?.expDateEpoch.toString())}
                    </p>
                  </div>
                  <div className="flex justify-evenly font-semibold items-center text-primary-content text-center gap-8">
                    <h3>Barcode Id:</h3>
                    <p className="text-sm text-primary tracking-widest">{product && product[0]?.barcodeId}</p>
                  </div>
                  <div className="flex justify-evenly font-semibold items-center text-primary-content text-center gap-8">
                    <h3>Manufacturer name:</h3>
                    <p className="text-sm text-primary tracking-widest">{product && product[0]?.manufacturerName}</p>
                  </div>
                  {/* <div>
                    <h3 className="font-semibold">Description</h3>
                    <p className="leading-relaxed">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eligendi distinctio quia officia
                      necessitatibus doloribus commodi, ratione minim
                    </p>
                  </div> */}
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex"></div>
                  <div className="flex ml-6 items-center">
                    {/* <span classNapme="mr-3">Size</span> */}
                    <p className="text-2x font-semibold mr-2">Address of the payer </p>
                    <AddressInput onChange={e => setAddress(e)} />
                    <div className="relative">
                      {/* <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select> */}
                      {/* <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="title-font font-medium text-2xl text-gray-900">₹ {200}</span>
                  <div
                    className="flex ml-auto text-white bg-primary-content border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded cursor-pointer"
                    onClick={async () => await writeAsync()}
                  >
                    Transfer ownership
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Timeline */}
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <img
            src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
            alt=""
            className="timeline-img"
          />
          <div className="timeline-container">
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <span className="font-bold text-indigo-600 text-sm tracking-wide">
                {getDate(productHistory?.manufacturer?.date)}
                {/* {new Date(Number(productHistory?.manufacturer?.date)).getMonth()}/
                {new Date(Number(productHistory?.manufacturer?.date)).getFullYear()} */}
              </span>
              <h1 className="text-2xl font-bold pt-1">Manufacturer</h1>
              <p className="pt-1">Address: {productHistory?.manufacturer?.id_}</p>
              <p className="pt-1">Date: {getDate(productHistory?.manufacturer?.date)}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <img
            src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
            alt=""
            className="timeline-img"
          />
          <div className="timeline-container timeline-container-left">
            <div className="timeline-pointer timeline-pointer-left" aria-hidden="true"></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <span className="font-bold text-indigo-600 text-sm tracking-wide">
                {getDate(productHistory?.manufacturer?.date)}
              </span>
              <h1 className="text-2xl font-bold pt-1">Supplier</h1>
              <p className="pt-1">Address: {productHistory?.supplier?.id_}</p>
              <p className="pt-1">Date: {getDate(productHistory?.supplier?.date)}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <img
            src="https://images.pexels.com/photos/2906807/pexels-photo-2906807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
            alt=""
            className="timeline-img"
          />
          <div className="timeline-container">
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <span className="font-bold text-indigo-600 text-sm tracking-wide">
                {getDate(productHistory?.manufacturer?.date)}
              </span>
              <h1 className="text-2xl font-bold pt-1">Vendor</h1>
              <p className="pt-1">Address: {productHistory?.vendor?.id_}</p>
              <p className="pt-1">Date: {getDate(productHistory?.vendor?.date)}</p>
            </div>
          </div>
          <div className="relative z-10">
            <img
              src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
              alt=""
              className="timeline-img"
            />
            <div className="timeline-container timeline-container-left">
              <div className="timeline-pointer timeline-pointer-left" aria-hidden="true"></div>
              <div className="bg-white p-6 rounded-md shadow-md">
                <span className="font-bold text-indigo-600 text-sm tracking-wide">
                  {getDate(productHistory?.customers[0]?.date)}
                </span>
                <h1 className="text-2xl font-bold pt-1">Owner</h1>
                <p className="pt-1">Address: {productHistory?.customers[0]?.id_}</p>
                <p className="pt-1">Date: {getDate(productHistory?.customers[0]?.date)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <iframe
          className="mt-20 w-[350px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[900px] lg:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.005923900639!2d72.83461397540808!3d19.107396050985795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1678569755920!5m2!1sen!2sin"
          // width="600"
          // height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Product;
