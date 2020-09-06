import React, { useState, useEffect } from "react"
import classNames from "classnames"
import useDeviceDetect from "../utils/useDeviceDetect"
import MobileDetect from "mobile-detect"
const Cursor = () => {
  // const { isMobile, a, detect } = useDeviceDetect
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [isMobile, setisMobile] = useState(false)

  useEffect(() => {
    var detector = new MobileDetect(window.navigator.userAgent)
    console.log("Mobile: " + detector.mobile())
    console.log("Phone: " + detector.phone())
    console.log("Tablet: " + detector.tablet())
    console.log("OS: " + detector.os())
    console.log("userAgent: " + detector.userAgent())
    if (detector.mobile() === null) {
      console.log("not a mobile or tablet.")
      setisMobile(false)
    } else {
      console.log("is a mobile")
      setisMobile(true)
    }
  }, [detector])
  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  //Event Listeners
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  //Remove Event Listeners
  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }
  //handling hover events on all links
  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
    document.querySelectorAll("input[type=submit]").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
    document.querySelectorAll("div.a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  //Mouse Move
  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  //Mouse Enter/Leave
  const onMouseLeave = () => {
    setHidden(true)
  }
  const onMouseEnter = () => {
    setHidden(false)
  }

  //Mouse Clicks
  const onMouseDown = () => {
    setClicked(true)
  }
  const onMouseUp = () => {
    setClicked(false)
  }

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  })
  if (!isMobile) {
    return (
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="cursor--inner"></div>
      </div>
    )
  } else {
    return null
  }
}

export default Cursor
