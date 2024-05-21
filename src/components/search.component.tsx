import Input from "antd/es/input/Input";
import Paragraph from "antd/es/typography/Paragraph";
import { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState<string>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Input
        title="Buscar"
        onChange={handleSearch}
      ></Input>

      <Paragraph> {searchTerm} </Paragraph>
    </>
  );
}

export default Search;
