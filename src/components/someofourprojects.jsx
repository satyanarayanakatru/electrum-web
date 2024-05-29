import React from 'react'
import Image from "next/image";
import aboutImage from '../../public/images/about-image1.png';
import pageExample from '../../public/images/page-example.png';
import './someofourprojects.css'


const SomeOfOurProjects = () => {
  return (
    <div>
        <div className="page-projects-div">
          <h2>Some of our projects</h2>
          <div className="project-div">
            <div className="project-images">
              <Image src={ aboutImage } className="project-image" alt='project-image'/>
              <Image src={ aboutImage } className="project-image" alt='project-image'/>
            </div>
            <div className="project-info">
              <h3>Lorem Ipsum</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Developer</td>
                    <td>Lorem</td>
                  </tr>

                  <tr>
                    <td>Building</td>
                    <td>Lorem</td>
                  </tr>

                  <tr>
                    <td>Location</td>
                    <td>Ipsum</td>
                  </tr>

                  <tr>
                    <td>#Chargers</td>
                    <td>5</td>
                  </tr>

                  <tr>
                    <td>Year built</td>
                    <td>2019</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="project-div">
            <div className="project-info">
              <h3>Lorem Ipsum</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Developer</td>
                    <td>Lorem</td>
                  </tr>

                  <tr>
                    <td>Building</td>
                    <td>Lorem</td>
                  </tr>

                  <tr>
                    <td>Location</td>
                    <td>Ipsum</td>
                  </tr>

                  <tr>
                    <td>#Chargers</td>
                    <td>5</td>
                  </tr>

                  <tr>
                    <td>Year built</td>
                    <td>2019</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="project-images hidden-xs visible-md visible-sm visible-lg">
              <Image src={pageExample} className="project-image" alt='project-image'/>
              <Image src={aboutImage} className="project-image" alt='project-image'/>
            </div>
          </div>

          <div className="project-div">
            <div className="project-images">
              <Image src={pageExample} className="project-image" alt='project-image'/>
              <Image src={aboutImage} className="project-image" alt='project-image'/>
            </div>
            <div className="project-info">
              <h3>Lorem Ipsum</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Developer</td>
                    <td>Lorem</td>
                  </tr>

                  <tr>
                    <td>Building</td>
                    <td>Lorem</td>
                  </tr>

                  <tr>
                    <td>Location</td>
                    <td>Ipsum</td>
                  </tr>

                  <tr>
                    <td>#Chargers</td>
                    <td>5</td>
                  </tr>

                  <tr>
                    <td>Year built</td>
                    <td>2019</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SomeOfOurProjects;
