import styled from 'styled-components'

const StyledSection = styled.section`
    background-color : ${props => (props.dark ? props.theme.bgDark : props.theme.bgLight)};
    box-shadow : 0 0;
`


export default StyledSection;