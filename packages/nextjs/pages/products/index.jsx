import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Spinner from "~~/components/Spinner";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import axios from "axios";

const colors = {
  0: "badge-warning",
  1: "badge-info",
  2: "badge-error",
  3: "badge-primary",
};
const type = {
  0: "JEWELRY",
  1: "CLOTHES",
  2: "WINE",
  3: "ACCESSORIES",
};
const data = [
  {
    id: "1",
    image:
      "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaPoloBlue-4_ed7c70a7-32d5-4265-8f59-00096dfff9c5_720x.jpg?v=1655275332",
    scan: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/qrcode-module_0.png?itok=ZVIdRXkv",
    title: "Shirt Op",
    manufacturerName: "Xyz",
    productType: 0,
  },

  {
    id: "2",
    image: "https://cdn.shopify.com/s/files/1/2116/1923/products/LD21317590_1Heroimage.jpg?v=1616148851",
    scan: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/qrcode-module_0.png?itok=ZVIdRXkv",
    title: "Shirt ooopp",
    manufacturerName: "Xyze",
    productType: 1,
  },
  {
    id: "3",
    image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/456889/item/ingoods_16_456889.jpg?width=750",
    scan: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/qrcode-module_0.png?itok=ZVIdRXkv",
    title: "Shirt Op",
    manufacturerName: "Xyzw",
    productType: 2,
  },
  {
    id: "4",
    image:
      "https://twicpics.celine.com/product-prd/images/large/2Y321670Q.38AW_1_SUM21_V10.jpg?twic=v1/cover=1:1/resize-max=720",
    scan: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/qrcode-module_0.png?itok=ZVIdRXkv",
    title: "Shirt Oooofff",
    manufacturerName: "Xyzer",
    productType: 3,
  },
  {
    id: "5",
    image:
      "https://images.bewakoof.com/t1080/men-s-green-lost-reality-typography-super-loose-fit-hoodie-504132-1670935980-2.jpg?tr=q-100",
    scan: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/qrcode-module_0.png?itok=ZVIdRXkv",
    title: "Shirt Ooooppph",
    manufacturerName: "Xyzyu",
    productType: 0,
  },
];
const Products = () => {
  const { data, isLoading } = useScaffoldContractRead("SupplyChain", "getAllProducts");
  console.log("⚡️ ~ file: index.tsx:68 ~ data:", data);
  // const [finalProducts, setFinalProducts] = useState([]);

  // const getFinalProducts = async () => {
  //   const allProdcuts = await Promise?.all(
  //     data?.map(async i => {
  //       const metaDataUri = i?.productMetaDataURI;
  //       const metaData = await axios.get(metaDataUri);
  //       const product = {
  //         ...i,
  //         metaData: metaData.data,
  //       };
  //       return product;
  //     }),
  //   ).catch(e => {
  //     console.log("error", e);
  //   });
  //   console.log("All prodcuts", allProdcuts);

  //   setFinalProducts(allProdcuts);
  // };

  // useEffect(() => {
  //   console.log("called");
  //   getFinalProducts();
  // }, []);

  return (
    <>
      <Head>
        <title>Supply-chain Luxury Goods</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Supply-chain Luxury Goods</span>
          </h1>
        </div>

        {data?.length !== 0?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
          {isLoading && <Spinner />}
          {data &&
            data?.map(d => (
              <div key={d.barcodeId} className="w-full bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="border rounded-3xl">
                  <img src={d?.imageURI} className="h-[300px] mt-1 object-contain rounded-3xl w-full"></img>
                  <div className="p-4">
                    <div className="flex items-center text-[22px] justify-between">
                      <p className="font-bold text-gray-700">{d.title}</p>
                      <p className={`text-white badge text-[17px] mr-2 ${colors[d?.productType]}`}>
                        {type[d?.productType]}
                      </p>
                    </div>
                    <p className="text-[#7C7C80] font-[15px]">Manufacturer Name: {d?.manufacturerName}</p>

                    <Link
                      href={`/products/${d?.barcodeId}`}
                      className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-primary rounded-[14px]  focus:outline-none focus:ring focus:ring-opacity-80"
                    >
                      View Details
                    </Link>
                    <label htmlFor="my-modal-6" className="flex items-center space-x-3">
                      <div className="block text-primary cursor-pointer mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                        View QR-Code
                      </div>
                    </label>
                  </div>
                  <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                  <div className="modal modal-middle">
                    <div className="modal-box">
                      <div className="flex justify-end mb-[10px]">
                        <label htmlFor="my-modal-6" className="text-[30px] cursor-pointer">
                          X
                        </label>
                      </div>
                      <p className="text-2xl font-semibold">Product Barcode Id</p>
                      <p className="text-xl">{d?.barcodeId}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>:<div className="flex justify-center text-2xl font-bold">No products available</div>}
      </div>
    </>
  );
};

export default Products;
