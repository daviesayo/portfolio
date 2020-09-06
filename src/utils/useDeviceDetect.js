import React, { useState, useEffect } from "react"
import MobileDetect from "mobile-detect"
export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false)
  var detector = new MobileDetect(window.navigator.userAgent)
  useEffect(() => {
    console.log("Mobile: " + detector.mobile())
    console.log("Phone: " + detector.phone())
    console.log("Tablet: " + detector.tablet())
    console.log("OS: " + detector.os())
    console.log("userAgent: " + detector.userAgent())
  }, [])
}
