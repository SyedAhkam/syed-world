export default function Head({title}: {title: string}) {
  return (
    <>
      <title>{title ?? "guest@syed.cf"}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Syed's Personal Site" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
