import React from 'react'
import '../Styles/scroll.css'
import 'animate.css';
import Fade from 'react-reveal/Fade';
import '../Styles/flip-cards.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Zoom from 'react-reveal/Zoom';

export const AboutMe = () => {

  const slideImages = [
    {
      url: 'assets/images/akameV2.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'assets/images/bokuV2.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'assets/images/death-noteV2.jpg',
      caption: 'Slide 3'
    },
    {
      url: 'assets/images/kimetsuV2.jpg',
      caption: 'Slide 4'
    },
    {
      url: 'assets/images/komiV2.jpg',
      caption: 'Slide 5'
    },
    {
      url: 'assets/images/one-pieceV2.jpg',
      caption: 'Slide 6'
    },
    {
      url: 'assets/images/shingekiV2.jpg',
      caption: 'Slide 7'
    },
    {
      url: 'assets/images/tengenV2.jpg',
      caption: 'Slide 8'
    },
  ];
  return (

    <div >
      <div className=' aboutme'>
        <div className=' animate__animated animate__backInLeft pad'>
          <img src='/assets/images/pad snes.png' alt='none'></img>
        </div>

        <div>
          <div className=' about-content'>
            <h1 className='upper'>
              <span >F</span>
              <span >a</span>
              <span >v</span>
              <span >o</span>
              <span >r</span>
              <span >i</span>
              <span >t</span>
              <span >e</span>
              <span > </span>
              <span >g</span>
              <span >a</span>
              <span >m</span>
              <span >e</span>
              <span >s</span>
            </h1>
          </div>

          <div className=' down'>
            <div className='media-scroller snaps-inline'>
              <div className='media-element'>
                <img src="assets/images/Dkc.jpg" alt="Donkey Kong Country" />
                <p>Donkey Kong Country</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Dkc2.jpeg" alt="Donkey Kong Country 2" />
                <p>Donkey Kong Country 2</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/A link to the past.jpg" alt="Zelda: a link to the past" />
                <p>Zelda: a link to the past</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/super metroid.jpg" alt="Super Metroid" />
                <p>Super Metroid</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Mario 64.jpg" alt="Mario 64" />
                <p>Mario 64</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Ocarina of time.jpg" alt="Zelda: Ocarina of time" />
                <p>Zelda: Ocarina of time</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/FF7.jpg" alt="Final Fantasy 7" />
                <p>Final Fantasy 7</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/FF8.jpg" alt="Final Fantasy 8" />
                <p>Final Fantasy 8</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/FF9.jpg" alt="Final Fantasy 9" />
                <p>Final Fantasy 9</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/RE3.jpg" alt="Resident Evil 3" />
                <p>Resident Evil 3</p>
              </div>

              <div className='media-element'>
                <img src="assets/images/Legend of the dragon.jpg" alt="The Legend of Dragoon" />
                <p>The Legend of Dragoon</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Digimon World.jpg" alt="Digimon World" />
                <p>Digimon World</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Castlevania SOTN.jpg" alt="Metroid" />
                <p>Castlevania: Symphony of the Night</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/FFX.jpg" alt="Final Fantasy X" />
                <p>Final Fantasy X</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Re4.jpg" alt="Resident Evil 4" />
                <p>Resident Evil 4</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Patapon 2.jpg" alt="Patapon 2" />
                <p>Patapon 2</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Shadow of the colossus.jpg" alt="Shadow of the Colossus" />
                <p>Shadow of the Colossus</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Crash.jpg" alt="Crash Bandicoot N. Sane Trilogy" />
                <p>Crash Bandicoot N. Sane Trilogy</p>
              </div>

              <div className='media-element'>
                <img src="assets/images/FF 7 remake.jpg" alt="Final Fantasy 7 Remake" />
                <p>Final Fantasy 7 Remake</p>
              </div>
              <div className='media-element'>
                <img src="assets/images/Last Guardian.jpg" alt="The Last Guardian" />
                <p>The Last Guardian</p>
              </div>
            </div>
          </div>
        </div>


        <div className=' animate__animated animate__backInRight buttons-image'>
          <img src='/assets/images/Buttons3.png' alt='none'></img>
        </div>
      </div>
      <Zoom bottom cascade>

        <div className='anime'>

          <div className='slide-images'>
            <div className="slide-container">
              <Slide autoplay transitionDuration={1000}>

                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div className='imagen' style={{ backgroundImage: `url(${slideImage.url})` }}>


                    </div>
                  </div>
                ))}

              </Slide>
            </div>
          </div>

          <div class="flip-cards">
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-front"><p>F</p></div>
                <div class="panel-back"><p>A</p></div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-front"><p>a</p></div>
                <div class="panel-back"><p>n</p></div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-front"><p>v</p></div>
                <div class="panel-back"><p>i</p></div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-front"><p>o</p></div>
                <div class="panel-back"><p>m</p></div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-front"><p>r</p></div>
                <div class="panel-back"><p>e</p></div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-front"><p>i</p></div>
                <div class="panel-back"><p>s</p></div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-front"><p>t</p></div>
                <div class="panel-back"><p></p></div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-front"><p>e</p></div>
                <div class="panel-back"><p></p></div>
              </div>
            </div>
          </div>

        </div>
      </Zoom>
      <Fade left cascade>
      <div className='movies'>
        <div className='text-movie'>
          Favorite movies
        </div>
        <div className='group-media'>
          <div className='column'>
          <img src="assets/movie/back.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/big-fish.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/bohemian.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/chihiro.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/city-god.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/strpe-pijama.jpg" alt="Final Fantasy 7 Remake" />
          </div>
          <div className='column'>
          <img src="assets/movie/dragon.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/FF7 AC.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/Fin.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/forrest.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/hobbit.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/totoro.jpg" alt="Final Fantasy 7 Remake" />
          </div>
          <div className='column'>
          <img src="assets/movie/home-alone.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/jedi.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/kingsman.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/lion.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/luciernagas.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/vie-belle.jpg" alt="Final Fantasy 7 Remake" />
          </div>
          <div className='column'>
          <img src="assets/movie/mononoke.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/ratatouille.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/ring.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/snatch.jpg" alt="Final Fantasy 7 Remake" />
          <img src="assets/movie/spider.jpg" alt="Final Fantasy 7 Remake" />
          </div>
        </div>
        
      </div>
      </Fade>
    </div>
  )
}
