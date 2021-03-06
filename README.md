# track-tools

> A tool for monitoring the GPS tracks logs. You can drag your log files into the tools which is able to generate the 
> track by using Gaode Map.  
> Access: http://location:3000

![Bilby Stampede](https://raw.githubusercontent.com/chriswang-/TrackTools/master/src/assets/snapshot.png)


## track-tools supports the following GPS log format, and It allows to extends to any kinds of  log format
### keywords: __Location:126.58816057813624,43.85210663808183#
> Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58816057813624,43.85210663808183#
### keywords:"lat":"43.85152316623264","lng":"126.61150580512152"
>  Description(ServerLogExtractor): Sample: 2018-12-27 14:49:13.441 INFO MessageDispatcher.java:71 [8100-exec-1] - 上传啦, messageBody:{"msgBody":{"distance":0,"driverId":21,"lat":"43.85152316623264","lng":"126.61150580512152"},"msgType":"DRIVER_LOC","token":"6e4377191f7f4989aa617f8a87b4621c"}

## How to extends track-tools for supporting the different log format.
> 1: Adding a new LogExtractor in the Extractor.js file <br/>
> 2: Appending additional options in the UI. see HelloMars.vue (Array Variable:pointExtractors)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Track Points File Sample
> TrackTools\src\assets\track_points.txt
```

Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58618245442709,43.86771918402778#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.586181640625,43.8677197265625#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58618082682291,43.86772108289931#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58618082682291,43.86772108289931#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.586181640625,43.86772054036458#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58619764539931,43.867388780381944#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5861642795139,43.86685167100694#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58613932291667,43.86632649739583#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58608832465278,43.86552544487847#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58602864583334,43.86498345269097#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58597954644097,43.864223090277775#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58592719184028,43.86365749782986#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58585123697917,43.86280219184028#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58578803168403,43.862148980034725#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5857337782118,43.86127902560764#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58572998046876,43.86060546875#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58579508463542,43.859957682291665#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58583821614583,43.85977322048611#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58593505859375,43.859380696614586#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5860413953993,43.85899088541667#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58626057942708,43.858333875868055#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58650472005208,43.85783257378472#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5868177625868,43.857204861111114#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58709391276042,43.85663601345486#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58739176432292,43.85607666015625#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58763671875,43.85556722005208#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58798231336806,43.85483696831597#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58816433376737,43.854014485677084#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58824028862847,43.8534423828125#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5882679578993,43.85302490234375#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58822591145834,43.85260009765625#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58809651692708,43.851986219618055#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58799669053819,43.85146240234375#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58775689019097,43.85085828993056#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58760932074652,43.85052544487847#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58752115885417,43.85039794921875#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58748697916667,43.85039496527778#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58748101128472,43.850399576822916#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58748345269098,43.850399576822916#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58748725043402,43.85038547092014#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5874924045139,43.85038492838542#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58749430338541,43.850383572048614#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58747314453124,43.85035129123264#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58721028645833,43.849940592447915#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5868874782986,43.84953342013889#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58640326605902,43.84896864149306#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58596082899305,43.84855767144097#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58534044053819,43.84808268229167#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5849782986111,43.847828233506945#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58472195095486,43.84765679253472#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58466606987847,43.84764784071181#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58466417100695,43.847667371961805#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5846666124132,43.847666829427084#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58466905381944,43.847661675347226#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58466878255209,43.84766411675347#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58442789713541,43.847521430121525#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58403293185764,43.847324490017364#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58329128689236,43.84696370442708#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58268364800347,43.84673366970486#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58184326171875,43.846483561197914#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58126817491319,43.846354166666664#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58109564887152,43.846309136284724#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5806618923611,43.84623291015625#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57984103732639,43.846110297309025#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57914035373264,43.846058485243056#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57815890842014,43.84600911458333#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57770209418403,43.845990125868056#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57756564670139,43.84598442925347#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57756266276041,43.84597710503472#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5775670030382,43.84597791883681#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57756591796876,43.84596869574653#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57756401909722,43.84596110026042#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57756266276041,43.84595974392361#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57755995008681,43.845958116319444#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57755533854167,43.84595458984375#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57722981770833,43.84594835069444#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57660020616319,43.845919325086804#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57553304036459,43.84586968315972#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57479899088541,43.84583767361111#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5742654079861,43.845813802083335#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5741810438368,43.845814615885416#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57388156467015,43.845799153645835#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57333197699653,43.84577365451389#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57243245442709,43.845736490885415#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.571640625,43.845713975694444#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.57055636935763,43.84567355685764#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56979193793403,43.845638020833334#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56953287760416,43.84559814453125#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56952935112847,43.845601399739586#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56951877170138,43.84560356987847#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56946668836805,43.845600043402776#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56907335069444,43.845584309895834#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56858968098959,43.845553927951386#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56811659071181,43.84553385416667#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56804958767361,43.84553439670139#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56799913194445,43.84553955078125#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5680140516493,43.845530598958334#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56798855251736,43.84553521050347#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5678390842014,43.84552788628472#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5674183485243,43.84550401475695#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56695366753472,43.84548366970486#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56674913194445,43.84549180772569#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5667626953125,43.84548855251736#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56676513671874,43.845508897569445#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56675021701389,43.84550754123264#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56675808376735,43.84552300347222#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56676432291667,43.84552734375#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56676676432292,43.84552625868056#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5667578125,43.845523546006945#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56674777560764,43.84552517361111#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56674207899306,43.84552707248264#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56674207899306,43.8455224609375#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56673882378472,43.84551540798611#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56673882378472,43.84552273220486#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56673638237847,43.84551920572917#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56671929253473,43.84551839192709#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56642306857638,43.84550591362847#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5656849500868,43.84545600043403#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56467746310764,43.845394694010416#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56377983940972,43.84535319010417#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56284830729167,43.845318739149306#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56257568359375,43.845309244791665#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56214762369791,43.84529215494792#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56188395182292,43.84527750651041#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56176350911458,43.84526665581597#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5616343858507,43.845257161458335#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56112331814236,43.84523220486111#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.56053005642362,43.84520751953125#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55958713107638,43.8451708984375#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55880615234375,43.84515353732639#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55766140407987,43.845112575954865#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55681070963541,43.84508029513889#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5559193250868,43.84503309461805#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55541042751736,43.84501953125#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55444254557291,43.84492350260417#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55405653211805,43.844875217013886#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55394911024305,43.844852159288195#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55352783203125,43.84479031032986#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55269449869792,43.844630533854165#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55230387369792,43.84454210069445#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55216200086805,43.84451199001736#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55215576171875,43.84451063368056#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55215304904515,43.84450927734375#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55215196397569,43.84450764973958#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55215304904515,43.844508463541665#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55210910373263,43.8444970703125#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55189670138888,43.84444444444444#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55145128038194,43.844332411024304#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.55054578993055,43.84407741970486#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.54978868272569,43.84389458550347#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5493603515625,43.84376736111111#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.54913384331597,43.84369683159722#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.54835639105903,43.84347493489583#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.54779296875,43.84329861111111#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.54739908854167,43.84313802083334#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.54730523003472,43.8430908203125#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.54731825086806,43.843067762586806#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.5473451063368,43.84307156032986#
Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.54731228298611,43.843068033854166#

```

