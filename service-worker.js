/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1017b32e438ea3b5dea1c4361a671771"
  },
  {
    "url": "articles/cai-fu-chuang-zao-ji-zhi-qing-dan.html",
    "revision": "6623d765e35d9215913661dbc78a3fcc"
  },
  {
    "url": "assets/css/0.styles.79db4507.css",
    "revision": "888980ca09be41a4a9bcd88fac9387d7"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",
    "revision": "2c50d7a0caadcdd36b063bd9f9268291"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",
    "revision": "3392cf39311b42f70073c2732b99a24c"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",
    "revision": "342a61e0c4dee016881d00d9fa69c335"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",
    "revision": "b27e354b9a940cfabb1cdad2f5d35eb9"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",
    "revision": "bd18bae257a88cfa6a36310cd585d0a0"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",
    "revision": "314623ce54a8a2654fb5df3c9cec01aa"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",
    "revision": "359e1e974d07f534d0665dc5add72209"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",
    "revision": "e2c9ac8504a2e0f1ec22e5904087174f"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",
    "revision": "6b53a2db48b3bbde91ec9c85590ccc44"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",
    "revision": "98d5da581ba8efea0934c92794c6c56c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",
    "revision": "a2be00f37608cf99fb1c0351dc4e9342"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.233f218e.woff2",
    "revision": "233f218ee616854f491c7195cd8fffcf"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.316611c7.woff",
    "revision": "316611c7a4afe59d3bcbe9e0f1a41613"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",
    "revision": "ed829b5fabfded4f5f943df1012da1b1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",
    "revision": "09fa2c8f6a5a787648fcf62022b9e5c6"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",
    "revision": "ca23ba4b607268345b1f0b22bff41292"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",
    "revision": "cd5eb9a8d163f765f01c4b1a44567f4c"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",
    "revision": "14ff9c98a820d988c169e27ca3eb78b8"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",
    "revision": "4dc3271d3627578d951ecd3fcdb7f762"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.4eee467e.woff",
    "revision": "4eee467e52c8113a7c48549dec426808"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",
    "revision": "6c094af9274ceccdc817400fdf49c5af"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",
    "revision": "ab80a08c3c6915afb4b4a3300a55ef8f"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",
    "revision": "c89c643655fabf99f2b78eb9cc5cf4b0"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",
    "revision": "7b481bb892d872c27234188b59ca8f10"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",
    "revision": "8bdd60921916168d5c53c2caf3931e86"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",
    "revision": "e1a2ff93bd15ea54164340e3d1b2f901"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",
    "revision": "1aa96e4e339118aad4153041adbd9947"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.68f671df.woff",
    "revision": "68f671df4bc4ab87b9f3e5111c28c49a"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f677173e.ttf",
    "revision": "f677173e00e38ef3151aa3156ef87507"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",
    "revision": "362d94c68887ef3079e3fa04abc7b505"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",
    "revision": "f1cea170c77d231b4ce249fcf850f3f4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",
    "revision": "f9ae435239a0933219b7dba4480141cc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",
    "revision": "07ffaec68ea2d7c3428eec8b12969925"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",
    "revision": "2c74297808a50220aa64d435d69006bc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",
    "revision": "e7aabbc7a3b86d947d8ad4436a81b348"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",
    "revision": "6087fc040fbe6c4e83da5ee2c1f8a803"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",
    "revision": "6f7840dc539b8786da712dc43a57051c"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",
    "revision": "e8735df90d494a81dfc1568c352b21bc"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",
    "revision": "5921f5ba7c02f3aeb478e4e87d2187bf"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.781730b2.ttf",
    "revision": "781730b2f066b5268a8fb75b4f7c479b"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",
    "revision": "ced4ee620859978fa1921c87d6dbd774"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",
    "revision": "54a80b37e92f14f32a33165c571f8e95"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",
    "revision": "24cbe093e557076be8c6c5ffee4aa61b"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",
    "revision": "b78c75bb4d0c95e4a87e006e83f187e4"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",
    "revision": "8073cf012f453ddf47d5b8776f6bb1e5"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",
    "revision": "90f78c1075e0cdb56287589112f56011"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",
    "revision": "b636fa487ef5e2f56bb3529bc9168be0"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.842f0fe9.js",
    "revision": "ae3094d53505305b1bac61a06b8df970"
  },
  {
    "url": "assets/js/10.2662d729.js",
    "revision": "e303cfca4c9145c551f685e0f0d449f8"
  },
  {
    "url": "assets/js/11.7ef6928e.js",
    "revision": "fbc3bbba1903a3bd1adb68b6f84ae117"
  },
  {
    "url": "assets/js/12.adedbbf7.js",
    "revision": "4d01f5598f60086d963962e35eb474b7"
  },
  {
    "url": "assets/js/13.c8136568.js",
    "revision": "670ec1701ac1692239877c8a3859601d"
  },
  {
    "url": "assets/js/14.c16eaa0e.js",
    "revision": "caacb058121d88c87f06aac0eb6f6209"
  },
  {
    "url": "assets/js/15.1f8c7987.js",
    "revision": "591ab2822f7b97c1ee8a951e04480346"
  },
  {
    "url": "assets/js/16.a42ccc0f.js",
    "revision": "a0a65d3a68738903886d5a10803b0637"
  },
  {
    "url": "assets/js/17.a13bd9d6.js",
    "revision": "2b9fe262dc1c3ba5cc446f33a9e08f7a"
  },
  {
    "url": "assets/js/18.cd639abe.js",
    "revision": "ccb3345876424782c4637865a3f511b4"
  },
  {
    "url": "assets/js/19.c393da8a.js",
    "revision": "8c5c6d47e4ca99aeac2374635b1f98e8"
  },
  {
    "url": "assets/js/20.193bac2a.js",
    "revision": "06a4e34da652d9f8e4c8a9533128c9e4"
  },
  {
    "url": "assets/js/21.f193182e.js",
    "revision": "c0e960334ea04fc64966563daeece003"
  },
  {
    "url": "assets/js/22.cee4e1cc.js",
    "revision": "ccc76627ccff0237ea65463f376ca530"
  },
  {
    "url": "assets/js/23.53b80567.js",
    "revision": "c1327bb5a1eab9d1865ff475ae4acf42"
  },
  {
    "url": "assets/js/24.09de0b16.js",
    "revision": "2810f0ae056c3b5b5af41c479ca9975a"
  },
  {
    "url": "assets/js/25.ee914797.js",
    "revision": "ce83ed7ae3b632b93639d2535bfd2563"
  },
  {
    "url": "assets/js/26.657f447f.js",
    "revision": "cf0679818586c81f2ed1dda2d52f668f"
  },
  {
    "url": "assets/js/27.aea574f0.js",
    "revision": "0bea2e43ece7705a2f032ee6b3a9040b"
  },
  {
    "url": "assets/js/28.cab30b16.js",
    "revision": "167f22402ef0f7d0a3b0fa4ff2981a28"
  },
  {
    "url": "assets/js/29.ef5196f6.js",
    "revision": "cf5d42bdf3a2c79df2cccdb9d03d12cc"
  },
  {
    "url": "assets/js/30.c8aa39f9.js",
    "revision": "bd68b717fdf03098a923499d1eacca31"
  },
  {
    "url": "assets/js/31.4d81114f.js",
    "revision": "5e7add5e6e07ab6316d50f6675330be1"
  },
  {
    "url": "assets/js/32.d730555a.js",
    "revision": "154e243c1bd69f37129a0984076a5f8f"
  },
  {
    "url": "assets/js/33.3f191de9.js",
    "revision": "532e1340c7767a0c38834790c28ebdb1"
  },
  {
    "url": "assets/js/34.5ea72b81.js",
    "revision": "fa650ab91549b33b94702c41f162df37"
  },
  {
    "url": "assets/js/35.ff93f231.js",
    "revision": "b99f6608763aebd91fdb3bd7e7c1cc7b"
  },
  {
    "url": "assets/js/36.31766866.js",
    "revision": "c37066fe6b451689da0127d88b223e9e"
  },
  {
    "url": "assets/js/37.4c12bc7b.js",
    "revision": "00f8438839869e25d45d0de5767a929a"
  },
  {
    "url": "assets/js/38.c9cf093d.js",
    "revision": "de4a15fb8b78ad13e43559942e75e51f"
  },
  {
    "url": "assets/js/39.6539de17.js",
    "revision": "55cb9fbe6e5b6b6bd36ec1bba24371ad"
  },
  {
    "url": "assets/js/4.602194a0.js",
    "revision": "246340c4b07c789f4aded3d57e0298d9"
  },
  {
    "url": "assets/js/40.17611f76.js",
    "revision": "72af461834187fe526ff11078704dd8c"
  },
  {
    "url": "assets/js/41.82362df6.js",
    "revision": "60edea82cd7c30a4c1acd253e9bb9085"
  },
  {
    "url": "assets/js/42.bf0e722b.js",
    "revision": "a4b26c301d3ab7565101089e578b1dcf"
  },
  {
    "url": "assets/js/43.788f0198.js",
    "revision": "bc4c1996bacfec1e71aa5bd28ccd0278"
  },
  {
    "url": "assets/js/44.a0becdd6.js",
    "revision": "38f9becc390589938c95d3c43dd4ceb0"
  },
  {
    "url": "assets/js/45.1b095321.js",
    "revision": "6e26b809bb62121bde2b86e9c6b74af2"
  },
  {
    "url": "assets/js/46.457a452e.js",
    "revision": "4a6f4ef5b2dafceb3ec180dca83db4ef"
  },
  {
    "url": "assets/js/47.eb5344da.js",
    "revision": "5aad96781c1d87dfe032ed02f8005652"
  },
  {
    "url": "assets/js/48.4b1bea47.js",
    "revision": "9c16b7df8569ebd4458c7d2f65813cd2"
  },
  {
    "url": "assets/js/5.8e464bda.js",
    "revision": "4cd913388032f9578a9d52018fffe3b6"
  },
  {
    "url": "assets/js/6.fcbd9d83.js",
    "revision": "f0c27de8823be3fa7adff8b86b09cf69"
  },
  {
    "url": "assets/js/7.95264df8.js",
    "revision": "6c2a875dc6c65dbe2138994aa61d36d2"
  },
  {
    "url": "assets/js/8.4d52405c.js",
    "revision": "8eef555f621db25a5415ac4c34e4067f"
  },
  {
    "url": "assets/js/9.3d6ccb0b.js",
    "revision": "0c325595c706a2f1e77e9e7f4f297561"
  },
  {
    "url": "assets/js/app.e6349dd3.js",
    "revision": "bc5a66c7edda7f111147f611d098bfd3"
  },
  {
    "url": "assets/js/vendors~flowchart.9f564dd8.js",
    "revision": "c3322b0780991cbb9cd4cf46cf0f8d9f"
  },
  {
    "url": "avatar.jpg",
    "revision": "e477790606c100ceaa6a49b4edf48b15"
  },
  {
    "url": "baidu_verify_code-lvNrixIrUT.html",
    "revision": "e4a94327703f7ff32d4ecc84590ef566"
  },
  {
    "url": "bg.jpg",
    "revision": "7bce5562764fad460e60218e377e383e"
  },
  {
    "url": "categories/index.html",
    "revision": "a70c06833683e28c7dd07f4ce5bb5683"
  },
  {
    "url": "categories/YouTube/index.html",
    "revision": "7a34ecf7f8c0aeee4937350ddbf4d317"
  },
  {
    "url": "categories/YouTube/page/2/index.html",
    "revision": "640c96495dc7343d06d7d49e15185fca"
  },
  {
    "url": "categories/YouTube/page/3/index.html",
    "revision": "4bd39ca762e413929741a25259ee4962"
  },
  {
    "url": "categories/YouTube/page/4/index.html",
    "revision": "e5e09a3eb047cef10c208aa6de9d0f81"
  },
  {
    "url": "categories/文章/index.html",
    "revision": "223d4997da9a9fc092b184f437963a07"
  },
  {
    "url": "images/friends/Arabaku.jpg",
    "revision": "fd4ea8e303aedc2b8b2002cbb5b9456e"
  },
  {
    "url": "images/friends/C422.jpg",
    "revision": "3a67cbc27a8d903f69f53dbaac51bd05"
  },
  {
    "url": "images/friends/fanjiawen.png",
    "revision": "708272d16e220a7140729d3e88629048"
  },
  {
    "url": "images/friends/friends.png",
    "revision": "a6476223ef7d8daf9d68f3287d3d016d"
  },
  {
    "url": "images/friends/TJNUiOSClub.jpg",
    "revision": "414ea51606f16e4f0ee051d5ab9d2e84"
  },
  {
    "url": "images/friends/YiqinZhao.jpg",
    "revision": "0715f6d498f8d7c4c5e2c43f0ed94d0d"
  },
  {
    "url": "index.html",
    "revision": "ec073b2fbda11be9e7b448907036ee0e"
  },
  {
    "url": "qc/bilibili.png",
    "revision": "325647e138f687ef0011a7bad7437268"
  },
  {
    "url": "qc/wechatqc.png",
    "revision": "d1b4e0098f9c6f45ec309249a2024568"
  },
  {
    "url": "sponsor/alipag.png",
    "revision": "6937a0b76a187da47818194ac1e7f145"
  },
  {
    "url": "sponsor/qqpay.png",
    "revision": "3362d71cc38536878b905dd2e8900386"
  },
  {
    "url": "sponsor/wechatpay.png",
    "revision": "099759643aa7d17ae8e1d0115c6ac7b8"
  },
  {
    "url": "tag/index.html",
    "revision": "98885b7f73eaea66f0d9d3ebc85021c4"
  },
  {
    "url": "tag/YouTube/index.html",
    "revision": "dbeaab225fc1ef7f17024ce59937666c"
  },
  {
    "url": "tag/YouTube/page/2/index.html",
    "revision": "760df9b5d6b5d67f99bd32b9e5c7bf87"
  },
  {
    "url": "tag/YouTube/page/3/index.html",
    "revision": "af412f53ffbab529f6203b6a9f067d44"
  },
  {
    "url": "tag/YouTube/page/4/index.html",
    "revision": "a91dd069fe2079200138a7cffb1d8bdf"
  },
  {
    "url": "tag/金融/index.html",
    "revision": "5035388dc2de39c9ba73da534297a17f"
  },
  {
    "url": "timeline/index.html",
    "revision": "4f8ae358276041628c15666bd1329c39"
  },
  {
    "url": "youtube/youtube-2021-10-26.html",
    "revision": "69614739fcfe316a2e1cad0574af11a2"
  },
  {
    "url": "youtube/youtube-2021-10-27.html",
    "revision": "bb761cc4f45ccb2a7376da8a591dbc57"
  },
  {
    "url": "youtube/youtube-2021-10-28.html",
    "revision": "8f6e1e89985f9b3e0ede07358445dca4"
  },
  {
    "url": "youtube/youtube-2021-10-29.html",
    "revision": "baa7d65506b775cdac517159321d6c4a"
  },
  {
    "url": "youtube/youtube-2021-10-30.html",
    "revision": "06ffa94a69cfe060d0e1e0e3752020fc"
  },
  {
    "url": "youtube/youtube-2021-10-31.html",
    "revision": "8e4ad93a8aaba75c23381cd27c444e9f"
  },
  {
    "url": "youtube/youtube-2021-11-01.html",
    "revision": "081fe106b40be4f2bdf351c70d29a38d"
  },
  {
    "url": "youtube/youtube-2021-11-02.html",
    "revision": "d03db20c88c1306954615f6734315815"
  },
  {
    "url": "youtube/youtube-2021-11-03.html",
    "revision": "b927fc2ff5f8147215b164a0d7b30eb3"
  },
  {
    "url": "youtube/youtube-2021-11-04.html",
    "revision": "d16f23ed0fd230b44aeccbfc6a1d1615"
  },
  {
    "url": "youtube/youtube-2021-11-05.html",
    "revision": "93d7ddc1b4e599a1f28252cf5a5c7c20"
  },
  {
    "url": "youtube/youtube-2021-11-06.html",
    "revision": "4be30eafcb69945c21c52772807a5ff7"
  },
  {
    "url": "youtube/youtube-2021-11-07.html",
    "revision": "b8a5a9cced09bc846c8e0321127397e8"
  },
  {
    "url": "youtube/youtube-2021-11-08.html",
    "revision": "37b2ffa7f5bf327b11ca07591ff4746b"
  },
  {
    "url": "youtube/youtube-2021-11-09.html",
    "revision": "d2bf3c1afbc4d5933fef3cc31a2d099e"
  },
  {
    "url": "youtube/youtube-2021-11-10.html",
    "revision": "4ca629e67716a36e74437cb91d3492c5"
  },
  {
    "url": "youtube/youtube-2021-11-11.html",
    "revision": "a613c5205faddce56138c0a938080c76"
  },
  {
    "url": "youtube/youtube-2021-11-12.html",
    "revision": "808084a8fcfb8618371e29bce4d5b362"
  },
  {
    "url": "youtube/youtube-2021-11-13.html",
    "revision": "cc370d12aacfe3d39acde0243d02de09"
  },
  {
    "url": "youtube/youtube-2021-11-14.html",
    "revision": "69c0161ca4bee08494249b3dea4721b9"
  },
  {
    "url": "youtube/youtube-2021-11-15.html",
    "revision": "7a9a0e1b3d7eecbb8abea2ab446a01d3"
  },
  {
    "url": "youtube/youtube-2021-11-16.html",
    "revision": "b98e537c6e58ec945d63693d6371f711"
  },
  {
    "url": "youtube/youtube-2021-11-17.html",
    "revision": "aab19d3f4a6ba1857c04954ec89bab56"
  },
  {
    "url": "youtube/youtube-2021-11-18.html",
    "revision": "62e3aebde369ee1756ca69a7f8eea0ca"
  },
  {
    "url": "youtube/youtube-2021-11-19.html",
    "revision": "9ba1c8603b5b4f57bbd4811aae4aa304"
  },
  {
    "url": "youtube/youtube-2021-11-20.html",
    "revision": "bc69aa043ea84fffa66460145f452669"
  },
  {
    "url": "youtube/youtube-2021-11-21.html",
    "revision": "495b8457f4b675e5a19a67d0b965375f"
  },
  {
    "url": "youtube/youtube-2021-11-22.html",
    "revision": "b1eda3132dd04607178e376481fb00c5"
  },
  {
    "url": "youtube/youtube-2021-11-23.html",
    "revision": "428dba7bdbbaef76e4329aeb22d539e3"
  },
  {
    "url": "youtube/youtube-2021-11-24.html",
    "revision": "c59abbe09ee092754a5f1c8aad62ba90"
  },
  {
    "url": "youtube/youtube-2021-11-25.html",
    "revision": "acfe3fc4d227b7e9b665a9e655a99447"
  },
  {
    "url": "youtube/youtube-2021-11-26.html",
    "revision": "ce0e9b260c5da5a338ca1f714aac743e"
  },
  {
    "url": "youtube/youtube-2021-12-05.html",
    "revision": "dc1ed20319f0cfd4214ee4dc8e447eca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
