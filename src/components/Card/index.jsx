export default function Card({
  classCardContainer = '',
  classCardImgContainer = '',
  imgProduct = {},
  productName = '',
  altImg = '',
}) {

  const styleCardContainer = 'flex flex-col items-center gap-2 md:gap-4 lg:gap-4 xl:gap-5 lg:cursor-pointer';
  const styleCardImgContainer = 'flex justify-center items-center bg-white/70 border border-gray-200 md:border-gray-300 lg:border-gray-400 rounded-2xl shadow-[1px_1px_2px_rgba(0,0,0,0.5)] md:shadow-[3px_3px_3px_rgba(0,0,0,0.25)]';

  return (
    <div className={`${styleCardContainer} ${classCardContainer}`}>
      
      <div className={`${styleCardImgContainer} ${classCardImgContainer}`}>
        <img className="w-full h-full p-2 rounded-2xl" src={imgProduct} alt={altImg} />
      </div>

      <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-center">{productName}</p>
    </div>
  );
}