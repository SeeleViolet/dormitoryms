<template>
  <div>
    <el-container>
      <!-- width的宽度跟collapse一样动态控制 -->
      <el-aside width="collapse">
        <!-- :collapse="isCollapse"   class="el-menu-vertical" 动态控制导航菜单的收起与展开  router：让index作为 path 进行路由跳转 -->
        <el-menu
            :default-active="$route.path"
            router
            :collapse="isCollapse"




        >
          <el-submenu index="1">
            <!-- 插槽 插入一级导航标题 -->
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>工厂设置</span>
            </template>
            <!-- 二级导航标题 -->
            <el-menu-item-group>
              <el-menu-item index="/A-Business/A-Business">
                <i class="el-icon-s-shop"></i>商户信息
              </el-menu-item>
              <el-menu-item index="/B-Extension/B-Extension">
                <i class="el-icon-s-flag"></i>推广团队
              </el-menu-item>
              <el-menu-item index="/C-Management/C-Management">
                <i class="el-icon-menu"></i>插件管理
              </el-menu-item>
              <el-menu-item index="/D-customer/D-customer">
                <i class="el-icon-s-custom"></i>我的客户
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="box_bgd" @click="isC">
            <!-- 点击展开收起导航和切换对应图标 -->
            <i class="el-icon-s-fold" v-show="block"></i>
            <i class="el-icon-s-unfold" v-show="toggle"></i>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      isCollapse: false, //导航栏默认为展开
      toggle: false, //第二个图标默认隐藏
      block: true, //默认显示第一个图标
    };
  },
  methods: {
    // 动态控制展开与收起和切换对应图标
    isC() {
      this.isCollapse = !this.isCollapse;
      this.toggle = !this.toggle;
      this.block = !this.block;
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  height: 100%;
  padding: 0 !important;
}

.el-aside {
  background-color: #393e42;
  color: #333;
  height: 100vh;
}
.el-menu {
  border-right-width: 0;
}
.el-main {
  color: #333;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 240px;
}
.box_bgd {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 54px;
}
.box_bgd i {
  font-size: 20px;
}
.box_bgd:hover {
  background-color: rgb(203, 215, 230);
}
</style>
————————————————
版权声明：本文为CSDN博主「水星记_」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/Shids_/article/details/112701159
