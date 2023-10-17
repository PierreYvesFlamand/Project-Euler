/**
 * Problem 67 - Maximum path sum II
 * 
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *
 *    3
 *   7 4
 *  2 4 6
 * 8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...')
 * a 15K text file containing a triangle with one-hundred rows.
 *
 * One line : 59734152400926530634105187868161956657256890818038926773302851768118754484149587628117785821467158027962393109563435537831811890931578530421849332139711375145038179051878861330639995398796280338421782875807225706175117079309077597957887085367665960889994655577553427537828764041048716094275692397306010798712104426213632849860131236166331913570390605552738482822343562621514948986665668849621343434816240655462059803026038894637995434533614702602904513316183734736106396604941053742145884939617094305430659665787576128375184737915399588874339118677741854420579304999734637500245095452279527651945264571391778762952901899781935627119236593854933750902332447616055328857559154465707779852809924254678790592091355106726787682634951312468055707546921674317631224590608987466266160130309092430710888707270299011824134668267043660927791856249596130902994264189045322834109749048282637285277265132189879366213170819548929736842140816703737606970727109591360381357360930438930391502447305732663568612555585506299847728850321272219268269540413078514011570598995101904093192913892869875210564426284362073422123225151792545855303432275630249141289146078921644823830721146529027086578038541577939523348782756563913194386725895390704342198391539848969844637575935595026159342893627789124111741059407695196039647909045912050561032364904538592256552096130619766219692989006349660326968337584183171508463030319112842754545613161689634493905717659626706479699342132475207716042729456828384409487824601206014173826786681459518519881481653883752699572932234982054277361566360346393429483476127517979450144733170834288255351301565948044618412770262026594421494327309676829749810198548383185675393937747673972945318437740783229592406028350606632014430165115819815106286795062456070383185656164066984142256430948666983916040366192482299159564430116940299191769115897568931774567961273082036478144506468854081855209913592453284621519642166060152806259122588289150401622999279875121777477074238427483020546197766241805320284319992589672913662995529534212372658895066198275124824879185020703768699988493071733619220666024664030670537292496032770621304454759884320661546923004716678705399676038068804177210997107422554052664915045710630674869820856806718466663012008804707911603798718547849804877406823608858803357116955536402944960921635812182962524961802054903507706328427183868015004032142945324890592265236681185010442024515065004537325748188982167847997992095044046025887941002788852210388600653497120911265074921221141589936160948172452362315721684560299437681712939491764395984861617660309430664186329680623078714263517129841536478189827288480677562101176905410055441396643831837323152299547087635110453354334105257123620394055784407313826081556888601526210243205606553285799035003520773499266800146086725367393074225531396768387905489782278917351690979948353094069621079494703813071547333517659547937564584176221986941956524393762032448546446827178336709169668527479683221137896600969203673262144463817836598072352466197331360317015367731585693756821366953907525823950659429301133111396025647074902764673301020607014563426373948245576849139869561501453936467373110844270482010726061847969659973892585489256971603148027223044276775793251548129651419041382049143401252299907766025010761713792404799665701434422405353096926810749805690938747137528872372793218272028103759211870047996033145718106141817053150927923470939479143546947429562463285371862858728640577514726306505706575598042522520441092177195521477132455116526910130631549484117674703682090983204406890515860065523680519769482369643389087283383051770839693060478478006238475238772991450989238906461587694366687805135613857956406533682514033471407987865395853065053046940683669757875600332392474472690134044719076512436502545708061806143906411182986566842791042443012961823185259029967466086433855174493422155144734551649242329965155104653279227466357306543272120248381729319695248011383926920486959206205422889909932728417088736036031363681269736485456562716910823118799334702144473709943353390566186561270596332011581477176953265805470345140453304645578688847314768870384234489723508317663269085966765911914178604713295371304226437372856628633073710445282520619525775902691240621146776304614358989410364569787632234037917451153255696612318633137374777232670727677042864716914859654954806629983867797757166301957903301606114129099327756411814874910149064185021741416880545738247744422974113343154615694032459279877040937401226870971700718645780211271839460397379731997326429410748848567127495202452416756612993357269722363660111073052569516652683905074601816484377371199983094912662734512877347270188669921419580025323326148324343831466959119818067258808623218921483713796118339990516232710670225441155314664415644742681513145858709819522287669464864876776278931117416620360944247093494937256189018421742321486065333959935291544204959255434598421235435907816931337885419866768556684654298378756332858382838662752218115082297328527915340281334912501635037224971583228301868942383636294768041902282522912185610083514375723656740723993397089403407469422200553645630055661882723951112376968246610877043507507624183589593897945390222052295436211682917402644257187167085192559949041418061705560843395764263150903403812033209845680615585971694829498578430844893907105959073173098406465890779091956364230236973720705276124314348718421282665655965747720108161849508522370478128099851676435515936928277658024725322072710212830224882804856201443182550959031770809484480902293458217139625260873349906492406835140141510250154251081306424747580367582602269729145670362795489744483649666734430745037050997700160463791397575185852727851818652089701464366986281187093730832463496808207597192531920886603262610242750829473630851332245191358339015225036135506354782523361362728469814732073321626805347667638944502012252479664585239884623397463816420903333765558261046422674741283324309027355865485342823297991624741828799224890200596759504432881398101284278253977905758981736732263745129397494957864243886638793067092221680642952202723501413871572968122084972307024793116645921893496914876435388015780238190795801808717998690726332691428886937177195569371354345049892948496113031273160920348059891869435909008481933286837592665965068220709493431774943067517818761795226277229500798860117104664241856513025948885799140336384496798921526751982051878659361489143594170512215928167914698111165316610986583210556059873674674693408300552079832953094655024632881995719236136098971986517302989267974941144489754815539666945284713861576747084323633792078144147892881059966818638260625136054552353270589252311135459545634162453440613405772211560080419119834450997867103155619154497319004878776081230246284281285825399521394066597860950946869743067879463077827803669410692327837823005188799721999442055776991273128818027020797239598122575294771074778394159277613156661683569861653676399854156082833409476908531702465846599821925543721463302529951332604870208189654426145910664798082321683634249197865974042146149340418259859308272268854362175038899534651557822943440688784253076250892844261403809994023293946551090358456706323913952920371890709376866582044925156137179992637020616673652581679735660592744779482205098330987943740836483588517765302835222273920489245210942242312375228507879208662732059549680159190997010095890935081995438361030113584164582181197364396799765404823191731645265653732657699793465792755330301332761286608047049464883014519961381142131799385500592924884599831532327152279952476057916939789388942830288949582210197483931780965505697610107652721231415809744784935334581743405315709389407695469326568466878902428495145863541638976873186094614878222294716131070728295486458431375426921126713648558239809377605223112665029998672452510281906904329316779462574149735763765462382062230769366941796132072634078085209904170283614464485962452581587370598993913617638449983749022538056983051633944309191042227731735531835455456277848136936443871253056152273433269592593834511349444399212365688139616125554114719781717688177514255998566278179934265616974140118561201583791224266832519049641254518699688369310129832448383047291042773073437716059310154544496938336044530182220429665791741556994812980913185254726434902993467997616141593083299446177675043558755537217466225509973059348173170805909445945137466589487731614853874996423792871422037823123519639654671561329685386453351491291212176850217981546126021883092834459425027884686947345542324141094212034235104839975906360162233837011321050293083461105311786424901446328600778954044618959044951276971467644040934563915069491759065275623740623333669143905343557332276465610616598091669046265189976491872667383824076318991278817354135325132675268748580570711626647226765371997261716242417503764822436321168346931328979939668499014230404679981747074369668096439883554899658662788973214063578207106856657025891720529567348865209932257794212013168175963760777738114131720110901830885917084636277370747015995396939219909870297169236747190663373737552911112265305262648615090650187424774352273242656705205484131188327213980852608440271076322055219082017252111729333496423538203139165850240054231774205360654045807768783255766127433853774322069039791688244191489288585805334875898887848659840115710677081607974729759794730205480899114053336793960855939600757767792063515722341455295186479865356316911913184504482228141403042309148947476645874259657141903992883157599018985795003953267440807416264292014762655487169661972442514014874129807646684241816274820144769308648402316612151502647353391287864436804795108196052950668468635972758046530589912127591395031426470044607987398933789779164716465662178628174422083707395784592273453711530118531347113480514440319672373195706909472576981625968885755694913078797808905710505263840166245991838982421266274690485577735586791797957862866347251767836956390087847634531227052487994157761676823334481809293759488236139762203289432064965413418230847626003633313805231547343702616695787833103937081479577442968395156596307257007774353640394429539180166211697205090167010956929062561412615596335
*/

let answer;
let prevPos;
const numStr =
    '59734152400926530634105187868161956657256890818038926773302851768118754484149587628117785821467158027962393109563435537831811890931578530421849332139711375145038179051878861330639995398796280338421782875807225706175117079309077597957887085367665960889994655577553427537828764041048716094275692397306010798712104426213632849860131236166331913570390605552738482822343562621514948986665668849621343434816240655462059803026038894637995434533614702602904513316183734736106396604941053742145884939617094305430659665787576128375184737915399588874339118677741854420579304999734637500245095452279527651945264571391778762952901899781935627119236593854933750902332447616055328857559154465707779852809924254678790592091355106726787682634951312468055707546921674317631224590608987466266160130309092430710888707270299011824134668267043660927791856249596130902994264189045322834109749048282637285277265132189879366213170819548929736842140816703737606970727109591360381357360930438930391502447305732663568612555585506299847728850321272219268269540413078514011570598995101904093192913892869875210564426284362073422123225151792545855303432275630249141289146078921644823830721146529027086578038541577939523348782756563913194386725895390704342198391539848969844637575935595026159342893627789124111741059407695196039647909045912050561032364904538592256552096130619766219692989006349660326968337584183171508463030319112842754545613161689634493905717659626706479699342132475207716042729456828384409487824601206014173826786681459518519881481653883752699572932234982054277361566360346393429483476127517979450144733170834288255351301565948044618412770262026594421494327309676829749810198548383185675393937747673972945318437740783229592406028350606632014430165115819815106286795062456070383185656164066984142256430948666983916040366192482299159564430116940299191769115897568931774567961273082036478144506468854081855209913592453284621519642166060152806259122588289150401622999279875121777477074238427483020546197766241805320284319992589672913662995529534212372658895066198275124824879185020703768699988493071733619220666024664030670537292496032770621304454759884320661546923004716678705399676038068804177210997107422554052664915045710630674869820856806718466663012008804707911603798718547849804877406823608858803357116955536402944960921635812182962524961802054903507706328427183868015004032142945324890592265236681185010442024515065004537325748188982167847997992095044046025887941002788852210388600653497120911265074921221141589936160948172452362315721684560299437681712939491764395984861617660309430664186329680623078714263517129841536478189827288480677562101176905410055441396643831837323152299547087635110453354334105257123620394055784407313826081556888601526210243205606553285799035003520773499266800146086725367393074225531396768387905489782278917351690979948353094069621079494703813071547333517659547937564584176221986941956524393762032448546446827178336709169668527479683221137896600969203673262144463817836598072352466197331360317015367731585693756821366953907525823950659429301133111396025647074902764673301020607014563426373948245576849139869561501453936467373110844270482010726061847969659973892585489256971603148027223044276775793251548129651419041382049143401252299907766025010761713792404799665701434422405353096926810749805690938747137528872372793218272028103759211870047996033145718106141817053150927923470939479143546947429562463285371862858728640577514726306505706575598042522520441092177195521477132455116526910130631549484117674703682090983204406890515860065523680519769482369643389087283383051770839693060478478006238475238772991450989238906461587694366687805135613857956406533682514033471407987865395853065053046940683669757875600332392474472690134044719076512436502545708061806143906411182986566842791042443012961823185259029967466086433855174493422155144734551649242329965155104653279227466357306543272120248381729319695248011383926920486959206205422889909932728417088736036031363681269736485456562716910823118799334702144473709943353390566186561270596332011581477176953265805470345140453304645578688847314768870384234489723508317663269085966765911914178604713295371304226437372856628633073710445282520619525775902691240621146776304614358989410364569787632234037917451153255696612318633137374777232670727677042864716914859654954806629983867797757166301957903301606114129099327756411814874910149064185021741416880545738247744422974113343154615694032459279877040937401226870971700718645780211271839460397379731997326429410748848567127495202452416756612993357269722363660111073052569516652683905074601816484377371199983094912662734512877347270188669921419580025323326148324343831466959119818067258808623218921483713796118339990516232710670225441155314664415644742681513145858709819522287669464864876776278931117416620360944247093494937256189018421742321486065333959935291544204959255434598421235435907816931337885419866768556684654298378756332858382838662752218115082297328527915340281334912501635037224971583228301868942383636294768041902282522912185610083514375723656740723993397089403407469422200553645630055661882723951112376968246610877043507507624183589593897945390222052295436211682917402644257187167085192559949041418061705560843395764263150903403812033209845680615585971694829498578430844893907105959073173098406465890779091956364230236973720705276124314348718421282665655965747720108161849508522370478128099851676435515936928277658024725322072710212830224882804856201443182550959031770809484480902293458217139625260873349906492406835140141510250154251081306424747580367582602269729145670362795489744483649666734430745037050997700160463791397575185852727851818652089701464366986281187093730832463496808207597192531920886603262610242750829473630851332245191358339015225036135506354782523361362728469814732073321626805347667638944502012252479664585239884623397463816420903333765558261046422674741283324309027355865485342823297991624741828799224890200596759504432881398101284278253977905758981736732263745129397494957864243886638793067092221680642952202723501413871572968122084972307024793116645921893496914876435388015780238190795801808717998690726332691428886937177195569371354345049892948496113031273160920348059891869435909008481933286837592665965068220709493431774943067517818761795226277229500798860117104664241856513025948885799140336384496798921526751982051878659361489143594170512215928167914698111165316610986583210556059873674674693408300552079832953094655024632881995719236136098971986517302989267974941144489754815539666945284713861576747084323633792078144147892881059966818638260625136054552353270589252311135459545634162453440613405772211560080419119834450997867103155619154497319004878776081230246284281285825399521394066597860950946869743067879463077827803669410692327837823005188799721999442055776991273128818027020797239598122575294771074778394159277613156661683569861653676399854156082833409476908531702465846599821925543721463302529951332604870208189654426145910664798082321683634249197865974042146149340418259859308272268854362175038899534651557822943440688784253076250892844261403809994023293946551090358456706323913952920371890709376866582044925156137179992637020616673652581679735660592744779482205098330987943740836483588517765302835222273920489245210942242312375228507879208662732059549680159190997010095890935081995438361030113584164582181197364396799765404823191731645265653732657699793465792755330301332761286608047049464883014519961381142131799385500592924884599831532327152279952476057916939789388942830288949582210197483931780965505697610107652721231415809744784935334581743405315709389407695469326568466878902428495145863541638976873186094614878222294716131070728295486458431375426921126713648558239809377605223112665029998672452510281906904329316779462574149735763765462382062230769366941796132072634078085209904170283614464485962452581587370598993913617638449983749022538056983051633944309191042227731735531835455456277848136936443871253056152273433269592593834511349444399212365688139616125554114719781717688177514255998566278179934265616974140118561201583791224266832519049641254518699688369310129832448383047291042773073437716059310154544496938336044530182220429665791741556994812980913185254726434902993467997616141593083299446177675043558755537217466225509973059348173170805909445945137466589487731614853874996423792871422037823123519639654671561329685386453351491291212176850217981546126021883092834459425027884686947345542324141094212034235104839975906360162233837011321050293083461105311786424901446328600778954044618959044951276971467644040934563915069491759065275623740623333669143905343557332276465610616598091669046265189976491872667383824076318991278817354135325132675268748580570711626647226765371997261716242417503764822436321168346931328979939668499014230404679981747074369668096439883554899658662788973214063578207106856657025891720529567348865209932257794212013168175963760777738114131720110901830885917084636277370747015995396939219909870297169236747190663373737552911112265305262648615090650187424774352273242656705205484131188327213980852608440271076322055219082017252111729333496423538203139165850240054231774205360654045807768783255766127433853774322069039791688244191489288585805334875898887848659840115710677081607974729759794730205480899114053336793960855939600757767792063515722341455295186479865356316911913184504482228141403042309148947476645874259657141903992883157599018985795003953267440807416264292014762655487169661972442514014874129807646684241816274820144769308648402316612151502647353391287864436804795108196052950668468635972758046530589912127591395031426470044607987398933789779164716465662178628174422083707395784592273453711530118531347113480514440319672373195706909472576981625968885755694913078797808905710505263840166245991838982421266274690485577735586791797957862866347251767836956390087847634531227052487994157761676823334481809293759488236139762203289432064965413418230847626003633313805231547343702616695787833103937081479577442968395156596307257007774353640394429539180166211697205090167010956929062561412615596335';

const numbers = numStr.match(/.{1,2}/g).map((num) => parseInt(num));
const triangle = [];
let i = 1;

while (numbers.length) {
    triangle.push(numbers.splice(0, i++));
}

for (i = triangle.length - 1 - 1; i >= 0; i--) {
    triangle[i] = triangle[i].map((num, idx) => {
        const left = triangle[i + 1][idx];
        const right = triangle[i + 1][idx + 1];

        return (num += left > right ? left : right);
    });
}

answer = triangle[0][0];

module.exports = answer;