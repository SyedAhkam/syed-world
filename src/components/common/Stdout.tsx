export default function Stdout({ commitHash }: { commitHash: string }) {
  const messages = [
    {
      text: <>Linux syed-world 1.0.0 #1 SMP (commit <em>{commitHash}</em>)</>,
      type: "warning",
    },
    {
      text: "systemd[1]: starting syed-world.service...",
      type: "info",
    },
    {
      text: "systemd[1]: reached target multi-user.target",
      type: "info",
    },
  ];

  const getColorByType = (type: string) => {
    switch (type) {
      case "info":
        return "text-blue";
      case "warning":
        return "text-yellow";
      case "error":
        return "text-red";
      default:
        return "text-foreground";
    }
  };

  const getTagByType = (type: string) => {
    switch (type) {
      case "info":
        return "[*]";
      case "warning":
        return "[!]";
      case "error":
        return "[X]";
      default:
        return "[*]";
    }
  };

  return (
    <div className="flex flex-col md:text-xl">
      {/* Mobile: commit hash only */}
      <p className="md:hidden">
        <span className={getColorByType(messages[0].type)}>
          {getTagByType(messages[0].type)}
        </span>{" "}
        {messages[0].text}
        <span className="animate-pulse">...</span>
      </p>

      {/* Desktop: all messages */}
      <div className="hidden flex-col md:flex">
        {messages.map((message, index) => (
          <p key={index}>
            <span className={getColorByType(message.type)}>
              {getTagByType(message.type)}
            </span>{" "}
            {message.text}
            {index === messages.length - 1 && (
              <span className="animate-pulse">...</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
