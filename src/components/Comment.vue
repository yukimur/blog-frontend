<template>
    <div class="comment" :style="{width:'100%',margin:'60px auto'}">
        <List class="commentView" border :style="{'border-radius':'0px'}">
            <ListItem class="commentCount" :style="{margin:'40px auto 5px','border-bottom':'1px solid #cbc4c4','font-size':'23px','font-family':'cursive'}">10条评论</ListItem>
            <ListItem :style="{'font-size':'23px'}">抢个沙发~</ListItem>
            <ListItem>
                <span :style="{width:'130px'}">名字：</span>
                <Input v-model="value1" size="large" placeholder="large size" :style="{width:'450px','margin-right':'70px'}" />
                <span :style="{width:'130px'}">邮箱：</span>
                <Input v-model="value1" size="large" placeholder="large size" :style="{width:'450px','margin-right':'70px'}"/>
                <span :style="{width:'130px'}">联系方式：</span>
                <Input v-model="value1" size="large" placeholder="large size" :style="{width:'450px','margin-right':'70px'}"/>
            </ListItem>
            <ListItem>
                <span :style="{width:'130px'}">评论：</span>
            </ListItem>
            <ListItem>
                <Input v-model="value1" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="Enter something..." :style="{display:'block'}"/>
            </ListItem>
            <ListItem>
                <Button>发表</Button>
            </ListItem>
        </List>
        <List class="comments" border :style="{'border-radius':'0px'}">
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
        </List>
    </div>
</template>
<style scoped>
    .comment{
        width:100%;
        background:#f2f2f2;
        display:block;
    }
    .search_row{
        margin:15px 0 15px;
    }
    .search_row span{
        font-family: cursive;
        font-size: 16px;
        margin:0 15px 0 25px;
        line-height:2;
    }
</style>
<script>
    export default {
        name: "Comment",
        props: {
            msg: String
        },
        data(){
            return{
                value1 : '',
                tagList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },],
                keyword: 'Hello World'
            }
        }
    }
</script>