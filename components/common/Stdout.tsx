export default function Stdout() {
  return (
    <div className="py-auto font-blue flex flex-col text-2xl text-foreground">
      <p>
        <span className="text-red">[*]</span> Initializing page renderer
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
