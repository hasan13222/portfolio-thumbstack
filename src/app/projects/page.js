import Link from 'next/link';
import Image from 'next/image';
import '../about/page.css'
import './projects.css'
import { images } from '@/assets';

const Projects = () => {
  return (
    <div className="about projects">
      <span className="page_title">Portfolio</span>
      <h2>Projects</h2>
      <div className="project__items">
        <div className="item">
          <div className="box">
            <Link href='https://illustrious-sherbet-92583d.netlify.app/'>Live Link</Link>
            <Link href="https://docs.google.com/document/d/1EvRvYrRqPMRxJiF_D0yISKiRWbcutUbtZUgfrZS74Uo/edit?usp=sharing">Details</Link>
          </div>
          <Image src={images.mchPro} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>It is personal portfolio project developed using NextJs Framework. Here NextJS latest version of app routing used where SEO and server side rendering was priority</p>
            <Link href='https://admirable-douhua-9246c6.netlify.app/'>Live Link</Link>
          </div>
          <Image src={images.portfolioPro} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>It is travel website developed by html, css and javascript. Hotel booking and airlines booking are available here.</p>
            <Link href='https://hasan13222.github.io/griffati/'>Live Link</Link>
          </div>
          <Image src={images.griffatiPro} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>It is apparel shop website developed by html, css and javascript.</p>
            <Link href='https://hasan13222.github.io/travel'>Live Link</Link>
          </div>
          <Image src={images.travelPro} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>It is codepen clone developed by html, css and javascript.</p>
            <Link href='https://rococo-kitten-be2fe5.netlify.app/'>Live Link</Link>
          </div>
          <Image src={images.codepenPro} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>It is realstate website developed by html and css from xd design.</p>
            <Link href='https://hasan13222.github.io/responsive/PSD%20TO%20HTML/xd%20to%20html/Real%20Esate'>Live Link</Link>
          </div>
          <Image src={images.realEstatePro} alt="project" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
