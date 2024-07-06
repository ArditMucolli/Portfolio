import React from "react";

interface DownloadFileProps {
  fileUrl: string;
  buttonLabel: string;
}

const DownloadFile: React.FC<DownloadFileProps> = ({
  fileUrl,
  buttonLabel,
}) => {
  return (
    <a
      href={fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {buttonLabel}
    </a>
  );
};

export default DownloadFile;
