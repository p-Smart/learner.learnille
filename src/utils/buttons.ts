import { ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const btnAction = (
  route: string | (() => void),
  onClick?: () => void
): ButtonProps => ({
  ...(!route
    ? {}
    : typeof route === "string"
    ? {
        as: Link,
        to: route,
        ...(route.includes("http") && { target: "_blank" }),
        onClick: () => onClick && onClick(),
      }
    : {
        onClick: () => {
          route && route();
          onClick && onClick();
        },
      }),
});
