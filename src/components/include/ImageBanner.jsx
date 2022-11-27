import React, { useRef } from "react";

const ImageBanner = ({ images, onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <>
      <div className="banner">
        <img
          src={`http://images-assets.nasa.gov/image/${images[7].data[0].nasa_id}/${images[7].data[0].nasa_id}~orig.jpg`}
          alt="배너 배경 이미지"
        />
        <div className="img__search__inner">
          <div className="search__title">Search your space</div>
          <div className="search__box">
            <input
              className="search__input"
              type="search"
              placeholder="키워드를 입력해 주세요."
              onKeyPress={onKeyPress}
              ref={inputRef}
            />
            <button
              className="search__btn__moon"
              type="submit"
              onClick={onClick}
              title="검색 버튼입니다!"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBanner;