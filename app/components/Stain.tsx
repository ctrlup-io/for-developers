import { styled } from "@mui/system";

const Svg = styled("svg")(({ theme }) => ({
  fill: theme.components.MuiSvgIcon.styleOverrides.colorAction.fill,
}));

type Strain = {
  d: string;
  width: number;
  height: number;
};

const stains: Strain[] = [
  {
    width: 120,
    height: 16,
    d: "M109.525 15.6554c-1.431-.1213-3.579-.5329-6.536-1.2523-2.423-.5893-5.3954-1.2774-6.6055-1.529-3.4671-.721-12.6136-2.0241-15.797-2.2505-11.6949-.83153-13.8145-.9297-23.0296-1.06596-18.3509-.2716-34.0858.66896-49.43264 2.95496-4.93899.7357-6.21597.8212-7.126268.4767-.759265-.2873-1.0295253-.9649-.54265-1.3606.201131-.1634.291862-.4963.202015-.7396-.135975-.3672.096936-.6075 1.369383-1.41254 1.9091-1.20813 5.64796-3.03413 5.98384-2.92277.13808.04584.56549-.10498.94997-.33513 1.15315-.69028 3.80425-1.41217 9.12475-2.48462 5.4532-1.09906 8.1357-1.51497 8.8517-1.37227.2501.04977.5997.0199.7769-.06639.5393-.26299 8.8511-1.0905 17.078-1.70018C51.4351.102802 71.5322.127553 77.2075.635041c.7973.071365 2.6229.19052 4.057.264833C85.5198 1.12042 94.0173 1.92816 98.372 2.52625c3.122.42858 4.088.62568 4.169.85052.127.34555.488.37327-5.8977-.45227-4.3218-.55865-13.7637-1.41103-15.0764-1.361-.7577.0289 1.9161.37612 3.772.48988 5.3256.32649 17.2601 2.12149 24.8011 3.72997 1.988.42424 3.676.77006 3.75.76861.074-.00145-.104-.14704-.396-.32355-.291-.17651-.722-.31715-.957-.31256-.235.0046-.892-.14571-1.46-.3342-.567-.18833-2.215-.59754-3.662-.90931-2.613-.56326-3.235-.82589-2.419-1.02174.459-.11036 4.822.78258 8.318 1.70274 2.389.62877 6.143 2.41734 6.153 2.93163.004.17121-.127.31375-.29.31695-.168.00327-.092.22342.173.50547.357.38061.391.55553.142.73467-.18.12924-.241.38224-.137.56234.167.2876-.256 1.6776-.512 1.6826-.053.001-.656-.0998-1.34-.2241s-1.293-.1962-1.354-.1599c-.061.0364.225.2845.635.5517.832.5427.997 1.3025.316 1.4658-.245.0588-1.256-.0406-2.247-.2213-.991-.1806-2.662-.3752-3.713-.4321-2.004-.1089-3.825-.4284-4.165-.731-.11-.0983-.538-.172-.951-.164-.726.0142-.734.0253-.236.3265.283.1715.925.3539 1.427.4054 1.279.1312 3.028.7185 2.886.9691-.143.252.079.2603.784.029.395-.1296.571-.1097.704.0797.097.1387.307.2031.468.143.16-.0602.715-.0302 1.234.0667.856.1598.949.2433 1.007.9017l.063.7257-1.352.0085c-.744.0046-2.312-.0727-3.484-.172Zm-8.105-3.9143c-.203-.1809.355-.1544 1.81.0863.294.0488.076-.0677-.485-.2588-.56-.1912-1.581-.5509-2.267-.7995-.6857-.2484-1.5613-.4457-1.9455-.4382-.3839.0076-.8936-.1397-1.1323-.327-.2389-.18745-.5677-.29051-.7312-.22917-.1634.0615-1.6078-.12293-3.2098-.40962-3.1097-.55652-10.5938-1.35677-15.8246-1.69223-3.3983-.21793-9.1234-.34082-9.1205-.19593.0022.11574 4.3879.47503 7.8268.64115 5.9303.2865 19.627 2.0636 19.3405 2.5093-.1696.2642 1.3133.455 1.5752.2026.0992-.0954.8562-.0282 1.8477.1639 1.2047.2335 1.5687.3691 1.2867.4796-.329.1285-.322.1794.043.3086.602.2128 1.241.1862.986-.041Zm-2.2297-.3636c-.0972-.053-.347-.0541-.5546-.0022-.2299.0574-.1605.0953.1767.0966.3051.0012.475-.0413.3779-.0944Zm9.8237-1.62431c-.199-.3544-7.225-1.95042-9.837-2.23442-1.824-.19837-1.0222.06108 1.909.61777 1.438.27302 2.874.5898 3.19.70387.316.11408.806.20289 1.089.19735.283-.00553.753.12044 1.045.27972.291.15944.664.26146.829.22678.164-.03469.467.04784.672.18363.448.29591 1.266.31461 1.103.0253Zm.728-2.98641c-1.629-.55285-7.278-1.61396-11.4556-2.15206-3.7427-.48219-4.5831-.40461-1.1738.10845 3.8634.58104 10.0074 1.68742 11.9084 2.14402 2.191.52645 2.459.48908.721-.10041Zm-13.2397.35659c-.0972-.05309-.347-.05417-.5546-.00224-.2298.05734-.1605.09524.1767.0966.3051.00115.475-.04126.3779-.09436Zm-45.7531.24428c-.0923-.13187-.3701-.23575-.6175-.23092-.394.00771-.3866.06157.0586.43567.4967.41682.8921.27192.5589-.20475Zm15.739.11167c-.0018-.09107-.1412-.16288-.3096-.15959-.1684.0033-.2245.07893-.1244.16808.1002.08915.2394.16096.3097.15959.0703-.00138.1261-.07701.1243-.16808Zm26.5302-3.49965c-.7158-.22403-3.0802-.35187-2.7246-.1473.2734.15732 1.2581.26461 2.6103.28437.4916.00711.5089-.0136.1143-.13707Zm9.8626-.25905c-.003-.15713.862-.25322 1.019-.11318.096.08526-.094.16019-.422.1666-.327.00641-.596-.01765-.597-.05342ZM56.8212 1.53958c-.3589-.36916-.8766-.42479-.8701-.09346.0056.28281.2896.4361.7904.42631.3061-.00599.3243-.08138.0797-.33285Z",
  },
  {
    width: 104,
    height: 12,
    d: "M19.7704.0219507c1.2811.0235903 5.241.1586223 8.7997.3001633 7.9169.314783 9.8172.364295 13.459.350411 1.989-.007495 3.2175.048901 4.075.187125.9315.15014 1.3549.16538 1.7563.063522.2907-.073965.7402-.102471.9988-.063522.2588.038948 4.3597.095221 9.1137.125078 17.6745.110822 35.598.684972 40.7034 1.303732 3.9617.48016 5.4817 1.08675 4.5317 1.80846-.225.1714-.168.34476.259.79028.843.87799.776.9527-.854.9527-1.612 0-2.222.08379-2.222.30507 0 .10014.505.17583 1.408.21133 1.792.07053 2.201.22473 1.979.74482-.148.34685-.315.41418-1.31.52893-1.194.13786-1.63.3691-.933.49589.225.04116.409.11218.409.15788 0 .13258-1.466.50781-2.6585.68056l-1.094.1585.6866.13245c.3776.07286.7573.18675.8435.2531.2047.15727-.9491.58447-1.9991.74007-.978.1449-12.7575.7326-16.0952.803-1.2811.027-3.0864.0818-4.0116.1218-9.0697.3919-20.396.4376-34.4341.139-13.4592-.2862-16.2034-.4313-27.811-1.47041C9.71362 9.33543 2.67332 8.12017 1.39451 7.42942c-.544031-.2939-.542742-.29402.77644-.04055.21353.04104.38824.02003.38824-.04657 0-.06659-.35485-.19081-.78863-.2762C.725983 6.86079.227768 6.36773.0504837 5.36367c-.1123276-.63669-.04608917-.91818.2888183-1.22559.239143-.21956.367539-.49969.2855-.62256-.188683-.28235.25856-.85183.940798-1.19758.33749-.17102.46715-.35237.36285-.50804-.21741-.32523.30332-.835124 1.10876-1.085525C4.61314.23414 7.13192.0418558 12.3942.00978782c2.7758-.01683263 6.0951-.01142734 7.3762.01216288ZM9.67661 1.53332c-.74695.08429-.73246.09056.38819.16587.6406.04313 3.4358.11218 6.2116.15359 2.7758.04128 6.1533.12679 7.5056.18982 1.3524.06303 3.7399.14523 5.3058.18283 1.5658.03747 4.7104.13822 6.988.22398 2.2776.08576 4.6959.13171 5.374.10198.6781-.02961 1.4352-.01302 1.6823.03686.2472.05001 3.1281.10358 6.4021.11918 3.274.01561 6.2017.06819 6.5058.11672.3202.05112.6264.03207.727-.04521.263-.20199 2.1003-.16231 2.4774.05345.2889.16525.3688.15862.6869-.05701.2946-.19954.4799-.22214 1.0205-.12459.7659.13822 1.3275.03686.9059-.16329-.1509-.07163-1.3549-.13626-2.6757-.14363-1.879-.01044-2.5584-.06315-3.1254-.24254-.5384-.17041-.7045-.18516-.647-.05762.0991.22005-1.3638.29709-2.3967.12606-.464-.07679-.807-.07999-.9001-.00848-.0829.06352-.5472.11549-1.0319.11549-.6352 0-.9641-.07335-1.1771-.26231-.1765-.15641-.3639-.20998-.4649-.13257-.0926.07126-.5059.1698-.9182.21894-.5624.06709-.8303.03674-1.0741-.12163-.3015-.19561-.3373-.19254-.4949.04337-.2244.33567-1.5394.33997-2.5938.00848-.8075-.25397-1.2913-.31946-1.0627-.144.073.05602-.2987.09252-.8259.08121-.5272-.0113-1.0994.03084-1.2718.09363-.1954.07113-.6344.06413-1.1647-.01868-.4682-.07311-2.3653-.16403-4.2158-.202-1.8506-.03808-4.1799-.08907-5.1763-.11352-.9965-.02433-4.1993-.0822-7.1175-.1284-2.9181-.04619-5.3543-.10615-5.4136-.13331-.1846-.08441-7.6136-.02506-8.43299.06733ZM99.3562 3.60853c0 .12262 1.1598.38838 1.6948.38838.58 0 .444-.24057-.207-.36479-.751-.14338-1.4878-.15506-1.4878-.02359Zm-52.1514.51125c-.088.06757-.0365.12286.1142.12286.1506 0 .2741-.05529.2741-.12286 0-.06758-.0513-.12287-.1142-.12287s-.1861.05529-.2741.12287Zm-.9058.06143c0 .10136.1128.1843.2508.1843.1377 0 .1835-.08294.1017-.1843-.0821-.10137-.1949-.1843-.2508-.1843-.0559 0-.1017.08293-.1017.1843ZM28.6711 5.57205c.941.04337 1.5813-.03649 1.5813-.1972 0-.05738-.5479-.04521-1.2177.02679-1.1732.1263-1.1864.13257-.3636.17041Zm15.5574.26785c-.3347.10259-.3277.1193.0494.12102.2407.00098.5096-.05344.5976-.12102.2024-.15555-.1403-.15555-.647 0ZM18.7351 6.89052c1.3397.1746 6.9989.55462 7.9824.53607 1.4427-.02728-2.8477-.44736-5.4918-.53779-.9079-.03096-1.7136-.08612-1.7902-.12262-.0769-.03636-.557-.06131-1.0671-.05528-.9048.01081-.8958.01511.3667.17962Zm27.0212.94988c-.3437.12459-.2027.15273.8411.16821 1.2773.01892 1.7302-.14229.6722-.23898-.9763-.08932-1.0855-.08416-1.5133.07077Zm5.1367.16956c.1778.03415.4689.03415.647 0 .1778-.03404.0323-.06193-.3235-.06193-.3559 0-.5016.02789-.3235.06193Zm-45.22803.03968c.49822.05099 1.2889.18787 1.75683.30434.74357.18492 1.93078.17853 1.53738-.00835-.26115-.12385-2.63035-.39514-3.42362-.39194-.75367.00307-.74979.00589.12941.09595Zm7.76443.14117c1.2027.23001 5.8084.69776 8.2821.84103 1.3523.07838 3.2381.19387 4.1908.25678 1.7749.11722 4.5246.15629 4.3248.06143-.0614-.02911-2.4976-.19769-5.4137-.37461-2.9161-.17681-6.6412-.45203-8.2782-.61151-3.2476-.31625-4.104-.36405-3.1058-.17312Zm-3.2548.53877c.2738.09842.9144.21047 1.4235.24918.509.0387 1.2166.14497 1.5725.23602.638.16341 1.5894.26564 3.3646.36147.4982.02703 2.6529.18823 4.7881.3584 5.0932.40605 7.451.54035 12.2937.70035 2.2064.0728 5.0016.1844 6.2116.2479 2.3827.125 10.533.1621 10.2905.0468-.0818-.0387-2.9836-.1465-6.4489-.2397-8.3393-.2241-9.1732-.2592-16.2093-.6826-5.0778-.3057-12.2472-.90861-15.8432-1.33249-.4982-.05873-1.1388-.1107-1.4235-.1155-.50853-.00847-.50879-.00553-.0196.17017Zm38.5461 1.24967c.0761.03615.5813.00983 1.123-.05824l.9846-.12397-.8259-.01278c-.4542-.00688-.9173-.0817-1.0293-.16623-.147-.1112-.2291-.09166-.2969.07101-.0515.1236-.0316.25421.0445.29021Zm3.531 1.02105c.3559.054 1.2294.0952 1.9412.0913l1.294-.007-1.294-.0843c-.7118-.0464-1.5853-.0875-1.9412-.0913l-.647-.0071.647.0984Z",
  },
  {
    width: 90,
    height: 17,
    d: "M23.0625 2.51576c-5.776.67265-11.2881 1.79491-14.61296 2.97526-2.41152.85594-5.63354 2.77546-6.93587 4.13202L.454669 10.7258l.229953 2.5759.229744 2.5758.963554.2145c.6822.1517.93821.2978.87665.5005-.12436.4104.62377.1869 3.9176-1.17 3.58473-1.4768 8.07313-2.4478 13.53683-2.9285 1.9463-.1713 12.0103-.437 12.7321-.336.2724.0381 1.9544.1013 3.7379.1408 5.814.1283 7.2249.1902 7.7042.3382.2597.0801 1.3143.1928 2.3435.2507 1.6482.0926 5.6899.4619 8.8692.8106.5889.0645 1.654.0777 2.3665.0292.7126-.0484 1.3871-.0073 1.4985.0912.293.2589 8.058.2488 11.9548-.0152 7.5118-.5092 17.2147-2.3034 17.9362-3.3166.2746-.3859.1389-.3765-1.9637.135-.9024.2195-2.6858.6141-3.963.8764-1.2773.2625-2.5385.5446-2.8027.627-.2642.0821-.4277.0827-.363.001.0645-.0817 1.1407-.3897 2.3914-.6848 3.756-.8858 6.623-2.03603 6.8374-2.74312.1119-.36946.2452-.37972-2.4144.18667l-.677.14421.6365-.3503c.3499-.1925.7625-.35867.9166-.36915.1543-.0105.5123-.16143.7956-.3353.487-.29879.5058-.37419.3391-1.36436l-.1764-1.04812-1.2653.15063c-1.1729.13979-1.2382.12655-.8953-.18113.2034-.18254.4392-.33946.5241-.34862.0848-.00934.3311-.20791.5473-.4416.3278-.35414.3546-.51295.1627-.95494-.2216-.51053-.2761-.5253-1.4687-.3961-.6812.07376-2.245.38678-3.4753.6958-1.2522.31428-3.396.67132-4.8693.81087-1.4476.13721-2.3271.18889-1.9544.11485 4.5914-.9114 9.4607-2.44161 10.0864-3.16972l.3637-.42316-.5809-.445536c-.5004-.383856-.7759-.432291-1.9904-.349683-.7753.052728-2.4417.386849-3.703.742679-3.4566.97491-5.7314 1.33033-10.8818 1.70011-5.0995.36592-10.3632.32174-19.0451-.16039-14.8236-.82289-22.7191-.93547-27.4005-.39033ZM6.14843 9.16473c-.41284.27726-1.51283.98217-2.44441 1.56677l-1.69378 1.0627.73214-.7759c.99171-1.0507 2.92272-2.21156 3.8647-2.32292.16059-.01907-.04579.19228-.45865.46935Z",
  },
  {
    width: 102,
    height: 13,
    d: "M92.4452.330901c-1.2068.123238-3.0123.464535-5.4935 1.038219-2.0327.47-4.5273 1.02283-5.5437 1.22851-2.9123.5893-10.6123 1.73638-13.2988 1.98109-9.8694.89873-11.6597 1.02587-19.4513 1.38091-15.5162.70721-28.8542.51507-41.90256-.60363-4.1993-.36001-5.28202-.38181-6.042186-.1215-.6340442.2171-.843194.68593-.41995.9413.174845.1055.261167.32944.192151.49751-.104474.25376.099464.41063 1.199035.92225 1.64972.76776 4.8651 1.90388 5.14604 1.81853.11549-.03512.4814.05534.81326.20101.99534.4369 3.25881.8527 7.79051 1.431 4.6447.5926 6.926.7993 7.5275.6818.2102-.041.5068-.0306.6592.0231.4637.1636 7.5189.4901 14.496.6707 5.634.146 22.6344-.4429 27.4209-.9498.6724-.0713 2.2134-.2043 3.4244-.2957 3.5934-.2712 10.7587-1.0628 14.4253-1.59374 2.6285-.3805 3.4399-.54212 3.5028-.69745.0969-.23873.4019-.26788-4.9766.47566-3.64.50318-11.6028 1.35203-12.7148 1.35533-.6418.0019 1.6101-.3105 3.1769-.4408 4.4958-.37373 14.5403-1.93492 20.8731-3.2441 1.67-.34529 3.0875-.62865 3.1502-.62978.0627-.00112-.0839.10303-.3253.23144-.2415.1284-.6021.23638-.801.23994-.1989.00356-.7501.12453-1.225.26896-.4749.14432-1.8571.46968-3.0718.72301-2.1942.45766-2.7128.65408-2.0173.76414.3919.06202 4.0567-.66979 6.9881-1.39547 2.0027-.49586 5.1272-1.81981 5.1212-2.17006-.002-.11661-.117-.20987-.255-.2074-.142.00253-.085-.14942.131-.34889.292-.26917.316-.38917.1-.50398-.156-.08282-.215-.25322-.132-.37879.133-.20047-.265-1.13423-.481-1.13035-.045.0008-.553.08659-1.128.19062-.5751.10404-1.0884.17031-1.1407.14733-.0524-.02298.1821-.19999.5211-.39342.6887-.39304.8058-.91471.2258-1.00652-.2091-.03303-1.0616.06345-1.8948.21463-.8332.15106-2.2413.33104-3.1288.39972-1.6922.13114-3.2232.40039-3.5021.61599-.0906.06998-.4505.13237-.8003.13863-.6139.01099-.6212.00368-.2089-.21543.2347-.12479.7728-.26719 1.196-.31651 1.0779-.12567 2.5404-.57508 2.413-.74155-.1282-.16747.0593-.17941.6627-.0421.3382.07697.4866.05841.5932-.07423.0781-.09717.2544-.14703.3915-.11068.1371.03646.606.00021 1.0424-.08047.7196-.13313.7959-.1926.8256-.642308l.0328-.4955637-1.1443.0326647c-.6295.018037-1.9533.115281-2.942.216228ZM85.7015 3.22522c-.1667.12887.3048.09494 1.5284-.11027.2477-.04155.0665.04393-.4025.18994-.469.14602-1.3218.41983-1.8948.60854-.5733.1886-1.3084.34773-1.6336.35355-.325.00582-.7519.12051-.9484.25476-.1968.13438-.4719.21387-.612.17678-.14-.0372-1.3566.12942-2.7036.37011-2.6146.46722-8.9228 1.22482-13.3382 1.602-2.8685.24503-7.7081.49162-7.7099.39295-.0014-.07882 3.6983-.44816 6.6027-.65909 5.0085-.36377 16.5442-1.96294 16.289-2.25808-.1511-.17496 1.098-.34701 1.3268-.18269.0866.06207.725-.0052 1.5583-.16416 1.0125-.1932 1.3164-.29576 1.0744-.36295-.2817-.07809-.2772-.11291.028-.21121.503-.16197 1.0447-.16208.8354-.00018Zm-1.8761.31085c-.0807.0389-.2919.04674-.4691.01731-.1961-.03248-.1385-.06024.1467-.07076.258-.00947.403.01456.3224.05345Zm8.3573.82568c-.1582.24683-6.0561 1.53289-8.2576 1.8005-1.5374.18691-.8665-.01246 1.5976-.47473 1.2086-.22671 2.4137-.48314 2.6779-.56976.264-.08663.6762-.16101.9157-.1653.2393-.00428.6334-.10339.8756-.22007.2419-.1168.5548-.19685.6948-.17792.1402.01892.3936-.04585.5633-.14409.3702-.21407 1.0619-.25015.9327-.04863Zm.7017 2.01146c-1.3627.42259-6.1105 1.30544-9.6293 1.79054-3.1522.43465-3.8654.40579-.9961-.04039 3.2512-.50535 8.4171-1.43312 10.012-1.79794 1.8387-.42061 2.0666-.40281.6134.04779Zm-11.2107.13424c-.0806.0389-.2919.04674-.469.01732-.1961-.03248-.1385-.06024.1467-.07076.258-.00948.403.01455.3223.05344ZM42.9619 7.64366c-.0743.09236-.3064.17096-.5158.17471-.3335.00597-.3288-.03089.0371-.29813.4082-.29777.7468-.21043.4787.12342Zm13.3112-.52402c.0011.06202-.1148.11485-.2574.11741-.1425.00255-.1921-.04732-.11-.11084.0822-.06351.1978-.11634.2573-.1174.0596-.00107.1089.04881.1101.11083Zm22.5438 1.6262c-.5991.17282-2.5956.32712-2.3006.17779.2267-.11483 1.0567-.21587 2.2-.26781.4157-.01883.4308-.00523.1006.09002Zm8.351-.10449c.0019.10702.7359.1478.8649.04803.0785-.06074-.0842-.10633-.3614-.10137-.2773.00496-.5039.02899-.5035.05334ZM48.266 11.4367c-.293.2614-.7293.314-.7334.0883-.0034-.1926.2324-.305.6564-.3126.2591-.0046.2766.0462.077.2243Z",
  },
];

function Stain({ index = 0 }: { index?: number }) {
  const stain = stains[index % stains.length];
  if (!stain) return null;
  return (
    <Svg
      width={stain.width}
      height={stain.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={stain.d} />
    </Svg>
  );
}

export default Stain;
