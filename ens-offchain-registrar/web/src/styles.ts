import {
  Card as ThorinCard,
  Helper as ThorinHelper,
  Input as ThorinInput,
  mq,
} from '@ensdomains/thorin'
import styled, { css } from 'styled-components'

export const Page = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  padding: 30px;
  grid-gap: 1rem;
  grid-template-columns: 0.5fr 1fr 0.75fr;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'header header header'
    'sidebar content right';
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`

export const Input = styled(ThorinInput)`
  background: none;
`

export const Header = styled(ThorinCard)`
  width: 100%;
  align-items: center;
  grid-area: header;
  gap: 1.5rem;
  justify-content: center;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: saturate(180%) blur(10px);
  border: 0px;
`
export const Sidebar = styled(ThorinCard)`
  width: 100%;
  align-items: center;
  gap: 1.5rem;
  grid-area: sidebar;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: saturate(180%) blur(10px);
  border: 0px;
`
export const Content = styled(ThorinCard)`
  width: 100%;
  align-items: center;
  gap: 1.5rem;
  grid-area: content;
  border-radius: 20px;
  border: 0px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: saturate(180%) blur(10px);
`

export const Right = styled(ThorinCard)`
  width: 100%;
  align-items: center;
  gap: 1.5rem;
  grid-area: right;
  border-radius: 20px;
  border: 0px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: saturate(180%) blur(10px);
`

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})(
  ({ theme }) => css`
    color: ${theme.colors.accent};
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  `
)

export const Helper = styled(ThorinHelper)`
  svg {
    display: none;
  }
`

export const Spacer = styled.div`
  display: block;
  width: 100%;
  height: 1rem;

  ${mq.sm.max(css`
    height: 0;
  `)}
`

export const Contract = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  padding: 5px;
`
