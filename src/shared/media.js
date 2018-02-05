import { css } from 'styled-components'

export const sizes = {
  large: 1200,
  medium: 992,
  small: 667
}

export const breakpoints = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
