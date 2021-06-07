<template>
    <div class="box">
        <div class="logo">
            <img src="../assets/img/20771839_1609920594.png" alt="">
        </div>
        <div class="banner">
            <img src="../assets/img/tmp1610085222_1913406_s.jpg" alt="">
        </div>
        <div class="customModule">
            <div class="NameTxt">
                <a href="###">ENVIRONMENTAL&nbsp;DISPLAY</a>
            </div>
            <div class="text textfont">
                <p>环境/AMBIENT</p>
            </div>
            <div class="picture">
                <img src="../assets/img/20777691_1610085477.jpeg" alt="">
            </div>
        </div>
        <div class="toolMenuBg" id="tool-menu-bg"></div>
        <div class="toolMenu" id="tool-menu">
            <ul class="toolBut q">
                <li style="width:33%;">
                    <a href="Index.vue" class="cur">
                        <b class="icon">
                            <img src="../assets/img/7944236_1538985767.png" alt="" width="20" height="20">
                        </b>
                        <span>首页</span>
                    </a>
                </li>
                <li style="width:33%;">
                    <a href="tel:18037156030">
                        <b class="icon">
                            <img src="../assets/img/7944138_1538985640.png" alt="" width="20" height="20">
                        </b>
                        <span>电话</span>
                    </a>
                </li>
                <li style="width:33%;">
                    <a href="Index.vue">
                        <b class="icon">
                            <img src="../assets/img/2053_1513021523931978.png" alt="" width="20" height="20">
                        </b>
                        <span>微信咨询</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="navb" style="display:none;"></div>
        <div class="fixedNav" id="fixed-Nav" style="display:block;top:2px;right:0px;">
            <div class="nav-btn">
                <i class="i-1"></i>
                <i class="i-2"></i>
                <i class="i-3"></i>
                <b class="b-1"></b>
                <b class="b-2"></b>
                <b class="b-3"></b>
            </div>
        </div>
        <div class="nav" id="nav-box" state="close">
            <div class="nav-content">
                <ul>
                    <li class="listSetup">
                        <a href="Index.vue">
                            <em></em>
                            <span class="navText" style="padding-right: 32px;">首页</span>
                        </a>
                    </li>
                    <li class="listSetup">
                        <a href="Index.vue">
                            <em></em>
                            <span class="navText">夜场新闻</span>
                        </a>
                    </li>
                      <li class="listSetup">
                        <a href="Index.vue">
                            <em></em>
                            <span class="navText">联系我们</span>
                        </a>
                    </li>
                    <li class="listSetup">
                        <a href="Index.vue">
                            <em></em>
                            <span class="navText">模特展示</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
@import "../assets/css/common.css";
@import "../assets/css/reset.css";
    .NameTxt {
        font-size: 20px;
        padding-top: 24px;
        background-color: #e1e5e8;
    }
    .NameTxt a {
        color: #333;
    }
    .textfont {
        font-size: 16px;
        color: #989898;
        margin-bottom: 8px;
    }
    .text {
        line-height: 1.75;
        background: url("../assets/img/tmp1538987756_1761174_s.png") no-repeat center bottom;
        background-color: #e1e5e8;
    }
    .picture img {
        width: 100%;
        vertical-align: top;
    }
</style>