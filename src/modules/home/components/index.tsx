import style from '../style/home.module.less';
import { HomeContent } from './home';

// /** @type {import('mdx/types.js').MDXComponents} */
// const components = {
//   em(properties: any) {
//     return <i {...properties} />
//   }
// }
export const Home = () => {
  return (
    <div className={`${style.home}`}>
      <HomeContent />
      {/* <MDXProvider
        disableParentContext
      >
        <Profile />
      </MDXProvider> */}
    </div>
  )
}
