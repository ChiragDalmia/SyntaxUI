import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OrbitingLoader from '@/showcase/components/loaders/OrbitingLoader'
import { TextTicker } from '@/showcase/components/text/text-ticker/TextTicker'
import ThreeDButton from '@/showcase/components/button/3DButton'
import SimpleToggle from '@/showcase/components/toggle/SimpleToggle'

const data = [
  {
    id: 1,
    title: 'Button',
    component: <ThreeDButton />,
    link: '/docs/components/button',
  },
  {
    id: 2,
    title: 'Features',
    image: '/images/ui/features.svg',
    link: '/docs/components/features',
  },
  {
    id: 3,
    title: 'Pricing',
    image: '/images/ui/pricing.svg',
    link: '/docs/components/pricing',
  },
  {
    id: 4,
    title: 'Loaders',
    component: <OrbitingLoader />,
    link: '/docs/components/loaders',
  },
  {
    id: 5,
    title: 'Text',
    component: <TextTicker />,
    link: '/docs/components/text',
  },
  {
    id: 6,
    title: 'Footer',
    image: '/images/ui/footer.svg',
    link: '/docs/components/footer',
  },
  {
    id: 7,
    title: 'Input',
    image: '/images/ui/input.png',
    link: '/docs/components/input',
  },
  {
    id: 8,
    title: 'Tab',
    image: '/images/ui/tabs.png',
    link: '/docs/components/tabs',
  },
  // {
  //   id: 1,
  //   title: 'Badges',
  //   image: '/images/ui/badges.png',
  //   link: '/docs/components/badges',
  // },
  // {
  //   id: 9,
  //   title: 'Breadcrumb',
  //   image: '/images/ui/breadcrumb.png',
  //   link: '/docs/components/breadcrumb',
  // },
  {
    id: 10,
    title: 'Toggle',
    component: <SimpleToggle />,
    link: '/docs/components/toggle',
  },
]

const ComponentCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id} className="no-underline">
            <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] items-center justify-center rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                {item.image ? (
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-[150px] duration-300 ease-in-out group-hover:scale-110 md:w-[200px]"
                  />
                ) : item.component ? (
                  item.component
                ) : null}
              </div>
              <div className="w-full p-4 text-sm font-medium text-gray-800">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ComponentCards
