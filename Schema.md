### Product struct
```
  struct Product {
    string name;
    string manufacturerName;
    address manufacturer;
    uint256 manDateEpoch;
    uint256 expDateEpoch;
    bool isInBatch; // few products will be packed & sold in batches
    uint256 batchCount; // QTY that were packed in single batch
    string barcodeId;
    string productMetaDataURI;
    <!-- METADATA -->
    1.price perItem
    2.price 
    3.Description
    4.ImageURI
    <!-- METADATA -->
    ProductType productType;
  }
```
### Product Type
```
  enum ProductType {
    JEWELRY, // 0
    CLOTHES,// 1
    WINE, // 2
    ACCESSORIES, // 3
  }
```
### Product History
```
  struct ProductHistory {
    UserHistory manufacturer;
    UserHistory supplier;
    UserHistory vendor;
    UserHistory[] customers;
  }
```
## User
```
  enum UserRole {
    Manufacturer, // 0
    Supplier, // 1
    Vendor, // 2
    Customer // 3
  }

```

```
  struct UserDetails {
    UserRole role;
    address id_;
    string name;
    string email;
  }
```

```
  struct UserHistory {
    address id_; // account Id of the user
    uint256 date; // Added, Purchased date in epoch in UTC timezone
  }
```