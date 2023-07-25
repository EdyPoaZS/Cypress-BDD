import SiteElements from '../elements/SiteElements'
const url = Cypress.config("baseUrl")

//classe para criação das acoes do teste
class Site {
    //acessar a pagina configurado no arquivo cypress.config.js na "baseUrl": "https://www.vr.com.br/",
    AcessarSite(){
        cy.visit(url)
    }
    //clicar no menu PRA-Voce 
    AcessarMenuPraVoce () {
        cy.get(SiteElements.menupravoce).click( {force: true})
    }
    //Validar a exibição do mapa de credenciado
    VisalizarMapaUtilizacaoCartaoVR(){
        cy.get(SiteElements.mapacredenciada).should('be.visible')
    }

}
//exportando a utilização da classe, ou seja, para poder ser utilizada em outro local
export default new Site();

