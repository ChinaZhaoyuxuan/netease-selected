<template>
  <div>
    <div id="popularity">
      <div class="topTitle">
        <p class="HotTop">新品首发</p>
        <p class="more">更多<i class="iconfont icon-you"></i></p>
      </div>
      <div class="shopdetails" >
        <div v-if="newItemList.length">
          <img :src="newItemList[0].scenePicUrl" alt="">
          <div><span>{{newItemList[0].extra.resource.materialName}}</span><i>¥{{newItemList[0].counterPrice}}</i></div>
          <div class="bottomText">好货内部价</div>
        </div>
        <div v-if="newItemList.length">
          <img :src="newItemList[1].scenePicUrl" alt="">
          <div><span>{{newItemList[1].extra.resource.materialName}}</span><i>¥{{newItemList[1].counterPrice}}</i></div>
          <div class="bottomText">520特惠</div>
        </div>
        <div v-if="newItemList.length">
          <img :src="newItemList[2].scenePicUrl" alt="">
          <div><span>{{newItemList[2].extra.resource.materialName}}</span><i>¥{{newItemList[2].counterPrice}}</i></div>
          <div class="bottomText">每满199减30券</div>
        </div>
    
      </div>
      <div class="shopdetails">
        <div v-if="newItemList.length">
          <img :src="newItemList[3].scenePicUrl" alt="">
          <div><span>{{newItemList[3].extra.resource.materialName}}</span><i>¥{{newItemList[3].counterPrice}}</i></div>
          <div class="bottomText">特价</div>
        </div>
        <div v-if="newItemList.length">
          <img :src="newItemList[4].scenePicUrl" alt="">
          <div><span>{{newItemList[4].extra.resource.materialName}}</span><i>¥{{newItemList[4].counterPrice}}</i></div>
          <div class="bottomText">每满99减15券</div>
        </div>
        <div v-if="newItemList.length">
          <img :src="newItemList[5].scenePicUrl" alt="">
          <div><span>{{newItemList[5].extra.resource.materialName}}</span><i>¥{{newItemList[5].counterPrice}}</i></div>
        </div>
    
      </div>
    </div>
    <div id="shopKing">
      <div>
        <p>性价比之王</p>
        <span>品质惊人的良心替代</span>
        <div>
          <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.4.8.$0.0.2.0">
          <img src="https://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.4.8.$0.0.2.1">
        </div>
      </div>
      <div>
        <p>无限回购榜单</p>
        <span>快消日用超值5.9元起</span>
        <div>
          <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.4.8.$1.0.2.0">
          <img src="https://yanxuan.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.4.8.$1.0.2.1">
        </div>
      </div>
      <div>
        <p>断货补单王</p>
        <span>严选必买爆款</span>
        <div>
          <img src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.4.8.$2.0.2.0">
          <img src="https://yanxuan.nosdn.127.net/6463c70f8b50bd14fd49d1f5903c06ec.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.4.8.$2.0.2.1">
        </div>
      </div>
      <div>
        <p>双料口碑爆品榜</p>
        <span>高销量高好评好物</span>
        <div>
          <img src="https://yanxuan.nosdn.127.net/bbdbfc9d084e0188af383ff9255a4cc1.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.4.8.$3.0.2.0">
          <img src="https://yanxuan.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.4.8.$3.0.2.1">
        </div>
      </div>

    </div>
    <div class="indexFloor">
        <div class="banner"></div>
        <div class="swiperlistContent">
            <ul class="swiperlist">
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
              <li>
                <div class="swpic">
                  <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div>
                  <p>韩国制造 超声波去角质导入美容仪</p>
                  <div>
                    <span class="newpice">¥199</span>
                    <span class="oldpice">¥1269</span>
                  </div>
                </div>
                <span class="bottomTitle">好货内部价</span>
              </li>
            </ul>
        </div>
    </div>
    <div class="indexFloor">
      <div class="banner"></div>
      <div class="swiperlistContent">
        <ul class="swiperlist">
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="indexFloor">
      <div class="banner"></div>
      <div class="swiperlistContent">
        <ul class="swiperlist">
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
          <li>
            <div class="swpic">
              <img src="https://yanxuan.nosdn.127.net/f5b1cba9a449797089d43cfe6939933d.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div>
              <p>韩国制造 超声波去角质导入美容仪</p>
              <div>
                <span class="newpice">¥199</span>
                <span class="oldpice">¥1269</span>
              </div>
            </div>
            <span class="bottomTitle">好货内部价</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
 
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'popularity',
    mounted(){
        new BScroll('.swiperlistContent',{
          scrollX: true,
          scrollY: false,
          clickY:false
      })
    },
    computed:{
      ...mapState({
        newItemList:state=>state.home.newItemList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  #popularity
    width 100%
    height 900px
    background-color #fff
    margin-top 25px
    .topTitle
      width 100%
      height 100px
      font-size 35px
      color #333333
      .HotTop
        float left
        padding 30px 0 0 25px
      .more
        float right
        padding 30px 25px 0 0
        text-align center
        font-size 32px
        i
          display block
          font-size 30px
          float right
          margin 5px 5px
    .shopdetails
      display flex
      justify-content space-around
      div
        width 220px
        margin-top 30px
        &:nth-of-type(1)
          float left
          margin-left 10px
        &:nth-of-type(2)
          float left
        &:nth-of-type(3)
          float right
          margin-right 10px
      img
        width 100%
        background-color #f5f5f5
        border-radius 5px
      i
        font-size 26px
        color $red
        padding-left 5px
      span
        width 210px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        display block
        font-size 26px
        color #333333
      .bottomText
        text-align center
        width auto
        color $red
        border 1px solid $red
        border-radius 10px
        padding 3px
        margin 0 auto

  #shopKing
      width 100%
      height 680px
      margin-top 30px
      background-color #fff
      div
        width 350px
        height 300px
        background-color #F5F5F5
        p
          font-size 32px
          color #333333
          padding 30px 0 0 30px
        span
          font-size 24px
          color #7f7f7f
          padding 30px 0 0 30px
        &:nth-of-type(1)
          float left
          margin-left 20px
          margin-top 30px
          div
            display flex
            width 200px
            height 150px
            img
              width 100%
        &:nth-of-type(2)
          float right
          margin-right 20px
          margin-top 30px
          div
            display flex
            width 200px
            height 150px
            img
              width 100%
        &:nth-of-type(3)
          float left
          margin-left 20px
          margin-top 10px
          div
            display flex
            width 200px
            height 150px
            img
              width 100%
        &:nth-of-type(4)
          float right
          margin-right 20px
          margin-top 10px
          div
            display flex
            width 200px
            height 150px
            img
              width 100%

  .indexFloor
    .banner
      width 100%
      height 420px
      margin-top 30px
      background-image:url(https://yanxuan.nosdn.127.net/3d4838468af4115cac778f2ba6c2f96f.jpg)
      background-size 100% 100%
    .swiperlistContent
      display flex
      .swiperlist
        height 320px
        background-color #fff
        padding 30px 0 0 30px
        display flex
        li
          p
            font-size 24px
            color #333333
            width 220px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .newpice
            color $red
          .oldpice
            color #999
            text-decoration line-through
          .bottomTitle
            border 1px solid #CE2424
            border-radius 10px
            color #CE2424
            padding 2px
            text-align center
            font-size 20px
          .swpic
            width 200px
            height 200px
            background-color #f4f4f4
            img
              width 100%



</style>
