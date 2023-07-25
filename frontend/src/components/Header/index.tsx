import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href={""}>link</Link>
                </li>
                <li>
                    <Link href={""}>link</Link>
                </li>
                <li>
                    <Link href={""}>link</Link>
                </li>
                <li>
                    <Link href={""}>link</Link>
                </li>
            </ul>
        </nav>
        <nav>
            <Link href={""}>
                <img src="" alt="" />
            </Link>
        </nav>
    </header>
  )
}

export default Header