
export const Header = ({title, text}) => {
  return (
    <div className="flex flex-col space-y-5  mt-10  max-w-[700px] mx-auto">
      <h2 className="mt-0 text-5xl  font-medium tracking-tighter text-center ">
      {title}
      </h2>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default Header;
