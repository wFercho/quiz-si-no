import styled from "styled-components";

interface Props {
    mt?:string
    mb?:string
    ml?:string
    mr?:string
    m?:string
    mrl?:string
    mtb?:string
}
export const Space = styled.div<Props>`
    margin: ${props => props.m};
    margin: ${props => props.mtb} ${props => props.mrl};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
`