import { MDXProvider } from '@mdx-js/react';
import Profile from '../readme/home.md';
import style from '../style/home.module.less';

// /** @type {import('mdx/types.js').MDXComponents} */
// const components = {
//   em(properties: any) {
//     return <i {...properties} />
//   }
// }
export const Home = () => {
  return (
    <div className={` ${style.home}`}>
      <MDXProvider>
        <Profile />
      </MDXProvider>
    </div>
  )
}
