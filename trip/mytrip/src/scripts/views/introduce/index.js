import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Switch, Route } from "react-router-dom"
import { Head } from "../../components/head"
import { history } from "../../history"


export class Introduce extends Component {
    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <Switch>
                    <Route path="/mainview/introduce/不想浪费旅途的夜晚？成都夜生活指南送上!" component={Gndetail} />
                    <Route path="/mainview/introduce/布拉格 | 童话之都的经典拍照取景地盘点" component={Gndetail2} />
                    <Route path="/mainview/introduce/甲天下的桂林如何玩？4天攻略玩法，带上就出发" component={Gndetail3} />
                    <Route path="/mainview/introduce/霞浦" component={Gndetail4} />
                    <Route path="/mainview/introduce/福建泉州" component={Gndetail5} />
                    <Route path="/mainview/introduce/福建武夷山" component={Gndetail6} />
                    <Route path="/mainview/introduce/建宁" component={Gndetail7} />
                    <Route path="/mainview/introduce/白水洋" component={Gndetail8} />
                    <Route path="/mainview/introduce/海神妈祖" component={Gndetail9} />
                    <Route path="/mainview/introduce/春祭" component={Gndetail10} />
                </Switch>
            </div>
        )
    }
}
class Gndetail extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail">
                <Head title="成都夜生活指南" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">不想浪费旅途的夜晚？成都夜生活指南送上！</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div style={{ fontSize: ".32rem", color: "#666", marginTop: ".5rem", marginbottom: ".5rem", backgroundColor: "#fff" }}>
                            <p>丰富的成都夜生活视频先来了解一下↓↓</p>
                            <p><br /></p>
                            <p>十级吃货的美食扫街</p>
                            <p><br /></p>
                            <p>说到成都那肯定离不开美食，这里的好吃的可以吃上好几天不重样。不管是隆重的火锅，还是路边简单的小吃……一到了晚上，各种美食仿佛都更加鲜活，热闹的夜市也让人更加的有食欲。休闲的夜晚不用赶行程，有更多的时间一路逛吃逛吃，享受旅行中这种特别的乐趣。所以在抑制不住“欲望”的夜晚，去把它们都一一扫荡吧！</p>
                            <p><br /></p>
                            <p><br /></p>
                            <p>冰粉——夏日清凉必备</p>
                            <p><br /></p>
                            <p>冰粉创始于明清时期的武阳（今四川省眉山市彭山县），是将一种植物果实（冰籽）放入水中搓揉，放置冷却凝固形成的，就是俗称的“手打冰粉”，手工做的冰粉可以看到有很多的小气泡。</p>
                            <p><br /></p>
                            <p>大家也可以在冰粉里根据自己的喜好加各种配料，但其实地道的吃法是只加红糖，而且土红糖为优先；还有来自乐山的三鲜冰粉也很好吃，甜甜的冰冰的，更是晚上吃火锅串串的解辣神器哦。</p>
                            <p><br /></p>
                            <p>店铺推荐：</p>
                            <p><br /></p>
                            <p>①蜀华串串，虽然是一家油炸串串店，但他家的冰粉很是不错，选用纯植物原料，口感与冰粉粉兑的绝对不一样。</p>
                            <p><br /></p>
                            <p>地址：青羊区小南街包家巷44号附近</p>
                            <p><br /></p>
                            <p>②眷蜀冰社，位于成都的网红美食街奎星楼街，店面很小，但人气很高，装修很文艺，售卖料超足的手工冰粉。</p>
                            <p><br /></p>
                            <p>地址：青羊区奎星楼街23号附2号</p>
                            <p><br /></p>
                            <p><br /></p>
                            <p>蛋烘糕——成都的美食记忆</p>
                            <p><br /></p>
                            <p>蛋烘糕创始于清代，可以说是成都人从小吃到大的传统小吃。一份的分量不大，鸡蛋和面粉和成的外皮烤的酥脆，但里面又有一些绵软，再加上根据自己喜好选择的馅料，甜的咸的都有，非常符合大众的口味，一口下去口感非常丰富满足。一个蛋烘糕一般两三口就可以吃完，经常坐那里一吃就是几个、十几个的。</p>
                            <p><br /></p>
                            <p>店铺推荐：</p>
                            <p><br /></p>
                            <p>①贺记蛋烘糕，成都有名的蛋烘糕店，开有多家分店都是自家人在经营，但感觉石室中学对面的总店火候掌握的较好。</p>
                            <p><br /></p>
                            <p>地址：青羊区文庙西街1号附8号（石室中学大门对面）</p>
                            <p><br /></p>
                            <p>②陆记蛋烘糕，每天中午12点以后才营业，但只要下雨就不会开门，为数不多的怪味蛋烘糕很好吃，值得尝试。到这里吃蛋烘糕可以听大爷讲他自己和老成都的故事。</p>
                            <p><br /></p>
                            <p>地址：金牛区曹家巷57号</p>
                            <p><br /></p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
