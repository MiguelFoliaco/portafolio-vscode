import { LiaFilePdf, LiaGithub, LiaLinkedinIn } from 'react-icons/lia'
import { SiVisualstudiocode } from 'react-icons/si'
import { VscArrowLeft, VscArrowRight, VscSearch } from 'react-icons/vsc'

export const Header = () => {
    return (
        <div className='header-global'>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div className="icon">
                    <SiVisualstudiocode fill='#23a8f2' />
                </div>
                <div className="options">
                    <span>File</span>
                    <span>Edit</span>
                    <span>Selection</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Run</span>
                </div>
            </div>
            <div className="arrows">
                <VscArrowLeft title='Go Back (Alt+LeftArrow)' />
                <VscArrowRight title='Go Forward (Alt+RightArrow)' />
            </div>
            <div className="search-files">
                <div className='search-icon-with-name'>
                    <VscSearch />
                    <p>Portafolio</p>
                </div>
            </div>
            <div className="options-windows">
                <LiaLinkedinIn title='Go to Linkedin' className='link'/>
                <LiaGithub title='Go to Github' className='git'/>
                <LiaFilePdf title='Go to CV' className='pdf'/>
            </div>
        </div>
    )
}
