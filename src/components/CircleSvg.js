import React from 'react'

export const CircleSvg = () => {
  return (
    <div className='circlesvg'>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#1E7944" />{/*"#e91e63"*/}
            <stop offset="50%" stop-color="#9D9824" />
            <stop offset="100%" stop-color="#9D2B33" />{/*"#673ab7"*/}
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="GradientColor2">
            <stop offset="0%" stop-color="#6D9324"/>
            <stop offset="50%" stop-color="#9D9824" />
            <stop offset="100%" stop-color="#9D2B33" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="GradientColor3">
            <stop offset="0%" stop-color="#9D9824"/>
            <stop offset="50%" stop-color="#9D602E" />
            <stop offset="100%" stop-color="#9D2B33" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="GradientColor4">
            <stop offset="0%" stop-color="#9D9824"/>
            <stop offset="100%" stop-color="#9D2B33" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="GradientColor5">
            <stop offset="0%" stop-color= "#9D9824"/>
            <stop offset="100%" stop-color="#9D2B33"  />
          </linearGradient>
        </defs>

        <circle cx="80" cy="80" r="70" stroke-linecap="round"  />
      </svg>
    </div>
   
  )
}