class Gndetail2 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="布拉格 | 童话之都" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">布拉格 | 童话之都的经典拍照取景地盘点</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div style={{ fontSize: ".32rem", color: "#666", marginTop: ".5rem", marginbottom: ".5rem", backgroundColor: "#fff" }}>
                            <p>童话里拍照是怎么样的体验？来一起感受下！</p><p><br /></p><p><br /></p><p>布拉格是欧洲美的城市——先别急着反驳，这是歌德说的。不少先贤都曾在布拉格留下自己的足迹和美好的记忆，因此不遗余力地赞美它。或许你的布拉格是从蔡依林的跳着舞旋转的布拉格广场开始的，或许是从那些如同童话般的红屋顶画面开始的。但是，无论如何，布拉格的美好值得被赞颂，也值得被留在我们自己的相机和记忆里。这篇攻略带你打卡布拉格值得留影的取景地，包括经典景点的拍摄方法和几处非常酷的网红取景地。当然，这座城市的美好不止于此，亲自到访时，还请全力去探索它更多的魅力吧。</p><p><br /></p><p><br /></p><p>布拉格保留了非常完整的老城风貌，这里的心脏地带就是老城广场。这里极适合作为探访布拉格的出发点，宽阔的视野与周围林立的精致建筑，也相当适合作为拍照的取景地。况且，老城广场在布拉格地位相当高，适逢节日时，这里会有热闹的市集与表演。虽然作为游客，很难体验一把真的「一个人在布拉格广场跳着舞旋转」的感觉，但是你很容易被这里的氛围感染。</p><p><br /></p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

class Gndetail3 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="甲天下的桂林" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">甲天下的桂林如何玩？4天攻略玩法，带上就出发</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div style={{ fontSize: ".32rem", color: "#666", marginTop: ".5rem", marginbottom: ".5rem", backgroundColor: "#fff" }}>
                            <p>桂林自古便是中国山水旅游名城，慕名而来者都是络绎不绝。攀世界梯田之冠龙脊梯田，竹筏赏如诗如画的漓江，徒步览千年兴坪古镇，慢时光骑行十里画廊，夜幕浪漫西街偶遇——我想是每一个来桂林的人梦寐以求的事情，hold on，这一切将近在咫尺。</p><p><br /></p><p>1201年，南宋官员王正功赋诗“ 桂林山水甲天下，玉碧罗青意可参”，从此桂林山水名扬海内外；2014年6月，以桂林山水为代表的中国南方喀斯特地貌被联合国教科文组织列入《世界自然遗产名录》。</p><p><br /></p><p><br /></p><p><br /></p><p>桂林作为一个世界旅游圣地，随处都是写意美景，人在景中，景在画中。桂林值得一去的景点很多，4天时间，我们要如何玩转桂林的top景点呢？那么大家看看我推荐的线路，靠前天逛逛桂林市区精华，第二天龙脊梯田，第三天漓江竹筏、兴坪古镇、20元人民币背景，第四天阳朔周边人气景点。</p><p><br /></p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
