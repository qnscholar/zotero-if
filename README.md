<p align="center">
  <img src="https://figurebed-iseex.oss-cn-hangzhou.aliyuncs.com/202201180906177.png" width=240 />
</p>
<p align="center">
	<a href="https://github.com/qnscholar/zotero-if/releases"><img src="https://img.shields.io/github/v/release/qnscholar/zotero-if?color=blue&logo=github" alt="GitHub release" /></a>
	<a href="https://figurebed-iseex.oss-cn-hangzhou.aliyuncs.com/202201171141964.png"><img src="https://img.shields.io/badge/公众号-青柠学术-orange?logo=wechat" alt="公众号" /></a>
</p>

# Zotero IF
一款可以为 Zotero 文献更新【影响因子】的效率工具，不过远不止于此。

An efficient tool for updating JCR IF for Zotero Items, and far more than that.



## 使用说明


1. 🎓 选择（可多选）文献或分类（Collection），在右键菜单中点击 Update IF(s)，或按下快捷键`Ctrl + 9`；
2. 🏷️ 新添加的文献，会自动更新 JCR IF 和中科院分区，并添加`/unread`待读标签；
3. 📌 JCR IF 和中科院分区分别在【索取号/CallNumber】和【馆藏目录/Library Catalog】字段显示；
4. ✅ 支持最新版 IF（JCR 2021）和中科院分区升级版（2021.12）；
5. ⌨️ 快捷键: `Ctrl + 9`【添加 IF】`Ctrl + 0` 【清除 IF】


---

🍉 想体验更强的功能？不妨试试 [Zotero IF Pro](https://github.com/qnscholar/zotero-if-pro)，生产力跨越式提升。

---

## 下载安装

1. 扫码关注【**青柠学术**】公众号，👇后台回复关键词`Zotero IF`获取插件 xpi 文件；

<p align="center">
  <img src="https://figurebed-iseex.oss-cn-hangzhou.aliyuncs.com/202201171237137.png" width=700 />
</p>

2. 进入 Zotero 菜单`Tools-->Add-ons`，点击右上角小齿轮，然后点击 **Install add-on from file...**，选择 zotero-if.xpi 插件，完成安装；
3. 在 Zotero 的首选项中，有 Zotero IF 插件的使用说明、以及一些相关资源。👇

<p align="center">
  <img src="https://figurebed-iseex.oss-cn-hangzhou.aliyuncs.com/202201190842285.png" width=800 />
</p>

## 💡 更多新功能预告



| 新功能 Next            | 开发进度 |
| ---------------------- | -------- |
| 支持【中科院分区】     | 已支持 |
| 支持【北大核心】       | 接近完成 |
| 支持【南大核心】       | 接近完成 |
| 辅助中英文参考文献混排 | 进行中   |
| 更多定制化功能...      | 💡        |



## 🔔 必读 & 反馈

#### 关于 JCR IF

1. 更新完 IF 后，请手动调出 索取号/CallNumber 列，才能在主界面看到 IF，点击【列标题】可以按照 IF 降（升）序排列；
2. 索取号 = 引用次数 = CallNumber
3. 本插件根据期刊名（Publication）字段匹配 IF；
4. JCR IF 只针对 SCI 期刊论文，所以诸如会议论文、学位论文是不会更新 IF 的；
5. IF 来自于 JCR 官方标准数据库，该库中的期刊名为官方标准写法；
6. 如果一些 Zotero 文献匹配不到 IF，可借助[这个网站](http://letpub.com.cn)，检查该文献所属期刊是否为 SCI，以及期刊名是否与官方标准写法相同（不区分大小写）；
7. 对于因 Zotero 文献的期刊名不标准，而无法匹配的情况，请将这些期刊名的【不标准写法】汇总到一个`Excel`文档中，并发到我邮箱 iseexuhs@icloud.com。邮件主题备注为：【期刊不标准写法】 - 你的昵称；
8. 根据搜集到的期刊名【不标准写法】，未来我会考虑在插件中加入【修正期刊名】功能。尽量使得所有 SCI 论文都能匹配到 IF。

#### 关于快捷键

1. Zotero Beta 的 Windows 用户，由于`Ctrl + 9`和`Ctrl + 0`快捷键与 Zotero 的 PDF 标签页切换快捷键冲突，因此无法使用，请通过右键菜单操作。

## ❤️ 关注我

全网同名：青柠学术。👉   公众号 / 视频号 / [知乎](https://www.zhihu.com/people/qnscholar) / [B站](https://space.bilibili.com/524598505)



## 致谢

1. 感谢南京市第一医院 [@Hong Liang](https://mp.weixin.qq.com/s/bu2dKneNVvvIumVaVt1hvQ) 为此项目作出的贡献；
1. 部分代码参考了以下开源项目，感谢！
   - [zotero-tag](https://github.com/windingwind/zotero-tag)
   - [Jasminum](https://github.com/l0o0/jasminum)

