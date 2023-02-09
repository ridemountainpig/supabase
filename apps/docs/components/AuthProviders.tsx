import providers from '../data/authProviders'
import { IconPanel } from 'ui'
import Link from 'next/link'

export default function AuthProviders() {
  return (
    <div className="grid grid-cols-12 gap-10 not-prose py-8">
      {providers.map((x) => (
        <Link href={`${x.href}`} key={x.name} passHref>
          <a className="col-span-6 lg:col-span-4 xl:col-span-3">
            <IconPanel title={x.name} icon={x.logo} />
          </a>
        </Link>
      ))}
    </div>
  )
}
