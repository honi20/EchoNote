import { useState, useRef, useEffect } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIconContainer,
} from "@components/common/SearchBar.style";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false); // 검색 바 외부를 클릭하면 닫힘
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <SearchContainer ref={searchRef} isOpen={isOpen}>
      {isOpen && <SearchInput placeholder="원하는 것을 검색해보세요" />}
      <SearchButton onClick={handleSearchClick}>
        <SearchIconContainer>
          <FaSearch />
        </SearchIconContainer>
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
