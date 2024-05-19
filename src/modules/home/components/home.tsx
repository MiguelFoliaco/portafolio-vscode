import { TextTagTag } from "../../layout/components/tag-element"

export const HomeContent = () => {
  return (
    <div className="file container-desc">
      <TextTagTag tag="h1">
        Miguel Foliaco Desarrollador Full Stack
      </TextTagTag>
      <TextTagTag tag="br" className="br-space" />
      <TextTagTag>
        Hola, soy Miguel Angel Foliaco, un apasionado desarrollador full stack con una sólida experiencia en la creación de aplicaciones web y móviles.
      </TextTagTag>
      <p className="br-space-hidden"></p>
      <TextTagTag tag="h2">
        Mi Stack
      </TextTagTag>
      <TextTagTag tag="img" attributte={'src="https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F"'} />
    </div>
  )
}
