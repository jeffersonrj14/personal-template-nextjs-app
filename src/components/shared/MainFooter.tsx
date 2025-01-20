import { FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import IconwLink from '@/components/ui/IconwLink'

interface IconLink {
  url: string
  icon: JSX.Element
  style: string
}

const IconLink: IconLink[] = [
  {
    url: 'https://nextjs.org/',
    icon: <SiNextdotjs />,
    style: 'text-gray-400 hover:text-[#FFF] active:text-zinc-300 transition-300'
  },
  {
    url: 'https://www.typescriptlang.org/docs/',
    icon: <SiTypescript />,
    style: 'text-gray-400 hover:text-[#007acc] active:text-white/80 transition-300'
  },
  {
    url: 'https://tailwindcss.com/',
    icon: <SiTailwindcss />,
    style: 'text-gray-400 hover:text-[#06b6d4] active:text-[#6d28d9] transition-300'
  }
]

const year = new Date().getFullYear()

export default function MainFooter() {
  return (
    <footer className='select-none mx-auto my-8 max-w-[872px] bottom-0 px-4 text-stone-300 md:px-0'>
      <p className='text-gray-500 text-center dark:text-gray-400'>
        &copy;2024-{year}&nbsp; RJ Jefferson
      </p>
      <nav role='navigation'>
        <ul className='flex flex-row justify-center gap-2 mt-1 text-lg'>
          {IconLink.map((icon) => (
            <li key={icon.url}>
              <IconwLink href={icon.url} icon={icon.icon} className={icon.style} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
