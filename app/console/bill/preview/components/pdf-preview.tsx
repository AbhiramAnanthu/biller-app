export const PdfPreview = ({ url }: { url: string }) => {
  return (
    <iframe src={url} width="100%" height="100% " style={{ border: 'none' }} />
  );
};
