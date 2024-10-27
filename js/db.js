const telefonos = [
    {
        marca: "Apple",
        modelo: "iPhone 14 Pro",
        precio: 1099,
        ram: "6GB",
        procesador: "A16 Bionic",
        almacenamiento: "128GB"
    },
    {
        marca: "Samsung",
        modelo: "Galaxy S23 Ultra",
        precio: 1199,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Google",
        modelo: "Pixel 8 Pro",
        precio: 999,
        ram: "12GB",
        procesador: "Google Tensor G3",
        almacenamiento: "128GB"
    },
    {
        marca: "Xiaomi",
        modelo: "Mi 13 Pro",
        precio: 899,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "OnePlus",
        modelo: "OnePlus 11",
        precio: 799,
        ram: "16GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Sony",
        modelo: "Xperia 1 V",
        precio: 1299,
        ram:    "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Apple",
        modelo: "iPhone 15 Pro Max",
        precio: 1199,
        ram: "8GB",
        procesador: "A17 Pro",
        almacenamiento: "256GB"
    },
    {
        marca: "Apple",
        modelo: "iPhone 15 Pro",
        precio: 1099,
        ram: "8GB",
        procesador: "A17 Pro",
        almacenamiento: "256GB"
    },
    {
        marca: "Apple",
        modelo: "iPhone 15",
        precio: 899,
        ram: "6GB",
        procesador: "A16 Bionic",
        almacenamiento: "128GB"
    },
    {
        marca: "Apple",
        modelo: "iPhone 14 Pro Max",
        precio: 1099,
        ram: "6GB",
        procesador: "A16 Bionic",
        almacenamiento: "128GB"
    },
    {
        marca: "Apple",
        modelo: "iPhone 14",
        precio: 799,
        ram: "6GB",
        procesador: "A15 Bionic",
        almacenamiento: "128GB"
    },
    {
        marca: "Apple",
        modelo: "iPhone 13 Pro Max",
        precio: 1099,
        ram: "6GB",
        procesador: "A15 Bionic",
        almacenamiento: "128GB"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi 13 Ultra",
        precio: 1299,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi 13 Pro",
        precio: 899,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi 13",
        precio: 799,
        ram: "8GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "128GB"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi 12T Pro",
        precio: 749,
        ram: "12GB",
        procesador: "Snapdragon 8+ Gen 1",
        almacenamiento: "256GB"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi 12 Pro",
        precio: 799,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 1",
        almacenamiento: "256GB"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi 12",
        precio: 699,
        ram: "8GB",
        procesador: "Snapdragon 8 Gen 1",
        almacenamiento: "128GB"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi Redmi Note 12 Pro+",
        precio: 399,
        ram: "8GB",
        procesador: "Dimensity 1080",
        almacenamiento: "256GB"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy S23 Ultra",
        precio: 1199,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy S23+",
        precio: 999,
        ram: "8GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy S23",
        precio: 799,
        ram: "8GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "128GB"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy Z Fold 5",
        precio: 1799,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy Z Flip 5",
        precio: 999,
        ram: "8GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy A54",
        precio: 449,
        ram: "6GB",
        procesador: "Exynos 1380",
        almacenamiento: "128GB"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy A34",
        precio: 349,
        ram: "6GB",
        procesador: "Dimensity 1080",
        almacenamiento: "128GB"
    },
    {
        marca: "Google",
        modelo: "Pixel 8 Pro",
        precio: 999,
        ram: "12GB",
        procesador: "Google Tensor G3",
        almacenamiento: "128GB"
    },
    {
        marca: "Google",
        modelo: "Pixel 8",
        precio: 699,
        ram: "8GB",
        procesador: "Google Tensor G3",
        almacenamiento: "128GB"
    },
    {
        marca: "Google",
        modelo: "Pixel 7 Pro",
        precio: 899,
        ram: "12GB",
        procesador: "Google Tensor G2",
        almacenamiento: "128GB"
    },
    {
        marca: "Google",
        modelo: "Pixel 7",
        precio: 599,
        ram: "8GB",
        procesador: "Google Tensor G2",
        almacenamiento: "128GB"
    },
    {
        marca: "Google",
        modelo: "Pixel 7a",
        precio: 499,
        ram: "8GB",
        procesador: "Google Tensor G2",
        almacenamiento: "128GB"
    },
    {
        marca: "Google",
        modelo: "Pixel 6 Pro",
        precio: 899,
        ram: "12GB",
        procesador: "Google Tensor",
        almacenamiento: "128GB"
    },
    {
        marca: "Google",
        modelo: "Pixel 6",
        precio: 599,
        ram: "8GB",
        procesador: "Google Tensor",
        almacenamiento: "128GB"
    },
    {
        marca: "Sony",
        modelo: "Xperia 1 V",
        precio: 1299,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Sony",
        modelo: "Xperia 5 V",
        precio: 999,
        ram: "8GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "128GB"
    },
    {
        marca: "Sony",
        modelo: "Xperia 10 V",
        precio: 449,
        ram: "6GB",
        procesador: "Snapdragon 695",
        almacenamiento: "128GB"
    },
    {
        marca: "Sony",
        modelo: "Xperia 1 IV",
        precio: 1399,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 1",
        almacenamiento: "256GB"
    },
    {
        marca: "Sony",
        modelo: "Xperia 5 IV",
        precio: 999,
        ram: "8GB",
        procesador: "Snapdragon 8 Gen 1",
        almacenamiento: "128GB"
    },
    {
        marca: "Sony",
        modelo: "Xperia 10 IV",
        precio: 499,
        ram: "6GB",
        procesador: "Snapdragon 695",
        almacenamiento: "128GB"
    },
    {
        marca: "Sony",
        modelo: "Xperia Pro-I",
        precio: 1799,
        ram: "12GB",
        procesador: "Snapdragon 888",
        almacenamiento: "512GB"
    },
    {
        marca: "OnePlus",
        modelo: "OnePlus 11",
        precio: 799,
        ram: "16GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "OnePlus",
        modelo: "OnePlus 10 Pro",
        precio: 899,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 1",
        almacenamiento: "256GB"
    },
    {
        marca: "OnePlus",
        modelo: "OnePlus 10T",
        precio: 649,
        ram: "16GB",
        procesador: "Snapdragon 8+ Gen 1",
        almacenamiento: "256GB"
    },
    {
        marca: "OnePlus",
        modelo: "OnePlus 9 Pro",
        precio: 969,
        ram: "12GB",
        procesador: "Snapdragon 888",
        almacenamiento: "256GB"
    },
    {
        marca: "OnePlus",
        modelo: "OnePlus 9",
        precio: 729,
        ram: "8GB",
        procesador: "Snapdragon 888",
        almacenamiento: "128GB"
    },
    {
        marca: "OnePlus",
        modelo: "OnePlus 8T",
        precio: 749,
        ram: "12GB",
        procesador: "Snapdragon 865",
        almacenamiento: "256GB"
    },
    {
        marca: "OnePlus",
        modelo: "OnePlus Nord 3",
        precio: 499,
        ram: "12GB",
        procesador: "Dimensity 9000",
        almacenamiento: "256GB"
    },
    {
        marca: "Huawei",
        modelo: "Huawei Mate 60 Pro",
        precio: 1199,
        ram: "12GB",
        procesador: "Kirin 9000S",
        almacenamiento: "256GB"
    },
    {
        marca: "Huawei",
        modelo: "Huawei P60 Pro",
        precio: 1099,
        ram: "8GB",
        procesador: "Snapdragon 8+ Gen 1",
        almacenamiento: "256GB"
    },
    {
        marca: "Huawei",
        modelo: "Huawei P60",
        precio: 899,
        ram: "8GB",
        procesador: "Snapdragon 8+ Gen 1",
        almacenamiento: "128GB"
    },
    {
        marca: "Huawei",
        modelo: "Huawei Mate X3",
        precio: 1799,
        ram: "12GB",
        procesador: "Snapdragon 8+ Gen 1",
        almacenamiento: "512GB"
    },
    {
        marca: "Huawei",
        modelo: "Huawei Nova 11 Pro",
        precio: 699,
        ram: "8GB",
        procesador: "Snapdragon 778G",
        almacenamiento: "256GB"
    },
    {
        marca: "Huawei",
        modelo: "Huawei Nova 11",
        precio: 599,
        ram: "8GB",
        procesador: "Snapdragon 778G",
        almacenamiento: "128GB"
    },
    {
        marca: "Huawei",
        modelo: "Huawei P50 Pro",
        precio: 999,
        ram: "8GB",
        procesador: "Snapdragon 888",
        almacenamiento: "256GB"
    },
    {
        marca: "Realme",
        modelo: "Realme GT 5",
        precio: 699,
        ram: "12GB",
        procesador: "Snapdragon 8 Gen 2",
        almacenamiento: "256GB"
    },
    {
        marca: "Realme",
        modelo: "Realme GT Neo 5",
        precio: 499,
        ram: "12GB",
        procesador: "Snapdragon 8+ Gen 1",
        almacenamiento: "256GB"
    },
    {
        marca: "Realme",
        modelo: "Realme 11 Pro+",
        precio: 399,
        ram: "12GB",
        procesador: "Dimensity 7050",
        almacenamiento: "256GB"
    },
    {
        marca: "Realme",
        modelo: "Realme 11 Pro",
        precio: 349,
        ram: "8GB",
        procesador: "Dimensity 7050",
        almacenamiento: "128GB"
    },
    {
        marca: "Realme",
        modelo: "Realme Narzo 60 Pro",
        precio: 299,
        ram: "8GB",
        procesador: "Dimensity 7050",
        almacenamiento: "128GB"
    },
    {
        marca: "Realme",
        modelo: "Realme C55",
        precio: 199,
        ram: "6GB",
        procesador: "Helio G88",
        almacenamiento: "128GB"
    },
    {
        marca: "Realme",
        modelo: "Realme 10 Pro+",
        precio: 349,
        ram: "8GB",
        procesador: "Dimensity 1080",
        almacenamiento: "128GB"
    },
    {
        marca: "LG",
        modelo: "LG Wing",
        precio: 999,
        ram: "8GB",
        procesador: "Snapdragon 765G",
        almacenamiento: "256GB"
    },
    {
        marca: "LG",
        modelo: "LG Velvet",
        precio: 699,
        ram: "6GB",
        procesador: "Snapdragon 765G",
        almacenamiento: "128GB"
    },
    {
        marca: "LG",
        modelo: "LG V60 ThinQ",
        precio: 799,
        ram: "8GB",
        procesador: "Snapdragon 865",
        almacenamiento: "128GB"
    },
    {
        marca: "LG",
        modelo: "LG G8X ThinQ",
        precio: 699,
        ram: "6GB",
        procesador: "Snapdragon 855",
        almacenamiento: "128GB"
    },
    {
        marca: "LG",
        modelo: "LG G8 ThinQ",
        precio: 599,
        ram: "6GB",
        procesador: "Snapdragon 855",
        almacenamiento: "128GB"
    },
    {
        marca: "LG",
        modelo: "LG V50 ThinQ",
        precio: 899,
        ram: "6GB",
        procesador: "Snapdragon 855",
        almacenamiento: "128GB"
    },
    {
        marca: "LG",
        modelo: "LG V40 ThinQ",
        precio: 699,
        ram: "6GB",
        procesador: "Snapdragon 845",
        almacenamiento: "64GB"
    }
];


console.log(telefonos.length)