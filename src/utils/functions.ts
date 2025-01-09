export const getUrlSearchParam = (param: string): string | null => {
  if (typeof window === "undefined") return null;
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(param);
};

export const getFullUrlPathname = (): string => {
  if (typeof window === "undefined") {
    return "";
  }

  const queryParams = new URLSearchParams(window.location.search);

  return `${window.location.pathname}?${queryParams.toString()}`;
};

export function numberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
