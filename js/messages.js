var messages = [
/*    { content: "Hola...", type: "info" },
    { content: "Que tal?", type: "info" },
    { content: "Nooo no soy un boot...", type: "info" },
    { content: "Soy el mirko trantando de recordar un poco :D", type: "info" },
    { content: "Talvez me puedes ayudar?...", type: "info" },
    { content: "Tienes que responder en voz altaa", type: "info" },    
    { content: "Empecemos...", type: "info" },
    { content: "Toda buena historia comienza con la pregunta correcta...", type: "info" },
    { content: "19 DE FEBRERO DE 2017", type: "info" },
    { content: "Maniana me daras el Honor de llevarte a tomar un helado??", type: "sent", time: "02:56" },
    { content: "think", type: "received", hasEmoji: true, time: "02:57" },
    { content: "Y si.. lo tenias que pensar todavia ;)", type: "info" },
    { content: "jajajaja", type: "received", time: "02:57" },
    { content: "Ok ok", type: "received", time: "02:57" },
    { content: "Iremos por un helado :D", type: "received", hasEmoji: true, time: "02:58" },
    { content: "Jajaja genial", type: "sent", time: "02:58" },
    { content: ":D ;)", type: "received", time: "02:58", hasEmoji: true },
    { content: "Y bueno el primero de muchos...", type: "info" },
    { content: "Que descancesss", type: "sent", time: "02:58" },
    { content: "Dulces sueniosss", type: "sent", time: "02:58", hasEmoji: true },
    { content: "Gracias!! Que descances zzz angel zzz", type: "received", time: "02:59", hasEmoji: true },
    { content: "De verdad los aprecio bastante...", type: "info" },
    { content: "Mas ahora que los vi todos :P", type: "info" },
    { content: ".", type: "info" },
    { content: ".", type: "info" },
    { content: ".", type: "info" },
    { content: "Esa noche te aseguro que no dormi...", type: "info" },
    { content: "Pero mejor vamos a la maniana siguiente", type: "info" },
    { content: "Seniorita", type: "sent", time: "11:56" },
    { content: "Como esta la resaca?", type: "sent", time: "11:57" },
    { content: ":D", type: "sent", time: "11:57", hasEmoji:true },
    { content: "Holaa Jajaja yo no bebi", type: "received", time: "12:10" },
    { content: "Jajaja recien estoy reaccionando", type: "sent", time: "12:17" },
    { content: "shame Mala idea tomarme tus vasos tb", type: "sent", time: "12:18", hasEmoji: true },
    { content: "Por suerte me hiciste bailar toda la noche laugh angel laugh", type: "sent", time: "12:19", hasEmoji: true },
    { content: "Ouch, De verdad estas con resaca? Disculpa jejeje", type: "received", time: "12:21" },
    { content: "Jajaja broma, no tomamos mucho creo", type: "sent", time: "12:24" },
    { content: "tuve que madrugar es eso", type: "sent", time: "12:25" },
    { content: "Tu sabes... Tenia q ir a misa angel", type: "sent", time: "12:25", hasEmoji:true },
    { content: "De verdad? A que hora fuiste?", type: "received", time: "12:26" },
    { content: "Amo su inocencia...", type: "info" },
    { content: "XD", type: "sent", time: "12:26" },
    { content: "Creo que mis chistes no se entiende por texto", type: "sent", time: "12:26" },
    { content: "En fin... habia que ir por un helado!", type: "info" },
    { content: "Asi que me arriesgue.. y dije lo primero que se me ocurrio...", type: "info" },
    { content: "Te gusta el helado de yogurt?", type: "sent", time: "13:57" },
    { content: "Odio el helado de yogurt", type: "received", time: "14:01" },
    { content: "Casi...", type: "info" },
    { content: "Apesar de todo pero las cosas salieron bien", type: "info" },
    { image: "./img/photo1.jpg", type: "sent", time: "22:11" },
    { content: ".", type: "info" },
    { content: ".", type: "info" },
    { content: ".", type: "info" },
    { content: "Ya nos tocaban algunas salidas", type: "info"},
    { content: "3 DE MARZO DE 2017", type: "info"},
    { content: "Ok Jic Saldremos tipo 10", type: "received", time: "19:24" },
    { content: "Pero antes te escribo jejejee. kiss", type: "received", time: "19:24", hasEmoji:true },
    { content: "Geniaaaal", type: "sent", time: "19:50" },
    { content: "Yo meti 3 goles por ti :)", type: "sent", time: "19:50" },
    { content: "Belleza! kiss", type: "received", time: "19:50", hasEmoji:true },
    { content: "Estas listo? shame", type: "received", time: "22:08", hasEmoji:true },
    { content: "Acabo de salir de la ducha :p", type: "sent", time: "22:08" },
    { content: "Me pongo guapo y voy :)", type: "sent", time: "22:08" },
    { content: "Pero con calma noma s", type: "received", time: "22:09" },
    { content: "Aqui estan demoradas", type: "received", time: "22:09" },
    { content: "No siempre logramos ser los mas puntuales ...", type: "info" },
    { image: "./img/photo2.jpg", type: "sent", time:"22:11" },
    { content: "Pero nos esperamos y nos apoyamos! y por eso te quiero :) ...", type: "info" },
    { content: "4 DE MARZO DE 2017", type: "info"},
    { content: "Dale like a aforismos y estaraas enterada de toddo ;)", type: "sent", time: "3:31" },
    { content: "Mas que yo en realidad laugh", type: "sent", time: "3:31", hasEmoji:true },
    { content: "Algoritmos", type: "received", time: "3:31" },
    { content: "Ok", type: "received", time: "3:31" },
    { content: "XD", type: "sent", time: "3:31" },
    { content: "Lindaaa", type: "sent", time: "3:31" },
    { content: "kiss Eres mi algoritmo jejeje", type: "received", time: "3:32", hasEmoji:true },
    { content: "Awww No podia no meter esa parte :P", type: "info" },
    { content: "Y claro!... una buena salida al cine no podia faltar", type: "info" },
    { content: "11 DE MARZO DE 2017", type: "info" },
    { content: "El plan era ponerte sentimental... pero...", type: "info" },
    { content: "Linda noche, Bonita peli", type: "received", time: "11:45" },
    { content: "No llore nada jajaja", type: "received", time: "23:45" },
    { content: "XD", type: "sent", time: "23:47" },
    { content: "No lloraste??", type: "sent", time: "23:47" },
    { content: "Solo yo?? Jajaja", type: "sent", time: "23:47" },
    { content: "Si haz llorado yo te he visto ;)", type: "sent", hasEmoji:true, time: "23:47" },
    { content: "think think think No...", type: "received", hasEmoji:true, time: "23:48" },
    { content: "Ok ok. Digamos que si", type: "received",  time: "23:49" },
    { content: "Solo por seguirte ;)", type: "received", hasEmoji:true, time: "23:49" },
    { content: "Y no verte llorar solo", type: "received", time: "23:49" },
    { content: "Awww siempre tan tierna XD", type: "sent", hasEmoji:true, time: "23:55" },
    { content: "Te adoro! kiss", type: "sent", hasEmoji:true, time: "23:55" },
    { content: "Y como olvidar cuando te mate...", type: "info" },
    { content: "14 DE MARZO DE 2017", type: "info" },
    { content: "Te mateeee?? Esa parte no entendi shame shame shame", type: "sent", hasEmoji:true, time:"20:27" },
    { content: "Jajajja te adorooooo", type: "sent", hasEmoji:true, time:"20:28" },
    { content: "Me hacia ya falta verte cuteSmile", type: "sent", hasEmoji:true, time:"20:28" },
    { content: "Yo igual! cuteSmile cuteSmile cuteSmile", type: "received", hasEmoji:true, time:"20:43" },
    { content: "Me mataste... Me refiero a que haces que algo en mi explote (creo que no hay palabras que logren describirlo)jajajaja", type: "received", hasEmoji:true, time:"20:43" },
    { content: "Fue tan lindo verte hoy cuteSmile kiss", type: "received", hasEmoji:true, time:"23:15" },
    { content: "Me vuelves loco mujer kiss", type: "sent", hasEmoji:true, time:"23:54" },
    { content: "15 DE MARZO DE 2017", type: "info" },
    { content: "P.D. Acabo de volver fui a ver si seguias en la esquina", type: "received", hasEmoji:true, time:"23:26" },
    { content: "Jajajaja y si me encontrabas?", type: "sent", time:"23:28" },
    { content: "Me ibas a hacer dormir en el jardin? laugh", type: "sent", hasEmoji:true, time:"23:28" },
    { content: "Uhmm te recogia...", type: "received", hasEmoji:true, time:"23:29" },
    { content: "Y  yo creo que en el sillon nomas laugh laugh", type: "received", hasEmoji:true, time:"23:29" },
    { content: "XD kiss", type: "sent", hasEmoji:true, time:"23:30" },
    { content: "Pero obviamente tu ibas a dormir a mi lado en el otro sillon nove??", type: "sent", time:"23:31" },
    { content: "Si.... Puede ser....", type: "received", time:"23:31" },
    { content: "heartEyes cuteSmile", type: "received", hasEmoji:true, time:"23:31" },
    { content: "Pero yo duermo en el sillon mas grande kiss cuteSmile", type: "received", hasEmoji:true, time:"23:32" },
    { content: "Jajaja", type: "sent", time:"23:35" },
    { content: "Con que estes a mi lado me basta", type: "sent", hasEmoji:true, time:"23:35" },
    { content: ".", type: "info", hasEmoji:true, time:"23:35" },
    { content: ".", type: "info", hasEmoji:true, time:"23:35" },
    { content: ".", type: "info", hasEmoji:true, time:"23:35" },
    { content: "Y asi nomas llego nuestro primer mesversario! :D", type: "info" },
    { content: "Uhmmmm....", type: "info" },
    { content: "No hay nada en el 18.... todo esta en el 19 :O", type: "info"},
    { content: "Te acuerdas pq lo movimos? think", type: "info", hasEmoji:true },
    { content: "PD. Si respondes mal, tu celular se autodestruira...", type: "info" },
    { content: "Ahhh ciertooo...xD", type: "info" },
    { content: "Como siempre yo tenia todo planeado..", type: "info" },
    { content: "19 DE MARZO DE 2017", type: "info" },
    { content: "Me gustaria que vayamos a caminar un poco, talvez podemos ir a pasear un poco por el prado o por el parque lincontlincon y tomar comer algo de camino te parece?", type: "sent", time:"12:08" },
    { content: "y 6:30 te dejo en tu casita kiss", type: "sent", hasEmoji:true, time:"12:08" },
    { content: "Si sii Me parace bien 5 kiss", type: "received", hasEmoji:true, time:"12:20" },
    { content: "Y como siempre super puntuales...", type: "info" },
    { content: "Dame 15 min pleeasee shame", type: "sent", hasEmoji:true, time:"16:54" },
    { content: "Ok cuteSmile", type: "received", hasEmoji:true, time:"16:57" },
    { content: "Ok..... = Te voy a mataaaaar!!!! shame", type: "info", hasEmoji:true },
    { content: "Pero a pesar de todo... pudimos salir adelante :)", type: "info" },
    { image: "./img/photo3.jpg", type: "sent", time:"17:24" },
    { content: "Fue de los dias mas increibles que vivi contigo...", type: "info" },
    { content: "Simplemente gracias...", type: "info" },
    { content: "Y tb gracias a todo tu equipo que trabajo en la sorpresa :P...", type: "info" },
    { content: "Y al parecer me debes una charla...", type: "info" },
    { content: "2 DE ABRIL DE 2017", type: "info" },
    { content: "A veces? Yo siempre soy un angelitoo", type: "sent", time:"22:23" },
    { content: "Jjajaj", type: "sent", time:"22:23" },
    { content: "No...", type: "received", time:"22:24" },
    { content: ":O", type: "sent", time:"22:24", hasEmoji: true },
    { content: "Maniana charlamos de eso", type: "received", time:"22:24" },
    { content: ";)", type: "received", time:"22:24", hasEmoji:true },
    { content: "Esta pa rato eso", type: "sent", time:"22:24" },
    { content: "Y miraaa! hasta queriamos ir  al miss Bolivia :P", type: "info" },
    { content: "9 DE ABRIL DE 2017", type: "info" },
    { content: "Pero como dijimos tu te inscribes y yo ahi con full barra kiss", type: "received", time: "12:31", hasEmoji: true },
    { content: "Conste full barraa", type: "sent", time: "12:32" },
    { content: "Si sii, Con tu nombre tatuado en mi frente Jajajaja", type: "received", time: "12:33" },
    { content: "Tu tienes que decir:", type: "sent", time: "12:33" },
    { content: "Si... exacto... Ese con las piernas sin rasuraar... ESE ES MI CHICO!", type: "sent", time: "12:33" },
    { content: "OMG! laugh", type: "received", time: "12:33", hasEmoji: true },
    { content: "El rosadito... Digo el blanquito Jajajaja", type: "received", time: "12:34", hasEmoji: true },
    { content: "Juajuajuajua Te pasaste! Tu eres mas blancaaa ya?", type: "sent", time: "12:34", hasEmoji: true },
    { content: "laugh Solo despues de que te haga quemar unas horas en el sol", type: "received", time: "12:35", hasEmoji: true },
    { content: "O podemos aplicarte un ligero bronceado", type: "received", time: "12:35" },
    { content: "Que te durara una o dos semanas", type: "received", time: "12:35" },
    { content: "think think think think", type: "received", time: "12:35", hasEmoji:true },
    { content: "Jajajaja Ves ya me quieres cambiaar", type: "sent", time: "12:35" },
    { content: "Me lo dijo mi madreee", type: "sent", time: "12:36" },
    { content: "Jajajajajajaja Era una sugerencia! Jajajaja", type: "received", time: "12:36" },
    { content: "Mentira asiiii rosado Te quierooo", type: "received", time: "12:36" },
    { content: "Yaya si yo me bronceo... Tu tienes que...", type: "sent", time: "12:37" },
    { content: "Dijeeeee rosadooo Jajajaja", type: "received", time: "12:37" },
    { content: "Asi esta bien! Ya no te quejes", type: "received", time: "12:37" },
    { content: "Rosado Me gusta!!", type: "received", time: "12:37" },
    { content: "Juajuajuajua Nada ahora quiero ser negro carbon!", type: "sent", time: "12:37" },
    { content: "podrian decirnos nucitas", type: "sent", time: "12:38" },
    { content: "Tampoco asi, Con calma nomas", type: "received", time: "12:38" },
    { content: "Rosado calmate Jejejeje", type: "received", time: "12:38" },
    { content: "Rosado Calmate.... Tiempo que no reia tanto... xD", type: "info" },
    { content: "Waaayyyy que chistosoo", type: "sent", time: "12:38" },
    { content: "Queridoooo Tienes tantos apodos laugh shame laugh shame", type: "received", time: "12:41", hasEmoji:true },
    { content: "Pero los que recuerdo ahora son... Rosadito Modelito Ternurita y etc", type: "received", time: "12:41" },
    { content: "Me quedo con el etc :P", type: "sent", time: "12:42" },    
    { content: "Y el segundo mesversario! .. Cuando te arruine los mariachis!", type: "info" },
    { content: "17 DE ABRIL DE 2017", type: "info" },
    { content: "Bien ahora cancelare los mariachis", type: "received", time: "23:44" },
    { content: "Dejame hacer una llamada", type: "received", time: "23:44" },
    { content: "Otra vez", type: "sent", time: "23:44" },
    { content: "Cancelados en mi cumple", type: "sent", time: "23:44" },
    { content: "Cancelados maniana", type: "sent", time: "23:44" },
    { content: "Llamales fiiijaa para el dia del hombre ;)", type: "sent", time: "23:44" },
    { content: "Ya sabes que espero el 19 de noviembre..", type: "info"},
    { content: ":O Despues de tu cumpleanio!... jajaja va a ser interesante...", type: "info"},
    { content: "Y el tercero no se quedo atras! :)", type: "info" },
    { content: "18 DE MAYO DE 2017", type: "info" },
    { content: "T", type: "received", time: "7:17" },
    { content: "E", type: "received", time: "7:17" },
    { content: "A", type: "received", time: "7:17" },
    { content: "M", type: "received", time: "7:17" },
    { content: "O", type: "received", time: "7:17" },
    { content: "heartEyes", type: "received", time: "7:17", hasEmoji:true },
    { content: "Simplemente eres lo mejor que me pudo pasar en la vida mi amor...", type: "sent", time: "10:45"},
    { content: "Hoy no te me escapas", type: "sent", time: "10:45" },
    { content: "Crees que podemos ir a comer un rato en la noche ?", type: "sent", time: "10:47" },
    { content: "kiss cuteSmile Sii aque hora piensas maso? 8 o 9?", type: "received", time: "10:59", hasEmoji: true},
    { content: "8:30? Tenemos que volver temprano", type: "sent", time: "11:38" },
    { content: "Tu pues... yo queria que sea 19.. asi siempre caia viernes!", type: "sent", time: "11:38" },
    { content: "Y podiamos ir a fiestear sin pensar en el maniana kiss", type: "sent", time: "11:38", hasEmoji:true },
    { content: "Juajuajua Uh sisi claro yo queria si si jajajaja", type: "received", time: "12:20" },
    { content: "kiss No me odies", type: "sent", time: "12:38", hasEmoji:true },
    { content: "Lo intente pero no lo consegui shame", type: "received", time: "12:38", hasEmoji:true },    
    { image: "./img/photo4.jpg", type: "sent", time: "23:50" },
    { content: "Adoro esta foto :)", type: "info" },
    { content: "Ese dia nos conocimos un poco mas... jejeje", type: "info" },
    { content: "Y sacamos una de mis fotos favoritas... :)", type: "info" },
    { image: "./img/photo5.jpg", type: "sent", time: "23:50" },
    { content: "Y pues un par de charlas medio raras...interesantes :P", type: "info" },
    { content: "29 DE MAYO DE 2017", type: "info" },
    { content: "Me mordiste por todo lado!", type: "sent", time: "00:51" },
    { content: "Omg!", type: "received", time: "00:51" },
    { content: "O fueron los zancudos ? think", type: "sent", time: "00:51", hasEmoji:true },
    { content: "Jajaja sii fueron ellos", type: "received", time: "00:51" },
    { content: "shame Ejemm amm see", type: "sent", time: "00:52", hasEmoji:true },
    { content: "Soy inocente angel", type: "received", time: "00:52", hasEmoji:true },
    { content: "Ya te mordere entre semana shame", type: "sent", time: "00:52", hasEmoji:true },
    { content: "shame ok tienes que practicar la mordida sino acabaras mordiendome todo el cuello shame kiss", type: "received", time: "00:55", hasEmoji:true },
    { content: "Pensandolo bien, creo esta... bien laugh", type: "received", time: "00:55", hasEmoji: true },
    { content: "Jajaja claro... pero tengo que practicar contigo laugh", type: "sent", time: "00:57", hasEmoji:true },
    { content: "Si no como? con la almohada? Era un chiste eso laugh", type: "sent", time: "00:57", hasEmoji:true },
    { content: "Ok Pero tu tambien me dejaras practicar en tu cuello laugh shame", type: "received", time: "1:00", hasEmoji:true },
    { content: "jajaja hasta que aprendamoos ... uuuf... Tendremos que andar con chalina todo el mes laugh", type: "sent", time: "1:02", hasEmoji:true },
    { content: "Otra charla que tenemos pendiente laugh", type: "info", hasEmoji:true },
    { content: "26 DE JUNIO DE 2017", type: "info" },
    { image: "./img/photo6.jpg", type: "received", time: "19:41"},
    { content: "Oseaa...", type: "sent", time: "19:41" },
    { content: "Que un dia bebimos tanto que nos hicimo ese tatuaje, lo volivmos memee y lo subimos a intenet sin antes borrar toda evidencia para que de sobrios no lo recordemos?", type: "sent", time: "19:42" },
    { content: "16 DE JULIO DE 2017", type: "info" },
    { content: "Vendras a dormir conmigo?", type: "sent", time: "11:08" },
    { content: "kiss Ahora?", type: "received", time: "11:08", hasEmoji:true },
    { content: "XD Si.. Ahora", type: "sent", time: "11:09" },
    { content: "Pero tu vienes no puedo ir Jajaja", type: "received", time: "11:09" },
    { content: "Es mas dificil que vaya", type: "received", time: "11:09" },
    { content: "Entro en tu cama?", type: "sent", time: "11:09" },
    { content: "Claro a un costaditoo", type: "received", time: "11:09" },
    { content: "Me vas a botaar con una patada seguro", type: "sent", time: "11:09" },
    { content: "No?? Jejejeje Tratare de no hacer eso", type: "received", time: "11:10" },
    { content: "Trataree.. Eso me basta cuteSmile", type: "sent", time: "11:10", hasEmoji: true },
    { content: "Geniall", type: "received", time: "11:10" },
    { content: "Yaya voy a ir...", type: "sent", time: "11:10" },
    { content: "Voy a lanzar una piedrita a la ventana", type: "sent", time: "11:10" },
    { content: "Va a ser la senial...", type: "sent", time: "11:10" },
    { content: "Ahi tu...", type: "sent", time: "11:11" },
    { content: "Esta es la mejor parte...", type: "info" },
    { content: "Mandas a tu abuelita a que se fije afueraa", type: "sent", time: "11:11" },
    { content: "Pero que Plan!!!", type: "info" },
    { content: "Ahi yo me meto sin que me veaa por la puerta", type: "sent", time:"11:11" },
    { content: "Trepo por donde siempre te digo que nos tepemos...", type: "sent", time:"11:11" },
    { content: "Y tu haces un sonidoo de pajaro...", type: "sent", time:"11:11" },
    { content: "Asi sabre que ese es tu cuarto ;)", type: "sent", time:"11:12" },
    { content: "Cucu cucuuu", type: "sent", time:"11:12" },
    { content: "Listooo Este creo que no puedo hace el sonido de pajaro", type: "received", time:"11:12" },
    { content: "Jajaja Pero podria poner algun sonido de mi celu...", type: "received", time:"11:12" },
    { content: "XD Mmmmm y si entran a curarte...", type: "sent", time:"11:14" },
    { content: "Entro debajo de tu cama?", type: "sent", time:"11:14" },
    { content: "A las 8 am entran jejeje antes no", type: "received", time:"11:14" },
    { content: "O tienes algun monto de ropa debajo del cual puedo ocultarme?", type: "sent", time:"11:14" },
    { content: "Pero sii bajo la cama lo logras", type: "received", time:"11:15" },
    { content: "La sillaaaaa Magica Puede tener un monton de ropa y nada se caera", type: "received", time:"11:15" },
    { content: "Jajajaja", type: "sent", time:"11:16" },*/
    { content: "Si voy... yo creo que en vez de dormir.. Me pondria a doblar tu ropa laugh", type: "sent", time:"11:16", hasEmoji:true },
    { content: "Yeiiiii heartEyes No te dejariaaa", type: "received", time:"11:16", hasEmoji:true },    
    { content: "Estarias ahi a mi lado nada mas jejeje", type: "received", time:"11:17" },
    { content: "Amoooooooor!!! Me traes loco ... shame", type: "sent", time:"11:17", hasEmoji:true },
    { content: "No creo que puedas doblar la ropa si te agarrooo jajaja heartEyes", type: "received", time:"11:17", hasEmoji:true },
    { content: "Te quieroooooo", type: "received", time:"11:18" },
    { content: ".", type: "info" },
    { content: ".", type: "info" },
    { content: ".", type: "info" },
    { content: "Entre otras cosas...", type: "info" },
    { content: "Pasamos momentos muy lindos juntos", type: "info" },
    { content: "Y por eso siempre voy a estar agradecido", type: "info" },
    { content: "Gracias por tu tiempo y amor", type: "info" },
    { content: "Cada dia me haces mas feliz...", type: "info" },
    { content: "Y espero no dejar de enamorarte cada dia mas :)", type: "info" },
    { content: "TE AMO!", type: "info" },
    { content: "Me quedo con esta frase...", type: "info" },
    { content: "26 DE JULIO", type: "info" },
    { content: "Que pasaba si no te encontraba?? :S", type: "sent", time: "11:54" },
    { content: "Me buscabas!!! Como sea pero lo hacias! jajaja", type: "received", time: "11:54" },
    { content: "Son tantas coincidencias entre nosotros aveces...", type: "info" },
    { content: "Que parece destino que estemos juntos.. jejejej", type: "info" },
    { content: "Pero en realidad son nuestras desiciones :)", type: "info" },
    { content: "Gracias por elegirme! :)", type: "info" },
    { content: "Mirko...", type: "info" },


]