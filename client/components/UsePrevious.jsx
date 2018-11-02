import { useRef, useEffect } from 'react'

// this keeps a record of the previous state / prop
export function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }