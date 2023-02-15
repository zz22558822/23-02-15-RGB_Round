// 資料存放至 data
let data;
// 刷新的資料 以利用於比對
let dataNew;
// 設定刷新一次
let lapse = 7500;
// 資料存在的開關
let dataExist;
// 預設圓形寬高
let maxWidth1;
let maxWidth2;
let maxWidth3;
// 大中小情境
let dataCase = 0;
// 寬高情境
let WHCase = 0;

// --------------------(AXJX)--------------------

// 獲取資料 本地端 JSON檔案
function getData() {
    // 讀取本地之JSON檔 添加引數為當前時間達成檔案不重複的效果來杜絕快取
    fetch("./Data.json?version="+(new Date()).getTime())
    .then(response => {
        if (response.ok) {
            // 資料存在就為 1
            dataExist = 1
            document.querySelector('.notData').classList.add('no')
            return response.json();
        } else {
            // 資料不存在為 0
            dataExist = 0
        }
    })
    .then(function (jsondata) {
        if (dataExist) {
            data = jsondata

            // 渲染資料
            // renderData()

            // 更新資料數據
            dataHeinght()


            
        }else{
            document.querySelector('.notData').classList.remove('no')
        }
    })
}




// --------------------(主程式)--------------------

function dataHeinght() {
    if (data != undefined) {
        
        // 情境1 : 產能 > 負荷 > 報工
        if (data[0].產能 >= data[0].負荷) {
            if (data[0].負荷 >= data[0].報工) {
                dataCase = 1
                // console.log('情境1');
                //判斷寬高後帶入變數
                if (window.innerWidth >= window.innerHeight) { //寬較大取高
                    maxWidth1 = (window.innerHeight -70)
                    maxWidth2 = (maxWidth1 / data[0].產能) * data[0].負荷
                    maxWidth3 = (maxWidth1 / data[0].產能) * data[0].報工
                }else{
                    maxWidth1 = (window.innerWidth -70)
                    maxWidth2 = (maxWidth1 / data[0].產能) * data[0].負荷
                    maxWidth3 = (maxWidth1 / data[0].產能) * data[0].報工
                }
                //變更大小
                document.querySelector('.green').style.height = maxWidth1 + "px"
                document.querySelector('.green').style.width = maxWidth1 + "px"
                document.querySelector('.red').style.height = maxWidth2 + "px"
                document.querySelector('.red').style.width = maxWidth2 + "px"
                document.querySelector('.blue').style.height = maxWidth3 + "px"
                document.querySelector('.blue').style.width = maxWidth3 + "px"
                // console.log('最大外圈大小: ' + maxWidth1);
    
                //重置Class標籤
                removeClass(); 
    
                //顏色更改
                document.querySelector('.blue').classList.add('white')
                document.querySelector('.red').classList.add('yellow')
    
                //添加 Z-index 層級
                document.querySelector('.green').classList.add('Z3')
                document.querySelector('.red').classList.add('Z2')
                document.querySelector('.blue').classList.add('Z1')
    
            }
        }

        // 情境2 : 產能 > 報工 > 負荷
        if (data[0].產能 >= data[0].報工){
            if (data[0].報工 >= data[0].負荷) {
                dataCase = 2
                // console.log('情境2');
                //判斷寬高後帶入變數
                if (window.innerWidth >= window.innerHeight) { //寬較大取高
                    maxWidth1 = (window.innerHeight -70)
                    maxWidth2 = (maxWidth1 / data[0].產能) * data[0].負荷
                    maxWidth3 = (maxWidth1 / data[0].產能) * data[0].報工
                }else{
                    maxWidth1 = (window.innerWidth -70)
                    maxWidth2 = (maxWidth1 / data[0].產能) * data[0].負荷
                    maxWidth3 = (maxWidth1 / data[0].產能) * data[0].報工
                }
                //變更大小
                document.querySelector('.green').style.height = maxWidth1 + "px"
                document.querySelector('.green').style.width = maxWidth1 + "px"
                document.querySelector('.red').style.height = maxWidth2 + "px"
                document.querySelector('.red').style.width = maxWidth2 + "px"
                document.querySelector('.blue').style.height = maxWidth3 + "px"
                document.querySelector('.blue').style.width = maxWidth3 + "px"
                // console.log('最大外圈大小: ' + maxWidth1);
    
                //重置Class標籤
                removeClass(); 
    
                //顏色更改
                document.querySelector('.red').classList.add('white')
                document.querySelector('.blue').classList.add('blue-green')
    
                //添加 Z-index 層級
                document.querySelector('.green').classList.add('Z3')
                document.querySelector('.red').classList.add('Z1')
                document.querySelector('.blue').classList.add('Z2')
       
            }
        }
        // 情境3 : 負荷 > 產能 > 報工
        if (data[0].負荷 >= data[0].產能) {
            if (data[0].產能 >= data[0].報工) {
                dataCase = 3
                // console.log('情境3');
                //判斷寬高後帶入變數
                if (window.innerWidth >= window.innerHeight) { //寬較大取高
                    maxWidth1 = (window.innerHeight -70)
                    maxWidth2 = (maxWidth1 / data[0].負荷) * data[0].產能
                    maxWidth3 = (maxWidth1 / data[0].負荷) * data[0].報工
                }else{
                    maxWidth1 = (window.innerWidth -70)
                    maxWidth2 = (maxWidth1 / data[0].負荷) * data[0].產能
                    maxWidth3 = (maxWidth1 / data[0].負荷) * data[0].報工
                }
                //變更大小
                document.querySelector('.red').style.height = maxWidth1 + "px"
                document.querySelector('.red').style.width = maxWidth1 + "px"
                document.querySelector('.green').style.height = maxWidth2 + "px"
                document.querySelector('.green').style.width = maxWidth2 + "px"
                document.querySelector('.blue').style.height = maxWidth3 + "px"
                document.querySelector('.blue').style.width = maxWidth3 + "px"
                // console.log('最大外圈大小: ' + maxWidth1);
    
                //重置Class標籤
                removeClass(); 
    
                //顏色更改
                document.querySelector('.blue').classList.add('white')
                document.querySelector('.green').classList.add('yellow')
    
                //添加 Z-index 層級
                document.querySelector('.green').classList.add('Z2')
                document.querySelector('.red').classList.add('Z3')
                document.querySelector('.blue').classList.add('Z1')    
            }
        }
        // 情境4 : 負荷 > 報工 > 產能
        if (data[0].負荷 >= data[0].報工){
            if (data[0].報工 >= data[0].產能) {
                dataCase = 4
                // console.log('情境4');
                //判斷寬高後帶入變數
                if (window.innerWidth >= window.innerHeight) { //寬較大取高
                    maxWidth1 = (window.innerHeight -70)
                    maxWidth2 = (maxWidth1 / data[0].負荷) * data[0].產能
                    maxWidth3 = (maxWidth1 / data[0].負荷) * data[0].報工
                }else{
                    maxWidth1 = (window.innerWidth -70)
                    maxWidth2 = (maxWidth1 / data[0].負荷) * data[0].產能
                    maxWidth3 = (maxWidth1 / data[0].負荷) * data[0].報工
                }
                //變更大小
                document.querySelector('.red').style.height = maxWidth1 + "px"
                document.querySelector('.red').style.width = maxWidth1 + "px"
                document.querySelector('.green').style.height = maxWidth2 + "px"
                document.querySelector('.green').style.width = maxWidth2 + "px"
                document.querySelector('.blue').style.height = maxWidth3 + "px"
                document.querySelector('.blue').style.width = maxWidth3 + "px"
                // console.log('最大外圈大小: ' + maxWidth1);
    
                //重置Class標籤
                removeClass(); 
    
                //顏色更改
                document.querySelector('.green').classList.add('white')
                document.querySelector('.blue').classList.add('purple')
    
                //添加 Z-index 層級
                document.querySelector('.green').classList.add('Z1')
                document.querySelector('.red').classList.add('Z3')
                document.querySelector('.blue').classList.add('Z2')
            }
        }
        // 情境5 : 報工 > 負荷 > 產能
        if (data[0].報工 >= data[0].負荷) {
            if (data[0].負荷 >= data[0].產能) {
                dataCase = 5
                // console.log('情境5');
                //判斷寬高後帶入變數
                if (window.innerWidth >= window.innerHeight) { //寬較大取高
                    maxWidth1 = (window.innerHeight -70)
                    maxWidth2 = (maxWidth1 / data[0].報工) * data[0].負荷
                    maxWidth3 = (maxWidth1 / data[0].報工) * data[0].產能
                }else{
                    maxWidth1 = (window.innerWidth -70)
                    maxWidth2 = (maxWidth1 / data[0].報工) * data[0].負荷
                    maxWidth3 = (maxWidth1 / data[0].報工) * data[0].產能
                }
                //變更大小
                document.querySelector('.blue').style.height = maxWidth1 + "px"
                document.querySelector('.blue').style.width = maxWidth1 + "px"
                document.querySelector('.red').style.height = maxWidth2 + "px"
                document.querySelector('.red').style.width = maxWidth2 + "px"
                document.querySelector('.green').style.height = maxWidth3 + "px"
                document.querySelector('.green').style.width = maxWidth3 + "px"
                // console.log('最大外圈大小: ' + maxWidth1);
    
                //重置Class標籤
                removeClass(); 
    
                //顏色更改
                document.querySelector('.green').classList.add('white')
                document.querySelector('.red').classList.add('purple')
    
                //添加 Z-index 層級
                document.querySelector('.green').classList.add('Z1')
                document.querySelector('.red').classList.add('Z2')
                document.querySelector('.blue').classList.add('Z3')    
            }
        }
        // 情境6 : 報工 > 產能 > 負荷
        if (data[0].報工 >= data[0].產能){
            if (data[0].產能 >= data[0].負荷) {
                dataCase = 6
                // console.log('情境6');
                //判斷寬高後帶入變數
                if (window.innerWidth >= window.innerHeight) { //寬較大取高
                    maxWidth1 = (window.innerHeight -70)
                    maxWidth2 = (maxWidth1 / data[0].報工) * data[0].負荷
                    maxWidth3 = (maxWidth1 / data[0].報工) * data[0].產能
                }else{
                    maxWidth1 = (window.innerWidth -70)
                    maxWidth2 = (maxWidth1 / data[0].報工) * data[0].負荷
                    maxWidth3 = (maxWidth1 / data[0].報工) * data[0].產能
                }
                //變更大小
                document.querySelector('.blue').style.height = maxWidth1 + "px"
                document.querySelector('.blue').style.width = maxWidth1 + "px"
                document.querySelector('.red').style.height = maxWidth2 + "px"
                document.querySelector('.red').style.width = maxWidth2 + "px"
                document.querySelector('.green').style.height = maxWidth3 + "px"
                document.querySelector('.green').style.width = maxWidth3 + "px"
                // console.log('最大外圈大小: ' + maxWidth1);

                //重置Class標籤
                removeClass(); 
    
                //顏色更改
                document.querySelector('.red').classList.add('white')
                document.querySelector('.green').classList.add('blue-green')
    
                //添加 Z-index 層級
                document.querySelector('.green').classList.add('Z2')
                document.querySelector('.red').classList.add('Z1')
                document.querySelector('.blue').classList.add('Z3')    
            }
        }
    }else{
        console.log('沒有正確資料');
        document.querySelector('.notData').classList.remove('no')
    }
}

