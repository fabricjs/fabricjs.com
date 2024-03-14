import { useEffect, useState, useRef } from 'react'
import Script from 'react-load-script'

import './CarbonAd.css'

const CarbonAd = () => {
  const [showReminder, setShowreminder] = useState(false)
  // eslint-disable-next-line no-undef, no-underscore-dangle
  const [correctlyLoaded, setCorrectylLoaded] = useState(
    typeof window !== 'undefined' ? !!window._carbonads : false
  )
  const containerRef = useRef()

  const verifyIsLoaded = () => {
    // eslint-disable-next-line no-undef
    const ads = document.getElementById('carbonads')
    if (!containerRef.current) {
      return
    }
    // eslint-disable-next-line no-undef
    const style = window.getComputedStyle(containerRef.current)
    if (!ads || style.display === 'none') {
      setShowreminder(true)
      // eslint-disable-next-line no-undef, no-underscore-dangle
    } else if (window._carbonads) {
      setCorrectylLoaded(true)
    }
  }

  useEffect(() => {
    setTimeout(verifyIsLoaded, 3000)
  }, [])

  return (
    <div ref={containerRef}>
      {showReminder || (
        <Script
          async
          attributes={{
            id: '_carbonads_js',
          }}
          onLoad={() => setCorrectylLoaded(true)}
          url="//cdn.carbonads.com/carbon.js?serve=CKYIEK7E&placement=fabricjscom"
        />
      )}
      {showReminder && (
        <div id="gentle-reminder" className="reminder">
          Do you like fabricJS?
          <br />
          If you want it continue running and you do not mind tech related ads,
          please allow this website in your adblocker.
          <br />
          <br />
          ❤️ Thank You!
        </div>
      )}
    </div>
  )
}

export default CarbonAd