class Gndetail4 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="霞浦：北岐拍日出" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">霞浦：北岐拍日出</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div style={{ fontSize: ".32rem", color: "#666", marginTop: ".5rem", marginbottom: ".5rem", backgroundColor: "#fff" }}>
                            <p><span style={{ fontSize: "0.35rem" }}> 从县城开车到北岐村的摄影点，十几分钟就到了。摄影点位于村东头的小山坡上，为了禁止机动车入内，在门口修建了围栏。霞浦县为了发展摄影旅游，在许多摄影点都修建了平整的道路。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>沿着海边的路上，就是摄影点，我们算是来的比较早的一批人，选好了位置，架起了三脚架，等待太阳升起。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>霞浦的海边有许多竹竿架起的架子，主要是用来晒海带和紫菜，一片片的非常壮观。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>十月上旬的霞浦早上有点冷，建议穿长袖衣服。摄影爱好者陆续到来，静静地等待。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>海水还未涨潮，能看见山下海边的滩涂，被海水冲的一条条的层次分明，等太阳出来后也正是涨潮时间，滩涂就看不见了。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>辛勤的渔民早已起床，在海中劳作，只是我们看不见。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>天色渐渐亮了起来，摄影点站满了人群，长枪短炮早已准备妥当。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>在这一群摄影爱好者中有一个摄影团，他们雇了一个渔民在海水中来回走动，不时做出捞紫菜的动作，有人的画面才不会显得单调。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>抬头一看，太阳已经升起来了很高一节，今天的云层比较厚，挡住了初升的太阳。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>阳光斜射在海面上，有了淡淡的霞光。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>太阳继续升起，但是一直躲在云层后面不肯露面。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>终于，海面上的霞光连成了一片，形成一条金黄色的光带。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>不知是风还是阳光驱散了云层，天空开始变蓝。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>　　</span></p><p><span style={{ fontSize: "0.35rem" }}>整个海面上呈现出了波光粼粼的景象。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>拍摄日出只有短短的十几分钟，太阳升起后阳光随即变强，不再适合拍照。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>摄影团雇来的渔民依然在海水中不停的走动。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>海水已经开始涨潮，水面上出现了一层层的波浪，非常漂亮。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>整整齐齐的一排排架子横在海面上，照片不小心就拍成了黑白片。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>初升的太阳，把一切都要染成金黄色。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>中国美的滩涂，美的不仅仅是滩涂，更是劳作的渔民。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>远处连绵的青山形成一个海湾，这里是天然的港口。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>这几艘渔船是准备涨潮后出海捕鱼么？　　</span></p><p><span style={{ fontSize: "0.35rem" }}>海边的小船很漂亮，明亮的黄色非常醒目。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>当地的渔民经过一早的劳作，已经收获满满。早上两点多钟就起床，到海里捕捞蛏子，涨潮前必须回到岸边，辛苦程度可想而知。　　</span></p><p><span style={{ fontSize: "0.35rem" }}>刚刚捕捞的蛏子鲜活肥嫩，7元一斤。</span></p><p><span style={{ fontSize: "0.35rem" }}>【交通】</span></p><p><span style={{ fontSize: "0.35rem" }}>如果住在霞浦市区里，建议提前一天联系好第二天早上的车，只能包车前往。如果住在北岐村，则可以步行到观景台。</span></p><p><span style={{ fontSize: "0.35rem" }}>【门票】</span></p><p><span style={{ fontSize: "0.35rem" }}>免费开放。</span></p><p><img src="http://16713102.s61i.faiusr.com/4/AD0Ijov8BxAEGAAg_N7A1wUoiYzRvQEwgA842AQ.png" width="1920" alt="背景.png" style={{ maxWidth: "100%" }} /></p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
class Gndetail5 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="福建泉州超详攻略" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">穿越千年的繁华，福建泉州超详攻略</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div style={{ fontSize: ".32rem", color: "#666", marginTop: ".5rem", marginbottom: ".5rem", backgroundColor: "#fff" }}>
                            <p><span style={{ fontSize: "0.35rem" }}>【交通】</span></p><p><span style={{ fontSize: "0.35rem" }}>注：因每人出发点不一致，百度查得到的公交路线就不熬述。</span></p><p><span style={{ fontSize: "0.35rem" }}>1，泉州离厦门和福州都很近，动车1小时内可达，潮汕站到泉州为2小时；</span></p><p><span style={{ fontSize: "0.35rem" }}>2，泉州站距离市区7公里左右，可以选择坐公交和打的士，的士价格为30元左右。</span></p><p><span style={{ fontSize: "0.35rem" }}>3，去崇武古城可到泉州客运中心站做车，票价15元，行程1小时；</span></p><p><span style={{ fontSize: "0.35rem" }}>4，洛阳桥距泉州城区13公里，古代汉族桥梁建筑的杰作之一，看图片感兴趣的可以前往一看；</span></p><p><span style={{ fontSize: "0.35rem" }}>5，其他景点滴滴、公交或共享单车都可以到达。</span></p><p><span style={{ fontSize: "0.35rem" }}>【门票】</span></p><p><span style={{ fontSize: "0.35rem" }}>1，泉州清源山网购价65元，游玩当天15:00前可下单。</span></p><p><span style={{ fontSize: "0.35rem" }}>2，崇武古城网购价45元，游玩当天15:00前可下单。</span></p><p><span style={{ fontSize: "0.35rem" }}>3，天后宫门票10元，其余景点皆免费。</span></p><p><span style={{ fontSize: "0.35rem" }}>【住宿】</span></p><p><span style={{ fontSize: "0.35rem" }}>建议住西街附近，有很多小吃，晚上和白天都可以逛这条古街。</span></p><p><img src="http://16713102.s61i.faiusr.com/4/AD0Ijov8BxAEGAAg_N7A1wUoiYzRvQEwgA842AQ.png" width="1920" alt="背景.png" style={{ maxWidth: "100%" }} /></p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