// 重置Class標籤
function removeClass() {
    // 綠色移除
    document.querySelector('.green').classList.remove('blue-green')
    document.querySelector('.green').classList.remove('white')
    document.querySelector('.green').classList.remove('yellow')
    document.querySelector('.green').classList.remove('Z1')
    document.querySelector('.green').classList.remove('Z3')
    document.querySelector('.green').classList.remove('Z2')
    // 紅色移除
    document.querySelector('.red').classList.remove('purple')
    document.querySelector('.red').classList.remove('white')
    document.querySelector('.red').classList.remove('yellow')
    document.querySelector('.red').classList.remove('Z1')
    document.querySelector('.red').classList.remove('Z2')
    document.querySelector('.red').classList.remove('Z3')
    // 藍色移除
    document.querySelector('.blue').classList.remove('purple')
    document.querySelector('.blue').classList.remove('white')
    document.querySelector('.blue').classList.remove('blue-green')
    document.querySelector('.blue').classList.remove('Z1')
    document.querySelector('.blue').classList.remove('Z2')
    document.querySelector('.blue').classList.remove('Z3')

}








// --------------------(畫面大小調整)--------------------

// 將 .banner 的高度CSS 改為 當前瀏覽器內部高度(單位px)
document.querySelector('.wrap').style.height = (window.innerHeight -41) + "px"
document.querySelector('.content').style.height = (window.innerHeight -41) + "px"


