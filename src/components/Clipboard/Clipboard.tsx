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
      className={`py-5 px-6 rounded-lg ${fullWidth && "w-full"} ${
        text
          ? "bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-600 hover:text-neutral-100"
          : "bg-neutral-300/50 dark:bg-neutral-600/50 cursor-not-allowed"
      } text-neutral-900  dark:text-neutral-100 transition-colors duration-300 relative`}
      onClick={notify}
      title="Copy to clipboard"
      disabled={!text}
      type="button"
    >
      {text ? (
        <>
          <span>{text}</span>
          <span className="absolute bottom-1 right-1 text-xs">
            click to copy
          </span>
        </>
      ) : (
        <span className="opacity-50">generate key below</span>
      )}
    </button>
  );
}
