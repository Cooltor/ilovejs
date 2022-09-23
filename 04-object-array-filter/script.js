/**
Objective : learn filter

It is almost two in the morning, 
ask Ahmed from the future to explain this one 
 
 */

// Your code here 
const colorFr = [  
    {  
      "name":"rouge",
      "hex":"FF0000"
   },
    {  
       "name":"Abricot",
       "hex":"E67E30"
    },
    {  
       "name":"Acajou",
       "hex":"88421D"
    },
    {  
       "name":"Aigue-marine",
       "hex":"79F8F8"
    },
    {  
       "name":"Alezan (chevaux)",
       "hex":"A76726"
    },
    {  
       "name":"Amande",
       "hex":"82C46C"
    },
    {  
       "name":"Amarante",
       "hex":"91283B"
    },
    {  
       "name":"Ambre",
       "hex":"F0C300"
    },
    {  
       "name":"Améthyste",
       "hex":"884DA7"
    },
    {  
       "name":"Anthracite",
       "hex":"303030"
    },
    {  
       "name":"Aquilain (chevaux)",
       "hex":"AD4F09"
    },
    {  
       "name":"Ardoise",
       "hex":"5A5E6B"
    },
    {  
       "name":"Argent (héraldique)",
       "hex":"FFFFFF"
    },
    {  
       "name":"Aubergine",
       "hex":"370028"
    },
    {  
       "name":"Auburn (cheveux)",
       "hex":"9D3E0C"
    },
    {  
       "name":"Aurore",
       "hex":"FFCB60"
    },
    {  
       "name":"Avocat",
       "hex":"568203"
    },
    {  
       "name":"Azur",
       "hex":"007FFF"
    },
    {  
       "name":"Azur (héraldique)",
       "hex":"1E7FCB"
    },
    {  
       "name":"Baillet (chevaux, vieilli)",
       "hex":"AE642D"
    },
    {  
       "name":"Basané (teint)",
       "hex":"8B6C42"
    },
    {  
       "name":"Beige ou Bureau",
       "hex":"C8AD7F"
    },
    {  
       "name":"Beurre",
       "hex":"F0E36B"
    },
    {  
       "name":"Bis",
       "hex":"766F64"
    },
    {  
       "name":"Bisque",
       "hex":"FFE4C4"
    },
    {  
       "name":"Bistre",
       "hex":"856D4D"
    },
    {  
       "name":"Bitume (pigment)",
       "hex":"4E3D28"
    },
    {  
       "name":"Blanc",
       "hex":"FFFFFF"
    },
    {  
       "name":"Blanc cassé",
       "hex":"FEFEE2"
    },
    {  
       "name":"Blanc lunaire",
       "hex":"F4FEFE"
    },
    {  
       "name":"Blé",
       "hex":"E8D630"
    },
    {  
       "name":"Bleu",
       "hex":"0080FF"
    },
    {  
       "name":"Bleu acier",
       "hex":"3A8EBA"
    },
    {  
       "name":"Bleu barbeau ou bleuet",
       "hex":"5472AE"
    },
    {  
       "name":"Bleu canard",
       "hex":"048B9A"
    },
    {  
       "name":"Bleu céleste",
       "hex":"26C4EC"
    },
    {  
       "name":"Bleu charrette",
       "hex":"8EA2C6"
    },
    {  
       "name":"Bleu ciel",
       "hex":"77B5FE"
    },
    {  
       "name":"Bleu de cobalt (pigment)",
       "hex":"22427C"
    },
    {  
       "name":"Bleu de Prusse (pigment), de Berlin ou bleu hussard",
       "hex":"24445C"
    },
    {  
       "name":"Bleu électrique",
       "hex":"2C75FF"
    },
    {  
       "name":"Bleu givré",
       "hex":"80D0D0"
    },
    {  
       "name":"Bleu Klein",
       "hex":"002FA7"
    },
    {  
       "name":"Bleu Majorelle",
       "hex":"6050DC"
    },
    {  
       "name":"Bleu marine",
       "hex":"03224C"
    },
    {  
       "name":"Bleu nuit",
       "hex":"0F056B"
    },
    {  
       "name":"Bleu outremer",
       "hex":"1B019B"
    },
    {  
       "name":"Bleu paon",
       "hex":"067790"
    },
    {  
       "name":"Bleu Persan",
       "hex":"6600FF"
    },
    {  
       "name":"Bleu pétrole",
       "hex":"1D4851"
    },
    {  
       "name":"Bleu roi ou de France",
       "hex":"318CE7"
    },
    {  
       "name":"Bleu turquin",
       "hex":"425B8A"
    },
    {  
       "name":"Blond (cheveux)",
       "hex":"E2BC74"
    },
    {  
       "name":"Blond vénitien (cheveux)",
       "hex":"E7A854"
    },
    {  
       "name":"Bordeaux",
       "hex":"6D071A"
    },
    {  
       "name":"Bouton d'or",
       "hex":"FCDC12"
    },
    {  
       "name":"Brique",
       "hex":"842E1B"
    },
    {  
       "name":"Bronze",
       "hex":"614E1A"
    },
    {  
       "name":"Brou de noix",
       "hex":"3F2204"
    },
    {  
       "name":"Brun",
       "hex":"5B3C11"
    },
    {  
       "name":"Caca d'oie",
       "hex":"CDCD0D"
    },
    {  
       "name":"Cacao",
       "hex":"614B3A"
    },
    {  
       "name":"Cachou (pigments)",
       "hex":"2F1B0C"
    },
    {  
       "name":"Cæruleum",
       "hex":"357AB7"
    },
    {  
       "name":"Café",
       "hex":"462E01"
    },
    {  
       "name":"Café au lait",
       "hex":"785E2F"
    },
    {  
       "name":"Cannelle",
       "hex":"7E5835"
    },
    {  
       "name":"Capucine",
       "hex":"FF5E4D"
    },
    {  
       "name":"Caramel (pigments)",
       "hex":"7E3300"
    },
    {  
       "name":"Carmin (pigment)",
       "hex":"960018"
    },
    {  
       "name":"Carmin d'alizarine (pigment PR83)",
       "hex":"B31F2F"
    },
    {  
       "name":"Carotte",
       "hex":"F4661B"
    },
    {  
       "name":"Chamois",
       "hex":"D0C07A"
    },
    {  
       "name":"Chartreuse",
       "hex":"7FFF00"
    },
    {  
       "name":"Châtain (cheveux)",
       "hex":"8B6C42"
    },
    {  
       "name":"Chaudron",
       "hex":"85530F"
    },
    {  
       "name":"Chocolat",
       "hex":"5A3A22"
    },
    {  
       "name":"Cinabre (pigment)",
       "hex":"DB1702"
    },
    {  
       "name":"Citrouille",
       "hex":"DF6D14"
    },
    {  
       "name":"Coquille d'œuf",
       "hex":"FDE9E0"
    },
    {  
       "name":"Corail",
       "hex":"E73E01"
    },
    {  
       "name":"Cramoisi",
       "hex":"DC143C"
    },
    {  
       "name":"Crème",
       "hex":"FDF1B8"
    },
    {  
       "name":"Cuisse de nymphe",
       "hex":"FEE7F0"
    },
    {  
       "name":"Cuivre",
       "hex":"B36700"
    },
    {  
       "name":"Cyan",
       "hex":"2BFAFA"
    },
    {  
       "name":"Écarlate",
       "hex":"ED0000"
    },
    {  
       "name":"Écru",
       "hex":"FEFEE0"
    },
    {  
       "name":"Émeraude",
       "hex":"01D758"
    },
    {  
       "name":"Fauve",
       "hex":"AD4F09"
    },
    {  
       "name":"Flave",
       "hex":"E6E697"
    },
    {  
       "name":"Fraise",
       "hex":"BF3030"
    },
    {  
       "name":"Fraise écrasée",
       "hex":"A42424"
    },
    {  
       "name":"Framboise",
       "hex":"C72C48"
    },
    {  
       "name":"Fuchsia",
       "hex":"FD3F92"
    },
    {  
       "name":"Fumée",
       "hex":"BBD2E1"
    },
    {  
       "name":"Garance (pigment)",
       "hex":"EE1010"
    },
    {  
       "name":"Glauque",
       "hex":"649B88"
    },
    {  
       "name":"Glycine",
       "hex":"C9A0DC"
    },
    {  
       "name":"Grège",
       "hex":"BBAE98"
    },
    {  
       "name":"Grenadine",
       "hex":"E9383F"
    },
    {  
       "name":"Grenat",
       "hex":"6E0B14"
    },
    {  
       "name":"Gris",
       "hex":"606060"
    },
    {  
       "name":"Gris acier",
       "hex":"AFAFAF"
    },
    {  
       "name":"Gris de Payne (mélange de pigments)",
       "hex":"677179"
    },
    {  
       "name":"Gris fer",
       "hex":"7F7F7F"
    },
    {  
       "name":"Gris perle",
       "hex":"CECECE"
    },
    {  
       "name":"Groseille",
       "hex":"CF0A1D"
    },
    {  
       "name":"Guède ou Pastel des teinturiers (pigment)",
       "hex":"56739A"
    },
    {  
       "name":"Gueules (héraldique)",
       "hex":"E21313"
    },
    {  
       "name":"Héliotrope",
       "hex":"DF73FF"
    },
    {  
       "name":"Incarnat",
       "hex":"FF6F7D"
    },
    {  
       "name":"Indigo",
       "hex":"791CF8"
    },
    {  
       "name":"Indigo (teinture)",
       "hex":"2E006C"
    },
    {  
       "name":"Isabelle",
       "hex":"785E2F"
    },
    {  
       "name":"Ivoire",
       "hex":"FFFFD4"
    },
    {  
       "name":"Jaune",
       "hex":"FFFF00"
    },
    {  
       "name":"Jaune canari",
       "hex":"E7F00D"
    },
    {  
       "name":"Jaune citron",
       "hex":"F7FF3C"
    },
    {  
       "name":"Jaune d'or",
       "hex":"EFD807"
    },
    {  
       "name":"Jaune de cobalt ou auréolin (pigment)",
       "hex":"FDEE00"
    },
    {  
       "name":"Jaune de Mars (pigment)",
       "hex":"EED153"
    },
    {  
       "name":"Jaune de Naples (pigment)",
       "hex":"FFF0BC"
    },
    {  
       "name":"Jaune impérial",
       "hex":"FFE436"
    },
    {  
       "name":"Jaune mimosa",
       "hex":"FEF86C"
    },
    {  
       "name":"Kaki",
       "hex":"94812B"
    },
    {  
       "name":"Lapis-lazuli",
       "hex":"26619C"
    },
    {  
       "name":"Lavallière (reliure)",
       "hex":"8F5922"
    },
    {  
       "name":"Lavande",
       "hex":"9683EC"
    },
    {  
       "name":"Lie de vin",
       "hex":"AC1E44"
    },
    {  
       "name":"Lilas",
       "hex":"B666D2"
    },
    {  
       "name":"Lime ou vert citron",
       "hex":"9EFD38"
    },
    {  
       "name":"Lin",
       "hex":"FAF0E6"
    },
    {  
       "name":"Magenta",
       "hex":"DB0073"
    },
    {  
       "name":"Maïs",
       "hex":"FFDE75"
    },
    {  
       "name":"Malachite",
       "hex":"1FA055"
    },
    {  
       "name":"Mandarine",
       "hex":"FEA347"
    },
    {  
       "name":"Marron",
       "hex":"582900"
    },
    {  
       "name":"Mastic",
       "hex":"B3B191"
    },
    {  
       "name":"Mauve (couleur)",
       "hex":"D473D4"
    },
    {  
       "name":"Menthe",
       "hex":"16B84E"
    },
    {  
       "name":"Moutarde",
       "hex":"C7CF00"
    },
    {  
       "name":"Nacarat",
       "hex":"FC5D5D"
    },
    {  
       "name":"Nankin",
       "hex":"F7E269"
    },
    {  
       "name":"Noir",
       "hex":"000000"
    },
    {  
       "name":"Noir animal (pigment)",
       "hex":"000000"
    },
    {  
       "name":"Noir d'aniline (pigment)",
       "hex":"120D16"
    },
    {  
       "name":"Noir d'ivoire (pigment)",
       "hex":"000000"
    },
    {  
       "name":"Noir de carbone (pigment)",
       "hex":"130E0A"
    },
    {  
       "name":"Noir de fumée (pigment)",
       "hex":"130E0A"
    },
    {  
       "name":"Noisette",
       "hex":"955628"
    },
    {  
       "name":"Ocre (pigment)",
       "hex":"DFAF2C"
    },
    {  
       "name":"Ocre rouge (pigment)",
       "hex":"DD985C"
    },
    {  
       "name":"Olive",
       "hex":"708D23"
    },
    {  
       "name":"Or",
       "hex":"FFD700"
    },
    {  
       "name":"Orange",
       "hex":"FF7F00"
    },
    {  
       "name":"Orange brûlé",
       "hex":"CC5500"
    },
    {  
       "name":"Orchidée",
       "hex":"DA70D6"
    },
    {  
       "name":"Orpiment (pigment)",
       "hex":"FCD21C"
    },
    {  
       "name":"Paille",
       "hex":"FEE347"
    },
    {  
       "name":"Parme",
       "hex":"CFA0E9"
    },
    {  
       "name":"Pelure d'oignon (œnologie)",
       "hex":"D58490"
    },
    {  
       "name":"Pervenche",
       "hex":"CCCCFF"
    },
    {  
       "name":"Pistache",
       "hex":"BEF574"
    },
    {  
       "name":"Poil de chameau",
       "hex":"B67823"
    },
    {  
       "name":"Ponceau ou Coquelicot",
       "hex":"C60800"
    },
    {  
       "name":"Pourpre (héraldique)",
       "hex":"9E0E40"
    },
    {  
       "name":"Prasin",
       "hex":"4CA66B"
    },
    {  
       "name":"Prune",
       "hex":"811453"
    },
    {  
       "name":"Puce",
       "hex":"4E1609"
    },
    {  
       "name":"Rose",
       "hex":"FD6C9E"
    },
    {  
       "name":"Rose Mountbatten",
       "hex":"997A8D"
    },
    {  
       "name":"Rouge",
       "hex":"F00020"
    },
    {  
       "name":"Rouge anglais",
       "hex":"F7230C"
    },
    {  
       "name":"Rouge cardinal",
       "hex":"B82010"
    },
    {  
       "name":"Rouge cerise",
       "hex":"BB0B0B"
    },
    {  
       "name":"Rouge d'Andrinople",
       "hex":"A91101"
    },
    {  
       "name":"Rouge de Falun (pigment)",
       "hex":"801818"
    },
    {  
       "name":"Rouge feu",
       "hex":"FF4901"
    },
    {  
       "name":"Rouge feu",
       "hex":"FE1B00"
    },
    {  
       "name":"Rouge sang",
       "hex":"850606"
    },
    {  
       "name":"Rouge tomette",
       "hex":"AE4A34"
    },
    {  
       "name":"Rouille",
       "hex":"985717"
    },
    {  
       "name":"Roux",
       "hex":"AD4F09"
    },
    {  
       "name":"Rubis",
       "hex":"E0115F"
    },
    {  
       "name":"Sable",
       "hex":"E0CDA9"
    },
    {  
       "name":"Sable (héraldique)",
       "hex":"000000"
    },
    {  
       "name":"Safre",
       "hex":"0131B4"
    },
    {  
       "name":"Sang de bœuf",
       "hex":"730800"
    },
    {  
       "name":"Sanguine",
       "hex":"850606"
    },
    {  
       "name":"Saphir",
       "hex":"0131B4"
    },
    {  
       "name":"Sarcelle",
       "hex":"008E8E"
    },
    {  
       "name":"Saumon",
       "hex":"F88E55"
    },
    {  
       "name":"Sépia (pigment)",
       "hex":"AE8964"
    },
    {  
       "name":"Sinople (héraldique)",
       "hex":"149414"
    },
    {  
       "name":"Smalt (pigment)",
       "hex":"003399"
    },
    {  
       "name":"Smaragdin (pigment)",
       "hex":"01D758"
    },
    {  
       "name":"Soufre",
       "hex":"FFFF6B"
    },
    {  
       "name":"Souris",
       "hex":"9E9E9E"
    },
    {  
       "name":"Tabac",
       "hex":"9F551E"
    },
    {  
       "name":"Taupe",
       "hex":"463F32"
    },
    {  
       "name":"Terre d'ombre",
       "hex":"926D27"
    },
    {  
       "name":"Terre de Sienne (pigment)",
       "hex":"8A3324"
    },
    {  
       "name":"Terre de Sienne brûlée (pigment)",
       "hex":"E97451"
    },
    {  
       "name":"Tomate",
       "hex":"DE2916"
    },
    {  
       "name":"Topaze",
       "hex":"FAEA73"
    },
    {  
       "name":"Tourterelle ou Colombin",
       "hex":"BBACAC"
    },
    {  
       "name":"Turquoise",
       "hex":"25FDE9"
    },
    {  
       "name":"Vanille",
       "hex":"E1CE9A"
    },
    {  
       "name":"Vermeil",
       "hex":"FF0921"
    },
    {  
       "name":"Vermillon",
       "hex":"DB1702"
    },
    {  
       "name":"Vert",
       "hex":"008020"
    },
    {  
       "name":"Vert bouteille",
       "hex":"096A09"
    },
    {  
       "name":"Vert céladon",
       "hex":"83A697"
    },
    {  
       "name":"Vert d'eau",
       "hex":"B0F2B6"
    },
    {  
       "name":"Vert de chrome",
       "hex":"18391E"
    },
    {  
       "name":"Vert de Hooker",
       "hex":"1B4F08"
    },
    {  
       "name":"Vert de vessie",
       "hex":"22780F"
    },
    {  
       "name":"Vert épinard",
       "hex":"175732"
    },
    {  
       "name":"Vert impérial",
       "hex":"00561B"
    },
    {  
       "name":"Vert lichen",
       "hex":"85C17E"
    },
    {  
       "name":"Vert perroquet",
       "hex":"3AF24B"
    },
    {  
       "name":"Vert poireau",
       "hex":"4CA66B"
    },
    {  
       "name":"Vert pomme",
       "hex":"34C924"
    },
    {  
       "name":"Vert prairie",
       "hex":"57D53B"
    },
    {  
       "name":"Vert printemps",
       "hex":"00FF7F"
    },
    {  
       "name":"Vert sapin",
       "hex":"095228"
    },
    {  
       "name":"Vert sauge",
       "hex":"689D71"
    },
    {  
       "name":"Vert tilleul",
       "hex":"A5D152"
    },
    {  
       "name":"Vert Véronèse (pigment)",
       "hex":"5A6521"
    },
    {  
       "name":"Vert-de-gris (pigment)",
       "hex":"95A595"
    },
    {  
       "name":"Vert-jaune",
       "hex":"ADFF2F"
    },
    {  
       "name":"Violet",
       "hex":"7F00FF"
    },
    {  
       "name":"Violet d'évêque",
       "hex":"723E64"
    },
    {  
       "name":"Violine (pigment)",
       "hex":"A10684"
    },
    {  
       "name":"Viride (pigment)",
       "hex":"40826D"
    },
    {  
       "name":"Zinzolin",
       "hex":"6C0277"
    }
  ]


 /**
getCodeColor returns an color hex code
 * @param {string} frenchColor -  .
 * @return {string}  - hex code
*/


 function getCodeColor(frenchColor){

     return null
 }
 








































// Validate your code 
import {validation} from './validation.js'
document.getElementById('validateexoahmed').addEventListener('click', function(){
    validation(getCodeColor)
})