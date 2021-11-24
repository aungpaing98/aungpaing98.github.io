import styled from "styled-components"

const StyledCard = styled.div`
    height: 156px;
    width: 156px;
    background-color: ${props=>props.theme.lightBlue};
    border-radius: 10px;
    box-shadow : 5px 4px 2px rgba(0, 0, 0, 0.25);
    display:flex;
    flex-direction: column;

    img{
        height: 108px;
        width: 100%;
    }

    div{
        height: 48px;
        width: 100%;
        background-color: ${props=>(props.dark ? props.theme.bgLight : props.theme.bgDark)};
        color : ${props=>(props.dark ? props.theme.bgDark : props.theme.bgLight)};
    }
`

export default function Card(props) {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    )
}
