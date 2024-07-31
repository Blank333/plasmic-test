function TopButton({ className }) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className={className} onClick={handleClick}>
      Top
    </button>
  );
}

export default TopButton;
