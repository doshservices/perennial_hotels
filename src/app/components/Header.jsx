
export const Header = ({title, text}) => {
  return (
    <div className="flex flex-col   my-[60px]  mx-auto">
      <h2 className="self-center  text-2xl md:text-[46px]  font-medium  text-center text-black max-w-[763px] tracking-[-1px] " >
      {title}
      </h2>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default Header;
