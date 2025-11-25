export function LearnMoreButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="text-sm font-semibold text-[#1E40AF] dark:text-sky-400 hover:underline mt-4"
      >
        Saiba mais →
      </button>
    );
  }
  