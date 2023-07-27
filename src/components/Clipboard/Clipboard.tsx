export default function Clipboard({
  text,
  handleClick,
  fullWidth,
}: {
  text?: string;
  handleClick?: () => void;
  fullWidth?: boolean;
}) {
  function notify() {
    navigator.clipboard.writeText(text ?? "");
    handleClick?.();
  }

  return (
    <button
      className={`py-2 px-6 rounded-lg ${fullWidth && "w-full"} ${
        text
          ? "bg-neutral-600 hover:bg-neutral-500"
          : "bg-neutral-600/50 cursor-not-allowed"
      } text-neutral-100 transition-colors`}
      onClick={notify}
      title="Copy to clipboard"
      disabled={!text}
    >
      {text ? (
        <span>{text}</span>
      ) : (
        <span className="opacity-50">generate key</span>
      )}
    </button>
  );
}
