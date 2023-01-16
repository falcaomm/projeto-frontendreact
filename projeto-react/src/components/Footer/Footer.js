import React from "react"
import { DivStyle, FooterStyle, FooterTitle, Text, Test } from "./styles"
import { RiWhatsappFill } from 'react-icons/ri'
import { GoMarkGithub } from 'react-icons/go'

function Footer() {
    return (
        <FooterStyle>
            <DivStyle>
                <FooterTitle>Projeto Front-End React</FooterTitle>
                <Text><a target="_blank" href="https://wa.me/5551992183683"><RiWhatsappFill />Contato</a>
                </Text>
            </DivStyle>
            <DivStyle>
                <Text>
                    Developed by <a target="_blank" href="https://github.com/falcaomm/projeto-frontendreact"><GoMarkGithub /> falcaomm</a>
                </Text>
            </DivStyle>

        </FooterStyle>
    )
}

export default Footer