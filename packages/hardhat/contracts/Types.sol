// SPDX-License-Identifier: GPL-3.0
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

library Types {
  enum UserRole {
    Manufacturer, // 0
    Supplier, // 1
    Vendor, // 2
    Customer // 3
  }

  struct UserDetails {
    UserRole role;
    address id_;
    string name;
    string email;
  }

  enum ProductType {
    JEWELRY, // 0
    CLOTHES, // 1
    WINE, // 2
    ACCESSORIES // 3
  }

  struct UserHistory {
    address id_;
    uint256 date;
  }

  struct ProductHistory {
    UserHistory manufacturer;
    UserHistory supplier;
    UserHistory vendor;
    UserHistory[] customers;
  }

  struct Product {
    string name;
    string manufacturerName;
    address manufacturer;
    uint256 manDateEpoch;
    uint256 expDateEpoch;
    bool isInBatch; // few products will be packed & sold in batches
    uint256 batchCount; // QTY that were packed in single batch
    string barcodeId;
    string imageURI;
    string productMetaDataURI;
    ProductType productType;
  }
}
