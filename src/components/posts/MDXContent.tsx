import * as runtime from 'react/jsx-runtime'
import Image from 'next/image'

const mdxComponents = {
  Image
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MdxProps {
  code: string
  components?: Record<string, React.ComponentType>
}

const MDXContent = ({ code, components }: MdxProps) => {
  const Component = useMDXComponent(code)

  return <Component components={{ ...mdxComponents, ...components }} />
}

export default MDXContent;