class Gndetail6 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="福建武夷山" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">去福建武夷山游玩，看这篇攻略就够</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div style={{ fontSize: ".32rem", color: "#666", marginTop: ".5rem", marginbottom: ".5rem", backgroundColor: "#fff" }}>
                            <p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>桂林山水甲天下，不及武夷一小丘”，“武夷占尽人间美，愿乘长风我再来”，多少名人雅士前往武夷山写下山中绝句。</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>我的确再来了，13年一次偶然的机会跟朋友说走就走地去了一趟武夷山，那时的高铁还没开通，去之前对武夷山一点了解也没有。时隔4年多，第二次前往这片神奇的土地，念念不忘，必有回响，除了美好回忆，这次还带回来了一份详细的攻略，希望对前往武夷山的朋友有所帮助。</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>【武夷山有什么好玩的】</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>1，天游峰，“其不临溪而能尽九曲之胜，此峰固应靠前也。”先看看来自旅行专家徐霞客对它的五星好评。天游峰位于九曲溪中的六曲溪北面，中心海拔408.8米，为武夷靠前险峰。若有云海，游此山峰，恍若置身蓬莱仙境，畅游天宫琼阁，“天游”一词因此得名。</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>2，武夷桃源洞，位于武夷山六曲畔内，天游峰旁，四面环山，桃林片片，仙气阵阵，日月潭布列其中，相传在唐朝天宝年间，大批道士因武夷仙灵之说来此隐居修炼。</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>3，九曲溪，全长10公里，因地质断裂构造作用，折为九溪，有八滩五潭。“溪流九曲泻云液，山光倒浸清涟漪”，可以说这九曲十八弯是武夷山精华中的精华。</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>4，武夷宫，自然风光，园林建筑，朱子理学，民俗风情，宗教艺术，自然人文景观于一体，异彩缤纷，引人入胜。其中仿宋的宋街是亮点，不长但很有年代的味道。</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>去福建武夷山游玩，看这篇就够！上海前往仅需3小时</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}>5，一线天，武夷的奇的岩洞，素有“鬼斧神工之奇”的称号。又称“灵岩”，岩体受东西向断裂构造和垂直节理作用裂开一缝隙，长178米，宽约1米，较高处49米，窄处0.3米，名贵衣服戴于身者慎入。</p><p style={{ fontFamily: "&amp;quot", textIndent: "2em", color: "#333333", fontSize: "0.35rem" }}><img src="http://16713102.s61i.faiusr.com/4/AD0Ijov8BxAEGAAg_N7A1wUoiYzRvQEwgA842AQ.png" width="1920" alt="背景.png" style={{ maxWidth: "100%" }} /></p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

