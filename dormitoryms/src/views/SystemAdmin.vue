<template>
    <el-container class="home_container">

        <el-container>

            <el-aside class="home_aside" style="background-color:#2B2B2B;" width="200px">
                <div class="logobox" style="height:60px">
                  <img class="logoimg" src="../assets/img/logo.png" alt="">
                </div>
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false" router background-color="#2B2B2B" text-color="#fff" active-text-color="skyblue" >
                    <el-submenu index="1" >
                        <template slot="title"><i class="el-icon-s-platform"></i>宿管模块</template>
                        <el-menu-item index="/dormitoryAdminAdd" :class="$route.path=='/dormitoryAdminAdd'?'is-active':''">
                            <i class="el-icon-folder-add"></i>添加宿管
                        </el-menu-item>
                        <el-menu-item index="/dormitoryAdminManager" :class="$route.path=='/dormitoryAdminManager'?'is-active':''">
                            <i class="el-icon-document-copy"></i>宿管管理
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-user-solid"></i>学生模块</template>
                        <el-menu-item index="/studentAdd" :class="$route.path=='/studentAdd'?'is-active':''">
                            <i class="el-icon-folder-add"></i>添加学生
                        </el-menu-item>
                        <el-menu-item index="/studentManager">
                            <i class="el-icon-document-copy"></i>学生管理
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-s-grid"></i>楼宇模块</template>
                        <el-menu-item :key="index" index="/buildingAdd">
                            <i class="el-icon-folder-add"></i>添加楼宇
                        </el-menu-item>
                        <el-menu-item index="/buildingManager">
                            <i class="el-icon-document-copy"></i>楼宇管理
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-s-home"></i>宿舍模块</template>
                        <el-menu-item index="/dormitoryAdd">
                            <i class="el-icon-folder-add"></i>添加宿舍
                        </el-menu-item>
                        <el-menu-item index="/dormitoryManager">
                            <i class="el-icon-document-copy"></i>宿舍管理
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item index="/moveoutRegister">
                        <i class="el-icon-s-unfold"></i>学生迁出登记
                        <span slot="title"></span>
                    </el-menu-item>

                    <el-menu-item index="/moveoutRecord">
                        <i class="el-icon-s-order"></i>学生迁出记录
                        <span slot="title"></span>
                    </el-menu-item>

                    <el-menu-item index="/absentRecord">
                        <i class="el-icon-error"></i>学生缺寝记录
                        <span slot="title"></span>
                    </el-menu-item>
                </el-menu>

            </el-aside>

            <el-container>
                <el-header class="home_header">
                <div class="home_title" >宿舍管理系统-系统管理员</div>
                <el-menu class="el-menu-demo"  mode="horizontal" background-color="#2B2B2B" text-color="#fff" active-text-color="#fff">
                  <el-submenu index="2" class="submenu">
                    <!-- <template slot="title">{{user.userRealName}}</template> -->
                    <template slot="title">{{admin.name}}</template>
                    <el-menu-item index="2-1">设置</el-menu-item>
                    <el-menu-item @click="content()" index="2-2">个人中心</el-menu-item>
                    <el-menu-item @click.native="logout" index="2-3">退出</el-menu-item>
                  </el-submenu>
                </el-menu>

              </el-header>
                <el-main>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
                    </el-breadcrumb>
                    <router-view></router-view>
                </el-main>
                <el-footer class="home_footer">footer</el-footer>
            </el-container>

        </el-container>

    </el-container>
</template>
<script>
    export default{
        methods: {
            logout(){
                let _this = this;
                this.$confirm('确定要退出登录吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    localStorage.removeItem('systemAdmin')
                    _this.$router.replace({path: '/login'})
                })
            }
        },
        data(){
            return {
                admin:'',
              // 是否折叠
              isCollapse: false
            }
        },
        created() {
            let admin = JSON.parse(window.localStorage.getItem('systemAdmin'))
            this.admin = admin
        },
      // 点击按钮，切换菜单的折叠与展开
      toggleCollapse () {
        this.isCollapse = !this.isCollapse
      }
    }
</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .home_container {
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
    }

    .home_header {
        padding: 0;
        height: 50px;
        background-color: #2B2B2B;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .home_title {
        color: #C2C2C2;
        font-size: 22px;
        display: inline;
      margin: auto;
    }

    .home_userinfo {
        color: #fff;
        cursor: pointer;
    }

    .home_userinfoContainer {
        display: inline;
        margin-right: 20px;
    }

    .home_aside {
        background-color: #333;
    }
    .toggle-button{
      /*// 添加背景颜色*/
      background-color: #4A5064;
      font-size:10px;
      line-height:24px;
      color:#fff;
      text-align: center;
      letter-spacing: 0.2em;
      cursor:pointer;
    }
    .home_footer {
        background-color: #FFFFFF;
        color: #000000;
        font-size: 18px;
        line-height: 60px;
        text-align: center;
    }
    .submenu {
      float: right;
    }
    .buttonimg {
      height: 60px;
      background-color: transparent;
      border: none;
    }
    .showimg {
      width: 26px;
      height: 26px;
      position: absolute;
      top: 17px;
      left: 17px;
    }
    .showimg:active {
      border: none;
    }
    .logobox {
      height: 40px;
      line-height: 40px;
      color: #9d9d9d;
      font-size: 20px;
      text-align: center;
    }
    .el-submenu__title{
      color:lightgray!important;
    }
    span{
      color:lightgray;
    }
</style>
