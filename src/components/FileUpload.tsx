import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { AiOutlineUpload } from "react-icons/ai";
import { ChangeEvent, useEffect, useState } from "react";
import Color from "color";

export default function FileUpload({
  getFileUrl,
  text,
  type,
  isType,
  id,
  bgColor,
  textColor,
}: {
  getFileUrl: (url: string | ArrayBuffer | null) => void;
  text: string;
  type: string;
  isType: "video" | "image";
  id?: string;
  bgColor?: string;
  textColor?: string;
}) {
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);

  //Handle Image upload
  const fileUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (isType === "image") {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const readerFile = reader.readAsDataURL.toString();
          // Set the base64 string as the state
          setFile(reader.result?.toString()!);
        };
        reader.readAsDataURL(file); // Convert the file to base64 string
      }
    }

    if (isType === "video") {
      const file = e.target.files?.[0] || null;
      getVideoFromFileInput(file, setFile);
    }
  };

  useEffect(() => {
    if (file) {
      getFileUrl(file);
    }
  }, [file, getFileUrl]);

  //function to darken color
  const darkenColor = (color: string, amount: number) => {
    return Color(color).darken(amount).hex();
  };

  let hoverProp;
  let activeProp;

  if (bgColor) {
    hoverProp = darkenColor(bgColor, 0.07);
    activeProp = darkenColor(bgColor, 0.13);
  }

  return (
    <FormControl display={"flex"} justifyContent={"center"}>
      <FormLabel
        htmlFor={id || "file"}
        color={textColor || "#4364F7"}
        display={"flex"}
        w={"max-content"}
        h={"41px"}
        gap={"0.7rem"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"5px"}
        cursor={"pointer"}
        px={["15px", "15px", "20px", "20px"]}
        bg={bgColor || "#C7D0FD"}
        _hover={{ bg: hoverProp || "blue.50" }}
        _active={{ bg: activeProp || "hsl(231, 95%, 93%)" }}
        transition="background-color 0.3s ease"
      >
        <AiOutlineUpload />
        <Text fontWeight={"600"} fontSize={"12px"}>
          {text}
        </Text>
      </FormLabel>
      <Input
        type="file"
        id={id || "file"}
        accept={type}
        display={"none"}
        onChange={(e) => fileUploadHandler(e)}
      />
    </FormControl>
  );
}

// fileReader.ts
export const getVideoFromFileInput = (
  file: File | null,
  callback: (result: string | ArrayBuffer | null) => void
): void => {
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    callback(null);
  }
};
