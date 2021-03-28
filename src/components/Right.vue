<template>
    <div class="right">
        <Row class="right-part">
            <Divider orientation="left"><span class="title">最新文章</span></Divider>
            <List border split="false" size="large" :style="{margin:'-15px 0px 8px',border:'0px'}">
                <ListItem><Icon type="ios-leaf" :style="{'margin':'0 4px 0 0'}"/>This is a piece of tex111111111111t.</ListItem>
                <ListItem><Icon type="ios-leaf" :style="{'margin':'0 4px 0 0'}"/>This is a piece of text.</ListItem>
                <ListItem><Icon type="ios-leaf" :style="{'margin':'0 4px 0 0'}"/>This is a piece of text.</ListItem>
                <ListItem><Icon type="ios-leaf" :style="{'margin':'0 4px 0 0'}"/>This is a piece of text.</ListItem>
                <ListItem><Icon type="ios-leaf" :style="{'margin':'0 4px 0 0'}"/>This is a piece of text.</ListItem>
            </List>
        </Row>  
        <Row class="right-part">
        <Divider orientation="left"><span class="title">博文归档</span></Divider>
            <List border split="false" size="large" :style="{margin:'-15px 0px 8px',border:'0px'}">
                <ListItem><Icon type="ios-calendar" :style="{'margin':'0 4px 0 0'}"/>2021年5月</ListItem>
                <ListItem><Icon type="ios-calendar" :style="{'margin':'0 4px 0 0'}"/>2021年5月</ListItem>
                <ListItem><Icon type="ios-calendar" :style="{'margin':'0 4px 0 0'}"/>2021年5月</ListItem>
                <ListItem><Icon type="ios-calendar" :style="{'margin':'0 4px 0 0'}"/>2021年5月</ListItem>
                <ListItem><Icon type="ios-calendar" :style="{'margin':'0 4px 0 0'}"/>2021年5月</ListItem>
            </List>
        </Row>
        <Row class="right-part">
        <Divider orientation="left"><span class="title">博文分类</span></Divider>
            <List border split="false" size="large" :style="{margin:'-15px 0px 8px',border:'0px'}">
                <ListItem><Icon type="ios-navigate" :style="{'margin':'0 4px 0 0'}"/>Django 博客教程 (13)</ListItem>
                <ListItem><Icon type="ios-navigate" :style="{'margin':'0 4px 0 0'}"/>Django 博客教程 (13)</ListItem>
                <ListItem><Icon type="ios-navigate" :style="{'margin':'0 4px 0 0'}"/>Django 博客教程 (13)</ListItem>
                <ListItem><Icon type="ios-navigate" :style="{'margin':'0 4px 0 0'}"/>Django 博客教程 (13)</ListItem>
                <ListItem><Icon type="ios-navigate" :style="{'margin':'0 4px 0 0'}"/>Django 博客教程 (13)</ListItem>
            </List>
        </Row>
        <Row class="right-part">
        <Divider orientation="left"><span class="title">标签云</span></Divider>
            <List border split="false" size="large" :style="{margin:'-15px 0px 8px',border:'0px'}">
                <ListItem><Tag size="large">Large Tag</Tag><Tag size="large">Large Tag</Tag></ListItem>
                <ListItem><Tag size="large">Large Tag</Tag><Tag size="large">Large Tag</Tag></ListItem>
                <ListItem><Tag size="large">Large Tag</Tag><Tag size="large">Large Tag</Tag></ListItem>
            </List>
        </Row>
        <Row class="right-part">
        <Divider orientation="left"><span class="title">网站统计</span></Divider>
            <List border split="false" size="large" :style="{margin:'-15px 0px 8px',border:'0px'}">
                <ListItem>访问次数：1000</ListItem>
                <ListItem>当前访问ip：192.168.12.4</ListItem>
                <ListItem>当前ip访问次数：1000000</ListItem>
                <ListItem>博文数量：100</ListItem>
                <ListItem>博文总浏览量：10000</ListItem>
            </List>
        </Row>
    </div>
</template>

<style scoped> 
.right{
    width:350px;
    height:1900px;
}
.right-part{
    height:340px;
    background: #FFF8DC;
    margin-bottom:30px;
}
.title{
    font-family:cursive;
    font-size:20px;
}
</style>
<script>
    export default {
        name: "Right",
        props: {
            msg: String
        }
    }
</script>