//使用者 改變瀏覽器大小時觸發
window.onresize = function(){
    document.querySelector('.wrap').style.height = (window.innerHeight -41) + "px"
    document.querySelector('.content').style.height = (window.innerHeight -41) + "px"

    // Bug 大小寬高變換過快時會有延遲 但正常使用遇不到(沒人會高速切換大小)
    // 測試得知 RGB圓球過大時縮小會導致破版超過頁面 此時數據已經被帶入後又破版
    // 通過 自動刷新的延遲 1秒刷新一次 最慢3秒
    if (data != undefined){ 
        if (dataCase == 1 || dataCase == 2) {
            //判斷寬高後帶入變數
            if (window.innerWidth >= window.innerHeight) { //寬較大取高
                maxWidth1 = (window.innerHeight -70)
                maxWidth2 = (maxWidth1 / data[0].產能) * data[0].負荷
                maxWidth3 = (maxWidth1 / data[0].產能) * data[0].報工
            }else{
                maxWidth1 = (window.innerWidth -70)
                maxWidth2 = (maxWidth1 / data[0].產能) * data[0].負荷
                maxWidth3 = (maxWidth1 / data[0].產能) * data[0].報工
            }
            //產能大小
            document.querySelector('.green').style.height = maxWidth1 + "px"
            document.querySelector('.green').style.width = maxWidth1 + "px"
            //負荷大小
            document.querySelector('.red').style.height = maxWidth2 + "px"
            document.querySelector('.red').style.width = maxWidth2 + "px"
            //報工大小
            document.querySelector('.blue').style.height = maxWidth3 + "px"
            document.querySelector('.blue').style.width = maxWidth3 + "px"
        }else if (dataCase == 3 || dataCase == 4) {
            //判斷寬高後帶入變數
            if (window.innerWidth >= window.innerHeight) { //寬較大取高
                maxWidth1 = (window.innerHeight -70)
                maxWidth2 = (maxWidth1 / data[0].負荷) * data[0].產能
                maxWidth3 = (maxWidth1 / data[0].負荷) * data[0].報工
            }else{
                maxWidth1 = (window.innerWidth -70)
                maxWidth2 = (maxWidth1 / data[0].負荷) * data[0].產能
                maxWidth3 = (maxWidth1 / data[0].負荷) * data[0].報工
            }
            //負荷大小
            document.querySelector('.red').style.height = maxWidth1 + "px"
            document.querySelector('.red').style.width = maxWidth1 + "px"
            //產能大小
            document.querySelector('.green').style.height = maxWidth2 + "px"
            document.querySelector('.green').style.width = maxWidth2 + "px"
            //報工大小
            document.querySelector('.blue').style.height = maxWidth3 + "px"
            document.querySelector('.blue').style.width = maxWidth3 + "px"
        }else if (dataCase == 5 || dataCase == 6) {
            //判斷寬高後帶入變數
            if (window.innerWidth >= window.innerHeight) { //寬較大取高
                maxWidth1 = (window.innerHeight -70)
                maxWidth2 = (maxWidth1 / data[0].報工) * data[0].負荷
                maxWidth3 = (maxWidth1 / data[0].報工) * data[0].產能
            }else{
                maxWidth1 = (window.innerWidth -70)
                maxWidth2 = (maxWidth1 / data[0].報工) * data[0].負荷
                maxWidth3 = (maxWidth1 / data[0].報工) * data[0].產能
            }
            //報工大小
            document.querySelector('.blue').style.height = maxWidth1 + "px"
            document.querySelector('.blue').style.width = maxWidth1 + "px"
            //負荷大小
            document.querySelector('.red').style.height = maxWidth2 + "px"
            document.querySelector('.red').style.width = maxWidth2 + "px"
            //產能大小
            document.querySelector('.green').style.height = maxWidth3 + "px"
            document.querySelector('.green').style.width = maxWidth3 + "px"
        }

    }

    // // DeBug用
    // console.log(maxWidth1 + 70);
    // console.log('高度: '+ window.innerHeight);
    // console.log('寬度: '+ window.innerWidth);

}



