export const PdfPreview = ({ url }: { url: string }) => {
  return (
    <div className="w-5/6 h-5/6 overflow-hidden bg-white">
      <iframe
        src={url}
        className="w-full h-full"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};