class Gndetail7 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="建宁万亩梨花" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">建宁万亩梨花赏花活动</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div className="top" style={{ margin: "0.0rem", padding: "0.0rem", fontFamily: "&amp;amp", color: "#333333", fontSize: "0.35rem" }}><h3><span style={{ fontsize: "0.4rem", fontfamily: "微软雅黑" }}>有人赞梨花“占断天下白，压尽人间花”，然而，长期禁锢在车水马龙中的都市人，又有几人记得那千树万树梨花开的美景？</span><br /></h3></div><div><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444385053707534.jpg" title="1444385053707534.jpg" alt="建宁万亩梨花赏花活动-1-新浪旅游.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p>建宁是“中国黄花梨之乡”，每年3月，10万亩梨花竞相开放，铺在丘陵上，好似春天里的白雪覆盖，非常吸引人。</p><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444385059655093.jpg" title="1444385059655093.jpg" alt="建宁万亩梨花赏花活动-2-新浪旅游.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p>此外，3、4月也是建宁桃花的花期，赏完梨花再赏桃花，两全其“美”。</p><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444385065184813.jpg" title="1444385065184813.jpg" alt="建宁万亩梨花赏花活动-3.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p>建宁赏花攻略</p><p>赏花地点：建宁县溪口镇枫园村桃梨观赏园及其它桃梨观赏点、莲乡大观园、闽江源生态旅游区、中央苏区反“围剿”纪念馆等景区。</p><p>其中建宁县溪口镇枫园村桃梨观赏园，距离建宁县城7公里，总面积1000余亩。</p><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444385071798306.jpg" title="1444385071798306.jpg" alt="建宁万亩梨花赏花活动-4.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p>桃梨观赏线路</p><p>D1：中午到达建宁，用午餐；下午桃梨观赏园赏花，参观全国百个红色旅游经典景区、全国爱国主义教育示范基地、全国重点文物保护单位——中央苏区反“围剿”纪念园；晚上在高峰森林人家品尝农家特色菜。</p><p>D2：早餐后，金铙山风景区乘坐福建省长、海拔较高索道(全长2.1公里)游览世界地质公园金铙山白石顶；中午在樱桃岭凤临阁用午餐；午餐后游览闽江源瀑布景区，返程。</p><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444385076531432.png" title="1444385076531432.png" alt="建宁万亩梨花赏花活动-5.png" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p>怎么去建宁</p><p>动车：福州乘坐动车到建宁县北站，然后乘坐公交车到建宁县城短途汽车站，再转乘公交车或前往里心、黄埠、客坊乡的农村客运班车，到溪口镇桃梨观赏园下，全程约3个小时。</p><p>自驾：从福州上福银高速，到建宁高速口下，往江西方向走7公里即可到桃梨观赏园，全程约4.5小时</p></div></div>
                </div>
            </div >
        )
    }
}

