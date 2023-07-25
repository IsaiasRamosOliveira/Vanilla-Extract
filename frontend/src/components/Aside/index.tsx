import Link from 'next/link';
import React from 'react'

const Aside = () => {
  return (
    <aside>
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
    </aside>
  );
}

export default Aside