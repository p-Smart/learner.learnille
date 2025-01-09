import { ChangeEvent, useState, useEffect } from "react";

interface UseFileSrcProps {
  file: File | null;
  setFile: (val: File) => void;
}
interface UseFileSrcReturnValue {
  src: string;
  file: File | null;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useFileSrc = ({
  file,
  setFile,
}: UseFileSrcProps): UseFileSrcReturnValue => {
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setSrc(blobUrl);

      // Cleanup previous blob URLs to avoid memory leaks
      return () => URL.revokeObjectURL(blobUrl);
    }
  }, [file]);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return {
    src,
    file,
    onFileChange,
  };
};

export default useFileSrc;
