import TextField, { ITextField } from "@/components/TextField";
import { IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox: FC<ITextField> = ({ containerProps, ...rest }) => {
  return (
    <>
      <TextField
        placeholder="Search..."
        _placeholder={{
          color: "blackAlpha.800",
        }}
        containerProps={{
          borderRadius: "5px",
          p: "10px",
          maxW: "305px",
          borderColor: "blackAlpha.300",
          ...containerProps,
        }}
        endAdornment={
          <IconButton
            variant="link"
            aria-label="Search"
            fontSize={20}
            color="blackAlpha.600"
            icon={<IoSearch />}
          />
        }
        {...rest}
      />
    </>
  );
};

export default SearchBox;