// --------------------(自動化刷新)--------------------
// 每10s 重新 updata
setInterval("updata()","3000");
setInterval("upDisplay()","1000");
function updata() {
    let upSwitch = 0
    // 讀取本地之JSON檔 添加引數為當前時間達成檔案不重複的效果來杜絕快取
    fetch("./Data.json?version="+(new Date()).getTime())
    .then(response => {
        if (response.ok) {
            // 資料存在就為 1
            dataExist = 1
            document.querySelector('.notData').classList.add('no')
            return response.json();
        } else {
            // 資料不存在為 0
            dataExist = 0
            // 抓不到資料時 清空舊有資料
            data = ''
            document.querySelector('.notData').classList.remove('no')
        }
    })
    .then(function (jsondata) {
        if (dataExist) {
            dataNew = jsondata

            // 判斷資料是否異動
            if (JSON.stringify(data) !== JSON.stringify(dataNew)) {

                console.log('資料發生異動');
                // 深層複製 新資料到舊資料當中
                data = JSON.parse(JSON.stringify(dataNew))


                // 觸發 更新開關 因為無法再用資料變動去判斷
                upSwitch = 1
            }
                
            // 異動後的渲染
            if (upSwitch === 1) {
                // 調用渲染
                dataHeinght()
            }
                        

        }else{

            document.querySelector('.notData').classList.remove('no')

        }
    })

    // .then(upDisplay())

    // 將更新開關 關閉
    .then(upSwitch = 0)

}

