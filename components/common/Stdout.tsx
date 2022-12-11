export default function Stdout() {
  return (
    <div className="font-blue flex flex-col py-1 text-2xl text-foreground">
      <p>
        <span className="text-red">[*]</span> Initializing page renderer: v0.1
      </p>
      <p>
        <span className="text-red">[*]</span> Loaded page: index
      </p>
      <p className="cursor-box">
        <span className="text-red">[*]</span> Rendering requested page...
        <em></em>
      </p>
    </div>
  );
}