class Gndetail8 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="白水洋万人狂欢泼水节" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">白水洋万人狂欢泼水节</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div className="top" style={{ margin: "0.0rem", padding: "0.0rem", fontFamily: "&amp;amp", color: "#333333", fontSize: "0.35rem" }}>
                            <p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444372575672236.jpg" title="1444372575672236.jpg" alt="白水洋万人狂欢泼水节-2.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p><span style={{ fontSize: "0.35rem" }}>时间：6月份 &nbsp; </span></p><p><span style={{ fontSize: "0.35rem" }}>地点：宁德白水洋景区</span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444372582182142.jpg" title="1444372582182142.jpg" alt="白水洋万人狂欢泼水节-3.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p><span style={{ fontSize: "0.35rem" }}>白水洋素有“天下绝景，宇宙之谜”之称，是目前世界上为数不过的“浅水广场”，此广场总面积达8万平方米，一石而就，河床布水均匀，净无沙砾，人行其上，水仅没踝。</span></p><p><span style={{ fontSize: "0.35rem" }}>除了拥有天下与众不同的“十里水街”之外，白水洋每年盛夏都要举办“万人狂欢泼水节”。届时，万米水上广场、万人泼水“湿身”，共享“冰火两重天”的火热激情与清凉夏日。</span></p><p><span style={{ fontSize: "0.35rem" }}>白水洋官方网：</span><a href="http://www.yyx.com.cn/index.html" _src="http://www.yyx.com.cn/index.html" style={{fontSize:"0.3rem",textDecoration:"underline"}}><span style={{ fontSize: "0.35rem" }}>http://www.yyx.com.cn/index.html</span></a></p><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444372595970279.jpg" title="1444372595970279.jpg" alt="白水洋万人狂欢泼水节-4.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444372568619777.jpg" title="1444372568619777.jpg" alt="白水洋万人狂欢泼水节-1.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p><span style={{ fontSize: "0.35rem" }}>门票：<br /></span></p><p><span style={{ fontSize: "0.35rem" }}>白水洋120.00元(包含白水洋20.00元/人的观光车费) 鸳鸯溪：78.00元(不含宜洋洞梯40.00元/人) 联票：170.00元(白水洋且含观光车+鸳鸯溪，2天票期)</span></p><p><span style={{ fontSize: "0.35rem" }}>免票政策：6周岁（含6周岁）以下或身高1.2米（含1.2米）以下的儿童免票；景区对70周岁以上实行免门票政策，但是要购景区观光车费20元/人，景区内自费项目不免。 </span></p><p><span style={{ fontSize: "0.35rem" }}>优惠政策：学生证、教师、现役军人、残疾人、老年人（60周岁-70周岁）、宗教人士凭有效证件实行半票。 </span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20160121/1453361239935646.jpg" title="1453361239935646.jpg" alt="1.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }} /></p><p><span style={{ fontSize: "0.35rem" }}>装备提示：</span></p><p><span style={{ fontSize: "0.35rem" }}>1、如果您想下水“湿身“，记得带上泳衣及干衣服，较好穿拖鞋或者凉鞋。</span></p><p><span style={{ fontSize: "0.35rem" }}>2、一张门票配一双防滑袜，如果不是联票，可以进入景区后购买，一双3元。（岩石在河水冲刷下很光滑）若游玩时间较长建议自备一双较厚的袜子，一是防滑效果更佳，二来脚底也不会磨痛。</span></p><p><span style={{ fontSize: "0.35rem" }}>3、手机或其他数码设备较好放入有拉链的口袋或包里，防止滑入溪中。佩戴眼镜或者墨镜的朋友，记得在观景台要一根细绳绊住镜架两端，以免眼镜或墨镜掉入水中。</span></p><p><span style={{ fontSize: "0.35rem" }}>友情提示：</span></p><p><span style={{ fontSize: "0.35rem" }}>在白水洋观景台可以做好下水前的准备。观景台有配套的淋浴设施（淋浴免费），同时也提供寄存服务，餐饮服务。</span></p><p><span style={{ fontSize: "0.35rem" }}>物品寄存标准：租用费15元，押金15元。</span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20151009/1444372542476747.jpg" title="1444372542476747.jpg" alt="1.jpg" style={{ border: "0px", margin: "0px auto", width: "340px", maxwidth: "100%" }}/></p><p><span style={{ fontSize: "0.35rem" }}>交通攻略：</span></p><p><span style={{ fontSize: "0.35rem" }}>1、公车路线：</span></p><p><span style={{ fontSize: "0.35rem" }}>屏南县市中心距景区25km，到屏南汽车站乘公交至白水洋/鸳鸯溪景区;</span></p><p><span style={{ fontSize: "0.35rem" }}>宁德市汽车北站距景区150km，到宁德汽车北站乘宁德至屏南班车，至屏南汽车站后转区间公交至景区。</span></p><p><span style={{ fontSize: "0.35rem" }}>2、自驾车：</span></p><p><span style={{ fontSize: "0.35rem" }}>福州至屏南</span></p><p><span style={{ fontSize: "0.35rem" }}>（1）福州市区可从福州东（马尾），福州北（五四北）上福宁高速至漳湾出口（宁德出口的下一个出口）下高速。</span></p><p><span style={{ fontSize: "0.35rem" }}>（2）104国道到八都，再走宁屏二级路到屏南</span></p><p><span style={{ fontSize: "0.35rem" }}>厦门至屏南</span></p><p><span style={{ fontSize: "0.35rem" }}>（1）沈海高速往温州方向至漳湾出口（宁德出口的下一个出口）下高速。</span></p><p><span style={{ fontSize: "0.35rem" }}>（2）104国道到八都，再走宁屏二级路到屏南</span></p></div>
                    </div>
                </div >
            </div>
        )
    }
}

