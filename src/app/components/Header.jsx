export const Header = ({ title, text, className, style }) => {
  return (
    <div className="flex flex-col my-[60px] mx-auto">
      <h2 
        className={`self-center text-2xl md:text-[46px] leading-[30px] md:leading-[60px] font-medium text-center max-w-[763px] tracking-[-1px] ${className || ''}`}
        style={style}
      >
        {title}
      </h2>
      <p className="text-center self-center max-w-[763px]">{text}</p>
    </div>
  );
};

export default Header;