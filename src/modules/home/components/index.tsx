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
      <div className={`${style.containerFile}`}>
        <HomeContent />
      </div>
      {/* <MDXProvider
        disableParentContext
      >
        <Profile />
      </MDXProvider> */}
    </div>
  )
}
