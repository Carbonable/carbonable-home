import React from "react"

/**
 * Get element top offset from page
 * @param {HTMLElement} elem
 */
function getCoords(elem: any) { // crossbrowser version
  const box = elem.getBoundingClientRect()

  const body = document.body
  const docEl = document.documentElement

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const clientTop = docEl.clientTop || body.clientTop || 0
  const top = box.top + scrollTop - clientTop

  return { top: Math.round(top) }
}



/**
 * Mobile / Desktop
 */
export const useBreakpoint = (breakpoint = 769) => {
  const [isMobile, setMobile] = React.useState(true)

  const handleResize = React.useCallback(
    () => {
      if (window.innerWidth <= breakpoint) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setMobile]
  )

  React.useEffect(
    () => {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    },
    [handleResize]
  )

  return isMobile
}

/**
 * Get card position to center it veritcally
 * @param {string} cardId Id of the sticky card
 * @param {string} containerId Id of the container where stickyness should end
 */
export const useCenterCard = (cardId: string, containerId: string) => {
  const [position, setPosition] = React.useState(0)
  const [endPosition, setEndPosition] = React.useState(0)

  const handleResize = React.useCallback(
    () => {
      const card = document.getElementById(cardId)
      const endBoundary = document.getElementById(containerId)
      if (card) {
        const rect = card.getBoundingClientRect()
        const height = rect.height
        const top = (window.innerHeight - height) / 2
        setPosition(top)
      }

      if (endBoundary && card) {
        const cardRect = card.getBoundingClientRect()
        const rect = endBoundary.getBoundingClientRect()
        const top = Math.round(rect.top + window.scrollY)
        // const top = getCoords(endBoundary).top
        const bottomBoundary = top + rect.height + ((cardRect.height - rect.height) / 2)
        
        setEndPosition(bottomBoundary)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setPosition, setEndPosition]
  )

  React.useEffect(
    () => {
      handleResize()
      window.addEventListener("scroll", handleResize)
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("scroll", handleResize)
      }
    },
    [handleResize]
  )

  return [position, endPosition]
}