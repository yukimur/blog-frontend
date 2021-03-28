<template>
    <Row :style="{position: 'fixed', width: '100%',padding: '0 40px',height:'78px',background:'#FFF8DC','z-index':3}">
        <Menu :style="{background: '#FFF8DC',width: '1757px',height:'76px','margin':'0 auto'}" mode="horizontal" theme="light" active-name="1">
            <div class="layout-logo"><a>yukimura</a></div>
            <div class="layout-nav">
                <MenuItem :style="{'padding-top':'12px','font-size':'20px'}" name="home"> 
                    <router-link to="/"><Icon type="md-home" :style="{'margin':'0 4px 0 0'}"/><span>Home</span></router-link>
                </MenuItem>
                <MenuItem :style="{'padding-top':'12px','font-size':'20px'}" name="blog">
                    <router-link to="/blog"><Icon type="ios-book" :style="{'margin':'0 4px 0 0'}"/>博客</router-link>
                </MenuItem>
                <MenuItem :style="{'padding-top':'12px','font-size':'20px'}" name="note">
                    <router-link to="/note"><Icon type="ios-brush" :style="{'margin':'0 4px 0 0'}"/>随记</router-link>
                </MenuItem>
                <MenuItem :style="{'padding-top':'12px','font-size':'20px'}" name="note">
                    <router-link to="/note"><Icon type="ios-brush" :style="{'margin':'0 4px 0 0'}"/>笔记</router-link>
                </MenuItem>
                <MenuItem :style="{'padding-top':'12px','font-size':'20px'}" name="func">
                    <router-link to="/fund"><Icon type="ios-analytics" :style="{'margin':'0 4px 0 0'}"/>基金</router-link>
                </MenuItem>
                <MenuItem :style="{'padding-top':'12px','font-size':'20px'}" name="data">
                    <router-link to="/data"><Icon type="ios-paper" :style="{'margin':'0 4px 0 0'}"/>数据</router-link>
                </MenuItem>
                <div class="avatar">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            <Avatar style="background-color: #87d068" icon="ios-person" size="small"/>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>login</DropdownItem>
                            <DropdownItem>register</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </Menu>
    </Row>
</template>
<style scoped>
    .layout-logo{
        float: left;
        position: relative;
        font-family:fantasy;
        font-size:46px;
        margin-left:18px;
    }
    .layout-logo a{
        color:#39393d;
        vertical-align:sub;
    }
    .avatar{
        padding-top:12px;
        height: inherit;
        line-height: inherit;
        float: left;
        margin-left:85px;
    }
    .layout-nav{
        width: 740px;
        margin: 0 auto;
        margin-right:20px;
        font-family: cursive;
        font-weight: bold;
    }
    a{
        color:#39393d
    }
    .router-link-active{
        color:#2d8cf0
    }
    
</style>
<script>
    export default {
        name: "Nav",
        props: {
            msg: String
        }
    }
</script>