// 解決刷新Bug
function upDisplay() {
    if (window.innerHeight != (maxWidth1 + 70) && window.innerWidth != (maxWidth1 + 70)) {
        document.querySelector('.wrap').style.height = (window.innerHeight -41) + "px"
        document.querySelector('.content').style.height = (window.innerHeight -41) + "px"
        if (dataCase == 1 || dataCase == 2) {
            //判斷寬高後帶入變數
            if (window.innerWidth >= window.innerHeight) { //寬較大取高
                maxWidth1 = (window.innerHeight -70)
                maxWidth2 = (maxWidth1 / data[0].產能) * data[0].負荷
                maxWidth3 = (maxWidth1 / data[0].產能) * data[0].報工
            }else{
                maxWidth1 = (window.innerWidth -70)
                maxWidth2 = (maxWidth1 / data[0].產能) * data[0].負荷
                maxWidth3 = (maxWidth1 / data[0].產能) * data[0].報工
            }
            //產能大小
            document.querySelector('.green').style.height = maxWidth1 + "px"
            document.querySelector('.green').style.width = maxWidth1 + "px"
            //負荷大小
            document.querySelector('.red').style.height = maxWidth2 + "px"
            document.querySelector('.red').style.width = maxWidth2 + "px"
            //報工大小
            document.querySelector('.blue').style.height = maxWidth3 + "px"
            document.querySelector('.blue').style.width = maxWidth3 + "px"
        }else if (dataCase == 3 || dataCase == 4) {
            //判斷寬高後帶入變數
            if (window.innerWidth >= window.innerHeight) { //寬較大取高
                maxWidth1 = (window.innerHeight -70)
                maxWidth2 = (maxWidth1 / data[0].負荷) * data[0].產能
                maxWidth3 = (maxWidth1 / data[0].負荷) * data[0].報工
            }else{
                maxWidth1 = (window.innerWidth -70)
                maxWidth2 = (maxWidth1 / data[0].負荷) * data[0].產能
                maxWidth3 = (maxWidth1 / data[0].負荷) * data[0].報工
            }
            //負荷大小
            document.querySelector('.red').style.height = maxWidth1 + "px"
            document.querySelector('.red').style.width = maxWidth1 + "px"
            //產能大小
            document.querySelector('.green').style.height = maxWidth2 + "px"
            document.querySelector('.green').style.width = maxWidth2 + "px"
            //報工大小
            document.querySelector('.blue').style.height = maxWidth3 + "px"
            document.querySelector('.blue').style.width = maxWidth3 + "px"
        }else if (dataCase == 5 || dataCase == 6) {
            //判斷寬高後帶入變數
            if (window.innerWidth >= window.innerHeight) { //寬較大取高
                maxWidth1 = (window.innerHeight -70)
                maxWidth2 = (maxWidth1 / data[0].報工) * data[0].負荷
                maxWidth3 = (maxWidth1 / data[0].報工) * data[0].產能
            }else{
                maxWidth1 = (window.innerWidth -70)
                maxWidth2 = (maxWidth1 / data[0].報工) * data[0].負荷
                maxWidth3 = (maxWidth1 / data[0].報工) * data[0].產能
            }
            //報工大小
            document.querySelector('.blue').style.height = maxWidth1 + "px"
            document.querySelector('.blue').style.width = maxWidth1 + "px"
            //負荷大小
            document.querySelector('.red').style.height = maxWidth2 + "px"
            document.querySelector('.red').style.width = maxWidth2 + "px"
            //產能大小
            document.querySelector('.green').style.height = maxWidth3 + "px"
            document.querySelector('.green').style.width = maxWidth3 + "px"
        }
        console.log('快速刷新異常，調用數據完成');
        // // DeBug用
        // console.log(maxWidth1 + 70);
        // console.log('高度: '+ window.innerHeight);
        // console.log('寬度: '+ window.innerWidth);
    }
}


// --------------------(初始化)--------------------
// 初始化
function init() {
    getData()
}

init();





