import { useEffect, useState } from 'react'

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => {
            setMatches(media.matches)
        }
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [matches, query])

    return matches
}
export const useIsSmall = () => useMediaQuery('(max-width: 576px)')
export const useIsMedium = () => useMediaQuery('(max-width: 767px)')
export const useIsLarge = () => useMediaQuery('(max-width: 992px)')
