//acessando/chamando as ações desenvolvidas
import SitePage from '../../../support/pageobjects/SitePage'


Given(/^que eu acesso o Site VR$/, () => {
  //acessando o site
  SitePage.AcessarSite();
 });

When(/^acessar o menu PRA VOCE -> Onde usar meu VR$/, () => {
  //clicar no menu PRA-Voce
  SitePage.AcessarMenuPraVoce();

});

Then(/^deve visualizar o mapa de utilização do cartão VR$/, () => {
  //validar a exibição do mapa do credenciado
  SitePage.VisalizarMapaUtilizacaoCartaoVR();
});
