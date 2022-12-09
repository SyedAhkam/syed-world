export default function Head({ title }: { title: string }) {
  return (
    <>
      <title>{title ?? "guest@syed.cf"}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Syed's Personal Site" />

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="/static/fonts/FiraCode/light-mono.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/FiraCode/regular-mono.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/FiraCode/medium-mono.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/FiraCode/semibold-mono.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/FiraCode/bold-mono.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </>
  );
}
