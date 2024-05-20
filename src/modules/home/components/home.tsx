import { TextTagTag } from "../../layout/components/tag-element"
import { ImageTag } from "../../layout/components/tag-element/tag-img"

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
      <p className="br-space-hidden"></p>
      <TextTagTag className="container-stack" tag="div" attributte='class="container-stack"'>
        <TextTagTag className="container-stack-item" tag="div" attributte='class="container-stack-item"'>
          <ImageTag
            className="img-stack"
            attributte='src="javascript.png"'
            src="https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F"
          />
          <ImageTag
            className="img-stack"
            attributte='src="typescript.png"'
            src="https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc"
          />
          <ImageTag
            className="img-stack"
            attributte='src="expressJS.png"'
            src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
          />

          <ImageTag
            className="img-stack react-native-img"
            attributte='src="react_native.png"'
            src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          />
          <ImageTag
            className="img-stack react-native-img"
            attributte='src="next.png"'
            src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
          />
        </TextTagTag>
        <TextTagTag className="container-stack-item" tag="div" attributte='class="container-stack-item"'>
          <ImageTag
            className="img-stack react-native-img"
            attributte='src="react.png"'
            src="https://img.shields.io/badge/React-007acc?style=for-the-badge&labelColor=black&logo=React&logoColor=007acc"
          />
          <ImageTag
            className="img-stack"
            attributte='src="css.png"'
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          />
          <ImageTag
            className="img-stack react-native-img"
            attributte='src="less.png"'
            src="https://img.shields.io/badge/Less-61DBFB?style=for-the-badge&logo=less&logoColor=white"
          />
          <ImageTag
            className="img-stack react-native-img"
            attributte='src="material_ui.png"'
            src="https://img.shields.io/badge/material_ui-0170FE?style=for-the-badge&logo=antdesign&logoColor=white"
          />
          <ImageTag
            className="img-stack react-native-img"
            attributte='src="mysql.png"'
            src="https://img.shields.io/badge/MySql-F05032?style=for-the-badge&logo=mysql&logoColor=white"
          />
        </TextTagTag>
      </TextTagTag>
      <p className="br-space-hidden"></p>
      <TextTagTag tag='h2'>
        Experiencia
      </TextTagTag>
      <TextTagTag tag="ul">
        
      </TextTagTag>
    </div>
  )
}
