import { productData } from '../ProductData/productData';
import { finallyProductsData } from '../FinallyProducts/finallyProductsData';

  export const corporateProducts = Object.values(productData)
  .flat()
  .filter((product) => product.carrosel)
  .map((product) => ({
    id: product.id,
    category: Object.keys(productData).find((key) =>
      productData[key].includes(product)
    ),
    imgProduct: product.coverImage ?? product.mainImage,
    productName: product.name
      .split('-')[0]
      .replace(/\d+$/, '')
      .trim(),
    altImg: product.altMainImage,
  }));



export const finishedProducts = finallyProductsData
  .filter((product) => product.carrosel)
  .map((product) => ({
    id: product.id,
    imgProduct: product.imgProduct,
    name: product.productName,
    altImg: product.altImg,
  }));