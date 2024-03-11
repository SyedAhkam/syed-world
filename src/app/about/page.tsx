import { pages as allPages } from "#content";

export const metadata = {
  title: "About"
}

export default function About() {
  const aboutPage = allPages.find(p => p.name == "about");

  return (
    <div className="mx-4 md:mx-16" dangerouslySetInnerHTML={{ __html: aboutPage.content }}>
    </div>
  )
}