class Gndetail9 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="海神妈祖" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">纪念海神妈祖诞辰 湄洲岛上演民俗歌舞秀</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div style={{ fontSize: ".32rem", color: "#666", marginTop: ".5rem", marginbottom: ".5rem", backgroundColor: "#fff" }}>
                            <p><img src="http://www.fjta.com/static/uploads/content_img/20180509/1525829843680019.jpg" title="1525829843680019.jpg" alt="1.jpg" style={{border:"0px",margin:"0px auto",maxWidth:"100%"}} /></p><p><span style={{ fontSize: "0.35rem" }}>湄洲姑娘和渔家汉子的爱情故事被演绎得纯真唯美。新华网肖和勇摄</span></p><p><span style={{ fontSize: "0.35rem" }}>纪念海神妈祖诞辰1058周年暨春祭大典仪式8日在福建莆田湄洲岛举行。7日晚间，《祥瑞湄洲》民俗歌舞演出举行，呈现独特的湄洲风情、虔诚的妈祖信仰和庄严的祭奠礼仪。2016年起，这样的民俗歌舞秀在湄洲岛实现常态化演出，丰富了当地旅游业态，也在此间传播妈祖文化。（肖和勇）</span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20180509/1525829906426681.jpg" title="1525829906426681.jpg" style={{border:"0px",margin:"0px auto",maxWidth:"100%"}} alt=" " /><br /><span style={{ fontSize: "0.35rem" }}>7日晚间，演员们在表演妈祖祭祀仪式活动。新华网肖和勇摄<br /></span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20180509/1525829907301510.jpg" title="1525829907301510.jpg" style={{border:"0px",margin:"0px auto",maxWidth:"100%"}} alt=" " /></p><p><span style={{ fontSize: "0.35rem" }}>7日晚间，演员们在表演湄洲本地民俗节目。新华网肖和勇摄</span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20180509/1525829925742248.jpg" title="1525829925742248.jpg" style={{border:"0px",margin:"0px auto",maxWidth:"100%"}} alt=" " /></p><p><span style={{ fontSize: "0.35rem" }}>7日晚间，演员们在表演湄洲当地独特民俗活动“赶庙会”。新华网肖和勇摄</span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20180509/1525829925465590.jpg" title="1525829925465590.jpg" style={{border:"0px",margin:"0px auto",maxWidth:"100%"}} alt=" " /></p><p><span style={{ fontSize: "0.35rem" }}>7日晚间，演员们在舞台上编织渔网，表现湄洲渔民劳作的场景。新华网肖和勇摄</span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20180509/1525829942466899.jpg" title="1525829942466899.jpg" style={{border:"0px",margin:"0px auto",maxWidth:"100%"}} alt=" " /></p><p><span style={{ fontSize: "0.35rem" }}>7日晚间，演员们在表演湄洲风情民俗歌舞。新华网肖和勇摄</span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20180509/1525829942911927.jpg" title="1525829942911927.jpg" style={{border:"0px",margin:"0px auto",maxWidth:"100%"}} alt=" " /></p><p><span style={{ fontSize: "0.35rem" }}>7日晚间，一名演员在演奏当地民俗曲目。新华网肖和勇摄</span></p><p><img src="http://www.fjta.com/static/uploads/content_img/20180509/1525829942535168.jpg" title="1525829942535168.jpg" style={{border:"0px",margin:"0px auto",maxWidth:"100%"}} alt=" " /></p><p><span style={{ fontSize: "0.35rem" }}>7日晚间，富有湄洲本土风情的民俗歌舞活动上演。新华网肖和勇摄</span></p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
class Gndetail10 extends Component {
    tohome = () => {
        history.push("/")
    }
    render() {
        return (
            <div className="gndetail2">
                <Head title="春祭大典" backFlag={true} searchFlag={false} className="head" />
                <i className="iconfont icon-zhuye2" onClick={this.tohome} />
                <div className="gndetail-main">
                    <div className="title">春祭大典活动现场图片</div>
                    <div className="content">
                        <div style={{ color: "#b3b3b3", fontASize: ".25rem", marginBottom: ".2rem" }}>2019-07-25</div>
                        <div style={{ fontSize: ".32rem", color: "#666", marginTop: ".5rem", marginbottom: ".5rem", backgroundColor: "#fff" }}>
                            <p><span style={{ fontSize: "0.35rem" }}>8日，天空放晴，海水蔚蓝。这是无人机拍摄到的春祭大典活动现场图片。新华网肖和勇摄<br />妈祖的故乡——福建湄洲岛8日举行春祭活动，纪念妈祖诞辰1058周年。</span></p><p><span style={{ fontSize: "0.35rem" }}>当天，来自海内外的近万名信众齐聚湄洲岛，盛装同谒妈祖。湄洲妈祖祖庙董事会相关人士介绍，在纪念妈祖诞辰1058周年之际，湄洲岛除了举行春祭大典之外，同时举办了“天下妈祖回娘家”活动、升幡挂灯仪式、莆仙戏演出及当地民俗表演活动。</span></p><p><span style={{ fontSize: "0.35rem" }}>目前，全球43个国家和地区有上万座妈祖分灵庙，信众达3亿多人。2009年9月，“妈祖信俗”被联合国教科文组织列入“人类非物质文化遗产代表作名录”。湄洲妈祖祖庙也入选中国“海上丝绸之路·中国史迹”申报世界文化遗产的首批文物点</span></p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}